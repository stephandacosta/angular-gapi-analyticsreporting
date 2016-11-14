'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting-UI viewSelector
 * @description
 * # viewSelector
 * modules and components in angular-gapi-reporting-UI to select view ID
 */

var ngarUI = angular.module('angularGapiAnalyticsreportingUI',[]);

ngarUI.factory('ngarViewSelectorService', function (ngarManagementService, $mdPanel, $mdMedia) {

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
        templateUrl: 'src/ui/viewSelector/viewSelector.html',
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

  })

  .controller('ViewSelectorCtrl', function($scope, mdPanelRef, ngarManagementService, accounts){
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
     ngarManagementService.updateViewId(viewID);
     $scope.closePanel();
    };
  })

  .directive('ngarViewSelector', function (ngarViewSelectorService) {
    return {
      restrict: 'A',
      scope: {},
      link: function(scope, el){
        el.bind('click', function(){
          ngarViewSelectorService.showSelector();
        });
      }
    };
  });
