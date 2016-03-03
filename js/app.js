angular.module('Portfolio', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html",
      controller: 'HomeController',
      css: 'css/style.css'
    })
    .state('other', {
      url: "/other",
      templateUrl: "partials/other.html"
    })
    .state('gitUp', {
      url: "/gitup",
      templateUrl: "partials/gitup.html",
      controller: 'HomeController',
      css: 'css/detail.css'
    })
    .state('moviepicker', {
      url: "/moviepicker",
      templateUrl: "partials/moviepicker.html",
      controller: 'DetailController'
    })
    .state('brewsbrothers', {
      url: "/brewsbrothers",
      templateUrl: "partials/brewsbrothers.html",
      controller: 'DetailController'
    })
});
