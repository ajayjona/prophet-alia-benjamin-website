import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayCircle, ArrowRight, Radio } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-dark text-surface min-h-[85vh] lg:min-h-[90vh] flex items-center border-b border-border/20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-accent/15 blur-[130px] pointer-events-none" />
      
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto relative z-10 px-4 md:px-6 py-12 lg:py-0">
        <div className="grid gap-12 lg:grid-cols-12 items-end min-h-[75vh]">
          
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-7 space-y-8 pb-8 lg:pb-16 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface/5 border border-accent/30 text-accent text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-md">
              <Radio className="h-3.5 w-3.5 animate-pulse text-accent" />
              <span>Prophet Alia Benjamin Ministries</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-surface tracking-tight leading-[1.08]">
              Awakening Nations to God’s Voice & Presence.
            </h1>

            <p className="max-w-[580px] text-lg sm:text-xl text-surface/80 leading-relaxed font-light mx-auto lg:mx-0">
              A global prophetic voice declaring divine wisdom, apostolic alignment, and supernatural revival across generations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button asChild size="lg" className="h-14 px-8 text-base font-bold shadow-lg shadow-accent/20 rounded-full">
                <a 
                  href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2.5"
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch Prophecies Live
                </a>
              </Button>

              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base font-medium rounded-full border-surface/20 bg-surface/5 text-surface hover:bg-surface/15 hover:text-surface backdrop-blur-sm"
              >
                <Link href="/events" className="gap-2">
                  Fellowship Gatherings <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              </Button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-xs text-surface/60 font-medium tracking-wide">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Global Online Fellowships</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Announced Venues per Service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>YouTube Weekly Broadcasts</span>
              </div>
            </div>
          </div>

          {/* Right Seamless Cutout (No boxes, no cheesy labels, pure elegance) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Soft gold halo backlight */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

              {/* Prophet cutout rising naturally with bottom fade */}
              <div 
                className="relative overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
                }}
              >
                <img 
                  src="/prophet/prophet_cutout.png" 
                  alt="Prophet Alia Benjamin" 
                  className="w-full h-auto max-h-[620px] lg:max-h-[700px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
