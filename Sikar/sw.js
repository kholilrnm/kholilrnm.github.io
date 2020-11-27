const CACHE_NAME = 'sikar-pwa-v1';
var filesToCache = [
	'./',
	'./index.html',
	'./css/style.css',
	'./css/animated.css',
	'./css/bootstrap.min.css',
	'./css/bootstrap-vue.css',
	'./css/styleWeb.css',
	'https://use.fontawesome.com/releases/v5.1.1/css/all.css',
	'./js/main.js',
	'./js/script.js',
	'./js/vue.js',
	'./js/jquery.min.js',
	'./js/popper.min.js',
	'./js/polyfill.min.js',
	'./js/bootstrap.min.js',
	'./js/bootstrap-vue.js',
	'./js/sweetalert.min.js'
];

// Install serviceWorker
self.addEventListener('install', function (event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache){
			console.log('Opened cache');
			filesToCache.forEach(function (url) {
				cache.add(url).catch(/*optional error handling/logging*/);
			});
		})
	);
});

// Fetch serviceWorker
self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			// cache hit -- return response
			if (response) {
				return response;
			}

			return fetch(event.request);
		})
	);
});

// Activate serviceWorker
self.addEventListener('activete', function (event) {
	event.waitUntill(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.filter(function (cacheName) {
					return cacheName != CACHE_NAME;
				}).map(function (cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});