"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Download, Home, Printer } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { DownloadPDFButton } from "@/components/bilan/download-button"

export default function SynthesePage() {
    return (
        <div className="max-w-3xl mx-auto text-center space-y-10 py-10">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="h-24 w-24 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="h-12 w-12" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground">Félicitations !</h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                    Votre parcours d'évolution vers le métier de <span className="text-foreground font-semibold">Technicien de Maintenance</span> est validé.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 text-left">
                <Card>
                    <CardContent className="p-6 space-y-2">
                        <h3 className="font-semibold text-muted-foreground uppercase text-xs">Formation choisie</h3>
                        <div className="text-lg font-bold">Titre Pro Technicien de Maintenance</div>
                        <div className="text-sm text-muted-foreground">AFPA Prouvy • 6 mois</div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-2">
                        <h3 className="font-semibold text-muted-foreground uppercase text-xs">Financement</h3>
                        <div className="text-lg font-bold">100% Pris en charge</div>
                        <div className="text-sm text-muted-foreground">Reste à charge : 0 €</div>
                    </CardContent>
                </Card>
            </div>

            <div className="border rounded-lg p-8 bg-card shadow-sm space-y-6">
                <h3 className="text-lg font-semibold">Prochaines étapes</h3>
                <div className="grid gap-4 md:grid-cols-3 text-sm">
                    <div className="flex flex-col items-center gap-2 text-center p-4 bg-secondary/30 rounded-lg">
                        <div className="font-bold text-primary">Immédiat</div>
                        <div>Signature de la convention (Docusign)</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center p-4 bg-secondary/30 rounded-lg">
                        <div className="font-bold text-primary">J-15</div>
                        <div>Entretien préalable avec l'organisme</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center p-4 bg-secondary/30 rounded-lg">
                        <div className="font-bold text-primary">15 Janvier</div>
                        <div>Démarrage de la formation</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" className="gap-2">
                    <Printer className="h-4 w-4" /> Imprimer
                </Button>
                <DownloadPDFButton />
                <Button asChild variant="secondary" className="gap-2">
                    <Link href="/dashboard">
                        <Home className="h-4 w-4" /> Retour au tableau de bord
                    </Link>
                </Button>
            </div>
        </div>
    )
}
