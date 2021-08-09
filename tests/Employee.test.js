const Employee = require('../lib/Employee');

function makeEmployee(
  name = "Jeff",
  id = "444",
  email = "example@gmail.com",
) {

  return new Employee(name, id, email)

}

describe("Test Employee Class", () => {
  it("Employee should equal to the corresponding constructor argument", () => {
    const name = "Jeff";
    const id = "444"
    const email = "example@gmail.com"

    const employee = makeEmployee(name, id, email)

    expect(employee.name).toEqual(name)
    expect(employee.id).toEqual(id)
    expect(employee.email).toEqual(email)

  });

  it ("Employee should be returned when getRole() is called", () => {
    const role = "Employee"
    const employee = makeEmployee()

    expect(employee.getRole()).toEqual(role);
  })

  it ("Employee name should be returned when getName() is called", () => {
    const name = "Jeff"
    const employee = makeEmployee(name, 444, "example@gmail.com")

    expect(employee.getName()).toEqual(name);
  })

  it ("Employee Id should be returned when getId() is called", () => {
    const id = "444"
    const employee = makeEmployee("Jeff", id, "example@gmail.com")

    expect(employee.getId()).toEqual(id);
  })

  it ("Employee email should be returned when getEmail() is called", () => {
    const email = "example@gmail.com"
    const employee = makeEmployee("Jeff", 444, email)

    expect(employee.getEmail()).toEqual(email);
  })
});