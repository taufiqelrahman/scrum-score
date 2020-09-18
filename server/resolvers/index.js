const GameResolver = require('./game');
const PlayerResolver = require('./player');

module.exports = {
  Query: {
    ...GameResolver.Query,
    ...PlayerResolver.Query,
  },
  Mutation: {
    ...GameResolver.Mutation,
    ...PlayerResolver.Mutation,
  },
};
