var app = angular.module("cstore", ['ngRoute','ui.bootstrap','firebase']);


app.config(['$routeProvider',
  function($routeProvider){




    $routeProvider
     .when('/home',{
        templateUrl : "data/partials/home.html",
        controller : "mainCtrl"
      })
    .otherwise({
      redirectTo: '/home'
    });
 
  }
  ]);