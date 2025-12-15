export type BilanStatus = "En cours" | "Terminé" | "Nouveau"

export interface Bilan {
    id: string
    salarie: {
        name: string
        poste: string
        avatar: string
    }
    status: BilanStatus
    progress: number
    lastActivity: string
    step: number
}

export const bilans: Bilan[] = [
    {
        id: "b-001",
        salarie: {
            name: "Sébastien Martin",
            poste: "Opérateur de production",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sebastien"
        },
        status: "En cours",
        progress: 35,
        lastActivity: "Aujourd'hui à 10:30",
        step: 2
    },
    {
        id: "b-002",
        salarie: {
            name: "Thomas Dubois",
            poste: "Technicien Maintenance",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas"
        },
        status: "Terminé",
        progress: 100,
        lastActivity: "Il y a 2 jours",
        step: 5
    },
    {
        id: "b-003",
        salarie: {
            name: "Sophie Leroy",
            poste: "Logistique",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie"
        },
        status: "Nouveau",
        progress: 0,
        lastActivity: "Hier",
        step: 1
    },
    {
        id: "b-004",
        salarie: {
            name: "Karim Benzema",
            poste: "Chef d'équipe",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karim"
        },
        status: "En cours",
        progress: 60,
        lastActivity: "Il y a 3 heures",
        step: 3
    }
]
