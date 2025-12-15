import EvaluationPageClient from "./client-page"

export async function generateStaticParams() {
    return [{ id: "new" }];
}

export default function EvaluationPage() {
    return <EvaluationPageClient />
}
