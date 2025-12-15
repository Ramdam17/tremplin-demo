import { PlaceholderState } from "@/components/ui/placeholder-state"
import { PageContainer } from "@/components/layout/page-container"

export default function BilansPage() {
    return (
        <PageContainer>
            <PlaceholderState
                title="Gestion des Bilans"
                description="Cette interface permettra de gérer l'ensemble des bilans de compétences, d'assigner des conseillers et de suivre les KPI globaux."
            />
        </PageContainer>
    )
}
