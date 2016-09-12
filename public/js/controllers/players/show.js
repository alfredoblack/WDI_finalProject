angular
  .module('DodgeKitApp')
  .controller('PlayersShowController', PlayersShowController);

PlayersShowController.$inject = ['Player', '$state'];
function PlayersShowController(Player, $state){
  this.selected = Player.get($state.params);

  console.log(this.selected);
  
  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("playersIndex");
    });
  }
}