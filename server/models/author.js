const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: { type: String, required: false },
  age: { type: String, required: false },
});

module.exports = mongoose.model('Author', AuthorSchema)
