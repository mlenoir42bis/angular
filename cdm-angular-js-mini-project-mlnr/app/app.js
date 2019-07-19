
  var app = angular.module("BlankApp", ["ngRoute", "ngMaterial", "angular-md5"]);

  app.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
      .when("/", {
          templateUrl : "templates/home.html"
      })
      .when("/comics", {
          templateUrl : "templates/comics.html",
          resolve: {characters: checkStore}
      })
      .when("/comics-details/:id", {
          templateUrl : "templates/comics-details.html",
          resolve: {characters: checkStore}
      })
      .when("/characters", {
          templateUrl : "templates/characters.html",
          resolve: {characters: checkStore}
      })
      .when("/characters-details/:id", {
          templateUrl : "templates/characters-details.html",
          resolve: {characters: checkStore}
      })
      .when("/settings", {
          templateUrl : "templates/settings.html",
          resolve: {characters: checkStore}
      })
      .when("/storage", {
          templateUrl : "templates/storage.html"
      })
      .otherwise( { redirectTo: "templates/home.html" });

      $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });
