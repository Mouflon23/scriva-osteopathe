# Guide de Déploiement GitHub Pages

Ce guide vous aidera à déployer votre site web Scriva Ostéopathe sur GitHub Pages avec support pour le domaine personnalisé.

## Prérequis

1. Assurez-vous que votre projet est poussé vers un dépôt GitHub
2. Assurez-vous d'avoir les permissions nécessaires pour activer GitHub Pages
3. Pour le domaine personnalisé : Avoir un nom de domaine enregistré avec un fournisseur DNS

## Déploiement Automatique (Recommandé)

Le projet est configuré avec GitHub Actions pour un déploiement automatique. Voici comment le configurer :

### 1. Activer GitHub Pages

1. Allez dans votre dépôt GitHub
2. Cliquez sur l'onglet "Settings"
3. Faites défiler jusqu'à la section "Pages" dans la barre latérale gauche
4. Sous "Source", sélectionnez "Deploy from a branch"
5. Choisissez la branche "gh-pages" et le dossier "/ (root)"
6. Cliquez sur "Save"

### 2. Activer GitHub Actions

1. Allez dans l'onglet "Actions" de votre dépôt
2. Vous devriez voir le workflow "Deploy to GitHub Pages"
3. Cliquez dessus et cliquez sur "Run workflow" si nécessaire
4. Le workflow s'exécutera automatiquement à chaque push sur la branche main

## Configuration du Domaine Personnalisé

### 1. Configurer le Domaine Personnalisé dans GitHub

1. Allez dans votre dépôt → "Settings" → "Pages"
2. Dans le champ "Custom domain", entrez `scriva-osteopathe.fr`
3. Cochez "Enforce HTTPS" si disponible
4. Cliquez sur "Save"

### 2. Fichier CNAME Mis à Jour

Le fichier `public/CNAME` contient déjà votre domaine : `scriva-osteopathe.fr`

### 3. Configuration DNS

Configurez vos enregistrements DNS avec votre fournisseur de domaine :

#### Option A : Domaine Principal (scriva-osteopathe.fr)

```
Type: A
Nom: @
Valeur: 185.199.108.153
Valeur: 185.199.109.153
Valeur: 185.199.110.153
Valeur: 185.199.111.153
```

#### Option B : Sous-domaine (www.scriva-osteopathe.fr)

```
Type: CNAME
Nom: www
Valeur: [votre-username].github.io
```

### 4. Vérifier la Propagation DNS

Après avoir mis à jour le DNS, il peut falloir jusqu'à 24 heures pour que les changements se propagent. Vous pouvez vérifier avec :

- `dig scriva-osteopathe.fr` (pour le domaine principal)
- `dig www.scriva-osteopathe.fr` (pour le sous-domaine)

## Déploiement Manuel

Si vous préférez un déploiement manuel :

1. Installer le package gh-pages :

   ```bash
   npm install --save-dev gh-pages
   ```

2. Déployer manuellement :
   ```bash
   npm run deploy
   ```

## Configuration

- Le site utilise des chemins relatifs (`base: './'`) pour la compatibilité avec les domaines personnalisés
- La sortie de build va dans le dossier `dist`
- GitHub Actions construit et déploie automatiquement à chaque push sur la branche main
- Le fichier CNAME est automatiquement inclus dans le build

## Accéder à Votre Site

- **URL GitHub Pages** : `https://[votre-username].github.io/scriva-osteopathe/`
- **Domaine Personnalisé** : `https://scriva-osteopathe.fr` (après configuration)

## Dépannage

### Problèmes de Domaine Personnalisé

- Assurez-vous que les enregistrements DNS sont correctement configurés
- Vérifiez que le fichier CNAME contient le bon domaine
- Vérifiez la propagation DNS avec des outils en ligne
- Attendez jusqu'à 24 heures pour que les changements DNS prennent effet

### Problèmes Généraux

- Si le site ne se charge pas, vérifiez que GitHub Pages est activé dans les paramètres du dépôt
- Assurez-vous que la branche gh-pages existe et contient les fichiers construits
- Vérifiez les logs GitHub Actions pour toute erreur de build
- Vérifiez que HTTPS est activé pour les domaines personnalisés

## SSL/HTTPS

GitHub Pages fournit automatiquement des certificats SSL pour les domaines personnalisés. Assurez-vous de :

1. Cocher "Enforce HTTPS" dans les paramètres GitHub Pages
2. Attendre que le certificat SSL soit provisionné (peut prendre jusqu'à 24 heures)
3. Tester les versions HTTP et HTTPS de votre site
