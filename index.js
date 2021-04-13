// TODO: Include packages needed for this application - Completed

const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input - Completed
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project?',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'projectInstallation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'projectUsage',
    },
    {
        type: 'input',
        message: 'List all of the following: your collaborators with links to their GitHub profiles, third-party assets that require attribution, links to tutorials you followed.',
        name: 'projectCredits',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have? (Use arrow keys)',
        name: 'projectLicense',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response);
        writeToFile('README.md', generateMarkdown(response));
    })
}

// Function call to initialize app
init();