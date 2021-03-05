const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeeArray = [];

//I enter the team manager’s name, employee ID, email address, and office number

//TODO create an array of questions for manager
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
      message: "What is the managers email address?",
    },

    {
      type: "input",
      name: "officeNumber",
      message: "What is the office phone number?",
    },

    {
      type: "list",
      name: "role",
      message: "Would you like to add another team member?",
      choices: ["Manager", "Engineer", "Intern", "No, I'm Finished"],
    },
  ]);

// const teamSelection = () =>
//   inquirer.prompt([
//     {
//       type: "checkbox",
//       name: "menuOption",
//       message: "Select Team Member ",
//       choices: ["Engineer", "Intern", "Finish Building Team"],
//     },
//   ]);
//   THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

//TODO create an array of questions for engineer
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
      message: "What is the engineers email address?",
    },

    {
      type: "input",
      name: "engineerGitHub",
      message: "What is your github userName?",
    },

    {
      type: "list",
      name: "role",
      message: "Would you like to add another team member?",
      choices: ["Manager", "Engineer", "Intern", "No, I'm Finished"],
    },
  ]);

//TODO create an array of questions for intern
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
      message: "What is the managers email address?",
    },

    {
      type: "input",
      name: "officeNumber",
      message: "What is the office phone number?",
    },

    {
      type: "list",
      name: "role",
      message: "Would you like to add another team member?",
      choices: ["Manager", "Engineer", "Intern", "No, I'm Finished"],
    },
  ]);

//add menu with the option to add an engineer or an intern or to finish building my team
function manager() {
  managerInfo()
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.emailAddress,
        answers.officeNumber
      );
      console.log(manager.getRole());
      employeeArray.push(manager);
      if(answers.role === "Intern") {
        intern();
      }
      else if(answers.role === "Manager") {
        manager();
      }
      else if(answers.role === "Engineer") {
        engineer();
      }
      else if(answers.role === "No, I'm Finished") {
        HTMLTemplate(ManagerTemplate(employeeArray), EngineerTemplate(employeeArray), InternTemplate(employeeArray))
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
  
function engineer() {
  engineerInfo()
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerID,
        answers.engineerEmailAddress,
        answers.engineerGitHub
      );
      employeeArray.push(engineer);
      if(answers.role === "Intern") {
        internInfo();
      }
      else if(answers.role === "Manager") {
        managerInfo();
      }
      else if(answers.role === "Engineer") {
        engineerInfo();
      }
      else if(answers.role === "No, I'm Finished") {
        HTMLTemplate(ManagerTemplate(employeeArray), EngineerTemplate(employeeArray), InternTemplate(employeeArray))
      }
    })
}

    // } else if (answers[0] === "Intern") {
    //do something
function intern() { 
  internInfo()
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internID,
        answers.engineerEmailAddress,
        answers.internGetSchool
      );
      employeeArray.push(intern);
      if(answers.role === "Intern") {
        internInfo();
      }
      else if(answers.role === "Manager") {
        managerInfo();
      }
      else if(answers.role === "Engineer") {
        engineerInfo();
      }
      else if(answers.role === "No, I'm Finished") {
        HTMLTemplate(ManagerTemplate(employeeArray), EngineerTemplate(employeeArray), InternTemplate(employeeArray))
      }
    })
}
        //finish

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
