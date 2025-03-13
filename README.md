# 📷 Projet de Gestion d'Images & Carrousel

## 🌍 Conception & Objectifs
Ce projet est une application web permettant la gestion et l'affichage d'images via un carrousel interactif. L'architecture est pensée pour être légère et éco-responsable, minimisant la consommation de ressources tout en garantissant une expérience utilisateur fluide.

## 🛠️ Technologies utilisées
- **Frontend** : React avec TypeScript
  - Lazy loading pour optimiser le chargement des composants
  - Conversion des images en WebP pour réduire leur poids
  - Chargement différé (lazy loading) des images
  - Accessibilité et performances optimisées
- **Backend** : Express en TypeScript
  - Optimisation et compression des images via Sharp
  - API REST pour gérer l'upload et la suppression d'images
  - Gestion des logs et monitoring
- **Tests** : Vitest pour le backend

## 🚀 Déploiement
L'application sera hébergée sur **Infomaniak**, un hébergeur reconnu pour son engagement en faveur du Green IT.

### 🌱 Optimisation Green IT en Production
Pour respecter les normes de Green IT, plusieurs optimisations seront mises en place :
- **Hébergement éco-responsable** : Infomaniak fonctionne avec de l'électricité 100% renouvelable et compense son empreinte carbone.
- **Compression des assets** : Toutes les images et fichiers statiques seront optimisés.
- **Minification & Bundle Splitting** : Réduction de la taille des fichiers JS et CSS pour améliorer la rapidité et réduire la consommation de bande passante.
- **Cache et CDN** : Mise en cache des images et fichiers statiques pour limiter les requêtes serveurs.
- **Logs et monitoring** : Analyse des performances pour éviter une consommation excessive de ressources.

## 📜 Normes de codage
- **Lazy loading & Suspense** pour optimiser le rendu des pages.
- **Structure claire et modulaire** du code pour éviter les imbrications inutiles.
- **Utilisation minimale de dépendances externes**, en privilégiant les solutions natives.
- **Taille et poids des assets limités** (images max 100Ko, redimensionnées à 800px).

## 📄 Scripts disponibles
Dans le répertoire du projet, vous pouvez exécuter :

```bash
# Démarrer l'application en mode développement
npm start

# Construire l'application pour la production
npm run build

# Lancer les tests
npm test
```