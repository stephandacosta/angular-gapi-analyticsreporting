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


ngar.factory('ngar', ["ngarLoadService", "ngarAuthService", "ngarManagementService", "ngarReportService", "ngarDataService", function(ngarLoadService, ngarAuthService, ngarManagementService, ngarReportService, ngarDataService){
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
      .then(ngarManagementService.init);
    },
    signOut:function(){
      return ngarAuthService.signOut();
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
}]);


ngar.directive('ngarSignedIn', ["ngarAuthService", function (ngarAuthService) {
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
}]);


ngar.directive('ngarSignedOut', ["ngarAuthService", function (ngarAuthService) {
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
}]);

'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting authService
 * @description
 * # authService
 * Factory in angular-gapi-reporting for authentifications
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarAuthService', ["$rootScope", "CLIENT_ID", function ($rootScope, CLIENT_ID) {

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
    if(isSignedIn){
      updateUser();
      $rootScope.$broadcast('gapiAuth:signedin');
    } else {
      $rootScope.$broadcast('gapiAuth:signedOut');
    }
  };

  // Function to initialize authentfication
  // assumes gapi object is loaded and available in the global namespace
  var initAuth = function(clientID) {
    return window.gapi.auth2.init({
      client_id: clientID || CLIENT_ID,
      scope: SCOPES
    }).then(function (gAuth) {
      // auth2 = window.gapi.auth2.getAuthInstance();
      auth2 = gAuth;
      status.authInitialized = true;
      // update signed in status
      updateSigninStatus(auth2.isSignedIn.get());
      // then listen for change
      auth2.isSignedIn.listen(updateSigninStatus);
      // unable to return anything due to implementation;
    });
  };

  // function to trigger sign-in by the user returns promise
  var signIn = function() {
    return auth2.signIn()
      .then(function(){
        updateSigninStatus(auth2.isSignedIn.get());
        return status;
      });
  };

  // function to trigger sign-out by the user returns promise
  var signOut = function() {
    return auth2.signOut()
    .then(function(){
      updateSigninStatus(auth2.isSignedIn.get());
      return status;
    });
  };


  // the public API
  return {
    initAuth: initAuth,
    signIn: signIn,
    signOut: signOut,
    isSignedIn: function(){
      if (auth2){
        return auth2.isSignedIn.get();
      } else {
        return false;
      }
    },
    status: status
  };

}]);

