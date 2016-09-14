angular
  .module('DodgeKitApp')
  .controller('PlayersShowController', PlayersShowController);

PlayersShowController.$inject = ['Player', '$state', 'Team'];
function PlayersShowController(Player, $state, Team) {

  var self = this;

  Player.get($state.params, function(player) {
    self.selected = player;

    self.chartData = {
      chart: {
        caption: "Player Attributes Chart",
        subCaption: "Current month",
        numberPreffix: "$",
        theme: "fint",
        radarfillcolor: "#ffffff",
        showHoverEffect: "true",
      },
      categories: [{
        category: [
          { label: "Dodge" },
          { label: "Dip" },
          { label: "Dive" },
          { label: "Duck" },
          { label: "Hits" },
          { label: "Catches" },
          { label: "Rebounds" },
          { label: "Speed" }
        ]
      }],
      dataset:[{
        seriesname: "Attibutes Scores",
        data: [
          { value: self.selected.dodge },
          { value: self.selected.dip },
          { value: self.selected.dive },
          { value: self.selected.duck },
          { value: self.selected.hits },
          { value: self.selected.catches },
          { value: self.selected.rebounds },
          { value: self.selected.speed },
        ]
      }]
    };
  });

  
  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("playersIndex");
    });
  }

  this.updateMyChartData = function() {
    console.log(this.chartData.dataset[0].data);
    
  }
}


