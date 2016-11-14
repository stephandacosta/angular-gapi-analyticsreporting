'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting authService
 * @description
 * # authService
 * Factory in angular-gapi-reporting for authentifications
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarAuthService', function ($rootScope) {



  // Replace with your client ID from the developer console.
  var CLIENT_ID = '1044610610585-5nopo43t8ekv9vvdfbi5p43fv4295uqr.apps.googleusercontent.com';

  // Set authorized scope.
  var SCOPES = 'https://www.googleapis.com/auth/analytics.readonly';


  // the auth object
  var auth2;


  // the status object
  var status = {
    authInitialized: false,
    signedIn: false,
    user: 'signed out'
  };


  // Function to initialize authentfication
  // assumes gapi object is loaded and available in the global namespace
  var initAuth = function() {
    return window.gapi.auth2.init({
        client_id: CLIENT_ID,
        scope: SCOPES
    }).then(function (response) {
      auth2 = window.gapi.auth2.getAuthInstance();
      status.authInitialized = true;
      // update signed in status
      updateSigninStatus(auth2.isSignedIn.get());
      // then listen for change
      auth2.isSignedIn.listen(updateSigninStatus);
      // auth2.currentUser.listen(listener);
      return response;
    }, function(error){
      console.log('error loading initializing auth', error);
      return error;
    });
  };

  //get google account email
  var updateUser = function(){
    var user = auth2.currentUser.get();
    // status.user = 'caca';
    if (status.signedIn){
      status.user = user.getBasicProfile().getEmail();
    } else {
      status.user = 'signed out';
    }
  };

  // on updated signed in status
  var updateSigninStatus = function(isSignedIn) {
    console.log('update in signin status');
    status.signedIn = isSignedIn;
    updateUser();
    $rootScope.$digest();
  };

  // function to trigger sign-in by the user returns promise
  var signIn = function() {
    return auth2.signIn();
  };

  // function to trigger sign-out by the user returns promise
  var signOut = function() {
    return auth2.signOut();
  };


  // the public API
  return {
    initAuth: initAuth,
    signIn: signIn,
    signOut: signOut,
    status: status
  };

});
