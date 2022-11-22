const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const salt = 10;
//const uniqueValidator = require("mongoose-unique-validator");

//User Schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  // passwordConfirm: {
  //   type : String,
  //   required: [true, 'Please provide a password'],
  //   validate: {
  //       // This only works on CREATE and SAVE!!!
  //       validator: function(pass) {
  //           return pass === this.password
  //       }
  //   }
  // },
  passwordChangedAt: Date,
});


//userSchema.plugin(uniqueValidator);

//hashing password
userSchema.pre("save", async function (next) {
  //Only run this function was actually modified
  if (!this.isModified("password")) {
    return next();
  }

  // Hash the password
  this.password = await bcrypt.hash(this.password, salt);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;

  //done
  next();
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew){
      return next();
  }

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function(originalPassword, hashPassword) {
  return await bcrypt.compare(originalPassword, hashPassword)
}

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew){
      return next();
  }

  this.passwordChangedAt = Date.now() - 1000;
  next();
})


//generate token to verify user
// userSchema.methods.generateToken = async function () {
//   try {
//     let generatedToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({ token: generatedToken });
//     await this.save();
//     return generatedToken;
//   } catch (error) {
//     console.log(error);
//   }
// };

//create user
const Users = mongoose.model("USER", userSchema);
module.exports = Users;
