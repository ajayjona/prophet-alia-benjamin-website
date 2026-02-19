import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-muted/40 border-t pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-primary">Prophet Alia Benjamin Ministries</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Walking in grace, led by the Spirit. Join us as we experience the transformative power of God's love.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/sermons" className="text-muted-foreground hover:text-primary transition-colors">Sermons</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/give" className="text-muted-foreground hover:text-primary transition-colors">Give</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-4 text-foreground">Ministries</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ministries/kids" className="text-muted-foreground hover:text-primary transition-colors">Kids Ministry</Link></li>
              <li><Link href="/ministries/youth" className="text-muted-foreground hover:text-primary transition-colors">Youth Group</Link></li>
              <li><Link href="/ministries/adults" className="text-muted-foreground hover:text-primary transition-colors">Adult Service</Link></li>
              <li><Link href="/ministries/outreach" className="text-muted-foreground hover:text-primary transition-colors">Community Outreach</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Grace Avenue,<br/>Spiritual City, SC 29000</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@pabministries.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prophet Alia Benjamin Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
