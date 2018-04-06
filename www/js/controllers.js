angular.module('app.controllers', [])
  
.controller('myWeatherReportAppCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
	$scope.mdl={};
	$scope.mdl.appid="2e5aa9b1bf4acbed133c258809aee5ef";
	$scope.getWeather = function() {
		url = "http://api.openweathermap.org/data/2.5/weather?q="+$scope.mdl.city_name+"&mode=json&APPID="+$scope.mdl.appid;
		//http://api.openweathermap.org/data/2.5/weather?q=Mexico&mode=json&APPID=2e5aa9b1bf4acbed133c258809aee5ef
		//url = "http://api.openweathermap.org/data/2.5/weather?q=Mexico&mode=json&APPID=2e5aa9b1bf4acbed133c258809aee5ef"; 
		$http.get(url).then(function(response) {
	        $scope.mdl.current_temp 	= response.data.main.temp;
	        $scope.mdl.weather_comment 	= response.data.weather[0].description;
	        $scope.mdl.weather_icon 	= response.data.weather[0].icon;
	    }, function myError(response) {
	        $scope.mdl.city_name = response.statusText;
	    });
	};

}])
 