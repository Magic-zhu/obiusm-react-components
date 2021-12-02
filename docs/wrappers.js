(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    '9kvl': function (n, e, t) {
      'use strict';
      var o = t('FfOG');
      t.d(e, 'a', function () {
        return o['b'];
      });
      t('bCY9');
    },
    Xmus: function (n, e, t) {
      'use strict';
      t.r(e);
      var o = t('0Owb'),
        i = t('q1tI'),
        a = t.n(i),
        s = t('q3YX'),
        c = t('9og8'),
        r = t('WmNS'),
        l = t.n(r),
        d = t('rlch'),
        u =
          '.wrapper {\n  width: 150px;\n  height: 230px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.content1 {\n  width: 130px;\n  height: 130px;\n}\n\n.content2 {\n  margin-top: 10px;\n  width: 100px;\n  height: 30px;\n}\n\n.content3 {\n  margin-top: 10px;\n  height: 30px;\n}',
        m =
          '.button {\r\n  width: 300px;\r\n  height: 47px;\r\n  margin: 10px auto;\r\n  border: 1px solid #ddd;\r\n  line-height: 47px;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n  font-size: 18px;\r\n}\r\n.button:active {\r\n  background-color: lightgray;\r\n  opacity: 0.7;\r\n}',
        p = {
          'Skeleton-demo': {
            component: Object(d['c'])({
              loader: (function () {
                var n = Object(c['a'])(
                  l.a.mark(function n() {
                    var e, o, i, a;
                    return l.a.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (e = t('K+nK')),
                              (n.t0 = e),
                              (n.next = 4),
                              Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                            );
                          case 4:
                            return (
                              (n.t1 = n.sent),
                              (o = (0, n.t0)(n.t1)),
                              (n.next = 8),
                              t.e(2).then(t.bind(null, '/7QA'))
                            );
                          case 8:
                            return (
                              (i = n.sent),
                              (n.next = 11),
                              t.e(10).then(t.t.bind(null, 'ceaX', 7))
                            );
                          case 11:
                            return (
                              (a = function () {
                                return o['default'].createElement(
                                  i.Skeleton,
                                  { isVisible: !0 },
                                  o['default'].createElement(
                                    'div',
                                    { className: 'wrapper' },
                                    o['default'].createElement('div', {
                                      className: 'content1',
                                    }),
                                    o['default'].createElement(
                                      'div',
                                      { 'data-skeletonIgnore': !0 },
                                      '123456',
                                    ),
                                    o['default'].createElement('div', {
                                      className: 'content2',
                                    }),
                                    o['default'].createElement('div', {
                                      className: 'content3',
                                      'data-skeletonStyle': { width: '50%' },
                                    }),
                                  ),
                                );
                              }),
                              n.abrupt('return', a)
                            );
                          case 13:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: 'import React from \'react\';\nimport { Skeleton } from \'@obiusm/react-components\';\nimport \'./demo/demo.css\';\n\nexport default () => (\n  <Skeleton isVisible={true}>\n    <div className="wrapper">\n      <div className="content1"></div>\n      <div data-skeletonIgnore={true}>123456</div>\n      <div className="content2"></div>\n      <div className="content3" data-skeletonStyle={{ width: \'50%\' }}></div>\n    </div>\n  </Skeleton>\n);',
                },
                'demo/demo.css': { import: './demo/demo.css', content: u },
              },
              dependencies: {
                react: { version: '17.0.2' },
                '@obiusm/react-components': { version: '1.0.0' },
              },
              componentName: 'Skeleton',
              identifier: 'Skeleton-demo',
            },
          },
          'Toast-demo': {
            component: Object(d['c'])({
              loader: (function () {
                var n = Object(c['a'])(
                  l.a.mark(function n() {
                    var e, o, i, a;
                    return l.a.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (e = t('K+nK')),
                              (n.t0 = e),
                              (n.next = 4),
                              Promise.resolve().then(t.t.bind(null, 'q1tI', 7))
                            );
                          case 4:
                            return (
                              (n.t1 = n.sent),
                              (o = (0, n.t0)(n.t1)),
                              (n.next = 8),
                              t.e(2).then(t.bind(null, '/7QA'))
                            );
                          case 8:
                            return (
                              (i = n.sent),
                              (n.next = 11),
                              t.e(11).then(t.t.bind(null, 'tFRd', 7))
                            );
                          case 11:
                            return (
                              (a = function () {
                                function n(n) {
                                  var e = {
                                    loading: function () {
                                      i.Toast.loading(
                                        '\u54c8\u54c8\u54c8',
                                        3,
                                        function () {
                                          i.Toast.info(
                                            '\u89e6\u53d1\u5173\u95ed',
                                            1,
                                          );
                                        },
                                      );
                                    },
                                    info: function () {
                                      i.Toast.info(
                                        '\u6d4b\u8bd5\u6570\u636e...',
                                      );
                                    },
                                    success: function () {
                                      i.Toast.success();
                                    },
                                    fail: function () {
                                      i.Toast.fail();
                                    },
                                    hide: function () {
                                      i.Toast.loading(
                                        '\u624b\u52a8\u5173\u95ed',
                                      ),
                                        setTimeout(function () {
                                          i.Toast.hide(), i.Toast.success();
                                        }, 2e3);
                                    },
                                  };
                                  e[n]();
                                }
                                return o['default'].createElement(
                                  'div',
                                  null,
                                  o['default'].createElement(
                                    'div',
                                    {
                                      onClick: function () {
                                        n('loading');
                                      },
                                      className: 'button',
                                    },
                                    'loading',
                                  ),
                                  o['default'].createElement(
                                    'div',
                                    {
                                      onClick: function () {
                                        n('info');
                                      },
                                      className: 'button',
                                    },
                                    'info',
                                  ),
                                  o['default'].createElement(
                                    'div',
                                    {
                                      onClick: function () {
                                        n('success');
                                      },
                                      className: 'button',
                                    },
                                    'success',
                                  ),
                                  o['default'].createElement(
                                    'div',
                                    {
                                      onClick: function () {
                                        n('fail');
                                      },
                                      className: 'button',
                                    },
                                    'fail',
                                  ),
                                  o['default'].createElement(
                                    'div',
                                    {
                                      onClick: function () {
                                        n('hide');
                                      },
                                      className: 'button',
                                    },
                                    'hide',
                                  ),
                                );
                              }),
                              n.abrupt('return', a)
                            );
                          case 13:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  }),
                );
                function e() {
                  return n.apply(this, arguments);
                }
                return e;
              })(),
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx: "import React from 'react';\nimport { Toast } from '@obiusm/react-components';\nimport './demo/demo.css';\n\nexport default () => {\n  function handleClick(type: string) {\n    const actionMap = {\n      loading: () => {\n        Toast.loading('\u54c8\u54c8\u54c8', 3, () => {\n          Toast.info('\u89e6\u53d1\u5173\u95ed', 1);\n        });\n      },\n      info: () => {\n        Toast.info('\u6d4b\u8bd5\u6570\u636e...');\n      },\n      success: () => {\n        Toast.success();\n      },\n      fail: () => {\n        Toast.fail();\n      },\n      hide: () => {\n        Toast.loading('\u624b\u52a8\u5173\u95ed');\n        setTimeout(() => {\n          Toast.hide();\n          Toast.success();\n        }, 2000);\n      },\n    };\n    actionMap[type]();\n  }\n  return (\n    <div>\n      <div\n        onClick={() => {\n          handleClick('loading');\n        }}\n        className={'button'}\n      >\n        loading\n      </div>\n      <div\n        onClick={() => {\n          handleClick('info');\n        }}\n        className={'button'}\n      >\n        info\n      </div>\n      <div\n        onClick={() => {\n          handleClick('success');\n        }}\n        className={'button'}\n      >\n        success\n      </div>\n      <div\n        onClick={() => {\n          handleClick('fail');\n        }}\n        className={'button'}\n      >\n        fail\n      </div>\n      <div\n        onClick={() => {\n          handleClick('hide');\n        }}\n        className={'button'}\n      >\n        hide\n      </div>\n    </div>\n  );\n};",
                },
                'demo/demo.css': { import: './demo/demo.css', content: m },
              },
              dependencies: {
                react: { version: '17.0.2' },
                '@obiusm/react-components': { version: '1.0.0' },
              },
              componentName: 'Toast',
              identifier: 'Toast-demo',
            },
          },
        },
        f = t('x2v5'),
        h = t('KcUY'),
        v = t.n(h);
      e['default'] = (n) =>
        a.a.createElement(
          v.a,
          Object(o['a'])({}, n, { config: s, demos: p, apis: f }),
        );
    },
    q3YX: function (n) {
      n.exports = JSON.parse(
        '{"menus":{"en-US":{"/components":[{"title":"Skeleton","path":"/components/skeleton","meta":{},"children":[]},{"title":"Toast","path":"/components/toast","meta":{},"children":[]}],"*":[{"path":"/","title":"Hello obiusm-react-components!","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"path":"/components","title":"Toast"}]},"title":"obiusm-react-components","logo":"/obiusm-react-components/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}',
      );
    },
    x2v5: function (n) {
      n.exports = JSON.parse('{}');
    },
  },
]);
