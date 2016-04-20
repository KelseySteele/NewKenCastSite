(function () {
    'use strict';

    angular.module('kencast.services', []); //contains data for services' sidenav
    angular.module('kencast.controllers', ['kencast.directives']); //Uses the directions from directives to display data from services
    angular.module('kencast.directives', ['kencast.services']); //directions for elements within the sidenav
})();