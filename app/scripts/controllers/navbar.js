'use strict';

angular.module('shgfApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
	    {
	      'title': 'Hjem',
	      'link': '/'
	    },
	    {
	      'title': 'Kontakt liste',
	      'link': '/contactList'
	    }
		];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
