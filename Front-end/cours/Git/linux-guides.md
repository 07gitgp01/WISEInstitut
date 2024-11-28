## Introduction à GNU/Linux et aux commandes de base

GNU/Linux est un système d'exploitation open source qui combine le noyau Linux et les outils du projet GNU. C'est un système polyvalent, stable, et sécurisé, utilisé dans de nombreux domaines, des serveurs aux systèmes embarqués.

### 1. **Qu'est-ce que GNU/Linux ?**

GNU/Linux est un système d’exploitation basé sur le noyau Linux, développé par Linus Torvalds, et les outils GNU. Contrairement aux systèmes propriétaires comme Windows ou macOS, Linux est libre et open source. C'est un environnement apprécié pour sa flexibilité, sa stabilité et sa sécurité, surtout pour les serveurs et les développeurs.

### 2. **Pourquoi utilise-t-on les terminaux Linux ?**

Le terminal est un outil puissant qui permet d’interagir directement avec le système en tapant des commandes. Contrairement aux interfaces graphiques (GUI), il offre plus de contrôle, de rapidité, et la possibilité d’automatiser des tâches complexes. Les utilisateurs avancés préfèrent souvent le terminal pour :

- Automatiser des scripts
- Gérer des serveurs à distance
- Accéder à des outils système avancés
- Manipuler rapidement des fichiers et des répertoires

### 3. **Comprendre l'arborescence Linux**

Le système de fichiers Linux suit une structure hiérarchique où tout commence à la racine, représentée par `/`. Voici quelques répertoires importants :

- `/home` : Répertoire des utilisateurs
- `/etc` : Fichiers de configuration du système
- `/var` : Fichiers logs et données variables
- `/bin`, `/sbin`, `/usr/bin` : Contiennent les fichiers exécutables des commandes
- `/tmp` : Répertoire temporaire

### 4. **Manipulation de fichiers et répertoires**

Voici quelques commandes essentielles pour naviguer et manipuler les fichiers sous Linux :

- `ls` : Lister le contenu d’un répertoire
  
  ```bash
  ls
  ls -l  # Détails des fichiers et permissions
  ```

- `cd` : Changer de répertoire
  
  ```bash
  cd /home/user  # Accéder à /home/user
  ```

- `pwd` : Afficher le chemin du répertoire courant
  
  ```bash
  pwd
  ```

- `cp` : Copier des fichiers ou répertoires
  
  ```bash
  cp fichier.txt /home/user  # Copier fichier.txt vers /home/user
  ```

- `mv` : Déplacer ou renommer des fichiers
  
  ```bash
  mv fichier.txt nouveau_nom.txt  # Renommer fichier.txt
  ```

- `rm` : Supprimer des fichiers
  
  ```bash
  rm fichier.txt
  rm -r dossier  # Supprimer un dossier et son contenu
  ```

- `mkdir` : Créer un répertoire
  
  ```bash
  mkdir nouveau_dossier
  ```

### 5. **Permissions et propriété des fichiers**

Linux gère les droits d’accès aux fichiers et répertoires via des permissions et des propriétaires. Chaque fichier a des permissions pour le propriétaire, le groupe et les autres utilisateurs :

- `chmod` : Modifier les permissions d’un fichier ou d’un répertoire
  
  ```bash
  chmod 755 fichier.sh  # Lecture/exécution pour tous, écriture pour le propriétaire
  ```

- `chown` : Changer le propriétaire et le groupe d’un fichier
  
  ```bash
  chown user:group fichier.txt  # Assigner fichier.txt à user et au groupe group
  ```

### 6. **Surveillance et gestion des processus**

Linux vous permet de surveiller les processus en cours d’exécution et de les gérer facilement :

- `top` : Afficher les processus en temps réel et leur consommation
  
  ```bash
  top
  ```

- `kill` : Terminer un processus en utilisant son ID
  
  ```bash
  kill 1234  # Termine le processus avec l’ID 1234
  ```

### 7. **Connexion sécurisée à distance via SSH**

SSH (Secure Shell) permet de se connecter à distance sur un serveur de manière sécurisée. Voici la commande de base pour se connecter à un serveur distant :

```bash
ssh utilisateur@adresse_ip
```

Vous pouvez également utiliser des clés SSH pour éviter de saisir le mot de passe à chaque connexion.

### 8. **Commandes réseau**

- `ping` : Tester la connectivité réseau entre votre machine et une autre
  
  ```bash
  ping google.com  # Tester la connexion avec google.com
  ```

- `wget` : Télécharger des fichiers depuis Internet
  
  ```bash
  wget http://exemple.com/fichier.zip  # Télécharger un fichier
  ```

### 9. **Gestionnaire de paquets Linux**

Les gestionnaires de paquets permettent d’installer, mettre à jour et désinstaller des logiciels facilement. Selon la distribution Linux, il existe différents gestionnaires de paquets :

- **APT** (sur Debian/Ubuntu)
  
  ```bash
  sudo apt update  # Met à jour les listes de paquets
  sudo apt install nom_du_paquet  # Installer un paquet
  ```

- **YUM** (sur RedHat/CentOS)
  
  ```bash
  sudo yum install nom_du_paquet  # Installer un paquet
  ```

### 10. **Automatisation et scripting shell**

Le **Shell** est l’interface en ligne de commande de Linux. Vous pouvez écrire des scripts pour automatiser des tâches répétitives. Un script shell simple ressemble à ceci :

```bash
#!/bin/bash
echo "Bonjour, ceci est un script shell !"
```

Sauvegardez le script avec l'extension `.sh` et exécutez-le ainsi :

```bash
bash script.sh
```
