"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading title="Tech Stack" subtitle="Expertise" />

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {portfolioData.skills.map((skill, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={skill.name}
                                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-cyan/50 hover:bg-white/10 transition-all flex items-center gap-4 group"
                            >
                                <div className="p-2 rounded-lg bg-black text-neon-cyan group-hover:text-neon-purple transition-colors">
                                    <skill.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{skill.name}</h4>
                                    <div className="text-xs text-gray-500">{skill.category}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
