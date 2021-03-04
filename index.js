const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const fs = require("fs");
const employeeArray =[]
//I enter the team manager’s name, employee ID, email address, and office number
//I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//TODO create and array of questions
const managerInfo = () =>
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
      name: "emailAddress",
      message: "What is the managers email addres?",
    },

    {
      type: "input",
      name: "officeNumber",
      message: "What is the office phone number?",
    },

  ]);

  const teamSelection = () =>
inquirer.prompt([
    {
      type: "checkbox",
      name: "menuOption",
      message: "Select Team Member ",
      choices: ["Engineer", "Intern", "Finish Building Team"] 
    },

  ]);
//   THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  const engineerInfo = () =>
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
      message: "What is the engineers email addres?",
    },

    {
      type: "input",
      name: "engineerGitHub",
      message: "What is your github userNmane?",
    },

  ]);

  const internInfo = () =>
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
      name: "emailAddress",
      message: "What is the managers email addres?",
    },

    {
      type: "input",
      name: "officeNumber",
      message: "What is the office phone number?",
    },

  ]);
  //I am presented with a menu with the option to add an engineer or an intern or to finish building my team

managerInfo()
  .then(answers => {
    const manager= new Manager(answers.managerName, answers.managerID, answers.emailAddress, answers.officeNumber);
    console.log(manager.getRole());
    employeeArray.push(manager)
  }).then(() =>{
      
  //creating engineer 
  teamSelection()
    .then(answers => answers)
    .then(answers => {
        if(answers[0] === "Engineer") {
            //do somethinhg
            engineerInfo().then(answers => {
                const engineer= new Engineer (answers.engineerName, answers.engineerID, answers.engineerEmailAddress, answers.engineerGitHub)
                employeeArray.push(engineer)
            })
        }
        else if (answers[0] === "Intern") {
             //do something to do the same thing as engineer but intern
        }
        else {}
            //finish
    })
})


    
    // WHEN I select the intern option
    // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    // WHEN I decide to finish building my team
    // THEN I exit the application, and the HTML is generated