const { mergeTypes } = require('merge-graphql-schemas');
const Game = require('./game');
const Player = require('./player');

// Define our schema using the GraphQL schema language
const TypeDefs = gql => gql`
  type Query {
    # game
    game(id: ID!): Game
    # player
    player(id: ID!): Player
  }

  type Mutation {
    # game
    addGame(
      name: String!
      description: String
      playerId: String
      playerName: String!
    ): Game

    # player
    addPlayer(
      name: String!
      gameId: String!
    ): Player

    playGame(
      name: String!
      id: String!
      gameId: String!
    ): Player

    score(
      id: String!
      score: Int!
    ): Player
  }
`;

module.exports = gql => mergeTypes([
  TypeDefs(gql),
  Game(gql),
  Player(gql),
]);