'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting dataService
 * @description
 * # dataService
 * Factory in angular-gapi-reporting to parse Google Analytics reporting API responses
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarDataService', ["ngarManagementService", function (ngarManagementService) {

    var parsedData = {
      reports : [{
        data: [],
        dimensions: [], // array of metadata objects
        metrics: [], // array of metadata objects
        segments: [], //array of segments
      }]
    };


    var parseData = function(rawdata){
      console.log('inputdata',rawdata);
      if (_.isUndefined(rawdata)){
        // check if any reference to parsedData is kept
        return parsedData;
      }
      var dataToParse = rawdata.reports || [];
      // loop through reports
      parsedData.reports =  dataToParse.map(function(data){
        var dimensionHeaders = data.columnHeader.dimensions;
        var metricHeaders = data.columnHeader.metricHeader.metricHeaderEntries;
        var dimensionNames = {};
        var metricNames = {};
        dimensionHeaders.forEach(function(dimension){
          if (dimension === 'ga:segment'){
            dimensionNames[dimension] = 'Segment';
          } else {
            dimensionNames[dimension] = ngarManagementService.items.metadata.find(function(measurement){
              return (measurement.id === dimension);
            }).uiName;
          }
        });
        metricHeaders.forEach(function(metric){
          metricNames[metric.name] = ngarManagementService.items.metadata.find(function(measurement){
            return (measurement.id === metric.name);
          }).uiName;
        });
        var rows = data.data.rows;
        return {
          data : rows.map(function(row){
            var newRow = {};
            dimensionHeaders.forEach(function(dimension, index){
              if (dimension==='ga:date'){
                newRow[dimensionNames[dimension]]=new Date(moment(row.dimensions[index], 'YYYYMMDD').format('YYYY-MM-DD'));
              }
              if (dimension==='ga:dateHour'){
                newRow[dimensionNames[dimension]]=new Date(moment(row.dimensions[index], 'YYYYMMDDHH').format('YYYY-MM-DD HH:MM:SS'));
              }
              else {
                newRow[dimensionNames[dimension]]=row.dimensions[index];
              }
            });
            metricHeaders.forEach(function(metric,index){
              newRow[metricNames[metric.name]]=parseInt(row.metrics[0].values[index]);
            });
            return newRow;
          }),

          // parse dimensions in array
          dimensions : dimensionHeaders.map(function(dimension){
            var items = [];
            var metadata = {};
            rows.forEach(function(row){
              if (items.indexOf(row[dimension])===-1){
                items.push(row[dimension]);
              }
            });
            if (dimension === 'ga:segment'){
              metadata = {
                'id': 'ga:segment',
                'dataType': 'STRING',
                'description': 'A segment',
                'group': 'Segment',
                'type': 'SEGMENT',
                'uiName': 'Segment'
              };
            } else {
              metadata = ngarManagementService.items.metadata.find(function(measurement){
                return (measurement.id === dimension);
              });
            }
            return {
              name: metadata.uiName,
              metadata: metadata,
              items: items
            };
          }),

          // parse metrics in array
          metrics : metricHeaders.map(function(metric){
            var metadata = ngarManagementService.items.metadata.find(function(measurement){
              return (measurement.id === metric.name);
            });
            return {
              name: metadata.uiName,
              metadata: metadata
            };
          }),

          segments : function(){
            var items = [];
            rows.forEach(function(row){
              if (items.indexOf(row['ga:segment'])===-1){
                items.push(row['ga:segment']);
              }
            });
            return items;
          }()

        };

      });

      return parsedData.reports;

    };

    return {
      parseData: parseData,
      parsedData: parsedData,
      cleanData: function(){
        parsedData = [{
          data: [],
          dimensions: [], // array of metadata objects
          metrics: [], // array of metadata objects
          segments: [], //array of segments
        }];
      },
      getItemsOfDimension: function(dimension){
        return parsedData.dimensions.find(function(dimObj){
          return dimObj.name===dimension;
        }).items;
      }
    };

  }]);

'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting loadService
 * @description
 * # loadService
 * Factory in angular-gapi-reporting to load Google APIs
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarLoadService', ["$rootScope", "$document", "$q", function ($rootScope, $document, $q) {

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

}]);

