'use strict'

const render = require('mithril-node-render')
const pagination   = require('./pagination');

const ctrl = pagination.controller({
    totalPages: 20,
    page: 8,
    url: "${page}/do?some=parameter"
});

var view = pagination.view(ctrl);

console.log(render(view));
