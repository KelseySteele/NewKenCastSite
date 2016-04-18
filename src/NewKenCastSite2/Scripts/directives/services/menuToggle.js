(function() {
    'use strict';

    angular.module('kencast')
        .directive('menuToggle', ['$timeout', function ($timeout) {//Shows & hides menu items when there are sub-items
            return {
                scope: {
                    section: '='//this scope is equal to this section within the sections array
                },

            }

        }]);
    


})();