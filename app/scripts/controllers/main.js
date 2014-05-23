'use strict';

angular.module('shgfApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/contactList').success(function(contactList) {
      $scope.contactList = contactList;
    });
  });
