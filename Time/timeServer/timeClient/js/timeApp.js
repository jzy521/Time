// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
var app = angular.module('time', ['ngAnimate', 'ui.router', 'ngResource']);

// configuring our routes 
// =============================================================================
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('buyTime', {
        url: '/buyTime',
        template: '<time-buy-time></time-buy-time>'
    });
    $urlRouterProvider.otherwise('/buyTime');

});