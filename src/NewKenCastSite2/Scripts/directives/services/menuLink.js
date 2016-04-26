(function() {
    'use strict';

    angular
        .module('kencast')
        .directive('menuLink', function () {
            return {
                scope: {
                    section: '='
                },
                templateUrl: 'views/services/side-menu/menu-link.html',
                link: function ($scope, $element) {
                    var controller = $element.parent().controller();
                    $scope.focusSection = function () {
                        // set flag to be used later when
                        // $locationChangeSuccess calls openPage()
                        controller.autoFocusContent = true;
                    };
                }
            };
        })
    

})();