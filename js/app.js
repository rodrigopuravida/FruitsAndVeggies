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



function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

//calling shuffle function
shuffle($scope.fruitsAndVeggies);

}]);


