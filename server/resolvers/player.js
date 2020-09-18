const PlayerResolver = {
  Query: {
    player: (parent, { id }, { db: { Player } }) => Player.findById(id),
  },
  Mutation: {
    addPlayer: (_, data, { db: { Player } }) => {
      return new Promise((resolve, reject) => {
        const player = new Player(data);
        player.save().then(data => resolve(data))
          .catch(errors => reject(errors));
      });
    },
    playGame: (_, data, { db: { Player } }) => {
      return new Promise((resolve, reject) => {
        const player = Player.findById(data.id);
        player = { ...data };
        player.save().then(data => resolve(data))
          .catch(errors => reject(errors));
      });
    },
    score: (_, data, { db: { Player } }) => {
      return new Promise((resolve, reject) => {
        const player = Player.findById(data.id);
        player.score = data.score;
        player.save().then(data => resolve(data))
          .catch(errors => reject(errors));
      });
    },
  },
};

module.exports = PlayerResolver;
