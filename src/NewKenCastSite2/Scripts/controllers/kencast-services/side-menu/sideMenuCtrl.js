(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('SideMenuCtrl', [
          '$rootScope',
          '$state',
          '$scope',
          '$timeout',
          '$location',
          '$mdSidenav',
          'servicesMenu',

        (function ($rootScope, $state, $scope, $timeout, $location, $mdSidenav, servicesMenu) {

            var vm = this; 

            //functions for menu-link and menu-toggle
            vm.isOpen = isOpen;//nothing is open
            vm.toggleOpen = toggleOpen;//or toggled
            vm.autoFocusContent = false;//or in the body of the template
            vm.menu = servicesMenu; //data stored within the factory/service called servicesMenu
            vm.toggleLeft = buildDelayedToggler('left');
                //document.getElementsByClassName('md-sidenav-left');

            vm.status = {
                isFirstOpen: true,
                isFirstDisabled: false
            };

            function isOpen(section) {
                return menu.isSectionSelected(section);
            }

            function toggleOpen(section) {
                menu.toggleSelectSection(section);
            }

            /**
             * Code from Angular Material -Kelsey
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             */

            function debounce(func, wait, context) {
                var timer;
                return function debounced() {
                    var context = $scope,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function () {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            function buildDelayedToggler(navID) {
                return debounce(function () {
                    $mdSidenav(navID)
                      .toggle()
                }, 200);
            }

            //function buildToggler(navID) {
            //    return function () {
            //        $mdSidenav(navID)
            //          .toggle()
            //    }
            //}

            function closeSidenav(navID) {
                return function () {
                    $mdSidenav(navID).
                        close();
                }
            }

        }
        )]);
 
})();
