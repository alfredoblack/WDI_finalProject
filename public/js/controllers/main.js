angular
  .module('DodgeKitApp')
  .controller('MainController', MainController);


  MainController.$inject = ['$auth', '$state'];
  function MainController($auth, $state) {
    this.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(){
          $state.go('playersIndex');
        });
    }

  }