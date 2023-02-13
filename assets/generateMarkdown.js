// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "MIT License") {
    return "https://img.shields.io/badge/license-MIT-brightgreen";
  } else if (license.license = "Apache License 2.0") {
    return "https://img.shields.io/badge/license-Apache--2.0-brightgreen";
  } else if (license.license = "GNU General Pulic License v3.0"){
    return  "https://img.shields.io/badge/license-GNU%20v3.0-brightgreen";
  } else {
    ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge();
  return `# ${data.title} \n \n ${data.description} \n \n # Installation Instructions \n ${data.install} \n \n ${data.use} \n \n ${data.collab} \n \n ${data.test} \n \n # Questions? \n ${data.quest} \n \n # License \n ${data.license} \n`;
  ;
}

module.exports = generateMarkdown;

// module exports allows export from one file to another

// ` = template literal : literal translation, no JS reading 
// $ = template expression to access dynamically JS