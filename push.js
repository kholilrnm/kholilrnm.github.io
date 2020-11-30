var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BMloMY36Z3pceoeX5e2GALPxYvKEejIFRlI9OZI7F5HRVLW99-lc_5mjkiORhmt1m6443oo8znC1ZrIDTsKHbh8",
  privateKey: "55SENKubkcAJwwHcrQtdfJnIcIf0Qa0U32ya3nezpCc",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cbVd8hb3xnY:APA91bFSneE-MTQHLzL49sdJFtC3Joqq2RddjZIxNUuepJQbmQZ0amxsd4R9LiJaq3EemNsclxhreOwCbtP2QRIBfmZLGjDspL4CMUAzxM8GoLToHpLjaf0k0EfHO68icW1J4fRyz_9V",
  keys: {
    p256dh:
      "BGfH/1SPPhVYSPqDwp6XiNN9Pmi4tIoG7lC/1sSsVt874Uz0B4H2s+JTEXmTKY85UR5gok1fjBIuE+/Set05O2o=",
    auth: "j7CNl5Uugq3H5lNNwQz1IQ==",
  },
};
var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

var options = {
  gcmAPIKey: "700000363513",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
