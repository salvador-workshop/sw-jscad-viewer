# swcad-js-helpers-test

Simple way to test local versions of the `swcad-js-helpers` library.

## Testing flow

Change initializations using the library:

```
const swcadJs = require('swcad-js-helpers').init({ jscad });
```

And use the test one instead:

```
const swcadJs = require('swcad-js-helpers-test').init({ jscad });
```
