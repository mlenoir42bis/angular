
app.service('CrudApi', function($http, Storage) {

  this.get = function (url, config, nameStorage) {
      $http.get(url, config, nameStorage)
        .then(function (successCallback) {
            Storage.setObject(nameStorage, successCallback);
            Storage.setObject("error", null);
        }, function (errorCallback) {
            Storage.setObject("error", errorCallback);
        });
  }

});
