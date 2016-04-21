(function () {
    'use strict';

    angular.module('kencast.services')
        .factory('navigationMenu', [
            '$location', //keeps track of the url in browser
            '$rootScope', //says this is part of the main model/set of data

            function ($rootscope) {
                var sections = [{ 
                    name: 'KenCast', 
                    heading: 'KenCast', 
                    state: 'app.home', 
                    type: 'link' 
                }];

                sections.push({
                    name: 'services',
                    heading: 'Services',
                    state: 'app.services',
                    type: 'toggle',
                    pages: [{
                        name: 'fazzt',
                        heading: 'Fazzt',
                        type: 'link',
                        state: 'app.services.fazzt'
                    }, {
                        name: 'cinemaspecific',
                        heading: 'Cinema Specific',
                        type: 'link',
                        state: 'app.services.cinemaspecific'
                    },
                    {
                        name: 'mobileplatform',
                        heading: 'Mobile Platform',
                        type: 'link',
                        state: 'app.services.mobileplatform'
                    }]
                });

                sections.push({
                    name: 'case-studies',
                    heading: 'Case Studies',
                    state: 'app.case-studies',
                    type: 'link'                    
                });

                sections.push({
                    name: 'company',
                    heading: 'Company',
                    state: 'app.company',
                    type: 'link',                    
                });
                    //{ name: 'services', heading: "Services", route: "app.services", active: false },
                    //{ name: 'case-studies', heading: "Case Studies", route: "app.case-studies", active: false },
                    //{ name: 'company', heading: "Company", route: "app.company", active: false }
                

                var self;

                return self = {
                    toggleSelectSection: function (section) {
                        self.openedSection = (self.openedSection === section ? null : section);
                    },

                    isSectionSelected: function (section) {
                        return self.openedSection === section;
                    },

                    selectSection: function (section) {
                        section && section.url && $location.path(section.url);
                        self.currentSection = section;
                        self.currentPage = page;
                    }
                };

                //resetMenuItem = function(menuItem) {
                //    menuItem.active = false;
                //},

                //resetMenuItems = function(){
                //    for(var i = 0; i < menuItems.length; i++){
                //        resetMenuItem(menuItems(i));
                //    }
                //},

                //findMenuItem = function (routeName) {
                //    var criteriaFunction = function(c){
                //        return c.route === routeName || routeName.indexOf(c.route) != -1; //don't really understand -1 here
                //    };

                //    return menuItems.filter(criteriaFunction)[0];//creates a new array with items that met criteria from criteriaFunction
                //};

                //$rootScope.$on('StateChangeStart', function(event, toState, toParams){
                //    currentMenuItem = findMenuItem(toState.name, toParams);
                
                //});


                //$stateScope.$on('StateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                //    if(currentMenuItem) {
                //        currentMenuItem.active = true;
                //        prevMenuItem = findMenuItem(fromState.name);
                //        if(prevMenuItem && prevMenuItem.name !== currentMenuItem.name) {
                //            prevMenuItem.active = false;
                //        }
                //    } else {
                //        for (var i = 0; i < currentMenuItem.length; i ++) {
                //            currentMenuItem[i].active = false;
                //        }
                //    }
                //});
                
                //return {
                //    menuItems: menuItems,
                //    currentMenuItem: currentMenuItem
                //};
            }]);

})();