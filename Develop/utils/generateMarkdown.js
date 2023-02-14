// TODO: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string //LOOK UP HOW TO CREATE A LICENSE BADGE  // USE INQUIRER TO GIVE OPTIONS 
function renderLicenseBadge(license) {
  let markdownLicenseBadge = ""
  if (license === 'none') {
    return markdownLicenseBadge;
  } else {
    if (license === 'MIT') {
      markdownLicenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'GPLv3') {
      markdownLicenseBadge = `![GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (license === 'Apache') {
      markdownLicenseBadge = `![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    }
  }
  return `License Badge: ${markdownLicenseBadge}`
};

// TODO: Create a function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
  let markdownLicenseLink = ""
  if (license === 'none') {
    return markdownLicenseLink;
  } else {
    if (license === 'MIT') {
      renderLicenseLink = `[License: MIT](https://opensource.org/licenses/MIT)`
    } else if (license === 'GPLv3') {
      renderLicenseLink = `[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'Apache') {
      renderLicenseLink = `[Apache](https://opensource.org/licenses/Apache-2.0)`
    }
  }
  return `License Link: ${renderLicenseLink}`
}

// TODO: Create a function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === 'none') {
    return "";
  } else {
    // HOW DO I ADD THE LICENSE SECTION??
  }
}

// This generates the markdown for README
function generateMarkdown(data) {
  return `${data.title}
          ${renderLicenseBadge(data.markdownLicense)}
          
          ## Description: 
          ${data.description}
  ## Table of Contents
  [Title](##-${data.title})
  [Description](##-description)
  [Installation Instructions](##-installation)
  [Usage Information](##-usage)
  [License](##-license)
  [Contributors](##-contributors)
  [Test Information](##-tests)
  [Questions](##-questions)
          
          ## Installation: 
          ${data.installation}
          
          ## Usage: 
          ${data.usage}
          
          ## Contributors: 
          ${data.contributors}

          ## Tests: 
          ${data.test}

          ## License: 
          ${renderLicenseSection(data.markdownLicense)}
          ${renderLicenseLink(data.markdownLicense)}
         
          ## Questions
          Find me on GitHub here: ${data.githubUsername}
          Contact me via email here: ${data.emailAddress}

  `;
}

module.exports = generateMarkdown;