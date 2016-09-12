angular
  .module('DodgeKitApp', ['ngResource', 'ui.router', 'satellizer'])
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
      templateUrl: '/templates/main.html',
      controller: "MainController as main"
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
    .state("teamsIndex", {
      url: "/teams",
      templateUrl: "/templates/teams/index.html",
      controller: "TeamIndexController as teamsIndex"
    })
    .state("teamsNew", {
      url: "/teams/new",
      templateUrl: "/templates/teams/new.html",
      controller: "TeamNewController as teamsNew"
    })
    .state("teamsShow", {
      url: "/teams/:id",
      templateUrl: "/templates/teams/show.html",
      controller: "TeamShowController as teamsShow"
    })
    .state("teamsEdit", {
      url: "/teams/:id/edit",
      templateUrl: "/templates/teams/edit.html",
      controller: "TeamEditController as teamsEdit"
    });

  $urlRouterProvider.otherwise('/main');

}