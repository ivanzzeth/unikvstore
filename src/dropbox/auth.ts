import { DropboxAuth } from "dropbox";
import { parseQueryString } from "../utils";

export async function auth(clientId: string, redirectUri?: string) {
  const YOUR_REDIRECT_URI =
    redirectUri ??
    globalThis.window.location.protocol +
      "//" +
      globalThis.window.location.host; // 'http://localhost:3000'
  let internalState = "try_sample_request";

  const dbxAuth = new DropboxAuth({ clientId });
  const codeVerifierKey = "dropbox-code-verifier";
  const codeKey = "dropbox-code";
  const refreshTokenKey = "dropbox-refresh-token";

  const codeVerifier = globalThis.sessionStorage.getItem(codeVerifierKey);

  if (codeVerifier) {
    dbxAuth.setCodeVerifier(codeVerifier!);
    let accessToken!: string;
    let refreshToken = globalThis.sessionStorage.getItem(refreshTokenKey);

    if (refreshToken) {
      dbxAuth.setRefreshToken(refreshToken);

      dbxAuth.checkAndRefreshAccessToken();
      accessToken = dbxAuth.getAccessToken();
    } else {
      const code =
        getCodeFromUrl() || globalThis.sessionStorage.getItem(codeKey);
      if (!code) {
        throw new Error("Dropbox auth failed: not found code");
      }
      globalThis.sessionStorage.setItem(codeKey, code);

      refreshToken = dbxAuth.getRefreshToken();
      if (refreshToken) {
        dbxAuth.setRefreshToken(refreshToken);
        globalThis.sessionStorage.setItem(refreshTokenKey, refreshToken);
      }
      try {
        const resp = await dbxAuth.getAccessTokenFromCode(
          YOUR_REDIRECT_URI,
          code,
        );
        accessToken = (resp.result as any).access_token;
      } catch {
        // Clear states
        globalThis.sessionStorage.removeItem(codeKey);
        globalThis.sessionStorage.removeItem(codeVerifierKey);
        globalThis.sessionStorage.removeItem(refreshTokenKey);
        return auth(clientId, redirectUri);
      }
    }

    const params = parseQueryString();
    const state: string = params.state;
    if (accessToken && state == internalState) {
      dbxAuth.setAccessToken(accessToken);
      globalThis.location.href =
        YOUR_REDIRECT_URI + `/?access_token=${accessToken}&state=${state}`;
    } else {
      throw new Error("Authorize failed");
    }
  } else if (!hasRedirectedFromAuth()) {
    const authUrl = await dbxAuth.getAuthenticationUrl(
      YOUR_REDIRECT_URI,
      internalState,
      "code",
      "offline",
      undefined,
      undefined,
      true,
    );
    globalThis.sessionStorage.clear();
    globalThis.sessionStorage.setItem(
      codeVerifierKey,
      dbxAuth.getCodeVerifier(),
    );
    globalThis.location.href = authUrl.toString();
  } else {
    throw new Error("Unknown case, dropbox auth failed");
  }
}

function getCodeFromUrl(): string {
  const params = parseQueryString();

  const code = params.code;
  return code;
}

function hasRedirectedFromAuth() {
  return !!getCodeFromUrl();
}
