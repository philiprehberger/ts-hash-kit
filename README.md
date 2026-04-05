# @philiprehberger/hash-kit

[![CI](https://github.com/philiprehberger/ts-hash-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-hash-kit/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/hash-kit.svg)](https://www.npmjs.com/package/@philiprehberger/hash-kit)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-hash-kit)](https://github.com/philiprehberger/ts-hash-kit/commits/main)

Simple cross-platform hashing utilities

## Installation

```bash
npm install @philiprehberger/hash-kit
```

## Usage

```ts
import { hash } from '@philiprehberger/hash-kit';

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

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-hash-kit)

🐛 [Report issues](https://github.com/philiprehberger/ts-hash-kit/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-hash-kit/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
