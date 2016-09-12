angular
  .module('DodgeKitApp')
  .controller("TeamsEditController", TeamsEditController);

TeamsEditController.$inject = ["$state", "Team"];
function TeamsEditController($state, Team) {
  this.selected = Team.get($state.params);
  

console.log(this.selected)
  this.save = function() {
    this.selected.$update(function() {
      $state.go('teamsIndex', $state.params);
    });
  }
}