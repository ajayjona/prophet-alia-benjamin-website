import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-background border-b border-border">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop")' }}
      ></div>
      
      <div className="container mx-auto relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif text-primary">
          Welcome Home
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted md:text-xl">
          Experience the prophetic word, transformative power, and divine presence of the Holy Spirit with Prophet Alia Benjamin Ministries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">Connect With Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
            <a 
              href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
