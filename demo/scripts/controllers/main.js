'use strict';

/**
 * @ngdoc function
 * @name angularGapiAnalyticsreportingDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGapiAnalyticsreportingDemoApp
 */
angular.module('angularGapiAnalyticsreportingDemoApp')
  .controller('MainCtrl', function ($scope, ngarLoadService, ngarAuthService) {

    $scope.loadStatus = ngarLoadService.status;
    $scope.authStatus = ngarAuthService.status;

    $scope.load = function(){
      ngarLoadService.loadAll();
    };

    $scope.initAuth = function(){
      console.log('initializing Auth');
      ngarAuthService.initAuth(function(){
        console.log('auth is initialized');
      });
    };

    $scope.signIn = function(){
      console.log('signing in');
      ngarAuthService.signIn(function(){
        console.log('signed in');
      });
    };
    $scope.signOut = function(){
      console.log('signing out');
      ngarAuthService.signOut(function(){
        console.log('signed out');
      });
    };

    $scope.getAccounts = function(){
      console.log('getting accounts');
    };
    $scope.getMetadata = function(){
      console.log('getting metadata');
    };
  });
