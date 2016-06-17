var socialApp = angular.module('devFriends', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
         $urlRouterProvider.otherwise('/');


        $stateProvider
            .state('home',{
                url: "/",
                templateUrl: "views/home.html",
                controller:'mainCtrl'
            });



        console.log($urlRouterProvider);
    });