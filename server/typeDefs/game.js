const GameTypeDefs = gql => gql`
  type Game {
    id: String!
    name: String!
    description: String
  }
`;

module.exports = GameTypeDefs;
