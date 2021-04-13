// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shidleds.io/badge/license-${license}-red.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `#3 License
    
This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
    ${renderLicenseBadge(data.projectLicense)}

    ## Description

    ${data.projectDescription}

    ## Installation

    ${data.projectInstallation}

    ## Usage

    ${data.projectUsage}

    ## Credits

    ${data.projectCredits}

    ## License

    ${data.projectLicense}

    ## Questions

    If you have any questions about the repo, open an issue or contact me directly at ${data.emailAddress}. You can find more of my work at ${data.userName}

`;
}

module.exports = generateMarkdown;