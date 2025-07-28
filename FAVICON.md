# Favicons - Scriva Ostéopathe

Ce document explique la configuration des favicons pour le site Scriva Ostéopathe.

## Fichiers Générés

Les favicons ont été générés à partir du logo `public/images/logo.jpg` et incluent :

### Favicons Standard

- `favicon.ico` - Favicon principal (format ICO)
- `favicon-16x16.png` - Favicon 16x16 pixels
- `favicon-32x32.png` - Favicon 32x32 pixels
- `favicon-48x48.png` - Favicon 48x48 pixels

### Apple Touch Icons

- `apple-touch-icon.png` - Icône principale pour iOS
- `apple-touch-icon-57x57.png` à `apple-touch-icon-1024x1024.png` - Différentes tailles pour iOS
- `apple-touch-icon-precomposed.png` - Version précomposée pour iOS

### Android Chrome Icons

- `android-chrome-36x36.png` à `android-chrome-512x512.png` - Différentes tailles pour Android

### Web App Manifest

- `manifest.webmanifest` - Manifeste pour les applications web progressives (PWA)

## Styles de Favicons

### Favicons Arrondis (Recommandé)

Les favicons actuels utilisent un style arrondi avec des coins de 20% pour un look moderne et professionnel.

### Favicons Très Arrondis

Pour des favicons avec des coins plus arrondis (50%), utilisez :

```bash
npm run generate-rounded-favicons
```

## Configuration

### HTML

Le fichier `index.html` inclut toutes les balises nécessaires pour :

- Favicons standard
- Apple Touch Icons
- Android Chrome Icons
- Web App Manifest
- Meta tags pour les applications mobiles

### Meta Tags Inclus

- `theme-color` : Couleur du thème (#4a90e2)
- `apple-mobile-web-app-capable` : Permet l'installation sur iOS
- `apple-mobile-web-app-status-bar-style` : Style de la barre de statut iOS
- `application-name` : Nom de l'application

## Régénération

### Favicons Arrondis Standard

```bash
npm run generate-favicons
```

### Favicons Très Arrondis

```bash
npm run generate-rounded-favicons
```

Ou directement :

```bash
node generate-favicons.mjs
node generate-rounded-favicons.mjs
```

## Personnalisation

Pour modifier les favicons, vous pouvez :

1. Remplacer le fichier `public/images/logo.jpg` par votre nouveau logo
2. Choisir le style de favicon :
   - `npm run generate-favicons` pour des coins arrondis (20%)
   - `npm run generate-rounded-favicons` pour des coins très arrondis (50%)
3. Les nouveaux favicons seront automatiquement utilisés par le site

### Configuration Avancée

Vous pouvez modifier les fichiers de configuration pour :

- Changer les couleurs du thème
- Modifier le nom de l'application
- Ajuster les tailles d'icônes générées
- Personnaliser les paramètres PWA
- Modifier le niveau d'arrondi des coins

#### Paramètres d'Arrondi

- `iconRadius: 0.2` - Coins arrondis à 20% (style standard)
- `iconRadius: 0.5` - Coins très arrondis à 50% (style très arrondi)

## Compatibilité

Les favicons sont compatibles avec :

- Tous les navigateurs modernes
- iOS Safari (Apple Touch Icons)
- Android Chrome (Android Chrome Icons)
- Applications web progressives (PWA)
- Windows (tiles)

## Déploiement

Les favicons sont automatiquement inclus dans le build de production et seront disponibles sur :

- GitHub Pages : `https://[username].github.io/scriva-osteopathe/`
- Domaine personnalisé : `https://scriva-osteopathe.fr`
