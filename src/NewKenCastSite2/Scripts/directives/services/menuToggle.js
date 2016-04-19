(function() {
    'use strict';

    angular.module('sidenav.directives')
        .directive('menuToggle', ['$timeout', function ($timeout) {//Shows & hides menu items when there are sub-items
            return {
                scope: {
                    section: '='//this scope is equal to this section within the sections array
                },
                templateUrl: 'views/services/menuToggle.html',

                link: function (scope, element) {
                    var controller = element.parent().controller(); //allows access to functions within the controller

                    scope.isOpen = function () {
                        return controller.isOpen(scope.section);
                    };
                    scope.toggle = function () {
                        controller.toggleOpen(scope.section);
                    };

                    var parentNode = element[0].parentNode.parentNode.parentNode; //node could be element node
                    if (parentNode.classList.contains('parent-list-item')) {
                        var heading = parentNode.querySelector('h2');
                        element[0].firstChild.setAttribute('aria-describedby', heading.id);
                    }
                }
            };

        }]);
    
})();