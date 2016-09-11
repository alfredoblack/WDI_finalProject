angular
  .module('DodgeKitApp', ['satellizer'])
  .config(oAuthConfig)
  .controller("MainController", MainController);

oAuthConfig.$inject = ["$authProvider"];
function oAuthConfig($authProvider) {
  $authProvider.github({
    url: '/oauth/github',
    clientId: '1c3c52a3e963762b4901'
  });

  $authProvider.twitter({
    url: '/oauth/twitter',
    clientId: 'jIR98pj50MHnFIckHBA4TqLt5'
  });

}

MainController.$inject = ["$auth"];
function MainController($auth) {

  this.authenticate = function(provider) {
    $auth.authenticate(provider);
    console.log(this.authenticate)
  }

}