'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting managementService
 * @description
 * # managementService
 * Factory in angular-gapi-reporting to load management API ressources
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarManagementService', function () {

    var status = {
      accountsTreeLoaded: false,
      segmentsLoaded:false,
      metadataLoaded: false
    };

    var items = {
      accountsTree : [],
      segments : [],
      metadata : [],
      selectedViewId: '',
      breadcrumbs: {}
    };


    // generic error handler
    var handleError = function(logmsg){
      return function(error){
        console.log(logmsg);
        return error;
      };
    };

    // get all accessible accounts then parse in a tree (json)
    // [
    //   {
    //     name: myaccount,
    //     id: UA-123456,
    //     properties:[
    //       {
    //         name: myproperty,
    //         id: 12345678,
    //         views: [
    //           {
    //             name: myview,
    //             id: 12345678
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ]
    var parseAccountTree = function(accountSummariesResponse){
      var accountsTree = accountSummariesResponse.result.items.map(function(account){
        var accountObj = {};
        accountObj.name = account.name;
        accountObj.id = account.id;
        accountObj.properties = account.webProperties.map(function(property){
          var propertyObj = {};
          propertyObj.name = property.name;
          propertyObj.id = property.id;
          propertyObj.views = property.profiles.map(function(view){
            var viewObj = {};
            viewObj.name = view.name;
            viewObj.id = view.id;
            return viewObj;
          });
          return propertyObj;
        });
        return accountObj;
      });
      items.accountsTree = accountsTree.slice();
      status.accountsTreeLoaded = true;
      console.log('account tree is updated');
      return accountsTree;
    };

    var queryAccounts = function() {
      return window.gapi.client.analytics.management.accountSummaries.list()
        .then(parseAccountTree, handleError('error updating account tree'));
    };



    var parseSegments = function(rawSegments){
      var segments = rawSegments.result.items.map(function(segment){
        return _.pick(segment,['name','segmentId','type','definition']);
      });
      items.segments = segments.slice();
      status.segmentsLoaded = true;
      console.log('segment list is updated');
      return segments;
    };

    var querySegments = function(){
      return window.gapi.client.analytics.management.segments.list().then(parseSegments, handleError('error updating segments'));
    };




    // get metadata of the google analytics API
    // *** update descriptions
    // parsed into json
    // [
    //   {
    //     id,
    //     allowedInSegments,
    //     dataType,
    //     description,
    //     group,
    //     type,
    //     uiName,
    //     calculation
    //   }
    // ]
    var parseMetadata = function(rawMetadata){
      var metadata = rawMetadata.result.items.filter(function(item){
        return item.attributes.status==='PUBLIC';
      }).map(function(item){
          var obj = {
            id: item.id,
            allowedInSegments: item.attributes.allowedInSegments,
            dataType: item.attributes.dataType,
            description: item.attributes.description,
            group: item.attributes.group,
            type: item.attributes.type,
            uiName: item.attributes.uiName,
            calculation: 'none'
          };
          if (item.attributes.calculation){
            obj.calculation = item.attributes.calculation;
          }
          return obj;
        });
      items.metadata = metadata.slice();
      status.metadataLoaded = true;
      console.log('metadata is updated');
      return metadata;
    };

    var queryMetadata = function() {
      return window.gapi.client.analytics.metadata.columns.list({
        'reportType': 'ga'
      }).then(parseMetadata, handleError('error updating metadata'));
    };


    //gapi uses batch requests. Promise.all and $q.all would not work
    var queryAll = function(){
      var batch = window.gapi.client.newBatch();
      batch.add(window.gapi.client.analytics.management.accountSummaries.list(), {'id': 'accounts'});
      batch.add(window.gapi.client.analytics.management.segments.list(), {'id': 'segments'});
      batch.add(window.gapi.client.analytics.metadata.columns.list({'reportType': 'ga'}), {'id': 'metadata'});
      return batch.then(function(response){
        return {
          accountsTree: parseAccountTree(response.result.accounts),
          segments: parseSegments(response.result.segments),
          metdata: parseMetadata(response.result.metadata)
        };
      });
    };

    // ugly brute force need to use recursion
    var getBreadcrumbs = function(viewID){
      var breadcrumbs = {};
      items.accountsTree.forEach(function(account){
        account.properties.forEach(function(property){
          property.views.forEach(function(view){
            if (view.id === viewID){
              breadcrumbs = {
                account: account.name,
                property: property.name,
                view: view.name
              };
              return;
            }
          });
        });
      });
      return breadcrumbs;
    };



  // the public API
  return {
    init: queryAll,
    queryAccounts: function(){
      return queryAccounts.then(parseAccountTree);
    },
    querySegments: function(){
      return querySegments.then(parseSegments);
    },
    queryMetadata: function(){
      return queryMetadata.then(parseMetadata);
    },
    items: items,
    getBreadcrumbs: getBreadcrumbs,
    status: status
  };

});

'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting reportService
 * @description
 * # reportService
 * Factory in angular-gapi-reporting to query Google Analytics reporting API
 * https://developers.google.com/analytics/devguides/reporting/core/v4/rest/v4/reports/batchGet#response-body
 * Requests, each request will have a separate response.
 * There can be a maximum of 5 requests.
 * All requests should have the same dateRanges, viewId, segments, samplingLevel, and cohortGroup.
 */


