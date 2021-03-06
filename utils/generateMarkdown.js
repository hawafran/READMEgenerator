// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
#Table of Contents
-[Description]
-[Instalation]
-[Usage]
-[License]
-[Contributting]
-[Tests]
-[Questions]

## Description:
${data.description}
## Installation:
  ${data.installation}
## Usage:
${data.usage}
## License:
${data.licensing}
## Contribution:
${data.contribution}
## Tests:
${data.testing}

## Questions
Contact me via my GitHub Profile:
-[GitHub](https://github.com/${data.github})
or Email: ${data.email}
`;
}

module.exports = generateMarkdown;


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
