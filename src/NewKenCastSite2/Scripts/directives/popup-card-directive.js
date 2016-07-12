(function () {
    'use strict';

    angular.module('kencast')

    .directive("popupCardDirective", [function () {
        return {
            restrict: 'E',
            templateUrl: '/views/services/carousel.html'
        }
    }]);

})();