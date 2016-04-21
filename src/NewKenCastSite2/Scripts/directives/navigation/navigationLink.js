(function () {
    'use strict';

    angular
        .module('kencast.directives')
        .directive('navigationLink', function () {
            return {
                scope: {
                    section: '='
                },
                templateUrl: 'views/navigation/navigationLink.html', 
                link: function ($scope, $element) {
                    var controller = $element.parent().controller();
                    $scope.focusSection = function () {
                        // set flag to be used later when
                        // $locationChangeSuccess calls openPage()
                        controller.autoFocusContent = true;
                    };
                }
            };
        });


})();