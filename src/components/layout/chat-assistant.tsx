"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send, Sparkles, User, Bot, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
    id: string
    role: "user" | "bot"
    text: string
}

export function ChatAssistant() {
    // Shared state management could be moved to context, but fine here for demo scope
    // We use a custom event to trigger opening from Header
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    const [role, setRole] = useState<"rh" | "salarie">("rh")

    useEffect(() => {
        // Listen for custom event from Header
        const handleOpenCopilot = () => setIsOpen(true)
        window.addEventListener('openCockpit', handleOpenCopilot)
        return () => window.removeEventListener('openCockpit', handleOpenCopilot)
    }, [])

    useEffect(() => {
        const storedRole = localStorage.getItem("userRole") as "rh" | "salarie"
        if (storedRole) {
            setRole(storedRole)
            const greeting = storedRole === "rh"
                ? "Bonjour. Je suis votre Assistant RH Intelligent. Je peux analyser vos données sociales ou préparer vos rapports."
                : "Bonjour ! Je suis votre Copilote de Carrière. Parlons de votre avenir, de vos droits ou de votre formation."

            if (messages.length === 0) {
                setMessages([{ id: "1", role: "bot", text: greeting }])
            }
        }
    }, [])

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping, isOpen])


    // Knowledge Base for Salarié
    const knowledgeBaseSalarie = [
        {
            keywords: ["financement", "cout", "coût", "payer", "prix", "cpf", "argent"],
            response: "Le financement est un point clé. Dans votre cas, nous pouvons mobiliser votre **CPF** (2 150 € disponibles) et solliciter un **abondement correctif** de l'entreprise. \n\nEn moyenne, le reste à charge pour le salarié est de **0 €** grâce à ces dispositifs."
        },
        {
            keywords: ["salaire", "gagner", "rémunération", "paye", "argent"],
            response: "Pour le poste de **Technicien de Maintenance**, le salaire médian à l'embauche est de **2 100 € net/mois**, soit une augmentation de **+15%** par rapport à votre poste actuel. \n\nLes perspectives d'évolution vers Chef d'équipe sont rapides (2-3 ans)."
        },
        {
            keywords: ["formation", "durée", "temps", "ou", "école", "afpa", "greta"],
            response: "Nous avons identifié le **Titre Pro TMI** (Niveau 4). \n\n• **Durée** : 6 mois (850 heures)\n• **Lieu** : AFPA Prouvy (à 15km)\n• **Rythme** : Possibilité de le faire en alternance ou en congé de transition professionnelle."
        },
        {
            keywords: ["peur", "stress", "difficile", "capable", "niveau", "peux pas"],
            response: "C'est normal d'avoir des doutes. Sachez que **85% de vos compétences actuelles** (rigueur, sécurité, travail d'équipe) sont transférables.\n\nLa formation est très pratique (70% d'atelier) et conçue pour des profils comme le vôtre."
        },
        {
            keywords: ["merci", "top", "super"],
            response: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions."
        },
        {
            keywords: ["bonjour", "salut", "hello", "coucou"],
            response: "Bonjour ! 😊 Je suis ravi de vous voir. Une question sur votre projet ou la prochaine étape ?"
        }
    ]

    // Knowledge Base for RH
    const knowledgeBaseRH = [
        {
            keywords: ["budget", "cout", "dépense", "argent", "finances"],
            response: "Point Budget Formation T3 :\n\n• **Engagé** : 245 000 € (78% du budget annuel)\n• **Reste à engager** : 65 000 €\n• **ROI estimé** : 1.4 sur les actions de reconversion interne.\n\nSouhaitez-vous exporter le rapport complet ?"
        },
        {
            keywords: ["climat", "social", "ambiance", "moral", "stress"],
            response: "Analyse du climat social :\n\n• **Satisfaction globale** : 4.2/5 (+0.3 pts)\n• **Point de vigilance** : Équipe Logistique de nuit (Turnover en hausse de 5%).\n• **Action recommandée** : Lancer une enquête QVT ciblée."
        },
        {
            keywords: ["gpec", "compétences", "mobilité", "besoins", "recrutement"],
            response: "Alerte GPEC - Maintenance :\n\nNous anticipons **3 départs à la retraite** d'ici 18 mois sur le pôle Maintenance. \n\nActuellement, **5 salariés** sont en parcours de reconversion vers ces métiers via Tremplin. Le vivier est suffisant."
        },
        {
            keywords: ["bonjour", "salut", "hello", "coucou"],
            response: "Bonjour ! Prêt à piloter votre capital humain ? Je suis à votre écoute."
        }
    ]

    const findBestResponse = (userInput: string) => {
        const lowerInput = userInput.toLowerCase()
        const currentKnowledgeBase = role === "rh" ? knowledgeBaseRH : knowledgeBaseSalarie

        const match = currentKnowledgeBase.find(item =>
            item.keywords.some(keyword => lowerInput.includes(keyword))
        )
        return match ? match.response : "Je n'ai pas cette donnée précise en mémoire immédiate. Voulez-vous que je génère un rapport PDF sur ce sujet ?"
    }

    const handleSendMessage = () => {
        if (!input.trim()) return

        const userMsg: Message = { id: Date.now().toString(), role: "user", text: input }
        setMessages(prev => [...prev, userMsg])
        const userQuestion = input
        setInput("")
        setIsTyping(true)

        // Simulate reading & typing time
        const delay = 800 + Math.random() * 800

        setTimeout(() => {
            const responseText = findBestResponse(userQuestion)
            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "bot", text: responseText }])
            setIsTyping(false)
        }, delay)
    }

    return (
        <>
            {/* Backdrop for Copilot Mode */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-background/20 backdrop-blur-sm z-40 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Side Panel */}
            <div className={cn(
                "fixed top-0 right-0 bottom-0 z-50 w-full md:w-[450px] bg-background/95 backdrop-blur-xl border-l shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-muted/30">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                            <Sparkles className="h-4 w-4" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-sm">Tremplin Copilot</h2>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                En ligne
                            </p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-muted/50 rounded-full">
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.map((msg) => (
                        <div key={msg.id} className={cn(
                            "flex gap-3 max-w-[90%]",
                            msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                        )}>
                            <div className={cn(
                                "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center",
                                msg.role === "user" ? "bg-muted" : "bg-gradient-to-br from-indigo-500 to-violet-600 text-white"
                            )}>
                                {msg.role === "user" ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                            </div>

                            <div className={cn(
                                "rounded-2xl px-4 py-3 text-sm shadow-sm whitespace-pre-wrap",
                                msg.role === "user"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted/50 border backdrop-blur-md"
                            )}>
                                {msg.text.split("**").map((part, i) =>
                                    i % 2 === 1 ? <span key={i} className="font-bold opacity-90">{part}</span> : part
                                )}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                                <Sparkles className="h-4 w-4" />
                            </div>
                            <div className="bg-muted/50 border rounded-2xl px-4 py-3 flex gap-1 items-center h-10 w-16 justify-center">
                                <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-muted/10">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage() }} className="relative">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Posez une question à votre assistant..."
                            className="pr-12 py-6 bg-background/50 border shadow-sm rounded-xl focus-visible:ring-indigo-500"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            size="icon"
                            disabled={!input.trim()}
                            className="absolute right-1 top-1 h-10 w-10 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-muted-foreground">L'IA peut faire des erreurs. Vérifiez les informations importantes.</p>
                    </div>
                </div>
            </div>

            {/* Floating Trigger (Bottom Right) - Reduced Size & Modern Look */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:scale-105 transition-all duration-300 z-30 group"
                >
                    <Sparkles className="h-5 w-5 fill-white" />
                    <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-foreground text-background text-xs px-2 py-1 rounded shadow-sm font-medium">
                        Ouvrir Copilot
                    </span>
                </Button>
            )}
        </>
    )
}
