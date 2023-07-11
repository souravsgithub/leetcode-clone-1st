const express = require("express");
const app = express();
const port = 3000;
const USERS = [];

app.set("view-engine", "ejs");
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

// page to sign up as a new user
app.get("/signup", (req, res) => {
  res.render("signup.ejs", {});
});
// congrats page for successful sign ups
app.get("/signup/success", (req, res) => {
  res.render("signup-success.ejs", { users: USERS });
});
// endpoint to hit when trying to singup
app.post("/signup", (req, res) => {
  let exists = false;
  USERS.forEach((acc) => {
    if (acc.email === req.body.email) {
      exists = true;
    }
  });
  if (!exists) {
    USERS.push({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.redirect("/signup/success");
  } else {
    res.redirect("/signup");
  }
});

// login

// decode the body and get the user email and password
// check if the email exists in the USERS array
// also ensure that the password is the same
// if the user exist in the USERS array then return a 200 status code
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  let exists = false;
  let correctCredentials = false;
  USERS.forEach((account) => {
    if (
      account.email === req.body.email &&
      account.password === req.body.password
    ) {
      exists = true;
      correctCredentials = true;
    } else if (
      account.email === req.body.email ||
      account.password === req.body.password
    ) {
      exists = true;
    }
  });
  if (exists && correctCredentials) {
    // redirect to the main page
    res.redirect("/problems");
  } else if (exists) {
    // tell them the entered email or password is incorrect
    console.log(
      "Your entered email or password is incorrect! Please try again!"
    );
    res.redirect("/login");
  } else {
    // need to create an account becuase they don't have one
    console.log("You don't have an account! Please sign up to create one.");
    res.redirect("/signup");
  }
});

// problems
app.get("/problems", (req, res) => {
  res.render("problems.ejs");
});

// submissions

// get all the submisstions from the SUBMISSIONS array

// submit

// randomly accept or reject a submission
// store a new submission in the SUBMISSION array

app.listen(port, () => {
  console.log(`The express app is started on ${port}`);
});
