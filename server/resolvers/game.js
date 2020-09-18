const GameResolver = {
  Query: {
    game: (parent, { id }, { db: { Game } }) => Game.findById(id),
  },
  Mutation: {
    addGame: (_, data, { db: { Game, Player } }) => {
      return new Promise((resolve, reject) => {
        const game = new Game({
          name: data.name,
          description: data.description,
        });
        game.save().then(async gameData => {
          let player = await Player.findById(data.playerId);
          console.log(player);
          if (!player) player = new Player();
          player.name = data.playerName;
          player.gameId = gameData.id;
          await player.save();
          resolve(gameData);
        }).catch(errors => reject(errors));
      });
    },
  },
  Game: {
    players: (parent, _, { db: { Player } }) => Player.find({ gameId: parent.id, online: true }),
  },
};

module.exports = GameResolver;
