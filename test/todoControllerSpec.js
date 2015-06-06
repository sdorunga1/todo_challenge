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
    ctrl.addTask("New Task");
    expect(ctrl.tasks).toEqual([{title: "New Task"}]);
  });
});
