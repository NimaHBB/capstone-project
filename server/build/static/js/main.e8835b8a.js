/*! For license information please see main.e8835b8a.js.LICENSE.txt */
!(function () {
  var e = {
      757: function (e, t, n) {
        e.exports = n(727);
      },
      110: function (e, t, n) {
        "use strict";
        var r = n(309),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          o = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          u = {};
        function s(e) {
          return r.isMemo(e) ? o : u[e.$$typeof] || a;
        }
        (u[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (u[r.Memo] = o);
        var l = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var a = p(n);
              a && a !== h && e(t, a, r);
            }
            var o = c(n);
            f && (o = o.concat(f(n)));
            for (var u = s(t), v = s(n), m = 0; m < o.length; ++m) {
              var g = o[m];
              if (!i[g] && (!r || !r[g]) && (!v || !v[g]) && (!u || !u[g])) {
                var y = d(n, g);
                try {
                  l(t, g, y);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      746: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          a = n ? Symbol.for("react.portal") : 60106,
          i = n ? Symbol.for("react.fragment") : 60107,
          o = n ? Symbol.for("react.strict_mode") : 60108,
          u = n ? Symbol.for("react.profiler") : 60114,
          s = n ? Symbol.for("react.provider") : 60109,
          l = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          v = n ? Symbol.for("react.memo") : 60115,
          m = n ? Symbol.for("react.lazy") : 60116,
          g = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          k = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case i:
                  case u:
                  case o:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case d:
                      case m:
                      case v:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function S(e) {
          return w(e) === f;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = l),
          (t.ContextProvider = s),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = i),
          (t.Lazy = m),
          (t.Memo = v),
          (t.Portal = a),
          (t.Profiler = u),
          (t.StrictMode = o),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return S(e) || w(e) === c;
          }),
          (t.isConcurrentMode = S),
          (t.isContextConsumer = function (e) {
            return w(e) === l;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === d;
          }),
          (t.isFragment = function (e) {
            return w(e) === i;
          }),
          (t.isLazy = function (e) {
            return w(e) === m;
          }),
          (t.isMemo = function (e) {
            return w(e) === v;
          }),
          (t.isPortal = function (e) {
            return w(e) === a;
          }),
          (t.isProfiler = function (e) {
            return w(e) === u;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === o;
          }),
          (t.isSuspense = function (e) {
            return w(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === i ||
              e === f ||
              e === u ||
              e === o ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === v ||
                  e.$$typeof === s ||
                  e.$$typeof === l ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === k ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = w);
      },
      309: function (e, t, n) {
        "use strict";
        e.exports = n(746);
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          u = {};
        function s(e, t) {
          l(e, t), l(e + "Capture", t);
        }
        function l(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          I = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          j = Object.assign;
        function F(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var z = !1;
        function U(e, t) {
          if (!e || z) return "";
          z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var r = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  r = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                r = l;
              }
              e();
            }
          } catch (l) {
            if (l && r && "string" === typeof l.stack) {
              for (
                var a = l.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  u = i.length - 1;
                1 <= o && 0 <= u && a[o] !== i[u];

              )
                u--;
              for (; 1 <= o && 0 <= u; o--, u--)
                if (a[o] !== i[u]) {
                  if (1 !== o || 1 !== u)
                    do {
                      if ((o--, 0 > --u || a[o] !== i[u])) {
                        var s = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= u);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case S:
              return "Portal";
            case E:
              return "Profiler";
            case _:
              return "StrictMode";
            case P:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case I:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function B(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return j({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return j({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ie(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ue(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ue(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var le,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (le = le || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = le.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = j(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var ke = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          xe = null,
          _e = null;
        function Ee(e) {
          if ((e = ma(e))) {
            if ("function" !== typeof Se) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = ya(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          xe ? (_e ? _e.push(e) : (_e = [e])) : (xe = e);
        }
        function Ie() {
          if (xe) {
            var e = xe,
              t = _e;
            if (((_e = xe = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Pe() {}
        var Oe = !1;
        function Ne(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Te(e, t, n);
          } finally {
            (Oe = !1), (null !== xe || null !== _e) && (Pe(), Ie());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ya(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ce) {
            Ae = !1;
          }
        function De(e, t, n, r, a, i, o, u, s) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, l);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          je = null,
          Fe = !1,
          ze = null,
          Ue = {
            onError: function (e) {
              (Me = !0), (je = e);
            },
          };
        function Ve(e, t, n, r, a, i, o, u, s) {
          (Me = !1), (je = null), De.apply(Ue, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (He(e) !== e) throw Error(i(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return We(a), e;
                    if (o === r) return We(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var u = !1, s = a.child; s; ) {
                    if (s === n) {
                      (u = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (u = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!u) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (u = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (u = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!u) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Je = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ut(e) / st) | 0)) | 0;
              },
          ut = Math.log,
          st = Math.LN2;
        var lt = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var u = o & ~a;
            0 !== u ? (r = ft(u)) : 0 !== (i &= o) && (r = ft(i));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== i && (r = ft(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function mt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var yt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          wt,
          St,
          xt,
          _t,
          Et = !1,
          Ct = [],
          It = null,
          Tt = null,
          Pt = null,
          Ot = new Map(),
          Nt = new Map(),
          Rt = [],
          At =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Lt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              It = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ma(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Be(n)))
                  return (
                    (e.blockedOn = t),
                    void _t(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function jt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ma(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (ke = r), n.target.dispatchEvent(r), (ke = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          jt(e) && n.delete(t);
        }
        function zt() {
          (Et = !1),
            null !== It && jt(It) && (It = null),
            null !== Tt && jt(Tt) && (Tt = null),
            null !== Pt && jt(Pt) && (Pt = null),
            Ot.forEach(Ft),
            Nt.forEach(Ft);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function Vt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Ct.length) {
            Ut(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== It && Ut(It, e),
              null !== Tt && Ut(Tt, e),
              null !== Pt && Ut(Pt, e),
              Ot.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            Mt(n), null === n.blockedOn && Rt.shift();
        }
        var Ht = k.ReactCurrentBatchConfig;
        function Bt(e, t, n, r) {
          var a = yt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (yt = 1), $t(e, t, n, r);
          } finally {
            (yt = a), (Ht.transition = i);
          }
        }
        function Wt(e, t, n, r) {
          var a = yt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (yt = 4), $t(e, t, n, r);
          } finally {
            (yt = a), (Ht.transition = i);
          }
        }
        function $t(e, t, n, r) {
          var a = qt(e, t, n, r);
          if (null === a) Hr(e, t, r, Kt, n), Lt(e, r);
          else if (
            (function (e, t, n, r, a) {
              switch (t) {
                case "focusin":
                  return (It = Dt(It, e, t, n, r, a)), !0;
                case "dragenter":
                  return (Tt = Dt(Tt, e, t, n, r, a)), !0;
                case "mouseover":
                  return (Pt = Dt(Pt, e, t, n, r, a)), !0;
                case "pointerover":
                  var i = a.pointerId;
                  return Ot.set(i, Dt(Ot.get(i) || null, e, t, n, r, a)), !0;
                case "gotpointercapture":
                  return (
                    (i = a.pointerId),
                    Nt.set(i, Dt(Nt.get(i) || null, e, t, n, r, a)),
                    !0
                  );
              }
              return !1;
            })(a, e, t, n, r)
          )
            r.stopPropagation();
          else if ((Lt(e, r), 4 & t && -1 < At.indexOf(e))) {
            for (; null !== a; ) {
              var i = ma(a);
              if (
                (null !== i && kt(i),
                null === (i = qt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                i === a)
              )
                break;
              a = i;
            }
            null !== a && r.stopPropagation();
          } else Hr(e, t, r, null, n);
        }
        var Kt = null;
        function qt(e, t, n, r) {
          if (((Kt = null), null !== (e = va((e = we(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Be(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Qt = null,
          Yt = null,
          Jt = null;
        function Xt() {
          if (Jt) return Jt;
          var e,
            t,
            n = Yt,
            r = n.length,
            a = "value" in Qt ? Qt.value : Qt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Zt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function en() {
          return !0;
        }
        function tn() {
          return !1;
        }
        function nn(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? en
                : tn),
              (this.isPropagationStopped = tn),
              this
            );
          }
          return (
            j(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = en));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = en));
              },
              persist: function () {},
              isPersistent: en,
            }),
            t
          );
        }
        var rn,
          an,
          on,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = nn(un),
          ln = j({}, un, { view: 0, detail: 0 }),
          cn = nn(ln),
          fn = j({}, ln, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: xn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== on &&
                    (on && "mousemove" === e.type
                      ? ((rn = e.screenX - on.screenX),
                        (an = e.screenY - on.screenY))
                      : (an = rn = 0),
                    (on = e)),
                  rn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : an;
            },
          }),
          dn = nn(fn),
          pn = nn(j({}, fn, { dataTransfer: 0 })),
          hn = nn(j({}, ln, { relatedTarget: 0 })),
          vn = nn(
            j({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          mn = j({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          gn = nn(mn),
          yn = nn(j({}, un, { data: 0 })),
          bn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          wn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = wn[e]) && !!t[e];
        }
        function xn() {
          return Sn;
        }
        var _n = j({}, ln, {
            key: function (e) {
              if (e.key) {
                var t = bn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = Zt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: xn,
            charCode: function (e) {
              return "keypress" === e.type ? Zt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? Zt(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          En = nn(_n),
          Cn = nn(
            j({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          In = nn(
            j({}, ln, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xn,
            })
          ),
          Tn = nn(
            j({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = j({}, fn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = nn(Pn),
          Nn = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var Ln = c && "TextEvent" in window && !An,
          Dn = c && (!Rn || (An && 8 < An && 11 >= An)),
          Mn = String.fromCharCode(32),
          jn = !1;
        function Fn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Nn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function zn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Bn(e, t, n, r) {
          Ce(r),
            0 < (t = Wr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Wn = null,
          $n = null;
        function Kn(e) {
          Mr(e, 0);
        }
        function qn(e) {
          if (q(ga(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Qn = !1;
        if (c) {
          var Yn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var Xn = document.createElement("div");
              Xn.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof Xn.oninput);
            }
            Yn = Jn;
          } else Yn = !1;
          Qn = Yn && (!document.documentMode || 9 < document.documentMode);
        }
        function Zn() {
          Wn && (Wn.detachEvent("onpropertychange", er), ($n = Wn = null));
        }
        function er(e) {
          if ("value" === e.propertyName && qn($n)) {
            var t = [];
            Bn(t, $n, e, we(e)), Ne(Kn, t);
          }
        }
        function tr(e, t, n) {
          "focusin" === e
            ? (Zn(), ($n = n), (Wn = t).attachEvent("onpropertychange", er))
            : "focusout" === e && Zn();
        }
        function nr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qn($n);
        }
        function rr(e, t) {
          if ("click" === e) return qn(t);
        }
        function ar(e, t) {
          if ("input" === e || "change" === e) return qn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function or(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function lr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? lr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function cr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function dr(e) {
          var t = cr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            lr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && fr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = sr(n, i));
                var o = sr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var pr = c && "documentMode" in document && 11 >= document.documentMode,
          hr = null,
          vr = null,
          mr = null,
          gr = !1;
        function yr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          gr ||
            null == hr ||
            hr !== G(r) ||
            ("selectionStart" in (r = hr) && fr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (mr && or(mr, r)) ||
              ((mr = r),
              0 < (r = Wr(vr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = hr))));
        }
        function br(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: br("Animation", "AnimationEnd"),
            animationiteration: br("Animation", "AnimationIteration"),
            animationstart: br("Animation", "AnimationStart"),
            transitionend: br("Transition", "TransitionEnd"),
          },
          wr = {},
          Sr = {};
        function xr(e) {
          if (wr[e]) return wr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (wr[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var _r = xr("animationend"),
          Er = xr("animationiteration"),
          Cr = xr("animationstart"),
          Ir = xr("transitionend"),
          Tr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Or(e, t) {
          Tr.set(e, t), s(t, [e]);
        }
        for (var Nr = 0; Nr < Pr.length; Nr++) {
          var Rr = Pr[Nr];
          Or(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Or(_r, "onAnimationEnd"),
          Or(Er, "onAnimationIteration"),
          Or(Cr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Ir, "onTransitionEnd"),
          l("onMouseEnter", ["mouseout", "mouseover"]),
          l("onMouseLeave", ["mouseout", "mouseover"]),
          l("onPointerEnter", ["pointerout", "pointerover"]),
          l("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Lr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, u, s, l) {
              if ((Ve.apply(this, arguments), Me)) {
                if (!Me) throw Error(i(198));
                var c = je;
                (Me = !1), (je = null), Fe || ((Fe = !0), (ze = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var u = r[o],
                    s = u.instance,
                    l = u.currentTarget;
                  if (((u = u.listener), s !== i && a.isPropagationStopped()))
                    break e;
                  Dr(a, u, l), (i = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (u = r[o]).instance),
                    (l = u.currentTarget),
                    (u = u.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, u, l), (i = s);
                }
            }
          }
          if (Fe) throw ((e = ze), (Fe = !1), (ze = null), e);
        }
        function jr(e, t) {
          var n = t[da];
          void 0 === n && (n = t[da] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var zr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[zr]) {
            (e[zr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Lr.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[zr] || ((t[zr] = !0), Fr("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = Bt;
              break;
            case 4:
              a = Wt;
              break;
            default:
              a = $t;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var u = r.stateNode.containerInfo;
                if (u === a || (8 === u.nodeType && u.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== u; ) {
                  if (null === (o = va(u))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = i = o;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = i,
              a = we(n),
              o = [];
            e: {
              var u = Tr.get(e);
              if (void 0 !== u) {
                var s = sn,
                  l = e;
                switch (e) {
                  case "keypress":
                    if (0 === Zt(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = En;
                    break;
                  case "focusin":
                    (l = "focus"), (s = hn);
                    break;
                  case "focusout":
                    (l = "blur"), (s = hn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = hn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = dn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = pn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = In;
                    break;
                  case _r:
                  case Er:
                  case Cr:
                    s = vn;
                    break;
                  case Ir:
                    s = Tn;
                    break;
                  case "scroll":
                    s = cn;
                    break;
                  case "wheel":
                    s = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = gn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Cn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== u ? u + "Capture" : null) : u;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Re(h, d)) &&
                        c.push(Br(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((u = new s(u, l, null, n, a)),
                  o.push({ event: u, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  n === ke ||
                  !(l = n.relatedTarget || n.fromElement) ||
                  (!va(l) && !l[fa])) &&
                  (s || u) &&
                  ((u =
                    a.window === a
                      ? a
                      : (u = a.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (l = (l = n.relatedTarget || n.toElement)
                          ? va(l)
                          : null) &&
                        (l !== (f = He(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                        (l = null))
                    : ((s = null), (l = r)),
                  s !== l))
              ) {
                if (
                  ((c = dn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Cn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? u : ga(s)),
                  (p = null == l ? u : ga(l)),
                  ((u = new c(v, h + "leave", s, n, a)).target = f),
                  (u.relatedTarget = p),
                  (v = null),
                  va(a) === r &&
                    (((c = new c(d, h + "enter", l, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && l)
                )
                  e: {
                    for (d = l, h = 0, p = c = s; p; p = $r(p)) h++;
                    for (p = 0, v = d; v; v = $r(v)) p++;
                    for (; 0 < h - p; ) (c = $r(c)), h--;
                    for (; 0 < p - h; ) (d = $r(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = $r(c)), (d = $r(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Kr(o, u, s, c, !1),
                  null !== l && null !== f && Kr(o, f, l, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (u = r ? ga(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === s && "file" === u.type)
              )
                var m = Gn;
              else if (Hn(u))
                if (Qn) m = ar;
                else {
                  m = nr;
                  var g = tr;
                }
              else
                (s = u.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (m = rr);
              switch (
                (m && (m = m(e, r))
                  ? Bn(o, m, n, a)
                  : (g && g(e, u, r),
                    "focusout" === e &&
                      (g = u._wrapperState) &&
                      g.controlled &&
                      "number" === u.type &&
                      ee(u, "number", u.value)),
                (g = r ? ga(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) &&
                    ((hr = g), (vr = r), (mr = null));
                  break;
                case "focusout":
                  mr = vr = hr = null;
                  break;
                case "mousedown":
                  gr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (gr = !1), yr(o, n, a);
                  break;
                case "selectionchange":
                  if (pr) break;
                case "keydown":
                case "keyup":
                  yr(o, n, a);
              }
              var y;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Fn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (y = Xt())
                    : ((Yt = "value" in (Qt = a) ? Qt.value : Qt.textContent),
                      (Un = !0))),
                0 < (g = Wr(r, b)).length &&
                  ((b = new yn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = zn(n)) && (b.data = y))),
                (y = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return zn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((jn = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!Rn && Fn(e, t))
                          ? ((e = Xt()), (Jt = Yt = Qt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Wr(r, "onBeforeInput")).length &&
                  ((a = new yn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Mr(o, t);
          });
        }
        function Br(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Wr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Re(e, n)) && r.unshift(Br(e, i, a)),
              null != (i = Re(e, t)) && r.push(Br(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function $r(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var u = n,
              s = u.alternate,
              l = u.stateNode;
            if (null !== s && s === r) break;
            5 === u.tag &&
              null !== l &&
              ((u = l),
              a
                ? null != (s = Re(n, i)) && o.unshift(Br(n, s, u))
                : a || (null != (s = Re(n, i)) && o.push(Br(n, s, u)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var qr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Qr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(qr, "\n")
            .replace(Gr, "");
        }
        function Yr(e, t, n) {
          if (((t = Qr(t)), Qr(e) !== t && n)) throw Error(i(425));
        }
        function Jr() {}
        var Xr = null;
        function Zr(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ea = "function" === typeof setTimeout ? setTimeout : void 0,
          ta = "function" === typeof clearTimeout ? clearTimeout : void 0,
          na = "function" === typeof Promise ? Promise : void 0,
          ra =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof na
              ? function (e) {
                  return na.resolve(null).then(e).catch(aa);
                }
              : ea;
        function aa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ia(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function oa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var sa = Math.random().toString(36).slice(2),
          la = "__reactFiber$" + sa,
          ca = "__reactProps$" + sa,
          fa = "__reactContainer$" + sa,
          da = "__reactEvents$" + sa,
          pa = "__reactListeners$" + sa,
          ha = "__reactHandles$" + sa;
        function va(e) {
          var t = e[la];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[fa] || n[la])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[la])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ma(e) {
          return !(e = e[la] || e[fa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ga(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function ya(e) {
          return e[ca] || null;
        }
        var ba = [],
          ka = -1;
        function wa(e) {
          return { current: e };
        }
        function Sa(e) {
          0 > ka || ((e.current = ba[ka]), (ba[ka] = null), ka--);
        }
        function xa(e, t) {
          ka++, (ba[ka] = e.current), (e.current = t);
        }
        var _a = {},
          Ea = wa(_a),
          Ca = wa(!1),
          Ia = _a;
        function Ta(e, t) {
          var n = e.type.contextTypes;
          if (!n) return _a;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Pa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Oa() {
          Sa(Ca), Sa(Ea);
        }
        function Na(e, t, n) {
          if (Ea.current !== _a) throw Error(i(168));
          xa(Ea, t), xa(Ca, n);
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, B(e) || "Unknown", a));
          return j({}, n, r);
        }
        function Aa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              _a),
            (Ia = Ea.current),
            xa(Ea, e),
            xa(Ca, Ca.current),
            !0
          );
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Ra(e, t, Ia)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Sa(Ca),
              Sa(Ea),
              xa(Ea, e))
            : Sa(Ca),
            xa(Ca, n);
        }
        var Da = null,
          Ma = !1,
          ja = !1;
        function Fa(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function za() {
          if (!ja && null !== Da) {
            ja = !0;
            var e = 0,
              t = yt;
            try {
              var n = Da;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ma = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Ze, za), a);
            } finally {
              (yt = t), (ja = !1);
            }
          }
          return null;
        }
        var Ua = k.ReactCurrentBatchConfig;
        function Va(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = j({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Ha = wa(null),
          Ba = null,
          Wa = null,
          $a = null;
        function Ka() {
          $a = Wa = Ba = null;
        }
        function qa(e) {
          var t = Ha.current;
          Sa(Ha), (e._currentValue = t);
        }
        function Ga(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Qa(e, t) {
          (Ba = e),
            ($a = Wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (gu = !0), (e.firstContext = null));
        }
        function Ya(e) {
          var t = e._currentValue;
          if ($a !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Wa)
            ) {
              if (null === Ba) throw Error(i(308));
              (Wa = e), (Ba.dependencies = { lanes: 0, firstContext: e });
            } else Wa = Wa.next = e;
          return t;
        }
        var Ja = null,
          Xa = !1;
        function Za(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ei(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ti(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function ni(e, t) {
          var n = e.updateQueue;
          null !== n &&
            ((n = n.shared),
            null !== ys && 0 !== (1 & e.mode) && 0 === (2 & gs)
              ? (null === (e = n.interleaved)
                  ? ((t.next = t), null === Ja ? (Ja = [n]) : Ja.push(n))
                  : ((t.next = e.next), (e.next = t)),
                (n.interleaved = t))
              : (null === (e = n.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (n.pending = t)));
        }
        function ri(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function ai(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function ii(e, t, n, r) {
          var a = e.updateQueue;
          Xa = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var s = u,
              l = s.next;
            (s.next = null), null === o ? (i = l) : (o.next = l), (o = s);
            var c = e.alternate;
            null !== c &&
              (u = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === u ? (c.firstBaseUpdate = l) : (u.next = l),
              (c.lastBaseUpdate = s));
          }
          if (null !== i) {
            var f = a.baseState;
            for (o = 0, c = l = s = null, u = i; ; ) {
              var d = u.lane,
                p = u.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: u.tag,
                      payload: u.payload,
                      callback: u.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = u;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = j({}, f, d);
                      break e;
                    case 2:
                      Xa = !0;
                  }
                }
                null !== u.callback &&
                  0 !== u.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [u]) : d.push(u));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                }),
                  null === c ? ((l = c = p), (s = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (u = u.next)) {
                if (null === (u = a.shared.pending)) break;
                (u = (d = u).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = l),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Es |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function oi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var ui = new r.Component().refs;
        function si(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : j({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var li = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Hs(),
              a = Bs(e),
              i = ti(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              ni(e, i),
              null !== (t = Ws(e, a, r)) && ri(t, e, a);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Hs(),
              a = Bs(e),
              i = ti(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              ni(e, i),
              null !== (t = Ws(e, a, r)) && ri(t, e, a);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Hs(),
              r = Bs(e),
              a = ti(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              ni(e, a),
              null !== (t = Ws(e, r, n)) && ri(t, e, r);
          },
        };
        function ci(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !or(n, r) ||
                !or(a, i);
        }
        function fi(e, t, n) {
          var r = !1,
            a = _a,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ya(i))
              : ((a = Pa(t) ? Ia : Ea.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : _a)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = li),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function di(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && li.enqueueReplaceState(t, t.state, null);
        }
        function pi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = ui), Za(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ya(i))
            : ((i = Pa(t) ? Ia : Ea.current), (a.context = Ta(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (si(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && li.enqueueReplaceState(a, a.state, null),
              ii(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        var hi = [],
          vi = 0,
          mi = null,
          gi = 0,
          yi = [],
          bi = 0,
          ki = null,
          wi = 1,
          Si = "";
        function xi(e, t) {
          (hi[vi++] = gi), (hi[vi++] = mi), (mi = e), (gi = t);
        }
        function _i(e, t, n) {
          (yi[bi++] = wi), (yi[bi++] = Si), (yi[bi++] = ki), (ki = e);
          var r = wi;
          e = Si;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (wi = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Si = i + e);
          } else (wi = (1 << i) | (n << a) | r), (Si = e);
        }
        function Ei(e) {
          null !== e.return && (xi(e, 1), _i(e, 1, 0));
        }
        function Ci(e) {
          for (; e === mi; )
            (mi = hi[--vi]), (hi[vi] = null), (gi = hi[--vi]), (hi[vi] = null);
          for (; e === ki; )
            (ki = yi[--bi]),
              (yi[bi] = null),
              (Si = yi[--bi]),
              (yi[bi] = null),
              (wi = yi[--bi]),
              (yi[bi] = null);
        }
        var Ii = null,
          Ti = null,
          Pi = !1,
          Oi = null;
        function Ni(e, t) {
          var n = kl(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function Ri(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (Ii = e), (Ti = oa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Ii = e), (Ti = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== ki ? { id: wi, overflow: Si } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = kl(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Ii = e),
                (Ti = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function Ai(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function Li(e) {
          if (Pi) {
            var t = Ti;
            if (t) {
              var n = t;
              if (!Ri(e, t)) {
                if (Ai(e)) throw Error(i(418));
                t = oa(n.nextSibling);
                var r = Ii;
                t && Ri(e, t)
                  ? Ni(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (Pi = !1), (Ii = e));
              }
            } else {
              if (Ai(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (Pi = !1), (Ii = e);
            }
          }
        }
        function Di(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ii = e;
        }
        function Mi(e) {
          if (e !== Ii) return !1;
          if (!Pi) return Di(e), (Pi = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !Zr(e.type, e.memoizedProps)),
            t && (t = Ti))
          ) {
            if (Ai(e)) {
              for (e = Ti; e; ) e = oa(e.nextSibling);
              throw Error(i(418));
            }
            for (; t; ) Ni(e, t), (t = oa(t.nextSibling));
          }
          if ((Di(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ti = oa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ti = null;
            }
          } else Ti = Ii ? oa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ji() {
          (Ti = Ii = null), (Pi = !1);
        }
        function Fi(e) {
          null === Oi ? (Oi = [e]) : Oi.push(e);
        }
        function zi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === ui && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Ui(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Vi(e) {
          return (0, e._init)(e._payload);
        }
        function Hi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Sl(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Cl(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function l(e, t, n, r) {
            var i = n.type;
            return i === x
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === R &&
                    Vi(i) === t.type))
              ? (((r = a(t, n.props)).ref = zi(e, t, n)), (r.return = e), r)
              : (((r = xl(n.type, n.key, n.props, null, e.mode, r)).ref = zi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Il(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = _l(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Cl("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = xl(t.type, t.key, t.props, null, e.mode, n)).ref = zi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Il(t, e.mode, n)).return = e), t;
                case R:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = _l(t, e.mode, n, null)).return = e), t;
              Ui(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? l(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== a ? null : f(e, t, n, r, null);
              Ui(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return l(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || D(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Ui(t, r);
            }
            return null;
          }
          function v(a, i, u, s) {
            for (
              var l = null, c = null, f = i, v = (i = 0), m = null;
              null !== f && v < u.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(a, f, u[v], s);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (i = o(g, i, v)),
                null === c ? (l = g) : (c.sibling = g),
                (c = g),
                (f = m);
            }
            if (v === u.length) return n(a, f), Pi && xi(a, v), l;
            if (null === f) {
              for (; v < u.length; v++)
                null !== (f = d(a, u[v], s)) &&
                  ((i = o(f, i, v)),
                  null === c ? (l = f) : (c.sibling = f),
                  (c = f));
              return Pi && xi(a, v), l;
            }
            for (f = r(a, f); v < u.length; v++)
              null !== (m = h(f, a, v, u[v], s)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (i = o(m, i, v)),
                null === c ? (l = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              Pi && xi(a, v),
              l
            );
          }
          function m(a, u, s, l) {
            var c = D(s);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (s = c.call(s))) throw Error(i(151));
            for (
              var f = (c = null), v = u, m = (u = 0), g = null, y = s.next();
              null !== v && !y.done;
              m++, y = s.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(a, v, y.value, l);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (u = o(b, u, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(a, v), Pi && xi(a, m), c;
            if (null === v) {
              for (; !y.done; m++, y = s.next())
                null !== (y = d(a, y.value, l)) &&
                  ((u = o(y, u, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return Pi && xi(a, m), c;
            }
            for (v = r(a, v); !y.done; m++, y = s.next())
              null !== (y = h(v, a, m, y.value, l)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (u = o(y, u, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              Pi && xi(a, m),
              c
            );
          }
          return function e(r, i, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === x &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var l = o.key, c = i; null !== c; ) {
                      if (c.key === l) {
                        if ((l = o.type) === x) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === l ||
                          ("object" === typeof l &&
                            null !== l &&
                            l.$$typeof === R &&
                            Vi(l) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = zi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === x
                      ? (((i = _l(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = i))
                      : (((s = xl(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = zi(r, i, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return u(r);
                case S:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Il(o, r.mode, s)).return = r), (r = i);
                  }
                  return u(r);
                case R:
                  return e(r, i, (c = o._init)(o._payload), s);
              }
              if (te(o)) return v(r, i, o, s);
              if (D(o)) return m(r, i, o, s);
              Ui(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Cl(o, r.mode, s)).return = r), (r = i)),
                u(r))
              : n(r, i);
          };
        }
        var Bi = Hi(!0),
          Wi = Hi(!1),
          $i = {},
          Ki = wa($i),
          qi = wa($i),
          Gi = wa($i);
        function Qi(e) {
          if (e === $i) throw Error(i(174));
          return e;
        }
        function Yi(e, t) {
          switch ((xa(Gi, t), xa(qi, e), xa(Ki, $i), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Sa(Ki), xa(Ki, t);
        }
        function Ji() {
          Sa(Ki), Sa(qi), Sa(Gi);
        }
        function Xi(e) {
          Qi(Gi.current);
          var t = Qi(Ki.current),
            n = se(t, e.type);
          t !== n && (xa(qi, e), xa(Ki, n));
        }
        function Zi(e) {
          qi.current === e && (Sa(Ki), Sa(qi));
        }
        var eo = wa(0);
        function to(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var no = [];
        function ro() {
          for (var e = 0; e < no.length; e++)
            no[e]._workInProgressVersionPrimary = null;
          no.length = 0;
        }
        var ao = k.ReactCurrentDispatcher,
          io = k.ReactCurrentBatchConfig,
          oo = 0,
          uo = null,
          so = null,
          lo = null,
          co = !1,
          fo = !1,
          po = 0,
          ho = 0;
        function vo() {
          throw Error(i(321));
        }
        function mo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function go(e, t, n, r, a, o) {
          if (
            ((oo = o),
            (uo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ao.current = null === e || null === e.memoizedState ? Zo : eu),
            (e = n(r, a)),
            fo)
          ) {
            o = 0;
            do {
              if (((fo = !1), (po = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (lo = so = null),
                (t.updateQueue = null),
                (ao.current = tu),
                (e = n(r, a));
            } while (fo);
          }
          if (
            ((ao.current = Xo),
            (t = null !== so && null !== so.next),
            (oo = 0),
            (lo = so = uo = null),
            (co = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function yo() {
          var e = 0 !== po;
          return (po = 0), e;
        }
        function bo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === lo ? (uo.memoizedState = lo = e) : (lo = lo.next = e), lo
          );
        }
        function ko() {
          if (null === so) {
            var e = uo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = so.next;
          var t = null === lo ? uo.memoizedState : lo.next;
          if (null !== t) (lo = t), (so = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (so = e).memoizedState,
              baseState: so.baseState,
              baseQueue: so.baseQueue,
              queue: so.queue,
              next: null,
            }),
              null === lo ? (uo.memoizedState = lo = e) : (lo = lo.next = e);
          }
          return lo;
        }
        function wo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function So(e) {
          var t = ko(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = so,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var u = a.next;
              (a.next = o.next), (o.next = u);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (u = null),
              l = null,
              c = o;
            do {
              var f = c.lane;
              if ((oo & f) === f)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === l ? ((s = l = d), (u = r)) : (l = l.next = d),
                  (uo.lanes |= f),
                  (Es |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === l ? (u = r) : (l.next = s),
              ir(r, t.memoizedState) || (gu = !0),
              (t.memoizedState = r),
              (t.baseState = u),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (uo.lanes |= o), (Es |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function xo(e) {
          var t = ko(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var u = (a = a.next);
            do {
              (o = e(o, u.action)), (u = u.next);
            } while (u !== a);
            ir(o, t.memoizedState) || (gu = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function _o() {}
        function Eo(e, t) {
          var n = uo,
            r = ko(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (gu = !0)),
            (r = r.queue),
            Mo(To.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== lo && 1 & lo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              No(9, Io.bind(null, n, r, a, t), void 0, null),
              null === ys)
            )
              throw Error(i(349));
            0 !== (30 & oo) || Co(n, t, a);
          }
          return a;
        }
        function Co(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = uo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (uo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Io(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Po(t) && Ws(e, 1, -1);
        }
        function To(e, t, n) {
          return n(function () {
            Po(t) && Ws(e, 1, -1);
          });
        }
        function Po(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Oo(e) {
          var t = bo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = qo.bind(null, uo, e)),
            [t.memoizedState, e]
          );
        }
        function No(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = uo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (uo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ro() {
          return ko().memoizedState;
        }
        function Ao(e, t, n, r) {
          var a = bo();
          (uo.flags |= e),
            (a.memoizedState = No(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Lo(e, t, n, r) {
          var a = ko();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== so) {
            var o = so.memoizedState;
            if (((i = o.destroy), null !== r && mo(r, o.deps)))
              return void (a.memoizedState = No(t, n, i, r));
          }
          (uo.flags |= e), (a.memoizedState = No(1 | t, n, i, r));
        }
        function Do(e, t) {
          return Ao(8390656, 8, e, t);
        }
        function Mo(e, t) {
          return Lo(2048, 8, e, t);
        }
        function jo(e, t) {
          return Lo(4, 2, e, t);
        }
        function Fo(e, t) {
          return Lo(4, 4, e, t);
        }
        function zo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Uo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Lo(4, 4, zo.bind(null, t, e), n)
          );
        }
        function Vo() {}
        function Ho(e, t) {
          var n = ko();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Bo(e, t) {
          var n = ko();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wo(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = io.transition;
          io.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (io.transition = r);
          }
        }
        function $o() {
          return ko().memoizedState;
        }
        function Ko(e, t, n) {
          var r = Bs(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Go(e)
              ? Qo(t, n)
              : (Yo(e, t, n),
                null !== (e = Ws(e, r, (n = Hs()))) && Jo(e, t, r));
        }
        function qo(e, t, n) {
          var r = Bs(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Go(e)) Qo(t, a);
          else {
            Yo(e, t, a);
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  u = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = u), ir(u, o)))
                  return;
              } catch (s) {}
            null !== (e = Ws(e, r, (n = Hs()))) && Jo(e, t, r);
          }
        }
        function Go(e) {
          var t = e.alternate;
          return e === uo || (null !== t && t === uo);
        }
        function Qo(e, t) {
          fo = co = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Yo(e, t, n) {
          null !== ys && 0 !== (1 & e.mode) && 0 === (2 & gs)
            ? (null === (e = t.interleaved)
                ? ((n.next = n), null === Ja ? (Ja = [t]) : Ja.push(t))
                : ((n.next = e.next), (e.next = n)),
              (t.interleaved = n))
            : (null === (e = t.pending)
                ? (n.next = n)
                : ((n.next = e.next), (e.next = n)),
              (t.pending = n));
        }
        function Jo(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var Xo = {
            readContext: Ya,
            useCallback: vo,
            useContext: vo,
            useEffect: vo,
            useImperativeHandle: vo,
            useInsertionEffect: vo,
            useLayoutEffect: vo,
            useMemo: vo,
            useReducer: vo,
            useRef: vo,
            useState: vo,
            useDebugValue: vo,
            useDeferredValue: vo,
            useTransition: vo,
            useMutableSource: vo,
            useSyncExternalStore: vo,
            useId: vo,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: Ya,
            useCallback: function (e, t) {
              return (bo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ya,
            useEffect: Do,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ao(4194308, 4, zo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ao(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ao(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = bo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = bo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ko.bind(null, uo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (bo().memoizedState = e);
            },
            useState: Oo,
            useDebugValue: Vo,
            useDeferredValue: function (e) {
              var t = Oo(e),
                n = t[0],
                r = t[1];
              return (
                Do(
                  function () {
                    var t = io.transition;
                    io.transition = {};
                    try {
                      r(e);
                    } finally {
                      io.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = Oo(!1),
                t = e[0];
              return (
                (e = Wo.bind(null, e[1])), (bo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = uo,
                a = bo();
              if (Pi) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === ys)) throw Error(i(349));
                0 !== (30 & oo) || Co(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Do(To.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                No(9, Io.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = bo(),
                t = ys.identifierPrefix;
              if (Pi) {
                var n = Si;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (wi & ~(1 << (32 - ot(wi) - 1))).toString(32) + n)),
                  0 < (n = po++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ho++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          eu = {
            readContext: Ya,
            useCallback: Ho,
            useContext: Ya,
            useEffect: Mo,
            useImperativeHandle: Uo,
            useInsertionEffect: jo,
            useLayoutEffect: Fo,
            useMemo: Bo,
            useReducer: So,
            useRef: Ro,
            useState: function () {
              return So(wo);
            },
            useDebugValue: Vo,
            useDeferredValue: function (e) {
              var t = So(wo),
                n = t[0],
                r = t[1];
              return (
                Mo(
                  function () {
                    var t = io.transition;
                    io.transition = {};
                    try {
                      r(e);
                    } finally {
                      io.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              return [So(wo)[0], ko().memoizedState];
            },
            useMutableSource: _o,
            useSyncExternalStore: Eo,
            useId: $o,
            unstable_isNewReconciler: !1,
          },
          tu = {
            readContext: Ya,
            useCallback: Ho,
            useContext: Ya,
            useEffect: Mo,
            useImperativeHandle: Uo,
            useInsertionEffect: jo,
            useLayoutEffect: Fo,
            useMemo: Bo,
            useReducer: xo,
            useRef: Ro,
            useState: function () {
              return xo(wo);
            },
            useDebugValue: Vo,
            useDeferredValue: function (e) {
              var t = xo(wo),
                n = t[0],
                r = t[1];
              return (
                Mo(
                  function () {
                    var t = io.transition;
                    io.transition = {};
                    try {
                      r(e);
                    } finally {
                      io.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              return [xo(wo)[0], ko().memoizedState];
            },
            useMutableSource: _o,
            useSyncExternalStore: Eo,
            useId: $o,
            unstable_isNewReconciler: !1,
          };
        function nu(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function ru(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var au,
          iu,
          ou,
          uu = "function" === typeof WeakMap ? WeakMap : Map;
        function su(e, t, n) {
          ((n = ti(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Rs || ((Rs = !0), (As = r)), ru(0, t);
            }),
            n
          );
        }
        function lu(e, t, n) {
          (n = ti(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ru(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                ru(0, t),
                  "function" !== typeof r &&
                    (null === Ls ? (Ls = new Set([this])) : Ls.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function cu(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new uu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = hl.bind(null, e, t, n)), t.then(e, e));
        }
        function fu(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function du(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = ti(-1, 1)).tag = 2), ni(n, t))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        function pu(e, t) {
          if (!Pi)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function hu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function vu(e, t, n) {
          var r = t.pendingProps;
          switch ((Ci(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return hu(t), null;
            case 1:
            case 17:
              return Pa(t.type) && Oa(), hu(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Ji(),
                Sa(Ca),
                Sa(Ea),
                ro(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Mi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Oi && (Qs(Oi), (Oi = null)))),
                hu(t),
                null
              );
            case 5:
              Zi(t);
              var a = Qi(Gi.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                iu(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return hu(t), null;
                }
                if (((e = Qi(Ki.current)), Mi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[la] = t), (r[ca] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      jr("cancel", r), jr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      jr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) jr(Ar[a], r);
                      break;
                    case "source":
                      jr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      jr("error", r), jr("load", r);
                      break;
                    case "details":
                      jr("toggle", r);
                      break;
                    case "input":
                      Y(r, o), jr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        jr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), jr("invalid", r);
                  }
                  for (var s in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var l = o[s];
                      "children" === s
                        ? "string" === typeof l
                          ? r.textContent !== l &&
                            (Yr(r.textContent, l, e), (a = ["children", l]))
                          : "number" === typeof l &&
                            r.textContent !== "" + l &&
                            (Yr(r.textContent, l, e),
                            (a = ["children", "" + l]))
                        : u.hasOwnProperty(s) &&
                          null != l &&
                          "onScroll" === s &&
                          jr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      K(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ue(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[la] = t),
                    (e[ca] = r),
                    au(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        jr("cancel", e), jr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        jr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) jr(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        jr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        jr("error", e), jr("load", e), (a = r);
                        break;
                      case "details":
                        jr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = Q(e, r)), jr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = j({}, r, { value: void 0 })),
                          jr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), jr("invalid", e);
                    }
                    for (o in (ye(n, a), (l = a)))
                      if (l.hasOwnProperty(o)) {
                        var c = l[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (u.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && jr("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        K(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        K(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return hu(t), null;
            case 6:
              if (e && null != t.stateNode) ou(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = Qi(Gi.current)), Qi(Ki.current), Mi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[la] = t),
                    (o = r.nodeValue !== n) && null !== (e = Ii))
                  )
                    switch (((s = 0 !== (1 & e.mode)), e.tag)) {
                      case 3:
                        Yr(r.nodeValue, n, s);
                        break;
                      case 5:
                        !0 !== e.memoizedProps[void 0] && Yr(r.nodeValue, n, s);
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[la] = t),
                    (t.stateNode = r);
              }
              return hu(t), null;
            case 13:
              if (
                (Sa(eo),
                (r = t.memoizedState),
                Pi &&
                  null !== Ti &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags))
              ) {
                for (r = Ti; r; ) r = oa(r.nextSibling);
                return ji(), (t.flags |= 98560), t;
              }
              if (null !== r && null !== r.dehydrated) {
                if (((r = Mi(t)), null === e)) {
                  if (!r) throw Error(i(318));
                  if (
                    !(r = null !== (r = t.memoizedState) ? r.dehydrated : null)
                  )
                    throw Error(i(317));
                  r[la] = t;
                } else
                  ji(),
                    0 === (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                return hu(t), null;
              }
              return (
                null !== Oi && (Qs(Oi), (Oi = null)),
                0 !== (128 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? Mi(t) : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      ((t.child.flags |= 8192),
                      0 !== (1 & t.mode) &&
                        (null === e || 0 !== (1 & eo.current)
                          ? 0 === xs && (xs = 3)
                          : al())),
                    null !== t.updateQueue && (t.flags |= 4),
                    hu(t),
                    null)
              );
            case 4:
              return (
                Ji(), null === e && Ur(t.stateNode.containerInfo), hu(t), null
              );
            case 10:
              return qa(t.type._context), hu(t), null;
            case 19:
              if ((Sa(eo), null === (o = t.memoizedState))) return hu(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) pu(o, !1);
                else {
                  if (0 !== xs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = to(e))) {
                        for (
                          t.flags |= 128,
                            pu(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return xa(eo, (1 & eo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Je() > Ns &&
                    ((t.flags |= 128),
                    (r = !0),
                    pu(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = to(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      pu(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !Pi)
                    )
                      return hu(t), null;
                  } else
                    2 * Je() - o.renderingStartTime > Ns &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      pu(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = eo.current),
                  xa(eo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (hu(t), null);
            case 22:
            case 23:
              return (
                el(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & ws) &&
                    (hu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : hu(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        (au = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (iu = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Qi(Ki.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = Q(e, a)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (a = j({}, a, { value: void 0 })),
                    (r = j({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (u.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var l = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && l !== s && (null != l || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (l && l.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in l)
                        l.hasOwnProperty(i) &&
                          s[i] !== l[i] &&
                          (n || (n = {}), (n[i] = l[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = l);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((l = l ? l.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != l && s !== l && (o = o || []).push(c, l))
                      : "children" === c
                      ? ("string" !== typeof l && "number" !== typeof l) ||
                        (o = o || []).push(c, "" + l)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (u.hasOwnProperty(c)
                          ? (null != l && "onScroll" === c && jr("scroll", e),
                            o || s === l || (o = []))
                          : (o = o || []).push(c, l));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (ou = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var mu = k.ReactCurrentOwner,
          gu = !1;
        function yu(e, t, n, r) {
          t.child = null === e ? Wi(t, null, n, r) : Bi(t, e.child, n, r);
        }
        function bu(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Qa(t, a),
            (r = go(e, t, n, r, i, a)),
            (n = yo()),
            null === e || gu
              ? (Pi && n && Ei(t), (t.flags |= 1), yu(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                zu(e, t, a))
          );
        }
        function ku(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              wl(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = xl(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), wu(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : or)(o, r) &&
              e.ref === t.ref
            )
              return zu(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Sl(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function wu(e, t, n, r, a) {
          if (null !== e && or(e.memoizedProps, r) && e.ref === t.ref) {
            if (((gu = !1), 0 === (e.lanes & a)))
              return (t.lanes = e.lanes), zu(e, t, a);
            0 !== (131072 & e.flags) && (gu = !0);
          }
          return _u(e, t, n, r, a);
        }
        function Su(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null }),
                xa(Ss, ws),
                (ws |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null }),
                  (t.updateQueue = null),
                  xa(Ss, ws),
                  (ws |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null }),
                (r = null !== i ? i.baseLanes : n),
                xa(Ss, ws),
                (ws |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              xa(Ss, ws),
              (ws |= r);
          return yu(e, t, a, n), t.child;
        }
        function xu(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _u(e, t, n, r, a) {
          var i = Pa(n) ? Ia : Ea.current;
          return (
            (i = Ta(t, i)),
            Qa(t, a),
            (n = go(e, t, n, r, i, a)),
            (r = yo()),
            null === e || gu
              ? (Pi && r && Ei(t), (t.flags |= 1), yu(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                zu(e, t, a))
          );
        }
        function Eu(e, t, n, r, a) {
          if (Pa(n)) {
            var i = !0;
            Aa(t);
          } else i = !1;
          if ((Qa(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              fi(t, n, r),
              pi(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              u = t.memoizedProps;
            o.props = u;
            var s = o.context,
              l = n.contextType;
            "object" === typeof l && null !== l
              ? (l = Ya(l))
              : (l = Ta(t, (l = Pa(n) ? Ia : Ea.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((u !== r || s !== l) && di(t, o, r, l)),
              (Xa = !1);
            var d = t.memoizedState;
            (o.state = d),
              ii(t, r, o, a),
              (s = t.memoizedState),
              u !== r || d !== s || Ca.current || Xa
                ? ("function" === typeof c &&
                    (si(t, n, c, r), (s = t.memoizedState)),
                  (u = Xa || ci(t, n, u, r, d, s, l))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = l),
                  (r = u))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              ei(e, t),
              (u = t.memoizedProps),
              (l = t.type === t.elementType ? u : Va(t.type, u)),
              (o.props = l),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ya(s))
                : (s = Ta(t, (s = Pa(n) ? Ia : Ea.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((u !== f || d !== s) && di(t, o, r, s)),
              (Xa = !1),
              (d = t.memoizedState),
              (o.state = d),
              ii(t, r, o, a);
            var h = t.memoizedState;
            u !== f || d !== h || Ca.current || Xa
              ? ("function" === typeof p &&
                  (si(t, n, p, r), (h = t.memoizedState)),
                (l = Xa || ci(t, n, l, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = l))
              : ("function" !== typeof o.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Cu(e, t, n, r, i, a);
        }
        function Cu(e, t, n, r, a, i) {
          xu(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && La(t, n, !1), zu(e, t, i);
          (r = t.stateNode), (mu.current = t);
          var u =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Bi(t, e.child, null, i)),
                (t.child = Bi(t, null, u, i)))
              : yu(e, t, u, i),
            (t.memoizedState = r.state),
            a && La(t, n, !0),
            t.child
          );
        }
        function Iu(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Na(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Na(0, t.context, !1),
            Yi(e, t.containerInfo);
        }
        function Tu(e, t, n, r, a) {
          return ji(), Fi(a), (t.flags |= 256), yu(e, t, n, r), t.child;
        }
        var Pu = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ou(e) {
          return { baseLanes: e, cachePool: null };
        }
        function Nu(e, t, n) {
          var r,
            a = t.pendingProps,
            o = eo.current,
            u = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((u = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            xa(eo, 1 & o),
            null === e)
          )
            return (
              Li(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((o = a.children),
                  (e = a.fallback),
                  u
                    ? ((a = t.mode),
                      (u = t.child),
                      (o = { mode: "hidden", children: o }),
                      0 === (1 & a) && null !== u
                        ? ((u.childLanes = 0), (u.pendingProps = o))
                        : (u = El(o, a, 0, null)),
                      (e = _l(e, a, n, null)),
                      (u.return = t),
                      (e.return = t),
                      (u.sibling = e),
                      (t.child = u),
                      (t.child.memoizedState = Ou(n)),
                      (t.memoizedState = Pu),
                      e)
                    : Ru(t, o))
            );
          if (null !== (o = e.memoizedState)) {
            if (null !== (r = o.dehydrated)) {
              if (s)
                return 256 & t.flags
                  ? ((t.flags &= -257), Du(e, t, n, Error(i(422))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((u = a.fallback),
                    (o = t.mode),
                    (a = El(
                      { mode: "visible", children: a.children },
                      o,
                      0,
                      null
                    )),
                    ((u = _l(u, o, n, null)).flags |= 2),
                    (a.return = t),
                    (u.return = t),
                    (a.sibling = u),
                    (t.child = a),
                    0 !== (1 & t.mode) && Bi(t, e.child, null, n),
                    (t.child.memoizedState = Ou(n)),
                    (t.memoizedState = Pu),
                    u);
              if (0 === (1 & t.mode)) t = Du(e, t, n, null);
              else if ("$!" === r.data) t = Du(e, t, n, Error(i(419)));
              else if (((a = 0 !== (n & e.childLanes)), gu || a)) {
                if (null !== (a = ys)) {
                  switch (n & -n) {
                    case 4:
                      u = 2;
                      break;
                    case 16:
                      u = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      u = 32;
                      break;
                    case 536870912:
                      u = 268435456;
                      break;
                    default:
                      u = 0;
                  }
                  0 !== (a = 0 !== (u & (a.suspendedLanes | n)) ? 0 : u) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ws(e, a, -1));
                }
                al(), (t = Du(e, t, n, Error(i(421))));
              } else
                "$?" === r.data
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = ml.bind(null, e)),
                    (r._reactRetry = t),
                    (t = null))
                  : ((n = o.treeContext),
                    (Ti = oa(r.nextSibling)),
                    (Ii = t),
                    (Pi = !0),
                    (Oi = null),
                    null !== n &&
                      ((yi[bi++] = wi),
                      (yi[bi++] = Si),
                      (yi[bi++] = ki),
                      (wi = n.id),
                      (Si = n.overflow),
                      (ki = t)),
                    ((t = Ru(t, t.pendingProps.children)).flags |= 4096));
              return t;
            }
            return u
              ? ((a = Lu(e, t, a.children, a.fallback, n)),
                (u = t.child),
                (o = e.child.memoizedState),
                (u.memoizedState =
                  null === o
                    ? Ou(n)
                    : { baseLanes: o.baseLanes | n, cachePool: null }),
                (u.childLanes = e.childLanes & ~n),
                (t.memoizedState = Pu),
                a)
              : ((n = Au(e, t, a.children, n)), (t.memoizedState = null), n);
          }
          return u
            ? ((a = Lu(e, t, a.children, a.fallback, n)),
              (u = t.child),
              (o = e.child.memoizedState),
              (u.memoizedState =
                null === o
                  ? Ou(n)
                  : { baseLanes: o.baseLanes | n, cachePool: null }),
              (u.childLanes = e.childLanes & ~n),
              (t.memoizedState = Pu),
              a)
            : ((n = Au(e, t, a.children, n)), (t.memoizedState = null), n);
        }
        function Ru(e, t) {
          return (
            ((t = El(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Au(e, t, n, r) {
          var a = e.child;
          return (
            (e = a.sibling),
            (n = Sl(a, { mode: "visible", children: n })),
            0 === (1 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              (null === (r = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : r.push(e)),
            (t.child = n)
          );
        }
        function Lu(e, t, n, r, a) {
          var i = t.mode,
            o = (e = e.child).sibling,
            u = { mode: "hidden", children: n };
          return (
            0 === (1 & i) && t.child !== e
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = u),
                (t.deletions = null))
              : ((n = Sl(e, u)).subtreeFlags = 14680064 & e.subtreeFlags),
            null !== o ? (r = Sl(o, r)) : ((r = _l(r, i, a, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function Du(e, t, n, r) {
          return (
            null !== r && Fi(r),
            Bi(t, e.child, null, n),
            ((e = Ru(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Mu(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ga(e.return, t, n);
        }
        function ju(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Fu(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((yu(e, t, r.children, n), 0 !== (2 & (r = eo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Mu(e, n, t);
                else if (19 === e.tag) Mu(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((xa(eo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === to(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  ju(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === to(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                ju(t, !0, n, null, i);
                break;
              case "together":
                ju(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function zu(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Es |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Sl((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Sl(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Uu(e, t) {
          switch ((Ci(t), t.tag)) {
            case 1:
              return (
                Pa(t.type) && Oa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Ji(),
                Sa(Ca),
                Sa(Ea),
                ro(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zi(t), null;
            case 13:
              if (
                (Sa(eo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                ji();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sa(eo), null;
            case 4:
              return Ji(), null;
            case 10:
              return qa(t.type._context), null;
            case 22:
            case 23:
              return el(), null;
            default:
              return null;
          }
        }
        var Vu = !1,
          Hu = !1,
          Bu = "function" === typeof WeakSet ? WeakSet : Set,
          Wu = null;
        function $u(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                pl(e, t, r);
              }
            else n.current = null;
        }
        function Ku(e, t, n) {
          try {
            n();
          } catch (r) {
            pl(e, t, r);
          }
        }
        var qu = !1;
        function Gu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && Ku(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function Qu(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function Yu(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function Ju(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, t);
            } catch (o) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = (e = e.next);
                do {
                  var a = r,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      Ku(t, n, i),
                    (r = r.next);
                } while (r !== e);
              }
              break;
            case 1:
              if (
                ($u(t, n),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (o) {
                  pl(t, n, o);
                }
              break;
            case 5:
              $u(t, n);
              break;
            case 4:
              as(e, t, n);
          }
        }
        function Xu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), Xu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[la],
              delete t[ca],
              delete t[da],
              delete t[pa],
              delete t[ha]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function Zu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function es(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Zu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ts(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (Zu(t)) break e;
              t = t.return;
            }
            throw Error(i(160));
          }
          var n = t;
          switch (n.tag) {
            case 5:
              (t = n.stateNode),
                32 & n.flags && (de(t, ""), (n.flags &= -33)),
                rs(e, (n = es(e)), t);
              break;
            case 3:
            case 4:
              (t = n.stateNode.containerInfo), ns(e, (n = es(e)), t);
              break;
            default:
              throw Error(i(161));
          }
        }
        function ns(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (ns(e, t, n), e = e.sibling; null !== e; )
              ns(e, t, n), (e = e.sibling);
        }
        function rs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (rs(e, t, n), e = e.sibling; null !== e; )
              rs(e, t, n), (e = e.sibling);
        }
        function as(e, t, n) {
          for (var r, a, o = t, u = !1; ; ) {
            if (!u) {
              u = o.return;
              e: for (;;) {
                if (null === u) throw Error(i(160));
                switch (((r = u.stateNode), u.tag)) {
                  case 5:
                    a = !1;
                    break e;
                  case 3:
                  case 4:
                    (r = r.containerInfo), (a = !0);
                    break e;
                }
                u = u.return;
              }
              u = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var s = e, l = o, c = n, f = l; ; )
                if ((Ju(s, f, c), null !== f.child && 4 !== f.tag))
                  (f.child.return = f), (f = f.child);
                else {
                  if (f === l) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === l) break e;
                    f = f.return;
                  }
                  (f.sibling.return = f.return), (f = f.sibling);
                }
              a
                ? ((s = r),
                  (l = o.stateNode),
                  8 === s.nodeType
                    ? s.parentNode.removeChild(l)
                    : s.removeChild(l))
                : r.removeChild(o.stateNode);
            } else if (18 === o.tag)
              a
                ? ((s = r),
                  (l = o.stateNode),
                  8 === s.nodeType
                    ? ia(s.parentNode, l)
                    : 1 === s.nodeType && ia(s, l),
                  Vt(s))
                : ia(r, o.stateNode);
            else if (4 === o.tag) {
              if (null !== o.child) {
                (r = o.stateNode.containerInfo),
                  (a = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((Ju(e, o, n), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (u = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function is(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              return Gu(3, t, t.return), Qu(3, t), void Gu(5, t, t.return);
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              var n = t.stateNode;
              if (null != n) {
                var r = t.memoizedProps,
                  a = null !== e ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (((t.updateQueue = null), null !== o)) {
                  for (
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      J(n, r),
                      be(e, a),
                      t = be(e, r),
                      a = 0;
                    a < o.length;
                    a += 2
                  ) {
                    var u = o[a],
                      s = o[a + 1];
                    "style" === u
                      ? me(n, s)
                      : "dangerouslySetInnerHTML" === u
                      ? fe(n, s)
                      : "children" === u
                      ? de(n, s)
                      : b(n, u, s, t);
                  }
                  switch (e) {
                    case "input":
                      X(n, r);
                      break;
                    case "textarea":
                      ie(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (o = r.value)
                          ? ne(n, !!r.multiple, o, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ne(n, !!r.multiple, r.defaultValue, !0)
                              : ne(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                  n[ca] = r;
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                null !== e &&
                e.memoizedState.isDehydrated &&
                Vt(t.stateNode.containerInfo)
              );
            case 13:
            case 19:
              return void os(t);
          }
          throw Error(i(163));
        }
        function os(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Bu()),
              t.forEach(function (t) {
                var r = gl.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function us(e, t, n) {
          (Wu = e), ss(e, t, n);
        }
        function ss(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Wu; ) {
            var a = Wu,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Vu;
              if (!o) {
                var u = a.alternate,
                  s = (null !== u && null !== u.memoizedState) || Hu;
                u = Vu;
                var l = Hu;
                if (((Vu = o), (Hu = s) && !l))
                  for (Wu = a; null !== Wu; )
                    (s = (o = Wu).child),
                      22 === o.tag && null !== o.memoizedState
                        ? fs(a)
                        : null !== s
                        ? ((s.return = o), (Wu = s))
                        : fs(a);
                for (; null !== i; ) (Wu = i), ss(i, t, n), (i = i.sibling);
                (Wu = a), (Vu = u), (Hu = l);
              }
              ls(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Wu = i))
                : ls(e);
          }
        }
        function ls(e) {
          for (; null !== Wu; ) {
            var t = Wu;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hu || Qu(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Hu)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : Va(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && oi(t, o, r);
                      break;
                    case 3:
                      var u = t.updateQueue;
                      if (null !== u) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        oi(t, u, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var l = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            l.autoFocus && n.focus();
                            break;
                          case "img":
                            l.src && (n.src = l.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Vt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Hu || (512 & t.flags && Yu(t));
              } catch (p) {
                pl(t, t.return, p);
              }
            }
            if (t === e) {
              Wu = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Wu = n);
              break;
            }
            Wu = t.return;
          }
        }
        function cs(e) {
          for (; null !== Wu; ) {
            var t = Wu;
            if (t === e) {
              Wu = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Wu = n);
              break;
            }
            Wu = t.return;
          }
        }
        function fs(e) {
          for (; null !== Wu; ) {
            var t = Wu;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    Qu(4, t);
                  } catch (s) {
                    pl(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      pl(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    Yu(t);
                  } catch (s) {
                    pl(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    Yu(t);
                  } catch (s) {
                    pl(t, o, s);
                  }
              }
            } catch (s) {
              pl(t, t.return, s);
            }
            if (t === e) {
              Wu = null;
              break;
            }
            var u = t.sibling;
            if (null !== u) {
              (u.return = t.return), (Wu = u);
              break;
            }
            Wu = t.return;
          }
        }
        var ds,
          ps = Math.ceil,
          hs = k.ReactCurrentDispatcher,
          vs = k.ReactCurrentOwner,
          ms = k.ReactCurrentBatchConfig,
          gs = 0,
          ys = null,
          bs = null,
          ks = 0,
          ws = 0,
          Ss = wa(0),
          xs = 0,
          _s = null,
          Es = 0,
          Cs = 0,
          Is = 0,
          Ts = null,
          Ps = null,
          Os = 0,
          Ns = 1 / 0,
          Rs = !1,
          As = null,
          Ls = null,
          Ds = !1,
          Ms = null,
          js = 0,
          Fs = 0,
          zs = null,
          Us = -1,
          Vs = 0;
        function Hs() {
          return 0 !== (6 & gs) ? Je() : -1 !== Us ? Us : (Us = Je());
        }
        function Bs(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & gs) && 0 !== ks
            ? ks & -ks
            : null !== Ua.transition
            ? (0 === Vs &&
                ((e = lt), 0 === (4194240 & (lt <<= 1)) && (lt = 64), (Vs = e)),
              Vs)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function Ws(e, t, n) {
          if (50 < Fs) throw ((Fs = 0), (zs = null), Error(i(185)));
          var r = $s(e, t);
          return null === r
            ? null
            : (mt(r, t, n),
              (0 !== (2 & gs) && r === ys) ||
                (r === ys &&
                  (0 === (2 & gs) && (Cs |= t), 4 === xs && Ys(r, ks)),
                Ks(r, n),
                1 === t &&
                  0 === gs &&
                  0 === (1 & e.mode) &&
                  ((Ns = Je() + 500), Ma && za())),
              r);
        }
        function $s(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function Ks(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                u = 1 << o,
                s = a[o];
              -1 === s
                ? (0 !== (u & n) && 0 === (u & r)) || (a[o] = pt(u, t))
                : s <= t && (e.expiredLanes |= u),
                (i &= ~u);
            }
          })(e, t);
          var r = dt(e, e === ys ? ks : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ma = !0), Fa(e);
                  })(Js.bind(null, e))
                : Fa(Js.bind(null, e)),
                ra(function () {
                  0 === gs && za();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = yl(n, qs.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function qs(e, t) {
          if (((Us = -1), (Vs = 0), 0 !== (6 & gs))) throw Error(i(327));
          var n = e.callbackNode;
          if (fl() && e.callbackNode !== n) return null;
          var r = dt(e, e === ys ? ks : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = il(e, r);
          else {
            t = r;
            var a = gs;
            gs |= 2;
            var o = rl();
            for ((ys === e && ks === t) || ((Ns = Je() + 500), tl(e, t)); ; )
              try {
                ul();
                break;
              } catch (s) {
                nl(e, s);
              }
            Ka(),
              (hs.current = o),
              (gs = a),
              null !== bs ? (t = 0) : ((ys = null), (ks = 0), (t = xs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = Gs(e, a))),
              1 === t)
            )
              throw ((n = _s), tl(e, 0), Ys(e, r), Ks(e, Je()), n);
            if (6 === t) Ys(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(i(), a)) return !1;
                            } catch (u) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = il(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = Gs(e, o))),
                  1 === t))
              )
                throw ((n = _s), tl(e, 0), Ys(e, r), Ks(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  cl(e, Ps);
                  break;
                case 3:
                  if (
                    (Ys(e, r),
                    (130023424 & r) === r && 10 < (t = Os + 500 - Je()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      Hs(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ea(cl.bind(null, e, Ps), t);
                    break;
                  }
                  cl(e, Ps);
                  break;
                case 4:
                  if ((Ys(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var u = 31 - ot(r);
                    (o = 1 << u), (u = t[u]) > a && (a = u), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * ps(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ea(cl.bind(null, e, Ps), r);
                    break;
                  }
                  cl(e, Ps);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return Ks(e, Je()), e.callbackNode === n ? qs.bind(null, e) : null;
        }
        function Gs(e, t) {
          var n = Ts;
          return (
            e.current.memoizedState.isDehydrated && (tl(e, t).flags |= 256),
            2 !== (e = il(e, t)) && ((t = Ps), (Ps = n), null !== t && Qs(t)),
            e
          );
        }
        function Qs(e) {
          null === Ps ? (Ps = e) : Ps.push.apply(Ps, e);
        }
        function Ys(e, t) {
          for (
            t &= ~Is,
              t &= ~Cs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function Js(e) {
          if (0 !== (6 & gs)) throw Error(i(327));
          fl();
          var t = dt(e, 0);
          if (0 === (1 & t)) return Ks(e, Je()), null;
          var n = il(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = Gs(e, r)));
          }
          if (1 === n) throw ((n = _s), tl(e, 0), Ys(e, t), Ks(e, Je()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            cl(e, Ps),
            Ks(e, Je()),
            null
          );
        }
        function Xs(e, t) {
          var n = gs;
          gs |= 1;
          try {
            return e(t);
          } finally {
            0 === (gs = n) && ((Ns = Je() + 500), Ma && za());
          }
        }
        function Zs(e) {
          null !== Ms && 0 === Ms.tag && 0 === (6 & gs) && fl();
          var t = gs;
          gs |= 1;
          var n = ms.transition,
            r = yt;
          try {
            if (((ms.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (ms.transition = n), 0 === (6 & (gs = t)) && za();
          }
        }
        function el() {
          (ws = Ss.current), Sa(Ss);
        }
        function tl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ta(n)), null !== bs))
            for (n = bs.return; null !== n; ) {
              var r = n;
              switch ((Ci(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Oa();
                  break;
                case 3:
                  Ji(), Sa(Ca), Sa(Ea), ro();
                  break;
                case 5:
                  Zi(r);
                  break;
                case 4:
                  Ji();
                  break;
                case 13:
                case 19:
                  Sa(eo);
                  break;
                case 10:
                  qa(r.type._context);
                  break;
                case 22:
                case 23:
                  el();
              }
              n = n.return;
            }
          if (
            ((ys = e),
            (bs = e = Sl(e.current, null)),
            (ks = ws = t),
            (xs = 0),
            (_s = null),
            (Is = Cs = Es = 0),
            (Ps = Ts = null),
            null !== Ja)
          ) {
            for (t = 0; t < Ja.length; t++)
              if (null !== (r = (n = Ja[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Ja = null;
          }
          return e;
        }
        function nl(e, t) {
          for (;;) {
            var n = bs;
            try {
              if ((Ka(), (ao.current = Xo), co)) {
                for (var r = uo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                co = !1;
              }
              if (
                ((oo = 0),
                (lo = so = uo = null),
                (fo = !1),
                (po = 0),
                (vs.current = null),
                null === n || null === n.return)
              ) {
                (xs = 1), (_s = t), (bs = null);
                break;
              }
              e: {
                var o = e,
                  u = n.return,
                  s = n,
                  l = t;
                if (
                  ((t = ks),
                  (s.flags |= 32768),
                  null !== l &&
                    "object" === typeof l &&
                    "function" === typeof l.then)
                ) {
                  var c = l,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = fu(u);
                  if (null !== h) {
                    (h.flags &= -257),
                      du(h, u, s, 0, t),
                      1 & h.mode && cu(o, c, t),
                      (l = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(l), (t.updateQueue = m);
                    } else v.add(l);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    cu(o, c, t), al();
                    break e;
                  }
                  l = Error(i(426));
                } else if (Pi && 1 & s.mode) {
                  var g = fu(u);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      du(g, u, s, 0, t),
                      Fi(l);
                    break e;
                  }
                }
                (o = l),
                  4 !== xs && (xs = 2),
                  null === Ts ? (Ts = [o]) : Ts.push(o),
                  (l = nu(l, s)),
                  (s = u);
                do {
                  switch (s.tag) {
                    case 3:
                      (s.flags |= 65536),
                        (t &= -t),
                        (s.lanes |= t),
                        ai(s, su(0, l, t));
                      break e;
                    case 1:
                      o = l;
                      var y = s.type,
                        b = s.stateNode;
                      if (
                        0 === (128 & s.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ls || !Ls.has(b))))
                      ) {
                        (s.flags |= 65536),
                          (t &= -t),
                          (s.lanes |= t),
                          ai(s, lu(s, o, t));
                        break e;
                      }
                  }
                  s = s.return;
                } while (null !== s);
              }
              ll(n);
            } catch (k) {
              (t = k), bs === n && null !== n && (bs = n = n.return);
              continue;
            }
            break;
          }
        }
        function rl() {
          var e = hs.current;
          return (hs.current = Xo), null === e ? Xo : e;
        }
        function al() {
          (0 !== xs && 3 !== xs && 2 !== xs) || (xs = 4),
            null === ys ||
              (0 === (268435455 & Es) && 0 === (268435455 & Cs)) ||
              Ys(ys, ks);
        }
        function il(e, t) {
          var n = gs;
          gs |= 2;
          var r = rl();
          for ((ys === e && ks === t) || tl(e, t); ; )
            try {
              ol();
              break;
            } catch (a) {
              nl(e, a);
            }
          if ((Ka(), (gs = n), (hs.current = r), null !== bs))
            throw Error(i(261));
          return (ys = null), (ks = 0), xs;
        }
        function ol() {
          for (; null !== bs; ) sl(bs);
        }
        function ul() {
          for (; null !== bs && !Qe(); ) sl(bs);
        }
        function sl(e) {
          var t = ds(e.alternate, e, ws);
          (e.memoizedProps = e.pendingProps),
            null === t ? ll(e) : (bs = t),
            (vs.current = null);
        }
        function ll(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = vu(n, t, ws))) return void (bs = n);
            } else {
              if (null !== (n = Uu(n, t)))
                return (n.flags &= 32767), void (bs = n);
              if (null === e) return (xs = 6), void (bs = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (bs = t);
            bs = t = e;
          } while (null !== t);
          0 === xs && (xs = 5);
        }
        function cl(e, t) {
          var n = yt,
            r = ms.transition;
          try {
            (ms.transition = null),
              (yt = 1),
              (function (e, t, n) {
                do {
                  fl();
                } while (null !== Ms);
                if (0 !== (6 & gs)) throw Error(i(327));
                var r = e.finishedWork,
                  a = e.finishedLanes;
                if (null === r) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  r === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = r.lanes | r.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === ys && ((bs = ys = null), (ks = 0)),
                  (0 === (2064 & r.subtreeFlags) && 0 === (2064 & r.flags)) ||
                    Ds ||
                    ((Ds = !0),
                    yl(tt, function () {
                      return fl(), null;
                    })),
                  (o = 0 !== (15990 & r.flags)),
                  0 !== (15990 & r.subtreeFlags) || o)
                ) {
                  (o = ms.transition), (ms.transition = null);
                  var u = yt;
                  yt = 1;
                  var s = gs;
                  (gs |= 4),
                    (vs.current = null),
                    (function (e, t) {
                      if (fr((e = cr()))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var u = 0,
                                s = -1,
                                l = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (s = u + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (l = u + r),
                                    3 === d.nodeType &&
                                      (u += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = u),
                                    p === o && ++f === r && (l = u),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === l
                                  ? null
                                  : { start: s, end: l };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        Xr = { focusedElem: e, selectionRange: n }, Wu = t;
                        null !== Wu;

                      )
                        if (
                          ((e = (t = Wu).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Wu = e);
                        else
                          for (; null !== Wu; ) {
                            t = Wu;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : Va(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var k = t.stateNode.containerInfo;
                                    if (1 === k.nodeType) k.textContent = "";
                                    else if (9 === k.nodeType) {
                                      var w = k.body;
                                      null != w && (w.textContent = "");
                                    }
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (S) {
                              pl(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Wu = e);
                              break;
                            }
                            Wu = t.return;
                          }
                      (v = qu), (qu = !1);
                    })(e, r),
                    (function (e, t) {
                      for (Wu = t; null !== Wu; ) {
                        var n = (t = Wu).deletions;
                        if (null !== n)
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            try {
                              as(e, a, t);
                              var i = a.alternate;
                              null !== i && (i.return = null),
                                (a.return = null);
                            } catch (_) {
                              pl(a, t, _);
                            }
                          }
                        if (
                          ((n = t.child),
                          0 !== (12854 & t.subtreeFlags) && null !== n)
                        )
                          (n.return = t), (Wu = n);
                        else
                          for (; null !== Wu; ) {
                            t = Wu;
                            try {
                              var o = t.flags;
                              if ((32 & o && de(t.stateNode, ""), 512 & o)) {
                                var u = t.alternate;
                                if (null !== u) {
                                  var s = u.ref;
                                  null !== s &&
                                    ("function" === typeof s
                                      ? s(null)
                                      : (s.current = null));
                                }
                              }
                              if (8192 & o)
                                switch (t.tag) {
                                  case 13:
                                    if (null !== t.memoizedState) {
                                      var l = t.alternate;
                                      (null !== l &&
                                        null !== l.memoizedState) ||
                                        (Os = Je());
                                    }
                                    break;
                                  case 22:
                                    var c = null !== t.memoizedState,
                                      f = t.alternate,
                                      d =
                                        null !== f && null !== f.memoizedState;
                                    e: {
                                      a = c;
                                      for (var p = null, h = (r = n = t); ; ) {
                                        if (5 === h.tag) {
                                          if (null === p) {
                                            p = h;
                                            var v = h.stateNode;
                                            if (a) {
                                              var m = v.style;
                                              "function" ===
                                              typeof m.setProperty
                                                ? m.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                  )
                                                : (m.display = "none");
                                            } else {
                                              var g = h.stateNode,
                                                y = h.memoizedProps.style,
                                                b =
                                                  void 0 !== y &&
                                                  null !== y &&
                                                  y.hasOwnProperty("display")
                                                    ? y.display
                                                    : null;
                                              g.style.display = ve(
                                                "display",
                                                b
                                              );
                                            }
                                          }
                                        } else if (6 === h.tag)
                                          null === p &&
                                            (h.stateNode.nodeValue = a
                                              ? ""
                                              : h.memoizedProps);
                                        else if (
                                          ((22 !== h.tag && 23 !== h.tag) ||
                                            null === h.memoizedState ||
                                            h === r) &&
                                          null !== h.child
                                        ) {
                                          (h.child.return = h), (h = h.child);
                                          continue;
                                        }
                                        if (h === r) break;
                                        for (; null === h.sibling; ) {
                                          if (
                                            null === h.return ||
                                            h.return === r
                                          )
                                            break e;
                                          p === h && (p = null), (h = h.return);
                                        }
                                        p === h && (p = null),
                                          (h.sibling.return = h.return),
                                          (h = h.sibling);
                                      }
                                    }
                                    if (c && !d && 0 !== (1 & n.mode)) {
                                      Wu = n;
                                      for (var k = n.child; null !== k; ) {
                                        for (n = Wu = k; null !== Wu; ) {
                                          var w = (r = Wu).child;
                                          switch (r.tag) {
                                            case 0:
                                            case 11:
                                            case 14:
                                            case 15:
                                              Gu(4, r, r.return);
                                              break;
                                            case 1:
                                              $u(r, r.return);
                                              var S = r.stateNode;
                                              if (
                                                "function" ===
                                                typeof S.componentWillUnmount
                                              ) {
                                                var x = r.return;
                                                try {
                                                  (S.props = r.memoizedProps),
                                                    (S.state = r.memoizedState),
                                                    S.componentWillUnmount();
                                                } catch (_) {
                                                  pl(r, x, _);
                                                }
                                              }
                                              break;
                                            case 5:
                                              $u(r, r.return);
                                              break;
                                            case 22:
                                              if (null !== r.memoizedState) {
                                                cs(n);
                                                continue;
                                              }
                                          }
                                          null !== w
                                            ? ((w.return = r), (Wu = w))
                                            : cs(n);
                                        }
                                        k = k.sibling;
                                      }
                                    }
                                }
                              switch (4102 & o) {
                                case 2:
                                  ts(t), (t.flags &= -3);
                                  break;
                                case 6:
                                  ts(t), (t.flags &= -3), is(t.alternate, t);
                                  break;
                                case 4096:
                                  t.flags &= -4097;
                                  break;
                                case 4100:
                                  (t.flags &= -4097), is(t.alternate, t);
                                  break;
                                case 4:
                                  is(t.alternate, t);
                              }
                            } catch (_) {
                              pl(t, t.return, _);
                            }
                            if (null !== (n = t.sibling)) {
                              (n.return = t.return), (Wu = n);
                              break;
                            }
                            Wu = t.return;
                          }
                      }
                    })(e, r),
                    dr(Xr),
                    (Xr = null),
                    (e.current = r),
                    us(r, e, a),
                    Ye(),
                    (gs = s),
                    (yt = u),
                    (ms.transition = o);
                } else e.current = r;
                if (
                  (Ds && ((Ds = !1), (Ms = e), (js = a)),
                  0 === (o = e.pendingLanes) && (Ls = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(r.stateNode),
                  Ks(e, Je()),
                  null !== t)
                )
                  for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                    n(t[r]);
                if (Rs) throw ((Rs = !1), (e = As), (As = null), e);
                0 !== (1 & js) && 0 !== e.tag && fl(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === zs
                      ? Fs++
                      : ((Fs = 0), (zs = e))
                    : (Fs = 0),
                  za();
              })(e, t, n);
          } finally {
            (ms.transition = r), (yt = n);
          }
          return null;
        }
        function fl() {
          if (null !== Ms) {
            var e = bt(js),
              t = ms.transition,
              n = yt;
            try {
              if (((ms.transition = null), (yt = 16 > e ? 16 : e), null === Ms))
                var r = !1;
              else {
                if (((e = Ms), (Ms = null), (js = 0), 0 !== (6 & gs)))
                  throw Error(i(331));
                var a = gs;
                for (gs |= 4, Wu = e.current; null !== Wu; ) {
                  var o = Wu,
                    u = o.child;
                  if (0 !== (16 & Wu.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var l = 0; l < s.length; l++) {
                        var c = s[l];
                        for (Wu = c; null !== Wu; ) {
                          var f = Wu;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Gu(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Wu = d);
                          else
                            for (; null !== Wu; ) {
                              var p = (f = Wu).sibling,
                                h = f.return;
                              if ((Xu(f), f === c)) {
                                Wu = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Wu = p);
                                break;
                              }
                              Wu = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Wu = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== u)
                    (u.return = o), (Wu = u);
                  else
                    e: for (; null !== Wu; ) {
                      if (0 !== (2048 & (o = Wu).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Gu(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Wu = y);
                        break e;
                      }
                      Wu = o.return;
                    }
                }
                var b = e.current;
                for (Wu = b; null !== Wu; ) {
                  var k = (u = Wu).child;
                  if (0 !== (2064 & u.subtreeFlags) && null !== k)
                    (k.return = u), (Wu = k);
                  else
                    e: for (u = b; null !== Wu; ) {
                      if (0 !== (2048 & (s = Wu).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Qu(9, s);
                          }
                        } catch (S) {
                          pl(s, s.return, S);
                        }
                      if (s === u) {
                        Wu = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Wu = w);
                        break e;
                      }
                      Wu = s.return;
                    }
                }
                if (
                  ((gs = a),
                  za(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (ms.transition = t);
            }
          }
          return !1;
        }
        function dl(e, t, n) {
          ni(e, (t = su(0, (t = nu(n, t)), 1))),
            (t = Hs()),
            null !== (e = $s(e, 1)) && (mt(e, 1, t), Ks(e, t));
        }
        function pl(e, t, n) {
          if (3 === e.tag) dl(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                dl(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ls || !Ls.has(r)))
                ) {
                  ni(t, (e = lu(t, (e = nu(n, e)), 1))),
                    (e = Hs()),
                    null !== (t = $s(t, 1)) && (mt(t, 1, e), Ks(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function hl(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = Hs()),
            (e.pingedLanes |= e.suspendedLanes & n),
            ys === e &&
              (ks & n) === n &&
              (4 === xs ||
              (3 === xs && (130023424 & ks) === ks && 500 > Je() - Os)
                ? tl(e, 0)
                : (Is |= n)),
            Ks(e, t);
        }
        function vl(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = Hs();
          null !== (e = $s(e, t)) && (mt(e, t, n), Ks(e, n));
        }
        function ml(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), vl(e, n);
        }
        function gl(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), vl(e, n);
        }
        function yl(e, t) {
          return qe(e, t);
        }
        function bl(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function kl(e, t, n, r) {
          return new bl(e, t, n, r);
        }
        function wl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Sl(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = kl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function xl(e, t, n, r, a, o) {
          var u = 2;
          if (((r = e), "function" === typeof e)) wl(e) && (u = 1);
          else if ("string" === typeof e) u = 5;
          else
            e: switch (e) {
              case x:
                return _l(n.children, a, o, t);
              case _:
                (u = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = kl(12, n, t, 2 | a)).elementType = E), (e.lanes = o), e
                );
              case P:
                return (
                  ((e = kl(13, n, t, a)).elementType = P), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = kl(19, n, t, a)).elementType = O), (e.lanes = o), e
                );
              case A:
                return El(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      u = 10;
                      break e;
                    case I:
                      u = 9;
                      break e;
                    case T:
                      u = 11;
                      break e;
                    case N:
                      u = 14;
                      break e;
                    case R:
                      (u = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = kl(u, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function _l(e, t, n, r) {
          return ((e = kl(7, e, r, t)).lanes = n), e;
        }
        function El(e, t, n, r) {
          return (
            ((e = kl(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = {}),
            e
          );
        }
        function Cl(e, t, n) {
          return ((e = kl(6, e, null, t)).lanes = n), e;
        }
        function Il(e, t, n) {
          return (
            ((t = kl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Tl(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Pl(e, t, n, r, a, i, o, u, s) {
          return (
            (e = new Tl(e, t, n, u, s)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = kl(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
            }),
            Za(i),
            e
          );
        }
        function Ol(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Nl(e) {
          if (!e) return _a;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Pa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Pa(n)) return Ra(e, n, t);
          }
          return t;
        }
        function Rl(e, t, n, r, a, i, o, u, s) {
          return (
            ((e = Pl(n, r, !0, e, 0, i, 0, u, s)).context = Nl(null)),
            (n = e.current),
            ((i = ti((r = Hs()), (a = Bs(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            ni(n, i),
            (e.current.lanes = a),
            mt(e, a, r),
            Ks(e, r),
            e
          );
        }
        function Al(e, t, n, r) {
          var a = t.current,
            i = Hs(),
            o = Bs(a);
          return (
            (n = Nl(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ti(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            ni(a, t),
            null !== (e = Ws(a, o, i)) && ri(e, a, o),
            o
          );
        }
        function Ll(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Dl(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ml(e, t) {
          Dl(e, t), (e = e.alternate) && Dl(e, t);
        }
        ds = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ca.current) gu = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (gu = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Iu(t), ji();
                        break;
                      case 5:
                        Xi(t);
                        break;
                      case 1:
                        Pa(t.type) && Aa(t);
                        break;
                      case 4:
                        Yi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        xa(Ha, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (xa(eo, 1 & eo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Nu(e, t, n)
                            : (xa(eo, 1 & eo.current),
                              null !== (e = zu(e, t, n)) ? e.sibling : null);
                        xa(eo, 1 & eo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Fu(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          xa(eo, eo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Su(e, t, n);
                    }
                    return zu(e, t, n);
                  })(e, t, n)
                );
              gu = 0 !== (131072 & e.flags);
            }
          else (gu = !1), Pi && 0 !== (1048576 & t.flags) && _i(t, gi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps);
              var a = Ta(t, Ea.current);
              Qa(t, n), (a = go(null, t, r, e, a, n));
              var o = yo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Pa(r) ? ((o = !0), Aa(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Za(t),
                    (a.updater = li),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    pi(t, r, e, n),
                    (t = Cu(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    Pi && o && Ei(t),
                    yu(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return wl(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = Va(r, e)),
                  a)
                ) {
                  case 0:
                    t = _u(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Eu(null, t, r, e, n);
                    break e;
                  case 11:
                    t = bu(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ku(null, t, r, Va(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _u(e, t, r, (a = t.elementType === r ? a : Va(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Eu(e, t, r, (a = t.elementType === r ? a : Va(r, a)), n)
              );
            case 3:
              e: {
                if ((Iu(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  ei(e, t),
                  ii(t, r, null, n);
                var u = t.memoizedState;
                if (((r = u.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: u.cache,
                      transitions: u.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Tu(e, t, r, n, (a = Error(i(423))));
                    break e;
                  }
                  if (r !== a) {
                    t = Tu(e, t, r, n, (a = Error(i(424))));
                    break e;
                  }
                  for (
                    Ti = oa(t.stateNode.containerInfo.firstChild),
                      Ii = t,
                      Pi = !0,
                      Oi = null,
                      n = Wi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ji(), r === a)) {
                    t = zu(e, t, n);
                    break e;
                  }
                  yu(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xi(t),
                null === e && Li(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (u = a.children),
                Zr(r, a)
                  ? (u = null)
                  : null !== o && Zr(r, o) && (t.flags |= 32),
                xu(e, t),
                yu(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && Li(t), null;
            case 13:
              return Nu(e, t, n);
            case 4:
              return (
                Yi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Bi(t, null, r, n)) : yu(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                bu(e, t, r, (a = t.elementType === r ? a : Va(r, a)), n)
              );
            case 7:
              return yu(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return yu(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (u = a.value),
                  xa(Ha, r._currentValue),
                  (r._currentValue = u),
                  null !== o)
                )
                  if (ir(o.value, u)) {
                    if (o.children === a.children && !Ca.current) {
                      t = zu(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        u = o.child;
                        for (var l = s.firstContext; null !== l; ) {
                          if (l.context === r) {
                            if (1 === o.tag) {
                              (l = ti(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (l.next = l)
                                  : ((l.next = f.next), (f.next = l)),
                                  (c.pending = l);
                              }
                            }
                            (o.lanes |= n),
                              null !== (l = o.alternate) && (l.lanes |= n),
                              Ga(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          l = l.next;
                        }
                      } else if (10 === o.tag)
                        u = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (u = o.return)) throw Error(i(341));
                        (u.lanes |= n),
                          null !== (s = u.alternate) && (s.lanes |= n),
                          Ga(u, n, t),
                          (u = o.sibling);
                      } else u = o.child;
                      if (null !== u) u.return = o;
                      else
                        for (u = o; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (o = u.sibling)) {
                            (o.return = u.return), (u = o);
                            break;
                          }
                          u = u.return;
                        }
                      o = u;
                    }
                yu(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Qa(t, n),
                (r = r((a = Ya(a)))),
                (t.flags |= 1),
                yu(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Va((r = t.type), t.pendingProps)),
                ku(e, t, r, (a = Va(r.type, a)), n)
              );
            case 15:
              return wu(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Va(r, a)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                Pa(r) ? ((e = !0), Aa(t)) : (e = !1),
                Qa(t, n),
                fi(t, r, a),
                pi(t, r, a, n),
                Cu(null, t, r, !0, e, n)
              );
            case 19:
              return Fu(e, t, n);
            case 22:
              return Su(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var jl =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Fl(e) {
          this._internalRoot = e;
        }
        function zl(e) {
          this._internalRoot = e;
        }
        function Ul(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Vl(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Hl() {}
        function Bl(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var u = a;
              a = function () {
                var e = Ll(o);
                u.call(e);
              };
            }
            Al(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Ll(o);
                    i.call(e);
                  };
                }
                var o = Rl(t, r, e, 0, null, !1, 0, "", Hl);
                return (
                  (e._reactRootContainer = o),
                  (e[fa] = o.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  Zs(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var u = r;
                r = function () {
                  var e = Ll(s);
                  u.call(e);
                };
              }
              var s = Pl(e, 0, !1, null, 0, !1, 0, "", Hl);
              return (
                (e._reactRootContainer = s),
                (e[fa] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                Zs(function () {
                  Al(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Ll(o);
        }
        (zl.prototype.render = Fl.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Al(e, t, null, null);
          }),
          (zl.prototype.unmount = Fl.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Zs(function () {
                  Al(null, e, null, null);
                }),
                  (t[fa] = null);
              }
            }),
          (zl.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && Mt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    Ks(t, Je()),
                    0 === (6 & gs) && ((Ns = Je() + 500), za()));
                }
                break;
              case 13:
                var r = Hs();
                Zs(function () {
                  return Ws(e, 1, r);
                }),
                  Ml(e, 1);
            }
          }),
          (wt = function (e) {
            13 === e.tag && (Ws(e, 134217728, Hs()), Ml(e, 134217728));
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Hs(),
                n = Bs(e);
              Ws(e, n, t), Ml(e, n);
            }
          }),
          (xt = function () {
            return yt;
          }),
          (_t = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ya(r);
                      if (!a) throw Error(i(90));
                      q(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = Xs),
          (Pe = Zs);
        var Wl = {
            usingClientEntryPoint: !1,
            Events: [ma, ga, ya, Ce, Ie, Xs],
          },
          $l = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.0.0-fc46dba67-20220329",
            rendererPackageName: "react-dom",
          },
          Kl = {
            bundleType: $l.bundleType,
            version: $l.version,
            rendererPackageName: $l.rendererPackageName,
            rendererConfig: $l.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              $l.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.0.0-fc46dba67-20220329",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ql.isDisabled && ql.supportsFiber)
            try {
              (at = ql.inject(Kl)), (it = ql);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wl),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ul(t)) throw Error(i(200));
            return Ol(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ul(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = jl;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Pl(e, 1, !1, null, 0, n, 0, r, a)),
              (e[fa] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Fl(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return Zs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Vl(t)) throw Error(i(200));
            return Bl(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ul(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              u = jl;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError)),
              (t = Rl(t, null, e, 1, null != n ? n : null, a, 0, o, u)),
              (e[fa] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new zl(t);
          }),
          (t.render = function (e, t, n) {
            if (!Vl(t)) throw Error(i(200));
            return Bl(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Vl(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (Zs(function () {
                Bl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[fa] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = Xs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Vl(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return Bl(e, t, n, !1, r);
          }),
          (t.version = "18.0.0-fc46dba67-20220329");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      372: function (e, t) {
        "use strict";
        var n = 60103,
          r = 60106,
          a = 60107,
          i = 60108,
          o = 60114,
          u = 60109,
          s = 60110,
          l = 60112,
          c = 60113,
          f = 60120,
          d = 60115,
          p = 60116,
          h = 60121,
          v = 60122,
          m = 60117,
          g = 60129,
          y = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var b = Symbol.for;
          (n = b("react.element")),
            (r = b("react.portal")),
            (a = b("react.fragment")),
            (i = b("react.strict_mode")),
            (o = b("react.profiler")),
            (u = b("react.provider")),
            (s = b("react.context")),
            (l = b("react.forward_ref")),
            (c = b("react.suspense")),
            (f = b("react.suspense_list")),
            (d = b("react.memo")),
            (p = b("react.lazy")),
            (h = b("react.block")),
            (v = b("react.server.block")),
            (m = b("react.fundamental")),
            (g = b("react.debug_trace_mode")),
            (y = b("react.legacy_hidden"));
        }
        function k(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case a:
                  case o:
                  case i:
                  case c:
                  case f:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case l:
                      case p:
                      case d:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === a ||
            e === o ||
            e === g ||
            e === i ||
            e === c ||
            e === f ||
            e === y ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === p ||
                e.$$typeof === d ||
                e.$$typeof === u ||
                e.$$typeof === s ||
                e.$$typeof === l ||
                e.$$typeof === m ||
                e.$$typeof === h ||
                e[0] === v))
          );
        }),
          (t.typeOf = k);
      },
      441: function (e, t, n) {
        "use strict";
        e.exports = n(372);
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          u =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) {
          var r,
            i = {},
            l = null,
            c = null;
          for (r in (void 0 !== n && (l = "" + n),
          void 0 !== t.key && (l = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: l,
            ref: c,
            props: i,
            _owner: u.current,
          };
        }
        (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var k = (b.prototype = new y());
        (k.constructor = b), v(k, g.prototype), (k.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          x = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            i = {},
            o = null,
            u = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              S.call(t, a) && !_.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
            i.children = l;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: u,
            props: i,
            _owner: x.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var I = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, i, o) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (u) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === i ? "." + T(s, 0) : i),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(I, "$&/") + "/"),
                  P(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(I, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), w(e)))
            for (var l = 0; l < e.length; l++) {
              var c = i + T((u = e[l]), l);
              s += P(u, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), l = 0; !(u = e.next()).done; )
              s += P((u = u.value), t, a, (c = i + T(u, l++)), o);
          else if ("object" === u)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          A = { transition: null },
          L = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: x,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              i = e.key,
              o = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (u = x.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (l in t)
                S.call(t, l) &&
                  !_.hasOwnProperty(l) &&
                  (a[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) a.children = r;
            else if (1 < l) {
              s = Array(l);
              for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: u, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.1.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      727: function (e) {
        var t = (function (e) {
          "use strict";
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            a = "function" === typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            o = a.asyncIterator || "@@asyncIterator",
            u = a.toStringTag || "@@toStringTag";
          function s(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            s({}, "");
          } catch (N) {
            s = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function l(e, t, n, r) {
            var a = t && t.prototype instanceof m ? t : m,
              i = Object.create(a.prototype),
              o = new T(r || []);
            return (
              (i._invoke = (function (e, t, n) {
                var r = f;
                return function (a, i) {
                  if (r === p) throw new Error("Generator is already running");
                  if (r === h) {
                    if ("throw" === a) throw i;
                    return O();
                  }
                  for (n.method = a, n.arg = i; ; ) {
                    var o = n.delegate;
                    if (o) {
                      var u = E(o, n);
                      if (u) {
                        if (u === v) continue;
                        return u;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === f) throw ((r = h), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = p;
                    var s = c(e, t, n);
                    if ("normal" === s.type) {
                      if (((r = n.done ? h : d), s.arg === v)) continue;
                      return { value: s.arg, done: n.done };
                    }
                    "throw" === s.type &&
                      ((r = h), (n.method = "throw"), (n.arg = s.arg));
                  }
                };
              })(e, n, o)),
              i
            );
          }
          function c(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (N) {
              return { type: "throw", arg: N };
            }
          }
          e.wrap = l;
          var f = "suspendedStart",
            d = "suspendedYield",
            p = "executing",
            h = "completed",
            v = {};
          function m() {}
          function g() {}
          function y() {}
          var b = {};
          s(b, i, function () {
            return this;
          });
          var k = Object.getPrototypeOf,
            w = k && k(k(P([])));
          w && w !== n && r.call(w, i) && (b = w);
          var S = (y.prototype = m.prototype = Object.create(b));
          function x(e) {
            ["next", "throw", "return"].forEach(function (t) {
              s(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function _(e, t) {
            function n(a, i, o, u) {
              var s = c(e[a], e, i);
              if ("throw" !== s.type) {
                var l = s.arg,
                  f = l.value;
                return f && "object" === typeof f && r.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, o, u);
                      },
                      function (e) {
                        n("throw", e, o, u);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (l.value = e), o(l);
                      },
                      function (e) {
                        return n("throw", e, o, u);
                      }
                    );
              }
              u(s.arg);
            }
            var a;
            this._invoke = function (e, r) {
              function i() {
                return new t(function (t, a) {
                  n(e, r, t, a);
                });
              }
              return (a = a ? a.then(i, i) : i());
            };
          }
          function E(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  E(e, n),
                  "throw" === n.method)
                )
                  return v;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return v;
            }
            var a = c(r, e.iterator, n.arg);
            if ("throw" === a.type)
              return (
                (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), v
              );
            var i = a.arg;
            return i
              ? i.done
                ? ((n[e.resultName] = i.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  v)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function C(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function I(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function T(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(C, this),
              this.reset(!0);
          }
          function P(e) {
            if (e) {
              var n = e[i];
              if (n) return n.call(e);
              if ("function" === typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < e.length; )
                      if (r.call(e, a))
                        return (n.value = e[a]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            return { next: O };
          }
          function O() {
            return { value: t, done: !0 };
          }
          return (
            (g.prototype = y),
            s(S, "constructor", y),
            s(y, "constructor", g),
            (g.displayName = s(y, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" === typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, y)
                  : ((e.__proto__ = y), s(e, u, "GeneratorFunction")),
                (e.prototype = Object.create(S)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            x(_.prototype),
            s(_.prototype, o, function () {
              return this;
            }),
            (e.AsyncIterator = _),
            (e.async = function (t, n, r, a, i) {
              void 0 === i && (i = Promise);
              var o = new _(l(t, n, r, a), i);
              return e.isGeneratorFunction(n)
                ? o
                : o.next().then(function (e) {
                    return e.done ? e.value : o.next();
                  });
            }),
            x(S),
            s(S, u, "Generator"),
            s(S, i, function () {
              return this;
            }),
            s(S, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = P),
            (T.prototype = {
              constructor: T,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(I),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function a(r, a) {
                  return (
                    (u.type = "throw"),
                    (u.arg = e),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = t)),
                    !!a
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    u = o.completion;
                  if ("root" === o.tryLoc) return a("end");
                  if (o.tryLoc <= this.prev) {
                    var s = r.call(o, "catchLoc"),
                      l = r.call(o, "finallyLoc");
                    if (s && l) {
                      if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var i = a;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var o = i ? i.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                    : this.complete(o)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  v
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), I(n), v;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      I(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: P(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  v
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (n) {
          "object" === typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var u = 2 * (r + 1) - 1,
                s = e[u],
                l = u + 1,
                c = e[l];
              if (0 > i(s, n))
                l < a && 0 > i(c, s)
                  ? ((e[r] = c), (e[l] = n), (r = l))
                  : ((e[r] = s), (e[u] = n), (r = u));
              else {
                if (!(l < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var u = Date,
            s = u.now();
          t.unstable_now = function () {
            return u.now() - s;
          };
        }
        var l = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(l, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), k(e), !v))
            if (null !== r(l)) (v = !0), A(S);
            else {
              var t = r(c);
              null !== t && L(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (v = !1), m && ((m = !1), y(C), (C = -1)), (h = !0);
          var i = p;
          try {
            for (
              k(n), d = r(l);
              null !== d && (!(d.expirationTime > n) || (e && !P()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var u = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof u
                    ? (d.callback = u)
                    : d === r(l) && a(l),
                  k(n);
              } else a(l);
              d = r(l);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && L(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          _ = !1,
          E = null,
          C = -1,
          I = 5,
          T = -1;
        function P() {
          return !(t.unstable_now() - T < I);
        }
        function O() {
          if (null !== E) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? x() : ((_ = !1), (E = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          x = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            R = N.port2;
          (N.port1.onmessage = O),
            (x = function () {
              R.postMessage(null);
            });
        } else
          x = function () {
            g(O, 0);
          };
        function A(e) {
          (E = e), _ || ((_ = !0), x());
        }
        function L(e, n) {
          C = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), A(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (I = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(l);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (u = i + u),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(l) &&
                    e === r(c) &&
                    (m ? (y(C), (C = -1)) : (m = !0), L(w, i - o)))
                : ((e.sortIndex = u), n(l, e), v || h || ((v = !0), A(S))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      613: function (e) {
        e.exports = function (e, t, n, r) {
          var a = n ? n.call(r, e, t) : void 0;
          if (void 0 !== a) return !!a;
          if (e === t) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof t || !t)
            return !1;
          var i = Object.keys(e),
            o = Object.keys(t);
          if (i.length !== o.length) return !1;
          for (
            var u = Object.prototype.hasOwnProperty.bind(t), s = 0;
            s < i.length;
            s++
          ) {
            var l = i[s];
            if (!u(l)) return !1;
            var c = e[l],
              f = t[l];
            if (
              !1 === (a = n ? n.call(r, c, f, l) : void 0) ||
              (void 0 === a && c !== f)
            )
              return !1;
          }
          return !0;
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n(250);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(e, t)
              : void 0
          );
        }
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                u = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (s) {
                (u = !0), (a = s);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (u) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          u.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var s = function (e) {
        return e;
      };
      var l = "beforeunload",
        c = "popstate";
      function f(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function d() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function p() {
        return Math.random().toString(36).substr(2, 8);
      }
      function h(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          o = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function v(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      var m = (0, t.createContext)(null);
      var g = (0, t.createContext)(null);
      var y = (0, t.createContext)({ outlet: null, matches: [] });
      function b(e, t) {
        if (!e) throw new Error(t);
      }
      function k(e, t, n) {
        void 0 === n && (n = "/");
        var r = T(("string" === typeof t ? v(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = w(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var i = null, o = 0; null == i && o < a.length; ++o)
          i = E(a[o], r);
        return i;
      }
      function w(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var i = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            i.relativePath.startsWith("/") &&
              (i.relativePath.startsWith(r) || b(!1),
              (i.relativePath = i.relativePath.slice(r.length)));
            var o = P([r, i.relativePath]),
              u = n.concat(i);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && b(!1), w(e.children, t, u, o)),
              (null != e.path || e.index) &&
                t.push({ path: o, score: _(o, e.index), routesMeta: u });
          }),
          t
        );
      }
      var S = /^:\w+$/,
        x = function (e) {
          return "*" === e;
        };
      function _(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(x) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !x(e);
            })
            .reduce(function (e, t) {
              return e + (S.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function E(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", i = [], o = 0;
          o < n.length;
          ++o
        ) {
          var u = n[o],
            s = o === n.length - 1,
            l = "/" === a ? t : t.slice(a.length) || "/",
            c = C(
              { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
              l
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = u.route;
          i.push({
            params: r,
            pathname: P([a, c.pathname]),
            pathnameBase: O(P([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = P([a, c.pathnameBase]));
        }
        return i;
      }
      function C(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = o(n, 2),
          a = r[0],
          i = r[1],
          u = t.match(a);
        if (!u) return null;
        var s = u[0],
          l = s.replace(/(.)\/+$/, "$1"),
          c = u.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              l = s.slice(0, s.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return e;
                }
              })(c[n] || "")),
              e
            );
          }, {}),
          pathname: s,
          pathnameBase: l,
          pattern: e,
        };
      }
      function I(e, t, n) {
        var r,
          a = "string" === typeof e ? v(e) : e,
          i = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == i) r = n;
        else {
          var o = t.length - 1;
          if (i.startsWith("..")) {
            for (var u = i.split("/"); ".." === u[0]; ) u.shift(), (o -= 1);
            a.pathname = u.join("/");
          }
          r = o >= 0 ? t[o] : "/";
        }
        var s = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? v(e) : e,
            r = n.pathname,
            a = n.search,
            i = void 0 === a ? "" : a,
            o = n.hash,
            u = void 0 === o ? "" : o,
            s = r
              ? r.startsWith("/")
                ? r
                : (function (e, t) {
                    var n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(r, t)
              : t;
          return { pathname: s, search: N(i), hash: R(u) };
        })(a, r);
        return (
          i &&
            "/" !== i &&
            i.endsWith("/") &&
            !s.pathname.endsWith("/") &&
            (s.pathname += "/"),
          s
        );
      }
      function T(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      var P = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        O = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        N = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        R = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function A(e) {
        L() || b(!1);
        var n = (0, t.useContext)(m),
          r = n.basename,
          a = n.navigator,
          i = j(e),
          o = i.hash,
          u = i.pathname,
          s = i.search,
          l = u;
        if ("/" !== r) {
          var c = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? v(e).pathname
                : e.pathname;
            })(e),
            f = null != c && c.endsWith("/");
          l = "/" === u ? r + (f ? "/" : "") : P([r, u]);
        }
        return a.createHref({ pathname: l, search: s, hash: o });
      }
      function L() {
        return null != (0, t.useContext)(g);
      }
      function D() {
        return L() || b(!1), (0, t.useContext)(g).location;
      }
      function M() {
        L() || b(!1);
        var e = (0, t.useContext)(m),
          n = e.basename,
          r = e.navigator,
          a = (0, t.useContext)(y).matches,
          i = D().pathname,
          o = JSON.stringify(
            a.map(function (e) {
              return e.pathnameBase;
            })
          ),
          u = (0, t.useRef)(!1);
        return (
          (0, t.useEffect)(function () {
            u.current = !0;
          }),
          (0, t.useCallback)(
            function (e, t) {
              if ((void 0 === t && (t = {}), u.current))
                if ("number" !== typeof e) {
                  var a = I(e, JSON.parse(o), i);
                  "/" !== n && (a.pathname = P([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state);
                } else r.go(e);
            },
            [n, r, o, i]
          )
        );
      }
      function j(e) {
        var n = (0, t.useContext)(y).matches,
          r = D().pathname,
          a = JSON.stringify(
            n.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, t.useMemo)(
          function () {
            return I(e, JSON.parse(a), r);
          },
          [e, a, r]
        );
      }
      function F(e, n) {
        return (
          void 0 === n && (n = []),
          null == e
            ? null
            : e.reduceRight(function (r, a, i) {
                return (0,
                t.createElement)(y.Provider, { children: void 0 !== a.route.element ? a.route.element : r, value: { outlet: r, matches: n.concat(e.slice(0, i + 1)) } });
              }, null)
        );
      }
      function z(e) {
        b(!1);
      }
      function U(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          i = n.children,
          o = void 0 === i ? null : i,
          u = n.location,
          s = n.navigationType,
          l = void 0 === s ? e.Pop : s,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        L() && b(!1);
        var p = O(a),
          h = (0, t.useMemo)(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof u && (u = v(u));
        var y = u,
          k = y.pathname,
          w = void 0 === k ? "/" : k,
          S = y.search,
          x = void 0 === S ? "" : S,
          _ = y.hash,
          E = void 0 === _ ? "" : _,
          C = y.state,
          I = void 0 === C ? null : C,
          P = y.key,
          N = void 0 === P ? "default" : P,
          R = (0, t.useMemo)(
            function () {
              var e = T(w, p);
              return null == e
                ? null
                : { pathname: e, search: x, hash: E, state: I, key: N };
            },
            [p, w, x, E, I, N]
          );
        return null == R
          ? null
          : (0, t.createElement)(
              m.Provider,
              { value: h },
              (0, t.createElement)(g.Provider, {
                children: o,
                value: { location: R, navigationType: l },
              })
            );
      }
      function V(e) {
        var n = e.children,
          r = e.location;
        return (function (e, n) {
          L() || b(!1);
          var r,
            a = (0, t.useContext)(y).matches,
            i = a[a.length - 1],
            o = i ? i.params : {},
            u = (i && i.pathname, i ? i.pathnameBase : "/"),
            s = (i && i.route, D());
          if (n) {
            var l,
              c = "string" === typeof n ? v(n) : n;
            "/" === u ||
              (null == (l = c.pathname) ? void 0 : l.startsWith(u)) ||
              b(!1),
              (r = c);
          } else r = s;
          var f = r.pathname || "/",
            d = k(e, { pathname: "/" === u ? f : f.slice(u.length) || "/" });
          return F(
            d &&
              d.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, o, e.params),
                  pathname: P([u, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? u : P([u, e.pathnameBase]),
                });
              }),
            a
          );
        })(H(n), r);
      }
      function H(e) {
        var n = [];
        return (
          t.Children.forEach(e, function (e) {
            if ((0, t.isValidElement)(e))
              if (e.type !== t.Fragment) {
                e.type !== z && b(!1);
                var r = {
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  index: e.props.index,
                  path: e.props.path,
                };
                e.props.children && (r.children = H(e.props.children)),
                  n.push(r);
              } else n.push.apply(n, H(e.props.children));
          }),
          n
        );
      }
      function B() {
        return (
          (B =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          B.apply(this, arguments)
        );
      }
      function W(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var $ = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
        K = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function q(n) {
        var r = n.basename,
          a = n.children,
          i = n.window,
          m = (0, t.useRef)();
        null == m.current &&
          (m.current = (function (t) {
            void 0 === t && (t = {});
            var n = t.window,
              r = void 0 === n ? document.defaultView : n,
              a = r.history;
            function i() {
              var e = r.location,
                t = e.pathname,
                n = e.search,
                i = e.hash,
                o = a.state || {};
              return [
                o.idx,
                s({
                  pathname: t,
                  search: n,
                  hash: i,
                  state: o.usr || null,
                  key: o.key || "default",
                }),
              ];
            }
            var o = null;
            r.addEventListener(c, function () {
              if (o) w.call(o), (o = null);
              else {
                var t = e.Pop,
                  n = i(),
                  r = n[0],
                  a = n[1];
                if (w.length) {
                  if (null != r) {
                    var u = y - r;
                    u &&
                      ((o = {
                        action: t,
                        location: a,
                        retry: function () {
                          I(-1 * u);
                        },
                      }),
                      I(u));
                  }
                } else C(t);
              }
            });
            var m = e.Pop,
              g = i(),
              y = g[0],
              b = g[1],
              k = d(),
              w = d();
            function S(e) {
              return "string" === typeof e ? e : h(e);
            }
            function x(e, t) {
              return (
                void 0 === t && (t = null),
                s(
                  u(
                    { pathname: b.pathname, hash: "", search: "" },
                    "string" === typeof e ? v(e) : e,
                    { state: t, key: p() }
                  )
                )
              );
            }
            function _(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, S(e)];
            }
            function E(e, t, n) {
              return (
                !w.length || (w.call({ action: e, location: t, retry: n }), !1)
              );
            }
            function C(e) {
              m = e;
              var t = i();
              (y = t[0]), (b = t[1]), k.call({ action: m, location: b });
            }
            function I(e) {
              a.go(e);
            }
            null == y &&
              ((y = 0), a.replaceState(u({}, a.state, { idx: y }), ""));
            var T = {
              get action() {
                return m;
              },
              get location() {
                return b;
              },
              createHref: S,
              push: function t(n, i) {
                var o = e.Push,
                  u = x(n, i);
                if (
                  E(o, u, function () {
                    t(n, i);
                  })
                ) {
                  var s = _(u, y + 1),
                    l = s[0],
                    c = s[1];
                  try {
                    a.pushState(l, "", c);
                  } catch (f) {
                    r.location.assign(c);
                  }
                  C(o);
                }
              },
              replace: function t(n, r) {
                var i = e.Replace,
                  o = x(n, r);
                if (
                  E(i, o, function () {
                    t(n, r);
                  })
                ) {
                  var u = _(o, y),
                    s = u[0],
                    l = u[1];
                  a.replaceState(s, "", l), C(i);
                }
              },
              go: I,
              back: function () {
                I(-1);
              },
              forward: function () {
                I(1);
              },
              listen: function (e) {
                return k.push(e);
              },
              block: function (e) {
                var t = w.push(e);
                return (
                  1 === w.length && r.addEventListener(l, f),
                  function () {
                    t(), w.length || r.removeEventListener(l, f);
                  }
                );
              },
            };
            return T;
          })({ window: i }));
        var g = m.current,
          y = o((0, t.useState)({ action: g.action, location: g.location }), 2),
          b = y[0],
          k = y[1];
        return (
          (0, t.useLayoutEffect)(
            function () {
              return g.listen(k);
            },
            [g]
          ),
          (0, t.createElement)(U, {
            basename: r,
            children: a,
            location: b.location,
            navigationType: b.action,
            navigator: g,
          })
        );
      }
      var G = (0, t.forwardRef)(function (e, n) {
        var r = e.onClick,
          a = e.reloadDocument,
          i = e.replace,
          o = void 0 !== i && i,
          u = e.state,
          s = e.target,
          l = e.to,
          c = W(e, $),
          f = A(l),
          d = (function (e, n) {
            var r = void 0 === n ? {} : n,
              a = r.target,
              i = r.replace,
              o = r.state,
              u = M(),
              s = D(),
              l = j(e);
            return (0, t.useCallback)(
              function (t) {
                if (
                  0 === t.button &&
                  (!a || "_self" === a) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(t)
                ) {
                  t.preventDefault();
                  var n = !!i || h(s) === h(l);
                  u(e, { replace: n, state: o });
                }
              },
              [s, u, l, i, o, a, e]
            );
          })(l, { replace: o, state: u, target: s });
        return (0, t.createElement)(
          "a",
          B({}, c, {
            href: f,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || a || d(e);
            },
            ref: n,
            target: s,
          })
        );
      });
      var Q = (0, t.forwardRef)(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          i = e.caseSensitive,
          o = void 0 !== i && i,
          u = e.className,
          s = void 0 === u ? "" : u,
          l = e.end,
          c = void 0 !== l && l,
          f = e.style,
          d = e.to,
          p = e.children,
          h = W(e, K),
          v = D(),
          m = j(d),
          g = v.pathname,
          y = m.pathname;
        o || ((g = g.toLowerCase()), (y = y.toLowerCase()));
        var b,
          k = g === y || (!c && g.startsWith(y) && "/" === g.charAt(y.length)),
          w = k ? a : void 0;
        b =
          "function" === typeof s
            ? s({ isActive: k })
            : [s, k ? "active" : null].filter(Boolean).join(" ");
        var S = "function" === typeof f ? f({ isActive: k }) : f;
        return (0,
        t.createElement)(G, B({}, h, { "aria-current": w, className: b, ref: n, style: S, to: d }), "function" === typeof p ? p({ isActive: k }) : p);
      });
      var Y = n(184),
        J = function () {
          var e = "https://nimahabibi.de/shop/image/";
          return (0, Y.jsx)("footer", {
            children: (0, Y.jsxs)("ul", {
              children: [
                (0, Y.jsx)(Q, {
                  to: "/",
                  children: (0, Y.jsx)("li", {
                    className: "Home",
                    children: (0, Y.jsx)("img", {
                      src: e + "icon/home.svg",
                      alt: "home icon",
                    }),
                  }),
                }),
                (0, Y.jsx)(Q, {
                  to: "favourites",
                  children: (0, Y.jsx)("li", {
                    children: (0, Y.jsx)("img", {
                      src: e + "icon/favorite_menue.svg",
                      alt: "favorite icon",
                    }),
                  }),
                }),
                (0, Y.jsx)(Q, {
                  to: "login",
                  children: (0, Y.jsx)("li", {
                    children: (0, Y.jsx)("img", {
                      src: e + "icon/person.svg",
                      alt: "person icon",
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        X = function (e) {
          var t = e.doClick,
            n = e.catObject,
            r = e.imagesPath;
          return (0, Y.jsxs)("article", {
            onClick: function () {
              return t(n.catName);
            },
            style: { background: n.bgColor },
            children: [
              (0, Y.jsx)("img", { src: r + n.imageUrl, alt: "Sofa" }),
              (0, Y.jsx)("p", { children: n.catName }),
            ],
          });
        },
        Z = function (e) {
          var t = e.ProductObject,
            n = e.toggleFav,
            r = e.FavouriteIcon;
          return (0, Y.jsx)("div", {
            className: "card",
            children: (0, Y.jsxs)("div", {
              className: "products",
              children: [
                (0, Y.jsxs)(Q, {
                  to: "product/".concat(t.id),
                  className: "NavLink",
                  children: [
                    (0, Y.jsx)("div", {
                      className: "imageContainer",
                      children: (0, Y.jsx)("img", {
                        className: "ProductImage",
                        src: t.image,
                        alt: "Product's image",
                      }),
                    }),
                    (0, Y.jsxs)("div", {
                      className: "product-detail",
                      children: [
                        (0, Y.jsx)("p", {
                          className: "Price",
                          children: t.price + " \u20ac",
                        }),
                        (0, Y.jsx)("p", { children: t.mark }),
                        (0, Y.jsx)("p", {
                          className: "product_title",
                          children: t.title.substring(0, 20) + "...",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Y.jsx)("div", {
                  className: "Favorite",
                  children: (0, Y.jsx)("img", {
                    src: r,
                    alt: "Favorite Icon",
                    onClick: n,
                  }),
                }),
              ],
            }),
          });
        };
      function ee(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var te = n(441),
        ne = n(613),
        re = n.n(ne);
      var ae = function (e) {
          function t(e, r, s, l, d) {
            for (
              var p,
                h,
                v,
                m,
                k,
                S = 0,
                x = 0,
                _ = 0,
                E = 0,
                C = 0,
                R = 0,
                L = (v = p = 0),
                M = 0,
                j = 0,
                F = 0,
                z = 0,
                U = s.length,
                V = U - 1,
                H = "",
                B = "",
                W = "",
                $ = "";
              M < U;

            ) {
              if (
                ((h = s.charCodeAt(M)),
                M === V &&
                  0 !== x + E + _ + S &&
                  (0 !== x && (h = 47 === x ? 10 : 47),
                  (E = _ = S = 0),
                  U++,
                  V++),
                0 === x + E + _ + S)
              ) {
                if (
                  M === V &&
                  (0 < j && (H = H.replace(f, "")), 0 < H.trim().length)
                ) {
                  switch (h) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      H += s.charAt(M);
                  }
                  h = 59;
                }
                switch (h) {
                  case 123:
                    for (
                      p = (H = H.trim()).charCodeAt(0), v = 1, z = ++M;
                      M < U;

                    ) {
                      switch ((h = s.charCodeAt(M))) {
                        case 123:
                          v++;
                          break;
                        case 125:
                          v--;
                          break;
                        case 47:
                          switch ((h = s.charCodeAt(M + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (L = M + 1; L < V; ++L)
                                  switch (s.charCodeAt(L)) {
                                    case 47:
                                      if (
                                        42 === h &&
                                        42 === s.charCodeAt(L - 1) &&
                                        M + 2 !== L
                                      ) {
                                        M = L + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === h) {
                                        M = L + 1;
                                        break e;
                                      }
                                  }
                                M = L;
                              }
                          }
                          break;
                        case 91:
                          h++;
                        case 40:
                          h++;
                        case 34:
                        case 39:
                          for (; M++ < V && s.charCodeAt(M) !== h; );
                      }
                      if (0 === v) break;
                      M++;
                    }
                    if (
                      ((v = s.substring(z, M)),
                      0 === p &&
                        (p = (H = H.replace(c, "").trim()).charCodeAt(0)),
                      64 === p)
                    ) {
                      switch (
                        (0 < j && (H = H.replace(f, "")), (h = H.charCodeAt(1)))
                      ) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          j = r;
                          break;
                        default:
                          j = N;
                      }
                      if (
                        ((z = (v = t(r, j, v, h, d + 1)).length),
                        0 < A &&
                          ((k = u(3, v, (j = n(N, H, F)), r, T, I, z, h, d, l)),
                          (H = j.join("")),
                          void 0 !== k &&
                            0 === (z = (v = k.trim()).length) &&
                            ((h = 0), (v = ""))),
                        0 < z)
                      )
                        switch (h) {
                          case 115:
                            H = H.replace(w, o);
                          case 100:
                          case 109:
                          case 45:
                            v = H + "{" + v + "}";
                            break;
                          case 107:
                            (v = (H = H.replace(g, "$1 $2")) + "{" + v + "}"),
                              (v =
                                1 === O || (2 === O && i("@" + v, 3))
                                  ? "@-webkit-" + v + "@" + v
                                  : "@" + v);
                            break;
                          default:
                            (v = H + v), 112 === l && ((B += v), (v = ""));
                        }
                      else v = "";
                    } else v = t(r, n(r, H, F), v, l, d + 1);
                    (W += v),
                      (v = F = j = L = p = 0),
                      (H = ""),
                      (h = s.charCodeAt(++M));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (z = (H = (0 < j ? H.replace(f, "") : H).trim()).length)
                    )
                      switch (
                        (0 === L &&
                          ((p = H.charCodeAt(0)),
                          45 === p || (96 < p && 123 > p)) &&
                          (z = (H = H.replace(" ", ":")).length),
                        0 < A &&
                          void 0 !==
                            (k = u(1, H, r, e, T, I, B.length, l, d, l)) &&
                          0 === (z = (H = k.trim()).length) &&
                          (H = "\0\0"),
                        (p = H.charCodeAt(0)),
                        (h = H.charCodeAt(1)),
                        p)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === h || 99 === h) {
                            $ += H + s.charAt(M);
                            break;
                          }
                        default:
                          58 !== H.charCodeAt(z - 1) &&
                            (B += a(H, p, h, H.charCodeAt(2)));
                      }
                    (F = j = L = p = 0), (H = ""), (h = s.charCodeAt(++M));
                }
              }
              switch (h) {
                case 13:
                case 10:
                  47 === x
                    ? (x = 0)
                    : 0 === 1 + p &&
                      107 !== l &&
                      0 < H.length &&
                      ((j = 1), (H += "\0")),
                    0 < A * D && u(0, H, r, e, T, I, B.length, l, d, l),
                    (I = 1),
                    T++;
                  break;
                case 59:
                case 125:
                  if (0 === x + E + _ + S) {
                    I++;
                    break;
                  }
                default:
                  switch ((I++, (m = s.charAt(M)), h)) {
                    case 9:
                    case 32:
                      if (0 === E + S + x)
                        switch (C) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            m = "";
                            break;
                          default:
                            32 !== h && (m = " ");
                        }
                      break;
                    case 0:
                      m = "\\0";
                      break;
                    case 12:
                      m = "\\f";
                      break;
                    case 11:
                      m = "\\v";
                      break;
                    case 38:
                      0 === E + x + S && ((j = F = 1), (m = "\f" + m));
                      break;
                    case 108:
                      if (0 === E + x + S + P && 0 < L)
                        switch (M - L) {
                          case 2:
                            112 === C && 58 === s.charCodeAt(M - 3) && (P = C);
                          case 8:
                            111 === R && (P = R);
                        }
                      break;
                    case 58:
                      0 === E + x + S && (L = M);
                      break;
                    case 44:
                      0 === x + _ + E + S && ((j = 1), (m += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === x && (E = E === h ? 0 : 0 === E ? h : E);
                      break;
                    case 91:
                      0 === E + x + _ && S++;
                      break;
                    case 93:
                      0 === E + x + _ && S--;
                      break;
                    case 41:
                      0 === E + x + S && _--;
                      break;
                    case 40:
                      if (0 === E + x + S) {
                        if (0 === p)
                          if (2 * C + 3 * R === 533);
                          else p = 1;
                        _++;
                      }
                      break;
                    case 64:
                      0 === x + _ + E + S + L + v && (v = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < E + S + _))
                        switch (x) {
                          case 0:
                            switch (2 * h + 3 * s.charCodeAt(M + 1)) {
                              case 235:
                                x = 47;
                                break;
                              case 220:
                                (z = M), (x = 42);
                            }
                            break;
                          case 42:
                            47 === h &&
                              42 === C &&
                              z + 2 !== M &&
                              (33 === s.charCodeAt(z + 2) &&
                                (B += s.substring(z, M + 1)),
                              (m = ""),
                              (x = 0));
                        }
                  }
                  0 === x && (H += m);
              }
              (R = C), (C = h), M++;
            }
            if (0 < (z = B.length)) {
              if (
                ((j = r),
                0 < A &&
                  void 0 !== (k = u(2, B, j, e, T, I, z, l, d, l)) &&
                  0 === (B = k).length)
              )
                return $ + B + W;
              if (((B = j.join(",") + "{" + B + "}"), 0 !== O * P)) {
                switch ((2 !== O || i(B, 2) || (P = 0), P)) {
                  case 111:
                    B = B.replace(b, ":-moz-$1") + B;
                    break;
                  case 112:
                    B =
                      B.replace(y, "::-webkit-input-$1") +
                      B.replace(y, "::-moz-$1") +
                      B.replace(y, ":-ms-input-$1") +
                      B;
                }
                P = 0;
              }
            }
            return $ + B + W;
          }
          function n(e, t, n) {
            var a = t.trim().split(v);
            t = a;
            var i = a.length,
              o = e.length;
            switch (o) {
              case 0:
              case 1:
                var u = 0;
                for (e = 0 === o ? "" : e[0] + " "; u < i; ++u)
                  t[u] = r(e, t[u], n).trim();
                break;
              default:
                var s = (u = 0);
                for (t = []; u < i; ++u)
                  for (var l = 0; l < o; ++l)
                    t[s++] = r(e[l] + " ", a[u], n).trim();
            }
            return t;
          }
          function r(e, t, n) {
            var r = t.charCodeAt(0);
            switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
              case 38:
                return t.replace(m, "$1" + e.trim());
              case 58:
                return e.trim() + t.replace(m, "$1" + e.trim());
              default:
                if (0 < 1 * n && 0 < t.indexOf("\f"))
                  return t.replace(
                    m,
                    (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                  );
            }
            return e + t;
          }
          function a(e, t, n, r) {
            var o = e + ";",
              u = 2 * t + 3 * n + 4 * r;
            if (944 === u) {
              e = o.indexOf(":", 9) + 1;
              var s = o.substring(e, o.length - 1).trim();
              return (
                (s = o.substring(0, e).trim() + s + ";"),
                1 === O || (2 === O && i(s, 1)) ? "-webkit-" + s + s : s
              );
            }
            if (0 === O || (2 === O && !i(o, 1))) return o;
            switch (u) {
              case 1015:
                return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
              case 951:
                return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
              case 963:
                return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
              case 1009:
                if (100 !== o.charCodeAt(4)) break;
              case 969:
              case 942:
                return "-webkit-" + o + o;
              case 978:
                return "-webkit-" + o + "-moz-" + o + o;
              case 1019:
              case 983:
                return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
              case 883:
                if (45 === o.charCodeAt(8)) return "-webkit-" + o + o;
                if (0 < o.indexOf("image-set(", 11))
                  return o.replace(C, "$1-webkit-$2") + o;
                break;
              case 932:
                if (45 === o.charCodeAt(4))
                  switch (o.charCodeAt(5)) {
                    case 103:
                      return (
                        "-webkit-box-" +
                        o.replace("-grow", "") +
                        "-webkit-" +
                        o +
                        "-ms-" +
                        o.replace("grow", "positive") +
                        o
                      );
                    case 115:
                      return (
                        "-webkit-" +
                        o +
                        "-ms-" +
                        o.replace("shrink", "negative") +
                        o
                      );
                    case 98:
                      return (
                        "-webkit-" +
                        o +
                        "-ms-" +
                        o.replace("basis", "preferred-size") +
                        o
                      );
                  }
                return "-webkit-" + o + "-ms-" + o + o;
              case 964:
                return "-webkit-" + o + "-ms-flex-" + o + o;
              case 1023:
                if (99 !== o.charCodeAt(8)) break;
                return (
                  "-webkit-box-pack" +
                  (s = o
                    .substring(o.indexOf(":", 15))
                    .replace("flex-", "")
                    .replace("space-between", "justify")) +
                  "-webkit-" +
                  o +
                  "-ms-flex-pack" +
                  s +
                  o
                );
              case 1005:
                return p.test(o)
                  ? o.replace(d, ":-webkit-") + o.replace(d, ":-moz-") + o
                  : o;
              case 1e3:
                switch (
                  ((t = (s = o.substring(13).trim()).indexOf("-") + 1),
                  s.charCodeAt(0) + s.charCodeAt(t))
                ) {
                  case 226:
                    s = o.replace(k, "tb");
                    break;
                  case 232:
                    s = o.replace(k, "tb-rl");
                    break;
                  case 220:
                    s = o.replace(k, "lr");
                    break;
                  default:
                    return o;
                }
                return "-webkit-" + o + "-ms-" + s + o;
              case 1017:
                if (-1 === o.indexOf("sticky", 9)) break;
              case 975:
                switch (
                  ((t = (o = e).length - 10),
                  (u =
                    (s = (33 === o.charCodeAt(t) ? o.substring(0, t) : o)
                      .substring(e.indexOf(":", 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | s.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > s.charCodeAt(8)) break;
                  case 115:
                    o = o.replace(s, "-webkit-" + s) + ";" + o;
                    break;
                  case 207:
                  case 102:
                    o =
                      o.replace(
                        s,
                        "-webkit-" + (102 < u ? "inline-" : "") + "box"
                      ) +
                      ";" +
                      o.replace(s, "-webkit-" + s) +
                      ";" +
                      o.replace(s, "-ms-" + s + "box") +
                      ";" +
                      o;
                }
                return o + ";";
              case 938:
                if (45 === o.charCodeAt(5))
                  switch (o.charCodeAt(6)) {
                    case 105:
                      return (
                        (s = o.replace("-items", "")),
                        "-webkit-" +
                          o +
                          "-webkit-box-" +
                          s +
                          "-ms-flex-" +
                          s +
                          o
                      );
                    case 115:
                      return (
                        "-webkit-" + o + "-ms-flex-item-" + o.replace(x, "") + o
                      );
                    default:
                      return (
                        "-webkit-" +
                        o +
                        "-ms-flex-line-pack" +
                        o.replace("align-content", "").replace(x, "") +
                        o
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === E.test(e))
                  return 115 ===
                    (s = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                    ? a(
                        e.replace("stretch", "fill-available"),
                        t,
                        n,
                        r
                      ).replace(":fill-available", ":stretch")
                    : o.replace(s, "-webkit-" + s) +
                        o.replace(s, "-moz-" + s.replace("fill-", "")) +
                        o;
                break;
              case 962:
                if (
                  ((o =
                    "-webkit-" +
                    o +
                    (102 === o.charCodeAt(5) ? "-ms-" + o : "") +
                    o),
                  211 === n + r &&
                    105 === o.charCodeAt(13) &&
                    0 < o.indexOf("transform", 10))
                )
                  return (
                    o
                      .substring(0, o.indexOf(";", 27) + 1)
                      .replace(h, "$1-webkit-$2") + o
                  );
            }
            return o;
          }
          function i(e, t) {
            var n = e.indexOf(1 === t ? ":" : "{"),
              r = e.substring(0, 3 !== t ? n : 10);
            return (
              (n = e.substring(n + 1, e.length - 1)),
              L(2 !== t ? r : r.replace(_, "$1"), n, t)
            );
          }
          function o(e, t) {
            var n = a(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return n !== t + ";"
              ? n.replace(S, " or ($1)").substring(4)
              : "(" + t + ")";
          }
          function u(e, t, n, r, a, i, o, u, s, c) {
            for (var f, d = 0, p = t; d < A; ++d)
              switch ((f = R[d].call(l, e, p, n, r, a, i, o, u, s, c))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  p = f;
              }
            if (p !== t) return p;
          }
          function s(e) {
            return (
              void 0 !== (e = e.prefix) &&
                ((L = null),
                e
                  ? "function" !== typeof e
                    ? (O = 1)
                    : ((O = 2), (L = e))
                  : (O = 0)),
              s
            );
          }
          function l(e, n) {
            var r = e;
            if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < A)) {
              var a = u(-1, n, r, r, T, I, 0, 0, 0, 0);
              void 0 !== a && "string" === typeof a && (n = a);
            }
            var i = t(N, r, n, 0, 0);
            return (
              0 < A &&
                void 0 !== (a = u(-2, i, r, r, T, I, i.length, 0, 0, 0)) &&
                (i = a),
              "",
              (P = 0),
              (I = T = 1),
              i
            );
          }
          var c = /^\0+/g,
            f = /[\0\r\f]/g,
            d = /: */g,
            p = /zoo|gra/,
            h = /([,: ])(transform)/g,
            v = /,\r+?/g,
            m = /([\t\r\n ])*\f?&/g,
            g = /@(k\w+)\s*(\S*)\s*/,
            y = /::(place)/g,
            b = /:(read-only)/g,
            k = /[svh]\w+-[tblr]{2}/,
            w = /\(\s*(.*)\s*\)/g,
            S = /([\s\S]*?);/g,
            x = /-self|flex-/g,
            _ = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            E = /stretch|:\s*\w+\-(?:conte|avail)/,
            C = /([^-])(image-set\()/,
            I = 1,
            T = 1,
            P = 0,
            O = 1,
            N = [],
            R = [],
            A = 0,
            L = null,
            D = 0;
          return (
            (l.use = function e(t) {
              switch (t) {
                case void 0:
                case null:
                  A = R.length = 0;
                  break;
                default:
                  if ("function" === typeof t) R[A++] = t;
                  else if ("object" === typeof t)
                    for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                  else D = 0 | !!t;
              }
              return e;
            }),
            (l.set = s),
            void 0 !== e && s(e),
            l
          );
        },
        ie = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      var oe =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        ue = (function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return (
            oe.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        }),
        se = n(110),
        le = n.n(se);
      function ce() {
        return (ce =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var fe = function (e, t) {
          for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
            n.push(t[r], e[r + 1]);
          return n;
        },
        de = function (e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "[object Object]" ===
              (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, te.typeOf)(e)
          );
        },
        pe = Object.freeze([]),
        he = Object.freeze({});
      function ve(e) {
        return "function" == typeof e;
      }
      function me(e) {
        return e.displayName || e.name || "Component";
      }
      function ge(e) {
        return e && "string" == typeof e.styledComponentId;
      }
      var ye =
          ("undefined" != typeof process &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          "data-styled",
        be = "undefined" != typeof window && "HTMLElement" in window,
        ke = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_DISABLE_SPEEDY
        );
      function we(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw new Error(
          "An error occurred. See https://git.io/JUIaE#" +
            e +
            " for more information." +
            (n.length > 0 ? " Args: " + n.join(", ") : "")
        );
      }
      var Se = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          var t = e.prototype;
          return (
            (t.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (t.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                  (a <<= 1) < 0 && we(16, "" + e);
                (this.groupSizes = new Uint32Array(a)),
                  this.groupSizes.set(n),
                  (this.length = a);
                for (var i = r; i < a; i++) this.groupSizes[i] = 0;
              }
              for (
                var o = this.indexOfGroup(e + 1), u = 0, s = t.length;
                u < s;
                u++
              )
                this.tag.insertRule(o, t[u]) && (this.groupSizes[e]++, o++);
            }),
            (t.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var a = n; a < r; a++) this.tag.deleteRule(n);
              }
            }),
            (t.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  a = r + n,
                  i = r;
                i < a;
                i++
              )
                t += this.tag.getRule(i) + "/*!sc*/\n";
              return t;
            }),
            e
          );
        })(),
        xe = new Map(),
        _e = new Map(),
        Ee = 1,
        Ce = function (e) {
          if (xe.has(e)) return xe.get(e);
          for (; _e.has(Ee); ) Ee++;
          var t = Ee++;
          return xe.set(e, t), _e.set(t, e), t;
        },
        Ie = function (e) {
          return _e.get(e);
        },
        Te = function (e, t) {
          t >= Ee && (Ee = t + 1), xe.set(e, t), _e.set(t, e);
        },
        Pe = "style[" + ye + '][data-styled-version="5.3.5"]',
        Oe = new RegExp(
          "^" + ye + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
        ),
        Ne = function (e, t, n) {
          for (var r, a = n.split(","), i = 0, o = a.length; i < o; i++)
            (r = a[i]) && e.registerName(t, r);
        },
        Re = function (e, t) {
          for (
            var n = (t.textContent || "").split("/*!sc*/\n"),
              r = [],
              a = 0,
              i = n.length;
            a < i;
            a++
          ) {
            var o = n[a].trim();
            if (o) {
              var u = o.match(Oe);
              if (u) {
                var s = 0 | parseInt(u[1], 10),
                  l = u[2];
                0 !== s &&
                  (Te(l, s), Ne(e, l, u[3]), e.getTag().insertRules(s, r)),
                  (r.length = 0);
              } else r.push(o);
            }
          }
        },
        Ae = function () {
          return "undefined" != typeof window &&
            void 0 !== window.__webpack_nonce__
            ? window.__webpack_nonce__
            : null;
        },
        Le = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            a = (function (e) {
              for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                var r = t[n];
                if (r && 1 === r.nodeType && r.hasAttribute(ye)) return r;
              }
            })(n),
            i = void 0 !== a ? a.nextSibling : null;
          r.setAttribute(ye, "active"),
            r.setAttribute("data-styled-version", "5.3.5");
          var o = Ae();
          return o && r.setAttribute("nonce", o), n.insertBefore(r, i), r;
        },
        De = (function () {
          function e(e) {
            var t = (this.element = Le(e));
            t.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, n = 0, r = t.length;
                  n < r;
                  n++
                ) {
                  var a = t[n];
                  if (a.ownerNode === e) return a;
                }
                we(17);
              })(t)),
              (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (t.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (t.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return void 0 !== t && "string" == typeof t.cssText
                ? t.cssText
                : "";
            }),
            e
          );
        })(),
        Me = (function () {
          function e(e) {
            var t = (this.element = Le(e));
            (this.nodes = t.childNodes), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t),
                  r = this.nodes[e];
                return (
                  this.element.insertBefore(n, r || null), this.length++, !0
                );
              }
              return !1;
            }),
            (t.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        je = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (t.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        Fe = be,
        ze = { isServer: !be, useCSSOMInjection: !ke },
        Ue = (function () {
          function e(e, t, n) {
            void 0 === e && (e = he),
              void 0 === t && (t = {}),
              (this.options = ce({}, ze, {}, e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                be &&
                Fe &&
                ((Fe = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(Pe), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    a &&
                      "active" !== a.getAttribute(ye) &&
                      (Re(e, a), a.parentNode && a.parentNode.removeChild(a));
                  }
                })(this));
          }
          e.registerId = function (e) {
            return Ce(e);
          };
          var t = e.prototype;
          return (
            (t.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  ce({}, this.options, {}, t),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (t.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (t.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((n = (t = this.options).isServer),
                  (r = t.useCSSOMInjection),
                  (a = t.target),
                  (e = n ? new je(a) : r ? new De(a) : new Me(a)),
                  new Se(e)))
              );
              var e, t, n, r, a;
            }),
            (t.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (t.registerName = function (e, t) {
              if ((Ce(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (t.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(Ce(e), n);
            }),
            (t.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (t.clearRules = function (e) {
              this.getTag().clearGroup(Ce(e)), this.clearNames(e);
            }),
            (t.clearTag = function () {
              this.tag = void 0;
            }),
            (t.toString = function () {
              return (function (e) {
                for (
                  var t = e.getTag(), n = t.length, r = "", a = 0;
                  a < n;
                  a++
                ) {
                  var i = Ie(a);
                  if (void 0 !== i) {
                    var o = e.names.get(i),
                      u = t.getGroup(a);
                    if (o && u && o.size) {
                      var s = ye + ".g" + a + '[id="' + i + '"]',
                        l = "";
                      void 0 !== o &&
                        o.forEach(function (e) {
                          e.length > 0 && (l += e + ",");
                        }),
                        (r += "" + u + s + '{content:"' + l + '"}/*!sc*/\n');
                    }
                  }
                }
                return r;
              })(this);
            }),
            e
          );
        })(),
        Ve = /(a)(d)/gi,
        He = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Be(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = He(t % 52) + n;
        return (He(t % 52) + n).replace(Ve, "$1-$2");
      }
      var We = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        $e = function (e) {
          return We(5381, e);
        };
      function Ke(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (ve(n) && !ge(n)) return !1;
        }
        return !0;
      }
      var qe = $e("5.3.5"),
        Ge = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && Ke(e)),
              (this.componentId = t),
              (this.baseHash = We(qe, t)),
              (this.baseStyle = n),
              Ue.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.componentId,
                a = [];
              if (
                (this.baseStyle &&
                  a.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
                this.isStatic && !n.hash)
              )
                if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
                  a.push(this.staticRulesId);
                else {
                  var i = dt(this.rules, e, t, n).join(""),
                    o = Be(We(this.baseHash, i) >>> 0);
                  if (!t.hasNameForId(r, o)) {
                    var u = n(i, "." + o, void 0, r);
                    t.insertRules(r, o, u);
                  }
                  a.push(o), (this.staticRulesId = o);
                }
              else {
                for (
                  var s = this.rules.length,
                    l = We(this.baseHash, n.hash),
                    c = "",
                    f = 0;
                  f < s;
                  f++
                ) {
                  var d = this.rules[f];
                  if ("string" == typeof d) c += d;
                  else if (d) {
                    var p = dt(d, e, t, n),
                      h = Array.isArray(p) ? p.join("") : p;
                    (l = We(l, h + f)), (c += h);
                  }
                }
                if (c) {
                  var v = Be(l >>> 0);
                  if (!t.hasNameForId(r, v)) {
                    var m = n(c, "." + v, void 0, r);
                    t.insertRules(r, v, m);
                  }
                  a.push(v);
                }
              }
              return a.join(" ");
            }),
            e
          );
        })(),
        Qe = /^\s*\/\/.*$/gm,
        Ye = [":", "[", ".", "#"];
      function Je(e) {
        var t,
          n,
          r,
          a,
          i = void 0 === e ? he : e,
          o = i.options,
          u = void 0 === o ? he : o,
          s = i.plugins,
          l = void 0 === s ? pe : s,
          c = new ae(u),
          f = [],
          d = (function (e) {
            function t(t) {
              if (t)
                try {
                  e(t + "}");
                } catch (e) {}
            }
            return function (n, r, a, i, o, u, s, l, c, f) {
              switch (n) {
                case 1:
                  if (0 === c && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                  break;
                case 2:
                  if (0 === l) return r + "/*|*/";
                  break;
                case 3:
                  switch (l) {
                    case 102:
                    case 112:
                      return e(a[0] + r), "";
                    default:
                      return r + (0 === f ? "/*|*/" : "");
                  }
                case -2:
                  r.split("/*|*/}").forEach(t);
              }
            };
          })(function (e) {
            f.push(e);
          }),
          p = function (e, r, i) {
            return (0 === r && -1 !== Ye.indexOf(i[n.length])) || i.match(a)
              ? e
              : "." + t;
          };
        function h(e, i, o, u) {
          void 0 === u && (u = "&");
          var s = e.replace(Qe, ""),
            l = i && o ? o + " " + i + " { " + s + " }" : s;
          return (
            (t = u),
            (n = i),
            (r = new RegExp("\\" + n + "\\b", "g")),
            (a = new RegExp("(\\" + n + "\\b){2,}")),
            c(o || !i ? "" : i, l)
          );
        }
        return (
          c.use(
            [].concat(l, [
              function (e, t, a) {
                2 === e &&
                  a.length &&
                  a[0].lastIndexOf(n) > 0 &&
                  (a[0] = a[0].replace(r, p));
              },
              d,
              function (e) {
                if (-2 === e) {
                  var t = f;
                  return (f = []), t;
                }
              },
            ])
          ),
          (h.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || we(15), We(e, t.name);
                }, 5381)
                .toString()
            : ""),
          h
        );
      }
      var Xe = t.createContext(),
        Ze = (Xe.Consumer, t.createContext()),
        et = (Ze.Consumer, new Ue()),
        tt = Je();
      function nt() {
        return (0, t.useContext)(Xe) || et;
      }
      function rt() {
        return (0, t.useContext)(Ze) || tt;
      }
      function at(e) {
        var n = (0, t.useState)(e.stylisPlugins),
          r = n[0],
          a = n[1],
          i = nt(),
          o = (0, t.useMemo)(
            function () {
              var t = i;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target]
          ),
          u = (0, t.useMemo)(
            function () {
              return Je({
                options: { prefix: !e.disableVendorPrefixes },
                plugins: r,
              });
            },
            [e.disableVendorPrefixes, r]
          );
        return (
          (0, t.useEffect)(
            function () {
              re()(r, e.stylisPlugins) || a(e.stylisPlugins);
            },
            [e.stylisPlugins]
          ),
          t.createElement(
            Xe.Provider,
            { value: o },
            t.createElement(Ze.Provider, { value: u }, e.children)
          )
        );
      }
      var it = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = tt);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) ||
                e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.toString = function () {
                return we(12, String(n.name));
              }),
              (this.name = e),
              (this.id = "sc-keyframes-" + e),
              (this.rules = t);
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = tt), this.name + e.hash;
            }),
            e
          );
        })(),
        ot = /([A-Z])/,
        ut = /([A-Z])/g,
        st = /^ms-/,
        lt = function (e) {
          return "-" + e.toLowerCase();
        };
      function ct(e) {
        return ot.test(e) ? e.replace(ut, lt).replace(st, "-ms-") : e;
      }
      var ft = function (e) {
        return null == e || !1 === e || "" === e;
      };
      function dt(e, t, n, r) {
        if (Array.isArray(e)) {
          for (var a, i = [], o = 0, u = e.length; o < u; o += 1)
            "" !== (a = dt(e[o], t, n, r)) &&
              (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
          return i;
        }
        return ft(e)
          ? ""
          : ge(e)
          ? "." + e.styledComponentId
          : ve(e)
          ? "function" != typeof (s = e) ||
            (s.prototype && s.prototype.isReactComponent) ||
            !t
            ? e
            : dt(e(t), t, n, r)
          : e instanceof it
          ? n
            ? (e.inject(n, r), e.getName(r))
            : e
          : de(e)
          ? (function e(t, n) {
              var r,
                a,
                i = [];
              for (var o in t)
                t.hasOwnProperty(o) &&
                  !ft(t[o]) &&
                  ((Array.isArray(t[o]) && t[o].isCss) || ve(t[o])
                    ? i.push(ct(o) + ":", t[o], ";")
                    : de(t[o])
                    ? i.push.apply(i, e(t[o], o))
                    : i.push(
                        ct(o) +
                          ": " +
                          ((r = o),
                          (null == (a = t[o]) ||
                          "boolean" == typeof a ||
                          "" === a
                            ? ""
                            : "number" != typeof a || 0 === a || r in ie
                            ? String(a).trim()
                            : a + "px") + ";")
                      ));
              return n ? [n + " {"].concat(i, ["}"]) : i;
            })(e)
          : e.toString();
        var s;
      }
      var pt = function (e) {
        return Array.isArray(e) && (e.isCss = !0), e;
      };
      function ht(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return ve(e) || de(e)
          ? pt(dt(fe(pe, [e].concat(n))))
          : 0 === n.length && 1 === e.length && "string" == typeof e[0]
          ? e
          : pt(dt(fe(e, n)));
      }
      new Set();
      var vt = function (e, t, n) {
          return (
            void 0 === n && (n = he),
            (e.theme !== n.theme && e.theme) || t || n.theme
          );
        },
        mt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        gt = /(^-|-$)/g;
      function yt(e) {
        return e.replace(mt, "-").replace(gt, "");
      }
      var bt = function (e) {
        return Be($e(e) >>> 0);
      };
      function kt(e) {
        return "string" == typeof e && !0;
      }
      var wt = function (e) {
          return (
            "function" == typeof e ||
            ("object" == typeof e && null !== e && !Array.isArray(e))
          );
        },
        St = function (e) {
          return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
        };
      function xt(e, t, n) {
        var r = e[n];
        wt(t) && wt(r) ? _t(r, t) : (e[n] = t);
      }
      function _t(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        for (var a = 0, i = n; a < i.length; a++) {
          var o = i[a];
          if (wt(o)) for (var u in o) St(u) && xt(e, o[u], u);
        }
        return e;
      }
      var Et = t.createContext();
      Et.Consumer;
      var Ct = {};
      function It(e, n, r) {
        var a = ge(e),
          i = !kt(e),
          o = n.attrs,
          u = void 0 === o ? pe : o,
          s = n.componentId,
          l =
            void 0 === s
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : yt(e);
                  Ct[n] = (Ct[n] || 0) + 1;
                  var r = n + "-" + bt("5.3.5" + n + Ct[n]);
                  return t ? t + "-" + r : r;
                })(n.displayName, n.parentComponentId)
              : s,
          c = n.displayName,
          f =
            void 0 === c
              ? (function (e) {
                  return kt(e) ? "styled." + e : "Styled(" + me(e) + ")";
                })(e)
              : c,
          d =
            n.displayName && n.componentId
              ? yt(n.displayName) + "-" + n.componentId
              : n.componentId || l,
          p =
            a && e.attrs
              ? Array.prototype.concat(e.attrs, u).filter(Boolean)
              : u,
          h = n.shouldForwardProp;
        a &&
          e.shouldForwardProp &&
          (h = n.shouldForwardProp
            ? function (t, r, a) {
                return (
                  e.shouldForwardProp(t, r, a) && n.shouldForwardProp(t, r, a)
                );
              }
            : e.shouldForwardProp);
        var v,
          m = new Ge(r, d, a ? e.componentStyle : void 0),
          g = m.isStatic && 0 === u.length,
          y = function (e, n) {
            return (function (e, n, r, a) {
              var i = e.attrs,
                o = e.componentStyle,
                u = e.defaultProps,
                s = e.foldedComponentIds,
                l = e.shouldForwardProp,
                c = e.styledComponentId,
                f = e.target,
                d = (function (e, t, n) {
                  void 0 === e && (e = he);
                  var r = ce({}, t, { theme: e }),
                    a = {};
                  return (
                    n.forEach(function (e) {
                      var t,
                        n,
                        i,
                        o = e;
                      for (t in (ve(o) && (o = o(r)), o))
                        r[t] = a[t] =
                          "className" === t
                            ? ((n = a[t]),
                              (i = o[t]),
                              n && i ? n + " " + i : n || i)
                            : o[t];
                    }),
                    [r, a]
                  );
                })(vt(n, (0, t.useContext)(Et), u) || he, n, i),
                p = d[0],
                h = d[1],
                v = (function (e, t, n, r) {
                  var a = nt(),
                    i = rt();
                  return t
                    ? e.generateAndInjectStyles(he, a, i)
                    : e.generateAndInjectStyles(n, a, i);
                })(o, a, p),
                m = r,
                g = h.$as || n.$as || h.as || n.as || f,
                y = kt(g),
                b = h !== n ? ce({}, n, {}, h) : n,
                k = {};
              for (var w in b)
                "$" !== w[0] &&
                  "as" !== w &&
                  ("forwardedAs" === w
                    ? (k.as = b[w])
                    : (l ? l(w, ue, g) : !y || ue(w)) && (k[w] = b[w]));
              return (
                n.style &&
                  h.style !== n.style &&
                  (k.style = ce({}, n.style, {}, h.style)),
                (k.className = Array.prototype
                  .concat(s, c, v !== c ? v : null, n.className, h.className)
                  .filter(Boolean)
                  .join(" ")),
                (k.ref = m),
                (0, t.createElement)(g, k)
              );
            })(v, e, n, g);
          };
        return (
          (y.displayName = f),
          ((v = t.forwardRef(y)).attrs = p),
          (v.componentStyle = m),
          (v.displayName = f),
          (v.shouldForwardProp = h),
          (v.foldedComponentIds = a
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : pe),
          (v.styledComponentId = d),
          (v.target = a ? e.target : e),
          (v.withComponent = function (e) {
            var t = n.componentId,
              a = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  a = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a;
              })(n, ["componentId"]),
              i = t && t + "-" + (kt(e) ? e : yt(me(e)));
            return It(e, ce({}, a, { attrs: p, componentId: i }), r);
          }),
          Object.defineProperty(v, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (t) {
              this._foldedDefaultProps = a ? _t({}, e.defaultProps, t) : t;
            },
          }),
          (v.toString = function () {
            return "." + v.styledComponentId;
          }),
          i &&
            le()(v, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          v
        );
      }
      var Tt = function (e) {
        return (function e(t, n, r) {
          if ((void 0 === r && (r = he), !(0, te.isValidElementType)(n)))
            return we(1, String(n));
          var a = function () {
            return t(n, r, ht.apply(void 0, arguments));
          };
          return (
            (a.withConfig = function (a) {
              return e(t, n, ce({}, r, {}, a));
            }),
            (a.attrs = function (a) {
              return e(
                t,
                n,
                ce({}, r, {
                  attrs: Array.prototype.concat(r.attrs, a).filter(Boolean),
                })
              );
            }),
            a
          );
        })(It, e);
      };
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "textPath",
        "tspan",
      ].forEach(function (e) {
        Tt[e] = Tt(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = Ke(e)),
            Ue.registerId(this.componentId + 1);
        }
        var t = e.prototype;
        (t.createStyles = function (e, t, n, r) {
          var a = r(dt(this.rules, t, n, r).join(""), ""),
            i = this.componentId + e;
          n.insertRules(i, i, a);
        }),
          (t.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (t.renderStyles = function (e, t, n, r) {
            e > 2 && Ue.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, r);
          });
      })();
      !(function () {
        function e() {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString();
            if (!t) return "";
            var n = Ae();
            return (
              "<style " +
              [
                n && 'nonce="' + n + '"',
                ye + '="true"',
                'data-styled-version="5.3.5"',
              ]
                .filter(Boolean)
                .join(" ") +
              ">" +
              t +
              "</style>"
            );
          }),
            (this.getStyleTags = function () {
              return e.sealed ? we(2) : e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (e.sealed) return we(2);
              var r =
                  (((n = {})[ye] = ""),
                  (n["data-styled-version"] = "5.3.5"),
                  (n.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  n),
                a = Ae();
              return (
                a && (r.nonce = a),
                [t.createElement("style", ce({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new Ue({ isServer: !0 })),
            (this.sealed = !1);
        }
        var n = e.prototype;
        (n.collectStyles = function (e) {
          return this.sealed
            ? we(2)
            : t.createElement(at, { sheet: this.instance }, e);
        }),
          (n.interleaveWithNodeStream = function (e) {
            return we(3);
          });
      })();
      var Pt,
        Ot,
        Nt,
        Rt,
        At,
        Lt,
        Dt,
        Mt,
        jt,
        Ft,
        zt,
        Ut = Tt,
        Vt = Ut.button(
          Pt ||
            (Pt = ee([
              "\n  cursor: pointer;\n  width: 120px;\n  height: 40px;\n  background-color: rgb(2, 113, 194);\n  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  border: none;\n  border-radius: 8px;\n",
            ]))
        ),
        Ht = function () {
          var e = "https://nimahabibi.de/shop/image/",
            n = o((0, t.useState)([]), 2),
            r = n[0],
            a = n[1],
            i = o((0, t.useState)([]), 2),
            u = i[0],
            s = i[1],
            l = o((0, t.useState)([]), 2),
            c = (l[0], l[1]),
            f = o((0, t.useState)(""), 2),
            d = f[0],
            p = f[1],
            h = o((0, t.useState)([]), 2),
            v = h[0],
            m = h[1],
            g = o((0, t.useState)(6), 2),
            y = g[0],
            b = g[1],
            k = "https://nimahabibi.de/shop/image/icon/favorite-black.svg";
          function w(e) {
            alert(e + " category clicked");
          }
          (0, t.useEffect)(function () {
            fetch("/api")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                a(e);
              });
          }, []),
            (0, t.useEffect)(function () {
              fetch("/api/products")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  s(e), m(e);
                });
            }, []);
          return (0, Y.jsxs)("div", {
            children: [
              (0, Y.jsx)("div", {
                className: "App-header",
                children: (0, Y.jsxs)("form", {
                  onSubmit: function (e) {
                    return e.preventDefault();
                  },
                  children: [
                    (0, Y.jsx)("input", {
                      type: "text",
                      className: "search",
                      placeholder: "search here...",
                      value: d.value,
                      onChange: function (e) {
                        p(e.target.value);
                      },
                    }),
                    (0, Y.jsx)("button", {
                      id: "searchBtn",
                      onClick: function () {
                        s(
                          v.filter(function (e) {
                            return e.title
                              .toLowerCase()
                              .includes(d.toLowerCase());
                          })
                        );
                      },
                      children: "\u2794",
                    }),
                  ],
                }),
              }),
              (0, Y.jsx)("h3", { children: "Die besten Angebote" }),
              (0, Y.jsx)("div", {
                className: "productsContainer",
                children: u.slice(0, y).map(function (t, n) {
                  return (
                    (r = t.id),
                    null === localStorage.getItem(r) &&
                      localStorage.setItem(r, "False"),
                    (k =
                      "False" === localStorage.getItem(r)
                        ? "https://nimahabibi.de/shop/image/icon/favorite-black.svg"
                        : "https://nimahabibi.de/shop/image/icon/favorited.svg"),
                    (0, Y.jsx)(
                      Z,
                      {
                        ProductObject: t,
                        imagesPath: e,
                        toggleFav: function () {
                          return (function (e) {
                            "False" === localStorage.getItem(e)
                              ? localStorage.setItem(e, "True")
                              : localStorage.setItem(e, "False"),
                              c([]);
                          })(t.id);
                        },
                        FavouriteIcon: k,
                      },
                      n
                    )
                  );
                  var r;
                }),
              }),
              (0, Y.jsx)("div", {
                className: "show-more-container",
                children: (0, Y.jsx)(Vt, {
                  onClick: function () {
                    b(y + 6);
                  },
                  children: "Show More",
                }),
              }),
              (0, Y.jsx)("h3", { children: "Sortiment" }),
              (0, Y.jsx)("div", {
                className: "categoryContainer",
                children: r.map(function (t, n) {
                  return (0,
                  Y.jsx)(X, { doClick: w, catObject: t, imagesPath: e }, n);
                }),
              }),
            ],
          });
        },
        Bt = function (e) {
          var n = e.productDetail,
            r = e.images,
            a = o((0, t.useState)(0), 2),
            i = a[0],
            u = a[1],
            s = r.length;
          return (0, Y.jsxs)(Wt, {
            children: [
              (0, Y.jsx)(Gt, { src: r[i], alt: "Sofa" }),
              (0, Y.jsx)(Jt, {
                onClick: function () {
                  u(i < s - 1 ? i + 1 : s - 1), console.log(i);
                },
                children: "\u203a",
              }),
              (0, Y.jsx)(Xt, {
                onClick: function () {
                  u(i > 0 ? i - 1 : 0);
                },
                children: "\u2039",
              }),
              (0, Y.jsxs)(Yt, {
                children: [
                  (0, Y.jsx)($t, { children: n.title }),
                  (0, Y.jsxs)(Kt, {
                    children: ["Price: ", n.price + " \u20ac"],
                  }),
                  (0, Y.jsx)(qt, { children: n.description }),
                ],
              }),
              (0, Y.jsx)(Qt, { children: "Add to Basket" }),
            ],
          });
        },
        Wt = Ut.div(
          Ot ||
            (Ot = ee([
              "\nposition:relative;\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 640px;\n  background: white;\n  margin: 5px 30px 30px 30px;\n  padding: 10px 20px;\n",
            ]))
        ),
        $t = Ut.p(
          Nt || (Nt = ee(["\n  font-size: 1rem;\n  font-weight: 700;\n"]))
        ),
        Kt = Ut.p(
          Rt ||
            (Rt = ee([
              "\n  font-size: 1.2rem;\n  font-weight: 600;\n  text-align: right;\n  color: red;\n",
            ]))
        ),
        qt = Ut.p(At || (At = ee(["\n  font-size: 0.9rem;\n"]))),
        Gt = Ut.img(
          Lt ||
            (Lt = ee([
              "\n  margin: 10px auto 30px auto;\n  max-width: 80%;\n  max-height: 50%;\n",
            ]))
        ),
        Qt = Ut.button(
          Dt ||
            (Dt = ee([
              "\n  display: inline-block;\n  align-self: center;\n  cursor: pointer;\n  margin: 20px auto;\n  width: 200px;\n  height: 60px;\n  background-color: rgb(2, 113, 194);\n  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;\n  color: white;\n  font-size: 1.2rem;\n  font-weight: 900;\n  border: none;\n  border-radius: 5px;\n",
            ]))
        ),
        Yt = Ut.div(Mt || (Mt = ee(["\n  display: inline;\n"]))),
        Jt =
          (Ut.img(
            jt ||
              (jt = ee([
                "\n  align-self: center;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;\n  border-radius: 30px;\n  padding: 20px;\n  &:hover {\n    border: 1.5px solid rgb(2, 113, 194);\n  }\n",
              ]))
          ),
          Ut.p(
            Ft ||
              (Ft = ee([
                "\nfont-size:10rem;\nposition:absolute;\nright:1px;\ntop:1px;\ncolor:grey;\ncursor:pointer;\n",
              ]))
          )),
        Xt = Ut.p(
          zt ||
            (zt = ee([
              "\nfont-size:10rem;\nposition:absolute;\nleft:1px;\ntop:1px;\ncolor:grey;\ncursor:pointer;\n",
            ]))
        ),
        Zt = function () {
          var e = (function () {
              var e = (0, t.useContext)(y).matches,
                n = e[e.length - 1];
              return n ? n.params : {};
            })().id,
            n = o((0, t.useState)({}), 2),
            r = n[0],
            a = n[1],
            i = o((0, t.useState)([]), 2),
            u = i[0],
            s = i[1];
          return (
            (0, t.useEffect)(function () {
              fetch("/api/product/".concat(e))
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return a(e);
                });
            }, []),
            (0, t.useEffect)(function () {
              fetch("/api/products")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return s(
                    e.map(function (e) {
                      return e.image;
                    })
                  );
                });
            }, []),
            (0, Y.jsx)("div", {
              className: "productsContainer",
              children: (0, Y.jsx)(Bt, { productDetail: r, images: u }),
            })
          );
        };
      function en(e) {
        return (
          (en = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          en(e)
        );
      }
      function tn(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = en(e));

        );
        return e;
      }
      function nn() {
        return (
          (nn =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                  var r = tn(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          nn.apply(this, arguments)
        );
      }
      function rn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function an(e, t) {
        return (
          (an =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          an(e, t)
        );
      }
      function on(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && an(e, t);
      }
      function un() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function sn(e) {
        return (
          (sn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          sn(e)
        );
      }
      function ln(e, t) {
        if (t && ("object" === sn(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return rn(e);
      }
      function cn(e) {
        var t = un();
        return function () {
          var n,
            r = en(e);
          if (t) {
            var a = en(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return ln(this, n);
        };
      }
      function fn(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = i(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          u = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              u || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function dn(e, t, n, r, a, i, o) {
        try {
          var u = e[i](o),
            s = u.value;
        } catch (l) {
          return void n(l);
        }
        u.done ? t(s) : Promise.resolve(s).then(r, a);
      }
      function pn(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function o(e) {
              dn(i, r, a, o, u, "next", e);
            }
            function u(e) {
              dn(i, r, a, o, u, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function hn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function vn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function mn(e, t, n) {
        return (
          t && vn(e.prototype, t),
          n && vn(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function gn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function yn(e, t, n) {
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
      var bn = n(757),
        kn = n.n(bn);
      function wn(e, t, n) {
        return (
          (wn = un()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && an(a, n.prototype), a;
              }),
          wn.apply(null, arguments)
        );
      }
      function Sn(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (Sn = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return wn(e, arguments, en(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              an(r, e)
            );
          }),
          Sn(e)
        );
      }
      var xn = function (e) {
          for (var t = [], n = 0, r = 0; r < e.length; r++) {
            var a = e.charCodeAt(r);
            a < 128
              ? (t[n++] = a)
              : a < 2048
              ? ((t[n++] = (a >> 6) | 192), (t[n++] = (63 & a) | 128))
              : 55296 === (64512 & a) &&
                r + 1 < e.length &&
                56320 === (64512 & e.charCodeAt(r + 1))
              ? ((a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++r))),
                (t[n++] = (a >> 18) | 240),
                (t[n++] = ((a >> 12) & 63) | 128),
                (t[n++] = ((a >> 6) & 63) | 128),
                (t[n++] = (63 & a) | 128))
              : ((t[n++] = (a >> 12) | 224),
                (t[n++] = ((a >> 6) & 63) | 128),
                (t[n++] = (63 & a) | 128));
          }
          return t;
        },
        _n = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" === typeof atob,
          encodeByteArray: function (e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            for (
              var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [],
                a = 0;
              a < e.length;
              a += 3
            ) {
              var i = e[a],
                o = a + 1 < e.length,
                u = o ? e[a + 1] : 0,
                s = a + 2 < e.length,
                l = s ? e[a + 2] : 0,
                c = i >> 2,
                f = ((3 & i) << 4) | (u >> 4),
                d = ((15 & u) << 2) | (l >> 6),
                p = 63 & l;
              s || ((p = 64), o || (d = 64)), r.push(n[c], n[f], n[d], n[p]);
            }
            return r.join("");
          },
          encodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(xn(e), t);
          },
          decodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : (function (e) {
                  for (var t = [], n = 0, r = 0; n < e.length; ) {
                    var a = e[n++];
                    if (a < 128) t[r++] = String.fromCharCode(a);
                    else if (a > 191 && a < 224) {
                      var i = e[n++];
                      t[r++] = String.fromCharCode(((31 & a) << 6) | (63 & i));
                    } else if (a > 239 && a < 365) {
                      var o =
                        (((7 & a) << 18) |
                          ((63 & e[n++]) << 12) |
                          ((63 & e[n++]) << 6) |
                          (63 & e[n++])) -
                        65536;
                      (t[r++] = String.fromCharCode(55296 + (o >> 10))),
                        (t[r++] = String.fromCharCode(56320 + (1023 & o)));
                    } else {
                      var u = e[n++],
                        s = e[n++];
                      t[r++] = String.fromCharCode(
                        ((15 & a) << 12) | ((63 & u) << 6) | (63 & s)
                      );
                    }
                  }
                  return t.join("");
                })(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray: function (e, t) {
            this.init_();
            for (
              var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [],
                a = 0;
              a < e.length;

            ) {
              var i = n[e.charAt(a++)],
                o = a < e.length ? n[e.charAt(a)] : 0,
                u = ++a < e.length ? n[e.charAt(a)] : 64,
                s = ++a < e.length ? n[e.charAt(a)] : 64;
              if ((++a, null == i || null == o || null == u || null == s))
                throw Error();
              var l = (i << 2) | (o >> 4);
              if ((r.push(l), 64 !== u)) {
                var c = ((o << 4) & 240) | (u >> 2);
                if ((r.push(c), 64 !== s)) {
                  var f = ((u << 6) & 192) | s;
                  r.push(f);
                }
              }
            }
            return r;
          },
          init_: function () {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (var e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e),
                  e >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          },
        },
        En = function (e) {
          return (function (e) {
            var t = xn(e);
            return _n.encodeByteArray(t, !0);
          })(e).replace(/\./g, "");
        },
        Cn = function (e) {
          try {
            return _n.decodeString(e, !0);
          } catch (t) {
            console.error("base64Decode failed: ", t);
          }
          return null;
        };
      function In() {
        return "undefined" !== typeof navigator &&
          "string" === typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      var Tn = (function (e) {
          on(n, e);
          var t = cn(n);
          function n(e, r, a) {
            var i;
            return (
              hn(this, n),
              ((i = t.call(this, r)).code = e),
              (i.customData = a),
              (i.name = "FirebaseError"),
              Object.setPrototypeOf(rn(i), n.prototype),
              Error.captureStackTrace &&
                Error.captureStackTrace(rn(i), Pn.prototype.create),
              i
            );
          }
          return mn(n);
        })(Sn(Error)),
        Pn = (function () {
          function e(t, n, r) {
            hn(this, e),
              (this.service = t),
              (this.serviceName = n),
              (this.errors = r);
          }
          return (
            mn(e, [
              {
                key: "create",
                value: function (e) {
                  var t = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
                    n = "".concat(this.service, "/").concat(e),
                    r = this.errors[e],
                    a = r ? On(r, t) : "Error",
                    i = ""
                      .concat(this.serviceName, ": ")
                      .concat(a, " (")
                      .concat(n, ")."),
                    o = new Tn(n, i, t);
                  return o;
                },
              },
            ]),
            e
          );
        })();
      function On(e, t) {
        return e.replace(Nn, function (e, n) {
          var r = t[n];
          return null != r ? String(r) : "<".concat(n, "?>");
        });
      }
      var Nn = /\{\$([^}]+)}/g;
      function Rn(e, t) {
        if (e === t) return !0;
        for (
          var n = Object.keys(e), r = Object.keys(t), a = 0, i = n;
          a < i.length;
          a++
        ) {
          var o = i[a];
          if (!r.includes(o)) return !1;
          var u = e[o],
            s = t[o];
          if (An(u) && An(s)) {
            if (!Rn(u, s)) return !1;
          } else if (u !== s) return !1;
        }
        for (var l = 0, c = r; l < c.length; l++) {
          var f = c[l];
          if (!n.includes(f)) return !1;
        }
        return !0;
      }
      function An(e) {
        return null !== e && "object" === typeof e;
      }
      function Ln(e) {
        for (
          var t = [],
            n = function () {
              var e = o(a[r], 2),
                n = e[0],
                i = e[1];
              Array.isArray(i)
                ? i.forEach(function (e) {
                    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
                  })
                : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
            },
            r = 0,
            a = Object.entries(e);
          r < a.length;
          r++
        )
          n();
        return t.length ? "&" + t.join("&") : "";
      }
      function Dn(e) {
        var t = {};
        return (
          e
            .replace(/^\?/, "")
            .split("&")
            .forEach(function (e) {
              if (e) {
                var n = o(e.split("="), 2),
                  r = n[0],
                  a = n[1];
                t[decodeURIComponent(r)] = decodeURIComponent(a);
              }
            }),
          t
        );
      }
      function Mn(e) {
        var t = e.indexOf("?");
        if (!t) return "";
        var n = e.indexOf("#", t);
        return e.substring(t, n > 0 ? n : void 0);
      }
      var jn = (function () {
        function e(t, n) {
          var r = this;
          hn(this, e),
            (this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = n),
            this.task
              .then(function () {
                t(r);
              })
              .catch(function (e) {
                r.error(e);
              });
        }
        return (
          mn(e, [
            {
              key: "next",
              value: function (e) {
                this.forEachObserver(function (t) {
                  t.next(e);
                });
              },
            },
            {
              key: "error",
              value: function (e) {
                this.forEachObserver(function (t) {
                  t.error(e);
                }),
                  this.close(e);
              },
            },
            {
              key: "complete",
              value: function () {
                this.forEachObserver(function (e) {
                  e.complete();
                }),
                  this.close();
              },
            },
            {
              key: "subscribe",
              value: function (e, t, n) {
                var r,
                  a = this;
                if (void 0 === e && void 0 === t && void 0 === n)
                  throw new Error("Missing Observer.");
                void 0 ===
                  (r = (function (e, t) {
                    if ("object" !== typeof e || null === e) return !1;
                    var n,
                      r = fn(t);
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var a = n.value;
                        if (a in e && "function" === typeof e[a]) return !0;
                      }
                    } catch (i) {
                      r.e(i);
                    } finally {
                      r.f();
                    }
                    return !1;
                  })(e, ["next", "error", "complete"])
                    ? e
                    : { next: e, error: t, complete: n }).next && (r.next = Fn),
                  void 0 === r.error && (r.error = Fn),
                  void 0 === r.complete && (r.complete = Fn);
                var i = this.unsubscribeOne.bind(this, this.observers.length);
                return (
                  this.finalized &&
                    this.task.then(function () {
                      try {
                        a.finalError ? r.error(a.finalError) : r.complete();
                      } catch (e) {}
                    }),
                  this.observers.push(r),
                  i
                );
              },
            },
            {
              key: "unsubscribeOne",
              value: function (e) {
                void 0 !== this.observers &&
                  void 0 !== this.observers[e] &&
                  (delete this.observers[e],
                  (this.observerCount -= 1),
                  0 === this.observerCount &&
                    void 0 !== this.onNoObservers &&
                    this.onNoObservers(this));
              },
            },
            {
              key: "forEachObserver",
              value: function (e) {
                if (!this.finalized)
                  for (var t = 0; t < this.observers.length; t++)
                    this.sendOne(t, e);
              },
            },
            {
              key: "sendOne",
              value: function (e, t) {
                var n = this;
                this.task.then(function () {
                  if (void 0 !== n.observers && void 0 !== n.observers[e])
                    try {
                      t(n.observers[e]);
                    } catch (r) {
                      "undefined" !== typeof console &&
                        console.error &&
                        console.error(r);
                    }
                });
              },
            },
            {
              key: "close",
              value: function (e) {
                var t = this;
                this.finalized ||
                  ((this.finalized = !0),
                  void 0 !== e && (this.finalError = e),
                  this.task.then(function () {
                    (t.observers = void 0), (t.onNoObservers = void 0);
                  }));
              },
            },
          ]),
          e
        );
      })();
      function Fn() {}
      function zn(e) {
        return e && e._delegate ? e._delegate : e;
      }
      var Un = (function () {
        function e(t, n, r) {
          hn(this, e),
            (this.name = t),
            (this.instanceFactory = n),
            (this.type = r),
            (this.multipleInstances = !1),
            (this.serviceProps = {}),
            (this.instantiationMode = "LAZY"),
            (this.onInstanceCreated = null);
        }
        return (
          mn(e, [
            {
              key: "setInstantiationMode",
              value: function (e) {
                return (this.instantiationMode = e), this;
              },
            },
            {
              key: "setMultipleInstances",
              value: function (e) {
                return (this.multipleInstances = e), this;
              },
            },
            {
              key: "setServiceProps",
              value: function (e) {
                return (this.serviceProps = e), this;
              },
            },
            {
              key: "setInstanceCreatedCallback",
              value: function (e) {
                return (this.onInstanceCreated = e), this;
              },
            },
          ]),
          e
        );
      })();
      var Vn,
        Hn,
        Bn = [];
      !(function (e) {
        (e[(e.DEBUG = 0)] = "DEBUG"),
          (e[(e.VERBOSE = 1)] = "VERBOSE"),
          (e[(e.INFO = 2)] = "INFO"),
          (e[(e.WARN = 3)] = "WARN"),
          (e[(e.ERROR = 4)] = "ERROR"),
          (e[(e.SILENT = 5)] = "SILENT");
      })(Hn || (Hn = {}));
      var Wn = {
          debug: Hn.DEBUG,
          verbose: Hn.VERBOSE,
          info: Hn.INFO,
          warn: Hn.WARN,
          error: Hn.ERROR,
          silent: Hn.SILENT,
        },
        $n = Hn.INFO,
        Kn =
          (yn((Vn = {}), Hn.DEBUG, "log"),
          yn(Vn, Hn.VERBOSE, "log"),
          yn(Vn, Hn.INFO, "info"),
          yn(Vn, Hn.WARN, "warn"),
          yn(Vn, Hn.ERROR, "error"),
          Vn),
        qn = function (e, t) {
          if (!(t < e.logLevel)) {
            var n = new Date().toISOString(),
              r = Kn[t];
            if (!r)
              throw new Error(
                "Attempted to log a message with an invalid logType (value: ".concat(
                  t,
                  ")"
                )
              );
            for (
              var a,
                i = arguments.length,
                o = new Array(i > 2 ? i - 2 : 0),
                u = 2;
              u < i;
              u++
            )
              o[u - 2] = arguments[u];
            (a = console)[r].apply(
              a,
              ["[".concat(n, "]  ").concat(e.name, ":")].concat(o)
            );
          }
        },
        Gn = (function () {
          function e(t) {
            hn(this, e),
              (this.name = t),
              (this._logLevel = $n),
              (this._logHandler = qn),
              (this._userLogHandler = null),
              Bn.push(this);
          }
          return (
            mn(e, [
              {
                key: "logLevel",
                get: function () {
                  return this._logLevel;
                },
                set: function (e) {
                  if (!(e in Hn))
                    throw new TypeError(
                      'Invalid value "'.concat(e, '" assigned to `logLevel`')
                    );
                  this._logLevel = e;
                },
              },
              {
                key: "setLogLevel",
                value: function (e) {
                  this._logLevel = "string" === typeof e ? Wn[e] : e;
                },
              },
              {
                key: "logHandler",
                get: function () {
                  return this._logHandler;
                },
                set: function (e) {
                  if ("function" !== typeof e)
                    throw new TypeError(
                      "Value assigned to `logHandler` must be a function"
                    );
                  this._logHandler = e;
                },
              },
              {
                key: "userLogHandler",
                get: function () {
                  return this._userLogHandler;
                },
                set: function (e) {
                  this._userLogHandler = e;
                },
              },
              {
                key: "debug",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._userLogHandler &&
                    this._userLogHandler.apply(
                      this,
                      [this, Hn.DEBUG].concat(t)
                    ),
                    this._logHandler.apply(this, [this, Hn.DEBUG].concat(t));
                },
              },
              {
                key: "log",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._userLogHandler &&
                    this._userLogHandler.apply(
                      this,
                      [this, Hn.VERBOSE].concat(t)
                    ),
                    this._logHandler.apply(this, [this, Hn.VERBOSE].concat(t));
                },
              },
              {
                key: "info",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._userLogHandler &&
                    this._userLogHandler.apply(this, [this, Hn.INFO].concat(t)),
                    this._logHandler.apply(this, [this, Hn.INFO].concat(t));
                },
              },
              {
                key: "warn",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._userLogHandler &&
                    this._userLogHandler.apply(this, [this, Hn.WARN].concat(t)),
                    this._logHandler.apply(this, [this, Hn.WARN].concat(t));
                },
              },
              {
                key: "error",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  this._userLogHandler &&
                    this._userLogHandler.apply(
                      this,
                      [this, Hn.ERROR].concat(t)
                    ),
                    this._logHandler.apply(this, [this, Hn.ERROR].concat(t));
                },
              },
            ]),
            e
          );
        })();
      function Qn(e, t) {
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
      function Yn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Qn(Object(n), !0).forEach(function (t) {
                yn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Jn, Xn;
      var Zn = new WeakMap(),
        er = new WeakMap(),
        tr = new WeakMap(),
        nr = new WeakMap(),
        rr = new WeakMap();
      var ar = {
        get: function (e, t, n) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return er.get(e);
            if ("objectStoreNames" === t)
              return e.objectStoreNames || tr.get(e);
            if ("store" === t)
              return n.objectStoreNames[1]
                ? void 0
                : n.objectStore(n.objectStoreNames[0]);
          }
          return ur(e[t]);
        },
        set: function (e, t, n) {
          return (e[t] = n), !0;
        },
        has: function (e, t) {
          return (
            (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
            t in e
          );
        },
      };
      function ir(e) {
        return e !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
          ? (
              Xn ||
              (Xn = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
            ).includes(e)
            ? function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return e.apply(sr(this), n), ur(Zn.get(this));
              }
            : function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return ur(e.apply(sr(this), n));
              }
          : function (t) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  a = 1;
                a < n;
                a++
              )
                r[a - 1] = arguments[a];
              var i = e.call.apply(e, [sr(this), t].concat(r));
              return tr.set(i, t.sort ? t.sort() : [t]), ur(i);
            };
      }
      function or(e) {
        return "function" === typeof e
          ? ir(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (!er.has(e)) {
                  var t = new Promise(function (t, n) {
                    var r = function () {
                        e.removeEventListener("complete", a),
                          e.removeEventListener("error", i),
                          e.removeEventListener("abort", i);
                      },
                      a = function () {
                        t(), r();
                      },
                      i = function () {
                        n(
                          e.error ||
                            new DOMException("AbortError", "AbortError")
                        ),
                          r();
                      };
                    e.addEventListener("complete", a),
                      e.addEventListener("error", i),
                      e.addEventListener("abort", i);
                  });
                  er.set(e, t);
                }
              })(e),
            (t = e),
            (
              Jn ||
              (Jn = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
            ).some(function (e) {
              return t instanceof e;
            })
              ? new Proxy(e, ar)
              : e);
        var t;
      }
      function ur(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            var t = new Promise(function (t, n) {
              var r = function () {
                  e.removeEventListener("success", a),
                    e.removeEventListener("error", i);
                },
                a = function () {
                  t(ur(e.result)), r();
                },
                i = function () {
                  n(e.error), r();
                };
              e.addEventListener("success", a), e.addEventListener("error", i);
            });
            return (
              t
                .then(function (t) {
                  t instanceof IDBCursor && Zn.set(t, e);
                })
                .catch(function () {}),
              rr.set(t, e),
              t
            );
          })(e);
        if (nr.has(e)) return nr.get(e);
        var t = or(e);
        return t !== e && (nr.set(e, t), rr.set(t, e)), t;
      }
      var sr = function (e) {
        return rr.get(e);
      };
      var lr,
        cr,
        fr = ["get", "getKey", "getAll", "getAllKeys", "count"],
        dr = ["put", "add", "delete", "clear"],
        pr = new Map();
      function hr(e, t) {
        if (e instanceof IDBDatabase && !(t in e) && "string" === typeof t) {
          if (pr.get(t)) return pr.get(t);
          var n = t.replace(/FromIndex$/, ""),
            r = t !== n,
            a = dr.includes(n);
          if (
            n in (r ? IDBIndex : IDBObjectStore).prototype &&
            (a || fr.includes(n))
          ) {
            var i = (function () {
              var e = pn(
                bn.mark(function e(t) {
                  var i,
                    o,
                    u,
                    s,
                    l,
                    c,
                    f = arguments;
                  return bn.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              o = this.transaction(
                                t,
                                a ? "readwrite" : "readonly"
                              ),
                                u = o.store,
                                s = f.length,
                                l = new Array(s > 1 ? s - 1 : 0),
                                c = 1;
                              c < s;
                              c++
                            )
                              l[c - 1] = f[c];
                            return (
                              r && (u = u.index(l.shift())),
                              (e.next = 6),
                              Promise.all([(i = u)[n].apply(i, l), a && o.done])
                            );
                          case 6:
                            return e.abrupt("return", e.sent[0]);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            return pr.set(t, i), i;
          }
        }
      }
      ar = (function (e) {
        return Yn(
          Yn({}, e),
          {},
          {
            get: function (t, n, r) {
              return hr(t, n) || e.get(t, n, r);
            },
            has: function (t, n) {
              return !!hr(t, n) || e.has(t, n);
            },
          }
        );
      })(ar);
      var vr = (function () {
        function e(t) {
          hn(this, e), (this.container = t);
        }
        return (
          mn(e, [
            {
              key: "getPlatformInfoString",
              value: function () {
                return this.container
                  .getProviders()
                  .map(function (e) {
                    if (
                      (function (e) {
                        var t = e.getComponent();
                        return (
                          "VERSION" ===
                          (null === t || void 0 === t ? void 0 : t.type)
                        );
                      })(e)
                    ) {
                      var t = e.getImmediate();
                      return "".concat(t.library, "/").concat(t.version);
                    }
                    return null;
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .join(" ");
              },
            },
          ]),
          e
        );
      })();
      var mr = "@firebase/app",
        gr = "0.7.24",
        yr = new Gn("@firebase/app"),
        br = "[DEFAULT]",
        kr =
          (yn((lr = {}), mr, "fire-core"),
          yn(lr, "@firebase/app-compat", "fire-core-compat"),
          yn(lr, "@firebase/analytics", "fire-analytics"),
          yn(lr, "@firebase/analytics-compat", "fire-analytics-compat"),
          yn(lr, "@firebase/app-check", "fire-app-check"),
          yn(lr, "@firebase/app-check-compat", "fire-app-check-compat"),
          yn(lr, "@firebase/auth", "fire-auth"),
          yn(lr, "@firebase/auth-compat", "fire-auth-compat"),
          yn(lr, "@firebase/database", "fire-rtdb"),
          yn(lr, "@firebase/database-compat", "fire-rtdb-compat"),
          yn(lr, "@firebase/functions", "fire-fn"),
          yn(lr, "@firebase/functions-compat", "fire-fn-compat"),
          yn(lr, "@firebase/installations", "fire-iid"),
          yn(lr, "@firebase/installations-compat", "fire-iid-compat"),
          yn(lr, "@firebase/messaging", "fire-fcm"),
          yn(lr, "@firebase/messaging-compat", "fire-fcm-compat"),
          yn(lr, "@firebase/performance", "fire-perf"),
          yn(lr, "@firebase/performance-compat", "fire-perf-compat"),
          yn(lr, "@firebase/remote-config", "fire-rc"),
          yn(lr, "@firebase/remote-config-compat", "fire-rc-compat"),
          yn(lr, "@firebase/storage", "fire-gcs"),
          yn(lr, "@firebase/storage-compat", "fire-gcs-compat"),
          yn(lr, "@firebase/firestore", "fire-fst"),
          yn(lr, "@firebase/firestore-compat", "fire-fst-compat"),
          yn(lr, "fire-js", "fire-js"),
          yn(lr, "firebase", "fire-js-all"),
          lr),
        wr = new Map(),
        Sr = new Map();
      function xr(e, t) {
        try {
          e.container.addComponent(t);
        } catch (n) {
          yr.debug(
            "Component "
              .concat(t.name, " failed to register with FirebaseApp ")
              .concat(e.name),
            n
          );
        }
      }
      function _r(e) {
        var t = e.name;
        if (Sr.has(t))
          return (
            yr.debug(
              "There were multiple attempts to register component ".concat(
                t,
                "."
              )
            ),
            !1
          );
        Sr.set(t, e);
        var n,
          r = fn(wr.values());
        try {
          for (r.s(); !(n = r.n()).done; ) {
            xr(n.value, e);
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        return !0;
      }
      function Er(e, t) {
        var n = e.container
          .getProvider("heartbeat")
          .getImmediate({ optional: !0 });
        return n && n.triggerHeartbeat(), e.container.getProvider(t);
      }
      var Cr =
          (yn(
            (cr = {}),
            "no-app",
            "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"
          ),
          yn(cr, "bad-app-name", "Illegal App name: '{$appName}"),
          yn(
            cr,
            "duplicate-app",
            "Firebase App named '{$appName}' already exists with different options or config"
          ),
          yn(
            cr,
            "app-deleted",
            "Firebase App named '{$appName}' already deleted"
          ),
          yn(
            cr,
            "invalid-app-argument",
            "firebase.{$appName}() takes either no argument or a Firebase App instance."
          ),
          yn(
            cr,
            "invalid-log-argument",
            "First argument to `onLog` must be null or a function."
          ),
          yn(
            cr,
            "storage-open",
            "Error thrown when opening storage. Original error: {$originalErrorMessage}."
          ),
          yn(
            cr,
            "storage-get",
            "Error thrown when reading from storage. Original error: {$originalErrorMessage}."
          ),
          yn(
            cr,
            "storage-set",
            "Error thrown when writing to storage. Original error: {$originalErrorMessage}."
          ),
          yn(
            cr,
            "storage-delete",
            "Error thrown when deleting from storage. Original error: {$originalErrorMessage}."
          ),
          cr),
        Ir = new Pn("app", "Firebase", Cr),
        Tr = "9.8.1";
      function Pr() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : br,
          t = wr.get(e);
        if (!t) throw Ir.create("no-app", { appName: e });
        return t;
      }
      function Or(e, t, n) {
        var r,
          a = null !== (r = kr[e]) && void 0 !== r ? r : e;
        n && (a += "-".concat(n));
        var i = a.match(/\s|\//),
          o = t.match(/\s|\//);
        if (i || o) {
          var u = [
            'Unable to register library "'
              .concat(a, '" with version "')
              .concat(t, '":'),
          ];
          return (
            i &&
              u.push(
                'library name "'.concat(
                  a,
                  '" contains illegal characters (whitespace or "/")'
                )
              ),
            i && o && u.push("and"),
            o &&
              u.push(
                'version name "'.concat(
                  t,
                  '" contains illegal characters (whitespace or "/")'
                )
              ),
            void yr.warn(u.join(" "))
          );
        }
        _r(
          new Un(
            "".concat(a, "-version"),
            function () {
              return { library: a, version: t };
            },
            "VERSION"
          )
        );
      }
      var Nr = "firebase-heartbeat-store",
        Rr = null;
      function Ar() {
        return (
          Rr ||
            (Rr = (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = n.blocked,
                a = n.upgrade,
                i = n.blocking,
                o = n.terminated,
                u = indexedDB.open(e, t),
                s = ur(u);
              return (
                a &&
                  u.addEventListener("upgradeneeded", function (e) {
                    a(
                      ur(u.result),
                      e.oldVersion,
                      e.newVersion,
                      ur(u.transaction)
                    );
                  }),
                r &&
                  u.addEventListener("blocked", function () {
                    return r();
                  }),
                s
                  .then(function (e) {
                    o &&
                      e.addEventListener("close", function () {
                        return o();
                      }),
                      i &&
                        e.addEventListener("versionchange", function () {
                          return i();
                        });
                  })
                  .catch(function () {}),
                s
              );
            })("firebase-heartbeat-database", 1, {
              upgrade: function (e, t) {
                if (0 === t) e.createObjectStore(Nr);
              },
            }).catch(function (e) {
              throw Ir.create("storage-open", {
                originalErrorMessage: e.message,
              });
            })),
          Rr
        );
      }
      function Lr(e) {
        return Dr.apply(this, arguments);
      }
      function Dr() {
        return (Dr = pn(
          bn.mark(function e(t) {
            var n;
            return bn.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), Ar();
                    case 3:
                      return (
                        (n = e.sent),
                        e.abrupt(
                          "return",
                          n.transaction(Nr).objectStore(Nr).get(Fr(t))
                        )
                      );
                    case 7:
                      throw (
                        ((e.prev = 7),
                        (e.t0 = e.catch(0)),
                        Ir.create("storage-get", {
                          originalErrorMessage: e.t0.message,
                        }))
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function Mr(e, t) {
        return jr.apply(this, arguments);
      }
      function jr() {
        return (jr = pn(
          bn.mark(function e(t, n) {
            var r, a, i;
            return bn.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), Ar();
                    case 3:
                      return (
                        (r = e.sent),
                        (a = r.transaction(Nr, "readwrite")),
                        (i = a.objectStore(Nr)),
                        (e.next = 8),
                        i.put(n, Fr(t))
                      );
                    case 8:
                      return e.abrupt("return", a.done);
                    case 11:
                      throw (
                        ((e.prev = 11),
                        (e.t0 = e.catch(0)),
                        Ir.create("storage-set", {
                          originalErrorMessage: e.t0.message,
                        }))
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 11]]
            );
          })
        )).apply(this, arguments);
      }
      function Fr(e) {
        return "".concat(e.name, "!").concat(e.options.appId);
      }
      var zr = (function () {
        function e(t) {
          var n = this;
          hn(this, e), (this.container = t), (this._heartbeatsCache = null);
          var r = this.container.getProvider("app").getImmediate();
          (this._storage = new Br(r)),
            (this._heartbeatsCachePromise = this._storage
              .read()
              .then(function (e) {
                return (n._heartbeatsCache = e), e;
              }));
        }
        return (
          mn(e, [
            {
              key: "triggerHeartbeat",
              value: (function () {
                var e = pn(
                  bn.mark(function e() {
                    var t, n, r;
                    return bn.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.container
                                  .getProvider("platform-logger")
                                  .getImmediate()),
                                (n = t.getPlatformInfoString()),
                                (r = Ur()),
                                null !== this._heartbeatsCache)
                              ) {
                                e.next = 7;
                                break;
                              }
                              return (e.next = 6), this._heartbeatsCachePromise;
                            case 6:
                              this._heartbeatsCache = e.sent;
                            case 7:
                              if (
                                this._heartbeatsCache.lastSentHeartbeatDate !==
                                  r &&
                                !this._heartbeatsCache.heartbeats.some(
                                  function (e) {
                                    return e.date === r;
                                  }
                                )
                              ) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt("return");
                            case 11:
                              this._heartbeatsCache.heartbeats.push({
                                date: r,
                                agent: n,
                              });
                            case 12:
                              return (
                                (this._heartbeatsCache.heartbeats =
                                  this._heartbeatsCache.heartbeats.filter(
                                    function (e) {
                                      var t = new Date(e.date).valueOf();
                                      return Date.now() - t <= 2592e6;
                                    }
                                  )),
                                e.abrupt(
                                  "return",
                                  this._storage.overwrite(this._heartbeatsCache)
                                )
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getHeartbeatsHeader",
              value: (function () {
                var e = pn(
                  bn.mark(function e() {
                    var t, n, r, a, i;
                    return bn.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (null !== this._heartbeatsCache) {
                                e.next = 3;
                                break;
                              }
                              return (e.next = 3), this._heartbeatsCachePromise;
                            case 3:
                              if (
                                null !== this._heartbeatsCache &&
                                0 !== this._heartbeatsCache.heartbeats.length
                              ) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", "");
                            case 5:
                              if (
                                ((t = Ur()),
                                (n = Vr(this._heartbeatsCache.heartbeats)),
                                (r = n.heartbeatsToSend),
                                (a = n.unsentEntries),
                                (i = En(
                                  JSON.stringify({ version: 2, heartbeats: r })
                                )),
                                (this._heartbeatsCache.lastSentHeartbeatDate =
                                  t),
                                !(a.length > 0))
                              ) {
                                e.next = 15;
                                break;
                              }
                              return (
                                (this._heartbeatsCache.heartbeats = a),
                                (e.next = 13),
                                this._storage.overwrite(this._heartbeatsCache)
                              );
                            case 13:
                              e.next = 17;
                              break;
                            case 15:
                              (this._heartbeatsCache.heartbeats = []),
                                this._storage.overwrite(this._heartbeatsCache);
                            case 17:
                              return e.abrupt("return", i);
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
      function Ur() {
        return new Date().toISOString().substring(0, 10);
      }
      function Vr(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1024,
          r = [],
          a = e.slice(),
          i = fn(e);
        try {
          var o = function () {
            var e = t.value,
              i = r.find(function (t) {
                return t.agent === e.agent;
              });
            if (i) {
              if ((i.dates.push(e.date), Wr(r) > n))
                return i.dates.pop(), "break";
            } else if ((r.push({ agent: e.agent, dates: [e.date] }), Wr(r) > n))
              return r.pop(), "break";
            a = a.slice(1);
          };
          for (i.s(); !(t = i.n()).done; ) {
            var u = o();
            if ("break" === u) break;
          }
        } catch (s) {
          i.e(s);
        } finally {
          i.f();
        }
        return { heartbeatsToSend: r, unsentEntries: a };
      }
      var Hr,
        Br = (function () {
          function e(t) {
            hn(this, e),
              (this.app = t),
              (this._canUseIndexedDBPromise =
                this.runIndexedDBEnvironmentCheck());
          }
          return (
            mn(e, [
              {
                key: "runIndexedDBEnvironmentCheck",
                value: (function () {
                  var e = pn(
                    bn.mark(function e() {
                      return bn.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("object" === typeof indexedDB) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return", !1);
                            case 4:
                              return e.abrupt(
                                "return",
                                new Promise(function (e, t) {
                                  try {
                                    var n = !0,
                                      r =
                                        "validate-browser-context-for-indexeddb-analytics-module",
                                      a = self.indexedDB.open(r);
                                    (a.onsuccess = function () {
                                      a.result.close(),
                                        n || self.indexedDB.deleteDatabase(r),
                                        e(!0);
                                    }),
                                      (a.onupgradeneeded = function () {
                                        n = !1;
                                      }),
                                      (a.onerror = function () {
                                        var e;
                                        t(
                                          (null === (e = a.error) ||
                                          void 0 === e
                                            ? void 0
                                            : e.message) || ""
                                        );
                                      });
                                  } catch (i) {
                                    t(i);
                                  }
                                })
                                  .then(function () {
                                    return !0;
                                  })
                                  .catch(function () {
                                    return !1;
                                  })
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "read",
                value: (function () {
                  var e = pn(
                    bn.mark(function e() {
                      var t;
                      return bn.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this._canUseIndexedDBPromise
                                );
                              case 2:
                                if (e.sent) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return", { heartbeats: [] });
                              case 7:
                                return (e.next = 9), Lr(this.app);
                              case 9:
                                return (
                                  (t = e.sent),
                                  e.abrupt("return", t || { heartbeats: [] })
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "overwrite",
                value: (function () {
                  var e = pn(
                    bn.mark(function e(t) {
                      var n, r;
                      return bn.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this._canUseIndexedDBPromise
                                );
                              case 2:
                                if (e.sent) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return");
                              case 7:
                                return (e.next = 9), this.read();
                              case 9:
                                return (
                                  (r = e.sent),
                                  e.abrupt(
                                    "return",
                                    Mr(this.app, {
                                      lastSentHeartbeatDate:
                                        null !==
                                          (n = t.lastSentHeartbeatDate) &&
                                        void 0 !== n
                                          ? n
                                          : r.lastSentHeartbeatDate,
                                      heartbeats: t.heartbeats,
                                    })
                                  )
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "add",
                value: (function () {
                  var e = pn(
                    bn.mark(function e(t) {
                      var n, r;
                      return bn.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this._canUseIndexedDBPromise
                                );
                              case 2:
                                if (e.sent) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return");
                              case 7:
                                return (e.next = 9), this.read();
                              case 9:
                                return (
                                  (r = e.sent),
                                  e.abrupt(
                                    "return",
                                    Mr(this.app, {
                                      lastSentHeartbeatDate:
                                        null !==
                                          (n = t.lastSentHeartbeatDate) &&
                                        void 0 !== n
                                          ? n
                                          : r.lastSentHeartbeatDate,
                                      heartbeats: [].concat(
                                        gn(r.heartbeats),
                                        gn(t.heartbeats)
                                      ),
                                    })
                                  )
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })();
      function Wr(e) {
        return En(JSON.stringify({ version: 2, heartbeats: e })).length;
      }
      (Hr = ""),
        _r(
          new Un(
            "platform-logger",
            function (e) {
              return new vr(e);
            },
            "PRIVATE"
          )
        ),
        _r(
          new Un(
            "heartbeat",
            function (e) {
              return new zr(e);
            },
            "PRIVATE"
          )
        ),
        Or(mr, gr, Hr),
        Or(mr, gr, "esm2017"),
        Or("fire-js", "");
      function $r(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      Object.create;
      var Kr;
      Object.create;
      function qr() {
        return yn(
          {},
          "dependent-sdk-initialized-before-auth",
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
        );
      }
      var Gr = qr,
        Qr = new Pn("auth", "Firebase", qr()),
        Yr = new Gn("@firebase/auth");
      function Jr(e) {
        if (Yr.logLevel <= Hn.ERROR) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          Yr.error.apply(Yr, ["Auth (".concat(Tr, "): ").concat(e)].concat(n));
        }
      }
      function Xr(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw ta.apply(void 0, [e].concat(n));
      }
      function Zr(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return ta.apply(void 0, [e].concat(n));
      }
      function ea(e, t, n) {
        var r = Object.assign(Object.assign({}, Gr()), yn({}, t, n));
        return new Pn("auth", "Firebase", r).create(t, { appName: e.name });
      }
      function ta(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        if ("string" !== typeof e) {
          var a,
            i = n[0],
            o = gn(n.slice(1));
          return (
            o[0] && (o[0].appName = e.name),
            (a = e._errorFactory).create.apply(a, [i].concat(gn(o)))
          );
        }
        return Qr.create.apply(Qr, [e].concat(n));
      }
      function na(e, t) {
        if (!e) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
            a < n;
            a++
          )
            r[a - 2] = arguments[a];
          throw ta.apply(void 0, [t].concat(r));
        }
      }
      function ra(e) {
        var t = "INTERNAL ASSERTION FAILED: " + e;
        throw (Jr(t), new Error(t));
      }
      function aa(e, t) {
        e || ra(t);
      }
      var ia = new Map();
      function oa(e) {
        aa(e instanceof Function, "Expected a class definition");
        var t = ia.get(e);
        return t
          ? (aa(
              t instanceof e,
              "Instance stored in cache mismatched with class"
            ),
            t)
          : ((t = new e()), ia.set(e, t), t);
      }
      function ua(e, t) {
        var n = Er(e, "auth");
        if (n.isInitialized()) {
          var r = n.getImmediate();
          if (Rn(n.getOptions(), null !== t && void 0 !== t ? t : {})) return r;
          Xr(r, "already-initialized");
        }
        return n.initialize({ options: t });
      }
      function sa() {
        var e;
        return (
          ("undefined" !== typeof self &&
            (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
          ""
        );
      }
      function la() {
        return "http:" === ca() || "https:" === ca();
      }
      function ca() {
        var e;
        return (
          ("undefined" !== typeof self &&
            (null === (e = self.location) || void 0 === e
              ? void 0
              : e.protocol)) ||
          null
        );
      }
      function fa() {
        return (
          !(
            "undefined" !== typeof navigator &&
            navigator &&
            "onLine" in navigator &&
            "boolean" === typeof navigator.onLine &&
            (la() ||
              (function () {
                var e =
                  "object" === typeof chrome
                    ? chrome.runtime
                    : "object" === typeof browser
                    ? browser.runtime
                    : void 0;
                return "object" === typeof e && void 0 !== e.id;
              })() ||
              "connection" in navigator)
          ) || navigator.onLine
        );
      }
      var da = (function () {
        function e(t, n) {
          hn(this, e),
            (this.shortDelay = t),
            (this.longDelay = n),
            aa(n > t, "Short delay should be less than long delay!"),
            (this.isMobile =
              ("undefined" !== typeof window &&
                !!(window.cordova || window.phonegap || window.PhoneGap) &&
                /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                  In()
                )) ||
              ("object" === typeof navigator &&
                "ReactNative" === navigator.product));
        }
        return (
          mn(e, [
            {
              key: "get",
              value: function () {
                return fa()
                  ? this.isMobile
                    ? this.longDelay
                    : this.shortDelay
                  : Math.min(5e3, this.shortDelay);
              },
            },
          ]),
          e
        );
      })();
      function pa(e, t) {
        aa(e.emulator, "Emulator should always be set here");
        var n = e.emulator.url;
        return t ? "".concat(n).concat(t.startsWith("/") ? t.slice(1) : t) : n;
      }
      var ha = (function () {
          function e() {
            hn(this, e);
          }
          return (
            mn(e, null, [
              {
                key: "initialize",
                value: function (e, t, n) {
                  (this.fetchImpl = e),
                    t && (this.headersImpl = t),
                    n && (this.responseImpl = n);
                },
              },
              {
                key: "fetch",
                value: function () {
                  return this.fetchImpl
                    ? this.fetchImpl
                    : "undefined" !== typeof self && "fetch" in self
                    ? self.fetch
                    : void ra(
                        "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
                      );
                },
              },
              {
                key: "headers",
                value: function () {
                  return this.headersImpl
                    ? this.headersImpl
                    : "undefined" !== typeof self && "Headers" in self
                    ? self.Headers
                    : void ra(
                        "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
                      );
                },
              },
              {
                key: "response",
                value: function () {
                  return this.responseImpl
                    ? this.responseImpl
                    : "undefined" !== typeof self && "Response" in self
                    ? self.Response
                    : void ra(
                        "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
                      );
                },
              },
            ]),
            e
          );
        })(),
        va =
          (yn((Kr = {}), "CREDENTIAL_MISMATCH", "custom-token-mismatch"),
          yn(Kr, "MISSING_CUSTOM_TOKEN", "internal-error"),
          yn(Kr, "INVALID_IDENTIFIER", "invalid-email"),
          yn(Kr, "MISSING_CONTINUE_URI", "internal-error"),
          yn(Kr, "INVALID_PASSWORD", "wrong-password"),
          yn(Kr, "MISSING_PASSWORD", "internal-error"),
          yn(Kr, "EMAIL_EXISTS", "email-already-in-use"),
          yn(Kr, "PASSWORD_LOGIN_DISABLED", "operation-not-allowed"),
          yn(Kr, "INVALID_IDP_RESPONSE", "invalid-credential"),
          yn(Kr, "INVALID_PENDING_TOKEN", "invalid-credential"),
          yn(
            Kr,
            "FEDERATED_USER_ID_ALREADY_LINKED",
            "credential-already-in-use"
          ),
          yn(Kr, "MISSING_REQ_TYPE", "internal-error"),
          yn(Kr, "EMAIL_NOT_FOUND", "user-not-found"),
          yn(Kr, "RESET_PASSWORD_EXCEED_LIMIT", "too-many-requests"),
          yn(Kr, "EXPIRED_OOB_CODE", "expired-action-code"),
          yn(Kr, "INVALID_OOB_CODE", "invalid-action-code"),
          yn(Kr, "MISSING_OOB_CODE", "internal-error"),
          yn(Kr, "CREDENTIAL_TOO_OLD_LOGIN_AGAIN", "requires-recent-login"),
          yn(Kr, "INVALID_ID_TOKEN", "invalid-user-token"),
          yn(Kr, "TOKEN_EXPIRED", "user-token-expired"),
          yn(Kr, "USER_NOT_FOUND", "user-token-expired"),
          yn(Kr, "TOO_MANY_ATTEMPTS_TRY_LATER", "too-many-requests"),
          yn(Kr, "INVALID_CODE", "invalid-verification-code"),
          yn(Kr, "INVALID_SESSION_INFO", "invalid-verification-id"),
          yn(Kr, "INVALID_TEMPORARY_PROOF", "invalid-credential"),
          yn(Kr, "MISSING_SESSION_INFO", "missing-verification-id"),
          yn(Kr, "SESSION_EXPIRED", "code-expired"),
          yn(Kr, "MISSING_ANDROID_PACKAGE_NAME", "missing-android-pkg-name"),
          yn(Kr, "UNAUTHORIZED_DOMAIN", "unauthorized-continue-uri"),
          yn(Kr, "INVALID_OAUTH_CLIENT_ID", "invalid-oauth-client-id"),
          yn(Kr, "ADMIN_ONLY_OPERATION", "admin-restricted-operation"),
          yn(
            Kr,
            "INVALID_MFA_PENDING_CREDENTIAL",
            "invalid-multi-factor-session"
          ),
          yn(Kr, "MFA_ENROLLMENT_NOT_FOUND", "multi-factor-info-not-found"),
          yn(Kr, "MISSING_MFA_ENROLLMENT_ID", "missing-multi-factor-info"),
          yn(
            Kr,
            "MISSING_MFA_PENDING_CREDENTIAL",
            "missing-multi-factor-session"
          ),
          yn(Kr, "SECOND_FACTOR_EXISTS", "second-factor-already-in-use"),
          yn(
            Kr,
            "SECOND_FACTOR_LIMIT_EXCEEDED",
            "maximum-second-factor-count-exceeded"
          ),
          yn(Kr, "BLOCKING_FUNCTION_ERROR_RESPONSE", "internal-error"),
          Kr),
        ma = new da(3e4, 6e4);
      function ga(e, t) {
        return e.tenantId && !t.tenantId
          ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
          : t;
      }
      function ya(e, t, n, r) {
        return ba.apply(this, arguments);
      }
      function ba() {
        return (
          (ba = pn(
            kn().mark(function e(t, n, r, a) {
              var i,
                o = arguments;
              return kn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = o.length > 4 && void 0 !== o[4] ? o[4] : {}),
                        e.abrupt(
                          "return",
                          ka(
                            t,
                            i,
                            pn(
                              kn().mark(function e() {
                                var i, o, u, s;
                                return kn().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = {}),
                                          (o = {}),
                                          a &&
                                            ("GET" === n
                                              ? (o = a)
                                              : (i = {
                                                  body: JSON.stringify(a),
                                                })),
                                          (u = Ln(
                                            Object.assign(
                                              { key: t.config.apiKey },
                                              o
                                            )
                                          ).slice(1)),
                                          (e.next = 6),
                                          t._getAdditionalHeaders()
                                        );
                                      case 6:
                                        return (
                                          ((s = e.sent)["Content-Type"] =
                                            "application/json"),
                                          t.languageCode &&
                                            (s["X-Firebase-Locale"] =
                                              t.languageCode),
                                          e.abrupt(
                                            "return",
                                            ha.fetch()(
                                              _a(t, t.config.apiHost, r, u),
                                              Object.assign(
                                                {
                                                  method: n,
                                                  headers: s,
                                                  referrerPolicy: "no-referrer",
                                                },
                                                i
                                              )
                                            )
                                          )
                                        );
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          )
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          ba.apply(this, arguments)
        );
      }
      function ka(e, t, n) {
        return wa.apply(this, arguments);
      }
      function wa() {
        return (wa = pn(
          kn().mark(function e(t, n, r) {
            var a, i, u, s, l, c, f, d, p, h;
            return kn().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t._canInitEmulator = !1),
                        (a = Object.assign(Object.assign({}, va), n)),
                        (e.prev = 2),
                        (i = new Ea(t)),
                        (e.next = 6),
                        Promise.race([r(), i.promise])
                      );
                    case 6:
                      return (
                        (u = e.sent),
                        i.clearNetworkTimeout(),
                        (e.next = 10),
                        u.json()
                      );
                    case 10:
                      if (!("needConfirmation" in (s = e.sent))) {
                        e.next = 13;
                        break;
                      }
                      throw Ca(
                        t,
                        "account-exists-with-different-credential",
                        s
                      );
                    case 13:
                      if (!u.ok || "errorMessage" in s) {
                        e.next = 17;
                        break;
                      }
                      return e.abrupt("return", s);
                    case 17:
                      if (
                        ((l = u.ok ? s.errorMessage : s.error.message),
                        (c = l.split(" : ")),
                        (f = o(c, 2)),
                        (d = f[0]),
                        (p = f[1]),
                        "FEDERATED_USER_ID_ALREADY_LINKED" !== d)
                      ) {
                        e.next = 23;
                        break;
                      }
                      throw Ca(t, "credential-already-in-use", s);
                    case 23:
                      if ("EMAIL_EXISTS" !== d) {
                        e.next = 25;
                        break;
                      }
                      throw Ca(t, "email-already-in-use", s);
                    case 25:
                      if (
                        ((h = a[d] || d.toLowerCase().replace(/[_\s]+/g, "-")),
                        !p)
                      ) {
                        e.next = 30;
                        break;
                      }
                      throw ea(t, h, p);
                    case 30:
                      Xr(t, h);
                    case 31:
                      e.next = 38;
                      break;
                    case 33:
                      if (
                        ((e.prev = 33),
                        (e.t0 = e.catch(2)),
                        !(e.t0 instanceof Tn))
                      ) {
                        e.next = 37;
                        break;
                      }
                      throw e.t0;
                    case 37:
                      Xr(t, "network-request-failed");
                    case 38:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 33]]
            );
          })
        )).apply(this, arguments);
      }
      function Sa(e, t, n, r) {
        return xa.apply(this, arguments);
      }
      function xa() {
        return (
          (xa = pn(
            kn().mark(function e(t, n, r, a) {
              var i,
                o,
                u = arguments;
              return kn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = u.length > 4 && void 0 !== u[4] ? u[4] : {}),
                        (e.next = 3),
                        ya(t, n, r, a, i)
                      );
                    case 3:
                      return (
                        "mfaPendingCredential" in (o = e.sent) &&
                          Xr(t, "multi-factor-auth-required", {
                            _serverResponse: o,
                          }),
                        e.abrupt("return", o)
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          xa.apply(this, arguments)
        );
      }
      function _a(e, t, n, r) {
        var a = "".concat(t).concat(n, "?").concat(r);
        return e.config.emulator
          ? pa(e.config, a)
          : "".concat(e.config.apiScheme, "://").concat(a);
      }
      var Ea = (function () {
        function e(t) {
          var n = this;
          hn(this, e),
            (this.auth = t),
            (this.timer = null),
            (this.promise = new Promise(function (e, t) {
              n.timer = setTimeout(function () {
                return t(Zr(n.auth, "network-request-failed"));
              }, ma.get());
            }));
        }
        return (
          mn(e, [
            {
              key: "clearNetworkTimeout",
              value: function () {
                clearTimeout(this.timer);
              },
            },
          ]),
          e
        );
      })();
      function Ca(e, t, n) {
        var r = { appName: e.name };
        n.email && (r.email = n.email),
          n.phoneNumber && (r.phoneNumber = n.phoneNumber);
        var a = Zr(e, t, r);
        return (a.customData._tokenResponse = n), a;
      }
      function Ia(e, t) {
        return Ta.apply(this, arguments);
      }
      function Ta() {
        return (Ta = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      ya(t, "POST", "/v1/accounts:delete", n)
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Pa(e, t) {
        return Oa.apply(this, arguments);
      }
      function Oa() {
        return (Oa = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      ya(t, "POST", "/v1/accounts:lookup", n)
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Na(e) {
        if (e)
          try {
            var t = new Date(Number(e));
            if (!isNaN(t.getTime())) return t.toUTCString();
          } catch (n) {}
      }
      function Ra() {
        return (
          (Ra = pn(
            kn().mark(function e(t) {
              var n,
                r,
                a,
                i,
                o,
                u,
                s = arguments;
              return kn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = s.length > 1 && void 0 !== s[1] && s[1]),
                        (r = zn(t)),
                        (e.next = 4),
                        r.getIdToken(n)
                      );
                    case 4:
                      return (
                        (a = e.sent),
                        na(
                          (i = La(a)) && i.exp && i.auth_time && i.iat,
                          r.auth,
                          "internal-error"
                        ),
                        (o =
                          "object" === typeof i.firebase ? i.firebase : void 0),
                        (u =
                          null === o || void 0 === o
                            ? void 0
                            : o.sign_in_provider),
                        e.abrupt("return", {
                          claims: i,
                          token: a,
                          authTime: Na(Aa(i.auth_time)),
                          issuedAtTime: Na(Aa(i.iat)),
                          expirationTime: Na(Aa(i.exp)),
                          signInProvider: u || null,
                          signInSecondFactor:
                            (null === o || void 0 === o
                              ? void 0
                              : o.sign_in_second_factor) || null,
                        })
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Ra.apply(this, arguments)
        );
      }
      function Aa(e) {
        return 1e3 * Number(e);
      }
      function La(e) {
        var t = o(e.split("."), 3),
          n = t[0],
          r = t[1],
          a = t[2];
        if (void 0 === n || void 0 === r || void 0 === a)
          return Jr("JWT malformed, contained fewer than 3 sections"), null;
        try {
          var i = Cn(r);
          return i
            ? JSON.parse(i)
            : (Jr("Failed to decode base64 JWT payload"), null);
        } catch (u) {
          return Jr("Caught error parsing JWT payload as JSON", u), null;
        }
      }
      function Da(e, t) {
        return Ma.apply(this, arguments);
      }
      function Ma() {
        return (
          (Ma = pn(
            kn().mark(function e(t, n) {
              var r = arguments;
              return kn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(r.length > 2 && void 0 !== r[2] && r[2])) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", n);
                      case 3:
                        return (e.prev = 3), (e.next = 6), n;
                      case 6:
                        return e.abrupt("return", e.sent);
                      case 9:
                        if (
                          ((e.prev = 9),
                          (e.t0 = e.catch(3)),
                          !(e.t0 instanceof Tn && ja(e.t0)))
                        ) {
                          e.next = 15;
                          break;
                        }
                        if (t.auth.currentUser !== t) {
                          e.next = 15;
                          break;
                        }
                        return (e.next = 15), t.auth.signOut();
                      case 15:
                        throw e.t0;
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 9]]
              );
            })
          )),
          Ma.apply(this, arguments)
        );
      }
      function ja(e) {
        var t = e.code;
        return (
          t === "auth/".concat("user-disabled") ||
          t === "auth/".concat("user-token-expired")
        );
      }
      var Fa = (function () {
          function e(t) {
            hn(this, e),
              (this.user = t),
              (this.isRunning = !1),
              (this.timerId = null),
              (this.errorBackoff = 3e4);
          }
          return (
            mn(e, [
              {
                key: "_start",
                value: function () {
                  this.isRunning || ((this.isRunning = !0), this.schedule());
                },
              },
              {
                key: "_stop",
                value: function () {
                  this.isRunning &&
                    ((this.isRunning = !1),
                    null !== this.timerId && clearTimeout(this.timerId));
                },
              },
              {
                key: "getInterval",
                value: function (e) {
                  var t;
                  if (e) {
                    var n = this.errorBackoff;
                    return (
                      (this.errorBackoff = Math.min(
                        2 * this.errorBackoff,
                        96e4
                      )),
                      n
                    );
                  }
                  this.errorBackoff = 3e4;
                  var r =
                    (null !== (t = this.user.stsTokenManager.expirationTime) &&
                    void 0 !== t
                      ? t
                      : 0) -
                    Date.now() -
                    3e5;
                  return Math.max(0, r);
                },
              },
              {
                key: "schedule",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  if (this.isRunning) {
                    var n = this.getInterval(t);
                    this.timerId = setTimeout(
                      pn(
                        kn().mark(function t() {
                          return kn().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), e.iteration();
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      ),
                      n
                    );
                  }
                },
              },
              {
                key: "iteration",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.user.getIdToken(!0)
                                );
                              case 3:
                                e.next = 9;
                                break;
                              case 5:
                                return (
                                  (e.prev = 5),
                                  (e.t0 = e.catch(0)),
                                  e.t0.code ===
                                    "auth/".concat("network-request-failed") &&
                                    this.schedule(!0),
                                  e.abrupt("return")
                                );
                              case 9:
                                this.schedule();
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 5]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        za = (function () {
          function e(t, n) {
            hn(this, e),
              (this.createdAt = t),
              (this.lastLoginAt = n),
              this._initializeTime();
          }
          return (
            mn(e, [
              {
                key: "_initializeTime",
                value: function () {
                  (this.lastSignInTime = Na(this.lastLoginAt)),
                    (this.creationTime = Na(this.createdAt));
                },
              },
              {
                key: "_copy",
                value: function (e) {
                  (this.createdAt = e.createdAt),
                    (this.lastLoginAt = e.lastLoginAt),
                    this._initializeTime();
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return {
                    createdAt: this.createdAt,
                    lastLoginAt: this.lastLoginAt,
                  };
                },
              },
            ]),
            e
          );
        })();
      function Ua(e) {
        return Va.apply(this, arguments);
      }
      function Va() {
        return (Va = pn(
          kn().mark(function e(t) {
            var n, r, a, i, o, u, s, l, c, f, d;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = t.auth), (e.next = 3), t.getIdToken();
                  case 3:
                    return (
                      (a = e.sent), (e.next = 6), Da(t, Pa(r, { idToken: a }))
                    );
                  case 6:
                    na(
                      null === (i = e.sent) || void 0 === i
                        ? void 0
                        : i.users.length,
                      r,
                      "internal-error"
                    ),
                      (o = i.users[0]),
                      t._notifyReloadListener(o),
                      (u = (
                        null === (n = o.providerUserInfo) || void 0 === n
                          ? void 0
                          : n.length
                      )
                        ? Wa(o.providerUserInfo)
                        : []),
                      (s = Ba(t.providerData, u)),
                      (l = t.isAnonymous),
                      (c =
                        !(t.email && o.passwordHash) &&
                        !(null === s || void 0 === s ? void 0 : s.length)),
                      (f = !!l && c),
                      (d = {
                        uid: o.localId,
                        displayName: o.displayName || null,
                        photoURL: o.photoUrl || null,
                        email: o.email || null,
                        emailVerified: o.emailVerified || !1,
                        phoneNumber: o.phoneNumber || null,
                        tenantId: o.tenantId || null,
                        providerData: s,
                        metadata: new za(o.createdAt, o.lastLoginAt),
                        isAnonymous: f,
                      }),
                      Object.assign(t, d);
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ha() {
        return (Ha = pn(
          kn().mark(function e(t) {
            var n;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = zn(t)), (e.next = 3), Ua(n);
                  case 3:
                    return (e.next = 5), n.auth._persistUserIfCurrent(n);
                  case 5:
                    n.auth._notifyListenersIfCurrent(n);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ba(e, t) {
        var n = e.filter(function (e) {
          return !t.some(function (t) {
            return t.providerId === e.providerId;
          });
        });
        return [].concat(gn(n), gn(t));
      }
      function Wa(e) {
        return e.map(function (e) {
          var t = e.providerId,
            n = $r(e, ["providerId"]);
          return {
            providerId: t,
            uid: n.rawId || "",
            displayName: n.displayName || null,
            email: n.email || null,
            phoneNumber: n.phoneNumber || null,
            photoURL: n.photoUrl || null,
          };
        });
      }
      function $a(e, t) {
        return Ka.apply(this, arguments);
      }
      function Ka() {
        return (Ka = pn(
          kn().mark(function e(t, n) {
            var r;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      ka(
                        t,
                        {},
                        pn(
                          kn().mark(function e() {
                            var r, a, i, o, u, s;
                            return kn().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (r = Ln({
                                        grant_type: "refresh_token",
                                        refresh_token: n,
                                      }).slice(1)),
                                      (a = t.config),
                                      (i = a.tokenApiHost),
                                      (o = a.apiKey),
                                      (u = _a(
                                        t,
                                        i,
                                        "/v1/token",
                                        "key=".concat(o)
                                      )),
                                      (e.next = 5),
                                      t._getAdditionalHeaders()
                                    );
                                  case 5:
                                    return (
                                      ((s = e.sent)["Content-Type"] =
                                        "application/x-www-form-urlencoded"),
                                      e.abrupt(
                                        "return",
                                        ha.fetch()(u, {
                                          method: "POST",
                                          headers: s,
                                          body: r,
                                        })
                                      )
                                    );
                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      )
                    );
                  case 2:
                    return (
                      (r = e.sent),
                      e.abrupt("return", {
                        accessToken: r.access_token,
                        expiresIn: r.expires_in,
                        refreshToken: r.refresh_token,
                      })
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var qa = (function () {
        function e() {
          hn(this, e),
            (this.refreshToken = null),
            (this.accessToken = null),
            (this.expirationTime = null);
        }
        return (
          mn(
            e,
            [
              {
                key: "isExpired",
                get: function () {
                  return (
                    !this.expirationTime ||
                    Date.now() > this.expirationTime - 3e4
                  );
                },
              },
              {
                key: "updateFromServerResponse",
                value: function (e) {
                  na(e.idToken, "internal-error"),
                    na("undefined" !== typeof e.idToken, "internal-error"),
                    na("undefined" !== typeof e.refreshToken, "internal-error");
                  var t =
                    "expiresIn" in e && "undefined" !== typeof e.expiresIn
                      ? Number(e.expiresIn)
                      : (function (e) {
                          var t = La(e);
                          return (
                            na(t, "internal-error"),
                            na("undefined" !== typeof t.exp, "internal-error"),
                            na("undefined" !== typeof t.iat, "internal-error"),
                            Number(t.exp) - Number(t.iat)
                          );
                        })(e.idToken);
                  this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
                },
              },
              {
                key: "getToken",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n,
                        r = arguments;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n =
                                    r.length > 1 && void 0 !== r[1] && r[1]),
                                  na(
                                    !this.accessToken || this.refreshToken,
                                    t,
                                    "user-token-expired"
                                  ),
                                  n || !this.accessToken || this.isExpired)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return", this.accessToken);
                              case 4:
                                if (!this.refreshToken) {
                                  e.next = 8;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  this.refresh(t, this.refreshToken)
                                );
                              case 7:
                                return e.abrupt("return", this.accessToken);
                              case 8:
                                return e.abrupt("return", null);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "clearRefreshToken",
                value: function () {
                  this.refreshToken = null;
                },
              },
              {
                key: "refresh",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t, n) {
                      var r, a, i, o;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), $a(t, n);
                              case 2:
                                (r = e.sent),
                                  (a = r.accessToken),
                                  (i = r.refreshToken),
                                  (o = r.expiresIn),
                                  this.updateTokensAndExpiration(
                                    a,
                                    i,
                                    Number(o)
                                  );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "updateTokensAndExpiration",
                value: function (e, t, n) {
                  (this.refreshToken = t || null),
                    (this.accessToken = e || null),
                    (this.expirationTime = Date.now() + 1e3 * n);
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return {
                    refreshToken: this.refreshToken,
                    accessToken: this.accessToken,
                    expirationTime: this.expirationTime,
                  };
                },
              },
              {
                key: "_assign",
                value: function (e) {
                  (this.accessToken = e.accessToken),
                    (this.refreshToken = e.refreshToken),
                    (this.expirationTime = e.expirationTime);
                },
              },
              {
                key: "_clone",
                value: function () {
                  return Object.assign(new e(), this.toJSON());
                },
              },
              {
                key: "_performRefresh",
                value: function () {
                  return ra("not implemented");
                },
              },
            ],
            [
              {
                key: "fromJSON",
                value: function (t, n) {
                  var r = n.refreshToken,
                    a = n.accessToken,
                    i = n.expirationTime,
                    o = new e();
                  return (
                    r &&
                      (na("string" === typeof r, "internal-error", {
                        appName: t,
                      }),
                      (o.refreshToken = r)),
                    a &&
                      (na("string" === typeof a, "internal-error", {
                        appName: t,
                      }),
                      (o.accessToken = a)),
                    i &&
                      (na("number" === typeof i, "internal-error", {
                        appName: t,
                      }),
                      (o.expirationTime = i)),
                    o
                  );
                },
              },
            ]
          ),
          e
        );
      })();
      function Ga(e, t) {
        na(
          "string" === typeof e || "undefined" === typeof e,
          "internal-error",
          { appName: t }
        );
      }
      var Qa = (function () {
          function e(t) {
            hn(this, e);
            var n = t.uid,
              r = t.auth,
              a = t.stsTokenManager,
              i = $r(t, ["uid", "auth", "stsTokenManager"]);
            (this.providerId = "firebase"),
              (this.proactiveRefresh = new Fa(this)),
              (this.reloadUserInfo = null),
              (this.reloadListener = null),
              (this.uid = n),
              (this.auth = r),
              (this.stsTokenManager = a),
              (this.accessToken = a.accessToken),
              (this.displayName = i.displayName || null),
              (this.email = i.email || null),
              (this.emailVerified = i.emailVerified || !1),
              (this.phoneNumber = i.phoneNumber || null),
              (this.photoURL = i.photoURL || null),
              (this.isAnonymous = i.isAnonymous || !1),
              (this.tenantId = i.tenantId || null),
              (this.providerData = i.providerData ? gn(i.providerData) : []),
              (this.metadata = new za(
                i.createdAt || void 0,
                i.lastLoginAt || void 0
              ));
          }
          return (
            mn(
              e,
              [
                {
                  key: "getIdToken",
                  value: (function () {
                    var e = pn(
                      kn().mark(function e(t) {
                        var n;
                        return kn().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Da(
                                      this,
                                      this.stsTokenManager.getToken(
                                        this.auth,
                                        t
                                      )
                                    )
                                  );
                                case 2:
                                  if (
                                    (na(
                                      (n = e.sent),
                                      this.auth,
                                      "internal-error"
                                    ),
                                    this.accessToken === n)
                                  ) {
                                    e.next = 9;
                                    break;
                                  }
                                  return (
                                    (this.accessToken = n),
                                    (e.next = 8),
                                    this.auth._persistUserIfCurrent(this)
                                  );
                                case 8:
                                  this.auth._notifyListenersIfCurrent(this);
                                case 9:
                                  return e.abrupt("return", n);
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getIdTokenResult",
                  value: function (e) {
                    return (function (e) {
                      return Ra.apply(this, arguments);
                    })(this, e);
                  },
                },
                {
                  key: "reload",
                  value: function () {
                    return (function (e) {
                      return Ha.apply(this, arguments);
                    })(this);
                  },
                },
                {
                  key: "_assign",
                  value: function (e) {
                    this !== e &&
                      (na(this.uid === e.uid, this.auth, "internal-error"),
                      (this.displayName = e.displayName),
                      (this.photoURL = e.photoURL),
                      (this.email = e.email),
                      (this.emailVerified = e.emailVerified),
                      (this.phoneNumber = e.phoneNumber),
                      (this.isAnonymous = e.isAnonymous),
                      (this.tenantId = e.tenantId),
                      (this.providerData = e.providerData.map(function (e) {
                        return Object.assign({}, e);
                      })),
                      this.metadata._copy(e.metadata),
                      this.stsTokenManager._assign(e.stsTokenManager));
                  },
                },
                {
                  key: "_clone",
                  value: function (t) {
                    return new e(
                      Object.assign(Object.assign({}, this), {
                        auth: t,
                        stsTokenManager: this.stsTokenManager._clone(),
                      })
                    );
                  },
                },
                {
                  key: "_onReload",
                  value: function (e) {
                    na(!this.reloadListener, this.auth, "internal-error"),
                      (this.reloadListener = e),
                      this.reloadUserInfo &&
                        (this._notifyReloadListener(this.reloadUserInfo),
                        (this.reloadUserInfo = null));
                  },
                },
                {
                  key: "_notifyReloadListener",
                  value: function (e) {
                    this.reloadListener
                      ? this.reloadListener(e)
                      : (this.reloadUserInfo = e);
                  },
                },
                {
                  key: "_startProactiveRefresh",
                  value: function () {
                    this.proactiveRefresh._start();
                  },
                },
                {
                  key: "_stopProactiveRefresh",
                  value: function () {
                    this.proactiveRefresh._stop();
                  },
                },
                {
                  key: "_updateTokensIfNecessary",
                  value: (function () {
                    var e = pn(
                      kn().mark(function e(t) {
                        var n,
                          r,
                          a = arguments;
                        return kn().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((n =
                                      a.length > 1 && void 0 !== a[1] && a[1]),
                                    (r = !1),
                                    t.idToken &&
                                      t.idToken !==
                                        this.stsTokenManager.accessToken &&
                                      (this.stsTokenManager.updateFromServerResponse(
                                        t
                                      ),
                                      (r = !0)),
                                    !n)
                                  ) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (e.next = 6), Ua(this);
                                case 6:
                                  return (
                                    (e.next = 8),
                                    this.auth._persistUserIfCurrent(this)
                                  );
                                case 8:
                                  r &&
                                    this.auth._notifyListenersIfCurrent(this);
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "delete",
                  value: (function () {
                    var e = pn(
                      kn().mark(function e() {
                        var t;
                        return kn().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.getIdToken();
                                case 2:
                                  return (
                                    (t = e.sent),
                                    (e.next = 5),
                                    Da(this, Ia(this.auth, { idToken: t }))
                                  );
                                case 5:
                                  return (
                                    this.stsTokenManager.clearRefreshToken(),
                                    e.abrupt("return", this.auth.signOut())
                                  );
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "toJSON",
                  value: function () {
                    return Object.assign(
                      Object.assign(
                        {
                          uid: this.uid,
                          email: this.email || void 0,
                          emailVerified: this.emailVerified,
                          displayName: this.displayName || void 0,
                          isAnonymous: this.isAnonymous,
                          photoURL: this.photoURL || void 0,
                          phoneNumber: this.phoneNumber || void 0,
                          tenantId: this.tenantId || void 0,
                          providerData: this.providerData.map(function (e) {
                            return Object.assign({}, e);
                          }),
                          stsTokenManager: this.stsTokenManager.toJSON(),
                          _redirectEventId: this._redirectEventId,
                        },
                        this.metadata.toJSON()
                      ),
                      {
                        apiKey: this.auth.config.apiKey,
                        appName: this.auth.name,
                      }
                    );
                  },
                },
                {
                  key: "refreshToken",
                  get: function () {
                    return this.stsTokenManager.refreshToken || "";
                  },
                },
              ],
              [
                {
                  key: "_fromJSON",
                  value: function (t, n) {
                    var r,
                      a,
                      i,
                      o,
                      u,
                      s,
                      l,
                      c,
                      f =
                        null !== (r = n.displayName) && void 0 !== r
                          ? r
                          : void 0,
                      d = null !== (a = n.email) && void 0 !== a ? a : void 0,
                      p =
                        null !== (i = n.phoneNumber) && void 0 !== i
                          ? i
                          : void 0,
                      h =
                        null !== (o = n.photoURL) && void 0 !== o ? o : void 0,
                      v =
                        null !== (u = n.tenantId) && void 0 !== u ? u : void 0,
                      m =
                        null !== (s = n._redirectEventId) && void 0 !== s
                          ? s
                          : void 0,
                      g =
                        null !== (l = n.createdAt) && void 0 !== l ? l : void 0,
                      y =
                        null !== (c = n.lastLoginAt) && void 0 !== c
                          ? c
                          : void 0,
                      b = n.uid,
                      k = n.emailVerified,
                      w = n.isAnonymous,
                      S = n.providerData,
                      x = n.stsTokenManager;
                    na(b && x, t, "internal-error");
                    var _ = qa.fromJSON(this.name, x);
                    na("string" === typeof b, t, "internal-error"),
                      Ga(f, t.name),
                      Ga(d, t.name),
                      na("boolean" === typeof k, t, "internal-error"),
                      na("boolean" === typeof w, t, "internal-error"),
                      Ga(p, t.name),
                      Ga(h, t.name),
                      Ga(v, t.name),
                      Ga(m, t.name),
                      Ga(g, t.name),
                      Ga(y, t.name);
                    var E = new e({
                      uid: b,
                      auth: t,
                      email: d,
                      emailVerified: k,
                      displayName: f,
                      isAnonymous: w,
                      photoURL: h,
                      phoneNumber: p,
                      tenantId: v,
                      stsTokenManager: _,
                      createdAt: g,
                      lastLoginAt: y,
                    });
                    return (
                      S &&
                        Array.isArray(S) &&
                        (E.providerData = S.map(function (e) {
                          return Object.assign({}, e);
                        })),
                      m && (E._redirectEventId = m),
                      E
                    );
                  },
                },
                {
                  key: "_fromIdTokenResponse",
                  value: (function () {
                    var t = pn(
                      kn().mark(function t(n, r) {
                        var a,
                          i,
                          o,
                          u = arguments;
                        return kn().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (a = u.length > 2 && void 0 !== u[2] && u[2]),
                                  (i = new qa()).updateFromServerResponse(r),
                                  (o = new e({
                                    uid: r.localId,
                                    auth: n,
                                    stsTokenManager: i,
                                    isAnonymous: a,
                                  })),
                                  (t.next = 6),
                                  Ua(o)
                                );
                              case 6:
                                return t.abrupt("return", o);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e, n) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
              ]
            ),
            e
          );
        })(),
        Ya = (function () {
          function e() {
            hn(this, e), (this.type = "NONE"), (this.storage = {});
          }
          return (
            mn(e, [
              {
                key: "_isAvailable",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      return kn().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", !0);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_set",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t, n) {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.storage[t] = n;
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_get",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.storage[t]),
                                  e.abrupt("return", void 0 === n ? null : n)
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_remove",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                delete this.storage[t];
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              { key: "_addListener", value: function (e, t) {} },
              { key: "_removeListener", value: function (e, t) {} },
            ]),
            e
          );
        })();
      Ya.type = "NONE";
      var Ja = Ya;
      function Xa(e, t, n) {
        return "firebase".concat(":", e, ":").concat(t, ":").concat(n);
      }
      var Za = (function () {
        function e(t, n, r) {
          hn(this, e),
            (this.persistence = t),
            (this.auth = n),
            (this.userKey = r);
          var a = this.auth,
            i = a.config,
            o = a.name;
          (this.fullUserKey = Xa(this.userKey, i.apiKey, o)),
            (this.fullPersistenceKey = Xa("persistence", i.apiKey, o)),
            (this.boundEventHandler = n._onStorageEvent.bind(n)),
            this.persistence._addListener(
              this.fullUserKey,
              this.boundEventHandler
            );
        }
        return (
          mn(
            e,
            [
              {
                key: "setCurrentUser",
                value: function (e) {
                  return this.persistence._set(this.fullUserKey, e.toJSON());
                },
              },
              {
                key: "getCurrentUser",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      var t;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.persistence._get(this.fullUserKey)
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    "return",
                                    t ? Qa._fromJSON(this.auth, t) : null
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "removeCurrentUser",
                value: function () {
                  return this.persistence._remove(this.fullUserKey);
                },
              },
              {
                key: "savePersistenceForRedirect",
                value: function () {
                  return this.persistence._set(
                    this.fullPersistenceKey,
                    this.persistence.type
                  );
                },
              },
              {
                key: "setPersistence",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.persistence !== t) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (e.next = 4), this.getCurrentUser();
                              case 4:
                                return (
                                  (n = e.sent),
                                  (e.next = 7),
                                  this.removeCurrentUser()
                                );
                              case 7:
                                if (((this.persistence = t), !n)) {
                                  e.next = 10;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.setCurrentUser(n)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "delete",
                value: function () {
                  this.persistence._removeListener(
                    this.fullUserKey,
                    this.boundEventHandler
                  );
                },
              },
            ],
            [
              {
                key: "create",
                value: (function () {
                  var t = pn(
                    kn().mark(function t(n, r) {
                      var a,
                        i,
                        o,
                        u,
                        s,
                        l,
                        c,
                        f,
                        d,
                        p,
                        h,
                        v = arguments;
                      return kn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((a =
                                    v.length > 2 && void 0 !== v[2]
                                      ? v[2]
                                      : "authUser"),
                                  r.length)
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return", new e(oa(Ja), n, a));
                              case 3:
                                return (
                                  (t.next = 5),
                                  Promise.all(
                                    r.map(
                                      (function () {
                                        var e = pn(
                                          kn().mark(function e(t) {
                                            return kn().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      t._isAvailable()
                                                    );
                                                  case 2:
                                                    if (!e.sent) {
                                                      e.next = 4;
                                                      break;
                                                    }
                                                    return e.abrupt(
                                                      "return",
                                                      t
                                                    );
                                                  case 4:
                                                    return e.abrupt(
                                                      "return",
                                                      void 0
                                                    );
                                                  case 5:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  )
                                );
                              case 5:
                                (i = t.sent.filter(function (e) {
                                  return e;
                                })),
                                  (o = i[0] || oa(Ja)),
                                  (u = Xa(a, n.config.apiKey, n.name)),
                                  (s = null),
                                  (l = fn(r)),
                                  (t.prev = 10),
                                  l.s();
                              case 12:
                                if ((c = l.n()).done) {
                                  t.next = 29;
                                  break;
                                }
                                return (
                                  (f = c.value),
                                  (t.prev = 14),
                                  (t.next = 17),
                                  f._get(u)
                                );
                              case 17:
                                if (!(d = t.sent)) {
                                  t.next = 23;
                                  break;
                                }
                                return (
                                  (p = Qa._fromJSON(n, d)),
                                  f !== o && (s = p),
                                  (o = f),
                                  t.abrupt("break", 29)
                                );
                              case 23:
                                t.next = 27;
                                break;
                              case 25:
                                (t.prev = 25), (t.t0 = t.catch(14));
                              case 27:
                                t.next = 12;
                                break;
                              case 29:
                                t.next = 34;
                                break;
                              case 31:
                                (t.prev = 31), (t.t1 = t.catch(10)), l.e(t.t1);
                              case 34:
                                return (t.prev = 34), l.f(), t.finish(34);
                              case 37:
                                if (
                                  ((h = i.filter(function (e) {
                                    return e._shouldAllowMigration;
                                  })),
                                  o._shouldAllowMigration && h.length)
                                ) {
                                  t.next = 40;
                                  break;
                                }
                                return t.abrupt("return", new e(o, n, a));
                              case 40:
                                if (((o = h[0]), !s)) {
                                  t.next = 44;
                                  break;
                                }
                                return (t.next = 44), o._set(u, s.toJSON());
                              case 44:
                                return (
                                  (t.next = 46),
                                  Promise.all(
                                    r.map(
                                      (function () {
                                        var e = pn(
                                          kn().mark(function e(t) {
                                            return kn().wrap(
                                              function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      if (t === o) {
                                                        e.next = 8;
                                                        break;
                                                      }
                                                      return (
                                                        (e.prev = 1),
                                                        (e.next = 4),
                                                        t._remove(u)
                                                      );
                                                    case 4:
                                                      e.next = 8;
                                                      break;
                                                    case 6:
                                                      (e.prev = 6),
                                                        (e.t0 = e.catch(1));
                                                    case 8:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              },
                                              e,
                                              null,
                                              [[1, 6]]
                                            );
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  )
                                );
                              case 46:
                                return t.abrupt("return", new e(o, n, a));
                              case 47:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [
                          [10, 31, 34, 37],
                          [14, 25],
                        ]
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]
          ),
          e
        );
      })();
      function ei(e) {
        var t = e.toLowerCase();
        if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
          return "Opera";
        if (ai(t)) return "IEMobile";
        if (t.includes("msie") || t.includes("trident/")) return "IE";
        if (t.includes("edge/")) return "Edge";
        if (ti(t)) return "Firefox";
        if (t.includes("silk/")) return "Silk";
        if (oi(t)) return "Blackberry";
        if (ui(t)) return "Webos";
        if (ni(t)) return "Safari";
        if ((t.includes("chrome/") || ri(t)) && !t.includes("edge/"))
          return "Chrome";
        if (ii(t)) return "Android";
        var n = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
        return 2 === (null === n || void 0 === n ? void 0 : n.length)
          ? n[1]
          : "Other";
      }
      function ti() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
        return /firefox\//i.test(e);
      }
      function ni() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : In(),
          t = e.toLowerCase();
        return (
          t.includes("safari/") &&
          !t.includes("chrome/") &&
          !t.includes("crios/") &&
          !t.includes("android")
        );
      }
      function ri() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
        return /crios\//i.test(e);
      }
      function ai() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
        return /iemobile/i.test(e);
      }
      function ii() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
        return /android/i.test(e);
      }
      function oi() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
        return /blackberry/i.test(e);
      }
      function ui() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
        return /webos/i.test(e);
      }
      function si() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
        return /iphone|ipad|ipod/i.test(e);
      }
      function li() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : In();
        return (
          si(t) &&
          !!(null === (e = window.navigator) || void 0 === e
            ? void 0
            : e.standalone)
        );
      }
      function ci() {
        return (
          (function () {
            var e = In();
            return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
          })() && 10 === document.documentMode
        );
      }
      function fi() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In();
        return (
          si(e) || ii(e) || ui(e) || oi(e) || /windows phone/i.test(e) || ai(e)
        );
      }
      function di(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        switch (e) {
          case "Browser":
            t = ei(In());
            break;
          case "Worker":
            t = "".concat(ei(In()), "-").concat(e);
            break;
          default:
            t = e;
        }
        var r = n.length ? n.join(",") : "FirebaseCore-web";
        return "".concat(t, "/", "JsCore", "/").concat(Tr, "/").concat(r);
      }
      var pi = (function () {
          function e(t) {
            hn(this, e), (this.auth = t), (this.queue = []);
          }
          return (
            mn(e, [
              {
                key: "pushCallback",
                value: function (e, t) {
                  var n = this,
                    r = function (t) {
                      return new Promise(function (n, r) {
                        try {
                          n(e(t));
                        } catch (a) {
                          r(a);
                        }
                      });
                    };
                  (r.onAbort = t), this.queue.push(r);
                  var a = this.queue.length - 1;
                  return function () {
                    n.queue[a] = function () {
                      return Promise.resolve();
                    };
                  };
                },
              },
              {
                key: "runMiddleware",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n, r, a, i, o, u, s;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.auth.currentUser !== t) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                (n = []),
                                  (e.prev = 3),
                                  (r = fn(this.queue)),
                                  (e.prev = 5),
                                  r.s();
                              case 7:
                                if ((a = r.n()).done) {
                                  e.next = 14;
                                  break;
                                }
                                return (i = a.value), (e.next = 11), i(t);
                              case 11:
                                i.onAbort && n.push(i.onAbort);
                              case 12:
                                e.next = 7;
                                break;
                              case 14:
                                e.next = 19;
                                break;
                              case 16:
                                (e.prev = 16), (e.t0 = e.catch(5)), r.e(e.t0);
                              case 19:
                                return (e.prev = 19), r.f(), e.finish(19);
                              case 22:
                                e.next = 30;
                                break;
                              case 24:
                                (e.prev = 24),
                                  (e.t1 = e.catch(3)),
                                  n.reverse(),
                                  (o = fn(n));
                                try {
                                  for (o.s(); !(u = o.n()).done; ) {
                                    s = u.value;
                                    try {
                                      s();
                                    } catch (me) {}
                                  }
                                } catch (l) {
                                  o.e(l);
                                } finally {
                                  o.f();
                                }
                                throw this.auth._errorFactory.create(
                                  "login-blocked",
                                  { originalMessage: e.t1.message }
                                );
                              case 30:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [3, 24],
                          [5, 16, 19, 22],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        hi = (function () {
          function e(t, n, r) {
            hn(this, e),
              (this.app = t),
              (this.heartbeatServiceProvider = n),
              (this.config = r),
              (this.currentUser = null),
              (this.emulatorConfig = null),
              (this.operations = Promise.resolve()),
              (this.authStateSubscription = new mi(this)),
              (this.idTokenSubscription = new mi(this)),
              (this.beforeStateQueue = new pi(this)),
              (this.redirectUser = null),
              (this.isProactiveRefreshEnabled = !1),
              (this._canInitEmulator = !0),
              (this._isInitialized = !1),
              (this._deleted = !1),
              (this._initializationPromise = null),
              (this._popupRedirectResolver = null),
              (this._errorFactory = Qr),
              (this.lastNotifiedUid = void 0),
              (this.languageCode = null),
              (this.tenantId = null),
              (this.settings = { appVerificationDisabledForTesting: !1 }),
              (this.frameworks = []),
              (this.name = t.name),
              (this.clientVersion = r.sdkClientVersion);
          }
          return (
            mn(e, [
              {
                key: "_initializeWithPersistence",
                value: function (e, t) {
                  var n = this;
                  return (
                    t && (this._popupRedirectResolver = oa(t)),
                    (this._initializationPromise = this.queue(
                      pn(
                        kn().mark(function r() {
                          var a, i;
                          return kn().wrap(
                            function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    if (!n._deleted) {
                                      r.next = 2;
                                      break;
                                    }
                                    return r.abrupt("return");
                                  case 2:
                                    return (r.next = 4), Za.create(n, e);
                                  case 4:
                                    if (
                                      ((n.persistenceManager = r.sent),
                                      !n._deleted)
                                    ) {
                                      r.next = 7;
                                      break;
                                    }
                                    return r.abrupt("return");
                                  case 7:
                                    if (
                                      !(null ===
                                        (a = n._popupRedirectResolver) ||
                                      void 0 === a
                                        ? void 0
                                        : a._shouldInitProactively)
                                    ) {
                                      r.next = 15;
                                      break;
                                    }
                                    return (
                                      (r.prev = 8),
                                      (r.next = 11),
                                      n._popupRedirectResolver._initialize(n)
                                    );
                                  case 11:
                                    r.next = 15;
                                    break;
                                  case 13:
                                    (r.prev = 13), (r.t0 = r.catch(8));
                                  case 15:
                                    return (
                                      (r.next = 17), n.initializeCurrentUser(t)
                                    );
                                  case 17:
                                    if (
                                      ((n.lastNotifiedUid =
                                        (null === (i = n.currentUser) ||
                                        void 0 === i
                                          ? void 0
                                          : i.uid) || null),
                                      !n._deleted)
                                    ) {
                                      r.next = 20;
                                      break;
                                    }
                                    return r.abrupt("return");
                                  case 20:
                                    n._isInitialized = !0;
                                  case 21:
                                  case "end":
                                    return r.stop();
                                }
                            },
                            r,
                            null,
                            [[8, 13]]
                          );
                        })
                      )
                    )),
                    this._initializationPromise
                  );
                },
              },
              {
                key: "_onStorageEvent",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      var t;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this._deleted) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (
                                  (e.next = 4),
                                  this.assertedPersistence.getCurrentUser()
                                );
                              case 4:
                                if (((t = e.sent), this.currentUser || t)) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return");
                              case 7:
                                if (
                                  !this.currentUser ||
                                  !t ||
                                  this.currentUser.uid !== t.uid
                                ) {
                                  e.next = 12;
                                  break;
                                }
                                return (
                                  this._currentUser._assign(t),
                                  (e.next = 11),
                                  this.currentUser.getIdToken()
                                );
                              case 11:
                                return e.abrupt("return");
                              case 12:
                                return (
                                  (e.next = 14), this._updateCurrentUser(t, !0)
                                );
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "initializeCurrentUser",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n, r, a, i, o, u, s;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.assertedPersistence.getCurrentUser()
                                );
                              case 2:
                                if (
                                  ((r = e.sent),
                                  (a = r),
                                  (i = !1),
                                  !t || !this.config.authDomain)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (
                                  (e.next = 8),
                                  this.getOrInitRedirectPersistenceManager()
                                );
                              case 8:
                                return (
                                  (o =
                                    null === (n = this.redirectUser) ||
                                    void 0 === n
                                      ? void 0
                                      : n._redirectEventId),
                                  (u =
                                    null === a || void 0 === a
                                      ? void 0
                                      : a._redirectEventId),
                                  (e.next = 12),
                                  this.tryRedirectSignIn(t)
                                );
                              case 12:
                                (s = e.sent),
                                  (o && o !== u) ||
                                    !(null === s || void 0 === s
                                      ? void 0
                                      : s.user) ||
                                    ((a = s.user), (i = !0));
                              case 14:
                                if (a) {
                                  e.next = 16;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.directlySetCurrentUser(null)
                                );
                              case 16:
                                if (a._redirectEventId) {
                                  e.next = 32;
                                  break;
                                }
                                if (!i) {
                                  e.next = 27;
                                  break;
                                }
                                return (
                                  (e.prev = 18),
                                  (e.next = 21),
                                  this.beforeStateQueue.runMiddleware(a)
                                );
                              case 21:
                                e.next = 27;
                                break;
                              case 23:
                                (e.prev = 23),
                                  (e.t0 = e.catch(18)),
                                  (a = r),
                                  this._popupRedirectResolver._overrideRedirectResult(
                                    this,
                                    function () {
                                      return Promise.reject(e.t0);
                                    }
                                  );
                              case 27:
                                if (!a) {
                                  e.next = 31;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.reloadAndSetCurrentUserOrClear(a)
                                );
                              case 31:
                                return e.abrupt(
                                  "return",
                                  this.directlySetCurrentUser(null)
                                );
                              case 32:
                                return (
                                  na(
                                    this._popupRedirectResolver,
                                    this,
                                    "argument-error"
                                  ),
                                  (e.next = 35),
                                  this.getOrInitRedirectPersistenceManager()
                                );
                              case 35:
                                if (
                                  !this.redirectUser ||
                                  this.redirectUser._redirectEventId !==
                                    a._redirectEventId
                                ) {
                                  e.next = 37;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.directlySetCurrentUser(a)
                                );
                              case 37:
                                return e.abrupt(
                                  "return",
                                  this.reloadAndSetCurrentUserOrClear(a)
                                );
                              case 38:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[18, 23]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "tryRedirectSignIn",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = null),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this._popupRedirectResolver._completeRedirectFn(
                                    this,
                                    t,
                                    !0
                                  )
                                );
                              case 4:
                                (n = e.sent), (e.next = 11);
                                break;
                              case 7:
                                return (
                                  (e.prev = 7),
                                  (e.t0 = e.catch(1)),
                                  (e.next = 11),
                                  this._setRedirectUser(null)
                                );
                              case 11:
                                return e.abrupt("return", n);
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "reloadAndSetCurrentUserOrClear",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), Ua(t);
                              case 3:
                                e.next = 9;
                                break;
                              case 5:
                                if (
                                  ((e.prev = 5),
                                  (e.t0 = e.catch(0)),
                                  e.t0.code ===
                                    "auth/".concat("network-request-failed"))
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.directlySetCurrentUser(null)
                                );
                              case 9:
                                return e.abrupt(
                                  "return",
                                  this.directlySetCurrentUser(t)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 5]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "useDeviceLanguage",
                value: function () {
                  this.languageCode = (function () {
                    if ("undefined" === typeof navigator) return null;
                    var e = navigator;
                    return (
                      (e.languages && e.languages[0]) || e.language || null
                    );
                  })();
                },
              },
              {
                key: "_delete",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._deleted = !0;
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "updateCurrentUser",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t ? zn(t) : null) &&
                                    na(
                                      n.auth.config.apiKey ===
                                        this.config.apiKey,
                                      this,
                                      "invalid-user-token"
                                    ),
                                  e.abrupt(
                                    "return",
                                    this._updateCurrentUser(n && n._clone(this))
                                  )
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_updateCurrentUser",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n,
                        r = this,
                        a = arguments;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n =
                                    a.length > 1 && void 0 !== a[1] && a[1]),
                                  !this._deleted)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                if (
                                  (t &&
                                    na(
                                      this.tenantId === t.tenantId,
                                      this,
                                      "tenant-id-mismatch"
                                    ),
                                  n)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  this.beforeStateQueue.runMiddleware(t)
                                );
                              case 7:
                                return e.abrupt(
                                  "return",
                                  this.queue(
                                    pn(
                                      kn().mark(function e() {
                                        return kn().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  r.directlySetCurrentUser(t)
                                                );
                                              case 2:
                                                r.notifyAuthListeners();
                                              case 3:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    )
                                  )
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signOut",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.beforeStateQueue.runMiddleware(null)
                                );
                              case 2:
                                if (
                                  !this.redirectPersistenceManager &&
                                  !this._popupRedirectResolver
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 5), this._setRedirectUser(null)
                                );
                              case 5:
                                return e.abrupt(
                                  "return",
                                  this._updateCurrentUser(null, !0)
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setPersistence",
                value: function (e) {
                  var t = this;
                  return this.queue(
                    pn(
                      kn().mark(function n() {
                        return kn().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2),
                                  t.assertedPersistence.setPersistence(oa(e))
                                );
                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    )
                  );
                },
              },
              {
                key: "_getPersistence",
                value: function () {
                  return this.assertedPersistence.persistence.type;
                },
              },
              {
                key: "_updateErrorMap",
                value: function (e) {
                  this._errorFactory = new Pn("auth", "Firebase", e());
                },
              },
              {
                key: "onAuthStateChanged",
                value: function (e, t, n) {
                  return this.registerStateListener(
                    this.authStateSubscription,
                    e,
                    t,
                    n
                  );
                },
              },
              {
                key: "beforeAuthStateChanged",
                value: function (e, t) {
                  return this.beforeStateQueue.pushCallback(e, t);
                },
              },
              {
                key: "onIdTokenChanged",
                value: function (e, t, n) {
                  return this.registerStateListener(
                    this.idTokenSubscription,
                    e,
                    t,
                    n
                  );
                },
              },
              {
                key: "toJSON",
                value: function () {
                  var e;
                  return {
                    apiKey: this.config.apiKey,
                    authDomain: this.config.authDomain,
                    appName: this.name,
                    currentUser:
                      null === (e = this._currentUser) || void 0 === e
                        ? void 0
                        : e.toJSON(),
                  };
                },
              },
              {
                key: "_setRedirectUser",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t, n) {
                      var r;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.getOrInitRedirectPersistenceManager(n)
                                );
                              case 2:
                                return (
                                  (r = e.sent),
                                  e.abrupt(
                                    "return",
                                    null === t
                                      ? r.removeCurrentUser()
                                      : r.setCurrentUser(t)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getOrInitRedirectPersistenceManager",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.redirectPersistenceManager) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  na(
                                    (n =
                                      (t && oa(t)) ||
                                      this._popupRedirectResolver),
                                    this,
                                    "argument-error"
                                  ),
                                  (e.next = 5),
                                  Za.create(
                                    this,
                                    [oa(n._redirectPersistence)],
                                    "redirectUser"
                                  )
                                );
                              case 5:
                                return (
                                  (this.redirectPersistenceManager = e.sent),
                                  (e.next = 8),
                                  this.redirectPersistenceManager.getCurrentUser()
                                );
                              case 8:
                                this.redirectUser = e.sent;
                              case 9:
                                return e.abrupt(
                                  "return",
                                  this.redirectPersistenceManager
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_redirectUserForId",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n, r;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this._isInitialized) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  this.queue(
                                    pn(
                                      kn().mark(function e() {
                                        return kn().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    )
                                  )
                                );
                              case 3:
                                if (
                                  (null === (n = this._currentUser) ||
                                  void 0 === n
                                    ? void 0
                                    : n._redirectEventId) !== t
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", this._currentUser);
                              case 5:
                                if (
                                  (null === (r = this.redirectUser) ||
                                  void 0 === r
                                    ? void 0
                                    : r._redirectEventId) !== t
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return", this.redirectUser);
                              case 7:
                                return e.abrupt("return", null);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_persistUserIfCurrent",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n = this;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (t !== this.currentUser) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.queue(
                                    pn(
                                      kn().mark(function e() {
                                        return kn().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return e.abrupt(
                                                  "return",
                                                  n.directlySetCurrentUser(t)
                                                );
                                              case 1:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    )
                                  )
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_notifyListenersIfCurrent",
                value: function (e) {
                  e === this.currentUser && this.notifyAuthListeners();
                },
              },
              {
                key: "_key",
                value: function () {
                  return ""
                    .concat(this.config.authDomain, ":")
                    .concat(this.config.apiKey, ":")
                    .concat(this.name);
                },
              },
              {
                key: "_startProactiveRefresh",
                value: function () {
                  (this.isProactiveRefreshEnabled = !0),
                    this.currentUser &&
                      this._currentUser._startProactiveRefresh();
                },
              },
              {
                key: "_stopProactiveRefresh",
                value: function () {
                  (this.isProactiveRefreshEnabled = !1),
                    this.currentUser &&
                      this._currentUser._stopProactiveRefresh();
                },
              },
              {
                key: "_currentUser",
                get: function () {
                  return this.currentUser;
                },
              },
              {
                key: "notifyAuthListeners",
                value: function () {
                  var e, t;
                  if (this._isInitialized) {
                    this.idTokenSubscription.next(this.currentUser);
                    var n =
                      null !==
                        (t =
                          null === (e = this.currentUser) || void 0 === e
                            ? void 0
                            : e.uid) && void 0 !== t
                        ? t
                        : null;
                    this.lastNotifiedUid !== n &&
                      ((this.lastNotifiedUid = n),
                      this.authStateSubscription.next(this.currentUser));
                  }
                },
              },
              {
                key: "registerStateListener",
                value: function (e, t, n, r) {
                  var a = this;
                  if (this._deleted) return function () {};
                  var i = "function" === typeof t ? t : t.next.bind(t),
                    o = this._isInitialized
                      ? Promise.resolve()
                      : this._initializationPromise;
                  return (
                    na(o, this, "internal-error"),
                    o.then(function () {
                      return i(a.currentUser);
                    }),
                    "function" === typeof t
                      ? e.addObserver(t, n, r)
                      : e.addObserver(t)
                  );
                },
              },
              {
                key: "directlySetCurrentUser",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (this.currentUser &&
                                    this.currentUser !== t &&
                                    (this._currentUser._stopProactiveRefresh(),
                                    t &&
                                      this.isProactiveRefreshEnabled &&
                                      t._startProactiveRefresh()),
                                  (this.currentUser = t),
                                  !t)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  this.assertedPersistence.setCurrentUser(t)
                                );
                              case 5:
                                e.next = 9;
                                break;
                              case 7:
                                return (
                                  (e.next = 9),
                                  this.assertedPersistence.removeCurrentUser()
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "queue",
                value: function (e) {
                  return (
                    (this.operations = this.operations.then(e, e)),
                    this.operations
                  );
                },
              },
              {
                key: "assertedPersistence",
                get: function () {
                  return (
                    na(this.persistenceManager, this, "internal-error"),
                    this.persistenceManager
                  );
                },
              },
              {
                key: "_logFramework",
                value: function (e) {
                  e &&
                    !this.frameworks.includes(e) &&
                    (this.frameworks.push(e),
                    this.frameworks.sort(),
                    (this.clientVersion = di(
                      this.config.clientPlatform,
                      this._getFrameworks()
                    )));
                },
              },
              {
                key: "_getFrameworks",
                value: function () {
                  return this.frameworks;
                },
              },
              {
                key: "_getAdditionalHeaders",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      var t, n, r;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = yn(
                                    {},
                                    "X-Client-Version",
                                    this.clientVersion
                                  )),
                                  this.app.options.appId &&
                                    (n["X-Firebase-gmpid"] =
                                      this.app.options.appId),
                                  (e.next = 4),
                                  null ===
                                    (t =
                                      this.heartbeatServiceProvider.getImmediate(
                                        { optional: !0 }
                                      )) || void 0 === t
                                    ? void 0
                                    : t.getHeartbeatsHeader()
                                );
                              case 4:
                                return (
                                  (r = e.sent) && (n["X-Firebase-Client"] = r),
                                  e.abrupt("return", n)
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })();
      function vi(e) {
        return zn(e);
      }
      var mi = (function () {
        function e(t) {
          var n = this;
          hn(this, e),
            (this.auth = t),
            (this.observer = null),
            (this.addObserver = (function (e, t) {
              var n = new jn(e, t);
              return n.subscribe.bind(n);
            })(function (e) {
              return (n.observer = e);
            }));
        }
        return (
          mn(e, [
            {
              key: "next",
              get: function () {
                return (
                  na(this.observer, this.auth, "internal-error"),
                  this.observer.next.bind(this.observer)
                );
              },
            },
          ]),
          e
        );
      })();
      var gi = (function () {
        function e(t, n) {
          hn(this, e), (this.providerId = t), (this.signInMethod = n);
        }
        return (
          mn(e, [
            {
              key: "toJSON",
              value: function () {
                return ra("not implemented");
              },
            },
            {
              key: "_getIdTokenResponse",
              value: function (e) {
                return ra("not implemented");
              },
            },
            {
              key: "_linkToIdToken",
              value: function (e, t) {
                return ra("not implemented");
              },
            },
            {
              key: "_getReauthenticationResolver",
              value: function (e) {
                return ra("not implemented");
              },
            },
          ]),
          e
        );
      })();
      function yi(e, t) {
        return bi.apply(this, arguments);
      }
      function bi() {
        return (bi = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      ya(t, "POST", "/v1/accounts:update", n)
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ki(e, t) {
        return wi.apply(this, arguments);
      }
      function wi() {
        return (wi = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Sa(t, "POST", "/v1/accounts:signInWithPassword", ga(t, n))
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Si(e, t) {
        return xi.apply(this, arguments);
      }
      function xi() {
        return (xi = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Sa(
                        t,
                        "POST",
                        "/v1/accounts:signInWithEmailLink",
                        ga(t, n)
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function _i(e, t) {
        return Ei.apply(this, arguments);
      }
      function Ei() {
        return (Ei = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Sa(
                        t,
                        "POST",
                        "/v1/accounts:signInWithEmailLink",
                        ga(t, n)
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Ci = (function (e) {
        on(n, e);
        var t = cn(n);
        function n(e, r, a) {
          var i,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
          return (
            hn(this, n),
            ((i = t.call(this, "password", a))._email = e),
            (i._password = r),
            (i._tenantId = o),
            i
          );
        }
        return (
          mn(
            n,
            [
              {
                key: "toJSON",
                value: function () {
                  return {
                    email: this._email,
                    password: this._password,
                    signInMethod: this.signInMethod,
                    tenantId: this._tenantId,
                  };
                },
              },
              {
                key: "_getIdTokenResponse",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (e.t0 = this.signInMethod),
                                  (e.next =
                                    "password" === e.t0
                                      ? 3
                                      : "emailLink" === e.t0
                                      ? 4
                                      : 5);
                                break;
                              case 3:
                                return e.abrupt(
                                  "return",
                                  ki(t, {
                                    returnSecureToken: !0,
                                    email: this._email,
                                    password: this._password,
                                  })
                                );
                              case 4:
                                return e.abrupt(
                                  "return",
                                  Si(t, {
                                    email: this._email,
                                    oobCode: this._password,
                                  })
                                );
                              case 5:
                                Xr(t, "internal-error");
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_linkToIdToken",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t, n) {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (e.t0 = this.signInMethod),
                                  (e.next =
                                    "password" === e.t0
                                      ? 3
                                      : "emailLink" === e.t0
                                      ? 4
                                      : 5);
                                break;
                              case 3:
                                return e.abrupt(
                                  "return",
                                  yi(t, {
                                    idToken: n,
                                    returnSecureToken: !0,
                                    email: this._email,
                                    password: this._password,
                                  })
                                );
                              case 4:
                                return e.abrupt(
                                  "return",
                                  _i(t, {
                                    idToken: n,
                                    email: this._email,
                                    oobCode: this._password,
                                  })
                                );
                              case 5:
                                Xr(t, "internal-error");
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getReauthenticationResolver",
                value: function (e) {
                  return this._getIdTokenResponse(e);
                },
              },
            ],
            [
              {
                key: "_fromEmailAndPassword",
                value: function (e, t) {
                  return new n(e, t, "password");
                },
              },
              {
                key: "_fromEmailAndCode",
                value: function (e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                  return new n(e, t, "emailLink", r);
                },
              },
              {
                key: "fromJSON",
                value: function (e) {
                  var t = "string" === typeof e ? JSON.parse(e) : e;
                  if (
                    (null === t || void 0 === t ? void 0 : t.email) &&
                    (null === t || void 0 === t ? void 0 : t.password)
                  ) {
                    if ("password" === t.signInMethod)
                      return this._fromEmailAndPassword(t.email, t.password);
                    if ("emailLink" === t.signInMethod)
                      return this._fromEmailAndCode(
                        t.email,
                        t.password,
                        t.tenantId
                      );
                  }
                  return null;
                },
              },
            ]
          ),
          n
        );
      })(gi);
      function Ii(e, t) {
        return Ti.apply(this, arguments);
      }
      function Ti() {
        return (Ti = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Sa(t, "POST", "/v1/accounts:signInWithIdp", ga(t, n))
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Pi = (function (e) {
        on(n, e);
        var t = cn(n);
        function n() {
          var e;
          return (
            hn(this, n), ((e = t.apply(this, arguments)).pendingToken = null), e
          );
        }
        return (
          mn(
            n,
            [
              {
                key: "toJSON",
                value: function () {
                  return {
                    idToken: this.idToken,
                    accessToken: this.accessToken,
                    secret: this.secret,
                    nonce: this.nonce,
                    pendingToken: this.pendingToken,
                    providerId: this.providerId,
                    signInMethod: this.signInMethod,
                  };
                },
              },
              {
                key: "_getIdTokenResponse",
                value: function (e) {
                  return Ii(e, this.buildRequest());
                },
              },
              {
                key: "_linkToIdToken",
                value: function (e, t) {
                  var n = this.buildRequest();
                  return (n.idToken = t), Ii(e, n);
                },
              },
              {
                key: "_getReauthenticationResolver",
                value: function (e) {
                  var t = this.buildRequest();
                  return (t.autoCreate = !1), Ii(e, t);
                },
              },
              {
                key: "buildRequest",
                value: function () {
                  var e = {
                    requestUri: "http://localhost",
                    returnSecureToken: !0,
                  };
                  if (this.pendingToken) e.pendingToken = this.pendingToken;
                  else {
                    var t = {};
                    this.idToken && (t.id_token = this.idToken),
                      this.accessToken && (t.access_token = this.accessToken),
                      this.secret && (t.oauth_token_secret = this.secret),
                      (t.providerId = this.providerId),
                      this.nonce &&
                        !this.pendingToken &&
                        (t.nonce = this.nonce),
                      (e.postBody = Ln(t));
                  }
                  return e;
                },
              },
            ],
            [
              {
                key: "_fromParams",
                value: function (e) {
                  var t = new n(e.providerId, e.signInMethod);
                  return (
                    e.idToken || e.accessToken
                      ? (e.idToken && (t.idToken = e.idToken),
                        e.accessToken && (t.accessToken = e.accessToken),
                        e.nonce && !e.pendingToken && (t.nonce = e.nonce),
                        e.pendingToken && (t.pendingToken = e.pendingToken))
                      : e.oauthToken && e.oauthTokenSecret
                      ? ((t.accessToken = e.oauthToken),
                        (t.secret = e.oauthTokenSecret))
                      : Xr("argument-error"),
                    t
                  );
                },
              },
              {
                key: "fromJSON",
                value: function (e) {
                  var t = "string" === typeof e ? JSON.parse(e) : e,
                    r = t.providerId,
                    a = t.signInMethod,
                    i = $r(t, ["providerId", "signInMethod"]);
                  if (!r || !a) return null;
                  var o = new n(r, a);
                  return (
                    (o.idToken = i.idToken || void 0),
                    (o.accessToken = i.accessToken || void 0),
                    (o.secret = i.secret),
                    (o.nonce = i.nonce),
                    (o.pendingToken = i.pendingToken || null),
                    o
                  );
                },
              },
            ]
          ),
          n
        );
      })(gi);
      function Oi(e, t) {
        return Ni.apply(this, arguments);
      }
      function Ni() {
        return (Ni = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      ya(
                        t,
                        "POST",
                        "/v1/accounts:sendVerificationCode",
                        ga(t, n)
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ri() {
        return (Ri = pn(
          kn().mark(function e(t, n) {
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Sa(
                        t,
                        "POST",
                        "/v1/accounts:signInWithPhoneNumber",
                        ga(t, n)
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ai() {
        return (Ai = pn(
          kn().mark(function e(t, n) {
            var r;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      Sa(
                        t,
                        "POST",
                        "/v1/accounts:signInWithPhoneNumber",
                        ga(t, n)
                      )
                    );
                  case 2:
                    if (!(r = e.sent).temporaryProof) {
                      e.next = 5;
                      break;
                    }
                    throw Ca(t, "account-exists-with-different-credential", r);
                  case 5:
                    return e.abrupt("return", r);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Li = yn({}, "USER_NOT_FOUND", "user-not-found");
      function Di() {
        return (Di = pn(
          kn().mark(function e(t, n) {
            var r;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = Object.assign(Object.assign({}, n), {
                        operation: "REAUTH",
                      })),
                      e.abrupt(
                        "return",
                        Sa(
                          t,
                          "POST",
                          "/v1/accounts:signInWithPhoneNumber",
                          ga(t, r),
                          Li
                        )
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Mi = (function (e) {
        on(n, e);
        var t = cn(n);
        function n(e) {
          var r;
          return (
            hn(this, n), ((r = t.call(this, "phone", "phone")).params = e), r
          );
        }
        return (
          mn(
            n,
            [
              {
                key: "_getIdTokenResponse",
                value: function (e) {
                  return (function (e, t) {
                    return Ri.apply(this, arguments);
                  })(e, this._makeVerificationRequest());
                },
              },
              {
                key: "_linkToIdToken",
                value: function (e, t) {
                  return (function (e, t) {
                    return Ai.apply(this, arguments);
                  })(
                    e,
                    Object.assign(
                      { idToken: t },
                      this._makeVerificationRequest()
                    )
                  );
                },
              },
              {
                key: "_getReauthenticationResolver",
                value: function (e) {
                  return (function (e, t) {
                    return Di.apply(this, arguments);
                  })(e, this._makeVerificationRequest());
                },
              },
              {
                key: "_makeVerificationRequest",
                value: function () {
                  var e = this.params,
                    t = e.temporaryProof,
                    n = e.phoneNumber,
                    r = e.verificationId,
                    a = e.verificationCode;
                  return t && n
                    ? { temporaryProof: t, phoneNumber: n }
                    : { sessionInfo: r, code: a };
                },
              },
              {
                key: "toJSON",
                value: function () {
                  var e = { providerId: this.providerId };
                  return (
                    this.params.phoneNumber &&
                      (e.phoneNumber = this.params.phoneNumber),
                    this.params.temporaryProof &&
                      (e.temporaryProof = this.params.temporaryProof),
                    this.params.verificationCode &&
                      (e.verificationCode = this.params.verificationCode),
                    this.params.verificationId &&
                      (e.verificationId = this.params.verificationId),
                    e
                  );
                },
              },
            ],
            [
              {
                key: "_fromVerification",
                value: function (e, t) {
                  return new n({ verificationId: e, verificationCode: t });
                },
              },
              {
                key: "_fromTokenResponse",
                value: function (e, t) {
                  return new n({ phoneNumber: e, temporaryProof: t });
                },
              },
              {
                key: "fromJSON",
                value: function (e) {
                  "string" === typeof e && (e = JSON.parse(e));
                  var t = e,
                    r = t.verificationId,
                    a = t.verificationCode,
                    i = t.phoneNumber,
                    o = t.temporaryProof;
                  return a || r || i || o
                    ? new n({
                        verificationId: r,
                        verificationCode: a,
                        phoneNumber: i,
                        temporaryProof: o,
                      })
                    : null;
                },
              },
            ]
          ),
          n
        );
      })(gi);
      var ji = (function () {
        function e(t) {
          var n, r, a, i, o, u;
          hn(this, e);
          var s = Dn(Mn(t)),
            l = null !== (n = s.apiKey) && void 0 !== n ? n : null,
            c = null !== (r = s.oobCode) && void 0 !== r ? r : null,
            f = (function (e) {
              switch (e) {
                case "recoverEmail":
                  return "RECOVER_EMAIL";
                case "resetPassword":
                  return "PASSWORD_RESET";
                case "signIn":
                  return "EMAIL_SIGNIN";
                case "verifyEmail":
                  return "VERIFY_EMAIL";
                case "verifyAndChangeEmail":
                  return "VERIFY_AND_CHANGE_EMAIL";
                case "revertSecondFactorAddition":
                  return "REVERT_SECOND_FACTOR_ADDITION";
                default:
                  return null;
              }
            })(null !== (a = s.mode) && void 0 !== a ? a : null);
          na(l && c && f, "argument-error"),
            (this.apiKey = l),
            (this.operation = f),
            (this.code = c),
            (this.continueUrl =
              null !== (i = s.continueUrl) && void 0 !== i ? i : null),
            (this.languageCode =
              null !== (o = s.languageCode) && void 0 !== o ? o : null),
            (this.tenantId =
              null !== (u = s.tenantId) && void 0 !== u ? u : null);
        }
        return (
          mn(e, null, [
            {
              key: "parseLink",
              value: function (t) {
                var n = (function (e) {
                  var t = Dn(Mn(e)).link,
                    n = t ? Dn(Mn(t)).deep_link_id : null,
                    r = Dn(Mn(e)).deep_link_id;
                  return (r ? Dn(Mn(r)).link : null) || r || n || t || e;
                })(t);
                try {
                  return new e(n);
                } catch (r) {
                  return null;
                }
              },
            },
          ]),
          e
        );
      })();
      var Fi = (function () {
        function e() {
          hn(this, e), (this.providerId = e.PROVIDER_ID);
        }
        return (
          mn(e, null, [
            {
              key: "credential",
              value: function (e, t) {
                return Ci._fromEmailAndPassword(e, t);
              },
            },
            {
              key: "credentialWithLink",
              value: function (e, t) {
                var n = ji.parseLink(t);
                return (
                  na(n, "argument-error"),
                  Ci._fromEmailAndCode(e, n.code, n.tenantId)
                );
              },
            },
          ]),
          e
        );
      })();
      (Fi.PROVIDER_ID = "password"),
        (Fi.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
        (Fi.EMAIL_LINK_SIGN_IN_METHOD = "emailLink");
      var zi = (function () {
          function e(t) {
            hn(this, e),
              (this.providerId = t),
              (this.defaultLanguageCode = null),
              (this.customParameters = {});
          }
          return (
            mn(e, [
              {
                key: "setDefaultLanguage",
                value: function (e) {
                  this.defaultLanguageCode = e;
                },
              },
              {
                key: "setCustomParameters",
                value: function (e) {
                  return (this.customParameters = e), this;
                },
              },
              {
                key: "getCustomParameters",
                value: function () {
                  return this.customParameters;
                },
              },
            ]),
            e
          );
        })(),
        Ui = (function (e) {
          on(n, e);
          var t = cn(n);
          function n() {
            var e;
            return hn(this, n), ((e = t.apply(this, arguments)).scopes = []), e;
          }
          return (
            mn(n, [
              {
                key: "addScope",
                value: function (e) {
                  return this.scopes.includes(e) || this.scopes.push(e), this;
                },
              },
              {
                key: "getScopes",
                value: function () {
                  return gn(this.scopes);
                },
              },
            ]),
            n
          );
        })(zi),
        Vi = (function (e) {
          on(n, e);
          var t = cn(n);
          function n() {
            return hn(this, n), t.call(this, "facebook.com");
          }
          return (
            mn(n, null, [
              {
                key: "credential",
                value: function (e) {
                  return Pi._fromParams({
                    providerId: n.PROVIDER_ID,
                    signInMethod: n.FACEBOOK_SIGN_IN_METHOD,
                    accessToken: e,
                  });
                },
              },
              {
                key: "credentialFromResult",
                value: function (e) {
                  return n.credentialFromTaggedObject(e);
                },
              },
              {
                key: "credentialFromError",
                value: function (e) {
                  return n.credentialFromTaggedObject(e.customData || {});
                },
              },
              {
                key: "credentialFromTaggedObject",
                value: function (e) {
                  var t = e._tokenResponse;
                  if (!t || !("oauthAccessToken" in t)) return null;
                  if (!t.oauthAccessToken) return null;
                  try {
                    return n.credential(t.oauthAccessToken);
                  } catch (r) {
                    return null;
                  }
                },
              },
            ]),
            n
          );
        })(Ui);
      (Vi.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
        (Vi.PROVIDER_ID = "facebook.com");
      var Hi = (function (e) {
        on(n, e);
        var t = cn(n);
        function n() {
          var e;
          return (
            hn(this, n), (e = t.call(this, "google.com")).addScope("profile"), e
          );
        }
        return (
          mn(n, null, [
            {
              key: "credential",
              value: function (e, t) {
                return Pi._fromParams({
                  providerId: n.PROVIDER_ID,
                  signInMethod: n.GOOGLE_SIGN_IN_METHOD,
                  idToken: e,
                  accessToken: t,
                });
              },
            },
            {
              key: "credentialFromResult",
              value: function (e) {
                return n.credentialFromTaggedObject(e);
              },
            },
            {
              key: "credentialFromError",
              value: function (e) {
                return n.credentialFromTaggedObject(e.customData || {});
              },
            },
            {
              key: "credentialFromTaggedObject",
              value: function (e) {
                var t = e._tokenResponse;
                if (!t) return null;
                var r = t.oauthIdToken,
                  a = t.oauthAccessToken;
                if (!r && !a) return null;
                try {
                  return n.credential(r, a);
                } catch (i) {
                  return null;
                }
              },
            },
          ]),
          n
        );
      })(Ui);
      (Hi.GOOGLE_SIGN_IN_METHOD = "google.com"),
        (Hi.PROVIDER_ID = "google.com");
      var Bi = (function (e) {
        on(n, e);
        var t = cn(n);
        function n() {
          return hn(this, n), t.call(this, "github.com");
        }
        return (
          mn(n, null, [
            {
              key: "credential",
              value: function (e) {
                return Pi._fromParams({
                  providerId: n.PROVIDER_ID,
                  signInMethod: n.GITHUB_SIGN_IN_METHOD,
                  accessToken: e,
                });
              },
            },
            {
              key: "credentialFromResult",
              value: function (e) {
                return n.credentialFromTaggedObject(e);
              },
            },
            {
              key: "credentialFromError",
              value: function (e) {
                return n.credentialFromTaggedObject(e.customData || {});
              },
            },
            {
              key: "credentialFromTaggedObject",
              value: function (e) {
                var t = e._tokenResponse;
                if (!t || !("oauthAccessToken" in t)) return null;
                if (!t.oauthAccessToken) return null;
                try {
                  return n.credential(t.oauthAccessToken);
                } catch (r) {
                  return null;
                }
              },
            },
          ]),
          n
        );
      })(Ui);
      (Bi.GITHUB_SIGN_IN_METHOD = "github.com"),
        (Bi.PROVIDER_ID = "github.com");
      var Wi = (function (e) {
        on(n, e);
        var t = cn(n);
        function n() {
          return hn(this, n), t.call(this, "twitter.com");
        }
        return (
          mn(n, null, [
            {
              key: "credential",
              value: function (e, t) {
                return Pi._fromParams({
                  providerId: n.PROVIDER_ID,
                  signInMethod: n.TWITTER_SIGN_IN_METHOD,
                  oauthToken: e,
                  oauthTokenSecret: t,
                });
              },
            },
            {
              key: "credentialFromResult",
              value: function (e) {
                return n.credentialFromTaggedObject(e);
              },
            },
            {
              key: "credentialFromError",
              value: function (e) {
                return n.credentialFromTaggedObject(e.customData || {});
              },
            },
            {
              key: "credentialFromTaggedObject",
              value: function (e) {
                var t = e._tokenResponse;
                if (!t) return null;
                var r = t.oauthAccessToken,
                  a = t.oauthTokenSecret;
                if (!r || !a) return null;
                try {
                  return n.credential(r, a);
                } catch (i) {
                  return null;
                }
              },
            },
          ]),
          n
        );
      })(Ui);
      (Wi.TWITTER_SIGN_IN_METHOD = "twitter.com"),
        (Wi.PROVIDER_ID = "twitter.com");
      var $i = (function () {
        function e(t) {
          hn(this, e),
            (this.user = t.user),
            (this.providerId = t.providerId),
            (this._tokenResponse = t._tokenResponse),
            (this.operationType = t.operationType);
        }
        return (
          mn(e, null, [
            {
              key: "_fromIdTokenResponse",
              value: (function () {
                var t = pn(
                  kn().mark(function t(n, r, a) {
                    var i,
                      o,
                      u,
                      s,
                      l = arguments;
                    return kn().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (i = l.length > 3 && void 0 !== l[3] && l[3]),
                              (t.next = 3),
                              Qa._fromIdTokenResponse(n, a, i)
                            );
                          case 3:
                            return (
                              (o = t.sent),
                              (u = Ki(a)),
                              (s = new e({
                                user: o,
                                providerId: u,
                                _tokenResponse: a,
                                operationType: r,
                              })),
                              t.abrupt("return", s)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n, r) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_forOperation",
              value: (function () {
                var t = pn(
                  kn().mark(function t(n, r, a) {
                    var i;
                    return kn().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n._updateTokensIfNecessary(a, !0)
                            );
                          case 2:
                            return (
                              (i = Ki(a)),
                              t.abrupt(
                                "return",
                                new e({
                                  user: n,
                                  providerId: i,
                                  _tokenResponse: a,
                                  operationType: r,
                                })
                              )
                            );
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n, r) {
                  return t.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
      function Ki(e) {
        return e.providerId
          ? e.providerId
          : "phoneNumber" in e
          ? "phone"
          : null;
      }
      var qi = (function (e) {
        on(n, e);
        var t = cn(n);
        function n(e, r, a, i) {
          var o, u;
          return (
            hn(this, n),
            ((o = t.call(this, r.code, r.message)).operationType = a),
            (o.user = i),
            Object.setPrototypeOf(rn(o), n.prototype),
            (o.customData = {
              appName: e.name,
              tenantId: null !== (u = e.tenantId) && void 0 !== u ? u : void 0,
              _serverResponse: r.customData._serverResponse,
              operationType: a,
            }),
            o
          );
        }
        return (
          mn(n, null, [
            {
              key: "_fromErrorAndOperation",
              value: function (e, t, r, a) {
                return new n(e, t, r, a);
              },
            },
          ]),
          n
        );
      })(Tn);
      function Gi(e, t, n, r) {
        return (
          "reauthenticate" === t
            ? n._getReauthenticationResolver(e)
            : n._getIdTokenResponse(e)
        ).catch(function (n) {
          if (n.code === "auth/".concat("multi-factor-auth-required"))
            throw qi._fromErrorAndOperation(e, n, t, r);
          throw n;
        });
      }
      function Qi(e, t) {
        return Yi.apply(this, arguments);
      }
      function Yi() {
        return (
          (Yi = pn(
            kn().mark(function e(t, n) {
              var r,
                a,
                i = arguments;
              return kn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = i.length > 2 && void 0 !== i[2] && i[2]),
                        (e.t0 = Da),
                        (e.t1 = t),
                        (e.t2 = n),
                        (e.t3 = t.auth),
                        (e.next = 7),
                        t.getIdToken()
                      );
                    case 7:
                      return (
                        (e.t4 = e.sent),
                        (e.t5 = e.t2._linkToIdToken.call(e.t2, e.t3, e.t4)),
                        (e.t6 = r),
                        (e.next = 12),
                        (0, e.t0)(e.t1, e.t5, e.t6)
                      );
                    case 12:
                      return (
                        (a = e.sent),
                        e.abrupt("return", $i._forOperation(t, "link", a))
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Yi.apply(this, arguments)
        );
      }
      function Ji(e, t) {
        return Xi.apply(this, arguments);
      }
      function Xi() {
        return (
          (Xi = pn(
            kn().mark(function e(t, n) {
              var r,
                a,
                i,
                o,
                u,
                s,
                l = arguments;
              return kn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = l.length > 2 && void 0 !== l[2] && l[2]),
                          (a = t.auth),
                          (i = "reauthenticate"),
                          (e.prev = 3),
                          (e.next = 6),
                          Da(t, Gi(a, i, n, t), r)
                        );
                      case 6:
                        return (
                          na((o = e.sent).idToken, a, "internal-error"),
                          na((u = La(o.idToken)), a, "internal-error"),
                          (s = u.sub),
                          na(t.uid === s, a, "user-mismatch"),
                          e.abrupt("return", $i._forOperation(t, i, o))
                        );
                      case 15:
                        throw (
                          ((e.prev = 15),
                          (e.t0 = e.catch(3)),
                          (null === e.t0 || void 0 === e.t0
                            ? void 0
                            : e.t0.code) === "auth/".concat("user-not-found") &&
                            Xr(a, "user-mismatch"),
                          e.t0)
                        );
                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 15]]
              );
            })
          )),
          Xi.apply(this, arguments)
        );
      }
      function Zi(e, t) {
        return eo.apply(this, arguments);
      }
      function eo() {
        return (
          (eo = pn(
            kn().mark(function e(t, n) {
              var r,
                a,
                i,
                o,
                u = arguments;
              return kn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = u.length > 2 && void 0 !== u[2] && u[2]),
                        (a = "signIn"),
                        (e.next = 4),
                        Gi(t, a, n)
                      );
                    case 4:
                      return (
                        (i = e.sent),
                        (e.next = 7),
                        $i._fromIdTokenResponse(t, a, i)
                      );
                    case 7:
                      if (((o = e.sent), r)) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 11), t._updateCurrentUser(o.user);
                    case 11:
                      return e.abrupt("return", o);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          eo.apply(this, arguments)
        );
      }
      function to(e, t) {
        return ya(e, "POST", "/v2/accounts/mfaEnrollment:start", ga(e, t));
      }
      new WeakMap();
      var no = "__sak",
        ro = (function () {
          function e(t, n) {
            hn(this, e), (this.storageRetriever = t), (this.type = n);
          }
          return (
            mn(e, [
              {
                key: "_isAvailable",
                value: function () {
                  try {
                    return this.storage
                      ? (this.storage.setItem(no, "1"),
                        this.storage.removeItem(no),
                        Promise.resolve(!0))
                      : Promise.resolve(!1);
                  } catch (e) {
                    return Promise.resolve(!1);
                  }
                },
              },
              {
                key: "_set",
                value: function (e, t) {
                  return (
                    this.storage.setItem(e, JSON.stringify(t)),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "_get",
                value: function (e) {
                  var t = this.storage.getItem(e);
                  return Promise.resolve(t ? JSON.parse(t) : null);
                },
              },
              {
                key: "_remove",
                value: function (e) {
                  return this.storage.removeItem(e), Promise.resolve();
                },
              },
              {
                key: "storage",
                get: function () {
                  return this.storageRetriever();
                },
              },
            ]),
            e
          );
        })();
      var ao = (function (e) {
        on(n, e);
        var t = cn(n);
        function n() {
          var e;
          return (
            hn(this, n),
            ((e = t.call(
              this,
              function () {
                return window.localStorage;
              },
              "LOCAL"
            )).boundEventHandler = function (t, n) {
              return e.onStorageEvent(t, n);
            }),
            (e.listeners = {}),
            (e.localCache = {}),
            (e.pollTimer = null),
            (e.safariLocalStorageNotSynced =
              (function () {
                var e = In();
                return ni(e) || si(e);
              })() &&
              (function () {
                try {
                  return !(!window || window === window.top);
                } catch (e) {
                  return !1;
                }
              })()),
            (e.fallbackToPolling = fi()),
            (e._shouldAllowMigration = !0),
            e
          );
        }
        return (
          mn(n, [
            {
              key: "forAllChangedKeys",
              value: function (e) {
                for (
                  var t = 0, n = Object.keys(this.listeners);
                  t < n.length;
                  t++
                ) {
                  var r = n[t],
                    a = this.storage.getItem(r),
                    i = this.localCache[r];
                  a !== i && e(r, i, a);
                }
              },
            },
            {
              key: "onStorageEvent",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                if (e.key) {
                  var r = e.key;
                  if (
                    (n ? this.detachListener() : this.stopPolling(),
                    this.safariLocalStorageNotSynced)
                  ) {
                    var a = this.storage.getItem(r);
                    if (e.newValue !== a)
                      null !== e.newValue
                        ? this.storage.setItem(r, e.newValue)
                        : this.storage.removeItem(r);
                    else if (this.localCache[r] === e.newValue && !n) return;
                  }
                  var i = function () {
                      var e = t.storage.getItem(r);
                      (n || t.localCache[r] !== e) && t.notifyListeners(r, e);
                    },
                    o = this.storage.getItem(r);
                  ci() && o !== e.newValue && e.newValue !== e.oldValue
                    ? setTimeout(i, 10)
                    : i();
                } else
                  this.forAllChangedKeys(function (e, n, r) {
                    t.notifyListeners(e, r);
                  });
              },
            },
            {
              key: "notifyListeners",
              value: function (e, t) {
                this.localCache[e] = t;
                var n = this.listeners[e];
                if (n)
                  for (var r = 0, a = Array.from(n); r < a.length; r++) {
                    (0, a[r])(t ? JSON.parse(t) : t);
                  }
              },
            },
            {
              key: "startPolling",
              value: function () {
                var e = this;
                this.stopPolling(),
                  (this.pollTimer = setInterval(function () {
                    e.forAllChangedKeys(function (t, n, r) {
                      e.onStorageEvent(
                        new StorageEvent("storage", {
                          key: t,
                          oldValue: n,
                          newValue: r,
                        }),
                        !0
                      );
                    });
                  }, 1e3));
              },
            },
            {
              key: "stopPolling",
              value: function () {
                this.pollTimer &&
                  (clearInterval(this.pollTimer), (this.pollTimer = null));
              },
            },
            {
              key: "attachListener",
              value: function () {
                window.addEventListener("storage", this.boundEventHandler);
              },
            },
            {
              key: "detachListener",
              value: function () {
                window.removeEventListener("storage", this.boundEventHandler);
              },
            },
            {
              key: "_addListener",
              value: function (e, t) {
                0 === Object.keys(this.listeners).length &&
                  (this.fallbackToPolling
                    ? this.startPolling()
                    : this.attachListener()),
                  this.listeners[e] ||
                    ((this.listeners[e] = new Set()),
                    (this.localCache[e] = this.storage.getItem(e))),
                  this.listeners[e].add(t);
              },
            },
            {
              key: "_removeListener",
              value: function (e, t) {
                this.listeners[e] &&
                  (this.listeners[e].delete(t),
                  0 === this.listeners[e].size && delete this.listeners[e]),
                  0 === Object.keys(this.listeners).length &&
                    (this.detachListener(), this.stopPolling());
              },
            },
            {
              key: "_set",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t, r) {
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                nn(en(n.prototype), "_set", this).call(
                                  this,
                                  t,
                                  r
                                )
                              );
                            case 2:
                              this.localCache[t] = JSON.stringify(r);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_get",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t) {
                    var r;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                nn(en(n.prototype), "_get", this).call(this, t)
                              );
                            case 2:
                              return (
                                (r = e.sent),
                                (this.localCache[t] = JSON.stringify(r)),
                                e.abrupt("return", r)
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_remove",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t) {
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                nn(en(n.prototype), "_remove", this).call(
                                  this,
                                  t
                                )
                              );
                            case 2:
                              delete this.localCache[t];
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          n
        );
      })(ro);
      ao.type = "LOCAL";
      var io = ao,
        oo = (function (e) {
          on(n, e);
          var t = cn(n);
          function n() {
            return (
              hn(this, n),
              t.call(
                this,
                function () {
                  return window.sessionStorage;
                },
                "SESSION"
              )
            );
          }
          return (
            mn(n, [
              { key: "_addListener", value: function (e, t) {} },
              { key: "_removeListener", value: function (e, t) {} },
            ]),
            n
          );
        })(ro);
      oo.type = "SESSION";
      var uo = oo;
      function so(e) {
        return Promise.all(
          e.map(
            (function () {
              var e = pn(
                kn().mark(function e(t) {
                  var n;
                  return kn().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), t;
                          case 3:
                            return (
                              (n = e.sent),
                              e.abrupt("return", { fulfilled: !0, value: n })
                            );
                          case 7:
                            return (
                              (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", {
                                fulfilled: !1,
                                reason: e.t0,
                              })
                            );
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          )
        );
      }
      var lo = (function () {
        function e(t) {
          hn(this, e),
            (this.eventTarget = t),
            (this.handlersMap = {}),
            (this.boundEventHandler = this.handleEvent.bind(this));
        }
        return (
          mn(
            e,
            [
              {
                key: "isListeningto",
                value: function (e) {
                  return this.eventTarget === e;
                },
              },
              {
                key: "handleEvent",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n, r, a, i, o, u, s, l;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = (n = t).data),
                                  (a = r.eventId),
                                  (i = r.eventType),
                                  (o = r.data),
                                  null === (u = this.handlersMap[i]) ||
                                  void 0 === u
                                    ? void 0
                                    : u.size)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                return (
                                  n.ports[0].postMessage({
                                    status: "ack",
                                    eventId: a,
                                    eventType: i,
                                  }),
                                  (s = Array.from(u).map(
                                    (function () {
                                      var e = pn(
                                        kn().mark(function e(t) {
                                          return kn().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    t(n.origin, o)
                                                  );
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )),
                                  (e.next = 9),
                                  so(s)
                                );
                              case 9:
                                (l = e.sent),
                                  n.ports[0].postMessage({
                                    status: "done",
                                    eventId: a,
                                    eventType: i,
                                    response: l,
                                  });
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_subscribe",
                value: function (e, t) {
                  0 === Object.keys(this.handlersMap).length &&
                    this.eventTarget.addEventListener(
                      "message",
                      this.boundEventHandler
                    ),
                    this.handlersMap[e] || (this.handlersMap[e] = new Set()),
                    this.handlersMap[e].add(t);
                },
              },
              {
                key: "_unsubscribe",
                value: function (e, t) {
                  this.handlersMap[e] && t && this.handlersMap[e].delete(t),
                    (t && 0 !== this.handlersMap[e].size) ||
                      delete this.handlersMap[e],
                    0 === Object.keys(this.handlersMap).length &&
                      this.eventTarget.removeEventListener(
                        "message",
                        this.boundEventHandler
                      );
                },
              },
            ],
            [
              {
                key: "_getInstance",
                value: function (t) {
                  var n = this.receivers.find(function (e) {
                    return e.isListeningto(t);
                  });
                  if (n) return n;
                  var r = new e(t);
                  return this.receivers.push(r), r;
                },
              },
            ]
          ),
          e
        );
      })();
      function co() {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10,
            n = "",
            r = 0;
          r < t;
          r++
        )
          n += Math.floor(10 * Math.random());
        return e + n;
      }
      lo.receivers = [];
      var fo = (function () {
        function e(t) {
          hn(this, e), (this.target = t), (this.handlers = new Set());
        }
        return (
          mn(e, [
            {
              key: "removeMessageHandler",
              value: function (e) {
                e.messageChannel &&
                  (e.messageChannel.port1.removeEventListener(
                    "message",
                    e.onMessage
                  ),
                  e.messageChannel.port1.close()),
                  this.handlers.delete(e);
              },
            },
            {
              key: "_send",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t, n) {
                    var r,
                      a,
                      i,
                      o,
                      u = this,
                      s = arguments;
                    return kn().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r =
                                s.length > 2 && void 0 !== s[2] ? s[2] : 50),
                              (a =
                                "undefined" !== typeof MessageChannel
                                  ? new MessageChannel()
                                  : null))
                            ) {
                              e.next = 4;
                              break;
                            }
                            throw new Error("connection_unavailable");
                          case 4:
                            return e.abrupt(
                              "return",
                              new Promise(function (e, s) {
                                var l = co("", 20);
                                a.port1.start();
                                var c = setTimeout(function () {
                                  s(new Error("unsupported_event"));
                                }, r);
                                (o = {
                                  messageChannel: a,
                                  onMessage: function (t) {
                                    var n = t;
                                    if (n.data.eventId === l)
                                      switch (n.data.status) {
                                        case "ack":
                                          clearTimeout(c),
                                            (i = setTimeout(function () {
                                              s(new Error("timeout"));
                                            }, 3e3));
                                          break;
                                        case "done":
                                          clearTimeout(i), e(n.data.response);
                                          break;
                                        default:
                                          clearTimeout(c),
                                            clearTimeout(i),
                                            s(new Error("invalid_response"));
                                      }
                                  },
                                }),
                                  u.handlers.add(o),
                                  a.port1.addEventListener(
                                    "message",
                                    o.onMessage
                                  ),
                                  u.target.postMessage(
                                    { eventType: t, eventId: l, data: n },
                                    [a.port2]
                                  );
                              }).finally(function () {
                                o && u.removeMessageHandler(o);
                              })
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
      function po() {
        return window;
      }
      function ho() {
        return (
          "undefined" !== typeof po().WorkerGlobalScope &&
          "function" === typeof po().importScripts
        );
      }
      function vo() {
        return mo.apply(this, arguments);
      }
      function mo() {
        return (mo = pn(
          kn().mark(function e() {
            var t;
            return kn().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        null === navigator || void 0 === navigator
                          ? void 0
                          : navigator.serviceWorker
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 2:
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        navigator.serviceWorker.ready
                      );
                    case 5:
                      return (t = e.sent), e.abrupt("return", t.active);
                    case 9:
                      return (
                        (e.prev = 9),
                        (e.t0 = e.catch(2)),
                        e.abrupt("return", null)
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 9]]
            );
          })
        )).apply(this, arguments);
      }
      function go() {
        var e;
        return (
          (null ===
            (e =
              null === navigator || void 0 === navigator
                ? void 0
                : navigator.serviceWorker) || void 0 === e
            ? void 0
            : e.controller) || null
        );
      }
      var yo = "firebaseLocalStorageDb",
        bo = "firebaseLocalStorage",
        ko = "fbase_key",
        wo = (function () {
          function e(t) {
            hn(this, e), (this.request = t);
          }
          return (
            mn(e, [
              {
                key: "toPromise",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    e.request.addEventListener("success", function () {
                      t(e.request.result);
                    }),
                      e.request.addEventListener("error", function () {
                        n(e.request.error);
                      });
                  });
                },
              },
            ]),
            e
          );
        })();
      function So(e, t) {
        return e
          .transaction([bo], t ? "readwrite" : "readonly")
          .objectStore(bo);
      }
      function xo() {
        var e = indexedDB.deleteDatabase(yo);
        return new wo(e).toPromise();
      }
      function _o() {
        var e = indexedDB.open(yo, 1);
        return new Promise(function (t, n) {
          e.addEventListener("error", function () {
            n(e.error);
          }),
            e.addEventListener("upgradeneeded", function () {
              var t = e.result;
              try {
                t.createObjectStore(bo, { keyPath: ko });
              } catch (r) {
                n(r);
              }
            }),
            e.addEventListener(
              "success",
              pn(
                kn().mark(function n() {
                  var r;
                  return kn().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if ((r = e.result).objectStoreNames.contains(bo)) {
                            n.next = 12;
                            break;
                          }
                          return r.close(), (n.next = 5), xo();
                        case 5:
                          return (n.t0 = t), (n.next = 8), _o();
                        case 8:
                          (n.t1 = n.sent), (0, n.t0)(n.t1), (n.next = 13);
                          break;
                        case 12:
                          t(r);
                        case 13:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )
            );
        });
      }
      function Eo(e, t, n) {
        return Co.apply(this, arguments);
      }
      function Co() {
        return (Co = pn(
          kn().mark(function e(t, n, r) {
            var a, i;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = So(t, !0).put(
                        (yn((a = {}), ko, n), yn(a, "value", r), a)
                      )),
                      e.abrupt("return", new wo(i).toPromise())
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Io(e, t) {
        return To.apply(this, arguments);
      }
      function To() {
        return (To = pn(
          kn().mark(function e(t, n) {
            var r, a;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = So(t, !1).get(n)),
                      (e.next = 3),
                      new wo(r).toPromise()
                    );
                  case 3:
                    return (
                      (a = e.sent),
                      e.abrupt("return", void 0 === a ? null : a.value)
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Po(e, t) {
        var n = So(e, !0).delete(t);
        return new wo(n).toPromise();
      }
      var Oo = (function () {
        function e() {
          hn(this, e),
            (this.type = "LOCAL"),
            (this._shouldAllowMigration = !0),
            (this.listeners = {}),
            (this.localCache = {}),
            (this.pollTimer = null),
            (this.pendingWrites = 0),
            (this.receiver = null),
            (this.sender = null),
            (this.serviceWorkerReceiverAvailable = !1),
            (this.activeServiceWorker = null),
            (this._workerInitializationPromise =
              this.initializeServiceWorkerMessaging().then(
                function () {},
                function () {}
              ));
        }
        return (
          mn(e, [
            {
              key: "_openDb",
              value: (function () {
                var e = pn(
                  kn().mark(function e() {
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.db) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", this.db);
                            case 2:
                              return (e.next = 4), _o();
                            case 4:
                              return (
                                (this.db = e.sent), e.abrupt("return", this.db)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_withRetries",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t) {
                    var n, r;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              n = 0;
                            case 1:
                              return (e.prev = 2), (e.next = 5), this._openDb();
                            case 5:
                              return (r = e.sent), (e.next = 8), t(r);
                            case 8:
                              return e.abrupt("return", e.sent);
                            case 11:
                              if (
                                ((e.prev = 11), (e.t0 = e.catch(2)), !(n++ > 3))
                              ) {
                                e.next = 15;
                                break;
                              }
                              throw e.t0;
                            case 15:
                              this.db && (this.db.close(), (this.db = void 0));
                            case 16:
                              e.next = 1;
                              break;
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 11]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "initializeServiceWorkerMessaging",
              value: (function () {
                var e = pn(
                  kn().mark(function e() {
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                ho()
                                  ? this.initializeReceiver()
                                  : this.initializeSender()
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "initializeReceiver",
              value: (function () {
                var e = pn(
                  kn().mark(function e() {
                    var t = this;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (this.receiver = lo._getInstance(
                                ho() ? self : null
                              )),
                                this.receiver._subscribe(
                                  "keyChanged",
                                  (function () {
                                    var e = pn(
                                      kn().mark(function e(n, r) {
                                        var a;
                                        return kn().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (e.next = 2), t._poll();
                                              case 2:
                                                return (
                                                  (a = e.sent),
                                                  e.abrupt("return", {
                                                    keyProcessed: a.includes(
                                                      r.key
                                                    ),
                                                  })
                                                );
                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t, n) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                ),
                                this.receiver._subscribe(
                                  "ping",
                                  (function () {
                                    var e = pn(
                                      kn().mark(function e(t, n) {
                                        return kn().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return e.abrupt("return", [
                                                  "keyChanged",
                                                ]);
                                              case 1:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t, n) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "initializeSender",
              value: (function () {
                var e = pn(
                  kn().mark(function e() {
                    var t, n, r;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), vo();
                            case 2:
                              if (
                                ((this.activeServiceWorker = e.sent),
                                this.activeServiceWorker)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return");
                            case 5:
                              return (
                                (this.sender = new fo(
                                  this.activeServiceWorker
                                )),
                                (e.next = 8),
                                this.sender._send("ping", {}, 800)
                              );
                            case 8:
                              if ((r = e.sent)) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt("return");
                            case 11:
                              (null === (t = r[0]) || void 0 === t
                                ? void 0
                                : t.fulfilled) &&
                                (null === (n = r[0]) || void 0 === n
                                  ? void 0
                                  : n.value.includes("keyChanged")) &&
                                (this.serviceWorkerReceiverAvailable = !0);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "notifyServiceWorker",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t) {
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                this.sender &&
                                this.activeServiceWorker &&
                                go() === this.activeServiceWorker
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                this.sender._send(
                                  "keyChanged",
                                  { key: t },
                                  this.serviceWorkerReceiverAvailable ? 800 : 50
                                )
                              );
                            case 5:
                              e.next = 9;
                              break;
                            case 7:
                              (e.prev = 7), (e.t0 = e.catch(2));
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 7]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_isAvailable",
              value: (function () {
                var e = pn(
                  kn().mark(function e() {
                    var t;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((e.prev = 0), indexedDB)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", !1);
                            case 3:
                              return (e.next = 5), _o();
                            case 5:
                              return (t = e.sent), (e.next = 8), Eo(t, no, "1");
                            case 8:
                              return (e.next = 10), Po(t, no);
                            case 10:
                              return e.abrupt("return", !0);
                            case 13:
                              (e.prev = 13), (e.t0 = e.catch(0));
                            case 15:
                              return e.abrupt("return", !1);
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 13]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_withPendingWrite",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t) {
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.pendingWrites++,
                                (e.prev = 1),
                                (e.next = 4),
                                t()
                              );
                            case 4:
                              return (
                                (e.prev = 4), this.pendingWrites--, e.finish(4)
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, , 4, 7]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_set",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t, n) {
                    var r = this;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this._withPendingWrite(
                                  pn(
                                    kn().mark(function e() {
                                      return kn().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                r._withRetries(function (e) {
                                                  return Eo(e, t, n);
                                                })
                                              );
                                            case 2:
                                              return (
                                                (r.localCache[t] = n),
                                                e.abrupt(
                                                  "return",
                                                  r.notifyServiceWorker(t)
                                                )
                                              );
                                            case 4:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_get",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t) {
                    var n;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this._withRetries(function (e) {
                                  return Io(e, t);
                                })
                              );
                            case 2:
                              return (
                                (n = e.sent),
                                (this.localCache[t] = n),
                                e.abrupt("return", n)
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_remove",
              value: (function () {
                var e = pn(
                  kn().mark(function e(t) {
                    var n = this;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this._withPendingWrite(
                                  pn(
                                    kn().mark(function e() {
                                      return kn().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                n._withRetries(function (e) {
                                                  return Po(e, t);
                                                })
                                              );
                                            case 2:
                                              return (
                                                delete n.localCache[t],
                                                e.abrupt(
                                                  "return",
                                                  n.notifyServiceWorker(t)
                                                )
                                              );
                                            case 4:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_poll",
              value: (function () {
                var e = pn(
                  kn().mark(function e() {
                    var t, n, r, a, i, o, u, s, l, c, f;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this._withRetries(function (e) {
                                  var t = So(e, !1).getAll();
                                  return new wo(t).toPromise();
                                })
                              );
                            case 2:
                              if ((t = e.sent)) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", []);
                            case 5:
                              if (0 === this.pendingWrites) {
                                e.next = 7;
                                break;
                              }
                              return e.abrupt("return", []);
                            case 7:
                              (n = []), (r = new Set()), (a = fn(t));
                              try {
                                for (a.s(); !(i = a.n()).done; )
                                  (o = i.value),
                                    (u = o.fbase_key),
                                    (s = o.value),
                                    r.add(u),
                                    JSON.stringify(this.localCache[u]) !==
                                      JSON.stringify(s) &&
                                      (this.notifyListeners(u, s), n.push(u));
                              } catch (d) {
                                a.e(d);
                              } finally {
                                a.f();
                              }
                              for (
                                l = 0, c = Object.keys(this.localCache);
                                l < c.length;
                                l++
                              )
                                (f = c[l]),
                                  this.localCache[f] &&
                                    !r.has(f) &&
                                    (this.notifyListeners(f, null), n.push(f));
                              return e.abrupt("return", n);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "notifyListeners",
              value: function (e, t) {
                this.localCache[e] = t;
                var n = this.listeners[e];
                if (n)
                  for (var r = 0, a = Array.from(n); r < a.length; r++) {
                    (0, a[r])(t);
                  }
              },
            },
            {
              key: "startPolling",
              value: function () {
                var e = this;
                this.stopPolling(),
                  (this.pollTimer = setInterval(
                    pn(
                      kn().mark(function t() {
                        return kn().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt("return", e._poll());
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    ),
                    800
                  ));
              },
            },
            {
              key: "stopPolling",
              value: function () {
                this.pollTimer &&
                  (clearInterval(this.pollTimer), (this.pollTimer = null));
              },
            },
            {
              key: "_addListener",
              value: function (e, t) {
                0 === Object.keys(this.listeners).length && this.startPolling(),
                  this.listeners[e] ||
                    ((this.listeners[e] = new Set()), this._get(e)),
                  this.listeners[e].add(t);
              },
            },
            {
              key: "_removeListener",
              value: function (e, t) {
                this.listeners[e] &&
                  (this.listeners[e].delete(t),
                  0 === this.listeners[e].size && delete this.listeners[e]),
                  0 === Object.keys(this.listeners).length &&
                    this.stopPolling();
              },
            },
          ]),
          e
        );
      })();
      Oo.type = "LOCAL";
      var No = Oo;
      function Ro(e, t) {
        return ya(e, "POST", "/v2/accounts/mfaSignIn:start", ga(e, t));
      }
      function Ao(e) {
        return new Promise(function (t, n) {
          var r = document.createElement("script");
          r.setAttribute("src", e),
            (r.onload = t),
            (r.onerror = function (e) {
              var t = Zr("internal-error");
              (t.customData = e), n(t);
            }),
            (r.type = "text/javascript"),
            (r.charset = "UTF-8"),
            (function () {
              var e, t;
              return null !==
                (t =
                  null === (e = document.getElementsByTagName("head")) ||
                  void 0 === e
                    ? void 0
                    : e[0]) && void 0 !== t
                ? t
                : document;
            })().appendChild(r);
        });
      }
      function Lo(e) {
        return "__".concat(e).concat(Math.floor(1e6 * Math.random()));
      }
      Lo("rcb"), new da(3e4, 6e4);
      var Do = "recaptcha";
      function Mo(e, t, n) {
        return jo.apply(this, arguments);
      }
      function jo() {
        return (jo = pn(
          kn().mark(function e(t, n, r) {
            var a, i, o, u, s, l, c, f, d;
            return kn().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), r.verify();
                    case 2:
                      if (
                        ((i = e.sent),
                        (e.prev = 3),
                        na("string" === typeof i, t, "argument-error"),
                        na(r.type === Do, t, "argument-error"),
                        !(
                          "session" in
                          (o = "string" === typeof n ? { phoneNumber: n } : n)
                        ))
                      ) {
                        e.next = 26;
                        break;
                      }
                      if (((u = o.session), !("phoneNumber" in o))) {
                        e.next = 17;
                        break;
                      }
                      return (
                        na("enroll" === u.type, t, "internal-error"),
                        (e.next = 13),
                        to(t, {
                          idToken: u.credential,
                          phoneEnrollmentInfo: {
                            phoneNumber: o.phoneNumber,
                            recaptchaToken: i,
                          },
                        })
                      );
                    case 13:
                      return (
                        (s = e.sent),
                        e.abrupt("return", s.phoneSessionInfo.sessionInfo)
                      );
                    case 17:
                      return (
                        na("signin" === u.type, t, "internal-error"),
                        na(
                          (l =
                            (null === (a = o.multiFactorHint) || void 0 === a
                              ? void 0
                              : a.uid) || o.multiFactorUid),
                          t,
                          "missing-multi-factor-info"
                        ),
                        (e.next = 22),
                        Ro(t, {
                          mfaPendingCredential: u.credential,
                          mfaEnrollmentId: l,
                          phoneSignInInfo: { recaptchaToken: i },
                        })
                      );
                    case 22:
                      return (
                        (c = e.sent),
                        e.abrupt("return", c.phoneResponseInfo.sessionInfo)
                      );
                    case 24:
                      e.next = 31;
                      break;
                    case 26:
                      return (
                        (e.next = 28),
                        Oi(t, { phoneNumber: o.phoneNumber, recaptchaToken: i })
                      );
                    case 28:
                      return (
                        (f = e.sent), (d = f.sessionInfo), e.abrupt("return", d)
                      );
                    case 31:
                      return (e.prev = 31), r._reset(), e.finish(31);
                    case 34:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, , 31, 34]]
            );
          })
        )).apply(this, arguments);
      }
      var Fo = (function () {
        function e(t) {
          hn(this, e), (this.providerId = e.PROVIDER_ID), (this.auth = vi(t));
        }
        return (
          mn(
            e,
            [
              {
                key: "verifyPhoneNumber",
                value: function (e, t) {
                  return Mo(this.auth, e, zn(t));
                },
              },
            ],
            [
              {
                key: "credential",
                value: function (e, t) {
                  return Mi._fromVerification(e, t);
                },
              },
              {
                key: "credentialFromResult",
                value: function (t) {
                  var n = t;
                  return e.credentialFromTaggedObject(n);
                },
              },
              {
                key: "credentialFromError",
                value: function (t) {
                  return e.credentialFromTaggedObject(t.customData || {});
                },
              },
              {
                key: "credentialFromTaggedObject",
                value: function (e) {
                  var t = e._tokenResponse;
                  if (!t) return null;
                  var n = t.phoneNumber,
                    r = t.temporaryProof;
                  return n && r ? Mi._fromTokenResponse(n, r) : null;
                },
              },
            ]
          ),
          e
        );
      })();
      function zo(e, t) {
        return t
          ? oa(t)
          : (na(e._popupRedirectResolver, e, "argument-error"),
            e._popupRedirectResolver);
      }
      (Fo.PROVIDER_ID = "phone"), (Fo.PHONE_SIGN_IN_METHOD = "phone");
      var Uo = (function (e) {
        on(n, e);
        var t = cn(n);
        function n(e) {
          var r;
          return (
            hn(this, n), ((r = t.call(this, "custom", "custom")).params = e), r
          );
        }
        return (
          mn(n, [
            {
              key: "_getIdTokenResponse",
              value: function (e) {
                return Ii(e, this._buildIdpRequest());
              },
            },
            {
              key: "_linkToIdToken",
              value: function (e, t) {
                return Ii(e, this._buildIdpRequest(t));
              },
            },
            {
              key: "_getReauthenticationResolver",
              value: function (e) {
                return Ii(e, this._buildIdpRequest());
              },
            },
            {
              key: "_buildIdpRequest",
              value: function (e) {
                var t = {
                  requestUri: this.params.requestUri,
                  sessionId: this.params.sessionId,
                  postBody: this.params.postBody,
                  tenantId: this.params.tenantId,
                  pendingToken: this.params.pendingToken,
                  returnSecureToken: !0,
                  returnIdpCredential: !0,
                };
                return e && (t.idToken = e), t;
              },
            },
          ]),
          n
        );
      })(gi);
      function Vo(e) {
        return Zi(e.auth, new Uo(e), e.bypassAuthState);
      }
      function Ho(e) {
        var t = e.auth,
          n = e.user;
        return na(n, t, "internal-error"), Ji(n, new Uo(e), e.bypassAuthState);
      }
      function Bo(e) {
        return Wo.apply(this, arguments);
      }
      function Wo() {
        return (Wo = pn(
          kn().mark(function e(t) {
            var n, r;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.auth),
                      na((r = t.user), n, "internal-error"),
                      e.abrupt("return", Qi(r, new Uo(t), t.bypassAuthState))
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var $o = (function () {
          function e(t, n, r, a) {
            var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            hn(this, e),
              (this.auth = t),
              (this.resolver = r),
              (this.user = a),
              (this.bypassAuthState = i),
              (this.pendingPromise = null),
              (this.eventManager = null),
              (this.filter = Array.isArray(n) ? n : [n]);
          }
          return (
            mn(e, [
              {
                key: "execute",
                value: function () {
                  var e = this;
                  return new Promise(
                    (function () {
                      var t = pn(
                        kn().mark(function t(n, r) {
                          return kn().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (e.pendingPromise = {
                                        resolve: n,
                                        reject: r,
                                      }),
                                      (t.prev = 1),
                                      (t.next = 4),
                                      e.resolver._initialize(e.auth)
                                    );
                                  case 4:
                                    return (
                                      (e.eventManager = t.sent),
                                      (t.next = 7),
                                      e.onExecution()
                                    );
                                  case 7:
                                    e.eventManager.registerConsumer(e),
                                      (t.next = 13);
                                    break;
                                  case 10:
                                    (t.prev = 10),
                                      (t.t0 = t.catch(1)),
                                      e.reject(t.t0);
                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[1, 10]]
                          );
                        })
                      );
                      return function (e, n) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
              {
                key: "onAuthEvent",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n, r, a, i, o, u, s;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = t.urlResponse),
                                  (r = t.sessionId),
                                  (a = t.postBody),
                                  (i = t.tenantId),
                                  (o = t.error),
                                  (u = t.type),
                                  !o)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return this.reject(o), e.abrupt("return");
                              case 4:
                                return (
                                  (s = {
                                    auth: this.auth,
                                    requestUri: n,
                                    sessionId: r,
                                    tenantId: i || void 0,
                                    postBody: a || void 0,
                                    user: this.user,
                                    bypassAuthState: this.bypassAuthState,
                                  }),
                                  (e.prev = 5),
                                  (e.t0 = this),
                                  (e.next = 9),
                                  this.getIdpTask(u)(s)
                                );
                              case 9:
                                (e.t1 = e.sent),
                                  e.t0.resolve.call(e.t0, e.t1),
                                  (e.next = 16);
                                break;
                              case 13:
                                (e.prev = 13),
                                  (e.t2 = e.catch(5)),
                                  this.reject(e.t2);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[5, 13]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onError",
                value: function (e) {
                  this.reject(e);
                },
              },
              {
                key: "getIdpTask",
                value: function (e) {
                  switch (e) {
                    case "signInViaPopup":
                    case "signInViaRedirect":
                      return Vo;
                    case "linkViaPopup":
                    case "linkViaRedirect":
                      return Bo;
                    case "reauthViaPopup":
                    case "reauthViaRedirect":
                      return Ho;
                    default:
                      Xr(this.auth, "internal-error");
                  }
                },
              },
              {
                key: "resolve",
                value: function (e) {
                  aa(this.pendingPromise, "Pending promise was never set"),
                    this.pendingPromise.resolve(e),
                    this.unregisterAndCleanUp();
                },
              },
              {
                key: "reject",
                value: function (e) {
                  aa(this.pendingPromise, "Pending promise was never set"),
                    this.pendingPromise.reject(e),
                    this.unregisterAndCleanUp();
                },
              },
              {
                key: "unregisterAndCleanUp",
                value: function () {
                  this.eventManager &&
                    this.eventManager.unregisterConsumer(this),
                    (this.pendingPromise = null),
                    this.cleanUp();
                },
              },
            ]),
            e
          );
        })(),
        Ko = new da(2e3, 1e4);
      var qo = (function (e) {
        on(n, e);
        var t = cn(n);
        function n(e, r, a, i, o) {
          var u;
          return (
            hn(this, n),
            ((u = t.call(this, e, r, i, o)).provider = a),
            (u.authWindow = null),
            (u.pollId = null),
            n.currentPopupAction && n.currentPopupAction.cancel(),
            (n.currentPopupAction = rn(u)),
            u
          );
        }
        return (
          mn(n, [
            {
              key: "executeNotNull",
              value: (function () {
                var e = pn(
                  kn().mark(function e() {
                    var t;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.execute();
                            case 2:
                              return (
                                na((t = e.sent), this.auth, "internal-error"),
                                e.abrupt("return", t)
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "onExecution",
              value: (function () {
                var e = pn(
                  kn().mark(function e() {
                    var t,
                      n = this;
                    return kn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                aa(
                                  1 === this.filter.length,
                                  "Popup operations only handle one event"
                                ),
                                (t = co()),
                                (e.next = 4),
                                this.resolver._openPopup(
                                  this.auth,
                                  this.provider,
                                  this.filter[0],
                                  t
                                )
                              );
                            case 4:
                              (this.authWindow = e.sent),
                                (this.authWindow.associatedEvent = t),
                                this.resolver
                                  ._originValidation(this.auth)
                                  .catch(function (e) {
                                    n.reject(e);
                                  }),
                                this.resolver._isIframeWebStorageSupported(
                                  this.auth,
                                  function (e) {
                                    e ||
                                      n.reject(
                                        Zr(n.auth, "web-storage-unsupported")
                                      );
                                  }
                                ),
                                this.pollUserCancellation();
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "eventId",
              get: function () {
                var e;
                return (
                  (null === (e = this.authWindow) || void 0 === e
                    ? void 0
                    : e.associatedEvent) || null
                );
              },
            },
            {
              key: "cancel",
              value: function () {
                this.reject(Zr(this.auth, "cancelled-popup-request"));
              },
            },
            {
              key: "cleanUp",
              value: function () {
                this.authWindow && this.authWindow.close(),
                  this.pollId && window.clearTimeout(this.pollId),
                  (this.authWindow = null),
                  (this.pollId = null),
                  (n.currentPopupAction = null);
              },
            },
            {
              key: "pollUserCancellation",
              value: function () {
                var e = this;
                !(function t() {
                  var n, r;
                  (
                    null ===
                      (r =
                        null === (n = e.authWindow) || void 0 === n
                          ? void 0
                          : n.window) || void 0 === r
                      ? void 0
                      : r.closed
                  )
                    ? (e.pollId = window.setTimeout(function () {
                        (e.pollId = null),
                          e.reject(Zr(e.auth, "popup-closed-by-user"));
                      }, 2e3))
                    : (e.pollId = window.setTimeout(t, Ko.get()));
                })();
              },
            },
          ]),
          n
        );
      })($o);
      qo.currentPopupAction = null;
      var Go = new Map(),
        Qo = (function (e) {
          on(n, e);
          var t = cn(n);
          function n(e, r) {
            var a,
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              hn(this, n),
              ((a = t.call(
                this,
                e,
                [
                  "signInViaRedirect",
                  "linkViaRedirect",
                  "reauthViaRedirect",
                  "unknown",
                ],
                r,
                void 0,
                i
              )).eventId = null),
              a
            );
          }
          return (
            mn(n, [
              {
                key: "execute",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      var t, r;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ((t = Go.get(this.auth._key()))) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Yo(this.resolver, this.auth)
                                );
                              case 5:
                                if (!e.sent) {
                                  e.next = 12;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  nn(en(n.prototype), "execute", this).call(
                                    this
                                  )
                                );
                              case 9:
                                (e.t0 = e.sent), (e.next = 13);
                                break;
                              case 12:
                                e.t0 = null;
                              case 13:
                                (r = e.t0),
                                  (t = function () {
                                    return Promise.resolve(r);
                                  }),
                                  (e.next = 20);
                                break;
                              case 17:
                                (e.prev = 17),
                                  (e.t1 = e.catch(2)),
                                  (t = function () {
                                    return Promise.reject(e.t1);
                                  });
                              case 20:
                                Go.set(this.auth._key(), t);
                              case 21:
                                return (
                                  this.bypassAuthState ||
                                    Go.set(this.auth._key(), function () {
                                      return Promise.resolve(null);
                                    }),
                                  e.abrupt("return", t())
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 17]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onAuthEvent",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var r;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ("signInViaRedirect" !== t.type) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  nn(en(n.prototype), "onAuthEvent", this).call(
                                    this,
                                    t
                                  )
                                );
                              case 4:
                                if ("unknown" !== t.type) {
                                  e.next = 7;
                                  break;
                                }
                                return this.resolve(null), e.abrupt("return");
                              case 7:
                                if (!t.eventId) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (e.next = 10),
                                  this.auth._redirectUserForId(t.eventId)
                                );
                              case 10:
                                if (!(r = e.sent)) {
                                  e.next = 16;
                                  break;
                                }
                                return (
                                  (this.user = r),
                                  e.abrupt(
                                    "return",
                                    nn(
                                      en(n.prototype),
                                      "onAuthEvent",
                                      this
                                    ).call(this, t)
                                  )
                                );
                              case 16:
                                this.resolve(null);
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onExecution",
                value: (function () {
                  var e = pn(
                    kn().mark(function e() {
                      return kn().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              { key: "cleanUp", value: function () {} },
            ]),
            n
          );
        })($o);
      function Yo(e, t) {
        return Jo.apply(this, arguments);
      }
      function Jo() {
        return (Jo = pn(
          kn().mark(function e(t, n) {
            var r, a, i;
            return kn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = eu(n)), (a = Zo(t)), (e.next = 4), a._isAvailable()
                    );
                  case 4:
                    if (e.sent) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 6:
                    return (e.next = 8), a._get(r);
                  case 8:
                    return (
                      (e.t0 = e.sent),
                      (i = "true" === e.t0),
                      (e.next = 12),
                      a._remove(r)
                    );
                  case 12:
                    return e.abrupt("return", i);
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Xo(e, t) {
        Go.set(e._key(), t);
      }
      function Zo(e) {
        return oa(e._redirectPersistence);
      }
      function eu(e) {
        return Xa("pendingRedirect", e.config.apiKey, e.name);
      }
      function tu(e, t) {
        return nu.apply(this, arguments);
      }
      function nu() {
        return (
          (nu = pn(
            kn().mark(function e(t, n) {
              var r,
                a,
                i,
                o,
                u,
                s = arguments;
              return kn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = s.length > 2 && void 0 !== s[2] && s[2]),
                        (a = vi(t)),
                        (i = zo(a, n)),
                        (o = new Qo(a, i, r)),
                        (e.next = 6),
                        o.execute()
                      );
                    case 6:
                      if (!(u = e.sent) || r) {
                        e.next = 13;
                        break;
                      }
                      return (
                        delete u.user._redirectEventId,
                        (e.next = 11),
                        a._persistUserIfCurrent(u.user)
                      );
                    case 11:
                      return (e.next = 13), a._setRedirectUser(null, n);
                    case 13:
                      return e.abrupt("return", u);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          nu.apply(this, arguments)
        );
      }
      var ru = (function () {
        function e(t) {
          hn(this, e),
            (this.auth = t),
            (this.cachedEventUids = new Set()),
            (this.consumers = new Set()),
            (this.queuedRedirectEvent = null),
            (this.hasHandledPotentialRedirect = !1),
            (this.lastProcessedEventTime = Date.now());
        }
        return (
          mn(e, [
            {
              key: "registerConsumer",
              value: function (e) {
                this.consumers.add(e),
                  this.queuedRedirectEvent &&
                    this.isEventForConsumer(this.queuedRedirectEvent, e) &&
                    (this.sendToConsumer(this.queuedRedirectEvent, e),
                    this.saveEventToCache(this.queuedRedirectEvent),
                    (this.queuedRedirectEvent = null));
              },
            },
            {
              key: "unregisterConsumer",
              value: function (e) {
                this.consumers.delete(e);
              },
            },
            {
              key: "onEvent",
              value: function (e) {
                var t = this;
                if (this.hasEventBeenHandled(e)) return !1;
                var n = !1;
                return (
                  this.consumers.forEach(function (r) {
                    t.isEventForConsumer(e, r) &&
                      ((n = !0), t.sendToConsumer(e, r), t.saveEventToCache(e));
                  }),
                  this.hasHandledPotentialRedirect ||
                    !(function (e) {
                      switch (e.type) {
                        case "signInViaRedirect":
                        case "linkViaRedirect":
                        case "reauthViaRedirect":
                          return !0;
                        case "unknown":
                          return iu(e);
                        default:
                          return !1;
                      }
                    })(e) ||
                    ((this.hasHandledPotentialRedirect = !0),
                    n || ((this.queuedRedirectEvent = e), (n = !0))),
                  n
                );
              },
            },
            {
              key: "sendToConsumer",
              value: function (e, t) {
                var n;
                if (e.error && !iu(e)) {
                  var r =
                    (null === (n = e.error.code) || void 0 === n
                      ? void 0
                      : n.split("auth/")[1]) || "internal-error";
                  t.onError(Zr(this.auth, r));
                } else t.onAuthEvent(e);
              },
            },
            {
              key: "isEventForConsumer",
              value: function (e, t) {
                var n =
                  null === t.eventId ||
                  (!!e.eventId && e.eventId === t.eventId);
                return t.filter.includes(e.type) && n;
              },
            },
            {
              key: "hasEventBeenHandled",
              value: function (e) {
                return (
                  Date.now() - this.lastProcessedEventTime >= 6e5 &&
                    this.cachedEventUids.clear(),
                  this.cachedEventUids.has(au(e))
                );
              },
            },
            {
              key: "saveEventToCache",
              value: function (e) {
                this.cachedEventUids.add(au(e)),
                  (this.lastProcessedEventTime = Date.now());
              },
            },
          ]),
          e
        );
      })();
      function au(e) {
        return [e.type, e.eventId, e.sessionId, e.tenantId]
          .filter(function (e) {
            return e;
          })
          .join("-");
      }
      function iu(e) {
        var t = e.type,
          n = e.error;
        return (
          "unknown" === t &&
          (null === n || void 0 === n ? void 0 : n.code) ===
            "auth/".concat("no-auth-event")
        );
      }
      function ou(e) {
        return uu.apply(this, arguments);
      }
      function uu() {
        return (
          (uu = pn(
            kn().mark(function e(t) {
              var n,
                r = arguments;
              return kn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                        e.abrupt("return", ya(t, "GET", "/v1/projects", n))
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          uu.apply(this, arguments)
        );
      }
      var su = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        lu = /^https?/;
      function cu() {
        return (cu = pn(
          kn().mark(function e(t) {
            var n, r, a, i, o;
            return kn().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t.config.emulator) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.next = 4), ou(t);
                    case 4:
                      (n = e.sent),
                        (r = n.authorizedDomains),
                        (a = fn(r)),
                        (e.prev = 7),
                        a.s();
                    case 9:
                      if ((i = a.n()).done) {
                        e.next = 20;
                        break;
                      }
                      if (((o = i.value), (e.prev = 11), !fu(o))) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt("return");
                    case 14:
                      e.next = 18;
                      break;
                    case 16:
                      (e.prev = 16), (e.t0 = e.catch(11));
                    case 18:
                      e.next = 9;
                      break;
                    case 20:
                      e.next = 25;
                      break;
                    case 22:
                      (e.prev = 22), (e.t1 = e.catch(7)), a.e(e.t1);
                    case 25:
                      return (e.prev = 25), a.f(), e.finish(25);
                    case 28:
                      Xr(t, "unauthorized-domain");
                    case 29:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [7, 22, 25, 28],
                [11, 16],
              ]
            );
          })
        )).apply(this, arguments);
      }
      function fu(e) {
        var t = sa(),
          n = new URL(t),
          r = n.protocol,
          a = n.hostname;
        if (e.startsWith("chrome-extension://")) {
          var i = new URL(e);
          return "" === i.hostname && "" === a
            ? "chrome-extension:" === r &&
                e.replace("chrome-extension://", "") ===
                  t.replace("chrome-extension://", "")
            : "chrome-extension:" === r && i.hostname === a;
        }
        if (!lu.test(r)) return !1;
        if (su.test(e)) return a === e;
        var o = e.replace(/\./g, "\\.");
        return new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a);
      }
      var du = new da(3e4, 6e4);
      function pu() {
        var e = po().___jsl;
        if (null === e || void 0 === e ? void 0 : e.H)
          for (var t = 0, n = Object.keys(e.H); t < n.length; t++) {
            var r = n[t];
            if (
              ((e.H[r].r = e.H[r].r || []),
              (e.H[r].L = e.H[r].L || []),
              (e.H[r].r = gn(e.H[r].L)),
              e.CP)
            )
              for (var a = 0; a < e.CP.length; a++) e.CP[a] = null;
          }
      }
      var hu = null;
      function vu(e) {
        return (
          (hu =
            hu ||
            (function (e) {
              return new Promise(function (t, n) {
                var r, a, i;
                function o() {
                  pu(),
                    gapi.load("gapi.iframes", {
                      callback: function () {
                        t(gapi.iframes.getContext());
                      },
                      ontimeout: function () {
                        pu(), n(Zr(e, "network-request-failed"));
                      },
                      timeout: du.get(),
                    });
                }
                if (
                  null ===
                    (a =
                      null === (r = po().gapi) || void 0 === r
                        ? void 0
                        : r.iframes) || void 0 === a
                    ? void 0
                    : a.Iframe
                )
                  t(gapi.iframes.getContext());
                else {
                  if (
                    !(null === (i = po().gapi) || void 0 === i
                      ? void 0
                      : i.load)
                  ) {
                    var u = Lo("iframefcb");
                    return (
                      (po()[u] = function () {
                        gapi.load ? o() : n(Zr(e, "network-request-failed"));
                      }),
                      Ao(
                        "https://apis.google.com/js/api.js?onload=".concat(u)
                      ).catch(function (e) {
                        return n(e);
                      })
                    );
                  }
                  o();
                }
              }).catch(function (e) {
                throw ((hu = null), e);
              });
            })(e)),
          hu
        );
      }
      var mu = new da(5e3, 15e3),
        gu = {
          style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px",
          },
          "aria-hidden": "true",
          tabindex: "-1",
        },
        yu = new Map([
          ["identitytoolkit.googleapis.com", "p"],
          ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
          ["test-identitytoolkit.sandbox.googleapis.com", "t"],
        ]);
      function bu(e) {
        var t = e.config;
        na(t.authDomain, e, "auth-domain-config-required");
        var n = t.emulator
            ? pa(t, "emulator/auth/iframe")
            : "https://"
                .concat(e.config.authDomain, "/")
                .concat("__/auth/iframe"),
          r = { apiKey: t.apiKey, appName: e.name, v: Tr },
          a = yu.get(e.config.apiHost);
        a && (r.eid = a);
        var i = e._getFrameworks();
        return (
          i.length && (r.fw = i.join(",")),
          "".concat(n, "?").concat(Ln(r).slice(1))
        );
      }
      function ku(e) {
        return wu.apply(this, arguments);
      }
      function wu() {
        return (
          (wu = pn(
            kn().mark(function e(t) {
              var n, r;
              return kn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), vu(t);
                    case 2:
                      return (
                        (n = e.sent),
                        na((r = po().gapi), t, "internal-error"),
                        e.abrupt(
                          "return",
                          n.open(
                            {
                              where: document.body,
                              url: bu(t),
                              messageHandlersFilter:
                                r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                              attributes: gu,
                              dontclear: !0,
                            },
                            function (e) {
                              return new Promise(
                                (function () {
                                  var n = pn(
                                    kn().mark(function n(r, a) {
                                      var i, o, u;
                                      return kn().wrap(function (n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              return (
                                                (u = function () {
                                                  po().clearTimeout(o), r(e);
                                                }),
                                                (n.next = 3),
                                                e.restyle({
                                                  setHideOnLeave: !1,
                                                })
                                              );
                                            case 3:
                                              (i = Zr(
                                                t,
                                                "network-request-failed"
                                              )),
                                                (o = po().setTimeout(
                                                  function () {
                                                    a(i);
                                                  },
                                                  mu.get()
                                                )),
                                                e.ping(u).then(u, function () {
                                                  a(i);
                                                });
                                            case 6:
                                            case "end":
                                              return n.stop();
                                          }
                                      }, n);
                                    })
                                  );
                                  return function (e, t) {
                                    return n.apply(this, arguments);
                                  };
                                })()
                              );
                            }
                          )
                        )
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          wu.apply(this, arguments)
        );
      }
      var Su = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no",
        },
        xu = "_blank",
        _u = "http://localhost",
        Eu = (function () {
          function e(t) {
            hn(this, e), (this.window = t), (this.associatedEvent = null);
          }
          return (
            mn(e, [
              {
                key: "close",
                value: function () {
                  if (this.window)
                    try {
                      this.window.close();
                    } catch (e) {}
                },
              },
            ]),
            e
          );
        })();
      function Cu(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 500,
          a =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 600,
          i = Math.max((window.screen.availHeight - a) / 2, 0).toString(),
          u = Math.max((window.screen.availWidth - r) / 2, 0).toString(),
          s = "",
          l = Object.assign(Object.assign({}, Su), {
            width: r.toString(),
            height: a.toString(),
            top: i,
            left: u,
          }),
          c = In().toLowerCase();
        n && (s = ri(c) ? xu : n),
          ti(c) && ((t = t || _u), (l.scrollbars = "yes"));
        var f = Object.entries(l).reduce(function (e, t) {
          var n = o(t, 2),
            r = n[0],
            a = n[1];
          return "".concat(e).concat(r, "=").concat(a, ",");
        }, "");
        if (li(c) && "_self" !== s) return Iu(t || "", s), new Eu(null);
        var d = window.open(t || "", s, f);
        na(d, e, "popup-blocked");
        try {
          d.focus();
        } catch (p) {}
        return new Eu(d);
      }
      function Iu(e, t) {
        var n = document.createElement("a");
        (n.href = e), (n.target = t);
        var r = document.createEvent("MouseEvent");
        r.initMouseEvent(
          "click",
          !0,
          !0,
          window,
          1,
          0,
          0,
          0,
          0,
          !1,
          !1,
          !1,
          !1,
          1,
          null
        ),
          n.dispatchEvent(r);
      }
      var Tu = "__/auth/handler",
        Pu = "emulator/auth/handler";
      function Ou(e, t, n, r, a, i) {
        na(e.config.authDomain, e, "auth-domain-config-required"),
          na(e.config.apiKey, e, "invalid-api-key");
        var u = {
          apiKey: e.config.apiKey,
          appName: e.name,
          authType: n,
          redirectUrl: r,
          v: Tr,
          eventId: a,
        };
        if (t instanceof zi) {
          t.setDefaultLanguage(e.languageCode),
            (u.providerId = t.providerId || ""),
            (function (e) {
              for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
              return !0;
            })(t.getCustomParameters()) ||
              (u.customParameters = JSON.stringify(t.getCustomParameters()));
          for (var s = 0, l = Object.entries(i || {}); s < l.length; s++) {
            var c = o(l[s], 2),
              f = c[0],
              d = c[1];
            u[f] = d;
          }
        }
        if (t instanceof Ui) {
          var p = t.getScopes().filter(function (e) {
            return "" !== e;
          });
          p.length > 0 && (u.scopes = p.join(","));
        }
        e.tenantId && (u.tid = e.tenantId);
        for (var h = u, v = 0, m = Object.keys(h); v < m.length; v++) {
          var g = m[v];
          void 0 === h[g] && delete h[g];
        }
        return ""
          .concat(
            (function (e) {
              var t = e.config;
              if (!t.emulator)
                return "https://".concat(t.authDomain, "/").concat(Tu);
              return pa(t, Pu);
            })(e),
            "?"
          )
          .concat(Ln(h).slice(1));
      }
      var Nu = "webStorageSupport",
        Ru = (function () {
          function e() {
            hn(this, e),
              (this.eventManagers = {}),
              (this.iframes = {}),
              (this.originValidationPromises = {}),
              (this._redirectPersistence = uo),
              (this._completeRedirectFn = tu),
              (this._overrideRedirectResult = Xo);
          }
          return (
            mn(e, [
              {
                key: "_openPopup",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t, n, r, a) {
                      var i, o;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  aa(
                                    null ===
                                      (i = this.eventManagers[t._key()]) ||
                                      void 0 === i
                                      ? void 0
                                      : i.manager,
                                    "_initialize() not called before _openPopup()"
                                  ),
                                  (o = Ou(t, n, r, sa(), a)),
                                  e.abrupt("return", Cu(t, o, co()))
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, r, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_openRedirect",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t, n, r, a) {
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this._originValidation(t);
                              case 2:
                                return (
                                  (i = Ou(t, n, r, sa(), a)),
                                  (po().location.href = i),
                                  e.abrupt(
                                    "return",
                                    new Promise(function () {})
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                          var i;
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, r, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_initialize",
                value: function (e) {
                  var t = this,
                    n = e._key();
                  if (this.eventManagers[n]) {
                    var r = this.eventManagers[n],
                      a = r.manager,
                      i = r.promise;
                    return a
                      ? Promise.resolve(a)
                      : (aa(i, "If manager is not set, promise should be"), i);
                  }
                  var o = this.initAndGetManager(e);
                  return (
                    (this.eventManagers[n] = { promise: o }),
                    o.catch(function () {
                      delete t.eventManagers[n];
                    }),
                    o
                  );
                },
              },
              {
                key: "initAndGetManager",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n, r;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), ku(t);
                              case 2:
                                return (
                                  (n = e.sent),
                                  (r = new ru(t)),
                                  n.register(
                                    "authEvent",
                                    function (e) {
                                      return (
                                        na(
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.authEvent,
                                          t,
                                          "invalid-auth-event"
                                        ),
                                        {
                                          status: r.onEvent(e.authEvent)
                                            ? "ACK"
                                            : "ERROR",
                                        }
                                      );
                                    },
                                    gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
                                  ),
                                  (this.eventManagers[t._key()] = {
                                    manager: r,
                                  }),
                                  (this.iframes[t._key()] = n),
                                  e.abrupt("return", r)
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_isIframeWebStorageSupported",
                value: function (e, t) {
                  this.iframes[e._key()].send(
                    Nu,
                    { type: Nu },
                    function (n) {
                      var r,
                        a =
                          null ===
                            (r = null === n || void 0 === n ? void 0 : n[0]) ||
                          void 0 === r
                            ? void 0
                            : r.webStorageSupport;
                      void 0 !== a && t(!!a), Xr(e, "internal-error");
                    },
                    gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
                  );
                },
              },
              {
                key: "_originValidation",
                value: function (e) {
                  var t = e._key();
                  return (
                    this.originValidationPromises[t] ||
                      (this.originValidationPromises[t] = (function (e) {
                        return cu.apply(this, arguments);
                      })(e)),
                    this.originValidationPromises[t]
                  );
                },
              },
              {
                key: "_shouldInitProactively",
                get: function () {
                  return fi() || ni() || si();
                },
              },
            ]),
            e
          );
        })(),
        Au = Ru,
        Lu = (function (e) {
          on(n, e);
          var t = cn(n);
          function n(e) {
            var r;
            return hn(this, n), ((r = t.call(this, "phone")).credential = e), r;
          }
          return (
            mn(
              n,
              [
                {
                  key: "_finalizeEnroll",
                  value: function (e, t, n) {
                    return (function (e, t) {
                      return ya(
                        e,
                        "POST",
                        "/v2/accounts/mfaEnrollment:finalize",
                        ga(e, t)
                      );
                    })(e, {
                      idToken: t,
                      displayName: n,
                      phoneVerificationInfo:
                        this.credential._makeVerificationRequest(),
                    });
                  },
                },
                {
                  key: "_finalizeSignIn",
                  value: function (e, t) {
                    return (function (e, t) {
                      return ya(
                        e,
                        "POST",
                        "/v2/accounts/mfaSignIn:finalize",
                        ga(e, t)
                      );
                    })(e, {
                      mfaPendingCredential: t,
                      phoneVerificationInfo:
                        this.credential._makeVerificationRequest(),
                    });
                  },
                },
              ],
              [
                {
                  key: "_fromCredential",
                  value: function (e) {
                    return new n(e);
                  },
                },
              ]
            ),
            n
          );
        })(
          (function () {
            function e(t) {
              hn(this, e), (this.factorId = t);
            }
            return (
              mn(e, [
                {
                  key: "_process",
                  value: function (e, t, n) {
                    switch (t.type) {
                      case "enroll":
                        return this._finalizeEnroll(e, t.credential, n);
                      case "signin":
                        return this._finalizeSignIn(e, t.credential);
                      default:
                        return ra("unexpected MultiFactorSessionType");
                    }
                  },
                },
              ]),
              e
            );
          })()
        );
      (function () {
        function e() {
          hn(this, e);
        }
        return (
          mn(e, null, [
            {
              key: "assertion",
              value: function (e) {
                return Lu._fromCredential(e);
              },
            },
          ]),
          e
        );
      })().FACTOR_ID = "phone";
      var Du,
        Mu = "@firebase/auth",
        ju = "0.20.1",
        Fu = (function () {
          function e(t) {
            hn(this, e), (this.auth = t), (this.internalListeners = new Map());
          }
          return (
            mn(e, [
              {
                key: "getUid",
                value: function () {
                  var e;
                  return (
                    this.assertAuthConfigured(),
                    (null === (e = this.auth.currentUser) || void 0 === e
                      ? void 0
                      : e.uid) || null
                  );
                },
              },
              {
                key: "getToken",
                value: (function () {
                  var e = pn(
                    kn().mark(function e(t) {
                      var n;
                      return kn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.assertAuthConfigured(),
                                  (e.next = 3),
                                  this.auth._initializationPromise
                                );
                              case 3:
                                if (this.auth.currentUser) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", null);
                              case 5:
                                return (
                                  (e.next = 7),
                                  this.auth.currentUser.getIdToken(t)
                                );
                              case 7:
                                return (
                                  (n = e.sent),
                                  e.abrupt("return", { accessToken: n })
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addAuthTokenListener",
                value: function (e) {
                  if (
                    (this.assertAuthConfigured(),
                    !this.internalListeners.has(e))
                  ) {
                    var t = this.auth.onIdTokenChanged(function (t) {
                      var n;
                      e(
                        (null === (n = t) || void 0 === n
                          ? void 0
                          : n.stsTokenManager.accessToken) || null
                      );
                    });
                    this.internalListeners.set(e, t),
                      this.updateProactiveRefresh();
                  }
                },
              },
              {
                key: "removeAuthTokenListener",
                value: function (e) {
                  this.assertAuthConfigured();
                  var t = this.internalListeners.get(e);
                  t &&
                    (this.internalListeners.delete(e),
                    t(),
                    this.updateProactiveRefresh());
                },
              },
              {
                key: "assertAuthConfigured",
                value: function () {
                  na(
                    this.auth._initializationPromise,
                    "dependent-sdk-initialized-before-auth"
                  );
                },
              },
              {
                key: "updateProactiveRefresh",
                value: function () {
                  this.internalListeners.size > 0
                    ? this.auth._startProactiveRefresh()
                    : this.auth._stopProactiveRefresh();
                },
              },
            ]),
            e
          );
        })();
      (Du = "Browser"),
        _r(
          new Un(
            "auth",
            function (e, t) {
              var n = t.options,
                r = e.getProvider("app").getImmediate(),
                a = e.getProvider("heartbeat"),
                i = r.options,
                o = i.apiKey,
                u = i.authDomain;
              return (function (e, t) {
                na(o && !o.includes(":"), "invalid-api-key", {
                  appName: e.name,
                }),
                  na(
                    !(null === u || void 0 === u ? void 0 : u.includes(":")),
                    "argument-error",
                    { appName: e.name }
                  );
                var r = {
                    apiKey: o,
                    authDomain: u,
                    clientPlatform: Du,
                    apiHost: "identitytoolkit.googleapis.com",
                    tokenApiHost: "securetoken.googleapis.com",
                    apiScheme: "https",
                    sdkClientVersion: di(Du),
                  },
                  a = new hi(e, t, r);
                return (
                  (function (e, t) {
                    var n =
                        (null === t || void 0 === t ? void 0 : t.persistence) ||
                        [],
                      r = (Array.isArray(n) ? n : [n]).map(oa);
                    (null === t || void 0 === t ? void 0 : t.errorMap) &&
                      e._updateErrorMap(t.errorMap),
                      e._initializeWithPersistence(
                        r,
                        null === t || void 0 === t
                          ? void 0
                          : t.popupRedirectResolver
                      );
                  })(a, n),
                  a
                );
              })(r, a);
            },
            "PUBLIC"
          )
            .setInstantiationMode("EXPLICIT")
            .setInstanceCreatedCallback(function (e, t, n) {
              e.getProvider("auth-internal").initialize();
            })
        ),
        _r(
          new Un(
            "auth-internal",
            function (e) {
              return (function (e) {
                return new Fu(e);
              })(vi(e.getProvider("auth").getImmediate()));
            },
            "PRIVATE"
          ).setInstantiationMode("EXPLICIT")
        ),
        Or(
          Mu,
          ju,
          (function (e) {
            switch (e) {
              case "Node":
                return "node";
              case "ReactNative":
                return "rn";
              case "Worker":
                return "webworker";
              case "Cordova":
                return "cordova";
              default:
                return;
            }
          })(Du)
        ),
        Or(Mu, ju, "esm2017");
      var zu = function () {
          if ("out" !== localStorage.getItem("nittoUser")) {
            localStorage.setItem("nittoUser", "out");
            var e = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Pr(),
                t = Er(e, "auth");
              return t.isInitialized()
                ? t.getImmediate()
                : ua(e, {
                    popupRedirectResolver: Au,
                    persistence: [No, io, uo],
                  });
            })();
            (function (e) {
              return zn(e).signOut();
            })(e)
              .then(function () {
                alert("Sign-out successful.");
              })
              .catch(function (e) {
                alert(e);
              });
          } else alert("You are not logged in!");
        },
        Uu = "https://nimahabibi.de/shop/image/",
        Vu = function () {
          return (0, Y.jsx)(Y.Fragment, {
            children: (0, Y.jsxs)("div", {
              className: "App-header",
              children: [
                (0, Y.jsx)("h4", { children: "Nitto Shop" }),
                (0, Y.jsx)("img", {
                  className: "loginMenue",
                  src: Uu + "icon/login.svg",
                  onClick: zu,
                  alt: "login icon",
                }),
                (0, Y.jsx)("img", {
                  className: "basketMenue",
                  src: Uu + "icon/basket2.svg",
                  alt: "Shopping Bag Icon",
                }),
              ],
            }),
          });
        },
        Hu = function (e) {
          var t = e.ProductObject,
            n = (e.imagesPath, e.doClick, e.toggleFav),
            r = e.FavouriteIcon;
          return e.isFav
            ? (0, Y.jsx)("div", {
                className: "card",
                children: (0, Y.jsxs)("div", {
                  className: "products",
                  children: [
                    (0, Y.jsxs)(Q, {
                      to: "product/".concat(t.id),
                      className: "NavLink",
                      children: [
                        (0, Y.jsx)("div", {
                          className: "imageContainer",
                          children: (0, Y.jsx)("img", {
                            className: "ProductImage",
                            src: t.image,
                            alt: "Product's image",
                          }),
                        }),
                        (0, Y.jsxs)("div", {
                          className: "product-detail",
                          children: [
                            (0, Y.jsx)("p", {
                              className: "Price",
                              children: t.price + " \u20ac",
                            }),
                            (0, Y.jsx)("p", { children: t.mark }),
                            (0, Y.jsx)("p", {
                              className: "product_title",
                              children: t.title.substring(0, 20) + "...",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsx)("div", {
                      className: "Favorite",
                      children: (0, Y.jsx)("img", {
                        src: r,
                        alt: "Favorite Icon",
                        onClick: n,
                      }),
                    }),
                  ],
                }),
              })
            : (0, Y.jsx)(Y.Fragment, {});
        },
        Bu = function () {
          var e = o((0, t.useState)([]), 2),
            n = e[0],
            r = e[1],
            a = o((0, t.useState)([]), 2),
            i = (a[0], a[1]),
            u = o((0, t.useState)(""), 2),
            s = u[0],
            l = u[1],
            c = o((0, t.useState)([]), 2),
            f = c[0],
            d = c[1],
            p = "https://nimahabibi.de/shop/image/icon/favorite-black.svg";
          (0, t.useEffect)(function () {
            fetch("/api/products")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                r(e), d(e);
              });
          }, []);
          var h = !1;
          return (0, Y.jsxs)("div", {
            children: [
              (0, Y.jsx)("div", {
                className: "App-header",
                children: (0, Y.jsxs)("form", {
                  onSubmit: function (e) {
                    return e.preventDefault();
                  },
                  children: [
                    (0, Y.jsx)("input", {
                      type: "text",
                      className: "search",
                      placeholder: "search here...",
                      value: s.value,
                      onChange: function (e) {
                        l(e.target.value);
                      },
                    }),
                    (0, Y.jsx)("button", {
                      id: "searchBtn",
                      onClick: function () {
                        r(
                          f.filter(function (e) {
                            return e.title
                              .toLowerCase()
                              .includes(s.toLowerCase());
                          })
                        );
                      },
                      children: "\u2794",
                    }),
                  ],
                }),
              }),
              (0, Y.jsx)("h3", { children: "Your Marked Articles" }),
              (0, Y.jsx)("div", {
                className: "productsContainer",
                children: n.map(function (e, t) {
                  return (
                    (n = e.id),
                    null === localStorage.getItem(n) &&
                      localStorage.setItem(n, "False"),
                    "False" == localStorage.getItem(n)
                      ? ((p =
                          "https://nimahabibi.de/shop/image/icon/favorite-black.svg"),
                        (h = !1))
                      : ((p =
                          "https://nimahabibi.de/shop/image/icon/favorited.svg"),
                        (h = !0)),
                    (0, Y.jsx)(
                      Hu,
                      {
                        ProductObject: e,
                        imagesPath: "https://nimahabibi.de/shop/image/",
                        toggleFav: function () {
                          return (function (e) {
                            "False" == localStorage.getItem(e)
                              ? localStorage.setItem(e, "True")
                              : localStorage.setItem(e, "False"),
                              i([]);
                          })(e.id);
                        },
                        FavouriteIcon: p,
                        isFav: h,
                      },
                      t
                    )
                  );
                  var n;
                }),
              }),
            ],
          });
        };
      var Wu = function () {
        return (
          console.clear(),
          (0, Y.jsxs)("div", {
            className: "App",
            children: [
              (0, Y.jsx)(Vu, {}),
              (0, Y.jsx)("main", {
                id: "main",
                children: (0, Y.jsxs)(V, {
                  children: [
                    (0, Y.jsx)(z, { path: "/", element: (0, Y.jsx)(Ht, {}) }),
                    " ",
                    (0, Y.jsx)(z, {
                      path: "favourites",
                      element: (0, Y.jsx)(Bu, {}),
                    }),
                    (0, Y.jsx)(z, {
                      path: "product/:id",
                      element: (0, Y.jsx)(Zt, {}),
                    }),
                  ],
                }),
              }),
              (0, Y.jsx)(J, { className: "footer" }),
            ],
          })
        );
      };
      r.createRoot(document.getElementById("root")).render(
        (0, Y.jsx)(t.StrictMode, {
          children: (0, Y.jsx)(q, { children: (0, Y.jsx)(Wu, {}) }),
        })
      );
    })();
})();
//# sourceMappingURL=main.e8835b8a.js.map
