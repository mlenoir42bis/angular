
app.controller('settingsCtrl', function($scope, Storage) {

  var auth = Storage.getObject('user', {});
  
  $scope.name = auth.name;
  $scope.email = auth.email;

  $scope.setObject = function(name, password, email) {
    Storage.setObject("user", { name: $scope.name, password: $scope.password, email: $scope.email });
  }
});
