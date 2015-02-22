(function () {
	var app = angular.module('myApp', ['ngRoute']);
	
	app.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/topic1',{
				templateUrl: 'views/topic1.html',
			}).when('/topic2',{
				templateUrl: 'views/topic2.html',
			}).when('/topic3',{
				templateUrl: 'views/topic3.html',
			}).when('/topic4',{
				templateUrl: 'views/topic4.html',
			}).when('/topic5',{
				templateUrl: 'views/topic5.html',
			}).when('/topic6',{
				templateUrl: 'views/topic6.html',
			}).otherwise({
				redirectTo:'/'
			});
	}]);

	app.controller('topicsController', ['$scope', function ($scope) {
			$scope.topics = topics;
	}]);

	var topics = [
		{
			name : 'Topic 1',
			link : '#/topic1'
		},
		{
			name : 'Topic 2',
			link : '#/topic2'
			
		},
		{
			name : 'Topic 3',
			link : '#/topic3'
		},
		{
			name : 'Topic 4',
			link : '#/topic4'
		},
		{
			name : 'Topic 5',
			link : '#/topic5'
		},
		{
			name : 'Topic 6',
			link : '#/topic6'
		},
	];
	app.controller("topic2Controller", function () {
	   this.msg = "Hi! incaendo Team i am angularJS";
	
   });
	 
	 app.controller('topic3Controller',["$scope", function ($scope) {
		 $scope.msg = "Hello again incaendo team!. Lets learn something new. :)";
		 $scope.employees = employees;
	 }]);
 
   app.controller('topic4Controller', ["$scope","$http", "topic4Service", function ($scope, $http, topic4Service) {
			 $http.get("http://graph.facebook.com/youtube")
							 .success(function (response) {$scope.result = response;});
			 $scope.msg = topic4Service;
	 }]);
 
	 app.factory('topic4Service', ["$http", function ($http) {
			 return "Hello";
			 		 
	 }]);
	 
	 app.directive('myDetails', function () {
		 return {
			 template: 'Name: {{employee.name}} Desgination:{{employee.designation}}, experience:{{employee.address}}'
		 }
	 });
	 
	 var employees = [
		 {
			 name:"Om prakash",
			 designation: "software developer",
			 experience : 3
		 },
		 {
			 name:"Harsh Girdhar",
			 designation: "software developer",
			 experience : 1
		 },
		 {
			 name:"Kuldeep",
			 designation: "software developer",
			 experience : 1.5
		 },
		 {
			 name:"Vinay",
			 designation: "Designer",
			 experience : 3
		 },
		 
		 
		 
	 ];
})();

