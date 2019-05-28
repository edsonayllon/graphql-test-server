const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: { type: String, required: false },
  genre: { type: String, required: false },
  authorId: { type: String, required: false }
});

module.exports = mongoose.model('Book', BookSchema)
