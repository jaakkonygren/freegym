'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ea437530d86d1f398a6feed85423c708",
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
"main.dart.js": "015f9c5292b2d935c9a4fc5d00b4b854",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "ca8678e7dbc39269c22f8e465279bb4c",
"icons/Icon-192.png": "41667ce4aa891ecb095a84fc5cc21405",
"icons/Icon-maskable-192.png": "41667ce4aa891ecb095a84fc5cc21405",
"icons/Icon-maskable-512.png": "5a6831e1c44ef80306aa42694200500f",
"icons/Icon-512.png": "5a6831e1c44ef80306aa42694200500f",
"manifest.json": "21e99279fd10464d79e5fbd1bd5428c1",
"assets/images/icon.png": "4da9c663137df9bbc8d3d014ba30f9cb",
"assets/images/14.png": "4059c114768d8c93de589e802e5d8088",
"assets/images/00.png": "f9f3cb9e77020e09acd9c0148cea0dac",
"assets/images/01.png": "cfa9b274be6318fb07f689f3ac1969af",
"assets/images/03.png": "acd2e903ca276fc02364c13aabebc256",
"assets/images/02.png": "f80267c95e38dad6333291c57cf983a1",
"assets/images/06.png": "0125dd47c77fd94f01102962763760a3",
"assets/images/12.png": "930ddce260206b9c5d18ea5ca45ea9d8",
"assets/images/13.png": "28dba5d1df84e00395d898a44829ac96",
"assets/images/07.png": "c4f8faf98b34faedf0fa3ff383db6a1d",
"assets/images/11.png": "430e00838264852c5bc324a272b1fcc3",
"assets/images/05.png": "cba0fe8cc88ca208e259a48155b016ce",
"assets/images/04.png": "5e5cbd0db613222a2a1918654cede504",
"assets/images/10.png": "42af60a47a3c9e0a7fcf8909edfbbe64",
"assets/images/09.png": "e5f47dfdddb5118f1e30c50a68ec6201",
"assets/images/08.png": "b601d2540184966d09514a4539485e67",
"assets/AssetManifest.json": "b565b93a09e1a3c2d770c758d7253b13",
"assets/NOTICES": "b6df80228ad518039efd5ce158c47605",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "50860995fb66053bd72c7959ba561658",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/grain/assets/grain.png": "4ee11adfab0fa5ef9f9f32d865614f2e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "46a962ff690c1943039808750d5921ae",
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
