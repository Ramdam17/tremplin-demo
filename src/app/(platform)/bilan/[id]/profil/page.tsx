"use client"

import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label" // Needs label component? I can standard label.
import { ArrowRight, Save } from "lucide-react"

// Simple Label component removed - now using src/components/ui/label.tsx

export default function ProfilPage() {
    const router = useRouter()
    const params = useParams()

    const handleNext = () => {
        // Simulate save
        router.push(`/bilan/${params.id}/evaluation`)
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Profil Professionnel</CardTitle>
                    <CardDescription>
                        Commençons par faire le point sur votre situation actuelle.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Poste actuel</Label>
                            <Input defaultValue="Opérateur de production" />
                        </div>
                        <div className="space-y-2">
                            <Label>Entreprise</Label>
                            <Input defaultValue="Toyota Valenciennes" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Ancienneté</Label>
                            <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>Moins d'un an</option>
                                <option>1 à 3 ans</option>
                                <option>3 à 5 ans</option>
                                <option>5 à 10 ans</option>
                                <option selected>Plus de 10 ans</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label>Niveau d'études</Label>
                            <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>Sans diplôme</option>
                                <option selected>CAP/BEP</option>
                                <option>Bac</option>
                                <option>Bac +2</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label>Quelles sont vos motivations ? (Plusieurs choix possibles)</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {["Évolution de salaire", "Moins de pénibilité physique", "Nouveaux horaires", "Changement de secteur", "Apprendre un nouveau métier", "Se rapprocher du domicile"].map((msg) => (
                                <div key={msg} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-accent cursor-pointer transition-colors">
                                    <input type="checkbox" id={msg} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                    <label htmlFor={msg} className="text-sm font-medium leading-none cursor-pointer flex-1">
                                        {msg}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
                <Button variant="ghost">
                    <Save className="mr-2 h-4 w-4" />
                    Sauvegarder pour plus tard
                </Button>
                <Button onClick={handleNext} className="gap-2">
                    Continuer vers l'évaluation
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
