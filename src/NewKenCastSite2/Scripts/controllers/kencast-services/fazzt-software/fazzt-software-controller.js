(function () {
    'use strict';

    angular.module('kencast')

        .controller('FazztSoftwareController', [ '$scope', '$mdSidenav', function ($scope, $mdSidenav) {
            $scope.openLeftMenu = function () {
                $mdSidenav('left').toggle();
            };


            $scope.fazztViews = fazztViews;
            $scope.currentTab = "overview";            
        }]);

    var fazztViews = [
                {
                    view: 'views/services/fazzt/applications.html',
                    id: 'applications'
                },
                {
                    view: 'views/services/fazzt/equipment.html',
                    id: 'equipment'
                },
                {
                    view: 'views/services/fazzt/faq.html',
                    id: 'faq'
                },
                {
                    view: 'views/services/fazzt/flowchart.html',
                    id: 'flowchart'
                },
                {
                    view: 'views/services/fazzt/options.html',
                    id: 'options'
                },
                {
                    view: 'views/services/fazzt/overview.html',
                    id: 'overview'
                }
    ]


})();

