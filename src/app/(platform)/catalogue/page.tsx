"use client"

import { PageContainer } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Euro, TrendingUp, Briefcase } from "lucide-react"
import { metiers } from "@/data/mock/metiers"

export default function CataloguePage() {
    // Multiply mock data to fill the grid
    const allMetiers = [...metiers, ...metiers, ...metiers]

    return (
        <PageContainer>
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Catalogue Métiers</h1>
                    <p className="text-muted-foreground">Explorez les opportunités professionnelles et les tendances du marché en temps réel.</p>
                </div>

                {/* Search & Filters */}
                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Rechercher un métier, une compétence..." className="pl-10 h-11 text-lg bg-background" />
                    </div>
                    <Button size="lg" className="px-8">Rechercher</Button>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                    <Badge variant="outline" className="text-sm py-1.5 px-4 cursor-pointer hover:bg-muted">Tension : Très élevée</Badge>
                    <Badge variant="outline" className="text-sm py-1.5 px-4 cursor-pointer hover:bg-muted">Secteur : Industrie</Badge>
                    <Badge variant="outline" className="text-sm py-1.5 px-4 cursor-pointer hover:bg-muted">Mobilité : &lt; 20km</Badge>
                    <Badge variant="outline" className="text-sm py-1.5 px-4 cursor-pointer hover:bg-muted">Niveau d'entrée : CAP/BEP</Badge>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {allMetiers.map((job, i) => (
                        <Card key={i} className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer group">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant={job.marketData.tension === "Très élevée" ? "destructive" : "warning"} className="opacity-90">
                                        {job.marketData.tension}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                                        {job.marketData.offersCount} offres
                                    </span>
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{job.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {job.description}
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Euro className="h-4 w-4" />
                                        <span className="font-medium text-foreground">{(job.marketData.salaryMedian / 12).toFixed(0)}€ /mois</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                                        <span className="text-emerald-600">{job.marketData.trend}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    Voir la fiche métier
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </PageContainer>
    )
}
