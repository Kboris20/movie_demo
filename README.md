# Construire et déployer une "application web monopage"" (single-page application ou SPA)
## MOVIE project from Boris and Melissa

### Environnement de développement

Ne réinventer par la roue. Pour commencer, consulter les [générateurs] fournis par Yeoman.

Dans le cadre de notre projet, nous avons utilisé le générateur [AngularJS].

- Pour installer ce générateur, ouvrez le Git Shell et tapez la commande suivante :
`npm install -g generator-angular`

- Puis pour pouvoir utiliser Angular, tapez la commande suivante :
`yo angular`

- Acceptez d'utiliser Sass (avec Compass) et acceptez d'inclure Bootstrap.

- Installez les modules "animate", "cookies", "route", "sanitize" et "touch" d'angular.

Consultez [ici] la documentation du framework pour toutes informations supplémentaires.

### Création du projet

- Nous avons créé un répertoire "movie" dans C:\Users\username\Documents\GitHub.
- Puis créé un répertoire "Git" depuis la ligne de commande `git init`
- Et enfin déplacé le répertoire du projet dans le client GitHub et commité une version initiale.

### Réalisation de la SPA

- Editez le code JavaScript dans les fichiers .js (controller).
- Editez le code HTML dans les fichiers .html (view).
- Créez une page offrant des services (fonctionnalités accessibles depuis d'autres pages).
- Stockez vos données dans le Local Storage (ou tout autre base...) --> sérialisation [JSON].
- Ajoutez des filtres si nécessaire.
- Adaptez le code CSS selon vos désirs.

Consultez l'API d'AngularJS : https://docs.angularjs.org/api

### Récupérer des données en ligne

Vous pouvez récupérer une liste de films directement depuis un lien http. Consulter l'API de [The Movie Database].

### Ajouter un carrousel dans votre page

- Installez [angular-slick].
- Voyez la démo [par ici].

### Ajouter les drapeaux des pays dans votre page

- Installez [wolrd-flags-sprite].
`bower install world-flags-sprite`

- N'oubliez pas d'intégrer la référence dans votre index.

### Publication

Visualisez votre projet en tapant la commande `grunt serve: dist`. Publiez votre SPA sur Git.

### Backup, please!

Dans tous les cas, n'oubliez pas de commiter puis de synchroniser votre projet (gestion des versions) régulièrement !

[générateurs]:http://yeoman.io/generators/
[AngularJS]:https://github.com/yeoman/generator-angular
[ici]:https://github.com/yeoman/generator-angular
[JSON]:http://json.org/
[The Movie Database]:https://www.themoviedb.org/documentation/api
[angular-slick]:https://github.com/vasyabigi/angular-slick
[par ici]:http://vasyabigi.github.io/angular-slick/
[world-flags-sprite]:https://github.com/lafeber/world-flags-sprite
