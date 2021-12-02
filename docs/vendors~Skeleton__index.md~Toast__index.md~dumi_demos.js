(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '+6XX': function (e, t, n) {
      var r = n('y1pI');
      function o(e) {
        return r(this.__data__, e) > -1;
      }
      e.exports = o;
    },
    '03A+': function (e, t, n) {
      var r = n('JTzB'),
        o = n('ExA7'),
        a = Object.prototype,
        i = a.hasOwnProperty,
        c = a.propertyIsEnumerable,
        s = r(
          (function () {
            return arguments;
          })(),
        )
          ? r
          : function (e) {
              return o(e) && i.call(e, 'callee') && !c.call(e, 'callee');
            };
      e.exports = s;
    },
    '0Cz8': function (e, t, n) {
      var r = n('Xi7e'),
        o = n('ebwN'),
        a = n('e4Nc'),
        i = 200;
      function c(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var c = n.__data__;
          if (!o || c.length < i - 1)
            return c.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new a(c);
        }
        return n.set(e, t), (this.size = n.size), this;
      }
      e.exports = c;
    },
    '0ycA': function (e, t) {
      function n() {
        return [];
      }
      e.exports = n;
    },
    '1OyB': function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    '1hJj': function (e, t, n) {
      var r = n('e4Nc'),
        o = n('ftKO'),
        a = n('3A9y');
      function i(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        this.__data__ = new r();
        while (++t < n) this.add(e[t]);
      }
      (i.prototype.add = i.prototype.push = o),
        (i.prototype.has = a),
        (e.exports = i);
    },
    '2gN3': function (e, t, n) {
      var r = n('Kz5y'),
        o = r['__core-js_shared__'];
      e.exports = o;
    },
    '3A9y': function (e, t) {
      function n(e) {
        return this.__data__.has(e);
      }
      e.exports = n;
    },
    '3Fdi': function (e, t) {
      var n = Function.prototype,
        r = n.toString;
      function o(e) {
        if (null != e) {
          try {
            return r.call(e);
          } catch (t) {}
          try {
            return e + '';
          } catch (t) {}
        }
        return '';
      }
      e.exports = o;
    },
    '4IlW': function (e, t, n) {
      'use strict';
      var r = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var t = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (t >= r.F1 && t <= r.F12)
          )
            return !1;
          switch (t) {
            case r.ALT:
            case r.CAPS_LOCK:
            case r.CONTEXT_MENU:
            case r.CTRL:
            case r.DOWN:
            case r.END:
            case r.ESC:
            case r.HOME:
            case r.INSERT:
            case r.LEFT:
            case r.MAC_FF_META:
            case r.META:
            case r.NUMLOCK:
            case r.NUM_CENTER:
            case r.PAGE_DOWN:
            case r.PAGE_UP:
            case r.PAUSE:
            case r.PRINT_SCREEN:
            case r.RIGHT:
            case r.SHIFT:
            case r.UP:
            case r.WIN_KEY:
            case r.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= r.ZERO && e <= r.NINE) return !0;
          if (e >= r.NUM_ZERO && e <= r.NUM_MULTIPLY) return !0;
          if (e >= r.A && e <= r.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e)
            return !0;
          switch (e) {
            case r.SPACE:
            case r.QUESTION_MARK:
            case r.NUM_PLUS:
            case r.NUM_MINUS:
            case r.NUM_PERIOD:
            case r.NUM_DIVISION:
            case r.SEMICOLON:
            case r.DASH:
            case r.EQUALS:
            case r.COMMA:
            case r.PERIOD:
            case r.SLASH:
            case r.APOSTROPHE:
            case r.SINGLE_QUOTE:
            case r.OPEN_SQUARE_BRACKET:
            case r.BACKSLASH:
            case r.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      t['a'] = r;
    },
    '4kuk': function (e, t, n) {
      var r = n('SfRM'),
        o = n('Hvzi'),
        a = n('u8Dt'),
        i = n('ekgI'),
        c = n('JSQU');
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        this.clear();
        while (++t < n) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype['delete'] = o),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = c),
        (e.exports = s);
    },
    '6sVZ': function (e, t) {
      var n = Object.prototype;
      function r(e) {
        var t = e && e.constructor,
          r = ('function' == typeof t && t.prototype) || n;
        return e === r;
      }
      e.exports = r;
    },
    '77Zs': function (e, t, n) {
      var r = n('Xi7e');
      function o() {
        (this.__data__ = new r()), (this.size = 0);
      }
      e.exports = o;
    },
    '7GkX': function (e, t, n) {
      var r = n('b80T'),
        o = n('A90E'),
        a = n('MMmD');
      function i(e) {
        return a(e) ? r(e) : o(e);
      }
      e.exports = i;
    },
    '7fqy': function (e, t) {
      function n(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      }
      e.exports = n;
    },
    '8XRh': function (e, t, n) {
      'use strict';
      var r = n('rePB'),
        o = n('VTBJ'),
        a = n('ODXe'),
        i = n('U8pU'),
        c = n('q1tI'),
        s = n('m+aA'),
        u = n('c+Xe'),
        l = n('TSYQ'),
        f = n.n(l),
        d = n('MNnm');
      function p(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
          (n['Moz'.concat(e)] = 'moz'.concat(t)),
          (n['ms'.concat(e)] = 'MS'.concat(t)),
          (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
          n
        );
      }
      function b(e, t) {
        var n = {
          animationend: p('Animation', 'AnimationEnd'),
          transitionend: p('Transition', 'TransitionEnd'),
        };
        return (
          e &&
            ('AnimationEvent' in t || delete n.animationend.animation,
            'TransitionEvent' in t || delete n.transitionend.transition),
          n
        );
      }
      var v = b(Object(d['a'])(), 'undefined' !== typeof window ? window : {}),
        m = {};
      if (Object(d['a'])()) {
        var h = document.createElement('div');
        m = h.style;
      }
      var g = {};
      function y(e) {
        if (g[e]) return g[e];
        var t = v[e];
        if (t)
          for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
            var a = n[o];
            if (Object.prototype.hasOwnProperty.call(t, a) && a in m)
              return (g[e] = t[a]), g[e];
          }
        return '';
      }
      var O = y('animationend'),
        E = y('transitionend'),
        w = !(!O || !E),
        k = O || 'animationend',
        S = E || 'transitionend';
      function j(e, t) {
        if (!e) return null;
        if ('object' === Object(i['a'])(e)) {
          var n = t.replace(/-\w/g, function (e) {
            return e[1].toUpperCase();
          });
          return e[n];
        }
        return ''.concat(e, '-').concat(t);
      }
      var x = 'none',
        _ = 'appear',
        T = 'enter',
        A = 'leave',
        C = 'none',
        N = 'prepare',
        R = 'start',
        I = 'active',
        M = 'end';
      function P(e) {
        var t = Object(c['useRef'])(!1),
          n = Object(c['useState'])(e),
          r = Object(a['a'])(n, 2),
          o = r[0],
          i = r[1];
        function s(e) {
          t.current || i(e);
        }
        return (
          Object(c['useEffect'])(function () {
            return function () {
              t.current = !0;
            };
          }, []),
          [o, s]
        );
      }
      var D = Object(d['a'])() ? c['useLayoutEffect'] : c['useEffect'],
        L = D,
        F = n('wgJM'),
        B = function () {
          var e = c['useRef'](null);
          function t() {
            F['a'].cancel(e.current);
          }
          function n(r) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2;
            t();
            var a = Object(F['a'])(function () {
              o <= 1
                ? r({
                    isCanceled: function () {
                      return a !== e.current;
                    },
                  })
                : n(r, o - 1);
            });
            e.current = a;
          }
          return (
            c['useEffect'](function () {
              return function () {
                t();
              };
            }, []),
            [n, t]
          );
        },
        U = [N, R, I, M],
        H = !1,
        G = !0;
      function z(e) {
        return e === I || e === M;
      }
      var K = function (e, t) {
          var n = c['useState'](C),
            r = Object(a['a'])(n, 2),
            o = r[0],
            i = r[1],
            s = B(),
            u = Object(a['a'])(s, 2),
            l = u[0],
            f = u[1];
          function d() {
            i(N);
          }
          return (
            L(
              function () {
                if (o !== C && o !== M) {
                  var e = U.indexOf(o),
                    n = U[e + 1],
                    r = t(o);
                  r === H
                    ? i(n)
                    : l(function (e) {
                        function t() {
                          e.isCanceled() || i(n);
                        }
                        !0 === r ? t() : Promise.resolve(r).then(t);
                      });
                }
              },
              [e, o],
            ),
            c['useEffect'](function () {
              return function () {
                f();
              };
            }, []),
            [d, o]
          );
        },
        $ = function (e) {
          var t = Object(c['useRef'])(),
            n = Object(c['useRef'])(e);
          n.current = e;
          var r = c['useCallback'](function (e) {
            n.current(e);
          }, []);
          function o(e) {
            e && (e.removeEventListener(S, r), e.removeEventListener(k, r));
          }
          function a(e) {
            t.current && t.current !== e && o(t.current),
              e &&
                e !== t.current &&
                (e.addEventListener(S, r),
                e.addEventListener(k, r),
                (t.current = e));
          }
          return (
            c['useEffect'](function () {
              return function () {
                o(t.current);
              };
            }, []),
            [a, o]
          );
        };
      function V(e, t, n, i) {
        var s = i.motionEnter,
          u = void 0 === s || s,
          l = i.motionAppear,
          f = void 0 === l || l,
          d = i.motionLeave,
          p = void 0 === d || d,
          b = i.motionDeadline,
          v = i.motionLeaveImmediately,
          m = i.onAppearPrepare,
          h = i.onEnterPrepare,
          g = i.onLeavePrepare,
          y = i.onAppearStart,
          O = i.onEnterStart,
          E = i.onLeaveStart,
          w = i.onAppearActive,
          k = i.onEnterActive,
          S = i.onLeaveActive,
          j = i.onAppearEnd,
          C = i.onEnterEnd,
          M = i.onLeaveEnd,
          D = i.onVisibleChanged,
          F = P(),
          B = Object(a['a'])(F, 2),
          U = B[0],
          V = B[1],
          W = P(x),
          X = Object(a['a'])(W, 2),
          Y = X[0],
          q = X[1],
          Z = P(null),
          Q = Object(a['a'])(Z, 2),
          J = Q[0],
          ee = Q[1],
          te = Object(c['useRef'])(!1),
          ne = Object(c['useRef'])(null),
          re = Object(c['useRef'])(!1),
          oe = Object(c['useRef'])(null);
        function ae() {
          var e = n();
          return e || oe.current;
        }
        var ie = Object(c['useRef'])(!1);
        function ce(e) {
          var t,
            n = ae();
          (e && !e.deadline && e.target !== n) ||
            (Y === _ && ie.current
              ? (t = null === j || void 0 === j ? void 0 : j(n, e))
              : Y === T && ie.current
              ? (t = null === C || void 0 === C ? void 0 : C(n, e))
              : Y === A &&
                ie.current &&
                (t = null === M || void 0 === M ? void 0 : M(n, e)),
            !1 === t || re.current || (q(x), ee(null)));
        }
        var se = $(ce),
          ue = Object(a['a'])(se, 1),
          le = ue[0],
          fe = c['useMemo'](
            function () {
              var e, t, n;
              switch (Y) {
                case 'appear':
                  return (
                    (e = {}),
                    Object(r['a'])(e, N, m),
                    Object(r['a'])(e, R, y),
                    Object(r['a'])(e, I, w),
                    e
                  );
                case 'enter':
                  return (
                    (t = {}),
                    Object(r['a'])(t, N, h),
                    Object(r['a'])(t, R, O),
                    Object(r['a'])(t, I, k),
                    t
                  );
                case 'leave':
                  return (
                    (n = {}),
                    Object(r['a'])(n, N, g),
                    Object(r['a'])(n, R, E),
                    Object(r['a'])(n, I, S),
                    n
                  );
                default:
                  return {};
              }
            },
            [Y],
          ),
          de = K(Y, function (e) {
            if (e === N) {
              var t = fe[N];
              return t ? t(ae()) : H;
            }
            var n;
            ve in fe &&
              ee(
                (null === (n = fe[ve]) || void 0 === n
                  ? void 0
                  : n.call(fe, ae(), null)) || null,
              );
            return (
              ve === I &&
                (le(ae()),
                b > 0 &&
                  (clearTimeout(ne.current),
                  (ne.current = setTimeout(function () {
                    ce({ deadline: !0 });
                  }, b)))),
              G
            );
          }),
          pe = Object(a['a'])(de, 2),
          be = pe[0],
          ve = pe[1],
          me = z(ve);
        (ie.current = me),
          L(
            function () {
              V(t);
              var n,
                r = te.current;
              ((te.current = !0), e) &&
                (!r && t && f && (n = _),
                r && t && u && (n = T),
                ((r && !t && p) || (!r && v && !t && p)) && (n = A),
                n && (q(n), be()));
            },
            [t],
          ),
          Object(c['useEffect'])(
            function () {
              ((Y === _ && !f) || (Y === T && !u) || (Y === A && !p)) && q(x);
            },
            [f, u, p],
          ),
          Object(c['useEffect'])(function () {
            return function () {
              clearTimeout(ne.current), (re.current = !0);
            };
          }, []),
          Object(c['useEffect'])(
            function () {
              void 0 !== U && Y === x && (null === D || void 0 === D || D(U));
            },
            [U, Y],
          );
        var he = J;
        return (
          fe[N] &&
            ve === R &&
            (he = Object(o['a'])({ transition: 'none' }, he)),
          [Y, ve, he, null !== U && void 0 !== U ? U : t]
        );
      }
      var W = n('1OyB'),
        X = n('vuIU'),
        Y = n('Ji7U'),
        q = n('LK+K'),
        Z = (function (e) {
          Object(Y['a'])(n, e);
          var t = Object(q['a'])(n);
          function n() {
            return Object(W['a'])(this, n), t.apply(this, arguments);
          }
          return (
            Object(X['a'])(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(c['Component']),
        Q = Z;
      function J(e) {
        var t = e;
        function n(e) {
          return !(!e.motionName || !t);
        }
        'object' === Object(i['a'])(e) && (t = e.transitionSupport);
        var l = c['forwardRef'](function (e, t) {
          var i = e.visible,
            l = void 0 === i || i,
            d = e.removeOnLeave,
            p = void 0 === d || d,
            b = e.forceRender,
            v = e.children,
            m = e.motionName,
            h = e.leavedClassName,
            g = e.eventProps,
            y = n(e),
            O = Object(c['useRef'])(),
            E = Object(c['useRef'])();
          function w() {
            try {
              return Object(s['a'])(O.current || E.current);
            } catch (e) {
              return null;
            }
          }
          var k = V(y, l, w, e),
            S = Object(a['a'])(k, 4),
            _ = S[0],
            T = S[1],
            A = S[2],
            C = S[3],
            I = c['useRef'](C);
          C && (I.current = !0);
          var M = Object(c['useRef'])(t);
          M.current = t;
          var P,
            D = c['useCallback'](function (e) {
              (O.current = e), Object(u['b'])(M.current, e);
            }, []),
            L = Object(o['a'])(Object(o['a'])({}, g), {}, { visible: l });
          if (v)
            if (_ !== x && n(e)) {
              var F, B;
              T === N
                ? (B = 'prepare')
                : z(T)
                ? (B = 'active')
                : T === R && (B = 'start'),
                (P = v(
                  Object(o['a'])(
                    Object(o['a'])({}, L),
                    {},
                    {
                      className: f()(
                        j(m, _),
                        ((F = {}),
                        Object(r['a'])(F, j(m, ''.concat(_, '-').concat(B)), B),
                        Object(r['a'])(F, m, 'string' === typeof m),
                        F),
                      ),
                      style: A,
                    },
                  ),
                  D,
                ));
            } else
              P = C
                ? v(Object(o['a'])({}, L), D)
                : !p && I.current
                ? v(
                    Object(o['a'])(Object(o['a'])({}, L), {}, { className: h }),
                    D,
                  )
                : b
                ? v(
                    Object(o['a'])(
                      Object(o['a'])({}, L),
                      {},
                      { style: { display: 'none' } },
                    ),
                    D,
                  )
                : null;
          else P = null;
          return c['createElement'](Q, { ref: E }, P);
        });
        return (l.displayName = 'CSSMotion'), l;
      }
      var ee = J(w),
        te = n('wx14'),
        ne = n('Ff2n'),
        re = 'add',
        oe = 'keep',
        ae = 'remove',
        ie = 'removed';
      function ce(e) {
        var t;
        return (
          (t =
            e && 'object' === Object(i['a'])(e) && 'key' in e ? e : { key: e }),
          Object(o['a'])(Object(o['a'])({}, t), {}, { key: String(t.key) })
        );
      }
      function se() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.map(ce);
      }
      function ue() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = [],
          r = 0,
          a = t.length,
          i = se(e),
          c = se(t);
        i.forEach(function (e) {
          for (var t = !1, i = r; i < a; i += 1) {
            var s = c[i];
            if (s.key === e.key) {
              r < i &&
                ((n = n.concat(
                  c.slice(r, i).map(function (e) {
                    return Object(o['a'])(
                      Object(o['a'])({}, e),
                      {},
                      { status: re },
                    );
                  }),
                )),
                (r = i)),
                n.push(
                  Object(o['a'])(Object(o['a'])({}, s), {}, { status: oe }),
                ),
                (r += 1),
                (t = !0);
              break;
            }
          }
          t ||
            n.push(Object(o['a'])(Object(o['a'])({}, e), {}, { status: ae }));
        }),
          r < a &&
            (n = n.concat(
              c.slice(r).map(function (e) {
                return Object(o['a'])(
                  Object(o['a'])({}, e),
                  {},
                  { status: re },
                );
              }),
            ));
        var s = {};
        n.forEach(function (e) {
          var t = e.key;
          s[t] = (s[t] || 0) + 1;
        });
        var u = Object.keys(s).filter(function (e) {
          return s[e] > 1;
        });
        return (
          u.forEach(function (e) {
            (n = n.filter(function (t) {
              var n = t.key,
                r = t.status;
              return n !== e || r !== ae;
            })),
              n.forEach(function (t) {
                t.key === e && (t.status = oe);
              });
          }),
          n
        );
      }
      var le = [
        'eventProps',
        'visible',
        'children',
        'motionName',
        'motionAppear',
        'motionEnter',
        'motionLeave',
        'motionLeaveImmediately',
        'motionDeadline',
        'removeOnLeave',
        'leavedClassName',
        'onAppearStart',
        'onAppearActive',
        'onAppearEnd',
        'onEnterStart',
        'onEnterActive',
        'onEnterEnd',
        'onLeaveStart',
        'onLeaveActive',
        'onLeaveEnd',
      ];
      function fe(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee,
          n = (function (e) {
            Object(Y['a'])(r, e);
            var n = Object(q['a'])(r);
            function r() {
              var e;
              return (
                Object(W['a'])(this, r),
                (e = n.apply(this, arguments)),
                (e.state = { keyEntities: [] }),
                (e.removeKey = function (t) {
                  e.setState(function (e) {
                    var n = e.keyEntities;
                    return {
                      keyEntities: n.map(function (e) {
                        return e.key !== t
                          ? e
                          : Object(o['a'])(
                              Object(o['a'])({}, e),
                              {},
                              { status: ie },
                            );
                      }),
                    };
                  });
                }),
                e
              );
            }
            return (
              Object(X['a'])(
                r,
                [
                  {
                    key: 'render',
                    value: function () {
                      var e = this,
                        n = this.state.keyEntities,
                        r = this.props,
                        o = r.component,
                        a = r.children,
                        i = r.onVisibleChanged,
                        s = Object(ne['a'])(r, [
                          'component',
                          'children',
                          'onVisibleChanged',
                        ]),
                        u = o || c['Fragment'],
                        l = {};
                      return (
                        le.forEach(function (e) {
                          (l[e] = s[e]), delete s[e];
                        }),
                        delete s.keys,
                        c['createElement'](
                          u,
                          s,
                          n.map(function (n) {
                            var r = n.status,
                              o = Object(ne['a'])(n, ['status']),
                              s = r === re || r === oe;
                            return c['createElement'](
                              t,
                              Object(te['a'])({}, l, {
                                key: o.key,
                                visible: s,
                                eventProps: o,
                                onVisibleChanged: function (t) {
                                  null === i ||
                                    void 0 === i ||
                                    i(t, { key: o.key }),
                                    t || e.removeKey(o.key);
                                },
                              }),
                              a,
                            );
                          }),
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (e, t) {
                      var n = e.keys,
                        r = t.keyEntities,
                        o = se(n),
                        a = ue(r, o);
                      return {
                        keyEntities: a.filter(function (e) {
                          var t = r.find(function (t) {
                            var n = t.key;
                            return e.key === n;
                          });
                          return !t || t.status !== ie || e.status !== ae;
                        }),
                      };
                    },
                  },
                ],
              ),
              r
            );
          })(c['Component']);
        return (n.defaultProps = { component: 'div' }), n;
      }
      fe(w), (t['a'] = ee);
    },
    A90E: function (e, t, n) {
      var r = n('6sVZ'),
        o = n('V6Ve'),
        a = Object.prototype,
        i = a.hasOwnProperty;
      function c(e) {
        if (!r(e)) return o(e);
        var t = [];
        for (var n in Object(e))
          i.call(e, n) && 'constructor' != n && t.push(n);
        return t;
      }
      e.exports = c;
    },
    AP2z: function (e, t, n) {
      var r = n('nmnc'),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        c = r ? r.toStringTag : void 0;
      function s(e) {
        var t = a.call(e, c),
          n = e[c];
        try {
          e[c] = void 0;
          var r = !0;
        } catch (s) {}
        var o = i.call(e);
        return r && (t ? (e[c] = n) : delete e[c]), o;
      }
      e.exports = s;
    },
    B8du: function (e, t) {
      function n() {
        return !1;
      }
      e.exports = n;
    },
    BsWD: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('a3WO');
      function o(e, t) {
        if (e) {
          if ('string' === typeof e) return Object(r['a'])(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r['a'])(e, t)
              : void 0
          );
        }
      }
    },
    CH3K: function (e, t) {
      function n(e, t) {
        var n = -1,
          r = t.length,
          o = e.length;
        while (++n < r) e[o + n] = t[n];
        return e;
      }
      e.exports = n;
    },
    Cwc5: function (e, t, n) {
      var r = n('NKxu'),
        o = n('Npjl');
      function a(e, t) {
        var n = o(e, t);
        return r(n) ? n : void 0;
      }
      e.exports = a;
    },
    DSRE: function (e, t, n) {
      (function (e) {
        var r = n('Kz5y'),
          o = n('B8du'),
          a = t && !t.nodeType && t,
          i = a && 'object' == typeof e && e && !e.nodeType && e,
          c = i && i.exports === a,
          s = c ? r.Buffer : void 0,
          u = s ? s.isBuffer : void 0,
          l = u || o;
        e.exports = l;
      }.call(this, n('hOG+')(e)));
    },
    E2jh: function (e, t, n) {
      var r = n('2gN3'),
        o = (function () {
          var e = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
          return e ? 'Symbol(src)_1.' + e : '';
        })();
      function a(e) {
        return !!o && o in e;
      }
      e.exports = a;
    },
    EpBk: function (e, t) {
      function n(e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
          ? '__proto__' !== e
          : null === e;
      }
      e.exports = n;
    },
    ExA7: function (e, t) {
      function n(e) {
        return null != e && 'object' == typeof e;
      }
      e.exports = n;
    },
    Ff2n: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('zLVn');
      function o(e, t) {
        if (null == e) return {};
        var n,
          o,
          a = Object(r['a'])(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
    },
    GoyQ: function (e, t) {
      function n(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      }
      e.exports = n;
    },
    Gytx: function (e, t) {
      e.exports = function (e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (
          var c = Object.prototype.hasOwnProperty.bind(t), s = 0;
          s < a.length;
          s++
        ) {
          var u = a[s];
          if (!c(u)) return !1;
          var l = e[u],
            f = t[u];
          if (
            ((o = n ? n.call(r, l, f, u) : void 0),
            !1 === o || (void 0 === o && l !== f))
          )
            return !1;
        }
        return !0;
      };
    },
    H1Ra: function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        o = n.n(r),
        a = (function () {
          var e = 0,
            t = {
              util: {
                encode: function (e) {
                  return e instanceof n
                    ? new n(e.type, t.util.encode(e.content), e.alias)
                    : 'Array' === t.util.type(e)
                    ? e.map(t.util.encode)
                    : e
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function (e) {
                  return Object.prototype.toString
                    .call(e)
                    .match(/\[object (\w+)\]/)[1];
                },
                objId: function (t) {
                  return (
                    t['__id'] ||
                      Object.defineProperty(t, '__id', { value: ++e }),
                    t['__id']
                  );
                },
                clone: function (e, n) {
                  var r = t.util.type(e);
                  switch (((n = n || {}), r)) {
                    case 'Object':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)];
                      a = {};
                      for (var o in ((n[t.util.objId(e)] = a), e))
                        e.hasOwnProperty(o) && (a[o] = t.util.clone(e[o], n));
                      return a;
                    case 'Array':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)];
                      var a = [];
                      return (
                        (n[t.util.objId(e)] = a),
                        e.forEach(function (e, r) {
                          a[r] = t.util.clone(e, n);
                        }),
                        a
                      );
                  }
                  return e;
                },
              },
              languages: {
                extend: function (e, n) {
                  var r = t.util.clone(t.languages[e]);
                  for (var o in n) r[o] = n[o];
                  return r;
                },
                insertBefore: function (e, n, r, o) {
                  o = o || t.languages;
                  var a = o[e];
                  if (2 == arguments.length) {
                    for (var i in ((r = arguments[1]), r))
                      r.hasOwnProperty(i) && (a[i] = r[i]);
                    return a;
                  }
                  var c = {};
                  for (var s in a)
                    if (a.hasOwnProperty(s)) {
                      if (s == n)
                        for (var i in r) r.hasOwnProperty(i) && (c[i] = r[i]);
                      c[s] = a[s];
                    }
                  return (
                    t.languages.DFS(t.languages, function (t, n) {
                      n === o[e] && t != e && (this[t] = c);
                    }),
                    (o[e] = c)
                  );
                },
                DFS: function (e, n, r, o) {
                  for (var a in ((o = o || {}), e))
                    e.hasOwnProperty(a) &&
                      (n.call(e, a, e[a], r || a),
                      'Object' !== t.util.type(e[a]) || o[t.util.objId(e[a])]
                        ? 'Array' !== t.util.type(e[a]) ||
                          o[t.util.objId(e[a])] ||
                          ((o[t.util.objId(e[a])] = !0),
                          t.languages.DFS(e[a], n, a, o))
                        : ((o[t.util.objId(e[a])] = !0),
                          t.languages.DFS(e[a], n, null, o)));
                },
              },
              plugins: {},
              highlight: function (e, r, o) {
                var a = { code: e, grammar: r, language: o };
                return (
                  t.hooks.run('before-tokenize', a),
                  (a.tokens = t.tokenize(a.code, a.grammar)),
                  t.hooks.run('after-tokenize', a),
                  n.stringify(t.util.encode(a.tokens), a.language)
                );
              },
              matchGrammar: function (e, n, r, o, a, i, c) {
                var s = t.Token;
                for (var u in r)
                  if (r.hasOwnProperty(u) && r[u]) {
                    if (u == c) return;
                    var l = r[u];
                    l = 'Array' === t.util.type(l) ? l : [l];
                    for (var f = 0; f < l.length; ++f) {
                      var d = l[f],
                        p = d.inside,
                        b = !!d.lookbehind,
                        v = !!d.greedy,
                        m = 0,
                        h = d.alias;
                      if (v && !d.pattern.global) {
                        var g = d.pattern.toString().match(/[imuy]*$/)[0];
                        d.pattern = RegExp(d.pattern.source, g + 'g');
                      }
                      d = d.pattern || d;
                      for (
                        var y = o, O = a;
                        y < n.length;
                        O += n[y].length, ++y
                      ) {
                        var E = n[y];
                        if (n.length > e.length) return;
                        if (!(E instanceof s)) {
                          if (v && y != n.length - 1) {
                            d.lastIndex = O;
                            var w = d.exec(e);
                            if (!w) break;
                            for (
                              var k = w.index + (b ? w[1].length : 0),
                                S = w.index + w[0].length,
                                j = y,
                                x = O,
                                _ = n.length;
                              j < _ &&
                              (x < S || (!n[j].type && !n[j - 1].greedy));
                              ++j
                            )
                              (x += n[j].length), k >= x && (++y, (O = x));
                            if (n[y] instanceof s) continue;
                            (T = j - y), (E = e.slice(O, x)), (w.index -= O);
                          } else {
                            d.lastIndex = 0;
                            w = d.exec(E);
                            var T = 1;
                          }
                          if (w) {
                            b && (m = w[1] ? w[1].length : 0);
                            (k = w.index + m),
                              (w = w[0].slice(m)),
                              (S = k + w.length);
                            var A = E.slice(0, k),
                              C = E.slice(S),
                              N = [y, T];
                            A && (++y, (O += A.length), N.push(A));
                            var R = new s(u, p ? t.tokenize(w, p) : w, h, w, v);
                            if (
                              (N.push(R),
                              C && N.push(C),
                              Array.prototype.splice.apply(n, N),
                              1 != T && t.matchGrammar(e, n, r, y, O, !0, u),
                              i)
                            )
                              break;
                          } else if (i) break;
                        }
                      }
                    }
                  }
              },
              hooks: { add: function () {}, run: function (e, t) {} },
              tokenize: function (e, n, r) {
                var o = [e],
                  a = n.rest;
                if (a) {
                  for (var i in a) n[i] = a[i];
                  delete n.rest;
                }
                return t.matchGrammar(e, o, n, 0, 0, !1), o;
              },
            },
            n = (t.Token = function (e, t, n, r, o) {
              (this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (r || '').length),
                (this.greedy = !!o);
            });
          return (
            (n.stringify = function (e, r, o) {
              if ('string' == typeof e) return e;
              if ('Array' === t.util.type(e))
                return e
                  .map(function (t) {
                    return n.stringify(t, r, e);
                  })
                  .join('');
              var a = {
                type: e.type,
                content: n.stringify(e.content, r, o),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: r,
                parent: o,
              };
              if (e.alias) {
                var i = 'Array' === t.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(a.classes, i);
              }
              var c = Object.keys(a.attributes)
                .map(function (e) {
                  return (
                    e +
                    '="' +
                    (a.attributes[e] || '').replace(/"/g, '&quot;') +
                    '"'
                  );
                })
                .join(' ');
              return (
                '<' +
                a.tag +
                ' class="' +
                a.classes.join(' ') +
                '"' +
                (c ? ' ' + c : '') +
                '>' +
                a.content +
                '</' +
                a.tag +
                '>'
              );
            }),
            t
          );
        })();
      (a.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
          pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            'internal-subset': {
              pattern: /(\[)[\s\S]+(?=\]>$)/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
            punctuation: /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: [
          { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
          /&#x?[\da-f]{1,8};/i,
        ],
      }),
        (a.languages.markup['tag'].inside['attr-value'].inside['entity'] =
          a.languages.markup['entity']),
        (a.languages.markup['doctype'].inside['internal-subset'].inside =
          a.languages.markup),
        a.hooks.add('wrap', function (e) {
          'entity' === e.type &&
            (e.attributes['title'] = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(a.languages.markup.tag, 'addInlined', {
          value: function (e, t) {
            var n = {};
            (n['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: a.languages[t],
            }),
              (n['cdata'] = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r['language-' + t] = { pattern: /[\s\S]+/, inside: a.languages[t] };
            var o = {};
            (o[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  },
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              a.languages.insertBefore('markup', 'cdata', o);
          },
        }),
        (a.languages.html = a.languages.markup),
        (a.languages.mathml = a.languages.markup),
        (a.languages.svg = a.languages.markup),
        (a.languages.xml = a.languages.extend('markup', {})),
        (a.languages.ssml = a.languages.xml),
        (a.languages.atom = a.languages.xml),
        (a.languages.rss = a.languages.xml),
        (function (e) {
          var t =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: 'punctuation',
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + t),
                      lookbehind: !0,
                      alias: 'constant',
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
            ],
            environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
            variable: r.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern:
                /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: {
                'file-descriptor': { pattern: /^\d/, alias: 'important' },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var o = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              a = r.variable[1].inside,
              i = 0;
            i < o.length;
            i++
          )
            a[o[i]] = e.languages.bash[o[i]];
          e.languages.shell = e.languages.bash;
        })(a),
        (a.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (a.languages.c = a.languages.extend('clike', {
          comment: {
            pattern:
              /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          function: /[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        a.languages.insertBefore('c', 'string', {
          macro: {
            pattern:
              /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                a.languages.c['string'],
              ],
              comment: a.languages.c['comment'],
              'macro-name': [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: 'function',
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: 'keyword',
              },
              'directive-hash': /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: a.languages.c },
            },
          },
          constant:
            /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete a.languages.c['boolean'],
        (function (e) {
          var t =
            /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
          (e.languages.cpp = e.languages.extend('c', {
            'class-name': [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    },
                  ),
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator:
              />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:true|false)\b/,
          })),
            e.languages.insertBefore('cpp', 'string', {
              'raw-string': {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: 'string',
                greedy: !0,
              },
            }),
            e.languages.insertBefore('cpp', 'class-name', {
              'base-clause': {
                pattern:
                  /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend('cpp', {}),
              },
            }),
            e.languages.insertBefore(
              'inside',
              'operator',
              { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp['base-clause'],
            );
        })(a),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  t.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i',
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
              },
            },
            selector: RegExp(
              '[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
                t.source +
                ')*(?=\\s*\\{)',
            ),
            string: { pattern: t, greedy: !0 },
            property:
              /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css['atrule'].inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined('style', 'css'),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                  lookbehind: !0,
                  inside: {
                    'attr-value': {
                      pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                      inside: {
                        style: {
                          pattern: /(["'])[\s\S]+(?=["']$)/,
                          lookbehind: !0,
                          alias: 'language-css',
                          inside: e.languages.css,
                        },
                        punctuation: [
                          { pattern: /^=/, alias: 'attr-equals' },
                          /"|'/,
                        ],
                      },
                    },
                    'attr-name': /^style/i,
                  },
                },
              },
              n.tag,
            ));
        })(a),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector,
            inside: (t = {
              'pseudo-element':
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              'pseudo-class': /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  'case-sensitivity': {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: 'keyword',
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  'attr-name': {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  'attr-value': [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              'n-th': [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css['atrule'].inside[
              'selector-function-argument'
            ].inside = t),
            e.languages.insertBefore('css', 'property', {
              variable: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var r = { pattern: /(\b\d+)(?:%|[a-z]+\b)/, lookbehind: !0 },
            o = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore('css', 'function', {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i, alias: 'color' },
            color: [
              /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
              {
                pattern:
                  /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: r,
                  number: o,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: o,
          });
        })(a),
        (a.languages.javascript = a.languages.extend('clike', {
          'class-name': [
            a.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number:
            /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (a.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        a.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: a.languages.regex,
              },
              'regex-flags': /[a-z]+$/,
              'regex-delimiter': /^\/|\/$/,
            },
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            {
              pattern:
                /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              inside: a.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        a.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern:
              /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\${|}$/,
                    alias: 'punctuation',
                  },
                  rest: a.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        a.languages.markup &&
          a.languages.markup.tag.addInlined('script', 'javascript'),
        (a.languages.js = a.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern =
              /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside['tag'].inside['class-name'] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern:
                    /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ },
                },
              },
              e.languages.jsx.tag,
            ),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                script: {
                  pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?={)/,
                      alias: 'punctuation',
                    },
                    rest: e.languages.jsx,
                  },
                  alias: 'language-javascript',
                },
              },
              e.languages.jsx.tag,
            );
          var n = function e(t) {
              return t
                ? 'string' === typeof t
                  ? t
                  : 'string' === typeof t.content
                  ? t.content
                  : t.content.map(e).join('')
                : '';
            },
            r = function t(r) {
              for (var o = [], a = 0; a < r.length; a++) {
                var i = r[a],
                  c = !1;
                if (
                  ('string' !== typeof i &&
                    ('tag' === i.type &&
                    i.content[0] &&
                    'tag' === i.content[0].type
                      ? '</' === i.content[0].content[0].content
                        ? o.length > 0 &&
                          o[o.length - 1].tagName ===
                            n(i.content[0].content[1]) &&
                          o.pop()
                        : '/>' === i.content[i.content.length - 1].content ||
                          o.push({
                            tagName: n(i.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : o.length > 0 &&
                        'punctuation' === i.type &&
                        '{' === i.content
                      ? o[o.length - 1].openedBraces++
                      : o.length > 0 &&
                        o[o.length - 1].openedBraces > 0 &&
                        'punctuation' === i.type &&
                        '}' === i.content
                      ? o[o.length - 1].openedBraces--
                      : (c = !0)),
                  (c || 'string' === typeof i) &&
                    o.length > 0 &&
                    0 === o[o.length - 1].openedBraces)
                ) {
                  var s = n(i);
                  a < r.length - 1 &&
                    ('string' === typeof r[a + 1] ||
                      'plain-text' === r[a + 1].type) &&
                    ((s += n(r[a + 1])), r.splice(a + 1, 1)),
                    a > 0 &&
                      ('string' === typeof r[a - 1] ||
                        'plain-text' === r[a - 1].type) &&
                      ((s = n(r[a - 1]) + s), r.splice(a - 1, 1), a--),
                    (r[a] = new e.Token('plain-text', s, null, s));
                }
                i.content && 'string' !== typeof i.content && t(i.content);
              }
            };
          e.hooks.add('after-tokenize', function (e) {
            ('jsx' !== e.language && 'tsx' !== e.language) || r(e.tokens);
          });
        })(a),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t,
            );
          }
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  e.languages.javascript['function-variable'].pattern.source,
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
              ],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + e.languages.javascript['function'].source,
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            e.languages.insertBefore('javascript', 'keyword', {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript['keyword'].unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module',
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' },
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var n = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r],
              a = e.languages.javascript[o];
            'RegExp' === e.util.type(a) &&
              (a = e.languages.javascript[o] = { pattern: a });
            var i = a.inside || {};
            (a.inside = i), (i['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(a),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: 'variable' };
          (e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': {
                pattern: /###[\s\S]+?###/,
                alias: 'comment',
              },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: 'language-javascript',
                    inside: e.languages.javascript,
                  },
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: 'string',
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript);
        })(a),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          var t = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!',
          };
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              o = [];
            /^\w+$/.test(n) || o.push(/\w+/.exec(n)[0]),
              'diff' === n && o.push('bold'),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  '^(?:[' + r + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
                  'm',
                ),
                alias: o,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, 'PREFIXES', { value: t });
        })(a),
        (a.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          'commit-sha1': /^commit \w{40}$/m,
        }),
        (a.languages.go = a.languages.extend('clike', {
          string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          number:
            /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
        })),
        delete a.languages.go['class-name'],
        (a.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: a.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern:
              /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function (e) {
          function t(e, t) {
            return '___' + e.toUpperCase() + t + '___';
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function (n, r, o, a) {
                if (n.language === r) {
                  var i = (n.tokenStack = []);
                  (n.code = n.code.replace(o, function (e) {
                    if ('function' === typeof a && !a(e)) return e;
                    var o,
                      c = i.length;
                    while (-1 !== n.code.indexOf((o = t(r, c)))) ++c;
                    return (i[c] = e), o;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var o = 0,
                    a = Object.keys(n.tokenStack);
                  i(n.tokens);
                }
                function i(c) {
                  for (var s = 0; s < c.length; s++) {
                    if (o >= a.length) break;
                    var u = c[s];
                    if (
                      'string' === typeof u ||
                      (u.content && 'string' === typeof u.content)
                    ) {
                      var l = a[o],
                        f = n.tokenStack[l],
                        d = 'string' === typeof u ? u : u.content,
                        p = t(r, l),
                        b = d.indexOf(p);
                      if (b > -1) {
                        ++o;
                        var v = d.substring(0, b),
                          m = new e.Token(
                            r,
                            e.tokenize(f, n.grammar),
                            'language-' + r,
                            f,
                          ),
                          h = d.substring(b + p.length),
                          g = [];
                        v && g.push.apply(g, i([v])),
                          g.push(m),
                          h && g.push.apply(g, i([h])),
                          'string' === typeof u
                            ? c.splice.apply(c, [s, 1].concat(g))
                            : (u.content = g);
                      }
                    } else u.content && i(u.content);
                  }
                  return c;
                }
              },
            },
          });
        })(a),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
              lookbehind: !0,
              alias: 'keyword',
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add('before-tokenize', function (t) {
              var n = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'handlebars',
                n,
              );
            }),
            e.hooks.add('after-tokenize', function (t) {
              e.languages['markup-templating'].tokenizePlaceholders(
                t,
                'handlebars',
              );
            });
        })(a),
        (a.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (a.languages.webmanifest = a.languages.json),
        (a.languages.less = a.languages.extend('css', {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        a.languages.insertBefore('less', 'property', {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          'mixin-usage': {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: 'function',
          },
        }),
        (a.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern:
                /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + e + ')')
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return r;
              },
            ),
            a =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend('markup', {})),
            e.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'font-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + o + a + '(?:' + o + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + o + a + ')(?:' + o + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + o + ')' + a + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + o + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(r),
                        alias: 'important',
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
              ['url', 'bold', 'italic', 'strike'].forEach(function (n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n]);
              });
            }),
            e.hooks.add('after-tokenize', function (e) {
              function t(e) {
                if (e && 'string' !== typeof e)
                  for (var n = 0, r = e.length; n < r; n++) {
                    var o = e[n];
                    if ('code' === o.type) {
                      var a = o.content[1],
                        i = o.content[3];
                      if (
                        a &&
                        i &&
                        'code-language' === a.type &&
                        'code-block' === i.type &&
                        'string' === typeof a.content
                      ) {
                        var c = a.content
                          .replace(/\b#/g, 'sharp')
                          .replace(/\b\+\+/g, 'pp');
                        c = (/[a-z][\w-]*/i.exec(c) || [''])[0].toLowerCase();
                        var s = 'language-' + c;
                        i.alias
                          ? 'string' === typeof i.alias
                            ? (i.alias = [i.alias, s])
                            : i.alias.push(s)
                          : (i.alias = [s]);
                      }
                    } else t(o.content);
                  }
              }
              ('markdown' !== e.language && 'md' !== e.language) || t(e.tokens);
            }),
            e.hooks.add('wrap', function (t) {
              if ('code-block' === t.type) {
                for (var n = '', r = 0, o = t.classes.length; r < o; r++) {
                  var a = t.classes[r],
                    i = /language-(.+)/.exec(a);
                  if (i) {
                    n = i[1];
                    break;
                  }
                }
                var c = e.languages[n];
                if (c) {
                  var s = t.content
                    .replace(/&lt;/g, '<')
                    .replace(/&amp;/g, '&');
                  t.content = e.highlight(s, c, n);
                } else if (n && 'none' !== n && e.plugins.autoloader) {
                  var u =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(1e16 * Math.random());
                  (t.attributes['id'] = u),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(u);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n,
                        ));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(a),
        (a.languages.objectivec = a.languages.extend('c', {
          string:
            /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          keyword:
            /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete a.languages.objectivec['class-name'],
        (a.languages.objc = a.languages.objectivec),
        (a.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number:
            /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
          directive: { pattern: /\B#\w+/, alias: 'important' },
          label: { pattern: /\B~\w+/, alias: 'function' },
          'type-variable': { pattern: /\B'\w+/, alias: 'function' },
          variant: { pattern: /`\w+/, alias: 'variable' },
          module: { pattern: /\b[A-Z]\w+/, alias: 'variable' },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator:
            /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /[(){}\[\]|.,:;]|\b_\b/,
        }),
        (a.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          'string-interpolation': {
            pattern:
              /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  'format-spec': {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  'conversion-option': {
                    pattern: /![sra](?=[:}]$)/,
                    alias: 'punctuation',
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: 'string',
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/im,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number:
            /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (a.languages.python['string-interpolation'].inside[
          'interpolation'
        ].inside.rest = a.languages.python),
        (a.languages.py = a.languages.python),
        (a.languages.reason = a.languages.extend('clike', {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          'class-name': /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        a.languages.insertBefore('reason', 'class-name', {
          character: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: 'string',
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: 'variable' },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete a.languages.reason['function'],
        (function (e) {
          (e.languages.sass = e.languages.extend('css', {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern:
                  /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(a),
        (a.languages.scss = a.languages.extend('css', {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        a.languages.insertBefore('scss', 'atrule', {
          keyword: [
            /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        a.languages.insertBefore('scss', 'important', {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        a.languages.insertBefore('scss', 'function', {
          'module-modifier': {
            pattern: /\b(?:as|with|show|hide)\b/i,
            alias: 'keyword',
          },
          placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: 'keyword',
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (a.languages.scss['atrule'].inside.rest = a.languages.scss),
        (a.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            r = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /url\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern:
                  /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern:
                    /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: t,
                    number: n,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:true|false)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            };
          (r['interpolation'] = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: {
              delimiter: { pattern: /^{|}$/, alias: 'punctuation' },
              rest: r,
            },
          }),
            (r['func'] = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: r },
            }),
            (e.languages.stylus = {
              'atrule-declaration': {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              'property-declaration': {
                pattern:
                  /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: r.interpolation },
                  },
                  rest: r,
                },
              },
              selector: {
                pattern:
                  /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: r.interpolation,
                  comment: r.comment,
                  punctuation: /[{},]/,
                },
              },
              func: r.func,
              string: r.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(a),
        (function (e) {
          (e.languages.typescript = e.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            keyword:
              /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
            builtin:
              /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
          })),
            delete e.languages.typescript['parameter'];
          var t = e.languages.extend('typescript', {});
          delete t['class-name'],
            (e.languages.typescript['class-name'].inside = t),
            e.languages.insertBefore('typescript', 'function', {
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(a),
        (function (e) {
          var t = e.util.clone(e.languages.typescript);
          e.languages.tsx = e.languages.extend('jsx', t);
          var n = e.languages.tsx.tag;
          (n.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + '(?:' + n.pattern.source + ')',
            n.pattern.flags,
          )),
            (n.lookbehind = !0);
        })(a),
        (a.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              '(?:' +
              n.source +
              '(?:[ \t]+' +
              t.source +
              ')?|' +
              t.source +
              '(?:[ \t]+' +
              n.source +
              ')?)',
            o =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                },
              ),
            a = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function i(e, t) {
            t = (t || '').replace(/m/g, '') + 'm';
            var n =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return r;
                })
                .replace(/<<value>>/g, function () {
                  return e;
                });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  },
                ),
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + o + '|' + a + ')';
                  }),
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: 'important',
            },
            datetime: {
              pattern: i(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source,
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: i(/true|false/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: i(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: { pattern: i(a), lookbehind: !0, greedy: !0 },
            number: {
              pattern: i(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i',
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(a);
      var i = a,
        c = {
          plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
              style: { color: '#6c6783' },
            },
            { types: ['namespace'], style: { opacity: 0.7 } },
            {
              types: ['tag', 'operator', 'number'],
              style: { color: '#e09142' },
            },
            { types: ['property', 'function'], style: { color: '#9a86fd' } },
            {
              types: ['tag-id', 'selector', 'atrule-id'],
              style: { color: '#eeebff' },
            },
            { types: ['attr-name'], style: { color: '#c4b9fe' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'variable',
              ],
              style: { color: '#ffcc99' },
            },
            {
              types: ['deleted'],
              style: { textDecorationLine: 'line-through' },
            },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#c4b9fe' } },
          ],
        },
        s = c,
        u = { Prism: i, theme: s };
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f() {
        return (
          (f =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          f.apply(this, arguments)
        );
      }
      var d = /\r\n|\r|\n/,
        p = function (e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '\n', empty: !0 })
            : 1 === e.length &&
              '' === e[0].content &&
              ((e[0].content = '\n'), (e[0].empty = !0));
        },
        b = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        v = function (e) {
          var t = [[]],
            n = [e],
            r = [0],
            o = [e.length],
            a = 0,
            i = 0,
            c = [],
            s = [c];
          while (i > -1) {
            while ((a = r[i]++) < o[i]) {
              var u = void 0,
                l = t[i],
                f = n[i],
                v = f[a];
              if (
                ('string' === typeof v
                  ? ((l = i > 0 ? l : ['plain']), (u = v))
                  : ((l = b(l, v.type)),
                    v.alias && (l = b(l, v.alias)),
                    (u = v.content)),
                'string' === typeof u)
              ) {
                var m = u.split(d),
                  h = m.length;
                c.push({ types: l, content: m[0] });
                for (var g = 1; g < h; g++)
                  p(c), s.push((c = [])), c.push({ types: l, content: m[g] });
              } else i++, t.push(l), n.push(u), r.push(0), o.push(u.length);
            }
            i--, t.pop(), n.pop(), r.pop(), o.pop();
          }
          return p(c), s;
        },
        m = function (e, t) {
          var n = e.plain,
            r = Object.create(null),
            o = e.styles.reduce(function (e, n) {
              var r = n.languages,
                o = n.style;
              return (
                (r && !r.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = f({}, e[t], o);
                    e[t] = n;
                  }),
                e
              );
            }, r);
          return (
            (o.root = n), (o.plain = f({}, n, { backgroundColor: null })), o
          );
        };
      function h(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            -1 === t.indexOf(r) &&
            (n[r] = e[r]);
        return n;
      }
      var g = (function (e) {
          function t() {
            var t = this,
              n = [],
              r = arguments.length;
            while (r--) n[r] = arguments[r];
            e.apply(this, n),
              l(this, 'getThemeDict', function (e) {
                if (
                  void 0 !== t.themeDict &&
                  e.theme === t.prevTheme &&
                  e.language === t.prevLanguage
                )
                  return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? m(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              l(this, 'getLineProps', function (e) {
                var n = e.key,
                  r = e.className,
                  o = e.style,
                  a = h(e, ['key', 'className', 'style', 'line']),
                  i = a,
                  c = f({}, i, {
                    className: 'token-line',
                    style: void 0,
                    key: void 0,
                  }),
                  s = t.getThemeDict(t.props);
                return (
                  void 0 !== s && (c.style = s.plain),
                  void 0 !== o &&
                    (c.style = void 0 !== c.style ? f({}, c.style, o) : o),
                  void 0 !== n && (c.key = n),
                  r && (c.className += ' ' + r),
                  c
                );
              }),
              l(this, 'getStyleForToken', function (e) {
                var n = e.types,
                  r = e.empty,
                  o = n.length,
                  a = t.getThemeDict(t.props);
                if (void 0 !== a) {
                  if (1 === o && 'plain' === n[0])
                    return r ? { display: 'inline-block' } : void 0;
                  if (1 === o && !r) return a[n[0]];
                  var i = r ? { display: 'inline-block' } : {},
                    c = n.map(function (e) {
                      return a[e];
                    });
                  return Object.assign.apply(Object, [i].concat(c));
                }
              }),
              l(this, 'getTokenProps', function (e) {
                var n = e.key,
                  r = e.className,
                  o = e.style,
                  a = e.token,
                  i = h(e, ['key', 'className', 'style', 'token']),
                  c = i,
                  s = f({}, c, {
                    className: 'token ' + a.types.join(' '),
                    children: a.content,
                    style: t.getStyleForToken(a),
                    key: void 0,
                  });
                return (
                  void 0 !== o &&
                    (s.style = void 0 !== s.style ? f({}, s.style, o) : o),
                  void 0 !== n && (s.key = n),
                  r && (s.className += ' ' + r),
                  s
                );
              }),
              l(this, 'tokenize', function (e, t, n, r) {
                var o = { code: t, grammar: n, language: r, tokens: [] };
                e.hooks.run('before-tokenize', o);
                var a = (o.tokens = e.tokenize(o.code, o.grammar, o.language));
                return e.hooks.run('after-tokenize', o), a;
              });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                r = e.code,
                o = e.children,
                a = this.getThemeDict(this.props),
                i = t.languages[n],
                c = void 0 !== i ? this.tokenize(t, r, i, n) : [r],
                s = v(c);
              return o({
                tokens: s,
                className: 'prism-code language-' + n,
                style: void 0 !== a ? a.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            t
          );
        })(r['Component']),
        y = g,
        O = n('dEAq');
      n('qHiR'), n('foS9');
      function E() {
        return (
          (E =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          E.apply(this, arguments)
        );
      }
      function w(e, t) {
        return _(e) || x(e, t) || S(e, t) || k();
      }
      function k() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function S(e, t) {
        if (e) {
          if ('string' === typeof e) return j(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? j(e, t)
              : void 0
          );
        }
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function x(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a = [],
            i = !0,
            c = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done); i = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (s) {
            (c = !0), (o = s);
          } finally {
            try {
              i || null == n['return'] || n['return']();
            } finally {
              if (c) throw o;
            }
          }
          return a;
        }
      }
      function _(e) {
        if (Array.isArray(e)) return e;
      }
      var T = { acss: 'css', axml: 'xml' };
      t['a'] = function (e) {
        var t = e.code,
          n = e.lang,
          r = e.showCopy,
          a = void 0 === r || r,
          i = Object(O['useCopy'])(),
          c = w(i, 2),
          s = c[0],
          l = c[1];
        return o.a.createElement(
          'div',
          { className: '__dumi-default-code-block' },
          o.a.createElement(
            y,
            E({}, u, { code: t, language: T[n] || n, theme: void 0 }),
            function (e) {
              var n = e.className,
                r = e.style,
                i = e.tokens,
                c = e.getLineProps,
                u = e.getTokenProps;
              return o.a.createElement(
                'pre',
                { className: n, style: r },
                a &&
                  o.a.createElement('button', {
                    className:
                      '__dumi-default-icon __dumi-default-code-block-copy-btn',
                    'data-status': l,
                    onClick: function () {
                      return s(t);
                    },
                  }),
                i.map(function (e, t) {
                  return o.a.createElement(
                    'div',
                    c({ line: e, key: t }),
                    e.map(function (e, t) {
                      return o.a.createElement('span', u({ token: e, key: t }));
                    }),
                  );
                }),
              );
            },
          ),
        );
      };
    },
    H8j4: function (e, t, n) {
      var r = n('QkVE');
      function o(e, t) {
        var n = r(this, e),
          o = n.size;
        return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
      }
      e.exports = o;
    },
    HDyB: function (e, t, n) {
      var r = n('nmnc'),
        o = n('JHRd'),
        a = n('ljhN'),
        i = n('or5M'),
        c = n('7fqy'),
        s = n('rEGp'),
        u = 1,
        l = 2,
        f = '[object Boolean]',
        d = '[object Date]',
        p = '[object Error]',
        b = '[object Map]',
        v = '[object Number]',
        m = '[object RegExp]',
        h = '[object Set]',
        g = '[object String]',
        y = '[object Symbol]',
        O = '[object ArrayBuffer]',
        E = '[object DataView]',
        w = r ? r.prototype : void 0,
        k = w ? w.valueOf : void 0;
      function S(e, t, n, r, w, S, j) {
        switch (n) {
          case E:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case O:
            return !(e.byteLength != t.byteLength || !S(new o(e), new o(t)));
          case f:
          case d:
          case v:
            return a(+e, +t);
          case p:
            return e.name == t.name && e.message == t.message;
          case m:
          case g:
            return e == t + '';
          case b:
            var x = c;
          case h:
            var _ = r & u;
            if ((x || (x = s), e.size != t.size && !_)) return !1;
            var T = j.get(e);
            if (T) return T == t;
            (r |= l), j.set(e, t);
            var A = i(x(e), x(t), r, w, S, j);
            return j['delete'](e), A;
          case y:
            if (k) return k.call(e) == k.call(t);
        }
        return !1;
      }
      e.exports = S;
    },
    HOxn: function (e, t, n) {
      var r = n('Cwc5'),
        o = n('Kz5y'),
        a = r(o, 'Promise');
      e.exports = a;
    },
    Hvzi: function (e, t) {
      function n(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      }
      e.exports = n;
    },
    JHRd: function (e, t, n) {
      var r = n('Kz5y'),
        o = r.Uint8Array;
      e.exports = o;
    },
    JHgL: function (e, t, n) {
      var r = n('QkVE');
      function o(e) {
        return r(this, e).get(e);
      }
      e.exports = o;
    },
    JSQU: function (e, t, n) {
      var r = n('YESw'),
        o = '__lodash_hash_undefined__';
      function a(e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? o : t),
          this
        );
      }
      e.exports = a;
    },
    JTzB: function (e, t, n) {
      var r = n('NykK'),
        o = n('ExA7'),
        a = '[object Arguments]';
      function i(e) {
        return o(e) && r(e) == a;
      }
      e.exports = i;
    },
    JX7q: function (e, t, n) {
      'use strict';
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    Ji7U: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('s4An');
      function o(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Object(r['a'])(e, t);
      }
    },
    KMkd: function (e, t) {
      function n() {
        (this.__data__ = []), (this.size = 0);
      }
      e.exports = n;
    },
    KQm4: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n('a3WO');
      function o(e) {
        if (Array.isArray(e)) return Object(r['a'])(e);
      }
      function a(e) {
        if (
          ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      var i = n('BsWD');
      function c() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function s(e) {
        return o(e) || a(e) || Object(i['a'])(e) || c();
      }
    },
    KfNM: function (e, t) {
      var n = Object.prototype,
        r = n.toString;
      function o(e) {
        return r.call(e);
      }
      e.exports = o;
    },
    Kwbf: function (e, t, n) {
      'use strict';
      var r = {};
      function o(e, t) {
        0;
      }
      function a(e, t, n) {
        t || r[n] || (e(!1, n), (r[n] = !0));
      }
      function i(e, t) {
        a(o, e, t);
      }
      t['a'] = i;
    },
    Kz5y: function (e, t, n) {
      var r = n('WFqU'),
        o = 'object' == typeof self && self && self.Object === Object && self,
        a = r || o || Function('return this')();
      e.exports = a;
    },
    L8xA: function (e, t) {
      function n(e) {
        var t = this.__data__,
          n = t['delete'](e);
        return (this.size = t.size), n;
      }
      e.exports = n;
    },
    'LK+K': function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          (r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(e)
        );
      }
      function o() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      n.d(t, 'a', function () {
        return u;
      });
      var a = n('cDf5'),
        i = n.n(a),
        c = n('JX7q');
      function s(e, t) {
        if (t && ('object' === i()(t) || 'function' === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return Object(c['a'])(e);
      }
      function u(e) {
        var t = o();
        return function () {
          var n,
            o = r(e);
          if (t) {
            var a = r(this).constructor;
            n = Reflect.construct(o, arguments, a);
          } else n = o.apply(this, arguments);
          return s(this, n);
        };
      }
    },
    LXxW: function (e, t) {
      function n(e, t) {
        var n = -1,
          r = null == e ? 0 : e.length,
          o = 0,
          a = [];
        while (++n < r) {
          var i = e[n];
          t(i, n, e) && (a[o++] = i);
        }
        return a;
      }
      e.exports = n;
    },
    MMmD: function (e, t, n) {
      var r = n('lSCD'),
        o = n('shjB');
      function a(e) {
        return null != e && o(e.length) && !r(e);
      }
      e.exports = a;
    },
    MNnm: function (e, t, n) {
      'use strict';
      function r() {
        return !(
          'undefined' === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    MvSz: function (e, t, n) {
      var r = n('LXxW'),
        o = n('0ycA'),
        a = Object.prototype,
        i = a.propertyIsEnumerable,
        c = Object.getOwnPropertySymbols,
        s = c
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  r(c(e), function (t) {
                    return i.call(e, t);
                  }));
            }
          : o;
      e.exports = s;
    },
    NKxu: function (e, t, n) {
      var r = n('lSCD'),
        o = n('E2jh'),
        a = n('GoyQ'),
        i = n('3Fdi'),
        c = /[\\^$.*+?()[\]{}|]/g,
        s = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        l = Object.prototype,
        f = u.toString,
        d = l.hasOwnProperty,
        p = RegExp(
          '^' +
            f
              .call(d)
              .replace(c, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ) +
            '$',
        );
      function b(e) {
        if (!a(e) || o(e)) return !1;
        var t = r(e) ? p : s;
        return t.test(i(e));
      }
      e.exports = b;
    },
    Npjl: function (e, t) {
      function n(e, t) {
        return null == e ? void 0 : e[t];
      }
      e.exports = n;
    },
    NykK: function (e, t, n) {
      var r = n('nmnc'),
        o = n('AP2z'),
        a = n('KfNM'),
        i = '[object Null]',
        c = '[object Undefined]',
        s = r ? r.toStringTag : void 0;
      function u(e) {
        return null == e
          ? void 0 === e
            ? c
            : i
          : s && s in Object(e)
          ? o(e)
          : a(e);
      }
      e.exports = u;
    },
    ODXe: function (e, t, n) {
      'use strict';
      function r(e) {
        if (Array.isArray(e)) return e;
      }
      function o(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a = [],
            i = !0,
            c = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done); i = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (s) {
            (c = !0), (o = s);
          } finally {
            try {
              i || null == n['return'] || n['return']();
            } finally {
              if (c) throw o;
            }
          }
          return a;
        }
      }
      n.d(t, 'a', function () {
        return c;
      });
      var a = n('BsWD');
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function c(e, t) {
        return r(e) || o(e, t) || Object(a['a'])(e, t) || i();
      }
    },
    'Of+w': function (e, t, n) {
      var r = n('Cwc5'),
        o = n('Kz5y'),
        a = r(o, 'WeakMap');
      e.exports = a;
    },
    QkVE: function (e, t, n) {
      var r = n('EpBk');
      function o(e, t) {
        var n = e.__data__;
        return r(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
      }
      e.exports = o;
    },
    QoRX: function (e, t) {
      function n(e, t) {
        var n = -1,
          r = null == e ? 0 : e.length;
        while (++n < r) if (t(e[n], n, e)) return !0;
        return !1;
      }
      e.exports = n;
    },
    QqLw: function (e, t, n) {
      var r = n('tadb'),
        o = n('ebwN'),
        a = n('HOxn'),
        i = n('yGk4'),
        c = n('Of+w'),
        s = n('NykK'),
        u = n('3Fdi'),
        l = '[object Map]',
        f = '[object Object]',
        d = '[object Promise]',
        p = '[object Set]',
        b = '[object WeakMap]',
        v = '[object DataView]',
        m = u(r),
        h = u(o),
        g = u(a),
        y = u(i),
        O = u(c),
        E = s;
      ((r && E(new r(new ArrayBuffer(1))) != v) ||
        (o && E(new o()) != l) ||
        (a && E(a.resolve()) != d) ||
        (i && E(new i()) != p) ||
        (c && E(new c()) != b)) &&
        (E = function (e) {
          var t = s(e),
            n = t == f ? e.constructor : void 0,
            r = n ? u(n) : '';
          if (r)
            switch (r) {
              case m:
                return v;
              case h:
                return l;
              case g:
                return d;
              case y:
                return p;
              case O:
                return b;
            }
          return t;
        }),
        (e.exports = E);
    },
    RZMt: function (e, t, n) {},
    SfRM: function (e, t, n) {
      var r = n('YESw');
      function o() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      }
      e.exports = o;
    },
    TSYQ: function (e, t, n) {
      var r, o;
      (function () {
        'use strict';
        var n = {}.hasOwnProperty;
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var o = typeof r;
              if ('string' === o || 'number' === o) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var i = a.apply(null, r);
                  i && e.push(i);
                }
              } else if ('object' === o)
                if (r.toString === Object.prototype.toString)
                  for (var c in r) n.call(r, c) && r[c] && e.push(c);
                else e.push(r.toString());
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((a['default'] = a), (e.exports = a))
          : ((r = []),
            (o = function () {
              return a;
            }.apply(t, r)),
            void 0 === o || (e.exports = o));
      })();
    },
    U8pU: function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          (r =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          r(e)
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    'UNi/': function (e, t) {
      function n(e, t) {
        var n = -1,
          r = Array(e);
        while (++n < e) r[n] = t(n);
        return r;
      }
      e.exports = n;
    },
    V6Ve: function (e, t, n) {
      var r = n('kekF'),
        o = r(Object.keys, Object);
      e.exports = o;
    },
    VTBJ: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('rePB');
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                Object(r['a'])(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
    },
    VaNO: function (e, t) {
      function n(e) {
        return this.__data__.has(e);
      }
      e.exports = n;
    },
    WFqU: function (e, t, n) {
      (function (t) {
        var n = 'object' == typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n('IyRk')));
    },
    Xi7e: function (e, t, n) {
      var r = n('KMkd'),
        o = n('adU4'),
        a = n('tMB7'),
        i = n('+6XX'),
        c = n('Z8oC');
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        this.clear();
        while (++t < n) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype['delete'] = o),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = c),
        (e.exports = s);
    },
    'Y+p1': function (e, t, n) {
      var r = n('wF/u');
      function o(e, t) {
        return r(e, t);
      }
      e.exports = o;
    },
    YESw: function (e, t, n) {
      var r = n('Cwc5'),
        o = r(Object, 'create');
      e.exports = o;
    },
    Z0cm: function (e, t) {
      var n = Array.isArray;
      e.exports = n;
    },
    Z8oC: function (e, t, n) {
      var r = n('y1pI');
      function o(e, t) {
        var n = this.__data__,
          o = r(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
      }
      e.exports = o;
    },
    Zm9Q: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n('q1tI'),
        o = n.n(r),
        a = n('TOwV');
      function i(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = [];
        return (
          o.a.Children.forEach(e, function (e) {
            ((void 0 !== e && null !== e) || t.keepEmpty) &&
              (Array.isArray(e)
                ? (n = n.concat(i(e)))
                : Object(a['isFragment'])(e) && e.props
                ? (n = n.concat(i(e.props.children, t)))
                : n.push(e));
          }),
          n
        );
      }
    },
    Zxc8: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('q1tI'),
        o = n.n(r),
        a = n('wx14'),
        i = n('rePB'),
        c = n('ODXe'),
        s = n('U8pU'),
        u = n('Ff2n'),
        l = n('VTBJ'),
        f = n('TSYQ'),
        d = n.n(f),
        p = n('Zm9Q'),
        b = function () {
          if ('undefined' === typeof navigator || 'undefined' === typeof window)
            return !1;
          var e = navigator.userAgent || navigator.vendor || window.opera;
          return !(
            !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              e,
            ) &&
            !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
              null === e || void 0 === e ? void 0 : e.substr(0, 4),
            )
          );
        };
      function v(e, t) {
        var n = t || {},
          o = n.defaultValue,
          a = n.value,
          i = n.onChange,
          s = n.postState,
          u = r['useState'](function () {
            return void 0 !== a
              ? a
              : void 0 !== o
              ? 'function' === typeof o
                ? o()
                : o
              : 'function' === typeof e
              ? e()
              : e;
          }),
          l = Object(c['a'])(u, 2),
          f = l[0],
          d = l[1],
          p = void 0 !== a ? a : f;
        function b(e) {
          d(e), p !== e && i && i(e, p);
        }
        s && (p = s(p));
        var v = r['useRef'](!0);
        return (
          r['useEffect'](
            function () {
              v.current ? (v.current = !1) : void 0 === a && d(a);
            },
            [a],
          ),
          [p, b]
        );
      }
      var m = n('KQm4'),
        h = n('wgJM'),
        g = n('t23M');
      function y(e) {
        var t = Object(r['useRef'])(),
          n = Object(r['useRef'])(!1);
        function o() {
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          n.current ||
            (h['a'].cancel(t.current),
            (t.current = Object(h['a'])(function () {
              e.apply(void 0, o);
            })));
        }
        return (
          Object(r['useEffect'])(function () {
            return function () {
              (n.current = !0), h['a'].cancel(t.current);
            };
          }, []),
          o
        );
      }
      function O(e) {
        var t = Object(r['useRef'])([]),
          n = Object(r['useState'])({}),
          o = Object(c['a'])(n, 2),
          a = o[1],
          i = Object(r['useRef'])('function' === typeof e ? e() : e),
          s = y(function () {
            var e = i.current;
            t.current.forEach(function (t) {
              e = t(e);
            }),
              (t.current = []),
              (i.current = e),
              a({});
          });
        function u(e) {
          t.current.push(e), s();
        }
        return [i.current, u];
      }
      var E = n('4IlW');
      function w(e, t) {
        var n,
          o = e.prefixCls,
          a = e.id,
          c = e.active,
          s = e.tab,
          u = s.key,
          l = s.tab,
          f = s.disabled,
          p = s.closeIcon,
          b = e.closable,
          v = e.renderWrapper,
          m = e.removeAriaLabel,
          h = e.editable,
          g = e.onClick,
          y = e.onRemove,
          O = e.onFocus,
          w = e.style,
          k = ''.concat(o, '-tab');
        r['useEffect'](function () {
          return y;
        }, []);
        var S = h && !1 !== b && !f;
        function j(e) {
          f || g(e);
        }
        function x(e) {
          e.preventDefault(),
            e.stopPropagation(),
            h.onEdit('remove', { key: u, event: e });
        }
        var _ = r['createElement'](
          'div',
          {
            key: u,
            ref: t,
            className: d()(
              k,
              ((n = {}),
              Object(i['a'])(n, ''.concat(k, '-with-remove'), S),
              Object(i['a'])(n, ''.concat(k, '-active'), c),
              Object(i['a'])(n, ''.concat(k, '-disabled'), f),
              n),
            ),
            style: w,
            onClick: j,
          },
          r['createElement'](
            'div',
            {
              role: 'tab',
              'aria-selected': c,
              id: a && ''.concat(a, '-tab-').concat(u),
              className: ''.concat(k, '-btn'),
              'aria-controls': a && ''.concat(a, '-panel-').concat(u),
              'aria-disabled': f,
              tabIndex: f ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), j(e);
              },
              onKeyDown: function (e) {
                [E['a'].SPACE, E['a'].ENTER].includes(e.which) &&
                  (e.preventDefault(), j(e));
              },
              onFocus: O,
            },
            l,
          ),
          S &&
            r['createElement'](
              'button',
              {
                type: 'button',
                'aria-label': m || 'remove',
                tabIndex: 0,
                className: ''.concat(k, '-remove'),
                onClick: function (e) {
                  e.stopPropagation(), x(e);
                },
              },
              p || h.removeIcon || '\xd7',
            ),
        );
        return v ? v(_) : _;
      }
      var k = r['forwardRef'](w),
        S = { width: 0, height: 0, left: 0, top: 0 };
      function j(e, t, n) {
        return Object(r['useMemo'])(
          function () {
            for (
              var n,
                r = new Map(),
                o =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  S,
                a = o.left + o.width,
                i = 0;
              i < e.length;
              i += 1
            ) {
              var c,
                s = e[i].key,
                u = t.get(s);
              if (!u)
                u =
                  t.get(
                    null === (c = e[i - 1]) || void 0 === c ? void 0 : c.key,
                  ) || S;
              var f = r.get(s) || Object(l['a'])({}, u);
              (f.right = a - f.left - f.width), r.set(s, f);
            }
            return r;
          },
          [
            e
              .map(function (e) {
                return e.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var x = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function _(e, t, n, o, a) {
        var i,
          c,
          s,
          u = a.tabs,
          l = a.tabPosition,
          f = a.rtl;
        ['top', 'bottom'].includes(l)
          ? ((i = 'width'), (c = f ? 'right' : 'left'), (s = Math.abs(t.left)))
          : ((i = 'height'), (c = 'top'), (s = -t.top));
        var d = t[i],
          p = n[i],
          b = o[i],
          v = d;
        return (
          p + b > d && (v = d - b),
          Object(r['useMemo'])(
            function () {
              if (!u.length) return [0, 0];
              for (var t = u.length, n = t, r = 0; r < t; r += 1) {
                var o = e.get(u[r].key) || x;
                if (o[c] + o[i] > s + v) {
                  n = r - 1;
                  break;
                }
              }
              for (var a = 0, l = t - 1; l >= 0; l -= 1) {
                var f = e.get(u[l].key) || x;
                if (f[c] < s) {
                  a = l + 1;
                  break;
                }
              }
              return [a, n];
            },
            [
              e,
              s,
              v,
              l,
              u
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              f,
            ],
          )
        );
      }
      var T = n('Gytx'),
        A = n.n(T),
        C = n('Kwbf'),
        N = void 0;
      function R(e, t) {
        var n = e.prefixCls,
          o = e.invalidate,
          i = e.item,
          c = e.renderItem,
          s = e.responsive,
          f = e.registerSize,
          p = e.itemKey,
          b = e.className,
          v = e.style,
          m = e.children,
          h = e.display,
          y = e.order,
          O = e.component,
          E = void 0 === O ? 'div' : O,
          w = Object(u['a'])(e, [
            'prefixCls',
            'invalidate',
            'item',
            'renderItem',
            'responsive',
            'registerSize',
            'itemKey',
            'className',
            'style',
            'children',
            'display',
            'order',
            'component',
          ]),
          k = s && !h;
        function S(e) {
          f(p, e);
        }
        r['useEffect'](function () {
          return function () {
            S(null);
          };
        }, []);
        var j,
          x = c && i !== N ? c(i) : m;
        o ||
          (j = {
            opacity: k ? 0 : 1,
            height: k ? 0 : N,
            overflowY: k ? 'hidden' : N,
            order: s ? y : N,
            pointerEvents: k ? 'none' : N,
            position: k ? 'absolute' : N,
          });
        var _ = {};
        k && (_['aria-hidden'] = !0);
        var T = r['createElement'](
          E,
          Object(a['a'])(
            {
              className: d()(!o && n, b),
              style: Object(l['a'])(Object(l['a'])({}, j), v),
            },
            _,
            w,
            { ref: t },
          ),
          x,
        );
        return (
          s &&
            (T = r['createElement'](
              g['a'],
              {
                onResize: function (e) {
                  var t = e.offsetWidth;
                  S(t);
                },
              },
              T,
            )),
          T
        );
      }
      var I = r['forwardRef'](R);
      I.displayName = 'Item';
      var M = I;
      function P() {
        var e = Object(r['useState'])({}),
          t = Object(c['a'])(e, 2),
          n = t[1],
          o = Object(r['useRef'])([]),
          a = Object(r['useRef'])(!1),
          i = 0,
          s = 0;
        function u(e) {
          var t = i;
          (i += 1), o.current.length < t + 1 && (o.current[t] = e);
          var r = o.current[t];
          function c(e) {
            (o.current[t] = 'function' === typeof e ? e(o.current[t]) : e),
              h['a'].cancel(s),
              (s = Object(h['a'])(function () {
                a.current || n({});
              }));
          }
          return [r, c];
        }
        return (
          Object(r['useEffect'])(function () {
            return function () {
              a.current = !0;
            };
          }, []),
          u
        );
      }
      var D = function (e, t) {
          var n = r['useContext'](B);
          if (!n) {
            var o = e.component,
              i = void 0 === o ? 'div' : o,
              c = Object(u['a'])(e, ['component']);
            return r['createElement'](i, Object(a['a'])({}, c, { ref: t }));
          }
          var s = n.className,
            l = Object(u['a'])(n, ['className']),
            f = e.className,
            p = Object(u['a'])(e, ['className']);
          return r['createElement'](
            B.Provider,
            { value: null },
            r['createElement'](
              M,
              Object(a['a'])({ ref: t, className: d()(s, f) }, l, p),
            ),
          );
        },
        L = r['forwardRef'](D);
      L.displayName = 'RawItem';
      var F = L,
        B = r['createContext'](null),
        U = 'responsive',
        H = 'invalidate';
      function G(e) {
        return '+ '.concat(e.length, ' ...');
      }
      function z(e, t) {
        var n = e.prefixCls,
          o = void 0 === n ? 'rc-overflow' : n,
          i = e.data,
          s = void 0 === i ? [] : i,
          f = e.renderItem,
          p = e.renderRawItem,
          b = e.itemKey,
          v = e.itemWidth,
          m = void 0 === v ? 10 : v,
          h = e.ssr,
          y = e.style,
          O = e.className,
          E = e.maxCount,
          w = e.renderRest,
          k = e.renderRawRest,
          S = e.suffix,
          j = e.component,
          x = void 0 === j ? 'div' : j,
          _ = e.itemComponent,
          T = e.onVisibleChange,
          A = Object(u['a'])(e, [
            'prefixCls',
            'data',
            'renderItem',
            'renderRawItem',
            'itemKey',
            'itemWidth',
            'ssr',
            'style',
            'className',
            'maxCount',
            'renderRest',
            'renderRawRest',
            'suffix',
            'component',
            'itemComponent',
            'onVisibleChange',
          ]),
          C = P(),
          N = 'full' === h,
          R = C(null),
          I = Object(c['a'])(R, 2),
          D = I[0],
          L = I[1],
          F = D || 0,
          z = C(new Map()),
          K = Object(c['a'])(z, 2),
          $ = K[0],
          V = K[1],
          W = C(0),
          X = Object(c['a'])(W, 2),
          Y = X[0],
          q = X[1],
          Z = C(0),
          Q = Object(c['a'])(Z, 2),
          J = Q[0],
          ee = Q[1],
          te = C(0),
          ne = Object(c['a'])(te, 2),
          re = ne[0],
          oe = ne[1],
          ae = Object(r['useState'])(null),
          ie = Object(c['a'])(ae, 2),
          ce = ie[0],
          se = ie[1],
          ue = Object(r['useState'])(null),
          le = Object(c['a'])(ue, 2),
          fe = le[0],
          de = le[1],
          pe = r['useMemo'](
            function () {
              return null === fe && N ? Number.MAX_SAFE_INTEGER : fe || 0;
            },
            [fe, D],
          ),
          be = Object(r['useState'])(!1),
          ve = Object(c['a'])(be, 2),
          me = ve[0],
          he = ve[1],
          ge = ''.concat(o, '-item'),
          ye = Math.max(Y, J),
          Oe = s.length && E === U,
          Ee = E === H,
          we = Oe || ('number' === typeof E && s.length > E),
          ke = Object(r['useMemo'])(
            function () {
              var e = s;
              return (
                Oe
                  ? (e =
                      null === D && N
                        ? s
                        : s.slice(0, Math.min(s.length, F / m)))
                  : 'number' === typeof E && (e = s.slice(0, E)),
                e
              );
            },
            [s, m, D, E, Oe],
          ),
          Se = Object(r['useMemo'])(
            function () {
              return Oe ? s.slice(pe + 1) : s.slice(ke.length);
            },
            [s, ke, Oe, pe],
          ),
          je = Object(r['useCallback'])(
            function (e, t) {
              var n;
              return 'function' === typeof b
                ? b(e)
                : null !==
                    (n = b && (null === e || void 0 === e ? void 0 : e[b])) &&
                  void 0 !== n
                ? n
                : t;
            },
            [b],
          ),
          xe = Object(r['useCallback'])(
            f ||
              function (e) {
                return e;
              },
            [f],
          );
        function _e(e, t) {
          de(e),
            t || (he(e < s.length - 1), null === T || void 0 === T || T(e));
        }
        function Te(e, t) {
          L(t.clientWidth);
        }
        function Ae(e, t) {
          V(function (n) {
            var r = new Map(n);
            return null === t ? r['delete'](e) : r.set(e, t), r;
          });
        }
        function Ce(e, t) {
          ee(t), q(J);
        }
        function Ne(e, t) {
          oe(t);
        }
        function Re(e) {
          return $.get(je(ke[e], e));
        }
        r['useLayoutEffect'](
          function () {
            if (F && ye && ke) {
              var e = re,
                t = ke.length,
                n = t - 1;
              if (!t) return _e(0), void se(null);
              for (var r = 0; r < t; r += 1) {
                var o = Re(r);
                if (void 0 === o) {
                  _e(r - 1, !0);
                  break;
                }
                if (
                  ((e += o),
                  (0 === n && e <= F) || (r === n - 1 && e + Re(n) <= F))
                ) {
                  _e(n), se(null);
                  break;
                }
                if (e + ye > F) {
                  _e(r - 1), se(e - o - re + J);
                  break;
                }
              }
              S && Re(0) + re > F && se(null);
            }
          },
          [F, $, J, re, je, ke],
        );
        var Ie = me && !!Se.length,
          Me = {};
        null !== ce && Oe && (Me = { position: 'absolute', left: ce, top: 0 });
        var Pe,
          De = { prefixCls: ge, responsive: Oe, component: _, invalidate: Ee },
          Le = p
            ? function (e, t) {
                var n = je(e, t);
                return r['createElement'](
                  B.Provider,
                  {
                    key: n,
                    value: Object(l['a'])(
                      Object(l['a'])({}, De),
                      {},
                      {
                        order: t,
                        item: e,
                        itemKey: n,
                        registerSize: Ae,
                        display: t <= pe,
                      },
                    ),
                  },
                  p(e, t),
                );
              }
            : function (e, t) {
                var n = je(e, t);
                return r['createElement'](
                  M,
                  Object(a['a'])({}, De, {
                    order: t,
                    key: n,
                    item: e,
                    renderItem: xe,
                    itemKey: n,
                    registerSize: Ae,
                    display: t <= pe,
                  }),
                );
              },
          Fe = {
            order: Ie ? pe : Number.MAX_SAFE_INTEGER,
            className: ''.concat(ge, '-rest'),
            registerSize: Ce,
            display: Ie,
          };
        if (k)
          k &&
            (Pe = r['createElement'](
              B.Provider,
              { value: Object(l['a'])(Object(l['a'])({}, De), Fe) },
              k(Se),
            ));
        else {
          var Be = w || G;
          Pe = r['createElement'](
            M,
            Object(a['a'])({}, De, Fe),
            'function' === typeof Be ? Be(Se) : Be,
          );
        }
        var Ue = r['createElement'](
          x,
          Object(a['a'])({ className: d()(!Ee && o, O), style: y, ref: t }, A),
          ke.map(Le),
          we ? Pe : null,
          S &&
            r['createElement'](
              M,
              Object(a['a'])({}, De, {
                order: pe,
                className: ''.concat(ge, '-suffix'),
                registerSize: Ne,
                display: !0,
                style: Me,
              }),
              S,
            ),
        );
        return (
          Oe && (Ue = r['createElement'](g['a'], { onResize: Te }, Ue)), Ue
        );
      }
      var K = r['forwardRef'](z);
      (K.displayName = 'Overflow'),
        (K.Item = F),
        (K.RESPONSIVE = U),
        (K.INVALIDATE = H);
      var $ = K,
        V = $,
        W = n('1OyB'),
        X = n('vuIU'),
        Y = n('Ji7U'),
        q = n('LK+K'),
        Z = n('bT9E');
      function Q(e, t, n) {
        var o = r['useRef']({});
        return (
          ('value' in o.current && !n(o.current.condition, t)) ||
            ((o.current.value = e()), (o.current.condition = t)),
          o.current.value
        );
      }
      var J = ['children', 'locked'],
        ee = r['createContext'](null);
      function te(e, t) {
        var n = Object(l['a'])({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            void 0 !== r && (n[e] = r);
          }),
          n
        );
      }
      function ne(e) {
        var t = e.children,
          n = e.locked,
          o = Object(u['a'])(e, J),
          a = r['useContext'](ee),
          i = Q(
            function () {
              return te(a, o);
            },
            [a, o],
            function (e, t) {
              return !n && (e[0] !== t[0] || !A()(e[1], t[1]));
            },
          );
        return r['createElement'](ee.Provider, { value: i }, t);
      }
      function re(e, t, n, o) {
        var a = r['useContext'](ee),
          i = a.activeKey,
          c = a.onActive,
          s = a.onInactive,
          u = { active: i === e };
        return (
          t ||
            ((u.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), c(e);
            }),
            (u.onMouseLeave = function (t) {
              null === o || void 0 === o || o({ key: e, domEvent: t }), s(e);
            })),
          u
        );
      }
      var oe = ['item'];
      function ae(e) {
        var t = e.item,
          n = Object(u['a'])(e, oe);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                Object(C['a'])(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      function ie(e) {
        var t,
          n = e.icon,
          o = e.props,
          a = e.children;
        return (
          (t =
            'function' === typeof n
              ? r['createElement'](n, Object(l['a'])({}, o))
              : n),
          t || a || null
        );
      }
      function ce(e) {
        var t = r['useContext'](ee),
          n = t.mode,
          o = t.rtl,
          a = t.inlineIndent;
        if ('inline' !== n) return null;
        var i = e;
        return o ? { paddingRight: i * a } : { paddingLeft: i * a };
      }
      var se = [],
        ue = r['createContext'](null);
      function le() {
        return r['useContext'](ue);
      }
      var fe = r['createContext'](se);
      function de(e) {
        var t = r['useContext'](fe);
        return r['useMemo'](
          function () {
            return void 0 !== e ? [].concat(Object(m['a'])(t), [e]) : t;
          },
          [t, e],
        );
      }
      var pe = r['createContext'](null),
        be = r['createContext'](null);
      function ve(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function me(e) {
        var t = r['useContext'](be);
        return ve(t, e);
      }
      var he = ['title', 'attribute', 'elementRef'],
        ge = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        ye = ['active'],
        Oe = (function (e) {
          Object(Y['a'])(n, e);
          var t = Object(q['a'])(n);
          function n() {
            return Object(W['a'])(this, n), t.apply(this, arguments);
          }
          return (
            Object(X['a'])(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    o = e.elementRef,
                    i = Object(u['a'])(e, he),
                    c = Object(Z['a'])(i, ['eventKey']);
                  return (
                    Object(C['a'])(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    r['createElement'](
                      V.Item,
                      Object(a['a'])(
                        {},
                        n,
                        { title: 'string' === typeof t ? t : void 0 },
                        c,
                        { ref: o },
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r['Component']),
        Ee = function (e) {
          var t,
            n = e.style,
            o = e.className,
            c = e.eventKey,
            s = (e.warnKey, e.disabled),
            f = e.itemIcon,
            p = e.children,
            b = e.role,
            v = e.onMouseEnter,
            h = e.onMouseLeave,
            g = e.onClick,
            y = e.onKeyDown,
            O = e.onFocus,
            w = Object(u['a'])(e, ge),
            k = me(c),
            S = r['useContext'](ee),
            j = S.prefixCls,
            x = S.onItemClick,
            _ = S.disabled,
            T = S.overflowDisabled,
            A = S.itemIcon,
            C = S.selectedKeys,
            N = S.onActive,
            R = ''.concat(j, '-item'),
            I = r['useRef'](),
            M = r['useRef'](),
            P = _ || s,
            D = de(c);
          var L = function (e) {
              return {
                key: c,
                keyPath: Object(m['a'])(D).reverse(),
                item: I.current,
                domEvent: e,
              };
            },
            F = f || A,
            B = re(c, P, v, h),
            U = B.active,
            H = Object(u['a'])(B, ye),
            G = C.includes(c),
            z = ce(D.length),
            K = function (e) {
              if (!P) {
                var t = L(e);
                null === g || void 0 === g || g(ae(t)), x(t);
              }
            },
            $ = function (e) {
              if (
                (null === y || void 0 === y || y(e), e.which === E['a'].ENTER)
              ) {
                var t = L(e);
                null === g || void 0 === g || g(ae(t)), x(t);
              }
            },
            V = function (e) {
              N(c), null === O || void 0 === O || O(e);
            },
            W = {};
          return (
            'option' === e.role && (W['aria-selected'] = G),
            r['createElement'](
              Oe,
              Object(a['a'])(
                {
                  ref: I,
                  elementRef: M,
                  role: null === b ? 'none' : b || 'menuitem',
                  tabIndex: s ? null : -1,
                  'data-menu-id': T && k ? null : k,
                },
                w,
                H,
                W,
                {
                  component: 'li',
                  'aria-disabled': s,
                  style: Object(l['a'])(Object(l['a'])({}, z), n),
                  className: d()(
                    R,
                    ((t = {}),
                    Object(i['a'])(t, ''.concat(R, '-active'), U),
                    Object(i['a'])(t, ''.concat(R, '-selected'), G),
                    Object(i['a'])(t, ''.concat(R, '-disabled'), P),
                    t),
                    o,
                  ),
                  onClick: K,
                  onKeyDown: $,
                  onFocus: V,
                },
              ),
              p,
              r['createElement'](ie, {
                props: Object(l['a'])(
                  Object(l['a'])({}, e),
                  {},
                  { isSelected: G },
                ),
                icon: F,
              }),
            )
          );
        };
      function we(e) {
        var t = e.eventKey,
          n = le(),
          o = de(t);
        return (
          r['useEffect'](
            function () {
              if (n)
                return (
                  n.registerPath(t, o),
                  function () {
                    n.unregisterPath(t, o);
                  }
                );
            },
            [o],
          ),
          n ? null : r['createElement'](Ee, e)
        );
      }
      var ke = we;
      function Se(e, t) {
        return Object(p['a'])(e).map(function (e, n) {
          if (r['isValidElement'](e)) {
            var o,
              a,
              i = e.key,
              c =
                null !==
                  (o =
                    null === (a = e.props) || void 0 === a
                      ? void 0
                      : a.eventKey) && void 0 !== o
                  ? o
                  : i,
              s = null === c || void 0 === c;
            s &&
              (c = 'tmp_key-'.concat(
                [].concat(Object(m['a'])(t), [n]).join('-'),
              ));
            var u = { key: c, eventKey: c };
            return r['cloneElement'](e, u);
          }
          return e;
        });
      }
      function je(e) {
        var t = r['useRef'](e);
        t.current = e;
        var n = r['useCallback'](function () {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var xe = ['className', 'children'],
        _e = function (e, t) {
          var n = e.className,
            o = e.children,
            i = Object(u['a'])(e, xe),
            c = r['useContext'](ee),
            s = c.prefixCls,
            l = c.mode,
            f = c.rtl;
          return r['createElement'](
            'ul',
            Object(a['a'])(
              {
                className: d()(
                  s,
                  f && ''.concat(s, '-rtl'),
                  ''.concat(s, '-sub'),
                  ''
                    .concat(s, '-')
                    .concat('inline' === l ? 'inline' : 'vertical'),
                  n,
                ),
              },
              i,
              { 'data-menu-list': !0, ref: t },
            ),
            o,
          );
        },
        Te = r['forwardRef'](_e);
      Te.displayName = 'SubMenuList';
      var Ae = Te,
        Ce = n('JX7q'),
        Ne = n('driF'),
        Re = n.n(Ne);
      function Ie(e, t) {
        return !!e && e.contains(t);
      }
      var Me = n('m+aA'),
        Pe = n('c+Xe');
      function De(e, t, n, r) {
        var o = Re.a.unstable_batchedUpdates
          ? function (e) {
              Re.a.unstable_batchedUpdates(n, e);
            }
          : n;
        return (
          e.addEventListener && e.addEventListener(t, o, r),
          {
            remove: function () {
              e.removeEventListener && e.removeEventListener(t, o);
            },
          }
        );
      }
      var Le = n('MNnm'),
        Fe = Object(r['forwardRef'])(function (e, t) {
          var n = e.didUpdate,
            o = e.getContainer,
            a = e.children,
            i = Object(r['useRef'])();
          Object(r['useImperativeHandle'])(t, function () {
            return {};
          });
          var c = Object(r['useRef'])(!1);
          return (
            !c.current &&
              Object(Le['a'])() &&
              ((i.current = o()), (c.current = !0)),
            Object(r['useEffect'])(function () {
              null === n || void 0 === n || n(e);
            }),
            Object(r['useEffect'])(function () {
              return function () {
                var e, t;
                null === (e = i.current) ||
                  void 0 === e ||
                  null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.removeChild(i.current);
              };
            }, []),
            i.current ? Re.a.createPortal(a, i.current) : null
          );
        }),
        Be = Fe;
      function Ue(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
      }
      function He(e, t, n) {
        var r = e[t] || {};
        return Object(l['a'])(Object(l['a'])({}, r), n);
      }
      function Ge(e, t, n, r) {
        for (
          var o = n.points, a = Object.keys(e), i = 0;
          i < a.length;
          i += 1
        ) {
          var c = a[i];
          if (Ue(e[c].points, o, r))
            return ''.concat(t, '-placement-').concat(c);
        }
        return '';
      }
      var ze = n('8XRh');
      function Ke(e) {
        var t = e.prefixCls,
          n = e.motion,
          r = e.animation,
          o = e.transitionName;
        return (
          n ||
          (r
            ? { motionName: ''.concat(t, '-').concat(r) }
            : o
            ? { motionName: o }
            : null)
        );
      }
      function $e(e) {
        var t = e.prefixCls,
          n = e.visible,
          o = e.zIndex,
          i = e.mask,
          c = e.maskMotion,
          s = e.maskAnimation,
          u = e.maskTransitionName;
        if (!i) return null;
        var f = {};
        return (
          (c || u || s) &&
            (f = Object(l['a'])(
              { motionAppear: !0 },
              Ke({ motion: c, prefixCls: t, transitionName: u, animation: s }),
            )),
          r['createElement'](
            ze['a'],
            Object(a['a'])({}, f, { visible: n, removeOnLeave: !0 }),
            function (e) {
              var n = e.className;
              return r['createElement']('div', {
                style: { zIndex: o },
                className: d()(''.concat(t, '-mask'), n),
              });
            },
          )
        );
      }
      var Ve,
        We = function (e) {
          if (!e) return !1;
          if (e.offsetParent) return !0;
          if (e.getBBox) {
            var t = e.getBBox();
            if (t.width || t.height) return !0;
          }
          if (e.getBoundingClientRect) {
            var n = e.getBoundingClientRect();
            if (n.width || n.height) return !0;
          }
          return !1;
        };
      function Xe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Xe(Object(n), !0).forEach(function (t) {
                Ze(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function qe(e) {
        return (
          (qe =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          qe(e)
        );
      }
      function Ze(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Qe = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
      function Je() {
        if (void 0 !== Ve) return Ve;
        Ve = '';
        var e = document.createElement('p').style,
          t = 'Transform';
        for (var n in Qe) n + t in e && (Ve = n);
        return Ve;
      }
      function et() {
        return Je()
          ? ''.concat(Je(), 'TransitionProperty')
          : 'transitionProperty';
      }
      function tt() {
        return Je() ? ''.concat(Je(), 'Transform') : 'transform';
      }
      function nt(e, t) {
        var n = et();
        n &&
          ((e.style[n] = t),
          'transitionProperty' !== n && (e.style.transitionProperty = t));
      }
      function rt(e, t) {
        var n = tt();
        n && ((e.style[n] = t), 'transform' !== n && (e.style.transform = t));
      }
      function ot(e) {
        return e.style.transitionProperty || e.style[et()];
      }
      function at(e) {
        var t = window.getComputedStyle(e, null),
          n = t.getPropertyValue('transform') || t.getPropertyValue(tt());
        if (n && 'none' !== n) {
          var r = n.replace(/[^0-9\-.,]/g, '').split(',');
          return {
            x: parseFloat(r[12] || r[4], 0),
            y: parseFloat(r[13] || r[5], 0),
          };
        }
        return { x: 0, y: 0 };
      }
      var it = /matrix\((.*)\)/,
        ct = /matrix3d\((.*)\)/;
      function st(e, t) {
        var n = window.getComputedStyle(e, null),
          r = n.getPropertyValue('transform') || n.getPropertyValue(tt());
        if (r && 'none' !== r) {
          var o,
            a = r.match(it);
          if (a)
            (a = a[1]),
              (o = a.split(',').map(function (e) {
                return parseFloat(e, 10);
              })),
              (o[4] = t.x),
              (o[5] = t.y),
              rt(e, 'matrix('.concat(o.join(','), ')'));
          else {
            var i = r.match(ct)[1];
            (o = i.split(',').map(function (e) {
              return parseFloat(e, 10);
            })),
              (o[12] = t.x),
              (o[13] = t.y),
              rt(e, 'matrix3d('.concat(o.join(','), ')'));
          }
        } else
          rt(
            e,
            'translateX('
              .concat(t.x, 'px) translateY(')
              .concat(t.y, 'px) translateZ(0)'),
          );
      }
      var ut,
        lt = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
      function ft(e) {
        var t = e.style.display;
        (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
      }
      function dt(e, t, n) {
        var r = n;
        if ('object' !== qe(t))
          return 'undefined' !== typeof r
            ? ('number' === typeof r && (r = ''.concat(r, 'px')),
              void (e.style[t] = r))
            : ut(e, t);
        for (var o in t) t.hasOwnProperty(o) && dt(e, o, t[o]);
      }
      function pt(e) {
        var t,
          n,
          r,
          o = e.ownerDocument,
          a = o.body,
          i = o && o.documentElement;
        return (
          (t = e.getBoundingClientRect()),
          (n = t.left),
          (r = t.top),
          (n -= i.clientLeft || a.clientLeft || 0),
          (r -= i.clientTop || a.clientTop || 0),
          { left: n, top: r }
        );
      }
      function bt(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          r = 'scroll'.concat(t ? 'Top' : 'Left');
        if ('number' !== typeof n) {
          var o = e.document;
          (n = o.documentElement[r]), 'number' !== typeof n && (n = o.body[r]);
        }
        return n;
      }
      function vt(e) {
        return bt(e);
      }
      function mt(e) {
        return bt(e, !0);
      }
      function ht(e) {
        var t = pt(e),
          n = e.ownerDocument,
          r = n.defaultView || n.parentWindow;
        return (t.left += vt(r)), (t.top += mt(r)), t;
      }
      function gt(e) {
        return null !== e && void 0 !== e && e == e.window;
      }
      function yt(e) {
        return gt(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
      }
      function Ot(e, t, n) {
        var r = n,
          o = '',
          a = yt(e);
        return (
          (r = r || a.defaultView.getComputedStyle(e, null)),
          r && (o = r.getPropertyValue(t) || r[t]),
          o
        );
      }
      var Et = new RegExp('^('.concat(lt, ')(?!px)[a-z%]+$'), 'i'),
        wt = /^(top|right|bottom|left)$/,
        kt = 'currentStyle',
        St = 'runtimeStyle',
        jt = 'left',
        xt = 'px';
      function _t(e, t) {
        var n = e[kt] && e[kt][t];
        if (Et.test(n) && !wt.test(t)) {
          var r = e.style,
            o = r[jt],
            a = e[St][jt];
          (e[St][jt] = e[kt][jt]),
            (r[jt] = 'fontSize' === t ? '1em' : n || 0),
            (n = r.pixelLeft + xt),
            (r[jt] = o),
            (e[St][jt] = a);
        }
        return '' === n ? 'auto' : n;
      }
      function Tt(e, t) {
        return 'left' === e
          ? t.useCssRight
            ? 'right'
            : e
          : t.useCssBottom
          ? 'bottom'
          : e;
      }
      function At(e) {
        return 'left' === e
          ? 'right'
          : 'right' === e
          ? 'left'
          : 'top' === e
          ? 'bottom'
          : 'bottom' === e
          ? 'top'
          : void 0;
      }
      function Ct(e, t, n) {
        'static' === dt(e, 'position') && (e.style.position = 'relative');
        var r = -999,
          o = -999,
          a = Tt('left', n),
          i = Tt('top', n),
          c = At(a),
          s = At(i);
        'left' !== a && (r = 999), 'top' !== i && (o = 999);
        var u = '',
          l = ht(e);
        ('left' in t || 'top' in t) && ((u = ot(e) || ''), nt(e, 'none')),
          'left' in t && ((e.style[c] = ''), (e.style[a] = ''.concat(r, 'px'))),
          'top' in t && ((e.style[s] = ''), (e.style[i] = ''.concat(o, 'px'))),
          ft(e);
        var f = ht(e),
          d = {};
        for (var p in t)
          if (t.hasOwnProperty(p)) {
            var b = Tt(p, n),
              v = 'left' === p ? r : o,
              m = l[p] - f[p];
            d[b] = b === p ? v + m : v - m;
          }
        dt(e, d), ft(e), ('left' in t || 'top' in t) && nt(e, u);
        var h = {};
        for (var g in t)
          if (t.hasOwnProperty(g)) {
            var y = Tt(g, n),
              O = t[g] - l[g];
            h[y] = g === y ? d[y] + O : d[y] - O;
          }
        dt(e, h);
      }
      function Nt(e, t) {
        var n = ht(e),
          r = at(e),
          o = { x: r.x, y: r.y };
        'left' in t && (o.x = r.x + t.left - n.left),
          'top' in t && (o.y = r.y + t.top - n.top),
          st(e, o);
      }
      function Rt(e, t, n) {
        if (n.ignoreShake) {
          var r = ht(e),
            o = r.left.toFixed(0),
            a = r.top.toFixed(0),
            i = t.left.toFixed(0),
            c = t.top.toFixed(0);
          if (o === i && a === c) return;
        }
        n.useCssRight || n.useCssBottom
          ? Ct(e, t, n)
          : n.useCssTransform && tt() in document.body.style
          ? Nt(e, t)
          : Ct(e, t, n);
      }
      function It(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n]);
      }
      function Mt(e) {
        return 'border-box' === ut(e, 'boxSizing');
      }
      'undefined' !== typeof window && (ut = window.getComputedStyle ? Ot : _t);
      var Pt = ['margin', 'border', 'padding'],
        Dt = -1,
        Lt = 2,
        Ft = 1,
        Bt = 0;
      function Ut(e, t, n) {
        var r,
          o = {},
          a = e.style;
        for (r in t) t.hasOwnProperty(r) && ((o[r] = a[r]), (a[r] = t[r]));
        for (r in (n.call(e), t)) t.hasOwnProperty(r) && (a[r] = o[r]);
      }
      function Ht(e, t, n) {
        var r,
          o,
          a,
          i = 0;
        for (o = 0; o < t.length; o++)
          if (((r = t[o]), r))
            for (a = 0; a < n.length; a++) {
              var c = void 0;
              (c =
                'border' === r ? ''.concat(r).concat(n[a], 'Width') : r + n[a]),
                (i += parseFloat(ut(e, c)) || 0);
            }
        return i;
      }
      var Gt = {
        getParent: function (e) {
          var t = e;
          do {
            t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
          } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
          return t;
        },
      };
      function zt(e, t, n) {
        var r = n;
        if (gt(e))
          return 'width' === t ? Gt.viewportWidth(e) : Gt.viewportHeight(e);
        if (9 === e.nodeType)
          return 'width' === t ? Gt.docWidth(e) : Gt.docHeight(e);
        var o = 'width' === t ? ['Left', 'Right'] : ['Top', 'Bottom'],
          a =
            'width' === t
              ? e.getBoundingClientRect().width
              : e.getBoundingClientRect().height,
          i = Mt(e),
          c = 0;
        (null === a || void 0 === a || a <= 0) &&
          ((a = void 0),
          (c = ut(e, t)),
          (null === c || void 0 === c || Number(c) < 0) &&
            (c = e.style[t] || 0),
          (c = parseFloat(c) || 0)),
          void 0 === r && (r = i ? Ft : Dt);
        var s = void 0 !== a || i,
          u = a || c;
        return r === Dt
          ? s
            ? u - Ht(e, ['border', 'padding'], o)
            : c
          : s
          ? r === Ft
            ? u
            : u + (r === Lt ? -Ht(e, ['border'], o) : Ht(e, ['margin'], o))
          : c + Ht(e, Pt.slice(r), o);
      }
      It(['Width', 'Height'], function (e) {
        (Gt['doc'.concat(e)] = function (t) {
          var n = t.document;
          return Math.max(
            n.documentElement['scroll'.concat(e)],
            n.body['scroll'.concat(e)],
            Gt['viewport'.concat(e)](n),
          );
        }),
          (Gt['viewport'.concat(e)] = function (t) {
            var n = 'client'.concat(e),
              r = t.document,
              o = r.body,
              a = r.documentElement,
              i = a[n];
            return ('CSS1Compat' === r.compatMode && i) || (o && o[n]) || i;
          });
      });
      var Kt = { position: 'absolute', visibility: 'hidden', display: 'block' };
      function $t() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r,
          o = t[0];
        return (
          0 !== o.offsetWidth
            ? (r = zt.apply(void 0, t))
            : Ut(o, Kt, function () {
                r = zt.apply(void 0, t);
              }),
          r
        );
      }
      function Vt(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      It(['width', 'height'], function (e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        Gt['outer'.concat(t)] = function (t, n) {
          return t && $t(t, e, n ? Bt : Ft);
        };
        var n = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom'];
        Gt[e] = function (t, r) {
          var o = r;
          if (void 0 === o) return t && $t(t, e, Dt);
          if (t) {
            var a = Mt(t);
            return a && (o += Ht(t, ['padding', 'border'], n)), dt(t, e, o);
          }
        };
      });
      var Wt = {
        getWindow: function (e) {
          if (e && e.document && e.setTimeout) return e;
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow;
        },
        getDocument: yt,
        offset: function (e, t, n) {
          if ('undefined' === typeof t) return ht(e);
          Rt(e, t, n || {});
        },
        isWindow: gt,
        each: It,
        css: dt,
        clone: function (e) {
          var t,
            n = {};
          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
          var r = e.overflow;
          if (r)
            for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
          return n;
        },
        mix: Vt,
        getWindowScrollLeft: function (e) {
          return vt(e);
        },
        getWindowScrollTop: function (e) {
          return mt(e);
        },
        merge: function () {
          for (var e = {}, t = 0; t < arguments.length; t++)
            Wt.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
          return e;
        },
        viewportWidth: 0,
        viewportHeight: 0,
      };
      Vt(Wt, Gt);
      var Xt = Wt.getParent;
      function Yt(e) {
        if (Wt.isWindow(e) || 9 === e.nodeType) return null;
        var t,
          n = Wt.getDocument(e),
          r = n.body,
          o = Wt.css(e, 'position'),
          a = 'fixed' === o || 'absolute' === o;
        if (!a) return 'html' === e.nodeName.toLowerCase() ? null : Xt(e);
        for (t = Xt(e); t && t !== r && 9 !== t.nodeType; t = Xt(t))
          if (((o = Wt.css(t, 'position')), 'static' !== o)) return t;
        return null;
      }
      var qt = Wt.getParent;
      function Zt(e) {
        if (Wt.isWindow(e) || 9 === e.nodeType) return !1;
        var t = Wt.getDocument(e),
          n = t.body,
          r = null;
        for (r = qt(e); r && r !== n && r !== t; r = qt(r)) {
          var o = Wt.css(r, 'position');
          if ('fixed' === o) return !0;
        }
        return !1;
      }
      function Qt(e, t) {
        var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
          r = Yt(e),
          o = Wt.getDocument(e),
          a = o.defaultView || o.parentWindow,
          i = o.body,
          c = o.documentElement;
        while (r) {
          if (
            (-1 !== navigator.userAgent.indexOf('MSIE') &&
              0 === r.clientWidth) ||
            r === i ||
            r === c ||
            'visible' === Wt.css(r, 'overflow')
          ) {
            if (r === i || r === c) break;
          } else {
            var s = Wt.offset(r);
            (s.left += r.clientLeft),
              (s.top += r.clientTop),
              (n.top = Math.max(n.top, s.top)),
              (n.right = Math.min(n.right, s.left + r.clientWidth)),
              (n.bottom = Math.min(n.bottom, s.top + r.clientHeight)),
              (n.left = Math.max(n.left, s.left));
          }
          r = Yt(r);
        }
        var u = null;
        if (!Wt.isWindow(e) && 9 !== e.nodeType) {
          u = e.style.position;
          var l = Wt.css(e, 'position');
          'absolute' === l && (e.style.position = 'fixed');
        }
        var f = Wt.getWindowScrollLeft(a),
          d = Wt.getWindowScrollTop(a),
          p = Wt.viewportWidth(a),
          b = Wt.viewportHeight(a),
          v = c.scrollWidth,
          m = c.scrollHeight,
          h = window.getComputedStyle(i);
        if (
          ('hidden' === h.overflowX && (v = a.innerWidth),
          'hidden' === h.overflowY && (m = a.innerHeight),
          e.style && (e.style.position = u),
          t || Zt(e))
        )
          (n.left = Math.max(n.left, f)),
            (n.top = Math.max(n.top, d)),
            (n.right = Math.min(n.right, f + p)),
            (n.bottom = Math.min(n.bottom, d + b));
        else {
          var g = Math.max(v, f + p);
          n.right = Math.min(n.right, g);
          var y = Math.max(m, d + b);
          n.bottom = Math.min(n.bottom, y);
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null;
      }
      function Jt(e, t, n, r) {
        var o = Wt.clone(e),
          a = { width: t.width, height: t.height };
        return (
          r.adjustX && o.left < n.left && (o.left = n.left),
          r.resizeWidth &&
            o.left >= n.left &&
            o.left + a.width > n.right &&
            (a.width -= o.left + a.width - n.right),
          r.adjustX &&
            o.left + a.width > n.right &&
            (o.left = Math.max(n.right - a.width, n.left)),
          r.adjustY && o.top < n.top && (o.top = n.top),
          r.resizeHeight &&
            o.top >= n.top &&
            o.top + a.height > n.bottom &&
            (a.height -= o.top + a.height - n.bottom),
          r.adjustY &&
            o.top + a.height > n.bottom &&
            (o.top = Math.max(n.bottom - a.height, n.top)),
          Wt.mix(o, a)
        );
      }
      function en(e) {
        var t, n, r;
        if (Wt.isWindow(e) || 9 === e.nodeType) {
          var o = Wt.getWindow(e);
          (t = {
            left: Wt.getWindowScrollLeft(o),
            top: Wt.getWindowScrollTop(o),
          }),
            (n = Wt.viewportWidth(o)),
            (r = Wt.viewportHeight(o));
        } else
          (t = Wt.offset(e)), (n = Wt.outerWidth(e)), (r = Wt.outerHeight(e));
        return (t.width = n), (t.height = r), t;
      }
      function tn(e, t) {
        var n = t.charAt(0),
          r = t.charAt(1),
          o = e.width,
          a = e.height,
          i = e.left,
          c = e.top;
        return (
          'c' === n ? (c += a / 2) : 'b' === n && (c += a),
          'c' === r ? (i += o / 2) : 'r' === r && (i += o),
          { left: i, top: c }
        );
      }
      function nn(e, t, n, r, o) {
        var a = tn(t, n[1]),
          i = tn(e, n[0]),
          c = [i.left - a.left, i.top - a.top];
        return {
          left: Math.round(e.left - c[0] + r[0] - o[0]),
          top: Math.round(e.top - c[1] + r[1] - o[1]),
        };
      }
      function rn(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right;
      }
      function on(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom;
      }
      function an(e, t, n) {
        return e.left > n.right || e.left + t.width < n.left;
      }
      function cn(e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top;
      }
      function sn(e, t, n) {
        var r = [];
        return (
          Wt.each(e, function (e) {
            r.push(
              e.replace(t, function (e) {
                return n[e];
              }),
            );
          }),
          r
        );
      }
      function un(e, t) {
        return (e[t] = -e[t]), e;
      }
      function ln(e, t) {
        var n;
        return (
          (n = /%$/.test(e)
            ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
            : parseInt(e, 10)),
          n || 0
        );
      }
      function fn(e, t) {
        (e[0] = ln(e[0], t.width)), (e[1] = ln(e[1], t.height));
      }
      function dn(e, t, n, r) {
        var o = n.points,
          a = n.offset || [0, 0],
          i = n.targetOffset || [0, 0],
          c = n.overflow,
          s = n.source || e;
        (a = [].concat(a)), (i = [].concat(i)), (c = c || {});
        var u = {},
          l = 0,
          f = !(!c || !c.alwaysByViewport),
          d = Qt(s, f),
          p = en(s);
        fn(a, p), fn(i, t);
        var b = nn(p, t, o, a, i),
          v = Wt.merge(p, b);
        if (d && (c.adjustX || c.adjustY) && r) {
          if (c.adjustX && rn(b, p, d)) {
            var m = sn(o, /[lr]/gi, { l: 'r', r: 'l' }),
              h = un(a, 0),
              g = un(i, 0),
              y = nn(p, t, m, h, g);
            an(y, p, d) || ((l = 1), (o = m), (a = h), (i = g));
          }
          if (c.adjustY && on(b, p, d)) {
            var O = sn(o, /[tb]/gi, { t: 'b', b: 't' }),
              E = un(a, 1),
              w = un(i, 1),
              k = nn(p, t, O, E, w);
            cn(k, p, d) || ((l = 1), (o = O), (a = E), (i = w));
          }
          l && ((b = nn(p, t, o, a, i)), Wt.mix(v, b));
          var S = rn(b, p, d),
            j = on(b, p, d);
          if (S || j) {
            var x = o;
            S && (x = sn(o, /[lr]/gi, { l: 'r', r: 'l' })),
              j && (x = sn(o, /[tb]/gi, { t: 'b', b: 't' })),
              (o = x),
              (a = n.offset || [0, 0]),
              (i = n.targetOffset || [0, 0]);
          }
          (u.adjustX = c.adjustX && S),
            (u.adjustY = c.adjustY && j),
            (u.adjustX || u.adjustY) && (v = Jt(b, p, d, u));
        }
        return (
          v.width !== p.width &&
            Wt.css(s, 'width', Wt.width(s) + v.width - p.width),
          v.height !== p.height &&
            Wt.css(s, 'height', Wt.height(s) + v.height - p.height),
          Wt.offset(
            s,
            { left: v.left, top: v.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            },
          ),
          { points: o, offset: a, targetOffset: i, overflow: u }
        );
      }
      function pn(e, t) {
        var n = Qt(e, t),
          r = en(e);
        return (
          !n ||
          r.left + r.width <= n.left ||
          r.top + r.height <= n.top ||
          r.left >= n.right ||
          r.top >= n.bottom
        );
      }
      function bn(e, t, n) {
        var r = n.target || t,
          o = en(r),
          a = !pn(r, n.overflow && n.overflow.alwaysByViewport);
        return dn(e, o, n, a);
      }
      function vn(e, t, n) {
        var r,
          o,
          a = Wt.getDocument(e),
          i = a.defaultView || a.parentWindow,
          c = Wt.getWindowScrollLeft(i),
          s = Wt.getWindowScrollTop(i),
          u = Wt.viewportWidth(i),
          l = Wt.viewportHeight(i);
        (r = 'pageX' in t ? t.pageX : c + t.clientX),
          (o = 'pageY' in t ? t.pageY : s + t.clientY);
        var f = { left: r, top: o, width: 0, height: 0 },
          d = r >= 0 && r <= c + u && o >= 0 && o <= s + l,
          p = [n.points[0], 'cc'];
        return dn(e, f, Ye(Ye({}, n), {}, { points: p }), d);
      }
      (bn.__getOffsetParent = Yt), (bn.__getVisibleRectForElement = Qt);
      var mn = n('Y+p1'),
        hn = n.n(mn),
        gn = n('bdgK');
      function yn(e, t) {
        return (
          e === t ||
          (!(!e || !t) &&
            ('pageX' in t && 'pageY' in t
              ? e.pageX === t.pageX && e.pageY === t.pageY
              : 'clientX' in t &&
                'clientY' in t &&
                e.clientX === t.clientX &&
                e.clientY === t.clientY))
        );
      }
      function On(e, t) {
        e !== document.activeElement &&
          Ie(t, e) &&
          'function' === typeof e.focus &&
          e.focus();
      }
      function En(e, t) {
        var n = null,
          r = null;
        function o(e) {
          var o = Object(c['a'])(e, 1),
            a = o[0].target;
          if (document.documentElement.contains(a)) {
            var i = a.getBoundingClientRect(),
              s = i.width,
              u = i.height,
              l = Math.floor(s),
              f = Math.floor(u);
            (n === l && r === f) ||
              Promise.resolve().then(function () {
                t({ width: l, height: f });
              }),
              (n = l),
              (r = f);
          }
        }
        var a = new gn['a'](o);
        return (
          e && a.observe(e),
          function () {
            a.disconnect();
          }
        );
      }
      var wn = function (e, t) {
        var n = o.a.useRef(!1),
          r = o.a.useRef(null);
        function a() {
          window.clearTimeout(r.current);
        }
        function i(o) {
          if (n.current && !0 !== o)
            a(),
              (r.current = window.setTimeout(function () {
                (n.current = !1), i();
              }, t));
          else {
            if (!1 === e()) return;
            (n.current = !0),
              a(),
              (r.current = window.setTimeout(function () {
                n.current = !1;
              }, t));
          }
        }
        return [
          i,
          function () {
            (n.current = !1), a();
          },
        ];
      };
      function kn(e) {
        return 'function' !== typeof e ? null : e();
      }
      function Sn(e) {
        return 'object' === Object(s['a'])(e) && e ? e : null;
      }
      var jn = function (e, t) {
          var n = e.children,
            r = e.disabled,
            a = e.target,
            i = e.align,
            s = e.onAlign,
            u = e.monitorWindowResize,
            l = e.monitorBufferTime,
            f = void 0 === l ? 0 : l,
            d = o.a.useRef({}),
            p = o.a.useRef(),
            b = o.a.Children.only(n),
            v = o.a.useRef({});
          (v.current.disabled = r),
            (v.current.target = a),
            (v.current.align = i),
            (v.current.onAlign = s);
          var m = wn(function () {
              var e = v.current,
                t = e.disabled,
                n = e.target,
                r = e.align,
                o = e.onAlign;
              if (!t && n) {
                var a,
                  i = p.current,
                  c = kn(n),
                  s = Sn(n);
                (d.current.element = c),
                  (d.current.point = s),
                  (d.current.align = r);
                var u = document,
                  l = u.activeElement;
                return (
                  c && We(c) ? (a = bn(i, c, r)) : s && (a = vn(i, s, r)),
                  On(l, i),
                  o && a && o(i, a),
                  !0
                );
              }
              return !1;
            }, f),
            h = Object(c['a'])(m, 2),
            g = h[0],
            y = h[1],
            O = o.a.useRef({ cancel: function () {} }),
            E = o.a.useRef({ cancel: function () {} });
          o.a.useEffect(function () {
            var e = kn(a),
              t = Sn(a);
            p.current !== E.current.element &&
              (E.current.cancel(),
              (E.current.element = p.current),
              (E.current.cancel = En(p.current, g))),
              (d.current.element === e &&
                yn(d.current.point, t) &&
                hn()(d.current.align, i)) ||
                (g(),
                O.current.element !== e &&
                  (O.current.cancel(),
                  (O.current.element = e),
                  (O.current.cancel = En(e, g))));
          }),
            o.a.useEffect(
              function () {
                r ? y() : g();
              },
              [r],
            );
          var w = o.a.useRef(null);
          return (
            o.a.useEffect(
              function () {
                u
                  ? w.current || (w.current = De(window, 'resize', g))
                  : w.current && (w.current.remove(), (w.current = null));
              },
              [u],
            ),
            o.a.useEffect(function () {
              return function () {
                O.current.cancel(),
                  E.current.cancel(),
                  w.current && w.current.remove(),
                  y();
              };
            }, []),
            o.a.useImperativeHandle(t, function () {
              return {
                forceAlign: function () {
                  return g(!0);
                },
              };
            }),
            o.a.isValidElement(b) &&
              (b = o.a.cloneElement(b, { ref: Object(Pe['a'])(b.ref, p) })),
            b
          );
        },
        xn = o.a.forwardRef(jn);
      xn.displayName = 'Align';
      var _n = xn,
        Tn = _n,
        An = n('o0o1'),
        Cn = n.n(An);
      function Nn(e, t, n, r, o, a, i) {
        try {
          var c = e[a](i),
            s = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function Rn(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              Nn(a, r, o, i, c, 'next', e);
            }
            function c(e) {
              Nn(a, r, o, i, c, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      var In = ['measure', 'align', null, 'motion'],
        Mn = function (e, t) {
          var n = Object(r['useState'])(null),
            o = Object(c['a'])(n, 2),
            a = o[0],
            i = o[1],
            s = Object(r['useRef'])(),
            u = Object(r['useRef'])(!1);
          function l(e) {
            u.current || i(e);
          }
          function f() {
            h['a'].cancel(s.current);
          }
          function d(e) {
            f(),
              (s.current = Object(h['a'])(function () {
                l(function (e) {
                  switch (a) {
                    case 'align':
                      return 'motion';
                    case 'motion':
                      return 'stable';
                    default:
                  }
                  return e;
                }),
                  null === e || void 0 === e || e();
              }));
          }
          return (
            Object(r['useEffect'])(
              function () {
                l('measure');
              },
              [e],
            ),
            Object(r['useEffect'])(
              function () {
                switch (a) {
                  case 'measure':
                    t();
                    break;
                  default:
                }
                a &&
                  (s.current = Object(h['a'])(
                    Rn(
                      Cn.a.mark(function e() {
                        var t, n;
                        return Cn.a.wrap(function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = In.indexOf(a)),
                                  (n = In[t + 1]),
                                  n && -1 !== t && l(n);
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                  ));
              },
              [a],
            ),
            Object(r['useEffect'])(function () {
              return function () {
                (u.current = !0), f();
              };
            }, []),
            [a, d]
          );
        },
        Pn = function (e) {
          var t = r['useState']({ width: 0, height: 0 }),
            n = Object(c['a'])(t, 2),
            o = n[0],
            a = n[1];
          function i(e) {
            a({ width: e.offsetWidth, height: e.offsetHeight });
          }
          var s = r['useMemo'](
            function () {
              var t = {};
              if (e) {
                var n = o.width,
                  r = o.height;
                -1 !== e.indexOf('height') && r
                  ? (t.height = r)
                  : -1 !== e.indexOf('minHeight') && r && (t.minHeight = r),
                  -1 !== e.indexOf('width') && n
                    ? (t.width = n)
                    : -1 !== e.indexOf('minWidth') && n && (t.minWidth = n);
              }
              return t;
            },
            [e, o],
          );
          return [s, i];
        },
        Dn = r['forwardRef'](function (e, t) {
          var n = e.visible,
            o = e.prefixCls,
            i = e.className,
            s = e.style,
            u = e.children,
            f = e.zIndex,
            p = e.stretch,
            b = e.destroyPopupOnHide,
            v = e.forceRender,
            m = e.align,
            h = e.point,
            g = e.getRootDomNode,
            y = e.getClassNameFromAlign,
            O = e.onAlign,
            E = e.onMouseEnter,
            w = e.onMouseLeave,
            k = e.onMouseDown,
            S = e.onTouchStart,
            j = Object(r['useRef'])(),
            x = Object(r['useRef'])(),
            _ = Object(r['useState'])(),
            T = Object(c['a'])(_, 2),
            A = T[0],
            C = T[1],
            N = Pn(p),
            R = Object(c['a'])(N, 2),
            I = R[0],
            M = R[1];
          function P() {
            p && M(g());
          }
          var D = Mn(n, P),
            L = Object(c['a'])(D, 2),
            F = L[0],
            B = L[1],
            U = Object(r['useRef'])();
          function H() {
            return h || g;
          }
          function G() {
            var e;
            null === (e = j.current) || void 0 === e || e.forceAlign();
          }
          function z(e, t) {
            var n = y(t);
            A !== n && C(n),
              'align' === F &&
                (A !== n
                  ? Promise.resolve().then(function () {
                      G();
                    })
                  : B(function () {
                      var e;
                      null === (e = U.current) || void 0 === e || e.call(U);
                    }),
                null === O || void 0 === O || O(e, t));
          }
          var K = Object(l['a'])({}, Ke(e));
          function $() {
            return new Promise(function (e) {
              U.current = e;
            });
          }
          ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (e) {
            var t = K[e];
            K[e] = function (e, n) {
              return B(), null === t || void 0 === t ? void 0 : t(e, n);
            };
          }),
            r['useEffect'](
              function () {
                K.motionName || 'motion' !== F || B();
              },
              [K.motionName, F],
            ),
            r['useImperativeHandle'](t, function () {
              return {
                forceAlign: G,
                getElement: function () {
                  return x.current;
                },
              };
            });
          var V = Object(l['a'])(
              Object(l['a'])({}, I),
              {},
              {
                zIndex: f,
                opacity: 'motion' !== F && 'stable' !== F && n ? 0 : void 0,
                pointerEvents: 'stable' === F ? void 0 : 'none',
              },
              s,
            ),
            W = !0;
          !(null === m || void 0 === m ? void 0 : m.points) ||
            ('align' !== F && 'stable' !== F) ||
            (W = !1);
          var X = u;
          return (
            r['Children'].count(u) > 1 &&
              (X = r['createElement'](
                'div',
                { className: ''.concat(o, '-content') },
                u,
              )),
            r['createElement'](
              ze['a'],
              Object(a['a'])(
                {
                  visible: n,
                  ref: x,
                  leavedClassName: ''.concat(o, '-hidden'),
                },
                K,
                {
                  onAppearPrepare: $,
                  onEnterPrepare: $,
                  removeOnLeave: b,
                  forceRender: v,
                },
              ),
              function (e, t) {
                var n = e.className,
                  a = e.style,
                  c = d()(o, i, A, n);
                return r['createElement'](
                  Tn,
                  {
                    target: H(),
                    key: 'popup',
                    ref: j,
                    monitorWindowResize: !0,
                    disabled: W,
                    align: m,
                    onAlign: z,
                  },
                  r['createElement'](
                    'div',
                    {
                      ref: t,
                      className: c,
                      onMouseEnter: E,
                      onMouseLeave: w,
                      onMouseDownCapture: k,
                      onTouchStartCapture: S,
                      style: Object(l['a'])(Object(l['a'])({}, a), V),
                    },
                    X,
                  ),
                );
              },
            )
          );
        });
      Dn.displayName = 'PopupInner';
      var Ln = Dn,
        Fn = r['forwardRef'](function (e, t) {
          var n = e.prefixCls,
            o = e.visible,
            i = e.zIndex,
            c = e.children,
            s = e.mobile;
          s = void 0 === s ? {} : s;
          var u = s.popupClassName,
            f = s.popupStyle,
            p = s.popupMotion,
            b = void 0 === p ? {} : p,
            v = s.popupRender,
            m = r['useRef']();
          r['useImperativeHandle'](t, function () {
            return {
              forceAlign: function () {},
              getElement: function () {
                return m.current;
              },
            };
          });
          var h = Object(l['a'])({ zIndex: i }, f),
            g = c;
          return (
            r['Children'].count(c) > 1 &&
              (g = r['createElement'](
                'div',
                { className: ''.concat(n, '-content') },
                c,
              )),
            v && (g = v(g)),
            r['createElement'](
              ze['a'],
              Object(a['a'])({ visible: o, ref: m, removeOnLeave: !0 }, b),
              function (e, t) {
                var o = e.className,
                  a = e.style,
                  i = d()(n, u, o);
                return r['createElement'](
                  'div',
                  {
                    ref: t,
                    className: i,
                    style: Object(l['a'])(Object(l['a'])({}, a), h),
                  },
                  g,
                );
              },
            )
          );
        });
      Fn.displayName = 'MobilePopupInner';
      var Bn = Fn,
        Un = ['visible', 'mobile'],
        Hn = r['forwardRef'](function (e, t) {
          var n = e.visible,
            o = e.mobile,
            i = Object(u['a'])(e, Un),
            s = Object(r['useState'])(n),
            f = Object(c['a'])(s, 2),
            d = f[0],
            p = f[1],
            v = Object(r['useState'])(!1),
            m = Object(c['a'])(v, 2),
            h = m[0],
            g = m[1],
            y = Object(l['a'])(Object(l['a'])({}, i), {}, { visible: d });
          Object(r['useEffect'])(
            function () {
              p(n), n && o && g(b());
            },
            [n, o],
          );
          var O = h
            ? r['createElement'](
                Bn,
                Object(a['a'])({}, y, { mobile: o, ref: t }),
              )
            : r['createElement'](Ln, Object(a['a'])({}, y, { ref: t }));
          return r['createElement']('div', null, r['createElement']($e, y), O);
        });
      Hn.displayName = 'Popup';
      var Gn = Hn,
        zn = r['createContext'](null),
        Kn = zn;
      function $n() {}
      function Vn() {
        return '';
      }
      function Wn(e) {
        return e ? e.ownerDocument : window.document;
      }
      var Xn = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ];
      function Yn(e) {
        var t = (function (t) {
          Object(Y['a'])(o, t);
          var n = Object(q['a'])(o);
          function o(e) {
            var t, i;
            return (
              Object(W['a'])(this, o),
              (t = n.call(this, e)),
              (t.popupRef = r['createRef']()),
              (t.triggerRef = r['createRef']()),
              (t.attachId = void 0),
              (t.clickOutsideHandler = void 0),
              (t.touchOutsideHandler = void 0),
              (t.contextMenuOutsideHandler1 = void 0),
              (t.contextMenuOutsideHandler2 = void 0),
              (t.mouseDownTimeout = void 0),
              (t.focusTime = void 0),
              (t.preClickTime = void 0),
              (t.preTouchTime = void 0),
              (t.delayTimer = void 0),
              (t.hasPopupMouseDown = void 0),
              (t.onMouseEnter = function (e) {
                var n = t.props.mouseEnterDelay;
                t.fireEvents('onMouseEnter', e),
                  t.delaySetPopupVisible(!0, n, n ? null : e);
              }),
              (t.onMouseMove = function (e) {
                t.fireEvents('onMouseMove', e), t.setPoint(e);
              }),
              (t.onMouseLeave = function (e) {
                t.fireEvents('onMouseLeave', e),
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (t.onPopupMouseEnter = function () {
                t.clearDelayTimer();
              }),
              (t.onPopupMouseLeave = function (e) {
                var n;
                (e.relatedTarget &&
                  !e.relatedTarget.setTimeout &&
                  Ie(
                    null === (n = t.popupRef.current) || void 0 === n
                      ? void 0
                      : n.getElement(),
                    e.relatedTarget,
                  )) ||
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (t.onFocus = function (e) {
                t.fireEvents('onFocus', e),
                  t.clearDelayTimer(),
                  t.isFocusToShow() &&
                    ((t.focusTime = Date.now()),
                    t.delaySetPopupVisible(!0, t.props.focusDelay));
              }),
              (t.onMouseDown = function (e) {
                t.fireEvents('onMouseDown', e), (t.preClickTime = Date.now());
              }),
              (t.onTouchStart = function (e) {
                t.fireEvents('onTouchStart', e), (t.preTouchTime = Date.now());
              }),
              (t.onBlur = function (e) {
                t.fireEvents('onBlur', e),
                  t.clearDelayTimer(),
                  t.isBlurToHide() &&
                    t.delaySetPopupVisible(!1, t.props.blurDelay);
              }),
              (t.onContextMenu = function (e) {
                e.preventDefault(),
                  t.fireEvents('onContextMenu', e),
                  t.setPopupVisible(!0, e);
              }),
              (t.onContextMenuClose = function () {
                t.isContextMenuToShow() && t.close();
              }),
              (t.onClick = function (e) {
                if ((t.fireEvents('onClick', e), t.focusTime)) {
                  var n;
                  if (
                    (t.preClickTime && t.preTouchTime
                      ? (n = Math.min(t.preClickTime, t.preTouchTime))
                      : t.preClickTime
                      ? (n = t.preClickTime)
                      : t.preTouchTime && (n = t.preTouchTime),
                    Math.abs(n - t.focusTime) < 20)
                  )
                    return;
                  t.focusTime = 0;
                }
                (t.preClickTime = 0),
                  (t.preTouchTime = 0),
                  t.isClickToShow() &&
                    (t.isClickToHide() || t.isBlurToHide()) &&
                    e &&
                    e.preventDefault &&
                    e.preventDefault();
                var r = !t.state.popupVisible;
                ((t.isClickToHide() && !r) || (r && t.isClickToShow())) &&
                  t.setPopupVisible(!t.state.popupVisible, e);
              }),
              (t.onPopupMouseDown = function () {
                var e;
                ((t.hasPopupMouseDown = !0),
                clearTimeout(t.mouseDownTimeout),
                (t.mouseDownTimeout = window.setTimeout(function () {
                  t.hasPopupMouseDown = !1;
                }, 0)),
                t.context) &&
                  (e = t.context).onPopupMouseDown.apply(e, arguments);
              }),
              (t.onDocumentClick = function (e) {
                if (!t.props.mask || t.props.maskClosable) {
                  var n = e.target,
                    r = t.getRootDomNode(),
                    o = t.getPopupDomNode();
                  (Ie(r, n) && !t.isContextMenuOnly()) ||
                    Ie(o, n) ||
                    t.hasPopupMouseDown ||
                    t.close();
                }
              }),
              (t.getRootDomNode = function () {
                var e = t.props.getTriggerDOMNode;
                if (e) return e(t.triggerRef.current);
                try {
                  var n = Object(Me['a'])(t.triggerRef.current);
                  if (n) return n;
                } catch (r) {}
                return Re.a.findDOMNode(Object(Ce['a'])(t));
              }),
              (t.getPopupClassNameFromAlign = function (e) {
                var n = [],
                  r = t.props,
                  o = r.popupPlacement,
                  a = r.builtinPlacements,
                  i = r.prefixCls,
                  c = r.alignPoint,
                  s = r.getPopupClassNameFromAlign;
                return (
                  o && a && n.push(Ge(a, i, e, c)),
                  s && n.push(s(e)),
                  n.join(' ')
                );
              }),
              (t.getComponent = function () {
                var e = t.props,
                  n = e.prefixCls,
                  o = e.destroyPopupOnHide,
                  i = e.popupClassName,
                  c = e.onPopupAlign,
                  s = e.popupMotion,
                  u = e.popupAnimation,
                  l = e.popupTransitionName,
                  f = e.popupStyle,
                  d = e.mask,
                  p = e.maskAnimation,
                  b = e.maskTransitionName,
                  v = e.maskMotion,
                  m = e.zIndex,
                  h = e.popup,
                  g = e.stretch,
                  y = e.alignPoint,
                  O = e.mobile,
                  E = e.forceRender,
                  w = t.state,
                  k = w.popupVisible,
                  S = w.point,
                  j = t.getPopupAlign(),
                  x = {};
                return (
                  t.isMouseEnterToShow() &&
                    (x.onMouseEnter = t.onPopupMouseEnter),
                  t.isMouseLeaveToHide() &&
                    (x.onMouseLeave = t.onPopupMouseLeave),
                  (x.onMouseDown = t.onPopupMouseDown),
                  (x.onTouchStart = t.onPopupMouseDown),
                  r['createElement'](
                    Gn,
                    Object(a['a'])(
                      {
                        prefixCls: n,
                        destroyPopupOnHide: o,
                        visible: k,
                        point: y && S,
                        className: i,
                        align: j,
                        onAlign: c,
                        animation: u,
                        getClassNameFromAlign: t.getPopupClassNameFromAlign,
                      },
                      x,
                      {
                        stretch: g,
                        getRootDomNode: t.getRootDomNode,
                        style: f,
                        mask: d,
                        zIndex: m,
                        transitionName: l,
                        maskAnimation: p,
                        maskTransitionName: b,
                        maskMotion: v,
                        ref: t.popupRef,
                        motion: s,
                        mobile: O,
                        forceRender: E,
                      },
                    ),
                    'function' === typeof h ? h() : h,
                  )
                );
              }),
              (t.attachParent = function (e) {
                h['a'].cancel(t.attachId);
                var n,
                  r = t.props,
                  o = r.getPopupContainer,
                  a = r.getDocument,
                  i = t.getRootDomNode();
                o
                  ? (i || 0 === o.length) && (n = o(i))
                  : (n = a(t.getRootDomNode()).body),
                  n
                    ? n.appendChild(e)
                    : (t.attachId = Object(h['a'])(function () {
                        t.attachParent(e);
                      }));
              }),
              (t.getContainer = function () {
                var e = t.props.getDocument,
                  n = e(t.getRootDomNode()).createElement('div');
                return (
                  (n.style.position = 'absolute'),
                  (n.style.top = '0'),
                  (n.style.left = '0'),
                  (n.style.width = '100%'),
                  t.attachParent(n),
                  n
                );
              }),
              (t.setPoint = function (e) {
                var n = t.props.alignPoint;
                n &&
                  e &&
                  t.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
              }),
              (t.handlePortalUpdate = function () {
                t.state.prevPopupVisible !== t.state.popupVisible &&
                  t.props.afterPopupVisibleChange(t.state.popupVisible);
              }),
              (t.triggerContextValue = {
                onPopupMouseDown: t.onPopupMouseDown,
              }),
              (i =
                'popupVisible' in e
                  ? !!e.popupVisible
                  : !!e.defaultPopupVisible),
              (t.state = { prevPopupVisible: i, popupVisible: i }),
              Xn.forEach(function (e) {
                t['fire'.concat(e)] = function (n) {
                  t.fireEvents(e, n);
                };
              }),
              t
            );
          }
          return (
            Object(X['a'])(
              o,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.componentDidUpdate();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var e,
                      t = this.props,
                      n = this.state;
                    if (n.popupVisible)
                      return (
                        this.clickOutsideHandler ||
                          (!this.isClickToHide() &&
                            !this.isContextMenuToShow()) ||
                          ((e = t.getDocument(this.getRootDomNode())),
                          (this.clickOutsideHandler = De(
                            e,
                            'mousedown',
                            this.onDocumentClick,
                          ))),
                        this.touchOutsideHandler ||
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = De(
                            e,
                            'touchstart',
                            this.onDocumentClick,
                          ))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = De(
                            e,
                            'scroll',
                            this.onContextMenuClose,
                          ))),
                        void (
                          !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = De(
                            window,
                            'blur',
                            this.onContextMenuClose,
                          ))
                        )
                      );
                    this.clearOutsideHandler();
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      h['a'].cancel(this.attachId);
                  },
                },
                {
                  key: 'getPopupDomNode',
                  value: function () {
                    var e;
                    return (
                      (null === (e = this.popupRef.current) || void 0 === e
                        ? void 0
                        : e.getElement()) || null
                    );
                  },
                },
                {
                  key: 'getPopupAlign',
                  value: function () {
                    var e = this.props,
                      t = e.popupPlacement,
                      n = e.popupAlign,
                      r = e.builtinPlacements;
                    return t && r ? He(r, t, n) : n;
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function (e, t) {
                    var n = this.props.alignPoint,
                      r = this.state.popupVisible;
                    this.clearDelayTimer(),
                      r !== e &&
                        ('popupVisible' in this.props ||
                          this.setState({
                            popupVisible: e,
                            prevPopupVisible: r,
                          }),
                        this.props.onPopupVisibleChange(e)),
                      n && t && e && this.setPoint(t);
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function (e, t, n) {
                    var r = this,
                      o = 1e3 * t;
                    if ((this.clearDelayTimer(), o)) {
                      var a = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                      this.delayTimer = window.setTimeout(function () {
                        r.setPopupVisible(e, a), r.clearDelayTimer();
                      }, o);
                    } else this.setPopupVisible(e, n);
                  },
                },
                {
                  key: 'clearDelayTimer',
                  value: function () {
                    this.delayTimer &&
                      (clearTimeout(this.delayTimer), (this.delayTimer = null));
                  },
                },
                {
                  key: 'clearOutsideHandler',
                  value: function () {
                    this.clickOutsideHandler &&
                      (this.clickOutsideHandler.remove(),
                      (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(),
                        (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(),
                        (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler &&
                        (this.touchOutsideHandler.remove(),
                        (this.touchOutsideHandler = null));
                  },
                },
                {
                  key: 'createTwoChains',
                  value: function (e) {
                    var t = this.props.children.props,
                      n = this.props;
                    return t[e] && n[e] ? this['fire'.concat(e)] : t[e] || n[e];
                  },
                },
                {
                  key: 'isClickToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    );
                  },
                },
                {
                  key: 'isContextMenuOnly',
                  value: function () {
                    var e = this.props.action;
                    return (
                      'contextMenu' === e ||
                      (1 === e.length && 'contextMenu' === e[0])
                    );
                  },
                },
                {
                  key: 'isContextMenuToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('contextMenu') ||
                      -1 !== n.indexOf('contextMenu')
                    );
                  },
                },
                {
                  key: 'isClickToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    );
                  },
                },
                {
                  key: 'isMouseEnterToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseEnter')
                    );
                  },
                },
                {
                  key: 'isMouseLeaveToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseLeave')
                    );
                  },
                },
                {
                  key: 'isFocusToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('focus')
                    );
                  },
                },
                {
                  key: 'isBlurToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('blur')
                    );
                  },
                },
                {
                  key: 'forcePopupAlign',
                  value: function () {
                    var e;
                    this.state.popupVisible &&
                      (null === (e = this.popupRef.current) ||
                        void 0 === e ||
                        e.forceAlign());
                  },
                },
                {
                  key: 'fireEvents',
                  value: function (e, t) {
                    var n = this.props.children.props[e];
                    n && n(t);
                    var r = this.props[e];
                    r && r(t);
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.setPopupVisible(!1);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.state.popupVisible,
                      n = this.props,
                      o = n.children,
                      a = n.forceRender,
                      i = n.alignPoint,
                      c = n.className,
                      s = n.autoDestroy,
                      u = r['Children'].only(o),
                      f = { key: 'trigger' };
                    this.isContextMenuToShow()
                      ? (f.onContextMenu = this.onContextMenu)
                      : (f.onContextMenu =
                          this.createTwoChains('onContextMenu')),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((f.onClick = this.onClick),
                          (f.onMouseDown = this.onMouseDown),
                          (f.onTouchStart = this.onTouchStart))
                        : ((f.onClick = this.createTwoChains('onClick')),
                          (f.onMouseDown = this.createTwoChains('onMouseDown')),
                          (f.onTouchStart =
                            this.createTwoChains('onTouchStart'))),
                      this.isMouseEnterToShow()
                        ? ((f.onMouseEnter = this.onMouseEnter),
                          i && (f.onMouseMove = this.onMouseMove))
                        : (f.onMouseEnter =
                            this.createTwoChains('onMouseEnter')),
                      this.isMouseLeaveToHide()
                        ? (f.onMouseLeave = this.onMouseLeave)
                        : (f.onMouseLeave =
                            this.createTwoChains('onMouseLeave')),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((f.onFocus = this.onFocus), (f.onBlur = this.onBlur))
                        : ((f.onFocus = this.createTwoChains('onFocus')),
                          (f.onBlur = this.createTwoChains('onBlur')));
                    var p = d()(u && u.props && u.props.className, c);
                    p && (f.className = p);
                    var b = Object(l['a'])({}, f);
                    Object(Pe['c'])(u) &&
                      (b.ref = Object(Pe['a'])(this.triggerRef, u.ref));
                    var v,
                      m = r['cloneElement'](u, b);
                    return (
                      (t || this.popupRef.current || a) &&
                        (v = r['createElement'](
                          e,
                          {
                            key: 'portal',
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate,
                          },
                          this.getComponent(),
                        )),
                      !t && s && (v = null),
                      r['createElement'](
                        Kn.Provider,
                        { value: this.triggerContextValue },
                        m,
                        v,
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.popupVisible,
                      r = {};
                    return (
                      void 0 !== n &&
                        t.popupVisible !== n &&
                        ((r.popupVisible = n),
                        (r.prevPopupVisible = t.popupVisible)),
                      r
                    );
                  },
                },
              ],
            ),
            o
          );
        })(r['Component']);
        return (
          (t.contextType = Kn),
          (t.defaultProps = {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: Vn,
            getDocument: Wn,
            onPopupVisibleChange: $n,
            afterPopupVisibleChange: $n,
            onPopupAlign: $n,
            popupClassName: '',
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        );
      }
      var qn = Yn(Be),
        Zn = { adjustX: 1, adjustY: 1 },
        Qn = {
          topLeft: { points: ['bl', 'tl'], overflow: Zn, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: Zn, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: Zn, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: Zn, offset: [4, 0] },
        },
        Jn = {
          topLeft: { points: ['bl', 'tl'], overflow: Zn, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: Zn, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: Zn, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: Zn, offset: [4, 0] },
        };
      function er(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var tr = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function nr(e) {
        var t = e.prefixCls,
          n = e.visible,
          o = e.children,
          a = e.popup,
          s = e.popupClassName,
          u = e.popupOffset,
          f = e.disabled,
          p = e.mode,
          b = e.onVisibleChange,
          v = r['useContext'](ee),
          m = v.getPopupContainer,
          g = v.rtl,
          y = v.subMenuOpenDelay,
          O = v.subMenuCloseDelay,
          E = v.builtinPlacements,
          w = v.triggerSubMenuAction,
          k = v.forceSubMenuRender,
          S = v.motion,
          j = v.defaultMotions,
          x = r['useState'](!1),
          _ = Object(c['a'])(x, 2),
          T = _[0],
          A = _[1],
          C = g
            ? Object(l['a'])(Object(l['a'])({}, Jn), E)
            : Object(l['a'])(Object(l['a'])({}, Qn), E),
          N = tr[p],
          R = er(p, S, j),
          I = Object(l['a'])(
            Object(l['a'])({}, R),
            {},
            {
              leavedClassName: ''.concat(t, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          M = r['useRef']();
        return (
          r['useEffect'](
            function () {
              return (
                (M.current = Object(h['a'])(function () {
                  A(n);
                })),
                function () {
                  h['a'].cancel(M.current);
                }
              );
            },
            [n],
          ),
          r['createElement'](
            qn,
            {
              prefixCls: t,
              popupClassName: d()(
                ''.concat(t, '-popup'),
                Object(i['a'])({}, ''.concat(t, '-rtl'), g),
                s,
              ),
              stretch: 'horizontal' === p ? 'minWidth' : null,
              getPopupContainer: m,
              builtinPlacements: C,
              popupPlacement: N,
              popupVisible: T,
              popup: a,
              popupAlign: u && { offset: u },
              action: f ? [] : [w],
              mouseEnterDelay: y,
              mouseLeaveDelay: O,
              onPopupVisibleChange: b,
              forceRender: k,
              popupMotion: I,
            },
            o,
          )
        );
      }
      function rr(e) {
        var t = e.id,
          n = e.open,
          o = e.keyPath,
          i = e.children,
          s = 'inline',
          u = r['useContext'](ee),
          f = u.prefixCls,
          d = u.forceSubMenuRender,
          p = u.motion,
          b = u.defaultMotions,
          v = u.mode,
          m = r['useRef'](!1);
        m.current = v === s;
        var h = r['useState'](!m.current),
          g = Object(c['a'])(h, 2),
          y = g[0],
          O = g[1],
          E = !!m.current && n;
        r['useEffect'](
          function () {
            m.current && O(!1);
          },
          [v],
        );
        var w = Object(l['a'])({}, er(s, p, b));
        o.length > 1 && (w.motionAppear = !1);
        var k = w.onVisibleChanged;
        return (
          (w.onVisibleChanged = function (e) {
            return (
              m.current || e || O(!0),
              null === k || void 0 === k ? void 0 : k(e)
            );
          }),
          y
            ? null
            : r['createElement'](
                ne,
                { mode: s, locked: !m.current },
                r['createElement'](
                  ze['a'],
                  Object(a['a'])({ visible: E }, w, {
                    forceRender: d,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(f, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      o = e.style;
                    return r['createElement'](
                      Ae,
                      { id: t, className: n, style: o },
                      i,
                    );
                  },
                ),
              )
        );
      }
      var or = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        ar = ['active'],
        ir = function (e) {
          var t,
            n = e.style,
            o = e.className,
            s = e.title,
            f = e.eventKey,
            p = (e.warnKey, e.disabled),
            b = e.internalPopupClose,
            v = e.children,
            m = e.itemIcon,
            h = e.expandIcon,
            g = e.popupClassName,
            y = e.popupOffset,
            O = e.onClick,
            E = e.onMouseEnter,
            w = e.onMouseLeave,
            k = e.onTitleClick,
            S = e.onTitleMouseEnter,
            j = e.onTitleMouseLeave,
            x = Object(u['a'])(e, or),
            _ = me(f),
            T = r['useContext'](ee),
            A = T.prefixCls,
            C = T.mode,
            N = T.openKeys,
            R = T.disabled,
            I = T.overflowDisabled,
            M = T.activeKey,
            P = T.selectedKeys,
            D = T.itemIcon,
            L = T.expandIcon,
            F = T.onItemClick,
            B = T.onOpenChange,
            U = T.onActive,
            H = r['useContext'](pe),
            G = H.isSubPathKey,
            z = de(),
            K = ''.concat(A, '-submenu'),
            $ = R || p,
            W = r['useRef'](),
            X = r['useRef']();
          var Y = m || D,
            q = h || L,
            Z = N.includes(f),
            Q = !I && Z,
            J = G(P, f),
            te = re(f, $, S, j),
            oe = te.active,
            se = Object(u['a'])(te, ar),
            ue = r['useState'](!1),
            le = Object(c['a'])(ue, 2),
            fe = le[0],
            be = le[1],
            ve = function (e) {
              $ || be(e);
            },
            he = function (e) {
              ve(!0), null === E || void 0 === E || E({ key: f, domEvent: e });
            },
            ge = function (e) {
              ve(!1), null === w || void 0 === w || w({ key: f, domEvent: e });
            },
            ye = r['useMemo'](
              function () {
                return oe || ('inline' !== C && (fe || G([M], f)));
              },
              [C, oe, M, fe, f, G],
            ),
            Oe = ce(z.length),
            Ee = function (e) {
              $ ||
                (null === k || void 0 === k || k({ key: f, domEvent: e }),
                'inline' === C && B(f, !Z));
            },
            we = je(function (e) {
              null === O || void 0 === O || O(ae(e)), F(e);
            }),
            ke = function (e) {
              'inline' !== C && B(f, e);
            },
            Se = function () {
              U(f);
            },
            xe = _ && ''.concat(_, '-popup'),
            _e = r['createElement'](
              'div',
              Object(a['a'])(
                {
                  role: 'menuitem',
                  style: Oe,
                  className: ''.concat(K, '-title'),
                  tabIndex: $ ? null : -1,
                  ref: W,
                  title: 'string' === typeof s ? s : null,
                  'data-menu-id': I && _ ? null : _,
                  'aria-expanded': Q,
                  'aria-haspopup': !0,
                  'aria-controls': xe,
                  'aria-disabled': $,
                  onClick: Ee,
                  onFocus: Se,
                },
                se,
              ),
              s,
              r['createElement'](
                ie,
                {
                  icon: 'horizontal' !== C ? q : null,
                  props: Object(l['a'])(
                    Object(l['a'])({}, e),
                    {},
                    { isOpen: Q, isSubMenu: !0 },
                  ),
                },
                r['createElement']('i', { className: ''.concat(K, '-arrow') }),
              ),
            ),
            Te = r['useRef'](C);
          if (
            ('inline' !== C && (Te.current = z.length > 1 ? 'vertical' : C), !I)
          ) {
            var Ce = Te.current;
            _e = r['createElement'](
              nr,
              {
                mode: Ce,
                prefixCls: K,
                visible: !b && Q && 'inline' !== C,
                popupClassName: g,
                popupOffset: y,
                popup: r['createElement'](
                  ne,
                  { mode: 'horizontal' === Ce ? 'vertical' : Ce },
                  r['createElement'](Ae, { id: xe, ref: X }, v),
                ),
                disabled: $,
                onVisibleChange: ke,
              },
              _e,
            );
          }
          return r['createElement'](
            ne,
            {
              onItemClick: we,
              mode: 'horizontal' === C ? 'vertical' : C,
              itemIcon: Y,
              expandIcon: q,
            },
            r['createElement'](
              V.Item,
              Object(a['a'])({ role: 'none' }, x, {
                component: 'li',
                style: n,
                className: d()(
                  K,
                  ''.concat(K, '-').concat(C),
                  o,
                  ((t = {}),
                  Object(i['a'])(t, ''.concat(K, '-open'), Q),
                  Object(i['a'])(t, ''.concat(K, '-active'), ye),
                  Object(i['a'])(t, ''.concat(K, '-selected'), J),
                  Object(i['a'])(t, ''.concat(K, '-disabled'), $),
                  t),
                ),
                onMouseEnter: he,
                onMouseLeave: ge,
              }),
              _e,
              !I && r['createElement'](rr, { id: xe, open: Q, keyPath: z }, v),
            ),
          );
        };
      function cr(e) {
        var t,
          n = e.eventKey,
          o = e.children,
          a = de(n),
          i = Se(o, a),
          c = le();
        return (
          r['useEffect'](
            function () {
              if (c)
                return (
                  c.registerPath(n, a),
                  function () {
                    c.unregisterPath(n, a);
                  }
                );
            },
            [a],
          ),
          (t = c ? i : r['createElement'](ir, e, i)),
          r['createElement'](fe.Provider, { value: a }, t)
        );
      }
      function sr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (We(e)) {
          var n = e.nodeName.toLowerCase(),
            r =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              ('a' === n && !!e.getAttribute('href')),
            o = e.getAttribute('tabindex'),
            a = Number(o),
            i = null;
          return (
            o && !Number.isNaN(a) ? (i = a) : r && null === i && (i = 0),
            r && e.disabled && (i = null),
            null !== i && (i >= 0 || (t && i < 0))
          );
        }
        return !1;
      }
      function ur(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Object(m['a'])(e.querySelectorAll('*')).filter(function (e) {
            return sr(e, t);
          });
        return sr(e, t) && n.unshift(e), n;
      }
      var lr = E['a'].LEFT,
        fr = E['a'].RIGHT,
        dr = E['a'].UP,
        pr = E['a'].DOWN,
        br = E['a'].ENTER,
        vr = E['a'].ESC,
        mr = [dr, pr, lr, fr];
      function hr(e, t, n, r) {
        var o,
          a,
          c,
          s,
          u = 'prev',
          l = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && r === br) return { inlineTrigger: !0 };
        var p =
            ((o = {}), Object(i['a'])(o, dr, u), Object(i['a'])(o, pr, l), o),
          b =
            ((a = {}),
            Object(i['a'])(a, lr, n ? l : u),
            Object(i['a'])(a, fr, n ? u : l),
            Object(i['a'])(a, pr, f),
            Object(i['a'])(a, br, f),
            a),
          v =
            ((c = {}),
            Object(i['a'])(c, dr, u),
            Object(i['a'])(c, pr, l),
            Object(i['a'])(c, br, f),
            Object(i['a'])(c, vr, d),
            Object(i['a'])(c, lr, n ? f : d),
            Object(i['a'])(c, fr, n ? d : f),
            c),
          m = {
            inline: p,
            horizontal: b,
            vertical: v,
            inlineSub: p,
            horizontalSub: v,
            verticalSub: v,
          },
          h =
            null === (s = m[''.concat(e).concat(t ? '' : 'Sub')]) ||
            void 0 === s
              ? void 0
              : s[r];
        switch (h) {
          case u:
            return { offset: -1, sibling: !0 };
          case l:
            return { offset: 1, sibling: !0 };
          case d:
            return { offset: -1, sibling: !1 };
          case f:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function gr(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function yr(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function Or(e, t) {
        var n = ur(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function Er(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var o = Or(e, t),
          a = o.length,
          i = o.findIndex(function (e) {
            return n === e;
          });
        return (
          r < 0 ? (-1 === i ? (i = a - 1) : (i -= 1)) : r > 0 && (i += 1),
          (i = (i + a) % a),
          o[i]
        );
      }
      function wr(e, t, n, o, a, i, c, s, u, l) {
        var f = r['useRef'](),
          d = r['useRef']();
        d.current = t;
        var p = function () {
          h['a'].cancel(f.current);
        };
        return (
          r['useEffect'](function () {
            return function () {
              p();
            };
          }, []),
          function (r) {
            var b = r.which;
            if ([].concat(mr, [br, vr]).includes(b)) {
              var v,
                m,
                g,
                y = function () {
                  (v = new Set()), (m = new Map()), (g = new Map());
                  var e = i();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector(
                        "[data-menu-id='".concat(ve(o, e), "']"),
                      );
                      t && (v.add(t), g.set(t, e), m.set(e, t));
                    }),
                    v
                  );
                };
              y();
              var O = m.get(t),
                E = yr(O, v),
                w = g.get(E),
                k = hr(e, 1 === c(w, !0).length, n, b);
              if (!k) return;
              mr.includes(b) && r.preventDefault();
              var S = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  (null === n || void 0 === n
                    ? void 0
                    : n.getAttribute('href')) && (t = n);
                  var r = g.get(e);
                  s(r),
                    p(),
                    (f.current = Object(h['a'])(function () {
                      d.current === r && t.focus();
                    }));
                }
              };
              if (k.sibling || !E) {
                var j;
                j = E && 'inline' !== e ? gr(E) : a.current;
                var x = Er(j, v, E, k.offset);
                S(x);
              } else if (k.inlineTrigger) u(w);
              else if (k.offset > 0)
                u(w, !0),
                  p(),
                  (f.current = Object(h['a'])(function () {
                    y();
                    var e = E.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = Er(t, v);
                    S(n);
                  }, 5));
              else if (k.offset < 0) {
                var _ = c(w, !0),
                  T = _[_.length - 2],
                  A = m.get(T);
                u(T, !1), S(A);
              }
            }
            null === l || void 0 === l || l(r);
          }
        );
      }
      var kr = Math.random().toFixed(5).toString().slice(2),
        Sr = 0;
      function jr(e) {
        var t = v(e, { value: e }),
          n = Object(c['a'])(t, 2),
          o = n[0],
          a = n[1];
        return (
          r['useEffect'](function () {
            Sr += 1;
            var e = ''.concat(kr, '-').concat(Sr);
            a('rc-menu-uuid-'.concat(e));
          }, []),
          o
        );
      }
      function xr(e) {
        Promise.resolve().then(e);
      }
      var _r = '__RC_UTIL_PATH_SPLIT__',
        Tr = function (e) {
          return e.join(_r);
        },
        Ar = function (e) {
          return e.split(_r);
        },
        Cr = 'rc-menu-more';
      function Nr() {
        var e = r['useState']({}),
          t = Object(c['a'])(e, 2),
          n = t[1],
          o = Object(r['useRef'])(new Map()),
          a = Object(r['useRef'])(new Map()),
          i = r['useState']([]),
          s = Object(c['a'])(i, 2),
          u = s[0],
          l = s[1],
          f = Object(r['useRef'])(0),
          d = Object(r['useRef'])(!1),
          p = function () {
            d.current || n({});
          },
          b = Object(r['useCallback'])(function (e, t) {
            var n = Tr(t);
            a.current.set(n, e), o.current.set(e, n), (f.current += 1);
            var r = f.current;
            xr(function () {
              r === f.current && p();
            });
          }, []),
          v = Object(r['useCallback'])(function (e, t) {
            var n = Tr(t);
            a.current['delete'](n), o.current['delete'](e);
          }, []),
          h = Object(r['useCallback'])(function (e) {
            l(e);
          }, []),
          g = Object(r['useCallback'])(
            function (e, t) {
              var n = o.current.get(e) || '',
                r = Ar(n);
              return t && u.includes(r[0]) && r.unshift(Cr), r;
            },
            [u],
          ),
          y = Object(r['useCallback'])(
            function (e, t) {
              return e.some(function (e) {
                var n = g(e, !0);
                return n.includes(t);
              });
            },
            [g],
          ),
          O = function () {
            var e = Object(m['a'])(o.current.keys());
            return u.length && e.push(Cr), e;
          },
          E = Object(r['useCallback'])(function (e) {
            var t = ''.concat(o.current.get(e)).concat(_r),
              n = new Set();
            return (
              Object(m['a'])(a.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(a.current.get(e));
              }),
              n
            );
          }, []);
        return (
          r['useEffect'](function () {
            return function () {
              d.current = !0;
            };
          }, []),
          {
            registerPath: b,
            unregisterPath: v,
            refreshOverflowKeys: h,
            isSubPathKey: y,
            getKeyPath: g,
            getKeys: O,
            getSubPathKeys: E,
          }
        );
      }
      var Rr = [
          'prefixCls',
          'style',
          'className',
          'tabIndex',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
        ],
        Ir = [],
        Mr = function (e) {
          var t,
            n,
            o = e.prefixCls,
            s = void 0 === o ? 'rc-menu' : o,
            f = e.style,
            p = e.className,
            b = e.tabIndex,
            h = void 0 === b ? 0 : b,
            g = e.children,
            y = e.direction,
            O = e.id,
            E = e.mode,
            w = void 0 === E ? 'vertical' : E,
            k = e.inlineCollapsed,
            S = e.disabled,
            j = e.disabledOverflow,
            x = e.subMenuOpenDelay,
            _ = void 0 === x ? 0.1 : x,
            T = e.subMenuCloseDelay,
            C = void 0 === T ? 0.1 : T,
            N = e.forceSubMenuRender,
            R = e.defaultOpenKeys,
            I = e.openKeys,
            M = e.activeKey,
            P = e.defaultActiveFirst,
            D = e.selectable,
            L = void 0 === D || D,
            F = e.multiple,
            B = void 0 !== F && F,
            U = e.defaultSelectedKeys,
            H = e.selectedKeys,
            G = e.onSelect,
            z = e.onDeselect,
            K = e.inlineIndent,
            $ = void 0 === K ? 24 : K,
            W = e.motion,
            X = e.defaultMotions,
            Y = e.triggerSubMenuAction,
            q = void 0 === Y ? 'hover' : Y,
            Z = e.builtinPlacements,
            Q = e.itemIcon,
            J = e.expandIcon,
            ee = e.overflowedIndicator,
            te = void 0 === ee ? '...' : ee,
            re = e.overflowedIndicatorPopupClassName,
            oe = e.getPopupContainer,
            ie = e.onClick,
            ce = e.onOpenChange,
            se = e.onKeyDown,
            le = (e.openAnimation, e.openTransitionName, Object(u['a'])(e, Rr)),
            fe = Se(g, Ir),
            de = r['useState'](!1),
            ve = Object(c['a'])(de, 2),
            me = ve[0],
            he = ve[1],
            ge = r['useRef'](),
            ye = jr(O),
            Oe = 'rtl' === y;
          var Ee = r['useMemo'](
              function () {
                return ('inline' !== w && 'vertical' !== w) || !k
                  ? [w, !1]
                  : ['vertical', k];
              },
              [w, k],
            ),
            we = Object(c['a'])(Ee, 2),
            xe = we[0],
            _e = we[1],
            Te = r['useState'](0),
            Ae = Object(c['a'])(Te, 2),
            Ce = Ae[0],
            Ne = Ae[1],
            Re = Ce >= fe.length - 1 || 'horizontal' !== xe || j,
            Ie = v(R, {
              value: I,
              postState: function (e) {
                return e || Ir;
              },
            }),
            Me = Object(c['a'])(Ie, 2),
            Pe = Me[0],
            De = Me[1],
            Le = function (e) {
              De(e), null === ce || void 0 === ce || ce(e);
            },
            Fe = r['useState'](Pe),
            Be = Object(c['a'])(Fe, 2),
            Ue = Be[0],
            He = Be[1],
            Ge = 'inline' === xe,
            ze = r['useRef'](!1);
          r['useEffect'](
            function () {
              Ge && He(Pe);
            },
            [Pe],
          ),
            r['useEffect'](
              function () {
                ze.current ? (Ge ? De(Ue) : Le(Ir)) : (ze.current = !0);
              },
              [Ge],
            );
          var Ke = Nr(),
            $e = Ke.registerPath,
            Ve = Ke.unregisterPath,
            We = Ke.refreshOverflowKeys,
            Xe = Ke.isSubPathKey,
            Ye = Ke.getKeyPath,
            qe = Ke.getKeys,
            Ze = Ke.getSubPathKeys,
            Qe = r['useMemo'](
              function () {
                return { registerPath: $e, unregisterPath: Ve };
              },
              [$e, Ve],
            ),
            Je = r['useMemo'](
              function () {
                return { isSubPathKey: Xe };
              },
              [Xe],
            );
          r['useEffect'](
            function () {
              We(
                Re
                  ? Ir
                  : fe.slice(Ce + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [Ce, Re],
          );
          var et = v(
              M ||
                (P && (null === (t = fe[0]) || void 0 === t ? void 0 : t.key)),
              { value: M },
            ),
            tt = Object(c['a'])(et, 2),
            nt = tt[0],
            rt = tt[1],
            ot = je(function (e) {
              rt(e);
            }),
            at = je(function () {
              rt(void 0);
            }),
            it = v(U || [], {
              value: H,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? Ir
                  : [e];
              },
            }),
            ct = Object(c['a'])(it, 2),
            st = ct[0],
            ut = ct[1],
            lt = function (e) {
              if (L) {
                var t,
                  n = e.key,
                  r = st.includes(n);
                (t = B
                  ? r
                    ? st.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat(Object(m['a'])(st), [n])
                  : [n]),
                  ut(t);
                var o = Object(l['a'])(
                  Object(l['a'])({}, e),
                  {},
                  { selectedKeys: t },
                );
                r
                  ? null === z || void 0 === z || z(o)
                  : null === G || void 0 === G || G(o);
              }
              !B && Pe.length && 'inline' !== xe && Le(Ir);
            },
            ft = je(function (e) {
              null === ie || void 0 === ie || ie(ae(e)), lt(e);
            }),
            dt = je(function (e, t) {
              var n = Pe.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== xe) {
                var r = Ze(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              A()(Pe, n) || Le(n);
            }),
            pt = je(oe),
            bt = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !Pe.includes(e);
              dt(e, n);
            },
            vt = wr(xe, nt, Oe, ye, ge, qe, Ye, rt, bt, se);
          r['useEffect'](function () {
            he(!0);
          }, []);
          var mt =
              'horizontal' !== xe || j
                ? fe
                : fe.map(function (e, t) {
                    return r['createElement'](
                      ne,
                      { key: e.key, overflowDisabled: t > Ce },
                      e,
                    );
                  }),
            ht = r['createElement'](
              V,
              Object(a['a'])(
                {
                  id: O,
                  ref: ge,
                  prefixCls: ''.concat(s, '-overflow'),
                  component: 'ul',
                  itemComponent: ke,
                  className: d()(
                    s,
                    ''.concat(s, '-root'),
                    ''.concat(s, '-').concat(xe),
                    p,
                    ((n = {}),
                    Object(i['a'])(n, ''.concat(s, '-inline-collapsed'), _e),
                    Object(i['a'])(n, ''.concat(s, '-rtl'), Oe),
                    n),
                  ),
                  dir: y,
                  style: f,
                  role: 'menu',
                  tabIndex: h,
                  data: mt,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? fe.slice(-t) : null;
                    return r['createElement'](
                      cr,
                      {
                        eventKey: Cr,
                        title: te,
                        disabled: Re,
                        internalPopupClose: 0 === t,
                        popupClassName: re,
                      },
                      n,
                    );
                  },
                  maxCount:
                    'horizontal' !== xe || j ? V.INVALIDATE : V.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    Ne(e);
                  },
                  onKeyDown: vt,
                },
                le,
              ),
            );
          return r['createElement'](
            be.Provider,
            { value: ye },
            r['createElement'](
              ne,
              {
                prefixCls: s,
                mode: xe,
                openKeys: Pe,
                rtl: Oe,
                disabled: S,
                motion: me ? W : null,
                defaultMotions: me ? X : null,
                activeKey: nt,
                onActive: ot,
                onInactive: at,
                selectedKeys: st,
                inlineIndent: $,
                subMenuOpenDelay: _,
                subMenuCloseDelay: C,
                forceSubMenuRender: N,
                builtinPlacements: Z,
                triggerSubMenuAction: q,
                getPopupContainer: pt,
                itemIcon: Q,
                expandIcon: J,
                onItemClick: ft,
                onOpenChange: dt,
              },
              r['createElement'](pe.Provider, { value: Je }, ht),
              r['createElement'](
                'div',
                { style: { display: 'none' }, 'aria-hidden': !0 },
                r['createElement'](ue.Provider, { value: Qe }, fe),
              ),
            ),
          );
        },
        Pr = Mr,
        Dr = ['className', 'title', 'eventKey', 'children'],
        Lr = ['children'],
        Fr = function (e) {
          var t = e.className,
            n = e.title,
            o = (e.eventKey, e.children),
            i = Object(u['a'])(e, Dr),
            c = r['useContext'](ee),
            s = c.prefixCls,
            l = ''.concat(s, '-item-group');
          return r['createElement'](
            'li',
            Object(a['a'])({}, i, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: d()(l, t),
            }),
            r['createElement'](
              'div',
              {
                className: ''.concat(l, '-title'),
                title: 'string' === typeof n ? n : void 0,
              },
              n,
            ),
            r['createElement']('ul', { className: ''.concat(l, '-list') }, o),
          );
        };
      function Br(e) {
        var t = e.children,
          n = Object(u['a'])(e, Lr),
          o = de(n.eventKey),
          a = Se(t, o),
          i = le();
        return i
          ? a
          : r['createElement'](Fr, Object(Z['a'])(n, ['warnKey']), a);
      }
      function Ur(e) {
        var t = e.className,
          n = e.style,
          o = r['useContext'](ee),
          a = o.prefixCls,
          i = le();
        return i
          ? null
          : r['createElement']('li', {
              className: d()(''.concat(a, '-item-divider'), t),
              style: n,
            });
      }
      var Hr = Pr;
      (Hr.Item = ke), (Hr.SubMenu = cr), (Hr.ItemGroup = Br), (Hr.Divider = Ur);
      var Gr = Hr,
        zr = { adjustX: 1, adjustY: 1 },
        Kr = [0, 0],
        $r = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: zr,
            offset: [0, -4],
            targetOffset: Kr,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: zr,
            offset: [0, -4],
            targetOffset: Kr,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: zr,
            offset: [0, -4],
            targetOffset: Kr,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: zr,
            offset: [0, 4],
            targetOffset: Kr,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: zr,
            offset: [0, 4],
            targetOffset: Kr,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: zr,
            offset: [0, 4],
            targetOffset: Kr,
          },
        },
        Vr = $r;
      function Wr(e, t) {
        var n = e.arrow,
          o = void 0 !== n && n,
          a = e.prefixCls,
          s = void 0 === a ? 'rc-dropdown' : a,
          l = e.transitionName,
          f = e.animation,
          p = e.align,
          b = e.placement,
          v = void 0 === b ? 'bottomLeft' : b,
          m = e.placements,
          h = void 0 === m ? Vr : m,
          g = e.getPopupContainer,
          y = e.showAction,
          O = e.hideAction,
          E = e.overlayClassName,
          w = e.overlayStyle,
          k = e.visible,
          S = e.trigger,
          j = void 0 === S ? ['hover'] : S,
          x = Object(u['a'])(e, [
            'arrow',
            'prefixCls',
            'transitionName',
            'animation',
            'align',
            'placement',
            'placements',
            'getPopupContainer',
            'showAction',
            'hideAction',
            'overlayClassName',
            'overlayStyle',
            'visible',
            'trigger',
          ]),
          _ = r['useState'](),
          T = Object(c['a'])(_, 2),
          A = T[0],
          C = T[1],
          N = 'visible' in e ? k : A,
          R = r['useRef'](null);
        r['useImperativeHandle'](t, function () {
          return R.current;
        });
        var I = function () {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          M = function (t) {
            var n = e.onOverlayClick,
              r = I().props;
            C(!1), n && n(t), r.onClick && r.onClick(t);
          },
          P = function (t) {
            var n = e.onVisibleChange;
            C(t), 'function' === typeof n && n(t);
          },
          D = function () {
            var e = I(),
              t = { prefixCls: ''.concat(s, '-menu'), onClick: M };
            return (
              'string' === typeof e.type && delete t.prefixCls,
              r['createElement'](
                r['Fragment'],
                null,
                o &&
                  r['createElement']('div', {
                    className: ''.concat(s, '-arrow'),
                  }),
                r['cloneElement'](e, t),
              )
            );
          },
          L = function () {
            var t = e.overlay;
            return 'function' === typeof t ? D : D();
          },
          F = function () {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          B = function () {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(s, '-open');
          },
          U = function () {
            var t = e.children,
              n = t.props ? t.props : {},
              o = d()(n.className, B());
            return A && t ? r['cloneElement'](t, { className: o }) : t;
          },
          H = O;
        return (
          H || -1 === j.indexOf('contextMenu') || (H = ['click']),
          r['createElement'](
            qn,
            Object.assign({}, x, {
              prefixCls: s,
              ref: R,
              popupClassName: d()(
                E,
                Object(i['a'])({}, ''.concat(s, '-show-arrow'), o),
              ),
              popupStyle: w,
              builtinPlacements: h,
              action: j,
              showAction: y,
              hideAction: H || [],
              popupPlacement: v,
              popupAlign: p,
              popupTransitionName: l,
              popupAnimation: f,
              popupVisible: N,
              stretch: F() ? 'minWidth' : '',
              popup: L(),
              onPopupVisibleChange: P,
              getPopupContainer: g,
            }),
            U(),
          )
        );
      }
      var Xr = r['forwardRef'](Wr),
        Yr = Xr;
      function qr(e, t) {
        var n = e.prefixCls,
          o = e.editable,
          a = e.locale,
          i = e.style;
        return o && !1 !== o.showAdd
          ? r['createElement'](
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: i,
                'aria-label':
                  (null === a || void 0 === a ? void 0 : a.addAriaLabel) ||
                  'Add tab',
                onClick: function (e) {
                  o.onEdit('add', { event: e });
                },
              },
              o.addIcon || '+',
            )
          : null;
      }
      var Zr = r['forwardRef'](qr);
      function Qr(e, t) {
        var n = e.prefixCls,
          o = e.id,
          a = e.tabs,
          s = e.locale,
          u = e.mobile,
          l = e.moreIcon,
          f = void 0 === l ? 'More' : l,
          p = e.moreTransitionName,
          b = e.style,
          v = e.className,
          m = e.editable,
          h = e.tabBarGutter,
          g = e.rtl,
          y = e.removeAriaLabel,
          O = e.onTabClick,
          w = Object(r['useState'])(!1),
          k = Object(c['a'])(w, 2),
          S = k[0],
          j = k[1],
          x = Object(r['useState'])(null),
          _ = Object(c['a'])(x, 2),
          T = _[0],
          A = _[1],
          C = ''.concat(o, '-more-popup'),
          N = ''.concat(n, '-dropdown'),
          R = null !== T ? ''.concat(C, '-').concat(T) : null,
          I = null === s || void 0 === s ? void 0 : s.dropdownAriaLabel;
        function M(e, t) {
          e.preventDefault(),
            e.stopPropagation(),
            m.onEdit('remove', { key: t, event: e });
        }
        var P = r['createElement'](
          Gr,
          {
            onClick: function (e) {
              var t = e.key,
                n = e.domEvent;
              O(t, n), j(!1);
            },
            id: C,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': R,
            selectedKeys: [T],
            'aria-label': void 0 !== I ? I : 'expanded dropdown',
          },
          a.map(function (e) {
            var t = m && !1 !== e.closable && !e.disabled;
            return r['createElement'](
              ke,
              {
                key: e.key,
                id: ''.concat(C, '-').concat(e.key),
                role: 'option',
                'aria-controls': o && ''.concat(o, '-panel-').concat(e.key),
                disabled: e.disabled,
              },
              r['createElement']('span', null, e.tab),
              t &&
                r['createElement'](
                  'button',
                  {
                    type: 'button',
                    'aria-label': y || 'remove',
                    tabIndex: 0,
                    className: ''.concat(N, '-menu-item-remove'),
                    onClick: function (t) {
                      t.stopPropagation(), M(t, e.key);
                    },
                  },
                  e.closeIcon || m.removeIcon || '\xd7',
                ),
            );
          }),
        );
        function D(e) {
          for (
            var t = a.filter(function (e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === T;
                }) || 0,
              r = t.length,
              o = 0;
            o < r;
            o += 1
          ) {
            n = (n + e + r) % r;
            var i = t[n];
            if (!i.disabled) return void A(i.key);
          }
        }
        function L(e) {
          var t = e.which;
          if (S)
            switch (t) {
              case E['a'].UP:
                D(-1), e.preventDefault();
                break;
              case E['a'].DOWN:
                D(1), e.preventDefault();
                break;
              case E['a'].ESC:
                j(!1);
                break;
              case E['a'].SPACE:
              case E['a'].ENTER:
                null !== T && O(T, e);
                break;
            }
          else
            [E['a'].DOWN, E['a'].SPACE, E['a'].ENTER].includes(t) &&
              (j(!0), e.preventDefault());
        }
        Object(r['useEffect'])(
          function () {
            var e = document.getElementById(R);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [T],
        ),
          Object(r['useEffect'])(
            function () {
              S || A(null);
            },
            [S],
          );
        var F = Object(i['a'])({}, g ? 'marginRight' : 'marginLeft', h);
        a.length || ((F.visibility = 'hidden'), (F.order = 1));
        var B = d()(Object(i['a'])({}, ''.concat(N, '-rtl'), g)),
          U = u
            ? null
            : r['createElement'](
                Yr,
                {
                  prefixCls: N,
                  overlay: P,
                  trigger: ['hover'],
                  visible: S,
                  transitionName: p,
                  onVisibleChange: j,
                  overlayClassName: B,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                r['createElement'](
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: F,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': C,
                    id: ''.concat(o, '-more'),
                    'aria-expanded': S,
                    onKeyDown: L,
                  },
                  f,
                ),
              );
        return r['createElement'](
          'div',
          {
            className: d()(''.concat(n, '-nav-operations'), v),
            style: b,
            ref: t,
          },
          U,
          r['createElement'](Zr, { prefixCls: n, locale: s, editable: m }),
        );
      }
      var Jr = r['memo'](r['forwardRef'](Qr), function (e, t) {
          return t.tabMoving;
        }),
        eo = Object(r['createContext'])(null),
        to = 0.1,
        no = 0.01,
        ro = 20,
        oo = Math.pow(0.995, ro);
      function ao(e, t) {
        var n = Object(r['useState'])(),
          o = Object(c['a'])(n, 2),
          a = o[0],
          i = o[1],
          s = Object(r['useState'])(0),
          u = Object(c['a'])(s, 2),
          l = u[0],
          f = u[1],
          d = Object(r['useState'])(0),
          p = Object(c['a'])(d, 2),
          b = p[0],
          v = p[1],
          m = Object(r['useState'])(),
          h = Object(c['a'])(m, 2),
          g = h[0],
          y = h[1],
          O = Object(r['useRef'])();
        function E(e) {
          var t = e.touches[0],
            n = t.screenX,
            r = t.screenY;
          i({ x: n, y: r }), window.clearInterval(O.current);
        }
        function w(e) {
          if (a) {
            e.preventDefault();
            var n = e.touches[0],
              r = n.screenX,
              o = n.screenY;
            i({ x: r, y: o });
            var c = r - a.x,
              s = o - a.y;
            t(c, s);
            var u = Date.now();
            f(u), v(u - l), y({ x: c, y: s });
          }
        }
        function k() {
          if (a && (i(null), y(null), g)) {
            var e = g.x / b,
              n = g.y / b,
              r = Math.abs(e),
              o = Math.abs(n);
            if (Math.max(r, o) < to) return;
            var c = e,
              s = n;
            O.current = window.setInterval(function () {
              Math.abs(c) < no && Math.abs(s) < no
                ? window.clearInterval(O.current)
                : ((c *= oo), (s *= oo), t(c * ro, s * ro));
            }, ro);
          }
        }
        var S = Object(r['useRef'])();
        function j(e) {
          var n = e.deltaX,
            r = e.deltaY,
            o = 0,
            a = Math.abs(n),
            i = Math.abs(r);
          a === i
            ? (o = 'x' === S.current ? n : r)
            : a > i
            ? ((o = n), (S.current = 'x'))
            : ((o = r), (S.current = 'y')),
            t(-o, -o) && e.preventDefault();
        }
        var x = Object(r['useRef'])(null);
        (x.current = {
          onTouchStart: E,
          onTouchMove: w,
          onTouchEnd: k,
          onWheel: j,
        }),
          r['useEffect'](function () {
            function t(e) {
              x.current.onTouchStart(e);
            }
            function n(e) {
              x.current.onTouchMove(e);
            }
            function r(e) {
              x.current.onTouchEnd(e);
            }
            function o(e) {
              x.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', r, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', o),
              function () {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', r);
              }
            );
          }, []);
      }
      function io() {
        var e = Object(r['useRef'])(new Map());
        function t(t) {
          return (
            e.current.has(t) || e.current.set(t, r['createRef']()),
            e.current.get(t)
          );
        }
        function n(t) {
          e.current['delete'](t);
        }
        return [t, n];
      }
      function co(e, t) {
        var n = r['useRef'](e),
          o = r['useState']({}),
          a = Object(c['a'])(o, 2),
          i = a[1];
        function s(e) {
          var r = 'function' === typeof e ? e(n.current) : e;
          r !== n.current && t(r, n.current), (n.current = r), i({});
        }
        return [n.current, s];
      }
      var so = function (e) {
        var t,
          n = e.position,
          o = e.prefixCls,
          a = e.extra;
        if (!a) return null;
        var i = {};
        return (
          a && 'object' === Object(s['a'])(a) && !r['isValidElement'](a)
            ? (i = a)
            : (i.right = a),
          'right' === n && (t = i.right),
          'left' === n && (t = i.left),
          t
            ? r['createElement'](
                'div',
                { className: ''.concat(o, '-extra-content') },
                t,
              )
            : null
        );
      };
      function uo(e, t) {
        var n,
          o = r['useContext'](eo),
          s = o.prefixCls,
          u = o.tabs,
          f = e.className,
          p = e.style,
          b = e.id,
          v = e.animated,
          E = e.activeKey,
          w = e.rtl,
          S = e.extra,
          x = e.editable,
          T = e.locale,
          A = e.tabPosition,
          C = e.tabBarGutter,
          N = e.children,
          R = e.onTabClick,
          I = e.onTabScroll,
          M = Object(r['useRef'])(),
          P = Object(r['useRef'])(),
          D = Object(r['useRef'])(),
          L = Object(r['useRef'])(),
          F = io(),
          B = Object(c['a'])(F, 2),
          U = B[0],
          H = B[1],
          G = 'top' === A || 'bottom' === A,
          z = co(0, function (e, t) {
            G && I && I({ direction: e > t ? 'left' : 'right' });
          }),
          K = Object(c['a'])(z, 2),
          $ = K[0],
          V = K[1],
          W = co(0, function (e, t) {
            !G && I && I({ direction: e > t ? 'top' : 'bottom' });
          }),
          X = Object(c['a'])(W, 2),
          Y = X[0],
          q = X[1],
          Z = Object(r['useState'])(0),
          Q = Object(c['a'])(Z, 2),
          J = Q[0],
          ee = Q[1],
          te = Object(r['useState'])(0),
          ne = Object(c['a'])(te, 2),
          re = ne[0],
          oe = ne[1],
          ae = Object(r['useState'])(0),
          ie = Object(c['a'])(ae, 2),
          ce = ie[0],
          se = ie[1],
          ue = Object(r['useState'])(0),
          le = Object(c['a'])(ue, 2),
          fe = le[0],
          de = le[1],
          pe = Object(r['useState'])(null),
          be = Object(c['a'])(pe, 2),
          ve = be[0],
          me = be[1],
          he = Object(r['useState'])(null),
          ge = Object(c['a'])(he, 2),
          ye = ge[0],
          Oe = ge[1],
          Ee = Object(r['useState'])(0),
          we = Object(c['a'])(Ee, 2),
          ke = we[0],
          Se = we[1],
          je = Object(r['useState'])(0),
          xe = Object(c['a'])(je, 2),
          _e = xe[0],
          Te = xe[1],
          Ae = O(new Map()),
          Ce = Object(c['a'])(Ae, 2),
          Ne = Ce[0],
          Re = Ce[1],
          Ie = j(u, Ne, J),
          Me = ''.concat(s, '-nav-operations-hidden'),
          Pe = 0,
          De = 0;
        function Le(e) {
          return e < Pe ? Pe : e > De ? De : e;
        }
        G
          ? w
            ? ((Pe = 0), (De = Math.max(0, J - ve)))
            : ((Pe = Math.min(0, ve - J)), (De = 0))
          : ((Pe = Math.min(0, ye - re)), (De = 0));
        var Fe = Object(r['useRef'])(),
          Be = Object(r['useState'])(),
          Ue = Object(c['a'])(Be, 2),
          He = Ue[0],
          Ge = Ue[1];
        function ze() {
          Ge(Date.now());
        }
        function Ke() {
          window.clearTimeout(Fe.current);
        }
        function $e() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : E,
            t = Ie.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (G) {
            var n = $;
            w
              ? t.right < $
                ? (n = t.right)
                : t.right + t.width > $ + ve && (n = t.right + t.width - ve)
              : t.left < -$
              ? (n = -t.left)
              : t.left + t.width > -$ + ve && (n = -(t.left + t.width - ve)),
              q(0),
              V(Le(n));
          } else {
            var r = Y;
            t.top < -Y
              ? (r = -t.top)
              : t.top + t.height > -Y + ye && (r = -(t.top + t.height - ye)),
              V(0),
              q(Le(r));
          }
        }
        ao(M, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = Le(e + t);
              return n;
            });
          }
          if (G) {
            if (ve >= J) return !1;
            n(V, e);
          } else {
            if (ye >= re) return !1;
            n(q, t);
          }
          return Ke(), ze(), !0;
        }),
          Object(r['useEffect'])(
            function () {
              return (
                Ke(),
                He &&
                  (Fe.current = window.setTimeout(function () {
                    Ge(0);
                  }, 100)),
                Ke
              );
            },
            [He],
          );
        var Ve = _(
            Ie,
            { width: ve, height: ye, left: $, top: Y },
            { width: ce, height: fe },
            { width: ke, height: _e },
            Object(l['a'])(Object(l['a'])({}, e), {}, { tabs: u }),
          ),
          We = Object(c['a'])(Ve, 2),
          Xe = We[0],
          Ye = We[1],
          qe = {};
        'top' === A || 'bottom' === A
          ? (qe[w ? 'marginRight' : 'marginLeft'] = C)
          : (qe.marginTop = C);
        var Ze = u.map(function (e, t) {
            var n = e.key;
            return r['createElement'](k, {
              id: b,
              prefixCls: s,
              key: n,
              tab: e,
              style: 0 === t ? void 0 : qe,
              closable: e.closable,
              editable: x,
              active: n === E,
              renderWrapper: N,
              removeAriaLabel:
                null === T || void 0 === T ? void 0 : T.removeAriaLabel,
              ref: U(n),
              onClick: function (e) {
                R(n, e);
              },
              onRemove: function () {
                H(n);
              },
              onFocus: function () {
                $e(n),
                  ze(),
                  M.current &&
                    (w || (M.current.scrollLeft = 0),
                    (M.current.scrollTop = 0));
              },
            });
          }),
          Qe = y(function () {
            var e,
              t,
              n,
              r,
              o,
              a,
              i,
              c,
              s,
              l =
                (null === (e = M.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0,
              f =
                (null === (t = M.current) || void 0 === t
                  ? void 0
                  : t.offsetHeight) || 0,
              d =
                (null === (n = L.current) || void 0 === n
                  ? void 0
                  : n.offsetWidth) || 0,
              p =
                (null === (r = L.current) || void 0 === r
                  ? void 0
                  : r.offsetHeight) || 0,
              b =
                (null === (o = D.current) || void 0 === o
                  ? void 0
                  : o.offsetWidth) || 0,
              v =
                (null === (a = D.current) || void 0 === a
                  ? void 0
                  : a.offsetHeight) || 0;
            me(l), Oe(f), Se(d), Te(p);
            var m =
                ((null === (i = P.current) || void 0 === i
                  ? void 0
                  : i.offsetWidth) || 0) - d,
              h =
                ((null === (c = P.current) || void 0 === c
                  ? void 0
                  : c.offsetHeight) || 0) - p;
            ee(m), oe(h);
            var g =
              null === (s = D.current) || void 0 === s
                ? void 0
                : s.className.includes(Me);
            se(m - (g ? 0 : b)),
              de(h - (g ? 0 : v)),
              Re(function () {
                var e = new Map();
                return (
                  u.forEach(function (t) {
                    var n = t.key,
                      r = U(n).current;
                    r &&
                      e.set(n, {
                        width: r.offsetWidth,
                        height: r.offsetHeight,
                        left: r.offsetLeft,
                        top: r.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          Je = u.slice(0, Xe),
          et = u.slice(Ye + 1),
          tt = [].concat(Object(m['a'])(Je), Object(m['a'])(et)),
          nt = Object(r['useState'])(),
          rt = Object(c['a'])(nt, 2),
          ot = rt[0],
          at = rt[1],
          it = Ie.get(E),
          ct = Object(r['useRef'])();
        function st() {
          h['a'].cancel(ct.current);
        }
        Object(r['useEffect'])(
          function () {
            var e = {};
            return (
              it &&
                (G
                  ? (w ? (e.right = it.right) : (e.left = it.left),
                    (e.width = it.width))
                  : ((e.top = it.top), (e.height = it.height))),
              st(),
              (ct.current = Object(h['a'])(function () {
                at(e);
              })),
              st
            );
          },
          [it, G, w],
        ),
          Object(r['useEffect'])(
            function () {
              $e();
            },
            [E, it, Ie, G],
          ),
          Object(r['useEffect'])(
            function () {
              Qe();
            },
            [
              w,
              C,
              E,
              u
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var ut,
          lt,
          ft,
          dt,
          pt = !!tt.length,
          bt = ''.concat(s, '-nav-wrap');
        return (
          G
            ? w
              ? ((lt = $ > 0), (ut = $ + ve < J))
              : ((ut = $ < 0), (lt = -$ + ve < J))
            : ((ft = Y < 0), (dt = -Y + ye < re)),
          r['createElement'](
            'div',
            {
              ref: t,
              role: 'tablist',
              className: d()(''.concat(s, '-nav'), f),
              style: p,
              onKeyDown: function () {
                ze();
              },
            },
            r['createElement'](so, {
              position: 'left',
              extra: S,
              prefixCls: s,
            }),
            r['createElement'](
              g['a'],
              { onResize: Qe },
              r['createElement'](
                'div',
                {
                  className: d()(
                    bt,
                    ((n = {}),
                    Object(i['a'])(n, ''.concat(bt, '-ping-left'), ut),
                    Object(i['a'])(n, ''.concat(bt, '-ping-right'), lt),
                    Object(i['a'])(n, ''.concat(bt, '-ping-top'), ft),
                    Object(i['a'])(n, ''.concat(bt, '-ping-bottom'), dt),
                    n),
                  ),
                  ref: M,
                },
                r['createElement'](
                  g['a'],
                  { onResize: Qe },
                  r['createElement'](
                    'div',
                    {
                      ref: P,
                      className: ''.concat(s, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat($, 'px, ')
                          .concat(Y, 'px)'),
                        transition: He ? 'none' : void 0,
                      },
                    },
                    Ze,
                    r['createElement'](Zr, {
                      ref: L,
                      prefixCls: s,
                      locale: T,
                      editable: x,
                      style: Object(l['a'])(
                        Object(l['a'])({}, 0 === Ze.length ? void 0 : qe),
                        {},
                        { visibility: pt ? 'hidden' : null },
                      ),
                    }),
                    r['createElement']('div', {
                      className: d()(
                        ''.concat(s, '-ink-bar'),
                        Object(i['a'])(
                          {},
                          ''.concat(s, '-ink-bar-animated'),
                          v.inkBar,
                        ),
                      ),
                      style: ot,
                    }),
                  ),
                ),
              ),
            ),
            r['createElement'](
              Jr,
              Object(a['a'])({}, e, {
                removeAriaLabel:
                  null === T || void 0 === T ? void 0 : T.removeAriaLabel,
                ref: D,
                prefixCls: s,
                tabs: tt,
                className: !pt && Me,
                tabMoving: !!He,
              }),
            ),
            r['createElement'](so, {
              position: 'right',
              extra: S,
              prefixCls: s,
            }),
          )
        );
      }
      var lo = r['forwardRef'](uo);
      function fo(e) {
        var t = e.id,
          n = e.activeKey,
          o = e.animated,
          a = e.tabPosition,
          c = e.rtl,
          s = e.destroyInactiveTabPane,
          u = r['useContext'](eo),
          l = u.prefixCls,
          f = u.tabs,
          p = o.tabPane,
          b = f.findIndex(function (e) {
            return e.key === n;
          });
        return r['createElement'](
          'div',
          { className: d()(''.concat(l, '-content-holder')) },
          r['createElement'](
            'div',
            {
              className: d()(
                ''.concat(l, '-content'),
                ''.concat(l, '-content-').concat(a),
                Object(i['a'])({}, ''.concat(l, '-content-animated'), p),
              ),
              style:
                b && p
                  ? Object(i['a'])(
                      {},
                      c ? 'marginRight' : 'marginLeft',
                      '-'.concat(b, '00%'),
                    )
                  : null,
            },
            f.map(function (e) {
              return r['cloneElement'](e.node, {
                key: e.key,
                prefixCls: l,
                tabKey: e.key,
                id: t,
                animated: p,
                active: e.key === n,
                destroyInactiveTabPane: s,
              });
            }),
          ),
        );
      }
      function po(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          o = e.className,
          a = e.style,
          i = e.id,
          s = e.active,
          u = e.animated,
          f = e.destroyInactiveTabPane,
          p = e.tabKey,
          b = e.children,
          v = r['useState'](n),
          m = Object(c['a'])(v, 2),
          h = m[0],
          g = m[1];
        r['useEffect'](
          function () {
            s ? g(!0) : f && g(!1);
          },
          [s, f],
        );
        var y = {};
        return (
          s ||
            (u
              ? ((y.visibility = 'hidden'),
                (y.height = 0),
                (y.overflowY = 'hidden'))
              : (y.display = 'none')),
          r['createElement'](
            'div',
            {
              id: i && ''.concat(i, '-panel-').concat(p),
              role: 'tabpanel',
              tabIndex: s ? 0 : -1,
              'aria-labelledby': i && ''.concat(i, '-tab-').concat(p),
              'aria-hidden': !s,
              style: Object(l['a'])(Object(l['a'])({}, y), a),
              className: d()(
                ''.concat(t, '-tabpane'),
                s && ''.concat(t, '-tabpane-active'),
                o,
              ),
            },
            (s || h || n) && b,
          )
        );
      }
      var bo = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
        ],
        vo = 0;
      function mo(e) {
        return Object(p['a'])(e)
          .map(function (e) {
            if (r['isValidElement'](e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0;
              return Object(l['a'])(
                Object(l['a'])({ key: t }, e.props),
                {},
                { node: e },
              );
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function ho(e, t) {
        var n,
          o,
          f = e.id,
          p = e.prefixCls,
          m = void 0 === p ? 'rc-tabs' : p,
          h = e.className,
          g = e.children,
          y = e.direction,
          O = e.activeKey,
          E = e.defaultActiveKey,
          w = e.editable,
          k = e.animated,
          S = void 0 === k ? { inkBar: !0, tabPane: !1 } : k,
          j = e.tabPosition,
          x = void 0 === j ? 'top' : j,
          _ = e.tabBarGutter,
          T = e.tabBarStyle,
          A = e.tabBarExtraContent,
          C = e.locale,
          N = e.moreIcon,
          R = e.moreTransitionName,
          I = e.destroyInactiveTabPane,
          M = e.renderTabBar,
          P = e.onChange,
          D = e.onTabClick,
          L = e.onTabScroll,
          F = Object(u['a'])(e, bo),
          B = mo(g),
          U = 'rtl' === y;
        o =
          !1 === S
            ? { inkBar: !1, tabPane: !1 }
            : !0 === S
            ? { inkBar: !0, tabPane: !0 }
            : Object(l['a'])(
                { inkBar: !0, tabPane: !1 },
                'object' === Object(s['a'])(S) ? S : {},
              );
        var H = Object(r['useState'])(!1),
          G = Object(c['a'])(H, 2),
          z = G[0],
          K = G[1];
        Object(r['useEffect'])(function () {
          K(b());
        }, []);
        var $ = v(
            function () {
              var e;
              return null === (e = B[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: O, defaultValue: E },
          ),
          V = Object(c['a'])($, 2),
          W = V[0],
          X = V[1],
          Y = Object(r['useState'])(function () {
            return B.findIndex(function (e) {
              return e.key === W;
            });
          }),
          q = Object(c['a'])(Y, 2),
          Z = q[0],
          Q = q[1];
        Object(r['useEffect'])(
          function () {
            var e,
              t = B.findIndex(function (e) {
                return e.key === W;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(Z, B.length - 1))),
              X(null === (e = B[t]) || void 0 === e ? void 0 : e.key));
            Q(t);
          },
          [
            B.map(function (e) {
              return e.key;
            }).join('_'),
            W,
            Z,
          ],
        );
        var J = v(null, { value: f }),
          ee = Object(c['a'])(J, 2),
          te = ee[0],
          ne = ee[1],
          re = x;
        function oe(e, t) {
          null === D || void 0 === D || D(e, t),
            X(e),
            null === P || void 0 === P || P(e);
        }
        z && !['left', 'right'].includes(x) && (re = 'top'),
          Object(r['useEffect'])(function () {
            f || (ne('rc-tabs-'.concat(vo)), (vo += 1));
          }, []);
        var ae,
          ie = {
            id: te,
            activeKey: W,
            animated: o,
            tabPosition: re,
            rtl: U,
            mobile: z,
          },
          ce = Object(l['a'])(
            Object(l['a'])({}, ie),
            {},
            {
              editable: w,
              locale: C,
              moreIcon: N,
              moreTransitionName: R,
              tabBarGutter: _,
              onTabClick: oe,
              onTabScroll: L,
              extra: A,
              style: T,
              panes: g,
            },
          );
        return (
          (ae = M ? M(ce, lo) : r['createElement'](lo, ce)),
          r['createElement'](
            eo.Provider,
            { value: { tabs: B, prefixCls: m } },
            r['createElement'](
              'div',
              Object(a['a'])(
                {
                  ref: t,
                  id: f,
                  className: d()(
                    m,
                    ''.concat(m, '-').concat(re),
                    ((n = {}),
                    Object(i['a'])(n, ''.concat(m, '-mobile'), z),
                    Object(i['a'])(n, ''.concat(m, '-editable'), w),
                    Object(i['a'])(n, ''.concat(m, '-rtl'), U),
                    n),
                    h,
                  ),
                },
                F,
              ),
              ae,
              r['createElement'](
                fo,
                Object(a['a'])({ destroyInactiveTabPane: I }, ie, {
                  animated: o,
                }),
              ),
            ),
          )
        );
      }
      var go = r['forwardRef'](ho);
      go.TabPane = po;
      var yo = go,
        Oo = yo,
        Eo = n('9kvl'),
        wo = n('dEAq'),
        ko = n('H1Ra');
      n('RZMt');
      function So(e, t) {
        return Ao(e) || To(e, t) || xo(e, t) || jo();
      }
      function jo() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function xo(e, t) {
        if (e) {
          if ('string' === typeof e) return _o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _o(e, t)
              : void 0
          );
        }
      }
      function _o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function To(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a = [],
            i = !0,
            c = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done); i = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (s) {
            (c = !0), (o = s);
          } finally {
            try {
              i || null == n['return'] || n['return']();
            } finally {
              if (c) throw o;
            }
          }
          return a;
        }
      }
      function Ao(e) {
        if (Array.isArray(e)) return e;
      }
      function Co(e, t) {
        var n,
          r =
            null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r;
      }
      var No = function (e) {
        var t,
          n,
          a,
          i = Object(r['useRef'])(),
          c = Object(r['useContext'])(wo['context']),
          s = c.locale,
          u = Object(wo['useLocaleProps'])(s, e),
          l = Object(wo['useDemoUrl'])(u.identifier),
          f = u.demoUrl || l,
          d =
            (null === Eo['a'] || void 0 === Eo['a']
              ? void 0
              : Eo['a'].location.hash) === '#'.concat(u.identifier),
          p = 1 === Object.keys(u.sources).length,
          b = Object(wo['useCodeSandbox'])(
            (
              null === (t = u.hideActions) || void 0 === t
                ? void 0
                : t.includes('CSB')
            )
              ? null
              : u,
          ),
          v = Object(wo['useRiddle'])(
            (
              null === (n = u.hideActions) || void 0 === n
                ? void 0
                : n.includes('RIDDLE')
            )
              ? null
              : u,
          ),
          m = Object(wo['useMotions'])(u.motions || [], i.current),
          h = So(m, 2),
          g = h[0],
          y = h[1],
          O = Object(wo['useCopy'])(),
          E = So(O, 2),
          w = E[0],
          k = E[1],
          S = Object(r['useState'])(function () {
            return u.sources._ ? '_' : Object.keys(u.sources)[0];
          }),
          j = So(S, 2),
          x = j[0],
          _ = j[1],
          T = Object(r['useState'])(Co(x, u.sources[x])),
          A = So(T, 2),
          C = A[0],
          N = A[1],
          R = Object(r['useState'])(Boolean(u.defaultShowCode)),
          I = So(R, 2),
          M = I[0],
          P = I[1],
          D = Object(r['useState'])(Math.random()),
          L = So(D, 2),
          F = L[0],
          B = L[1],
          U = u.sources[x][C] || u.sources[x].content,
          H = Object(wo['useTSPlaygroundUrl'])(s, U),
          G = Object(r['useRef'])(),
          z = Object(wo['usePrefersColor'])(),
          K = So(z, 1),
          $ = K[0];
        function V(e) {
          _(e), N(Co(e, u.sources[e]));
        }
        return (
          Object(r['useEffect'])(
            function () {
              B(Math.random());
            },
            [$],
          ),
          o.a.createElement(
            'div',
            {
              style: u.style,
              className: [
                u.className,
                '__dumi-default-previewer',
                d ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: u.identifier,
              'data-debug': u.debug || void 0,
              'data-iframe': u.iframe || void 0,
            },
            u.iframe &&
              o.a.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            o.a.createElement(
              'div',
              {
                ref: i,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: u.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    u.compact || (u.iframe && !1 !== u.compact) ? '0' : void 0,
                  background: u.background,
                },
              },
              u.iframe
                ? o.a.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(u.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: F,
                    src: f,
                    ref: G,
                  })
                : u.children,
            ),
            o.a.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': u.title,
              },
              u.title &&
                o.a.createElement(
                  wo['AnchorLink'],
                  { to: '#'.concat(u.identifier) },
                  u.title,
                ),
              u.description &&
                o.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: u.description },
                }),
            ),
            o.a.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              b &&
                o.a.createElement('button', {
                  title: 'Open demo on CodeSandbox.io',
                  className: '__dumi-default-icon',
                  role: 'codesandbox',
                  onClick: b,
                }),
              v &&
                o.a.createElement('button', {
                  title: 'Open demo on Riddle',
                  className: '__dumi-default-icon',
                  role: 'riddle',
                  onClick: v,
                }),
              u.motions &&
                o.a.createElement('button', {
                  title: 'Execute motions',
                  className: '__dumi-default-icon',
                  role: 'motions',
                  disabled: y,
                  onClick: function () {
                    return g();
                  },
                }),
              u.iframe &&
                o.a.createElement('button', {
                  title: 'Reload demo iframe page',
                  className: '__dumi-default-icon',
                  role: 'refresh',
                  onClick: function () {
                    return B(Math.random());
                  },
                }),
              !(null === (a = u.hideActions) || void 0 === a
                ? void 0
                : a.includes('EXTERNAL')) &&
                o.a.createElement(
                  wo['Link'],
                  { target: '_blank', to: f },
                  o.a.createElement('button', {
                    title: 'Open demo in new tab',
                    className: '__dumi-default-icon',
                    role: 'open-demo',
                    type: 'button',
                  }),
                ),
              o.a.createElement('span', null),
              o.a.createElement('button', {
                title: 'Copy source code',
                className: '__dumi-default-icon',
                role: 'copy',
                'data-status': k,
                onClick: function () {
                  return w(U);
                },
              }),
              'tsx' === C &&
                M &&
                o.a.createElement(
                  wo['Link'],
                  { target: '_blank', to: H },
                  o.a.createElement('button', {
                    title: 'Get JSX via TypeScript Playground',
                    className: '__dumi-default-icon',
                    role: 'change-tsx',
                    type: 'button',
                  }),
                ),
              o.a.createElement('button', {
                title: 'Toggle source code panel',
                className: '__dumi-default-icon'.concat(
                  M ? ' __dumi-default-btn-expand' : '',
                ),
                role: 'source',
                type: 'button',
                onClick: function () {
                  return P(!M);
                },
              }),
            ),
            M &&
              o.a.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !p &&
                  o.a.createElement(
                    Oo,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: x,
                      onChange: V,
                    },
                    Object.keys(u.sources).map(function (e) {
                      return o.a.createElement(po, {
                        tab:
                          '_' === e ? 'index.'.concat(Co(e, u.sources[e])) : e,
                        key: e,
                      });
                    }),
                  ),
                o.a.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  o.a.createElement(ko['a'], {
                    code: U,
                    lang: C,
                    showCopy: !1,
                  }),
                ),
              ),
          )
        );
      };
      t['default'] = No;
    },
    a3WO: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    adU4: function (e, t, n) {
      var r = n('y1pI'),
        o = Array.prototype,
        a = o.splice;
      function i(e) {
        var t = this.__data__,
          n = r(t, e);
        if (n < 0) return !1;
        var o = t.length - 1;
        return n == o ? t.pop() : a.call(t, n, 1), --this.size, !0;
      }
      e.exports = i;
    },
    b80T: function (e, t, n) {
      var r = n('UNi/'),
        o = n('03A+'),
        a = n('Z0cm'),
        i = n('DSRE'),
        c = n('wJg7'),
        s = n('c6wG'),
        u = Object.prototype,
        l = u.hasOwnProperty;
      function f(e, t) {
        var n = a(e),
          u = !n && o(e),
          f = !n && !u && i(e),
          d = !n && !u && !f && s(e),
          p = n || u || f || d,
          b = p ? r(e.length, String) : [],
          v = b.length;
        for (var m in e)
          (!t && !l.call(e, m)) ||
            (p &&
              ('length' == m ||
                (f && ('offset' == m || 'parent' == m)) ||
                (d &&
                  ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) ||
                c(m, v))) ||
            b.push(m);
        return b;
      }
      e.exports = f;
    },
    bT9E: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('VTBJ');
      function o(e, t) {
        var n = Object(r['a'])({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
    },
    bdgK: function (e, t, n) {
      'use strict';
      (function (e) {
        var n = (function () {
            if ('undefined' !== typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function (e, r) {
                  return e[0] === t && ((n = r), !0);
                }),
                n
              );
            }
            return (function () {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, 'size', {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function (t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype['delete'] = function (t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var o = r[n];
                    e.call(t, o[1], o[0]);
                  }
                }),
                t
              );
            })();
          })(),
          r =
            'undefined' !== typeof window &&
            'undefined' !== typeof document &&
            window.document === document,
          o = (function () {
            return 'undefined' !== typeof e && e.Math === Math
              ? e
              : 'undefined' !== typeof self && self.Math === Math
              ? self
              : 'undefined' !== typeof window && window.Math === Math
              ? window
              : Function('return this')();
          })(),
          a = (function () {
            return 'function' === typeof requestAnimationFrame
              ? requestAnimationFrame.bind(o)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now());
                  }, 1e3 / 60);
                };
          })(),
          i = 2;
        function c(e, t) {
          var n = !1,
            r = !1,
            o = 0;
          function c() {
            n && ((n = !1), e()), r && u();
          }
          function s() {
            a(c);
          }
          function u() {
            var e = Date.now();
            if (n) {
              if (e - o < i) return;
              r = !0;
            } else (n = !0), (r = !1), setTimeout(s, t);
            o = e;
          }
          return u;
        }
        var s = 20,
          u = [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'height',
            'size',
            'weight',
          ],
          l = 'undefined' !== typeof MutationObserver,
          f = (function () {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = c(this.refresh.bind(this), s));
            }
            return (
              (e.prototype.addObserver = function (e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_();
              }),
              (e.prototype.refresh = function () {
                var e = this.updateObservers_();
                e && this.refresh();
              }),
              (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                  return e.gatherActive(), e.hasActive();
                });
                return (
                  e.forEach(function (e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function () {
                r &&
                  !this.connected_ &&
                  (document.addEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.addEventListener('resize', this.refresh),
                  l
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh,
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        'DOMSubtreeModified',
                        this.refresh,
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function () {
                r &&
                  this.connected_ &&
                  (document.removeEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.removeEventListener('resize', this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      'DOMSubtreeModified',
                      this.refresh,
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                  n = void 0 === t ? '' : t,
                  r = u.some(function (e) {
                    return !!~n.indexOf(e);
                  });
                r && this.refresh();
              }),
              (e.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          d = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var o = r[n];
              Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          p = function (e) {
            var t = e && e.ownerDocument && e.ownerDocument.defaultView;
            return t || o;
          },
          b = S(0, 0, 0, 0);
        function v(e) {
          return parseFloat(e) || 0;
        }
        function m(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function (t, n) {
            var r = e['border-' + n + '-width'];
            return t + v(r);
          }, 0);
        }
        function h(e) {
          for (
            var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t;
            r < o.length;
            r++
          ) {
            var a = o[r],
              i = e['padding-' + a];
            n[a] = v(i);
          }
          return n;
        }
        function g(e) {
          var t = e.getBBox();
          return S(0, 0, t.width, t.height);
        }
        function y(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return b;
          var r = p(e).getComputedStyle(e),
            o = h(r),
            a = o.left + o.right,
            i = o.top + o.bottom,
            c = v(r.width),
            s = v(r.height);
          if (
            ('border-box' === r.boxSizing &&
              (Math.round(c + a) !== t && (c -= m(r, 'left', 'right') + a),
              Math.round(s + i) !== n && (s -= m(r, 'top', 'bottom') + i)),
            !E(e))
          ) {
            var u = Math.round(c + a) - t,
              l = Math.round(s + i) - n;
            1 !== Math.abs(u) && (c -= u), 1 !== Math.abs(l) && (s -= l);
          }
          return S(o.left, o.top, c, s);
        }
        var O = (function () {
          return 'undefined' !== typeof SVGGraphicsElement
            ? function (e) {
                return e instanceof p(e).SVGGraphicsElement;
              }
            : function (e) {
                return (
                  e instanceof p(e).SVGElement &&
                  'function' === typeof e.getBBox
                );
              };
        })();
        function E(e) {
          return e === p(e).document.documentElement;
        }
        function w(e) {
          return r ? (O(e) ? g(e) : y(e)) : b;
        }
        function k(e) {
          var t = e.x,
            n = e.y,
            r = e.width,
            o = e.height,
            a =
              'undefined' !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            i = Object.create(a.prototype);
          return (
            d(i, {
              x: t,
              y: n,
              width: r,
              height: o,
              top: n,
              right: t + r,
              bottom: o + n,
              left: t,
            }),
            i
          );
        }
        function S(e, t, n, r) {
          return { x: e, y: t, width: n, height: r };
        }
        var j = (function () {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = S(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function () {
                var e = w(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          x = (function () {
            function e(e, t) {
              var n = k(t);
              d(this, { target: e, contentRect: n });
            }
            return e;
          })(),
          _ = (function () {
            function e(e, t, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new n()),
                'function' !== typeof e)
              )
                throw new TypeError(
                  'The callback provided as parameter 1 is not a function.',
                );
              (this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = r);
            }
            return (
              (e.prototype.observe = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  );
                if (
                  'undefined' !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof p(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new j(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (e.prototype.unobserve = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  );
                if (
                  'undefined' !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof p(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t['delete'](e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (e.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (e.prototype.gatherActive = function () {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function (t) {
                    t.isActive() && e.activeObservations_.push(t);
                  });
              }),
              (e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function (e) {
                      return new x(e.target, e.broadcastRect());
                    });
                  this.callback_.call(e, t, e), this.clearActive();
                }
              }),
              (e.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              e
            );
          })(),
          T = 'undefined' !== typeof WeakMap ? new WeakMap() : new n(),
          A = (function () {
            function e(t) {
              if (!(this instanceof e))
                throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var n = f.getInstance(),
                r = new _(t, n, this);
              T.set(this, r);
            }
            return e;
          })();
        ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
          A.prototype[e] = function () {
            var t;
            return (t = T.get(this))[e].apply(t, arguments);
          };
        });
        var C = (function () {
          return 'undefined' !== typeof o.ResizeObserver ? o.ResizeObserver : A;
        })();
        t['a'] = C;
      }.call(this, n('IyRk')));
    },
    'c+Xe': function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return a;
      }),
        n.d(t, 'a', function () {
          return i;
        }),
        n.d(t, 'c', function () {
          return c;
        });
      var r = n('U8pU'),
        o = n('TOwV');
      function a(e, t) {
        'function' === typeof e
          ? e(t)
          : 'object' === Object(r['a'])(e) &&
            e &&
            'current' in e &&
            (e.current = t);
      }
      function i() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          t.forEach(function (t) {
            a(t, e);
          });
        };
      }
      function c(e) {
        var t,
          n,
          r = Object(o['isMemo'])(e) ? e.type.type : e.type;
        return (
          !(
            'function' === typeof r &&
            !(null === (t = r.prototype) || void 0 === t ? void 0 : t.render)
          ) &&
          !(
            'function' === typeof e &&
            !(null === (n = e.prototype) || void 0 === n ? void 0 : n.render)
          )
        );
      }
    },
    c6wG: function (e, t, n) {
      var r = n('dD9F'),
        o = n('sEf8'),
        a = n('mdPL'),
        i = a && a.isTypedArray,
        c = i ? o(i) : r;
      e.exports = c;
    },
    cDf5: function (e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? ((e.exports = n =
                function (e) {
                  return typeof e;
                }),
              (e.exports['default'] = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = n =
                function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
              (e.exports['default'] = e.exports),
              (e.exports.__esModule = !0)),
          n(t)
        );
      }
      (e.exports = n),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0);
    },
    dD9F: function (e, t, n) {
      var r = n('NykK'),
        o = n('shjB'),
        a = n('ExA7'),
        i = '[object Arguments]',
        c = '[object Array]',
        s = '[object Boolean]',
        u = '[object Date]',
        l = '[object Error]',
        f = '[object Function]',
        d = '[object Map]',
        p = '[object Number]',
        b = '[object Object]',
        v = '[object RegExp]',
        m = '[object Set]',
        h = '[object String]',
        g = '[object WeakMap]',
        y = '[object ArrayBuffer]',
        O = '[object DataView]',
        E = '[object Float32Array]',
        w = '[object Float64Array]',
        k = '[object Int8Array]',
        S = '[object Int16Array]',
        j = '[object Int32Array]',
        x = '[object Uint8Array]',
        _ = '[object Uint8ClampedArray]',
        T = '[object Uint16Array]',
        A = '[object Uint32Array]',
        C = {};
      function N(e) {
        return a(e) && o(e.length) && !!C[r(e)];
      }
      (C[E] = C[w] = C[k] = C[S] = C[j] = C[x] = C[_] = C[T] = C[A] = !0),
        (C[i] =
          C[c] =
          C[y] =
          C[s] =
          C[O] =
          C[u] =
          C[l] =
          C[f] =
          C[d] =
          C[p] =
          C[b] =
          C[v] =
          C[m] =
          C[h] =
          C[g] =
            !1),
        (e.exports = N);
    },
    e4Nc: function (e, t, n) {
      var r = n('fGT3'),
        o = n('k+1r'),
        a = n('JHgL'),
        i = n('pSRY'),
        c = n('H8j4');
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        this.clear();
        while (++t < n) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype['delete'] = o),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = c),
        (e.exports = s);
    },
    e5cp: function (e, t, n) {
      var r = n('fmRc'),
        o = n('or5M'),
        a = n('HDyB'),
        i = n('seXi'),
        c = n('QqLw'),
        s = n('Z0cm'),
        u = n('DSRE'),
        l = n('c6wG'),
        f = 1,
        d = '[object Arguments]',
        p = '[object Array]',
        b = '[object Object]',
        v = Object.prototype,
        m = v.hasOwnProperty;
      function h(e, t, n, v, h, g) {
        var y = s(e),
          O = s(t),
          E = y ? p : c(e),
          w = O ? p : c(t);
        (E = E == d ? b : E), (w = w == d ? b : w);
        var k = E == b,
          S = w == b,
          j = E == w;
        if (j && u(e)) {
          if (!u(t)) return !1;
          (y = !0), (k = !1);
        }
        if (j && !k)
          return (
            g || (g = new r()),
            y || l(e) ? o(e, t, n, v, h, g) : a(e, t, E, n, v, h, g)
          );
        if (!(n & f)) {
          var x = k && m.call(e, '__wrapped__'),
            _ = S && m.call(t, '__wrapped__');
          if (x || _) {
            var T = x ? e.value() : e,
              A = _ ? t.value() : t;
            return g || (g = new r()), h(T, A, n, v, g);
          }
        }
        return !!j && (g || (g = new r()), i(e, t, n, v, h, g));
      }
      e.exports = h;
    },
    ebwN: function (e, t, n) {
      var r = n('Cwc5'),
        o = n('Kz5y'),
        a = r(o, 'Map');
      e.exports = a;
    },
    ekgI: function (e, t, n) {
      var r = n('YESw'),
        o = Object.prototype,
        a = o.hasOwnProperty;
      function i(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : a.call(t, e);
      }
      e.exports = i;
    },
    fGT3: function (e, t, n) {
      var r = n('4kuk'),
        o = n('Xi7e'),
        a = n('ebwN');
      function i() {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (a || o)(),
            string: new r(),
          });
      }
      e.exports = i;
    },
    'fR/l': function (e, t, n) {
      var r = n('CH3K'),
        o = n('Z0cm');
      function a(e, t, n) {
        var a = t(e);
        return o(e) ? a : r(a, n(e));
      }
      e.exports = a;
    },
    fmRc: function (e, t, n) {
      var r = n('Xi7e'),
        o = n('77Zs'),
        a = n('L8xA'),
        i = n('gCq4'),
        c = n('VaNO'),
        s = n('0Cz8');
      function u(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (u.prototype.clear = o),
        (u.prototype['delete'] = a),
        (u.prototype.get = i),
        (u.prototype.has = c),
        (u.prototype.set = s),
        (e.exports = u);
    },
    foS9: function (e, t, n) {},
    ftKO: function (e, t) {
      var n = '__lodash_hash_undefined__';
      function r(e) {
        return this.__data__.set(e, n), this;
      }
      e.exports = r;
    },
    gCq4: function (e, t) {
      function n(e) {
        return this.__data__.get(e);
      }
      e.exports = n;
    },
    'hOG+': function (e, t) {
      (function (t) {
        e.exports = (function () {
          var e = {
              311: function (e) {
                e.exports = function (e) {
                  return (
                    e.webpackPolyfill ||
                      ((e.deprecate = function () {}),
                      (e.paths = []),
                      e.children || (e.children = []),
                      Object.defineProperty(e, 'loaded', {
                        enumerable: !0,
                        get: function () {
                          return e.l;
                        },
                      }),
                      Object.defineProperty(e, 'id', {
                        enumerable: !0,
                        get: function () {
                          return e.i;
                        },
                      }),
                      (e.webpackPolyfill = 1)),
                    e
                  );
                };
              },
            },
            n = {};
          function r(t) {
            if (n[t]) return n[t].exports;
            var o = (n[t] = { exports: {} }),
              a = !0;
            try {
              e[t](o, o.exports, r), (a = !1);
            } finally {
              a && delete n[t];
            }
            return o.exports;
          }
          return (r.ab = t + '/'), r(311);
        })();
      }.call(this, '/'));
    },
    'k+1r': function (e, t, n) {
      var r = n('QkVE');
      function o(e) {
        var t = r(this, e)['delete'](e);
        return (this.size -= t ? 1 : 0), t;
      }
      e.exports = o;
    },
    kekF: function (e, t) {
      function n(e, t) {
        return function (n) {
          return e(t(n));
        };
      }
      e.exports = n;
    },
    lSCD: function (e, t, n) {
      var r = n('NykK'),
        o = n('GoyQ'),
        a = '[object AsyncFunction]',
        i = '[object Function]',
        c = '[object GeneratorFunction]',
        s = '[object Proxy]';
      function u(e) {
        if (!o(e)) return !1;
        var t = r(e);
        return t == i || t == c || t == a || t == s;
      }
      e.exports = u;
    },
    ljhN: function (e, t) {
      function n(e, t) {
        return e === t || (e !== e && t !== t);
      }
      e.exports = n;
    },
    'm+aA': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('driF'),
        o = n.n(r);
      function a(e) {
        return e instanceof HTMLElement ? e : o.a.findDOMNode(e);
      }
    },
    mdPL: function (e, t, n) {
      (function (e) {
        var r = n('WFqU'),
          o = t && !t.nodeType && t,
          a = o && 'object' == typeof e && e && !e.nodeType && e,
          i = a && a.exports === o,
          c = i && r.process,
          s = (function () {
            try {
              var e = a && a.require && a.require('util').types;
              return e || (c && c.binding && c.binding('util'));
            } catch (t) {}
          })();
        e.exports = s;
      }.call(this, n('hOG+')(e)));
    },
    nmnc: function (e, t, n) {
      var r = n('Kz5y'),
        o = r.Symbol;
      e.exports = o;
    },
    o0o1: function (e, t, n) {
      e.exports = n('97ZR');
    },
    or5M: function (e, t, n) {
      var r = n('1hJj'),
        o = n('QoRX'),
        a = n('xYSL'),
        i = 1,
        c = 2;
      function s(e, t, n, s, u, l) {
        var f = n & i,
          d = e.length,
          p = t.length;
        if (d != p && !(f && p > d)) return !1;
        var b = l.get(e),
          v = l.get(t);
        if (b && v) return b == t && v == e;
        var m = -1,
          h = !0,
          g = n & c ? new r() : void 0;
        l.set(e, t), l.set(t, e);
        while (++m < d) {
          var y = e[m],
            O = t[m];
          if (s) var E = f ? s(O, y, m, t, e, l) : s(y, O, m, e, t, l);
          if (void 0 !== E) {
            if (E) continue;
            h = !1;
            break;
          }
          if (g) {
            if (
              !o(t, function (e, t) {
                if (!a(g, t) && (y === e || u(y, e, n, s, l))) return g.push(t);
              })
            ) {
              h = !1;
              break;
            }
          } else if (y !== O && !u(y, O, n, s, l)) {
            h = !1;
            break;
          }
        }
        return l['delete'](e), l['delete'](t), h;
      }
      e.exports = s;
    },
    pSRY: function (e, t, n) {
      var r = n('QkVE');
      function o(e) {
        return r(this, e).has(e);
      }
      e.exports = o;
    },
    qHiR: function (e, t, n) {},
    qZTm: function (e, t, n) {
      var r = n('fR/l'),
        o = n('MvSz'),
        a = n('7GkX');
      function i(e) {
        return r(e, a, o);
      }
      e.exports = i;
    },
    rEGp: function (e, t) {
      function n(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      }
      e.exports = n;
    },
    rePB: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    sEf8: function (e, t) {
      function n(e) {
        return function (t) {
          return e(t);
        };
      }
      e.exports = n;
    },
    seXi: function (e, t, n) {
      var r = n('qZTm'),
        o = 1,
        a = Object.prototype,
        i = a.hasOwnProperty;
      function c(e, t, n, a, c, s) {
        var u = n & o,
          l = r(e),
          f = l.length,
          d = r(t),
          p = d.length;
        if (f != p && !u) return !1;
        var b = f;
        while (b--) {
          var v = l[b];
          if (!(u ? v in t : i.call(t, v))) return !1;
        }
        var m = s.get(e),
          h = s.get(t);
        if (m && h) return m == t && h == e;
        var g = !0;
        s.set(e, t), s.set(t, e);
        var y = u;
        while (++b < f) {
          v = l[b];
          var O = e[v],
            E = t[v];
          if (a) var w = u ? a(E, O, v, t, e, s) : a(O, E, v, e, t, s);
          if (!(void 0 === w ? O === E || c(O, E, n, a, s) : w)) {
            g = !1;
            break;
          }
          y || (y = 'constructor' == v);
        }
        if (g && !y) {
          var k = e.constructor,
            S = t.constructor;
          k == S ||
            !('constructor' in e) ||
            !('constructor' in t) ||
            ('function' == typeof k &&
              k instanceof k &&
              'function' == typeof S &&
              S instanceof S) ||
            (g = !1);
        }
        return s['delete'](e), s['delete'](t), g;
      }
      e.exports = c;
    },
    shjB: function (e, t) {
      var n = 9007199254740991;
      function r(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= n;
      }
      e.exports = r;
    },
    t23M: function (e, t, n) {
      'use strict';
      var r = n('wx14'),
        o = n('q1tI'),
        a = n('Zm9Q'),
        i = (n('Kwbf'), n('VTBJ')),
        c = n('c+Xe'),
        s = n('m+aA'),
        u = n('bdgK'),
        l = new Map();
      function f(e) {
        e.forEach(function (e) {
          var t,
            n = e.target;
          null === (t = l.get(n)) ||
            void 0 === t ||
            t.forEach(function (e) {
              return e(n);
            });
        });
      }
      var d = new u['a'](f);
      function p(e, t) {
        l.has(e) || (l.set(e, new Set()), d.observe(e)), l.get(e).add(t);
      }
      function b(e, t) {
        l.has(e) &&
          (l.get(e)['delete'](t),
          l.get(e).size || (d.unobserve(e), l['delete'](e)));
      }
      var v = n('1OyB'),
        m = n('vuIU'),
        h = n('Ji7U'),
        g = n('LK+K'),
        y = (function (e) {
          Object(h['a'])(n, e);
          var t = Object(g['a'])(n);
          function n() {
            return Object(v['a'])(this, n), t.apply(this, arguments);
          }
          return (
            Object(m['a'])(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(o['Component']),
        O = o['createContext'](null);
      function E(e) {
        var t = e.children,
          n = e.onBatchResize,
          r = o['useRef'](0),
          a = o['useRef']([]),
          i = o['useContext'](O),
          c = o['useCallback'](
            function (e, t, o) {
              r.current += 1;
              var c = r.current;
              a.current.push({ size: e, element: t, data: o }),
                Promise.resolve().then(function () {
                  c === r.current &&
                    (null === n || void 0 === n || n(a.current),
                    (a.current = []));
                }),
                null === i || void 0 === i || i(e, t, o);
            },
            [n, i],
          );
        return o['createElement'](O.Provider, { value: c }, t);
      }
      function w(e) {
        var t = e.children,
          n = e.disabled,
          r = o['useRef'](null),
          a = o['useRef'](null),
          u = o['useContext'](O),
          l = o['useRef']({
            width: 0,
            height: 0,
            offsetWidth: 0,
            offsetHeight: 0,
          }),
          f = o['isValidElement'](t) && Object(c['c'])(t),
          d = f ? t.ref : null,
          v = o['useMemo'](
            function () {
              return Object(c['a'])(d, r);
            },
            [d, r],
          ),
          m = o['useRef'](e);
        m.current = e;
        var h = o['useCallback'](function (e) {
          var t = m.current,
            n = t.onResize,
            r = t.data,
            o = e.getBoundingClientRect(),
            a = o.width,
            c = o.height,
            s = e.offsetWidth,
            f = e.offsetHeight,
            d = Math.floor(a),
            p = Math.floor(c);
          if (
            l.current.width !== d ||
            l.current.height !== p ||
            l.current.offsetWidth !== s ||
            l.current.offsetHeight !== f
          ) {
            var b = { width: d, height: p, offsetWidth: s, offsetHeight: f };
            l.current = b;
            var v = s === Math.round(a) ? a : s,
              h = f === Math.round(c) ? c : f,
              g = Object(i['a'])(
                Object(i['a'])({}, b),
                {},
                { offsetWidth: v, offsetHeight: h },
              );
            null === u || void 0 === u || u(g, e, r),
              n &&
                Promise.resolve().then(function () {
                  n(g, e);
                });
          }
        }, []);
        return (
          o['useEffect'](
            function () {
              var e = Object(s['a'])(r.current) || Object(s['a'])(a.current);
              return (
                e && !n && p(e, h),
                function () {
                  return b(e, h);
                }
              );
            },
            [r.current, n],
          ),
          o['createElement'](
            y,
            { ref: a },
            f ? o['cloneElement'](t, { ref: v }) : t,
          )
        );
      }
      var k = 'rc-observer-key';
      function S(e) {
        var t = e.children,
          n = Object(a['a'])(t);
        return n.map(function (t, n) {
          var a =
            (null === t || void 0 === t ? void 0 : t.key) ||
            ''.concat(k, '-').concat(n);
          return o['createElement'](w, Object(r['a'])({}, e, { key: a }), t);
        });
      }
      S.Collection = E;
      t['a'] = S;
    },
    tMB7: function (e, t, n) {
      var r = n('y1pI');
      function o(e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      }
      e.exports = o;
    },
    tadb: function (e, t, n) {
      var r = n('Cwc5'),
        o = n('Kz5y'),
        a = r(o, 'DataView');
      e.exports = a;
    },
    u8Dt: function (e, t, n) {
      var r = n('YESw'),
        o = '__lodash_hash_undefined__',
        a = Object.prototype,
        i = a.hasOwnProperty;
      function c(e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return n === o ? void 0 : n;
        }
        return i.call(t, e) ? t[e] : void 0;
      }
      e.exports = c;
    },
    vuIU: function (e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    'wF/u': function (e, t, n) {
      var r = n('e5cp'),
        o = n('ExA7');
      function a(e, t, n, i, c) {
        return (
          e === t ||
          (null == e || null == t || (!o(e) && !o(t))
            ? e !== e && t !== t
            : r(e, t, n, i, a, c))
        );
      }
      e.exports = a;
    },
    wJg7: function (e, t) {
      var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
      function o(e, t) {
        var o = typeof e;
        return (
          (t = null == t ? n : t),
          !!t &&
            ('number' == o || ('symbol' != o && r.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
        );
      }
      e.exports = o;
    },
    wgJM: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = function (e) {
          return +setTimeout(e, 16);
        },
        o = function (e) {
          return clearTimeout(e);
        };
      'undefined' !== typeof window &&
        'requestAnimationFrame' in window &&
        ((r = function (e) {
          return window.requestAnimationFrame(e);
        }),
        (o = function (e) {
          return window.cancelAnimationFrame(e);
        }));
      var a = 0,
        i = new Map();
      function c(e) {
        i['delete'](e);
      }
      function s(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        a += 1;
        var n = a;
        function o(t) {
          if (0 === t) c(n), e();
          else {
            var a = r(function () {
              o(t - 1);
            });
            i.set(n, a);
          }
        }
        return o(t), n;
      }
      s.cancel = function (e) {
        var t = i.get(e);
        return c(t), o(t);
      };
    },
    xYSL: function (e, t) {
      function n(e, t) {
        return e.has(t);
      }
      e.exports = n;
    },
    y1pI: function (e, t, n) {
      var r = n('ljhN');
      function o(e, t) {
        var n = e.length;
        while (n--) if (r(e[n][0], t)) return n;
        return -1;
      }
      e.exports = o;
    },
    yGk4: function (e, t, n) {
      var r = n('Cwc5'),
        o = n('Kz5y'),
        a = r(o, 'Set');
      e.exports = a;
    },
  },
]);
