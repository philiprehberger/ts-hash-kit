import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('hash-kit', () => {
  it('should export hash', () => {
    assert.ok(mod.hash);
  });

  it('should export murmur3', () => {
    assert.ok(mod.murmur3);
  });

  it('should export sha256', () => {
    assert.ok(mod.sha256);
  });

  it('should export sha512', () => {
    assert.ok(mod.sha512);
  });

  it('should export hmac', () => {
    assert.ok(mod.hmac);
  });

  it('should export toHex', () => {
    assert.ok(mod.toHex);
  });

  it('should export toUint8Array', () => {
    assert.ok(mod.toUint8Array);
  });
});
