# Tremplin — Todo List Prototype Demo

**Objectif :** Un prototype cliquable et impressionnant pour une démo investisseurs.
**Temps estimé :** 3-5 jours de dev concentré
**Philosophie :** Tout ce qui n'est pas montré n'existe pas. Tout ce qui est montré doit être beau.

---

## 🎯 Principe du "Fake it till you make it"

| Ce qui doit MARCHER | Ce qui peut être SIMULÉ |
|---------------------|-------------------------|
| Navigation entre écrans | Calculs de compatibilité (hardcodé) |
| Formulaires qui s'enregistrent (localStorage) | Données marché (JSON statique) |
| Transitions fluides | Matching formations (pré-calculé) |
| Responsive basique | Authentification (un seul user) |
| Export PDF | Intégrations API externes |

---

## 📋 Phase 1 : Setup (Jour 1 matin)

### Environnement
- [ ] Créer le repo GitHub `tremplin-app`
- [ ] Init projet Next.js 14+ (App Router)
- [ ] Setup Tailwind CSS
- [ ] Installer les dépendances clés :
  - [ ] `lucide-react` (icônes)
  - [ ] `framer-motion` (animations)
  - [ ] `react-hook-form` (formulaires)
  - [ ] `jspdf` ou `@react-pdf/renderer` (export PDF)
  - [ ] `recharts` (graphiques si besoin)
- [ ] Configurer les fonts (Inter ou similaire)
- [ ] Définir la palette de couleurs dans `tailwind.config.js`
- [ ] Créer le layout de base avec sidebar/header

### Structure des dossiers
```
/app
  /dashboard          → Dashboard RH
  /bilan
    /[id]
      /profil         → Étape 1
      /evaluation     → Étape 2
      /resultats      → Étape 3
      /plan           → Étape 4
      /synthese       → Étape 5
  /login              → Page de connexion (fake)
/components
  /ui                 → Boutons, inputs, cards...
  /layout             → Header, Sidebar, ProgressBar
  /bilan              → Composants spécifiques au parcours
/data
  /mock               → Toutes les données simulées
/lib
  /utils              → Helpers divers
```

---

## 📋 Phase 2 : Composants UI de base (Jour 1 après-midi)

### Design System minimal
- [ ] `Button` — primaire, secondaire, ghost
- [ ] `Input` — text, select, radio, checkbox
- [ ] `Card` — container avec ombre légère
- [ ] `Badge` — statuts (en cours, terminé, etc.)
- [ ] `ProgressBar` — pour les étapes et les jauges
- [ ] `Modal` — pour confirmations
- [ ] `Alert` — messages d'info/warning

### Layout
- [ ] `Header` — logo, nom utilisateur, avatar
- [ ] `Sidebar` — navigation principale (version RH)
- [ ] `StepIndicator` — barre de progression des 5 étapes
- [ ] `PageContainer` — wrapper avec padding cohérent

---

## 📋 Phase 3 : Données mockées (Jour 2 matin)

### Fichiers JSON à créer

#### `/data/mock/users.json`
```json
{
  "rh": {
    "id": "rh-001",
    "name": "Marie Dupont",
    "role": "RH",
    "company": "Toyota France",
    "site": "Valenciennes"
  },
  "salarie": {
    "id": "sal-001", 
    "name": "Sébastien Martin",
    "poste": "Opérateur de production",
    "anciennete": 12,
    "diplome": "CAP",
    "cpf": 2100
  }
}
```

#### `/data/mock/bilans.json`
- [ ] 3-4 bilans en cours avec statuts différents
- [ ] Données de progression (étape actuelle, % complété)
- [ ] Un bilan complet (Sébastien) pour la démo

#### `/data/mock/competences.json`
- [ ] Liste de 20-25 compétences évaluables
- [ ] Catégories (techniques, transversales, comportementales)
- [ ] Descriptions par niveau (1 à 4)
- [ ] Métiers associés pour chaque compétence

#### `/data/mock/metiers.json`
- [ ] 5-7 métiers cibles réalistes
- [ ] Données marché par métier :
  - Nombre d'offres (région Hauts-de-France)
  - Tension du marché
  - Salaire médian
