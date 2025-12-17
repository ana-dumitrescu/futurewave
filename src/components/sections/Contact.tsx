"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeading title="Let's Build the Future" subtitle="Contact" />
                        <p className="text-lg text-gray-400 mb-8 max-w-md">
                            Ready to start a project or just want to say hi?
                            I'm always open to discussing new ideas and opportunities.
                        </p>
                        <div className="flex gap-4">
                            {portfolioData.personal.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-neon-cyan hover:text-black hover:border-neon-cyan transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <GlassCard className="p-8">
                        <form
                            action="https://formsubmit.co/anaandreeadumitrescu@gmail.com"
                            method="POST"
                            className="space-y-4"
                        >
                            {/* Honeypot spam prevention */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            {/* Disable captcha page */}
                            <input type="hidden" name="_captcha" value="false" />
                            {/* Redirect back to site after submission */}
                            <input type="hidden" name="_next" value="http://localhost:3000/#contact" />

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Name</label>
                                <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Email</label>
                                <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea name="message" rows={4} required className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Your message..." />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
