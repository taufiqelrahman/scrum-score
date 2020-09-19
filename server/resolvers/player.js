const socket = require('../socket');
const { SCORE_CHANGED, ONLINE_CHANGED } = require('../constants');

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
      return new Promise(async (resolve, reject) => {
        const player = await Player.findById(data.id);
        player = { ...data };
        player.save().then(data => resolve(data))
          .catch(errors => reject(errors));
      });
    },
    score: (_, data, { db: { Player } }) => {
      return new Promise(async (resolve, reject) => {
        const player = await Player.findById(data.id);
        player.score = data.score;
        player.save().then(data => {
          resolve(data);
          socket.publish(SCORE_CHANGED, { scoreChanged: data });
        }).catch(errors => reject(errors));
      });
    },
    setOnline: (_, data, { db: { Player } }) => {
      return new Promise(async (resolve, reject) => {
        const player = await Player.findById(data.id);
        player.online = data.online;
        player.save().then(data => {
          resolve(data);
          socket.publish(ONLINE_CHANGED, { onlineChanged: data });
        }).catch(errors => reject(errors));
      });
    },
  },
  Subscription: {
    scoreChanged: {
      subscribe: () => socket.asyncIterator([SCORE_CHANGED]),
    },
    onlineChanged: {
      subscribe: () => socket.asyncIterator([ONLINE_CHANGED]),
    },
  },
};

module.exports = PlayerResolver;
