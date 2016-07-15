(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('accordionController', ['$scope', function ($scope) {
            $scope.groups = [
                {
                    question: 'Why Fazzt?',
                    answer: '<p>Traditional TCP protocols, such as FTP and HTTP, require that every byte sent be acknowledged. Any data which is' + ' lost or not acknowledged must be resent. TCP uses data loss for bandwidth and congestion control. On networks with' + ' high latency or excessive packet loss, TCP protocols can suffer from poor efficiency. Even on networks with good' + 'performance characteristics, TCP protocols rarely achieve optimum bandwidth utilization.</p>' + '<p>Blazeband provides an alternative which overcomes these limitations of TCP. Blazeband utilizes UDP for bulk packet delivery. UDP (User Datagram Protocol) is the standard mechanism for delivering packet-based data over IP networks. UDP does not provide mechanisms for bandwidth control or reliability, but UDP packets can be sent very quickly.</p>' + '<p> Blazeband protocols provide bandwidth and congestion control through UDP messages, using intelligent algorithms which distinguish congestion losses from other types of packet losses. These algorithms prevent Blazeband bandwidth utilization from dropping off in the presence of occasional packet loss.</p>',
                    service: 'fazzt'
                },
                {
                    question: 'What are the features?',
                    answer: '<p>Blazeband achieves speed and reliability through the use of KenCast&rsquo;s (patented, additional patents pending) Fazzt Forward Error Correction (Fazzt FEC) technology, validation algorithm, accelerated UDP algorithms, and Missed Packet Collector algorithms.  This includes the following tools:</p>'+
                      '<p><strong>KenCast Accelerated UDP toolbox:</strong> </p>'+
                        '<ul>'+
                        '<li>• Stream multiplexing</li>' +
                        '<li>• Packet-reordering</li>' +
                        '<li>• Forward-Error Correction (FEC)</li>' +
                        '<li>• Congestion control</li>' +
                        '<li>• Multi-Threading</li>' +
                        '<li>• Compression</li>' +
                        '<li>• Audit trail</li>' +
                        '<li>• Encryption</li>' +
                        '<li>• Plus automated optimization of window sizes, framing, ACKs, and all the fun bits of a protocol.</li>' +
                        '</ul>',
                    service: 'fazzt'
                },
                {
                    question: 'What is new in fazzt 9 (the latest version)?',
                    answer: '<p>NEW -- Fazzt 9 also includes two transmission mechanisms which utilize Blazeband technology: one primarily for content distribution and one primarily for content contribution.</p>' +
                    '<ul><li>• The <strong>Blazeband Pull Channel</strong> is primarily used for sending content from a Fazzt Enterprise Server to one or more Fazzt Clients.  </li>' +
                    '<li>• The <strong>Blazeband Pull Channel </strong> is primarily used for content contribution. </li></ul>' +
                    '<p>It is also possible to use the Blazeband Pull Channel for content contribution or the Blazeband Push channel for content distribution. The configurations discussed below are typically desirable'+'because they simplify the firewall and router configuration at the largest number of locations.</p>',
                    service: 'fazzt'
                },
                {
                    question: 'How do the blazeband pull and push channels work?',
                    answer: '<p>The<strong> Blazeband Pull Channel</strong> is used with Fazzt&rsquo;s Unicast Delivery Framework, which handles automatic channel creation, scheduling, and bandwidth management at the'+ 'Server. The <strong>Blazeband Pull Channel</strong> can be used as the primary (or only) content delivery mechanism, or it can be used as a backup mechanism for a multicast network (such as a'+ 'satellite network).</p>'+

                      '<p>The Blazeband Pull Channel uses both TCP and UDP protocols. The TCP connection is used for authentication and negotiation, while UDP is used to send data packets, using Blazeband technology for acceleration. </p>'+

                       '<p>The Fazzt Client initiates the connection when using the Blazeband Pull Channel. This allows the Client machine to be behind a firewall or NAT router. In most cases, no special firewall or router configuration is necessary on the Client side of the connection.</p>'+

                       '<p>The <strong>Blazeband Push Channel</strong> is primarily used for content contribution, for example, from the Fazzt Contribution Server to a Fazzt Enterprise Server. The Blazeband Push Channel also utilizes a TCP connection for negotiation and authentication, and UDP for bulk data delivery using Blazeband technology. In this case, the transmitting side initiates the connection, so the transmitting side can be behind a firewall or NAT router. Port configuration for the receiving side (typically the Enterprise Server) is the same as for the Blazeband Pull Channel discussed above.</p>',
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
                    answer: '<ul><li>• Instead of simply providing one component of the entire workflow, KenCast crafts end-to-end, turnkey live broadcasting solutions.</li><li>• Strategic third-party partnerships and seamless product integration provide clients with a diverse set of existing options to meet virtually any use scenario’s needs.</li><li>• For more specialized feature sets, full in-house hardware/software customization ability ensures that clients’ needs aren’t compromised to fit an “off-the-shelf” solution.</li><li>• KenCast’s broadcast technology is platform-agnostic, enabling clients to incorporate new hardware into existing frameworks.</li><li>• With a strong worldwide network of Mobile Viewpoint partner companies, clients can ensure quality support in platform deployments virtually anywhere in the world.</li></ul>',
                    service: 'mobileplatform'
                },
                {
                    question: 'What are the encoding/transmission options?',
                    answer: '<ul><li>• KenCast’s partnerships with America’s major cellular providers afford clients live broadcast capabilities over commercial cellular networks at a fraction of consumer costs.</li><li>• For applications extending beyond cellular coverage boundaries, KenCast-recommended third-party KA-band satellite providers afford clients turnkey video broadcasting from almost anywhere in the world.</li></ul>',
                    service: 'mobileplatform'
                },
                {
                    question: 'What applications/markets does this platform serve?',
                    answer: '<ul><li>• Public safety / emergency response: remote surveillance and situational awareness</li><li>• Oil / natural gas: facility real-time remote monitoring</li><li>• Live events / news-gathering: live broadcasting from any location with full portability (ex: breaking news, sporting events, concerts, etc.)</li><li>• Field inspection: remote real-time site monitoring (ex: power utilities, telecommunications, construction, etc.)</li><li>• Corporate America: reliable real-time large-scale meeting streaming from remote locations</li><li>• Incorporation of drone/UAV live broadcast into any of the above applications</li></ul>',
                    service: 'mobileplatform'
                },
                {
                    question: 'What are the end-user play out options?',
                    answer: '<ul><li>• OTT streaming platform: HD web-based streaming solutions for playback on Android and iOS devices and PC’s</li><li>• Rack-mount solutions: output live feeds from rack-mount units within an MCR via HDMI, HD-SDI or IP connections</li></ul>',
                    service: 'mobileplatform'
                },
                {
                    question: 'What are the structuring options?',
                    answer: '<ul><li>• Hardware: purchase, 1- or 2-year lease options</li><li>SaaS options for end-user OTT streaming</li><li>• Monthly cellular billing based on data consumption, <em>not</em> specific data plans</li></ul>',
                    service: 'mobileplatform'
                }

            ];

        }]);

})();
