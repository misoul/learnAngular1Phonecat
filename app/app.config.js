'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);

angular.
  module('phonecatApp').
  factory('strHelpers', [
    function () {
      return {
        snippingStr: function(str) {
          return str.substring(1,20) + "...";
        }
      }
  }])
