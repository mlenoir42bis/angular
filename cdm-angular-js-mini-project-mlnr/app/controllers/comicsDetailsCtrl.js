app.controller('comicsDetailsCtrl', function ($scope, $http, $routeParams, IdenticationApi) {
  $scope.loading = true;
  $http.get(
      'https://gateway.marvel.com:443/v1/public/comics/' + $routeParams.id + '?ts=' +
      IdenticationApi.timestamp + '&apikey=' +
      IdenticationApi.publicKey + '&hash=' +
      IdenticationApi.hash(),
      IdenticationApi.config
  )
  .then(function (successCallback) {
      $scope.loading = false;
      $scope.comic = successCallback.data.data.results[0];
  }, function (errorCallback) {
      $scope.loading = false;
      $scope.error = errorCallback;
  });
});
