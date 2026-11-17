"use client"

import * as React from "react"
import { ALBUMS, AlbumPhoto } from "@/lib/albums"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { ChevronLeft, ChevronRight, Eye, ImageIcon, Layers } from "lucide-react"

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<AlbumPhoto | null>(null)
  const [activeTab, setActiveTab] = React.useState("all")

  // Flatten all photos for the "All" tab
  const allPhotos = React.useMemo(() => {
    return ALBUMS.flatMap((album) => album.photos)
  }, [])

  // Get current active photo list for lightbox next/prev navigation
  const currentPhotoList = React.useMemo(() => {
    if (activeTab === "all") return allPhotos
    const foundAlbum = ALBUMS.find((a) => a.id === activeTab)
    return foundAlbum ? foundAlbum.photos : allPhotos
  }, [activeTab, allPhotos])

  const currentIndex = selectedPhoto
    ? currentPhotoList.findIndex((p) => p.src === selectedPhoto.src)
    : -1

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex > 0) {
      setSelectedPhoto(currentPhotoList[currentIndex - 1])
    } else {
      setSelectedPhoto(currentPhotoList[currentPhotoList.length - 1])
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex < currentPhotoList.length - 1) {
      setSelectedPhoto(currentPhotoList[currentIndex + 1])
    } else {
      setSelectedPhoto(currentPhotoList[0])
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-surface-muted/40 border-b border-border py-16 md:py-20 text-center">
        <div className="container mx-auto px-4 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-lg bg-surface border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              <Layers className="h-3.5 w-3.5 text-accent" />
              <span>Official Photo Albums</span>
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">
              Ministry Albums & Gallery
            </h1>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Explore photo highlights from our fellowship gatherings, community outreaches, school missions, and official ministry moments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Album Tabs & Photo Grids */}
      <section className="py-12 md:py-16 container mx-auto px-4 md:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <FadeIn>
            <div className="flex justify-center mb-10 overflow-x-auto pb-2">
              <TabsList className="flex flex-wrap h-auto gap-2 p-1.5 bg-surface border border-border">
                <TabsTrigger value="all" className="px-4 py-2 text-xs sm:text-sm font-semibold">
                  All Photos ({allPhotos.length})
                </TabsTrigger>
                {ALBUMS.map((album) => (
                  <TabsTrigger 
                    key={album.id} 
                    value={album.id} 
                    className="px-4 py-2 text-xs sm:text-sm font-semibold"
                  >
                    {album.title} ({album.photos.length})
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </FadeIn>

          {/* All Photos View */}
          <TabsContent value="all" className="space-y-8">
            <PhotoGrid 
              photos={allPhotos} 
              onSelectPhoto={(photo) => setSelectedPhoto(photo)} 
            />
          </TabsContent>

          {/* Individual Album Views */}
          {ALBUMS.map((album) => (
            <TabsContent key={album.id} value={album.id} className="space-y-6">
              <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
                <h2 className="text-2xl font-serif font-bold text-primary">{album.title}</h2>
                <p className="text-sm text-accent font-medium uppercase tracking-wider">{album.subtitle}</p>
                <p className="text-sm text-muted leading-relaxed">{album.description}</p>
              </div>

              <PhotoGrid 
                photos={album.photos} 
                onSelectPhoto={(photo) => setSelectedPhoto(photo)} 
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Lightbox Dialog Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-primary-dark border-accent/40 text-surface">
          <DialogHeader className="p-4 bg-primary-dark border-b border-border/20 flex flex-row items-center justify-between">
            <DialogTitle className="text-sm sm:text-base font-serif font-bold text-surface flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-accent" />
              <span>{selectedPhoto?.alt}</span>
            </DialogTitle>
            <span className="text-xs text-accent font-medium pr-6">
              {currentIndex + 1} of {currentPhotoList.length}
            </span>
          </DialogHeader>

          <div className="relative aspect-auto max-h-[75vh] w-full flex items-center justify-center bg-black/90 p-2 sm:p-4">
            {selectedPhoto && (
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt} 
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto rounded shadow-lg"
              />
            )}

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-dark/80 text-surface hover:bg-accent hover:text-primary-dark transition-colors border border-border/40"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-dark/80 text-surface hover:bg-accent hover:text-primary-dark transition-colors border border-border/40"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="p-3 bg-primary-dark border-t border-border/20 flex justify-between items-center text-xs text-muted">
            <span>Prophet Alia Benjamin Ministries</span>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-accent hover:text-accent-light hover:bg-surface/10 h-7 text-xs"
              onClick={() => setSelectedPhoto(null)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function PhotoGrid({
  photos,
  onSelectPhoto
}: {
  photos: AlbumPhoto[]
  onSelectPhoto: (photo: AlbumPhoto) => void
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {photos.map((photo, i) => (
        <FadeIn key={photo.src + i} delay={(i % 8) * 0.05}>
          <div
            onClick={() => onSelectPhoto(photo)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-surface border border-border shadow-2xs hover:border-accent/70 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
            />
            
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
              <div className="p-2.5 rounded-full bg-accent text-primary-dark transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Eye className="h-5 w-5" />
              </div>
              <p className="text-xs text-surface font-medium mt-2 line-clamp-1 drop-shadow">
                {photo.alt}
              </p>
            </div>

            {/* Album tag badge */}
            <div className="absolute top-2 left-2 pointer-events-none">
              <Badge 
                variant="outline" 
                className="bg-primary-dark/80 text-surface text-[10px] px-2 py-0.5 border-border/40 backdrop-blur-xs capitalize"
              >
                {photo.albumId.replace("_", " ")}
              </Badge>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
