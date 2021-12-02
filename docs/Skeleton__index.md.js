(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    '9kvl': function (e, t, l) {
      'use strict';
      var n = l('FfOG');
      l.d(t, 'a', function () {
        return n['b'];
      });
      l('bCY9');
    },
    Al1C: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        r = l('dEAq'),
        c = l('Zxc8');
      t['default'] = (e) => {
        var t = a.a.useContext(r['context']),
          l = t.demos,
          n = a.a.memo(l['Skeleton-demo'].component);
        return (
          a.a.useEffect(() => {
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
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                'div',
                { className: 'markdown' },
                a.a.createElement(
                  'h2',
                  { id: 'skeleton' },
                  a.a.createElement(
                    r['AnchorLink'],
                    { to: '#skeleton', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Skeleton',
                ),
                a.a.createElement('p', null, 'Demo:'),
              ),
              a.a.createElement(
                c['default'],
                l['Skeleton-demo'].previewerProps,
                a.a.createElement(n, null),
              ),
              a.a.createElement(
                'div',
                { className: 'markdown' },
                a.a.createElement(
                  'h3',
                  { id: '\u5c5e\u6027' },
                  a.a.createElement(
                    r['AnchorLink'],
                    {
                      to: '#\u5c5e\u6027',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    a.a.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u5c5e\u6027',
                ),
                a.a.createElement(
                  'table',
                  null,
                  a.a.createElement(
                    'thead',
                    null,
                    a.a.createElement(
                      'tr',
                      null,
                      a.a.createElement('th', null, '\u5c5e\u6027'),
                      a.a.createElement('th', null, '\u8bf4\u660e'),
                      a.a.createElement('th', null, '\u7c7b\u578b'),
                      a.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                    ),
                  ),
                  a.a.createElement(
                    'tbody',
                    null,
                    a.a.createElement(
                      'tr',
                      null,
                      a.a.createElement('td', null, 'isVisible'),
                      a.a.createElement(
                        'td',
                        null,
                        '\u5c55\u793a\u9aa8\u67b6\u5c4f\u8fd8\u662f\u771f\u5b9e\u5185\u5bb9 true \u5c55\u793a\u9aa8\u67b6\u5c4f',
                      ),
                      a.a.createElement('td', null, 'boolean'),
                      a.a.createElement('td', null, '-'),
                    ),
                    a.a.createElement(
                      'tr',
                      null,
                      a.a.createElement('td', null, 'depth'),
                      a.a.createElement(
                        'td',
                        null,
                        '\u9aa8\u67b6\u9012\u5f52\u6df1\u5ea6,\u9700\u8981\u9012\u5f52\u5230\u591a\u5c11\u5c42\u7ed3\u6784',
                      ),
                      a.a.createElement('td', null, 'number'),
                      a.a.createElement('td', null, '4'),
                    ),
                    a.a.createElement(
                      'tr',
                      null,
                      a.a.createElement('td', null, 'data-skeletonIgnore'),
                      a.a.createElement(
                        'td',
                        null,
                        '\u5ffd\u7565\u5f53\u524d\u8282\u70b9',
                      ),
                      a.a.createElement('td', null, 'boolean'),
                      a.a.createElement('td', null, '-'),
                    ),
                    a.a.createElement(
                      'tr',
                      null,
                      a.a.createElement('td', null, 'data-skeletonStyle'),
                      a.a.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u5f53\u524d\u8282\u70b9\u6837\u5f0f',
                      ),
                      a.a.createElement('td', null, 'style'),
                      a.a.createElement('td', null, '\u65e0'),
                    ),
                  ),
                ),
              ),
            ),
          )
        );
      };
    },
  },
]);
