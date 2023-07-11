const express = require("express");
const app = express();
const port = 3000;
const USERS = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// functionalities I want in my app for now
// signup

// decode the body and get the user email and password
// store the email and password in the USERS array as an object ( only if the given email doesn't exist )
// return an access token ( just a simple string for now would do the job )
// return 200 status code back to the client

app.post("/signup", (req, res) => {
  USERS.push({ email: req.body.email, password: req.body.password });
  console.log(USERS);
  res.redirect("/");
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
