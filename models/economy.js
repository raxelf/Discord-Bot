const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  User: {
    type: String,
    required: true
  },
  Wallet: {
    type: Number,
    default: 0
  },
  Bank: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('economy', Schema)