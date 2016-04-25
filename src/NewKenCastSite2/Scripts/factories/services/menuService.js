(function () {
    'use strict';

    angular
        .module('kencast')
        .factory('servicesMenu', [
            '$location',
            '$rootScrope',
            function ($location) {

                var sections = [{
                    name: 'overview',
                    state: 'fazzt.overview',
                    type: 'link'
                },
                {
                    name: 'applications',
                    state: 'fazzt.applications',
                    type: 'link'
                }];
            }
        ])
     


})();