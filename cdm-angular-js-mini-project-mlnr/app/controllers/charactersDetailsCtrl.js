app.controller('charactersDetailsCtrl', function ($scope, $http, $routeParams, IdenticationApi) {
    $scope.loading = true;
    $http.get(
        'https://gateway.marvel.com:443/v1/public/characters/' + $routeParams.id + '?ts=' +
        IdenticationApi.timestamp + '&apikey=' +
        IdenticationApi.publicKey + '&hash=' +
        IdenticationApi.hash(),
        IdenticationApi.config
    )
    .then(function (successCallback) {
        $scope.loading = false;
        $scope.character = successCallback.data.data.results[0];
    }, function (errorCallback) {
        $scope.loading = false;
        $scope.error = errorCallback;
    });
});
