const fs = require("fs");

module.exports.config = {
  name: "offline",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SAJIB",
  description: "Offline Mode",
  commandCategory: "system",
  usages: "",
  cooldowns: 3
};

const OWNER_UID = "100049763741416";
const DATA_FILE = __dirname + "/cache/offline.json";

if (!fs.existsSync(__dirname + "/cache")) {
  fs.mkdirSync(__dirname + "/cache", { recursive: true });
}

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ offline: false }));
}

function getData() {
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}
module.exports.run = async function ({ api, event }) {
  const data = getData();

  data.offline = true;
  saveData(data);

  return api.sendMessage(
    "🌙 | বস সজীব অফলাইনে যাবে!\n\n🙂 কেউ অপ্রয়োজনীয় মেসেজ দিবেন না।\n💖 বস ফিরে আসলে আমি সবাইকে জানিয়ে দেব।",
    event.threadID,
    event.messageID
  );
};

module.exports.handleEvent = async function ({ api, event }) {
  const data = getData();

  if (!data.offline) return;

  if (event.senderID == OWNER_UID) {
    data.offline = false;
    saveData(data);

    return api.sendMessage(
      "👑 | সাবধান সবাই! সজীব বস এসে গেছে! 😎\n💖 কি খবর বস? স্বাগতম! ❤️",
      event.threadID
    );
  
  }
  
}
