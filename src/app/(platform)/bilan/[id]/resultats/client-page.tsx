"use client"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { metiers } from "@/data/mock/metiers"
import { ArrowRight, Briefcase, TrendingUp, Users, Euro } from "lucide-react"

export default function ResultatsPage() {
    const params = useParams()
    const router = useRouter()

    const handleSelectJob = (jobId: string) => {
        router.push(`/bilan/${params.id}/plan`)
    }

    return (
        <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-3xl font-bold mb-4">Nous avons identifié {metiers.length} pistes pour vous</h2>
                <p className="text-muted-foreground text-lg">
                    Basé sur votre profil et vos compétences, voici les métiers les plus accessibles et porteurs.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {metiers.sort((a, b) => b.matchScore - a.matchScore).map((job, index) => (
                    <Card key={job.id} className={`flex flex-col overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg ${index === 0 ? 'border-primary shadow-md ring-1 ring-primary/20' : ''}`}>
                        <div className="h-2 w-full bg-secondary">
                            <div
                                className={`h-full ${job.matchScore > 80 ? 'bg-emerald-500' : job.matchScore > 60 ? 'bg-amber-500' : 'bg-destructive'}`}
                                style={{ width: `${job.matchScore}%` }}
                            />
                        </div>
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant={job.matchScore > 80 ? "success" : job.matchScore > 60 ? "warning" : "default"} className="text-sm px-3 py-1">
                                    {job.matchScore}% de compatibilité
                                </Badge>
                                {index === 0 && <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20"> ⭐ Recommandé</Badge>}
                            </div>
                            <CardTitle className="text-2xl">{job.title}</CardTitle>
                            <CardDescription className="text-base mt-2">{job.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="flex-1 space-y-6">
                            <div className="grid grid-cols-2 gap-4 bg-secondary/30 p-4 rounded-lg">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Briefcase className="h-3 w-3" /> Offres (Région)</span>
                                    <span className="font-semibold text-lg">{job.marketData.offersCount}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Euro className="h-3 w-3" /> Salaire médian</span>
                                    <span className="font-semibold text-lg">{(job.marketData.salaryMedian / 12).toFixed(0)}€ <span className="text-xs font-normal text-muted-foreground">/mois net</span></span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Tendance</span>
                                    <span className="font-semibold text-emerald-600">{job.marketData.trend}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Users className="h-3 w-3" /> Tension</span>
                                    <span className="font-semibold text-amber-600">{job.marketData.tension}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Compétences acquises</span>
                                    <span className="font-medium text-primary">{job.skillsMatch.length}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Compétences à acquérir</span>
                                    <span className="font-medium text-amber-600">{job.skillsGap.length}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {job.skillsGap.map(gap => (
                                        <Badge key={gap} variant="outline" className="text-amber-700 bg-amber-50 border-amber-200 text-xs">
                                            + {gap}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="bg-secondary/10 pt-6">
                            <Button className="w-full h-11 text-base shadow-lg" onClick={() => handleSelectJob(job.id)}>
                                Construire mon plan pour ce métier <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
