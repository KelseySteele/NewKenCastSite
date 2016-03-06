(function () {
    'use strict';

    angular.module('kencast')
        .controller('NavigationController', function(){
            this.menus = menus; //data for using the nav

        });

    var menus = [
            {
                title: "Services",
                action: "#/services",
                submenus: [
                  {
                      title: "Fazzt Software",
                      template: "#/services"
                  },
                  {
                      title: "Cinema Specific",
                      template: "#/services"
               
                  },
                  {
                      title: "Mobile Platform",
                      template: "#/services"
                  }
                ]
            },
            {
                title: "Case Studies",
                action: "#/case-studies",
                submenus: [
                  {
                      title: "Cinema",
                      template: "These are cinema case studies"
                  },
                  {
                      title: "Military and Public Safety",
                      template: "These are military and public safety studies"
                  },
                  {
                      title: "TV and News",
                      template: "These are TV and news case studies"
                  },
                  {
                      title: "Geonetcast",
                      template: "These are TV and news case studies"
                  }
                ]
              },
              {
                title: "Company",
                action: "#/company",
                submenus: [
                  {
                      title: "About Us",
                      template: "This is about us"
                  },
                  {
                      title: "New at KenCast",
                      template: "This is new at KenCast"
                  },
                  {
                      title: "Management",
                      template: "This is management"
                  },
                  {
                      title: "Clients and Testimonials",
                      template: "These are clients and testimonials"
                  },
                  {
                      title: "Trade Show Schedule",
                      template: "This is the trade show schedule"
                  },
                  {
                      title: "Careers",
                      template: "These Careers"
                  }
                ]
              },
              {
                  title: "Contact Us",
                  action: "#/contact-us"
    
              },
              {
                  title: "Site Map",
                  action: "#/site-map"
              }
    ]

})();
