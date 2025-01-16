// Simulates fetching post data (e.g., from a server)
// Returns a promise that resolves with a message after 2 seconds
function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000); // Wait for 2 seconds before resolving
  });
}

// Simulates fetching comment data
// Returns a promise that resolves with a message after 3 seconds
function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched.");
    }, 3000); // Wait for 3 seconds before resolving
  });
}

// Async function to fetch blog-related data (posts and comments)
async function getBlogData() {
  try {
    console.log("Fetching blog data"); // Start fetching

    // Fetch post and comment data at the same time
    // `Promise.all` ensures both promises run in parallel
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    // Log the fetched data
    console.log(postData); // Post data fetched
    console.log(commentData); // Comment data fetched

    console.log("Fetch complete"); // All done
  } catch (error) {
    //handeling the error data first is a wise idea

    // If something goes wrong, handle the error here
    console.error("Error fetching blog data", error);
  }
}

// Call the function to start fetching data
getBlogData();
