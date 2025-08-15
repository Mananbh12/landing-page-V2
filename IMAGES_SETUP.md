# Configuration des Images - Carrousel Avant/Après et Galerie

## 📸 Images Requises

### 1. Carrousel Avant/Après
Placez vos images dans le dossier `public/` avec les noms suivants :

#### Projet 1 - Rénovation Appartement Haussmannien
- `before-1.jpg` - Image avant rénovation (800x600px minimum)
- `after-1.jpg` - Image après rénovation (800x600px minimum)

#### Projet 2 - Rénovation Parquet Appartement  
- `before-2.jpg` - Image avant rénovation
- `after-2.jpg` - Image après rénovation

#### Projet 3 - Remplacement Sol PVC Bureau
- `before-3.jpg` - Image avant rénovation
- `after-3.jpg` - Image après rénovation

### 2. Galerie de Travaux
Placez vos images dans le dossier `public/` avec les noms suivants :

#### Carrelage
- `gallery-carrelage-1.jpg` - Salle de bain contemporaine
- `gallery-carrelage-2.jpg` - Terrasse extérieure

#### Parquet
- `gallery-parquet-1.jpg` - Salon élégant
- `gallery-parquet-2.jpg` - Chambre principale

#### PVC
- `gallery-pvc-1.jpg` - Cuisine moderne
- `gallery-pvc-2.jpg` - Espace de travail

#### Rénovation
- `gallery-renovation-1.jpg` - Rénovation parquet
- `gallery-renovation-2.jpg` - Salle d'eau rénovée

## 🔧 Mise à Jour du Code

### 1. Carrousel Avant/Après
Modifiez le fichier `components/BeforeAfterCarousel.tsx` :

```typescript
const beforeAfterData: BeforeAfterImage[] = [
  {
    id: "1",
    before: {
      url: "/before-1.jpg", // Remplacez par votre image
      alt: "Description de votre image avant",
      description: "Description détaillée de l'état avant"
    },
    after: {
      url: "/after-1.jpg", // Remplacez par votre image
      alt: "Description de votre image après",
      description: "Description détaillée de l'état après"
    },
    projectTitle: "Titre de votre projet",
    location: "Localisation de votre projet",
    surface: "Surface traitée"
  },
  // ... autres projets
];
```

### 2. Galerie
Modifiez le fichier `components/WorkGallery.tsx` :

```typescript
const galleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "/gallery-carrelage-1.jpg", // Remplacez par votre image
    alt: "Description de votre image",
    title: "Titre de votre projet",
    description: "Description détaillée",
    category: "carrelage"
  },
  // ... autres images
];
```

## 📋 Recommandations Techniques

### Format des Images
- **Format** : JPG ou PNG
- **Dimensions** : 800x600px minimum (1200x800px recommandé)
- **Poids** : Moins de 500KB par image pour de bonnes performances
- **Qualité** : Haute qualité pour montrer vos réalisations

### Optimisation
- Compressez vos images avant de les uploader
- Utilisez des noms de fichiers descriptifs
- Ajoutez des descriptions alt pertinentes pour le SEO

### Structure des Dossiers
```
public/
├── before-1.jpg
├── after-1.jpg
├── before-2.jpg
├── after-2.jpg
├── before-3.jpg
├── after-3.jpg
├── gallery-carrelage-1.jpg
├── gallery-carrelage-2.jpg
├── gallery-parquet-1.jpg
├── gallery-parquet-2.jpg
├── gallery-pvc-1.jpg
├── gallery-pvc-2.jpg
├── gallery-renovation-1.jpg
└── gallery-renovation-2.jpg
```

## 🚀 Déploiement

1. Placez vos images dans le dossier `public/`
2. Mettez à jour les URLs dans les composants
3. Testez localement avec `npm run dev`
4. Déployez sur votre plateforme (Vercel, Netlify, etc.)

## 💡 Conseils

- Choisissez des images qui montrent clairement la transformation
- Assurez-vous que les images "avant" et "après" soient prises sous le même angle
- Ajoutez des descriptions détaillées pour chaque projet
- Utilisez des catégories pertinentes pour organiser votre galerie
