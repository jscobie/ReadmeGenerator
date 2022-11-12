// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return (
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" +
        ["See the deployed version here"]
      );
      break;
    case "Boost":
      return (
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" +
        ["See the deployed version here"]
      );
      break;
    case "Creative Commons":
      return (
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)" +
        ["See the deployed version here"]
      );
    case "MIT":
      return (
        "[![License: CC0-1.0](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)" +
        ["See the deployed version here"]
      );
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return ("(https://opensource.org/licenses/Apache-2.0)");
      break;
    case "Boost":
      return ("(https://www.boost.org/LICENSE_1_0.txt)");
      break;
    case "Creative Commons":
      return ("(http://creativecommons.org/publicdomain/zero/1.0/)");
    case "MIT":
      return ("(https://opensource.org/licenses/MIT)");
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
