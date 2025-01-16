// This function pretends to fetch user data but rejects with an error after 3 seconds

//await pauses the execution of a function until a promise is resolved
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "mahia", url: "https://mahia.hashnode.dev" }); // Simulating an error
    }, 3000); // Wait for 3 seconds
  });
}

// This is an async function to fetch the data and handle errors
async function getUserData() {
  try {
    console.log("Fetching user data..."); // Let’s the user know we're starting
    const userData = await fetchUserData(); // Wait for the data (or error)
    console.log("User data fetched successfully"); // If successful, log this
    console.log("User data: ", userData); // Show the user data
  } catch (error) {
    console.log("Error fetching data", error); // If something goes wrong, log the error
  }
}

// Call the function to run the process
getUserData();
