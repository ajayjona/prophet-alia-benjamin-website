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
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn className="space-y-6">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">
                Latest Message
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary">
                Walking in Divine Purpose
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover how to align your daily walk with God's eternal plan. In this powerful message, Prophet Alia Benjamin breaks down the keys to understanding your unique calling.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/sermons/latest">
                    <PlayCircle className="h-5 w-5" />
                    Watch Now
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="gap-2">
                  <Link href="/sermons">
                    View Sermon Library <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            
            {/* Video Placeholder */}
            <FadeIn delay={0.2} className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-muted border">
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                     <PlayCircle className="h-16 w-16 text-primary opacity-80" />
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1543791959-12b3f543281a?q=80&w=2670&auto=format&fit=crop" 
                    alt="Sermon Thumbnail" 
                    className="object-cover w-full h-full"
                />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 text-center space-y-8">
          <FadeIn>
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary">
                Our Mission
             </h2>
             <p className="mx-auto max-w-[800px] text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
                "To awaken a generation to the reality of God's love, empowering them to walk in identity, authority, and intimacy with the Holy Spirit."
             </p>
          </FadeIn>
          
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 pt-8">
            <FadeIn delay={0.1}>
                <Card className="bg-background/60 backdrop-blur-none border-none shadow-sm h-full">
                    <CardContent className="pt-6 text-center space-y-2">
                        <div className="mx-auto rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-primary">Gather</h3>
                        <p className="text-muted-foreground">Building authentic community where everyone belongs.</p>
                    </CardContent>
                </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
                <Card className="bg-background/60 backdrop-blur-none border-none shadow-sm h-full">
                    <CardContent className="pt-6 text-center space-y-2">
                        <div className="mx-auto rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-primary">Grow</h3>
                        <p className="text-muted-foreground">Discipleship that transforms hearts and minds.</p>
                    </CardContent>
                </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
                 <Card className="bg-background/60 backdrop-blur-none border-none shadow-sm h-full">
                    <CardContent className="pt-6 text-center space-y-2">
                        <div className="mx-auto rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                            <ArrowRight className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-primary">Go</h3>
                        <p className="text-muted-foreground">Equipping believers to impact their world for Christ.</p>
                    </CardContent>
                </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
