var Todo = angular.module("TodoApp", []).
  controller("TodoCtrl", [function(){
  var self = this;
  self.tasks = [];
  self.addTask = function(){
    self.tasks.push({title: self.newTask, done: false});
    self.newTask = undefined;
  };
  self.removeTask = function(taskName){
    self.tasks = self.tasks.filter(function(task){
      return task.title !== taskName;
    });
  };
  self.clearAllTasks = function() {
    self.tasks = []
  };

  self.updateFilter = function (query) {
    if(query === "all"){
      query = ''
    };
    self.search = {done: query};
    console.log(self.search)
  };
  self.isApplicable = function(task){
    console.log(task);
    return task.done;
  };
}]);
