"use client"

import { PageContainer } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function BadgePage() {
    return (
        <PageContainer>
            <div className="max-w-2xl mx-auto">
                <Button variant="ghost" asChild className="mb-6 pl-0 hover:pl-2 transition-all">
                    <Link href="/dashboard-salarie"><ArrowLeft className="mr-2 h-4 w-4" /> Retour au tableau de bord</Link>
                </Button>

                <Card className="border-2 border-primary/20 shadow-xl overflow-hidden">
                    <div className="h-4 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 ring-4 ring-white shadow-lg">
                            <Award className="h-12 w-12 text-emerald-600" />
                        </div>
                        <CardTitle className="text-3xl font-bold">Maintenance Niveau 1</CardTitle>
                        <CardDescription className="text-lg">Open Badge Certifié</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-6 pt-6">
                        <p className="text-muted-foreground max-w-md mx-auto">
                            Ce badge atteste que <strong>Sébastien</strong> a démontré les compétences fondamentales pour la maintenance préventive de premier niveau sur équipements industriels.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-muted/30 p-4 rounded-lg">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                <span className="text-sm font-medium">Sécurité machine</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                <span className="text-sm font-medium">Lecture de plans</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                <span className="text-sm font-medium">Diagnostic simple</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                <span className="text-sm font-medium">Rapport d'intervention</span>
                            </div>
                        </div>

                        <div className="text-xs text-muted-foreground">
                            Délivré par <strong>Toyota Academy</strong> le 15/11/2024
                        </div>
                    </CardContent>
                    <CardFooter className="bg-muted/20 p-6 flex justify-center gap-4 border-t">
                        <Button variant="outline" className="gap-2">
                            <Download className="h-4 w-4" /> Télécharger PDF
                        </Button>
                        <Button className="gap-2">
                            <Share2 className="h-4 w-4" /> Partager sur LinkedIn
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </PageContainer>
    )
}
