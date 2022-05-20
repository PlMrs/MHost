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