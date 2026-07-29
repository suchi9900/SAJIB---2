const axios = require("axios");

module.exports.config = {
  name: "potita",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sajib",
  description: "Send Potita image",
  commandCategory: "media",
  usages: "potita",
  cooldowns: 2
};

module.exports.run = async ({ api, event }) => {
  const img = (await axios.get(
    "https://i.imgur.com/lMS03rE.jpeg",
    { responseType: "stream" }
  )).data;

  api.sendMessage(
    {
      body: "😈 Potita",
      attachment: img
    },
    event.threadID,
    event.messageID
  );
};
