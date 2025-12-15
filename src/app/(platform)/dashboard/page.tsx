import Link from "next/link"
import { Users, CheckCircle, Clock, ArrowRight, PlayCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { PageContainer } from "@/components/layout/page-container"
import { Badge } from "@/components/ui/badge"
import { bilans } from "@/data/mock/bilans"

export default function DashboardPage() {
    const stats = [
        { name: "Bilans en cours", value: "12", icon: Clock, color: "text-blue-500" },
        { name: "Bilans terminés", value: "45", icon: CheckCircle, color: "text-emerald-500" },
        { name: "Employés accompagnés", value: "57", icon: Users, color: "text-indigo-500" },
    ]

    return (
        <PageContainer>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
                <Button>
                    + Nouveau bilan
                </Button>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                    <Card key={stat.name}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.name}
                            </CardTitle>
                            <stat.icon className={`h-4 w-4 text-muted-foreground ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% par rapport au mois dernier
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Bilans */}
            <h2 className="text-xl font-semibold mt-6">Bilans récents</h2>
            <div className="grid gap-4">
                {bilans.map((bilan) => (
                    <Card key={bilan.id} className="overflow-hidden transition-all hover:shadow-md">
                        <div className="flex items-center p-6 gap-6">
                            {/* Avatar */}
                            <div className="h-12 w-12 rounded-full overflow-hidden bg-secondary flex-shrink-0">
                                <img src={bilan.salarie.avatar} alt={bilan.salarie.name} className="h-full w-full object-cover" />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <div className="md:col-span-1">
                                    <h3 className="text-sm font-semibold truncate">{bilan.salarie.name}</h3>
                                    <p className="text-sm text-muted-foreground truncate">{bilan.salarie.poste}</p>
                                </div>

                                <div className="md:col-span-1 flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <Badge variant={bilan.status === "Terminé" ? "success" : bilan.status === "En cours" ? "default" : "secondary"}>
                                            {bilan.status}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground">{bilan.lastActivity}</span>
                                    </div>
                                </div>

                                <div className="md:col-span-1 flex flex-col gap-1">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>Progression</span>
                                        <span>{bilan.progress}%</span>
                                    </div>
                                    <Progress value={bilan.progress} className="h-2" />
                                </div>

                                <div className="md:col-span-1 flex justify-end">
                                    <Button asChild variant="ghost" size="sm" className="gap-2">
                                        <Link href={`/bilan/${bilan.id}/${bilan.step === 1 ? 'profil' : bilan.step === 2 ? 'evaluation' : bilan.step === 5 ? 'synthese' : 'profil'}`}>
                                            {bilan.status === "Terminé" ? "Voir la synthèse" : "Continuer"}
                                            {bilan.status === "Terminé" ? <ArrowRight className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </PageContainer>
    )
}
