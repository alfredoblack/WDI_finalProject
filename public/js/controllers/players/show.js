angular
  .module('DodgeKitApp')
  .controller('PlayersShowController', PlayersShowController);

PlayersShowController.$inject = ['Player', '$state'];
function PlayersShowController(Player, $state){
  this.selected = Player.get($state.params);
}