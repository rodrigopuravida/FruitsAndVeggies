/* setup your angular app here */

var myApp = angular.module('FruitAndVeggies', []);

//myApp.config(function(){  });
myApp.run(function(){
  //debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);

});

myApp.controller('Separator', ['$scope', function($scope) {

  $scope.fruitsAndVeggies = fruit.concat(vegetables);
  $scope.fruits = [];
  $scope.veggies = [];

$scope.addToVeggie = function(idx) {
    $scope.veggies.push($scope.fruitsAndVeggies[idx]);
    console.log('Veggies ' +$scope.veggies);
    $scope.fruitsAndVeggies.splice(idx, 1);
    validateIfWin('veggies')
  }

  $scope.addToFruits = function(idx) {
    $scope.fruits.push($scope.fruitsAndVeggies[idx]);
    console.log('Fruits ' + $scope.fruits);
    $scope.fruitsAndVeggies.splice(idx, 1);
    validateIfWin('fruits')
  }

  $scope.fruitAddToFruitsAndVeggie = function(idx) {
    $scope.fruitsAndVeggies.push($scope.fruits[idx]);
    $scope.fruits.splice(idx, 1);
    console.log('fruitsAndVeggies ' + $scope.fruitsAndVeggies);
    console.log('Fruits ' + $scope.fruits);

  }

  $scope.veggieAddToFruitsAndVeggie = function(idx) {
    $scope.fruitsAndVeggies.push($scope.veggies[idx]);
    $scope.veggies.splice(idx, 1);
    console.log('fruitsAndVeggies ' + $scope.fruitsAndVeggies);
    console.log('Veggies ' +$scope.veggies);

  }


function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function validateIfWin(item) {
  if ($scope.fruitsAndVeggies.length !== 0) {
    console.log('Still items to sort');
    return;
  }
    // console.log(item);
    else if (item === 'fruits') {
      if($scope.fruits.sort().join(',')=== fruits.sort().join(',')){
        alert('You have won');
      }
        else alert('More work to be done');
      }

    else if (item === 'veggies') {
      if($scope.veggies.sort().join(',')=== vegetables.sort().join(',')){
        alert('You have won');
      }
        else alert('More work to be done');
      }

}

//calling shuffle function
shuffle($scope.fruitsAndVeggies);

}]);


