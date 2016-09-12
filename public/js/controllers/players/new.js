angular
  .module('DodgeKitApp')
  .controller('PlayersNewController', PlayersNewController);

PlayersNewController.$inject = ['Player', '$state', 'Team'];
function PlayersNewController(Player, $state, Team){
  var self = this
  this.new = {};
  this.teams = Team.query();

  this.create = function(){
    console.log("Creating")
    Player.save(self.new, function(){
      console.log(Player)
      $state.go('playersIndex');
    });
  }
}