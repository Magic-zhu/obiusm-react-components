(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    'F+kV': function (e, n, o) {
      'use strict';
      o.r(n);
      var a = o('q1tI'),
        t = o.n(a),
        c = o('dEAq');
      n['default'] = (e) => {
        var n = t.a.useContext(c['context']);
        n.demos;
        return (
          t.a.useEffect(() => {
            var n;
            null !== e &&
              void 0 !== e &&
              null !== (n = e.location) &&
              void 0 !== n &&
              n.hash &&
              c['AnchorLink'].scrollToAnchor(
                decodeURIComponent(e.location.hash.slice(1)),
              );
          }, []),
          t.a.createElement(
            t.a.Fragment,
            null,
            t.a.createElement(
              'div',
              { className: 'markdown' },
              t.a.createElement(
                'h2',
                { id: 'hello-obiusm-react-components' },
                t.a.createElement(
                  c['AnchorLink'],
                  {
                    to: '#hello-obiusm-react-components',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  t.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Hello obiusm-react-components!',
              ),
            ),
          )
        );
      };
    },
  },
]);
