---
aliases:
  - modèle en diamant
---

![[📎 Attachments/Diamondmodel.excalidraw.png]]

# Données principales

Ce modèle est couramment utilisé pour modéliser les informations collectées sur une attaque informatique. Il permet de représenter facilement comment un *attaquant* utilise ses *capacités* via une *infrastructure* pour effectuer une action malveillante contre une *victime*. Dans sa forme la plus simple, il répond à plusieurs questions courantes : Qui? Comment? Avec quels moyens?

Les quatre sommets du diamant représentent :

- **L'attaquant**: le groupe, le hacker, l'affiliés qui est derrière une attaque, il peut aussi s'agir d'un pseudo utilisé sur un réseau social, un forum...
- **Ses capacités** (ou TTPs): on y liste toutes les méthodes et outils utilisés par l'attaquant, il peu s'agir de vulnérabilités qu'un attaquant sait exploiter, du code qu'il utilise pour l'exploiter, ou de capacités plus larges comme "envoi massif de SMS", 
- **La ou les victimes**: il peut s'agir d'un individu, d'une société, d'un compte applicatif, d'une machine unique...
- **L'infrastructure utilisée**: détaille l'infrastructure technique utilisée pour mener une attaque, il peut s'agir d'une infrastructure dédiée, partagée ou compromise, opérée ou non  par l'attaquant. 

# Données contextuelles

Cependant le modèle initial prévoit l'introduction **de métadonnées complémentaires** qui permettent la contextualisation de l'information:

-  Des **horodatages** de début et/ou de fin,
-  A quelle **phase** d'une attaque la représentation s'applique, on utilise généralement les phases définies dans la [[📚 Ressources et concepts/Kill Chain|Kill Chain]],
- Le **statut**, est ce que l'attaque ou la phase représentée a réussi, et si c'est le cas si elle impacte la confidentialité, l'intégrité ou l’accessibilité des données.   

# Description de l'activité d'un attaquant

Le modèle complet prévoit de détailler avec un modèle en diamant chaque étape de la [[Kill Chain]]. En pratique, cette représentation est complexe, demande d'avoir beaucoup d'information sur une seule attaque, prend du temps à rédiger et est, in fine, rarement utilisée. Afin de détailler les capacités d'un acteur aux différentes phases d'une attaque, les rapports de threat intelligence intègrent plutôt une cartographie ou un tableaux listant les techniques [[📚 Ressources et concepts/Mitre ATT&CK|Mitre ATT&CK]] employées.

![[📎 Attachments/Activity_thread.png]]

# Utilisation pour le regroupement de plusieurs campagnes




> [!NOTE] Utilisation dans l'industrie
> 
> Cette méthodologie est généralement appliquée implicitement par les analystes qui rédigent des rapports. Elle est rarement détaillée, mais quand on lit souvent que "les chevauchements de l'infrastructure et des techniques employées entre la campagne analysée par X et celle que nous détaillons sont insuffisant, nous avons donc décidé de la nommer différemment".
>
> Il arrive souvent que deux entreprises n'aient pas la même visibilité sur une même campagne d'attaque. Chacune considérera sa vision comme une campagne unique, *a posteriori* le lien est établi. Ainsi une même campagne ou un même acteur se retrouve alors avec deux alias. (cf. [[📚 Ressources et concepts/Nomenclatures des acteurs par éditeur de sécurité|Nomenclatures des acteurs par éditeur de sécurité]]) 


# Ressources

- Article original : "The Diamond Model of Intrusion Analysis", par Sergio Caltagirone: [https://threatconnect.com/wp-content/uploads/The_Diamond_Model_of_Intrusion_Analysis.pdf](https://threatconnect.com/wp-content/uploads/The_Diamond_Model_of_Intrusion_Analysis.pdf)