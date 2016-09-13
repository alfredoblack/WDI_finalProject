angular
  .module("DodgeKitApp")
  .factory("Player", Player);

Player.$inject = ["$resource", "API_URL"];
function Player($resource, API_URL) {
  return $resource('/api/players/:id', { id: '@_id' },  {
    update: { method: "PUT" },
    login: { method: "POST", url: API_URL + "/login"},
    register: { method: "POST", url: API_URL + "/register"}
  });
}