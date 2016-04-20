(function () {
    'use strict';

    angular.module('kencast.services')
        .factory('navigationService', [
            '$location', //keeps track of the url in browser
            '$rootScope', //says this is part of the main model/set of data

            function ($rootscope) {
                var menuItems = [
                    { name: 'home', heading: "Home", route: "app.home", active: false },
                    { name: 'services', heading: "Services", route: "app.services", active: false },
                    { name: 'case-studies', heading: "Case Studies", route: "app.case-studies", active: false },
                    { name: 'company', heading: "Company", route: "app.company", active: false }
                ];

                var currentMenuItem,

                resetMenuItem = function(menuItem) {
                    menuItem.active = false;
                },

                resetMenuItems = function(){
                    for(var i = 0; i < menuItems.length; i++){
                        resetMenuItem(menuItems(i));
                    }
                },

                findMenuItem = function (routeName) {
                    var criteriaFunction = function(c){
                        return c.route === routeName || routeName.indexOf(c.route) != -1; //don't really understand -1 here
                    };

                    return menuItems.filter(criteriaFunction)[0];//creates a new array with items that met criteria from criteriaFunction
                };

                $rootScope.$on('StateChangeStart', function(event, toState, toParams){
                    currentMenuItem = findMenuItem(toState.name, toParams);
                
                });


                $stateScope.$on('StateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                    if(currentMenuItem) {
                        currentMenuItem.active = true;
                        prevMenuItem = findMenuItem(fromState.name);
                        if(prevMenuItem && prevMenuItem.name !== currentMenuItem.name) {
                            prevMenuItem.active = false;
                        }
                    } else {
                        for (var i = 0; i < currentMenuItem.length; i ++) {
                            currentMenuItem[i].active = false;
                        }
                    }
                });
                
                return {
                    menuItems: menuItems,
                    currentMenuItem: currentMenuItem
                };
            }]);

})();