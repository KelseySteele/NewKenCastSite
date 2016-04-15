
(function () {
//    'use strict';

    //Creates a module called KenCast
    var app = angular.module('kencast', [
        'ngSanitize',
        'ui.bootstrap',
        'ngAnimate',
        'ui.router',
        'ngMaterial',
    ])

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

        //For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("home");

        $stateProvider
            .state('home', {
                url: "",
                views: {
                    "viewA": {
                        templateUrl: "views/home.html"
                    }
                }
            })

            .state('services', {
                url: "/services",
                views: {
                    "viewA": {
                        templateUrl: "views/services/services.html"
                    }
                }
            
            }) //end of services views


            .state('fazzt', {
                //abstract: "true",
                url: "/services/fazzt",
                views: {
                    "viewA": {
                        templateUrl: "views/services/fazzt/index.html",
                    }
                 }
            })

            .state('fazzt.overview', {
                url: "/services/fazzt",
                views: {
                    "content@fazzt": {
                        templateUrl: 'views/services/fazzt/overview.html'
                    }
                }
                
            })
            .state('fazzt.applications', {
                url: "/services/fazzt",
                views: {
                    "content@fazzt": {
                        templateUrl: 'views/services/fazzt/applications.html'
                    }
                }

            })
            .state('fazzt.equipment', {
                url: "/services/fazzt",
                views: {
                    "content@fazzt": {
                        templateUrl: 'views/services/fazzt/equipment.html'
                    }
                }

            })
                        
            //.state('fazzt.overview', {
            //    url: 
            //})
            //    views: {
            //        "fazzt": {
            //            templateUrl: 'views/services/fazzt/index.html',
            //            views: {
            //                "applications": {
            //                    templateUrl: 'views/services/fazzt/applications.html'
            //                },
            //                "equipment": {
            //                    templateUrl: 'views/services/fazzt/equipment.html'
            //                },
            //                "faq": {
            //                    templateUrl: 'views/services/fazzt/faq.html'
            //                },
            //                "flowchart": {
            //                    templateUrl: 'views/services/fazzt/flowchart.html'
            //                },
            //                "options": {
            //                    templateUrl: 'views/services/fazzt/options.html'
            //                },
            //                "overview": {
            //                    templateUrl: 'views/services/fazzt/overview.html'
            //                }
            //            }
            //        }, //end of Fazzt view
            //        "cinemaSpecific": {
            //            url: "/cinemaSpecific",
            //            templateUrl: 'views/services/cinemaSpecific/index.html',
            //            views: {
            //                "applications": {
            //                    templateUrl: 'views/services/cinemaSpecific/applications.html'
            //                },
            //                "equipment": {
            //                    templateUrl: 'views/services/cinemaSpecific/equipment.html'
            //                },
            //                "faq": {
            //                    templateUrl: 'views/services/cinemaSpecific/faq.html'
            //                },
            //                "flowchart": {
            //                    templateUrl: 'views/services/cinemaSpecific/flowchart.html'
            //                },
            //                "options": {
            //                    templateUrl: 'views/services/cinemaSpecific/options.html'
            //                },
            //                "overview": {
            //                    templateUrl: 'views/services/cinemaSpecific/overview.html'
            //                }
            //            }
            //        }, //end of cinemaSpecific view
            //        "mobilePlatform": {
            //            templateUrl: 'views/services/mobilePlatform/index.html',
            //            views: {
            //                "applications": {
            //                    templateUrl: 'views/services/mobilePlatform/applications.html'
            //                },
            //                "equipment": {
            //                    templateUrl: 'views/services/mobilePlatform/equipment.html'
            //                },
            //                "faq": {
            //                    templateUrl: 'views/services/mobilePlatform/faq.html'
            //                },
            //                "flowchart": {
            //                    templateUrl: 'views/services/mobilePlatform/flowchart.html'
            //                },
            //                "options": {
            //                    templateUrl: 'views/services/mobilePlatform/options.html'
            //                },
            //                "overview": {
            //                    templateUrl: 'views/services/mobilePlatform/overview.html'
            //                }

            //            }
            //        } //end of mobilePlatform view

            //    }



            .state('case-studies', {
                url: "/case-studies",
                views: {
                    "viewA": {
                        template: '<h5>This is the case studies route<h5>'
                    }
                }
                
            }) //end of case-studies views

            .state('company', {
                url: "/company",
                views: {
                    "viewA": {
                        template: '<h5>This is the company route</h5>'
                    }
                } 
            }) //end of company views

            .state('contact-us', {
                url: "/contact-us",
                views: {
                    "viewA": {
                        template: '<h5>This is the contact-us route</h5>'
                    }  
                }
            }) //end of contact-us view

            .state('site-map', {
                url: "/site-map",
                views:{
                    "viewA": {
                        template: '<h5>This is the site-map route</h5>'
                     }
                }     
                
            }) //end of contact-us view

    }]);
 




    //app.config(['$routeProvider', function ($routeProvider) {
//'ngRoute', 
    //    $routeProvider
    //            .when('/home', {
    //                templateUrl: 'views/home.html'
    //            })
    //             .when('/services', {
    //                 templateUrl: 'views/services/index.html',
    //                 controller: 'MainServicesController',
    //                 controllerAs: 'mainServicesCtrl'
    //             })
    //              .when('/services/fazztsoftware', {
    //                  templateUrl: 'views/services/fazztSoftware/index.html',
    //                  controller: 'FazztSoftwareController',
    //                  controllerAs: 'fazztSoftwareCtrl'
    //              })
    //              //.when('/services/:id/:id', {
    //              //    templateUrl: 'views/services/service-profile.html',
    //              //    controller: 'ServiceProfileController',
    //              //    controllerAs: 'profileCtrl'
    //              //})

    //             .when('/case-studies', {
    //                 template: '<h5>This is the case studies route<h5>'
    //             })
    //             .when('/company', {
    //                 template: '<h5>This is the company route</h5>'
    //             })
    //             .when('/contact-us', {
    //                 template: '<h5>This is the contact us route<h5>'
    //             })
    //             .when('/site-map', {
    //                 template: '<h5>This is the site map route<h5>'
    //             })
    //             .otherwise({ redirectTo: '/home' });
    //}]);



})();

  