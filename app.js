/**
 * Custom Scripts
 *
 * @ Author: Sitharaman Deepak Guptha
 * @ Description: Custom Scripts for the EasyHTTP Library
 */

const http = new EasyHTTP();

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User Data
const data = {
  name: "Deepak Guptha",
  username: "vzan2012",
  email: "abcd@gmail.com"
};

// Create a POST
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update a POST
// http
//   .put("https://jsonplaceholder.typicode.com/users/3", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete a User
http
  .delete("https://jsonplaceholder.typicode.com/users/3")
  .then(data => console.log(data))
  .catch(err => console.log(err));
