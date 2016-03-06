(function() {
    'use strict';

    angular.module('kencast')

        .directive("footerDirective", [function () {
            return {
                restrict: 'E',
                templateUrl: '/views/footer.html'
            }
        }]);

})();