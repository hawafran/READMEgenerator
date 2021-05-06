// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input

const questions = [];

const promptUser = () => {
  return inquirer.prompt([
      
      {
          type: 'input',
          name: 'Title',
          message: "What is the title of your project?"
      },
      {
          type:'input',
          name:'instructions',
          message:"Please enter your project's instructions",
      },
      {
        type:'input',
        name:'usage',
        message:"Which applications will be run?",
      },
      {
        type:'input',
        name:'controbution',
        message:"Who contributed to this project, and what did they contribute?",
      },
      {
        type:'input',
        name:'test',
        message:"What are the test instructions?",
      },
      {
          type:'input',
          name:'github',
          message:"What is your GitHub username?"
      },
      {
          type:'input',
          name:'email',
          message: "What is your email?"
      },

  ],
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

