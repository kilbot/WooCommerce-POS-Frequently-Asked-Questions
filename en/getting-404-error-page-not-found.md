---
title: Why am I getting 404 Error – Page Not Found?
tags: 404 error, page not found, permalinks
description: The WooCommerce REST API requires 'pretty' permalinks to work correctly.
---

WooCommerce POS requires URL rewrites in order to function correctly. 
This turns *ugly* URLs into *pretty* URLs, eg: domain.com/?pos=1 becomes domain.com/pos.
If you get a 404 error when trying to view the POS page please enable [*pretty* permalinks](http://codex.wordpress.org/Using_Permalinks) by going to `WP Admin > Settings > Permalink Settings`. 

If you have enabled *pretty* permalinks but are still seeing a 404 error it's possible that your server is not configured correctly for URL rewrites. 
For information please [check the requirements](https://codex.wordpress.org/Using_Permalinks#mod_rewrite:_.22Pretty_Permalinks.22) for your server environment. 
You may need to contact your web host with the above information if your server is not correctly configured.