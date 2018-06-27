myApp.config(function($routeProvider) {

	$routeProvider
	.when('/:role/:topic', {
		templateUrl: 'pages/page.html',
		controller: function($http, $scope, $routeParams, $timeout) {
			//get the correct JSON topic file based on the URL
			$http.get('json/' + $routeParams.topic + '.json', {cache:true}).success(function(data) {
				//locate the topic name
				$scope.topic = data.name;
				//locate banner image (if present)
				$scope.banner = data.banner;
				//locate the carousel images (if present)
				$scope.carousel = data.carousel;
				//locate the subtopics
				$scope.subtopics = data.subtopics;
				//locate the resources
				//$scope.resources = data.resources;
			});
			$scope.role = $routeParams.role;
		}
	})
});

