import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Font.register({
//   family: 'Inter',
//   src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff'
// });

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        fontSize: 12,
        lineHeight: 1.5,
        color: '#333'
    },
    header: {
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3b82f6',
        marginBottom: 4
    },
    subtitle: {
        fontSize: 10,
        color: '#666'
    },
    section: {
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#111',
        backgroundColor: '#f3f4f6',
        padding: 6,
        borderRadius: 4
    },
    row: {
        flexDirection: 'row',
        marginBottom: 4
    },
    label: {
        width: 150,
        fontWeight: 'bold',
        color: '#666'
    },
    value: {
        flex: 1
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        color: '#999',
        fontSize: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10
    }
});

export const BilanDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Tremplin</Text>
                    <Text style={styles.subtitle}>Synthèse de parcours professionnel</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 10 }}>Réf: D-2025-001</Text>
                    <Text style={{ fontSize: 10 }}>Date: 15/12/2025</Text>
                </View>
            </View>

            {/* Profil */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>1. PROFIL DU SALARIÉ</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Nom Prénom :</Text>
                    <Text style={styles.value}>Sébastien Martin</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Poste actuel :</Text>
                    <Text style={styles.value}>Opérateur de production</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Entreprise :</Text>
                    <Text style={styles.value}>Toyota Motor Manufacturing France</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Ancienneté :</Text>
                    <Text style={styles.value}>12 ans</Text>
                </View>
            </View>

            {/* Projet */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>2. PROJET PROFESSIONNEL</Text>
                <View style={{ marginBottom: 10 }}>
                    <Text>
                        Le bénéficiaire souhaite évoluer vers un poste nécessitant plus de technicité et moins de contraintes physiques.
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Métier cible :</Text>
                    <Text style={{ ...styles.value, fontWeight: 'bold', color: '#10b981' }}>Technicien de Maintenance Industrielle</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Score compatibilité :</Text>
                    <Text style={styles.value}>85% (Très favorable)</Text>
                </View>
            </View>

            {/* Plan */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>3. PLAN D'ACTION DE FORMATION</Text>
                <View style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#eee', borderRadius: 4 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Titre Pro Technicien de Maintenance Industrielle (TMI)</Text>
                    <Text style={{ fontSize: 10, color: '#666' }}>Organisme : AFPA Prouvy</Text>
                    <Text style={{ fontSize: 10, color: '#666' }}>Durée : 6 mois (850h)</Text>
                    <Text style={{ fontSize: 10, color: '#666' }}>Coût pédagogique : 8 500 €</Text>
                </View>
            </View>

            {/* Financement */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>4. FINANCEMENT PRÉVISIONNEL</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Coût total :</Text>
                    <Text style={styles.value}>8 500 €</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Mobilisation CPF :</Text>
                    <Text style={styles.value}>- 2 150 €</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Abondement OPCO :</Text>
                    <Text style={styles.value}>- 4 445 €</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Abondement Ent. :</Text>
                    <Text style={styles.value}>- 1 905 €</Text>
                </View>
                <View style={{ marginTop: 10, borderTopWidth: 2, borderTopColor: '#000', paddingTop: 4, flexDirection: 'row' }}>
                    <Text style={{ ...styles.label, color: '#000' }}>Reste à charge :</Text>
                    <Text style={{ ...styles.value, fontWeight: 'bold', fontSize: 14, color: '#10b981' }}>0 €</Text>
                </View>
            </View>

            <Text style={styles.footer}>
                Document généré automatiquement par Tremplin - Ne vaut pas engagement contractuel sans signature.
            </Text>
        </Page>
    </Document>
);
