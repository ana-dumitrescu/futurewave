"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

export function SectionHeading({ title, subtitle, center = false }: SectionHeadingProps) {
    return (
        <div className={`mb-12 ${center ? "text-center" : ""}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-neon-cyan text-sm tracking-widest uppercase mb-2 block font-medium"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={`h-1 bg-gradient-to-r from-neon-purple to-neon-cyan w-24 rounded-full ${center ? "mx-auto" : ""}`}
            />
        </div>
    );
}
