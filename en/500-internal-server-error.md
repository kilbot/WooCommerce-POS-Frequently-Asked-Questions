---
title: Why am I getting a 500 Internal Server Error?
description: >-
  A 500 Internal Server Error is a generic server error, usually caused by
  plugin or theme conflict.
---

# 500-internal-server-error

![Example of Internal Server Error message](https://wcpos.com/wp-content/uploads/2017/01/500-internal-server-error.png)

A 500 Internal Server Error is a generic server error. If you are seeing this error in WooCommerce POS it usually indicates a conflict with another plugin or your theme.

To troubleshoot this issue please do the following:

## Check your server error logs

Provided your server is set up correctly, it will log all error messages to a file. In Apache, the default location for the error log file is `/var/log/apache2/error.log`. In nginx, the default location for the error log file is `/var/log/nginx/error.log`. You may have to ask your web host for access to your error log file.

![Example of error log](https://wcpos.com/wp-content/uploads/2017/01/error_log.png)

## Turn on PHP debugging

If there is nothing in your error log files, it's possible that PHP is suppressing all error reporting. To enable error reporting, please add the following to your `wp-config.php` file:

```php
// Enable debugging
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );
```

## Deactivate all plugins and themes

If no error message can be found, you will need to remove all potential sources of conflicts, then systematically add them back - one at a time.

1. Deactivate all plugin, except WooCommerce and WooCommerce POS.
2. Activate the default WordPress theme, eg: `twentyseventeen`.
3. [Clear all local data](clear-local-data.md) from the POS and confirm that the POS is working correctly.
4. Activate your theme, check the POS again to confirm it is working correctly.
5. Then activate each plugin, one-by-one, checking the POS after each activation.

Once you have narrowed down the potential source of the error, please contact [support@wcpos.com](mailto:support@wcpos.com) with your results.

