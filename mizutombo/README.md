
## [1.0.0] - week 1
### Usage of the App:
- This GREETING-APP-1 provides a greeting to the user.
- When the user enters their name into the command line and hits the return key, the app replies with hello, plus the user's name.
- If the user does not enter a name and then hits the return key, the app replies with hello, plus "stranger".
### Developer Build Instructions:
- Version 1.0.0 of code established in week 1 as baseline code for GREETING-APP-1.
- Confirmed that current test file greet.test.js passes all tests per mocha.
### Coding Standards:
- This baseline code includes modified .eslintrc and .gitignore as coding standard.
- This baseline code includes new package.json with scripting and npm-installed dependencies.

## [1.1.0] - week 2
### Additions:
- Per request from Product Management, added 'cowsay' feature to enable greeting to be said by a cow.
- Retains ability to check for --plain flag which will preserve plain text behavior of greeting.

## [2.0.0] - week 3
### Refactoring: 
- Per request from Head of Engineering, refactored greet.js to enable greeting as an exportable function.
- Refactored greet.test.js to reflect change of greeting code into an exportable function.
- Also, retained original test script within greet.test.js to be used as golden path system integration test.
- Debugging of refactored code in progress.

