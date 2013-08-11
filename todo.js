function TodoCtrl($scope) {
	$scope.totalTodos = 4;
	$scope.todos = [{text: 'AngularJS leren', done: false},{text: 'Git leren', done: true}, {text: 'Maven leren', done: false}];

	$scope.addToDo = function(){
		$scope.todos.push({text: $scope.formTodoText, done: false});
	}
	
	$scope.totalTodos = function(){
		return $scope.todos.length;
	}
	
	$scope.clearList = function(){
		$scope.todos =  _.filter($scope.todos,function(todo){return !todo.done;});
	}
}