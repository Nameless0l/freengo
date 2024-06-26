# 🚀 **PROJET DE RESEAU** 🌐

## 🌍 Description globale du projet

1. Le projet consiste à développer une plateforme de gestion des voyages utilisant une architecture micro-services, offrant ainsi une solution flexible et évolutive pour faciliter les déplacements des usagers.
2. La plateforme permettra aux utilisateurs de planifier, réserver et gérer leurs voyages de manière efficace. Elle englobera plusieurs services indépendants, chacun dédié à des aspects spécifiques tels que la réservation, la localisation, le paiement, la gestion des utilisateurs, etc.
3. Le système sera conçu sous forme de micro-services, où chaque service se concentrera sur une fonctionnalité particulière liée aux voyages, comme la réservation de vols, la location de voitures, la réservation d'hôtels, etc.
4. Chaque micro-service sera autonome, ce qui permettra un déploiement indépendant et une gestion efficace de la charge. Les services pourront être mis à l'échelle individuellement en fonction des besoins.
5. Les micro-services interagiront entre eux via des API REST pour échanger des données et coordonner les actions nécessaires pour les voyages des utilisateurs.
6. Gestion des Utilisateurs et Authentification : Un service dédié gérera l'authentification des utilisateurs, la gestion des profils, les préférences de voyage et les historiques de réservation.
7. Des services analytiques pourront être mis en place pour suivre les tendances de réservation, fournir des recommandations personnalisées et optimiser l'expérience utilisateur.

## 🎨 Theme de notre projet : Collecte des usagers

## 👥 Contributeur

