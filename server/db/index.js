const mongoose = require('mongoose');
require('dotenv').config();

const user = process.env.DATABASE_USER || '';
const password = process.env.DATABASE_PASSWORD || '';
const mongoPath = process.env.DATABASE_PATH || '';
const uri = `mongodb+srv://${user}:${password}${mongoPath}`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to DB');
});

module.exports = mongoose;
