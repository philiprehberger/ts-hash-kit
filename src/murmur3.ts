export function murmur3(input: string, seed: number = 0): string {
  let h1 = seed >>> 0;
  const len = input.length;
  const nblocks = len >> 2;

  const c1 = 0xcc9e2d51;
  const c2 = 0x1b873593;

  for (let i = 0; i < nblocks; i++) {
    let k1 =
      (input.charCodeAt(i * 4) & 0xff) |
      ((input.charCodeAt(i * 4 + 1) & 0xff) << 8) |
      ((input.charCodeAt(i * 4 + 2) & 0xff) << 16) |
      ((input.charCodeAt(i * 4 + 3) & 0xff) << 24);

    k1 = Math.imul(k1, c1);
    k1 = (k1 << 15) | (k1 >>> 17);
    k1 = Math.imul(k1, c2);

    h1 ^= k1;
    h1 = (h1 << 13) | (h1 >>> 19);
    h1 = Math.imul(h1, 5) + 0xe6546b64;
  }

  let k1 = 0;
  const tail = nblocks * 4;
  switch (len & 3) {
    case 3: k1 ^= (input.charCodeAt(tail + 2) & 0xff) << 16;
    // falls through
    case 2: k1 ^= (input.charCodeAt(tail + 1) & 0xff) << 8;
    // falls through
    case 1:
      k1 ^= input.charCodeAt(tail) & 0xff;
      k1 = Math.imul(k1, c1);
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = Math.imul(k1, c2);
      h1 ^= k1;
  }

  h1 ^= len;
  h1 ^= h1 >>> 16;
  h1 = Math.imul(h1, 0x85ebca6b);
  h1 ^= h1 >>> 13;
  h1 = Math.imul(h1, 0xc2b2ae35);
  h1 ^= h1 >>> 16;

  return (h1 >>> 0).toString(16).padStart(8, '0');
}
