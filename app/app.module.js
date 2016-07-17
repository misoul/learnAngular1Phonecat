'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngMaterial',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
]);

angular.module('phonecatApp').
  factory('strHelpers', [
    function () {
      return {
        snippingStr: function(str) {
          return str.substring(1,20) + "...";
        }
      }
  }]);
