const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
  },
  roles: {
    type: [String],
    default: ['user'], // Default role
  },
  profile: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  lastLogin: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true, 
  // Automatically creates 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('User',userSchema);