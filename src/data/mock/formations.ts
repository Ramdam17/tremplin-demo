export interface Formation {
    id: string
    jobId: string // Linked to metier
    title: string
    provider: string
    location: string
    durationHours: number
    durationMonths: number
    cost: number
    nextSession: string
    tags: string[]
    isEligibleCPF: boolean
}

export const formations: Formation[] = [
    // Pour Technicien Maintenance
    {
        id: "form-01",
        jobId: "job-01",
        title: "Titre Pro Technicien de Maintenance Industrielle (TMI)",
        provider: "AFPA",
        location: "Prouvy (15 min)",
        durationHours: 850,
        durationMonths: 6,
        cost: 8500,
        nextSession: "15 Janvier 2026",
        tags: ["Alternance possible", "Titre RNCP"],
        isEligibleCPF: true
    },
    {
        id: "form-02",
        jobId: "job-01",
        title: "CQPM Technicien de Maintenance",
        provider: "UIMM Pôle Formation",
        location: "Valenciennes",
        durationHours: 450,
        durationMonths: 4,
        cost: 5200,
        nextSession: "02 Février 2026",
        tags: ["Reconnu branche métallurgie"],
        isEligibleCPF: true
    },

    // Pour Conducteur Ligne
    {
        id: "form-03",
        jobId: "job-02",
        title: "CQP Conducteur de Ligne",
        provider: "GRETA Grand Hainaut",
        location: "Lycée Hainaut Valenciennes",
        durationHours: 350,
        durationMonths: 3,
        cost: 3500,
        nextSession: "Flexible",
        tags: ["CPF", "Pro-A"],
        isEligibleCPF: true
    }
]
