# CHANGE LOG:

## [2.0.0] - week 3
### Refactored
- Refactored greet.js to enable greeting as an exportable function.
- Refactored greet.test.js to reflect change of greeting code into an exportable function.
- Retained original test script within greet.test.js as golden path system integration test.

## [1.1.0] - week 2
### Added
- Added 'cowsay' feature to enable greeting to be said by a cow.
- Added capability to check for --plain flag to indicate which text needs to preserve plain text behavior of greeting ... i.e. no cowsay greeting.
- Added test scripts to check for correct code functionality of greeting for '--plain' flag CLI entry, and for 'cowsay'.

## [1.0.0] - week 1
### Added
- This CHANGELOG sets baseline code for GREETING-APP-1.
- Modified .eslintrc and .gitignore as base standard.
- Added package.json ... installed dependencies from npm.
- Added README.md that demonstrates use of the app, documents developer build instructions, and documents coding standards.