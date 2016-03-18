(function () {
    'use strict';

    angular
        .module('kencast')
        .factory('products', function ($http) {
            return {
                list: function (callback) {
                    $http.get('/data/kencast-services.json').success(callback);
                }
            };
        });

})();