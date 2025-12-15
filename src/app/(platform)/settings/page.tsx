import { PlaceholderState } from "@/components/ui/placeholder-state"
import { PageContainer } from "@/components/layout/page-container"

export default function SettingsPage() {
    return (
        <PageContainer>
            <PlaceholderState
                title="Paramètres"
                description="Configuration de l'entreprise, gestion des accès utilisateurs et personnalisation de la plateforme."
            />
        </PageContainer>
    )
}
