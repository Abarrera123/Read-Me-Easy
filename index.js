// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const generateMarkdown = require('./utils/generateMarkdown');


//Function to write README file
//fs
    inquirer.prompt(questions)
    .then((response) =>{
        generateMarkdown(response);
        var readMeWrite = generateMarkdown(response);
        console.log(JSON.stringify(response));
        fs.writeFile(`./${response.title.toLowerCase().split(' ').join('')}.md`,readMeWrite,(err)=>
        err ? console.error(err) : console.log('Your README file has been generated!'))
        });


