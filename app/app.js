'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
console.log("testtest in myApp");

myApp.service('JSONservice', function($http, $q) {

	var deferred = $q.defer();
	$http.get('data/output.json').then(function(d) {
		deferred.resolve(d);
	});
	this.getSymptoms = function(d) {
		return deferred.promise;
	}	

});

myApp.controller("JSONController", function($scope, JSONservice) {
	var promise = JSONservice.getSymptoms();
	promise.then(function(d) {
		$scope.symptoms = d.data;
		console.log($scope.symptoms);
	})
});


