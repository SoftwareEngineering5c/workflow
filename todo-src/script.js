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

    $scope.deleteAll = function() {
        console.log("Deleting all");
        $scope.todos.length = 0;
    }

    $scope.checkIndex = function(item) {
        return $scope.currentEditIndex == $scope.todos.indexOf(item);
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
