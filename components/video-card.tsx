"use client"

import * as React from "react"
import { YouTubeVideo } from "@/lib/videos"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlayCircle, Youtube, ExternalLink } from "lucide-react"

export function VideoCard({ video }: { video: YouTubeVideo }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xs hover:border-accent/60 transition-all flex flex-col h-full group">
        {/* Thumbnail with clean minimal Play Overlay */}
        <DialogTrigger asChild>
          <div className="aspect-video relative bg-primary-dark overflow-hidden block cursor-pointer group/thumb">
            <div className="absolute inset-0 bg-primary-dark/30 group-hover/thumb:bg-primary-dark/10 transition-colors z-10 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-accent text-primary-dark flex items-center justify-center shadow-md group-hover/thumb:scale-110 transition-transform">
                <PlayCircle className="h-7 w-7" />
              </div>
            </div>
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover/thumb:scale-105" 
              loading="lazy"
            />
          </div>
        </DialogTrigger>

        {/* Card Details */}
        <div className="p-5 flex-1 flex flex-col justify-between gap-4">
          <div className="space-y-1.5">
            <DialogTrigger asChild>
              <h3 className="font-serif font-bold text-base md:text-lg leading-snug group-hover:text-primary transition-colors text-foreground cursor-pointer line-clamp-2">
                {video.title}
              </h3>
            </DialogTrigger>
            <p className="text-xs text-muted line-clamp-2 leading-relaxed">
              {video.description}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-border/60">
            <DialogTrigger asChild>
              <button className="text-xs text-primary font-semibold hover:text-accent transition-colors flex items-center gap-1.5 cursor-pointer">
                <PlayCircle className="h-3.5 w-3.5 text-accent" /> Play Preview
              </button>
            </DialogTrigger>

            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-accent font-medium transition-colors flex items-center gap-1"
              aria-label={`Watch ${video.title} on YouTube`}
            >
              <Youtube className="h-3.5 w-3.5 text-accent" /> YouTube <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Video Dialog Modal */}
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-primary-dark border-accent/40 text-surface">
        <DialogHeader className="p-4 bg-primary-dark border-b border-border/20">
          <DialogTitle className="text-sm sm:text-base font-serif font-bold text-surface flex items-center justify-between gap-4 pr-6">
            <span>{video.title}</span>
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-sans text-accent hover:underline flex items-center gap-1 shrink-0"
            >
              <Youtube className="h-4 w-4" /> Open in YouTube
            </a>
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full bg-black">
          {isOpen && (
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
