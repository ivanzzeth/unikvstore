export function auth(clientId: string, redirectUri?: string) {
  const YOUR_REDIRECT_URI =
    globalThis.window.location.protocol +
    "//" +
    globalThis.window.location.host; // 'http://localhost:3000'
  const internalState = "try_sample_request";

  clientId = clientId;
  redirectUri = redirectUri ?? YOUR_REDIRECT_URI;
  // Google's OAuth 2.0 endpoint for requesting an access token
  const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create element to open OAuth 2.0 endpoint in new window.
  const form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);
  console.log("YOUR_REDIRECT_URI: ", YOUR_REDIRECT_URI);

  // Parameters to pass to OAuth 2.0 endpoint.
  const params = {
    client_id: clientId,
    redirect_uri: redirectUri,
    scope:
      "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata",
    state: internalState,
    include_granted_scopes: "true",
    response_type: "token",
  };

  // Add form parameters as hidden input values.
  for (const p in params) {
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", (params as any)[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
