# React Calculator

A simple calculator application built using React. The calculator allows you to perform basic arithmetic operations and includes features like chaining operations, error handling, and more. This was initially built off the following tutorial - https://www.sitepoint.com/react-tutorial-build-calculator-app/ - but only the initial stages/styling for the application, all of the functionality for this to work with a Java backend was added by me.

## Features
- Addition, Subtraction, Multiplication, Division
- Chaining operations (e.g., `2 + 2 * 3`)
- Error handling (e.g., dividing by zero)
- Responsive UI

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:krisnicholl/React-Calculator.git

2. **Navigate into the project directory**:
   ```bash
   cd React-Calculator

3. **Install the dependencies**:
   ```bash
   npm install

4. **Running the application locally**:
   ```bash
   npm start

This will open the application on http://localhost:3000/ and if you have the Java backend running (https://github.com/krisnicholl/Java-Calculator) then you can use it like any other calculator.

## Future Development

For future development the following can be added:
 - Adding unit tests and more error handling, for example if the user enters "3 + 3 + 3" then the application will give the correct answer, currently it will just return 6
 - Adding more buttons to the calculator to perform more advanced calculations (such as scientific calculations)
 - Completing the functionality for % and -+ buttons as they are currently not implemented
 - Adding different themes for the calculator so the end-user has options on colour sets etc
 - Adding in memory options so the user has the ability to perform more complex calculations and save results to memory
 - Adding in graphs to make use of all the additional functions]
 - Different modes, so basic, scientific, graph and other options for conversations (including currency)
 - Plays Doom
