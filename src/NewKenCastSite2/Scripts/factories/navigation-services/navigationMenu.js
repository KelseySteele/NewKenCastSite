(function () {
    'use strict';

    angular.module('sidenav.services')
        .factory('navigationMenu', [
            '$location', //keeps track of the url in browser
            '$rootScope', //says this is part of the main model/set of data
            function ($location) {
                var sections = [{
                    name: 'Navigation',
                    state: 'navigation',
                    type: 'link'
                }];


                var menus = [
                    {
                        title: "Services",
                        action: "services",
                        submenus: [
                          {
                              title: "Fazzt",
                              action: "fazzt",
                          },
                          {
                              title: "Cinema Specific",
                              action: "cinemaspecific",

                          },
                          {
                              title: "Mobile Platform",
                              action: "mobileplatform",
                          }
                        ]
                    },
                    {
                        title: "Case Studies",
                        action: "case-studies",
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
                          action: "company",
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
                      action: "contact-us"

                  },
                  {
                      title: "Site Map",
                      action: "site-map"
                  }
                ]













                sections.push({
                    name: 'Fazzt',
                    type: 'toggle',
                    pages: [{
                        name: 'Overview',
                        type: 'link',
                        state: 'fazzt.overview',
                    }, {
                        name: 'Applications',
                        type: 'link',
                        state: 'fazzt.applications',
                    }, {
                        name: 'Equipment',
                        type: 'link',
                        state: 'fazzt.equipment',
                    }]
                });


            }



        ]);


})();