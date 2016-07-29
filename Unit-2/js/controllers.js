app.controller('ZenController', function($scope, $http, GetZen) {
  GetZen.getZenData()
  .then(function(ZenStuff){
    // console.log(ZenStuff.data);
    // return ZenStuff
    $scope.zenData = ZenStuff.data
  })

});
