!function(){var a=angular.module("kencast",["ngRoute","ngSanitize","ui.bootstrap","ngAnimate","ngRoute"]);a.config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html"}).when("/services",{templateUrl:"views/services/services.html",controller:"ServicesController",controllerAs:"servicesCtrl"}).when("/services/:id",{templateUrl:"views/services/home-service.html",controller:"SingleServicesController",controllerAs:"singleServicesCtrl"}).when("/services/:id/:id",{templateUrl:"views/services/service-profile.html",controller:"ServiceProfileController",controllerAs:"profileCtrl"}).when("/case-studies",{template:"<h5>This is the case studies route<h5>"}).when("/company",{template:"<h5>This is the company route</h5>"}).when("/contact-us",{template:"<h5>This is the contact us route<h5>"}).when("/site-map",{template:"<h5>This is the site map route<h5>"}).otherwise({redirectTo:"/home"})}])}(),function(){"use strict";angular.module("kencast").controller("CarouselController",function(){this.slides=a});var a=[{image:"images/homeCarousel/to-thousands-of-locations.jpg",text:"Send large video files and live video streams to thousands of locations"},{image:"images/homeCarousel/secure-files-and-streams.jpg",text:"Encrypt files to prevent stolen video files and streams"},{image:"images/homeCarousel/from-any-location.jpg",text:"Broadcast live video from any location"},{image:"images/homeCarousel/customizable-solutions.jpg",text:"Develop customized solutions to meet your needs"}]}(),function(){"use strict";angular.module("kencast").controller("ServiceProfileController",["$scope","products",function(a,b){b.list(function(b){a.products=b}),a.title=b.list.submenus}])}(),function(){"use strict";angular.module("kencast").controller("ServicesController",function(){this.services=a});var a=[{id:"fazztsoftware",title:"Fazzt Software",image:"/images/homepage-placeholder.jpg",text:"Fazzt Software is involved in all of our content network delivery services. Fazzt has delivered content for fire departments, TV/News stations, franchises, and movie theatres."},{id:"cinemaspecific",title:"Cinema Specific",image:"/images/homepage-placeholder.jpg",text:"When it comes to content delivery, we know the movie industry has specific requirements, like the ability to deliver and recieve DCPs (Digital Cinema Packages). That is why we have produced a cutting edge Fazzt server software program to work specifically for digital cinema."},{id:"mobileplatform",title:"Mobile Platform",image:"/images/homepage-placeholder.jpg",text:"Our mobile platform uses bonded cellular networks to tranmit live HD video and send high volume data from any location."}]}(),function(){"use strict";angular.module("kencast").controller("SingleServicesController",["$scope","$http","$routeParams",function(a,b,c){a.services=[],b.get("/data/kencast-services.json").success(function(b){angular.forEach(b,function(b){b.id==c.id&&a.services.push(b)})})}])}(),function(){"use strict";angular.module("kencast").controller("LogoController",function(){this.logos=a});var a=[{image:"images/logos/dcdcLogo.jpg",link:"http://www.dcdcdistribution.com/"},{image:"images/logos/elaraLogo.jpg",link:"http://www.elara.com.mx/"},{image:"images/logos/nyfdLogo.jpg",link:"http://www.nyc.gov/html/fdny/html/home2.shtml"},{image:"images/logos/tplLogo.jpg",link:"http://www.tpl.mx/"}]}(),function(){"use strict";angular.module("kencast").controller("NavigationController",function(){this.menus=a});var a=[{title:"Services",action:"#/services",submenus:[{title:"Fazzt Software",template:"#/services"},{title:"Cinema Specific",template:"#/services"},{title:"Mobile Platform",template:"#/services"}]},{title:"Case Studies",action:"#/case-studies",submenus:[{title:"Cinema",template:"These are cinema case studies"},{title:"Military and Public Safety",template:"These are military and public safety studies"},{title:"TV and News",template:"These are TV and news case studies"},{title:"Geonetcast",template:"These are TV and news case studies"}]},{title:"Company",action:"#/company",submenus:[{title:"About Us",template:"This is about us"},{title:"New at KenCast",template:"This is new at KenCast"},{title:"Management",template:"This is management"},{title:"Clients and Testimonials",template:"These are clients and testimonials"},{title:"Trade Show Schedule",template:"This is the trade show schedule"},{title:"Careers",template:"These Careers"}]},{title:"Contact Us",action:"#/contact-us"},{title:"Site Map",action:"#/site-map"}]}(),function(){"use strict";angular.module("kencast").controller("NewHomepageController",function(){this.sections=a});var a=[{title:"Fazzt 9.0",image:"/images/homepage-placeholder.jpg",text:"All the security, reliability, and efficiency as our previous versions, but with added customer requested features."},{title:"Live Event Coverage",image:"/images/homepage-placeholder.jpg",text:"The New York Fire Department is using our latest live event coverage service for dependable on-site live video streams."},{title:"Digital Cinema in Europe",image:"/images/homepage-placeholder.jpg",text:"We will be introducing our content delivery network to thousands of theatres all across Europe."}]}(),function(){"use strict";angular.module("kencast").directive("carouselDirective",[function(){return{restrict:"E",templateUrl:"/views/carousel.html"}}])}(),function(){"use strict";angular.module("kencast").directive("footerDirective",[function(){return{restrict:"E",templateUrl:"/views/footer.html"}}])}(),function(){"use strict";angular.module("kencast").directive("logoDirective",[function(){return{restrict:"E",templateUrl:"/views/logo-section.html"}}])}(),function(){"use strict";angular.module("kencast").directive("navigationDirective",[function(){return{restrict:"E",templateUrl:"/views/navigation-bar.html"}}])}(),function(){"use strict";angular.module("kencast").directive("newHomepageDirective",[function(){return{restrict:"E",templateUrl:"/views/homepage-new-section.html"}}])}(),function(){"use strict";angular.module("kencast").factory("products",function(a){return{list:function(b){a.get("/data/kencast-services.json").success(b)}}})}();