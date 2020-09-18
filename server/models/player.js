const { Schema, model } = require('../db');

const playerSchema = new Schema({
  name: String,
  gameId: String,
  score: Number,
});

module.exports = model('Player', playerSchema);
