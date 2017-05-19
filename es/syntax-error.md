---
title: Why am I getting a SyntaxError?
description: If a server response is not valid JSON, WooCommerce POS will throw a SyntaxError.
---

WooCommerce POS communicates with the [WooCommerce REST API](http://woothemes.github.io/woocommerce-rest-api-docs/) using <abbr title="JavaScript Object Notation">JSON</abbr>. 
If you are seeing a SyntaxError it means that the POS was expecting valid JSON but got something else instead, usually an error message from WordPress. 

### Unexpected token in JSON

Clicking on the 'i' info icon will display the raw output from the server.
In the example below, we can see there is a PHP Notice from WordPress. 
The notice references the line of code which is causing the problem.

![Syntax Error](https://wcpos.com/wp-content/uploads/2016/06/syntax-error-unexpected-token-in-json.png "Example of SyntaxError modal - Unexpected token")

In the above example you can see that the error occurs in the `example-plugin/example.php` file at `line 15`. 
If you are seeing a similar error to the example above, please do the following:

1. If possible, deactivate the plugin causing the error, this will allow you to continue using WooCommerce POS
2. Copy the error notice and contact [support@wcpos.com](mailto:support@wcpos.com)
3. Also contact the developer of the plugin causing the error, they are usually in the best place to provide a fix

### Unexpected end of input

In some cases the server will return nothing at all, this results in an `Unexpected end of input` with no extra information. 

![Syntax Error](https://wcpos.com/wp-content/uploads/2016/06/syntax-error-unexpected-end.png "Example of SyntaxError modal - Unexpected end")

This occurs if the [PHP error_reporting](http://php.net/manual/en/function.error-reporting.php) is disabled. 
In order to see the error message you should temporarily enable error reporting by setting [`WP_DEBUG`](https://codex.wordpress.org/WP_DEBUG) to `true` in your `wp-config.php` file. 

```php
// Enable debugging
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_DISPLAY', true );
```

{% hint style='danger' %}
You should only enable debugging for the time it takes to copy the error message. 
Debugging should not be enabled on a live site as it can produce unexpected errors and could potentially be a security risk.
{% endhint %}