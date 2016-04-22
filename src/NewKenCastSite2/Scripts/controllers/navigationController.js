(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('NavigationController', function () {

            var menu = this;

            //menu.toggle = true;

            menu.sections = [
                {state: 'services', heading:'Services'},
                {state: 'case-studies', heading: 'Case Studies'},
                {state: 'company', heading: 'Company'}
            ]

            //menu.addSection = function () {
            //    menu.sections.push({ heading: sections.heading });
            //    menu.heading = "";

            //};

        });

})();





