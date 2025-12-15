import { cn } from "@/lib/utils"

export function PageContainer({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8", className)}>
            {children}
        </div>
    )
}
