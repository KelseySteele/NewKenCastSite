(function() {
    'use strict';

    angular
        .module('kencast')
        .directive('closeSidenav', [function () {
            return {
                templateUrl: 'views/services/side-menu/closeSideNav.html'
            }

        }]);


})();