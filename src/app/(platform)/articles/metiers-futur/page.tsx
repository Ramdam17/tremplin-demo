"use client"

import { PageContainer } from "@/components/layout/page-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import Link from "next/link"

export default function ArticlePage() {
    return (
        <PageContainer>
            <div className="max-w-3xl mx-auto">
                <Button variant="ghost" asChild className="mb-6 pl-0 hover:pl-2 transition-all">
                    <Link href="/dashboard-salarie"><ArrowLeft className="mr-2 h-4 w-4" /> Retour au tableau de bord</Link>
                </Button>

                <div className="space-y-6">
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-none">Marché du travail</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        Les 10 métiers qui recrutent le plus dans les Hauts-de-France en 2025
                    </h1>

                    <div className="flex items-center gap-4 text-muted-foreground text-sm border-b pb-6">
                        <div className="flex items-center gap-1"><User className="h-4 w-4" /> Par Sarah Martin (Coach Emploi)</div>
                        <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Publié le 12 Décembre 2024</div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none space-y-4 text-justify">
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            La région Hauts-de-France connaît une transformation industrielle majeure. Avec l'essor de la "Vallée de la Batterie" et la modernisation des sites de production, de nouvelles opportunités émergent pour les salariés en reconversion.
                        </p>

                        <div className="my-8 rounded-xl overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" className="w-full h-64 object-cover" alt="Usine moderne" />
                        </div>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Technicien de Maintenance Industrielle</h2>
                        <p>
                            C'est LE métier en tension. Les usines s'automatisent et ont besoin d'experts pour éviter les pannes. Un technicien débutant peut espérer <strong>2 100 € net/mois</strong> dès l'embauche.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Conducteur de Ligne Automatisée</h2>
                        <p>
                            Fini le travail à la chaîne répétitif. Le conducteur de ligne pilote des machines complexes via des écrans de contrôle.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Soudeur Industriel</h2>
                        <p>
                            Un savoir-faire manuel irremplaçable, notamment pour les chantiers navals et le nucléaire (EPR de Gravelines).
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8 border border-blue-100 dark:border-blue-900">
                            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Envie de vous lancer ?</h3>
                            <p className="text-blue-700 dark:text-blue-200 mb-4">
                                Votre profil correspond à 85% des compétences requises pour devenir Technicien de Maintenance.
                            </p>
                            <Button asChild>
                                <Link href="/bilan/new/profil">Démarrer mon bilan</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}
