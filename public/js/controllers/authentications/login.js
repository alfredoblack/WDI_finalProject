angular
  .module("DodgeKitApp")
  .controller("LoginController", LoginController);

LoginController.$inject = ["Player", "$state", "$rootScope", "$auth"];
function LoginController(Player, $state, $rootScope, $auth) {

  this.credentials = {};

  console.log(this.credentials);
  this.currentUser = $auth.getPayload();
  this.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function(){
        $rootScope.$broadcast("socialLoggedIn");
      });
  }

 this.submit = function() {
   $auth.login(this.credentials, {
     url: "/api/login"
   }).then(function(){
     $rootScope.$broadcast("loggedIn");
   });
   this.player = {};
 }

}  