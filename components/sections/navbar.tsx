"use client"

import * as React from "react"
import Link from "next/link"
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 font-serif text-xl font-bold tracking-tight text-primary">
          <span>P.A.B. Ministries</span>
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
                <NavigationMenuTrigger>Ministries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-popover">
                    <ListItem href="/ministries/kids" title="Kids Ministry">
                      Nurturing faith in our youngest generation with joy.
                    </ListItem>
                    <ListItem href="/ministries/youth" title="Youth">
                      Empowering teens to lead and serve with passion.
                    </ListItem>
                    <ListItem href="/ministries/adults" title="Adults">
                      Deepening discipleship and community connection.
                    </ListItem>
                    <ListItem href="/ministries/outreach" title="Outreach">
                      Extending love and service to our local community.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/sermons" className={navigationMenuTriggerStyle()}>
                    Sermons
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/events" className={navigationMenuTriggerStyle()}>
                    Events
                  </Link>
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

          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/give">Give</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="flex flex-col gap-6 py-4">
                    <Link href="/" onClick={handleLinkClick} className="font-serif text-lg font-bold text-primary">
                        P.A.B. Ministries
                    </Link>
                    <nav className="flex flex-col gap-4">
                        <Link href="/" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            Home
                        </Link>
                        <Link href="/about" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            About
                        </Link>
                        <div className="flex flex-col gap-2">
                             <span className="text-lg font-medium text-muted-foreground">Ministries</span>
                             <div className="pl-4 flex flex-col gap-2 border-l-2 border-muted ml-2">
                                <Link href="/ministries/kids" onClick={handleLinkClick} className="text-base text-foreground/80 hover:text-primary">Kids</Link>
                                <Link href="/ministries/youth" onClick={handleLinkClick} className="text-base text-foreground/80 hover:text-primary">Youth</Link>
                                <Link href="/ministries/adults" onClick={handleLinkClick} className="text-base text-foreground/80 hover:text-primary">Adults</Link>
                                <Link href="/ministries/outreach" onClick={handleLinkClick} className="text-base text-foreground/80 hover:text-primary">Outreach</Link>
                             </div>
                        </div>
                        <Link href="/sermons" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            Sermons
                        </Link>
                        <Link href="/events" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            Events
                        </Link>
                        <Link href="/contact" onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                            Contact
                        </Link>
                         <Button asChild className="mt-4 w-full bg-primary text-primary-foreground">
                            <Link href="/give" onClick={handleLinkClick}>Give Online</Link>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none font-serif text-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
