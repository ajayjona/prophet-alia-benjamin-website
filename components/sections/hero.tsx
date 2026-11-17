import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircle, MessageCircle, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background border-b border-border pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24">
      {/* Background Banner with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("/prophet/banner.jpeg")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface border border-accent/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Prophet Alia Benjamin Ministries</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-[1.1]">
              Walking in Grace, Declaring God's Word
            </h1>

            <p className="max-w-[620px] text-lg text-muted md:text-xl leading-relaxed mx-auto lg:mx-0">
              Experience the prophetic word, transformative power, and divine presence of the Holy Spirit. Join our global broadcasts and announced fellowship gatherings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button asChild size="lg" className="text-base px-7 py-6 font-bold shadow-md">
                <a 
                  href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch on YouTube
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="text-base px-7 py-6 font-semibold">
                <a 
                  href="https://wa.me/256780685120" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Connect on WhatsApp
                </a>
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Global Online Broadcasts
              </span>
              <span>•</span>
              <span>Announced Fellowship Venues</span>
              <span>•</span>
              <span>Weekly Prophetic Updates</span>
            </div>
          </div>

          {/* Right Column: Creative Cutout Image of Prophet Alia Benjamin */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Gold Ambient Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
              
              {/* Prophet Portrait Cutout Frame */}
              <div className="relative mx-auto rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl bg-gradient-to-b from-primary-dark/80 via-primary-dark to-primary-dark/95">
                <img 
                  src="/prophet/no_bg-prophet2.jpeg" 
                  alt="Prophet Alia Benjamin" 
                  className="w-full h-auto max-h-[520px] object-contain object-bottom drop-shadow-2xl transition-transform duration-700 hover:scale-102"
                />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary-dark via-primary-dark/90 to-transparent p-5 text-center">
                  <div className="font-serif font-bold text-lg text-surface tracking-wide">
                    Prophet Alia Benjamin
                  </div>
                  <div className="text-xs text-accent font-medium mt-0.5">
                    Prophet & Spiritual Leader
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
