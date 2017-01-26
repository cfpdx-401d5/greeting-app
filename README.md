#GREETING APP [3.0.0]
- This app is intended to take input from a user and generate a personalized greeting per that input.

## USE OF THE APP
- This is a command line application that generates a greeting.
- The default greeting is "hello stanger" said by a cow. In order to get this result, the user must type "node cli.js" in the command line.
- In order to change the name in the greeting from "stranger" to something the user inputs, the user must type "--name:INPUT" after "node cli.js" in the command line, where input is the user's name of choice.
- In order to change the greeting from "hello" to something the user inputs, the user must type "--greeting:INPUT" after "node cli.js" in the command line, where input is the user's greeting of choice.
- If the user prefers a greeting that is not said by a cow, the user can include "--plain"after "node cli.js" in the command line.
- The user can include all or none of inputs in any order and the app will still run (ex. "node cli.js --name:brigitte --greeting:aloha --plain").


## DEVELOPER BUILD INSTRUCTIONS
- The developer should keep the app simple and easy to use.
- The developer should add a CLI file to organize interaction with the command line. 
- The developer should add functionality to take a name and greeting as input from the user.

## CODING STANDARDS
- 4 spaces for indentations
- semicolons required