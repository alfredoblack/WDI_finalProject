angular
  .module('DodgeKitApp')
  .controller('TeamsShowController', TeamsShowController);

TeamsShowController.$inject = ['Team', '$state'];
function TeamsShowController(Team, $state){
  this.selected = Team.get($state.params);

  console.log(this.selected);
  
  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("teamsIndex");
    });
  }
}