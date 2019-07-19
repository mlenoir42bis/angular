
app.controller('storageCtrl', function($scope, Storage) {

  $scope.set = function() {
    Storage.set("name", $scope.name);
    Storage.set("age", $scope.age);
  }

  $scope.get = function(key) {
    $scope[key] = Storage.get(key, "LOL");
  }

  $scope.remove = function(key) {
    Storage.remove(key);
  }

  $scope.setObject = function(name, age) {
    Storage.setObject("user", { name: $scope.name, age: $scope.age });
  }

  $scope.getObject = function(key) {
    $scope[key] = Storage.getObject(key, {});
  }

  $scope.destroy = function() {
    Storage.destroy();
  }

});
