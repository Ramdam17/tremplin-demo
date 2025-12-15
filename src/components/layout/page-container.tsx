import { cn } from "@/lib/utils"

export function PageContainer({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={cn("container mx-auto px-4 md:px-8 py-6 md:py-8 space-y-6 md:space-y-8", className)}>
            {children}
        </div>
    )
}
