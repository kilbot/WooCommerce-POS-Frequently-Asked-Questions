---
tags: android, browser, ios, ipad, mac, tablet, windows
description: WooCommerce POS requires a modern browsers such as Chrome on the desktop or Safari 8 on iOS.
---

The following browsers have been tested using [Browserstack](browserstack.com):

*   [Chrome Canary](https://www.google.com/chrome/browser/canary.html) (recommended)
*   Chrome 31+
*   Firefox 31+
*   Safari 8+
*   Opera 28+
*   iOS Safari 8+
*   Android Browser 4.4+
*   Microsoft Edge

![compatibility-chart](http://woopos.com.au/wp-content/uploads/2015/06/compatibility-chart.png) 

WooCommerce POS uses IndexedDB to persist the product database on your computer or device. [IndexedDB](http://www.w3.org/TR/IndexedDB/) is currently a 'Candidate Recommendation' specification by the W3C and is not implemented by all browsers. To see if your browser is compatible please check [caniuse.com](http://caniuse.com/indexeddb). 

WooCommerce POS also uses the [Flexbox Layout](http://www.w3.org/TR/2015/WD-css-flexbox-1-20150514/) module, currently a W3C Last Call Working Draft. To see if your browser is compatible please check [caniuse.com](http://caniuse.com/flexbox).

### Recommended Browser

<span style="float:left;margin-right:10px;width:100px;">![Chrome Canary](http://woopos.com.au/wp-content/uploads/2015/05/chrome-canary-512-150x150.png)</span> The recommended browser for WooCommerce POS is [Google Chrome Canary](https://www.google.com/chrome/browser/canary.html). Canary is a 'beta' version of Chrome which gives you access to the very latest web technologies. It is recommended that you install Canary and use it for WooCommerce POS, but you should still keep your current browser for normal web surfing.

### iOS

The only browser on iOS which currently has IndexedDB support is Safari on iOS 8 or higher. Other browsers, such as Chrome for iOS, do not have access to IndexedDB. I expect this will change in the future but that is Apple's prerogative. If you are using Safari on iOS 8+ and have issues with the POS not loading, please check you do not have Private Browsing turned on.

### Internet Explorer

Internet Explorer currently has buggy implementations of both IndexedDB and Flexbox and therefore WooCommerce POS is incompatible with all versions of IE. **Update:** early testing seems to indicate that WooCommerce POS will work on IE Edge.