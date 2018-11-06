'use strict';

angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'view5/view5.html',
    controller: 'View5Ctrl'
  });
}])

.controller('View5Ctrl', [function() {

}]);

myApp.service('JSONservice5', function($http, $q) {

	var deferred = $q.defer();
	$http.get('data/output.json').then(function(d) {
		deferred.resolve(d);
	});

	this.getSymptoms = function(d) {
		return deferred.promise;
	}	

});

myApp.controller("JSONController5", function($scope, JSONservice) {
	var promise = JSONservice.getSymptoms();
	promise.then(function(d) {
		$scope.diabetes = "diabetes";
		$scope.dimentia = "dimentia";
		$scope.carergiver = "caregiver burnout";
		$scope.addiction = "addiction";
		$scope.asdf = d.data.diabetes[0];
		$scope.data = d.data.diabetes[1];
		console.log(d.data.diabetes[0]);
		console.log($scope.data);
		//console.log($scope.data.diabetes[1]);
	})

});