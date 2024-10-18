---
aliases:
  - indicator of compromise
  - indicateur de compromission
  - iocs
  - ioc
---
Un IOC (Indicator of Compromise ou indicateur de compromission) est un indicateur technique contextualisé qui permet d'indiquer qu'un système a été compromis ou ciblé par un attaquant. 

L'indicateur peut être un hash (condensat) de fichier, une adresse IP, un nom de domaine... Mais pour être utile cette donnée a besoin d'être contextualisée. Sinon quand il s'agit de chercher cet indicateur dans des journaux d’événements, de remédier à une alerte levée le concernant, il est impossible de savoir que faire et par ou commencer. Comme son nom le suggère, un indicateur doit indiquer quelque chose.

Un exemple de bases de données contenant des IOCs est la base de signatures d'un antivirus (peut être vous souviendrez vous de cette phrase célèbre, "la base virale VPS a été mise à jour"). Cette base contient une liste de condensats (ou hashes) de fichiers identifiés comme malveillants avec une brève description du type de menace qu'ils représentent.

L'article de Lockheed Martin qui définit la [[📚 Ressources et concepts/Kill Chain|Kill Chain]] introduit aussi la notion de cycle de vie des indicateurs de compromission. Tous les IoC n'ont pas la même valeur, certains sont plus difficiles à changer pour un attaquant, lorsque l'on est en charge de la défense d'un réseau, il faut garder cette idée en tête afin d'entraver au maximum les potentielles attaques informatiques. *(cf. [[📚 Ressources et concepts/Pyramid of Pain|Pyramid of Pain]])*