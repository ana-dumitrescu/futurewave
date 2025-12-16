"use client";

import { portfolioData } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-4">
                <SectionHeading title="Selected Works" subtitle="Portfolio" center />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project) => (
                        <GlassCard key={project.id} className="flex flex-col h-full group">
                            <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity`}>
                                <ArrowUpRight className="text-white w-6 h-6" />
                            </div>

                            <div className="h-48 mb-6 rounded-lg overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-50`} />
                                )}
                                {(project as any).wip && (
                                    <div className="absolute top-3 right-3 px-3 py-1 bg-amber-500/90 text-black text-xs font-bold rounded-full backdrop-blur-sm animate-pulse">
                                        Work in Progress
                                    </div>
                                )}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-neon-cyan border border-white/10">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button size="sm" variant="outline" className="w-full">
                                        Demo
                                    </Button>
                                </a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Button size="sm" variant="ghost" className="px-3">
                                        <Github className="w-5 h-5" />
                                    </Button>
                                </a>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
