"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
    return (
        <section id="about" className="py-24 relative">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading title="About Me" subtitle="Profile" />

                    <GlassCard className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 border-4 border-white/10 shrink-0 overflow-hidden relative">
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="space-y-4 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white">
                                    {portfolioData.personal.name}
                                </h3>
                                <p className="text-neon-cyan font-medium tracking-wide">
                                    {portfolioData.personal.title}
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {portfolioData.personal.about}
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
