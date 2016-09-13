angular
  .module("DodgeKitApp")
  .controller("RegisterController", RegisterController);

RegisterController.$inject = ["Player","$state", "$rootScope", "$auth"]
function RegisterController(Player, $state, $rootScope, $auth) {
  
  this.player = {};

  this.submit = function() {
    $auth.signup(this.player, {
      url: "/api/register"
    }).then(function(){
      $rootScope.$broadcast("loggedIn");
    });
    this.player = {};
  }

}