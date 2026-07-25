module.exports.config = {
  name: "groupnotify",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sajib",
  description: "Notify Sajib when bot is added to a new group",
  commandCategory: "system",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  if (event.logMessageType !== "log:subscribe") return;

  const botID = api.getCurrentUserID();
  const added = event.logMessageData?.addedParticipants || [];

  if (!added.some(user => user.userFbId == botID)) return;

  const OWNER_ID = "100049763741416";

  const info = await api.getThreadInfo(event.threadID);

  api.sendMessage(
`📢 বস সজীব,

আমাকে একটি নতুন গ্রুপে অ্যাড করা হয়েছে।

👥 গ্রুপ: ${info.threadName}
🆔 Group ID: ${event.threadID}

আপনি কি এই গ্রুপে যোগ দিতে চান?

Reply:
✅ Yes
❌ No`,
    OWNER_ID
  );
};

module.exports.run = () => {};
