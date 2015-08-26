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





}]);


