const fs = require('fs'); // fs = file system
const inquirer = require('inquirer'); // module package

inquirer
.prompt([
  {
    type: 'input',
          name: 'title',
          message: "What is the title of your project?",
        },
        {
      type: 'input',
      name: 'description',
      message: "Please enter a description of the project.",
  },
  {
      type: 'checkbox',
      name: 'tableOfContents',
      message: "Please enter a table of contents list.",
      choices: ['Description','License','Contributors'],
    },
    {
      type: 'input',
      message: "Installation?",
    },
    {
      type: 'input',
      message: "Usage?",
    },
    {
      type: 'list',
      name: 'license',
      message: "What license (if any) are you using?",
      choices: ['none','Apache LIcense 2.0','GNU General Pulic License v3.0','MIT License','BSD 2-Clause "Simplified" License',"BSD 3-Clause New or Revised License","Boost Software License 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU Affero General Public License v3.0","GNU General Public License v2.0","GNU Lesser General Public License v2.1","Mozilla Public License 2.0", "The Unlicense","other"],
    },
    {
      type: 'input',
      message: "Are there any contributors on this project? If so, please enter their usernames.",
    },
    {
      type: 'input',
      message: "Tests?",
    },
  {
      type: 'input',
      message: "Questions?"
  },
  ]
  )
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile("README2.md", `${response.name}`,
    (err) =>
    err ? console.log(err) : console.log("Sucess!")
    )
}
writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// npm init -y
// npm i inquirer@8.2.4

// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input