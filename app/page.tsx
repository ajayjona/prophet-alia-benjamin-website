import { Hero } from "@/components/sections/hero"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle, Youtube, MessageCircle } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { VideoCard } from "@/components/video-card"
import { FEATURED_VIDEO, YOUTUBE_VIDEOS } from "@/lib/videos"
import { ALBUMS } from "@/lib/albums"

export default function Home() {
  const recentProphecies = YOUTUBE_VIDEOS.slice(1, 4)
  const fellowshipAlbum = ALBUMS.find((a) => a.id === "fellowship")
  const outreachAlbum = ALBUMS.find((a) => a.id === "outreaches")
  const schoolAlbum = ALBUMS.find((a) => a.id === "school_outreach")

  const galleryShowcase = [
    fellowshipAlbum?.photos[0],
    fellowshipAlbum?.photos[4],
    outreachAlbum?.photos[0],
    schoolAlbum?.photos[0]
  ].filter(Boolean)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Cinematic Minimalist Hero */}
      <Hero />

      {/* 2. Editorial Mandate Statement */}
      <section className="py-20 md:py-28 container mx-auto px-4 md:px-6 text-center">
        <FadeIn className="max-w-3xl mx-auto space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            The Prophetic Mandate
          </p>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-medium leading-snug">
            "To awaken a generation to the reality of God’s love, empowering them to walk in identity, authority, and intimacy with the Holy Spirit."
          </blockquote>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-6" />
        </FadeIn>
      </section>

      {/* 3. Featured Prophetic Word & Broadcasts */}
      <section className="py-16 md:py-24 bg-surface-muted/30 border-t border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                Broadcasts
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                Prophecies & Teachings
              </h2>
            </div>
            <Button asChild variant="outline" className="self-start md:self-auto gap-2 rounded-full">
              <Link href="/sermons">
                All Releases <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Main Featured Video Spotlight */}
            <FadeIn className="lg:col-span-7 flex flex-col justify-between bg-surface rounded-2xl overflow-hidden border border-border shadow-xs hover:border-accent/60 transition-all">
              <a 
                href={FEATURED_VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video w-full overflow-hidden bg-primary-dark group cursor-pointer block"
              >
                <div className="absolute inset-0 bg-primary-dark/25 group-hover:bg-primary-dark/10 transition-colors z-10 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-accent text-primary-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PlayCircle className="h-9 w-9" />
                  </div>
                </div>
                <img 
                  src={FEATURED_VIDEO.thumbnail} 
                  alt={FEATURED_VIDEO.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </a>

              <div className="p-6 md:p-8 space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary leading-tight">
                  <a href={FEATURED_VIDEO.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    {FEATURED_VIDEO.title}
                  </a>
                </h3>
                <p className="text-muted text-base leading-relaxed">
                  {FEATURED_VIDEO.description}
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <Button asChild className="rounded-full px-6 font-semibold shadow-xs">
                    <a href={FEATURED_VIDEO.url} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Youtube className="h-4 w-4" /> Watch on YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* Side 3 Video Stack */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {recentProphecies.map((video, i) => (
                <FadeIn key={video.id} delay={i * 0.1} className="h-full">
                  <VideoCard video={video} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cinematic Widescreen Studio Banner Break */}
      <section className="relative w-full overflow-hidden bg-primary-dark border-b border-border/20 py-20 md:py-28">
        {/* Full-bleed banner photo background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter contrast-125"
          style={{ backgroundImage: 'url("/prophet/banner.jpeg")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/70" />

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <FadeIn className="max-w-2xl space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Prophet Alia Benjamin
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-surface tracking-tight leading-tight">
              Anointed for the Nations. Rooted in the Spirit.
            </h2>
            <p className="text-surface/80 text-lg leading-relaxed font-light">
              We gather as a body of believers online and in announced fellowship spaces to seek God's face, witness miracles, and walk in kingdom power.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 font-bold shadow-lg">
                <a href="https://wa.me/256780685120" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="h-5 w-5" /> Receive Fellowship Updates
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-surface/20 text-surface hover:bg-surface/10 hover:text-surface">
                <Link href="/about">
                  Learn More About the Ministry
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Pure Photography Mosaic (No cheesy badges, clean modern look) */}
      <section className="py-20 md:py-28 container mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">
              Ministry In Motion
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              Atmospheres of Fellowship
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto gap-2 rounded-full">
            <Link href="/gallery">
              Explore All Albums <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryShowcase.map((photo, i) => (
            photo && (
              <FadeIn key={photo.src + i} delay={i * 0.1}>
                <Link 
                  href="/gallery"
                  className="group relative aspect-4/5 block rounded-2xl overflow-hidden bg-surface-muted shadow-xs hover:shadow-xl transition-all duration-500"
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-surface text-sm font-medium flex items-center gap-2">
                      View Gallery <ArrowRight className="h-3.5 w-3.5 text-accent" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            )
          ))}
        </div>
      </section>

      {/* 6. Minimalist Fellowship Notice & Connect Banner */}
      <section className="py-16 md:py-20 bg-surface-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-primary-dark text-surface p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            
            <FadeIn className="space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-surface">
                Join the Movement
              </h3>
              <p className="text-surface/80 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
                Our fellowship venues are announced prior to each gathering, and services are streamed globally. Connect directly on WhatsApp to never miss an announcement.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 h-12 font-bold shadow-md">
                  <a href="https://wa.me/256780685120" target="_blank" rel="noopener noreferrer" className="gap-2">
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 border-surface/20 text-surface hover:bg-surface/10 hover:text-surface">
                  <Link href="/give">
                    Partner With Us
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
