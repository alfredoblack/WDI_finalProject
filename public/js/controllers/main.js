angular
  .module('DodgeKitApp')
  .controller('MainController', MainController);


  MainController.$inject = ['$auth', '$state', '$rootScope'];
  function MainController($auth, $state, $rootScope) {
    var self = this;

    this.currentUser = $auth.getPayload();

    this.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(){
          $rootScope.$broadcast("loggedIn");
        });
    }

    $rootScope.$on("loggedIn", function(){
      $state.go("main");
      self.currentUser = $auth.getPayload();
      console.log(self.currentUser);
    });
    
    this.logout = function() {
      $auth.logout();
      self.currentUser = null;
      $state.go("main");
    }

  }