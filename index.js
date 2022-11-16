// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = [];
function userInput(){
    return inquirer.prompt([
        {name: 'license',
        message: 'Select kind of license for this application:',
        type: 'list',
        choices: ["Apache license 2.0", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Do What The Fuck You Want To Public License", "MIT"]},
        {name: 'title',
        message: 'What is the title of this application?',
        type: 'input'},
        {name: 'description',
        message: 'What does this application do?',
        type: 'input'},
        {name: 'features',
        message: 'What cool or unique features does your application have?',
        type: 'input'},
        {name: 'credits',
        message: 'What credits, collaborators, third party assets, or tutorials did you use?',
        type: 'input'},
        {name: 'install',
        message: 'How do I install this application?',
        type: 'input'},
        {name: 'usage',
        message: 'How do I use this application?',
        type: 'input'},
        {name: 'contributing',
        message: 'How do I contribute to this application?',
        type: 'input'},
        {name: 'testing',
        message: 'How do I test this application?',
        type: 'input'},
        {name: 'username',
        message: 'What is your Github username?',
        type: 'input'},
        {name: 'email',
        message: 'What is your e-mail?',
        type: 'input'},
        {name: 'fileName',
        message: 'What do you want to call this readme?',
        type: 'input'},
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
    (err) => err ? console.error(err) : console.log(`Generation of ${fileName}.md Readme complete!`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkDown(answers)));
}

// Function call to initialize app
init();
