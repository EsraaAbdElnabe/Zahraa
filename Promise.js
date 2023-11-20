//Promises in JavaScript

//A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected.

//Creating a Promise
const fetchData = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const success = true; // Change to false to simulate a failure
    if (success) {
      const data = "Some data";
      resolve(data); // Operation succeeded
    } else {
      const error = "An error occurred";
      reject(error); // Operation failed
    }
  }, 1000);
});

// A Promise is created with a function that takes two arguments: resolve and reject.

// Inside the function, you simulate an asynchronous operation and call resolve if it succeeds or reject if it fails.

// Consuming a Promise
fetchData
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error); // when error occurs
  });

//   The then method is used to handle the resolved state of the Promise.
// The catch method is used to handle the rejected state of the Promise
