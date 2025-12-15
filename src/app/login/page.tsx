"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()

    const handleLogin = (role: "rh" | "salarie") => {
        // Fake auth
        localStorage.setItem("userRole", role)

        if (role === "rh") {
            router.push("/dashboard")
        } else {
            // Redirect to the new dedicated employee dashboard
            router.push("/dashboard-salarie")
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-primary">Tremplin</h1>
                    <p className="mt-2 text-muted-foreground">Plateforme de transition professionnelle</p>
                </div>

                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center">Connexion</CardTitle>
                        <CardDescription className="text-center">
                            Choisissez votre profil pour la démonstration
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Button
                            variant="outline"
                            className="h-20 text-lg hover:border-primary hover:bg-primary/5"
                            onClick={() => handleLogin("rh")}
                        >
                            <Users className="mr-4 h-8 w-8 text-primary" />
                            Espace RH
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">ou</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            className="h-20 text-lg hover:border-primary hover:bg-primary/5"
                            onClick={() => handleLogin("salarie")}
                        >
                            <Briefcase className="mr-4 h-8 w-8 text-primary" />
                            Espace Salarié
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
