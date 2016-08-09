app.controller('ZenController', function($scope, $http, GetZen) {
  GetZen.getZenData()
  .then(function(ZenStuff){
    // console.log(ZenStuff.data);
    // return ZenStuff
    $scope.zenData = ZenStuff.data
  })
});

app.controller('FirstControler', function($scope, firstService){
  $scope.view={};
  $scope.view.greeting = firstService.sayHi();
  $scope.view.users = firstService.getAllUsers();
})


app.controller("Calculator", ["$scope", "mathService", function($scope, mathService){

  $scope.operations = Object.keys(mathService)
  $scope.calculation = "add"

  // these are all binary operations, so we only need two parameters
  $scope.calculate = function(operation, a,b){
    $scope.value = mathService[operation](a,b)
    $scope.math = {}
  }
}])
