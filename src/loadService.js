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
    };


  // load Google Analytcs API and return promise that will resolve to gapi handle
  var loadGapi = function(){
    //code from http://www.ng-newsletter.com/posts/d3-on-angular.html
    var d = $q.defer();
    var onScriptLoad = function() {
      // Load client in the browser
      $rootScope.$apply(function() { d.resolve(window.gapi); });
      console.log('gapi loaded');
      status.gapiLoaded = true;
    }
    // Create a script tag with gapi as the source
    // and initialize authentification when it
    // has been loaded
    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = 'https://apis.google.com/js/api.js';
    scriptTag.onreadystatechange = function () {
      if (this.readyState == 'complete') onScriptLoad();
    }
    scriptTag.onload = onScriptLoad;

    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return d.promise;

  };


  // load auth api and possible callback when ready
  var loadAuth2 = function(gapiHandle, onReadyCallback){
    gapiHandle.load('client:auth2', function(){
      status.auth2Loaded = true;
      if (typeof onReadyCallback === 'function'){
        onReadyCallback();
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
    status:status
  };

});
