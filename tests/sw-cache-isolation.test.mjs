// Simulates efi770.github.io SHARED-ORIGIN CacheStorage with several apps' caches,
// and runs each service worker's activate cleanup logic against it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const swSource = fs.readFileSync(new URL('../service-worker.js', import.meta.url), 'utf8');

function makeCaches(existingKeys) {
  const store = new Set(existingKeys);
  return {
    keys: async () => [...store],
    delete: async (k) => store.delete(k),
    remaining: () => [...store].sort(),
  };
}

// Extract the CURRENT (patched) cleanup predicate from the real file
function currentCleanup(keys, caches) {
  const m = swSource.match(/keys\.map\(\(k\) => \((.+)\? caches\.delete\(k\) : null\)\)/);
  assert.ok(m, 'cleanup predicate found in service-worker.js');
  const pred = new Function('k', 'CACHE_NAME', 'CACHE_PREFIX', `return ${m[1]}`);
  const CACHE_NAME = swSource.match(/CACHE_NAME = "([^"]+)"/)[1];
  const CACHE_PREFIX = swSource.match(/CACHE_PREFIX = "([^"]+)"/)[1];
  return Promise.all(keys.map((k) => (pred(k, CACHE_NAME, CACHE_PREFIX) ? caches.delete(k) : null)));
}

// The OLD behavior (pre-patch), reconstructed for comparison
function oldCleanup(keys, caches) {
  const CACHE_NAME = 'chabad-kodesh-v9';
  return Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)));
}

const SHARED_ORIGIN_CACHES = [
  'chabad-kodesh-v8',              // this app, previous version
  'flight-checklist-cache-v7',     // flight checklist app, SAME ORIGIN
  'bris-checklist-v57',            // brit checklist app, SAME ORIGIN
  'some-future-app-v1',
];

test('OLD cleanup deletes OTHER APPS caches on the shared origin (data loss)', async () => {
  const caches = makeCaches(SHARED_ORIGIN_CACHES);
  await oldCleanup(await caches.keys(), caches);
  assert.deepEqual(caches.remaining(), []); // everything wiped incl. other apps
});

test('PATCHED cleanup deletes only own old caches, preserves other apps', async () => {
  const caches = makeCaches(SHARED_ORIGIN_CACHES);
  await currentCleanup(await caches.keys(), caches);
  assert.deepEqual(caches.remaining(), [
    'bris-checklist-v57',
    'flight-checklist-cache-v7',
    'some-future-app-v1',
  ]);
});

test('PATCHED cleanup still removes its own previous versions', async () => {
  const caches = makeCaches(['chabad-kodesh-v7', 'chabad-kodesh-v8']);
  await currentCleanup(await caches.keys(), caches);
  assert.deepEqual(caches.remaining(), []);
});
