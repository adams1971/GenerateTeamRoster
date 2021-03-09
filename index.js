const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const htmlPath = path.resolve(__dirname, "html", "team.html");

const employeeArray = [];

function createTeam() {
  console.log("Let's build our team today!");

  function addManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the managers name",
      },
  
      {
        type: "input",
        name: "managerID",
        message: "What is the managers ID number?",
      },
  
      {
        type: "input",
        name: "managerEmailAddress",
        message: "What is the managers email address?",
      },
  
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office phone number?",
      },
    ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmailAddress, answers.officeNumber);

      console.log(manager);

      employeeArray.push(manager);
      buildTeam();

    })
  }

  function buildTeam(){
    inquirer.prompt([
      {
        type:"list",
        name: "memberChoice",
        choices: ["engineer", "intern", "manager", "done"]
      }
    ]).then(userChoice => {
      console.log(userChoice)
      switch(userChoice.memberChoice) {
        case "engineer":
          addEngineer();
          break;
        case "intern":
          addIntern();
          break;
        case "manager":
          addManager();
          break;
        default:
          finalTeam();
      }
    });
  }
  function addEngineer(){
    console.log("i'm adding an engineer");
    inquirer.prompt([ 
      { 
        type: "input",
        name: "engineerName",
        message: "Please enter the engineers name",
      },
  
      {
        type: "input",
        name: "engineerID",
        message: "What is the engineers ID number?",
      },
  
      {
        type: "input",
        name: "engineerEmailAddress",
        message: "What is the engineers email address?",
      },
  
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is your github userName?",
      },
  
    ]).then(answers => {
      console.log(answers);
      const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmailAddress, answers.engineerGitHub);

      console.log(engineer);

      employeeArray.push(engineer);
      buildTeam();
    })
  }

  function addIntern(){
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the interns name",
      },
  
      {
        type: "input",
        name: "internID",
        message: "What is the interns ID number?",
      },
  
      {
        type: "input",
        name: "emailAddress",
        message: "What is the interns email address?",
      },
  
      {
        type: "input",
        name: "school",
        message: "What is the school the intern attended?",
      },
  
    ]).then(answers => {
      console.log(answers);
      const intern = new Intern(answers.internName, answers.internID, answers.emailAddress, answers.school);

      console.log(intern);

      employeeArray.push(intern);
      buildTeam();
    })
  }
  
  function finalTeam(){
    console.log("done");
  }
  

  buildTeam()



}

createTeam();