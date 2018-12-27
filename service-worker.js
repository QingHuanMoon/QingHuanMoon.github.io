/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d9bc0921f245e2eb79b4b5464113994e"
  },
  {
    "url": "assets/css/0.styles.0d311379.css",
    "revision": "4ed4360e39aaf24ab444bbe90c9644a2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9d878458.js",
    "revision": "ee9a63eb7b16bf668cec63c0928ff958"
  },
  {
    "url": "assets/js/11.de4ddd63.js",
    "revision": "309f7a635b384b8bb02ccbf1331ffe84"
  },
  {
    "url": "assets/js/12.cbdd49ef.js",
    "revision": "ccfd4613273590051ca0b455cd68c7e5"
  },
  {
    "url": "assets/js/13.0bc1daea.js",
    "revision": "6e4f8b200192f34e8601c106c62be05a"
  },
  {
    "url": "assets/js/14.25f8f3b7.js",
    "revision": "4b2ed1d697b923287c2c6d32b18bd14c"
  },
  {
    "url": "assets/js/15.18c7e3e8.js",
    "revision": "6f293960938922af033df04313edfd77"
  },
  {
    "url": "assets/js/16.529b2797.js",
    "revision": "b53eedd55bc43e213257ae6a8ea07a8a"
  },
  {
    "url": "assets/js/17.dc5b597e.js",
    "revision": "915f1a5cdf364726808d541e74dd6ff1"
  },
  {
    "url": "assets/js/18.8a7b1914.js",
    "revision": "90bf377a89a719cb864e610bf1dbe759"
  },
  {
    "url": "assets/js/19.d73924f8.js",
    "revision": "09eb875dcd47b8c723784bb96d5c2d6e"
  },
  {
    "url": "assets/js/2.78e0f349.js",
    "revision": "d94eb1567c8d70d18138816a5b34a466"
  },
  {
    "url": "assets/js/20.90113d65.js",
    "revision": "a384941dde7a2e5f79430714fcba428f"
  },
  {
    "url": "assets/js/21.a77f7c04.js",
    "revision": "9d13df9b897e7442fb4871594979e49a"
  },
  {
    "url": "assets/js/22.bfdb1eac.js",
    "revision": "384e4a1ea30c373049486ccf0ef31018"
  },
  {
    "url": "assets/js/3.a5f4871a.js",
    "revision": "d19911897be34722e25a32ca7aacc9e6"
  },
  {
    "url": "assets/js/4.e9fc0047.js",
    "revision": "17f30642cb14478c65cd47dd00f814f1"
  },
  {
    "url": "assets/js/5.d6bf801c.js",
    "revision": "a8e10f63cfad6830599fcbec15f847bf"
  },
  {
    "url": "assets/js/6.d1115cdc.js",
    "revision": "bf268de05adf3ce4338104a65ccab417"
  },
  {
    "url": "assets/js/7.d6cc1c5e.js",
    "revision": "376700f089df850c2c2ac6be2353e10b"
  },
  {
    "url": "assets/js/8.aae48697.js",
    "revision": "0d6d45944bfa2d7251a253f34c50d526"
  },
  {
    "url": "assets/js/9.f7964eac.js",
    "revision": "25022baf26768f4369302e90471e3c5f"
  },
  {
    "url": "assets/js/app.99d62b46.js",
    "revision": "d4d1320176629bd20a89de38d68cad27"
  },
  {
    "url": "config/index.html",
    "revision": "6ea6464e9af5d6c0709c7211e22b4a3c"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "8322cba843978114dcf9fdb8d98b0969"
  },
  {
    "url": "js/help.js",
    "revision": "ebb8bc172845e376a2b19e75ca68f9cb"
  },
  {
    "url": "js/index.html",
    "revision": "6fd8ec67783ec6fd016f3e26e307fff0"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "e5fe1dd6c05c79b81a6e82d9114e7fd3"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "f9dd6eb2beae8f7f5c9eda4774644bec"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "bda773d11a690713e237f20caa37efd1"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "ea52afdd228f317a70e062f335ed50c3"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "e0afe3a9907fb3363469179ec1fa1b0f"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d47269ef1385847d0ef8af967040a6a3"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "214eafabeda75f2c6de39fa00f8b13cb"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "0114768d47332a51c6d1d85108da640b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7a2f243a07d946ddc6134ef104b973e7"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "5b33bdc4a9061b95a911e15ee43f28b6"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "f73332b1d90c82107a9cb9ed4a6aba71"
  },
  {
    "url": "zh/index.html",
    "revision": "57c7c03d91b5c4e3b3ac73011fccf13d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
