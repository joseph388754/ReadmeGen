// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },

    {   
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project!'
    },


    {   
        type: 'list',
        name: 'license',
        message: 'Choose a license!',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause', 'LGPLv3', 'AGPLv3', 'Other']
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },

    {   
        type: 'input',
        name: 'test',
        message: 'Explain testing procedures and instructions on how to run necessary tests!'
    },

  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Generating README...');
        writeToFile('generateREADME.md', answers);
    });
}

// Function call to initialize app
init();
