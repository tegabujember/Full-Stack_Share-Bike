//Authenticate it is  middle ware here
//It will check before response

const Users = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    //get the cookie
    const token = req.cookies.jwt;
    console.log(token);
    if (!token) {
      res.status(401).send("no token ");
    } else {
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootUser = await Users.findOne({
        _id: verifyToken._id,
        "tokens.token": token,
      });
      if (!rootUser) {
        res.status(401).send("User Not Found");
      } else {
        res.status(200).send("Authorized User ");
      }
    }
    next();
  } catch (error) {
    res.status(401).send("Error");
    console.log(error);
  }
};
module.exports = authenticate;
