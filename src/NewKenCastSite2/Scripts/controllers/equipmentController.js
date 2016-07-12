(function () {
    'use strict';

    angular
        .module('kencast')
        .controller('equipmentController', ['$state', function ($state) {
            this.equipmentCards = equipmentCards;
            //this.card = {
            //    image: 'images/services/fazzt/applications/banking.jpg',
            //    title: 'Banking',
            //    text: 'Banks...blah...blah...blah',
            //    service: 'fazzt',
            //    state: 'banking'
            //}

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

            //identify card that was clicked
            //this.selectCard = function (card) {
            //    for (var i = 0; i < this.equipmentCards.length; i++) {
            //        if (this.equipmentCards[i].image === this.image) {
            //            this.image = this.equipmentCards[i].image;
            //            this.title = this.equipmentCards[i].title;
            //            this.text = this.cardImage[i].text;
            //        }                    
            //    }
            //};

            //set active tab



        }])


    var equipmentCards = [
                {
                    title: 'Fazzt Contribution Server',
                    text: 'The Fazzt Contribution Server software program is optimized to let you send content on a two-way network (TCP/IP) to a Fazzt Enterprise Server. The Contribution Server enables the content provider to locally manage channels, transmission schedules, access to content, user permissions, and many other related functions that traditionally are administered at the central hub server. This gives the content provider complete control over content management and distribution, while still allowing them to benefit from the advantages of the Fazzt Enterprise Server’s shared content delivery capabilities.',
                    service: 'fazzt'
                },
                {
                    title: 'Fazzt Power Publisher',
                    text: 'The Fazzt Power Publisher software program is a special purpose server that sends its content through a communications tunnel to an Enterprise Server. The Power Publisher has much of the same capabilities of the Enterprise Server, but the actual transmission and distribution is managed by the Enterprise Server.',
                    service: 'fazzt'
                },

                {
                    title: 'Fazzt Satellite Publisher',
                    text: 'The Fazzt Satellite Publisher software program enables a one-way multicast via satellite to one or a few sites with a Fazzt Client. It is often used to carry content from a remote site, like a movie set on location or from a military surveillance ship, to a central hub where the content is received, stored or processed.',
                    service: 'fazzt'
                },
                {
                    title: 'Edgespan Contribution Server',
                    text: 'The EdgeSpan Contribution Server is the preferred product for content providers to use in the preparation and delivery of content to one or more Fazzt Enterprise Servers. Content can include both files and live streams. File content may be sent in either a store‐and‐forward mode, or in a pass‐through (tunneling) mode. All channels available for Fazzt Server products are available for the Contribution Server, including multicast and unicast UDP channels, channels for opportunistic data insertion, Tunnel channels, and the new Blazeband channels introduced with Fazzt 8 for accelerated delivery over two‐way networks. The Contribution Server uses all of the Fazzt reliability technologies including Fazzt Forward Error Correction, validation, and the missed packet collector. It also includes all of the channel management, multiplexing, bandwidth management, queuing, and scheduling features available in the Fazzt Enterprise Server. The Contribution Server operates in conjunction with a Fazzt 8 (or later) Enterprise Server and includes all the features on the Fazzt Enterprise Client. Equipped with Dual Gig‐E interfaces for multiple network operation and DVB‐S2 satellite advanced modulation scheme.',
                    service: 'fazzt'
                },
                {
                    title: 'Key Features',
                    text: 'Key Features...blah...blah...blah',
                    service: 'fazzt'
                },
                {
                    image: 'digitalCinema/equipment/cinemaPro3RU.jpg',
                    title: 'CinemaPro 3RU',
                    text: 'The CinemaPro 3RU is compatible with all digital theater management systems, including legacy systems, and enables delivery by satellite or fiber optics of very large movie files and streaming of live events',
                    service: 'digitalcinema'
                },
                {
                    image: 'digitalCinema/equipment/cinemaPro2RU.jpg',
                    title: 'CinemaPro 2RU',
                    text: 'The CinemaPro 2RU appliance supports reception, storage and validation of digital cinema packages (movies) as well as live streams. The CinemaPro 2RU can also manage multiple live events with simultaneous recording and time-shifting, using the built in DVR feature.',
                    service: 'digitalcinema'
                },

                {
                    image: 'digitalCinema/equipment/professional2KDecoder.jpg',
                    title: 'Professional 2K Decoder',
                    text: 'The Professional 2K Decoder appliance adds decoding of live events to the cinema product line offered by KenCast. It is capable of decoding AVC and MPEG-2 content up to 1080p @ 60 frames per second. It provides a cost effective option for exhibitors to support alternative content up to HD resolutions',
                    service: 'digitalcinema'
                },
                {
                    image: 'digitalCinema/equipment/professional4KDecoder.jpg',
                    title: 'Professional 4K Decoder',
                    text: 'The Professional 4K Decoder supports multiple modes of management including local web administration. KenCast centralized live event management, LCD control panel, and a local CinemaPro',
                    service: 'digitalcinema'
                },
                {
                    image: 'mobilePlatform/equipment/eventpro.jpg',
                    title: 'VazztCaster EventPro',
                    text: 'The VazztCaster EventPro....',
                    service: 'mobilePlatform'
                },
                {
                    image: 'mobilePlatform/equipment/app.jpg',
                    title: 'Smart Phone App',
                    text: 'The Smart Phone App ....',
                    service: 'mobilePlatform'
                },
                {
                    image: 'mobilePlatform/equipment/decoder.jpg',
                    title: 'Decoder',
                    text: 'The decoder....',
                    service: 'mobilePlatform'
                }

                               
    ]


})();

