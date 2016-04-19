(function () {
    'use strict';

    angular.module('sidenav.services', []); //contains data for services' sidenav
    angular.module('kencast.controllers', ['sidenav.directives']); //Uses the directions from directives to display data from services
    angular.module('sidenav.directives', ['sidenav.services']); //directions for elements within the sidenav
})();