const Intern = require("../lib/Intern");

function makeEmployee(
  name = "Jeff",
  id = "444",
  email = "example@gmail.com",
  school = "coolSchool"
) {

  return new Intern(name, id, email, school);

};

describe("Test Intern class", () => {
  it('should return the Interns school name', () => {
    const school = 'coolSchool';
    const intern = makeEmployee("Jeff", 444, "example@gmail.com", school);
    expect(intern.getSchool()).toEqual(school);
  })

  it('should return role as Intern', () => {
    const role = 'Intern';
    const intern = makeEmployee();
    expect(intern.getRole()).toEqual(role);
  })
});