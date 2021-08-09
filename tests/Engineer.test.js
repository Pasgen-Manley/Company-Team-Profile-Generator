const Engineer = require("../lib/Engineer");

function makeEmployee(
  name = "Jeff",
  id = "444",
  email = "example@gmail.com",
  gitHub = "exampleGitHub"
) {

  return new Engineer(name, id, email, gitHub)

}


describe("Test Engineer class", () => {
  it('should return the Engineers GitHub account name', () => {
    const gitHub = 'exampleGitHub';
    const engineer = makeEmployee("Jeff", 444, "example@gmail.com", gitHub);
    expect(engineer.getGithub()).toEqual(gitHub);
  })

  it('should return role as Engineer', () => {
    const role = 'Engineer';
    const engineer = makeEmployee();
    expect(engineer.getRole()).toEqual(role);
  })
});