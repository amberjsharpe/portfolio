"use strict";var precacheConfig=[["/portfolio/index.html","92f4834cfc56ba22c28b503e2483f62f"],["/portfolio/static/css/main.79c17bb8.css","37be2738a44d01c87913fd3bca97540f"],["/portfolio/static/js/main.a3119c77.js","681389a70748c5f9123bc07a58ff3075"],["/portfolio/static/media/ScreenSketch2.91301c3e.jpg","91301c3e8933feb51b907b100432cbd7"],["/portfolio/static/media/bookworm-insights.82caded1.png","82caded12cbef290a4053d04d47a7abc"],["/portfolio/static/media/bookworm-modal.6c578d11.png","6c578d113730cfee2a589014303814b5"],["/portfolio/static/media/bookworm-persona.36e922c2.png","36e922c266bfe2534fbac6ecf1bb4fea"],["/portfolio/static/media/bookworm-present.5b607a34.jpg","5b607a344d093bea21c812b1c431d434"],["/portfolio/static/media/bookworm2.69225aa2.png","69225aa25842bf689f94880485d553b0"],["/portfolio/static/media/bookworm3.a3dc9fed.png","a3dc9fed2854c7cf48b6b3e28b27e7f4"],["/portfolio/static/media/confetti-headshot.fba1aeb6.jpg","fba1aeb6efedc681702becd3a44ce59d"],["/portfolio/static/media/do-team.4e41c7dd.png","4e41c7dddda00d55604bc28b895af45d"],["/portfolio/static/media/do-user.ce003ae3.png","ce003ae33b36d44ae647510725b7a356"],["/portfolio/static/media/do-winnershot.e5114ca3.png","e5114ca368fa4e3b969c1d4f02011d63"],["/portfolio/static/media/mail-icon.6aa1c1e5.png","6aa1c1e5741c6d7fc65698f467670960"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});