app.directive("myRefresh", function($rootScope) {
    return {
        restrict: 'E',
        template: "<md-button class='md-raised'>Refresh</md-button>",
        link: function(scope, element, attr, ctrl, transclude) {

            element.bind("click", function(){
              location.reload();
            });

        }
    };
});
