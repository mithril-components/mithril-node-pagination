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


Test
----

Setup `npm install -g mct`, then:

    mct test .