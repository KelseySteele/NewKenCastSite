(function () {
    'use strict';

    angular.module('kencast')

        .controller('LogoController', function () {
            this.logos = logos;
        });

    var logos = [
                {
                    image: 'images/logos/dcdcLogo.jpg',
                    link: 'http://www.dcdcdistribution.com/'
                },
                {
                    image: 'images/logos/elaraLogo.jpg',
                    link: 'http://www.elara.com.mx/'
                },
                {
                    image: 'images/logos/nyfdLogo.jpg',
                    link: 'http://www.nyc.gov/html/fdny/html/home2.shtml'
                },
                {
                    image: 'images/logos/tplLogo.jpg',
                    link: 'http://www.tpl.mx/'
                }
    ]

})();
