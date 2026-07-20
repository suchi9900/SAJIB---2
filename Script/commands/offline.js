const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "offline",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SAJIB",
  description: "Owner Offline Mode",
  commandCategory: "system",
  usages: "offline",
  cooldowns: 3
};

const OWNER_UID = "100049763741416";

const cacheDir = path.join(__dirname, "cache");
const dataFile = path.join(cacheDir, "offline.json");

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify({
    status: false
  }));
}


function getData() {
  return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function saveData(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  }
module.exports.run = async function ({ api, event }) {
  if (event.senderID != OWNER_UID) {
    return api.sendMessage(
      "❌ শুধুমাত্র বস SAJIB এই কমান্ড ব্যবহার করতে পারবে।",
      event.threadID,
      event.messageID
    );
  }

  const data = getData();

  data.status = true;
  saveData(data);

  return api.sendMessage(
    "🌙 | বস সজীব অফলাইনে যাচ্ছে!\n🙂 কেউ বিরক্ত করিস না।\n🫶 বস অনলাইনে আসলে আমি জানিয়ে দেব।",
    event.threadID,
    event.messageID
  );
};
module.exports.handleEvent = async function ({ api, event }) {
  const data = getData();

  // অফলাইন মোড চালু না থাকলে কিছু করবে না
  if (!data.status) return;

  // শুধু Owner-এর মেসেজ/ইমোজি দেখবে
  if (event.senderID != OWNER_UID) return;

  // অফলাইন মোড বন্ধ করে দাও
  data.status = false;
  saveData(data);

  return api.sendMessage(
    "👑 | সাবধান সবাই!\n\n🫶 সজীব বস অনলাইনে এসেছে!\n💖 কি খবর বস? Welcome Back ❤️",
    event.threadID
  );
};
