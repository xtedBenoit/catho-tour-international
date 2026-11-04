# Catho Tour International — Portfolio Vitrine Officiel V1

Portfolio vitrine officiel de **Catho Tour International** (Retrospective de l'Edition Inaugurale au Ghana & Ouverture des Pre-inscriptions Cap Senegal 2027).

## Architecture & Stack Technique

- **Frontend** : Architecture statique haute performance (HTML5 semantique, Tailwind CSS, CSS3 sur-mesure, Vanilla JavaScript ES6+).
- **Design System** : *Sacred Light* (`#FAF7F2` Alabaster, `#0A192F` Deep Marian Navy, `#C5A059` Liturgical Gold), typographies *Cormorant Garamond*, *Plus Jakarta Sans*, et *Cinzel*.
- **Fonctionnalites Cles** :
  - Retrospective editoriale et galerie de l'edition inaugurale au Ghana (Accra, Cape Coast, Elmina) avec filtrage dynamique et tiroir de recit jour par jour (Drawer).
  - Configurateur d'inscription et de manifestation d'interet pour l'edition **Cap Senegal 2027** (Dakar, Ile de Goree, Sanctuaire Marial de Popenguine) avec generation de reference et passerelle WhatsApp pre-remplie.
  - Assistant interactif et conciergerie WhatsApp directe (`+228 91 39 98 98`).
  - Version autonome hors-ligne (`catho-tour-portable.html`) integrant l'ensemble des ressources critiques pour presentation sur le terrain sans connexion.

## Structure du Repertoire

```text
catho-tour-international/
├── index.html                 # Application principale V1
├── styles.css                 # Feuille de styles et tokens Sacred Light
├── app.js                     # Logique applicative (retrospective, drawer, wizard, assistant)
├── assets/                    # Photographies authentiques optimisees (.jpg)
├── catho-tour-portable.html   # Bundle autonome 100% hors-ligne (Single-File)
├── vercel.json                # Configuration de deploiement Vercel (headers & cache)
└── .gitignore                 # Exclusions Git
```

## Deploiement Local & Production

### Execution locale
Aucun serveur de compilation requis. Ouvrir directement `index.html` ou servir via un serveur HTTP statique :
```bash
npx serve .
```

### Deploiement Vercel
Le fichier `vercel.json` configure automatiquement les URLs propres (`cleanUrls: true`), les en-tetes de securite (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) et le cache longue duree (`immutable`) sur `/assets/*`.
