import PlanPageClient from "./client-page"

export async function generateStaticParams() {
    return [{ id: "new" }];
}

export default function PlanPage() {
    return <PlanPageClient />
}
