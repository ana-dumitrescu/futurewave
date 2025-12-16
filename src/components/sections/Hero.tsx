"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlitchText } from "@/components/ui/GlitchText";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pointer-events-none">


            <div className="container mx-auto px-4 z-10 text-center pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block mb-4">
                        <span className="px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                            Next Gen Portfolio
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 flex justify-center items-center gap-2">
                        Future<GlitchText text="Wave" className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan text-glow" />
                    </h1>

                    <div className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed min-h-[60px]">
                        <TextReveal delay={0.5}>
                            Crafting immersive digital experiences that transcend the ordinary.
                        </TextReveal>
                        <br />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-white font-medium block mt-2"
                        >
                            Full-Stack Developer
                        </motion.span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#projects">
                            <Button size="lg" className="group">
                                Explore Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button variant="secondary" size="lg">
                                Contact Me
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
            >
                <ChevronDown />
            </motion.div>
        </section>
    );
}
