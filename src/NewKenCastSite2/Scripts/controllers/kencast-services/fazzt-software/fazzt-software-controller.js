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
                    view: 'views/services/fazztSoftware/applications.html',
                    id: 'applications'
                },
                {
                    view: 'views/services/fazztSoftware/equipment.html',
                    id: 'equipment'
                },
                {
                    view: 'views/services/fazztSoftware/faq.html',
                    id: 'faq'
                },
                {
                    view: 'views/services/fazztSoftware/flowchart.html',
                    id: 'flowchart'
                },
                {
                    view: 'views/services/fazztSoftware/options.html',
                    id: 'options'
                },
                {
                    view: 'views/services/fazztSoftware/overview.html',
                    id: 'overview'
                }
    ]


})();

