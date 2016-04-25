(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('NavigationController', function () {

            //responsible for toggling items within navigation bar. 
                $('ul.nav li.dropdown').hover(function () {
                    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
                },
                function () {
                    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
                });



            //var menu = this;

            //menu.toggle = true;

            //menu.sections = [
            //    {state: 'services', heading:'Services'},
            //    {state: 'case-studies', heading: 'Case Studies'},
            //    {state: 'company', heading: 'Company'}
            //]

        });

})();





