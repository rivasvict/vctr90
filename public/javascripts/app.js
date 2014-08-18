angular.module('vctr',
	[
		'vctr.controllers',
		'vctr.services',
		'vctr.directives',
		'ngRoute'
	])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$routeProvider.when('/',{templateUrl:'../views/templates/default.jade',controller:'defaultCtrl'})
									.when('/about',{templateUrl:'../views/templates/about.jade',controller:'aboutCtrl'})
									.when('/projects',{templateUrl:'../views/templates/projects.jade',controller:'projectsCtrl'});
	}]);
