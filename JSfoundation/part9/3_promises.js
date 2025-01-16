/*
You can manually create asynchronous behavior in JavaScript using Promises. 
Promises are a utility that allows you to handle asynchronous operations in a more structured way.

Creating a Promise:
- A promise is created using the `new Promise` constructor.
- It takes a callback function with two parameters: `resolve` and `reject`.
  - `resolve`: Called when the operation is successful.
  - `reject`: Called when the operation fails.

In the example:
- A `setTimeout` simulates an asynchronous task (like fetching data from a server).
- Based on a `success` flag, the promise either resolves with a success message or rejects with an error message.

Consuming the Promise:
- `.then()` is used to handle the resolved value.
- `.catch()` is used to handle any errors from the promise.

Promise States:
- `pending`: Initial state, neither fulfilled nor rejected.
- `fulfilled`: The operation completed successfully (triggers `.then()`).
- `rejected`: The operation failed (triggers `.catch()`).

Example Code:
*/

function fetchData() {
  // Create a Promise
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      let success = true; // Toggle this to test both resolve and reject paths
      if (success) {
        resolve("Data fetched successfully"); // If successful, resolve the promise
      } else {
        reject("Error fetching data"); // If failed, reject the promise
      }
    }, 3000); // Simulate a delay of 3 seconds
  });
}

// Consume the Promise
fetchData()
  .then((data) => {
    console.log(data); // Handle the resolved value
    return data.toLowerCase(); // Optionally, transform the data
  })
  .then((value) => {
    console.log(value); // Handle the transformed data
  })
  .catch((error) => console.log(error)); // Handle any errors from the promise

/*
This is how Promises allow you to manage asynchronous operations in a cleaner and more organized way.
*/
