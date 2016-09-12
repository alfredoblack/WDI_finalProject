angular
  .module('DodgeKitApp')
  .controller('TeamsIndexController', TeamsIndexController);

  TeamsIndexController.$inject =['Team'];
  function TeamsIndexController(Team){
    this.all = Team.query();
  }