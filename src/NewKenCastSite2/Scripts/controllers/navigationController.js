(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('NavigationController', ['$state', function ($state) {
            this.sections = sections;
            this.section = {};


            this.selectSection = function (section) {
                for (var i = 0; i < this.sections.length; i++) {
                    if (this.sections[i] === section) {
                        this.section = this.sections[i];
                    }
                }
            };

            this.isSelected = function (checkSection) {
                return this.section === checkSection;
            };
            //responsible for toggling items within navigation bar. 
                //$('ul.nav li.dropdown').hover(function () {
                //    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
                //},
                //function () {
                //    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
                //});


            //var menu = this;

            //menu.toggle = true;

        }]);

                var sections = [
                     {
                         heading: 'Services',
                         mainSection: 'service',
                         state: 'service'
                     },
                     {
                         heading: 'Case Studies',
                         mainSection: 'casestudies',
                         state: 'case-studies'
                     },
                     {
                         heading: 'Company',
                         mainSection: 'company',
                         state: 'company'
                     },

                ];
        

})();





