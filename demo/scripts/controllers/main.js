'use strict';

/**
 * @ngdoc function
 * @name angularGapiAnalyticsreportingDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGapiAnalyticsreportingDemoApp
 */
angular.module('angularGapiAnalyticsreportingDemoApp')
  .controller('MainCtrl', function ($scope, $mdDialog, ngarLoadService, ngarAuthService, ngarManagementService, ngarReportService, ngarDataService, ngar) {

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
      ngarAuthService.initAuth().then(function(status){
        console.log('Auth is initialized', status);
        $scope.$digest();
      }, function(error){
        console.log('errror initilizing Auth', error);
      });
    };

    $scope.signIn = function(){
      console.log('signing in');
      ngarAuthService.signIn().then(function(status){
        console.log('signed in', status);
        $scope.$digest();
      }, function(error){
        console.log('error initilizing signing in', error);
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
          code: ngarReportService.request.json
        },
        dgDataRaw:{
          title: 'Raw Data',
          code: ngarReportService.request.rawData
        },
        dgDataParsed:{
          title: 'Parsed Data',
          code: ngarDataService.parsedData
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
      return ngarReportService.params[0].viewId;
    }, function(id){
      console.log('breadcrumbs ',ngarManagementService.getBreadcrumbs(id));
      $scope.breadcrumbs = ngarManagementService.getBreadcrumbs(id);
    });


    $scope.buildRequest = function(){
      var request = ngarReportService.buildRequest();
      console.log(request);
      $scope.requestBuilt = (Object.keys(request).length);
    };

    $scope.$watch(function(){
      return (Object.keys(ngarReportService.request.json).length>0);
    }, function(hasRequest){
      $scope.requestBuilt = hasRequest;
    });

    $scope.getData = function(){
      ngarReportService.getData(window.gapi)
      .then(function(rawData){
        console.log(rawData);
      });
    };


    $scope.$watch(function(){
      return Object.keys(ngarReportService.request.rawData).length>0;
    }, function(hasData){
      $scope.dataPulled = hasData;
    });



    $scope.parseData = function(){
      console.log(ngarDataService.parseData(ngarReportService.request.rawData));
    };

    $scope.$watch(function(){
      return ngarDataService.parsedData.reports[0].data.length>0;
    }, function(hasParsedData){
      $scope.dataParsed = hasParsedData;
    });

    $scope.initAtOnce = function(){
      ngar.init().then(function(tree){
        console.log('ngar initialized', tree);
        // $scope.$digest();

      });
    };

    $scope.ngarSignIn = function(){
      console.log('signing in');
      ngar.signIn().then(function(status){
        console.log('signed in', status);
        $scope.$digest();
      }, function(error){
        console.log('error initilizing signing in', error);
      });
    };

    $scope.ngarSignOut = function(){
      console.log('signing out');
      ngar.signOut().then(function(){
        console.log('signed out');
        $scope.$digest();
      }, function(error){
        console.log('errror initilizing signing out', error);
      });
    };

    var getFirstViewId = function(accountsTree){
      return accountsTree[0].properties[0].views[0].id;
    };

    $scope.makeAtOnce = function(){
      var viewId = getFirstViewId(ngarManagementService.items.accountsTree);
      var params = [{
          viewId : viewId,
          dateStart: moment().subtract(60, 'days').toDate(),
          dateEnd: moment().subtract(1, 'days').toDate(),
          dimensions: ['ga:date','ga:sourceMedium'],
          metrics: ['ga:sessions','ga:users']
      },{
          viewId : viewId,
          dateStart: moment().subtract(60, 'days').toDate(),
          dateEnd: moment().subtract(1, 'days').toDate(),
          dimensions: ['ga:source','ga:medium'],
          metrics: ['ga:sessions','ga:users']
      }];
      ngar.get(params).then(function(data){
        console.log(data);
      });
    };


  });
