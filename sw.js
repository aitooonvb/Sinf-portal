// ▼ キャッシュの名前（バージョンを上げると古いキャッシュを破棄できます）
const CACHE_NAME = 'school-portal-v1';

// ▼ オフラインでも使えるようにキャッシュするファイル一覧
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  './icon.png'
];

// インストール時：ファイルをキャッシュに保存
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// アクティブ時：古いキャッシュを削除
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// ネットワークリクエスト時：キャッシュがあればキャッシュを返す、なければネット取得
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response; // キャッシュから返す
      }
      return fetch(event.request); // ネットから取得
    })
  );
});
