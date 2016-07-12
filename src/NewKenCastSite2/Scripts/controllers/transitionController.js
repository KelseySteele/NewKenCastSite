(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('transitionController', ['$state', '$scope', function ($state, $scope) {
            this.cards = ['fazzt.applications.card']; //List of states
            //code adapted from http://codepen.io/ShMcK/pen/kHxKy/
            //on card click
            this.stateChange = function (card) {
                this.transition = card;
                $state.go(card);
            };

        }])
   

})();
