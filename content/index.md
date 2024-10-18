---
aliases: 
title: Introduction à la CTI
---

> [!Note] Introduction
>
> Cette page est une introduction à l'analyse des menaces (CTI), elle donne des pistes de compréhension sur les enjeux de la CTI, des exemples de campagnes et d'acteurs qui sont impliqués dans des attaques informatiques récentes. Il est conseillé d'explorer les autres pages de ce site pour en apprendre plus.

> **Le contenu a été écrit de Septembre à Novembre 2024.**


# Introduction


L'objectif de ce site est de proposer une introduction en français (autant que possible) à la Cyber Threat Intelligence (CTI, Analyse des menaces cyber). Cette introduction est basée sur des articles fournis en références, le plan est inspiré de celui de la formation FOR578 du SANS Institute ainsi que sur l'ouvrage [Visual Threat Intelligence](https://store.securitybreak.io/threatintel) de Thomas Roccia. Ce cours contient des points de vus personnels et des éléments de contextualisation applicables au monde de l'entreprise. Le contenu a été pensé comme une introduction devant être dispensée dans une école d'ingénieur généraliste. Il est majoritairement axé sur l'origine de la CTI, les méthodologies utilisées et sur son utilité comme outil de prise de décision. Peu de prérequis techniques sont nécessaires, cette introduction peut donc servir à tous et toutes, des étudiant·e·s curi·eux·euses jusqu'au RSSI en passant par les analystes CTI, j'espère que chacun·e pourra y apprendre quelque chose.

Pour comprendre à quoi fait référence la CTI il faut dans un premier temps définir ce qu'on entend par renseignement, par menaces et par cyber. Alors c'est parti! 😉

# Intelligence: Qu'est ce que le renseignement?

Un renseignement est une information à laquelle une organisation (état, entreprise...) ou un individu accorde de la valeur. La valeur d'un renseignement est généralement liée au fait que peu de personne y ont accès, que l'information associée est placée dans le contexte de l'organisation. Ainsi cet information devient utile à un processus de décision éclairé.

Afin de produire un renseignement fiable, il est nécessaire de connaître les données sur lesquelles il s’appuie, d'en comprendre les limites, d'être aussi conscient que possible des [[📚 Ressources et concepts/Biais cognitifs|biais cognitifs]] qui ont pu avoir lieu lors de l'analyse afin d'être en mesure d'adapter et de corriger son jugement si de nouvelles informations viennent le corroborer ou l'infirmer. Un renseignement n'est pas intrinsèquement vrai, ni figé dans le temps. La notion de [[📚 Ressources et concepts/Cycle du renseignement|cycle du renseignement]] illustre bien la nature mouvante et sans fin de la production de renseignements.

En fonction de l'organisation demandeuse du renseignement, les [[📚 Ressources et concepts/Priority Intelligence Requirement|besoins en renseignements]] ne sont pas les mêmes. Pour un état, l'origine d'une attaque et l'identité de son initiateur sont des données primordiales. En effet, les arnaques ou les demandes de rançons sont des délits, et en trouver l'origine peut permettre de condamner l'initiateur. De même, lorsqu'une attaque informatique ou une opération d'influence est attribuée avec certitude à un acteur étatique, cette information sert de monnaie d'échange diplomatique[^1]. 

Pour une entreprise, les besoins sont autres. Une entreprise veut défendre son système d'information (SI) qui contient des données sensibles liées à son activité: des données clients,  des brevets,  ses partenaires, des documents compromettants... Son besoin en renseignement est orienté sur la protection de son SI et assez peu sur l'origine des attaques, l'importance est de se prémunir des attaques en connaissant les méthodes et les infrastructures utilisées par tout groupe susceptible de menacer ses intérêts.

# Threat: Quelles menaces?

En CTI, les entreprises de cybersécurité distinguent généralement trois types d'acteurs: les [[👩🏽‍💻 Acteurs/APT|acteurs étatiques]] dont la motivation principale est l'espionnage et les acteurs cybercriminels qui ont des motivations financières et les [[👩🏽‍💻 Acteurs/Hacktivistes|hacktivistes]] qui ont des raisons idéologiques. (*cf. [[📚 Ressources et concepts/Nomenclatures des acteurs par éditeur de sécurité|Nomenclatures des acteurs par éditeur de sécurité]]*) 

En pratique, la réalité est bien plus complexe, des acteurs étatiques peuvent mener des attaques à but lucratifs, la cybercriminalité couvre des types d'acteurs très différents: [[☣ Malwares et outils offensifs/Ransomware|ransomwares]], [[👩🏽‍💻 Acteurs/IAB|IAB]], traffers, bulletproof hosting... 

Enfin la CTI s'applique bien à des sujets qui sont assez peu traités par la communauté cyber comme l'influence et les arnaques en ligne.

## Olympic Destroyer: un acteur étatique

Cette campagne est plus ancienne, mais est intéressante vis à vis de l'actualité 2024. En effet, Olympique Destroyer est une campagne d'attaque qui a ciblé les JOP d'Hiver 2018 à Pyeongchang. Olympic Destroyer a perturbé la cérémonie d’ouverture de l’évènement en rendant inopérant le site Internet, l’impression des billets, la connexion Wi-Fi, le système de vidéosurveillance, ainsi que certains affichages dans le stade et de la retransmission des flux vidéo. [^5] Ces attaques ont par la suite été attribué par plusieurs pays au Service de renseignement militaire russe (GRU) et expliquent en grande partie l'inquiétude qu'il y avait autour du risque cyber lors des JOP de Paris 2024. 

## RansomHub: un acteur cybercriminel

RansomHub est un opérateur de ransomware qui a émergé en Février 2024, depuis il a compromis plus de 200 victimes et fait partie des groupes les plus actifs.[^4] Il s'agit d'un Ransomware-as-a-Service, c'est à dire que le groupe met à disposition de ses affiliés un code malveillant qu'il a développé. Ce code, une fois déployé dans un réseau d'entreprise va chiffrer toutes les données et réclamer une rançon en échange de leur déchiffrement. Les affiliés à l'origine de la rançon en touche la majeure partie et en donne le reste à RansomHub (c'est pourquoi on parle d'affiliation, en général la commission est autour de 20%). Les affiliés de RansomHub pratiquent un schéma de double extorsion, c'est à dire qu'ils exfiltrent des données de leurs victimes et menacent de les publier en accès libre si la rançon n'est pas payée dans un délai imparti pouvant aller de quelques jours à quelques mois.  

## Des contours parfois flous

Cette partie détaille des cas inhabituels où la frontière entre criminalité et affaire d'état est mouvante. 

### Iran et ransomware

En Août 2024, le CISA (organisme en charge de la cybersécurité aux Etats-Unis) a publié conjointement avec le FBI un rapport sur Pioneer Kitten[^2]. Cet acteur a compromis des organisations en Israel et en Azerbaidjan afin d'en exfiltrer des données sensibles au profit du gouvernement iranien.  En parallèle, cet acteur a collaboré avec des affiliés à trois groupes de ransomware (BlackCat, RansomHouse et NoEscape). Pioneer Kitten a ainsi cédé ses accès et conseiller les affiliés afin d'extorquer des fonds aux entreprises compromises.  

### La Corée du Nord

La Corée du Nord mène depuis des années de nombreuses campagnes à l'encontre des crypto-monnaies qui permettent de financer le pays. Fin 2023, Recorded Future[^3] a publié un long rapport sur toutes ces attaques qui ont permis de détourner plus de 3 milliards d'euros depuis 2017. En 2022, ces vols représentaient 1,7 milliards d'euros, soit 5% du PIB du pays et 45% des dépenses militaires.

# Cyber: l'informatique

Je n'aime pas particulièrement ce terme, mais la cyber c'est pour dire qu'on parle d'ordinateurs. Le renseignement est un vaste monde, et il faut bien préciser de quoi on cause. Ici, on ne parlera pas de renseignement économique, ou de renseignement sur les menaces terroristes mais bien de renseignements sur les attaques informatiques: qui les effectue et comment?


[^1]: [https://www.gov.uk/government/speeches/minister-for-europe-statement-attempted-hacking-of-the-opcw-by-russian-military-intelligence](https://www.gov.uk/government/speeches/minister-for-europe-statement-attempted-hacking-of-the-opcw-by-russian-military-intelligence)
[^2]: [https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-241a](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-241a)
[^3]: [https://go.recordedfuture.com/hubfs/reports/cta-2023-1130.pdf](https://go.recordedfuture.com/hubfs/reports/cta-2023-1130.pdf)
[^4]: [https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-242a](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-242a)
[^5]:[https://www.cert.ssi.gouv.fr/uploads/CERTFR-2024-CTI-003.pdf](https://www.cert.ssi.gouv.fr/uploads/CERTFR-2024-CTI-003.pdf)