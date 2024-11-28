const { kafka } = require("./client.js");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting....");
  admin.connect();
  console.log("Admin connected successfully.....");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created successfully [rider-updates]");
  console.log("Admin disconnecting....");
  await admin.disconnect();
}

init();
