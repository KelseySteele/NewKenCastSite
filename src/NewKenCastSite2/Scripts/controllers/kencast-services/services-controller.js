(function () {
    'use strict';

    angular.module('kencast')

        .controller('ServicesController', function () {
            this.services = services;

        });

    var services = [
                {
                    state: 'fazzt',
                    title: 'Fazzt',
                    image: '/images/services/servicesImages/fazzt.jpg',
                    text: 'The KenCast Fazzt® Digital Delivery Software enables efficient, reliable, and secure multicast and unicast distribution of large files and live streams over terrestrial and satellite networks.'
                },
                {
                    state: 'digital-cinema',
                    title: 'Digital Cinema',
                    image: '/images/services/servicesImages/digitalCinema.jpg',
                    text: 'Working with movie theater chains and Hollywood’s leading studios such as Sony Pictures, Warner Bros Pictures and NBC Universal, KenCast provides a cutting edge Fazzt server software program to work specifically for digital cinema.'
                },
                {
                    state: 'mobile-platform',
                    title: 'Mobile Platform',
                    image: '/images/services/servicesImages/mobilePlatform.jpg',
                    text: 'Our mobile platform uses bonded cellular networks to tranmit live HD video and send high volume data from any location.'
                }
    ]

})();
