importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

if (workbox) {
  console.log(`Workbox berhasil dimuat`);
} else {
  console.log(`Workbox gagal dimuat`);
}

workbox.precaching.precacheAndRoute([
  { url: "/", revision: "1" },
  { url: "/nav.html", revision: "1" },
  { url: "/index.html", revision: "1" },
  { url: "/manifest.json", revision: "1" },
  { url: "/service-worker.js", revision: "1" },
  { url: "/push.js", revision: "1" },
  { url: "/pages/standings.html", revision: "1" },
  { url: "/pages/teams.html", revision: "1" },
  { url: "/pages/favorit.html", revision: "1" },
  { url: "/pages/about.html", revision: "1" },
  { url: "/asset/css/materialize.css", revision: "1" },
  { url: "/asset/css/materialize.min.css", revision: "1" },
  { url: "/asset/css/main.css", revision: "1" },
  { url: "/asset/js/materialize.js", revision: "1" },
  { url: "/asset/js/materialize.min.js", revision: "1" },
  { url: "/asset/js/nav.js", revision: "1" },
  { url: "/asset/js/api.js", revision: "1" },
  { url: "/asset/js/idb.js", revision: "1" },
  { url: "/asset/js/request.js", revision: "1" },
  { url: "/asset/js/jquery.min.js", revision: "1" },
  { url: "/asset/js/footer.js", revision: "1" },
  { url: "/asset/img/logo_splash_screen512.png", revision: "1" },
  { url: "/asset/img/logo_icon_fav.png", revision: "1" },
  { url: "/asset/img/logo_192x192x.png", revision: "1" },
  { url: "/asset/img/loader_utama.gif", revision: "1" },
  { url: "/asset/img/img-kholil.jpg", revision: "1" },
  { url: "/asset/img/news_1.jfif", revision: "1" },
  { url: "/asset/img/news_2.jfif", revision: "1" },
  { url: "/asset/img/news_3.jfif", revision: "1" },
]);

workbox.routing.registerRoute(
  new RegExp("/pages/"),
  workbox.strategies.cacheFirst({
    cacheName: "pages-bal-balan",
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|jfif)$/,
  workbox.strategies.cacheFirst({
    cacheName: "img-bal-balan",
  })
);

workbox.routing.registerRoute(
  new RegExp(".*.html"),
  workbox.strategies.cacheFirst({
    cacheName: "html",
  })
);

workbox.routing.registerRoute(
  new RegExp(".*.css"),
  workbox.strategies.cacheFirst({
    cacheName: "css",
  })
);

workbox.routing.registerRoute(
  new RegExp(".*.js"),
  workbox.strategies.cacheFirst({
    cacheName: "js",
  })
);

workbox.routing.registerRoute(
  new RegExp("https://api.football-data.org/v2/"),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
);

self.addEventListener("push", function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = "Push message no payload";
  }
  var options = {
    body: body,
    icon: "asset/img/logo_icon_fav.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});
