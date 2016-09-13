angular
  .module('DodgeKitApp')
  .controller('TeamsNewController', TeamsNewController);

TeamsNewController.$inject = ['Team','$state', 'Player'];
function TeamsNewController(Team, $state, Player){
  var self = this
  this.new = {};
  this.players = Player.query();

  this.create = function(){
    console.log("Creating")
    Team.save(self.new, function(){
      console.log(Team)
      $state.go('teamsIndex');
    });
  }
}
