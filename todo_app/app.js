angular.module('todo', []).config(['$routeProvider', function($routeProvider){

$routeProvider
	.when('/todo', {templateUrl: 'todo.htm', controller: TodoCtrl})
	.when('/', {templateUrl: 'home.htm', controller: TodoCtrl});


}]);