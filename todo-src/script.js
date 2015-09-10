// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";

  $scope.value= 'Today';
  
  $scope.newValue = function(value) {
     console.log(value);
  }


  $scope.addItem = function(){
    console.log("in add");
    console.log($scope.value);
    if ($scope.newItem !== ""){
      //console.log(opt);
      $scope.newItem = $scope.value + ": " + $scope.newItem;
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
    
  
});



/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/