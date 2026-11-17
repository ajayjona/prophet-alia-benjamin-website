"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-surface-muted/40 border-b border-border py-20 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                We would love to hear from you. Reach out with prayer requests, questions, or just to say hello.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <FadeIn className="space-y-8">
                <h2 className="text-2xl font-serif font-bold text-primary">Send a Message</h2>
                <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-foreground font-medium">First Name</Label>
                            <Input id="first-name" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-foreground font-medium">Last Name</Label>
                            <Input id="last-name" placeholder="Doe" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="topic" className="text-foreground font-medium">Topic</Label>
                        <select id="topic" className="flex h-10 w-full rounded-md border border-border bg-surface text-foreground px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50">
                            <option>General Inquiry</option>
                            <option>Prayer Request</option>
                            <option>Speaking Invite</option>
                            <option>Media/Press</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                        <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                    </div>
                    <Button type="submit" size="lg" className="w-full font-bold shadow-sm">Send Message</Button>
                </form>
            </FadeIn>

            {/* Contact Info & Channels */}
            <FadeIn delay={0.2} className="space-y-10">
                <div className="space-y-6">
                    <h2 className="text-2xl font-serif font-bold text-primary">Get in Touch</h2>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="rounded-full bg-surface-muted border border-border p-3 text-accent shrink-0">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-lg text-primary">Fellowship & Gatherings</h3>
                                <p className="text-muted mt-1 leading-relaxed">
                                    The ministry operates globally online with no physical office. Fellowship venues are announced per event.
                                </p>
                                <p className="text-sm text-accent mt-2 font-semibold">Join Live on YouTube & Social Channels</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="rounded-full bg-surface-muted border border-border p-3 text-accent shrink-0">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-lg text-primary">WhatsApp & Phone</h3>
                                <p className="text-muted mt-1">+256 780 685 120</p>
                                <a 
                                    href="https://wa.me/256780685120" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light font-semibold mt-1 transition-colors"
                                >
                                    Chat on WhatsApp &rarr;
                                </a>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <div className="rounded-full bg-surface-muted border border-border p-3 text-accent shrink-0">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-lg text-primary">Email Us</h3>
                                <a 
                                    href="mailto:prophetaliabenjamin@gmail.com" 
                                    className="text-muted hover:text-primary transition-colors block mt-1"
                                >
                                    prophetaliabenjamin@gmail.com
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                
                {/* Official Online Channels Card */}
                <div className="rounded-2xl bg-surface border border-border p-8 shadow-xs space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-serif font-bold text-xl text-primary">Follow Our Official Channels</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Stay connected for live prophecies, prophetic alerts, and sermon broadcasts.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a 
                            href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface-muted/40 hover:bg-surface-muted hover:border-accent transition-colors"
                        >
                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-accent shrink-0">
                                <Mail className="h-4 w-4 hidden" />
                                <span className="font-bold text-xs">YT</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-foreground">YouTube</div>
                                <div className="text-xs text-muted">Prophecies & Teachings</div>
                            </div>
                        </a>
                        <a 
                            href="https://wa.me/256780685120" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface-muted/40 hover:bg-surface-muted hover:border-accent transition-colors"
                        >
                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-accent shrink-0">
                                <span className="font-bold text-xs">WA</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-foreground">WhatsApp</div>
                                <div className="text-xs text-muted">+256 780 685 120</div>
                            </div>
                        </a>
                        <a 
                            href="https://www.tiktok.com/@prophetaliabenjamin?_r=1&_t=ZS-9A9IgNa0PBJ" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface-muted/40 hover:bg-surface-muted hover:border-accent transition-colors"
                        >
                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-accent shrink-0">
                                <span className="font-bold text-xs">TT</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-foreground">TikTok</div>
                                <div className="text-xs text-muted">@prophetaliabenjamin</div>
                            </div>
                        </a>
                        <a 
                            href="https://www.instagram.com/prophet_aliabenjamin?stkn=bWVjbGtwbTVncGNk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface-muted/40 hover:bg-surface-muted hover:border-accent transition-colors"
                        >
                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-accent shrink-0">
                                <span className="font-bold text-xs">IG</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-foreground">Instagram</div>
                                <div className="text-xs text-muted">@prophet_aliabenjamin</div>
                            </div>
                        </a>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>
    </div>
  )
}
