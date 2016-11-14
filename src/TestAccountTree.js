// to test without connecting
angular.module('angularGapiAnalyticsreporting')
  .constant('appConstants', {
    accountsTree: [ {
        'name': 'Demo Account (Beta)',
        'id': '54516992',
        'properties': [
          {
            'name': 'Google Merchandise Store',
            'id': 'UA-54516992-1',
            'views': [
              {
                'name': '1 Master View',
                'id': '92320289'
              },
              {
                'name': '2 Test View',
                'id': '92324711'
              },
              {
                'name': '3 Raw Data View',
                'id': '90822334'
              }
            ]
          }
        ]
      }]
  });
