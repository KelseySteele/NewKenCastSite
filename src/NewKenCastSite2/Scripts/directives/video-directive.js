(function () {
    'use strict';

    angular.module('kencast')

    .directive("videoDirective", [function () {
        return {
            restrict: 'E',
            templateUrl: '/views/video.html'
        }
    }]);

})();