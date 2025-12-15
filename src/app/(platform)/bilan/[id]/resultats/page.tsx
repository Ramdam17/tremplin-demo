import ResultatsPageClient from "./client-page"

export async function generateStaticParams() {
    return [{ id: "new" }];
}

export default function ResultatsPage() {
    return <ResultatsPageClient />
}
