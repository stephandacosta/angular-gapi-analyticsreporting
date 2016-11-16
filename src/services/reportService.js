'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting reportService
 * @description
 * # reportService
 * Factory in angular-gapi-reporting to query Google Analytics reporting API
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarReportService', function ($q) {

    var report = {
      viewId : '',
      dateStart: new Date(),
      dateEnd: new Date(),
      dimensions: [],
      metrics: [],
      segments: [],
      filters: [],
      request: {}
    };

    var buildRequest = function(){

      report.request = {
        'reportRequests':[
          {
            'viewId': report.viewId,
            'dateRanges':[
              {
                'startDate': moment(report.dateStart).format('YYYY-MM-DD'),
                'endDate': moment(report.dateEnd).format('YYYY-MM-DD')
              }
            ]
          }
        ]
      };

      report.request.reportRequests[0].dimensions = report.dimensions.map(function(dimension){
        return {'name': dimension.id};
      });

      report.request.reportRequests[0].metrics = report.metrics.map(function(metric){
        return {'expression': metric.id};
      });

      if (report.segments.length){
        report.request.reportRequests[0].dimensions.push({'name': 'ga:segment'});
        report.request.reportRequests[0].segments = report.segments.map(function(segment){
          return {
            'segmentId': segment.segmentId
          };
        });
      }

      if (report.filters.length){
        report.request.reportRequests[0].dimensionFilterClauses = report.filters.map(function(filter){
        return {
            'dimensionName': filter.dimension.id,
            'operator': filter.operator.operator,
            'expressions': (filter.operator.operator==='IN_LIST' ? filter.expression.split(',') : filter.expression)
          };
        });
      }

      return report.request;

    };

    var getData = function(gapi, requestOverride) {
      // Call the Analytics Reporting API V4 batchGet method.
      var request = requestOverride || report.request;
      var deferred = $q.defer();
      gapi.client.analyticsreporting.reports.batchGet(request)
        .then(function(response){
          console.log('request successfull');
          report.data = response.result;
          deferred.resolve(response.result);
        }, function(error){
          console.log('error making reporting request', error);
          deferred.reject(error);
        });
      return deferred.promise;
    };

    var updateViewId = function(id){
      console.log('updating view id', id);
      report.viewId = id;
    };

    return {
      buildRequest: buildRequest,
      getData: getData,
      updateViewId: updateViewId,
      report: report
    };

  });
