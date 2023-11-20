// async & await

// that makes it easier to work with asynchronous code. It provides a more readable and synchronous-looking syntax for handling promises

// async Function

//To use await, you first need to declare a function with the async keyword. This indicates that the function will contain asynchronous code.

async function myAsyncFunction() {
  // Asynchronous code with await
}
// await Expression
//The await keyword is used inside an async function to pause the execution of the function until the promise is resolved. It works only inside async functions

async function fetchData() {
  const data = await someAsyncOperation();
  console.log("Data:", data);
}

//You can use a try/catch block to handle errors in an async function.
async function fetchData() {
  try {
    const data = await someAsyncOperation();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
