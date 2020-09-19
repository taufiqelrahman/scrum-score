const { ApolloServer, gql } = require('apollo-server');
const cors = require('cors');

const db = require('./models');
const typeDefs = require('./typeDefs')(gql);;
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      console.log('client connected');
    },
    onDisconnect: (webSocket, context) => {
      console.log('client disconnected');
    },
  },
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
