(function() {
    'use strict';

    angular
        .module('sidenav.directives')
        .directive('menuLink', function () {
            return {
                scope: {
                    section: '='
                },
                templateUrl: 'views/services/menuLink.html',
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