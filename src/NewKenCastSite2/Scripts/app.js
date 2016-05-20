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
                    views: {
                        'main': {
                            templateUrl: '/views/home.html',
                            
                        },
                        'header': {
                            templateUrl: '/views/carousel.html',
                            controller: 'CarouselController as carouselCtrl'
                        }
                    
                    }
                   
                })
                .state('services', {
                    url: '/services',
                    views: {
                        'main': {
                            templateUrl: '/views/services/index.html',
                            controller: 'ServicesController as servicesCtrl'
                        }
                    }
                })
                        .state('fazzt', {                            
                            url: '/services/fazzt',
                            abstract: true,
                            views: {
                                'main': {
                                    templateUrl: '/views/services/fazzt/index.html',
                                    controller: 'SideMenuCtrl as vm'
                                },
                                'header': {
                                    templateUrl: '/views/services/fazzt/header.html'
                                }
                            }
                            
                        })

                            .state('fazzt.overview', {
                                url: '', //Default view for Fazzt section
                                templateUrl: '/views/services/fazzt/overview.html',
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

                        .state('digital-cinema', {
                            url: '/services/digital-cinema',
                            abstract: true,
                            views: {
                                'main': {
                                    templateUrl: '/views/services/digital-cinema/index.html',
                                    controller: 'SideMenuCtrl as vm'
                                },
                                'header': {
                                    templateUrl: '/views/services/digital-cinema/header.html'
                                }
                            }
                        })

                            .state('digital-cinema.overview', {
                                url: '', //Default view for Digital Cinema section
                                templateUrl: '/views/services/digital-cinema/overview.html',
                            })

                            .state('digital-cinema.applications', {
                                templateUrl: '/views/services/digital-cinema/applications.html'
                            })

                            .state('digital-cinema.equipment', {
                                templateUrl: '/views/services/digital-cinema/equipment.html'
                            })

                            .state('digital-cinema.faq', {
                                templateUrl: '/views/services/digital-cinema/faq.html'
                            })

                            .state('digital-cinema.flowchart', {
                                templateUrl: '/views/services/digital-cinema/flowchart.html'
                            })

                            .state('digital-cinema.options', {
                                templateUrl: '/views/services/digital-cinema/options.html'
                            })

                        .state('mobile-platform', {
                            url: '/services/mobile-platform',
                            abstract: true,
                            views: {
                                'main': {
                                    templateUrl: '/views/services/mobile-platform/index.html',
                                    controller: 'SideMenuCtrl as vm'
                                },
                                'header': {
                                    templateUrl: '/views/services/mobile-platform/header.html'
                                }
                            }
                        })

                            .state('mobile-platform.overview', {
                                url: '', //Default view for Digital Cinema section
                                templateUrl: '/views/services/mobile-platform/overview.html'
                            })

                            .state('mobile-platform.applications', {
                                templateUrl: '/views/services/mobile-platform/applications.html'
                            })

                            .state('mobile-platform.equipment', {
                                templateUrl: '/views/services/mobile-platform/equipment.html'
                            })

                            .state('mobile-platform.faq', {
                                templateUrl: '/views/services/mobile-platform/faq.html'
                            })

                            .state('mobile-platform.flowchart', {
                                templateUrl: '/views/services/mobile-platform/flowchart.html'
                            })

                            .state('mobile-platform.options', {
                                templateUrl: '/views/services/mobile-platform/options.html'
                            })

                .state('case-studies', {
                    url: '/case-studies',
                    views: {
                        'main': {
                            templateUrl: '/views/case-studies/index.html'
                        }
                    }
                    
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
                    views: {
                        main: {
                            templateUrl: '/views/company/index.html'
                        }
                    }
                    
                })
                        .state('about-us', {
                            url: '/company/about-us',
                            views: {
                                'main': {
                                    templateUrl: '/views/company/about-us/index.html'
                                }
                            }                            
                        })

                        .state('careers', {
                            url: '/company/careers',
                            views: {
                                'main': {
                                    templateUrl: '/views/company/careers/index.html'
                                }
                            }                            
                        })

                        .state('clients-and-testimonials', {
                            url: '/company/clients-and-testimonials',
                            views: {
                                'main': {
                                    templateUrl: '/views/company/clients-and-testimonials/index.html'
                                }
                            }
                            
                        })

                        .state('management', {
                            url: '/company/management',
                            views: {
                                'main': {
                                    templateUrl: '/views/company/management/index.html'
                                }
                            }
                            
                        })

                        .state('new-at-kencast', {
                            url: '/company/new-at-kencast',
                            views: {
                                'main': {
                                    templateUrl: '/views/company/new-at-kencast/index.html'
                                }
                            }
                            
                        })

                        .state('trade-shows', {
                            url: '/company/trade-shows',
                            views: {
                                'main': {
                                    templateUrl: '/views/company/trade-shows/index.html'
                                }
                            }
                            
                        });
        }])
        .run(['$state', '$rootScope', function ($state, $rootScope) {
            $rootScope.$state = $state;
        }]);

})();

  