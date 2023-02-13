
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
//[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string //LOOK UP HOW TO CREATE A LICENSE BADGE  // USE INQUIRER TO GIVE OPTIONS 
function renderLicenseBadge(license) {
  if (license === null) {
    return []
  } else {
    if (license === 'MIT') {
      markdownLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'GPLv3') {
      markdownLicense = `[![GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if (license === 'Apache') {
      markdownLicense = `[![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
      return `License: ${license}`
    }
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null) {
    return []
  } else {
    if (license === 'MIT') {
      markdownLicense = `[![License: MIT](https://opensource.org/licenses/MIT)]`
    } else if (license === 'GPLv3') {
      markdownLicense = `[![GPL v3](https://www.gnu.org/licenses/gpl-3.0)]`
    } else if (license === 'Apache') {
      markdownLicense = `[![Apache](https://opensource.org/licenses/Apache-2.0)]`
      return `License: ${license}`
    }
  }
}

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