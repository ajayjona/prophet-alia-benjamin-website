import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, Headphones, PlayCircle, Video } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"

export default function SermonsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted py-20 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">Sermon Library</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of life-changing messages and teachings.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <FadeIn>
            <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">All Messages</TabsTrigger>
                <TabsTrigger value="sunday">Sunday Service</TabsTrigger>
                <TabsTrigger value="series">Series</TabsTrigger>
                </TabsList>
            </div>
          </FadeIn>

          <TabsContent value="all" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sermons.map((sermon, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                    <SermonCard sermon={sermon} />
                </FadeIn>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sunday" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {sermons.filter(s => s.category === "Sunday Service").map((sermon, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                    <SermonCard sermon={sermon} />
                </FadeIn>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="series" className="space-y-8">
             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {sermons.filter(s => s.category === "Series").map((sermon, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                    <SermonCard sermon={sermon} />
                </FadeIn>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

function SermonCard({ sermon }: { sermon: any }) {
    return (
        <Card className="overflow-hidden border-none shadow-md flex flex-col h-full group">
            <div className="aspect-video relative bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                    src={sermon.image} 
                    alt={sermon.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute bottom-3 right-3 z-20 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Video className="h-3 w-3" /> {sermon.duration}
                </div>
            </div>
            <CardHeader className="p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {sermon.date}</span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{sermon.category}</span>
                </div>
                <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    <Link href={`/sermons/${sermon.slug}`}>{sermon.title}</Link>
                </h3>
                <p className="text-sm text-foreground/80 font-medium">By {sermon.speaker}</p>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-1">
                <p className="text-sm text-muted-foreground line-clamp-2">{sermon.description}</p>
            </CardContent>
            <CardFooter className="p-4 border-t bg-muted/20 flex justify-between items-center gap-2">
                 <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs">
                    <PlayCircle className="h-3.5 w-3.5" /> Watch
                 </Button>
                 <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                        <Headphones className="h-4 w-4" />
                        <span className="sr-only">Listen</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Notes</span>
                    </Button>
                 </div>
            </CardFooter>
        </Card>
    )
}

const sermons = [
  {
    title: "Walking in Divine Purpose",
    slug: "walking-in-divine-purpose",
    date: "Oct 24, 2024",
    speaker: "Prophet Alia Benjamin",
    category: "Sunday Service",
    duration: "54:12",
    description: "Discover how to align your daily walk with God's eternal plan for your life.",
    image: "https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?q=80&w=2669&auto=format&fit=crop"
  },
  {
    title: "The Power of Prayer",
    slug: "power-of-prayer",
    date: "Oct 17, 2024",
    speaker: "Prophet Alia Benjamin",
    category: "Series",
    duration: "48:30",
    description: "Understanding the authority we have when we commune with the Father.",
    image: "https://images.unsplash.com/photo-1544983058-2900bc31557d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Breaking Generational Curses",
    slug: "breaking-generational-curses",
    date: "Oct 10, 2024",
    speaker: "Pastor Sarah James",
    category: "Sunday Service",
    duration: "1:02:15",
    description: "Freedom is your portion. Learn how to break free from the patterns of the past.",
    image: "https://images.unsplash.com/photo-1507692049790-de58293a469d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Faith That Moves Mountains",
    slug: "faith-that-moves-mountains",
    date: "Oct 03, 2024",
    speaker: "Prophet Alia Benjamin",
    category: "Series",
    duration: "45:00",
    description: "Faith is not just believing; it's acting on the Word of God with boldness.",
    image: "https://images.unsplash.com/photo-1519792305608-f4b7a13d7ce5?q=80&w=2669&auto=format&fit=crop"
  },
  {
    title: "The Fruit of the Spirit",
    slug: "fruit-of-the-spirit",
    date: "Sep 26, 2024",
    speaker: "Min. David Cohen",
    category: "Sunday Service",
    duration: "50:20",
    description: "Cultivating a character that reflects Christ in every season of life.",
    image: "https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?q=80&w=2671&auto=format&fit=crop"
  }
]
