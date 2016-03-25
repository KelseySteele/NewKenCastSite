
(function () {
//    'use strict';

    //Creates a module called KenCast
    var app = angular.module('kencast', ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngAnimate', 'ngRoute'])


    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/home', {
                    templateUrl: 'views/home.html'
                })
                 .when('/services', {
                     templateUrl: 'views/services/services.html',
                     controller: 'ServicesController',
                     controllerAs: 'servicesCtrl'
                 })
                  .when('/services/:id', {
                      templateUrl: 'views/services/home-service.html',
                      controller: 'SingleServicesController',
                      controllerAs: 'singleServicesCtrl'
                  })

                  .when('/services/:id/:id', {
                      templateUrl: 'views/services/service-profile.html',
                      controller: 'ServiceProfileController',
                      controllerAs: 'profileCtrl'
                  })

                 .when('/case-studies', {
                     template: '<h5>This is the case studies route<h5>'
                 })
                 .when('/company', {
                     template: '<h5>This is the company route</h5>'
                 })
                 .when('/contact-us', {
                     template: '<h5>This is the contact us route<h5>'
                 })
                 .when('/site-map', {
                     template: '<h5>This is the site map route<h5>'
                 })
                 .otherwise({ redirectTo: '/home' });
    }]);



})();

  