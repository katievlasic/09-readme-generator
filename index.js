const fs = require("fs"); // fs = file system
const inquirer = require("inquirer"); // module package
const generateMarkdown = require("./assets/generateMarkdown");
const renderLicenseBadge = require("./assets/generateMarkdown");
const renderLicenseLink = require("./assets/generateMarkdown");
const renderLicenseSection = require("./assets/generateMarkdown");

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log("Sucess!")
  );
};

// Function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description of the project:",
      },
      {
        type: "input",
        name: "install",
        message: "What is required for install to run this application (ex. npm i ...)?",
      },
      {
        type: "input",
        name: "use",
        message: "Please describe how this application will be used (or the intent of use):",
      },
      {
        type: "list",
        name: "license",
        message: "What license (if any) are you using?",
        choices: [
          "none",
          "Apache License 2.0",
          "GNU General Pulic License v3.0",
          "MIT License",
        ],
      },
      {
        type: "input",
        name: "collab",
        message:
          "Please enter any contributor Github usernames:",
      },
      {
        type: "input",
        name: "test",
        message: "What are your testing instructions on how to run this application?",
      },
      {
        type: "input",
        name: "quest",
        message: "Please use the following contact and/or reference information for questions regarding this application:",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const data = generateMarkdown(answers);
      writeToFile('./dist/README.md', data);
    })
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
}

// Function call to initialize app
init();

// npm init -y
// npm i inquirer@8.2.4

// TODO: Include packages needed for this application



// answers object from 2/7/23
// {
//   title: 'Tutor Session',
//   description: 'Today is tuesday!',
//   toc: [ 'Description', 'License', 'Contributors' ],
//   install: "Ask user what their install instructions are for their app (ex. Please install npm i '' jlkfwlkenf)",
//   use: 'Describe how this app is used (intent of use).',
//   license: 'none',
//   collab: 'No',
//   test: 'Will cover this next. Ask the user what testing instructions are build in and how to run? (ex. npm run test etc.)',
//   quest: "Standard practice to include a questions header and how to include how to contact owner for any questions. Reference docs for any questions! Include user's email address and user name (2 questions)"