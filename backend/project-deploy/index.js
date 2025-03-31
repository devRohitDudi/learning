console.log("backend index.js executed.");
const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

//for now sending this instead of json
const loginUI =
  "<div> <h1>Please Login</h1> <input type='text' placeholder='Enter userid' /><input type='text' placeholder='Enter password' /></div>";
const signupUI = `<div> 
  <h1>Please create your account!</h1> 
  <input type='text' placeholder='Enter full name' /> 
  </br>
  <input type='text' placeholder='choose userid' /> 
  </br>
  <input type='text' placeholder='Enter password' />
  </br>
  <input type='text' placeholder='Confirm password' />
  </div>`;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my first backend app powered by express.js!</h1>
    </br>
    <a href='http://localhost:3000/login'>Go to Login page</a>
    </br>
    <a href='http://localhost:3000/signup'>New to us? Signup</a>
    </br>
    <a href='http://localhost:3000/github'>Github</a>`);
});

app.get("/github", (req, res) => {
  res.send(
    "Github id eh? here it is: <a href='https://www.github.com/DevRohitDudi'>DevRohitDudi</a>"
  );
});

app.get("/login", (req, res) => {
  res.send(`<h2>Welcome back! curious soul.</h2> ${loginUI}`);
});

app.get("/signup", (req, res) => {
  res.send(
    `<h2>You want to login cause you love this platform.</h2> ${signupUI}`
  );
});

app.listen(process.env.PORT, () => {
  console.log(
    `backend app on local server is listening on port ${process.env.PORT}`
  );
});
