"use client"

import { Bell, Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center border-b bg-background/80 px-6 backdrop-blur-sm">
            <div className="flex flex-1 items-center gap-4">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Rechercher un dossier..."
                        className="w-full bg-background pl-9 md:w-[300px]"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex gap-2 items-center text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                    onClick={() => window.dispatchEvent(new Event('openCockpit'))}
                >
                    <Sparkles className="h-4 w-4" />
                    Assistant
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
                </Button>
                <div className="flex items-center gap-3 border-l pl-4">
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-medium">Marie Dupont</span>
                        <span className="text-xs text-muted-foreground">RH - Toyota Valenciennes</span>
                    </div>
                    <div className="h-9 w-9 overflow-hidden rounded-full bg-secondary">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marie" alt="Avatar" />
                    </div>
                </div>
            </div>
        </header>
    )
}
