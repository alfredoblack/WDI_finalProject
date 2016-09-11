angular
  .module("DodgeKitApp")
  .factory("Team", Team);

Team.$inject = ["$resource"];
function Team($resource) {
  return $resource('/api/teams/:id', { id: '@_id' },  {
    update: { method: "PUT" }
  });
}