angular.module('angularGapiAnalyticsreporting')
  .factory('ngarReportService', ["$q", "ngarAuthService", function ($q, ngarAuthService) {

    var request = {
      params: [{
        viewId : '',
        dateStart: new Date(),
        dateEnd: new Date(),
        dimensions: [],
        metrics: [],
        segments: [],
        filters: []
      }],
      json: {},
      rawData: []
    };

    var init = function(){
      request.params = [{
        viewId : '',
        dateStart: new Date(),
        dateEnd: new Date(),
        dimensions: [],
        metrics: [],
        segments: [],
        filters: []
      }];
    };

    var buildRequest = function(paramsInput){

      // checks if there is an override otherwise takes the params captured in the service
      if (_.isArray(paramsInput)) {
        request.params = paramsInput;
      }


      request.json = {
        'reportRequests': request.params.map(function(paramsItem){
          return {
            'viewId': paramsItem.viewId,
            'dateRanges':[
              {
                'startDate': moment(paramsItem.dateStart).format('YYYY-MM-DD'),
                'endDate': moment(paramsItem.dateEnd).format('YYYY-MM-DD')
              }
            ]
          };
        })
      };

      request.params.forEach(function(param,index){
        request.json.reportRequests[index].dimensions = param.dimensions.map(function(dimension){
          if (_.isObject(dimension)){
            return {'name': dimension.id};
          }
          if (_.isString(dimension)) {
            return {'name': dimension};
          }
        });
        request.json.reportRequests[index].metrics = param.metrics.map(function(metric){
          if (_.isObject(metric)) {
            return {'expression': metric.id};
          }
          if (_.isString(metric)) {
            return {'expression': metric};
          }
        });
        if (!_.isEmpty(param.segments)){
          request.json.reportRequests[index].dimensions.push({'name': 'ga:segment'});
          request.json.reportRequests[index].segments = param.segments.map(function(segment){
            if (_.isObject(segment)) {
              return { 'segmentId': segment.segmentId };
            }
            if (_.isString(segment)) {
              return { 'segmentId': segment };
            }
          });
        }
        if (!_.isEmpty(param.filters)){
          request.json.reportRequests[index].dimensionFilterClauses = param.filters.map(function(filter){
          return {
              'dimensionName': filter.dimension.id,
              'operator': filter.operator.operator,
              'expressions': (filter.operator.operator==='IN_LIST' ? filter.expression.split(',') : filter.expression)
            };
          });
        }
      });

      return request.json;

    };

    var getData = function(gapi, requestOverride) {
      var deferred = $q.defer();
      if (!ngarAuthService.isSignedIn) {
        deferred.reject('user not signed in');
      }
      // Call the Analytics Reporting API V4 batchGet method.
      console.log(request);
      var jsonRequest = requestOverride || request.json ;
      gapi.client.analyticsreporting.reports.batchGet(jsonRequest)
        .then(function(response){
          console.log('request successfull');
          request.rawData = response.result;
          deferred.resolve(response.result);
        }, function(error){
          console.log('error making reporting request', error);
          deferred.reject(error);
        });
      init();
      return deferred.promise;
    };

    var updateViewId = function(id){
      console.log('updating view id', id);
      request.params[0].viewId = id;
    };

    return {
      buildRequest: buildRequest,
      getData: getData,
      updateViewId: updateViewId,
      params: request.params,
      request: request
    };

  }]);

'use strict';

/**
 * @ngdoc overview
 * @name angularGapiAnalyticsreportingmain
 * @description
 * # angularGapiAnalyticsreportingmain
 *
 * Main module of the plugin.
 */

var ngarUI = angular.module('angularGapiAnalyticsreportingUI',[]);

// reminder to add error logging to analytics itself
ngarUI.run(function(){
  console.log('ngarUI is running');
});

'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting-UI dateSelector
 * @description
 * # dateSelector
 * modules and components in angular-gapi-reporting-UI to select dates for reporting
 */

