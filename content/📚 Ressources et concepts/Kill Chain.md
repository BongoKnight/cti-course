
La kill chain est un modèle proposé par trois employés  de Lockheed Martin en 2011. Il détaille en 7 étapes, le processus nécessaire à la conduite d'une attaque informatique :

![[📎 Attachments/Kill_Chain.excalidraw.png]]

- **Reconnaissance** : Recherche et identification d'une cible, cette étape laisse rarement des traces sur le système d'information (SI) des cibles, il s'agit le plus souvent d'OSINT, 
- **Armement** (Weponization): Etape de création d'une charge malveillante (payload) et mise en place de l'infrastructure devant être utilisée pour mener une attaque, cette étape est aussi effectuée en dehors du système du SI des victimes, 
- **Livraison** (Delivery): Positionnement de la charge malveillante dans le SI de la cible, cette "livraison" peut être fait par mail, en utilisant une clef USB, par un lien vers un site web,
- **Exploitation** : Exécution du code malveillant, à ce stade le code exploite généralement des vulnérabilités dans un applicatif ou un système d'exploitation,
- **Installation** : Installation d'une porte dérobée (backdoor) ou d'un accès à distance ([[☣ Malwares et outils offensifs/RAT|RAT]], webshell) permettant d'obtenir un accès persistant de le réseau cible.
- **Command & Control** : Un système compromis cherche généralement à contacter un serveur de commande (C2) qui permet à l'attaquant de faciliter la gestion de plusieurs machine compromises et d'automatiser certaines tâches comme la mise à jour, le téléchargement d'autre payload ou la suppression du code malveillant.
- **Actions sur objectif** (Action on Objectives): Opération effectuée par l'attaquant : pivots dans le réseau, chiffrement ou exfiltration de données.

Les étapes 1, 2 et 7 se font dans des temporalités longues, pouvant aller de quelques heures à plusieurs mois. Alors que les étapes 3 à 6 se font généralement sur le temps court, un unique code en s’exécutant une seule fois peut effectuer toutes ces étapes. Dans le cadre d'une attaque, toutes ou une partie des étapes de la Kill Chain peuvent être répétées jusqu'à ce que l'attaquant parvienne à ses fins.

# Modèle alternatif

Il existe d'autres modèles, notamment [[📚 Ressources et concepts/Mitre ATT&CK|Mitre ATT&CK]] qui proposent une Kill Chain similaire. Mitre détaille plus finement les étapes d'une attaque mais peut être aisément comparé à la Kill Chain de Lockheed Martin :

![[📎 Attachments/Kill_chian_mitre.png]]

# Utilisation

Lors de la réponse à un incident ou de la remontée d'une alerte, il est nécessaire d'analyser les traces laissées par toutes les étapes précédentes dans la Kill Chain. Cette analyse doit permettre de colmater les "trous" dans la sécurité de l'organisation qui a été attaquée et permet de s'assurer qu'aucune autre activité malveillante liée à cette détection n'a pas été détectée. Plusieurs contre-mesures peuvent être prises en fonction des failles exploitées par l'attaquant, dans tous les cas, l'objectif est de le forcer à changer le plus possible sa méthodologie afin d'augmenter le coût d'une tentative intrusion. S'il doit seulement déposer un nouveau nom de domaine afin de pouvoir revenir, un attaquant reviendra rapidement. En revanche, s'il doit développer un nouveau malware, il ne reviendra probablement pas de si tôt. (cf [[📚 Ressources et concepts/Pyramid of Pain|Pyramid of Pain]]) 

# Ressources

- Article original de Lockheed Martin: [https://web.archive.org/web/20210727082508/https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf](https://web.archive.org/web/20210727082508/https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf)