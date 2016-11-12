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
    var _Gapi = 'https://apis.google.com/js/api.js';
    var _AnalyticsV4 = 'https://analyticsreporting.googleapis.com/$discovery/rest';
    var _AnalyticsV3 = 'https://www.googleapis.com/discovery/v1/apis/analytics/v3/rest';
    // var _Auth = "https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest";


  // load Google Analytcs API and return promise that will resolve to gapi handle
  var loadGapi = function(){
    //code from http://www.ng-newsletter.com/posts/d3-on-angular.html
    var d = $q.defer();
    var onScriptLoad = function() {
      // Load client in the browser
      $rootScope.$apply(function() { d.resolve(window.gapi); });
      console.log('gapi loaded');
      status.gapiLoaded = true;
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
      }
    };
    scriptTag.onload = onScriptLoad;

    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return d.promise;

  };


  // load auth api and possible callback when ready
  var loadAuth2 = function(gapiHandle, callback){
    gapiHandle.load('client:auth2', function(){
      console.log('auth loaded');
      status.auth2Loaded = true;
      if (typeof callback === 'function'){
        callback();
      }
    });
  };

  // Function to trigger loading of all accessible accounts, segments and GA metadata
  // we load V3 to access management API (for accounts and segments information)
  var loadGarV3 = function(callback){
    window.gapi.client.load(_AnalyticsV3).then(function() {
      console.log('v3 is loaded');
      status.analyticsV3Loaded = true;
      if (typeof callback === 'function'){
        callback();
      }
    });
  };

  var loadGarV4 = function(callback){
    window.gapi.client.load(_AnalyticsV4).then(function() {
      console.log('v4 is loaded');
      status.analyticsV4Loaded = true;
      if (typeof callback === 'function'){
        callback();
      }
    });
  };



  // the public API
  return {
    loadGapi: loadGapi,
    loadAuth2: loadAuth2,
    loadAll: function(onReadyCallback){
      console.log('loading');
      loadGapi().then(function(gapi){
        if (typeof onReadyCallback === 'function'){
          loadAuth2(gapi,onReadyCallback);
        } else {
          loadAuth2(gapi);
        }
      });
    },
    loadGarV3: loadGarV3,
    loadGarV4: loadGarV4,
    status:status
  };

});
