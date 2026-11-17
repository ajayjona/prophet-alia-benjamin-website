"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Prophet Alia Benjamin Ministries" width={180} height={50} priority className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/sermons" className={navigationMenuTriggerStyle()}>
                    Prophecies & Teachings
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/events" className={navigationMenuTriggerStyle()}>
                    Fellowship & Events
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a 
                    href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(navigationMenuTriggerStyle(), "text-accent font-semibold hover:text-accent-light")}
                  >
                    YouTube
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

               <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={navigationMenuTriggerStyle()}>
                     Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild>
            <Link href="/give">Partner / Give</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary hover:bg-surface-muted">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:w-[400px] bg-surface border-l border-border text-foreground">
                <div className="flex flex-col gap-6 py-4 px-6">
                    <Link href="/" onClick={handleLinkClick} className="mt-6">
                        <Image src="/logo.png" alt="Prophet Alia Benjamin Ministries" width={160} height={45} className="h-10 w-auto object-contain" />
                    </Link>
                    <nav className="flex flex-col gap-4">
                        <Link href="/" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            Home
                        </Link>
                        <Link href="/about" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            About
                        </Link>
                        <Link href="/sermons" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            Prophecies & Teachings
                        </Link>
                        <Link href="/events" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            Fellowships & Events
                        </Link>
                        <a 
                            href="https://youtube.com/@prophetaliabenjamin?si=kFG6crGG6otdUVlU" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={handleLinkClick} 
                            className="text-lg font-medium transition-colors text-accent hover:text-accent-light"
                        >
                            Watch on YouTube
                        </a>
                        <Link href="/contact" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            Contact & WhatsApp
                        </Link>
                         <Button asChild className="mt-4 w-full">
                            <Link href="/give" onClick={handleLinkClick}>Partner / Give Online</Link>
                        </Button>
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={props.href as string}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-muted hover:text-primary focus:bg-surface-muted focus:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none font-serif text-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
