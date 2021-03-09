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
        name: "roleChoice", 
        choices: ["manager", "engineer", "intern", "done"]
      }
    ]).then(userChoice => {
      console.log(userChoice)
      switch(userChoice.roleChoice) { 
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
      HTMLTemplate(ManagerTemplateCard(employeeArray), EngineerTemplateCard(employeeArray), InternTemplateCard(employeeArray))
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
    console.log("we need an intern");
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
//added manager card template
function ManagerTemplateCard(array){
  console.log(array)
  ManagerObject = array.filter((employee) => (employee.getRole() === "Manager"))
  const makeManagerCard = ManagerObject.map(manager =>
    `<div class="col mb-4">
      <div class="card h-100">
        <div class="card-header">
            <h4>${manager.getRole()}<i class="fas fa-laptop"></i></h4>
            <h4>${manager.getName()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item">OfficeNumber: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
      </div>
    </div>`
  );
  return makeManagerCard
}

//added engineerTemplateCard
function EngineerTemplateCard(array){
  console.log(array)
  EngineerObject = array.filter((employee) => (employee.getRole() === "Engineer"))
  const makeEngineerCard = EngineerObject.map(engineer =>
    `<div class="col mb-4">
      <div class="card h-100">
        <div class="card-header">
            <h4>${engineer.getRole()}<i class="fas fa-laptop"></i></h4>
            <h4>${engineer.getName()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
            </ul>
        </div>
      </div>
    </div>`
  );
  return makeEngineerCard
}

//added internTemplateCard
function InternTemplateCard(array){
  InternObject = array.filter((employee) => (employee.getRole() === "Intern"))
  const makeInternCard = InternObject.map(intern =>
    `<div class="col mb-4">
      <div class="card h-100">
        <div class="card-header">
            <h4>${intern.getRole()}<i class="fas fa-laptop"></i></h4>
            <h4>${intern.getName()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: ${intern.getEmail()}</li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
      </div>
    </div>`
  );
  return makeInternCard
}

//added HTML template 
function HTMLTemplate(Manager, Engineer, Intern){
  fs.writeFile(`index.html`, 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
      <link rel="stylesheet" href="./style.css">
      <title>Team Roster</title>
  </head>
  
  <body>
      ${Manager} ${Engineer} ${Intern} 
  </body>
  </html>`, console.log)
}

createTeam();