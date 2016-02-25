
(function () {
//    'use strict';

    //Creates a module called KenCast
    var app = angular.module('kencast', ['ngRoute','ngSanitize', 'ui.bootstrap'])


    app.config(['$routeProvider', function ($routeProvider) {


        $routeProvider
                .when('/home', {
                templateUrl: 'views/home.html'
                })
                 .when('/services', {
                     template: '<h5>This is the services route</h5>'
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

  