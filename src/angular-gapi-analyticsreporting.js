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
