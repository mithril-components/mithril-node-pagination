mithril-node-pagination
=======================

A simple pagination component for Mithril and NodeJS.

Usage
-----

    const pagination = require('mithril-node-pagination');

    const model = {
        "page": 2,
        "size": 10,
        "totalPages": 5,
        "total": 50,
        "more": true,
        "url": "go/to/page/${page}"
        ...
    }

    const ctrl = pagination.controller(model);
    const view = pagination.view(ctrl);


Options
-------

 * page: Page number.
 * size: size of each page.
 * totalPages: Total number of pages.
 * total: Total number of record available.
 * more: True if more pages exist.
 * url: URL template for pagination. Default is "${page}"


Test
----
Setup [mithril-component-tools](https://github.com/mithril-components/mitthril-components-tools) first. Then:

    npm install
    mct test pagination.js en