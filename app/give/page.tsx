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
      <section className="bg-primary text-primary-foreground py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 relative z-10">
          <FadeIn>
            <Heart className="h-12 w-12 mx-auto mb-6 text-primary-foreground/80" />
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Giving</h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 container px-4">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto items-start">
            
            {/* Donation Form */}
            <FadeIn>
                <Card className="shadow-lg border-t-4 border-t-primary">
                    <CardHeader>
                        <CardTitle className="font-serif text-2xl">Make a Donation</CardTitle>
                        <CardDescription>Support the mission and vision of Prophet Alia Benjamin Ministries.</CardDescription>
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
                            <Label htmlFor="custom-amount">Other Amount</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
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
                        <Label>Fund</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>General Fund</option>
                                <option>Missions & Outreach</option>
                                <option>Building Fund</option>
                        </select>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button size="lg" className="w-full text-lg h-12">Give Securely</Button>
                    </CardFooter>
                </Card>
            </FadeIn>

            {/* Impact / Trust Info */}
            <FadeIn delay={0.2} className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Why We Give</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Giving is an act of worship and obedience. Your generosity enables us to spread the Gospel, serve our community, and equip believers to walk in their divine purpose.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <h4 className="font-bold text-lg">Your support helps us:</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <span className="text-muted-foreground">Broadcast messages of hope to thousands online.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <span className="text-muted-foreground">Provide resources for local outreach and benevolence.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <span className="text-muted-foreground">Train and mentor the next generation of leaders.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg text-sm text-muted-foreground">
                    <p>
                        Prophet Alia Benjamin Ministries is a registered 501(c)(3) non-profit organization. All donations are tax-deductible.
                    </p>
                </div>
            </FadeIn>
        </div>
      </section>
    </div>
  )
}
