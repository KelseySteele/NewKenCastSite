//(function () {
//    'use strict';

//    angular
//        .module('kencast.controllers')
//        .controller('mainMenuCtrl', [
//          '$rootScope',
//          '$state',
//          '$timeout',
//          '$location',
//          'menu',

//        function ($rootScope, $state, $timeout, $location, menu) {

//            var vm = this; //vm is the alias for this controller

//            //functions for menu-link and menu-toggle
//            vm.isOpen = isOpen;//nothing is open
//            vm.toggleOpen = toggleOpen;//or toggled
//            vm.autoFocusContent = false;//or in the body of the template
//            vm.menu = servicesMenu; //data stored within the factory/service called servicesMenu

//            vm.status = {
//                isFirstOpen: true,
//                isFirstDisabled: false
//            };


//            function isOpen(section) {
//                return menu.isSectionSelected(section);
//            }

//            function toggleOpen(section) {
//                menu.toggleSelectSection(section);
//            }

//        }]);
 
//})();
