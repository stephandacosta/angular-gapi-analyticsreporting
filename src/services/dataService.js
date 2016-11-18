'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting dataService
 * @description
 * # dataService
 * Factory in angular-gapi-reporting to parse Google Analytics reporting API responses
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarDataService', function (appConstants, ngarManagementService) {

    var parsedData = {
      data: [],
      dimensions: [], // array of metadata objects
      metrics: [], // array of metadata objects
      segments: [], //array of segments
    };


    var parseData = function(inputdata){
      var data = inputdata || appConstants.rawData;
      var dimensionHeaders = data.reports[0].columnHeader.dimensions;
      var metricHeaders = data.reports[0].columnHeader.metricHeader.metricHeaderEntries;
      var rows = data.reports[0].data.rows;
      parsedData.data = rows.map(function(row){
        var newRow = {};
        dimensionHeaders.forEach(function(dimension, index){
          if (dimension==='ga:date'){
            newRow[dimension]=new Date(moment(row.dimensions[index], 'YYYYMMDD').format('YYYY-MM-DD'));
          }
          if (dimension==='ga:dateHour'){
            newRow[dimension]=new Date(moment(row.dimensions[index], 'YYYYMMDDHH').format('YYYY-MM-DD HH:MM:SS'));
          }
          else {
            newRow[dimension]=row.dimensions[index];
          }
        });
        metricHeaders.forEach(function(metric,index){
            newRow[metric.name]=parseInt(row.metrics[0].values[index]);
        });
        return newRow;
      });

      // parse dimensions in array
      parsedData.dimensions = dimensionHeaders.map(function(dimension){
        var items = [];
        var metadata = {};
        parsedData.data.forEach(function(row){
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
      });

      // parse metrics in array
      parsedData.metrics = metricHeaders.map(function(metric){
        var metadata = ngarManagementService.items.metadata.find(function(measurement){
          return (measurement.id === metric.name);
        });
        return {
          name: metadata.uiName,
          metadata: metadata
        };
      });

      if (dimensionHeaders.indexOf('ga:segment')===-1){
        parsedData.segments = [];
      } else {
        var segmentNames = _.find(parsedData.dimensions, {name: 'Segment'}).items;
        parsedData.segments = _.intersectionWith(ngarManagementService.items.segments, segmentNames, function(arrVal, othVal){
          return (arrVal.name === othVal);
        });
      }

      return parsedData;

    };

    return {
      parseData: parseData,
      parsedData: parsedData,
      cleanData: function(){
        parsedData = {
          data: [],
          dimensions: [], // array of metadata objects
          metrics: [], // array of metadata objects
          segments: [], //array of segments
        };
      },
      getItemsOfDimension: function(dimension){
        return parsedData.dimensions.find(function(dimObj){
          return dimObj.name===dimension;
        }).items;
      }
    };

  });
