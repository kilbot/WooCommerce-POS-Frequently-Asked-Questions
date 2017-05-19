---
title: Why am I getting an IndexedDB Error?
description: Some browsers will give an IndexedDB Error if Private Browsing is enabled.
---

Some browsers will disable access to IndexedDB when [Private Browsing](https://en.wikipedia.org/wiki/Privacy_mode) is enabled. 
This will result in an IndexedDB Error shown below. 

![IndexedDB Error](https://wcpos.com/wp-content/uploads/2016/07/indexedDB-error-e1469516372906.png "Example of indexedDB error due to Private Browsing")

![Open IndexedDB Error](https://wcpos.com/wp-content/uploads/2017/01/open-indexeddb-error.png "Another example of indexedDB error due to Private Browsing")

### Adding WooCommerce POS to the home screen

Web pages that [added to the home screen](http://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/) will be automatically launched in privacy mode. 
Unfortunately this means that you cannot add WooCommerce POS to your iOS or Android home screen at this time.

### Other causes

Some browser may 'lock' IndexedDB access to one tab at a time. 
An IndexedDB error may occur if you attempt to operate WooCommerce POS in two tabs simultaneously.