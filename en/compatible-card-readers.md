---
title: What card readers are compatible with WooCommerce POS?
tags: credit card, card reader, hardware, peripherals
description: 
---

In version 0.4.x, WooCommerce POS is not compatible with any card readers. 
Support for non-encrypting card readers will be supported from version 0.5, please [read the documentation](https://docs.wcpos.com/v/0.5.0/en/how-to/operate/checkout/card-reader.html) for more information. 

### Encrypting vs Non-encrypting card readers

Non-encrypting card readers use keyboard emulation to output the card name, number and expiry to the browser. 
Encrypting card readers require specific integration to decrypt the card data. 
Support for encrypting card readers will likely not be possible until native WooCommerce POS applications are developed for Windows, Mac, iOS and Android.

### Using encrypting card readers

If your bank or merchant gateway offers an encrypted payment solution, you may be able to use this in conjunction with the default Card gateway which comes with the free version of WooCommerce POS. 
For example, [Stripe](https://wordpress.org/plugins/woocommerce-gateway-stripe/) offers [a free application](https://paymentforstripe.com/card-reader) for iOS and Android which can turn an old phone into an external card reader. 

![External card readers](https://wcpos.com/wp-content/uploads/2017/07/external-card-readers.png "Example of an EFTPOS machine supplied by your bank (left) and the mobile application supplied by Stripe (right)")

The workflow for such a scenario would look like the following: 

1. Add items to the POS cart to calculate the order total. Select a customer if relevant.
2. Enter the order total into the external payment processor and swipe the card.
3. If payment is successful, complete the order using the default Card gateway.

![Default Card Gateway](https://wcpos.com/wp-content/uploads/2017/07/default-card-gateway.png "Example settings for the default Card gateway")