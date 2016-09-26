'use strict'

import render from 'mithril-node-render';
import Component from '../pagination';
import chai from 'chai';

const expect = chai.expect;

const component = new Component();


describe("Pagination", () => {
    it("test render", (done) => {
        const params = {
            more: true,
            total: 27,
            size: 10,
            from: 0,
            page: 1,
            totalPages: 3
        };

        component.controller(params).then(ctrl => {
            const view = component.view(ctrl);
            const html = render(view);

            console.log(html);

            done();
        })
        .catch(err => {
            console.log(err);
        });
    });
});