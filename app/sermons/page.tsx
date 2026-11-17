import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Youtube } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { VideoCard } from "@/components/video-card"
import { YOUTUBE_VIDEOS } from "@/lib/videos"

export default function SermonsPage() {
  const prophecies = YOUTUBE_VIDEOS.filter((v) => v.category === "Prophecy")
  const warningsAndPartner = YOUTUBE_VIDEOS.filter(
    (v) => v.category === "Global Warning" || v.category === "Partner Message"
  )

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-surface-muted/40 border-b border-border py-16 md:py-20 text-center">
        <div className="container mx-auto px-4 space-y-6">
          <FadeIn>
            <div className="inline-block rounded-lg bg-surface border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Official Media & Prophetic Words
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">
              Prophecies & Teachings
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Watch official prophetic releases, nation warnings, and teachings by Prophet Alia Benjamin directly on our YouTube channel.
            </p>
            <div className="pt-4 flex justify-center">
              <Button asChild size="lg" className="font-bold gap-2 shadow-sm">
                <a 
                  href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                  Subscribe & Watch on YouTube
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-16 container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <FadeIn>
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-lg grid-cols-3">
                <TabsTrigger value="all">All Releases ({YOUTUBE_VIDEOS.length})</TabsTrigger>
                <TabsTrigger value="prophecies">Prophecies ({prophecies.length})</TabsTrigger>
                <TabsTrigger value="global">Global & Partners ({warningsAndPartner.length})</TabsTrigger>
              </TabsList>
            </div>
          </FadeIn>

          <TabsContent value="all" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {YOUTUBE_VIDEOS.map((video, i) => (
                <FadeIn key={video.id} delay={i * 0.05}>
                  <VideoCard video={video} />
                </FadeIn>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="prophecies" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {prophecies.map((video, i) => (
                <FadeIn key={video.id} delay={i * 0.05}>
                  <VideoCard video={video} />
                </FadeIn>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="global" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {warningsAndPartner.map((video, i) => (
                <FadeIn key={video.id} delay={i * 0.05}>
                  <VideoCard video={video} />
                </FadeIn>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
