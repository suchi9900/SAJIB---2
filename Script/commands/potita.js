const request = require("request");

module.exports.config = {
  name: "potita",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sajib",
  description: "Send image",
  commandCategory: "media",
  usages: "potita",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  return api.sendMessage(
    {
      body: "😈 Potita",
      attachment: request("https://i.imgur.com/lMS03rE.jpeg")
    },
    event.threadID,
    event.messageID
  );
};