### Superviseur
- 👤 **Pr.Dr DJOTIO THOMAS**
  - [Github](https://github.com/Djotio)

### Membres

- 👤 [@Nameless (Mbassi Ewolo Loic Aron)](https://github.com/Nameless0l)
- 👤 [@PacomeKFP (Kengali Fegue Pacome)](https://github.com/PacomeKFP)
- 👤 [@Ngo-Bassom-Anne-Rosa (Ngo Bassom Anne Rosalie)](https://github.com/Ngo-Bassom-Anne-Rosa)
- 👤 [@FredyFezeu (Fezeu Fredy)](https://github.com/FredyFezeu)
- 👤 [@AKAM URIEL (AKAM URIEL)](https://github.com/)

# 🚌 **Freengo**

## 📑 Table des matières

- [Introduction](#introduction)
- [Description du problème](#description-du-problème)
- [Notre Solution](#notre-solution)
  - [Fonctionnalités pour les clients](#fonctionnalités-pour-les-clients)
  - [Fonctionnalités pour les chauffeurs](#fonctionnalités-pour-les-chauffeurs)
- [Vocabulaire Technique](#vocabulaire-technique)
- [Cahier des charges](#cahier-des-charges)
  - [Objectifs du projet](#objectifs-du-projet)
  - [Exigences fonctionnelles](#exigences-fonctionnelles)
  - [Exigences non fonctionnelles](#exigences-non-fonctionnelles)
- [Modélisation du projet](#modélisation-du-projet)
  - [Analyse](#analyse)
  - [Conception](#conception)
- [Services utilisés](#services-utilisés)
- [Implémentation](#implémentation)
  - [Interfaces](#interfaces)
  - [Back-end](#back-end)
- [Difficultés rencontrées](#difficultés-rencontrées)
- [Améliorations et Recommandations](#améliorations-et-recommandations)
- [Déploiement](#déploiement)
  - [Prérequis](#prérequis)
  - [Instructions de déploiement](#instructions-de-déploiement)
- [Conclusion](#conclusion)

## 📝 Introduction

Bienvenue dans le projet Freengo ! Freengo est une plateforme innovante qui facilite la gestion des déplacements en connectant efficacement les clients et les chauffeurs. Ce projet a été développé dans le cadre de la gestion de la collecte des usagers, en utilisant des technologies modernes comme Next.js pour le frontend et Spring Boot pour le backend.

## 🛠️ Description du problème

Les déplacements des individus et des biens nécessitent une gestion efficace pour assurer l'échange, la communication et le développement économique. Freengo vise à résoudre ce problème en optimisant la collecte des usagers et en proposant un service de transport efficace et convivial.

## 💡 Notre Solution

Pour résoudre le problème, nous avons développé Freengo, une plateforme accessible aux clients et aux chauffeurs. Les technologies utilisées sont :

- **Frontend** : Next.js
- **Backend** : Spring Boot
- **Base de données** : ScyllaDB

### 🚀 Fonctionnalités pour les clients

- **Inscription et Connexion** : Création et gestion de compte utilisateur.
- **Publication d'une Offre Client** : Demande de déplacement avec détails.
- **Historique des Déplacements** : Consultation des trajets précédents.
- **Chat** : Communication avec les chauffeurs.
- **Gestion des Informations Personnelles** : Mise à jour des informations personnelles.

### 🚗 Fonctionnalités pour les chauffeurs

- **Inscription et Connexion** : Création et gestion de compte chauffeur.
- **Affichage de l'Itinéraire** : Visualisation des trajets optimaux.
- **Acceptation des Clients** : Gestion des demandes de course.
- **Historique des Déplacements** : Consultation des trajets précédents.
- **Suivi des Clients et Destinations** : Information sur les passagers et destinations.
- **Gestion des Courses** : Gestion en temps réel des trajets.
- **Suivi des Revenus** : Suivi des revenus et paiements.
- **Mises à Jour du Véhicule** : Mise à jour des détails du véhicule.

## 🗂️ Vocabulaire Technique

- **Client** : Personne ou groupe utilisant le service.
- **Passager** : Client ayant une demande de déplacement acceptée.
- **Colis** : Objets transportés
- **Véhicule** : Engin de transport.
- **Itinéraire** : Trajet parcouru.
- **Forfait de transport** : Formules de déplacement (ramassage ou dépôt).

## Cahier des charges

### Objectifs du projet

Freengo vise à fournir une plateforme intuitive pour la gestion des déplacements, assurant une expérience utilisateur fluide et sécurisée.

### Exigences fonctionnelles

- **Inscription et Authentification** : Création de compte et connexion sécurisée.
- **Gestion des Profils** : Mise à jour des informations personnelles.
- **Demandes de Déplacement** : Création et gestion des demandes.
- **Gestion des Trajets** : Suivi en temps réel et historique des trajets.
- **Communication** : Messagerie instantanée entre clients et chauffeurs.
- **Tarification et Paiement** : Estimation des coûts et paiements sécurisés.

### Exigences non fonctionnelles

- **Performance** : Réponse rapide aux interactions utilisateur.
- **Sécurité** : Protection des données personnelles et financières.
- **Convivialité** : Interface utilisateur intuitive.
- **Maintenance et Évolutivité** : Code bien documenté et architecture évolutive.

## Modélisation du projet

### Analyse

- **Diagramme de classes** : Description des acteurs et objets du système.
- **Diagramme des cas d'utilisations** : Fonctionnalités du système.
- **Description textuelle des cas d'utilisations** : Scénarios d'utilisation.

### Conception

Utilisation du modèle OSI pour la modélisation et d'une formule mathématique pour le calcul du prix du trajet.

## Services utilisés

### Type de communication

La communication entre les micro-services se fait principalement via des messages asynchrones utilisant des files d'attente (RabbitMQ, Kafka).

### Listes des services que nous utilisons

- **Itinéraire** : Calcul et gestion des trajets.
- **Chat** : Communication entre utilisateurs.
- **Évaluation** : Notation des chauffeurs.
- **Annulation** : Gestion des annulations de trajets.
- **Gemini** : IA pour recommandations et prédictions.

## Implémentation

### Interfaces

- **Landing page** : Page d'accueil du site.
- **Accueil utilisateur** : Page de connexion et fonctionnalités pour les clients.
- **Accueil chauffeur** : Page de connexion et fonctionnalités pour les chauffeurs.
- **** : Page d'accueil du site.
---
### Back-end

- **Technologies Utilisées** : Java, Spring Boot.
- **Base de données** : ScyllaDB.
- **Architecture du Système** : Modulaire et évolutive.
---
## Difficultés probables

- **Scalabilité** : Gestion de la croissance de l'application.
- **Sécurité des données** : Protection des informations sensibles.
- **Intégration continue** : Maintien des mises à jour régulières.
---
## Améliorations et Recommandations

- **Optimisation des performances** : Amélioration des requêtes et algorithmes.
- **Mise en cache** : Réduction des accès à la base de données.
- **Monitoring et Analytics** : Outils pour surveiller les performances en temps réel.
---
## Déploiement

### Prérequis

- **Node.js** version 21
- **JDK** version 21
- **Spring Boot**
- **ScyllaDB**
- **Docker** (pour conteneurisation)
- **Serveur compatible** (pour déploiement)

### Instructions de déploiement

#### 1. Cloner le dépôt

```bash
git clone https://github.com/yourusername/freengo.git
```
### 2. Installer les dépendances pour le frontend
```bash
cd frontend
```
### Demarer le front

```bash
npm install
```
### 3.Construire le frontend 
```bash
npm run build
```
---
### 4. Installer les dépendances pour le backend
```bash
git clone -b backend https://github.com/Nameless0l/freengo.git backend
```
```bash
cd ../backend
```
```bash
./mvnw clean install
````

---
## Conclusion

Freengo offre une solution innovante pour la gestion des déplacements, alliant simplicité, efficacité et performance. Grâce à une architecture bien pensée et des technologies robustes, nous avons pu développer une application qui améliore l'expérience utilisateur. Nous continuerons à intégrer de nouvelles fonctionnalités pour rester à la pointe de l'innovation dans le secteur du transport.

---

