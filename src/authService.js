'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting authService
 * @description
 * # authService
 * Factory in angular-gapi-reporting for authentifications
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarAuthService', function () {



  // Replace with your client ID from the developer console.
  var CLIENT_ID = '1044610610585-5nopo43t8ekv9vvdfbi5p43fv4295uqr.apps.googleusercontent.com';

  // Set authorized scope.
  var SCOPES = 'https://www.googleapis.com/auth/analytics.readonly';


  // the auth object
  var auth2;


  // the status object
  var status = {
    authInitialized: false,
    signedIn: false
  };


  // Function to initialize authentfication
  // assumes gapi object is loaded and available in the global namespace
  var initAuth = function(callback) {
    window.gapi.auth2.init({
        client_id: CLIENT_ID,
        scope: SCOPES
    }).then(function () {
      auth2 = window.gapi.auth2.getAuthInstance();
      status.authInitialized = true;
      // update signed in status
      updateSigninStatus(auth2.isSignedIn.get());
      // then listen for change
      auth2.isSignedIn.listen(updateSigninStatus);
      // auth2.currentUser.listen(listener);
      // finally callback
      callback();
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
  };

  // function to trigger sign-in by the user
  // ** better return the promise itself
  var signIn = function(callback) {
    if (status.authInitialized){
      console.log('logging in');
      auth2.signIn().then(callback);
    } else {
      console.log('error auth not initialized');
    }
  };

  // function to trigger sign-out by the user
  // ** better return the promise itself
  // ** put condition that
  var signOut = function(callback) {
    if (status.authInitialized){
      console.log('logging out');
      auth2.signOut().then(callback);
    } else {
      console.log('error auth not initialized');
    }
  };


  // the public API
  return {
    initAuth: initAuth,
    signIn: signIn,
    signOut: signOut,
    status: status
  };

});
