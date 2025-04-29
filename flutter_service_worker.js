'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "18dcd96e6a6978f436fca37d1b15264f",
"version.json": "2b90cd13b2d0f23d0c3184a779b50a2a",
"splash/img/light-2x.png": "49b30a73576050cb686edb75a0b3c1fd",
"splash/img/dark-4x.png": "fdec264cd1df3f20623da98178c5de87",
"splash/img/light-3x.png": "304d1ea821e4040aebea87f00ab7ecbe",
"splash/img/dark-3x.png": "304d1ea821e4040aebea87f00ab7ecbe",
"splash/img/light-4x.png": "fdec264cd1df3f20623da98178c5de87",
"splash/img/dark-2x.png": "49b30a73576050cb686edb75a0b3c1fd",
"splash/img/dark-1x.png": "fbf45c36786bf5ca8d7f85ee8aac174d",
"splash/img/light-1x.png": "fbf45c36786bf5ca8d7f85ee8aac174d",
"index.html": "f77b6ee230f8ca9649fe5879933897ac",
"/": "f77b6ee230f8ca9649fe5879933897ac",
"main.dart.js": "c4abb9c212b989de595652f5ca73ee47",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "ca8678e7dbc39269c22f8e465279bb4c",
"icons/Icon-192.png": "41667ce4aa891ecb095a84fc5cc21405",
"icons/Icon-maskable-192.png": "41667ce4aa891ecb095a84fc5cc21405",
"icons/Icon-maskable-512.png": "5a6831e1c44ef80306aa42694200500f",
"icons/Icon-512.png": "5a6831e1c44ef80306aa42694200500f",
"manifest.json": "21e99279fd10464d79e5fbd1bd5428c1",
"assets/images/Band-Pallof-Press.svg": "ac719edbd14326141733e37994d069a3",
"assets/images/Shrimp-Squat.svg": "01006bd74809779f36f1c5a450d1c007",
"assets/images/Single-Leg-Pistol-Squat.svg": "7c1062b3531c68c24ce3fa76b0053ca0",
"assets/images/Weighted-Dip.svg": "f1eb43bf6371c4718a3943d33becde46",
"assets/images/icon.png": "4da9c663137df9bbc8d3d014ba30f9cb",
"assets/images/Squat-to-Overhead-Reach.svg": "8fd614c56a1bdebac2a91a295380547f",
"assets/images/Pike-Push-up.svg": "6f74eda73528a48aaaaa7933885b0b12",
"assets/images/Ring-Rollout.svg": "57ff6fed1cf6be784c53ee5fce746c99",
"assets/images/Dip.svg": "eb566252aabebb65a02529d62e60054d",
"assets/images/Reverse-Hyperextension.svg": "5740f0966dd5f5488598f7a7bf34944c",
"assets/images/Wide-Grip-Inverted-Row.svg": "82b90220453f870363567d964c4bd8b7",
"assets/images/Bulgarian-Split-Squat.svg": "800fbe91bd541afead772ae27d181bbc",
"assets/images/Kneeling-Wrist-Flexor-Stretch.svg": "78d8db31328f7cf8c34590479f43263e",
"assets/images/Incline-Push-Up.svg": "c981dcf1707b3ebbbd49983e48bf3d7a",
"assets/images/Single-Leg-Squat.svg": "4791f79c85589482d224e8b9135642c2",
"assets/images/Band-Assisted-Nordic-Hamstring-Curl.svg": "d17a67923fd4a2f7f377171849af24d4",
"assets/images/Pseudo-Planche-Push-up.svg": "4fe894bdc008fd4782da9f2bf8b26c21",
"assets/images/Band-Warm-up-Shoulder-Stretch.svg": "188b061e38846812feac161d9f67d613",
"assets/images/Incline-Reverse-Hyperextension.svg": "4d65537d14a09cda7e805d4003652ab2",
"assets/images/Romanian-Deadlift.svg": "bc9c9db3e311b0ea801cbf4aba9c28b7",
"assets/images/Supported-Headstand.svg": "f616853135fd03f9ca71747e9129f427",
"assets/images/Weighted-Pull-Up.svg": "90dd1d6f59357fe5839892dc8186dcdf",
"assets/images/Wheel-Rollout.svg": "5da2b392f30758043ae48ef0c142d918",
"assets/images/Push-up.svg": "88b2d0b64ccd609cee704bd6fd7298ed",
"assets/images/Nordic-Hamstring-Curl.svg": "98e0f01f15a02d1f76a45b290b402462",
"assets/images/Inverted-Row.svg": "fa537afdee999aadaca29745293bdf3f",
"assets/images/Pull-up.svg": "f1fcbf1d0dd43a00250a4bf8f4002665",
"assets/images/Dead-Bug.svg": "a639604fd7074c43a0105b255f86b41e",
"assets/images/Negative-Pull-Up.svg": "1e8685eb6ca7f8fe76ad8201d172a99e",
"assets/images/Handstand-Push-Up.svg": "215a8b73f128d45d738d51da448add9a",
"assets/images/Squats.svg": "947eacfd97c1aaeddc074c8602bd8658",
"assets/images/Archer-Pull-Up.svg": "3bb3f7d8d66d4820a844ef289c66508c",
"assets/images/Rocky-Pull-Up.svg": "d34e635b731887e6fab1dac2fc709c84",
"assets/images/Standing-Wheel-Rollout.svg": "4df666d2c76eb8d12faa3ebc6ea35162",
"assets/images/Scapular-Pull-Up.svg": "011c4c42a7095ef39f3213c5b52ca5e3",
"assets/images/High-Bar-Inverted-Row.svg": "89cbe8860a61de8f0077cc411340d41b",
"assets/images/Diamond-Push-up.svg": "f0c9fe326c55ec5be49d868d944e8a78",
"assets/images/Front-Plank.svg": "572230e43072f286810da4106b8c7e7f",
"assets/images/Single-Leg-Deadlift.svg": "c68e87d3bfb3e4c01239f2838076315a",
"assets/images/Weighted-Inverted-Row.svg": "7750b15c6b9cb830e531a60626115f9f",
"assets/AssetManifest.json": "ef33b66432f40d68b103a08c2a14c844",
"assets/NOTICES": "4283adf6193275e4a0f40532c6a01432",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "767f6f42581619e25f352b348069279e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ce05b89f7d478c96530b55d9f890d6f0",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
