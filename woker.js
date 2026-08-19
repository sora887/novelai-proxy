export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "api.novelai.net";
    const newRequest = new Request(url.toString(), request);
    return fetch(newRequest);
  }
};
