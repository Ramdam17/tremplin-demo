export interface Metier {
    id: string
    title: string
    description: string
    matchScore: number
    marketData: {
        offersCount: number // Hauts-de-France
        trend: "Hausse" | "Stable" | "Baisse"
        salaryMedian: number // Brut annuel
        tension: "Très élevée" | "Élevée" | "Moyenne" | "Faible"
    }
    skillsGap: string[]
    skillsMatch: string[]
    formationsCount: number
}

export const metiers: Metier[] = [
    {
        id: "job-01",
        title: "Technicien de Maintenance Industrielle",
        description: "Assurer l'entretien et le dépannage des équipements de production.",
        matchScore: 85,
        marketData: {
            offersCount: 412,
            trend: "Hausse",
            salaryMedian: 28500,
            tension: "Très élevée"
        },
        skillsGap: ["Habilitation électrique", "Diagnostic panne complexe", "Automatisme"],
        skillsMatch: ["Maintenance niveau 1", "Sécurité", "Rigueur", "Travail équipe"],
        formationsCount: 3
    },
    {
        id: "job-02",
        title: "Conducteur de Ligne Automatisée",
        description: "Piloter et régler une ou plusieurs machines de production.",
        matchScore: 92,
        marketData: {
            offersCount: 280,
            trend: "Stable",
            salaryMedian: 24000,
            tension: "Élevée"
        },
        skillsGap: ["Pilotage sur écran", "Réglage fin"],
        skillsMatch: ["Contrôle qualité", "Cadences", "Sécurité", "Reporting"],
        formationsCount: 5
    },
    {
        id: "job-03",
        title: "Soudeur Industriel",
        description: "Assembler des pièces métalliques par fusion.",
        matchScore: 65,
        marketData: {
            offersCount: 520,
            trend: "Hausse",
            salaryMedian: 26000,
            tension: "Très élevée"
        },
        skillsGap: ["Lecture plan complexe", "Techniques soudure TIG/MIG", "Métallurgie"],
        skillsMatch: ["Dextérité", "Rigueur", "Sécurité"],
        formationsCount: 8
    },
    {
        id: "job-04",
        title: "Chauffeur Poids Lourd",
        description: "Transport de marchandises sur route.",
        matchScore: 45,
        marketData: {
            offersCount: 800,
            trend: "Hausse",
            salaryMedian: 25000,
            tension: "Moyenne"
        },
        skillsGap: ["Permis C", "FIMO", "Carte conducteur"],
        skillsMatch: ["Ponctualité", "Vigilance", "Autonomie"],
        formationsCount: 12
    }
]
