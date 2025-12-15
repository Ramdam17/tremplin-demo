"use client"

import { PageContainer } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Eye, Search, Filter, MoreVertical, Plus } from "lucide-react"
import Link from "next/link"
import { bilans } from "@/data/mock/bilans"

export default function BilansPage() {
    return (
        <PageContainer>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Gestion des Bilans</h1>
                    <p className="text-muted-foreground">Suivez l'avancement des parcours en cours.</p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" /> Nouveau bilan
                </Button>
            </div>

            <Card>
                <div className="p-4 flex gap-4 border-b">
                    <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Rechercher par nom, entreprise..." className="pl-9 bg-background" />
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" /> Filtres
                    </Button>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
                            <tr>
                                <th className="px-4 py-3">Salarié</th>
                                <th className="px-4 py-3">Statut</th>
                                <th className="px-4 py-3">Progression</th>
                                <th className="px-4 py-3">Dernière activité</th>
                                <th className="px-4 py-3">Étape</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {bilans.map((bilan) => (
                                <tr key={bilan.id} className="hover:bg-muted/20 transition-colors group">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-9 rounded-full overflow-hidden bg-secondary">
                                                <img src={bilan.salarie.avatar} className="object-cover w-full h-full" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground">{bilan.salarie.name}</div>
                                                <div className="text-xs text-muted-foreground">{bilan.salarie.poste}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <Badge variant={bilan.status === "Terminé" ? "success" : bilan.status === "En cours" ? "default" : "secondary"}>
                                            {bilan.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-4 w-48">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-right">{bilan.progress}%</span>
                                            <Progress value={bilan.progress} className="h-1.5" />
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-muted-foreground">
                                        {bilan.lastActivity}
                                    </td>
                                    <td className="px-4 py-4">
                                        <Badge variant="outline" className="bg-background">
                                            Étape {bilan.step}/5
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-4 text-right">
                                        <Button variant="ghost" size="icon" asChild>
                                            <Link href={`/bilan/${bilan.id}/profil`}>
                                                <Eye className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <MoreVertical className="h-4 w-4 text-muted-foreground" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            {/* Fake extra rows for volume */}
                            {[1, 2, 3].map((i) => (
                                <tr key={i} className="hover:bg-muted/20 transition-colors opacity-60">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">AN</div>
                                            <div>
                                                <div className="font-semibold text-foreground">Anonyme {i}</div>
                                                <div className="text-xs text-muted-foreground">Salarié</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4"><Badge variant="secondary">À venir</Badge></td>
                                    <td className="px-4 py-4"><Progress value={0} className="h-1.5" /></td>
                                    <td className="px-4 py-4 text-muted-foreground">-</td>
                                    <td className="px-4 py-4"><Badge variant="outline">0/5</Badge></td>
                                    <td className="px-4 py-4 text-right"><MoreVertical className="h-4 w-4 ml-auto text-muted-foreground" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t flex items-center justify-between text-sm text-muted-foreground">
                    <div>Affichage de 1 à 7 sur 45 résultats</div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Précédent</Button>
                        <Button variant="outline" size="sm">Suivant</Button>
                    </div>
                </div>
            </Card>
        </PageContainer>
    )
}
