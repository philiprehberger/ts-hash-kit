# @philiprehberger/ts-hash-kit

[![CI](https://github.com/philiprehberger/ts-hash-kit/actions/workflows/publish.yml/badge.svg)](https://github.com/philiprehberger/ts-hash-kit/actions/workflows/publish.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/ts-hash-kit.svg)](https://www.npmjs.com/package/@philiprehberger/ts-hash-kit)
[![License](https://img.shields.io/github/license/philiprehberger/ts-hash-kit)](LICENSE)

Simple cross-platform hashing utilities.

## Installation

```bash
npm install @philiprehberger/ts-hash-kit
```

## Usage

```ts
import { hash } from '@philiprehberger/ts-hash-kit';

const checksum = hash.murmur3('cache-key');            // sync, fast
const digest = await hash.sha256('hello');              // cross-platform
const sig = await hash.hmac(secret, payload, 'SHA-256'); // HMAC
```

## API

| Function | Description |
|----------|-------------|
| `hash.murmur3(input, seed?)` | MurmurHash3 (sync) |
| `hash.sha256(input)` | SHA-256 via Web Crypto |
| `hash.sha512(input)` | SHA-512 via Web Crypto |
| `hash.hmac(key, data, algorithm?)` | HMAC signing |
| `toHex(buffer)` | ArrayBuffer to hex string |
| `toUint8Array(input)` | String to Uint8Array |


## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
