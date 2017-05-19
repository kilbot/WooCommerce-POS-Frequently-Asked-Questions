---
title: Which browsers are compatible with WooCommerce POS?
tags: android, browser, ios, ipad, mac, tablet, windows
description: WooCommerce POS requires a modern browsers such as Chrome on the desktop or Safari 8 on iOS.
---

The following browsers have been tested using [Browserstack](http://browserstack.com):

*   Chrome 31+
*   Firefox 31+
*   Safari 8+
*   Opera 28+
*   iOS Safari 8+
*   Android Browser 4.4+
*   Microsoft Edge

![compatibility-chart](https://wcpos.com/wp-content/uploads/2015/06/compatibility-chart.png "Browsers compatible with WooCommerce POS")

### IndexedDB

WooCommerce POS uses IndexedDB to persist the product database on your computer or device. 
[IndexedDB](http://www.w3.org/TR/IndexedDB/) is currently a 'Candidate Recommendation' specification by the W3C and is not implemented by all browsers. 
To see if your browser is compatible please check [caniuse.com](http://caniuse.com/indexeddb). 

WooCommerce POS also uses the [Flexbox Layout](http://www.w3.org/TR/2015/WD-css-flexbox-1-20150514/) module, currently a W3C Last Call Working Draft. 
To see if your browser is compatible please check [caniuse.com](http://caniuse.com/flexbox).

### Private Browsing

Some browsers will disable access to IndexedDB when [Private Browsing](https://en.wikipedia.org/wiki/Privacy_mode) is enabled. 
This will result in an IndexedDB Error shown below. 

![IndexedDB Error](https://wcpos.com/wp-content/uploads/2016/07/indexedDB-error-e1469516372906.png "Example of indexedDB error due to Private Browsing")

{% hint style='info' %}
Adding a webpage to your Home Screen in iOS will force it to open in a Private session. 
If you add the POS to your Home Screen in iOS you will get the error message above.
{% endhint %}