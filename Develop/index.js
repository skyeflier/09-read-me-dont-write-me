// THIS FILE is where the questions would be asked, and will create the entire string of answers

// Pckages needed for this application
const inquirer = require('inquirer'); // It knows what it's called from the package.json file
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [{
    type: 'input', // LOOK AT PROMPT TYPES IN INQUIRER SITE
    message: 'What is the title of your Read Me?',
    name: 'title',
},
{
    type: 'list',
    choices: ['MIT', 'Adobe', 'none'], //ADD MORE LICENSE TYPES!  
    message: 'What is the Markdown License for your project?',
    name: 'markdownLicense',
},

    // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
];

// A function to write README file - THEN CALL THIS FUNCTION TO CREATE A README FILE
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => { // If you want to include variables, you need to use back ticks `` for the string, and the ${} so it can dynamically pull data 
        if (err) {
            console.error(err);
        }
    });
}

function init() {
    inquirer
        .prompt(questions) //Prompt is a method inside inquirer
        .then((response) => {// PASS GO GENERATE MARKDOWN THEN IN GM YOU CAN USE THIS OBJECT TO GET ALL THE DATA YOU NEED
            // response.confirm === response.password
            //     ? console.log('Success!')
            //     : console.log('You forgot your password already?!')
            writeToFile('README.md', generateMarkdown(response));
        });
}

init();
