'use strict';

angular.module('shgfApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
