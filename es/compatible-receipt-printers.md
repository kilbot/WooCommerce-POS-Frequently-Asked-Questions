---
title: What receipt printers are compatible with WooCommerce POS?
tags: cash drawer, hardware, peripherals, printer, receipt
description: 
---

WooCommerce POS is a web application, therefore to print receipts you will need a printer capable of printing from the web browser. Thermal receipt printers seems to be stuck in 1980's technology, but some newer models do offer printing directly from the browser. For a suitably cheesy but somewhat helpful explanation [check out this promotional video from Epson](https://www.youtube.com/watch?v=igg6yepW0rw). 

Below is a brief list of thermal receipt printers that _should_ function with WooCommerce POS. Please note that **we have not tested any of these printers**, this list is only to provide a starting point for you own research, please read the reviews and do your own testing to make sure the printer will work as you expect.

*   Star
    *   [Star TSP100 TSP143U, USB, Receipt Printer](http://www.amazon.com/Star-TSP100-TSP143U-Receipt-Printer/dp/B000FCP92C)  
        _tested and working on Windows PC, see comment below_
*   Epson
    *   [Epson TM-T70-i Intelligent Printer](http://www.epson.com.au/pos/products/receiptprinters/DisplayMain.asp?id=TM-T70-i)  
        _should work with iPads, though untested at this stage_
    *   [Epson TM-T88V-i Intelligent Printer](http://www.epson.com.au/pos/products/receiptprinters/DisplayMain.asp?id=tmt88v-i)  
        _should work with iPads, though untested at this stage_

{% hint style='info' %}
If any WooCommerce POS users have good or bad experiences with a receipt printer please post them in the comments below, the rest of the community will thank you for your advice!
{% endhint %}

### Cash Drawers

Most receipt printers will include a RJ11 or RJ12 socket for triggering a cash draw. Each time a receipt is printed, the printer will trigger the cash draw to open. If you wish to use a receipt printer and cash drawer with WooCommerce POS you should check that the cash drawer has the right cable and your printer has the right socket.

### Customised Receipts

The template for WooCommerce POS receipts can be customised by placing a new template file in your WordPress theme directory. The directory structure should be `/wp-content/themes/YOUR-THEME/woocommerce-pos/print/receipt.php`. For more information on customising receipts please read the [Receipt documentation](http://wcpos.com/docs/receipts/).

### Hacking Receipt Printers

If you have the stomach for it - and time - it is possible to put together your own internet connected thermal receipt printer. The process is definitely not easy but it actually looks like fun if you're a hacker/maker type. [Read this blog for the initial research](http://exciting.io/2012/04/12/hello-printer/) and then check this page for [instructions and necessary equipment](https://github.com/exciting-io/printer/wiki/Making-your-own-printer).