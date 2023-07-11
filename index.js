const inquirer = require('inquirer');
const Engineer = require('./Assets/Engineer');
const Intern = require('./Assets/Intern');
const Manager = require('./Assets/Manager');
const employees = [];

const addMenu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        choices: ['engineer', 'intern', 'manager'],
        message: 'Select Employee role:',
      },
    ])
    .then((inputs) => {
      switch (inputs.role) {
        case 'engineer':
          addEngineer();
          break;
        case 'intern':
          addIntern();
          break;
        case 'manager':
          addManager();
          break;
        default:
          break;
      }
    });
};

function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter Engineer's Name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter Engineer's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter Engineer's email:",
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter Engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      addMenu();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter Intern's Name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter Intern's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter Intern's email:",
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter School name:',
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employees.push(intern);
      addMenu();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter Manager Name:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter Manager ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Manager email:',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Manager Office Number:',
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employees.push(manager);
      addMenu();
    });
}

addMenu();


