import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ChatAssistant } from "@/components/layout/chat-assistant"

export default function PlatformLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto bg-gray-50/50 dark:bg-zinc-900/50">
                    {children}
                </main>
                <ChatAssistant />
            </div>
        </div>
    )
}
