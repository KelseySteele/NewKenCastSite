(function () {
    'use strict';

    angular.module('kencast.controllers')
        .controller('navigationController', ['$state', 'navigationService', function ($state, navigationService){
            var vm = this;
            vm.menuItems = navigationService.menuItems; 

            vm.getRouteSref = function (menuItem) {
                if (!menuItem) {
                    menuItem = vm.menuItems[0];
                }

                return $state.href(menuItem.route);

            };

        }]);


})();


