import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Construction } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PlaceholderStateProps {
    title: string
    description?: string
}

export function PlaceholderState({ title, description = "Cette fonctionnalité sera disponible dans la version complète." }: PlaceholderStateProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="bg-secondary/50 p-6 rounded-full mb-6">
                <Construction className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>
            <p className="text-muted-foreground max-w-md mb-8 text-lg">
                {description}
            </p>
            <div className="flex gap-4">
                <Button variant="outline" asChild>
                    <Link href="/dashboard">Retour au tableau de bord</Link>
                </Button>
            </div>
        </div>
    )
}
