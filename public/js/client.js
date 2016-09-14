angular
  .module('DodgeKitApp', ['ngResource', 'ui.router', 'satellizer'])
  .constant("API_URL", "http://localhost:3000/api")
  .config(oAuthConfig)
  .config(Router);
 

oAuthConfig.$inject = ["$authProvider"];
function oAuthConfig($authProvider) {
  $authProvider.github({
    url: '/api/oauth/github',
    clientId: '1c3c52a3e963762b4901'
  });

  $authProvider.twitter({
    url: '/api/oauth/twitter',
    clientId: 'jIR98pj50MHnFIckHBA4TqLt5'
  });

}

Router.$inject = ["$stateProvider", "$urlRouterProvider"];
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: '/templates/main.html'
    })
    .state("playersIndex", {
      url: "/players",
      templateUrl: "/templates/players/index.html",
      controller: "PlayersIndexController as playersIndex"
    })
    .state("playersNew", {
      url: "/players/new",
      templateUrl: "/templates/players/new.html",
      controller: "PlayersNewController as playersNew"
    })
    .state("playersShow", {
      url: "/players/:id",
      templateUrl: "/templates/players/show.html",
      controller: "PlayersShowController as playersShow"
    })
    .state("playersEdit", {
      url: "/players/:id/edit",
      templateUrl: "/templates/players/edit.html",
      controller: "PlayersEditController as playersEdit"
    })
    .state("socialEdit", {
      url: "/players/:id/extra-info",
      templateUrl: "/templates/players/social.html",
      controller: "PlayersSocialController as playersSocial"
    })
    .state("teamsIndex", {
      url: "/teams",
      templateUrl: "/templates/teams/index.html",
      controller: "TeamsIndexController as teamsIndex"
    })
    .state("teamsNew", {
      url: "/teams/new",
      templateUrl: "/templates/teams/new.html",
      controller: "TeamsNewController as teamsNew"
    })
    .state("teamsShow", {
      url: "/teams/:id",
      templateUrl: "/templates/teams/show.html",
      controller: "TeamsShowController as teamsShow"
    })
    .state("teamsEdit", {
      url: "/teams/:id/edit",
      templateUrl: "/templates/teams/edit.html",
      controller: "TeamsEditController as teamsEdit"
    })
    .state("login", {
      url: "/login",
      templateUrl: "/templates/authentications/login.html",
      controller: "LoginController as login"
    })
    .state("register", {
      url: "/register",
      templateUrl: "/templates/authentications/register.html",
      controller: "RegisterController as register"
    })


  $urlRouterProvider.otherwise('/main');

}