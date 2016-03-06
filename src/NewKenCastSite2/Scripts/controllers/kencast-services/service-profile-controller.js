(function () {
    'use strict';

    angular.module('kencast')

    .controller('ServiceProfileController', ['$scope','$http', '$routeParams', function ($scope, $http, $routeParams) 
    
    {
        $http.get('js/data.json').success (function(data){
            $scope.serviceData = data;
            $scope.whichService = $routeParams.id;
        });
    }]

    )}
    )
();
