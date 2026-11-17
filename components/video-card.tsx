"use client"

import * as React from "react"
import { YouTubeVideo } from "@/lib/videos"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PlayCircle, Youtube, ExternalLink } from "lucide-react"

export function VideoCard({ video }: { video: YouTubeVideo }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Card className="overflow-hidden border border-border shadow-xs hover:border-accent/60 transition-all flex flex-col h-full group bg-surface">
        {/* Thumbnail with Play Overlay */}
        <DialogTrigger asChild>
          <div className="aspect-video relative bg-surface-muted overflow-hidden block cursor-pointer group/thumb">
            <div className="absolute inset-0 bg-primary-dark/30 group-hover/thumb:bg-primary-dark/20 transition-colors z-10 flex items-center justify-center">
              <PlayCircle className="h-14 w-14 text-accent opacity-95 group-hover/thumb:scale-110 transition-transform drop-shadow-md" />
            </div>
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="object-cover w-full h-full transition-transform duration-500 group-hover/thumb:scale-105" 
              loading="lazy"
            />
            <div className="absolute top-3 left-3 z-20">
              <Badge variant="outline" className="bg-primary-dark/80 text-accent border-accent/40 font-semibold backdrop-blur-xs">
                {video.category}
              </Badge>
            </div>
          </div>
        </DialogTrigger>

        {/* Card Details */}
        <CardHeader className="p-4 space-y-2 pb-2">
          <p className="text-xs text-primary font-semibold tracking-wide uppercase">
            {video.speaker}
          </p>
          <DialogTrigger asChild>
            <h3 className="font-serif font-bold text-lg leading-snug group-hover:text-primary transition-colors text-foreground cursor-pointer line-clamp-2">
              {video.title}
            </h3>
          </DialogTrigger>
        </CardHeader>

        <CardContent className="p-4 pt-0 flex-1">
          <p className="text-sm text-muted line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </CardContent>

        <CardFooter className="p-4 border-t border-border bg-surface-muted/30 flex justify-between items-center gap-2">
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" className="h-9 gap-1.5 text-xs font-semibold">
              <PlayCircle className="h-4 w-4 text-accent" /> Play Preview
            </Button>
          </DialogTrigger>

          <Button asChild size="sm" className="h-9 gap-1.5 text-xs font-semibold shadow-xs">
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Watch ${video.title} on YouTube`}
            >
              <Youtube className="h-4 w-4" /> YouTube <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      {/* Embedded Video Dialog Modal */}
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-primary-dark border-accent/40 text-surface">
        <DialogHeader className="p-4 bg-primary-dark border-b border-border/20">
          <DialogTitle className="text-base sm:text-lg font-serif font-bold text-surface flex items-center justify-between gap-4 pr-6">
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
