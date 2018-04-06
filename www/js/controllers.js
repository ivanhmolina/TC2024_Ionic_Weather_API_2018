angular.module('app.controllers', [])
  
.controller('myWeatherReportAppCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
	$scope.getWeather = function () {
		$scope.mdl.city_name = "adios";
	};

}])
 