'use strict';

/**
 * @ngdoc function
 * @name angularGapiAnalyticsreportingDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGapiAnalyticsreportingDemoApp
 */
angular.module('angularGapiAnalyticsreportingDemoApp')
  .controller('MainCtrl', function ($scope, $mdDialog, ngarLoadService, ngarAuthService, ngarManagementService) {

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


    var dialogs = {
      dgAccountTree:{
        title: 'Account Tree',
        itemKey: 'accountsTree'
      },
      dgSegments:{
        title: 'Segments',
        itemKey: 'segments'
      },
      dgMetadata:{
        title: 'Metadata',
        itemKey: 'metadata'
      }
    };

    $scope.initManagementService = function(){
      console.log('getting management data');
      ngarManagementService.init().then(function(results){
        console.log('init done');
        //results returns the object, but can also use the API ngarManagementService.items
        // here kept for illustration
        $scope.managementItems = results;
        $scope.$digest();
      });
    };


    $scope.showDialog = function(ev, id) {
      $mdDialog.show({
        controller: function($scope, $mdDialog, title, code) {
          $scope.title = title;
          $scope.code = code;
          $scope.close = function() {
            $mdDialog.hide();
          };
        },
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        template:
            '<md-dialog layout-padding>'+
            '  <h2>{{title}}</h2>'+
            '  <md-dialog-actions layout="row">'+
            '    <md-button class="md-primary" ng-click="close()" md-autofocus>close</md-button>'+
            '  </md-dialog-actions>'+
            '  <textarea cols="80" rows="20">'+
            '    {{code | json}}'+
            '  </textarea>'+
            '</md-dialog>',
       locals: {
         title: dialogs[id].title,
         code: ngarManagementService.items[dialogs[id].itemKey]
       }
      });
    };


  });
