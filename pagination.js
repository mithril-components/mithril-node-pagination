'use strict'

const m = require('mithril');

const pages = (page, totalPages) => {
    const p = parseFloat(page);

    if (totalPages <= 7) {
        return [1, 2, 3, 4, 5, 6, 7].slice(0, totalPages);
    }

    const pages = [1];

    const center = Math.max(3, Math.min(totalPages - 2, p));

    if (center > 3) {
        pages.push('...');
    }

    pages.push(center - 1);
    pages.push(center);
    pages.push(center + 1);

    if (p < totalPages - 2) {
        pages.push('...');
    }

    pages.push(totalPages);

    return pages;
}

const controller = (model) => { // {more, total, size, from, page, totalPages}
    if (model.totalPages) { // pagination mode
        return {
            page: model.page,
            more: model.more,
            pages: pages(model.page, model.totalPages)
        }
    }
}

const view = (ctrl) => {
    if (ctrl && ctrl.pages) {
        if (ctrl.pages.length > 1) { // One page does not need pagination!
            return m('nav', m('ul.pagination', [
                // Not on the first page
                ctrl.page < 2 ? '' : m('li',
                    m('a', {href: ctrl.page - 1, 'aria-label': `Previous`},
                        m('span', {'aria-hidden': true}, '«')
                    )
                ),
                ctrl.pages.map(p => {
                    return m('li',
                        {class: ctrl.page == p ? 'active' : null},
                        m('a', {href: isNaN(p) ? null : `${p}`}, p)
                    );
                }),
                !ctrl.more ? '' : m('li',
                    m('a', {href: ctrl.page + 1, 'aria-label': `Next`},
                        m('span', {'aria-hidden': true}, '»')
                    )
                )
            ]));
        }
    }
}


module.exports = {
    controller: controller,
    view: view
}
