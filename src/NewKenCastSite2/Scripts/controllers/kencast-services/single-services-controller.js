
(function () {
    'use strict';

    angular.module('kencast')

    .controller('SingleServicesController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams ) {

        $scope.services = [];

        $http.get('/data/kencast-services.json').success(function (data) {
            angular.forEach(data, function(service) {
                if (service.id == $routeParams.id) 
                    $scope.services.push(service);            
            });
        });



    }]);
})();









//(function () {

//    'use strict';

//    angular.module('kencast')


//        .controller('SingleServicesController', function (singleServices, $scope, $routeParams $location) {

//            this.singleServices = singleServices;
//        });

//    var singleServices = [
//                {
//                    id: 'fazztsoftware',
//                    title: 'Fazzt Software',
//                    text: 'Fazzt Software is involved in all of our content network delivery services. Fazzt has delivered content for fire departments, TV/News stations, franchises, and movie theatres.'
//                },
//                {
//                    id: 'cinemaspecific',
//                    title: 'Cinema Specific',
//                    text: 'When it comes to content delivery, we know the movie industry has specific requirements, like the ability to deliver and recieve DCPs (Digital Cinema Packages). That is why we have produced a cutting edge Fazzt server software program to work specifically for digital cinema.'
//                },
//                {
//                    id: 'mobileplatform',
//                    title: 'Mobile Platform',
//                    text: 'Our mobile platform uses bonded cellular networks to transmit live HD video and send high volume data from any location.'
//                }
//    ]
//})();
