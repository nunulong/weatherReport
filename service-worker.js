"use strict";var precacheConfig=[["/weatherReport/index.html","0c379250ea85be0d76bd5cb7283cb7f9"],["/weatherReport/static/css/main.db3d2773.css","ec79abba3085d809b4efd1975a6a6dae"],["/weatherReport/static/js/main.91d9d2b9.js","1676c2d35b4411147f9ea8f9a3bfc645"],["/weatherReport/static/media/01d.d37bc50c.svg","d37bc50c474fc08f6bd1d9a67c6355bd"],["/weatherReport/static/media/01n.bd386a65.svg","bd386a6514bfc6443addf215decf7b68"],["/weatherReport/static/media/02d.6caa54b4.svg","6caa54b43733200918b84ad7e2f02895"],["/weatherReport/static/media/02n.01549e46.svg","01549e46b5979d52cf16f60dc950fdd2"],["/weatherReport/static/media/03d.85f34bb2.svg","85f34bb2adf6145a59a73d89de893f24"],["/weatherReport/static/media/03n.a8ffe7ce.svg","a8ffe7cefd227b14246bfa32faf8e487"],["/weatherReport/static/media/04d.d0ca9a39.svg","d0ca9a3978784cc5f694a0b04dc193b4"],["/weatherReport/static/media/04n.a8ffe7ce.svg","a8ffe7cefd227b14246bfa32faf8e487"],["/weatherReport/static/media/09d.d83471c2.svg","d83471c24cf3966761de0f0aa0c0bbc1"],["/weatherReport/static/media/09n.910e1057.svg","910e105732a771f57ffbff6a82630600"],["/weatherReport/static/media/10d.c50bf3e3.svg","c50bf3e3d6a5c2b01a34692f66cfcfa9"],["/weatherReport/static/media/10n.45a86be0.svg","45a86be0a0a65d817d0b3ff31fe37175"],["/weatherReport/static/media/11d.bc6f153e.svg","bc6f153e495997015ac8b0f6a8282634"],["/weatherReport/static/media/11n.12c7ad8f.svg","12c7ad8fadc75dc33ef160ef63d897dd"],["/weatherReport/static/media/13d.79f6eb03.svg","79f6eb0348ae0a985a07c26c7e2834ae"],["/weatherReport/static/media/13n.ea38d2f4.svg","ea38d2f44d8a84ed515a75ca2a9892b3"],["/weatherReport/static/media/50d.f1aae715.svg","f1aae715dc7013d6f04fffbb6f1b7cc1"],["/weatherReport/static/media/50n.dc59f73d.svg","dc59f73d983ad334bcfb572ce7cf8c6e"],["/weatherReport/static/media/background.e78b5615.svg","e78b561561e0911af1eae4c8c3de25c4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/weatherReport/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});