---
aliases: 
title: Introduction à la CTI
---

> **Le contenu a été écrit de Septembre à Novembre 2024.**


# Introduction


L'objectif de cette page est de proposer une introduction en français (autant que possible) à la Cyber Threat Intelligence (CTI, Analyse des menaces cyber). Cette introduction est basée sur des articles fournis en références, le plan est inspiré de celui de la formation FOR578 du SANS Institute ainsi que sur l'ouvrage [Visual Threat Intelligence](https://store.securitybreak.io/threatintel) de Thomas Roccia. Il contient aussi des points de vus personnels et des éléments de contextualisation applicables au monde de l'entreprise. Le contenu a été pensé comme une introduction devant être dispensée dans une école d'ingénieur généraliste. Il est majoritairement axé sur l'origine de la CTI, les méthodologies utilisées et sur son utilité comme outil de prise de décision. Peu de prérequis techniques sont nécessaires, cette introduction peut donc servir à tous et toutes, des étudiant·e·s curi·eux·euses jusqu'au RSSI en passant par les analystes CTI, j'espère que chacun·e pourra y apprendre quelque chose.


# Intelligence: une introduction au renseignement


## Qu'est ce que le renseignement?

Un renseignement est une information à laquelle une organisation (état, entreprise...) ou un individu accorde de la valeur. La valeur d'un renseignement est généralement liée au fait que peu de personne y ont accès, que l'information est placée dans le contexte de l'organisation, ainsi elle est utile à un processus de décision éclairé.

Afin de produire un renseignement fiable, il est nécessaire de connaître les données sur lesquelles il s’appuie, d'en comprendre les limites, d'être aussi conscient que possible des [[📚 Ressources et concepts/Biais cognitifs|Biais cognitifs]] qui ont pu avoir lieu lors de l'analyse afin d'être en mesure d'adapter et de corriger son jugement si de nouvelles informations viennent le corroborer ou l'infirmer. Un renseignement n'est pas intrinsèquement vrai, ni figé dans le temps. La notion de [[📚 Ressources et concepts/Cycle du renseignement|cycle du renseignement]] illustre bien la nature mouvante et sans fin de la production de renseignements.

On s'intéresse ici à la production de renseignements sur les menaces informatiques. En fonction de l'organisation demandeuse du renseignement, les besoins ne sont pas les mêmes. Une entreprise veut défendre son système d'information (SI) qui contient des données sensibles liées à son activité, données clients, brevets, partenaires, documents compromettants... Son besoin en renseignement est orienté sur la protection du SI et assez peu sur l'origine des attaques, l'importance est de se prémunir des attaques en connaissant les méthodes et les infrastructures utilisées par tout groupe susceptible de menacer ses intérêts. En revanche, un état a des besoins tout autres, l'origine d'une attaque et l'identité de son initiateur sont des données primordiales, dans le cadre d'arnaques, de demandes de rançons, il s'agit de délits qui sont justiciables. Lorsque une attaque informatique ou une opération d'influence est attribuable avec certitude à un acteur étatique, cette information peut servir de monnaie d'échange diplomatique[^1].  


## Quelles menaces?

En CTI, les entreprises de cyber-sécurité distinguent généralement deux grand types d'acteurs, les acteurs étatiques dont la motivation principale est l'espionnage et les acteurs cybercriminels qui ont des motivations financières (*cf. [[📚 Ressources et concepts/Nomenclatures des acteurs par éditeur de sécurité|Nomenclatures des acteurs par éditeur de sécurité]]*). En pratique, la réalité est bien plus complexe. Les acteurs étatiques peuvent mener des attaques à but lucratifs, la cybercriminalité recouvrent des types d'acteurs très différents. Enfin la CTI s'applique bien à des sujets qui sont assez peu traités par la majorité des rapports publiés : l'influence et les arnaques en ligne.


### RansomHub: un acteur cybercriminel

### Olympique Destroyer: un acteur étatique

### 

Cette partie détaille des cas inhabituels où la frontière entre criminalité et affaire d'état est mouvante. 

#### Iran et ransomware

En Août 2024, le CISA (organisme en charge de la cybersécurité aux Etats-Unis) a publié conjointement avec le FBI un rapport sur Pioneer Kitten[^2]. Cet acteur a compromis des organisations en Israel et en Azerbaidjan afin d'en exfiltrer des données sensibles au profit du gouvernement iranien.  En parallèle, cet acteur a collaboré avec des affiliés à trois groupes de ransomware (BlackCat, RansomHouse et NoEscape). Pioneer Kitten a ainsi cédé ses accès et conseiller les affiliés afin d'extorquer des fonds aux entreprises compromises.  

#### La Corée du Nord

La Corée du Nord mène depuis des années de nombreuses campagnes à l'encontre des crypto-monnaies qui permettent de financer le pays. Fin 2023, Recorded Future[^3] a publié un long rapport sur toutes ces attaques qui ont permis de détourner plus de 3 milliards d'euros depuis 2017. En 2022, ces vols représentaient 1,7 milliards d'euros, soit 5% du PIB du pays et 45% des dépenses militaires.

# Quels outils pour l'analyse?

## Biais

## Analyse structurée



[^1]: [https://www.gov.uk/government/speeches/minister-for-europe-statement-attempted-hacking-of-the-opcw-by-russian-military-intelligence](https://www.gov.uk/government/speeches/minister-for-europe-statement-attempted-hacking-of-the-opcw-by-russian-military-intelligence)
[^2]: [https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-241a](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-241a)
[^3]: [https://go.recordedfuture.com/hubfs/reports/cta-2023-1130.pdf](https://go.recordedfuture.com/hubfs/reports/cta-2023-1130.pdf)