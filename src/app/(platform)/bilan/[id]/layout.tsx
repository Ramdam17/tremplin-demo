import Link from "next/link"
import BilanLayoutClient from "./client-layout"

export async function generateStaticParams() {
    return [{ id: "new" }];
}

export default function BilanLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <BilanLayoutClient>{children}</BilanLayoutClient>
}
