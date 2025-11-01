(() => {
  "use strict";
  var n = {
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, s = [], i = 0; i < n.length; i++) {
            var c = n[i],
              u = r.base ? c[0] + r.base : c[0],
              d = a[u] || 0,
              l = "".concat(u, " ").concat(d);
            a[u] = d + 1;
            var p = t(l),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var A = o(f, r);
              (r.byIndex = i),
                e.splice(i, 0, { identifier: l, updater: A, references: 1 });
            }
            s.push(l);
          }
          return s;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var s = 0; s < a.length; s++) {
              var i = t(a[s]);
              e[i].references--;
            }
            for (var c = r(n, o), u = 0; u < a.length; u++) {
              var d = t(a[u]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = c;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      208: (n, e, t) => {
        t.d(e, { A: () => i });
        var r = t(354),
          o = t.n(r),
          a = t(314),
          s = t.n(a)()(o());
        s.push([
          n.id,
          "body {\n  font-family: sans-serif;\n  text-align: center;\n  background: #f4f6f8;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  margin-top: 20px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n  gap: 2px;\n}\n\n.cell {\n  width: 30px;\n  height: 30px;\n  background: #e0e0e0;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.cell.ship {\n  background: #a0c4ff;\n}\n\n.cell.hit {\n  background: #ff4d4d;\n}\n\n.cell.miss {\n  background: #ccc;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB",
            sourcesContent: [
              "body {\n  font-family: sans-serif;\n  text-align: center;\n  background: #f4f6f8;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  margin-top: 20px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n  gap: 2px;\n}\n\n.cell {\n  width: 30px;\n  height: 30px;\n  background: #e0e0e0;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.cell.ship {\n  background: #a0c4ff;\n}\n\n.cell.hit {\n  background: #ff4d4d;\n}\n\n.cell.miss {\n  background: #ccc;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const i = s;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var s = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (s[c] = !0);
                }
              for (var u = 0; u < n.length; u++) {
                var d = [].concat(n[u]);
                (r && s[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      354: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              a = "/*# ".concat(o, " */");
            return [e].concat([a]).join("\n");
          }
          return [e].join("\n");
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0);
  var r = t(72),
    o = t.n(r),
    a = t(825),
    s = t.n(a),
    i = t(659),
    c = t.n(i),
    u = t(56),
    d = t.n(u),
    l = t(540),
    p = t.n(l),
    f = t(113),
    A = t.n(f),
    m = t(208),
    h = {};
  function g(n) {
    let e = 0;
    return {
      length: n,
      hit: function () {
        e++;
      },
      isSunk: function () {
        return e >= n;
      },
    };
  }
  function v(n = 10) {
    const e = [],
      t = [],
      r = [],
      o = ([n, e]) => `${n},${e}`;
    function a([e, t]) {
      return e >= 0 && e < n && t >= 0 && t < n;
    }
    function s(n, t) {
      if (!Array.isArray(t) || t.length !== n) return !1;
      for (const n of t) {
        if (!a(n)) return !1;
        if (
          e.some(({ coordinates: e }) =>
            e.some(([e, t]) => e === n[0] && t === n[1])
          )
        )
          return !1;
      }
      return !0;
    }
    function i(n, t) {
      return (
        !!s(n.length, t) &&
        (e.push({ ship: n, coordinates: t.map((n) => [n[0], n[1]]) }), !0)
      );
    }
    function c([n, e], t, r) {
      return Array.from({ length: t }, (t, o) =>
        "H" === r ? [n + o, e] : [n, e + o]
      );
    }
    return {
      placeShip: i,
      receiveAttack: function (n) {
        const a = o(n);
        if (r.includes(a) || t.some((n) => o(n) === a)) return "repeat";
        for (const t of e) {
          const { ship: e, coordinates: o } = t;
          if (o.some(([e, t]) => e === n[0] && t === n[1]))
            return e.hit(), r.push(a), "hit";
        }
        return t.push(n), "miss";
      },
      allSunk: function () {
        return e.length > 0 && e.every(({ ship: n }) => n.isSunk());
      },
      ships: e,
      missedShots: t,
      randomizeShips: function (o = [5, 4, 3, 3, 2]) {
        (e.length = 0), (t.length = 0), (r.length = 0);
        for (const e of o) {
          let t = !1,
            r = 0;
          for (; !t && r < 200; ) {
            r++;
            const o = Math.random() < 0.5 ? "H" : "V",
              a = c(
                [
                  Math.floor(Math.random() * (n - ("H" === o ? e : 1))),
                  Math.floor(Math.random() * (n - ("V" === o ? e : 1))),
                ],
                e,
                o
              );
            s(e, a) && (i(g(e), a), (t = !0));
          }
        }
      },
      isAlreadyHit: function (n) {
        const e = o(n);
        return r.includes(e) || t.some((n) => o(n) === e);
      },
    };
  }
  function y(n, e = !1) {
    const t = new Set();
    return {
      name: n,
      isComputer: e,
      attack: function (n, e) {
        return n.receiveAttack(e);
      },
      getRandomAttack: function (n) {
        let e, r;
        do {
          (e = Math.floor(10 * Math.random())),
            (r = Math.floor(10 * Math.random()));
        } while (t.has(`${e},${r}`) || n.isAlreadyHit([e, r]));
        return t.add(`${e},${r}`), [e, r];
      },
    };
  }
  (h.styleTagTransform = A()),
    (h.setAttributes = d()),
    (h.insert = c().bind(null, "head")),
    (h.domAPI = s()),
    (h.insertStyleElement = p()),
    o()(m.A, h),
    m.A && m.A.locals && m.A.locals;
  const C = (() => {
      function n(n, e, t = !1) {
        const r = document.getElementById(e);
        r.innerHTML = "";
        for (let e = 0; e < 10; e++)
          for (let o = 0; o < 10; o++) {
            const a = document.createElement("div");
            a.classList.add("cell"), (a.dataset.coord = `${o},${e}`);
            const s = n.hits?.includes?.(`${o},${e}`),
              i = n.missedShots.some(([n, t]) => n === o && t === e);
            n.ships.some(({ coordinates: n }) =>
              n.some(([n, t]) => n === o && t === e)
            ) &&
              !t &&
              a.classList.add("ship"),
              s && a.classList.add("hit"),
              i && a.classList.add("miss"),
              r.appendChild(a);
          }
      }
      return {
        renderBoards: function (e, t) {
          n(e, "player-board", !1), n(t, "computer-board", !0);
        },
        updateMessage: function (n) {
          document.getElementById("message").textContent = n;
        },
      };
    })(),
    b = C,
    E = y("You"),
    B = y("Computer", !0),
    x = v(),
    k = v();
  function M() {
    const n = B.getRandomAttack(x);
    if ((x.receiveAttack(n), b.renderBoards(x, k), x.allSunk()))
      return b.updateMessage("💀 Computer wins!"), void S();
    b.updateMessage("Your turn!");
  }
  function S() {
    document.getElementById("computer-board").style.pointerEvents = "none";
  }
  x.randomizeShips(),
    k.randomizeShips(),
    b.renderBoards(x, k),
    b.updateMessage("Your turn!"),
    document.getElementById("computer-board").addEventListener("click", (n) => {
      const e = n.target;
      if (!e.classList.contains("cell")) return;
      const t = e.dataset.coord.split(",").map(Number);
      if (!k.isAlreadyHit(t)) {
        if ((E.attack(k, t), b.renderBoards(x, k), k.allSunk()))
          return b.updateMessage("🎉 You win!"), void S();
        b.updateMessage("🤖 Computer's turn..."), setTimeout(M, 700);
      }
    });
})();
//# sourceMappingURL=main.js.map
