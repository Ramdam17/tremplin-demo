"use client"

import { usePathname, useParams } from "next/navigation"
import { PageContainer } from "@/components/layout/page-container"
import { StepIndicator } from "@/components/layout/step-indicator"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BilanLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const params = useParams()
    const pathname = usePathname()

    const getStep = (path: string) => {
        if (path.includes("/profil")) return 1
        if (path.includes("/evaluation")) return 2
        if (path.includes("/resultats")) return 3
        if (path.includes("/plan")) return 4
        if (path.includes("/synthese")) return 5
        return 1
    }

    const currentStep = getStep(pathname)

    return (
        <PageContainer>
            <div className="mb-8">
                <Link href="/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour au tableau de bord
                </Link>
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold tracking-tight">Bilan de compétences</h1>
                    <div className="text-sm font-medium text-muted-foreground">
                        Dossier #{params.id || "Nouveau"}
                    </div>
                </div>
                <StepIndicator currentStep={currentStep} />
            </div>
            <div className="mt-8">
                {children}
            </div>
        </PageContainer>
    )
}
