"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Heart } from "lucide-react"
import { useState } from "react"
import { FadeIn } from "@/components/fade-in"

export default function GivePage() {
  const [amount, setAmount] = useState<string>("")

  const handlePreset = (val: string) => {
    setAmount(val)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-surface py-20 text-center relative overflow-hidden border-b border-border">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <Heart className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl text-surface">Giving</h1>
            <p className="mt-4 text-lg text-surface/90 max-w-2xl mx-auto leading-relaxed">
                "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto items-start">
            
            {/* Donation Form */}
            <FadeIn>
                <Card className="bg-surface shadow-sm border border-border border-t-4 border-t-accent">
                    <CardHeader>
                        <CardTitle className="font-serif text-2xl text-primary">Make a Donation</CardTitle>
                        <CardDescription className="text-muted">Support the mission and vision of Prophet Alia Benjamin Ministries.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                            {["25", "50", "100"].map((preset) => (
                                <Button 
                                    key={preset} 
                                    variant={amount === preset ? "default" : "outline"}
                                    onClick={() => handlePreset(preset)}
                                    className="h-16 text-lg font-bold"
                                >
                                    ${preset}
                                </Button>
                            ))}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="custom-amount" className="text-foreground font-medium">Other Amount</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted font-bold">$</span>
                                <Input 
                                    id="custom-amount" 
                                    type="number" 
                                    placeholder="0.00" 
                                    className="pl-8 text-lg"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="fund-select" className="text-foreground font-medium">Fund</Label>
                        <select id="fund-select" className="flex h-10 w-full rounded-md border border-border bg-surface text-foreground px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50">
                                <option>General Ministry Support</option>
                                <option>Media & Broadcast Outreach</option>
                                <option>Fellowships & Community Outreach</option>
                        </select>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                        <Button size="lg" className="w-full text-lg h-12 font-bold shadow-sm">Give Securely</Button>
                        <p className="text-xs text-muted text-center">
                          For Mobile Money or international bank details, connect with our team on WhatsApp:{" "}
                          <a href="https://wa.me/256780685120" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                            +256 780 685 120
                          </a>
                        </p>
                    </CardFooter>
                </Card>
            </FadeIn>

            {/* Impact / Trust Info */}
            <FadeIn delay={0.2} className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Why We Give</h3>
                    <p className="text-muted text-lg leading-relaxed">
                        Giving is an act of worship and partnership in the Kingdom. Your generosity fuels the global dissemination of the prophetic word, equips souls, and supports our broadcast outreach.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <h4 className="font-bold text-lg font-serif text-primary">Your support helps us:</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                            <span className="text-muted leading-relaxed">Broadcast prophetic messages and teachings worldwide on YouTube.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                            <span className="text-muted leading-relaxed">Host fellowship gatherings and dynamic spiritual revival meetings.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                            <span className="text-muted leading-relaxed">Nurture and disciple believers globally through digital ministry.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-surface-muted/50 border border-border p-6 rounded-lg text-sm text-muted leading-relaxed">
                    <p>
                        Thank you for your generous heart and partnership with Prophet Alia Benjamin Ministries. May God richly multiply your seed sown.
                    </p>
                </div>
            </FadeIn>
        </div>
      </section>
    </div>
  )
}
