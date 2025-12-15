"use client"

import { useState } from "react"
import { PageContainer } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { User, Building, Bell, CreditCard, Save } from "lucide-react"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("company")

    const tabs = [
        { id: "profile", label: "Mon Profil", icon: User },
        { id: "company", label: "Entreprise", icon: Building },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "billing", label: "Facturation", icon: CreditCard },
    ]

    return (
        <PageContainer>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Tabs */}
                <aside className="md:w-64 flex flex-col gap-2">
                    <h1 className="text-2xl font-bold tracking-tight mb-4 px-2">Paramètres</h1>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left",
                                activeTab === tab.id
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    ))}
                </aside>

                {/* Content Area */}
                <main className="flex-1 max-w-2xl">
                    {activeTab === "company" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Profil Entreprise</CardTitle>
                                <CardDescription>Gérez les informations légales et l'apparence de votre espace.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Nom de l'entreprise</Label>
                                    <Input defaultValue="Toyota Motor Manufacturing France" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>SIRET</Label>
                                        <Input defaultValue="383 515 918 00026" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Effectif</Label>
                                        <Input defaultValue="4500" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Adresse du siège</Label>
                                    <Input defaultValue="Parc d'Activités de la Vallée de l'Escaut, 59264 Onnaing" />
                                </div>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4 flex justify-between items-center">
                                <span className="text-xs text-muted-foreground">Dernière modification : il y a 3 jours</span>
                                <Button className="gap-2">
                                    <Save className="h-4 w-4" /> Enregistrer
                                </Button>
                            </CardFooter>
                        </Card>
                    )}

                    {activeTab === "profile" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Mon Profil</CardTitle>
                                <CardDescription>Informations personnelles et sécurité.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-16 w-16 rounded-full bg-secondary overflow-hidden">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marie" alt="Avatar" />
                                    </div>
                                    <Button variant="outline" size="sm">Changer la photo</Button>
                                </div>
                                <div className="space-y-2">
                                    <Label>Nom complet</Label>
                                    <Input defaultValue="Marie Dupont" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Email professionnel</Label>
                                    <Input defaultValue="marie.dupont@toyota-europe.com" disabled />
                                </div>
                                <div className="space-y-2">
                                    <Label>Rôle</Label>
                                    <Input defaultValue="Responsable RH" disabled />
                                </div>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4 flex justify-end">
                                <Button>Enregistrer</Button>
                            </CardFooter>
                        </Card>
                    )}

                    {activeTab === "billing" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Abonnement</CardTitle>
                                <CardDescription>Vue d'ensemble de votre forfait actuel.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 flex justify-between items-center">
                                    <div>
                                        <div className="font-bold text-lg text-primary">Plan Entreprise</div>
                                        <div className="text-sm text-muted-foreground">Facturation annuelle</div>
                                    </div>
                                    <Badge className="bg-emerald-500 hover:bg-emerald-600">Actif</Badge>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Licences actives</span>
                                        <span className="font-bold">12 / 20</span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[60%]" />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4 flex justify-end">
                                <Button variant="outline">Gérer les factures</Button>
                            </CardFooter>
                        </Card>
                    )}

                    {activeTab === "notifications" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Préférences de notification</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    "M'avertir quand un bilan est terminé",
                                    "Rapport hebdomadaire par email",
                                    "Nouvelles correspondances métiers",
                                    "Mises à jour de la plateforme"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between py-2">
                                        <Label className="font-normal">{item}</Label>
                                        <input type="checkbox" defaultChecked={i < 2} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4 flex justify-end">
                                <Button>Enregistrer</Button>
                            </CardFooter>
                        </Card>
                    )}
                </main>
            </div>
        </PageContainer>
    )
}
