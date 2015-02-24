(function () {
	var app = angular.module('myApp', ['ngRoute']);
	
	
	/*
	 * Config use to set routes.
	 */
	
	
	app.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/topic0',{
				templateUrl: 'views/topic0.html',
			}).when('/topic1',{
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
			}).when('/goodbye',{
				templateUrl: 'views/goodbye.html',
			}).otherwise({
				redirectTo:'/'
			});
	}]);

	
	/*
	 * Main controller
	 */
	app.controller('topicsController', ['$scope', function ($scope) {
			$scope.topics = topics;
	}]);

	var topics = [
		
		{
			name : 'Introduction',
			link : '#/topic0'
		},
		{
			name : 'Topic 1: Module, Directive, Two Data Binding',
			link : '#/topic1'
		},
		{
			name : 'Topic 2: Controllers',
			link : '#/topic2'
			
		},
		{
			name : 'Topic 3: $scope, Dependency Injection, ng-repeat directive, filters, expression',
			link : '#/topic3'
		},
		{
			name : 'Topic 4: Services in AngularJS, predefined, custom',
			link : '#/topic4'
		},
		{
			name : 'Topic 5: Custom Directives',
			link : '#/topic5'
		},
		{
			name : 'Topic 6: Advantages & Disadvantages',
			link : '#/topic6'
		},
	];
	
	
	
	/*
	 * Topic 1 controller
	 */
	app.controller('topic1Controller', ['$scope', function ($scope) {
		$scope.myName = "Newbie";	
		$scope.needExplanation = false;
		$scope.showImages = function () {
			$scope.needExplanation = true;
		}
	}]);


	/*
	 * Topic 2 controller
	 */
	app.controller("topic2Controller", function () {
	   this.msg = "Hi! incaendo Team i am angularJS";
	
   });
	 
	 
	 /*
	  * topic 3 controller
	  */
	 app.controller('topic3Controller',["$scope", function ($scope) {
		 $scope.msg = "Hello again incaendo team!. Lets learn something new. :)";
		 $scope.employees = employees;
	 }]);
 
 
	 /*
	  * Topic 4 controller
	  */
 
   app.controller('topic4Controller', ["$scope","$http", "topic4Service", function ($scope, $http, topic4Service) {
			 $http.get("http://graph.facebook.com/youtube")
							 .success(function (response) {$scope.result = response;});
			 $scope.msg = topic4Service;
	 }]);
 
 
	 /*
	  * Topic 4 services
	  */
	 app.factory('topic4Service', ["$http", function ($http) {
			 return "Hello";
			 		 
	 }]);
	 
	 /*
	  * topic 5 controller
	  */
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

