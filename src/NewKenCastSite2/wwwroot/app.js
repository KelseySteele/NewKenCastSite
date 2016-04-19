!function(){var a=angular.module("kencast",["kencast.controllers","ngSanitize","ui.bootstrap","ngAnimate","ui.router","ngMaterial"]);angular.module("sidenav.services",[]),angular.module("kencast.controllers",["sidenav.directives"]),angular.module("sidenav.directives",["sidenav.services"]),a.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("app",{"abstract":!0,url:"/",views:{content:{template:"<div ui-view></div>"}}}).state("app.home",{url:"/",templateUrl:"views/home.html",controller:"carouselController"}).state("home.services",{url:"/services",views:{viewA:{templateUrl:"views/services/services.html"}}}).state("fazzt",{"abstract":"true",url:"/services/fazzt",views:{viewA:{templateUrl:"views/services/fazzt/index.html"}}}).state("fazzt.overview",{url:"/services/fazzt",views:{"content@fazzt":{templateUrl:"views/services/fazzt/overview.html"}}}).state("fazzt.applications",{url:"/services/fazzt",views:{"content@fazzt":{templateUrl:"views/services/fazzt/applications.html"}}}).state("fazzt.equipment",{url:"/services/fazzt",views:{"content@fazzt":{templateUrl:"views/services/fazzt/equipment.html"}}}).state("case-studies",{url:"/case-studies",views:{viewA:{template:"<h5>This is the case studies route<h5>"}}}).state("company",{url:"/company",views:{viewA:{template:"<h5>This is the company route</h5>"}}}).state("contact-us",{url:"/contact-us",views:{viewA:{template:"<h5>This is the contact-us route</h5>"}}}).state("site-map",{url:"/site-map",views:{viewA:{template:"<h5>This is the site-map route</h5>"}}})}])}(),function(){"use strict";angular.module("kencast").controller("CarouselController",function(){this.slides=a});var a=[{image:"images/homeCarousel/to-thousands-of-locations.jpg",text:"Send large video files and live video streams to thousands of locations"},{image:"images/homeCarousel/secure-files-and-streams.jpg",text:"Encrypt files to prevent stolen video files and streams"},{image:"images/homeCarousel/from-any-location.jpg",text:"Broadcast live video from any location"},{image:"images/homeCarousel/customizable-solutions.jpg",text:"Develop customized solutions to meet your needs"}]}(),function(){"use strict";angular.module("kencast").controller("FazztSoftwareController",["$scope","$mdSidenav",function(b,c){b.openLeftMenu=function(){c("left").toggle()},b.fazztViews=a,b.currentTab="overview"}]);var a=[{view:"views/services/fazztSoftware/applications.html",id:"applications"},{view:"views/services/fazztSoftware/equipment.html",id:"equipment"},{view:"views/services/fazztSoftware/faq.html",id:"faq"},{view:"views/services/fazztSoftware/flowchart.html",id:"flowchart"},{view:"views/services/fazztSoftware/options.html",id:"options"},{view:"views/services/fazztSoftware/overview.html",id:"overview"}]}(),function(){"use strict";angular.module("kencast").controller("MainServicesController",["$scope","$mdSidenav",function(a,b){a.toggleMenu=function(){b("left").toggle()},a.sections=[]}])}(),function(){"use strict";angular.module("kencast.controllers").controller("mainMenuCtrl",["$rootScope","$state","$timeout","$location","menu",function(a,b,c,d,e){function f(a){return e.isSectionSelected(a)}function g(a){e.toggleSelectSection(a)}var h=this;h.isOpen=f,h.toggleOpen=g,h.autoFocusContent=!1,h.menu=servicesMenu,h.status={isFirstOpen:!0,isFirstDisabled:!1}}])}(),function(){"use strict";angular.module("kencast").controller("ServicesController",function(){this.services=a});var a=[{id:"fazztsoftware",title:"Fazzt Software",image:"/images/homepage-placeholder.jpg",text:"Fazzt Software is involved in all of our content network delivery services. Fazzt has delivered content for fire departments, TV/News stations, franchises, and movie theatres."},{id:"cinemaspecific",title:"Cinema Specific",image:"/images/homepage-placeholder.jpg",text:"When it comes to content delivery, we know the movie industry has specific requirements, like the ability to deliver and recieve DCPs (Digital Cinema Packages). That is why we have produced a cutting edge Fazzt server software program to work specifically for digital cinema."},{id:"mobileplatform",title:"Mobile Platform",image:"/images/homepage-placeholder.jpg",text:"Our mobile platform uses bonded cellular networks to tranmit live HD video and send high volume data from any location."}]}(),function(){"use strict";angular.module("kencast").controller("LogoController",function(){this.logos=a});var a=[{image:"images/logos/dcdcLogo.jpg",link:"http://www.dcdcdistribution.com/"},{image:"images/logos/elaraLogo.jpg",link:"http://www.elara.com.mx/"},{image:"images/logos/nyfdLogo.jpg",link:"http://www.nyc.gov/html/fdny/html/home2.shtml"},{image:"images/logos/tplLogo.jpg",link:"http://www.tpl.mx/"}]}(),function(){"use strict";angular.module("kencast").controller("NavigationController",function(){this.menus=a});var a=[{title:"Services",action:"services",submenus:[{title:"Fazzt",action:"fazzt"},{title:"Cinema Specific",action:"cinemaspecific"},{title:"Mobile Platform",action:"mobileplatform"}]},{title:"Case Studies",action:"case-studies",submenus:[{title:"Cinema",template:"These are cinema case studies"},{title:"Military and Public Safety",template:"These are military and public safety studies"},{title:"TV and News",template:"These are TV and news case studies"},{title:"Geonetcast",template:"These are TV and news case studies"}]},{title:"Company",action:"company",submenus:[{title:"About Us",template:"This is about us"},{title:"New at KenCast",template:"This is new at KenCast"},{title:"Management",template:"This is management"},{title:"Clients and Testimonials",template:"These are clients and testimonials"},{title:"Trade Show Schedule",template:"This is the trade show schedule"},{title:"Careers",template:"These Careers"}]},{title:"Contact Us",action:"contact-us"},{title:"Site Map",action:"site-map"}]}(),function(){"use strict";angular.module("kencast").controller("NewHomepageController",function(){this.sections=a});var a=[{title:"Fazzt 9.0",image:"/images/homepage-placeholder.jpg",text:"All the security, reliability, and efficiency as our previous versions, but with added customer requested features."},{title:"Live Event Coverage",image:"/images/homepage-placeholder.jpg",text:"The New York Fire Department is using our latest live event coverage service for dependable on-site live video streams."},{title:"Digital Cinema in Europe",image:"/images/homepage-placeholder.jpg",text:"We will be introducing our content delivery network to thousands of theatres all across Europe."}]}(),function(){"use strict";angular.module("kencast").directive("carouselDirective",[function(){return{restrict:"E",templateUrl:"/views/carousel.html"}}])}(),function(){"use strict";angular.module("kencast").directive("footerDirective",[function(){return{restrict:"E",templateUrl:"/views/footer.html"}}])}(),function(){"use strict";angular.module("kencast").directive("logoDirective",[function(){return{restrict:"E",templateUrl:"/views/logo-section.html"}}])}(),function(){"use strict";angular.module("kencast").directive("navigationDirective",[function(){return{restrict:"E",templateUrl:"/views/navigation-bar.html"}}])}(),function(){"use strict";angular.module("kencast").directive("newHomepageDirective",[function(){return{restrict:"E",templateUrl:"/views/homepage-new-section.html"}}])}(),function(){"use strict";angular.module("sidenav.directives").directive("menuLink",function(){return{scope:{section:"="},templateUrl:"views/services/menuLink.html",link:function(a,b){var c=b.parent().controller();a.focusSection=function(){c.autoFocusContent=!0}}}})}(),function(){"use strict";angular.module("sidenav.directives").directive("menuToggle",["$timeout",function(a){return{scope:{section:"="},templateUrl:"views/services/menuToggle.html",link:function(a,b){var c=b.parent().controller();a.isOpen=function(){return c.isOpen(a.section)},a.toggle=function(){c.toggleOpen(a.section)};var d=b[0].parentNode.parentNode.parentNode;if(d.classList.contains("parent-list-item")){var e=d.querySelector("h2");b[0].firstChild.setAttribute("aria-describedby",e.id)}}}}])}(),function(){"use strict";angular.module("sidenav.services").factory("servicesMenu",["$location","$rootScope",function(a){var b=[{name:"Services",state:"services",type:"link"}];b.push({name:"Fazzt",type:"toggle",pages:[{name:"Overview",type:"link",state:"fazzt.overview"},{name:"Applications",type:"link",state:"fazzt.applications"},{name:"Equipment",type:"link",state:"fazzt.equipment"}]})}])}(),function(){"use strict";angular.module("sidenav.services").factory("navigationMenu",["$location","$rootScope",function(a){var b=[{name:"Navigation",state:"navigation",type:"link"}];b.push({name:"Fazzt",type:"toggle",pages:[{name:"Overview",type:"link",state:"fazzt.overview"},{name:"Applications",type:"link",state:"fazzt.applications"},{name:"Equipment",type:"link",state:"fazzt.equipment"}]})}])}(),function(){"use strict";angular.module("sidenav.services",[]),angular.module("kencast.controllers",["sidenav.directives"]),angular.module("sidenav.directives",["sidenav.services"])}();