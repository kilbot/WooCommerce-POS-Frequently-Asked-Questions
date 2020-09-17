---
title: Why am I getting a Time Out error?
---

# time-out

WooCommerce POS will give a timeout error if an order takes longer than 1 minute to complete.

![Time Out Modal](http://wcpos.com/wp-content/uploads/2016/06/time-out-modal.png)

This could be caused by:

* **Your internet connection**, e.g.: slow connection, no connection
* **Your server**, e.g.: high load, server down
* **Your gateway**, e.g.: connection to gateway server, fatal PHP error
* **Third party plugins**, e.g.: connection to a third party service such as Xero

Please note that WooCommerce POS is just a frontend for the WC REST API. Once the order is sent to the server the POS plugin has little impact on the time it takes to complete.

For more information and some tips for troubleshooting, please see the [POS Performance doc](http://wcpos.com/docs/support/performance/).

