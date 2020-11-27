var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BIuruOK_5khtLqFu_6QMNTC-WhzJmvKA0PHrairNLX2e6UdJ2yBkcHJTHJ10HdzbDFdQAXnjjunWQ8aR6LprjmA",
  privateKey: "Ze0x-YynIYZA0teXGTw2R3c1EPz4GBTGm_7F9rnVOl4",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ep3l2rg0N94:APA91bFIi_HM_ksadf-x3L8BrpFUFmnMbc3gBMao2-5RQixnDUPZKfet-VYrV3qWDvm4BFC5j_PFjG5Fied5nXmSfrgZmV3lSwEZUER4XZ17ydeSiiAETU-p8cg_-Rn7D-9E3uok5tSR",
  keys: {
    p256dh:
      "BFt7iEscboApWc87nmI/XiChdWDoVzspw88Nb7X0OvCXtXnM1KXoAuvIgZVlp+1ialXL4CX3U207yU0Xq8XuNCo=",
    auth: "Cfw2TCoXLe+fqSbh8dcA7g==",
  },
};
var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

var options = {
  gcmAPIKey: "700000363513",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
