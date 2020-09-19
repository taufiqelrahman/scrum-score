const { Schema, model } = require('../db');

const playerSchema = new Schema({
  name: String,
  gameId: String,
  score: Number,
  online: Boolean,
});

module.exports = model('Player', playerSchema);
