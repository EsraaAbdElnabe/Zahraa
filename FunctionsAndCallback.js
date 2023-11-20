// javaSript have several ways to create an function

// [1] function declaration

// example of function decleration
function greet() {
  // with no parameter
  console.log("Hello");
}

//function take parameter
function greetWithName(name) {
  console.log(`Hello ${name}`);
}

// function return
function add(a, b) {
  return a + b;
}

// to call function decleration
greet();
// to save return value
const value = add(1, 2);

//=============================================================================

// [2] function expression

// example of function expression
const greetWithName2 = function (name) {
  console.log(`Hello ${name}`);
};

// call function
greetWithName2("Zahraa");

//==============================================================================

// [3] arrow function
// example of arrow function
const greetWithName3 = (name) => {
  console.log(`Hello ${name}`);
};

// example without parenthesis and curly braces
const greetWithName4 = (name) => console.log(`Hello ${name}`);
// remove parenthesis and curly braces from arrow function and save return value in a variable
const value2 = greetWithName3("Zahraa");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Callback Functions

// Define a callback function
function callbackFunction() {
  console.log("Callback function called");
}

// Function that takes a callback as an argument
function myFunction(callback) {
  console.log("Inside myFunction");
  // Call the callback function
  callback();
}

// Call myFunction and pass the callback function
myFunction(callbackFunction); // Callback function called then Inside myFunction

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Pyramid of Doom (Callback Hell)

//When dealing with multiple asynchronous operations, the code structure can become nested and harder to read
readFile("file1.txt", (err, data1) => {
  if (err) {
    handleError(err);
  } else {
    readFile("file2.txt", (err, data2) => {
      if (err) {
        handleError(err);
      } else {
        readFile("file3.txt", (err, data3) => {
          if (err) {
            handleError(err);
          } else {
            // Process data1, data2, and data3
          }
        });
      }
    });
  }
});



