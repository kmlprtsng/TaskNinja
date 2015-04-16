'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://taskrabbit-kc.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: "TaskController"
      })
      .when('/edit', {
        templateUrl: 'views/edit.html'
      })
      .when('/list', {
        templateUrl: 'views/browse.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
