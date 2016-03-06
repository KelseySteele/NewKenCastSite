(function() {
    'use strict';

    angular.module('kencast')

    .directive("newHomepageDirective", [function () {
        return {
            restrict: 'E',
            templateUrl: '/views/homepage-new-section.html'
        }
    }]);
})();