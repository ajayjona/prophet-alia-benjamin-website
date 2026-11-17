import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"

const timelineEvents = [
  {
    year: "2015",
    title: "The Beginning",
    description: "Prophet Alia Benjamin ministries was founded with a small prayer group in a living room."
  },
  {
    year: "2018",
    title: "First Public Service",
    description: "We launched our first public Sunday service in the downtown community center."
  },
  {
    year: "2023",
    title: "Global Reach & Fellowship Gatherings",
    description: "Expanded our worldwide online broadcasts on YouTube and social media, gathering believers at announced fellowship venues."
  }
]

const leaders = [
  {
    name: "Prophet Alia Benjamin",
    role: "Prophet & Spiritual Leader",
    bio: "Visionary leader passionate about declaring the prophetic Word of the Lord, equipping believers, and awakening nations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
  },
  {
    name: "Pastor Sarah James",
    role: "Executive Pastor",
    bio: "Oversees the daily operations and discipleship pathways of the ministry.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop"
  },
  {
    name: "Min. David Cohen",
    role: "Worship Director",
    bio: "Leads our community into the throne room of grace through prophetic worship.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-surface-muted/40 border-b border-border py-20 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">Who We Are</h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                A community dedicated to the pursuit of God's presence and the authentic expression of His love.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 container mx-auto px-4">
        <FadeIn>
            <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Our Journey</h2>
        </FadeIn>
        <div className="relative border-l border-accent/40 ml-4 md:ml-12 space-y-12 pl-4 md:pl-0">
          {timelineEvents.map((event, index) => (
            <FadeIn key={index} delay={index * 0.1}>
                <div className="relative pl-8 md:pl-12">
                <span className="absolute -left-[22px] md:-left-[5px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                    <span className="text-sm font-bold text-accent uppercase tracking-wider">{event.year}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground">{event.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{event.description}</p>
                </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-surface-muted/30 border-t border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
              <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">What We Believe</h2>
              <Accordion type="single" collapsible className="w-full bg-surface rounded-lg shadow-xs border border-border px-6">
                <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary">The Scriptures</AccordionTrigger>
                <AccordionContent className="text-muted leading-relaxed">
                    We believe the Bible is the inspired, only infallible, authoritative Word of God. (2 Timothy 3:16)
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary">The Trinity</AccordionTrigger>
                <AccordionContent className="text-muted leading-relaxed">
                    We believe that there is one God, eternally existent in three persons: Father, Son, and Holy Spirit. (Matthew 28:19)
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary">Salvation</AccordionTrigger>
                <AccordionContent className="text-muted leading-relaxed">
                    We believe that salvation is a gift of God's grace, received through faith in Jesus Christ alone. (Ephesians 2:8-9)
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary">The Holy Spirit</AccordionTrigger>
                <AccordionContent className="text-muted leading-relaxed">
                    We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life. (Romans 8:13-14)
                </AccordionContent>
                </AccordionItem>
              </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 container mx-auto px-4">
        <FadeIn>
            <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Our Leadership</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <FadeIn key={index} delay={index * 0.1}>
                <Card className="overflow-hidden bg-surface border border-border shadow-xs hover:border-accent/60 transition-colors h-full">
                <div className="aspect-square relative bg-surface-muted">
                    <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                    />
                </div>
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl font-serif text-foreground">{leader.name}</CardTitle>
                    <div className="text-sm font-semibold text-accent uppercase tracking-wide">{leader.role}</div>
                </CardHeader>
                <CardContent className="text-center text-muted text-sm pb-6 leading-relaxed">
                    {leader.bio}
                </CardContent>
                </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}
