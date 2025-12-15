"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"
import { competences } from "@/data/mock/competences"
import { cn } from "@/lib/utils"

const levels = [
    { value: 1, label: "Débutant", desc: "Je connais la théorie mais j'ai peu pratiqué" },
    { value: 2, label: "Autonome", desc: "Je peux réaliser les tâches courantes sans aide" },
    { value: 3, label: "Confirmé", desc: "Je maîtrise parfaitement et je peux gérer les imprévus" },
    { value: 4, label: "Expert", desc: "Je peux former d'autres personnes" },
]

export default function EvaluationPage() {
    const params = useParams()
    const router = useRouter()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, number>>({})

    const currentQuestion = competences[currentIndex]
    const progress = ((currentIndex) / competences.length) * 100

    const handleLevelSelect = (level: number) => {
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: level }))
        // Auto advance after short delay for flow
        setTimeout(() => {
            if (currentIndex < competences.length - 1) {
                setCurrentIndex(prev => prev + 1)
            }
        }, 300)
    }

    const handleNext = () => {
        if (currentIndex < competences.length - 1) {
            setCurrentIndex(prev => prev + 1)
        } else {
            finish()
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    const finish = () => {
        router.push(`/bilan/${params.id}/resultats`)
    }

    // Magic button for demo to autosolve
    const magicSolve = () => {
        const solved = {} as any
        competences.forEach(c => solved[c.id] = 3) // Give good score
        setAnswers(solved)
        router.push(`/bilan/${params.id}/resultats`)
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentIndex + 1} / {competences.length}</span>
                    <span>Temps restant estimé : {Math.ceil((competences.length - currentIndex) * 0.5)} min</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            <Card className="min-h-[400px] flex flex-col justify-between">
                <CardHeader>
                    <div className="mb-2 text-sm font-medium text-primary uppercase tracking-wide">
                        {currentQuestion.category}
                    </div>
                    <CardTitle className="text-2xl">{currentQuestion.label}</CardTitle>
                    <CardDescription className="text-base">
                        Quel est votre niveau de maîtrise sur cette compétence ?
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="grid gap-3">
                        {levels.map((level) => {
                            const isSelected = answers[currentQuestion.id] === level.value
                            return (
                                <div
                                    key={level.value}
                                    onClick={() => handleLevelSelect(level.value)}
                                    className={cn(
                                        "flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-accent",
                                        isSelected ? "border-primary bg-primary/5 shadow-sm" : "border-transparent bg-secondary/30",
                                    )}
                                >
                                    <div className={cn(
                                        "flex h-8 w-8 items-center justify-center rounded-full border-2 mr-4 font-bold flex-shrink-0 transition-colors",
                                        isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground text-muted-foreground"
                                    )}>
                                        {level.value}
                                    </div>
                                    <div>
                                        <div className={cn("font-medium", isSelected ? "text-primary" : "text-foreground")}>{level.label}</div>
                                        <div className="text-sm text-muted-foreground">{level.desc}</div>
                                    </div>
                                    {isSelected && <CheckCircle2 className="ml-auto h-5 w-5 text-primary" />}
                                </div>
                            )
                        })}
                    </div>
                    {currentQuestion.transferableTo && (
                        <div className="mt-4 flex items-start gap-2 rounded-md bg-blue-50 p-3 text-sm text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
                            <AlertCircle className="h-4 w-4 mt-0.5" />
                            <p>
                                <strong>Bon à savoir :</strong> Cette compétence est très recherchée pour les métiers de : {currentQuestion.transferableTo.join(", ")}.
                            </p>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex justify-between border-t p-6">
                    <Button variant="ghost" onClick={handlePrevious} disabled={currentIndex === 0}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                    </Button>

                    {currentIndex === competences.length - 1 ? (
                        <Button onClick={finish} disabled={!answers[currentQuestion.id]}>
                            Voir mes résultats
                        </Button>
                    ) : (
                        <Button onClick={handleNext} disabled={!answers[currentQuestion.id]}>
                            Suivant <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </CardFooter>
            </Card>

            {/* Secret demo button */}
            <div className="flex justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button variant="link" size="sm" onClick={magicSolve} className="text-xs text-muted-foreground">
                    [DÉMO : Compléter tout]
                </Button>
            </div>
        </div>
    )
}
