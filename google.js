// google_redirect.js
// 将 google.cn / google.com.hk / google.com.tw 等域名重定向到 google.com
let url = $request.url;
let redirect = url.replace(/google\.(cn|com\.hk|com\.tw)/, "google.com");

if (redirect !== url) {
  $done({
    response: {
      status: 302,
      headers: { "Location": redirect }
    }
  });
} else {
  $done({});
}
