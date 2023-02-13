// TODO: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string //LOOK UP HOW TO CREATE A LICENSE BADGE  // USE INQUIRER TO GIVE OPTIONS 
function renderLicenseBadge(license) {
  if (license === 'none') {
    return "";
  } else {
    if (license === 'MIT') {
      markdownLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'GPLv3') {
      markdownLicense = `[![GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if (license === 'Apache') {
      markdownLicense = `[![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
      return `License: ${markdownLicense}`
    }
  }
};

// TODO: Create a function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return "";
  } else {
    if (license === 'MIT') {
      markdownLicense = `[![License: MIT](https://opensource.org/licenses/MIT)]`
    } else if (license === 'GPLv3') {
      markdownLicense = `[![GPL v3](https://www.gnu.org/licenses/gpl-3.0)]`
    } else if (license === 'Apache') {
      markdownLicense = `[![Apache](https://opensource.org/licenses/Apache-2.0)]`
      return `License: ${markdownLicense}`
    }
  }
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

// TODO: Create a function to generate markdown for README - FIGURE OUT QUESTIONS AND ADD THEM HERE
function generateMarkdown(data) {
  return `# ${data.title}
          # ${renderLicenseBadge(data.markdownLicense)}
          # ${data.description}
          # ${data.installation}
          # ${data.usage}
          # ${data.contributors}
          # ${data.test}

          # ${renderLicenseSection(data.markdownLicense)}
          # ${renderLicenseLink(data.markdownLicense)}

          # ${data.githubUsername}
          # ${data.emailAddress}

  `;
}

module.exports = generateMarkdown;