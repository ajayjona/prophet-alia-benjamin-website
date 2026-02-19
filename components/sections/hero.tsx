import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-muted">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop")' }}
      ></div>
      
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif text-primary">
          Welcome Home
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Join us this Sunday as we explore the depth of Grace and the transformative power of the Spirit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            <Link href="/visit">Plan Your Visit</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
            <Link href="/sermons">Watch Latest Sermon</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
