angular
  .module('DodgeKitApp')
  .controller('PlayersShowController', PlayersShowController);

PlayersShowController.$inject = ['Player', '$state'];
function PlayersShowController(Player, $state){
  this.selected = Film.get($state.params);
}