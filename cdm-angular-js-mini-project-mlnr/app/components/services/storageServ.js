
app.service('Storage', function($window) {
  this.set = function (key, val) {
    $window.localStorage.setItem(key,val);
  }
  this.get = function (key, val) {
    return $window.localStorage.getItem(key) || val;
  }
  this.remove = function (key) {
    $window.localStorage.removeItem(key);
  }
  this.setObject = function (key, val) {
    $window.localStorage.setItem(key, JSON.stringify(val));
  }
  this.getObject = function (key) {
    return JSON.parse($window.localStorage.getItem(key) || "{}");
  }
  this.destroy = function () {
    $window.localStorage.clear();
  }
});
