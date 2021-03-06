﻿/// <reference path="../wwwroot/views/services/mobile-platform/applications/cards.html" />
/// <reference path="../wwwroot/views/services/mobile-platform/applications/cards.html" />
/// <reference path="../wwwroot/views/services/mobile-platform/applications/cards.html" />
/// <reference path="../wwwroot/views/services/index.html" />

(function () {
    //    'use strict';

    //Creates a module called KenCast
    angular.module('kencast', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.router',
        'ngMaterial',
        "ngSanitize",
	    "com.2fdevs.videogular", //dependencies for video player
		"com.2fdevs.videogular.plugins.controls",
		"com.2fdevs.videogular.plugins.overlayplay",
		"com.2fdevs.videogular.plugins.poster",
        "info.vietnamcode.nampnq.videogular.plugins.youtube"
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
                                }
                            }

                        })

                            .state('fazzt.overview', {
                                url: '', //Default view for Fazzt section, need this otherwise Fazzt section defaults to homepage
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/fazzt/overview.html',
                                        controller: 'videoController as videoCtrl'
                                    }
                                }
                            })

                            .state('fazzt.applications', {                                
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/fazzt/applications.html',
                                        controller: 'applicationController as applicationCtrl'
                                    }
                                }                                
                            })
                                            .state('fazzt.applications.cards', {
                                                views: {
                                                    'applications': {
                                                        templateUrl: '/views/services/fazzt/applications/cards.html',
                                                    }
                                                }
                                            })

                                            .state('fazzt.applications.card', {
                                                views: {
                                                    'applications': {
                                                        templateUrl: '/views/services/fazzt/applications/card.html',
                                                    }
                                                }
                                            })
                         
                            .state('fazzt.equipment', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/fazzt/equipment.html',
                                        controller: 'equipmentController as equipmentCtrl'
                                    }
                                }                 
                            })
                                            .state('fazzt.equipment.cards', {
                                                views: {
                                                    'equipment': {
                                                        templateUrl: '/views/services/fazzt/equipment/cards.html',
                                                    }
                                                }
                                            })

                                            .state('fazzt.equipment.card', {
                                                views: {
                                                    'equipment': {
                                                        templateUrl: '/views/services/fazzt/equipment/card.html',
                                                    }
                                                }
                                            })

                            .state('fazzt.faq', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/fazzt/faq.html',
                                        controller: 'accordionController as accordionCtrl'
                                    }                                    
                                }                               
                            })

                            .state('fazzt.flowchart', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/fazzt/flowchart.html'
                                    }
                                }                                
                            })

                            .state('fazzt.options', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/fazzt/options.html'
                                    }
                                }                                
                            })

                        .state('digital-cinema', {
                            url: '/services/digital-cinema',
                            abstract: true,
                            views: {
                                'main': {
                                    templateUrl: '/views/services/digital-cinema/index.html',
                                    controller: 'SideMenuCtrl as vm'
                                }
                            }
                        })

                            .state('digital-cinema.overview', {
                                url: '', //Default view for Digital Cinema section
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/digital-cinema/overview.html',
                                    }
                                }
                            })

                            //.state('digital-cinema.applications', {
                            //    templateUrl: '/views/services/digital-cinema/applications.html'
                            //})

                            .state('digital-cinema.equipment', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/digital-cinema/equipment.html',
                                        controller: 'equipmentController as equipmentCtrl'
                                    }
                                }                         
                            })

                                          .state('digital-cinema.equipment.cards', {
                                              views: {
                                                  'equipment': {
                                                      templateUrl: '/views/services/digital-cinema/equipment/cards.html',
                                                  }
                                              }
                                          })

                                         .state('digital-cinema.equipment.card', {
                                              views: {
                                                  'equipment': {
                                                      templateUrl: '/views/services/digital-cinema/equipment/card.html',
                                                   }
                                              }
                                          })

                            .state('digital-cinema.faq', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/digital-cinema/faq.html',
                                        controller: 'accordionController as accordionCtrl'
                                    }
                                }                         
                            })

                            .state('digital-cinema.flowchart', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/digital-cinema/flowchart.html',
                                    }
                                }
                            })

                            //.state('digital-cinema.options', {
                            //    templateUrl: '/views/services/digital-cinema/options.html'
                            //})

                        .state('mobile-platform', {
                            url: '/services/mobile-platform',
                            abstract: true,
                            views: {
                                'main': {
                                    templateUrl: '/views/services/mobile-platform/index.html',
                                    controller: 'SideMenuCtrl as vm'
                                },                        
                            }
                        })

                            .state('mobile-platform.overview', {
                                url: '', //Default view for Mobile Platform section
                                views: {
                                    'fazztBody': {
                                        url: '',
                                        templateUrl: '/views/services/mobile-platform/overview.html',
                                    }
                                }                               
                            })

                            .state('mobile-platform.applications', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/mobile-platform/applications.html',
                                        controller: 'applicationController as applicationCtrl'
                                    }
                                } 
                            })
                                            .state('mobile-platform.applications.cards', {
                                                views: {
                                                    'applications': {
                                                        templateUrl: '/views/services/mobile-platform/applications/cards.html',
                                                    }
                                                }
                                            })

                                            .state('mobile-platform.applications.card', {
                                                views: {
                                                    'applications': {
                                                        templateUrl: '/views/services/mobile-platform/applications/card.html',
                                                    }
                                                }
                                            })

                            .state('mobile-platform.equipment', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/mobile-platform/equipment.html',
                                        controller: 'equipmentController as equipmentCtrl'
                                    }
                                }   
                            })

                                         .state('mobile-platform.equipment.cards', {
                                             views: {
                                                 'equipment': {
                                                     templateUrl: '/views/services/mobile-platform/equipment/cards.html',
                                                 }
                                             }
                                         })

                                         .state('mobile-platform.equipment.card', {
                                             views: {
                                                 'equipment': {
                                                     templateUrl: '/views/services/mobile-platform/equipment/card.html',
                                                 }
                                             }
                                         })

                            .state('mobile-platform.faq', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/mobile-platform/faq.html',
                                        controller: 'accordionController as accordionCtrl'
                                    }                                    
                                }
                                
                            })

                            .state('mobile-platform.flowchart', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/mobile-platform/flowchart.html'
                                    }                                    
                                }
                            })

                            .state('mobile-platform.consumeroption', {
                                views: {
                                    'fazztBody': {
                                        templateUrl: '/views/services/mobile-platform/consumeroption.html'
                                    }                                    
                                }
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

