(function() {
    'use strict';

    angular.module('kencast')

    .directive("logoDirective", [function () {
        return {
            restrict: 'E',
            templateUrl: '/views/logo-section.html'
        }
    }]);
})();