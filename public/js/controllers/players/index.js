angular
  .module('DodgeKitApp')
  .controller('PlayersIndexController', PlayersIndexController);

  PlayersIndexController.$inject =['Player'];
  function PlayersIndexController(Player){
    this.all = Player.query();
    console.log(this.all);
  }