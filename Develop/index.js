// This is the initial file of the project where the questions would be asked, and will create the entire string of answers

// These are the packages needed for this application
const inquirer = require('inquirer'); // It knows what it's called from the package.json file
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// This is an array of questions for user input. Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [{
    type: 'input',
    message: 'Enter the title of your project',
    name: 'title',
},
{
    type: 'input',
    message: 'Enter the description of your project',
    name: 'description',
},
{
    type: 'input',
    message: 'Enter the installation instructions for your project',
    name: 'installation',
},
{
    type: 'input',
    message: 'Enter information on how users use your project',
    name: 'usage',
},
{
    type: 'list',
    choices: ['MIT', 'Apache', 'GPLv3', 'none'],
    message: 'Select the Markdown License for your project',
    name: 'markdownLicense',
},
{
    type: 'input',
    message: 'Enter the contributors of your project',
    name: 'contributors',
},
{
    type: 'input',
    message: ['Enter any test instructions for this project'],
    name: 'test',
},
{
    type: 'input',
    message: ['Enter your GitHub username'],
    name: 'githubUsername',
},
{
    type: 'input',
    message: ['Enter your email address'],
    name: 'emailAddress',
},
];

//This function writes a new README file 
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => { // If you want to include variables, you need to use back ticks `` for the string, and the ${} so it can dynamically pull data 
        if (err) {
            console.error(err);
        }
        // return ()
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('README.md', generateMarkdown(response));
        });
}

init();
