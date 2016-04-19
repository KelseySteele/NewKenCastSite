(function () {
    'use strict';

    angular.module('sidenav.services')
        .factory('servicesMenu', [
            '$location', //keeps track of the url in browser
            '$rootScope', //says this is part of the main model/set of data
            function ($location) {
                var sections = [{
                    name: 'Services',
                    state: 'services',
                    type: 'link'
                }];

                sections.push({
                    name: 'Fazzt',
                    type: 'toggle',
                    pages: [{
                        name: 'Overview',
                        type: 'link',
                        state: 'fazzt.overview',
                    }, {
                        name: 'Applications',
                        type: 'link',
                        state: 'fazzt.applications',
                    }, {
                        name: 'Equipment',
                        type: 'link',
                        state: 'fazzt.equipment',
                    }]
                });
            }
        ]);


})();