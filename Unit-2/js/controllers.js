app.controller('ZenController', function($scope, $http, GetZen) {
  GetZen.getZenData()
  .then(function(ZenStuff){
    // console.log(ZenStuff.data);
    // return ZenStuff
    $scope.zenData = ZenStuff.data
  })
});

app.controller('FirstController', function($scope, firstService){
  $scope.view={};
  $scope.view.greeting = firstService.sayHi();
  $scope.view.users = firstService.getAllUsers();
})

app.controller("Calculator", ["$scope", "mathService", function($scope, mathService){
  $scope.operations = Object.keys(mathService)
  $scope.calculation = "add"

  $scope.calculate = function(operation, a,b){
    $scope.value = mathService[operation](a,b)
    $scope.math = {}
  }
}])

app.controller("ToDo", ["$scope", "toDoService", function($scope, toDoService){

  $scope.toDos = toDoService.getToDos()

  $scope.toggleEditForm = function(todo){
    todo.editFormShowing = !todo.editFormShowing;
  }

  $scope.addToDo = function(newToDo){
    $scope.addToDoForm.$setPristine()
    toDoService.addToDo(newToDo);
    $scope.todo = {}
  }
  $scope.editToDo = function(idx, todo){
    toDoService.editToDo(idx, todo)
  }
  $scope.deleteToDo = function(idx){
    toDoService.deleteToDo(idx)
  }
}])
