(Projet en cours de développement)

Qu'est ce que MHost :

MHost (Meet and Host) est un projet d'école visant à favoriser les échanges intra-européen entre étudiants.
L'application permet aux utilisateurs de se swiper façon Tinder. Si deux utilisateurs matchent, ils gagnent le droit de pouvoir s'envoyer des messages. Si les deux utilisateurs trouvent que la personne devant eux est digne de confiance, les utilisateurs peuvent faire une demande d'échange de maison pour qu'ils puissent voyager dans le pays de l'autre.
Les utilisateurs peuvent choisir s'ils héberge, voyage ou s'ls veulent juste discuter.


Installation :

1 - Dans le dossier back : créer et rentrer ses informations de connexion dans un .env comme il suit : 

NODE_ENV=developement
DB_HOST=**addresse ex : localhost:3000**
DB_PORT=**port**
DB_USERNAME=**Utilisateur**
DB_PASSWORD=**Mot de passe**
DB_NAME=**Nom de la base de donnée**
JWT_SECRET=**Secret pour le JWT**
JWT_AUDIENCE=**ex : localhost:3000**

2- Effectuer un npm install et démarrer le serveur

3 - Dans le dossier front, effectuer un npm install et lancer le serveur

Le serveur front écoute sur le port 4500