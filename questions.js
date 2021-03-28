//promts for the user to answer
module.exports = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Link to project',
        name: 'projectLink',
    },
    {
        type: 'input',
        message: 'Describe what your project does: ',
        name: 'descriptionWhat',
    },
    {
        type: 'input',
        message: 'Describe how your project works: ',
        name: 'descriptionHow',
    },
    {
        type: 'input',
        message: 'Describe why you developed this project: ',
        name: 'descriptionWhy',
    },
    {
        type: 'input',
        message: 'What technologies where used in the making of this project? ',
        name: 'descriptionTech',
    },
    {
        type: 'input',
        message: 'What problems does this project solve?',
        name: 'descriptionSolution',
    },
    {
        type: 'input',
        message: 'What are the steps required to install and use your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list those who contributed to this project',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Github username',
        name: 'git',
    },
    {
        type: 'input',
        message: 'Github profile link',
        name: 'gitLink',
    },
    {
        //list of license
        type: 'list',
        message: 'Please list the license for this project',
        name: 'license',
        choices:['The-MIT-License', 'The-GPL-License', ' Apache-license', 'GNU-license', ' N/A'],
    },
];