
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string //LOOK UP HOW TO CREATE A LICENSE BADGE  // USE INQUIRER TO GIVE OPTIONS 
function renderLicenseBadge(license) { 
  // if none return empty string else {return line 8}
return `I AM THE LICENSE ${license}` // THIS IS WHERE I ACCESS 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README - FIGURE OUT QUSTIONS AND ADD THEM HERE
function generateMarkdown(data) {
  return `# ${data.title}
# ${renderLicenseBadge(data.markdownLicense)}
`;
}

module.exports = generateMarkdown;
