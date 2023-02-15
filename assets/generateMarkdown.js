function generateMarkdown(data) {
  // License badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (license === "MIT License") {
      return `![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)`;
    } else if (license === "Apache License 2.0") {
      return `![Apache License 2.0](https://img.shields.io/badge/license-Apache--2.0-brightgreen")`;
    } else if (license === "GNU General Pulic License v3.0") {
      return `![GNU License](https://img.shields.io/badge/license-GNU%20v3.0-brightgreen")`;
    } else {
      return ``;
    }
  }

  // License link. If no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT License") {
      return `[MIT License]("https://en.wikipedia.org/wiki/MIT_License")`;
    } else if (license === "Apache License 2.0") {
      return `[Apache License]("https://www.apache.org/licenses/")`;
    } else if (license === "GNU General Pulic License v3.0") {
      return `[GNU License]("https://www.gnu.org/licenses/licenses.en.html")`;
    } else {
      return ``;
    }
  }

  // License section of README. If no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "MIT License") {
      return `"A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."`;
    } else if (license === "Apache License 2.0") {
      return `"A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."`;
    } else if (license === "GNU General Pulic License v3.0") {
      return `"The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements."`;
    } else {
      return ``;
    }
  }

  // Generate .md for README
  const license = `${data.license}`;
  return `# ${data.title} \n \n ## Description \n ${
    data.description
  } \n \n ${renderLicenseBadge(
    license
  )} \n \n ## Table of Contents \n \n * [Installation](#installation) \n \n * [Usage](#usage) \n \n * [Contributing](#contributing) \n \n * [License](#license) \n \n ## Installation \n ${
    data.install
  } \n \n ## Usage \n ${data.use} \n \n ## Contributing \n ${
    data.collab
  } \n \n ## Tests \n ${data.test} \n \n ## Questions? \n ${
    data.quest
  } \n \n ## License \n ${data.license} \n \n ${renderLicenseLink(
    license
  )} \n \n ${renderLicenseSection(license)}`;
}

// module exports allows export from one file to another
module.exports = generateMarkdown;

// ` = template literal : literal translation, no JS reading
// $ = template expression to access dynamically JS
