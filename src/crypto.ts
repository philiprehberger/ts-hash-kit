import { toHex, toUint8Array } from './utils';
import type { HashAlgorithm } from './types';

async function digestWith(algorithm: HashAlgorithm, input: string): Promise<string> {
  const data = toUint8Array(input);
  const buffer = await globalThis.crypto.subtle.digest(algorithm, data.buffer as ArrayBuffer);
  return toHex(buffer);
}

export async function sha256(input: string): Promise<string> {
  return digestWith('SHA-256', input);
}

export async function sha512(input: string): Promise<string> {
  return digestWith('SHA-512', input);
}
