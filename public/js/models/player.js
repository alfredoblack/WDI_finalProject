angular
  .module("DodgeKitApp")
  .factory("Player", Player);

Player.$inject = ["$resource"];
function Player($resource) {
  return $resource('/api/players/:id', { id: '@_id' },  {
    update: { method: "PUT" }
   
  });
}