describe("To do app", function() {
  it('lets the user add a task to the list', function() {
    browser.get('http://localhost:8080/index.html');
    element(by.model("newTask")).sendKeys("First new task");
    element(by.id("addTask")).click();
    expect(element.all(by.binding("task")).first()).toEqual("First new task");
  });
});
