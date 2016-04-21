(function () {
    'use strict';

    angular
        .module('kencast.controllers')
        .controller('NavigationController', [
          '$rootScope',
          '$state',
          '$timeout',
          '$location',
          'navigationMenu',

        function ($rootScope, $state, $timeout, $location, navigationMenu) {

            var vm = this; //vm is the alias for this controller

            //functions for menu-link and menu-toggle
            vm.isOpen = isOpen;//nothing is opened
            vm.toggleOpen = toggleOpen;//or toggled
            vm.autoFocusContent = false;//or in the body of the template
            vm.navigationMenu = navigationMenu; //data stored within the factory/service called navigationMenu

            vm.status = {
                isFirstOpen: true,
                isFirstDisabled: false
            };


            function isOpen(section) {
                return navigationMenu.isSectionSelected(section);
            }

            function toggleOpen(section) {
                navigationMenu.toggleSelectSection(section);
            }

        }]);

})();





