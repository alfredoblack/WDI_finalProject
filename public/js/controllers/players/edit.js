angular
  .module('DodgeKitApp')
  .controller("PlayersEditController", PlayersEditController);

PlayersEditController.$inject = ["Player", "$state", "Team"];
function PlayersEditController(Player, $state, Team) {
  this.selected = Player.get($state.params);
  this.teams = Team.query();

console.log(this.selected)
  this.save = function() {
    this.selected.$update(function() {
      $state.go('playersIndex', $state.params);
    });
  }
}