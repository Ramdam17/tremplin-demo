export interface Financement {
    id: string
    label: string
    type: "Public" | "Entreprise" | "Personnel"
    amountLimit?: number
    description: string
}

export const financements: Financement[] = [
    {
        id: "fin-cpf",
        label: "Mon Compte Formation (CPF)",
        type: "Personnel",
        description: "Droits acquis par le salarié"
    },
    {
        id: "fin-opco",
        label: "OPCO 2i (Plan de développement)",
        type: "Entreprise",
        description: "Prise en charge des frais pédagogiques"
    },
    {
        id: "fin-proa",
        label: "Pro-A (Reconversion ou promotion)",
        type: "Entreprise",
        description: "Dispositif alternance pour CDI"
    },
    {
        id: "fin-abondement",
        label: "Abondement Correctif/Volontaire",
        type: "Entreprise",
        description: "Complément versé par l'employeur"
    }
]
