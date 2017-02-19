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
  .factory('ngarReportService', function ($q, ngarAuthService) {

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

  });
