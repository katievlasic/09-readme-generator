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
      name: 'toc',
      message: "Please enter a table of contents list.",
      choices: ['Description','License','Contributors'],
    },
    {
      type: 'input',
      name: 'install',
      message: "Installation?",
    },
    {
      type: 'input',
      name: 'use',
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
      name: 'collab',
      message: "Are there any contributors on this project? If so, please enter their usernames.",
    },
    {
      type: 'input',
      name: 'test',
      message: "Tests?",
    },
  {
      type: 'input',
      name: 'quest',
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
      console.log("no go prompt")
    } else {
      // Something else went wrong
      console.log("uh oh");
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

// fs to append to the file line break using '\n' 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// npm init -y
// npm i inquirer@8.2.4

// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input