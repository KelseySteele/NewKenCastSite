
(function () {
//    'use strict';
   
    //Creates a module called KenCast
    angular.module('kencast', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.router',
        'ngMaterial'
    ])

    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/views/home.html',
                    controller: 'CarouselController as carouselCtrl'
                })

                .state('services', {
                    url: '/services',
                    templateUrl: '/views/services/services.html',
                    controller: 'ServicesController as servicesCtrl'
                })

                .state('fazzt', {
                     url: '/services/fazzt',
                     templateUrl: '/views/services/fazzt/index.html',                    
                })

                .state('mobile-platform', {
                     url: '/services/mobile-platform',
                     templateUrl: '/views/services/mobilePlatform/index.html',
                })

                .state('cinema-specific', {
                     url: '/services/cinema-specific',
                     templateUrl: '/views/services/cinemaSpecific/index.html'
                 })

                .state('case-studies', {
                    url: '/case-studies',
                    templateUrl: '/views/case-studies/case-studies.html'
                })

                .state('company', {
                    url: '/company',
                    templateUrl: '/views/company/company.html'
                });

    }]);

})();

  