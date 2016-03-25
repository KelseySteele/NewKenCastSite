(function () {
    'use strict';

    angular.module('kencast')

    .controller('ServiceProfileController', ['$scope', 'productsService', '$routeParams',function ($scope, productsService, $routeParams)
    {

        $scope.products = [];
        $scope.submenus = [];
      

        var promise = productsService.getProducts();
        promise.then(function (data) { //get data from json file
            $scope.products = data.data;
            console.log($scope.products);

            //angular.forEach(data, function (submenu) {
            //    $scope.submenus = $scope.products.submenus.submenu;
            //    $scope.submenus.push(submenu);
            //    console.log($scope.submenus);
                //for ($scope.submenus in product) {
                //    console.log($scope.submenus);
                //};
            //});
            
            //get name of submenus' property names
            

            //angular.forEach(data, function (product) {
            //    if (product.id == $routeParams.id.key)
            //        $scope.products.push(product);
            //    console.log($scope.products)
            //});


        });



    }

    ])}
 )();
