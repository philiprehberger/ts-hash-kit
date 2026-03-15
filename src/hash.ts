import { murmur3 } from './murmur3';
import { sha256, sha512 } from './crypto';
import { hmac } from './hmac';

export const hash = {
  murmur3,
  sha256,
  sha512,
  hmac,
} as const;
