"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const COUNT = 2000;

function ParticleWave() {
    const ref = useRef<THREE.Points>(null!);

    const positions = useMemo(() => {
        const positions = new Float32Array(COUNT * 3);
        for (let i = 0; i < COUNT; i++) {
            // x: spread wide
            positions[i * 3] = (Math.random() - 0.5) * 15;
            // y: flat plane initially
            positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
            // z: depth
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useFrame((state) => {
        const { clock, camera, pointer } = state; // pointer gives normalized mouse coordinates (-1 to 1)
        const t = clock.getElapsedTime() * 0.5;

        // Scroll interaction
        const scrollY = window.scrollY;
        const scrollProgress = Math.min(scrollY / 5000, 1);

        if (ref.current) {
            const positions = ref.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < COUNT; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const z = positions[i3 + 2];

                // Wave equation - smooth sine wave
                const amplitude = 1.5 + (scrollProgress * 2);
                const y = Math.sin(x * 0.5 + t) * Math.cos(z * 0.5 + t) * amplitude;

                positions[i3 + 1] = y;
            }
            ref.current.geometry.attributes.position.needsUpdate = true;

            // Global Rotation + Parallax
            // Base rotation from time and scroll
            const baseRotY = t * 0.05 + (scrollY * 0.0002);
            const baseRotX = (scrollY * 0.0005);

            // Add mouse parallax (pointer.x/y are -1 to 1)
            // We use lerp for smoothness if we had state, but here simple addition works for instant response
            const parallaxX = pointer.x * 0.2; // Max rotation 0.2 rad
            const parallaxY = pointer.y * 0.2;

            ref.current.rotation.y = baseRotY + parallaxX;
            ref.current.rotation.x = baseRotX - parallaxY; // Invert Y for natural feel

            // Camera movement - fly through
            camera.position.z = 8 - (scrollY * 0.005);
            camera.position.y = 2 + (scrollY * 0.002);
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00f3ff"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

export default function HeroBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 2, 8], fov: 60 }}
                gl={{ preserveDrawingBuffer: false }}
                eventSource={typeof document !== 'undefined' ? document.body : undefined}
                eventPrefix="client"
            >
                <fog attach="fog" args={['#030305', 5, 20]} />
                <ParticleWave />
            </Canvas>
        </div>
    );
}
