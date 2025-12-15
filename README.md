# Tremplin - Prototype

**Plateforme de mobilité interne et de sécurisation des parcours professionnels.**

🚀 **Démo en ligne** : [https://ramdam17.github.io/tremplin-demo/](https://ramdam17.github.io/tremplin-demo/)

---

## À propos

Ce prototype a été développé pour démontrer la vision produit de **Tremplin** : un outil facilitant la transition professionnelle au sein des entreprises industrielles. Il adresse deux utilisateurs clés :
1.  **Le Salarié** : Qui souhaite évoluer mais a peur du changement (coût, formation, salaire).
2.  **Le RH** : Qui doit anticiper les besoins (GPEC) et piloter le climat social.

## Fonctionnalités Clés

### 🧠 Tremplin Copilot (IA)
Un assistant intelligent "AI-First" (disponible via le bouton ✨) qui répond aux inquiétudes réelles :
- *"Combien je vais gagner si je deviens technicien ?"*
- *"Est-ce que je peux utiliser mon CPF ?"*
- *"Quel est le climat social à la logistique ?"* (Vue RH)

### 📱 Mobile First
L'application est entièrement responsive :
- Menu latéral adaptatif (Drawer sur mobile).
- Tableaux de bord empilables.
- Mode Copilot "Plein écran" sur téléphone.

### 👥 Double Interface
- **Espace Salarié** : Timeline de progression, badges, articles, simulation de droits.
- **Espace RH** : Vue d'ensemble des cohortes, alertes, statistiques.

### ⚡ Parcours Bilan
Un wizard interactif en 5 étapes pour réaliser un bilan de compétences simplifié.

---

## Stack Technique

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **Icons** : Lucide React
- **Composants** : Radix UI / Shadcn concepts
- **Déploiement** : GitHub Pages (Static Export)

## Installation Locale

1.  **Cloner le projet** :
    ```bash
    git clone https://github.com/Ramdam17/tremplin-demo.git
    cd tremplin-demo
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

4.  Ouvrir [http://localhost:3000/tremplin-demo](http://localhost:3000/tremplin-demo).

## Déploiement

Ce projet est configuré pour un export statique (`output: 'export'`) compatible avec GitHub Pages.

**Commande de déploiement** :
```bash
npm run build
npx gh-pages -d out --dotfiles
```