angular.module('angularGapiAnalyticsreportingUI')

  .controller('DateSelectorCtrl', ["$scope", "ngarReportService", function($scope, ngarReportService){

    $scope.$watch('dateStart', function(newDate){
      ngarReportService.params[0].dateStart = newDate;
    });
    $scope.$watch('dateEnd', function(newDate){
      ngarReportService.params[0].dateEnd = newDate;
    });

    $scope.openEndDate = function(){
      $scope.endDateIsOpen=true;
    };
    $scope.closeEndDate = function(){
      $scope.endDateIsOpen=false;
    };

  }])


  .directive('ngarDateSelector', function () {
    return {
      restrict: 'E',
      scope: {
        defaultStart:'=',
        defaultEnd: '='
      },
      controller: 'DateSelectorCtrl',
      template:
         '<div layout="row" layout-padding>\n' +
         '  <div layout="column">\n' +
         '    <label class="md-subhead">Start Date </label>\n' +
         '    <md-datepicker ng-model="dateStart" ng-change="openEndDate()" md-hide-icons="triangle" md-open-on-focus ng-required></md-datepicker>\n' +
         '  </div>\n' +
         '  <div layout="column">\n' +
         '    <label class="md-subhead">End Date</label>\n' +
         '    <md-datepicker ng-model="dateEnd" md-hide-icons="triangle" md-is-open="endDateIsOpen"  md-open-on-focus ng-required></md-datepicker>\n' +
         '  </div>\n' +
         '</div>\n',
      link: function(scope){

        scope.$watch('defaultStart', function(start){
          if (start){
            scope.dateStart = start;
          }
        });

        scope.$watch('defaultEnd', function(end){
          if (end){
            scope.dateEnd = end;
          }
        });

      }
    };
  });

'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting-UI measurementSelector
 * @description
 * # measurementSelector
 * modules and components in angular-gapi-reporting-UI to select dimensions, metrics and segments
 */

