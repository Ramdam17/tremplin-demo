"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, BookOpen, Settings, LogOut, Briefcase } from "lucide-react"

export function Sidebar() {
    const pathname = usePathname()
    const router = useRouter()
    const [role, setRole] = useState<"rh" | "salarie">("rh")

    useEffect(() => {
        const storedRole = localStorage.getItem("userRole") as "rh" | "salarie"
        if (storedRole) setRole(storedRole)
    }, [])

    const rhNavigation = [
        { name: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard },
        { name: "Bilans", href: "/bilans", icon: Users },
        { name: "Catalogue Métiers", href: "/catalogue", icon: BookOpen },
        { name: "Paramètres", href: "/settings", icon: Settings },
    ]

    const salarieNavigation = [
        { name: "Mon Espace", href: "/dashboard-salarie", icon: LayoutDashboard },
        { name: "Mon Parcours", href: "/bilan/new/profil", icon: BookOpen }, // Pointing to current bilan flow
        { name: "Catalogue Métiers", href: "/catalogue", icon: Briefcase }, // Reusing existing page
        { name: "Mes Paramètres", href: "/settings", icon: Settings },
    ]

    const navigation = role === "rh" ? rhNavigation : salarieNavigation

    return (
        <div className="flex h-full w-full md:w-64 flex-col border-r bg-card">
            <div className="flex h-16 items-center px-6 border-b">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                    Tremplin
                </span>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-3">
                    {navigation.map((item) => {
                        const isActive = pathname.startsWith(item.href)
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                                    )}
                                />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="border-t p-4 pb-8 md:pb-4">
                <button
                    onClick={() => {
                        localStorage.removeItem("userRole")
                        router.push("/login")
                    }}
                    className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                >
                    <LogOut className="mr-3 h-5 w-5" />
                    Déconnexion
                </button>
            </div>
        </div>
    )
}
