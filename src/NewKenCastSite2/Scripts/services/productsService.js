(function () {
    'use strict';

    angular
        .module('kencast')
        .service('productsService', ['$http', '$q',function ($http, $q)
        {
            var deferred = $q.defer(); //a service that helps run functions asynchronously and lets you use data when it's done processing.
            $http.get('/data/kencast-services.json').then(function (data) {
                deferred.resolve(data);
            });

            this.getProducts = function ()
            {
                return deferred.promise;
            }
        }])

})();