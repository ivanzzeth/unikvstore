export function parseQueryString(): Record<string, unknown> {
  const fragmentString =
    globalThis.location.hash.charAt(0) == '#'
      ? globalThis.location.hash.substring(1)
      : globalThis.location.search.substring(1);
  // Parse query string to see if page request is coming from OAuth 2.0 server.
  const params = {};
  const regex = /([^&=]+)=([^&]*)/g;
  let m: RegExpExecArray;
  while ((m = regex.exec(fragmentString)!)) {
    // @ts-ignore
    params[decodeURIComponent(m[1]!)] = decodeURIComponent(m[2]!);
  }

  return params;
}

export function buf2hex(buffer: ArrayBufferLike) {
  // buffer is an ArrayBuffer
  return (
    '0x' +
    [...new Uint8Array(buffer)]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
  );
}

export const getRandomUint8Array = (length = 16) => {
  const array = new Uint8Array(length);
  return globalThis.crypto.getRandomValues(array);
};

export function getRandomString() {
  return buf2hex(globalThis.crypto.getRandomValues(new Uint8Array(16)));
}
