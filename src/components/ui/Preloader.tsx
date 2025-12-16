"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const bootSequence = [
    "INITIALIZING FUTUREWAVE KERNEL...",
    "LOADING ASSETS...",
    "ESTABLISHING NEURAL LINK...",
    "SYSTEM READY."
];

export function Preloader() {
    const [index, setIndex] = useState(0);
    const [complete, setComplete] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev >= bootSequence.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => setComplete(true), 500);
                    return prev;
                }
                return prev + 1;
            });
        }, 400);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (complete) {
            setTimeout(() => setVisible(false), 500); // Fade out delay
        }
    }, [complete]);

    if (!visible) return null;

    return (
        <AnimatePresence>
            {!complete || visible ? (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center font-mono text-neon-cyan"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="w-64">
                        {bootSequence.slice(0, index + 1).map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="mb-2 text-sm md:text-base"
                            >
                                <span className="opacity-50 mr-2">{`>`}</span>
                                {text}
                            </motion.div>
                        ))}
                        <motion.div
                            className="h-1 bg-neon-cyan mt-4"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
