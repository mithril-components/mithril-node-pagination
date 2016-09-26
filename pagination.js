'use strict'

import m from 'mithril';

export default class {

    pages(page, totalPages) {
        const p = parseFloat(page);

        if (totalPages <= 7) {
            return [1, 2, 3, 4, 5, 6, 7].slice(0, totalPages);
        }

        const pages = [1];

        const center = Math.max(3, Math.min(totalPages - 2, p));

        if (center > 3) {
            pages.push('...');
        }

        pages.push(center - 1, center, center + 1);

        if (p < totalPages - 2) {
            pages.push('...');
        }

        pages.push(totalPages);

        return pages;
    }

    controller(params) { // {more, total, size, from, page, totalPages}
        const pattern = params.pattern ? params.pattern : '${page}';

        if (params.totalPages) { // pagination mode
            return Promise.resolve({
                page: params.page,
                more: params.more,
                pages: this.pages(params.page, params.totalPages),
                href: (p) => (isNaN(p) ? null : pattern.replace('${page}', p))
            });
        }
        return Promise.resolve({});
    }

    view(ctrl) {
        if (ctrl && ctrl.pages) {
            if (ctrl.pages.length > 1) { // One page does not need pagination!
                return m('nav', m('ul.pagination', [
                    // Not on the first page
                    ctrl.page < 2 ? '' : m('li',
                        m('a', {href: ctrl.href(ctrl.page - 1), 'aria-label': `Previous`},
                            m('span', {'aria-hidden': true}, '«')
                        )
                    ),
                    ctrl.pages.map(p => {
                        return m('li',
                            {class: ctrl.page == p ? 'active' : null},
                            m('a', {href: ctrl.href(p)}, p)
                        );
                    }),
                    !ctrl.more ? '' : m('li',
                        m('a', {href: ctrl.href(ctrl.page + 1), 'aria-label': `Next`},
                            m('span', {'aria-hidden': true}, '»')
                        )
                    )
                ]));
            }
        }
    }

    resources() {
        return [];
    }

}