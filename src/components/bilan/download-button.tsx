"use client"

import { PDFDownloadLink } from '@react-pdf/renderer'
import { BilanDocument } from './pdf-document'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export function DownloadPDFButton() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return (
            <Button disabled className="gap-2 shadow-lg">
                <Download className="h-4 w-4" /> Chargement...
            </Button>
        )
    }

    return (
        <PDFDownloadLink document={<BilanDocument />} fileName="synthese-tremplin.pdf">
            {({ blob, url, loading, error }) => (
                <Button disabled={loading} className="gap-2 shadow-lg hover:scale-105 transition-transform bg-primary text-primary-foreground">
                    <Download className="h-4 w-4" />
                    {loading ? 'Génération...' : 'Télécharger mon dossier (PDF)'}
                </Button>
            )}
        </PDFDownloadLink>
    )
}
