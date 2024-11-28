### 1. **Initialiser un projet Git**

Avant de commencer à travailler sur un projet, vous devez d'abord initialiser Git dans votre répertoire local.

```bash
git init
```

Cela crée un dépôt Git local dans le dossier courant.

### 2. **Cloner un projet depuis GitHub**

Pour commencer à travailler sur un projet hébergé sur GitHub, vous devez le cloner dans votre machine locale.

```bash
git clone <URL-du-dépôt>
```

Remplacez `<URL-du-dépôt>` par l’URL du dépôt GitHub. Cela copie tous les fichiers du projet sur votre machine.

### 3. **Vérifier l'état du dépôt**

La commande `git status` vous permet de vérifier l'état des fichiers dans votre dépôt : si certains fichiers ont été modifiés, ajoutés ou supprimés, mais pas encore enregistrés dans Git.

```bash
git status
```

### 4. **Ajouter des fichiers au suivi**

Pour ajouter un fichier ou un ensemble de fichiers à l'index (staging area) avant de les enregistrer dans le dépôt, utilisez la commande suivante :

```bash
git add <nom-du-fichier>
```

Ou pour ajouter tous les fichiers modifiés :

```bash
git add .
```

### 5. **Valider les modifications (commit)**

Une fois que vous avez ajouté les fichiers, vous pouvez enregistrer vos modifications avec un message de commit.

```bash
git commit -m "Description de la modification"
```

Le message doit être clair et décrire ce qui a été modifié.

### 6. **Voir l'historique des commits**

Pour consulter l'historique des modifications dans le projet, utilisez :

```bash
git log
```

### 7. **Créer une nouvelle branche**

Les branches sont essentielles pour collaborer sur différentes fonctionnalités sans interférer avec le travail des autres.

```bash
git branch <nom-de-la-branche>
```

Ensuite, pour passer à cette branche :

```bash
git checkout <nom-de-la-branche>
```

Vous pouvez également créer et basculer directement sur une nouvelle branche avec :

```bash
git checkout -b <nom-de-la-branche>
```

### 8. **Fusionner une branche dans une autre (merge)**

Après avoir terminé de travailler sur une branche, vous pouvez la fusionner dans la branche principale (habituellement `main`).

```bash
git checkout main
git merge <nom-de-la-branche>
```

### 9. **Mettre à jour la branche locale (pull)**

Avant de travailler sur un projet collaboratif, il est recommandé de récupérer les dernières modifications du dépôt distant :

```bash
git pull origin main
```

### 10. **Envoyer vos modifications à GitHub (push)**

Après avoir fait un commit, vous devez envoyer vos modifications vers le dépôt distant sur GitHub.

```bash
git push origin <nom-de-la-branche>
```

### 11. **Gérer les conflits de fusion**

Si plusieurs personnes modifient le même fichier, vous pouvez rencontrer des conflits lors de la fusion des branches. Git vous montrera les parties en conflit que vous devrez résoudre manuellement dans les fichiers concernés. Une fois résolus, il faut valider à nouveau les modifications :

```bash
git add <nom-du-fichier-conflit>
git commit -m "Résolution des conflits"
```

### 12. **Créer une pull request**

Une fois que vous avez fini de travailler sur une fonctionnalité dans votre branche, vous pouvez créer une **pull request (PR)** sur GitHub pour demander à fusionner vos modifications dans la branche principale. Cela peut être fait directement depuis l'interface GitHub.

### 13. **Supprimer une branche**

Une fois une branche fusionnée et si elle n’est plus nécessaire, vous pouvez la supprimer pour garder le projet propre.

```bash
git branch -d <nom-de-la-branche>
```

### 14. **Forker un projet**

Si vous souhaitez collaborer sur un projet qui ne vous appartient pas, vous pouvez le forker. Cela crée une copie du dépôt sur votre propre compte GitHub. Ensuite, vous pouvez cloner ce fork localement, y travailler, et envoyer une **pull request** pour proposer vos modifications au projet original.

```bash
git clone <URL-du-fork>
```

### 15. **Configurer un dépôt distant**

Si vous travaillez sur un projet et que vous voulez le lier à un dépôt distant, vous devez ajouter une URL de dépôt distant.

```bash
git remote add origin <URL-du-dépôt>
```

Cela lie votre dépôt local au dépôt GitHub.

### 16. **Vérifier les dépôts distants**

Pour voir la liste des dépôts distants associés à votre dépôt local :

```bash
git remote -v
```

### 
