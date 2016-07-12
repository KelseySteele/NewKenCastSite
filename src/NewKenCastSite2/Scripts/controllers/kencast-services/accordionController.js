(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('accordionController', ['$scope', function ($scope) {
            $scope.groups = [
                {
                    question: 'Why Fazzt?',
                    answer: 'Traditional TCP protocols, such as FTP and HTTP, require that every byte sent be acknowledged. Any data which is lost or not acknowledged must be resent. TCP uses data loss for bandwidth and congestion control. On networks with high latency or excessive packet loss, TCP protocols can suffer from poor efficiency. Even on networks with good performance characteristics, TCP protocols rarely achieve optimum bandwidth utilization.',
                    service: 'fazzt'
                },
                {
                    question: 'What are the features?',
                    answer: 'Blazeband achieves speed and reliability through the use of KenCast (patented, additional patents pending) Fazzt Forward Error Correction (Fazzt FEC) technology, validation algorithm, accelerated UDP algorithms, and Missed Packet Collector algorithms. This includes the following tools',
                    service: 'fazzt'
                },
                {
                    question: 'What is new in fazzt 9 (the latest version)?',
                    answer: 'Fazzt 9 includes two transmission mechanisms which utilize Blazeband technology: one primarily for content distribution and one primarily for content contribution.',
                    service: 'fazzt'
                },
                {
                    question: 'How do the blazeband pull and push channels work?',
                    answer: 'The Blazeband Pull Channel is used with Fazzt Unicast Delivery Framework, which handles automatic channel creation, scheduling, and bandwidth management at the Server. The Blazeband Pull Channel can be used as the primary (or only) content delivery mechanism, or it can be used as a backup mechanism for a multicast network (such as a satellite network).',
                    service: 'fazzt'
                },
                {
                    question: 'How is this digital cinema solution different from competitiors?',
                    answer: 'It is from KenCast...duh',
                    service: 'digitalcinema'
                },
                {
                    question: 'Who is currently using this digital cinema service?',
                    answer: 'Mickey Mouse',
                    service: 'digitalcinema'
                },
                {
                    question: 'What are the structuring options?',
                    answer: 'You can use hardware from KenCast or install our software onto your existing hardware',
                    service: 'digitalcinema'
                },
                {
                    question: 'How is this mobile platform different from competitors?',
                    answer: 'Instead of simply providing one component of the entire workflow, KenCast crafts end-to-end, turnkey live broadcasting solutions.',
                    service: 'mobileplatform'
                },
                {
                    question: 'What are the encoding/transmission options?',
                    answer: ' KenCast’s partnerships with America’s major cellular providers afford clients live broadcast capabilities over commercial cellular networks at a fraction of consumer costs.',
                    service: 'mobileplatform'
                },
                {
                    question: 'What applications/markets does this platform serve?',
                    answer: 'Public safety / emergency response: remote surveillance and situational awareness .',
                    service: 'mobileplatform'
                },
                {
                    question: 'What are the end-user play out options?',
                    answer: 'OTT streaming platform: HD web-based streaming solutions for playback on Android and iOS devices and PC’s',
                    service: 'mobileplatform'
                },
                {
                    question: 'What are the structuring options?',
                    answer: 'Hardware: purchase, 1- or 2-year lease options',
                    service: 'mobileplatform'
                }


            ];

        }]);

})();
