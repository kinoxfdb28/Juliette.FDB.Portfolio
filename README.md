# Projet : Analyse Wireshark — Détection DNS 
## Résumé
Capture et analyse simple de trafic DNS pour détection d'anomalies (beaconing). Objectif pédagogique et démonstration de compétences en analyse réseau défensive.

## Contenu du dépôt
- `rapport-dns.pdf` — rapport synthétique (1 page).(to be added)

## Méthode
- Outil : Wireshark  
- Filtres : `dns` ; ajout d'une colonne `Name` pour faciliter la lecture.  
- Statistiques : `Statistics → Conversations → DNS` pour compter les requêtes par domaine.

## Observations
- L’analyse du trafic DNS (filtres Wireshark dns et frame.time_delta_displayed) n’a révélé aucun comportement suspect. 
- Les requêtes observées correspondent aux activités légitimes de navigation web et aux résolutions DNS standards (1 à 2 requêtes par domaine). 
- Une simulation manuelle de requêtes répétées via nslookup a permis d’observer un schéma de requêtes régulières, typique d’un beaconing, pour fins d’entraînement

---





# Projet : OverTheWire Bandit

## Contexte
OverTheWire Bandit est un challenge *Capture The Flag (CTF)* d’initiation à la cybersécurité.  
Chaque niveau consiste à se connecter via SSH à un serveur Linux et à trouver le mot de passe du niveau suivant, uniquement avec des commandes en ligne de commande.

Ce projet m’a permis de pratiquer mes connaissances Linux et d’acquérir une première expérience pratique en cybersécurité.

---

## Progression

### Niveaux 0 à 5
- **Compétences acquises :**
  - Connexion à un serveur distant avec `ssh`
  - Navigation dans le système de fichiers (`ls`, `cd`, `pwd`)
  - Lecture de fichiers (`cat`, `less`)
  - Manipulation de fichiers cachés et fichiers avec noms spéciaux

---

### Niveaux 6 à 10
- **Compétences acquises :**
  - Recherche de fichiers avec `find`
  - Filtrage de contenu avec `grep`
  - Redirections (`>`, `<`) et pipes (`|`)
  - Gestion des permissions (`chmod`, `ls -l`)

---

### Niveaux 11 à 15
- **Compétences acquises :**
  - Décodage de fichiers encodés (Base64, hexdump)
  - Compression et décompression (`gzip`, `tar`)
  - Gestion des processus simples
  - Utilisation des permissions avancées

---

## Technologies et outils utilisés
- **Linux (ligne de commande)**
- **SSH**
- **Commandes Unix (find, grep, chmod, etc.)**

---

## Statut
- Progression actuelle : **15 niveaux complétés sur 34**  
- Prochaine étape : poursuivre jusqu’au niveau 20 et documenter les solutions principales.

---

## Captures d’écran
*(à insérer : capture du terminal montrant une connexion SSH réussie ou une commande clé)*

---

## Bilan
Ce projet m’a permis de :
- Consolider mes bases Linux  
- Développer une méthodologie de résolution de problèmes techniques  
- Me familiariser avec des situations réelles rencontrées en administration système et cybersécurité  
