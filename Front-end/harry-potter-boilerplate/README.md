# Wise Institut Classroom - Harry Potter Website 🎓

Ce document-ci décrit la conception d'un site web immersif consacré à l'univers de Harry Potter . Le site vise à plonger les amoureux de films d'aventures dans l'univers magique qui explore des aventures extraordinaires, des personnages inoubliables et des créatures légendaires.
	Important est de noter que le projet combinera certaines compétences en UX|UI design , et animations pour créer une expérience utilisateur agréable tout en valorisant nos compétences techniques sur GitHub.
Le projet se présentera selon la structure suivante :


## 📌 Table des matières

- [Vue d'ensemble](#-vue-densemble)
  - [Le défi](#le-defi)
  - [Capture d'écran](#capture-décran)
  - [Liens](#liens)
- [Mon processus](#mon-processus)
  - [Construit avec](#construit-avec)
  - [Ce que j'ai appris](#ce-que-jai-appris)
  - [Développement continu](#developpement-continu)
  - [Ressources utiles](#ressources-utiles)
- [Auteur](#auteur)
- [Remerciements](#remerciements)


## 📌 Vue d'ensemble

### ⚫ Le défi

**`Contenu du site`**
- [ ] Inclure une `barre de navigation` conviviale avec un `grand titre` et les sections `représentant les thèmes` principaux du site.
- [ ] Rédiger un `message de bienvenue` engageant qui présente brièvement l'univers de Harry Potter, l'œuvre de J.K. Rowling, et son impact culturel en 
      `3 à 4 paragraphes`.
- [ ] Ajouter un `titre captivant` qui introduit les différents `thèmes` abordés sur le site.
- Présenter les `trois thèmes principaux` sous forme de `cartes`:
  - [ ] `Les personnages`: Mettre en lumière les trois protagonistes principaux et leur importance dans l'histoire.
  - [ ] `Les magies`: Explorer les trois types de magie les plus courants, en expliquant leur rôle dans les aventures.
  - [ ] `Les herbologies`: Décrire les trois plantes magiques les plus utilisées, en précisant leurs propriétés et applications.
- Le `pied de page` (footer) contiendra:
  - [ ] `Description du site`: Un résumé de l'objectif et du contenu du site.
  - [ ] `Droits d'auteur`: Mentionner le copyright, par exemple: &copy; Raja Rakotonirina - 2024.
  - [ ] `Liens` (facultatif): Ajouter un lien vers compte GitHub ou site personnel pour les visiteurs intéressés.

**`HTML`**

- [ ] Créer une structure HTML5 sémantique pour un site consacré à l'univers de Harry Potter.
- [ ] Ajouter des métadonnées dans la balise `<head>`, telles que des informations sur l'auteur, les mots-clés et l'encodage du fichier.
- [ ] Utiliser des balises sémantiques telles que `<header>`, `<nav>`, `<section>`, `<footer>`, `<div>` pour structurer correctement la page.
- [ ] Créer une navigation avec des liens entre les différentes sections du site.
- [ ] Utiliser des balises de texte structurées comme `<h1>`, `<h3>`, `<p>`, et `<span>` pour présenter le contenu de manière claire.
- [ ] Inclure des images avec des balises `<img>` et ajouter des attributs `alt` appropriés pour l'accessibilité.

**`CSS`**

- [ ] Importer et utiliser la police "harryp" pour l'ensemble de la page grâce à `@font-face`.
- [ ] Ajouter une image de fond (Poudlard) qui reste fixe et couvre toute la page, tout en étant bien centrée.
- [ ] Créer une barre de navigation avec des liens interactifs :
  - [ ] Les liens doivent être de couleur `blanche`.
  - [ ] Au survol, les liens doivent changer en `#b2aef4` (bleu clair).
- [ ] Organiser le contenu avec des marges et du padding pour que les éléments soient bien espacés et faciles à lire sur tous les écrans.
- [ ] Ajouter des animations aux 3 thèmes de Harry Potter (personnages, herbologies, magies) : Quand on passe la souris dessus, les cartes doivent s'agrandir légèrement et avoir une ombre moins prononcée.
- [ ] Appliquer des ombres aux éléments (thèmes) pour leur donner un effet visuel de profondeur (ombre plus forte par défaut et ombre légère au survol).
- [ ] Utiliser des `media queries` pour rendre la page adaptable aux petits écrans : Ajuster la taille des cartes et des marges pour que tout s'affiche 
	correctement sur mobile.
- [ ] La couleur de fond de l'en-tête et du pied de page doit être `#5e58c6` (violet).
- [ ] Le texte dans l'en-tête doit être `blanc`.


### ⚫ Capture d'écran

![Harry Potter univers](https://github.com/user-attachments/assets/f5f2d76b-69c2-485a-a081-ce436522fd67)


### ⚫ Liens

- URL Github de la solution:[Solution sur Github](https://github.com/07gitgp01/WISEInstitut/tree/main/Front-end/harry-potter-boilerplate)

## 📌 Mon processus

**Planification :** Définir l'objectif, les sections et le contenu du site.

**Conception :** une étape que j'ai malheureusement sauté, qui devait consister à créer une interface visuelle captivante en respectant le thème de l’univers Harry Potter.

**Développement :** Utiliser HTML, CSS, pour coder la structure, le style et l’interactivité du site.

**Optimisation :** Optimisation pour les moteurs de recherche. M'assurer que ma page contient des balises méta appropriées pour le référencement.

**Mise en ligne :** Déployer le projet sur mon github 

### ⚫ Construit avec

- Balises HTML5 sémantiques
- Propriétés personnalisées CSS
- Flexbox + Media queries

### ⚫ Ce que j'ai appris
-Importer et utiliser de polices comme "harryp" pour l'ensemble de la page grâce à `@font-face`.
```css
@font-face {
    font-family: 'harryp';
    src: url('../assets/fonts/harryp.ttf');
}
```

- Ajouter des animations quand on passe la souris dessus.
```css
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.sotXimg img:hover {
    animation: pulse 2s ease-in-out infinite;
    transform: scale(1.1);
    transform: rotate3d(1.2);
}
```

- Appliquer des ombres aux éléments pour leur donner un effet visuel de profondeur (ombre plus forte par défaut et ombre légère au survol).
```css
.sotXimg img {
    max-width: 100%;
    border: 1px solid #f1c70a;
    border-radius: 10%;
    transition: all 1s ease-in-out;
    z-index: 1;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 1);
}
```

- Utiliser des `media queries` pour rendre la page adaptable aux petits écrans

```css
@media (max-width: 768px) {
    .sots {
      flex-direction: column;
      align-items: center;
    }
  
    .sotX {
      width: 80%;
      margin-bottom: 20px;
    }
   .sotY {
      width: 80%;
      margin-bottom: 20px;
    }
}
```
- Ajouter des métadonnées dans la balise `<head>`, telles que des informations sur l'auteur, les mots-clés et l'encodage du fichier.
```css
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Un site dédié à l'univers magique de Harry Potter">
  <meta name="keywords" content="Harry Potter, magie, personnages, herbologie">
  <meta name="author" content="W.Paulin GUIGMA">
  <title>Harry Potter Website</title>
  <link rel="icon" href="./assets/icons/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="./styles/index.css">
</head>
```

### ⚫ Développement continu
Il faut noter que à l'avenir dans mes projets, j'aimerais bien peaufiner mes connaissances sur les medias queries et flexbox.

### ⚫ Ressources utiles

- [ChatGPT ](https://chatgpt.com) - Cela m'a aidé à comprendre des notions. J'ai vraiment aimé ce modèle et je l'utiliserai à l'avenir.
- [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Ce site est incroyable et m'a aidé à apprehender beaucoup de choses en css, notamment le flexbox. Je le recommande à tous ceux qui apprennent encore ce concept.

## 📌 Auteur

- Github - [@07gitgp01](https://github.com/07gitgp01/WISEInstitut/tree/main/Front-end/harry-potter-boilerplate)

## 📌 Remerciements

Nos remerciements vont à l'endroit de [Raja Rakotonirina](https://github.com/RajaRakoto/) mon encadreur en front end.
Et bien à WISE INSTITUTE où je suis ma formation en full stack.
