"use strict";

app.controller("TaskController", function($scope,FURL, $firebaseArray){
    var ref = new Firebase(FURL);
    $scope.tasks = $firebaseArray(ref.child("tasks"));

    $scope.postTask = function(task){
        $scope.tasks.$add(task);
    };
});
