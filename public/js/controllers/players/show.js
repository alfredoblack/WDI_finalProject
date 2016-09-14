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

  this.myDataSource = {
     chart: {
         "caption": "Budget Analysis",
         "subCaption": "Current month",
         "numberPreffix": "$",
         "theme": "fint",
         "radarfillcolor": "#ffffff"
     },

     "categories": [
             {
                 "category": [
                     {
                         "label": "Marketing"
                     },
                     {
                         "label": "Product Management"
                     },
                     {
                         "label": "Customer Service"
                     },
                     {
                         "label": "Human Resources"
                     },
                     {
                         "label": "Sales & Distribution"
                     }
                 ]
             }
         ],
         "dataset": [
             {
                 "seriesname": "Allocated Budget",
                 "data": [
                     {
                         "value": "19000"
                     },
                     {
                         "value": "16500"
                     },
                     {
                         "value": "14300"
                     },
                     {
                         "value": "10000"
                     },
                     {
                         "value": "9800"
                     }
                 ]
             },
             {
                 "seriesname": "Actual Cost",
                 "data": [
                     {
                         "value": "6000"
                     },
                     {
                         "value": "9500"
                     },
                     {
                         "value": "11900"
                     },
                     {
                         "value": "8000"
                     },
                     {
                         "value": "9700"
                     }
                 ]
             }
         ]
     }
  //    data:[{
  //        label: "Bakersfield Central",
  //        value: "880000"
  //    },
  //    {
  //        label: "Garden Groove harbour",
  //        value: "730000"
  //    },
  //    {
  //        label: "Los Angeles Topanga",
  //        value: "590000"
  //    },
  //    {
  //        label: "Compton-Rancho Dom",
  //        value: "520000"
  //    },
  //    {
  //        label: "Daly City Serramonte",
  //        value: "330000"
  //    }]
  // };
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

