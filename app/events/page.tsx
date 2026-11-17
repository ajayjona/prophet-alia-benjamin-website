import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, MessageCircle, ArrowRight, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { ALBUMS } from "@/lib/albums"

export default function EventsPage() {
  const posterAlbum = ALBUMS.find((a) => a.id === "fellowship_poster")
  const fellowshipAlbum = ALBUMS.find((a) => a.id === "fellowship")
  const featuredPosters = posterAlbum ? posterAlbum.photos.slice(0, 4) : []

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-surface-muted/40 border-b border-border py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="inline-block rounded-lg bg-surface border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Gatherings & Fellowships
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">
              Fellowships & Events
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Join us for powerful worship, prophetic impartation, and divine fellowship. Physical venues are announced prior to each service.
            </p>
            <div className="pt-4 flex justify-center">
              <Button asChild size="lg" className="font-bold gap-2 shadow-sm">
                <a 
                  href="https://wa.me/256780685120" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Venue Updates on WhatsApp
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Event with Real Poster Visual */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-primary text-surface shadow-lg border border-accent/30">
            <div className="grid lg:grid-cols-12 gap-8 items-center p-6 md:p-10 lg:p-12">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                  Upcoming Fellowship Gathering
                </Badge>
                <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl md:text-5xl text-surface">
                  Prophetic Revival & Impartation Service
                </h2>
                <p className="text-base sm:text-lg text-surface/90 max-w-xl leading-relaxed">
                  Prepare for an encounter with the Holy Spirit. Prophet Alia Benjamin will be declaring the mind of God, praying for the sick, and ministering with apostolic authority.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-surface/95 pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent shrink-0" /> 
                    <span>Fellowship Dates Announced Bi-Weekly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent shrink-0" /> 
                    <span>Venue Communicated via WhatsApp</span>
                  </div>
                </div>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="font-bold shadow-md">
                    <a href="https://wa.me/256780685120" target="_blank" rel="noopener noreferrer">
                      Join Fellowship WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-surface/40 text-surface hover:bg-surface/10 hover:text-surface">
                    <Link href="/gallery">
                      View Fellowship Photos
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Poster Preview */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-xs sm:max-w-sm rounded-xl overflow-hidden shadow-2xl border-2 border-accent/40 group">
                  <img 
                    src="/fellowship_poster/WhatsApp%20Image%202026-09-30%20at%201.58.36%20AM.jpeg" 
                    alt="Official Fellowship Poster"
                    className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-primary-dark/90 p-3 text-center text-xs text-accent font-semibold">
                    Official Fellowship Banner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Past Fellowship Posters & Themes */}
      <section className="py-12 md:py-16 bg-surface-muted/30 border-t border-b border-border">
        <div className="container mx-auto px-4">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-block rounded-lg bg-surface border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Archives & Themes
              </div>
              <h2 className="text-3xl font-bold font-serif text-primary">
                Past Fellowship Posters
              </h2>
              <p className="text-muted text-sm sm:text-base max-w-xl mt-1">
                Visual reminders of God's power throughout our previous fellowship services and conferences.
              </p>
            </div>
            <Button asChild variant="outline" className="self-start md:self-auto gap-2">
              <Link href="/gallery">
                View All Albums ({ALBUMS.reduce((acc, a) => acc + a.photos.length, 0)} Photos) <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredPosters.map((poster, i) => (
              <FadeIn key={poster.src + i} delay={i * 0.1}>
                <Link href="/gallery" className="group block relative aspect-3/4 rounded-xl overflow-hidden border border-border shadow-xs hover:border-accent/70 hover:shadow-md transition-all">
                  <img 
                    src={poster.src} 
                    alt={poster.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-xs text-surface font-medium flex items-center gap-1">
                      <ImageIcon className="h-3.5 w-3.5 text-accent" /> Click to view in Gallery
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Gatherings Schedule */}
      <section className="py-16 container mx-auto px-4 max-w-5xl">
        <FadeIn className="text-center space-y-3 mb-10">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary">Fellowship Schedule</h3>
          <p className="text-muted text-sm max-w-xl mx-auto">
            Stay tuned to our announcements for exact venue pins and broadcast streams.
          </p>
        </FadeIn>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="overflow-hidden bg-surface border border-border shadow-xs hover:border-accent/60 transition-colors">
                <CardContent className="p-0 sm:flex">
                  <div className="bg-surface-muted p-6 sm:w-48 flex flex-col items-center justify-center text-center shrink-0 border-r border-border">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider">{event.month}</span>
                    <span className="text-3xl font-bold text-primary my-1">{event.day}</span>
                    <span className="text-xs text-muted">{event.time}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-xl font-bold font-serif text-primary">{event.title}</h4>
                      <Badge variant="outline" className="text-[10px] bg-surface-muted text-primary border-border">
                        {event.tag}
                      </Badge>
                    </div>
                    <p className="text-muted text-sm flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent shrink-0" /> {event.location}
                    </p>
                    <p className="text-muted mt-2 text-sm leading-relaxed">{event.description}</p>
                    <div className="mt-4 flex gap-3">
                      <Button size="sm" asChild>
                        <a href="https://wa.me/256780685120" target="_blank" rel="noopener noreferrer">
                          Inquire on WhatsApp
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" target="_blank" rel="noopener noreferrer">
                          Watch Broadcast
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}

const events = [
  {
    month: "ANNOUNCED",
    day: "LIVE",
    time: "Weekly Broadcasts",
    title: "Prophetic Live Broadcast & Teachings",
    tag: "Online",
    location: "Official YouTube Channel (@prophetaliabenjamin)",
    description: "Prophet Alia Benjamin brings real-time prophetic declarations, global warnings, and Bible teachings directly to believers worldwide."
  },
  {
    month: "UPCOMING",
    day: "FELLOWSHIP",
    time: "Weekend Service",
    title: "Gathering of Saints Fellowship",
    tag: "Physical Gathering",
    location: "Venue Announced via WhatsApp (+256 780 685 120)",
    description: "Anointed in-person fellowship gathering of worship, deliverance, and divine encounter. Venue locations are shared directly in advance."
  },
  {
    month: "SPECIAL",
    day: "OUTREACH",
    time: "Community Mission",
    title: "School & Community Evangelical Outreach",
    tag: "Outreach",
    location: "Selected Communities & Secondary Schools",
    description: "Reaching youth, students, and local communities with the love of Christ, humanitarian support, and the Gospel."
  }
]
