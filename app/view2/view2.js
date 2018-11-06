'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);

myApp.service('JSONservice2', function($http, $q) {

	var deferred = $q.defer();
	$http.get('data/output.json').then(function(d) {
		deferred.resolve(d);
	});

	this.getSymptoms = function(d) {
		console.log(deferred.promise);
		return deferred.promise;
	}	

});

myApp.controller("JSONController2", function($scope, JSONservice) {
	var promise = JSONservice.getSymptoms();
	promise.then(function(d) {
		$scope.data = d.data.diabetes;
		console.log($scope.data);
		//console.log($scope.data.diabetes[1]);
	})

});

