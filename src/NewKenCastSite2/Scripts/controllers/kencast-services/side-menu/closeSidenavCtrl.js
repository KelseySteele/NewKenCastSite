(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('CloseSidenavCtrl', ['$scope', '$timeout', '$mdSidenav',
            function ($scope, $timeout, $mdSidenav) {
            $scope.closeSidenav = function () {
                $mdSidenav('left').close();
            };
        }]);
})();
