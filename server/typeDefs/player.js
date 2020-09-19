const PlayerTypeDefs = gql => gql`
  type Player {
    id: String!
    name: String!
    gameId: String!
    score: Int
    online: Boolean
  }
`;

module.exports = PlayerTypeDefs;
