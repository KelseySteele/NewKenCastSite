(function () {
    'use strict';

    angular
        .module('kencast')
        .factory('servicesMenu', [
            '$location',
            '$rootScope',
            function ($location, $rootScope) {

                var sections = [{
                    service: 'fazzt',
                    name: 'overview',
                    state: 'fazzt.overview',
                    type: 'link'
                },
                {
                    service: 'fazzt',
                    name: 'applications',
                    state: 'fazzt.applications.cards',
                    type: 'link'
                },
                {
                    service: 'fazzt',
                    name: 'equipment',
                    state: 'fazzt.equipment.cards',
                    type: 'link'
                },
                {
                    service: 'fazzt',
                    name: 'faq',
                    state: 'fazzt.faq',
                    type: 'link'
                 },
                 {
                    service: 'fazzt',
                    name: 'flowchart',
                    state: 'fazzt.flowchart',
                    type: 'link'
                 },
                 {
                     service: 'digital-cinema',
                     name: 'overview',
                     state: 'digital-cinema.overview',
                     type: 'link'
                 },
                //{
                //    service: 'digital-cinema',
                //    name: 'applications',
                //    state: 'digital-cinema.applications',
                //    type: 'link'
                //},
                {
                    service: 'digital-cinema',
                    name: 'equipment',
                    state: 'digital-cinema.equipment.cards',
                    type: 'link'
                },
                {
                    service: 'digital-cinema',
                    name: 'faq',
                    state: 'digital-cinema.faq',
                    type: 'link'
                },
                 {
                     service: 'digital-cinema',
                     name: 'flowchart',
                     state: 'digital-cinema.flowchart',
                     type: 'link'
                 },
                 //{
                 //    service: 'digital-cinema',
                 //    name: 'options',
                 //    state: 'digital-cinema.options',
                 //    type: 'link'
                 //},
                 {
                     service: 'mobile-platform',
                     name: 'overview',
                     state: 'mobile-platform.overview',
                     type: 'link'
                 },
                {
                    service: 'mobile-platform',
                    name: 'applications',
                    state: 'mobile-platform.applications.cards',
                    type: 'link'
                },
                {
                    service: 'mobile-platform',
                    name: 'equipment',
                    state: 'mobile-platform.equipment',
                    type: 'link'
                },
                {
                    service: 'mobile-platform',
                    name: 'faq',
                    state: 'mobile-platform.faq',
                    type: 'link'
                },
                 {
                     service: 'mobile-platform',
                     name: 'flowchart',
                     state: 'mobile-platform.flowchart',
                     type: 'link'
                 },
                 {
                     service: 'mobile-platform',
                     name: 'consumer option',
                     state: 'mobile-platform.consumeroption',
                     type: 'link'
                 }
                ];

                var self;

                return self = {

                    sections: sections,
                    toggleSelectSection: function (section) {
                        self.openedSection = (self.openedSection === section ? null : section);
                    },
                    isSectionSelected: function (section) {
                        return self.openedSection === section;
                    },
                    selectPage: function (section, page) {
                        page && page.url && $location.path(page.url);
                        self.currentSection = section;
                        self.currentPage = page;
                    }
                };
                

            }
        ])
     


})();