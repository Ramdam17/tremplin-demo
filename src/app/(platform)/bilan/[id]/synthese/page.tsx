import SynthesePageClient from "./client-page"

export async function generateStaticParams() {
    return [{ id: "new" }];
}

export default function SynthesePage() {
    return <SynthesePageClient />
}
