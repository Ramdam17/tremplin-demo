"use client"

import { PageContainer } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Wallet, Building, PiggyBank, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function FinancementDroitsPage() {
    return (
        <PageContainer>
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                    <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
                        <Link href="/dashboard-salarie"><ArrowLeft className="mr-2 h-4 w-4" /> Retour au tableau de bord</Link>
                    </Button>
                    <Button variant="outline">Exporter mon relevé</Button>
                </div>

                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Mes Droits à la Formation</h1>
                    <p className="text-muted-foreground">Voici le détail de vos enveloppes de financement actives pour 2024/2025.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* CPF Card */}
                    <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none shadow-lg">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <Wallet className="h-5 w-5" /> Mon Compte Personnel de Formation (CPF)
                                </CardTitle>
                                <span className="text-xs bg-white/20 px-2 py-1 rounded">Mise à jour : Hier</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-5xl font-bold mb-2">2 150 €</div>
                            <p className="text-blue-100 text-sm mb-6">Disponibles immédiatement pour toute formation certifiante.</p>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-blue-200">
                                    <span>Plafond annuel (500€/an)</span>
                                    <span>Plafond total (5000€)</span>
                                </div>
                                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-[43%]"></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Abondement Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2">
                                <Building className="h-5 w-5 text-primary" /> Abondement Entreprise
                            </CardTitle>
                            <CardDescription>Participation employeur (Toyota Motor Europe)</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex justify-between items-end border-b pb-4">
                                <div>
                                    <div className="text-3xl font-bold text-foreground">3 000 €</div>
                                    <div className="text-xs text-muted-foreground">Abondement Correctif max.</div>
                                </div>
                                <Button size="sm" variant="secondary">Conditions</Button>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <PiggyBank className="h-5 w-5 text-emerald-500 mt-0.5" />
                                    <div className="text-sm">
                                        <div className="font-semibold">Co-investissement</div>
                                        <p className="text-muted-foreground">Activé si le coût de la formation dépasse votre solde CPF.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                                    <div className="text-sm">
                                        <div className="font-semibold">Pro-A (Reconversion ou promotion)</div>
                                        <p className="text-muted-foreground">Prise en charge à 100% des frais pédagogiques possible.</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-muted/30">
                    <CardHeader>
                        <CardTitle>Simulation Rapide</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">Pour une formation type "Titre Pro TMI" (Coût moyen : 4 500 €)</p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <div className="flex-1 bg-background p-4 rounded-lg border w-full">
                                <div className="text-xs text-muted-foreground">Votre CPF</div>
                                <div className="font-bold text-lg text-blue-600">- 2 150 €</div>
                            </div>
                            <div className="font-bold text-muted-foreground">+</div>
                            <div className="flex-1 bg-background p-4 rounded-lg border w-full">
                                <div className="text-xs text-muted-foreground">Abondement</div>
                                <div className="font-bold text-lg text-emerald-600">- 2 350 €</div>
                            </div>
                            <div className="font-bold text-muted-foreground">=</div>
                            <div className="flex-1 bg-primary/10 p-4 rounded-lg border border-primary w-full">
                                <div className="text-xs text-primary font-semibold">Reste à charge</div>
                                <div className="font-bold text-xl text-primary">0 €</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </PageContainer>
    )
}
