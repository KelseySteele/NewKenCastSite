
(function () {
//    'use strict';

    angular.module('kencast.services', ['ngResource', 'ngAnimate']); //contains data for services' sidenav
    angular.module('kencast.controllers', ['kencast.directives']); //Uses the directions from directives to display data from services
    angular.module('kencast.directives', ['kencast.services']); //directions for elements within the sidenav

    //Creates a module called KenCast
    angular.module('kencast', [
        'kencast.controllers',
        'ngAnimate',
        'ui.bootstrap',
        'ui.router',
        'ngMaterial',
        'ngAria'
    ])

    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
        //For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', { //sets up the empty space between the nav bar and the footer
                url: '/',
                views: {
                    '@': { 
                        templateUrl: 'views/app.html',
                        controller: 'NavigationController as vm'
                    }
                }
            })

            .state('app.home', {
                url: 'home',
                views: {
                    'content@app': {
                        templateUrl: 'views/home.html',
                        //controller: 'CarouselController as carouselCtrl'
                    }
                }

            })

            .state('app.services', {
                url: '/services',
                views: {
                    'content@app': {
                        templateUrl: 'views/services/services.html',
                        controller: 'ServicesController as servicesCtrl'
                    }
                }
            })//end of services states


            .state('app.case-studies', {
                url: '/case-studies',
                views: {
                    'content@app': {
                        template: "This is the case study state."
                    }
                }
            })//end of case-studies states

            .state('app.company', {
                url: 'company',
                views: {
                    'content@app': {
                        template: "This is the company state."
                    }
                }
            })//end of company states

        }])

    //take all whitespace out of string
    .filter('nospace', function () {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    })
    //replace uppercase to regular case
    .filter('humanizeDoc', function () {
        return function (doc) {
            if (!doc) return;
            if (doc.type === 'directive') {
                return doc.name.replace(/([A-Z])/g, function ($1) {
                    return '-' + $1.toLowerCase();
                });
            }
        
            return doc.label || doc.name;
        };
    });


})();

  