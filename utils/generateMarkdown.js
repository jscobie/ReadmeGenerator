// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return (
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      );
      break;
    case "Boost":
      return (
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      );
      break;
    case "Creative Commons":
      return (
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
      );
      break;
    case "Do What The Fuck You Want To Public License":
      return (
        "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
      )
    case "MIT":
      return (
        "[![License: CC0-1.0](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
      );
      break;
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
      break;
    case "Do What The Fuck You Want To Public License":
      return ("(http://www.wtfpl.net/about/)");
      break;
    case "MIT":
      return ("(https://opensource.org/licenses/MIT)");
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== undefined && license !== null) {
    return `Read more about ${license} here: `
  } else {
    return ""
  }
  // switch (license) {
  //   case "Apache":
  //     return ("A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.");
  //     break;
  //   case "Boost":
  //     return ("A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.");
  //     break;
  //   case "Creative Commons":
  //     return ("The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties.");
  //   case "MIT":
  //     return ("A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.");
  //   default:
  //     return "";
  //     break;
  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  // add this
  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Contact Options:
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = generateMarkdown;
