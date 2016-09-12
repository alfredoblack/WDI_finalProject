angular
  .module('DodgeKitApp')
  .controller('TeamsNewController', TeamsNewController);

TeamsNewController.$inject = ['Team','$state'];
function TeamsNewController(Team, $state){
  var self = this
  this.new = {};
  this.teams = Team.query();

  this.create = function(){
    console.log("Creating")
    Team.save(self.new, function(){
      console.log(Team)
      $state.go('teamsIndex');
    });
  }
}