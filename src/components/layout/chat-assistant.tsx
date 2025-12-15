"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send, Bot } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
    id: string
    role: "user" | "bot"
    text: string
}

export function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", role: "bot", text: "Bonjour ! Je suis Tremplin Coach 🤖. Je peux répondre à vos questions sur les formations, les financements ou vous aider à optimiser votre parcours." }
    ])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    // Knowledge Base for the Demo
    const knowledgeBase = [
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
            keywords: ["bonjour", "salut", "hello", "coucou"],
            response: "Bonjour ! 😊 Je suis ravi de vous voir. Une question sur votre projet ou la prochaine étape ?"
        }
    ]

    const findBestResponse = (userInput: string) => {
        const lowerInput = userInput.toLowerCase()
        const match = knowledgeBase.find(item =>
            item.keywords.some(keyword => lowerInput.includes(keyword))
        )
        return match ? match.response : "C'est une excellente question. Je n'ai pas la réponse exacte là tout de suite, mais je peux **planifier un échange de 15 min** avec un conseiller RH pour creuser ce point. \n\nVoulez-vous que je regarde les disponibilités ?"
    }

    const handleSendMessage = () => {
        if (!input.trim()) return

        const userMsg: Message = { id: Date.now().toString(), role: "user", text: input }
        setMessages(prev => [...prev, userMsg])
        const userQuestion = input // Capture for closure
        setInput("")
        setIsTyping(true)

        // Simulate reading & typing time based on complexity
        const delay = 1000 + Math.random() * 1000

        setTimeout(() => {
            const responseText = findBestResponse(userQuestion)
            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "bot", text: responseText }])
            setIsTyping(false)
        }, delay)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <div className={cn(
                "bg-background border rounded-lg shadow-xl w-80 sm:w-96 mb-4 transition-all duration-300 origin-bottom-right pointer-events-auto",
                isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none h-0 overflow-hidden"
            )}>
                <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg flex flex-row items-center justify-between space-y-0">
                    <div className="flex items-center gap-2">
                        <Bot className="h-5 w-5" />
                        <CardTitle className="text-base">Tremplin Coach</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-primary-foreground hover:bg-primary/20" onClick={() => setIsOpen(false)}>
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={cn(
                            "flex w-max max-w-[85%] flex-col gap-2 rounded-lg px-3 py-2 text-sm whitespace-pre-wrap",
                            msg.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"
                        )}>
                            {msg.text.split("**").map((part, i) =>
                                i % 2 === 1 ? <span key={i} className="font-bold">{part}</span> : part
                            )}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="bg-muted w-max rounded-lg px-3 py-2 flex gap-1">
                            <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"></span>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t mt-auto">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage() }} className="flex gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Posez votre question..."
                            className="flex-1"
                        />
                        <Button type="submit" size="icon" disabled={!input.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>

            {/* Toggle Button */}
            <Button
                size="icon"
                className="h-14 w-14 rounded-full shadow-lg pointer-events-auto bg-primary text-primary-foreground hover:bg-primary/90 animate-in zoom-in duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </Button>
        </div>
    )
}
