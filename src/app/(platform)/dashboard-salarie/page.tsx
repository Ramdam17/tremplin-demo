"use client"

import { PageContainer } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, CheckCircle2, Circle, ArrowRight, Briefcase, Trophy, Zap, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardSalariePage() {
    return (
        <PageContainer>
            <div className="flex flex-col gap-8">
                {/* 1. Welcome Hero */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-8 md:p-12 shadow-lg">
                    <div className="relative z-10 max-w-2xl">
                         <h1 className="text-3xl md:text-4xl font-bold mb-4">Bonjour Sébastien, <br/>Prêt pour votre prochaine étape ?</h1>
                         <p className="text-indigo-100 text-lg mb-8">
                             Vous avez complété 20% de votre bilan. Continuez dès maintenant pour découvrir les opportunités qui vous correspondent.
                         </p>
                         <Button size="lg" className="gap-3 bg-white text-indigo-600 hover:bg-indigo-50 border-none shadow-xl transform transition hover:-translate-y-1" asChild>
                             <Link href="/bilan/new/profil">
                                <Play className="h-5 w-5 fill-current" /> Reprendre mon parcours
                             </Link>
                         </Button>
                    </div>
                    {/* Abstract shapes */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 right-20 h-40 w-40 rounded-full bg-indigo-500/30 blur-2xl"></div>
                </div>

                {/* 2. Timeline Widget */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /> Votre Progression</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative">
                             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -z-10 -translate-y-1/2"></div>
                             <div className="flex justify-between">
                                 {[
                                     { step: 1, label: "Profil", status: "done" },
                                     { step: 2, label: "Évaluation", status: "current" },
                                     { step: 3, label: "Résultats", status: "locked" },
                                     { step: 4, label: "Plan", status: "locked" },
                                     { step: 5, label: "Synthèse", status: "locked" },
                                 ].map((s, i) => (
                                     <div key={i} className="flex flex-col items-center gap-2 bg-background px-2">
                                         <div className={`
                                             h-8 w-8 rounded-full flex items-center justify-center border-2 
                                             ${s.status === 'done' ? 'bg-primary border-primary text-primary-foreground' : 
                                               s.status === 'current' ? 'border-primary text-primary' : 'border-muted text-muted-foreground bg-muted/30'}
                                         `}>
                                             {s.status === 'done' ? <CheckCircle2 className="h-5 w-5" /> : 
                                              s.status === 'current' ? <span className="font-bold text-sm">2</span> : <Circle className="h-4 w-4" />}
                                         </div>
                                         <span className={`text-xs font-medium ${s.status === 'locked' ? 'text-muted-foreground' : 'text-foreground'}`}>
                                             {s.label}
                                         </span>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 3. Recommendations Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                     <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-100 dark:border-amber-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                         <CardHeader>
                             <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-500 text-lg">
                                 <Briefcase className="h-5 w-5" /> Métiers du futur
                             </CardTitle>
                         </CardHeader>
                         <CardContent>
                             <p className="text-sm text-balance text-muted-foreground mb-4">
                                 Découvrez les 10 métiers de l'industrie qui recrutent le plus dans votre région (Hauts-de-France).
                             </p>
                             <span className="text-xs font-semibold text-amber-600 underline group-hover:text-amber-700">Lire l'article &rarr;</span>
                         </CardContent>
                     </Card>

                     <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-100 dark:border-emerald-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                         <CardHeader>
                             <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-500 text-lg">
                                 <Trophy className="h-5 w-5" /> Vos forces
                             </CardTitle>
                         </CardHeader>
                         <CardContent>
                             <p className="text-sm text-balance text-muted-foreground mb-4">
                                 Vous avez validé le bloc "Maintenance niveau 1". Valorisez-le dès maintenant sur votre CV interne.
                             </p>
                             <span className="text-xs font-semibold text-emerald-600 underline group-hover:text-emerald-700">Voir mon badge &rarr;</span>
                         </CardContent>
                     </Card>

                     <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-100 dark:border-blue-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                         <CardHeader>
                             <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-500 text-lg">
                                 <Zap className="h-5 w-5" /> Financement
                             </CardTitle>
                         </CardHeader>
                         <CardContent>
                             <p className="text-sm text-balance text-muted-foreground mb-4">
                                 Votre solde CPF est de 2 150 €. L'entreprise peut abonder jusqu'à 3000 € supplémentaires.
                             </p>
                             <span className="text-xs font-semibold text-blue-600 underline group-hover:text-blue-700">Comprendre mes droits &rarr;</span>
                         </CardContent>
                     </Card>
                </div>

            </div>
        </PageContainer>
    )
}
