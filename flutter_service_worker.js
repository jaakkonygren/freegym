'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ab72f232e82f62577e4ad2d15509b076",
"version.json": "2b90cd13b2d0f23d0c3184a779b50a2a",
"splash/img/light-2x.png": "7f7f60c7c78b02af97e15d7c42a674f9",
"splash/img/dark-4x.png": "c61ef9c880a6f46a5c1c28a8c2e5dd0d",
"splash/img/light-3x.png": "3381b8185d79bbf4fd76fd3ff90ba1d8",
"splash/img/dark-3x.png": "3381b8185d79bbf4fd76fd3ff90ba1d8",
"splash/img/light-4x.png": "c61ef9c880a6f46a5c1c28a8c2e5dd0d",
"splash/img/dark-2x.png": "7f7f60c7c78b02af97e15d7c42a674f9",
"splash/img/dark-1x.png": "431c76da24c83ba615acce5781a0620a",
"splash/img/light-1x.png": "431c76da24c83ba615acce5781a0620a",
"index.html": "592d3389a5cbdb2c34552c7a02a051a7",
"/": "592d3389a5cbdb2c34552c7a02a051a7",
"main.dart.js": "ac61400321b23bf624d3aab443b5f6cf",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "ba745ff5ca87b4d14744daab3f5b8855",
"icons/Icon-192.png": "f35e6f977f4abab5f6aabdfbe1770aeb",
"icons/Icon-maskable-192.png": "f35e6f977f4abab5f6aabdfbe1770aeb",
"icons/Icon-maskable-512.png": "7f7f60c7c78b02af97e15d7c42a674f9",
"icons/Icon-512.png": "7f7f60c7c78b02af97e15d7c42a674f9",
"manifest.json": "21e99279fd10464d79e5fbd1bd5428c1",
"assets/images/Wheel-Rollout.png": "7d3668a5915baab67b57aee2ee514b7a",
"assets/images/Supported-Headstand.png": "ac62e969af0965184cc077d812097e0e",
"assets/images/Weighted-Pull-Up.png": "3f5cd04abd441790e2006ea25ca7d688",
"assets/images/Romanian-Deadlift.png": "92588629e5ce1cc59356aa0a2d4d558d",
"assets/images/Incline-Reverse-Hyperextension.png": "24d1c9a775adb154ec83a7e3c1ae3cdb",
"assets/images/Band-Warm-up-Shoulder-Stretch.png": "ff38c3a3678e88694f6456a73f9de5b8",
"assets/images/Band-Assisted-Nordic-Hamstring-Curl.png": "1f4a8ce2d18a9ad68b97d6d62a207ce8",
"assets/images/Pseudo-Planche-Push-up.png": "7fa19bbff9b2f18b45983ac29d25fe66",
"assets/images/Single-Leg-Squat.png": "2ade7f5d29785850953f7ba951b2223d",
"assets/images/Incline-Push-Up.png": "4d9aedffd1e13fd0014ee4e7bb6495e9",
"assets/images/00.png": "3f4f6774d76829bf7dd2d9430979e5ed",
"assets/images/Kneeling-Wrist-Flexor-Stretch.png": "d9fc8dd83215be4e7a036b8043d12ef5",
"assets/images/Dip.png": "002239333b90e433c66ee91c676ff8fe",
"assets/images/Bulgarian-Split-Squat.png": "9bb621566824f1e4c19a12a29b56b0c9",
"assets/images/Wide-Grip-Inverted-Row.png": "c704464f578b138c1e925a74c98c4022",
"assets/images/Reverse-Hyperextension.png": "c63f776b543af30d515d111e9df67f99",
"assets/images/Ring-Rollout.png": "2f96fc459f49f07d387eebfbc1178f11",
"assets/images/Pike-Push-up.png": "f09c64dae8de3d026d7ba56cdaf901cc",
"assets/images/Squat-to-Overhead-Reach.png": "3c5b09fdf5a8e33cdd0a1f0ab53f9691",
"assets/images/Weighted-Dip.png": "d8da4c5449c7fc3e059dced368380074",
"assets/images/Single-Leg-Pistol-Squat.png": "b46e1d86a543823d854ae014df01b87c",
"assets/images/Band-Pallof-Press.png": "abdae1c0e74b8562ae01fb5b3fb59ff9",
"assets/images/Shrimp-Squat.png": "af964b8d8342eb27279fb791af49c7ed",
"assets/images/Weighted-Inverted-Row.png": "e42b72972bde9e393dd95801391dc456",
"assets/images/Single-Leg-Deadlift.png": "82224e576e21efb2ba1f68b258486621",
"assets/images/Front-Plank.png": "31b76edb31f119aab0714d13adca7b0d",
"assets/images/Diamond-Push-up.png": "9e2ff522902697925083961a3aa9b69a",
"assets/images/High-Bar-Inverted-Row.png": "70b396e3917ce89b1841e91ab6a66fa6",
"assets/images/Scapular-Pull-Up.png": "2297e99c0c8a451dd209f9d67e0337f6",
"assets/images/Standing-Wheel-Rollout.png": "1145fa746b0fe34bc3aa65f0ad1a5ef2",
"assets/images/Archer-Pull-Up.png": "a2d6facc2d59476339b289cb0a577dfb",
"assets/images/Rocky-Pull-Up.png": "803e495896c4be7e7c6ef554484a768e",
"assets/images/Squats.png": "2a75b9a8ad9f022af179606648e8207b",
"assets/images/Handstand-Push-Up.png": "2cd6bdacda11b5306c525b59b02da7c2",
"assets/images/Negative-Pull-Up.png": "d5bc0d4a286d36b4455be7b60d763059",
"assets/images/Pull-up.png": "841c9212b1e33b9bd2e809d3bfbcb5a3",
"assets/images/Dead-Bug.png": "fb520bf8d9ee7698755dfd74d3c69176",
"assets/images/Inverted-Row.png": "af5c8a5765e38e26c3922abf68b3a4ec",
"assets/images/Nordic-Hamstring-Curl.png": "fe0c43293415e331b06326df3cd5f545",
"assets/images/Push-up.png": "d4f49e85bb5de43dfd904d49817c6636",
"assets/AssetManifest.json": "646b76e1de42a475d279886822b10a85",
"assets/NOTICES": "3323474dffc3a114eb1289647d58f828",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6d8864f3d850be5d9cc7a0e7bade2750",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "773a5a9f949d4cb1a0ebfbe305a2ec6b",
"assets/fonts/MaterialIcons-Regular.otf": "8365a78a66ff96715000aca9d417bf4b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
