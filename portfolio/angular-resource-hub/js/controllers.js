myApp.controller("myCtrl", function($http) {
	$http.get('json/navigation.json', {cache:true}).success(function(navigation) {
		for (i = 0; i < navigation.length; i++) {
			$http.get('json/' + navigation[i].shortname + '.json', {cache:true}).success(function(){});
		}
	});	
});