(function () {
    'use strict';

    angular.module('kencast')

    .directive("navigationDirective", [function () {
        return {
            restrict: 'E',
            templateUrl: '/views/navigation-bar.html'
        }
    }]);

})();