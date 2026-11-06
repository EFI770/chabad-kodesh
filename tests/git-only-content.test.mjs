import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('public site loads content only from the repository (git-only editing)', () => {
  assert.match(html, /loadJson\('\.\/content\.json'\)/);
  assert.ok(!html.includes('loadFromBin'), 'jsonbin loader removed');
  assert.ok(!html.includes('api.jsonbin.io'), 'no third-party content API');
  assert.ok(!html.includes('config.json'), 'no external content config');
  assert.ok(!fs.existsSync(new URL('../config.json', import.meta.url)), 'config.json removed');
  assert.ok(!fs.existsSync(new URL('../admin.html', import.meta.url)), 'admin.html removed');
});

test('content.json is valid and render() is still referenced', () => {
  JSON.parse(fs.readFileSync(new URL('../content.json', import.meta.url), 'utf8'));
  assert.match(html, /function render\(data\)/);
  assert.match(html, /if\(data\) render\(data\)/);
});