- [ ] Compétences requises par métier
- [ ] Score de compatibilité pré-calculé pour Sébastien

#### `/data/mock/formations.json`
- [ ] 8-10 formations réelles (AFPA, GRETA, UIMM...)
- [ ] Durée, lieu, coût
- [ ] Éligibilités (CPF, Pro-A, OPCO)

#### `/data/mock/financements.json`
- [ ] Liste des dispositifs (CPF, plan entreprise, Pro-A, OPCO 2i, AGEFIPH)
- [ ] Conditions d'éligibilité simplifiées
- [ ] Montants types

---

## 📋 Phase 4 : Écrans principaux (Jour 2-3)

### Login (fake)
- [ ] Page simple avec logo
- [ ] Deux boutons : "Connexion RH" / "Connexion Salarié"
- [ ] Pas de vrai auth — juste stocker le rôle dans localStorage
- [ ] Redirect vers dashboard ou bilan selon le rôle

### Dashboard RH (`/dashboard`)
- [ ] KPIs en haut (3 cards : en cours, terminés, en attente)
- [ ] Liste des bilans avec :
  - Photo placeholder / initiales
  - Nom, poste
  - Barre de progression
  - Bouton "Voir"
- [ ] Zone alertes (hardcodé)
- [ ] Bouton "+ Nouveau bilan" (peut juste afficher un toast "Bientôt disponible")

### Étape 1 : Profil (`/bilan/[id]/profil`)
- [ ] Step indicator en haut
- [ ] Formulaire :
  - Poste actuel (input)
  - Ancienneté (select)
  - Diplôme (select)
  - Motivations (checkboxes multiples)
  - Mobilité (radio + select km)
  - Salaire minimum (input)
- [ ] Sauvegarde dans localStorage
- [ ] Bouton "Continuer" → navigation vers étape 2

