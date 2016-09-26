#!/usr/bin/env node
'use strict'

import pagination from "./pagination";
import render from "mithril-node-render";

const page = new pagination();

page.controller({
    more: false,
    total: 30,
    totalPages: 20,
    page: 8,
    from: 1,
    url: "${page}/do?some=parameter"
}).then((ctrl) => {
    var view = page.view(ctrl);
    console.log(render(view));    
});

