if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),l={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>l[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f9710d8111f1d504f1c2ada1455b0e51"},{url:"/_next/static/chunks/187-ba8a00c8c93c4335.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/21fab5f8-14e6b6994a4aacfd.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/314-e9f411a789c29e67.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/341-976f9de9443fe664.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/38240a98-fadbe49081a5660d.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/452-137f1245154676ba.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/4be35039-14b9e79048d94c96.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/507.4232506669fc3eac.js",revision:"4232506669fc3eac"},{url:"/_next/static/chunks/567.0a6cf7f5edf23df0.js",revision:"0a6cf7f5edf23df0"},{url:"/_next/static/chunks/616-45c754ddb0b100bd.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/625-e32c542cc958f93d.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/667-6744750d5994bed1.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/668-86482c4ce40d4cf6.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/733-3dc6ab3e21c8046c.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/847-a80f166a435ffb03.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/937.62dd87fe51296579.js",revision:"62dd87fe51296579"},{url:"/_next/static/chunks/957.6bc48fa999b6149e.js",revision:"6bc48fa999b6149e"},{url:"/_next/static/chunks/961-7e3f1b84c16aaca7.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/98.034f5be3618a3a46.js",revision:"034f5be3618a3a46"},{url:"/_next/static/chunks/995-75cd8891b9255598.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/acaecae2-b6a198e5663e5911.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/app/layout-cf93212bc4fed385.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/app/page-3cb44bcdeb569f7c.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/app/stream/live/layout-e412ab00dcb4f86e.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/app/stream/live/page-1e587bbe30337b2a.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/app/stream/page-4ea190f99dc2f6a7.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/app/view/%5BplayId%5D/layout-d36c0815d942c2b1.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/app/view/%5BplayId%5D/page-164922c63a2bd55a.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/app/view/page-7663a3563e8c8b6b.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/framework-f780fd9bae3b8c58.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/main-app-7429658db3ca1702.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/main-f6b3077cd980225c.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/pages/_app-3910935429a6a041.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/pages/_error-18b05a45190f5503.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-87f955f760fd254e.js",revision:"lj9HnccPPDCw3lmXPTWun"},{url:"/_next/static/css/1db089703284f6ea.css",revision:"1db089703284f6ea"},{url:"/_next/static/css/623bad9ad085eebd.css",revision:"623bad9ad085eebd"},{url:"/_next/static/css/77d52468f7f3c910.css",revision:"77d52468f7f3c910"},{url:"/_next/static/css/e486bd936cc81534.css",revision:"e486bd936cc81534"},{url:"/_next/static/lj9HnccPPDCw3lmXPTWun/_buildManifest.js",revision:"5e51f38480e5bb6143c4c1df6074b8e8"},{url:"/_next/static/lj9HnccPPDCw3lmXPTWun/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/MJheader.84951e19.svg",revision:"48ff5b7fcacb68a8c99fd59150c9f6f0"},{url:"/_next/static/media/defaultAvatar.807c62b2.png",revision:"d46464dd5da180af1ddb991c4851e44e"},{url:"/_next/static/media/guitar.7e7022d0.png",revision:"d6a30458a0f6ee5dcf4ac68eeb64b63f"},{url:"/_next/static/media/leafs.056094e6.png",revision:"f266564a000b0be8a6034dfe54adb8ae"},{url:"/_next/static/media/myJam.f16f460f.svg",revision:"054f7e0fda8b64c3d9573f436f507a66"},{url:"/_next/static/media/sGrass.0011dd83.png",revision:"e83d1c01eb486da1961348e33da94d04"},{url:"/_next/static/media/speaker.f96f735b.png",revision:"29509e9e3539fd884696a5e536c582c2"},{url:"/_next/static/media/watermelon.5b12b91d.png",revision:"4f9ef1f14545ee96935c26c126b3387c"},{url:"/avatar.png",revision:"72d4eb93180b15f1529cb1eec44142a7"},{url:"/background.png",revision:"8745eb46938e74a66eced8178e77142f"},{url:"/favicon.ico",revision:"6e49e849ec2c9c5f0ae1e40a3fd3555b"},{url:"/greenbar.png",revision:"eff24aba04a5050f4d721a412a0e6210"},{url:"/leafs.png",revision:"f266564a000b0be8a6034dfe54adb8ae"},{url:"/manifest.json",revision:"90b0139f28149f475b5abda85b0d425f"},{url:"/myJam.svg",revision:"b1b4d53d9d0dd2ce18057c746478d6c1"},{url:"/pwa_192.png",revision:"48d3689aa4335f1959da74a878d3d87c"},{url:"/pwa_512.png",revision:"f2bebfaf0a5964e76c8a568048bc11e3"},{url:"/speaker.png",revision:"29509e9e3539fd884696a5e536c582c2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
