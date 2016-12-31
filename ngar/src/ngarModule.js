'use strict';

/**
 * @ngdoc overview
 * @name angularGapiAnalyticsreportingmain
 * @description
 * # angularGapiAnalyticsreportingmain
 *
 * Main module of the plugin.
 */

var ngar = angular.module('angularGapiAnalyticsreporting',[]);

// reminder to add error logging to analytics itself
ngar.run(function(){
  console.log('ngar is running');
});


ngar.factory('ngar', function(ngarLoadService, ngarAuthService, ngarManagementService, ngarReportService, ngarDataService){
  console.log('ngar factory is running');
  return {
    init:function(){
      return ngarLoadService.loadAllApis()
      .then(ngarAuthService.initAuth)
      .then(function(){
        if (ngarAuthService.status.signedIn){
          return ngarManagementService.init();
        } else {
          return false;
        }
      })
      .catch(function(error){
        console.log(error);
      });
    },

    signIn:function(){
      return ngarAuthService.signIn()
      .then(ngarManagementService.init)
      .catch(function(error){
        console.log(error);
      });
    },
    signOut:function(){
      return ngarAuthService.signOut()
      .catch(function(error){
        console.log(error);
      });
    },
    get: function(params){
      var requestJson = ngarReportService.buildRequest(params);
      return ngarReportService.getData(window.gapi, requestJson)
      .then(ngarDataService.parseData)
      .catch(function(error){
        console.log(error);
      });
    }
  };
});


ngar.directive('ngarSignedIn', function (ngarAuthService) {
  return {
    restrict: 'A',
    link: function (scope, elem) {
      scope.$watch(function(){
        return (ngarAuthService.status.signedIn && ngarAuthService.status.authInitialized);
      }, function(signedIn){
        if (signedIn){
          elem.removeClass('ng-hide');
        } else {
          elem.addClass('ng-hide');
        }
        // $compile(elem)(scope);
      });
    }
  };
});


ngar.directive('ngarSignedOut', function (ngarAuthService) {
  return {
    restrict: 'A',
    link: function (scope, elem) {
      scope.$watch(function(){
        return (!ngarAuthService.status.signedIn && ngarAuthService.status.authInitialized);
      }, function(signedIn){
        if (signedIn){
          elem.removeClass('ng-hide');
        } else {
          elem.addClass('ng-hide');
        }
        // $compile(elem)(scope);
      });
    }
  };
});
