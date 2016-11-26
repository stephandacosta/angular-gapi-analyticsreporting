'use strict';

/**
 * @ngdoc overview
 * @name angularGapiAnalyticsreportingDemoApp
 * @description
 * # angularGapiAnalyticsreportingDemoApp
 *
 * Main module of the application.
 */
var demoApp = angular.module('angularGapiAnalyticsreportingDemoApp',
  [
    'ngMaterial',
    'ui.router',
    'angularGapiAnalyticsreporting',
    'angularGapiAnalyticsreportingUI'
  ]
);

// configure routing
demoApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });
});

// configure palette
demoApp.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('teal')
  .backgroundPalette('grey',{
        'default' : '100',
        'hue-1'   : '200',
        'hue-2'   : '300',
        'hue-3'   : '400',
    });
});

demoApp.run(function ($state) {
  $state.go('home');
});
