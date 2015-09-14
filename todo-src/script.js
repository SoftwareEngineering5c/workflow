// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
    $scope.todos = [
    {
        text:"Learn Angular",
        done: false
    }, {
        text: "Learn node",
        done: false
    }];

    $scope.newItem = "";
    $scope.currentEditIndex;
    $scope.submitText = "";
    $scope.markAll = false;

    $scope.value= 'Today';
  
    $scope.newValue = function(value) {
        console.log(value);
    }

    $scope.addItem = function() {
        //console.log("in add");
        console.log($scope.value);
        if ($scope.newItem !== "") {
            if($scope.value !== undefined){
            //console.log(opt);
            $scope.newItem.text = $scope.value + ": " + $scope.newItem.text;
            $scope.newItem.done = false;
            $scope.todos.push($scope.newItem);
            $scope.newItem = "";
        }
        else {
            //console.log(opt);
            $scope.newItem.text = $scope.newItem.text;
            $scope.newItem.done = false;
            $scope.todos.push($scope.newItem);
            $scope.newItem = "";

        }
        }
    }

    $scope.deleteItem = function(item) {
        console.log("in delete");
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);
    }

    $scope.editItem = function(item) {
        console.log("Editing current index");
        $scope.currentEditIndex = $scope.todos.indexOf(item);
    }

    $scope.submitEdit = function(item, submitText) {
        var index = $scope.todos.indexOf(item);
        $scope.todos[index].text = submitText;
        $scope.currentEditIndex = -1;
        $scope.submitText = "";
    }
   /*Got code idea from http://jsfiddle.net/icoxfog417/nLC3g/ this will delete all the ones checked off*/
    $scope.deleteAll = function() {
        console.log("Deleting all");
         var original = $scope.todos;
        $scope.todos = [];
        angular.forEach(original, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    })
  }
    

    $scope.checkIndex = function(item) {
        return $scope.currentEditIndex == $scope.todos.indexOf(item);
    }

    /*http://jsfiddle.net/icoxfog417/nLC3g this will count the remaining non checked items*/
    $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    })
    return count;
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
