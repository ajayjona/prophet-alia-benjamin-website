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
      <section className="bg-muted py-20 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
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
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Doe" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="topic">Topic</Label>
                        <select id="topic" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                            <option>General Inquiry</option>
                            <option>Prayer Request</option>
                            <option>Speaking Invite</option>
                            <option>Media/Press</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                    </div>
                    <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
            </FadeIn>

            {/* Contact Info & Map */}
            <FadeIn delay={0.2} className="space-y-12">
                <div className="space-y-6">
                    <h2 className="text-2xl font-serif font-bold text-primary">Get in Touch</h2>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-3 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Visit Us</h3>
                                <p className="text-muted-foreground mt-1">123 Grace Avenue<br/>Spiritual City, SC 29000</p>
                                <p className="text-sm text-primary mt-2 font-medium">Sunday Service: 10:00 AM</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-3 text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Call Us</h3>
                                <p className="text-muted-foreground mt-1">(555) 123-4567</p>
                                <p className="text-sm text-muted-foreground">Mon-Fri, 9am - 5pm EST</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-3 text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email Us</h3>
                                <p className="text-muted-foreground mt-1">info@pabministries.com</p>
                                <p className="text-muted-foreground">prayer@pabministries.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                {/* Map Placeholder */}
                <div className="w-full h-[300px] bg-muted rounded-xl relative overflow-hidden flex items-center justify-center border">
                    <div className="absolute inset-0 grayscale opacity-40">
                         {/* This would be an iframe in a real production site */}
                         <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135742-a98fcad3068dc?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                    <Button variant="secondary" className="relative z-10 shadow-lg pointer-events-none">
                        View on Google Maps
                    </Button>
                </div>
            </FadeIn>
        </div>
      </section>
    </div>
  )
}
