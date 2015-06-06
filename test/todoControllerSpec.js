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
    expect(ctrl.tasks).toEqual([{title: "New Task"}]);
  });
});
