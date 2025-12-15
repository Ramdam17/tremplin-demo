"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Try auto-redirect
    const timer = setTimeout(() => {
      router.push("/dashboard")
    }, 100)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-50">
      <div className="animate-spin h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      <p className="text-sm text-slate-500">Chargement de Tremplin...</p>

      {/* Fallback if JS hangs */}
      <a
        href="/tremplin-demo/dashboard"
        className="mt-4 text-xs text-indigo-500 underline hover:text-indigo-700"
      >
        Cliquez ici si la redirection ne fonctionne pas
      </a>
    </div>
  )
}
