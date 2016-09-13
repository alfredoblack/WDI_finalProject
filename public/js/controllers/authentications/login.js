angular
  .module("DodgeKitApp")
  .controller("LoginController", LoginController);

LoginController.$inject = ["Player", "$state", "$rootScope", "$auth"];
function LoginController(Player, $state, $rootScope, $auth) {

  this.credentials = {};

 this.submit = function() {
   $auth.login(this.credentials, {
     url: "/api/login"
   }).then(function(){
     $rootScope.$broadcast("loggedIn");
   });
   this.player = {};
 }

}