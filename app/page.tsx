import { Hero } from "@/components/sections/hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin, PlayCircle, Youtube } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { VideoCard } from "@/components/video-card"
import { FEATURED_VIDEO, YOUTUBE_VIDEOS } from "@/lib/videos"

export default function Home() {
  const recentProphecies = YOUTUBE_VIDEOS.slice(1, 4)

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Latest Featured Message Highlight */}
      <section className="py-16 md:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn className="space-y-6">
              <div className="inline-block rounded-lg bg-surface-muted border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Featured Prophetic Release
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary">
                {FEATURED_VIDEO.title}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {FEATURED_VIDEO.description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Button asChild size="lg" className="gap-2 shadow-sm font-bold">
                  <a 
                    href={FEATURED_VIDEO.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-5 w-5" />
                    Watch on YouTube
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/sermons">
                    All Prophecies & Teachings <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            
            {/* Real YouTube Video Thumbnail Linking Directly */}
            <FadeIn delay={0.2}>
              <a 
                href={FEATURED_VIDEO.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative aspect-video rounded-xl overflow-hidden shadow-md bg-surface-muted border border-border group block cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-primary-dark/30 group-hover:bg-primary-dark/20 transition-colors z-10">
                  <PlayCircle className="h-16 w-16 text-accent group-hover:scale-110 transition-transform drop-shadow-md" />
                </div>
                <img 
                  src={FEATURED_VIDEO.thumbnail} 
                  alt={FEATURED_VIDEO.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute bottom-3 left-3 z-20 bg-primary-dark/80 text-surface text-xs px-3 py-1 rounded-md font-medium backdrop-blur-xs flex items-center gap-1.5">
                  <Youtube className="h-3.5 w-3.5 text-accent" /> Official YouTube Video
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Recent Prophecies & Broadcasts Grid */}
      <section className="py-16 md:py-20 bg-surface-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-block rounded-lg bg-surface border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Recent Broadcasts
              </div>
              <h2 className="text-3xl font-bold tracking-tight font-serif text-primary sm:text-4xl">
                Prophetic Words & Warnings
              </h2>
              <p className="text-muted text-base max-w-xl mt-2">
                Stay spiritually aligned and informed. Watch recent revelations released to the nations.
              </p>
            </div>
            <Button asChild variant="outline" className="self-start md:self-auto gap-2">
              <Link href="/sermons">
                View All Prophecies <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentProphecies.map((video, i) => (
              <FadeIn key={video.id} delay={i * 0.1}>
                <VideoCard video={video} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
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
                        <p className="text-muted text-sm leading-relaxed">Connecting believers worldwide through online broadcasts and announced fellowship venues.</p>
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
                        <p className="text-muted text-sm leading-relaxed">Discipleship and spiritual maturity that transforms hearts and builds faith.</p>
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
                        <p className="text-muted text-sm leading-relaxed">Equipping believers with the prophetic word to impact their world for Christ.</p>
                    </CardContent>
                </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
