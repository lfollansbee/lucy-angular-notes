var app = angular.module("firstApp",[]);

app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
})

app.controller("ExercisesController", function($scope){
  $scope.FavColor = "blue";
  $scope.secondsInACentury = 60*60*24*365*100;
  $scope.rightNow = Date.now();
})

app.controller("MadLib", ['$scope', function($scope) {
    $scope.boyName = "";
    $scope.adj = "";
    $scope.pnoun1 = "";
    $scope.pnoun2 = "";
    $scope.insect = "";
    $scope.pnoun3 = "";
    $scope.verbS = "";

    $scope.generate = function(boyName, adj, pnoun1, pnoun2, insect, pnoun3, verbS) {
        $scope.customBoyName = boyName;
        $scope.customAdj = adj;
        $scope.customPnoun1 = pnoun1;
        $scope.customPnoun2 = pnoun2;
        $scope.customInsect = insect;
        $scope.customPnoun3 = pnoun3;
        $scope.customVerbS = verbS;
    };
}]);

app.controller('MainController', function($scope) {
  $scope.view = {}
  $scope.view.number = 42
});

app.controller('MyBuggyController', function($scope) {
  $scope.message = {}
});

app.controller('SectionEight1', function($scope) {
  $scope.view = {};
  $scope.view.number = 5;

  $scope.pickRandomNumber = function() {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  }
});

app.controller('SectionEight2', function($scope) {
  $scope.word = ""

  $scope.reverseWord = function(word) {
    $scope.word = word.split('').reverse().join('');
  }
});

app.controller('PingPong', function($scope){
  $scope.gameStart = {
    player1: 0,
    player2: 0,
    points: 0
  };
  $scope.game = angular.copy($scope.gameStart);
  $scope.addPoint = function(player){
    if(player === 1){
      $scope.game.player1 ++
      $scope.game.points ++
    }else{
      $scope.game.player2 ++
      $scope.game.points ++
    }
  };
  $scope.reset = function(){
    $scope.game = angular.copy($scope.gameStart);
  }
})

app.controller('MouseEnter', function($scope){
  $scope.view = {};
  $scope.view.enterCount = 0;
})

app.controller('FavForm', function($scope){
  $scope.favoriteForm = {};
  $scope.submitFav = function() {
    var favPi = parseFloat($scope.favoriteForm.favoritePie);
    // Special output if the favorite pie is a certain number
    if (!isNaN(favPi) && favPi >= 3.14 && favPi <= 3.142) {
      $scope.favoriteForm.favoritePie = "\u03A0";
    }
    console.log("Your favorite pie is: ", $scope.favoriteForm.favoritePie);
  };
})

app.controller('ContactsApp', function($scope){
  $scope.people = [
    {
      name: 'Harry',
      email: 'harry@hogwarts.com',
      phone: '731-999-3333'
    },
    {
      name: 'Arya',
      email: 'arya@GoT.com',
      phone: '731-999-4433'
    },
    {
      name: 'Ron',
      email: 'ron@hogwarts.com',
      phone: '731-777-4433'
    }
  ]
  $scope.addContact = function(){
    $scope.people.push($scope.contact)
    $scope.contact = {}
  }

})
