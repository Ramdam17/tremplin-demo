import ProfilPageClient from "./client-page"

export async function generateStaticParams() {
    return [{ id: "new" }];
}

export default function ProfilPage() {
    return <ProfilPageClient />
}
