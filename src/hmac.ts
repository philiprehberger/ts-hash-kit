import { toHex, toUint8Array } from './utils';
import type { HashAlgorithm } from './types';

export async function hmac(
  key: string,
  data: string,
  algorithm: HashAlgorithm = 'SHA-256',
): Promise<string> {
  const keyData = toUint8Array(key);
  const cryptoKey = await globalThis.crypto.subtle.importKey(
    'raw',
    keyData.buffer as ArrayBuffer,
    { name: 'HMAC', hash: algorithm },
    false,
    ['sign'],
  );
  const signature = await globalThis.crypto.subtle.sign('HMAC', cryptoKey, toUint8Array(data).buffer as ArrayBuffer);
  return toHex(signature);
}
