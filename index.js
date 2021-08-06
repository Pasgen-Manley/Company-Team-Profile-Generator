const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const util = require('util');
const fs = require('fs');

const writeFileAsync = util.promisify(fs.writeFile);
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

const teamMemberArr = [];

// Introduction to questions
const introQuestion = {
  type: 'list',
  message: `
  Welcome!
  This application will allow you to build a webpage that displays the profiles of your team members.
  You will be prompted to to submit information about your team, starting with the project manager, then have a choice of adding any engineers or interns,
  who will be working in your team.
  
  Continue to application?`,
  choices: ['Yes', 'No'],
  name: 'introduction',
};

// Questions asked to the manager
const managerQuestions = [
  {
    type: 'input',
    message: 'What is the project Managers name?',
    name: 'managerName',
  },
  {
    type: 'input',
    message: 'What is the Managers employee ID number?',
    name: 'managerID',
    validate: managerNum => {
      numbers = /^[0-9]+$/.test(managerNum);
      if (numbers) {
        return true;
      } else {
        console.log('Please enter in a valid ID number');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Please enter in Manager email.',
    name: 'managerEmail',
    validate: emailInput => {
      email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
      if (email) {
        return true;
      } else {
        console.log('Please enter a valid email address.');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What is the Managers office number?',
    name: 'officeNumber',
  },
];

// Question to see if team members are to be added after the manager
const endManagerQuestions = {
	type: 'list',
	message: 'Would you like to add another team member to this team? Select Yes to add an Engineer or Intern, or select No if no additional team members are to be added.',
	choices: ['Yes', 'No'],
	name: 'addTeam',
};

// Question to pick either an Engineer or an intern
const teamMemberRolePick = {
	type: 'list',
	message: 'Is this team member an Engineer or an Intern?',
	choices: ['Engineer', 'Intern'],
	name: 'teamMemberRoleType',
};

// Questions asked about the Engineer
const engineerQuestions = [
  {
    type: 'input',
    message: "What is the name of the Engineer?",
    name: 'internName',
  },
  {
    type: 'input',
    message: "What is the Engineer's employee ID number?",
    name: 'EngineerID',
    validate: engineerNum => {
      numbers = /^[0-9]+$/.test(engineerNum);
      if (numbers) {
        return true;
      } else {
        console.log('Please enter in a valid ID number');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "Please enter in Engineer's email address.",
    name: 'engineerEmail',
    validate: emailInput => {
      email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
      if (email) {
        return true;
      } else {
        console.log('Please enter a valid email address.');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "Please enter Engineer's GitHub profile name",
    name: 'GitHubName',
  },
  {
    type: 'input',
    message: "Please enter Engineer's GitHub address.",
    name: 'GitHubAddress',
  },
];

// Questions asked about the Intern
const engineerQuestions = [
  {
    type: 'input',
    message: "What is the Intern's name?",
    name: 'engineerName',
  },
  {
    type: 'input',
    message: "What is the Intern's employee ID number?",
    name: 'internID',
    validate: internNum => {
      numbers = /^[0-9]+$/.test(internNum);
      if (numbers) {
        return true;
      } else {
        console.log('Please enter in a valid ID number');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "Please enter in Intern's email address.",
    name: 'internEmail',
    validate: emailInput => {
      email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
      if (email) {
        return true;
      } else {
        console.log('Please enter a valid email address.');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "What it the name of the Intern's school?",
    name: 'internSchool',
  },
];