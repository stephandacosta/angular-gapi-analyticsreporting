'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting managementService
 * @description
 * # managementService
 * Factory in angular-gapi-reporting to load management API ressources
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarManagementService', function (appConstants) {

    var defaultAccountsTree = appConstants.accountsTree;
    var defaultMetadata = appConstants.metadata;

    var status = {
      accountsTreeLoaded: false,
      segmentsLoaded:false,
      metadataLoaded: false
    };

    var items = {
      accountsTree : defaultAccountsTree,
      segments : [],
      metadata : defaultMetadata,
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
      console.log(metadata);
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

    var getBreadcrumbs = function(viewID){
      items.accountsTree.forEach(function(account){
        account.properties.forEach(function(property){
          property.views.forEach(function(view){
            if (view.id === viewID){
              items.breadcrumbs = {
                account: account.name,
                property: property.name,
                view: view.name
              };
              return;
            }
          });
        });
      });
    };

    var updateViewId = function(id){
      console.log('updating view id', id);
      items.selectedViewId = id;
      getBreadcrumbs(id);
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
    updateViewId: updateViewId,
    status: status
  };

});
