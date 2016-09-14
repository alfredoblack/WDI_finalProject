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


// app.controller('PlayersShowController', function ($scope) {
//   $scope.myDataSource = {
//     chart: {
//         caption: "Harry's SuperMart",
//         subCaption: "Top 5 stores in last month by revenue",
//     },
//     data:[{
//         label: "Bakersfield Central",
//         value: "880000"
//     },
//     {
//         label: "Garden Groove harbour",
//         value: "730000"
//     },
//     {
//         label: "Los Angeles Topanga",
//         value: "590000"
//     },
//     {
//         label: "Compton-Rancho Dom",
//         value: "520000"
//     },
//     {
//         label: "Daly City Serramonte",
//         value: "330000"
//     }]
//   };
// });

