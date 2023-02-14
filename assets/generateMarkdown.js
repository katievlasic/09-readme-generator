// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "MIT License") {
    return `[MIT License]("https://img.shields.io/badge/license-MIT-brightgreen")`;
  } else if (license = "Apache License 2.0") {
    return `[Apache License 2.0](https://img.shields.io/badge/license-Apache--2.0-brightgreen")`;
  } else if (license = "GNU General Pulic License v3.0"){
    return  `[Apache License 2.0](https://img.shields.io/badge/license-GNU%20v3.0-brightgreen")`;
  } else {
    ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = "MIT License") {
    return ``;
  } else if (license = "Apache License 2.0") {
    return ``;
  } else if (license = "GNU General Pulic License v3.0"){
    return  ``;
  } else {
    ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Apache 2.0 "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const license = `${data.license}`
 renderLicenseBadge(license);
 console.log(data);
return `# ${data.title} \n \n ## Description \n ${data.description} \n \n ## Installation \n ${data.install} \n \n ## Usage \n ${data.use} \n \n ## Credits \n ${data.collab} \n \n ## Tests \n ${data.test} \n \n ## Questions? \n ${data.quest} \n \n ## License \n ${data.license} \n`;

};

// module exports allows export from one file to another
module.exports = generateMarkdown;
//module.exports = renderLicenseBadge;

// ` = template literal : literal translation, no JS reading 
// $ = template expression to access dynamically JS