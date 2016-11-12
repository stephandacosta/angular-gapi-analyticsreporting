'use strict';

/**
 * @ngdoc function
 * @name angularGapiAnalyticsreportingDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGapiAnalyticsreportingDemoApp
 */
angular.module('angularGapiAnalyticsreportingDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.signin = function(){
      console.log('signing in');
    };
    $scope.signout = function(){
      console.log('signing out');
    };
    $scope.getAccounts = function(){
      console.log('getting accounts');
    };
    $scope.getMetadata = function(){
      console.log('getting metadata');
    };
  });
