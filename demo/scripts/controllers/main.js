'use strict';

/**
 * @ngdoc function
 * @name angularGapiAnalyticsreportingDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGapiAnalyticsreportingDemoApp
 */
angular.module('angularGapiAnalyticsreportingDemoApp')
  .controller('MainCtrl', function ($scope, $mdDialog, ngarLoadService, ngarAuthService, ngarManagementService, ngarReportService) {

    $scope.loadStatus = ngarLoadService.status;
    $scope.authStatus = ngarAuthService.status;
    $scope.managementStatus = ngarManagementService.status;
    $scope.managementItems = ngarManagementService.items;

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
        console.log('init done');
        // promise returns the managmentService items
        // but one can also use the API ngarManagementService.items
        $scope.$digest();
      });
    };


    $scope.showDialog = function(ev, id) {
      var dialogs = {
        dgAccountTree:{
          title: 'Account Tree',
          code: ngarManagementService.items.accountsTree
        },
        dgSegments:{
          title: 'Segments',
          code: ngarManagementService.items.segments
        },
        dgMetadata:{
          title: 'Metadata',
          code: ngarManagementService.items.metadata
        },
        dgRequest:{
          title: 'Request',
          code: ngarReportService.report.request
        },
        dgDataRaw:{
          title: 'Raw Data',
          code: ngarReportService.report.data
        }
      };
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
         code: dialogs[id].code
       }
      });
    };

    $scope.$watch(function(){
      return ngarReportService.report.viewId;
    }, function(id){
      $scope.breadcrumbs = ngarManagementService.getBreadcrumbs(id);
    });


    $scope.buildRequest = function(){
      var request = ngarReportService.buildRequest();
      $scope.requestBuilt = (Object.keys(request).length);
    };

    $scope.getData = function(){
      ngarReportService.getData(window.gapi).then(function(){
        $scope.dataPulled = true;
      });
    };


  });
