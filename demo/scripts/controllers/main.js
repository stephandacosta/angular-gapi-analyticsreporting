'use strict';

/**
 * @ngdoc function
 * @name angularGapiAnalyticsreportingDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGapiAnalyticsreportingDemoApp
 */
angular.module('angularGapiAnalyticsreportingDemoApp')
  .controller('MainCtrl', function ($scope, ngarLoadService, ngarAuthService, ngarManagementService) {

    $scope.loadStatus = ngarLoadService.status;
    $scope.authStatus = ngarAuthService.status;
    $scope.managementStatus = ngarManagementService.status;

    $scope.load = function(){
      ngarLoadService.loadAllApis().then(function(){
        console.log('all apis are loaded');
      });
    };

    $scope.initAuth = function(){
      console.log('initializing Auth');
      ngarAuthService.initAuth().then(function(){
        console.log('Auth is initialized');
        $scope.$digest();
      }, function(error){
        console.log('errror initilizing Auth', error);
      });
    };

    $scope.signIn = function(){
      console.log('signing in');
      ngarAuthService.signIn().then(function(){
        console.log('signed in');
        $scope.$digest();
      }, function(error){
        console.log('errror initilizing signing in', error);
      });
    };
    $scope.signOut = function(){
      console.log('signing out');
      ngarAuthService.signOut().then(function(){
        console.log('signed out');
        $scope.$digest();
      }, function(error){
        console.log('errror initilizing signing out', error);
      });
    };

    $scope.initManagementService = function(){
      console.log('getting management data');
      ngarManagementService.init().then(function(){
        $scope.managementItems = ngarManagementService.items;
      });
    };

  });
