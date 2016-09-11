angular
  .module('DodgeKitApp')
  .controller('PlayersNewController', PlayersNewController);

PlayersNewController.$inject = ['Player', '$state', 'Team'];
function PlayersNewController(Player, $state, Team){
  this.new = {};
  this.teams = Team.query();

  this.create = function(){
    Player.save(this.new, function(){
      $state.go('playersIndex');
    });
  }
}