
var checkStore = function ($q, $location, Storage) {
    var auth = Storage.getObject('user', {});
    if (typeof(auth.name) !== "undefined" & typeof(auth.password) !== "undefined" & typeof(auth.email) !== "undefined"){
      console.log("ok storage");
    }
    else{
      $location.path( "/" );
    }
}

app.controller('authenticateCtrl', function($scope, $location, Storage) {

    $scope.set = function() {
      Storage.set("name", $scope.name);
      Storage.set("password", $scope.password);
      Storage.set("email", $scope.email);
    }

    $scope.get = function(key) {
      $scope[key] = Storage.get(key, "Unknown");
    }

    $scope.remove = function(key) {
      Storage.remove(key);
    }

    $scope.setObject = function(name, password, email) {
      Storage.setObject("user", { name: $scope.name, password: $scope.password, email: $scope.email });
      $location.path( "/characters" );
    }

    $scope.getObject = function(key) {
      $scope[key] = Storage.getObject(key, {});
    }

    $scope.destroy = function() {
      Storage.destroy();
    }

});
