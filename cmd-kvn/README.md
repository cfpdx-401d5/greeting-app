# Greeting App v1.1.0

# Setup
```
$ npm install
```
# Usage

### For normal greetings
```
$ node greet.js --plain
hello stranger // defaults to 'stranger' if name is not provided

$ node greet.js kevin --plain
hello kevin // when name is provided
```
### For cowsay greetings
```
$node greet.js
 ________________
< hello stranger > // defaults to 'stranger' if name is not provided
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

$node greet.js kevin
 _____________
< hello kevin >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
# Coding standards
- The limit on the length of lines is 80 columns.
- No more than one statement per line.
- One character variable names should only be used in loops or for temporary variables.