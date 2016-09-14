angular
  .module('DodgeKitApp')
  .controller('MainController', MainController);


  MainController.$inject = ['$auth', '$state', '$rootScope', 'Player'];
  function MainController($auth, $state, $rootScope, Player) {
    var self = this;

    this.currentUser = $auth.getPayload();

    this.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(){
          $rootScope.$broadcast("socialLoggedIn");
        });
    }

    $rootScope.$on("socialLoggedIn", function(){
      self.currentUser = $auth.getPayload();

      Player.get({ id: self.currentUser._id }, function(res) {
        console.log(res);
        if(!res.spiritualanimal){
          $state.go('socialEdit', {'id': self.currentUser._id });
        } else {
          $state.go("main");
        }
      })
    });

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