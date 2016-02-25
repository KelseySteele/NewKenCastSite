(function () {
    'use strict';

    angular.module('kencast')

        .controller('CarouselController', function () {
            this.slides = slides;
        });

    var slides = [
                {
                    image: 'images/homeCarousel/to-thousands-of-locations.jpg',
                    text: 'Send large video files and live video streams to thousands of locations'
                },
                {
                    image: 'images/homeCarousel/secure-files-and-streams.jpg',
                    text: 'Encrypt files to prevent stolen video files and streams'
                },
                {
                    image: 'images/homeCarousel/from-any-location.jpg',
                    text: 'Broadcast live video from any location'
                },
                {
                    image: 'images/homeCarousel/customizable-solutions.jpg',
                    text: 'Customizable solutions'
                }
    ]
   

})();
