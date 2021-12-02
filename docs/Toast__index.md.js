(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    '9YVq': function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('q1tI'),
        l = n.n(a),
        r = n('dEAq'),
        c = n('Zxc8');
      t['default'] = (e) => {
        var t = l.a.useContext(r['context']),
          n = t.demos,
          a = l.a.memo(n['Toast-demo'].component);
        return (
          l.a.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              r['AnchorLink'].scrollToAnchor(
                decodeURIComponent(e.location.hash.slice(1)),
              );
          }, []),
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                'div',
                { className: 'markdown' },
                l.a.createElement(
                  'h2',
                  { id: 'toast' },
                  l.a.createElement(
                    r['AnchorLink'],
                    { to: '#toast', 'aria-hidden': 'true', tabIndex: -1 },
                    l.a.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Toast',
                ),
                l.a.createElement('p', null, 'Demo:'),
              ),
              l.a.createElement(
                c['default'],
                n['Toast-demo'].previewerProps,
                l.a.createElement(a, null),
              ),
              l.a.createElement(
                'div',
                { className: 'markdown' },
                l.a.createElement(
                  'h3',
                  { id: 'api' },
                  l.a.createElement(
                    r['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    l.a.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'API',
                ),
                l.a.createElement(
                  'ul',
                  null,
                  l.a.createElement(
                    'li',
                    null,
                    'Toast.success(content, duration, onClose)',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    'Toast.fail(content, duration, onClose)',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    'Toast.info(content, duration, onClose)',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    'Toast.loading(content, duration, onClose)',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    'Toast.hide(content, duration, onClose)',
                  ),
                ),
                l.a.createElement(
                  'h3',
                  { id: '\u5c5e\u6027' },
                  l.a.createElement(
                    r['AnchorLink'],
                    {
                      to: '#\u5c5e\u6027',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    l.a.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u5c5e\u6027',
                ),
                l.a.createElement(
                  'table',
                  null,
                  l.a.createElement(
                    'thead',
                    null,
                    l.a.createElement(
                      'tr',
                      null,
                      l.a.createElement('th', null, '\u5c5e\u6027'),
                      l.a.createElement('th', null, '\u8bf4\u660e'),
                      l.a.createElement('th', null, '\u7c7b\u578b'),
                      l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                    ),
                  ),
                  l.a.createElement(
                    'tbody',
                    null,
                    l.a.createElement(
                      'tr',
                      null,
                      l.a.createElement('td', null, 'content'),
                      l.a.createElement('td', null, '\u63d0\u793a\u5185\u5bb9'),
                      l.a.createElement('td', null, 'String'),
                      l.a.createElement('td', null, '\u65e0'),
                    ),
                    l.a.createElement(
                      'tr',
                      null,
                      l.a.createElement('td', null, 'duration'),
                      l.a.createElement(
                        'td',
                        null,
                        '\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2',
                      ),
                      l.a.createElement('td', null, 'number'),
                      l.a.createElement('td', null, '3'),
                    ),
                    l.a.createElement(
                      'tr',
                      null,
                      l.a.createElement('td', null, 'onClose'),
                      l.a.createElement(
                        'td',
                        null,
                        '\u5173\u95ed\u540e\u56de\u8c03',
                      ),
                      l.a.createElement('td', null, 'Function'),
                      l.a.createElement('td', null, '\u65e0'),
                    ),
                  ),
                ),
              ),
            ),
          )
        );
      };
    },
    '9kvl': function (e, t, n) {
      'use strict';
      var a = n('FfOG');
      n.d(t, 'a', function () {
        return a['b'];
      });
      n('bCY9');
    },
  },
]);
