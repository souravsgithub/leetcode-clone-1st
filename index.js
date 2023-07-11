const express = require("express");
const app = express();
const port = 3000;

const USERS = [];
app.get("/", (req, res) => {
  res.send("Hello from leetcode backend");
});

// functionalities I want in my app for now
// signup

// decode the body and get the user email and password
// store the email and password in the USERS array as an object ( only if the given email doesn't exist )
// return an access token ( just a simple string for now would do the job )
// return 200 status code back to the client

app.post("/signup", (req, res) {
    res.send("Hello from the signup route");
});
// login

// decode the body and get the user email and password
// check if the email exists in the USERS array
// also ensure that the password is the same
// if the user exist in the USERS array then return a 200 status code
// problems

// submissions

// get all the submisstions from the SUBMISSIONS array

// submit

// randomly accept or reject a submission
// store a new submission in the SUBMISSION array

app.listen(port, () => {
  console.log(`The express app is started on ${port}`);
});
