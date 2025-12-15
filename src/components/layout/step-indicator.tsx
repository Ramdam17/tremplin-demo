"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const steps = [
    { id: 1, name: "Profil" },
    { id: 2, name: "Évaluation" },
    { id: 3, name: "Résultats" },
    { id: 4, name: "Plan d'action" },
    { id: 5, name: "Synthèse" },
]

export function StepIndicator({ currentStep }: { currentStep: number }) {
    return (
        <div className="w-full py-4">
            <div className="relative flex items-center justify-between">
                {/* Connecting Line */}
                <div className="absolute left-0 top-1/2 -z-10 h-1 w-full -translate-y-1/2 bg-secondary" />
                <div
                    className="absolute left-0 top-1/2 -z-10 h-1 -translate-y-1/2 bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step) => {
                    const status =
                        step.id < currentStep
                            ? "complete"
                            : step.id === currentStep
                                ? "current"
                                : "upcoming"

                    return (
                        <div key={step.id} className="group flex flex-col items-center">
                            <div
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-300",
                                    status === "complete"
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : status === "current"
                                            ? "border-primary bg-background text-primary ring-4 ring-primary/20"
                                            : "border-muted-foreground/30 bg-background text-muted-foreground"
                                )}
                            >
                                {status === "complete" ? (
                                    <Check className="h-4 w-4" />
                                ) : (
                                    <span>{step.id}</span>
                                )}
                            </div>
                            <span
                                className={cn(
                                    "mt-2 text-xs font-medium transition-colors duration-300",
                                    status === "complete" || status === "current"
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {step.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
