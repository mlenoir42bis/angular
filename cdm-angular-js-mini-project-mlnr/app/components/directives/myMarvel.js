app.directive("myMarvel", function() {
  return {
    restrict: "E",
    templateUrl: 'templates/includes/myMarvel.html',
    link: function($scope, element, attrs) {
      $scope.link = attrs.linked;
    }
  }
});
