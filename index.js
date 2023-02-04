// TODO: Include packages needed for this application
npm install inquirer

var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

inquirer.prompt(questions, answers) 
inquirer.registerPrompt(name, prompt)
inquirer.createPromptModule()

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
},
{
    type: 'input',
    message: "Please enter a description of the project.",
},
{
    type: 'input',
    message: "Please enter a table of contents list.",
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
    type: 'input',
    message: "What license (if any) are you using?",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
