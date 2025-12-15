"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formations } from "@/data/mock/formations"
import { financements } from "@/data/mock/financements"
import { MapPin, Calendar, Clock, Euro, Check, ArrowRight } from "lucide-react"

export default function PlanPage() {
    const params = useParams()
    const router = useRouter()
    const [selectedFormationId, setSelectedFormationId] = useState(formations[0].id)

    const selectedFormation = formations.find(f => f.id === selectedFormationId) || formations[0]

    // Mock Financial Calculation
    const cost = selectedFormation.cost
    const cpf = 2150
    const remainder = cost - cpf
    const opcoShare = remainder * 0.7
    const proShare = remainder * 0.3
    // Ensure math is exact for demo to reach 0
    const finalRemainder = 0

    const handleValidate = () => {
        router.push(`/bilan/${params.id}/synthese`)
    }

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Construisez votre parcours</h2>
                <div className="text-muted-foreground">Métier cible : <span className="text-primary font-semibold">Technicien de Maintenance</span></div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Left Col: Formations */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</div>
                        Choisir une formation
                    </h3>
                    <div className="space-y-4">
                        {formations.filter(f => f.jobId === "job-01").map((formation) => (
                            <div
                                key={formation.id}
                                onClick={() => setSelectedFormationId(formation.id)}
                                className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedFormationId === formation.id ? 'border-primary bg-primary/5 shadow-md' : 'border-border hover:border-primary/50'}`}
                            >
                                {selectedFormationId === formation.id && <div className="absolute top-2 right-2 text-primary"><Check className="h-5 w-5" /></div>}
                                <h4 className="font-bold text-lg mb-2 pr-6">{formation.title}</h4>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {formation.location}</span>
                                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {formation.durationMonths} mois</span>
                                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {formation.nextSession}</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="font-semibold text-foreground">{formation.cost.toLocaleString()} €</span>
                                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">{formation.provider}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Col: Financing (The "Wow" part) */}
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</div>
                        Plan de financement
                    </h3>
                    <Card className="bg-slate-900 text-white border-0 shadow-xl overflow-hidden relative">
                        {/* Decorative gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 pointer-events-none" />

                        <CardContent className="p-6 space-y-6 relative z-10">
                            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                <span className="text-slate-400">Coût total</span>
                                <span className="text-2xl font-bold">{cost.toLocaleString()} €</span>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center text-emerald-400">
                                    <span className="flex items-center gap-2">Mon CPF</span>
                                    <span>- {cpf.toLocaleString()} €</span>
                                </div>
                                <div className="flex justify-between items-center text-blue-400">
                                    <span className="flex items-center gap-2">OPCO 2i</span>
                                    <span>- {opcoShare.toLocaleString()} €</span>
                                </div>
                                <div className="flex justify-between items-center text-purple-400">
                                    <span className="flex items-center gap-2">Abondement Ent.</span>
                                    <span>- {proShare.toLocaleString()} €</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10 mt-4">
                                <div className="text-center space-y-1">
                                    <span className="text-slate-400 uppercase tracking-wider text-xs">Reste à charge</span>
                                    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 animate-pulse">
                                        {finalRemainder} €
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 bg-white/5">
                            <Button onClick={handleValidate} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12">
                                Valider ce parcours <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
