(function () {
    'use strict';

    angular.module('kencast')

    .directive("carouselDirective", [function () {
        return {
            restrict: 'E',
            templateUrl: '/views/carousel.html'
        }
    }]);

})();