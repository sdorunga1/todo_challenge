var Todo = angular.module("TodoApp", []).
  controller("TodoCtrl", [function(){
  var self = this;
  self.tasks = [];
  self.addTask = function(){
    self.tasks.push({title: self.newTask});
    self.newTask = undefined;
  };
}]);
