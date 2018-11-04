'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

function hover(element)
{
    element.style.backgroundColor = "#00ccff";
}
function hoverOff(element)
{
    element.style.backgroundColor = "#f4f4f4";
}

function diagnosis(element) {
	window.location.href = "#!/view2";
}

console.log("test");

myApp.service('JSONservice', function($http, $q) {

	var deferred = $q.defer();
	$http.get('data/sample.json').then(function(d) {
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