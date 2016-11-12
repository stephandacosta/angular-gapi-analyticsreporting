'use strict';

/**
 * @ngdoc overview
 * @name angularGapiAnalyticsreportingmain
 * @description
 * # angularGapiAnalyticsreportingmain
 *
 * Main module of the plugin.
 */

var plugin = angular.module('angularGapiAnalyticsreporting',
  [
  ]
);

plugin.factory('test', function () {

  return {
    test: function(){
      console.log('service is injected');
    }
  };
});
