---
title: Why am I getting 404 Error – Page Not Found?
tags: 404 error, page not found, permalinks
description: The WooCommerce REST API requires 'pretty' permalinks to work correctly.
---

The WooCommerce REST API requires 'pretty' permalinks in order to work and so it is a requirement of WooCommerce POS also. If you get a 404 error when trying to view the POS page please enable 'pretty' permalinks. 

Enabling 'pretty' permalinks is easy and is much better for SEO, so it's a good idea to set up permalinks if you can. Check out the WordPress codex page for more information on permalinks: [http://codex.wordpress.org/Using_Permalinks](http://codex.wordpress.org/Using_Permalinks).

If you have 'pretty' permalinks enabled but are still seeing a 404 error, please go to `WP Admin > Settings > Permalink Settings` and re-save the settings. This will flush the rewrite rules and you should now be able to access the POS.