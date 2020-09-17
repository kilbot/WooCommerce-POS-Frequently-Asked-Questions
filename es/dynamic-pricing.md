---
title: Can I have dynamic pricing?
---

# dynamic-pricing

_Dynamic pricing_ allows store owners to set product discounts based on a set of rules. For example, buy 10 or more and receive a discount, or gold members receive a discount etc. These rules are usually configured using a third party plugin such as [WooCommerce Dynamic Pricing](https://woocommerce.com/products/dynamic-pricing/).

**WooCommerce POS is not currently compatible with** _**any**_ **dynamic pricing plugins.**

WooCommerce POS uses the [WC REST API](https://woocommerce.github.io/woocommerce-rest-api-docs/v3.html) to retrieve product data from your online store. This data is then stored locally so that searching products can be as fast as possible. By default, the product data from the WC REST API does not contain any information about the dynamic pricing rules.

In order for WooCommerce POS to allow dynamic pricing, the third party plugin would need to expose the pricing rules via the REST API. Thus far, we are unaware of any dynamic pricing plugins that are compatible with the REST API. If you want WooCommerce POS to support your dynamic pricing plugin, please contact the developers and refer them to this FAQ.

