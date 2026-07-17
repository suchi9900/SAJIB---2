module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SAJIB Fucker",
    description: "Not",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "ওয়েল কাম বোকাচোদা রা, সজীবের পক্ষ থেকে স্বাগতম সবাইকে!
    
        "🔗 GitHub Fork Link: সজীবের ইনবক্সে..!😒";
     "https://i.imgur.com/ZhfQKNU.jpeg"
    return api.sendMessage(message, event.threadID, event.messageID);
};
