const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  nameUser: {
    type: String,
    required: [true, "please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
})

const User = mongoose.model("User", userSchema)
module.exports = User
