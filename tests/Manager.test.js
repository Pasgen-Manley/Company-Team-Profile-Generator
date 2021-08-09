const Manager = require("../lib/Manager");

function makeEmployee(
  name = "Jeff",
  id = "444",
  email = "example@gmail.com",
  office = 1
) {

  return new Manager(name, id, email, office);

};

describe("Test Manager class", () => {
  it('should return the officeNumber via getOfficeNumber() function', () => {
    const office = 1;
    const manager = makeEmployee("Jeff", 444, "example@gmail.com", office);
    expect(manager.getOfficeNumber()).toEqual(office);
  })

  it('should return role as manager via getRole()', () => {
    const role = 'Manager';
    const manager = makeEmployee();
    expect(manager.getRole()).toEqual(role);
  })
});