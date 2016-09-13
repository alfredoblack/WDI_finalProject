angular
  .module('DodgeKitApp')
  .controller("TeamsEditController", TeamsEditController);

TeamsEditController.$inject = ["$state", "Team", "Player"];
function TeamsEditController($state, Team, Player) {
  this.selected = Team.get($state.params);
  this.players = Player.query();

console.log(this.selected)
  this.save = function() {
    this.selected.$update(function() {
      $state.go('teamsIndex', $state.params);
    });
  }
}