angular.module('angularGapiAnalyticsreportingUI')
  .factory('ngarFilter', function () {

    var createFilter = function(query, property){
      return function(item) {
        return _.includes(_.lowerCase(item[property]), _.lowerCase(query));
      };
    };

    return {
      createFilter:createFilter
    };

  })

  .controller('MeasurementSelectorCtrl', ["$scope", "ngarFilter", "ngarManagementService", "ngarReportService", function($scope, ngarFilter, ngarManagementService, ngarReportService){

    var measurementMap = {
      'DIMENSION' : 'dimensions',
      'METRIC': 'metrics',
      'SEGMENT': 'segments'
    };
    $scope.selectedMeasurements = ngarReportService.params[0][measurementMap[$scope.type]];

    $scope.selectMeasurement = function(measurement){
      if (measurement){
        $scope.selectedMeasurements.push(measurement);
        this.searchMeasurementText = '';
      }
    };
    var measurements = function(type){
      if (type === 'DIMENSION' || type === 'METRIC'){
        return ngarManagementService.items.metadata.filter(function(item){
          return item.type === type;
        });
      }
      if (type === 'SEGMENT'){
        return ngarManagementService.items.segments.map(function(segment){
          segment.group = segment.type;
          segment.uiName = segment.name;
          return segment;
        });
      }
    };
    $scope.measurementSearch = function(query) {
      return query ? measurements($scope.type).filter(ngarFilter.createFilter(query,'uiName')) : [];
    };
    $scope.removeMeasurement = function(index){
      $scope.selectedMeasurements.splice(index,1);
    };
  }])


  .directive('ngarMeasurementSelector', ["ngarManagementService", "ngarReportService", function (ngarManagementService, ngarReportService) {
    return {
      restrict: 'E',
      scope: {
        type:'@',
        defaultSelection: '='
      },
      controller: 'MeasurementSelectorCtrl',
      link: function(scope){
        var selectedMeasurements;
        var measurementMap = {
          'DIMENSION' : 'dimensions',
          'METRIC': 'metrics',
          'SEGMENT': 'segments'
        };
        scope.$watchCollection('defaultSelection', function(selection){
          if (selection){
            if (scope.type === 'DIMENSION' || scope.type === 'METRIC'){
              selectedMeasurements = selection.map(function(selectionItem){
                return ngarManagementService.items.metadata.find(function(metadataItem){
                  return metadataItem.id === selectionItem;
                });
              });
            }
            if (scope.type === 'SEGMENT'){
              selectedMeasurements = selection.map(function(selectionItem){
                return ngarManagementService.items.segments.find(function(segmentItem){
                  segmentItem.group = segmentItem.type;
                  segmentItem.uiName = segmentItem.name;
                  return segmentItem.name === selectionItem;
                });
              });
            }
            scope.selectedMeasurements = selectedMeasurements.filter(function(selected){
              return !_.isUndefined(selected);
            });
            ngarReportService.params[0][measurementMap[scope.type]]=scope.selectedMeasurements;
          }
        });
      },
      template:
         '<div flex layout-margin>\n' +
         '  <md-autocomplete\n' +
         '    md-no-cache\n' +
         '    md-selected-item-change="selectMeasurement(measurement)"\n' +
         '    md-selected-item="selectedMeasurement"\n' +
         '    md-search-text="searchMeasurementText"\n' +
         '    md-items="measurement in measurementSearch(searchMeasurementText)"\n' +
         '    md-item-text="measurement.uiName"\n' +
         '    placeholder="Enter {{type}}">\n' +
         '    <md-item-template>\n' +
         '      <span>\n' +
         '        <span> {{measurement.group}} > </span>\n' +
         '      </span>\n' +
         '      <span>\n' +
         '        <span>\n' +
         '          <strong>{{measurement.uiName}}</strong>\n' +
         '        </span>\n' +
         '      </span>\n' +
         '    </md-item-template>\n' +
         '    <md-not-found>\n' +
         '      "{{searchMeasurement}}" has no match.\n' +
         '    </md-not-found>\n' +
         '  </md-autocomplete>\n' +
         '  <md-chips\n' +
         '    ng-model="selectedMeasurements"\n' +
         '    delete-button-label="Remove Measurement"\n' +
         '    delete-hint="Press delete to remove {{type}}"\n' +
         '    readonly="true"\n' +
         '    md-max-chips="7"\n' +
         '    ng-class="type">\n' +
         '    <md-chip-template>\n' +
         '      <span>{{$chip.uiName}}</span>\n' +
         '      <md-icon ng-click="removeMeasurement($index)">close</md-icon>\n' +
         '    </md-chip-template>\n' +
         '  </md-chips>\n' +
         '  <!-- <div ng-message="md-max-chips">You reached the maximum amount of chips</div> -->\n' +
         '</div>\n'
    };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting-UI viewSelector
 * @description
 * # viewSelector
 * modules and components in angular-gapi-reporting-UI to select view ID
 */

angular.module('angularGapiAnalyticsreportingUI')
  .factory('ngarViewSelectorService', ["ngarManagementService", "$mdPanel", "$mdMedia", function (ngarManagementService, $mdPanel, $mdMedia) {

    var panelPosition;
    if ($mdMedia('gt-sm')){
      panelPosition = $mdPanel.newPanelPosition()
      .absolute()
      .left('10%')
      .top('10%');
    } else {
      panelPosition = $mdPanel.newPanelPosition()
      .absolute()
      .left('10%')
      .top('10%');
    }

    var template =
    '<md-content flex layout-fill layout="row" md-whiteframe="8">\n' +
    '  <div layout="column" flex layout-fill>\n' +
    '    <md-toolbar md-scroll-shrink>\n' +
    '      <div class="md-toolbar-tools">Accounts</div>\n' +
    '    </md-toolbar>\n' +
    '    <div layout="column" flex layout-fill style="overflow:scroll;">\n' +
    '      <md-list>\n' +
    '        <md-list-item class="md-2-line" ng-repeat="account in accounts track by account.id" ng-click="selectAccount(account.id)">\n' +
    '          <div class="md-list-item-text" layout="column">\n' +
    '            <p>{{account.name}}</p>\n' +
    '            <p>({{account.id}})</p>\n' +
    '          </div>\n' +
    '        </md-list-item>\n' +
    '      </md-list>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div layout="column" flex layout-fill style="overflow:scroll;">\n' +
    '    <md-toolbar md-scroll-shrink>\n' +
    '      <div class="md-toolbar-tools">Properties</div>\n' +
    '    </md-toolbar>\n' +
    '    <div layout="column" flex layout-fill style="overflow:scroll;">\n' +
    '      <md-list>\n' +
    '        <md-list-item class="md-2-line" ng-repeat="property in selectedAccount.properties track by property.id" ng-click="selectProperty(property.id)">\n' +
    '          <div class="md-list-item-text" layout="column">\n' +
    '            <p>{{property.name}}</p>\n' +
    '            <p>({{property.id}})</p>\n' +
    '          </div>\n' +
    '        </md-list-item>\n' +
    '      </md-list>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div layout="column" flex layout-fill style="overflow:scroll;">\n' +
    '    <md-toolbar md-scroll-shrink>\n' +
    '      <div class="md-toolbar-tools">Views</div>\n' +
    '    </md-toolbar>\n' +
    '    <div layout="column" flex layout-fill style="overflow:scroll;">\n' +
    '      <md-list style="overflow:scroll:">\n' +
    '        <md-list-item class="md-2-line" ng-repeat="view in selectedProperty.views track by view.id" ng-click="selectView(view.id)">\n' +
    '          <div class="md-list-item-text" layout="column">\n' +
    '            <p>{{view.name}}</p>\n' +
    '            <p>({{view.id}})</p>\n' +
    '          </div>\n' +
    '        </md-list-item>\n' +
    '      </md-list>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</md-content>\n' +
    '<md-button flex ng-click="closePanel()" class="md-warn md-raised">Close</md-button>\n';

    var showSelector = function () {
      console.log('showSelector');
      var config = {
        controller: 'ViewSelectorCtrl',
        controllerAs: 'Ctrl',
        locals : {
          accounts:ngarManagementService.items.accountsTree
        },
        position: panelPosition,
        zIndex: 1000,
        panelClass : 'viewSelector',
        template: template,
        clickOutsideToClose: true,
        escapeToClose: true,
        focusOnOpen: true,
        hasBackdrop: true,
        fullscreen: false
      };

      var panelRef = $mdPanel.create(config);
      panelRef.open()
          .finally(function() {
            panelRef = undefined;
          });
    };

    return {
      showSelector: showSelector
    };

  }])

  .controller('ViewSelectorCtrl', ["$scope", "mdPanelRef", "ngarManagementService", "ngarReportService", "accounts", function($scope, mdPanelRef, ngarManagementService, ngarReportService, accounts){
    $scope.accounts = accounts;
    $scope._mdPanelRef = mdPanelRef;
    $scope.closePanel = function(){
     $scope._mdPanelRef.close()
       .finally(function(){
         console.log('closing selector');
       });
    };
    $scope.selectAccount = function(id){
     $scope.selectedAccount = $scope.accounts.find(function(account){
       return account.id === id;
     });
     $scope.selectedProperty = {};
    };
    $scope.selectProperty = function(id){
     $scope.selectedProperty = $scope.selectedAccount.properties.find(function(property){
       return property.id === id;
     });
    };
    $scope.selectView = function(viewID){
     ngarReportService.updateViewId(viewID);
     $scope.closePanel();
    };
  }])

  .directive('ngarViewSelector', ["ngarViewSelectorService", "ngarReportService", function (ngarViewSelectorService,ngarReportService) {
    return {
      restrict: 'A',
      scope: {
        defaultView : '='
      },
      link: function(scope, el){
        el.bind('click', function(){
          ngarViewSelectorService.showSelector();
        });
        scope.$watch('defaultView', function(viewId){
          if (viewId){
            ngarReportService.updateViewId(viewId);
          }
        });
      }
    };
  }]);
