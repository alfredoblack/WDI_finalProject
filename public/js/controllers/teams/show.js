angular
  .module('DodgeKitApp')
  .controller('TeamsShowController', TeamsShowController);

TeamsShowController.$inject = ['Team', '$state', '$auth','Player'];
function TeamsShowController(Team, $state, $auth, Player){
  var self = this;
  this.selected = Team.get($state.params);
  this.currentUser = $auth.getPayload();
  
  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("teamsIndex");
    });
  }

  this.join = function() {
    this.selected.players.push(this.currentUser);
    Team.update({ id: self.selected._id }, self.selected, function(team) {
      console.log(team);
      self.selected = team;
    });
  }
}
