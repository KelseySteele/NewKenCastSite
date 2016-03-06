(function () {
    'use strict';

    angular.module('kencast')

        .controller('NewHomepageController', function () {
            this.sections = sections;
        });

    var sections = [
                {
                    title: 'Fazzt 9.0',
                    image: '/images/homepage-placeholder.jpg',
                    text: 'All the security, reliability, and efficiency as our previous versions, but with added customer requested features.'
                },
                {
                    title: 'Live Event Coverage',
                    image: '/images/homepage-placeholder.jpg',
                    text: 'The New York Fire Department is using our latest live event coverage service for dependable on-site live video streams.'
                },
                {
                    title: 'Digital Cinema in Europe',
                    image: '/images/homepage-placeholder.jpg',
                    text: 'We will be introducing our content delivery network to thousands of theatres all across Europe.'
                }
    ]

})();
