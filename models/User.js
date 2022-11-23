const { Schema, model } = require('mongoose');
const userSchema = require('./Thought');

// 
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String, match: [`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`, 'error message, please try again'],
      required: true,
      max_length: 50,
    },
    thoughts: {
      type: String,
      required: true,
      max_length: 50,
    },
    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;