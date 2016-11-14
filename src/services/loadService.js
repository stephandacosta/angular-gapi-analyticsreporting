'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting loadService
 * @description
 * # loadService
 * Factory in angular-gapi-reporting to load Google APIs
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarLoadService', function ($rootScope, $document, $q) {

    var status = {
      gapiLoaded: false,
      auth2Loaded:false,
      analyticsV3Loaded: false,
      analyticsV4Loaded: false
    };

    //Analytics API endpoints
    // discovery list: https://developers.google.com/apis-explorer/#p/discovery/v1/discovery.apis.list
    // api explorer: https://developers.google.com/apis-explorer
    var _Gapi = 'https://apis.google.com/js/api.js';
    var _AnalyticsV4 = 'https://analyticsreporting.googleapis.com/$discovery/rest';
    var _AnalyticsV3 = 'https://www.googleapis.com/discovery/v1/apis/analytics/v3/rest';


  // load Google Analytcs API and return promise that will resolve to gapi handle
  var loadGapi = function(){
    //code from http://www.ng-newsletter.com/posts/d3-on-angular.html
    var deferred = $q.defer();
    var onScriptLoad = function() {
      // Load client in the browser
      $rootScope.$apply(function() {
        console.log('gapi loaded');
        status.gapiLoaded = true;
        deferred.resolve(window.gapi);
      });
    };
    var onScriptError = function(error) {
      // Load client in the browser
      $rootScope.$apply(function() {
        console.log('gapi loading error');
        status.gapiLoaded = false;
        deferred.reject(error);
      });
    };
    // Create a script tag with gapi as the source
    // and initialize authentification when it
    // has been loaded
    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = _Gapi;
    scriptTag.onreadystatechange = function () {
      if (this.readyState === 'complete') {
        onScriptLoad();
      } else {
        onScriptError(this.readyState);
      }
    };
    scriptTag.onload = onScriptLoad;
    scriptTag.onerror = onScriptError;

    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return deferred.promise;

  };


  // load auth api and possible callback when ready
  var loadAuth2 = function(){
    var deferred = $q.defer();
    if (status.gapiLoaded){
      window.gapi.load('client:auth2', function(response){
        console.log('auth loaded');
        status.auth2Loaded = true;
        deferred.resolve(response);
      }, function(error){
        console.log('auth not loaded');
        deferred.reject(error);
      });
    } else {
      console.log('google api not loaded');
      deferred.reject('google api not loaded');
    }
    return deferred.promise;
  };

  // Function to trigger loading of all accessible accounts, segments and GA metadata
  // we load V3 to access management API (for accounts and segments information)
  var loadGarV3 = function(){
    var deferred = $q.defer();
    if (status.gapiLoaded){
      window.gapi.client.load(_AnalyticsV3).then(function(response) {
        console.log('v3 is loaded');
        status.analyticsV3Loaded = true;
        deferred.resolve(response);
      }, function(error){
        console.log('analytics API v3 not loaded');
        deferred.reject(error);
      });
    } else {
      console.log('google api not loaded');
      deferred.reject('google api not loaded');
    }
    return deferred.promise;
  };

  var loadGarV4 = function(){
    var deferred = $q.defer();
    if (status.gapiLoaded){
      window.gapi.client.load(_AnalyticsV4).then(function(response) {
        console.log('v4 is loaded');
        status.analyticsV4Loaded = true;
        deferred.resolve(response);
      }, function(error){
        console.log('analytics API v4 not loaded');
        deferred.reject(error);
      });
    } else {
      console.log('google api not loaded');
      deferred.reject('google api not loaded');
    }
    return deferred.promise;
  };



  // the public API
  return {
    loadGapi: loadGapi,
    loadAuth2: loadAuth2,
    loadGarV3: loadGarV3,
    loadGarV4: loadGarV4,
    loadAllApis: function(){
      console.log('loading all APIs');
      return loadGapi()
        .then(loadAuth2)
        .then(loadGarV3)
        .then(loadGarV4);
    },
    status:status
  };

});
