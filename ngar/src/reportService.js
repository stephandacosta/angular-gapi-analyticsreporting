'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting reportService
 * @description
 * # reportService
 * Factory in angular-gapi-reporting to query Google Analytics reporting API
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarReportService', function ($q, ngarAuthService) {

    var params = {
      viewId : '',
      dateStart: new Date(),
      dateEnd: new Date(),
      dimensions: [],
      metrics: [],
      segments: [],
      filters: []
    };

    var request = {
      json: {},
      rawData: []
    };

    var init = function(){
      params = {
        viewId : '',
        dateStart: new Date(),
        dateEnd: new Date(),
        dimensions: [],
        metrics: [],
        segments: [],
        filters: []
      };
    };

    var buildRequest = function(paramsInput){

      if (_.isObject(paramsInput)) {
        params = paramsInput;
      }


      request.json = {
        'reportRequests':[
          {
            'viewId': params.viewId,
            'dateRanges':[
              {
                'startDate': moment(params.dateStart).format('YYYY-MM-DD'),
                'endDate': moment(params.dateEnd).format('YYYY-MM-DD')
              }
            ]
          }
        ]
      };

      request.json.reportRequests[0].dimensions = params.dimensions.map(function(dimension){
        if (_.isObject(dimension)){
          return {'name': dimension.id};
        }
        if (_.isString(dimension)) {
          return {'name': dimension};
        }
      });

      request.json.reportRequests[0].metrics = params.metrics.map(function(metric){
        if (_.isObject(metric)) {
          return {'expression': metric.id};
        }
        if (_.isString(metric)) {
          return {'expression': metric};
        }
      });

      if (!_.isEmpty(params.segments)){
        request.json.reportRequests[0].dimensions.push({'name': 'ga:segment'});
        request.json.reportRequests[0].segments = params.segments.map(function(segment){
          if (_.isObject(segment)) {
            return { 'segmentId': segment.segmentId };
          }
          if (_.isString(segment)) {
            return { 'segmentId': segment };
          }
        });
      }

      if (!_.isEmpty(params.filters)){
        request.json.reportRequests[0].dimensionFilterClauses = params.filters.map(function(filter){
        return {
            'dimensionName': filter.dimension.id,
            'operator': filter.operator.operator,
            'expressions': (filter.operator.operator==='IN_LIST' ? filter.expression.split(',') : filter.expression)
          };
        });
      }

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
      params.viewId = id;
    };

    return {
      buildRequest: buildRequest,
      getData: getData,
      updateViewId: updateViewId,
      params: params,
      request: request
    };

  });
