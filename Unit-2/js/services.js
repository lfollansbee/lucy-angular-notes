app.factory('GetZen', ['$http', function($http){
  var ZenStuff = {}
  ZenStuff.getZenData = function(){
    return $http.get('https://api.github.com/zen')
  }
  return ZenStuff
}])
