import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Mail, MessageCircle } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.22a8.28 8.28 0 0 0 4.84 1.57v-3.4a4.84 4.84 0 0 1-.92-.7z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-background border-t border-border/30 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-accent">Prophet Alia Benjamin Ministries</h3>
            <p className="text-sm text-surface-muted/90 max-w-xs leading-relaxed">
              Walking in grace, led by the Spirit. Join us online and at our announced fellowship gatherings.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="text-surface-muted/80 hover:text-accent transition-colors p-1.5 rounded-md hover:bg-surface-muted/10"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a 
                href="https://www.tiktok.com/@prophetaliabenjamin?_r=1&_t=ZS-9A9IgNa0PBJ" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok Profile"
                className="text-surface-muted/80 hover:text-accent transition-colors p-1.5 rounded-md hover:bg-surface-muted/10"
              >
                <TikTokIcon className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </a>
              <a 
                href="https://www.instagram.com/prophet_aliabenjamin?stkn=bWVjbGtwbTVncGNk" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="text-surface-muted/80 hover:text-accent transition-colors p-1.5 rounded-md hover:bg-surface-muted/10"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://x.com/AliaProphet" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X Profile"
                className="text-surface-muted/80 hover:text-accent transition-colors p-1.5 rounded-md hover:bg-surface-muted/10"
              >
                <XIcon className="h-4 w-4 mt-0.5" />
                <span className="sr-only">X</span>
              </a>
              <a 
                href="https://www.facebook.com/ProphetAliaBenjamin" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="text-surface-muted/80 hover:text-accent transition-colors p-1.5 rounded-md hover:bg-surface-muted/10"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://wa.me/256780685120" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="text-surface-muted/80 hover:text-accent transition-colors p-1.5 rounded-md hover:bg-surface-muted/10"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-surface tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-surface-muted/80 hover:text-accent transition-colors">About Prophet Alia</Link></li>
              <li>
                <a 
                  href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-surface-muted/80 hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <Youtube className="h-4 w-4 text-accent" />
                  YouTube Channel
                </a>
              </li>
              <li><Link href="/sermons" className="text-surface-muted/80 hover:text-accent transition-colors">Prophecies & Teachings</Link></li>
              <li><Link href="/events" className="text-surface-muted/80 hover:text-accent transition-colors">Fellowship Updates</Link></li>
              <li><Link href="/give" className="text-surface-muted/80 hover:text-accent transition-colors">Partner / Give</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-4 text-surface tracking-wide">Connect Online</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" target="_blank" rel="noopener noreferrer" className="text-surface-muted/80 hover:text-accent transition-colors">
                  YouTube Broadcasts
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@prophetaliabenjamin?_r=1&_t=ZS-9A9IgNa0PBJ" target="_blank" rel="noopener noreferrer" className="text-surface-muted/80 hover:text-accent transition-colors">
                  TikTok Updates
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/prophet_aliabenjamin?stkn=bWVjbGtwbTVncGNk" target="_blank" rel="noopener noreferrer" className="text-surface-muted/80 hover:text-accent transition-colors">
                  Instagram Words
                </a>
              </li>
              <li>
                <a href="https://x.com/AliaProphet" target="_blank" rel="noopener noreferrer" className="text-surface-muted/80 hover:text-accent transition-colors">
                  X (Twitter) Feed
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ProphetAliaBenjamin" target="_blank" rel="noopener noreferrer" className="text-surface-muted/80 hover:text-accent transition-colors">
                  Facebook Community
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold mb-4 text-surface tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-surface-muted/90">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>
                  <strong>Global Online Ministry</strong><br/>
                  Fellowship venues announced per service
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-surface-muted/90">
                <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
                <a 
                  href="https://wa.me/256780685120" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors"
                >
                  +256 780 685 120 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-surface-muted/90">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a 
                  href="mailto:prophetaliabenjamin@gmail.com" 
                  className="hover:text-accent transition-colors"
                >
                  prophetaliabenjamin@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-surface-muted/20 pt-8 text-center text-xs text-surface-muted/70">
          <p>&copy; {new Date().getFullYear()} Prophet Alia Benjamin Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
