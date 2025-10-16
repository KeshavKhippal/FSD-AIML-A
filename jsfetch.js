const url="https://dummyjson.com/users";

// Using async/await to handle promises
async function fetchUsers() {
    try {
        const response = await fetch(url); // await the fetch promise
        const data = await response.json(); // await the json parsing promise
        console.log('Data-->', data);
    } catch (error) {
        console.log('Error->', error);
    } finally {
        console.log("Inside finally");
    }
}

// Call the async function
fetchUsers();
    
