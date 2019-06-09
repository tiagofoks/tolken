angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('eNTRAR', {
    url: '/page2',
    templateUrl: 'templates/eNTRAR.html',
    controller: 'eNTRARCtrl'
  })

  .state('meuBusO', {
    url: '/page3',
    templateUrl: 'templates/meuBusO.html',
    controller: 'meuBusOCtrl'
  })

  .state('meuBusOGPS', {
    url: '/page4',
    templateUrl: 'templates/meuBusOGPS.html',
    controller: 'meuBusOGPSCtrl'
  })

  .state('meuBusOGPS2', {
    url: '/page5',
    templateUrl: 'templates/meuBusOGPS2.html',
    controller: 'meuBusOGPS2Ctrl'
  })

  .state('recarregar', {
    url: '/page6',
    templateUrl: 'templates/recarregar.html',
    controller: 'recarregarCtrl'
  })

  .state('recarregar2', {
    url: '/page8',
    templateUrl: 'templates/recarregar2.html',
    controller: 'recarregar2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});