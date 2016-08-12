app.factory('GetZen', ['$http', function($http){
  var ZenStuff = {}
  ZenStuff.getZenData = function(){
    return $http.get('https://api.github.com/zen')
  }
  return ZenStuff
}])

app.factory("firstService", function(){
  return{
    sayHi: function(){
      return "Hello!"
    },
    sayGoodbye: function(){
      return "Goodbye!"
    },
    getAllUsers: function(){
      //some AJAX call to our database to get all the users
    },
    addUser: function(user){
      //another AJAX call to our database to add a user
    }
  }
});

app.service("mathService", function(){
  return{
    add: function(a, b){
      return a+b
    },
    subtract: function(a, b){
      return a-b
    },
    multiply: function(a,b){
      return a*b
    },
    divide: function(a,b){
      return a/b
    },
    power: function(base,exp){
      return Math.pow(base,exp)
    }
  }
})

app.service("toDoService", function(){
  var toDos = []
  return {
    getToDos: function(){
      return toDos
    },
    addToDo: function(input){
      input.editFormShowing = false;
      toDos.push(input)
      return toDos
    },
    editToDo: function(index, todo){
      toDos[index].task = todo.task
      toDos[index].editFormShowing = false
    },
    deleteToDo:function(index){
      toDos.splice(index, 1)
    }
  }
})