### Étape 2 : Évaluation (`/bilan/[id]/evaluation`)
- [ ] Step indicator
- [ ] Affichage question par question (pas tout d'un coup)
- [ ] Compteur "Question X / 24"
- [ ] Temps estimé restant
- [ ] 4 niveaux avec descriptions
- [ ] Info "compétence transférable vers..."
- [ ] Navigation précédent/suivant
- [ ] Barre de progression globale
- [ ] Stocker les réponses dans localStorage
- [ ] **Raccourci démo** : bouton caché "Compléter tout" pour skip

### Étape 3 : Résultats (`/bilan/[id]/resultats`)
- [ ] Step indicator
- [ ] Rappel des contraintes (mobilité, salaire)
- [ ] Liste des métiers possibles :
  - Score de compatibilité (badge coloré)
  - Mini-card avec données marché
  - Jauge compétences acquises
  - Gap identifié
  - Bouton "Voir détail" (peut ouvrir un modal)
- [ ] Bouton "Construire mon plan" → sélectionne le premier métier

### Étape 4 : Plan d'action (`/bilan/[id]/plan`)
- [ ] Step indicator
- [ ] Titre "Votre plan vers : [Métier choisi]"
- [ ] Timeline visuelle (composant custom ou simple div stylisée)
- [ ] Liste des formations :
  - Nom, organisme, lieu
  - Durée
  - Coût
  - Badges éligibilité
- [ ] Encart synthèse financière :
  - Coût total
  - Ligne par financement
  - **Reste à charge = 0 €** (le moment "wow")
- [ ] Boutons : "Changer d'orientation" / "Valider ce plan"

### Étape 5 : Synthèse (`/bilan/[id]/synthese`)
- [ ] Step indicator (complet)
- [ ] Message de succès
- [ ] Résumé en 4 blocs :
  - Profil
  - Compétences clés
  - Orientation choisie
  - Plan de financement
- [ ] Bouton "Télécharger le rapport PDF"
- [ ] Bouton "Retour au dashboard" (si RH)

---

## 📋 Phase 5 : Génération PDF (Jour 4 matin)

### Contenu du PDF
- [ ] Page de garde avec logo, nom, date
- [ ] Section Profil
- [ ] Section Compétences (tableau ou liste)
- [ ] Section Orientation recommandée
- [ ] Section Plan de formation
- [ ] Section Financement
- [ ] Footer avec mentions légales fake

### Technique
- [ ] Utiliser `@react-pdf/renderer` ou `jspdf`
- [ ] Template sobre et professionnel
- [ ] Générer côté client (pas besoin de backend)

---

## 📋 Phase 6 : Polish & Animations (Jour 4 après-midi)

### Transitions
- [ ] Fade in sur les pages
- [ ] Slide sur les questions d'évaluation
- [ ] Animation des jauges de progression
- [ ] Confetti ou check animé sur la synthèse finale

### Micro-interactions
- [ ] Hover states sur tous les boutons
- [ ] Focus visible pour accessibilité
- [ ] Loading states (même fake, avec spinner)
- [ ] Toast de confirmation sur les sauvegardes

### Responsive
- [ ] Tester sur tablet (iPad)
- [ ] Tester sur mobile (doit être utilisable, pas parfait)

---

## 📋 Phase 7 : Déploiement & Préparation démo (Jour 5)

### Déploiement
- [ ] Déployer sur Vercel (gratuit, 2 min)
- [ ] URL propre : `tremplin-demo.vercel.app` ou custom si dispo
- [ ] Vérifier que tout marche en prod

### Données de démo
- [ ] Pré-remplir un bilan complet (Sébastien)
- [ ] Avoir un bilan vierge pour montrer le parcours
- [ ] Vérifier que le localStorage peut être reset facilement

### Script de démo (pour Fiona)
- [ ] Écrire le déroulé minute par minute
- [ ] Identifier les "moments wow" :
  1. Dashboard clair et pro
  2. Questions d'évaluation avec transférabilité
  3. Données marché en temps réel (fake mais crédible)
  4. Reste à charge = 0 €
  5. PDF généré instantanément

### Backup
- [ ] Screenshots de chaque écran (si bug en live)
- [ ] Version locale qui tourne sans internet

---

## 🚨 Ce qu'on NE fait PAS pour le prototype

- ❌ Vraie authentification
- ❌ Base de données
- ❌ API backend
- ❌ Intégration France Travail réelle
- ❌ Multi-utilisateurs
- ❌ Gestion des droits
- ❌ Tests automatisés
- ❌ Internationalisation
- ❌ Mode sombre

---

## ⏱️ Planning suggéré

| Jour | Focus | Livrable |
|------|-------|----------|
| J1 | Setup + composants UI | App qui tourne, design system |
| J2 | Données mock + Dashboard + Étape 1-2 | Parcours début fonctionnel |
| J3 | Étape 3-4-5 | Parcours complet cliquable |
| J4 | PDF + animations + polish | Version "impressionnante" |
| J5 | Deploy + script démo + répétition | Prêt pour vendredi |

---

## 💡 Tips pour impressionner

1. **Données réalistes** — Utilise de vrais noms de formations, vrais organismes, vrais salaires. Ça crédibilise tout.

2. **Le chiffre magique** — "Reste à charge : 0 €" doit apparaître en gros, en vert. C'est LE moment de la démo.

3. **Rapidité perçue** — Même si c'est du localStorage, mets un petit délai (300ms) + spinner avant d'afficher les résultats. Ça donne l'impression que "ça calcule".

4. **Un vrai PDF** — Pouvoir télécharger un vrai document, même simple, c'est concret. Les investisseurs adorent.

5. **Mobile** — Si tu montres vite fait que ça marche sur téléphone, ça rassure sur la scalabilité.

---

## 🛠️ Ressources utiles

- [Tailwind UI](https://tailwindui.com) — Composants prêts à l'emploi (payant mais inspiration gratuite)
- [Headless UI](https://headlessui.com) — Composants accessibles
- [Lucide Icons](https://lucide.dev) — Icônes clean
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [React PDF](https://react-pdf.org/) — Génération PDF

---

*Dernière mise à jour : Décembre 2025*