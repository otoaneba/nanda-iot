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