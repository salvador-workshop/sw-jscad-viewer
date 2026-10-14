# swcad-js-test

Simple way to test local versions of the `swcad-js` library.

## Testing flow

Change initializations using the library:

```
const swcadJs = require('swcad-js').init({ jscad });
```

And use the test one instead:

```
const swcadJs = require('swcad-js-test').init({ jscad });
```
