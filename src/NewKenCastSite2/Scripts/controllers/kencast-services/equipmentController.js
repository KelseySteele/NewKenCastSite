(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('equipmentController', ['$state', function ($state) {
            this.equipmentCards = equipmentCards;
            this.card = {};

            this.selectCard = function (card) {
                for (var i = 0; i < this.equipmentCards.length; i++) {
                    if (this.equipmentCards[i] === card) {
                        this.card = this.equipmentCards[i];
                    }
                }
            };

            this.isSelected = function (checkCard) {
                return this.card === checkCard;
            };

        }])


    var equipmentCards = [
                {
  
                    title: 'Fazzt Contribution Server',
                    text: 'The Fazzt Contribution Server software program is optimized to let you send content on a two-way network (TCP/IP) to a Fazzt Enterprise Server.',
                    longText: '<p>The Fazzt Enterprise server software program works centrally to send large files and high resolution streaming video to multiple sites, collecting content from publishers (contributors, content providers) for wired/wireless transmission to clients. It is highly scalable for flexibility, runs on multiple computers (multi-node), and provides full redundancy. The Enterprise server is also available as an appliance.</p><h5>Capabilities and Benefits</h5><ul><li>• Protects files and streams with Fazzt Forward Error Correction (FEC)</li><li>• Receives files and stream from content providers</li><li>• Supports encryption</li><li>• Manages schedules, users and bandwidth</li><li>• Enables hardware redundancy, automatic failover</li><li>• Packages (combines and compresses) files</li><li>• Transmits (multicast/unicast) files, streams to clients, publishers/other Fazzt servers</li><li>• Targets single and multi-sites and multiple site groups</li><li>• Provides alarm indication, notification for server and system (NMS)</li></ul><h5>Enterprise Server Software</h5>This software is available in 3 versions: <h6>Single Node</h6>The single node version of the Enterprise server software is a full-featured server in a single thread configuration.<h5>DUAL NODE</h5>The dual node Enterprise server is a full-featured server in an automatic failover configuration, and is recommended for use in mission-critical applications.<h5>CLUSTER (Multi-node)</h5>The cluster model provides multiple nodes of the Enterprise server and meets growing traffic in very large applications. The redundancy with automatic failover of the cluster system is designed to handle load-sharing conditions.<h5>Edgespan Edge Server Appliance</h5>The EdgeSpan server appliance is a turnkey appliance with a built-in satellite receiver and most of the standard functionality of a Fazzt server. This store-and-forward EdgeSpan server acts as an intelligent bridge between satellite and wireless networks, performing Fazzt FEC repairs on incoming Fazzt transmissions and then forwarding them to Fazzt clients via WiMAX or WiFi. It can operate unattended at the edge of the network, providing a wired and wireless solution, unicast and multicast, for "the last mile."',
                    service: 'fazzt'
                },
                {
                    title: 'Fazzt Power Publisher',
                    text: 'The Fazzt Power Publisher...',
                    longText: '<p>The Fazzt Power Publisher software program is a special purpose server that sends its content through a communications tunnel to an Enterprise Server. The Power Publisher has much of the same capabilities of the Enterprise Server, but the actual transmission and distribution is managed by the Enterprise Server.</p>',
                    service: 'fazzt'
                },

                {
                    title: 'Fazzt Satellite Publisher',
                    text: 'The Fazzt Satellite Publisher...',
                    longText: '<p>The Fazzt Satellite Publisher software program enables a one-way multicast via satellite to one or a few sites with a Fazzt Client. It is often used to carry content from a remote site, like a movie set on location or from a military surveillance ship, to a central hub where the content is received, stored or processed.</p>',
                    service: 'fazzt'
                },
                {
                    title: 'Edgespan Contribution Server',
                    text: 'The EdgeSpan Contribution Server is the preferred product for content providers to use in the preparation and delivery of content to one or more Fazzt Enterprise Servers.',
                    longText: '<p>The EdgeSpan Contribution Server is the preferred product for content providers to use in the preparation and delivery of content to one or more Fazzt Enterprise Servers. Content can include both files and live streams. File content may be sent in either a store‐and‐forward mode, or in a pass‐through (tunneling) mode. All channels available for Fazzt Server products are available for the Contribution Server, including multicast and unicast UDP channels, channels for opportunistic data insertion, Tunnel channels, and the new Blazeband channels introduced with Fazzt 8 for accelerated delivery over two‐way networks.</p> <p>The Contribution Server uses all of the Fazzt reliability technologies including Fazzt Forward Error Correction, validation, and the missed packet collector. It also includes all of the channel management, multiplexing, bandwidth management, queuing, and scheduling features available in the Fazzt Enterprise Server. The Contribution Server operates in conjunction with a Fazzt 8 (or later) Enterprise Server and includes all the features on the Fazzt Enterprise Client. Equipped with Dual Gig‐E interfaces for multiple network operation and DVB‐S2 satellite advanced modulation scheme.</p>',
                    service: 'fazzt'
                },
                {
                    image: '/images/services/digitalCinema/equipment/cinemaPro3RU.jpg',
                    title: 'CinemaPro 3RU',
                    text: 'The EdgeSpan CinemaPro is Hollywood’s preferred product for the digital cinema industry, currently used by top-grossing movie houses.',
                    longText: '<p>The EdgeSpan CinemaPro is Hollywood’s preferred product for the digital cinema industry, currently used by top-grossing movie houses. It is the premier choice for upgrading to state-of-the-art content distribution capability for optimal delivery of first-run movies from the Hollywood studios to cineplexes and theaters worldwide.The CinemaPro 3RU is compatible with all digital theater management systems, including legacy systems, and enables delivery by satellite or fiber optics of very large movie files and streaming of live events. It also offers simultaneous recording of live events for "time-shifting" with its DVR features, allowing staggered delivery to multiple screens in a cineplex, as well as recording of the event for later play out. The CinemaPro’s DVR-style management features of recording and time shifting for live events affords more screen play options -- and that means more ticket sales.<h4>Configurations</h4><p>The EdgeSpan CinemaPro comes in both 2 and 3-rack unit configurations, accepting multiple satellite feeds, or fiber delivered content. It can handle content at entertainment speeds exceeding 400Mbps. The CinemaPro may be configured to provide internal storage of up to 16 TBytes, interfacing with the theater management system via Ethernet LAN. External storage can provide additional capacity.</p><h4>Capabilities</h4><ul><li>• Supports multiple transponder delivery</li><li>• Built-in encryption</li><li>• Reliable hardware</li><li>• Supports hardware and software monitoring and reporting</li></ul><h4>Benefits</h4><ul><li>• Simple operation: Web browser interface, pre-configured for your network on arrival</li><li>• Reliable hardware: Redundant PS, RAID HDD array, OS on SSD, long lifecycle</li><li>• Managed SW &amp; HW: Updates to OS &amp; SW, centralized control</li><li>Built in satellite receivers: DVB-S2 satellite receivers</li><li>• Optimized FEC decoding: KenCast Fazzt® designed to deliver the largest DCP rapidly</li><li>• Modern DVR functionality: Allows multiple/simultaneous screenings of live events</li></ul></p>',
                    service: 'digitalcinema'
                },
                {
                    image: '/images/services/digitalCinema/equipment/cinemaPro2RU.jpg',
                    title: 'CinemaPro 2RU',
                    text: 'The CinemaPro 2RU is an economical solution for theatres whose storage and redundancy requirements are not as demanding as the CinemaPro 3RU.',
                    longText: '<p>The CinemaPro 2RU is a leading product many exhibitors worldwide have selected to receive digital content from the Hollywood studios. It is an economical solution for theatres whose storage and redundancy requirements are not as demanding as the CinemaPro 3RU.  The 2RU’s technology provides the same program as the 3RU with full network management, remote upgrades/enhancements, and follows the same roadmap as the 3RU as architected by the Hollywood studios.</p><p>The 2RU appliance supports reception, storage and validation of digital cinema packages (movies) as well as live streams. The CinemaPro 2RU can also manage multiple live events with simultaneous recording and time-shifting, using the built in DVR feature. This allows for live video delivery to multiple screens and recording of the event for later play outs to other screens.</p><p>The CinemaPro uses KenCast’s innovative content delivery technologies including Fazzt Forward Error Correction (Fazzt FEC®), validation, accelerated delivery using Blazeband™, split/join channel capacity, and the missed packet collector allowing for efficient retransmissions of missed data.</p><p>The 2-rack unit appliance is equipped with two gigabit Ethernet interfaces for multiple network operation, a portable HDD to conveniently import and export content, and a solid state drive to periodically update the OS and add feature enhancements. The CinemaPro interfaces readily to leading theatre management systems, and is designed for simultaneous reception, QA and forwarding at speeds up to 200 Megabits/s over satellite and 400 Megabits/s over fiber.</p><h4>Capabilities</h4><ul><li>• Reliable files/stream reception</li><li>• DVR functionality</li><li>• SW centrally managed</li><li>• DCP validation</li><li>• Split/join channel capacity</li><li>• Integrated management</li><li>• Content management</li><li>• Encryption</li><li>• Hot swappable HDs</li><li>• Hardware and OS optimized</li></ul>',
                    service: 'digitalcinema'
                },

                {
                    image: '/images/services/digitalCinema/equipment/professional2KDecoder.jpg',
                    title: 'Professional 2K Decoder',
                    text: 'The Professional 2K Decoder appliance adds decoding of live events to the cinema product line offered by KenCast.',
                    longText: 'The Professional 2K Decoder appliance adds decoding of live events to the cinema product line offered by KenCast. It is capable of decoding AVC and MPEG-2 content up to 1080p @ 60 frames per second. It provides a cost effective option for exhibitors to support alternative content up to HD resolutions',
                    service: 'digitalcinema'
                },
                {
                    image: '/images/services/digitalCinema/equipment/professional4KDecoder.jpg',
                    title: 'Professional 4K Decoder',
                    text: 'The Professional 4K Decoder supports multiple modes of management including local web administration.',
                    longText: 'The Professional 4K Decoder supports multiple modes of management including local web administration. KenCast centralized live event management, LCD control panel, and a local CinemaPro',
                    service: 'digitalcinema'
                },
                {
                    image: '/images/services/mobilePlatform/equipment/eventpro.jpg',
                    largeImage: '/images/services/mobilePlatform/equipment/eventproLarge.jpg',
                    title: 'VazztCaster EventPro',
                    text: 'Transmit live HD video and send high volume data from any location, all from one small, fully-ruggedized device!',
                    longText: '<p>The VazztCasterTM EventPro provides ultra-reliable, lowlatency cellular mobile live video broadcast. Bonding of up to 8 cellular networks, plus Wi-Fi and satellite connections, ensures high bandwidth and broadcast stability atany location.</p><h5>The Eventpro can be used for:</h5><ul><li>• Live video broadcast</li><li>• “Store & forward” of recorded video files</li><li>• High-speed FTP uploads</li><li>• High-speed internet access</li></ul><h5>Key Features</h5><ul><li>• High-speed bundled video data uplink</li><li>• Optimized video delay of less than 2 seconds, plus a programmable fixed delay time option</li><li>• IFB or return audio at less than 1 second delay</li><li>• Fully-integrated cellular modems; eternal antennas with up to 12 dB gain available</li><li>• Failover compensation via bonded networks</li><li>• Adaptive bitrate encoding</li><li>• Fully ruggedized (shock resistant up to 6 ft)</li><li>• Touchscreen for full unit control and detailed network information</li><li>• Local and remote (web-based) management/control</li><li>• Easy 1-button operation</li><li>• Lightweight</li><li>• Hot-swappable batteries (V-Lock or Anton-Bauer)</li></ul>',
                    service: 'mobilePlatform'
                },
                {
                    image: '/images/services/mobilePlatform/equipment/app.jpg',
                    largeImage: '/images/services/mobilePlatform/equipment/appLarge.jpg',
                    title: 'Smart Phone App',
                    text: 'Wirelessly broadcast content in low delay full HD* via bonded 4G/LTE to viewers anywhere in the world.',
                    longText: '<ul><li>• AS LIVE AS IT GETS: Wirelessly broadcast content in low delay full HD* via bonded 4G/LTE to viewers anywhere in the world!</li><li>• SMARTPHONE OR STANDALONE: Available in either an iPhone App or dedicated backpack transmitter for use with a variety of video cameras.</li><li>• ASTRONG CONNECTION: KenCast&#13;s bonded-cellular field solutions distribute video feeds across multiple cellular connections for extremely stable broadcast.</li><li>• APPLICATIONS INCLUDE: <ul><li>• Public safety/emergency response</li><li>OTT event streaming</li><li>• Field inspection (power utilities, oil/gas construction, insurance)</li><li>• Drone/UAV footage</li><li>• Broadcast media</li></ul></li></ul>',
                    service: 'mobilePlatform'
                },
                {
                    image: '/images/services/mobilePlatform/equipment/decoder.jpg',
                    largeImage: '/images/services/mobilePlatform/equipment/decoderLarge.jpg',
                    title: 'Decoder',
                    text: 'The Decoder....',
                    longText: '',
                    service: 'mobilePlatform'
                }                              
    ]


})();

