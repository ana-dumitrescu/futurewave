"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const triggerGlitch = () => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);

            // Random interval between 2s and 8s
            const nextDelay = Math.random() * 6000 + 2000;
            setTimeout(triggerGlitch, nextDelay);
        };

        const timer = setTimeout(triggerGlitch, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>

            {/* Glitch Layer 1 (Red/Cyan offset) */}
            <span
                className={cn(
                    "absolute top-0 left-0 -z-10 w-full h-full text-neon-pink opacity-0 transition-opacity duration-100",
                    (isGlitching) && "opacity-70 animate-pulse translate-x-[2px]"
                )}
            >
                {text}
            </span>

            {/* Glitch Layer 2 (Blue/Purple offset) */}
            <span
                className={cn(
                    "absolute top-0 left-0 -z-10 w-full h-full text-neon-cyan opacity-0 transition-opacity duration-100",
                    (isGlitching) && "opacity-70 animate-pulse -translate-x-[2px]"
                )}
            >
                {text}
            </span>
        </div>
    );
}
