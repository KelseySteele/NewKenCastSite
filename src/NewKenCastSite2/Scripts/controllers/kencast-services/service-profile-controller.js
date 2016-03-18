(function () {
    'use strict';

    angular.module('kencast')

    .controller('ServiceProfileController', ['$scope', 'products', function ($scope, products)  {
        products.list(function (products) {
            $scope.products = products;  

        });

        $scope.title = products.list.submenus;

    }]

    )}
    )
();
