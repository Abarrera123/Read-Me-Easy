
// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ## Project link: ${response.projectLink}
  * [Description](#desription)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  # Description 
  ## What:
   ${response.descriptionWhat}
  ## How: 
  ${response.descriptionHow}
  ## Why:
  ${response.descriptionWhy}
  ## Technologies Used: 
  ${response.descriptionTech}
  ## Purpose:
  ${response.descriptionSolution}
  # Installation:
  ${response.install}
  # Usage:
  ${response.usage}
  # Credits:
  ${response.contribution} 
  ${response.git}
  ${response.gitLink}
  # License:${response.license}
  ![](https://img.shields.io/badge/License-${response.license}-blue)`;
}

module.exports = generateMarkdown;
