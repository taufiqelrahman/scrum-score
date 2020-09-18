const { ApolloServer, gql } = require('apollo-server');
const cors = require('cors');

const db = require('./models');
const typeDefs = require('./typeDefs')(gql);;
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
