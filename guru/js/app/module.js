/**
 * Created by Shubham Bakshi on 05-02-2016.
 */

var guru = angular.module('guru',['ngRoute']);

guru.config(['$routeProvider',function($routeProvider){
	$routeProvider
				  .when('/',{
						templateUrl: 'partials/homepage.html'
				  });
}]);
