(function () {
    'use strict';

    angular.module('kencast')

        .controller('ServicesController', function () {
            this.services = services;



        });

    var services = [
                {
                    state: 'fazzt',
                    title: 'Fazzt Software',
                    image: '/images/homepage-placeholder.jpg',
                    text: 'Fazzt Software is involved in all of our content network delivery services. Fazzt has delivered content for fire departments, TV/News stations, franchises, and movie theatres.'
                },
                {
                    state: 'cinema-specific',
                    title: 'Cinema Specific',
                    image: '/images/homepage-placeholder.jpg',
                    text: 'When it comes to content delivery, we know the movie industry has specific requirements, like the ability to deliver and recieve DCPs (Digital Cinema Packages). That is why we have produced a cutting edge Fazzt server software program to work specifically for digital cinema.'
                },
                {
                    state: 'mobile-platform',
                    title: 'Mobile Platform',
                    image: '/images/homepage-placeholder.jpg',
                    text: 'Our mobile platform uses bonded cellular networks to tranmit live HD video and send high volume data from any location.'
                }
    ]

})();
