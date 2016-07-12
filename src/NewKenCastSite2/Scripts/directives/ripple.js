(function() {
    'use strict';

    angular.module('kencast')
        .directive('ripple', ['$timeout', function ($timeout) {

            //Code from http://stackoverflow.com/questions/29988477/material-design-ripple-from-jquery-to-angularjs
            return {
                restrict: 'C',
                link: function (scope, element, attrs) {
                    element.on('click', function (event) {
                        event.preventDefault();

                        var $div = angular.element('<div></div>'),
                            btnOffset = $(this).offset(),
                            xPos = event.pageX - btnOffset.left,
                            yPos = event.pageY - btnOffset.top;

                        $div.addClass('ripple-effect');
                        var $ripple = angular.element(".ripple-effect");

                        $ripple.css("height", $(this).height());
                        $ripple.css("width", $(this).height());
                        $div.css({
                            top: yPos - ($ripple.height() / 2),
                            left: xPos - ($ripple.width() / 2),
                            background: $(this).data("ripple-color")
                        })
                            .appendTo($(this));

                        $timeout(function () {
                            $div.remove();
                        }, 2000);
                    });
                }
            }
        
        }]);

})();