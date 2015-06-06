describe("Controller: TodoCtrl", function(){
  var ctrl;

  beforeEach(function(){
    module("TodoApp");
  });

  beforeEach(inject(function($controller){
    ctrl = $controller("TodoCtrl")
  }));

  it("starts with no tasks", function(){
    expect(ctrl.tasks).toEqual([]);
  });

  it("when adding a task", function(){
    ctrl.newTask = "New Task";
    ctrl.addTask();
    expect(ctrl.tasks).toEqual([{title: "New Task", done: false}]);
  });

  it("when deleting a task", function(){
    ctrl.tasks = [{title: "Task 1"}, {title: "Task 2"}];
    ctrl.removeTask("Task 1");
    expect(ctrl.tasks).toEqual([{title: "Task 2"}]);
  });

  it("when clearing all tasks", function() {
    ctrl.tasks = [{title: "Task 1"}, {title: "Task 2"}];
    ctrl.clearAllTasks()
    expect(ctrl.tasks).toBeEmpty
  });

  it("when filtering all sets the search to the query string", function() {
    ctrl.tasks = [
      {title: "Task 1", done: true},
      {title: "Task 2", done: false}
    ];
    ctrl.filter('all');
    expect(ctrl.search).toEqual({done: ''})
  });
});
