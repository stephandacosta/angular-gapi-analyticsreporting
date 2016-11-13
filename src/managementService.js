'use strict';

/**
 * @ngdoc service
 * @name angular-gapi-reporting managementService
 * @description
 * # managementService
 * Factory in angular-gapi-reporting to load management API ressources
 */
angular.module('angularGapiAnalyticsreporting')
  .factory('ngarManagementService', function ($rootScope,$q) {

    var status = {
      accountsTreeLoaded: false,
      segmentsLoaded:false,
      metadataLoaded: false
    };

    var items = {
      accountsTree : [],
      segments : [],
      metadata : []
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
    var queryAccounts = function() {
      var deferred = $q.defer();
      window.gapi.client.analytics.management.accountSummaries.list()
        .then(function(accountSummariesResponse) {
          items.accountsTree = accountSummariesResponse.result.items.map(function(account){
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
          console.log('account tree is updated');
          status.accountsTreeLoaded = true;
          $rootScope.$digest();
          deferred.resolve(items.accountsTree);
        }, function(error){
          console.log('error updating account tree');
          status.accountsTreeLoaded = false;
          deferred.reject(error);
        });
      return deferred.promise;
    };

    // get all accessible segments
    var querySegments = function(){
      var deferred = $q.defer();
      window.gapi.client.analytics.management.segments.list().then(function(results){
        items.segments = results.result.items.map(function(segment){
          return _.pick(segment,['name','segmentId','type','definition']);
        });
        console.log('segment list is updated');
        status.segmentsLoaded = true;
        $rootScope.$digest();
        deferred.resolve(items.segments);
      }, function(error){
        console.log('error updating segments');
        status.segmentsLoaded = false;
        deferred.reject(error);
      });
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
    var queryMetadata = function() {
      var deferred = $q.defer();
      window.gapi.client.analytics.metadata.columns.list({
        'reportType': 'ga'
      }).then(function(response){
          items.metadata = response.result.items.filter(function(item){
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
        // metadata = _.chain(response.result.items).filter(function(item){
        //   return item.attributes.status==='PUBLIC';
        // }).pick(['id','allowedInSegments','dataType','description','group','type','uiName','calculation']).value();
        console.log('metadata is updated');
        status.metadataLoaded = true;
        $rootScope.$digest();
        deferred.resolve(items.metadata);
      }, function(error){
        console.log('error updating metadata');
        status.metadataLoaded = false;
        deferred.reject(error);
      });
    };

  // the public API
  return {
    init: function(){
      return queryAccounts()
      .then(querySegments)
      .then(queryMetadata);
    },
    items: items,
    status: status
  };

});
