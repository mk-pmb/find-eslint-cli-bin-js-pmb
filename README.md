
<!--#echo json="package.json" key="name" underline="=" -->
find-eslint-cli-bin-js-pmb
==========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Find the path of the JS file that would be invoked as the eslint CLI.
<!--/#echo -->



API
---

This module exports one function:

### findEslintCli(rqr)

where `rqr` is your module's `require` function.
Returns the resolved path to the eslint CLI script.



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
