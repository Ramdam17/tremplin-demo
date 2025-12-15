export interface Competence {
    id: string
    category: "Savoir-faire" | "Savoir-être" | "Transversal"
    label: string
    description?: string
    transferableTo?: string[] // Jobs this skill is good for
}

export const competences: Competence[] = [
    // Savoir-faire (Technique)
    {
        id: "comp-01",
        category: "Savoir-faire",
        label: "Contrôle qualité visuel",
        transferableTo: ["Contrôleur qualité", "Agent de tri", "Logistique"]
    },
    {
        id: "comp-02",
        category: "Savoir-faire",
        label: "Respect des cadences de production",
        transferableTo: ["Logistique", "Restauration rapide", "Bâtiment"]
    },
    {
        id: "comp-03",
        category: "Savoir-faire",
        label: "Maintenance de premier niveau",
        transferableTo: ["Réparateur électroménager", "Technicien vélo", "Agent d'entretien"]
    },
    {
        id: "comp-04",
        category: "Savoir-faire",
        label: "Lecture de plans et schémas",
        transferableTo: ["BTP", "Menuiserie", "Électricité"]
    },

    // Transversal
    {
        id: "comp-05",
        category: "Transversal",
        label: "Travail en équipe postée (3x8)",
        transferableTo: ["Hôpital", "Sécurité", "Transport"]
    },
    {
        id: "comp-06",
        category: "Transversal",
        label: "Respect des consignes de sécurité",
        transferableTo: ["Tous secteurs industriels", "BTP", "Laboratoire"]
    },
    {
        id: "comp-07",
        category: "Transversal",
        label: "Reporting d'anomalies",
        transferableTo: ["Supervision", "Administratif", "Qualité"]
    },

    // Savoir-être (Soft skills)
    {
        id: "comp-08",
        category: "Savoir-être",
        label: "Ponctualité et assiduité",
        transferableTo: ["Tous secteurs"]
    },
    {
        id: "comp-09",
        category: "Savoir-être",
        label: "Gestion du stress",
        transferableTo: ["Accueil public", "Restauration", "Aide à la personne"]
    },
    {
        id: "comp-10",
        category: "Savoir-être",
        label: "Adaptabilité aux changements",
        transferableTo: ["Services", "Commerce"]
    }
]
