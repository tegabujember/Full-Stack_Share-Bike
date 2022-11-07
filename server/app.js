//import all dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

// from haim
console.log('haim')

//Configure ENV file and require connection file
dotenv.config({ path: "./config.env" });
require("./db/conn");

const port = process.env.PORT;

//require model
const Users = require("./models/userSchema");
const Message = require("./models/msgSchema");
const authenticate = require("./middleware/authenticate");

//these method is used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//registration
app.post("/register", async (req, res) => {
  try {
    //get req body or data
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const createUser = new Users({
      username: username,
      email: email,
      password: password,
    });
    //save method is used create user or insert user
    //but before saving or inserting ,  password will hash
    //because of hashing ,after hash ,its will save to db
    const created = await createUser.save();
    // console.log(created);
    res.status(200).send("registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

//login user
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    //find user if exist
    const user = await Users.findOne({ email: email });
    if (user) {
      //verify Password
      const isMatch = bcryptjs.compare(password, user.password);
      if (isMatch) {
        //generate token witch is define in userSchema
        const token = await user.generateToken();
        res.cookie("jwt", token, {
          //expires token in 24 hours
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
        res.status(200).send("Logged In ");
      } else {
        res.status(400).send("Invalid Credential");
      }
    } else {
      res.status(400).send("Invalid Credential");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//message
app.post("/message", async (req, res) => {
  try {
    //get req body or data
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const sendMsg = new Message({
      name: name,
      email: email,
      message: message,
    });
    //save method is used create user or insert user
    //but before saving or inserting ,  password will hash
    //because of hashing ,after hash ,its will save to db
    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Sent");
  } catch (error) {
    res.status(400).send(error);
  }
});

//logout
app.get("/logout", (req, res) => {
  res.clearCookie("jwt", { path: "/" });
  res.status(200).send("user logged out");
  window.alert("user logged out");
});

//Authentication
app.get("/auth", authenticate, (req, res) => {});

//run server

app.listen(port, () => console.log("server is running"));
