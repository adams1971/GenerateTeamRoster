const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeeArray = [];

//I enter the team manager’s name, employee ID, email address, and office number
async function position(){
  const position = await inquirer.prompt([
    {
      type: "list", 
      name: "position",
      message: "choose position",
      choices: ["Manager", "Engineer", "Intern", "No, I'm Finished"],
    }
  ])
  return position.position
}
async function main(){
  //decide employee role
  const employeeList = [] 
  
  //show question according to role
  while(true){
  const role = await position()
  if(role === "Manager"){
    const info = await managerInfo()
    employeeList.push(info)
  }
  else if(role === "Engineer"){
    engineerInfo()
  }
  else if(role === "Intern"){
    internInfo()
  }
  else{
    const managerCardHtml = ManagerTemplateCard (employeeList)
    HTMLTemplate(managerCardHtml)
    break
  }
}
//TODO create an array of questions for manager
async function managerInfo(){
  const input = await inquirer.prompt([
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
      name: "emailAddress",
      message: "What is the managers email address?",
    },

    {
      type: "input",
      name: "officeNumber",
      message: "What is the office phone number?",
    },

  ])
  return new Manager (input.managerName, input.managerID, input.emailAddress, input.officeNumber) 
}
}

function engineerInfo(){
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

  ])
}

//TODO create an array of questions for intern
function internInfo(){
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Please enter the interns name",
    },

    {
      type: "input",
      name: "managerID",
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

  ])
}

//add menu with the option to add an engineer or an intern or to finish building my team
function manager(){
  promptmanagerInfo().then(function(answers){
      const manager = new Manager(answers.managerName, answers.managerID, answers.emailAddress, answers.officeNumber);
      employeeArray.push(manager);
      if(answers.role === "Engineer") {
        engineer();
      }
      else if(answers.role === "Manager") {
        manager();
      }
      else if(answers.role === "Intern") {
        intern();
      }
      else if(answers.role === "No, I'm Finished") {
        HTMLTemplate(ManagerTemplateCard(employeeArray), EngineerTemplateCard(employeeArray), InternTemplateCard(employeeArray))
      }
    })
}

  // .then(() => {
  //   //creating engineer
  //   teamSelection()
  //     .then((answers) => answers)
  //     .then((answers) => {
  //       if (answers[0] === "Engineer") {
          //do something
  
function engineer(){
  promptEngineerInfo().then(function(answers){
      const engineer = new Enginner (answers.engineerName, answers.engineerID, answers.engineerAddress, answers.engineerGitHub);
      employeeArray.push(engineer);
      if(answers.role === "Engineer") {
        engineer();
      }
      else if(answers.role === "Manager") {
        manager();
      }
      else if(answers.role === "Intern") {
        intern();
      }
      else if(answers.role === "No, I'm Finished") {
        HTMLTemplate(ManagerTemplateCard(employeeArray), EngineerTemplateCard(employeeArray), InternTemplateCard(employeeArray))
      }
    })
}

    // } else if (answers[0] === "Intern") {
    //do something
function intern(){
  promptInternInfo().then(function(answers){
      const intern = new Intern (answers.internName, answers.internID, answers.internAddress, answers.school);
      employeeArray.push(engineer);
      if(answers.role === "Engineer") {
        engineer();
      }
      else if(answers.role === "Manager") {
        manager();
      }
      else if(answers.role === "Intern") {
        intern();
      }
      else if(answers.role === "No, I'm Finished") {
        HTMLTemplate(ManagerTemplateCard(employeeArray), EngineerTemplateCard(employeeArray), InternTemplateCard(employeeArray))
      }
    })
}

        //finish

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
main()

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
                <li class="list-group-item">GitHub: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
      </div>
    </div>`
  );
  return makeManagerCard
}

function EngineerTemplateCard(array){
  EngineerObject = array.filter((employee) => (employee.getRole() === "Manager"))
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
                <li class="list-group-item">GitHub: ${intern.getGithub()}</li>
            </ul>
        </div>
      </div>
    </div>`
  );
  return makeInternCard
}

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


