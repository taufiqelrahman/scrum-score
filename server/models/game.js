const { Schema, model } = require('../db');

const gameSchema = new Schema({
  name: String,
  description: String,
});

module.exports = model('Game', gameSchema);
