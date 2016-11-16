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

  .controller('MeasurementSelectorCtrl', function($scope, ngarFilter, ngarManagementService, ngarReportService){

    var measurementMap = {
      'DIMENSION' : 'dimensions',
      'METRIC': 'metrics',
      'SEGMENT': 'segments'
    };
    $scope.selectedMeasurements = ngarReportService.report[measurementMap[$scope.type]];

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
  })


  .directive('ngarMeasurementSelector', function () {
    return {
      restrict: 'E',
      scope: {
        type:'@'
      },
      controller: 'MeasurementSelectorCtrl',
      templateUrl: 'src/ui/measurementSelector/measurementSelector.html'
    };
  });
