(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('applicationController', ['$state',function ($state) {
            this.cardImages = cardImages;
            this.card = {};

            this.selectCard = function (card) {
                for (var i = 0; i < this.cardImages.length; i++) {
                    if (this.cardImages[i] === card) {
                        this.card = this.cardImages[i];
                    }
                }
            };

            this.isSelected = function (checkCard) {
                return this.card === checkCard;
            };

        }])


    var cardImages = [
                {
                    image: '/images/services/fazzt/applications/banking.jpg',
                    title: 'Banking',
                    text: '<p>Banks...blah...blah...blah</p>',
                    service: 'fazzt',
                    state: 'banking'
                },
                {
                    image: '/images/services/fazzt/applications/cinema.jpg',
                    title: 'Cinema',
                    text: 'Cinema...blah...blah...blah',
                    service: 'fazzt',
                    state: 'cinema'
                },

                {
                    image: '/images/services/fazzt/applications/dth.jpg',
                    title: 'Direct to Home',
                    text: 'Direct to Home...blah...blah...blah',
                    service: 'fazzt',
                    state: 'dth'
                },
                {
                    image: '/images/services/fazzt/applications/geonetcast.jpg',
                    title: 'Geonetcast',
                    text: 'Geonetcast...blah...blah...blah',
                    service: 'fazzt',
                    state: 'geonetcast'
                },
                {
                    image: '/images/services/fazzt/applications/publicSafety.jpg',
                    title: 'Public Safety',
                    text: 'Public Safety...blah...blah...blah',
                    service: 'fazzt',
                    state: 'publicsafety'
                },
                {
                    image: '/images/services/fazzt/applications/retail.jpg',
                    title: 'Retail',
                    text: 'Retail...blah...blah...blah',
                    service: 'fazzt',
                    state: 'retail'
                },
                {
                    image: '/images/services/mobilePlatform/applications/agriculture.jpg',
                    title: 'Agriculture',
                    text: 'Agriculture...blah...blah...blah',
                    service: 'mobileplatform',
                    state: 'agriculture'
                },
                {
                    image: '/images/services/mobilePlatform/applications/cinema.jpg',
                    title: 'Cinema',
                    text: 'Cinema...blah...blah...blah',
                    service: 'mobilePlatform',
                    state: 'cinema'
                },
                {
                    image: '/images/services/mobilePlatform/applications/drone.jpg',
                    title: 'UAVs',
                    text: 'UAV...blah...blah...blah',
                    service: 'mobileplatform',
                    state: 'uav'
                },
                {
                    image: 'images/services/mobilePlatform/applications/electricUtilities.jpg',
                    title: 'Electric Utilities',
                    text: 'Electric Utilities...blah...blah...blah',
                    service: 'mobilePlatform',
                    state: 'electricutilities'
                },
                {
                    image: '/images/services/mobilePlatform/applications/military.jpg',
                    title: 'Military',
                    text: 'Military...blah...blah...blah',
                    service: 'mobileplatform',
                    state: 'military'
                },
                {
                    image: '/images/services/mobilePlatform/applications/propertyInsurance.jpg',
                    title: 'Property Insurance',
                    text: 'Property Insurance...blah...blah...blah',
                    service: 'mobilePlatform',
                    state: 'propertyinsurance'
                },
                {
                    image: '/images/services/mobilePlatform/applications/publicSafety.jpg',
                    title: 'Public Safety',
                    text: 'Public Safety...blah...blah...blah',
                    service: 'mobilePlatform',
                    state: 'Public Safety'
                },
                {
                    image: '/images/services/mobilePlatform/applications/renewableEnergy.jpg',
                    title: 'Renewable Energy',
                    text: 'Renewable Energy...blah...blah...blah',
                    service: 'mobileplatform',
                    state: 'renewableenergy'
                },
                {
                    image: '/images/services/mobilePlatform/applications/sports.jpg',
                    title: 'Sports',
                    text: 'Sports...blah...blah...blah',
                    service: 'mobilePlatform',
                    state: 'sports'
                }

    ]


})();
