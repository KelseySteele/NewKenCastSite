
(function () {
//    'use strict';

    angular.module('kencast.services', ['ngResource', 'ngAnimate']); //contains data for services' sidenav
    angular.module('kencast.controllers', ['kencast.directives']); //Uses the directions from directives to display data from services
    angular.module('kencast.directives', ['kencast.services']); //directions for elements within the sidenav

    //Creates a module called KenCast
    var app = angular.module('kencast', [
        'kencast.services',
        'kencast.controllers',
        'ngSanitize',
        'ui.bootstrap',
        'ngAnimate',
        'ui.router',
        'ngMaterial'        
    ])




    app.config(['$locationProvider','$stateProvider', '$urlRouterProvider',
        function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(false);
        //For any unmatched url, redirect to /home
        $urlRouterProvider
                .when('/', '/home')
                .otherwise('/home');

        $stateProvider
            .state('app', { //sets up the empty space between the nav bar and the footer
                abstract: true,
                url: '/',
                views: {
                    'content': { 
                        template: '<div ui-view></div>'
                    }
                }
             })
                        
            .state('app.home', {
                url: "/home",
                templateUrl: 'views/home.html',
                controller: 'carouselController'            
            })

            .state('app.services', {
               url: "/services",
               templateUrl: "views/services/services.html"
            }) //end of services states

            .state('app.case-studies', {
                url: "/case-studies",
                template: "This is the case study state."
            }) //end of case studies states

            .state('app.company', {
                url: "/company",
                template: "This is the company state."
            }) //end of company states

    }]);

})();

  