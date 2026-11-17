import { Hero } from "@/components/sections/hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin, PlayCircle } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Latest Sermon Highlight */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn className="space-y-6">
              <div className="inline-block rounded-lg bg-surface-muted border border-border px-3 py-1 text-sm font-semibold text-primary">
                Latest Message
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary">
                Walking in Divine Purpose
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Discover how to align your daily walk with God's eternal plan. In this powerful message, Prophet Alia Benjamin breaks down the keys to understanding your unique calling.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <a 
                    href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch on YouTube
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/sermons">
                    View All Messages <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            
            {/* Video Placeholder Linking Directly to YouTube */}
            <FadeIn delay={0.2}>
              <a 
                href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative aspect-video rounded-xl overflow-hidden shadow-md bg-surface-muted border border-border group block cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-primary-dark/20 group-hover:bg-primary-dark/30 transition-colors z-10">
                     <PlayCircle className="h-16 w-16 text-accent group-hover:scale-110 transition-transform drop-shadow-md" />
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1543791959-12b3f543281a?q=80&w=2670&auto=format&fit=crop" 
                    alt="Sermon Thumbnail" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-surface-muted/30 border-t border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <FadeIn>
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary">
                Our Mission
             </h2>
             <p className="mx-auto max-w-[800px] text-lg md:text-xl text-foreground/90 font-serif italic leading-relaxed mt-4">
                "To awaken a generation to the reality of God's love, empowering them to walk in identity, authority, and intimacy with the Holy Spirit."
             </p>
          </FadeIn>
          
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 pt-8">
            <FadeIn delay={0.1}>
                <Card className="bg-surface border border-border shadow-xs hover:border-accent/60 transition-colors h-full">
                    <CardContent className="pt-6 text-center space-y-3">
                        <div className="mx-auto rounded-full bg-surface-muted border border-border w-12 h-12 flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-primary">Gather</h3>
                        <p className="text-muted text-sm leading-relaxed">Building authentic community where everyone belongs.</p>
                    </CardContent>
                </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
                <Card className="bg-surface border border-border shadow-xs hover:border-accent/60 transition-colors h-full">
                    <CardContent className="pt-6 text-center space-y-3">
                        <div className="mx-auto rounded-full bg-surface-muted border border-border w-12 h-12 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-primary">Grow</h3>
                        <p className="text-muted text-sm leading-relaxed">Discipleship that transforms hearts and minds.</p>
                    </CardContent>
                </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
                 <Card className="bg-surface border border-border shadow-xs hover:border-accent/60 transition-colors h-full">
                    <CardContent className="pt-6 text-center space-y-3">
                        <div className="mx-auto rounded-full bg-surface-muted border border-border w-12 h-12 flex items-center justify-center">
                            <ArrowRight className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-primary">Go</h3>
                        <p className="text-muted text-sm leading-relaxed">Equipping believers to impact their world for Christ.</p>
                    </CardContent>
                </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
