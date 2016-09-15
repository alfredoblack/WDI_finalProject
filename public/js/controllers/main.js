angular
  .module('DodgeKitApp')
  .controller('MainController', MainController);


  MainController.$inject = ['$auth', '$state', '$rootScope', 'Player', '$window'];
  function MainController($auth, $state, $rootScope, Player, $window) {
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


    var socket = $window.io();

    socket.on("connect", function(){
      console.log("connected");
    });

    var counter = 0;

    socket.on("tweets", function(tweet){
      $('#tweetbox').prepend('<div class="row"><div class="col-md-2"><img src="' + tweet.user_profile_image + '" class="avatar pull-left"/></div><div class="col-md-2"><div class="names"><span class="full-name"><strong>@' + tweet.name + ' </strong></span></div></div><div class="col-md-8"><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div><br>');
         // console.log(tweet.text, tweet.name, tweet.user_profile_image);
    });

  }