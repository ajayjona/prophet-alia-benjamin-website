import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted py-20 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">Upcoming Events</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Gather with us for worship, fellowship, and special conferences.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 container mx-auto px-4">
        <FadeIn>
            <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-xl">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop" 
                        alt="Conference" 
                        className="h-full w-full object-cover opacity-20 mix-blend-overlay"
                    />
                </div>
                <div className="relative z-10 grid gap-8 lg:grid-cols-2 p-8 md:p-12 lg:p-16 items-center">
                    <div className="space-y-6">
                        <Badge variant="secondary" className="px-3 py-1 text-sm bg-accent text-accent-foreground border-none">
                            Featured Event
                        </Badge>
                        <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Kingdom Arise Conference 2025
                        </h2>
                        <p className="text-lg text-primary-foreground/90 max-w-md">
                            Join us for three days of powerful worship, prophetic impartation, and equipping. You don't want to miss this outpouring!
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row text-sm font-medium">
                            <div className="flex items-center gap-2"><Calendar className="h-5 w-5" /> Aug 15-17, 2025</div>
                            <div className="flex items-center gap-2"><MapPin className="h-5 w-5" /> Main Sanctuary</div>
                        </div>
                        <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 font-bold border-none mt-4">
                            <Link href="/events/kingdom-arise">Register Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </FadeIn>
      </section>

      {/* Upcoming Events List */}
      <section className="py-12 container mx-auto px-4 max-w-5xl">
        <FadeIn>
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Calendar</h3>
        </FadeIn>
        <div className="space-y-6">
            {events.map((event, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                    <Card className="overflow-hidden">
                        <CardContent className="p-0 sm:flex">
                            <div className="bg-muted p-6 sm:w-48 flex flex-col items-center justify-center text-center shrink-0 border-r border-border/50">
                                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{event.month}</span>
                                <span className="text-4xl font-bold text-primary my-1">{event.day}</span>
                                <span className="text-sm text-muted-foreground">{event.time}</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-center gap-2">
                                <h4 className="text-xl font-bold font-serif text-foreground">{event.title}</h4>
                                <p className="text-muted-foreground text-sm flex items-center gap-2">
                                    <MapPin className="h-4 w-4" /> {event.location}
                                </p>
                                <p className="text-muted-foreground mt-2 line-clamp-2">{event.description}</p>
                                <div className="mt-4">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/events/${index}`}>View Details</Link>
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
    month: "NOV",
    day: "05",
    time: "7:00 PM",
    title: "First Wednesday Worship",
    location: "Main Sanctuary",
    description: "A night of extended worship and prayer to seek the face of God together as a family."
  },
  {
    month: "NOV",
    day: "12",
    time: "10:00 AM",
    title: "Women's Brunch: 'Radiant'",
    location: "Fellowship Hall",
    description: "Calling all ladies! Join us for a time of connection, encouragement, and delicious food."
  },
  {
    month: "NOV",
    day: "26",
    time: "6:30 PM",
    title: "Community Thanksgiving Dinner",
    location: "Community Center",
    description: "We are partnering with local shelters to provide a warm meal for those in need."
  }
]
