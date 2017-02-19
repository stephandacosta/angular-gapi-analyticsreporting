'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting dataService
 * @description
 * # dataService
 * Factory in angular-gapi-reporting to parse Google Analytics reporting API responses
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarDataService', function (ngarManagementService) {

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

  });
