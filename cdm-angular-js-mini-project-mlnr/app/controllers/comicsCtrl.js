app.controller('comicsCtrl', function ($scope, $http, IdenticationApi, CrudApi, Storage) {
    $scope.loading = true;
    $scope.datas = false;
    Storage.remove("error");

    var url = 'https://gateway.marvel.com:443/v1/public/comics?ts=' +
        IdenticationApi.timestamp +
        '&apikey=' + IdenticationApi.publicKey +
        '&hash=' + IdenticationApi.hash();
    var config = IdenticationApi.config;
    CrudApi.get(url, config, "comics");
    $scope.loading = false;

    $scope.error = Storage.getObject("error", {});
    if (Object.keys($scope.error).length == 0) {
      $scope.datas = Storage.getObject("comics", {});
      $scope.datas = $scope.datas.data.data.results;
      $scope.error = false;
    }
    
});
