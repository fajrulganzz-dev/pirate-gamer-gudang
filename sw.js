// Memastikan Service Worker aktif
self.addEventListener('install', (e) => {
  console.log('Service Worker terinstall');
});

self.addEventListener('fetch', (e) => {
  // Menangani request dari web app
});

