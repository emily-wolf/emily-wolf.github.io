myApp.directive('header', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/header.html',
		controller: function($scope, $routeParams) {
			$scope.currenttopic = $routeParams.topic;
		}
	}
});

myApp.directive('sideNav', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/sidenav.html',
		controller: function($http, $scope, $routeParams, $window) {
        	$http.get('json/navigation.json', {cache:true}).success(function(data) {
          		$scope.navitems = data;
        	});
		}
	}
});

myApp.directive('banner', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/banner.html'
	}
});

myApp.directive('carousel', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/carousel.html'
	}
});

myApp.directive('resources', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/resources.html'
	}
});