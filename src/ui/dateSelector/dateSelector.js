'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting-UI dateSelector
 * @description
 * # dateSelector
 * modules and components in angular-gapi-reporting-UI to select dates for reporting
 */

angular.module('angularGapiAnalyticsreportingUI')

  .controller('DateSelectorCtrl', function($scope, ngarReportService){

    $scope.dateStart = ngarReportService.report.dateStart;
    $scope.dateEnd = ngarReportService.report.dateEnd;

    $scope.$watch('dateStart', function(newDate){
      ngarReportService.report.dateStart = newDate;
    });
    $scope.$watch('dateEnd', function(newDate){
      ngarReportService.report.dateEnd = newDate;
    });

    $scope.openEndDate = function(){
      $scope.endDateIsOpen=true;
    };
    $scope.closeEndDate = function(){
      $scope.endDateIsOpen=false;
    };

  })


  .directive('ngarDateSelector', function () {
    return {
      restrict: 'E',
      scope: {
        type:'@'
      },
      controller: 'DateSelectorCtrl',
      templateUrl: 'src/ui/dateSelector/dateSelector.html'
    };
  });
