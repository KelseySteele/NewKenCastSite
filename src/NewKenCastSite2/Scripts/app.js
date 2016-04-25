/// <reference path="../wwwroot/views/services/index.html" />

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
                    templateUrl: '/views/services/index.html',
                    controller: 'ServicesController as servicesCtrl'
                })
                        .state('fazzt', {
                            url: '/services/fazzt',
                            templateUrl: '/views/services/fazzt/index.html'
                        })

                            .state('fazzt.overview', {
                                templateUrl: '/views/services/fazzt/overview.html'
                            })

                            .state('fazzt.applications', {
                                templateUrl: '/views/services/fazzt/applications.html'
                            })

                            .state('fazzt.equipment', {
                                templateUrl: '/views/services/fazzt/equipment.html'
                            })

                            .state('fazzt.faq', {
                                templateUrl: '/views/services/fazzt/faq.html'
                            })

                            .state('fazzt.flowchart', {
                                templateUrl: '/views/services/fazzt/flowchart.html'
                            })

                            .state('fazzt.options', {
                                templateUrl: '/views/services/fazzt/options.html'
                            })

                        .state('cinema-specific', {
                            url: '/services/cinema-specific',
                            templateUrl: '/views/services/cinema-specific/index.html'
                        })

                        .state('mobile-platform', {
                            url: '/services/mobile-platform',
                            templateUrl: '/views/services/mobile-platform/index.html'
                        })

                .state('case-studies', {
                    url: '/case-studies',
                    templateUrl: '/views/case-studies/index.html'
                })
                        .state('cinema', {
                            url: '/case-studies/cinema',
                            templateUrl: '/views/case-studies/cinema/index.html'
                        })

                        .state('public-safety-and-military', {
                            url: '/case-studies/public-safety-and-military',
                            templateUrl: '/views/case-studies/public-safety-and-military/index.html'
                        })

                        .state('retail', {
                            url: '/case-studies/retail',
                            templateUrl: '/views/case-studies/retail/index.html'
                        })

                        .state('tv-news', {
                            url: '/case-studies/tv-news',
                            templateUrl: '/views/case-studies/tv-news/index.html'
                        })

                .state('company', {
                    url: '/company',
                    templateUrl: '/views/company/index.html'
                })
                        .state('about-us', {
                            url: '/company/about-us',
                            templateUrl: '/views/company/about-us/index.html'
                        })

                        .state('careers', {
                            url: '/company/careers',
                            templateUrl: '/views/company/careers/index.html'
                        })

                        .state('clients-and-testimonials', {
                            url: '/company/clients-and-testimonials',
                            templateUrl: '/views/company/clients-and-testimonials/index.html'
                        })

                        .state('management', {
                            url: '/company/management',
                            templateUrl: '/views/company/management/index.html'
                        })

                        .state('new-at-kencast', {
                            url: '/company/new-at-kencast',
                            templateUrl: '/views/company/new-at-kencast/index.html'
                        })

                        .state('trade-shows', {
                            url: '/company/trade-shows',
                            templateUrl: '/views/company/trade-shows/index.html'
                        });
    }]);

})();

  