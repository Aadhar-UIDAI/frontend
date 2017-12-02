(function(){
    'use strict';
    var states= [
        {
            name: 'Homepage',
            state:
                {
                    url:'/',
                    templateUrl: '../views/homepage.html',
                    data : {
                        text:"HOMEPAGE",
                        visible:false
                    }
                }
        },
        {
            name: 'Loginpage',
            state:
                {
                    url:'/login',
                    templateUrl: '../views/loginpage.html',
                    data : {
                        text:"LOGINPAGE",
                        visible:false
                    }
                }
        },
        {
            name: 'Registeration',
            state:
                {
                    url:'/register',
                    templateUrl: '../views/registerpage.html',
                    data : {
                        text:"Registeration Page",
                        visible:false
                    }
                }
        },
        {
            name: 'Page1',
            state:
                {
                    url:'/page1',
                    templateUrl: '../views/page1.html',
                    data : {
                        text:"Page1",
                        visible:false
                    }
                }
        },
        {
            name: 'Page2',
            state:
                {
                    url:'/page2',
                    templateUrl: '../views/page2.html',
                    data : {
                        text:"Page2",
                        visible:false
                    }
                }
        }


    ];
    var app = angular.module('x1',['ui.router','ngCookies'])
        .config(function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise('/');
            angular.forEach(states,function(state){
                $stateProvider.state(state.name,state.state);

            });

        });
})();