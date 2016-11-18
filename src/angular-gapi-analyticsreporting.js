'use strict';

/**
 * @ngdoc overview
 * @name angularGapiAnalyticsreportingmain
 * @description
 * # angularGapiAnalyticsreportingmain
 *
 * Main module of the plugin.
 */

var plugin = angular.module('angularGapiAnalyticsreporting',[]);

// reminder to add error logging to analytics itself
plugin.run(function(){
  console.log('ngar is running');
});

plugin.factory('ngar', function(ngarLoadService, ngarAuthService, ngarManagementService, ngarReportService, ngarDataService){
  console.log('ngar factory is running');
  return {
    init:function(){
      ngarLoadService.loadAllApis()
      .then(ngarAuthService.initAuth)
      .then(ngarManagementService.init)
      .catch(function(error){
        console.log(error);
      });
    },
    get: function(params){
      ngarReportService.buildRequest(params);
      return ngarReportService.getData(window.gapi)
      .then(ngarDataService.parseData)
      .then(function(data){
        console.log(data);
      })
      .catch(function(error){
        console.log(error);
      });
    }
  };
});
