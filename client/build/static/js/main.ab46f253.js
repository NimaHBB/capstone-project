/*! For license information please see main.ab46f253.js.LICENSE.txt */
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
          s = {};
        function u(e) {
          return r.isMemo(e) ? o : s[e.$$typeof] || a;
        }
        (s[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (s[r.Memo] = o);
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
            for (var s = u(t), v = u(n), m = 0; m < o.length; ++m) {
              var g = o[m];
              if (!i[g] && (!r || !r[g]) && (!v || !v[g]) && (!s || !s[g])) {
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
          s = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
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
                  case s:
                  case o:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case d:
                      case m:
                      case v:
                      case u:
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
        function x(e) {
          return w(e) === f;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = l),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = i),
          (t.Lazy = m),
          (t.Memo = v),
          (t.Portal = a),
          (t.Profiler = s),
          (t.StrictMode = o),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return x(e) || w(e) === c;
          }),
          (t.isConcurrentMode = x),
          (t.isContextConsumer = function (e) {
            return w(e) === l;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === u;
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
            return w(e) === s;
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
              e === s ||
              e === o ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === v ||
                  e.$$typeof === u ||
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
          s = {};
        function u(e, t) {
          l(e, t), l(e + "Capture", t);
        }
        function l(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
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
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          I = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
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
        var D = Symbol.iterator;
        function L(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          j = Object.assign;
        function z(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var F = !1;
        function U(e, t) {
          if (!e || F) return "";
          F = !0;
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
                  s = i.length - 1;
                1 <= o && 0 <= s && a[o] !== i[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (a[o] !== i[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || a[o] !== i[s])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
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
            case S:
              return "Fragment";
            case x:
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
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case I:
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
        function V(e) {
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
        function J(e, t) {
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
        function Y(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          Y(e, t);
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
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
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
        var xe = null,
          Se = null,
          _e = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof xe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = wa(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Ie(e) {
          Se ? (_e ? _e.push(e) : (_e = [e])) : (Se = e);
        }
        function Ce() {
          if (Se) {
            var e = Se,
              t = _e;
            if (((_e = Se = null), Ee(e), t))
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
            (Oe = !1), (null !== Se || null !== _e) && (Pe(), Ce());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
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
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            Ae = !1;
          }
        function Le(e, t, n, r, a, i, o, s, u) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, l);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          je = null,
          ze = !1,
          Fe = null,
          Ue = {
            onError: function (e) {
              (Me = !0), (je = e);
            },
          };
        function Be(e, t, n, r, a, i, o, s, u) {
          (Me = !1), (je = null), Le.apply(Ue, arguments);
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
        function Ve(e) {
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
                  for (var s = !1, u = a.child; u; ) {
                    if (u === n) {
                      (s = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (s = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!s) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (s = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (s = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!s) throw Error(i(189));
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
          Je = a.unstable_requestPaint,
          Ye = a.unstable_now,
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
                return 0 === (e >>>= 0) ? 32 : (31 - ((st(e) / ut) | 0)) | 0;
              },
          st = Math.log,
          ut = Math.LN2;
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
            var s = o & ~a;
            0 !== s ? (r = ft(s)) : 0 !== (i &= o) && (r = ft(i));
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
        function vt() {
          var e = lt;
          return 0 === (4194240 & (lt <<= 1)) && (lt = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function kt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          xt,
          St,
          _t,
          Et,
          It = !1,
          Ct = [],
          Tt = null,
          Pt = null,
          Ot = null,
          Nt = new Map(),
          Rt = new Map(),
          At = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Lt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function jt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
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
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (ke = r), n.target.dispatchEvent(r), (ke = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Ut() {
          (It = !1),
            null !== Tt && zt(Tt) && (Tt = null),
            null !== Pt && zt(Pt) && (Pt = null),
            null !== Ot && zt(Ot) && (Ot = null),
            Nt.forEach(Ft),
            Rt.forEach(Ft);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            It ||
              ((It = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Ht(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Ct.length) {
            Bt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Bt(Tt, e),
              null !== Pt && Bt(Pt, e),
              null !== Ot && Bt(Ot, e),
              Nt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            jt(n), null === n.blockedOn && At.shift();
        }
        var Vt = k.ReactCurrentBatchConfig,
          Wt = !0;
        function $t(e, t, n, r) {
          var a = bt,
            i = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = i);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            i = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = i);
          }
        }
        function qt(e, t, n, r) {
          if (Wt) {
            var a = Qt(e, t, n, r);
            if (null === a) Wr(e, t, r, Gt, n), Lt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Tt = Mt(Tt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Mt(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Nt.set(i, Mt(Nt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Rt.set(i, Mt(Rt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Lt(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && wt(i),
                  null === (i = Qt(e, t, n, r)) && Wr(e, t, r, Gt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Qt(e, t, n, r) {
          if (((Gt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Jt(e) {
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
        var Yt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Yt ? Yt.value : Yt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
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
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
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
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          un,
          ln = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(ln),
          fn = j({}, ln, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = j({}, fn, {
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
            getModifierState: En,
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
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (sn = e.screenY - un.screenY))
                      : (sn = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = an(pn),
          vn = an(j({}, pn, { dataTransfer: 0 })),
          mn = an(j({}, fn, { relatedTarget: 0 })),
          gn = an(
            j({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = j({}, ln, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          kn = an(j({}, ln, { data: 0 })),
          wn = {
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
          xn = {
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
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return _n;
        }
        var In = j({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
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
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(In),
          Tn = an(
            j({}, pn, {
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
          Pn = an(
            j({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          On = an(
            j({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = j({}, pn, {
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
          Rn = an(Nn),
          An = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          Ln = null;
        c && "documentMode" in document && (Ln = document.documentMode);
        var Mn = c && "TextEvent" in window && !Ln,
          jn = c && (!Dn || (Ln && 8 < Ln && 11 >= Ln)),
          zn = String.fromCharCode(32),
          Fn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
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
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
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
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ie(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          qn = null;
        function Gn(e) {
          zr(e, 0);
        }
        function Qn(e) {
          if (q(ka(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Yn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Yn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (qn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(qn)) {
            var t = [];
            $n(t, qn, e, we(e)), Ne(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(qn);
        }
        function ir(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (sr(e, t)) return !0;
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
            if (!f.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function lr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = lr(e);
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
            r = lr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
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
        function pr(e) {
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
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
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
                  (a = cr(n, i));
                var o = cr(n, r);
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
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== G(r) ||
            ("selectionStart" in (r = mr) && pr(r)
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
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Kr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          _r = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Ir = Er("animationend"),
          Cr = Er("animationiteration"),
          Tr = Er("animationstart"),
          Pr = Er("transitionend"),
          Or = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Or.set(e, t), u(t, [e]);
        }
        for (var Ar = 0; Ar < Nr.length; Ar++) {
          var Dr = Nr[Ar];
          Rr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Rr(Ir, "onAnimationEnd"),
          Rr(Cr, "onAnimationIteration"),
          Rr(Tr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Pr, "onTransitionEnd"),
          l("onMouseEnter", ["mouseout", "mouseover"]),
          l("onMouseLeave", ["mouseout", "mouseover"]),
          l("onPointerEnter", ["pointerout", "pointerover"]),
          l("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Lr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Lr)
          );
        function jr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, s, u, l) {
              if ((Be.apply(this, arguments), Me)) {
                if (!Me) throw Error(i(198));
                var c = je;
                (Me = !1), (je = null), ze || ((ze = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    u = s.instance,
                    l = s.currentTarget;
                  if (((s = s.listener), u !== i && a.isPropagationStopped()))
                    break e;
                  jr(a, s, l), (i = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (s = r[o]).instance),
                    (l = s.currentTarget),
                    (s = s.listener),
                    u !== i && a.isPropagationStopped())
                  )
                    break e;
                  jr(a, s, l), (i = u);
                }
            }
          }
          if (ze) throw ((e = Fe), (ze = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = qt;
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
        function Wr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = ya(s))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = i,
              a = we(n),
              o = [];
            e: {
              var s = Or.get(e);
              if (void 0 !== s) {
                var u = cn,
                  l = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Cn;
                    break;
                  case "focusin":
                    (l = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (l = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
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
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Pn;
                    break;
                  case Ir:
                  case Cr:
                  case Tr:
                    u = gn;
                    break;
                  case Pr:
                    u = On;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Tn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Re(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new u(s, l, null, n, a)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === ke ||
                  !(l = n.relatedTarget || n.fromElement) ||
                  (!ya(l) && !l[ha])) &&
                  (u || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (l = (l = n.relatedTarget || n.toElement)
                          ? ya(l)
                          : null) &&
                        (l !== (f = He(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                        (l = null))
                    : ((u = null), (l = r)),
                  u !== l))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? s : ka(u)),
                  (p = null == l ? s : ka(l)),
                  ((s = new c(v, h + "leave", u, n, a)).target = f),
                  (s.relatedTarget = p),
                  (v = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", l, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && l)
                )
                  e: {
                    for (d = l, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, v = d; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Gr(o, s, u, c, !1),
                  null !== l && null !== f && Gr(o, f, l, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (s = r ? ka(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === u && "file" === s.type)
              )
                var m = Jn;
              else if (Wn(s))
                if (Yn) m = or;
                else {
                  m = ar;
                  var g = rr;
                }
              else
                (u = s.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (m = ir);
              switch (
                (m && (m = m(e, r))
                  ? $n(o, m, n, a)
                  : (g && g(e, s, r),
                    "focusout" === e &&
                      (g = s._wrapperState) &&
                      g.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (g = r ? ka(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), kr(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  kr(o, n, a);
              }
              var y;
              if (Dn)
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
                Hn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (jn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Xt = "value" in (Yt = a) ? Yt.value : Yt.textContent),
                      (Hn = !0))),
                0 < (g = Kr(r, b)).length &&
                  ((b = new kn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Dn && Un(e, t))
                          ? ((e = en()), (Zt = Xt = Yt = null), (Hn = !1), e)
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
                          return jn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new kn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            zr(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Re(e, n)) && r.unshift($r(e, i, a)),
              null != (i = Re(e, t)) && r.push($r(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              u = s.alternate,
              l = s.stateNode;
            if (null !== u && u === r) break;
            5 === s.tag &&
              null !== l &&
              ((s = l),
              a
                ? null != (u = Re(n, i)) && o.unshift($r(n, u, s))
                : a || (null != (u = Re(n, i)) && o.push($r(n, u, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Jr, "");
        }
        function Xr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
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
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function la(e) {
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
        function ca(e) {
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
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ka(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var xa = [],
          Sa = -1;
        function _a(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Sa || ((e.current = xa[Sa]), (xa[Sa] = null), Sa--);
        }
        function Ia(e, t) {
          Sa++, (xa[Sa] = e.current), (e.current = t);
        }
        var Ca = {},
          Ta = _a(Ca),
          Pa = _a(!1),
          Oa = Ca;
        function Na(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
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
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Aa() {
          Ea(Pa), Ea(Ta);
        }
        function Da(e, t, n) {
          if (Ta.current !== Ca) throw Error(i(168));
          Ia(Ta, t), Ia(Pa, n);
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, V(e) || "Unknown", a));
          return j({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Oa = Ta.current),
            Ia(Ta, e),
            Ia(Pa, Pa.current),
            !0
          );
        }
        function ja(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = La(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Pa),
              Ea(Ta),
              Ia(Ta, e))
            : Ea(Pa),
            Ia(Pa, n);
        }
        var za = null,
          Fa = !1,
          Ua = !1;
        function Ba(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function Ha() {
          if (!Ua && null !== za) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = za;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (za = null), (Fa = !1);
            } catch (a) {
              throw (null !== za && (za = za.slice(e + 1)), qe(Ze, Ha), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Va = k.ReactCurrentBatchConfig;
        function Wa(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = j({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var $a = _a(null),
          Ka = null,
          qa = null,
          Ga = null;
        function Qa() {
          Ga = qa = Ka = null;
        }
        function Ja(e) {
          var t = $a.current;
          Ea($a), (e._currentValue = t);
        }
        function Ya(e, t, n) {
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
        function Xa(e, t) {
          (Ka = e),
            (Ga = qa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function Za(e) {
          var t = e._currentValue;
          if (Ga !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === qa)
            ) {
              if (null === Ka) throw Error(i(308));
              (qa = e), (Ka.dependencies = { lanes: 0, firstContext: e });
            } else qa = qa.next = e;
          return t;
        }
        var ei = null,
          ti = !1;
        function ni(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ri(e, t) {
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
        function ai(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function ii(e, t) {
          var n = e.updateQueue;
          null !== n &&
            ((n = n.shared),
            tl(e)
              ? (null === (e = n.interleaved)
                  ? ((t.next = t), null === ei ? (ei = [n]) : ei.push(n))
                  : ((t.next = e.next), (e.next = t)),
                (n.interleaved = t))
              : (null === (e = n.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (n.pending = t)));
        }
        function oi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function si(e, t) {
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
        function ui(e, t, n, r) {
          var a = e.updateQueue;
          ti = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var u = s,
              l = u.next;
            (u.next = null), null === o ? (i = l) : (o.next = l), (o = u);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = l) : (s.next = l),
              (c.lastBaseUpdate = u));
          }
          if (null !== i) {
            var f = a.baseState;
            for (o = 0, c = l = u = null, s = i; ; ) {
              var d = s.lane,
                p = s.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = s;
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
                      ti = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [s]) : d.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((l = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (d = s).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = l),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Au |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function li(e, t, n) {
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
        var ci = new r.Component().refs;
        function fi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : j({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var di = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Yu(),
              a = Xu(e),
              i = ai(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              ii(e, i),
              null !== (t = Zu(e, a, r)) && oi(t, e, a);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Yu(),
              a = Xu(e),
              i = ai(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              ii(e, i),
              null !== (t = Zu(e, a, r)) && oi(t, e, a);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Yu(),
              r = Xu(e),
              a = ai(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              ii(e, a),
              null !== (t = Zu(e, r, n)) && oi(t, e, r);
          },
        };
        function pi(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, i);
        }
        function hi(e, t, n) {
          var r = !1,
            a = Ca,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Za(i))
              : ((a = Ra(t) ? Oa : Ta.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Na(e, a)
                  : Ca)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = di),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function vi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && di.enqueueReplaceState(t, t.state, null);
        }
        function mi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = ci), ni(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Za(i))
            : ((i = Ra(t) ? Oa : Ta.current), (a.context = Na(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (fi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && di.enqueueReplaceState(a, a.state, null),
              ui(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        var gi = [],
          yi = 0,
          bi = null,
          ki = 0,
          wi = [],
          xi = 0,
          Si = null,
          _i = 1,
          Ei = "";
        function Ii(e, t) {
          (gi[yi++] = ki), (gi[yi++] = bi), (bi = e), (ki = t);
        }
        function Ci(e, t, n) {
          (wi[xi++] = _i), (wi[xi++] = Ei), (wi[xi++] = Si), (Si = e);
          var r = _i;
          e = Ei;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (_i = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ei = i + e);
          } else (_i = (1 << i) | (n << a) | r), (Ei = e);
        }
        function Ti(e) {
          null !== e.return && (Ii(e, 1), Ci(e, 1, 0));
        }
        function Pi(e) {
          for (; e === bi; )
            (bi = gi[--yi]), (gi[yi] = null), (ki = gi[--yi]), (gi[yi] = null);
          for (; e === Si; )
            (Si = wi[--xi]),
              (wi[xi] = null),
              (Ei = wi[--xi]),
              (wi[xi] = null),
              (_i = wi[--xi]),
              (wi[xi] = null);
        }
        var Oi = null,
          Ni = null,
          Ri = !1,
          Ai = null;
        function Di(e, t) {
          var n = Ol(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function Li(e, t) {
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
                ((e.stateNode = t), (Oi = e), (Ni = la(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Oi = e), (Ni = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Si ? { id: _i, overflow: Ei } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ol(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Oi = e),
                (Ni = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function Mi(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ji(e) {
          if (Ri) {
            var t = Ni;
            if (t) {
              var n = t;
              if (!Li(e, t)) {
                if (Mi(e)) throw Error(i(418));
                t = la(n.nextSibling);
                var r = Oi;
                t && Li(e, t)
                  ? Di(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (Ri = !1), (Oi = e));
              }
            } else {
              if (Mi(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (Ri = !1), (Oi = e);
            }
          }
        }
        function zi(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Oi = e;
        }
        function Fi(e) {
          if (e !== Oi) return !1;
          if (!Ri) return zi(e), (Ri = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = Ni))
          ) {
            if (Mi(e)) {
              for (e = Ni; e; ) e = la(e.nextSibling);
              throw Error(i(418));
            }
            for (; t; ) Di(e, t), (t = la(t.nextSibling));
          }
          if ((zi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ni = la(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ni = null;
            }
          } else Ni = Oi ? la(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ui() {
          (Ni = Oi = null), (Ri = !1);
        }
        function Bi(e) {
          null === Ai ? (Ai = [e]) : Ai.push(e);
        }
        function Hi(e, t, n) {
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
                    t === ci && (t = a.refs = {}),
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
        function Vi(e, t) {
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
        function Wi(e) {
          return (0, e._init)(e._payload);
        }
        function $i(e) {
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
            return ((e = Rl(e, t)).index = 0), (e.sibling = null), e;
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
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ml(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function l(e, t, n, r) {
            var i = n.type;
            return i === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === R &&
                    Wi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Hi(e, t, n)), (r.return = e), r)
              : (((r = Al(n.type, n.key, n.props, null, e.mode, r)).ref = Hi(
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
              ? (((t = jl(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Dl(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ml("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Al(t.type, t.key, t.props, null, e.mode, n)).ref = Hi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = jl(t, e.mode, n)).return = e), t;
                case R:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || L(t))
                return ((t = Dl(t, e.mode, n, null)).return = e), t;
              Vi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? l(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || L(n)) return null !== a ? null : f(e, t, n, r, null);
              Vi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return l(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || L(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Vi(t, r);
            }
            return null;
          }
          function v(a, i, s, u) {
            for (
              var l = null, c = null, f = i, v = (i = 0), m = null;
              null !== f && v < s.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(a, f, s[v], u);
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
            if (v === s.length) return n(a, f), Ri && Ii(a, v), l;
            if (null === f) {
              for (; v < s.length; v++)
                null !== (f = d(a, s[v], u)) &&
                  ((i = o(f, i, v)),
                  null === c ? (l = f) : (c.sibling = f),
                  (c = f));
              return Ri && Ii(a, v), l;
            }
            for (f = r(a, f); v < s.length; v++)
              null !== (m = h(f, a, v, s[v], u)) &&
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
              Ri && Ii(a, v),
              l
            );
          }
          function m(a, s, u, l) {
            var c = L(u);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (
              var f = (c = null), v = s, m = (s = 0), g = null, y = u.next();
              null !== v && !y.done;
              m++, y = u.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(a, v, y.value, l);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (s = o(b, s, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(a, v), Ri && Ii(a, m), c;
            if (null === v) {
              for (; !y.done; m++, y = u.next())
                null !== (y = d(a, y.value, l)) &&
                  ((s = o(y, s, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return Ri && Ii(a, m), c;
            }
            for (v = r(a, v); !y.done; m++, y = u.next())
              null !== (y = h(v, a, m, y.value, l)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (s = o(y, s, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              Ri && Ii(a, m),
              c
            );
          }
          return function e(r, i, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var l = o.key, c = i; null !== c; ) {
                      if (c.key === l) {
                        if ((l = o.type) === S) {
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
                            Wi(l) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = Hi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((i = Dl(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = i))
                      : (((u = Al(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Hi(r, i, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return s(r);
                case x:
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
                    ((i = jl(o, r.mode, u)).return = r), (r = i);
                  }
                  return s(r);
                case R:
                  return e(r, i, (c = o._init)(o._payload), u);
              }
              if (te(o)) return v(r, i, o, u);
              if (L(o)) return m(r, i, o, u);
              Vi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Ml(o, r.mode, u)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var Ki = $i(!0),
          qi = $i(!1),
          Gi = {},
          Qi = _a(Gi),
          Ji = _a(Gi),
          Yi = _a(Gi);
        function Xi(e) {
          if (e === Gi) throw Error(i(174));
          return e;
        }
        function Zi(e, t) {
          switch ((Ia(Yi, t), Ia(Ji, e), Ia(Qi, Gi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Qi), Ia(Qi, t);
        }
        function eo() {
          Ea(Qi), Ea(Ji), Ea(Yi);
        }
        function to(e) {
          Xi(Yi.current);
          var t = Xi(Qi.current),
            n = ue(t, e.type);
          t !== n && (Ia(Ji, e), Ia(Qi, n));
        }
        function no(e) {
          Ji.current === e && (Ea(Qi), Ea(Ji));
        }
        var ro = _a(0);
        function ao(e) {
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
        var io = [];
        function oo() {
          for (var e = 0; e < io.length; e++)
            io[e]._workInProgressVersionPrimary = null;
          io.length = 0;
        }
        var so = k.ReactCurrentDispatcher,
          uo = k.ReactCurrentBatchConfig,
          lo = 0,
          co = null,
          fo = null,
          po = null,
          ho = !1,
          vo = !1,
          mo = 0,
          go = 0;
        function yo() {
          throw Error(i(321));
        }
        function bo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function ko(e, t, n, r, a, o) {
          if (
            ((lo = o),
            (co = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (so.current = null === e || null === e.memoizedState ? rs : as),
            (e = n(r, a)),
            vo)
          ) {
            o = 0;
            do {
              if (((vo = !1), (mo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (po = fo = null),
                (t.updateQueue = null),
                (so.current = is),
                (e = n(r, a));
            } while (vo);
          }
          if (
            ((so.current = ns),
            (t = null !== fo && null !== fo.next),
            (lo = 0),
            (po = fo = co = null),
            (ho = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function wo() {
          var e = 0 !== mo;
          return (mo = 0), e;
        }
        function xo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === po ? (co.memoizedState = po = e) : (po = po.next = e), po
          );
        }
        function So() {
          if (null === fo) {
            var e = co.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = fo.next;
          var t = null === po ? co.memoizedState : po.next;
          if (null !== t) (po = t), (fo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (fo = e).memoizedState,
              baseState: fo.baseState,
              baseQueue: fo.baseQueue,
              queue: fo.queue,
              next: null,
            }),
              null === po ? (co.memoizedState = po = e) : (po = po.next = e);
          }
          return po;
        }
        function _o(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Eo(e) {
          var t = So(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = fo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var s = a.next;
              (a.next = o.next), (o.next = s);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (s = null),
              l = null,
              c = o;
            do {
              var f = c.lane;
              if ((lo & f) === f)
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
                null === l ? ((u = l = d), (s = r)) : (l = l.next = d),
                  (co.lanes |= f),
                  (Au |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === l ? (s = r) : (l.next = u),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (co.lanes |= o), (Au |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Io(e) {
          var t = So(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== a);
            sr(o, t.memoizedState) || (ws = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Co() {}
        function To(e, t) {
          var n = co,
            r = So(),
            a = t(),
            o = !sr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (ws = !0)),
            (r = r.queue),
            Fo(No.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== po && 1 & po.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Do(9, Oo.bind(null, n, r, a, t), void 0, null),
              null === Iu)
            )
              throw Error(i(349));
            0 !== (30 & lo) || Po(n, t, a);
          }
          return a;
        }
        function Po(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = co.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (co.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Oo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ro(t) && Zu(e, 1, -1);
        }
        function No(e, t, n) {
          return n(function () {
            Ro(t) && Zu(e, 1, -1);
          });
        }
        function Ro(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ao(e) {
          var t = xo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: _o,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Yo.bind(null, co, e)),
            [t.memoizedState, e]
          );
        }
        function Do(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = co.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (co.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Lo() {
          return So().memoizedState;
        }
        function Mo(e, t, n, r) {
          var a = xo();
          (co.flags |= e),
            (a.memoizedState = Do(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function jo(e, t, n, r) {
          var a = So();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== fo) {
            var o = fo.memoizedState;
            if (((i = o.destroy), null !== r && bo(r, o.deps)))
              return void (a.memoizedState = Do(t, n, i, r));
          }
          (co.flags |= e), (a.memoizedState = Do(1 | t, n, i, r));
        }
        function zo(e, t) {
          return Mo(8390656, 8, e, t);
        }
        function Fo(e, t) {
          return jo(2048, 8, e, t);
        }
        function Uo(e, t) {
          return jo(4, 2, e, t);
        }
        function Bo(e, t) {
          return jo(4, 4, e, t);
        }
        function Ho(e, t) {
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
        function Vo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            jo(4, 4, Ho.bind(null, t, e), n)
          );
        }
        function Wo() {}
        function $o(e, t) {
          var n = So();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && bo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ko(e, t) {
          var n = So();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && bo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function qo(e, t, n) {
          return 0 === (21 & lo)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = vt()), (co.lanes |= n), (Au |= n), (e.baseState = !0)),
              t);
        }
        function Go(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = uo.transition;
          uo.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (uo.transition = r);
          }
        }
        function Qo() {
          return So().memoizedState;
        }
        function Jo(e, t, n) {
          var r = Xu(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Xo(e)
              ? Zo(t, n)
              : (es(e, t, n),
                null !== (e = Zu(e, r, (n = Yu()))) && ts(e, t, r));
        }
        function Yo(e, t, n) {
          var r = Xu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Xo(e)) Zo(t, a);
          else {
            es(e, t, a);
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, o)))
                  return;
              } catch (u) {}
            null !== (e = Zu(e, r, (n = Yu()))) && ts(e, t, r);
          }
        }
        function Xo(e) {
          var t = e.alternate;
          return e === co || (null !== t && t === co);
        }
        function Zo(e, t) {
          vo = ho = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function es(e, t, n) {
          tl(e)
            ? (null === (e = t.interleaved)
                ? ((n.next = n), null === ei ? (ei = [t]) : ei.push(t))
                : ((n.next = e.next), (e.next = n)),
              (t.interleaved = n))
            : (null === (e = t.pending)
                ? (n.next = n)
                : ((n.next = e.next), (e.next = n)),
              (t.pending = n));
        }
        function ts(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ns = {
            readContext: Za,
            useCallback: yo,
            useContext: yo,
            useEffect: yo,
            useImperativeHandle: yo,
            useInsertionEffect: yo,
            useLayoutEffect: yo,
            useMemo: yo,
            useReducer: yo,
            useRef: yo,
            useState: yo,
            useDebugValue: yo,
            useDeferredValue: yo,
            useTransition: yo,
            useMutableSource: yo,
            useSyncExternalStore: yo,
            useId: yo,
            unstable_isNewReconciler: !1,
          },
          rs = {
            readContext: Za,
            useCallback: function (e, t) {
              return (xo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Za,
            useEffect: zo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Mo(4194308, 4, Ho.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Mo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Mo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = xo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = xo();
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
                (e = e.dispatch = Jo.bind(null, co, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (xo().memoizedState = e);
            },
            useState: Ao,
            useDebugValue: Wo,
            useDeferredValue: function (e) {
              return (xo().memoizedState = e);
            },
            useTransition: function () {
              var e = Ao(!1),
                t = e[0];
              return (
                (e = Go.bind(null, e[1])), (xo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = co,
                a = xo();
              if (Ri) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Iu)) throw Error(i(349));
                0 !== (30 & lo) || Po(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                zo(No.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Do(9, Oo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = xo(),
                t = Iu.identifierPrefix;
              if (Ri) {
                var n = Ei;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (_i & ~(1 << (32 - ot(_i) - 1))).toString(32) + n)),
                  0 < (n = mo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = go++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          as = {
            readContext: Za,
            useCallback: $o,
            useContext: Za,
            useEffect: Fo,
            useImperativeHandle: Vo,
            useInsertionEffect: Uo,
            useLayoutEffect: Bo,
            useMemo: Ko,
            useReducer: Eo,
            useRef: Lo,
            useState: function () {
              return Eo(_o);
            },
            useDebugValue: Wo,
            useDeferredValue: function (e) {
              return qo(So(), fo.memoizedState, e);
            },
            useTransition: function () {
              return [Eo(_o)[0], So().memoizedState];
            },
            useMutableSource: Co,
            useSyncExternalStore: To,
            useId: Qo,
            unstable_isNewReconciler: !1,
          },
          is = {
            readContext: Za,
            useCallback: $o,
            useContext: Za,
            useEffect: Fo,
            useImperativeHandle: Vo,
            useInsertionEffect: Uo,
            useLayoutEffect: Bo,
            useMemo: Ko,
            useReducer: Io,
            useRef: Lo,
            useState: function () {
              return Io(_o);
            },
            useDebugValue: Wo,
            useDeferredValue: function (e) {
              var t = So();
              return null === fo
                ? (t.memoizedState = e)
                : qo(t, fo.memoizedState, e);
            },
            useTransition: function () {
              return [Io(_o)[0], So().memoizedState];
            },
            useMutableSource: Co,
            useSyncExternalStore: To,
            useId: Qo,
            unstable_isNewReconciler: !1,
          };
        function os(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function ss(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var us,
          ls,
          cs,
          fs = "function" === typeof WeakMap ? WeakMap : Map;
        function ds(e, t, n) {
          ((n = ai(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Bu || ((Bu = !0), (Hu = r)), ss(0, t);
            }),
            n
          );
        }
        function ps(e, t, n) {
          (n = ai(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ss(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                ss(0, t),
                  "function" !== typeof r &&
                    (null === Vu ? (Vu = new Set([this])) : Vu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function hs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = _l.bind(null, e, t, n)), t.then(e, e));
        }
        function vs(e) {
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
        function ms(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = ai(-1, 1)).tag = 2), ii(n, t))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        function gs(e, t) {
          if (!Ri)
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
        function ys(e) {
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
        function bs(e, t, n) {
          var r = t.pendingProps;
          switch ((Pi(t), t.tag)) {
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
              return ys(t), null;
            case 1:
            case 17:
              return Ra(t.type) && Aa(), ys(t), null;
            case 3:
              return (
                (r = t.stateNode),
                eo(),
                Ea(Pa),
                Ea(Ta),
                oo(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Ai && (il(Ai), (Ai = null)))),
                ys(t),
                null
              );
            case 5:
              no(t);
              var a = Xi(Yi.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                ls(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return ys(t), null;
                }
                if (((e = Xi(Qi.current)), Fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Lr.length; a++) Fr(Lr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      J(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Fr("invalid", r);
                  }
                  for (var u in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var l = o[u];
                      "children" === u
                        ? "string" === typeof l
                          ? r.textContent !== l &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, l, e),
                            (a = ["children", l]))
                          : "number" === typeof l &&
                            r.textContent !== "" + l &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, l, e),
                            (a = ["children", "" + l]))
                        : s.hasOwnProperty(u) &&
                          null != l &&
                          "onScroll" === u &&
                          Fr("scroll", r);
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
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    us(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Lr.length; a++) Fr(Lr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        J(e, r), (a = Q(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = j({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
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
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Fr("scroll", e)
                              : null != c && b(e, o, c, u));
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
                        "function" === typeof a.onClick && (e.onclick = Zr);
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
              return ys(t), null;
            case 6:
              if (e && null != t.stateNode) cs(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = Xi(Yi.current)), Xi(Qi.current), Fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = Oi))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return ys(t), null;
            case 13:
              if (
                (Ea(ro),
                (r = t.memoizedState),
                Ri &&
                  null !== Ni &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags))
              ) {
                for (r = Ni; r; ) r = la(r.nextSibling);
                return Ui(), (t.flags |= 98560), t;
              }
              if (null !== r && null !== r.dehydrated) {
                if (((r = Fi(t)), null === e)) {
                  if (!r) throw Error(i(318));
                  if (
                    !(r = null !== (r = t.memoizedState) ? r.dehydrated : null)
                  )
                    throw Error(i(317));
                  r[da] = t;
                } else
                  Ui(),
                    0 === (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                return ys(t), null;
              }
              return (
                null !== Ai && (il(Ai), (Ai = null)),
                0 !== (128 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? Fi(t) : (n = null !== e.memoizedState),
                    r !== n &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 !== (1 & t.mode) &&
                        (null === e || 0 !== (1 & ro.current)
                          ? 0 === Nu && (Nu = 3)
                          : hl())),
                    null !== t.updateQueue && (t.flags |= 4),
                    ys(t),
                    null)
              );
            case 4:
              return (
                eo(), null === e && Hr(t.stateNode.containerInfo), ys(t), null
              );
            case 10:
              return Ja(t.type._context), ys(t), null;
            case 19:
              if ((Ea(ro), null === (o = t.memoizedState))) return ys(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) gs(o, !1);
                else {
                  if (0 !== Nu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = ao(e))) {
                        for (
                          t.flags |= 128,
                            gs(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ia(ro, (1 & ro.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ye() > Fu &&
                    ((t.flags |= 128),
                    (r = !0),
                    gs(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ao(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      gs(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !Ri)
                    )
                      return ys(t), null;
                  } else
                    2 * Ye() - o.renderingStartTime > Fu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      gs(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = ro.current),
                  Ia(ro, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ys(t), null);
            case 22:
            case 23:
              return (
                cl(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Pu) &&
                    (ys(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ys(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        (us = function (e, t) {
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
          (ls = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Xi(Qi.current);
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
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (i in u)
                      u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var l = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && l !== u && (null != l || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (i in u)
                        !u.hasOwnProperty(i) ||
                          (l && l.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in l)
                        l.hasOwnProperty(i) &&
                          u[i] !== l[i] &&
                          (n || (n = {}), (n[i] = l[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = l);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((l = l ? l.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != l && u !== l && (o = o || []).push(c, l))
                      : "children" === c
                      ? ("string" !== typeof l && "number" !== typeof l) ||
                        (o = o || []).push(c, "" + l)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != l && "onScroll" === c && Fr("scroll", e),
                            o || u === l || (o = []))
                          : (o = o || []).push(c, l));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (cs = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var ks = k.ReactCurrentOwner,
          ws = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? qi(t, null, n, r) : Ki(t, e.child, n, r);
        }
        function Ss(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Xa(t, a),
            (r = ko(e, t, n, r, i, a)),
            (n = wo()),
            null === e || ws
              ? (Ri && n && Ti(t), (t.flags |= 1), xs(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ws(e, t, a))
          );
        }
        function _s(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Nl(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Al(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Es(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Ws(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Rl(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Es(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (ur(i, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ws(e, t, a);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Ts(e, t, n, r, a);
        }
        function Is(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ia(Ou, Pu),
                (Pu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ia(Ou, Pu),
                  (Pu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Ia(Ou, Pu),
                (Pu |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ia(Ou, Pu),
              (Pu |= r);
          return xs(e, t, a, n), t.child;
        }
        function Cs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ts(e, t, n, r, a) {
          var i = Ra(n) ? Oa : Ta.current;
          return (
            (i = Na(t, i)),
            Xa(t, a),
            (n = ko(e, t, n, r, i, a)),
            (r = wo()),
            null === e || ws
              ? (Ri && r && Ti(t), (t.flags |= 1), xs(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ws(e, t, a))
          );
        }
        function Ps(e, t, n, r, a) {
          if (Ra(n)) {
            var i = !0;
            Ma(t);
          } else i = !1;
          if ((Xa(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              hi(t, n, r),
              mi(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var u = o.context,
              l = n.contextType;
            "object" === typeof l && null !== l
              ? (l = Za(l))
              : (l = Na(t, (l = Ra(n) ? Oa : Ta.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || u !== l) && vi(t, o, r, l)),
              (ti = !1);
            var d = t.memoizedState;
            (o.state = d),
              ui(t, r, o, a),
              (u = t.memoizedState),
              s !== r || d !== u || Pa.current || ti
                ? ("function" === typeof c &&
                    (fi(t, n, c, r), (u = t.memoizedState)),
                  (s = ti || pi(t, n, s, r, d, u, l))
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
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = l),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              ri(e, t),
              (s = t.memoizedProps),
              (l = t.type === t.elementType ? s : Wa(t.type, s)),
              (o.props = l),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Za(u))
                : (u = Na(t, (u = Ra(n) ? Oa : Ta.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== f || d !== u) && vi(t, o, r, u)),
              (ti = !1),
              (d = t.memoizedState),
              (o.state = d),
              ui(t, r, o, a);
            var h = t.memoizedState;
            s !== f || d !== h || Pa.current || ti
              ? ("function" === typeof p &&
                  (fi(t, n, p, r), (h = t.memoizedState)),
                (l = ti || pi(t, n, l, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = l))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Os(e, t, n, r, i, a);
        }
        function Os(e, t, n, r, a, i) {
          Cs(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && ja(t, n, !1), Ws(e, t, i);
          (r = t.stateNode), (ks.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ki(t, e.child, null, i)),
                (t.child = Ki(t, null, s, i)))
              : xs(e, t, s, i),
            (t.memoizedState = r.state),
            a && ja(t, n, !0),
            t.child
          );
        }
        function Ns(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            Zi(e, t.containerInfo);
        }
        function Rs(e, t, n, r, a) {
          return Ui(), Bi(a), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var As = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ds(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ls(e, t) {
          return {
            baseLanes: e.baseLanes | t,
            cachePool: null,
            transitions: e.transitions,
          };
        }
        function Ms(e, t, n) {
          var r,
            a = t.pendingProps,
            o = ro.current,
            s = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ia(ro, 1 & o),
            null === e)
          )
            return (
              ji(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((o = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (o = { mode: "hidden", children: o }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = o))
                        : (s = Ll(o, a, 0, null)),
                      (e = Dl(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Ds(n)),
                      (t.memoizedState = As),
                      e)
                    : js(t, o))
            );
          if (null !== (o = e.memoizedState)) {
            if (null !== (r = o.dehydrated)) {
              if (u)
                return 256 & t.flags
                  ? ((t.flags &= -257), Us(e, t, n, Error(i(422))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = a.fallback),
                    (o = t.mode),
                    (a = Ll(
                      { mode: "visible", children: a.children },
                      o,
                      0,
                      null
                    )),
                    ((s = Dl(s, o, n, null)).flags |= 2),
                    (a.return = t),
                    (s.return = t),
                    (a.sibling = s),
                    (t.child = a),
                    0 !== (1 & t.mode) && Ki(t, e.child, null, n),
                    (t.child.memoizedState = Ds(n)),
                    (t.memoizedState = As),
                    s);
              if (0 === (1 & t.mode)) t = Us(e, t, n, null);
              else if ("$!" === r.data) t = Us(e, t, n, Error(i(419)));
              else if (((a = 0 !== (n & e.childLanes)), ws || a)) {
                if (null !== (a = Iu)) {
                  switch (n & -n) {
                    case 4:
                      s = 2;
                      break;
                    case 16:
                      s = 8;
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
                      s = 32;
                      break;
                    case 536870912:
                      s = 268435456;
                      break;
                    default:
                      s = 0;
                  }
                  0 !== (a = 0 !== (s & (a.suspendedLanes | n)) ? 0 : s) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Zu(e, a, -1));
                }
                hl(), (t = Us(e, t, n, Error(i(421))));
              } else
                "$?" === r.data
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = Il.bind(null, e)),
                    (r._reactRetry = t),
                    (t = null))
                  : ((n = o.treeContext),
                    (Ni = la(r.nextSibling)),
                    (Oi = t),
                    (Ri = !0),
                    (Ai = null),
                    null !== n &&
                      ((wi[xi++] = _i),
                      (wi[xi++] = Ei),
                      (wi[xi++] = Si),
                      (_i = n.id),
                      (Ei = n.overflow),
                      (Si = t)),
                    ((t = js(t, t.pendingProps.children)).flags |= 4096));
              return t;
            }
            return s
              ? ((a = Fs(e, t, a.children, a.fallback, n)),
                (s = t.child),
                (o = e.child.memoizedState),
                (s.memoizedState = null === o ? Ds(n) : Ls(o, n)),
                (s.childLanes = e.childLanes & ~n),
                (t.memoizedState = As),
                a)
              : ((n = zs(e, t, a.children, n)), (t.memoizedState = null), n);
          }
          return s
            ? ((a = Fs(e, t, a.children, a.fallback, n)),
              (s = t.child),
              (o = e.child.memoizedState),
              (s.memoizedState = null === o ? Ds(n) : Ls(o, n)),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = As),
              a)
            : ((n = zs(e, t, a.children, n)), (t.memoizedState = null), n);
        }
        function js(e, t) {
          return (
            ((t = Ll(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function zs(e, t, n, r) {
          var a = e.child;
          return (
            (e = a.sibling),
            (n = Rl(a, { mode: "visible", children: n })),
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
        function Fs(e, t, n, r, a) {
          var i = t.mode,
            o = (e = e.child).sibling,
            s = { mode: "hidden", children: n };
          return (
            0 === (1 & i) && t.child !== e
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = s),
                (t.deletions = null))
              : ((n = Rl(e, s)).subtreeFlags = 14680064 & e.subtreeFlags),
            null !== o ? (r = Rl(o, r)) : ((r = Dl(r, i, a, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function Us(e, t, n, r) {
          return (
            null !== r && Bi(r),
            Ki(t, e.child, null, n),
            ((e = js(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ya(e.return, t, n);
        }
        function Hs(e, t, n, r, a) {
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
        function Vs(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = ro.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
                else if (19 === e.tag) Bs(e, n, t);
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
          if ((Ia(ro, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ao(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Hs(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ao(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Hs(t, !0, n, null, i);
                break;
              case "together":
                Hs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Au |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Rl((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Rl(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $s(e, t) {
          switch ((Pi(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && Aa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                eo(),
                Ea(Pa),
                Ea(Ta),
                oo(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return no(t), null;
            case 13:
              if (
                (Ea(ro),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                Ui();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(ro), null;
            case 4:
              return eo(), null;
            case 10:
              return Ja(t.type._context), null;
            case 22:
            case 23:
              return cl(), null;
            default:
              return null;
          }
        }
        var Ks = !1,
          qs = !1,
          Gs = "function" === typeof WeakSet ? WeakSet : Set,
          Qs = null;
        function Js(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sl(e, t, r);
              }
            else n.current = null;
        }
        function Ys(e, t, n) {
          try {
            n();
          } catch (r) {
            Sl(e, t, r);
          }
        }
        var Xs = !1;
        function Zs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && Ys(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function eu(e, t) {
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
        function tu(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function nu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), nu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ru(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function au(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ru(e.return)) return null;
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
        function iu(e, t, n) {
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
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (iu(e, t, n), e = e.sibling; null !== e; )
              iu(e, t, n), (e = e.sibling);
        }
        function ou(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ou(e, t, n), e = e.sibling; null !== e; )
              ou(e, t, n), (e = e.sibling);
        }
        var su = null,
          uu = !1;
        function lu(e, t, n) {
          for (n = n.child; null !== n; ) cu(e, t, n), (n = n.sibling);
        }
        function cu(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              qs || Js(n, t);
            case 6:
              var r = su,
                a = uu;
              (su = null),
                lu(e, t, n),
                (uu = a),
                null !== (su = r) &&
                  (uu
                    ? ((e = su),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : su.removeChild(n.stateNode));
              break;
            case 18:
              null !== su &&
                (uu
                  ? ((e = su),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Ht(e))
                  : ua(su, n.stateNode));
              break;
            case 4:
              (r = su),
                (a = uu),
                (su = n.stateNode.containerInfo),
                (uu = !0),
                lu(e, t, n),
                (su = r),
                (uu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !qs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      Ys(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              lu(e, t, n);
              break;
            case 1:
              if (
                !qs &&
                (Js(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Sl(n, t, s);
                }
              lu(e, t, n);
              break;
            case 21:
              lu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((qs = (r = qs) || null !== n.memoizedState),
                  lu(e, t, n),
                  (qs = r))
                : lu(e, t, n);
              break;
            default:
              lu(e, t, n);
          }
        }
        function fu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gs()),
              t.forEach(function (t) {
                var r = Cl.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function du(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  s = t,
                  u = s;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (su = u.stateNode), (uu = !1);
                      break e;
                    case 3:
                    case 4:
                      (su = u.stateNode.containerInfo), (uu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === su) throw Error(i(160));
                cu(o, s, a), (su = null), (uu = !1);
                var l = a.alternate;
                null !== l && (l.return = null), (a.return = null);
              } catch (c) {
                Sl(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) pu(t, e), (t = t.sibling);
        }
        function pu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((du(t, e), hu(e), 4 & r)) {
                try {
                  Zs(3, e, e.return), eu(3, e);
                } catch (v) {
                  Sl(e, e.return, v);
                }
                try {
                  Zs(5, e, e.return);
                } catch (v) {
                  Sl(e, e.return, v);
                }
              }
              break;
            case 1:
              du(t, e), hu(e), 512 & r && null !== n && Js(n, n.return);
              break;
            case 5:
              if (
                (du(t, e),
                hu(e),
                512 & r && null !== n && Js(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  Sl(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  l = e.updateQueue;
                if (((e.updateQueue = null), null !== l))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      Y(a, o),
                      be(u, s);
                    var c = be(u, o);
                    for (s = 0; s < l.length; s += 2) {
                      var f = l[s],
                        d = l[s + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        X(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (v) {
                    Sl(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((du(t, e), hu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (c = e.stateNode), (f = e.memoizedProps);
                try {
                  c.nodeValue = f;
                } catch (v) {
                  Sl(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (du(t, e),
                hu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (v) {
                  Sl(e, e.return, v);
                }
              break;
            case 4:
            default:
              du(t, e), hu(e);
              break;
            case 13:
              du(t, e),
                hu(e),
                8192 & (c = e.child).flags &&
                  null !== c.memoizedState &&
                  (null === c.alternate ||
                    null === c.alternate.memoizedState) &&
                  (zu = Ye()),
                4 & r && fu(e);
              break;
            case 22:
              if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((qs = (f = qs) || c), du(t, e), (qs = f))
                  : du(t, e),
                hu(e),
                8192 & r)
              ) {
                f = null !== e.memoizedState;
                e: for (d = null, p = e; ; ) {
                  if (5 === p.tag) {
                    if (null === d) {
                      d = p;
                      try {
                        (a = p.stateNode),
                          f
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = p.stateNode),
                              (s =
                                void 0 !== (l = p.memoizedProps.style) &&
                                null !== l &&
                                l.hasOwnProperty("display")
                                  ? l.display
                                  : null),
                              (u.style.display = ve("display", s)));
                      } catch (v) {
                        Sl(e, e.return, v);
                      }
                    }
                  } else if (6 === p.tag) {
                    if (null === d)
                      try {
                        p.stateNode.nodeValue = f ? "" : p.memoizedProps;
                      } catch (v) {
                        Sl(e, e.return, v);
                      }
                  } else if (
                    ((22 !== p.tag && 23 !== p.tag) ||
                      null === p.memoizedState ||
                      p === e) &&
                    null !== p.child
                  ) {
                    (p.child.return = p), (p = p.child);
                    continue;
                  }
                  if (p === e) break e;
                  for (; null === p.sibling; ) {
                    if (null === p.return || p.return === e) break e;
                    d === p && (d = null), (p = p.return);
                  }
                  d === p && (d = null),
                    (p.sibling.return = p.return),
                    (p = p.sibling);
                }
                if (f && !c && 0 !== (1 & e.mode))
                  for (Qs = e, e = e.child; null !== e; ) {
                    for (c = Qs = e; null !== Qs; ) {
                      switch (((d = (f = Qs).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          Zs(4, f, f.return);
                          break;
                        case 1:
                          if (
                            (Js(f, f.return),
                            "function" ===
                              typeof (o = f.stateNode).componentWillUnmount)
                          ) {
                            (p = f), (h = f.return);
                            try {
                              (a = p),
                                (o.props = a.memoizedProps),
                                (o.state = a.memoizedState),
                                o.componentWillUnmount();
                            } catch (v) {
                              Sl(p, h, v);
                            }
                          }
                          break;
                        case 5:
                          Js(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            yu(c);
                            continue;
                          }
                      }
                      null !== d ? ((d.return = f), (Qs = d)) : yu(c);
                    }
                    e = e.sibling;
                  }
              }
              break;
            case 19:
              du(t, e), hu(e), 4 & r && fu(e);
            case 21:
          }
        }
        function hu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ru(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    ou(e, au(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  iu(e, au(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Sl(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vu(e, t, n) {
          (Qs = e), mu(e, t, n);
        }
        function mu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Qs; ) {
            var a = Qs,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Ks;
              if (!o) {
                var s = a.alternate,
                  u = (null !== s && null !== s.memoizedState) || qs;
                s = Ks;
                var l = qs;
                if (((Ks = o), (qs = u) && !l))
                  for (Qs = a; null !== Qs; )
                    (u = (o = Qs).child),
                      22 === o.tag && null !== o.memoizedState
                        ? bu(a)
                        : null !== u
                        ? ((u.return = o), (Qs = u))
                        : bu(a);
                for (; null !== i; ) (Qs = i), mu(i, t, n), (i = i.sibling);
                (Qs = a), (Ks = s), (qs = l);
              }
              gu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Qs = i))
                : gu(e);
          }
        }
        function gu(e) {
          for (; null !== Qs; ) {
            var t = Qs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs || eu(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !qs)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : Wa(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && li(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        li(t, s, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
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
                            null !== d && Ht(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                qs || (512 & t.flags && tu(t));
              } catch (p) {
                Sl(t, t.return, p);
              }
            }
            if (t === e) {
              Qs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Qs = n);
              break;
            }
            Qs = t.return;
          }
        }
        function yu(e) {
          for (; null !== Qs; ) {
            var t = Qs;
            if (t === e) {
              Qs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Qs = n);
              break;
            }
            Qs = t.return;
          }
        }
        function bu(e) {
          for (; null !== Qs; ) {
            var t = Qs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    eu(4, t);
                  } catch (u) {
                    Sl(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Sl(t, a, u);
                    }
                  }
                  var i = t.return;
                  try {
                    tu(t);
                  } catch (u) {
                    Sl(t, i, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    tu(t);
                  } catch (u) {
                    Sl(t, o, u);
                  }
              }
            } catch (u) {
              Sl(t, t.return, u);
            }
            if (t === e) {
              Qs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Qs = s);
              break;
            }
            Qs = t.return;
          }
        }
        var ku,
          wu = Math.ceil,
          xu = k.ReactCurrentDispatcher,
          Su = k.ReactCurrentOwner,
          _u = k.ReactCurrentBatchConfig,
          Eu = 0,
          Iu = null,
          Cu = null,
          Tu = 0,
          Pu = 0,
          Ou = _a(0),
          Nu = 0,
          Ru = null,
          Au = 0,
          Du = 0,
          Lu = 0,
          Mu = null,
          ju = null,
          zu = 0,
          Fu = 1 / 0,
          Uu = null,
          Bu = !1,
          Hu = null,
          Vu = null,
          Wu = !1,
          $u = null,
          Ku = 0,
          qu = 0,
          Gu = null,
          Qu = -1,
          Ju = 0;
        function Yu() {
          return 0 !== (6 & Eu) ? Ye() : -1 !== Qu ? Qu : (Qu = Ye());
        }
        function Xu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Eu) && 0 !== Tu
            ? Tu & -Tu
            : null !== Va.transition
            ? (0 === Ju && (Ju = vt()), Ju)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function Zu(e, t, n) {
          if (50 < qu) throw ((qu = 0), (Gu = null), Error(i(185)));
          var r = el(e, t);
          return null === r
            ? null
            : (gt(r, t, n),
              (0 !== (2 & Eu) && r === Iu) ||
                (r === Iu &&
                  (0 === (2 & Eu) && (Du |= t), 4 === Nu && ol(r, Tu)),
                nl(r, n),
                1 === t &&
                  0 === Eu &&
                  0 === (1 & e.mode) &&
                  ((Fu = Ye() + 500), Fa && Ha())),
              r);
        }
        function el(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function tl(e) {
          return (
            (null !== Iu || null !== ei) && 0 !== (1 & e.mode) && 0 === (2 & Eu)
          );
        }
        function nl(e, t) {
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
                s = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = pt(s, t))
                : u <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = dt(e, e === Iu ? Tu : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ba(e);
                  })(sl.bind(null, e))
                : Ba(sl.bind(null, e)),
                oa(function () {
                  0 === Eu && Ha();
                }),
                (n = null);
            else {
              switch (kt(r)) {
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
              n = Tl(n, rl.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function rl(e, t) {
          if (((Qu = -1), (Ju = 0), 0 !== (6 & Eu))) throw Error(i(327));
          var n = e.callbackNode;
          if (wl() && e.callbackNode !== n) return null;
          var r = dt(e, e === Iu ? Tu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vl(e, r);
          else {
            t = r;
            var a = Eu;
            Eu |= 2;
            var o = pl();
            for (
              (Iu === e && Tu === t) ||
              ((Uu = null), (Fu = Ye() + 500), fl(e, t));
              ;

            )
              try {
                gl();
                break;
              } catch (u) {
                dl(e, u);
              }
            Qa(),
              (xu.current = o),
              (Eu = a),
              null !== Cu ? (t = 0) : ((Iu = null), (Tu = 0), (t = Nu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = al(e, a))),
              1 === t)
            )
              throw ((n = Ru), fl(e, 0), ol(e, r), nl(e, Ye()), n);
            if (6 === t) ol(e, r);
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
                              if (!sr(i(), a)) return !1;
                            } catch (s) {
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
                  (2 === (t = vl(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = al(e, o))),
                  1 === t))
              )
                throw ((n = Ru), fl(e, 0), ol(e, r), nl(e, Ye()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  kl(e, ju, Uu);
                  break;
                case 3:
                  if (
                    (ol(e, r),
                    (130023424 & r) === r && 10 < (t = zu + 500 - Ye()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      Yu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(kl.bind(null, e, ju, Uu), t);
                    break;
                  }
                  kl(e, ju, Uu);
                  break;
                case 4:
                  if ((ol(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > a && (a = s), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
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
                          : 1960 * wu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(kl.bind(null, e, ju, Uu), r);
                    break;
                  }
                  kl(e, ju, Uu);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return nl(e, Ye()), e.callbackNode === n ? rl.bind(null, e) : null;
        }
        function al(e, t) {
          var n = Mu;
          return (
            e.current.memoizedState.isDehydrated && (fl(e, t).flags |= 256),
            2 !== (e = vl(e, t)) && ((t = ju), (ju = n), null !== t && il(t)),
            e
          );
        }
        function il(e) {
          null === ju ? (ju = e) : ju.push.apply(ju, e);
        }
        function ol(e, t) {
          for (
            t &= ~Lu,
              t &= ~Du,
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
        function sl(e) {
          if (0 !== (6 & Eu)) throw Error(i(327));
          wl();
          var t = dt(e, 0);
          if (0 === (1 & t)) return nl(e, Ye()), null;
          var n = vl(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = al(e, r)));
          }
          if (1 === n) throw ((n = Ru), fl(e, 0), ol(e, t), nl(e, Ye()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            kl(e, ju, Uu),
            nl(e, Ye()),
            null
          );
        }
        function ul(e, t) {
          var n = Eu;
          Eu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Eu = n) && ((Fu = Ye() + 500), Fa && Ha());
          }
        }
        function ll(e) {
          null !== $u && 0 === $u.tag && 0 === (6 & Eu) && wl();
          var t = Eu;
          Eu |= 1;
          var n = _u.transition,
            r = bt;
          try {
            if (((_u.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (_u.transition = n), 0 === (6 & (Eu = t)) && Ha();
          }
        }
        function cl() {
          (Pu = Ou.current), Ea(Ou);
        }
        function fl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Cu))
            for (n = Cu.return; null !== n; ) {
              var r = n;
              switch ((Pi(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Aa();
                  break;
                case 3:
                  eo(), Ea(Pa), Ea(Ta), oo();
                  break;
                case 5:
                  no(r);
                  break;
                case 4:
                  eo();
                  break;
                case 13:
                case 19:
                  Ea(ro);
                  break;
                case 10:
                  Ja(r.type._context);
                  break;
                case 22:
                case 23:
                  cl();
              }
              n = n.return;
            }
          if (
            ((Iu = e),
            (Cu = e = Rl(e.current, null)),
            (Tu = Pu = t),
            (Nu = 0),
            (Ru = null),
            (Lu = Du = Au = 0),
            (ju = Mu = null),
            null !== ei)
          ) {
            for (t = 0; t < ei.length; t++)
              if (null !== (r = (n = ei[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            ei = null;
          }
          return e;
        }
        function dl(e, t) {
          for (;;) {
            var n = Cu;
            try {
              if ((Qa(), (so.current = ns), ho)) {
                for (var r = co.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ho = !1;
              }
              if (
                ((lo = 0),
                (po = fo = co = null),
                (vo = !1),
                (mo = 0),
                (Su.current = null),
                null === n || null === n.return)
              ) {
                (Nu = 1), (Ru = t), (Cu = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  u = n,
                  l = t;
                if (
                  ((t = Tu),
                  (u.flags |= 32768),
                  null !== l &&
                    "object" === typeof l &&
                    "function" === typeof l.then)
                ) {
                  var c = l,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = vs(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      ms(h, s, u, 0, t),
                      1 & h.mode && hs(o, c, t),
                      (l = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(l), (t.updateQueue = m);
                    } else v.add(l);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hs(o, c, t), hl();
                    break e;
                  }
                  l = Error(i(426));
                } else if (Ri && 1 & u.mode) {
                  var g = vs(s);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      ms(g, s, u, 0, t),
                      Bi(l);
                    break e;
                  }
                }
                (o = l),
                  4 !== Nu && (Nu = 2),
                  null === Mu ? (Mu = [o]) : Mu.push(o),
                  (l = os(l, u)),
                  (u = s);
                do {
                  switch (u.tag) {
                    case 3:
                      (u.flags |= 65536),
                        (t &= -t),
                        (u.lanes |= t),
                        si(u, ds(0, l, t));
                      break e;
                    case 1:
                      o = l;
                      var y = u.type,
                        b = u.stateNode;
                      if (
                        0 === (128 & u.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Vu || !Vu.has(b))))
                      ) {
                        (u.flags |= 65536),
                          (t &= -t),
                          (u.lanes |= t),
                          si(u, ps(u, o, t));
                        break e;
                      }
                  }
                  u = u.return;
                } while (null !== u);
              }
              bl(n);
            } catch (k) {
              (t = k), Cu === n && null !== n && (Cu = n = n.return);
              continue;
            }
            break;
          }
        }
        function pl() {
          var e = xu.current;
          return (xu.current = ns), null === e ? ns : e;
        }
        function hl() {
          (0 !== Nu && 3 !== Nu && 2 !== Nu) || (Nu = 4),
            null === Iu ||
              (0 === (268435455 & Au) && 0 === (268435455 & Du)) ||
              ol(Iu, Tu);
        }
        function vl(e, t) {
          var n = Eu;
          Eu |= 2;
          var r = pl();
          for ((Iu === e && Tu === t) || ((Uu = null), fl(e, t)); ; )
            try {
              ml();
              break;
            } catch (a) {
              dl(e, a);
            }
          if ((Qa(), (Eu = n), (xu.current = r), null !== Cu))
            throw Error(i(261));
          return (Iu = null), (Tu = 0), Nu;
        }
        function ml() {
          for (; null !== Cu; ) yl(Cu);
        }
        function gl() {
          for (; null !== Cu && !Qe(); ) yl(Cu);
        }
        function yl(e) {
          var t = ku(e.alternate, e, Pu);
          (e.memoizedProps = e.pendingProps),
            null === t ? bl(e) : (Cu = t),
            (Su.current = null);
        }
        function bl(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = bs(n, t, Pu))) return void (Cu = n);
            } else {
              if (null !== (n = $s(n, t)))
                return (n.flags &= 32767), void (Cu = n);
              if (null === e) return (Nu = 6), void (Cu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Cu = t);
            Cu = t = e;
          } while (null !== t);
          0 === Nu && (Nu = 5);
        }
        function kl(e, t, n) {
          var r = bt,
            a = _u.transition;
          try {
            (_u.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  wl();
                } while (null !== $u);
                if (0 !== (6 & Eu)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
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
                  e === Iu && ((Cu = Iu = null), (Tu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Wu ||
                    ((Wu = !0),
                    Tl(tt, function () {
                      return wl(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = _u.transition), (_u.transition = null);
                  var s = bt;
                  bt = 1;
                  var u = Eu;
                  (Eu |= 4),
                    (Su.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = dr())))) {
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
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                u = -1,
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
                                    (u = s + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (l = s + r),
                                    3 === d.nodeType &&
                                      (s += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = s),
                                    p === o && ++f === r && (l = s),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === l
                                  ? null
                                  : { start: u, end: l };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Qs = t;
                        null !== Qs;

                      )
                        if (
                          ((e = (t = Qs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Qs = e);
                        else
                          for (; null !== Qs; ) {
                            t = Qs;
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
                                            : Wa(t.type, m),
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
                            } catch (x) {
                              Sl(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Qs = e);
                              break;
                            }
                            Qs = t.return;
                          }
                      (v = Xs), (Xs = !1);
                    })(e, n),
                    pu(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    vu(n, e, a),
                    Je(),
                    (Eu = u),
                    (bt = s),
                    (_u.transition = o);
                } else e.current = n;
                if (
                  (Wu && ((Wu = !1), ($u = e), (Ku = a)),
                  0 === (o = e.pendingLanes) && (Vu = null),
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
                  })(n.stateNode),
                  nl(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r(t[n]);
                if (Bu) throw ((Bu = !1), (e = Hu), (Hu = null), e);
                0 !== (1 & Ku) && 0 !== e.tag && wl(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === Gu
                      ? qu++
                      : ((qu = 0), (Gu = e))
                    : (qu = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (_u.transition = a), (bt = r);
          }
          return null;
        }
        function wl() {
          if (null !== $u) {
            var e = kt(Ku),
              t = _u.transition,
              n = bt;
            try {
              if (((_u.transition = null), (bt = 16 > e ? 16 : e), null === $u))
                var r = !1;
              else {
                if (((e = $u), ($u = null), (Ku = 0), 0 !== (6 & Eu)))
                  throw Error(i(331));
                var a = Eu;
                for (Eu |= 4, Qs = e.current; null !== Qs; ) {
                  var o = Qs,
                    s = o.child;
                  if (0 !== (16 & Qs.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var l = 0; l < u.length; l++) {
                        var c = u[l];
                        for (Qs = c; null !== Qs; ) {
                          var f = Qs;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Zs(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Qs = d);
                          else
                            for (; null !== Qs; ) {
                              var p = (f = Qs).sibling,
                                h = f.return;
                              if ((nu(f), f === c)) {
                                Qs = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Qs = p);
                                break;
                              }
                              Qs = h;
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
                      Qs = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Qs = s);
                  else
                    e: for (; null !== Qs; ) {
                      if (0 !== (2048 & (o = Qs).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Zs(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Qs = y);
                        break e;
                      }
                      Qs = o.return;
                    }
                }
                var b = e.current;
                for (Qs = b; null !== Qs; ) {
                  var k = (s = Qs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== k)
                    (k.return = s), (Qs = k);
                  else
                    e: for (s = b; null !== Qs; ) {
                      if (0 !== (2048 & (u = Qs).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              eu(9, u);
                          }
                        } catch (x) {
                          Sl(u, u.return, x);
                        }
                      if (u === s) {
                        Qs = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Qs = w);
                        break e;
                      }
                      Qs = u.return;
                    }
                }
                if (
                  ((Eu = a),
                  Ha(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (_u.transition = t);
            }
          }
          return !1;
        }
        function xl(e, t, n) {
          ii(e, (t = ds(0, (t = os(n, t)), 1))),
            (t = Yu()),
            null !== (e = el(e, 1)) && (gt(e, 1, t), nl(e, t));
        }
        function Sl(e, t, n) {
          if (3 === e.tag) xl(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xl(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Vu || !Vu.has(r)))
                ) {
                  ii(t, (e = ps(t, (e = os(n, e)), 1))),
                    (e = Yu()),
                    null !== (t = el(t, 1)) && (gt(t, 1, e), nl(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _l(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = Yu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Iu === e &&
              (Tu & n) === n &&
              (4 === Nu ||
              (3 === Nu && (130023424 & Tu) === Tu && 500 > Ye() - zu)
                ? fl(e, 0)
                : (Lu |= n)),
            nl(e, t);
        }
        function El(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = Yu();
          null !== (e = el(e, t)) && (gt(e, t, n), nl(e, n));
        }
        function Il(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), El(e, n);
        }
        function Cl(e, t) {
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
          null !== r && r.delete(t), El(e, n);
        }
        function Tl(e, t) {
          return qe(e, t);
        }
        function Pl(e, t, n, r) {
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
        function Ol(e, t, n, r) {
          return new Pl(e, t, n, r);
        }
        function Nl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rl(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ol(e.tag, t, e.key, e.mode)).elementType =
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
        function Al(e, t, n, r, a, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Nl(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return Dl(n.children, a, o, t);
              case _:
                (s = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Ol(12, n, t, 2 | a)).elementType = E), (e.lanes = o), e
                );
              case P:
                return (
                  ((e = Ol(13, n, t, a)).elementType = P), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Ol(19, n, t, a)).elementType = O), (e.lanes = o), e
                );
              case A:
                return Ll(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case I:
                      s = 10;
                      break e;
                    case C:
                      s = 9;
                      break e;
                    case T:
                      s = 11;
                      break e;
                    case N:
                      s = 14;
                      break e;
                    case R:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ol(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Dl(e, t, n, r) {
          return ((e = Ol(7, e, r, t)).lanes = n), e;
        }
        function Ll(e, t, n, r) {
          return (
            ((e = Ol(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = {}),
            e
          );
        }
        function Ml(e, t, n) {
          return ((e = Ol(6, e, null, t)).lanes = n), e;
        }
        function jl(e, t, n) {
          return (
            ((t = Ol(
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
        function zl(e, t, n, r, a) {
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
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Fl(e, t, n, r, a, i, o, s, u) {
          return (
            (e = new zl(e, t, n, s, u)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Ol(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            ni(i),
            e
          );
        }
        function Ul(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: x,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Bl(e) {
          if (!e) return Ca;
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
                  if (Ra(t.type)) {
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
            if (Ra(n)) return La(e, n, t);
          }
          return t;
        }
        function Hl(e, t, n, r, a, i, o, s, u) {
          return (
            ((e = Fl(n, r, !0, e, 0, i, 0, s, u)).context = Bl(null)),
            (n = e.current),
            ((i = ai((r = Yu()), (a = Xu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            ii(n, i),
            (e.current.lanes = a),
            gt(e, a, r),
            nl(e, r),
            e
          );
        }
        function Vl(e, t, n, r) {
          var a = t.current,
            i = Yu(),
            o = Xu(a);
          return (
            (n = Bl(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ai(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            ii(a, t),
            null !== (e = Zu(a, o, i)) && oi(e, a, o),
            o
          );
        }
        function Wl(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $l(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Kl(e, t) {
          $l(e, t), (e = e.alternate) && $l(e, t);
        }
        ku = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ns(t), Ui();
                        break;
                      case 5:
                        to(t);
                        break;
                      case 1:
                        Ra(t.type) && Ma(t);
                        break;
                      case 4:
                        Zi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ia($a, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ia(ro, 1 & ro.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ms(e, t, n)
                            : (Ia(ro, 1 & ro.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        Ia(ro, 1 & ro.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ia(ro, ro.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Is(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), Ri && 0 !== (1048576 & t.flags) && Ci(t, ki, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps);
              var a = Na(t, Ta.current);
              Xa(t, n), (a = ko(null, t, r, e, a, n));
              var o = wo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((o = !0), Ma(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    ni(t),
                    (a.updater = di),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    mi(t, r, e, n),
                    (t = Os(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    Ri && o && Ti(t),
                    xs(null, t, a, n),
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
                      if ("function" === typeof e) return Nl(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = Wa(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ts(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ps(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Ss(null, t, r, e, n);
                    break e;
                  case 14:
                    t = _s(null, t, r, Wa(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ts(e, t, r, (a = t.elementType === r ? a : Wa(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ps(e, t, r, (a = t.elementType === r ? a : Wa(r, a)), n)
              );
            case 3:
              e: {
                if ((Ns(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  ri(e, t),
                  ui(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Rs(e, t, r, n, (a = Error(i(423))));
                    break e;
                  }
                  if (r !== a) {
                    t = Rs(e, t, r, n, (a = Error(i(424))));
                    break e;
                  }
                  for (
                    Ni = la(t.stateNode.containerInfo.firstChild),
                      Oi = t,
                      Ri = !0,
                      Ai = null,
                      n = qi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((Ui(), r === a)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                to(t),
                null === e && ji(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Cs(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ji(t), null;
            case 13:
              return Ms(e, t, n);
            case 4:
              return (
                Zi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ki(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ss(e, t, r, (a = t.elementType === r ? a : Wa(r, a)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = a.value),
                  Ia($a, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === a.children && !Pa.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        s = o.child;
                        for (var l = u.firstContext; null !== l; ) {
                          if (l.context === r) {
                            if (1 === o.tag) {
                              (l = ai(-1, n & -n)).tag = 2;
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
                              Ya(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          l = l.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (u = s.alternate) && (u.lanes |= n),
                          Ya(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                xs(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Xa(t, n),
                (r = r((a = Za(a)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Wa((r = t.type), t.pendingProps)),
                _s(e, t, r, (a = Wa(r.type, a)), n)
              );
            case 15:
              return Es(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Wa(r, a)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Ma(t)) : (e = !1),
                Xa(t, n),
                hi(t, r, a),
                mi(t, r, a, n),
                Os(null, t, r, !0, e, n)
              );
            case 19:
              return Vs(e, t, n);
            case 22:
              return Is(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var ql =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gl(e) {
          this._internalRoot = e;
        }
        function Ql(e) {
          this._internalRoot = e;
        }
        function Jl(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Yl(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xl() {}
        function Zl(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = Wl(o);
                s.call(e);
              };
            }
            Vl(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Wl(o);
                    i.call(e);
                  };
                }
                var o = Hl(t, r, e, 0, null, !1, 0, "", Xl);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  ll(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Wl(u);
                  s.call(e);
                };
              }
              var u = Fl(e, 0, !1, null, 0, !1, 0, "", Xl);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                ll(function () {
                  Vl(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Wl(o);
        }
        (Ql.prototype.render = Gl.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Vl(e, t, null, null);
          }),
          (Ql.prototype.unmount = Gl.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ll(function () {
                  Vl(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ql.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && jt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    nl(t, Ye()),
                    0 === (6 & Eu) && ((Fu = Ye() + 500), Ha()));
                }
                break;
              case 13:
                var r = Yu();
                ll(function () {
                  return Zu(e, 1, r);
                }),
                  Kl(e, 1);
            }
          }),
          (xt = function (e) {
            13 === e.tag && (Zu(e, 134217728, Yu()), Kl(e, 134217728));
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Yu(),
                n = Xu(e);
              Zu(e, n, t), Kl(e, n);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
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
                      var a = wa(r);
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
          (Te = ul),
          (Pe = ll);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, ka, wa, Ie, Ce, ul],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.1.0",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
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
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (it = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Jl(t)) throw Error(i(200));
            return Ul(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Jl(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = ql;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Fl(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Gl(t)
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
            return ll(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yl(t)) throw Error(i(200));
            return Zl(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Jl(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              s = ql;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hl(t, null, e, 1, null != n ? n : null, a, 0, o, s)),
              (e[ha] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ql(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yl(t)) throw Error(i(200));
            return Zl(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yl(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (ll(function () {
                Zl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ul),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yl(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return Zl(e, t, n, !1, r);
          }),
          (t.version = "18.1.0-next-22edb9f77-20220426");
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
        var n,
          r = Symbol.for("react.element"),
          a = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          s = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.server_context"),
          f = Symbol.for("react.forward_ref"),
          d = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          h = Symbol.for("react.memo"),
          v = Symbol.for("react.lazy"),
          m = Symbol.for("react.offscreen");
        function g(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case i:
                  case s:
                  case o:
                  case d:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case l:
                      case f:
                      case v:
                      case h:
                      case u:
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
        (n = Symbol.for("react.module.reference")),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === i ||
              e === s ||
              e === o ||
              e === d ||
              e === p ||
              e === m ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === h ||
                  e.$$typeof === u ||
                  e.$$typeof === l ||
                  e.$$typeof === f ||
                  e.$$typeof === n ||
                  void 0 !== e.getModuleId))
            );
          }),
          (t.typeOf = g);
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
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) {
          var r,
            i = {},
            l = null,
            c = null;
          for (r in (void 0 !== n && (l = "" + n),
          void 0 !== t.key && (l = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: l,
            ref: c,
            props: i,
            _owner: s.current,
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
          s = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
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
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            i = {},
            o = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              x.call(t, a) && !_.hasOwnProperty(a) && (i[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) i.children = r;
          else if (1 < u) {
            for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
            i.children = l;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === i[a] && (i[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: i,
            _owner: S.current,
          };
        }
        function I(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
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
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (s) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === i ? "." + T(u, 0) : i),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  P(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (I(o) &&
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
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (i = "" === i ? "." : i + ":"), w(e)))
            for (var l = 0; l < e.length; l++) {
              var c = i + T((s = e[l]), l);
              u += P(s, t, a, c, o);
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
            for (e = c.call(e), l = 0; !(s = e.next()).done; )
              u += P((s = s.value), t, a, (c = i + T(s, l++)), o);
          else if ("object" === s)
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
          return u;
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
          D = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: S,
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
            if (!I(e))
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
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
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
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (l in t)
                x.call(t, l) &&
                  !_.hasOwnProperty(l) &&
                  (a[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) a.children = r;
            else if (1 < l) {
              u = Array(l);
              for (var c = 0; c < l; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
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
          (t.isValidElement = I),
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
            s = a.toStringTag || "@@toStringTag";
          function u(e, t, n) {
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
            u({}, "");
          } catch (N) {
            u = function (e, t, n) {
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
                      var s = E(o, n);
                      if (s) {
                        if (s === v) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === f) throw ((r = h), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = p;
                    var u = c(e, t, n);
                    if ("normal" === u.type) {
                      if (((r = n.done ? h : d), u.arg === v)) continue;
                      return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                      ((r = h), (n.method = "throw"), (n.arg = u.arg));
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
          u(b, i, function () {
            return this;
          });
          var k = Object.getPrototypeOf,
            w = k && k(k(P([])));
          w && w !== n && r.call(w, i) && (b = w);
          var x = (y.prototype = m.prototype = Object.create(b));
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              u(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function _(e, t) {
            function n(a, i, o, s) {
              var u = c(e[a], e, i);
              if ("throw" !== u.type) {
                var l = u.arg,
                  f = l.value;
                return f && "object" === typeof f && r.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, o, s);
                      },
                      function (e) {
                        n("throw", e, o, s);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (l.value = e), o(l);
                      },
                      function (e) {
                        return n("throw", e, o, s);
                      }
                    );
              }
              s(u.arg);
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
          function I(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function C(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function T(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(I, this),
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
            u(x, "constructor", y),
            u(y, "constructor", g),
            (g.displayName = u(y, s, "GeneratorFunction")),
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
                  : ((e.__proto__ = y), u(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(x)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            S(_.prototype),
            u(_.prototype, o, function () {
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
            S(x),
            u(x, s, "Generator"),
            u(x, i, function () {
              return this;
            }),
            u(x, "toString", function () {
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
                  this.tryEntries.forEach(C),
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
                    (s.type = "throw"),
                    (s.arg = e),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = t)),
                    !!a
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    s = o.completion;
                  if ("root" === o.tryLoc) return a("end");
                  if (o.tryLoc <= this.prev) {
                    var u = r.call(o, "catchLoc"),
                      l = r.call(o, "finallyLoc");
                    if (u && l) {
                      if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                    } else if (u) {
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
                    return this.complete(n.completion, n.afterLoc), C(n), v;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      C(n);
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
              var s = 2 * (r + 1) - 1,
                u = e[s],
                l = s + 1,
                c = e[l];
              if (0 > i(u, n))
                l < a && 0 > i(c, u)
                  ? ((e[r] = c), (e[l] = n), (r = l))
                  : ((e[r] = u), (e[s] = n), (r = s));
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
          var s = Date,
            u = s.now();
          t.unstable_now = function () {
            return s.now() - u;
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
            if (null !== r(l)) (v = !0), A(x);
            else {
              var t = r(c);
              null !== t && D(w, t.startTime - e);
            }
        }
        function x(e, n) {
          (v = !1), m && ((m = !1), y(I), (I = -1)), (h = !0);
          var i = p;
          try {
            for (
              k(n), d = r(l);
              null !== d && (!(d.expirationTime > n) || (e && !P()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var s = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (d.callback = s)
                    : d === r(l) && a(l),
                  k(n);
              } else a(l);
              d = r(l);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && D(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          _ = !1,
          E = null,
          I = -1,
          C = 5,
          T = -1;
        function P() {
          return !(t.unstable_now() - T < C);
        }
        function O() {
          if (null !== E) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((_ = !1), (E = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            R = N.port2;
          (N.port1.onmessage = O),
            (S = function () {
              R.postMessage(null);
            });
        } else
          S = function () {
            g(O, 0);
          };
        function A(e) {
          (E = e), _ || ((_ = !0), S());
        }
        function D(e, n) {
          I = g(function () {
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
            v || h || ((v = !0), A(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
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
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(l) &&
                    e === r(c) &&
                    (m ? (y(I), (I = -1)) : (m = !0), D(w, i - o)))
                : ((e.sortIndex = s), n(l, e), v || h || ((v = !0), A(x))),
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
            var s = Object.prototype.hasOwnProperty.bind(t), u = 0;
            u < i.length;
            u++
          ) {
            var l = i[u];
            if (!s(l)) return !1;
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
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (u) {
                (s = !0), (a = u);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
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
      function s() {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          s.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var u = function (e) {
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
              s = n.concat(i);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && b(!1), w(e.children, t, s, o)),
              (null != e.path || e.index) &&
                t.push({ path: o, score: _(o, e.index), routesMeta: s });
          }),
          t
        );
      }
      var x = /^:\w+$/,
        S = function (e) {
          return "*" === e;
        };
      function _(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(S) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !S(e);
            })
            .reduce(function (e, t) {
              return e + (x.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function E(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", i = [], o = 0;
          o < n.length;
          ++o
        ) {
          var s = n[o],
            u = o === n.length - 1,
            l = "/" === a ? t : t.slice(a.length) || "/",
            c = I(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
              l
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = s.route;
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
      function I(e, t) {
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
          s = t.match(a);
        if (!s) return null;
        var u = s[0],
          l = u.replace(/(.)\/+$/, "$1"),
          c = s.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              l = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
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
          pathname: u,
          pathnameBase: l,
          pattern: e,
        };
      }
      function C(e, t, n) {
        var r,
          a = "string" === typeof e ? v(e) : e,
          i = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == i) r = n;
        else {
          var o = t.length - 1;
          if (i.startsWith("..")) {
            for (var s = i.split("/"); ".." === s[0]; ) s.shift(), (o -= 1);
            a.pathname = s.join("/");
          }
          r = o >= 0 ? t[o] : "/";
        }
        var u = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? v(e) : e,
            r = n.pathname,
            a = n.search,
            i = void 0 === a ? "" : a,
            o = n.hash,
            s = void 0 === o ? "" : o,
            u = r
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
          return { pathname: u, search: N(i), hash: R(s) };
        })(a, r);
        return (
          i &&
            "/" !== i &&
            i.endsWith("/") &&
            !u.pathname.endsWith("/") &&
            (u.pathname += "/"),
          u
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
        D() || b(!1);
        var n = (0, t.useContext)(m),
          r = n.basename,
          a = n.navigator,
          i = j(e),
          o = i.hash,
          s = i.pathname,
          u = i.search,
          l = s;
        if ("/" !== r) {
          var c = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? v(e).pathname
                : e.pathname;
            })(e),
            f = null != c && c.endsWith("/");
          l = "/" === s ? r + (f ? "/" : "") : P([r, s]);
        }
        return a.createHref({ pathname: l, search: u, hash: o });
      }
      function D() {
        return null != (0, t.useContext)(g);
      }
      function L() {
        return D() || b(!1), (0, t.useContext)(g).location;
      }
      function M() {
        D() || b(!1);
        var e = (0, t.useContext)(m),
          n = e.basename,
          r = e.navigator,
          a = (0, t.useContext)(y).matches,
          i = L().pathname,
          o = JSON.stringify(
            a.map(function (e) {
              return e.pathnameBase;
            })
          ),
          s = (0, t.useRef)(!1);
        return (
          (0, t.useEffect)(function () {
            s.current = !0;
          }),
          (0, t.useCallback)(
            function (e, t) {
              if ((void 0 === t && (t = {}), s.current))
                if ("number" !== typeof e) {
                  var a = C(e, JSON.parse(o), i);
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
          r = L().pathname,
          a = JSON.stringify(
            n.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, t.useMemo)(
          function () {
            return C(e, JSON.parse(a), r);
          },
          [e, a, r]
        );
      }
      function z(e, n) {
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
      function F(e) {
        b(!1);
      }
      function U(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          i = n.children,
          o = void 0 === i ? null : i,
          s = n.location,
          u = n.navigationType,
          l = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        D() && b(!1);
        var p = O(a),
          h = (0, t.useMemo)(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof s && (s = v(s));
        var y = s,
          k = y.pathname,
          w = void 0 === k ? "/" : k,
          x = y.search,
          S = void 0 === x ? "" : x,
          _ = y.hash,
          E = void 0 === _ ? "" : _,
          I = y.state,
          C = void 0 === I ? null : I,
          P = y.key,
          N = void 0 === P ? "default" : P,
          R = (0, t.useMemo)(
            function () {
              var e = T(w, p);
              return null == e
                ? null
                : { pathname: e, search: S, hash: E, state: C, key: N };
            },
            [p, w, S, E, C, N]
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
      function B(e) {
        var n = e.children,
          r = e.location;
        return (function (e, n) {
          D() || b(!1);
          var r,
            a = (0, t.useContext)(y).matches,
            i = a[a.length - 1],
            o = i ? i.params : {},
            s = (i && i.pathname, i ? i.pathnameBase : "/"),
            u = (i && i.route, L());
          if (n) {
            var l,
              c = "string" === typeof n ? v(n) : n;
            "/" === s ||
              (null == (l = c.pathname) ? void 0 : l.startsWith(s)) ||
              b(!1),
              (r = c);
          } else r = u;
          var f = r.pathname || "/",
            d = k(e, { pathname: "/" === s ? f : f.slice(s.length) || "/" });
          return z(
            d &&
              d.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, o, e.params),
                  pathname: P([s, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? s : P([s, e.pathnameBase]),
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
                e.type !== F && b(!1);
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
      function V() {
        return (
          (V =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          V.apply(this, arguments)
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
                u({
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
                    var s = y - r;
                    s &&
                      ((o = {
                        action: t,
                        location: a,
                        retry: function () {
                          C(-1 * s);
                        },
                      }),
                      C(s));
                  }
                } else I(t);
              }
            });
            var m = e.Pop,
              g = i(),
              y = g[0],
              b = g[1],
              k = d(),
              w = d();
            function x(e) {
              return "string" === typeof e ? e : h(e);
            }
            function S(e, t) {
              return (
                void 0 === t && (t = null),
                u(
                  s(
                    { pathname: b.pathname, hash: "", search: "" },
                    "string" === typeof e ? v(e) : e,
                    { state: t, key: p() }
                  )
                )
              );
            }
            function _(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, x(e)];
            }
            function E(e, t, n) {
              return (
                !w.length || (w.call({ action: e, location: t, retry: n }), !1)
              );
            }
            function I(e) {
              m = e;
              var t = i();
              (y = t[0]), (b = t[1]), k.call({ action: m, location: b });
            }
            function C(e) {
              a.go(e);
            }
            null == y &&
              ((y = 0), a.replaceState(s({}, a.state, { idx: y }), ""));
            var T = {
              get action() {
                return m;
              },
              get location() {
                return b;
              },
              createHref: x,
              push: function t(n, i) {
                var o = e.Push,
                  s = S(n, i);
                if (
                  E(o, s, function () {
                    t(n, i);
                  })
                ) {
                  var u = _(s, y + 1),
                    l = u[0],
                    c = u[1];
                  try {
                    a.pushState(l, "", c);
                  } catch (f) {
                    r.location.assign(c);
                  }
                  I(o);
                }
              },
              replace: function t(n, r) {
                var i = e.Replace,
                  o = S(n, r);
                if (
                  E(i, o, function () {
                    t(n, r);
                  })
                ) {
                  var s = _(o, y),
                    u = s[0],
                    l = s[1];
                  a.replaceState(u, "", l), I(i);
                }
              },
              go: C,
              back: function () {
                C(-1);
              },
              forward: function () {
                C(1);
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
          s = e.state,
          u = e.target,
          l = e.to,
          c = W(e, $),
          f = A(l),
          d = (function (e, n) {
            var r = void 0 === n ? {} : n,
              a = r.target,
              i = r.replace,
              o = r.state,
              s = M(),
              u = L(),
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
                  var n = !!i || h(u) === h(l);
                  s(e, { replace: n, state: o });
                }
              },
              [u, s, l, i, o, a, e]
            );
          })(l, { replace: o, state: s, target: u });
        return (0, t.createElement)(
          "a",
          V({}, c, {
            href: f,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || a || d(e);
            },
            ref: n,
            target: u,
          })
        );
      });
      var Q = (0, t.forwardRef)(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          i = e.caseSensitive,
          o = void 0 !== i && i,
          s = e.className,
          u = void 0 === s ? "" : s,
          l = e.end,
          c = void 0 !== l && l,
          f = e.style,
          d = e.to,
          p = e.children,
          h = W(e, K),
          v = L(),
          m = j(d),
          g = v.pathname,
          y = m.pathname;
        o || ((g = g.toLowerCase()), (y = y.toLowerCase()));
        var b,
          k = g === y || (!c && g.startsWith(y) && "/" === g.charAt(y.length)),
          w = k ? a : void 0;
        b =
          "function" === typeof u
            ? u({ isActive: k })
            : [u, k ? "active" : null].filter(Boolean).join(" ");
        var x = "function" === typeof f ? f({ isActive: k }) : f;
        return (0,
        t.createElement)(G, V({}, h, { "aria-current": w, className: b, ref: n, style: x, to: d }), "function" === typeof p ? p({ isActive: k }) : p);
      });
      var J = n(184),
        Y = function () {
          var e = "https://nimahabibi.de/shop/image/";
          return (0, J.jsx)("footer", {
            children: (0, J.jsxs)("ul", {
              children: [
                (0, J.jsx)(Q, {
                  to: "/",
                  children: (0, J.jsx)("li", {
                    className: "Home",
                    children: (0, J.jsx)("img", {
                      src: e + "icon/home.svg",
                      alt: "home icon",
                    }),
                  }),
                }),
                (0, J.jsx)(Q, {
                  to: "login",
                  children: (0, J.jsx)("li", {
                    children: (0, J.jsx)("img", {
                      src: e + "icon/person.svg",
                      alt: "person icon",
                    }),
                  }),
                }),
                (0, J.jsx)(Q, {
                  to: "product-detail",
                  children: (0, J.jsx)("li", {
                    children: (0, J.jsx)("img", {
                      src: e + "icon/favorite_menue.svg",
                      alt: "favorite icon",
                    }),
                  }),
                }),
                (0, J.jsx)(Q, {
                  to: "product-detail",
                  children: (0, J.jsx)("li", {
                    children: (0, J.jsx)("img", {
                      src: e + "icon/menu.svg",
                      alt: "menu icon",
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
          return (0, J.jsxs)("article", {
            onClick: function () {
              return t(n.catName);
            },
            style: { background: n.bgColor },
            children: [
              (0, J.jsx)("img", { src: r + n.imageUrl, alt: "Sofa" }),
              (0, J.jsx)("p", { children: n.catName }),
            ],
          });
        };
      function Z(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var ee = n(441),
        te = n(613),
        ne = n.n(te);
      var re = function (e) {
          function t(e, r, u, l, d) {
            for (
              var p,
                h,
                v,
                m,
                k,
                x = 0,
                S = 0,
                _ = 0,
                E = 0,
                I = 0,
                R = 0,
                D = (v = p = 0),
                M = 0,
                j = 0,
                z = 0,
                F = 0,
                U = u.length,
                B = U - 1,
                H = "",
                V = "",
                W = "",
                $ = "";
              M < U;

            ) {
              if (
                ((h = u.charCodeAt(M)),
                M === B &&
                  0 !== S + E + _ + x &&
                  (0 !== S && (h = 47 === S ? 10 : 47),
                  (E = _ = x = 0),
                  U++,
                  B++),
                0 === S + E + _ + x)
              ) {
                if (
                  M === B &&
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
                      H += u.charAt(M);
                  }
                  h = 59;
                }
                switch (h) {
                  case 123:
                    for (
                      p = (H = H.trim()).charCodeAt(0), v = 1, F = ++M;
                      M < U;

                    ) {
                      switch ((h = u.charCodeAt(M))) {
                        case 123:
                          v++;
                          break;
                        case 125:
                          v--;
                          break;
                        case 47:
                          switch ((h = u.charCodeAt(M + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (D = M + 1; D < B; ++D)
                                  switch (u.charCodeAt(D)) {
                                    case 47:
                                      if (
                                        42 === h &&
                                        42 === u.charCodeAt(D - 1) &&
                                        M + 2 !== D
                                      ) {
                                        M = D + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === h) {
                                        M = D + 1;
                                        break e;
                                      }
                                  }
                                M = D;
                              }
                          }
                          break;
                        case 91:
                          h++;
                        case 40:
                          h++;
                        case 34:
                        case 39:
                          for (; M++ < B && u.charCodeAt(M) !== h; );
                      }
                      if (0 === v) break;
                      M++;
                    }
                    if (
                      ((v = u.substring(F, M)),
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
                        ((F = (v = t(r, j, v, h, d + 1)).length),
                        0 < A &&
                          ((k = s(3, v, (j = n(N, H, z)), r, T, C, F, h, d, l)),
                          (H = j.join("")),
                          void 0 !== k &&
                            0 === (F = (v = k.trim()).length) &&
                            ((h = 0), (v = ""))),
                        0 < F)
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
                            (v = H + v), 112 === l && ((V += v), (v = ""));
                        }
                      else v = "";
                    } else v = t(r, n(r, H, z), v, l, d + 1);
                    (W += v),
                      (v = z = j = D = p = 0),
                      (H = ""),
                      (h = u.charCodeAt(++M));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (F = (H = (0 < j ? H.replace(f, "") : H).trim()).length)
                    )
                      switch (
                        (0 === D &&
                          ((p = H.charCodeAt(0)),
                          45 === p || (96 < p && 123 > p)) &&
                          (F = (H = H.replace(" ", ":")).length),
                        0 < A &&
                          void 0 !==
                            (k = s(1, H, r, e, T, C, V.length, l, d, l)) &&
                          0 === (F = (H = k.trim()).length) &&
                          (H = "\0\0"),
                        (p = H.charCodeAt(0)),
                        (h = H.charCodeAt(1)),
                        p)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === h || 99 === h) {
                            $ += H + u.charAt(M);
                            break;
                          }
                        default:
                          58 !== H.charCodeAt(F - 1) &&
                            (V += a(H, p, h, H.charCodeAt(2)));
                      }
                    (z = j = D = p = 0), (H = ""), (h = u.charCodeAt(++M));
                }
              }
              switch (h) {
                case 13:
                case 10:
                  47 === S
                    ? (S = 0)
                    : 0 === 1 + p &&
                      107 !== l &&
                      0 < H.length &&
                      ((j = 1), (H += "\0")),
                    0 < A * L && s(0, H, r, e, T, C, V.length, l, d, l),
                    (C = 1),
                    T++;
                  break;
                case 59:
                case 125:
                  if (0 === S + E + _ + x) {
                    C++;
                    break;
                  }
                default:
                  switch ((C++, (m = u.charAt(M)), h)) {
                    case 9:
                    case 32:
                      if (0 === E + x + S)
                        switch (I) {
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
                      0 === E + S + x && ((j = z = 1), (m = "\f" + m));
                      break;
                    case 108:
                      if (0 === E + S + x + P && 0 < D)
                        switch (M - D) {
                          case 2:
                            112 === I && 58 === u.charCodeAt(M - 3) && (P = I);
                          case 8:
                            111 === R && (P = R);
                        }
                      break;
                    case 58:
                      0 === E + S + x && (D = M);
                      break;
                    case 44:
                      0 === S + _ + E + x && ((j = 1), (m += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === S && (E = E === h ? 0 : 0 === E ? h : E);
                      break;
                    case 91:
                      0 === E + S + _ && x++;
                      break;
                    case 93:
                      0 === E + S + _ && x--;
                      break;
                    case 41:
                      0 === E + S + x && _--;
                      break;
                    case 40:
                      if (0 === E + S + x) {
                        if (0 === p)
                          if (2 * I + 3 * R === 533);
                          else p = 1;
                        _++;
                      }
                      break;
                    case 64:
                      0 === S + _ + E + x + D + v && (v = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < E + x + _))
                        switch (S) {
                          case 0:
                            switch (2 * h + 3 * u.charCodeAt(M + 1)) {
                              case 235:
                                S = 47;
                                break;
                              case 220:
                                (F = M), (S = 42);
                            }
                            break;
                          case 42:
                            47 === h &&
                              42 === I &&
                              F + 2 !== M &&
                              (33 === u.charCodeAt(F + 2) &&
                                (V += u.substring(F, M + 1)),
                              (m = ""),
                              (S = 0));
                        }
                  }
                  0 === S && (H += m);
              }
              (R = I), (I = h), M++;
            }
            if (0 < (F = V.length)) {
              if (
                ((j = r),
                0 < A &&
                  void 0 !== (k = s(2, V, j, e, T, C, F, l, d, l)) &&
                  0 === (V = k).length)
              )
                return $ + V + W;
              if (((V = j.join(",") + "{" + V + "}"), 0 !== O * P)) {
                switch ((2 !== O || i(V, 2) || (P = 0), P)) {
                  case 111:
                    V = V.replace(b, ":-moz-$1") + V;
                    break;
                  case 112:
                    V =
                      V.replace(y, "::-webkit-input-$1") +
                      V.replace(y, "::-moz-$1") +
                      V.replace(y, ":-ms-input-$1") +
                      V;
                }
                P = 0;
              }
            }
            return $ + V + W;
          }
          function n(e, t, n) {
            var a = t.trim().split(v);
            t = a;
            var i = a.length,
              o = e.length;
            switch (o) {
              case 0:
              case 1:
                var s = 0;
                for (e = 0 === o ? "" : e[0] + " "; s < i; ++s)
                  t[s] = r(e, t[s], n).trim();
                break;
              default:
                var u = (s = 0);
                for (t = []; s < i; ++s)
                  for (var l = 0; l < o; ++l)
                    t[u++] = r(e[l] + " ", a[s], n).trim();
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
              s = 2 * t + 3 * n + 4 * r;
            if (944 === s) {
              e = o.indexOf(":", 9) + 1;
              var u = o.substring(e, o.length - 1).trim();
              return (
                (u = o.substring(0, e).trim() + u + ";"),
                1 === O || (2 === O && i(u, 1)) ? "-webkit-" + u + u : u
              );
            }
            if (0 === O || (2 === O && !i(o, 1))) return o;
            switch (s) {
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
                  return o.replace(I, "$1-webkit-$2") + o;
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
                  (u = o
                    .substring(o.indexOf(":", 15))
                    .replace("flex-", "")
                    .replace("space-between", "justify")) +
                  "-webkit-" +
                  o +
                  "-ms-flex-pack" +
                  u +
                  o
                );
              case 1005:
                return p.test(o)
                  ? o.replace(d, ":-webkit-") + o.replace(d, ":-moz-") + o
                  : o;
              case 1e3:
                switch (
                  ((t = (u = o.substring(13).trim()).indexOf("-") + 1),
                  u.charCodeAt(0) + u.charCodeAt(t))
                ) {
                  case 226:
                    u = o.replace(k, "tb");
                    break;
                  case 232:
                    u = o.replace(k, "tb-rl");
                    break;
                  case 220:
                    u = o.replace(k, "lr");
                    break;
                  default:
                    return o;
                }
                return "-webkit-" + o + "-ms-" + u + o;
              case 1017:
                if (-1 === o.indexOf("sticky", 9)) break;
              case 975:
                switch (
                  ((t = (o = e).length - 10),
                  (s =
                    (u = (33 === o.charCodeAt(t) ? o.substring(0, t) : o)
                      .substring(e.indexOf(":", 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | u.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > u.charCodeAt(8)) break;
                  case 115:
                    o = o.replace(u, "-webkit-" + u) + ";" + o;
                    break;
                  case 207:
                  case 102:
                    o =
                      o.replace(
                        u,
                        "-webkit-" + (102 < s ? "inline-" : "") + "box"
                      ) +
                      ";" +
                      o.replace(u, "-webkit-" + u) +
                      ";" +
                      o.replace(u, "-ms-" + u + "box") +
                      ";" +
                      o;
                }
                return o + ";";
              case 938:
                if (45 === o.charCodeAt(5))
                  switch (o.charCodeAt(6)) {
                    case 105:
                      return (
                        (u = o.replace("-items", "")),
                        "-webkit-" +
                          o +
                          "-webkit-box-" +
                          u +
                          "-ms-flex-" +
                          u +
                          o
                      );
                    case 115:
                      return (
                        "-webkit-" + o + "-ms-flex-item-" + o.replace(S, "") + o
                      );
                    default:
                      return (
                        "-webkit-" +
                        o +
                        "-ms-flex-line-pack" +
                        o.replace("align-content", "").replace(S, "") +
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
                    (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                    ? a(
                        e.replace("stretch", "fill-available"),
                        t,
                        n,
                        r
                      ).replace(":fill-available", ":stretch")
                    : o.replace(u, "-webkit-" + u) +
                        o.replace(u, "-moz-" + u.replace("fill-", "")) +
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
              D(2 !== t ? r : r.replace(_, "$1"), n, t)
            );
          }
          function o(e, t) {
            var n = a(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return n !== t + ";"
              ? n.replace(x, " or ($1)").substring(4)
              : "(" + t + ")";
          }
          function s(e, t, n, r, a, i, o, s, u, c) {
            for (var f, d = 0, p = t; d < A; ++d)
              switch ((f = R[d].call(l, e, p, n, r, a, i, o, s, u, c))) {
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
          function u(e) {
            return (
              void 0 !== (e = e.prefix) &&
                ((D = null),
                e
                  ? "function" !== typeof e
                    ? (O = 1)
                    : ((O = 2), (D = e))
                  : (O = 0)),
              u
            );
          }
          function l(e, n) {
            var r = e;
            if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < A)) {
              var a = s(-1, n, r, r, T, C, 0, 0, 0, 0);
              void 0 !== a && "string" === typeof a && (n = a);
            }
            var i = t(N, r, n, 0, 0);
            return (
              0 < A &&
                void 0 !== (a = s(-2, i, r, r, T, C, i.length, 0, 0, 0)) &&
                (i = a),
              "",
              (P = 0),
              (C = T = 1),
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
            x = /([\s\S]*?);/g,
            S = /-self|flex-/g,
            _ = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            E = /stretch|:\s*\w+\-(?:conte|avail)/,
            I = /([^-])(image-set\()/,
            C = 1,
            T = 1,
            P = 0,
            O = 1,
            N = [],
            R = [],
            A = 0,
            D = null,
            L = 0;
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
                  else L = 0 | !!t;
              }
              return e;
            }),
            (l.set = u),
            void 0 !== e && u(e),
            l
          );
        },
        ae = {
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
      var ie =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        oe = (function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return (
            ie.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        }),
        se = n(110),
        ue = n.n(se);
      function le() {
        return (le =
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
      var ce = function (e, t) {
          for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
            n.push(t[r], e[r + 1]);
          return n;
        },
        fe = function (e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "[object Object]" ===
              (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, ee.typeOf)(e)
          );
        },
        de = Object.freeze([]),
        pe = Object.freeze({});
      function he(e) {
        return "function" == typeof e;
      }
      function ve(e) {
        return e.displayName || e.name || "Component";
      }
      function me(e) {
        return e && "string" == typeof e.styledComponentId;
      }
      var ge =
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
        ye = "undefined" != typeof window && "HTMLElement" in window,
        be = Boolean(
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
      function ke(e) {
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
      var we = (function () {
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
                  (a <<= 1) < 0 && ke(16, "" + e);
                (this.groupSizes = new Uint32Array(a)),
                  this.groupSizes.set(n),
                  (this.length = a);
                for (var i = r; i < a; i++) this.groupSizes[i] = 0;
              }
              for (
                var o = this.indexOfGroup(e + 1), s = 0, u = t.length;
                s < u;
                s++
              )
                this.tag.insertRule(o, t[s]) && (this.groupSizes[e]++, o++);
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
        Se = new Map(),
        _e = 1,
        Ee = function (e) {
          if (xe.has(e)) return xe.get(e);
          for (; Se.has(_e); ) _e++;
          var t = _e++;
          return xe.set(e, t), Se.set(t, e), t;
        },
        Ie = function (e) {
          return Se.get(e);
        },
        Ce = function (e, t) {
          t >= _e && (_e = t + 1), xe.set(e, t), Se.set(t, e);
        },
        Te = "style[" + ge + '][data-styled-version="5.3.5"]',
        Pe = new RegExp(
          "^" + ge + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
        ),
        Oe = function (e, t, n) {
          for (var r, a = n.split(","), i = 0, o = a.length; i < o; i++)
            (r = a[i]) && e.registerName(t, r);
        },
        Ne = function (e, t) {
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
              var s = o.match(Pe);
              if (s) {
                var u = 0 | parseInt(s[1], 10),
                  l = s[2];
                0 !== u &&
                  (Ce(l, u), Oe(e, l, s[3]), e.getTag().insertRules(u, r)),
                  (r.length = 0);
              } else r.push(o);
            }
          }
        },
        Re = function () {
          return "undefined" != typeof window &&
            void 0 !== window.__webpack_nonce__
            ? window.__webpack_nonce__
            : null;
        },
        Ae = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            a = (function (e) {
              for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                var r = t[n];
                if (r && 1 === r.nodeType && r.hasAttribute(ge)) return r;
              }
            })(n),
            i = void 0 !== a ? a.nextSibling : null;
          r.setAttribute(ge, "active"),
            r.setAttribute("data-styled-version", "5.3.5");
          var o = Re();
          return o && r.setAttribute("nonce", o), n.insertBefore(r, i), r;
        },
        De = (function () {
          function e(e) {
            var t = (this.element = Ae(e));
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
                ke(17);
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
        Le = (function () {
          function e(e) {
            var t = (this.element = Ae(e));
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
        Me = (function () {
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
        je = ye,
        ze = { isServer: !ye, useCSSOMInjection: !be },
        Fe = (function () {
          function e(e, t, n) {
            void 0 === e && (e = pe),
              void 0 === t && (t = {}),
              (this.options = le({}, ze, {}, e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                ye &&
                je &&
                ((je = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(Te), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    a &&
                      "active" !== a.getAttribute(ge) &&
                      (Ne(e, a), a.parentNode && a.parentNode.removeChild(a));
                  }
                })(this));
          }
          e.registerId = function (e) {
            return Ee(e);
          };
          var t = e.prototype;
          return (
            (t.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  le({}, this.options, {}, t),
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
                  (e = n ? new Me(a) : r ? new De(a) : new Le(a)),
                  new we(e)))
              );
              var e, t, n, r, a;
            }),
            (t.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (t.registerName = function (e, t) {
              if ((Ee(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (t.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(Ee(e), n);
            }),
            (t.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (t.clearRules = function (e) {
              this.getTag().clearGroup(Ee(e)), this.clearNames(e);
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
                      s = t.getGroup(a);
                    if (o && s && o.size) {
                      var u = ge + ".g" + a + '[id="' + i + '"]',
                        l = "";
                      void 0 !== o &&
                        o.forEach(function (e) {
                          e.length > 0 && (l += e + ",");
                        }),
                        (r += "" + s + u + '{content:"' + l + '"}/*!sc*/\n');
                    }
                  }
                }
                return r;
              })(this);
            }),
            e
          );
        })(),
        Ue = /(a)(d)/gi,
        Be = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function He(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Be(t % 52) + n;
        return (Be(t % 52) + n).replace(Ue, "$1-$2");
      }
      var Ve = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        We = function (e) {
          return Ve(5381, e);
        };
      function $e(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (he(n) && !me(n)) return !1;
        }
        return !0;
      }
      var Ke = We("5.3.5"),
        qe = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && $e(e)),
              (this.componentId = t),
              (this.baseHash = Ve(Ke, t)),
              (this.baseStyle = n),
              Fe.registerId(t);
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
                  var i = ft(this.rules, e, t, n).join(""),
                    o = He(Ve(this.baseHash, i) >>> 0);
                  if (!t.hasNameForId(r, o)) {
                    var s = n(i, "." + o, void 0, r);
                    t.insertRules(r, o, s);
                  }
                  a.push(o), (this.staticRulesId = o);
                }
              else {
                for (
                  var u = this.rules.length,
                    l = Ve(this.baseHash, n.hash),
                    c = "",
                    f = 0;
                  f < u;
                  f++
                ) {
                  var d = this.rules[f];
                  if ("string" == typeof d) c += d;
                  else if (d) {
                    var p = ft(d, e, t, n),
                      h = Array.isArray(p) ? p.join("") : p;
                    (l = Ve(l, h + f)), (c += h);
                  }
                }
                if (c) {
                  var v = He(l >>> 0);
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
        Ge = /^\s*\/\/.*$/gm,
        Qe = [":", "[", ".", "#"];
      function Je(e) {
        var t,
          n,
          r,
          a,
          i = void 0 === e ? pe : e,
          o = i.options,
          s = void 0 === o ? pe : o,
          u = i.plugins,
          l = void 0 === u ? de : u,
          c = new re(s),
          f = [],
          d = (function (e) {
            function t(t) {
              if (t)
                try {
                  e(t + "}");
                } catch (e) {}
            }
            return function (n, r, a, i, o, s, u, l, c, f) {
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
            return (0 === r && -1 !== Qe.indexOf(i[n.length])) || i.match(a)
              ? e
              : "." + t;
          };
        function h(e, i, o, s) {
          void 0 === s && (s = "&");
          var u = e.replace(Ge, ""),
            l = i && o ? o + " " + i + " { " + u + " }" : u;
          return (
            (t = s),
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
                  return t.name || ke(15), Ve(e, t.name);
                }, 5381)
                .toString()
            : ""),
          h
        );
      }
      var Ye = t.createContext(),
        Xe = (Ye.Consumer, t.createContext()),
        Ze = (Xe.Consumer, new Fe()),
        et = Je();
      function tt() {
        return (0, t.useContext)(Ye) || Ze;
      }
      function nt() {
        return (0, t.useContext)(Xe) || et;
      }
      function rt(e) {
        var n = (0, t.useState)(e.stylisPlugins),
          r = n[0],
          a = n[1],
          i = tt(),
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
          s = (0, t.useMemo)(
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
              ne()(r, e.stylisPlugins) || a(e.stylisPlugins);
            },
            [e.stylisPlugins]
          ),
          t.createElement(
            Ye.Provider,
            { value: o },
            t.createElement(Xe.Provider, { value: s }, e.children)
          )
        );
      }
      var at = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = et);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) ||
                e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.toString = function () {
                return ke(12, String(n.name));
              }),
              (this.name = e),
              (this.id = "sc-keyframes-" + e),
              (this.rules = t);
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = et), this.name + e.hash;
            }),
            e
          );
        })(),
        it = /([A-Z])/,
        ot = /([A-Z])/g,
        st = /^ms-/,
        ut = function (e) {
          return "-" + e.toLowerCase();
        };
      function lt(e) {
        return it.test(e) ? e.replace(ot, ut).replace(st, "-ms-") : e;
      }
      var ct = function (e) {
        return null == e || !1 === e || "" === e;
      };
      function ft(e, t, n, r) {
        if (Array.isArray(e)) {
          for (var a, i = [], o = 0, s = e.length; o < s; o += 1)
            "" !== (a = ft(e[o], t, n, r)) &&
              (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
          return i;
        }
        return ct(e)
          ? ""
          : me(e)
          ? "." + e.styledComponentId
          : he(e)
          ? "function" != typeof (u = e) ||
            (u.prototype && u.prototype.isReactComponent) ||
            !t
            ? e
            : ft(e(t), t, n, r)
          : e instanceof at
          ? n
            ? (e.inject(n, r), e.getName(r))
            : e
          : fe(e)
          ? (function e(t, n) {
              var r,
                a,
                i = [];
              for (var o in t)
                t.hasOwnProperty(o) &&
                  !ct(t[o]) &&
                  ((Array.isArray(t[o]) && t[o].isCss) || he(t[o])
                    ? i.push(lt(o) + ":", t[o], ";")
                    : fe(t[o])
                    ? i.push.apply(i, e(t[o], o))
                    : i.push(
                        lt(o) +
                          ": " +
                          ((r = o),
                          (null == (a = t[o]) ||
                          "boolean" == typeof a ||
                          "" === a
                            ? ""
                            : "number" != typeof a || 0 === a || r in ae
                            ? String(a).trim()
                            : a + "px") + ";")
                      ));
              return n ? [n + " {"].concat(i, ["}"]) : i;
            })(e)
          : e.toString();
        var u;
      }
      var dt = function (e) {
        return Array.isArray(e) && (e.isCss = !0), e;
      };
      function pt(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return he(e) || fe(e)
          ? dt(ft(ce(de, [e].concat(n))))
          : 0 === n.length && 1 === e.length && "string" == typeof e[0]
          ? e
          : dt(ft(ce(e, n)));
      }
      new Set();
      var ht = function (e, t, n) {
          return (
            void 0 === n && (n = pe),
            (e.theme !== n.theme && e.theme) || t || n.theme
          );
        },
        vt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        mt = /(^-|-$)/g;
      function gt(e) {
        return e.replace(vt, "-").replace(mt, "");
      }
      var yt = function (e) {
        return He(We(e) >>> 0);
      };
      function bt(e) {
        return "string" == typeof e && !0;
      }
      var kt = function (e) {
          return (
            "function" == typeof e ||
            ("object" == typeof e && null !== e && !Array.isArray(e))
          );
        },
        wt = function (e) {
          return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
        };
      function xt(e, t, n) {
        var r = e[n];
        kt(t) && kt(r) ? St(r, t) : (e[n] = t);
      }
      function St(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        for (var a = 0, i = n; a < i.length; a++) {
          var o = i[a];
          if (kt(o)) for (var s in o) wt(s) && xt(e, o[s], s);
        }
        return e;
      }
      var _t = t.createContext();
      _t.Consumer;
      var Et = {};
      function It(e, n, r) {
        var a = me(e),
          i = !bt(e),
          o = n.attrs,
          s = void 0 === o ? de : o,
          u = n.componentId,
          l =
            void 0 === u
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : gt(e);
                  Et[n] = (Et[n] || 0) + 1;
                  var r = n + "-" + yt("5.3.5" + n + Et[n]);
                  return t ? t + "-" + r : r;
                })(n.displayName, n.parentComponentId)
              : u,
          c = n.displayName,
          f =
            void 0 === c
              ? (function (e) {
                  return bt(e) ? "styled." + e : "Styled(" + ve(e) + ")";
                })(e)
              : c,
          d =
            n.displayName && n.componentId
              ? gt(n.displayName) + "-" + n.componentId
              : n.componentId || l,
          p =
            a && e.attrs
              ? Array.prototype.concat(e.attrs, s).filter(Boolean)
              : s,
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
          m = new qe(r, d, a ? e.componentStyle : void 0),
          g = m.isStatic && 0 === s.length,
          y = function (e, n) {
            return (function (e, n, r, a) {
              var i = e.attrs,
                o = e.componentStyle,
                s = e.defaultProps,
                u = e.foldedComponentIds,
                l = e.shouldForwardProp,
                c = e.styledComponentId,
                f = e.target,
                d = (function (e, t, n) {
                  void 0 === e && (e = pe);
                  var r = le({}, t, { theme: e }),
                    a = {};
                  return (
                    n.forEach(function (e) {
                      var t,
                        n,
                        i,
                        o = e;
                      for (t in (he(o) && (o = o(r)), o))
                        r[t] = a[t] =
                          "className" === t
                            ? ((n = a[t]),
                              (i = o[t]),
                              n && i ? n + " " + i : n || i)
                            : o[t];
                    }),
                    [r, a]
                  );
                })(ht(n, (0, t.useContext)(_t), s) || pe, n, i),
                p = d[0],
                h = d[1],
                v = (function (e, t, n, r) {
                  var a = tt(),
                    i = nt();
                  return t
                    ? e.generateAndInjectStyles(pe, a, i)
                    : e.generateAndInjectStyles(n, a, i);
                })(o, a, p),
                m = r,
                g = h.$as || n.$as || h.as || n.as || f,
                y = bt(g),
                b = h !== n ? le({}, n, {}, h) : n,
                k = {};
              for (var w in b)
                "$" !== w[0] &&
                  "as" !== w &&
                  ("forwardedAs" === w
                    ? (k.as = b[w])
                    : (l ? l(w, oe, g) : !y || oe(w)) && (k[w] = b[w]));
              return (
                n.style &&
                  h.style !== n.style &&
                  (k.style = le({}, n.style, {}, h.style)),
                (k.className = Array.prototype
                  .concat(u, c, v !== c ? v : null, n.className, h.className)
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
            : de),
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
              i = t && t + "-" + (bt(e) ? e : gt(ve(e)));
            return It(e, le({}, a, { attrs: p, componentId: i }), r);
          }),
          Object.defineProperty(v, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (t) {
              this._foldedDefaultProps = a ? St({}, e.defaultProps, t) : t;
            },
          }),
          (v.toString = function () {
            return "." + v.styledComponentId;
          }),
          i &&
            ue()(v, e, {
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
      var Ct = function (e) {
        return (function e(t, n, r) {
          if ((void 0 === r && (r = pe), !(0, ee.isValidElementType)(n)))
            return ke(1, String(n));
          var a = function () {
            return t(n, r, pt.apply(void 0, arguments));
          };
          return (
            (a.withConfig = function (a) {
              return e(t, n, le({}, r, {}, a));
            }),
            (a.attrs = function (a) {
              return e(
                t,
                n,
                le({}, r, {
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
        Ct[e] = Ct(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = $e(e)),
            Fe.registerId(this.componentId + 1);
        }
        var t = e.prototype;
        (t.createStyles = function (e, t, n, r) {
          var a = r(ft(this.rules, t, n, r).join(""), ""),
            i = this.componentId + e;
          n.insertRules(i, i, a);
        }),
          (t.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (t.renderStyles = function (e, t, n, r) {
            e > 2 && Fe.registerId(this.componentId + e),
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
            var n = Re();
            return (
              "<style " +
              [
                n && 'nonce="' + n + '"',
                ge + '="true"',
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
              return e.sealed ? ke(2) : e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (e.sealed) return ke(2);
              var r =
                  (((n = {})[ge] = ""),
                  (n["data-styled-version"] = "5.3.5"),
                  (n.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  n),
                a = Re();
              return (
                a && (r.nonce = a),
                [t.createElement("style", le({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new Fe({ isServer: !0 })),
            (this.sealed = !1);
        }
        var n = e.prototype;
        (n.collectStyles = function (e) {
          return this.sealed
            ? ke(2)
            : t.createElement(rt, { sheet: this.instance }, e);
        }),
          (n.interleaveWithNodeStream = function (e) {
            return ke(3);
          });
      })();
      var Tt,
        Pt,
        Ot,
        Nt,
        Rt,
        At,
        Dt,
        Lt,
        Mt = Ct,
        jt = function (e) {
          var t = e.productDetail;
          return (0, J.jsxs)(zt, {
            children: [
              (0, J.jsx)(Ht, { src: t.image, alt: "Sofa" }),
              (0, J.jsxs)(Wt, {
                children: [
                  (0, J.jsx)(Ft, { children: t.title }),
                  (0, J.jsxs)(Ut, {
                    children: ["Price: ", t.price + " \u20ac"],
                  }),
                  (0, J.jsx)(Bt, { children: t.description }),
                ],
              }),
              (0, J.jsx)(Vt, { children: "Add to Basket" }),
              (0, J.jsx)($t, {
                src: "https://nimahabibi.de/shop/image/icon/favorite-black.svg",
              }),
            ],
          });
        },
        zt = Mt.div(
          Tt ||
            (Tt = Z([
              "\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 640px;\n  background: white;\n  margin: 5px 30px 30px 30px;\n  padding: 10px 20px;\n",
            ]))
        ),
        Ft = Mt.p(
          Pt || (Pt = Z(["\n  font-size: 1rem;\n  font-weight: 700;\n"]))
        ),
        Ut = Mt.p(
          Ot ||
            (Ot = Z([
              "\n  font-size: 1.2rem;\n  font-weight: 600;\n  text-align: right;\n  color: red;\n",
            ]))
        ),
        Bt = Mt.p(Nt || (Nt = Z(["\n  font-size: 0.9rem;\n"]))),
        Ht = Mt.img(
          Rt ||
            (Rt = Z([
              "\n  margin: 10px auto 30px auto;\n  max-width: 80%;\n  max-height: 50%;\n",
            ]))
        ),
        Vt = Mt.button(
          At ||
            (At = Z([
              "\n  display: inline-block;\n  align-self: center;\n  cursor: pointer;\n  margin: 20px auto;\n  width: 200px;\n  height: 60px;\n  background-color: rgb(2, 113, 194);\n  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;\n  color: white;\n  font-size: 1.2rem;\n  font-weight: 900;\n  border: none;\n  border-radius: 5px;\n",
            ]))
        ),
        Wt = Mt.div(Dt || (Dt = Z(["\n  display: inline;\n"]))),
        $t = Mt.img(
          Lt ||
            (Lt = Z([
              "\n  align-self: center;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;\n  border-radius: 30px;\n  padding: 20px;\n  &:hover {\n    border: 1.5px solid rgb(2, 113, 194);\n  }\n",
            ]))
        ),
        Kt = function () {
          var e = (function () {
              var e = (0, t.useContext)(y).matches,
                n = e[e.length - 1];
              return n ? n.params : {};
            })().id,
            n = o((0, t.useState)({}), 2),
            r = n[0],
            a = n[1];
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
            (0, J.jsx)("div", {
              className: "productsContainer",
              children: (0, J.jsx)(jt, { productDetail: r }),
            })
          );
        },
        qt = function (e) {
          var t = e.ProductObject,
            n = e.imagesPath;
          e.doClick;
          return (0, J.jsx)("div", {
            className: "card",
            children: (0, J.jsxs)("div", {
              className: "products",
              children: [
                (0, J.jsxs)(Q, {
                  to: "product/".concat(t.id),
                  className: "NavLink",
                  children: [
                    (0, J.jsx)("div", {
                      className: "imageContainer",
                      children: (0, J.jsx)("img", {
                        className: "ProductImage",
                        src: t.image,
                        alt: "Product's image",
                      }),
                    }),
                    (0, J.jsxs)("div", {
                      className: "product-detail",
                      children: [
                        (0, J.jsx)("p", {
                          className: "Price",
                          children: t.price + " \u20ac",
                        }),
                        (0, J.jsx)("p", { children: t.mark }),
                        (0, J.jsx)("p", {
                          className: "product_title",
                          children: t.title.substring(0, 20) + "...",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, J.jsx)("div", {
                  className: "Favorite",
                  children: (0, J.jsx)("img", {
                    src: n + "icon/favorite-black.svg",
                    alt: "Favorite Icon",
                    onClick: function () {
                      return alert("clicked");
                    },
                  }),
                }),
              ],
            }),
          });
        },
        Gt = function () {
          var e = "https://nimahabibi.de/shop/image/",
            n = o((0, t.useState)([]), 2),
            r = n[0],
            a = n[1],
            i = o((0, t.useState)([]), 2),
            s = i[0],
            u = i[1],
            l = o((0, t.useState)([]), 2);
          l[0], l[1];
          function c(e) {
            alert(e + " category clicked");
          }
          return (
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
                  u(e);
                });
            }, []),
            (0, J.jsxs)("div", {
              children: [
                (0, J.jsx)("h3", { children: "Die besten Angebote" }),
                (0, J.jsx)("div", {
                  className: "productsContainer",
                  children: s.map(function (t, n) {
                    return (0,
                    J.jsx)(qt, { ProductObject: t, imagesPath: e }, n);
                  }),
                }),
                (0, J.jsx)("h3", { children: "Sortiment" }),
                (0, J.jsx)("div", {
                  className: "categoryContainer",
                  children: r.map(function (t, n) {
                    return (0,
                    J.jsx)(X, { doClick: c, catObject: t, imagesPath: e }, n);
                  }),
                }),
              ],
            })
          );
        };
      function Qt(e) {
        return (
          (Qt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Qt(e)
        );
      }
      function Jt(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Qt(e));

        );
        return e;
      }
      function Yt() {
        return (
          (Yt =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                  var r = Jt(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          Yt.apply(this, arguments)
        );
      }
      function Xt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Zt(e, t) {
        return (
          (Zt =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          Zt(e, t)
        );
      }
      function en(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && Zt(e, t);
      }
      function tn() {
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
      function nn(e) {
        return (
          (nn =
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
          nn(e)
        );
      }
      function rn(e, t) {
        if (t && ("object" === nn(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return Xt(e);
      }
      function an(e) {
        var t = tn();
        return function () {
          var n,
            r = Qt(e);
          if (t) {
            var a = Qt(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return rn(this, n);
        };
      }
      function on(e, t) {
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
          s = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function sn(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            u = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function un(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function o(e) {
              sn(i, r, a, o, s, "next", e);
            }
            function s(e) {
              sn(i, r, a, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function ln(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function cn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function fn(e, t, n) {
        return (
          t && cn(e.prototype, t),
          n && cn(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function dn(e) {
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
      function pn(e, t, n) {
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
      var hn = n(757),
        vn = n.n(hn);
      function mn(e, t, n) {
        return (
          (mn = tn()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && Zt(a, n.prototype), a;
              }),
          mn.apply(null, arguments)
        );
      }
      function gn(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (gn = function (e) {
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
              return mn(e, arguments, Qt(this).constructor);
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
              Zt(r, e)
            );
          }),
          gn(e)
        );
      }
      var yn = function (e) {
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
        bn = {
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
                s = o ? e[a + 1] : 0,
                u = a + 2 < e.length,
                l = u ? e[a + 2] : 0,
                c = i >> 2,
                f = ((3 & i) << 4) | (s >> 4),
                d = ((15 & s) << 2) | (l >> 6),
                p = 63 & l;
              u || ((p = 64), o || (d = 64)), r.push(n[c], n[f], n[d], n[p]);
            }
            return r.join("");
          },
          encodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(yn(e), t);
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
                      var s = e[n++],
                        u = e[n++];
                      t[r++] = String.fromCharCode(
                        ((15 & a) << 12) | ((63 & s) << 6) | (63 & u)
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
                s = ++a < e.length ? n[e.charAt(a)] : 64,
                u = ++a < e.length ? n[e.charAt(a)] : 64;
              if ((++a, null == i || null == o || null == s || null == u))
                throw Error();
              var l = (i << 2) | (o >> 4);
              if ((r.push(l), 64 !== s)) {
                var c = ((o << 4) & 240) | (s >> 2);
                if ((r.push(c), 64 !== u)) {
                  var f = ((s << 6) & 192) | u;
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
        kn = function (e) {
          return (function (e) {
            var t = yn(e);
            return bn.encodeByteArray(t, !0);
          })(e).replace(/\./g, "");
        },
        wn = function (e) {
          try {
            return bn.decodeString(e, !0);
          } catch (t) {
            console.error("base64Decode failed: ", t);
          }
          return null;
        };
      var xn = (function () {
        function e() {
          var t = this;
          ln(this, e),
            (this.reject = function () {}),
            (this.resolve = function () {}),
            (this.promise = new Promise(function (e, n) {
              (t.resolve = e), (t.reject = n);
            }));
        }
        return (
          fn(e, [
            {
              key: "wrapCallback",
              value: function (e) {
                var t = this;
                return function (n, r) {
                  n ? t.reject(n) : t.resolve(r),
                    "function" === typeof e &&
                      (t.promise.catch(function () {}),
                      1 === e.length ? e(n) : e(n, r));
                };
              },
            },
          ]),
          e
        );
      })();
      function Sn() {
        return "undefined" !== typeof navigator &&
          "string" === typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      function _n() {
        var e =
          "object" === typeof chrome
            ? chrome.runtime
            : "object" === typeof browser
            ? browser.runtime
            : void 0;
        return "object" === typeof e && void 0 !== e.id;
      }
      function En() {
        return "object" === typeof indexedDB;
      }
      function In() {
        return new Promise(function (e, t) {
          try {
            var n = !0,
              r = "validate-browser-context-for-indexeddb-analytics-module",
              a = self.indexedDB.open(r);
            (a.onsuccess = function () {
              a.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
            }),
              (a.onupgradeneeded = function () {
                n = !1;
              }),
              (a.onerror = function () {
                var e;
                t(
                  (null === (e = a.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (i) {
            t(i);
          }
        });
      }
      var Cn = (function (e) {
          en(n, e);
          var t = an(n);
          function n(e, r, a) {
            var i;
            return (
              ln(this, n),
              ((i = t.call(this, r)).code = e),
              (i.customData = a),
              (i.name = "FirebaseError"),
              Object.setPrototypeOf(Xt(i), n.prototype),
              Error.captureStackTrace &&
                Error.captureStackTrace(Xt(i), Tn.prototype.create),
              i
            );
          }
          return fn(n);
        })(gn(Error)),
        Tn = (function () {
          function e(t, n, r) {
            ln(this, e),
              (this.service = t),
              (this.serviceName = n),
              (this.errors = r);
          }
          return (
            fn(e, [
              {
                key: "create",
                value: function (e) {
                  var t = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
                    n = "".concat(this.service, "/").concat(e),
                    r = this.errors[e],
                    a = r ? Pn(r, t) : "Error",
                    i = ""
                      .concat(this.serviceName, ": ")
                      .concat(a, " (")
                      .concat(n, ")."),
                    o = new Cn(n, i, t);
                  return o;
                },
              },
            ]),
            e
          );
        })();
      function Pn(e, t) {
        return e.replace(On, function (e, n) {
          var r = t[n];
          return null != r ? String(r) : "<".concat(n, "?>");
        });
      }
      var On = /\{\$([^}]+)}/g;
      function Nn(e, t) {
        if (e === t) return !0;
        for (
          var n = Object.keys(e), r = Object.keys(t), a = 0, i = n;
          a < i.length;
          a++
        ) {
          var o = i[a];
          if (!r.includes(o)) return !1;
          var s = e[o],
            u = t[o];
          if (Rn(s) && Rn(u)) {
            if (!Nn(s, u)) return !1;
          } else if (s !== u) return !1;
        }
        for (var l = 0, c = r; l < c.length; l++) {
          var f = c[l];
          if (!n.includes(f)) return !1;
        }
        return !0;
      }
      function Rn(e) {
        return null !== e && "object" === typeof e;
      }
      function An(e) {
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
      function Ln(e) {
        var t = e.indexOf("?");
        if (!t) return "";
        var n = e.indexOf("#", t);
        return e.substring(t, n > 0 ? n : void 0);
      }
      var Mn = (function () {
        function e(t, n) {
          var r = this;
          ln(this, e),
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
          fn(e, [
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
                      r = on(t);
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
                    : { next: e, error: t, complete: n }).next && (r.next = jn),
                  void 0 === r.error && (r.error = jn),
                  void 0 === r.complete && (r.complete = jn);
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
      function jn() {}
      var zn = 144e5;
      function Fn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          r = t * Math.pow(n, e),
          a = Math.round(0.5 * r * (Math.random() - 0.5) * 2);
        return Math.min(zn, r + a);
      }
      function Un(e) {
        return e && e._delegate ? e._delegate : e;
      }
      var Bn = (function () {
          function e(t, n, r) {
            ln(this, e),
              (this.name = t),
              (this.instanceFactory = n),
              (this.type = r),
              (this.multipleInstances = !1),
              (this.serviceProps = {}),
              (this.instantiationMode = "LAZY"),
              (this.onInstanceCreated = null);
          }
          return (
            fn(e, [
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
        })(),
        Hn = "[DEFAULT]",
        Vn = (function () {
          function e(t, n) {
            ln(this, e),
              (this.name = t),
              (this.container = n),
              (this.component = null),
              (this.instances = new Map()),
              (this.instancesDeferred = new Map()),
              (this.instancesOptions = new Map()),
              (this.onInitCallbacks = new Map());
          }
          return (
            fn(e, [
              {
                key: "get",
                value: function (e) {
                  var t = this.normalizeInstanceIdentifier(e);
                  if (!this.instancesDeferred.has(t)) {
                    var n = new xn();
                    if (
                      (this.instancesDeferred.set(t, n),
                      this.isInitialized(t) || this.shouldAutoInitialize())
                    )
                      try {
                        var r = this.getOrInitializeService({
                          instanceIdentifier: t,
                        });
                        r && n.resolve(r);
                      } catch (a) {}
                  }
                  return this.instancesDeferred.get(t).promise;
                },
              },
              {
                key: "getImmediate",
                value: function (e) {
                  var t,
                    n = this.normalizeInstanceIdentifier(
                      null === e || void 0 === e ? void 0 : e.identifier
                    ),
                    r =
                      null !==
                        (t =
                          null === e || void 0 === e ? void 0 : e.optional) &&
                      void 0 !== t &&
                      t;
                  if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                    if (r) return null;
                    throw Error(
                      "Service ".concat(this.name, " is not available")
                    );
                  }
                  try {
                    return this.getOrInitializeService({
                      instanceIdentifier: n,
                    });
                  } catch (a) {
                    if (r) return null;
                    throw a;
                  }
                },
              },
              {
                key: "getComponent",
                value: function () {
                  return this.component;
                },
              },
              {
                key: "setComponent",
                value: function (e) {
                  if (e.name !== this.name)
                    throw Error(
                      "Mismatching Component "
                        .concat(e.name, " for Provider ")
                        .concat(this.name, ".")
                    );
                  if (this.component)
                    throw Error(
                      "Component for ".concat(
                        this.name,
                        " has already been provided"
                      )
                    );
                  if (((this.component = e), this.shouldAutoInitialize())) {
                    if (
                      (function (e) {
                        return "EAGER" === e.instantiationMode;
                      })(e)
                    )
                      try {
                        this.getOrInitializeService({ instanceIdentifier: Hn });
                      } catch (l) {}
                    var t,
                      n = on(this.instancesDeferred.entries());
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r = o(t.value, 2),
                          a = r[0],
                          i = r[1],
                          s = this.normalizeInstanceIdentifier(a);
                        try {
                          var u = this.getOrInitializeService({
                            instanceIdentifier: s,
                          });
                          i.resolve(u);
                        } catch (l) {}
                      }
                    } catch (c) {
                      n.e(c);
                    } finally {
                      n.f();
                    }
                  }
                },
              },
              {
                key: "clearInstance",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Hn;
                  this.instancesDeferred.delete(e),
                    this.instancesOptions.delete(e),
                    this.instances.delete(e);
                },
              },
              {
                key: "delete",
                value: (function () {
                  var e = un(
                    hn.mark(function e() {
                      var t;
                      return hn.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = Array.from(this.instances.values())),
                                  (e.next = 3),
                                  Promise.all(
                                    [].concat(
                                      dn(
                                        t
                                          .filter(function (e) {
                                            return "INTERNAL" in e;
                                          })
                                          .map(function (e) {
                                            return e.INTERNAL.delete();
                                          })
                                      ),
                                      dn(
                                        t
                                          .filter(function (e) {
                                            return "_delete" in e;
                                          })
                                          .map(function (e) {
                                            return e._delete();
                                          })
                                      )
                                    )
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
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isComponentSet",
                value: function () {
                  return null != this.component;
                },
              },
              {
                key: "isInitialized",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Hn;
                  return this.instances.has(e);
                },
              },
              {
                key: "getOptions",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Hn;
                  return this.instancesOptions.get(e) || {};
                },
              },
              {
                key: "initialize",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.options,
                    n = void 0 === t ? {} : t,
                    r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                  if (this.isInitialized(r))
                    throw Error(
                      ""
                        .concat(this.name, "(")
                        .concat(r, ") has already been initialized")
                    );
                  if (!this.isComponentSet())
                    throw Error(
                      "Component ".concat(
                        this.name,
                        " has not been registered yet"
                      )
                    );
                  var a,
                    i = this.getOrInitializeService({
                      instanceIdentifier: r,
                      options: n,
                    }),
                    s = on(this.instancesDeferred.entries());
                  try {
                    for (s.s(); !(a = s.n()).done; ) {
                      var u = o(a.value, 2),
                        l = u[0],
                        c = u[1],
                        f = this.normalizeInstanceIdentifier(l);
                      r === f && c.resolve(i);
                    }
                  } catch (d) {
                    s.e(d);
                  } finally {
                    s.f();
                  }
                  return i;
                },
              },
              {
                key: "onInit",
                value: function (e, t) {
                  var n,
                    r = this.normalizeInstanceIdentifier(t),
                    a =
                      null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
                        ? n
                        : new Set();
                  a.add(e), this.onInitCallbacks.set(r, a);
                  var i = this.instances.get(r);
                  return (
                    i && e(i, r),
                    function () {
                      a.delete(e);
                    }
                  );
                },
              },
              {
                key: "invokeOnInitCallbacks",
                value: function (e, t) {
                  var n = this.onInitCallbacks.get(t);
                  if (n) {
                    var r,
                      a = on(n);
                    try {
                      for (a.s(); !(r = a.n()).done; ) {
                        var i = r.value;
                        try {
                          i(e, t);
                        } catch (o) {}
                      }
                    } catch (s) {
                      a.e(s);
                    } finally {
                      a.f();
                    }
                  }
                },
              },
              {
                key: "getOrInitializeService",
                value: function (e) {
                  var t,
                    n = e.instanceIdentifier,
                    r = e.options,
                    a = void 0 === r ? {} : r,
                    i = this.instances.get(n);
                  if (
                    !i &&
                    this.component &&
                    ((i = this.component.instanceFactory(this.container, {
                      instanceIdentifier: ((t = n), t === Hn ? void 0 : t),
                      options: a,
                    })),
                    this.instances.set(n, i),
                    this.instancesOptions.set(n, a),
                    this.invokeOnInitCallbacks(i, n),
                    this.component.onInstanceCreated)
                  )
                    try {
                      this.component.onInstanceCreated(this.container, n, i);
                    } catch (o) {}
                  return i || null;
                },
              },
              {
                key: "normalizeInstanceIdentifier",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Hn;
                  return this.component
                    ? this.component.multipleInstances
                      ? e
                      : Hn
                    : e;
                },
              },
              {
                key: "shouldAutoInitialize",
                value: function () {
                  return (
                    !!this.component &&
                    "EXPLICIT" !== this.component.instantiationMode
                  );
                },
              },
            ]),
            e
          );
        })();
      var Wn,
        $n,
        Kn = (function () {
          function e(t) {
            ln(this, e), (this.name = t), (this.providers = new Map());
          }
          return (
            fn(e, [
              {
                key: "addComponent",
                value: function (e) {
                  var t = this.getProvider(e.name);
                  if (t.isComponentSet())
                    throw new Error(
                      "Component "
                        .concat(e.name, " has already been registered with ")
                        .concat(this.name)
                    );
                  t.setComponent(e);
                },
              },
              {
                key: "addOrOverwriteComponent",
                value: function (e) {
                  this.getProvider(e.name).isComponentSet() &&
                    this.providers.delete(e.name),
                    this.addComponent(e);
                },
              },
              {
                key: "getProvider",
                value: function (e) {
                  if (this.providers.has(e)) return this.providers.get(e);
                  var t = new Vn(e, this);
                  return this.providers.set(e, t), t;
                },
              },
              {
                key: "getProviders",
                value: function () {
                  return Array.from(this.providers.values());
                },
              },
            ]),
            e
          );
        })(),
        qn = [];
      !(function (e) {
        (e[(e.DEBUG = 0)] = "DEBUG"),
          (e[(e.VERBOSE = 1)] = "VERBOSE"),
          (e[(e.INFO = 2)] = "INFO"),
          (e[(e.WARN = 3)] = "WARN"),
          (e[(e.ERROR = 4)] = "ERROR"),
          (e[(e.SILENT = 5)] = "SILENT");
      })($n || ($n = {}));
      var Gn = {
          debug: $n.DEBUG,
          verbose: $n.VERBOSE,
          info: $n.INFO,
          warn: $n.WARN,
          error: $n.ERROR,
          silent: $n.SILENT,
        },
        Qn = $n.INFO,
        Jn =
          (pn((Wn = {}), $n.DEBUG, "log"),
          pn(Wn, $n.VERBOSE, "log"),
          pn(Wn, $n.INFO, "info"),
          pn(Wn, $n.WARN, "warn"),
          pn(Wn, $n.ERROR, "error"),
          Wn),
        Yn = function (e, t) {
          if (!(t < e.logLevel)) {
            var n = new Date().toISOString(),
              r = Jn[t];
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
                s = 2;
              s < i;
              s++
            )
              o[s - 2] = arguments[s];
            (a = console)[r].apply(
              a,
              ["[".concat(n, "]  ").concat(e.name, ":")].concat(o)
            );
          }
        },
        Xn = (function () {
          function e(t) {
            ln(this, e),
              (this.name = t),
              (this._logLevel = Qn),
              (this._logHandler = Yn),
              (this._userLogHandler = null),
              qn.push(this);
          }
          return (
            fn(e, [
              {
                key: "logLevel",
                get: function () {
                  return this._logLevel;
                },
                set: function (e) {
                  if (!(e in $n))
                    throw new TypeError(
                      'Invalid value "'.concat(e, '" assigned to `logLevel`')
                    );
                  this._logLevel = e;
                },
              },
              {
                key: "setLogLevel",
                value: function (e) {
                  this._logLevel = "string" === typeof e ? Gn[e] : e;
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
                      [this, $n.DEBUG].concat(t)
                    ),
                    this._logHandler.apply(this, [this, $n.DEBUG].concat(t));
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
                      [this, $n.VERBOSE].concat(t)
                    ),
                    this._logHandler.apply(this, [this, $n.VERBOSE].concat(t));
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
                    this._userLogHandler.apply(this, [this, $n.INFO].concat(t)),
                    this._logHandler.apply(this, [this, $n.INFO].concat(t));
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
                    this._userLogHandler.apply(this, [this, $n.WARN].concat(t)),
                    this._logHandler.apply(this, [this, $n.WARN].concat(t));
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
                      [this, $n.ERROR].concat(t)
                    ),
                    this._logHandler.apply(this, [this, $n.ERROR].concat(t));
                },
              },
            ]),
            e
          );
        })();
      function Zn(e, t) {
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
      function er(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Zn(Object(n), !0).forEach(function (t) {
                pn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var tr, nr;
      var rr = new WeakMap(),
        ar = new WeakMap(),
        ir = new WeakMap(),
        or = new WeakMap(),
        sr = new WeakMap();
      var ur = {
        get: function (e, t, n) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return ar.get(e);
            if ("objectStoreNames" === t)
              return e.objectStoreNames || ir.get(e);
            if ("store" === t)
              return n.objectStoreNames[1]
                ? void 0
                : n.objectStore(n.objectStoreNames[0]);
          }
          return fr(e[t]);
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
      function lr(e) {
        return e !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
          ? (
              nr ||
              (nr = [
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
                return e.apply(dr(this), n), fr(rr.get(this));
              }
            : function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return fr(e.apply(dr(this), n));
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
              var i = e.call.apply(e, [dr(this), t].concat(r));
              return ir.set(i, t.sort ? t.sort() : [t]), fr(i);
            };
      }
      function cr(e) {
        return "function" === typeof e
          ? lr(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (!ar.has(e)) {
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
                  ar.set(e, t);
                }
              })(e),
            (t = e),
            (
              tr ||
              (tr = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
            ).some(function (e) {
              return t instanceof e;
            })
              ? new Proxy(e, ur)
              : e);
        var t;
      }
      function fr(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            var t = new Promise(function (t, n) {
              var r = function () {
                  e.removeEventListener("success", a),
                    e.removeEventListener("error", i);
                },
                a = function () {
                  t(fr(e.result)), r();
                },
                i = function () {
                  n(e.error), r();
                };
              e.addEventListener("success", a), e.addEventListener("error", i);
            });
            return (
              t
                .then(function (t) {
                  t instanceof IDBCursor && rr.set(t, e);
                })
                .catch(function () {}),
              sr.set(t, e),
              t
            );
          })(e);
        if (or.has(e)) return or.get(e);
        var t = cr(e);
        return t !== e && (or.set(e, t), sr.set(t, e)), t;
      }
      var dr = function (e) {
        return sr.get(e);
      };
      var pr,
        hr,
        vr = ["get", "getKey", "getAll", "getAllKeys", "count"],
        mr = ["put", "add", "delete", "clear"],
        gr = new Map();
      function yr(e, t) {
        if (e instanceof IDBDatabase && !(t in e) && "string" === typeof t) {
          if (gr.get(t)) return gr.get(t);
          var n = t.replace(/FromIndex$/, ""),
            r = t !== n,
            a = mr.includes(n);
          if (
            n in (r ? IDBIndex : IDBObjectStore).prototype &&
            (a || vr.includes(n))
          ) {
            var i = (function () {
              var e = un(
                hn.mark(function e(t) {
                  var i,
                    o,
                    s,
                    u,
                    l,
                    c,
                    f = arguments;
                  return hn.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              o = this.transaction(
                                t,
                                a ? "readwrite" : "readonly"
                              ),
                                s = o.store,
                                u = f.length,
                                l = new Array(u > 1 ? u - 1 : 0),
                                c = 1;
                              c < u;
                              c++
                            )
                              l[c - 1] = f[c];
                            return (
                              r && (s = s.index(l.shift())),
                              (e.next = 6),
                              Promise.all([(i = s)[n].apply(i, l), a && o.done])
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
            return gr.set(t, i), i;
          }
        }
      }
      ur = (function (e) {
        return er(
          er({}, e),
          {},
          {
            get: function (t, n, r) {
              return yr(t, n) || e.get(t, n, r);
            },
            has: function (t, n) {
              return !!yr(t, n) || e.has(t, n);
            },
          }
        );
      })(ur);
      var br = (function () {
        function e(t) {
          ln(this, e), (this.container = t);
        }
        return (
          fn(e, [
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
      var kr = "@firebase/app",
        wr = "0.7.24",
        xr = new Xn("@firebase/app"),
        Sr = "[DEFAULT]",
        _r =
          (pn((pr = {}), kr, "fire-core"),
          pn(pr, "@firebase/app-compat", "fire-core-compat"),
          pn(pr, "@firebase/analytics", "fire-analytics"),
          pn(pr, "@firebase/analytics-compat", "fire-analytics-compat"),
          pn(pr, "@firebase/app-check", "fire-app-check"),
          pn(pr, "@firebase/app-check-compat", "fire-app-check-compat"),
          pn(pr, "@firebase/auth", "fire-auth"),
          pn(pr, "@firebase/auth-compat", "fire-auth-compat"),
          pn(pr, "@firebase/database", "fire-rtdb"),
          pn(pr, "@firebase/database-compat", "fire-rtdb-compat"),
          pn(pr, "@firebase/functions", "fire-fn"),
          pn(pr, "@firebase/functions-compat", "fire-fn-compat"),
          pn(pr, "@firebase/installations", "fire-iid"),
          pn(pr, "@firebase/installations-compat", "fire-iid-compat"),
          pn(pr, "@firebase/messaging", "fire-fcm"),
          pn(pr, "@firebase/messaging-compat", "fire-fcm-compat"),
          pn(pr, "@firebase/performance", "fire-perf"),
          pn(pr, "@firebase/performance-compat", "fire-perf-compat"),
          pn(pr, "@firebase/remote-config", "fire-rc"),
          pn(pr, "@firebase/remote-config-compat", "fire-rc-compat"),
          pn(pr, "@firebase/storage", "fire-gcs"),
          pn(pr, "@firebase/storage-compat", "fire-gcs-compat"),
          pn(pr, "@firebase/firestore", "fire-fst"),
          pn(pr, "@firebase/firestore-compat", "fire-fst-compat"),
          pn(pr, "fire-js", "fire-js"),
          pn(pr, "firebase", "fire-js-all"),
          pr),
        Er = new Map(),
        Ir = new Map();
      function Cr(e, t) {
        try {
          e.container.addComponent(t);
        } catch (n) {
          xr.debug(
            "Component "
              .concat(t.name, " failed to register with FirebaseApp ")
              .concat(e.name),
            n
          );
        }
      }
      function Tr(e) {
        var t = e.name;
        if (Ir.has(t))
          return (
            xr.debug(
              "There were multiple attempts to register component ".concat(
                t,
                "."
              )
            ),
            !1
          );
        Ir.set(t, e);
        var n,
          r = on(Er.values());
        try {
          for (r.s(); !(n = r.n()).done; ) {
            Cr(n.value, e);
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        return !0;
      }
      function Pr(e, t) {
        var n = e.container
          .getProvider("heartbeat")
          .getImmediate({ optional: !0 });
        return n && n.triggerHeartbeat(), e.container.getProvider(t);
      }
      var Or =
          (pn(
            (hr = {}),
            "no-app",
            "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"
          ),
          pn(hr, "bad-app-name", "Illegal App name: '{$appName}"),
          pn(
            hr,
            "duplicate-app",
            "Firebase App named '{$appName}' already exists with different options or config"
          ),
          pn(
            hr,
            "app-deleted",
            "Firebase App named '{$appName}' already deleted"
          ),
          pn(
            hr,
            "invalid-app-argument",
            "firebase.{$appName}() takes either no argument or a Firebase App instance."
          ),
          pn(
            hr,
            "invalid-log-argument",
            "First argument to `onLog` must be null or a function."
          ),
          pn(
            hr,
            "storage-open",
            "Error thrown when opening storage. Original error: {$originalErrorMessage}."
          ),
          pn(
            hr,
            "storage-get",
            "Error thrown when reading from storage. Original error: {$originalErrorMessage}."
          ),
          pn(
            hr,
            "storage-set",
            "Error thrown when writing to storage. Original error: {$originalErrorMessage}."
          ),
          pn(
            hr,
            "storage-delete",
            "Error thrown when deleting from storage. Original error: {$originalErrorMessage}."
          ),
          hr),
        Nr = new Tn("app", "Firebase", Or),
        Rr = (function () {
          function e(t, n, r) {
            var a = this;
            ln(this, e),
              (this._isDeleted = !1),
              (this._options = Object.assign({}, t)),
              (this._config = Object.assign({}, n)),
              (this._name = n.name),
              (this._automaticDataCollectionEnabled =
                n.automaticDataCollectionEnabled),
              (this._container = r),
              this.container.addComponent(
                new Bn(
                  "app",
                  function () {
                    return a;
                  },
                  "PUBLIC"
                )
              );
          }
          return (
            fn(e, [
              {
                key: "automaticDataCollectionEnabled",
                get: function () {
                  return (
                    this.checkDestroyed(), this._automaticDataCollectionEnabled
                  );
                },
                set: function (e) {
                  this.checkDestroyed(),
                    (this._automaticDataCollectionEnabled = e);
                },
              },
              {
                key: "name",
                get: function () {
                  return this.checkDestroyed(), this._name;
                },
              },
              {
                key: "options",
                get: function () {
                  return this.checkDestroyed(), this._options;
                },
              },
              {
                key: "config",
                get: function () {
                  return this.checkDestroyed(), this._config;
                },
              },
              {
                key: "container",
                get: function () {
                  return this._container;
                },
              },
              {
                key: "isDeleted",
                get: function () {
                  return this._isDeleted;
                },
                set: function (e) {
                  this._isDeleted = e;
                },
              },
              {
                key: "checkDestroyed",
                value: function () {
                  if (this.isDeleted)
                    throw Nr.create("app-deleted", { appName: this._name });
                },
              },
            ]),
            e
          );
        })(),
        Ar = "9.8.1";
      function Dr() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sr,
          t = Er.get(e);
        if (!t) throw Nr.create("no-app", { appName: e });
        return t;
      }
      function Lr(e, t, n) {
        var r,
          a = null !== (r = _r[e]) && void 0 !== r ? r : e;
        n && (a += "-".concat(n));
        var i = a.match(/\s|\//),
          o = t.match(/\s|\//);
        if (i || o) {
          var s = [
            'Unable to register library "'
              .concat(a, '" with version "')
              .concat(t, '":'),
          ];
          return (
            i &&
              s.push(
                'library name "'.concat(
                  a,
                  '" contains illegal characters (whitespace or "/")'
                )
              ),
            i && o && s.push("and"),
            o &&
              s.push(
                'version name "'.concat(
                  t,
                  '" contains illegal characters (whitespace or "/")'
                )
              ),
            void xr.warn(s.join(" "))
          );
        }
        Tr(
          new Bn(
            "".concat(a, "-version"),
            function () {
              return { library: a, version: t };
            },
            "VERSION"
          )
        );
      }
      var Mr = "firebase-heartbeat-store",
        jr = null;
      function zr() {
        return (
          jr ||
            (jr = (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = n.blocked,
                a = n.upgrade,
                i = n.blocking,
                o = n.terminated,
                s = indexedDB.open(e, t),
                u = fr(s);
              return (
                a &&
                  s.addEventListener("upgradeneeded", function (e) {
                    a(
                      fr(s.result),
                      e.oldVersion,
                      e.newVersion,
                      fr(s.transaction)
                    );
                  }),
                r &&
                  s.addEventListener("blocked", function () {
                    return r();
                  }),
                u
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
                u
              );
            })("firebase-heartbeat-database", 1, {
              upgrade: function (e, t) {
                if (0 === t) e.createObjectStore(Mr);
              },
            }).catch(function (e) {
              throw Nr.create("storage-open", {
                originalErrorMessage: e.message,
              });
            })),
          jr
        );
      }
      function Fr(e) {
        return Ur.apply(this, arguments);
      }
      function Ur() {
        return (
          (Ur = un(
            hn.mark(function e(t) {
              var n;
              return hn.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), zr();
                      case 3:
                        return (
                          (n = e.sent),
                          e.abrupt(
                            "return",
                            n.transaction(Mr).objectStore(Mr).get(Vr(t))
                          )
                        );
                      case 7:
                        throw (
                          ((e.prev = 7),
                          (e.t0 = e.catch(0)),
                          Nr.create("storage-get", {
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
          )),
          Ur.apply(this, arguments)
        );
      }
      function Br(e, t) {
        return Hr.apply(this, arguments);
      }
      function Hr() {
        return (
          (Hr = un(
            hn.mark(function e(t, n) {
              var r, a, i;
              return hn.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), zr();
                      case 3:
                        return (
                          (r = e.sent),
                          (a = r.transaction(Mr, "readwrite")),
                          (i = a.objectStore(Mr)),
                          (e.next = 8),
                          i.put(n, Vr(t))
                        );
                      case 8:
                        return e.abrupt("return", a.done);
                      case 11:
                        throw (
                          ((e.prev = 11),
                          (e.t0 = e.catch(0)),
                          Nr.create("storage-set", {
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
          )),
          Hr.apply(this, arguments)
        );
      }
      function Vr(e) {
        return "".concat(e.name, "!").concat(e.options.appId);
      }
      var Wr = (function () {
        function e(t) {
          var n = this;
          ln(this, e), (this.container = t), (this._heartbeatsCache = null);
          var r = this.container.getProvider("app").getImmediate();
          (this._storage = new Gr(r)),
            (this._heartbeatsCachePromise = this._storage
              .read()
              .then(function (e) {
                return (n._heartbeatsCache = e), e;
              }));
        }
        return (
          fn(e, [
            {
              key: "triggerHeartbeat",
              value: (function () {
                var e = un(
                  hn.mark(function e() {
                    var t, n, r;
                    return hn.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.container
                                  .getProvider("platform-logger")
                                  .getImmediate()),
                                (n = t.getPlatformInfoString()),
                                (r = $r()),
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
                var e = un(
                  hn.mark(function e() {
                    var t, n, r, a, i;
                    return hn.wrap(
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
                                ((t = $r()),
                                (n = Kr(this._heartbeatsCache.heartbeats)),
                                (r = n.heartbeatsToSend),
                                (a = n.unsentEntries),
                                (i = kn(
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
      function $r() {
        return new Date().toISOString().substring(0, 10);
      }
      function Kr(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1024,
          r = [],
          a = e.slice(),
          i = on(e);
        try {
          var o = function () {
            var e = t.value,
              i = r.find(function (t) {
                return t.agent === e.agent;
              });
            if (i) {
              if ((i.dates.push(e.date), Qr(r) > n))
                return i.dates.pop(), "break";
            } else if ((r.push({ agent: e.agent, dates: [e.date] }), Qr(r) > n))
              return r.pop(), "break";
            a = a.slice(1);
          };
          for (i.s(); !(t = i.n()).done; ) {
            var s = o();
            if ("break" === s) break;
          }
        } catch (u) {
          i.e(u);
        } finally {
          i.f();
        }
        return { heartbeatsToSend: r, unsentEntries: a };
      }
      var qr,
        Gr = (function () {
          function e(t) {
            ln(this, e),
              (this.app = t),
              (this._canUseIndexedDBPromise =
                this.runIndexedDBEnvironmentCheck());
          }
          return (
            fn(e, [
              {
                key: "runIndexedDBEnvironmentCheck",
                value: (function () {
                  var e = un(
                    hn.mark(function e() {
                      return hn.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (En()) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return", !1);
                            case 4:
                              return e.abrupt(
                                "return",
                                In()
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
                  var e = un(
                    hn.mark(function e() {
                      var t;
                      return hn.wrap(
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
                                return (e.next = 9), Fr(this.app);
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
                  var e = un(
                    hn.mark(function e(t) {
                      var n, r;
                      return hn.wrap(
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
                                    Br(this.app, {
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
                  var e = un(
                    hn.mark(function e(t) {
                      var n, r;
                      return hn.wrap(
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
                                    Br(this.app, {
                                      lastSentHeartbeatDate:
                                        null !==
                                          (n = t.lastSentHeartbeatDate) &&
                                        void 0 !== n
                                          ? n
                                          : r.lastSentHeartbeatDate,
                                      heartbeats: [].concat(
                                        dn(r.heartbeats),
                                        dn(t.heartbeats)
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
      function Qr(e) {
        return kn(JSON.stringify({ version: 2, heartbeats: e })).length;
      }
      (qr = ""),
        Tr(
          new Bn(
            "platform-logger",
            function (e) {
              return new br(e);
            },
            "PRIVATE"
          )
        ),
        Tr(
          new Bn(
            "heartbeat",
            function (e) {
              return new Wr(e);
            },
            "PRIVATE"
          )
        ),
        Lr(kr, wr, qr),
        Lr(kr, wr, "esm2017"),
        Lr("fire-js", "");
      function Jr(e, t) {
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
      var Yr;
      Object.create;
      function Xr() {
        return pn(
          {},
          "dependent-sdk-initialized-before-auth",
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
        );
      }
      var Zr = Xr,
        ea = new Tn("auth", "Firebase", Xr()),
        ta = new Xn("@firebase/auth");
      function na(e) {
        if (ta.logLevel <= $n.ERROR) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          ta.error.apply(ta, ["Auth (".concat(Ar, "): ").concat(e)].concat(n));
        }
      }
      function ra(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw oa.apply(void 0, [e].concat(n));
      }
      function aa(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return oa.apply(void 0, [e].concat(n));
      }
      function ia(e, t, n) {
        var r = Object.assign(Object.assign({}, Zr()), pn({}, t, n));
        return new Tn("auth", "Firebase", r).create(t, { appName: e.name });
      }
      function oa(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        if ("string" !== typeof e) {
          var a,
            i = n[0],
            o = dn(n.slice(1));
          return (
            o[0] && (o[0].appName = e.name),
            (a = e._errorFactory).create.apply(a, [i].concat(dn(o)))
          );
        }
        return ea.create.apply(ea, [e].concat(n));
      }
      function sa(e, t) {
        if (!e) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
            a < n;
            a++
          )
            r[a - 2] = arguments[a];
          throw oa.apply(void 0, [t].concat(r));
        }
      }
      function ua(e) {
        var t = "INTERNAL ASSERTION FAILED: " + e;
        throw (na(t), new Error(t));
      }
      function la(e, t) {
        e || ua(t);
      }
      var ca = new Map();
      function fa(e) {
        la(e instanceof Function, "Expected a class definition");
        var t = ca.get(e);
        return t
          ? (la(
              t instanceof e,
              "Instance stored in cache mismatched with class"
            ),
            t)
          : ((t = new e()), ca.set(e, t), t);
      }
      function da(e, t) {
        var n = Pr(e, "auth");
        if (n.isInitialized()) {
          var r = n.getImmediate();
          if (Nn(n.getOptions(), null !== t && void 0 !== t ? t : {})) return r;
          ra(r, "already-initialized");
        }
        return n.initialize({ options: t });
      }
      function pa() {
        var e;
        return (
          ("undefined" !== typeof self &&
            (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
          ""
        );
      }
      function ha() {
        return "http:" === va() || "https:" === va();
      }
      function va() {
        var e;
        return (
          ("undefined" !== typeof self &&
            (null === (e = self.location) || void 0 === e
              ? void 0
              : e.protocol)) ||
          null
        );
      }
      var ma = (function () {
        function e(t, n) {
          ln(this, e),
            (this.shortDelay = t),
            (this.longDelay = n),
            la(n > t, "Short delay should be less than long delay!"),
            (this.isMobile =
              ("undefined" !== typeof window &&
                !!(window.cordova || window.phonegap || window.PhoneGap) &&
                /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                  Sn()
                )) ||
              ("object" === typeof navigator &&
                "ReactNative" === navigator.product));
        }
        return (
          fn(e, [
            {
              key: "get",
              value: function () {
                return "undefined" !== typeof navigator &&
                  navigator &&
                  "onLine" in navigator &&
                  "boolean" === typeof navigator.onLine &&
                  (ha() || _n() || "connection" in navigator) &&
                  !navigator.onLine
                  ? Math.min(5e3, this.shortDelay)
                  : this.isMobile
                  ? this.longDelay
                  : this.shortDelay;
              },
            },
          ]),
          e
        );
      })();
      function ga(e, t) {
        la(e.emulator, "Emulator should always be set here");
        var n = e.emulator.url;
        return t ? "".concat(n).concat(t.startsWith("/") ? t.slice(1) : t) : n;
      }
      var ya = (function () {
          function e() {
            ln(this, e);
          }
          return (
            fn(e, null, [
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
                    : void ua(
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
                    : void ua(
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
                    : void ua(
                        "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
                      );
                },
              },
            ]),
            e
          );
        })(),
        ba =
          (pn((Yr = {}), "CREDENTIAL_MISMATCH", "custom-token-mismatch"),
          pn(Yr, "MISSING_CUSTOM_TOKEN", "internal-error"),
          pn(Yr, "INVALID_IDENTIFIER", "invalid-email"),
          pn(Yr, "MISSING_CONTINUE_URI", "internal-error"),
          pn(Yr, "INVALID_PASSWORD", "wrong-password"),
          pn(Yr, "MISSING_PASSWORD", "internal-error"),
          pn(Yr, "EMAIL_EXISTS", "email-already-in-use"),
          pn(Yr, "PASSWORD_LOGIN_DISABLED", "operation-not-allowed"),
          pn(Yr, "INVALID_IDP_RESPONSE", "invalid-credential"),
          pn(Yr, "INVALID_PENDING_TOKEN", "invalid-credential"),
          pn(
            Yr,
            "FEDERATED_USER_ID_ALREADY_LINKED",
            "credential-already-in-use"
          ),
          pn(Yr, "MISSING_REQ_TYPE", "internal-error"),
          pn(Yr, "EMAIL_NOT_FOUND", "user-not-found"),
          pn(Yr, "RESET_PASSWORD_EXCEED_LIMIT", "too-many-requests"),
          pn(Yr, "EXPIRED_OOB_CODE", "expired-action-code"),
          pn(Yr, "INVALID_OOB_CODE", "invalid-action-code"),
          pn(Yr, "MISSING_OOB_CODE", "internal-error"),
          pn(Yr, "CREDENTIAL_TOO_OLD_LOGIN_AGAIN", "requires-recent-login"),
          pn(Yr, "INVALID_ID_TOKEN", "invalid-user-token"),
          pn(Yr, "TOKEN_EXPIRED", "user-token-expired"),
          pn(Yr, "USER_NOT_FOUND", "user-token-expired"),
          pn(Yr, "TOO_MANY_ATTEMPTS_TRY_LATER", "too-many-requests"),
          pn(Yr, "INVALID_CODE", "invalid-verification-code"),
          pn(Yr, "INVALID_SESSION_INFO", "invalid-verification-id"),
          pn(Yr, "INVALID_TEMPORARY_PROOF", "invalid-credential"),
          pn(Yr, "MISSING_SESSION_INFO", "missing-verification-id"),
          pn(Yr, "SESSION_EXPIRED", "code-expired"),
          pn(Yr, "MISSING_ANDROID_PACKAGE_NAME", "missing-android-pkg-name"),
          pn(Yr, "UNAUTHORIZED_DOMAIN", "unauthorized-continue-uri"),
          pn(Yr, "INVALID_OAUTH_CLIENT_ID", "invalid-oauth-client-id"),
          pn(Yr, "ADMIN_ONLY_OPERATION", "admin-restricted-operation"),
          pn(
            Yr,
            "INVALID_MFA_PENDING_CREDENTIAL",
            "invalid-multi-factor-session"
          ),
          pn(Yr, "MFA_ENROLLMENT_NOT_FOUND", "multi-factor-info-not-found"),
          pn(Yr, "MISSING_MFA_ENROLLMENT_ID", "missing-multi-factor-info"),
          pn(
            Yr,
            "MISSING_MFA_PENDING_CREDENTIAL",
            "missing-multi-factor-session"
          ),
          pn(Yr, "SECOND_FACTOR_EXISTS", "second-factor-already-in-use"),
          pn(
            Yr,
            "SECOND_FACTOR_LIMIT_EXCEEDED",
            "maximum-second-factor-count-exceeded"
          ),
          pn(Yr, "BLOCKING_FUNCTION_ERROR_RESPONSE", "internal-error"),
          Yr),
        ka = new ma(3e4, 6e4);
      function wa(e, t) {
        return e.tenantId && !t.tenantId
          ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
          : t;
      }
      function xa(e, t, n, r) {
        return Sa.apply(this, arguments);
      }
      function Sa() {
        return (
          (Sa = un(
            vn().mark(function e(t, n, r, a) {
              var i,
                o = arguments;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = o.length > 4 && void 0 !== o[4] ? o[4] : {}),
                        e.abrupt(
                          "return",
                          _a(
                            t,
                            i,
                            un(
                              vn().mark(function e() {
                                var i, o, s, u;
                                return vn().wrap(function (e) {
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
                                          (s = An(
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
                                          ((u = e.sent)["Content-Type"] =
                                            "application/json"),
                                          t.languageCode &&
                                            (u["X-Firebase-Locale"] =
                                              t.languageCode),
                                          e.abrupt(
                                            "return",
                                            ya.fetch()(
                                              Ta(t, t.config.apiHost, r, s),
                                              Object.assign(
                                                {
                                                  method: n,
                                                  headers: u,
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
          Sa.apply(this, arguments)
        );
      }
      function _a(e, t, n) {
        return Ea.apply(this, arguments);
      }
      function Ea() {
        return (
          (Ea = un(
            vn().mark(function e(t, n, r) {
              var a, i, s, u, l, c, f, d, p, h;
              return vn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t._canInitEmulator = !1),
                          (a = Object.assign(Object.assign({}, ba), n)),
                          (e.prev = 2),
                          (i = new Pa(t)),
                          (e.next = 6),
                          Promise.race([r(), i.promise])
                        );
                      case 6:
                        return (
                          (s = e.sent),
                          i.clearNetworkTimeout(),
                          (e.next = 10),
                          s.json()
                        );
                      case 10:
                        if (!("needConfirmation" in (u = e.sent))) {
                          e.next = 13;
                          break;
                        }
                        throw Oa(
                          t,
                          "account-exists-with-different-credential",
                          u
                        );
                      case 13:
                        if (!s.ok || "errorMessage" in u) {
                          e.next = 17;
                          break;
                        }
                        return e.abrupt("return", u);
                      case 17:
                        if (
                          ((l = s.ok ? u.errorMessage : u.error.message),
                          (c = l.split(" : ")),
                          (f = o(c, 2)),
                          (d = f[0]),
                          (p = f[1]),
                          "FEDERATED_USER_ID_ALREADY_LINKED" !== d)
                        ) {
                          e.next = 23;
                          break;
                        }
                        throw Oa(t, "credential-already-in-use", u);
                      case 23:
                        if ("EMAIL_EXISTS" !== d) {
                          e.next = 25;
                          break;
                        }
                        throw Oa(t, "email-already-in-use", u);
                      case 25:
                        if (
                          ((h =
                            a[d] || d.toLowerCase().replace(/[_\s]+/g, "-")),
                          !p)
                        ) {
                          e.next = 30;
                          break;
                        }
                        throw ia(t, h, p);
                      case 30:
                        ra(t, h);
                      case 31:
                        e.next = 38;
                        break;
                      case 33:
                        if (
                          ((e.prev = 33),
                          (e.t0 = e.catch(2)),
                          !(e.t0 instanceof Cn))
                        ) {
                          e.next = 37;
                          break;
                        }
                        throw e.t0;
                      case 37:
                        ra(t, "network-request-failed");
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
          )),
          Ea.apply(this, arguments)
        );
      }
      function Ia(e, t, n, r) {
        return Ca.apply(this, arguments);
      }
      function Ca() {
        return (
          (Ca = un(
            vn().mark(function e(t, n, r, a) {
              var i,
                o,
                s = arguments;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = s.length > 4 && void 0 !== s[4] ? s[4] : {}),
                        (e.next = 3),
                        xa(t, n, r, a, i)
                      );
                    case 3:
                      return (
                        "mfaPendingCredential" in (o = e.sent) &&
                          ra(t, "multi-factor-auth-required", {
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
          Ca.apply(this, arguments)
        );
      }
      function Ta(e, t, n, r) {
        var a = "".concat(t).concat(n, "?").concat(r);
        return e.config.emulator
          ? ga(e.config, a)
          : "".concat(e.config.apiScheme, "://").concat(a);
      }
      var Pa = (function () {
        function e(t) {
          var n = this;
          ln(this, e),
            (this.auth = t),
            (this.timer = null),
            (this.promise = new Promise(function (e, t) {
              n.timer = setTimeout(function () {
                return t(aa(n.auth, "network-request-failed"));
              }, ka.get());
            }));
        }
        return (
          fn(e, [
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
      function Oa(e, t, n) {
        var r = { appName: e.name };
        n.email && (r.email = n.email),
          n.phoneNumber && (r.phoneNumber = n.phoneNumber);
        var a = aa(e, t, r);
        return (a.customData._tokenResponse = n), a;
      }
      function Na(e, t) {
        return Ra.apply(this, arguments);
      }
      function Ra() {
        return (
          (Ra = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        xa(t, "POST", "/v1/accounts:delete", n)
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Ra.apply(this, arguments)
        );
      }
      function Aa(e, t) {
        return Da.apply(this, arguments);
      }
      function Da() {
        return (
          (Da = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        xa(t, "POST", "/v1/accounts:lookup", n)
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Da.apply(this, arguments)
        );
      }
      function La(e) {
        if (e)
          try {
            var t = new Date(Number(e));
            if (!isNaN(t.getTime())) return t.toUTCString();
          } catch (n) {}
      }
      function Ma() {
        return (
          (Ma = un(
            vn().mark(function e(t) {
              var n,
                r,
                a,
                i,
                o,
                s,
                u = arguments;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = u.length > 1 && void 0 !== u[1] && u[1]),
                        (r = Un(t)),
                        (e.next = 4),
                        r.getIdToken(n)
                      );
                    case 4:
                      return (
                        (a = e.sent),
                        sa(
                          (i = za(a)) && i.exp && i.auth_time && i.iat,
                          r.auth,
                          "internal-error"
                        ),
                        (o =
                          "object" === typeof i.firebase ? i.firebase : void 0),
                        (s =
                          null === o || void 0 === o
                            ? void 0
                            : o.sign_in_provider),
                        e.abrupt("return", {
                          claims: i,
                          token: a,
                          authTime: La(ja(i.auth_time)),
                          issuedAtTime: La(ja(i.iat)),
                          expirationTime: La(ja(i.exp)),
                          signInProvider: s || null,
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
          Ma.apply(this, arguments)
        );
      }
      function ja(e) {
        return 1e3 * Number(e);
      }
      function za(e) {
        var t = o(e.split("."), 3),
          n = t[0],
          r = t[1],
          a = t[2];
        if (void 0 === n || void 0 === r || void 0 === a)
          return na("JWT malformed, contained fewer than 3 sections"), null;
        try {
          var i = wn(r);
          return i
            ? JSON.parse(i)
            : (na("Failed to decode base64 JWT payload"), null);
        } catch (s) {
          return na("Caught error parsing JWT payload as JSON", s), null;
        }
      }
      function Fa(e, t) {
        return Ua.apply(this, arguments);
      }
      function Ua() {
        return (
          (Ua = un(
            vn().mark(function e(t, n) {
              var r = arguments;
              return vn().wrap(
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
                          !(e.t0 instanceof Cn && Ba(e.t0)))
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
          Ua.apply(this, arguments)
        );
      }
      function Ba(e) {
        var t = e.code;
        return (
          t === "auth/".concat("user-disabled") ||
          t === "auth/".concat("user-token-expired")
        );
      }
      var Ha = (function () {
          function e(t) {
            ln(this, e),
              (this.user = t),
              (this.isRunning = !1),
              (this.timerId = null),
              (this.errorBackoff = 3e4);
          }
          return (
            fn(e, [
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
                      un(
                        vn().mark(function t() {
                          return vn().wrap(function (t) {
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
                  var e = un(
                    vn().mark(function e() {
                      return vn().wrap(
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
        Va = (function () {
          function e(t, n) {
            ln(this, e),
              (this.createdAt = t),
              (this.lastLoginAt = n),
              this._initializeTime();
          }
          return (
            fn(e, [
              {
                key: "_initializeTime",
                value: function () {
                  (this.lastSignInTime = La(this.lastLoginAt)),
                    (this.creationTime = La(this.createdAt));
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
      function Wa(e) {
        return $a.apply(this, arguments);
      }
      function $a() {
        return (
          ($a = un(
            vn().mark(function e(t) {
              var n, r, a, i, o, s, u, l, c, f, d;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.auth), (e.next = 3), t.getIdToken();
                    case 3:
                      return (
                        (a = e.sent), (e.next = 6), Fa(t, Aa(r, { idToken: a }))
                      );
                    case 6:
                      sa(
                        null === (i = e.sent) || void 0 === i
                          ? void 0
                          : i.users.length,
                        r,
                        "internal-error"
                      ),
                        (o = i.users[0]),
                        t._notifyReloadListener(o),
                        (s = (
                          null === (n = o.providerUserInfo) || void 0 === n
                            ? void 0
                            : n.length
                        )
                          ? Ga(o.providerUserInfo)
                          : []),
                        (u = qa(t.providerData, s)),
                        (l = t.isAnonymous),
                        (c =
                          !(t.email && o.passwordHash) &&
                          !(null === u || void 0 === u ? void 0 : u.length)),
                        (f = !!l && c),
                        (d = {
                          uid: o.localId,
                          displayName: o.displayName || null,
                          photoURL: o.photoUrl || null,
                          email: o.email || null,
                          emailVerified: o.emailVerified || !1,
                          phoneNumber: o.phoneNumber || null,
                          tenantId: o.tenantId || null,
                          providerData: u,
                          metadata: new Va(o.createdAt, o.lastLoginAt),
                          isAnonymous: f,
                        }),
                        Object.assign(t, d);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          $a.apply(this, arguments)
        );
      }
      function Ka() {
        return (Ka = un(
          vn().mark(function e(t) {
            var n;
            return vn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = Un(t)), (e.next = 3), Wa(n);
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
      function qa(e, t) {
        var n = e.filter(function (e) {
          return !t.some(function (t) {
            return t.providerId === e.providerId;
          });
        });
        return [].concat(dn(n), dn(t));
      }
      function Ga(e) {
        return e.map(function (e) {
          var t = e.providerId,
            n = Jr(e, ["providerId"]);
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
      function Qa(e, t) {
        return Ja.apply(this, arguments);
      }
      function Ja() {
        return (
          (Ja = un(
            vn().mark(function e(t, n) {
              var r;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        _a(
                          t,
                          {},
                          un(
                            vn().mark(function e() {
                              var r, a, i, o, s, u;
                              return vn().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = An({
                                          grant_type: "refresh_token",
                                          refresh_token: n,
                                        }).slice(1)),
                                        (a = t.config),
                                        (i = a.tokenApiHost),
                                        (o = a.apiKey),
                                        (s = Ta(
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
                                        ((u = e.sent)["Content-Type"] =
                                          "application/x-www-form-urlencoded"),
                                        e.abrupt(
                                          "return",
                                          ya.fetch()(s, {
                                            method: "POST",
                                            headers: u,
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
          )),
          Ja.apply(this, arguments)
        );
      }
      var Ya = (function () {
        function e() {
          ln(this, e),
            (this.refreshToken = null),
            (this.accessToken = null),
            (this.expirationTime = null);
        }
        return (
          fn(
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
                  sa(e.idToken, "internal-error"),
                    sa("undefined" !== typeof e.idToken, "internal-error"),
                    sa("undefined" !== typeof e.refreshToken, "internal-error");
                  var t =
                    "expiresIn" in e && "undefined" !== typeof e.expiresIn
                      ? Number(e.expiresIn)
                      : (function (e) {
                          var t = za(e);
                          return (
                            sa(t, "internal-error"),
                            sa("undefined" !== typeof t.exp, "internal-error"),
                            sa("undefined" !== typeof t.iat, "internal-error"),
                            Number(t.exp) - Number(t.iat)
                          );
                        })(e.idToken);
                  this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
                },
              },
              {
                key: "getToken",
                value: (function () {
                  var e = un(
                    vn().mark(function e(t) {
                      var n,
                        r = arguments;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n =
                                    r.length > 1 && void 0 !== r[1] && r[1]),
                                  sa(
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
                  var e = un(
                    vn().mark(function e(t, n) {
                      var r, a, i, o;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Qa(t, n);
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
                  return ua("not implemented");
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
                      (sa("string" === typeof r, "internal-error", {
                        appName: t,
                      }),
                      (o.refreshToken = r)),
                    a &&
                      (sa("string" === typeof a, "internal-error", {
                        appName: t,
                      }),
                      (o.accessToken = a)),
                    i &&
                      (sa("number" === typeof i, "internal-error", {
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
      function Xa(e, t) {
        sa(
          "string" === typeof e || "undefined" === typeof e,
          "internal-error",
          { appName: t }
        );
      }
      var Za = (function () {
          function e(t) {
            ln(this, e);
            var n = t.uid,
              r = t.auth,
              a = t.stsTokenManager,
              i = Jr(t, ["uid", "auth", "stsTokenManager"]);
            (this.providerId = "firebase"),
              (this.proactiveRefresh = new Ha(this)),
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
              (this.providerData = i.providerData ? dn(i.providerData) : []),
              (this.metadata = new Va(
                i.createdAt || void 0,
                i.lastLoginAt || void 0
              ));
          }
          return (
            fn(
              e,
              [
                {
                  key: "getIdToken",
                  value: (function () {
                    var e = un(
                      vn().mark(function e(t) {
                        var n;
                        return vn().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    Fa(
                                      this,
                                      this.stsTokenManager.getToken(
                                        this.auth,
                                        t
                                      )
                                    )
                                  );
                                case 2:
                                  if (
                                    (sa(
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
                      return Ma.apply(this, arguments);
                    })(this, e);
                  },
                },
                {
                  key: "reload",
                  value: function () {
                    return (function (e) {
                      return Ka.apply(this, arguments);
                    })(this);
                  },
                },
                {
                  key: "_assign",
                  value: function (e) {
                    this !== e &&
                      (sa(this.uid === e.uid, this.auth, "internal-error"),
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
                    sa(!this.reloadListener, this.auth, "internal-error"),
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
                    var e = un(
                      vn().mark(function e(t) {
                        var n,
                          r,
                          a = arguments;
                        return vn().wrap(
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
                                  return (e.next = 6), Wa(this);
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
                    var e = un(
                      vn().mark(function e() {
                        var t;
                        return vn().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.getIdToken();
                                case 2:
                                  return (
                                    (t = e.sent),
                                    (e.next = 5),
                                    Fa(this, Na(this.auth, { idToken: t }))
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
                      s,
                      u,
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
                        null !== (s = n.tenantId) && void 0 !== s ? s : void 0,
                      m =
                        null !== (u = n._redirectEventId) && void 0 !== u
                          ? u
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
                      x = n.providerData,
                      S = n.stsTokenManager;
                    sa(b && S, t, "internal-error");
                    var _ = Ya.fromJSON(this.name, S);
                    sa("string" === typeof b, t, "internal-error"),
                      Xa(f, t.name),
                      Xa(d, t.name),
                      sa("boolean" === typeof k, t, "internal-error"),
                      sa("boolean" === typeof w, t, "internal-error"),
                      Xa(p, t.name),
                      Xa(h, t.name),
                      Xa(v, t.name),
                      Xa(m, t.name),
                      Xa(g, t.name),
                      Xa(y, t.name);
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
                      x &&
                        Array.isArray(x) &&
                        (E.providerData = x.map(function (e) {
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
                    var t = un(
                      vn().mark(function t(n, r) {
                        var a,
                          i,
                          o,
                          s = arguments;
                        return vn().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (a = s.length > 2 && void 0 !== s[2] && s[2]),
                                  (i = new Ya()).updateFromServerResponse(r),
                                  (o = new e({
                                    uid: r.localId,
                                    auth: n,
                                    stsTokenManager: i,
                                    isAnonymous: a,
                                  })),
                                  (t.next = 6),
                                  Wa(o)
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
        ei = (function () {
          function e() {
            ln(this, e), (this.type = "NONE"), (this.storage = {});
          }
          return (
            fn(e, [
              {
                key: "_isAvailable",
                value: (function () {
                  var e = un(
                    vn().mark(function e() {
                      return vn().wrap(function (e) {
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
                  var e = un(
                    vn().mark(function e(t, n) {
                      return vn().wrap(
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n;
                      return vn().wrap(
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
                  var e = un(
                    vn().mark(function e(t) {
                      return vn().wrap(
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
      ei.type = "NONE";
      var ti = ei;
      function ni(e, t, n) {
        return "firebase".concat(":", e, ":").concat(t, ":").concat(n);
      }
      var ri = (function () {
        function e(t, n, r) {
          ln(this, e),
            (this.persistence = t),
            (this.auth = n),
            (this.userKey = r);
          var a = this.auth,
            i = a.config,
            o = a.name;
          (this.fullUserKey = ni(this.userKey, i.apiKey, o)),
            (this.fullPersistenceKey = ni("persistence", i.apiKey, o)),
            (this.boundEventHandler = n._onStorageEvent.bind(n)),
            this.persistence._addListener(
              this.fullUserKey,
              this.boundEventHandler
            );
        }
        return (
          fn(
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
                  var e = un(
                    vn().mark(function e() {
                      var t;
                      return vn().wrap(
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
                                    t ? Za._fromJSON(this.auth, t) : null
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n;
                      return vn().wrap(
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
                  var t = un(
                    vn().mark(function t(n, r) {
                      var a,
                        i,
                        o,
                        s,
                        u,
                        l,
                        c,
                        f,
                        d,
                        p,
                        h,
                        v = arguments;
                      return vn().wrap(
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
                                return t.abrupt("return", new e(fa(ti), n, a));
                              case 3:
                                return (
                                  (t.next = 5),
                                  Promise.all(
                                    r.map(
                                      (function () {
                                        var e = un(
                                          vn().mark(function e(t) {
                                            return vn().wrap(function (e) {
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
                                  (o = i[0] || fa(ti)),
                                  (s = ni(a, n.config.apiKey, n.name)),
                                  (u = null),
                                  (l = on(r)),
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
                                  f._get(s)
                                );
                              case 17:
                                if (!(d = t.sent)) {
                                  t.next = 23;
                                  break;
                                }
                                return (
                                  (p = Za._fromJSON(n, d)),
                                  f !== o && (u = p),
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
                                if (((o = h[0]), !u)) {
                                  t.next = 44;
                                  break;
                                }
                                return (t.next = 44), o._set(s, u.toJSON());
                              case 44:
                                return (
                                  (t.next = 46),
                                  Promise.all(
                                    r.map(
                                      (function () {
                                        var e = un(
                                          vn().mark(function e(t) {
                                            return vn().wrap(
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
                                                        t._remove(s)
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
      function ai(e) {
        var t = e.toLowerCase();
        if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
          return "Opera";
        if (ui(t)) return "IEMobile";
        if (t.includes("msie") || t.includes("trident/")) return "IE";
        if (t.includes("edge/")) return "Edge";
        if (ii(t)) return "Firefox";
        if (t.includes("silk/")) return "Silk";
        if (ci(t)) return "Blackberry";
        if (fi(t)) return "Webos";
        if (oi(t)) return "Safari";
        if ((t.includes("chrome/") || si(t)) && !t.includes("edge/"))
          return "Chrome";
        if (li(t)) return "Android";
        var n = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
        return 2 === (null === n || void 0 === n ? void 0 : n.length)
          ? n[1]
          : "Other";
      }
      function ii() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn();
        return /firefox\//i.test(e);
      }
      function oi() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Sn(),
          t = e.toLowerCase();
        return (
          t.includes("safari/") &&
          !t.includes("chrome/") &&
          !t.includes("crios/") &&
          !t.includes("android")
        );
      }
      function si() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn();
        return /crios\//i.test(e);
      }
      function ui() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn();
        return /iemobile/i.test(e);
      }
      function li() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn();
        return /android/i.test(e);
      }
      function ci() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn();
        return /blackberry/i.test(e);
      }
      function fi() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn();
        return /webos/i.test(e);
      }
      function di() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn();
        return /iphone|ipad|ipod/i.test(e);
      }
      function pi() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Sn();
        return (
          di(t) &&
          !!(null === (e = window.navigator) || void 0 === e
            ? void 0
            : e.standalone)
        );
      }
      function hi() {
        return (
          (function () {
            var e = Sn();
            return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
          })() && 10 === document.documentMode
        );
      }
      function vi() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn();
        return (
          di(e) || li(e) || fi(e) || ci(e) || /windows phone/i.test(e) || ui(e)
        );
      }
      function mi(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        switch (e) {
          case "Browser":
            t = ai(Sn());
            break;
          case "Worker":
            t = "".concat(ai(Sn()), "-").concat(e);
            break;
          default:
            t = e;
        }
        var r = n.length ? n.join(",") : "FirebaseCore-web";
        return "".concat(t, "/", "JsCore", "/").concat(Ar, "/").concat(r);
      }
      var gi = (function () {
          function e(t) {
            ln(this, e), (this.auth = t), (this.queue = []);
          }
          return (
            fn(e, [
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n, r, a, i, o, s, u;
                      return vn().wrap(
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
                                  (r = on(this.queue)),
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
                                  (o = on(n));
                                try {
                                  for (o.s(); !(s = o.n()).done; ) {
                                    u = s.value;
                                    try {
                                      u();
                                    } catch (ve) {}
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
        yi = (function () {
          function e(t, n, r) {
            ln(this, e),
              (this.app = t),
              (this.heartbeatServiceProvider = n),
              (this.config = r),
              (this.currentUser = null),
              (this.emulatorConfig = null),
              (this.operations = Promise.resolve()),
              (this.authStateSubscription = new ki(this)),
              (this.idTokenSubscription = new ki(this)),
              (this.beforeStateQueue = new gi(this)),
              (this.redirectUser = null),
              (this.isProactiveRefreshEnabled = !1),
              (this._canInitEmulator = !0),
              (this._isInitialized = !1),
              (this._deleted = !1),
              (this._initializationPromise = null),
              (this._popupRedirectResolver = null),
              (this._errorFactory = ea),
              (this.lastNotifiedUid = void 0),
              (this.languageCode = null),
              (this.tenantId = null),
              (this.settings = { appVerificationDisabledForTesting: !1 }),
              (this.frameworks = []),
              (this.name = t.name),
              (this.clientVersion = r.sdkClientVersion);
          }
          return (
            fn(e, [
              {
                key: "_initializeWithPersistence",
                value: function (e, t) {
                  var n = this;
                  return (
                    t && (this._popupRedirectResolver = fa(t)),
                    (this._initializationPromise = this.queue(
                      un(
                        vn().mark(function r() {
                          var a, i;
                          return vn().wrap(
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
                                    return (r.next = 4), ri.create(n, e);
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
                  var e = un(
                    vn().mark(function e() {
                      var t;
                      return vn().wrap(
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n, r, a, i, o, s, u;
                      return vn().wrap(
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
                                  (s =
                                    null === a || void 0 === a
                                      ? void 0
                                      : a._redirectEventId),
                                  (e.next = 12),
                                  this.tryRedirectSignIn(t)
                                );
                              case 12:
                                (u = e.sent),
                                  (o && o !== s) ||
                                    !(null === u || void 0 === u
                                      ? void 0
                                      : u.user) ||
                                    ((a = u.user), (i = !0));
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
                                  sa(
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n;
                      return vn().wrap(
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
                  var e = un(
                    vn().mark(function e(t) {
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), Wa(t);
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
                  var e = un(
                    vn().mark(function e() {
                      return vn().wrap(
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t ? Un(t) : null) &&
                                    sa(
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n,
                        r = this,
                        a = arguments;
                      return vn().wrap(
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
                                    sa(
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
                                    un(
                                      vn().mark(function e() {
                                        return vn().wrap(function (e) {
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
                  var e = un(
                    vn().mark(function e() {
                      return vn().wrap(
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
                    un(
                      vn().mark(function n() {
                        return vn().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2),
                                  t.assertedPersistence.setPersistence(fa(e))
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
                  this._errorFactory = new Tn("auth", "Firebase", e());
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
                  var e = un(
                    vn().mark(function e(t, n) {
                      var r;
                      return vn().wrap(
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.redirectPersistenceManager) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  sa(
                                    (n =
                                      (t && fa(t)) ||
                                      this._popupRedirectResolver),
                                    this,
                                    "argument-error"
                                  ),
                                  (e.next = 5),
                                  ri.create(
                                    this,
                                    [fa(n._redirectPersistence)],
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n, r;
                      return vn().wrap(
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
                                    un(
                                      vn().mark(function e() {
                                        return vn().wrap(function (e) {
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n = this;
                      return vn().wrap(
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
                                    un(
                                      vn().mark(function e() {
                                        return vn().wrap(function (e) {
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
                    sa(o, this, "internal-error"),
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
                  var e = un(
                    vn().mark(function e(t) {
                      return vn().wrap(
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
                    sa(this.persistenceManager, this, "internal-error"),
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
                    (this.clientVersion = mi(
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
                  var e = un(
                    vn().mark(function e() {
                      var t, n, r;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = pn(
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
      function bi(e) {
        return Un(e);
      }
      var ki = (function () {
        function e(t) {
          var n = this;
          ln(this, e),
            (this.auth = t),
            (this.observer = null),
            (this.addObserver = (function (e, t) {
              var n = new Mn(e, t);
              return n.subscribe.bind(n);
            })(function (e) {
              return (n.observer = e);
            }));
        }
        return (
          fn(e, [
            {
              key: "next",
              get: function () {
                return (
                  sa(this.observer, this.auth, "internal-error"),
                  this.observer.next.bind(this.observer)
                );
              },
            },
          ]),
          e
        );
      })();
      var wi = (function () {
        function e(t, n) {
          ln(this, e), (this.providerId = t), (this.signInMethod = n);
        }
        return (
          fn(e, [
            {
              key: "toJSON",
              value: function () {
                return ua("not implemented");
              },
            },
            {
              key: "_getIdTokenResponse",
              value: function (e) {
                return ua("not implemented");
              },
            },
            {
              key: "_linkToIdToken",
              value: function (e, t) {
                return ua("not implemented");
              },
            },
            {
              key: "_getReauthenticationResolver",
              value: function (e) {
                return ua("not implemented");
              },
            },
          ]),
          e
        );
      })();
      function xi(e, t) {
        return Si.apply(this, arguments);
      }
      function Si() {
        return (
          (Si = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        xa(t, "POST", "/v1/accounts:update", n)
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Si.apply(this, arguments)
        );
      }
      function _i(e, t) {
        return Ei.apply(this, arguments);
      }
      function Ei() {
        return (
          (Ei = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Ia(
                          t,
                          "POST",
                          "/v1/accounts:signInWithPassword",
                          wa(t, n)
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Ei.apply(this, arguments)
        );
      }
      function Ii(e, t) {
        return Ci.apply(this, arguments);
      }
      function Ci() {
        return (
          (Ci = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Ia(
                          t,
                          "POST",
                          "/v1/accounts:signInWithEmailLink",
                          wa(t, n)
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Ci.apply(this, arguments)
        );
      }
      function Ti(e, t) {
        return Pi.apply(this, arguments);
      }
      function Pi() {
        return (
          (Pi = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Ia(
                          t,
                          "POST",
                          "/v1/accounts:signInWithEmailLink",
                          wa(t, n)
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Pi.apply(this, arguments)
        );
      }
      var Oi = (function (e) {
        en(n, e);
        var t = an(n);
        function n(e, r, a) {
          var i,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
          return (
            ln(this, n),
            ((i = t.call(this, "password", a))._email = e),
            (i._password = r),
            (i._tenantId = o),
            i
          );
        }
        return (
          fn(
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
                  var e = un(
                    vn().mark(function e(t) {
                      return vn().wrap(
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
                                  _i(t, {
                                    returnSecureToken: !0,
                                    email: this._email,
                                    password: this._password,
                                  })
                                );
                              case 4:
                                return e.abrupt(
                                  "return",
                                  Ii(t, {
                                    email: this._email,
                                    oobCode: this._password,
                                  })
                                );
                              case 5:
                                ra(t, "internal-error");
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
                  var e = un(
                    vn().mark(function e(t, n) {
                      return vn().wrap(
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
                                  xi(t, {
                                    idToken: n,
                                    returnSecureToken: !0,
                                    email: this._email,
                                    password: this._password,
                                  })
                                );
                              case 4:
                                return e.abrupt(
                                  "return",
                                  Ti(t, {
                                    idToken: n,
                                    email: this._email,
                                    oobCode: this._password,
                                  })
                                );
                              case 5:
                                ra(t, "internal-error");
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
      })(wi);
      function Ni(e, t) {
        return Ri.apply(this, arguments);
      }
      function Ri() {
        return (
          (Ri = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Ia(t, "POST", "/v1/accounts:signInWithIdp", wa(t, n))
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Ri.apply(this, arguments)
        );
      }
      var Ai = (function (e) {
        en(n, e);
        var t = an(n);
        function n() {
          var e;
          return (
            ln(this, n), ((e = t.apply(this, arguments)).pendingToken = null), e
          );
        }
        return (
          fn(
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
                  return Ni(e, this.buildRequest());
                },
              },
              {
                key: "_linkToIdToken",
                value: function (e, t) {
                  var n = this.buildRequest();
                  return (n.idToken = t), Ni(e, n);
                },
              },
              {
                key: "_getReauthenticationResolver",
                value: function (e) {
                  var t = this.buildRequest();
                  return (t.autoCreate = !1), Ni(e, t);
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
                      (e.postBody = An(t));
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
                      : ra("argument-error"),
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
                    i = Jr(t, ["providerId", "signInMethod"]);
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
      })(wi);
      function Di(e, t) {
        return Li.apply(this, arguments);
      }
      function Li() {
        return (
          (Li = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        xa(
                          t,
                          "POST",
                          "/v1/accounts:sendVerificationCode",
                          wa(t, n)
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Li.apply(this, arguments)
        );
      }
      function Mi() {
        return (
          (Mi = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Ia(
                          t,
                          "POST",
                          "/v1/accounts:signInWithPhoneNumber",
                          wa(t, n)
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Mi.apply(this, arguments)
        );
      }
      function ji() {
        return (
          (ji = un(
            vn().mark(function e(t, n) {
              var r;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Ia(
                          t,
                          "POST",
                          "/v1/accounts:signInWithPhoneNumber",
                          wa(t, n)
                        )
                      );
                    case 2:
                      if (!(r = e.sent).temporaryProof) {
                        e.next = 5;
                        break;
                      }
                      throw Oa(
                        t,
                        "account-exists-with-different-credential",
                        r
                      );
                    case 5:
                      return e.abrupt("return", r);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          ji.apply(this, arguments)
        );
      }
      var zi = pn({}, "USER_NOT_FOUND", "user-not-found");
      function Fi() {
        return (
          (Fi = un(
            vn().mark(function e(t, n) {
              var r;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = Object.assign(Object.assign({}, n), {
                          operation: "REAUTH",
                        })),
                        e.abrupt(
                          "return",
                          Ia(
                            t,
                            "POST",
                            "/v1/accounts:signInWithPhoneNumber",
                            wa(t, r),
                            zi
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
          Fi.apply(this, arguments)
        );
      }
      var Ui = (function (e) {
        en(n, e);
        var t = an(n);
        function n(e) {
          var r;
          return (
            ln(this, n), ((r = t.call(this, "phone", "phone")).params = e), r
          );
        }
        return (
          fn(
            n,
            [
              {
                key: "_getIdTokenResponse",
                value: function (e) {
                  return (function (e, t) {
                    return Mi.apply(this, arguments);
                  })(e, this._makeVerificationRequest());
                },
              },
              {
                key: "_linkToIdToken",
                value: function (e, t) {
                  return (function (e, t) {
                    return ji.apply(this, arguments);
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
                    return Fi.apply(this, arguments);
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
      })(wi);
      var Bi = (function () {
        function e(t) {
          var n, r, a, i, o, s;
          ln(this, e);
          var u = Dn(Ln(t)),
            l = null !== (n = u.apiKey) && void 0 !== n ? n : null,
            c = null !== (r = u.oobCode) && void 0 !== r ? r : null,
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
            })(null !== (a = u.mode) && void 0 !== a ? a : null);
          sa(l && c && f, "argument-error"),
            (this.apiKey = l),
            (this.operation = f),
            (this.code = c),
            (this.continueUrl =
              null !== (i = u.continueUrl) && void 0 !== i ? i : null),
            (this.languageCode =
              null !== (o = u.languageCode) && void 0 !== o ? o : null),
            (this.tenantId =
              null !== (s = u.tenantId) && void 0 !== s ? s : null);
        }
        return (
          fn(e, null, [
            {
              key: "parseLink",
              value: function (t) {
                var n = (function (e) {
                  var t = Dn(Ln(e)).link,
                    n = t ? Dn(Ln(t)).deep_link_id : null,
                    r = Dn(Ln(e)).deep_link_id;
                  return (r ? Dn(Ln(r)).link : null) || r || n || t || e;
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
      var Hi = (function () {
        function e() {
          ln(this, e), (this.providerId = e.PROVIDER_ID);
        }
        return (
          fn(e, null, [
            {
              key: "credential",
              value: function (e, t) {
                return Oi._fromEmailAndPassword(e, t);
              },
            },
            {
              key: "credentialWithLink",
              value: function (e, t) {
                var n = Bi.parseLink(t);
                return (
                  sa(n, "argument-error"),
                  Oi._fromEmailAndCode(e, n.code, n.tenantId)
                );
              },
            },
          ]),
          e
        );
      })();
      (Hi.PROVIDER_ID = "password"),
        (Hi.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
        (Hi.EMAIL_LINK_SIGN_IN_METHOD = "emailLink");
      var Vi = (function () {
          function e(t) {
            ln(this, e),
              (this.providerId = t),
              (this.defaultLanguageCode = null),
              (this.customParameters = {});
          }
          return (
            fn(e, [
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
        Wi = (function (e) {
          en(n, e);
          var t = an(n);
          function n() {
            var e;
            return ln(this, n), ((e = t.apply(this, arguments)).scopes = []), e;
          }
          return (
            fn(n, [
              {
                key: "addScope",
                value: function (e) {
                  return this.scopes.includes(e) || this.scopes.push(e), this;
                },
              },
              {
                key: "getScopes",
                value: function () {
                  return dn(this.scopes);
                },
              },
            ]),
            n
          );
        })(Vi),
        $i = (function (e) {
          en(n, e);
          var t = an(n);
          function n() {
            return ln(this, n), t.call(this, "facebook.com");
          }
          return (
            fn(n, null, [
              {
                key: "credential",
                value: function (e) {
                  return Ai._fromParams({
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
        })(Wi);
      ($i.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
        ($i.PROVIDER_ID = "facebook.com");
      var Ki = (function (e) {
        en(n, e);
        var t = an(n);
        function n() {
          var e;
          return (
            ln(this, n), (e = t.call(this, "google.com")).addScope("profile"), e
          );
        }
        return (
          fn(n, null, [
            {
              key: "credential",
              value: function (e, t) {
                return Ai._fromParams({
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
      })(Wi);
      (Ki.GOOGLE_SIGN_IN_METHOD = "google.com"),
        (Ki.PROVIDER_ID = "google.com");
      var qi = (function (e) {
        en(n, e);
        var t = an(n);
        function n() {
          return ln(this, n), t.call(this, "github.com");
        }
        return (
          fn(n, null, [
            {
              key: "credential",
              value: function (e) {
                return Ai._fromParams({
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
      })(Wi);
      (qi.GITHUB_SIGN_IN_METHOD = "github.com"),
        (qi.PROVIDER_ID = "github.com");
      var Gi = (function (e) {
        en(n, e);
        var t = an(n);
        function n() {
          return ln(this, n), t.call(this, "twitter.com");
        }
        return (
          fn(n, null, [
            {
              key: "credential",
              value: function (e, t) {
                return Ai._fromParams({
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
      })(Wi);
      function Qi(e, t) {
        return Ji.apply(this, arguments);
      }
      function Ji() {
        return (
          (Ji = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Ia(t, "POST", "/v1/accounts:signUp", wa(t, n))
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Ji.apply(this, arguments)
        );
      }
      (Gi.TWITTER_SIGN_IN_METHOD = "twitter.com"),
        (Gi.PROVIDER_ID = "twitter.com");
      var Yi = (function () {
        function e(t) {
          ln(this, e),
            (this.user = t.user),
            (this.providerId = t.providerId),
            (this._tokenResponse = t._tokenResponse),
            (this.operationType = t.operationType);
        }
        return (
          fn(e, null, [
            {
              key: "_fromIdTokenResponse",
              value: (function () {
                var t = un(
                  vn().mark(function t(n, r, a) {
                    var i,
                      o,
                      s,
                      u,
                      l = arguments;
                    return vn().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (i = l.length > 3 && void 0 !== l[3] && l[3]),
                              (t.next = 3),
                              Za._fromIdTokenResponse(n, a, i)
                            );
                          case 3:
                            return (
                              (o = t.sent),
                              (s = Xi(a)),
                              (u = new e({
                                user: o,
                                providerId: s,
                                _tokenResponse: a,
                                operationType: r,
                              })),
                              t.abrupt("return", u)
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
                var t = un(
                  vn().mark(function t(n, r, a) {
                    var i;
                    return vn().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n._updateTokensIfNecessary(a, !0)
                            );
                          case 2:
                            return (
                              (i = Xi(a)),
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
      function Xi(e) {
        return e.providerId
          ? e.providerId
          : "phoneNumber" in e
          ? "phone"
          : null;
      }
      var Zi = (function (e) {
        en(n, e);
        var t = an(n);
        function n(e, r, a, i) {
          var o, s;
          return (
            ln(this, n),
            ((o = t.call(this, r.code, r.message)).operationType = a),
            (o.user = i),
            Object.setPrototypeOf(Xt(o), n.prototype),
            (o.customData = {
              appName: e.name,
              tenantId: null !== (s = e.tenantId) && void 0 !== s ? s : void 0,
              _serverResponse: r.customData._serverResponse,
              operationType: a,
            }),
            o
          );
        }
        return (
          fn(n, null, [
            {
              key: "_fromErrorAndOperation",
              value: function (e, t, r, a) {
                return new n(e, t, r, a);
              },
            },
          ]),
          n
        );
      })(Cn);
      function eo(e, t, n, r) {
        return (
          "reauthenticate" === t
            ? n._getReauthenticationResolver(e)
            : n._getIdTokenResponse(e)
        ).catch(function (n) {
          if (n.code === "auth/".concat("multi-factor-auth-required"))
            throw Zi._fromErrorAndOperation(e, n, t, r);
          throw n;
        });
      }
      function to(e, t) {
        return no.apply(this, arguments);
      }
      function no() {
        return (
          (no = un(
            vn().mark(function e(t, n) {
              var r,
                a,
                i = arguments;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = i.length > 2 && void 0 !== i[2] && i[2]),
                        (e.t0 = Fa),
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
                        e.abrupt("return", Yi._forOperation(t, "link", a))
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          no.apply(this, arguments)
        );
      }
      function ro(e, t) {
        return ao.apply(this, arguments);
      }
      function ao() {
        return (
          (ao = un(
            vn().mark(function e(t, n) {
              var r,
                a,
                i,
                o,
                s,
                u,
                l = arguments;
              return vn().wrap(
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
                          Fa(t, eo(a, i, n, t), r)
                        );
                      case 6:
                        return (
                          sa((o = e.sent).idToken, a, "internal-error"),
                          sa((s = za(o.idToken)), a, "internal-error"),
                          (u = s.sub),
                          sa(t.uid === u, a, "user-mismatch"),
                          e.abrupt("return", Yi._forOperation(t, i, o))
                        );
                      case 15:
                        throw (
                          ((e.prev = 15),
                          (e.t0 = e.catch(3)),
                          (null === e.t0 || void 0 === e.t0
                            ? void 0
                            : e.t0.code) === "auth/".concat("user-not-found") &&
                            ra(a, "user-mismatch"),
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
          ao.apply(this, arguments)
        );
      }
      function io(e, t) {
        return oo.apply(this, arguments);
      }
      function oo() {
        return (
          (oo = un(
            vn().mark(function e(t, n) {
              var r,
                a,
                i,
                o,
                s = arguments;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = s.length > 2 && void 0 !== s[2] && s[2]),
                        (a = "signIn"),
                        (e.next = 4),
                        eo(t, a, n)
                      );
                    case 4:
                      return (
                        (i = e.sent),
                        (e.next = 7),
                        Yi._fromIdTokenResponse(t, a, i)
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
          oo.apply(this, arguments)
        );
      }
      function so(e, t) {
        return uo.apply(this, arguments);
      }
      function uo() {
        return (
          (uo = un(
            vn().mark(function e(t, n) {
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", io(bi(t), n));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          uo.apply(this, arguments)
        );
      }
      function lo() {
        return (
          (lo = un(
            vn().mark(function e(t, n, r) {
              var a, i, o;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = bi(t)),
                        (e.next = 3),
                        Qi(a, { returnSecureToken: !0, email: n, password: r })
                      );
                    case 3:
                      return (
                        (i = e.sent),
                        (e.next = 6),
                        Yi._fromIdTokenResponse(a, "signIn", i)
                      );
                    case 6:
                      return (
                        (o = e.sent), (e.next = 9), a._updateCurrentUser(o.user)
                      );
                    case 9:
                      return e.abrupt("return", o);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          lo.apply(this, arguments)
        );
      }
      function co(e, t) {
        return xa(e, "POST", "/v2/accounts/mfaEnrollment:start", wa(e, t));
      }
      new WeakMap();
      var fo = "__sak",
        po = (function () {
          function e(t, n) {
            ln(this, e), (this.storageRetriever = t), (this.type = n);
          }
          return (
            fn(e, [
              {
                key: "_isAvailable",
                value: function () {
                  try {
                    return this.storage
                      ? (this.storage.setItem(fo, "1"),
                        this.storage.removeItem(fo),
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
      var ho = (function (e) {
        en(n, e);
        var t = an(n);
        function n() {
          var e;
          return (
            ln(this, n),
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
                var e = Sn();
                return oi(e) || di(e);
              })() &&
              (function () {
                try {
                  return !(!window || window === window.top);
                } catch (e) {
                  return !1;
                }
              })()),
            (e.fallbackToPolling = vi()),
            (e._shouldAllowMigration = !0),
            e
          );
        }
        return (
          fn(n, [
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
                  hi() && o !== e.newValue && e.newValue !== e.oldValue
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
                var e = un(
                  vn().mark(function e(t, r) {
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Yt(Qt(n.prototype), "_set", this).call(
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
                var e = un(
                  vn().mark(function e(t) {
                    var r;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Yt(Qt(n.prototype), "_get", this).call(this, t)
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
                var e = un(
                  vn().mark(function e(t) {
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Yt(Qt(n.prototype), "_remove", this).call(
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
      })(po);
      ho.type = "LOCAL";
      var vo = ho,
        mo = (function (e) {
          en(n, e);
          var t = an(n);
          function n() {
            return (
              ln(this, n),
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
            fn(n, [
              { key: "_addListener", value: function (e, t) {} },
              { key: "_removeListener", value: function (e, t) {} },
            ]),
            n
          );
        })(po);
      mo.type = "SESSION";
      var go = mo;
      function yo(e) {
        return Promise.all(
          e.map(
            (function () {
              var e = un(
                vn().mark(function e(t) {
                  var n;
                  return vn().wrap(
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
      var bo = (function () {
        function e(t) {
          ln(this, e),
            (this.eventTarget = t),
            (this.handlersMap = {}),
            (this.boundEventHandler = this.handleEvent.bind(this));
        }
        return (
          fn(
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n, r, a, i, o, s, u, l;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = (n = t).data),
                                  (a = r.eventId),
                                  (i = r.eventType),
                                  (o = r.data),
                                  null === (s = this.handlersMap[i]) ||
                                  void 0 === s
                                    ? void 0
                                    : s.size)
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
                                  (u = Array.from(s).map(
                                    (function () {
                                      var e = un(
                                        vn().mark(function e(t) {
                                          return vn().wrap(function (e) {
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
                                  yo(u)
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
      function ko() {
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
      bo.receivers = [];
      var wo = (function () {
        function e(t) {
          ln(this, e), (this.target = t), (this.handlers = new Set());
        }
        return (
          fn(e, [
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
                var e = un(
                  vn().mark(function e(t, n) {
                    var r,
                      a,
                      i,
                      o,
                      s = this,
                      u = arguments;
                    return vn().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r =
                                u.length > 2 && void 0 !== u[2] ? u[2] : 50),
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
                              new Promise(function (e, u) {
                                var l = ko("", 20);
                                a.port1.start();
                                var c = setTimeout(function () {
                                  u(new Error("unsupported_event"));
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
                                              u(new Error("timeout"));
                                            }, 3e3));
                                          break;
                                        case "done":
                                          clearTimeout(i), e(n.data.response);
                                          break;
                                        default:
                                          clearTimeout(c),
                                            clearTimeout(i),
                                            u(new Error("invalid_response"));
                                      }
                                  },
                                }),
                                  s.handlers.add(o),
                                  a.port1.addEventListener(
                                    "message",
                                    o.onMessage
                                  ),
                                  s.target.postMessage(
                                    { eventType: t, eventId: l, data: n },
                                    [a.port2]
                                  );
                              }).finally(function () {
                                o && s.removeMessageHandler(o);
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
      function xo() {
        return window;
      }
      function So() {
        return (
          "undefined" !== typeof xo().WorkerGlobalScope &&
          "function" === typeof xo().importScripts
        );
      }
      function _o() {
        return Eo.apply(this, arguments);
      }
      function Eo() {
        return (Eo = un(
          vn().mark(function e() {
            var t;
            return vn().wrap(
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
      function Io() {
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
      var Co = "firebaseLocalStorageDb",
        To = "firebaseLocalStorage",
        Po = "fbase_key",
        Oo = (function () {
          function e(t) {
            ln(this, e), (this.request = t);
          }
          return (
            fn(e, [
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
      function No(e, t) {
        return e
          .transaction([To], t ? "readwrite" : "readonly")
          .objectStore(To);
      }
      function Ro() {
        var e = indexedDB.deleteDatabase(Co);
        return new Oo(e).toPromise();
      }
      function Ao() {
        var e = indexedDB.open(Co, 1);
        return new Promise(function (t, n) {
          e.addEventListener("error", function () {
            n(e.error);
          }),
            e.addEventListener("upgradeneeded", function () {
              var t = e.result;
              try {
                t.createObjectStore(To, { keyPath: Po });
              } catch (r) {
                n(r);
              }
            }),
            e.addEventListener(
              "success",
              un(
                vn().mark(function n() {
                  var r;
                  return vn().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if ((r = e.result).objectStoreNames.contains(To)) {
                            n.next = 12;
                            break;
                          }
                          return r.close(), (n.next = 5), Ro();
                        case 5:
                          return (n.t0 = t), (n.next = 8), Ao();
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
      function Do(e, t, n) {
        return Lo.apply(this, arguments);
      }
      function Lo() {
        return (Lo = un(
          vn().mark(function e(t, n, r) {
            var a, i;
            return vn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = No(t, !0).put(
                        (pn((a = {}), Po, n), pn(a, "value", r), a)
                      )),
                      e.abrupt("return", new Oo(i).toPromise())
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Mo(e, t) {
        return jo.apply(this, arguments);
      }
      function jo() {
        return (jo = un(
          vn().mark(function e(t, n) {
            var r, a;
            return vn().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = No(t, !1).get(n)),
                      (e.next = 3),
                      new Oo(r).toPromise()
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
      function zo(e, t) {
        var n = No(e, !0).delete(t);
        return new Oo(n).toPromise();
      }
      var Fo = (function () {
        function e() {
          ln(this, e),
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
          fn(e, [
            {
              key: "_openDb",
              value: (function () {
                var e = un(
                  vn().mark(function e() {
                    return vn().wrap(
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
                              return (e.next = 4), Ao();
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
                var e = un(
                  vn().mark(function e(t) {
                    var n, r;
                    return vn().wrap(
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
                var e = un(
                  vn().mark(function e() {
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                So()
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
                var e = un(
                  vn().mark(function e() {
                    var t = this;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (this.receiver = bo._getInstance(
                                So() ? self : null
                              )),
                                this.receiver._subscribe(
                                  "keyChanged",
                                  (function () {
                                    var e = un(
                                      vn().mark(function e(n, r) {
                                        var a;
                                        return vn().wrap(function (e) {
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
                                    var e = un(
                                      vn().mark(function e(t, n) {
                                        return vn().wrap(function (e) {
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
                var e = un(
                  vn().mark(function e() {
                    var t, n, r;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), _o();
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
                                (this.sender = new wo(
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
                var e = un(
                  vn().mark(function e(t) {
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                this.sender &&
                                this.activeServiceWorker &&
                                Io() === this.activeServiceWorker
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
                var e = un(
                  vn().mark(function e() {
                    var t;
                    return vn().wrap(
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
                              return (e.next = 5), Ao();
                            case 5:
                              return (t = e.sent), (e.next = 8), Do(t, fo, "1");
                            case 8:
                              return (e.next = 10), zo(t, fo);
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
                var e = un(
                  vn().mark(function e(t) {
                    return vn().wrap(
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
                var e = un(
                  vn().mark(function e(t, n) {
                    var r = this;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this._withPendingWrite(
                                  un(
                                    vn().mark(function e() {
                                      return vn().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                r._withRetries(function (e) {
                                                  return Do(e, t, n);
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
                var e = un(
                  vn().mark(function e(t) {
                    var n;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this._withRetries(function (e) {
                                  return Mo(e, t);
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
                var e = un(
                  vn().mark(function e(t) {
                    var n = this;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this._withPendingWrite(
                                  un(
                                    vn().mark(function e() {
                                      return vn().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                n._withRetries(function (e) {
                                                  return zo(e, t);
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
                var e = un(
                  vn().mark(function e() {
                    var t, n, r, a, i, o, s, u, l, c, f;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this._withRetries(function (e) {
                                  var t = No(e, !1).getAll();
                                  return new Oo(t).toPromise();
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
                              (n = []), (r = new Set()), (a = on(t));
                              try {
                                for (a.s(); !(i = a.n()).done; )
                                  (o = i.value),
                                    (s = o.fbase_key),
                                    (u = o.value),
                                    r.add(s),
                                    JSON.stringify(this.localCache[s]) !==
                                      JSON.stringify(u) &&
                                      (this.notifyListeners(s, u), n.push(s));
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
                    un(
                      vn().mark(function t() {
                        return vn().wrap(function (t) {
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
      Fo.type = "LOCAL";
      var Uo = Fo;
      function Bo(e, t) {
        return xa(e, "POST", "/v2/accounts/mfaSignIn:start", wa(e, t));
      }
      function Ho(e) {
        return new Promise(function (t, n) {
          var r = document.createElement("script");
          r.setAttribute("src", e),
            (r.onload = t),
            (r.onerror = function (e) {
              var t = aa("internal-error");
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
      function Vo(e) {
        return "__".concat(e).concat(Math.floor(1e6 * Math.random()));
      }
      Vo("rcb"), new ma(3e4, 6e4);
      var Wo = "recaptcha";
      function $o(e, t, n) {
        return Ko.apply(this, arguments);
      }
      function Ko() {
        return (
          (Ko = un(
            vn().mark(function e(t, n, r) {
              var a, i, o, s, u, l, c, f, d;
              return vn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), r.verify();
                      case 2:
                        if (
                          ((i = e.sent),
                          (e.prev = 3),
                          sa("string" === typeof i, t, "argument-error"),
                          sa(r.type === Wo, t, "argument-error"),
                          !(
                            "session" in
                            (o = "string" === typeof n ? { phoneNumber: n } : n)
                          ))
                        ) {
                          e.next = 26;
                          break;
                        }
                        if (((s = o.session), !("phoneNumber" in o))) {
                          e.next = 17;
                          break;
                        }
                        return (
                          sa("enroll" === s.type, t, "internal-error"),
                          (e.next = 13),
                          co(t, {
                            idToken: s.credential,
                            phoneEnrollmentInfo: {
                              phoneNumber: o.phoneNumber,
                              recaptchaToken: i,
                            },
                          })
                        );
                      case 13:
                        return (
                          (u = e.sent),
                          e.abrupt("return", u.phoneSessionInfo.sessionInfo)
                        );
                      case 17:
                        return (
                          sa("signin" === s.type, t, "internal-error"),
                          sa(
                            (l =
                              (null === (a = o.multiFactorHint) || void 0 === a
                                ? void 0
                                : a.uid) || o.multiFactorUid),
                            t,
                            "missing-multi-factor-info"
                          ),
                          (e.next = 22),
                          Bo(t, {
                            mfaPendingCredential: s.credential,
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
                          Di(t, {
                            phoneNumber: o.phoneNumber,
                            recaptchaToken: i,
                          })
                        );
                      case 28:
                        return (
                          (f = e.sent),
                          (d = f.sessionInfo),
                          e.abrupt("return", d)
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
          )),
          Ko.apply(this, arguments)
        );
      }
      var qo = (function () {
        function e(t) {
          ln(this, e), (this.providerId = e.PROVIDER_ID), (this.auth = bi(t));
        }
        return (
          fn(
            e,
            [
              {
                key: "verifyPhoneNumber",
                value: function (e, t) {
                  return $o(this.auth, e, Un(t));
                },
              },
            ],
            [
              {
                key: "credential",
                value: function (e, t) {
                  return Ui._fromVerification(e, t);
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
                  return n && r ? Ui._fromTokenResponse(n, r) : null;
                },
              },
            ]
          ),
          e
        );
      })();
      function Go(e, t) {
        return t
          ? fa(t)
          : (sa(e._popupRedirectResolver, e, "argument-error"),
            e._popupRedirectResolver);
      }
      (qo.PROVIDER_ID = "phone"), (qo.PHONE_SIGN_IN_METHOD = "phone");
      var Qo = (function (e) {
        en(n, e);
        var t = an(n);
        function n(e) {
          var r;
          return (
            ln(this, n), ((r = t.call(this, "custom", "custom")).params = e), r
          );
        }
        return (
          fn(n, [
            {
              key: "_getIdTokenResponse",
              value: function (e) {
                return Ni(e, this._buildIdpRequest());
              },
            },
            {
              key: "_linkToIdToken",
              value: function (e, t) {
                return Ni(e, this._buildIdpRequest(t));
              },
            },
            {
              key: "_getReauthenticationResolver",
              value: function (e) {
                return Ni(e, this._buildIdpRequest());
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
      })(wi);
      function Jo(e) {
        return io(e.auth, new Qo(e), e.bypassAuthState);
      }
      function Yo(e) {
        var t = e.auth,
          n = e.user;
        return sa(n, t, "internal-error"), ro(n, new Qo(e), e.bypassAuthState);
      }
      function Xo(e) {
        return Zo.apply(this, arguments);
      }
      function Zo() {
        return (
          (Zo = un(
            vn().mark(function e(t) {
              var n, r;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.auth),
                        sa((r = t.user), n, "internal-error"),
                        e.abrupt("return", to(r, new Qo(t), t.bypassAuthState))
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Zo.apply(this, arguments)
        );
      }
      var es = (function () {
          function e(t, n, r, a) {
            var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            ln(this, e),
              (this.auth = t),
              (this.resolver = r),
              (this.user = a),
              (this.bypassAuthState = i),
              (this.pendingPromise = null),
              (this.eventManager = null),
              (this.filter = Array.isArray(n) ? n : [n]);
          }
          return (
            fn(e, [
              {
                key: "execute",
                value: function () {
                  var e = this;
                  return new Promise(
                    (function () {
                      var t = un(
                        vn().mark(function t(n, r) {
                          return vn().wrap(
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n, r, a, i, o, s, u;
                      return vn().wrap(
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
                                  (s = t.type),
                                  !o)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return this.reject(o), e.abrupt("return");
                              case 4:
                                return (
                                  (u = {
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
                                  this.getIdpTask(s)(u)
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
                      return Jo;
                    case "linkViaPopup":
                    case "linkViaRedirect":
                      return Xo;
                    case "reauthViaPopup":
                    case "reauthViaRedirect":
                      return Yo;
                    default:
                      ra(this.auth, "internal-error");
                  }
                },
              },
              {
                key: "resolve",
                value: function (e) {
                  la(this.pendingPromise, "Pending promise was never set"),
                    this.pendingPromise.resolve(e),
                    this.unregisterAndCleanUp();
                },
              },
              {
                key: "reject",
                value: function (e) {
                  la(this.pendingPromise, "Pending promise was never set"),
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
        ts = new ma(2e3, 1e4);
      var ns = (function (e) {
        en(n, e);
        var t = an(n);
        function n(e, r, a, i, o) {
          var s;
          return (
            ln(this, n),
            ((s = t.call(this, e, r, i, o)).provider = a),
            (s.authWindow = null),
            (s.pollId = null),
            n.currentPopupAction && n.currentPopupAction.cancel(),
            (n.currentPopupAction = Xt(s)),
            s
          );
        }
        return (
          fn(n, [
            {
              key: "executeNotNull",
              value: (function () {
                var e = un(
                  vn().mark(function e() {
                    var t;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.execute();
                            case 2:
                              return (
                                sa((t = e.sent), this.auth, "internal-error"),
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
                var e = un(
                  vn().mark(function e() {
                    var t,
                      n = this;
                    return vn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                la(
                                  1 === this.filter.length,
                                  "Popup operations only handle one event"
                                ),
                                (t = ko()),
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
                                        aa(n.auth, "web-storage-unsupported")
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
                this.reject(aa(this.auth, "cancelled-popup-request"));
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
                          e.reject(aa(e.auth, "popup-closed-by-user"));
                      }, 2e3))
                    : (e.pollId = window.setTimeout(t, ts.get()));
                })();
              },
            },
          ]),
          n
        );
      })(es);
      ns.currentPopupAction = null;
      var rs = new Map(),
        as = (function (e) {
          en(n, e);
          var t = an(n);
          function n(e, r) {
            var a,
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              ln(this, n),
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
            fn(n, [
              {
                key: "execute",
                value: (function () {
                  var e = un(
                    vn().mark(function e() {
                      var t, r;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ((t = rs.get(this.auth._key()))) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  is(this.resolver, this.auth)
                                );
                              case 5:
                                if (!e.sent) {
                                  e.next = 12;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  Yt(Qt(n.prototype), "execute", this).call(
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
                                rs.set(this.auth._key(), t);
                              case 21:
                                return (
                                  this.bypassAuthState ||
                                    rs.set(this.auth._key(), function () {
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
                  var e = un(
                    vn().mark(function e(t) {
                      var r;
                      return vn().wrap(
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
                                  Yt(Qt(n.prototype), "onAuthEvent", this).call(
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
                                    Yt(
                                      Qt(n.prototype),
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
                  var e = un(
                    vn().mark(function e() {
                      return vn().wrap(function (e) {
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
        })(es);
      function is(e, t) {
        return os.apply(this, arguments);
      }
      function os() {
        return (
          (os = un(
            vn().mark(function e(t, n) {
              var r, a, i;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = ls(n)), (a = us(t)), (e.next = 4), a._isAvailable()
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
          )),
          os.apply(this, arguments)
        );
      }
      function ss(e, t) {
        rs.set(e._key(), t);
      }
      function us(e) {
        return fa(e._redirectPersistence);
      }
      function ls(e) {
        return ni("pendingRedirect", e.config.apiKey, e.name);
      }
      function cs(e, t) {
        return fs.apply(this, arguments);
      }
      function fs() {
        return (
          (fs = un(
            vn().mark(function e(t, n) {
              var r,
                a,
                i,
                o,
                s,
                u = arguments;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = u.length > 2 && void 0 !== u[2] && u[2]),
                        (a = bi(t)),
                        (i = Go(a, n)),
                        (o = new as(a, i, r)),
                        (e.next = 6),
                        o.execute()
                      );
                    case 6:
                      if (!(s = e.sent) || r) {
                        e.next = 13;
                        break;
                      }
                      return (
                        delete s.user._redirectEventId,
                        (e.next = 11),
                        a._persistUserIfCurrent(s.user)
                      );
                    case 11:
                      return (e.next = 13), a._setRedirectUser(null, n);
                    case 13:
                      return e.abrupt("return", s);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          fs.apply(this, arguments)
        );
      }
      var ds = (function () {
        function e(t) {
          ln(this, e),
            (this.auth = t),
            (this.cachedEventUids = new Set()),
            (this.consumers = new Set()),
            (this.queuedRedirectEvent = null),
            (this.hasHandledPotentialRedirect = !1),
            (this.lastProcessedEventTime = Date.now());
        }
        return (
          fn(e, [
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
                          return hs(e);
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
                if (e.error && !hs(e)) {
                  var r =
                    (null === (n = e.error.code) || void 0 === n
                      ? void 0
                      : n.split("auth/")[1]) || "internal-error";
                  t.onError(aa(this.auth, r));
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
                  this.cachedEventUids.has(ps(e))
                );
              },
            },
            {
              key: "saveEventToCache",
              value: function (e) {
                this.cachedEventUids.add(ps(e)),
                  (this.lastProcessedEventTime = Date.now());
              },
            },
          ]),
          e
        );
      })();
      function ps(e) {
        return [e.type, e.eventId, e.sessionId, e.tenantId]
          .filter(function (e) {
            return e;
          })
          .join("-");
      }
      function hs(e) {
        var t = e.type,
          n = e.error;
        return (
          "unknown" === t &&
          (null === n || void 0 === n ? void 0 : n.code) ===
            "auth/".concat("no-auth-event")
        );
      }
      function vs(e) {
        return ms.apply(this, arguments);
      }
      function ms() {
        return (
          (ms = un(
            vn().mark(function e(t) {
              var n,
                r = arguments;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                        e.abrupt("return", xa(t, "GET", "/v1/projects", n))
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          ms.apply(this, arguments)
        );
      }
      var gs = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        ys = /^https?/;
      function bs() {
        return (
          (bs = un(
            vn().mark(function e(t) {
              var n, r, a, i, o;
              return vn().wrap(
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
                        return (e.next = 4), vs(t);
                      case 4:
                        (n = e.sent),
                          (r = n.authorizedDomains),
                          (a = on(r)),
                          (e.prev = 7),
                          a.s();
                      case 9:
                        if ((i = a.n()).done) {
                          e.next = 20;
                          break;
                        }
                        if (((o = i.value), (e.prev = 11), !ks(o))) {
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
                        ra(t, "unauthorized-domain");
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
          )),
          bs.apply(this, arguments)
        );
      }
      function ks(e) {
        var t = pa(),
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
        if (!ys.test(r)) return !1;
        if (gs.test(e)) return a === e;
        var o = e.replace(/\./g, "\\.");
        return new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a);
      }
      var ws = new ma(3e4, 6e4);
      function xs() {
        var e = xo().___jsl;
        if (null === e || void 0 === e ? void 0 : e.H)
          for (var t = 0, n = Object.keys(e.H); t < n.length; t++) {
            var r = n[t];
            if (
              ((e.H[r].r = e.H[r].r || []),
              (e.H[r].L = e.H[r].L || []),
              (e.H[r].r = dn(e.H[r].L)),
              e.CP)
            )
              for (var a = 0; a < e.CP.length; a++) e.CP[a] = null;
          }
      }
      var Ss = null;
      function _s(e) {
        return (
          (Ss =
            Ss ||
            (function (e) {
              return new Promise(function (t, n) {
                var r, a, i;
                function o() {
                  xs(),
                    gapi.load("gapi.iframes", {
                      callback: function () {
                        t(gapi.iframes.getContext());
                      },
                      ontimeout: function () {
                        xs(), n(aa(e, "network-request-failed"));
                      },
                      timeout: ws.get(),
                    });
                }
                if (
                  null ===
                    (a =
                      null === (r = xo().gapi) || void 0 === r
                        ? void 0
                        : r.iframes) || void 0 === a
                    ? void 0
                    : a.Iframe
                )
                  t(gapi.iframes.getContext());
                else {
                  if (
                    !(null === (i = xo().gapi) || void 0 === i
                      ? void 0
                      : i.load)
                  ) {
                    var s = Vo("iframefcb");
                    return (
                      (xo()[s] = function () {
                        gapi.load ? o() : n(aa(e, "network-request-failed"));
                      }),
                      Ho(
                        "https://apis.google.com/js/api.js?onload=".concat(s)
                      ).catch(function (e) {
                        return n(e);
                      })
                    );
                  }
                  o();
                }
              }).catch(function (e) {
                throw ((Ss = null), e);
              });
            })(e)),
          Ss
        );
      }
      var Es = new ma(5e3, 15e3),
        Is = {
          style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px",
          },
          "aria-hidden": "true",
          tabindex: "-1",
        },
        Cs = new Map([
          ["identitytoolkit.googleapis.com", "p"],
          ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
          ["test-identitytoolkit.sandbox.googleapis.com", "t"],
        ]);
      function Ts(e) {
        var t = e.config;
        sa(t.authDomain, e, "auth-domain-config-required");
        var n = t.emulator
            ? ga(t, "emulator/auth/iframe")
            : "https://"
                .concat(e.config.authDomain, "/")
                .concat("__/auth/iframe"),
          r = { apiKey: t.apiKey, appName: e.name, v: Ar },
          a = Cs.get(e.config.apiHost);
        a && (r.eid = a);
        var i = e._getFrameworks();
        return (
          i.length && (r.fw = i.join(",")),
          "".concat(n, "?").concat(An(r).slice(1))
        );
      }
      function Ps(e) {
        return Os.apply(this, arguments);
      }
      function Os() {
        return (
          (Os = un(
            vn().mark(function e(t) {
              var n, r;
              return vn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), _s(t);
                    case 2:
                      return (
                        (n = e.sent),
                        sa((r = xo().gapi), t, "internal-error"),
                        e.abrupt(
                          "return",
                          n.open(
                            {
                              where: document.body,
                              url: Ts(t),
                              messageHandlersFilter:
                                r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                              attributes: Is,
                              dontclear: !0,
                            },
                            function (e) {
                              return new Promise(
                                (function () {
                                  var n = un(
                                    vn().mark(function n(r, a) {
                                      var i, o, s;
                                      return vn().wrap(function (n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              return (
                                                (s = function () {
                                                  xo().clearTimeout(o), r(e);
                                                }),
                                                (n.next = 3),
                                                e.restyle({
                                                  setHideOnLeave: !1,
                                                })
                                              );
                                            case 3:
                                              (i = aa(
                                                t,
                                                "network-request-failed"
                                              )),
                                                (o = xo().setTimeout(
                                                  function () {
                                                    a(i);
                                                  },
                                                  Es.get()
                                                )),
                                                e.ping(s).then(s, function () {
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
          Os.apply(this, arguments)
        );
      }
      var Ns = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no",
        },
        Rs = "_blank",
        As = "http://localhost",
        Ds = (function () {
          function e(t) {
            ln(this, e), (this.window = t), (this.associatedEvent = null);
          }
          return (
            fn(e, [
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
      function Ls(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 500,
          a =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 600,
          i = Math.max((window.screen.availHeight - a) / 2, 0).toString(),
          s = Math.max((window.screen.availWidth - r) / 2, 0).toString(),
          u = "",
          l = Object.assign(Object.assign({}, Ns), {
            width: r.toString(),
            height: a.toString(),
            top: i,
            left: s,
          }),
          c = Sn().toLowerCase();
        n && (u = si(c) ? Rs : n),
          ii(c) && ((t = t || As), (l.scrollbars = "yes"));
        var f = Object.entries(l).reduce(function (e, t) {
          var n = o(t, 2),
            r = n[0],
            a = n[1];
          return "".concat(e).concat(r, "=").concat(a, ",");
        }, "");
        if (pi(c) && "_self" !== u) return Ms(t || "", u), new Ds(null);
        var d = window.open(t || "", u, f);
        sa(d, e, "popup-blocked");
        try {
          d.focus();
        } catch (p) {}
        return new Ds(d);
      }
      function Ms(e, t) {
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
      var js = "__/auth/handler",
        zs = "emulator/auth/handler";
      function Fs(e, t, n, r, a, i) {
        sa(e.config.authDomain, e, "auth-domain-config-required"),
          sa(e.config.apiKey, e, "invalid-api-key");
        var s = {
          apiKey: e.config.apiKey,
          appName: e.name,
          authType: n,
          redirectUrl: r,
          v: Ar,
          eventId: a,
        };
        if (t instanceof Vi) {
          t.setDefaultLanguage(e.languageCode),
            (s.providerId = t.providerId || ""),
            (function (e) {
              for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
              return !0;
            })(t.getCustomParameters()) ||
              (s.customParameters = JSON.stringify(t.getCustomParameters()));
          for (var u = 0, l = Object.entries(i || {}); u < l.length; u++) {
            var c = o(l[u], 2),
              f = c[0],
              d = c[1];
            s[f] = d;
          }
        }
        if (t instanceof Wi) {
          var p = t.getScopes().filter(function (e) {
            return "" !== e;
          });
          p.length > 0 && (s.scopes = p.join(","));
        }
        e.tenantId && (s.tid = e.tenantId);
        for (var h = s, v = 0, m = Object.keys(h); v < m.length; v++) {
          var g = m[v];
          void 0 === h[g] && delete h[g];
        }
        return ""
          .concat(
            (function (e) {
              var t = e.config;
              if (!t.emulator)
                return "https://".concat(t.authDomain, "/").concat(js);
              return ga(t, zs);
            })(e),
            "?"
          )
          .concat(An(h).slice(1));
      }
      var Us = "webStorageSupport",
        Bs = (function () {
          function e() {
            ln(this, e),
              (this.eventManagers = {}),
              (this.iframes = {}),
              (this.originValidationPromises = {}),
              (this._redirectPersistence = go),
              (this._completeRedirectFn = cs),
              (this._overrideRedirectResult = ss);
          }
          return (
            fn(e, [
              {
                key: "_openPopup",
                value: (function () {
                  var e = un(
                    vn().mark(function e(t, n, r, a) {
                      var i, o;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  la(
                                    null ===
                                      (i = this.eventManagers[t._key()]) ||
                                      void 0 === i
                                      ? void 0
                                      : i.manager,
                                    "_initialize() not called before _openPopup()"
                                  ),
                                  (o = Fs(t, n, r, pa(), a)),
                                  e.abrupt("return", Ls(t, o, ko()))
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
                  var e = un(
                    vn().mark(function e(t, n, r, a) {
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this._originValidation(t);
                              case 2:
                                return (
                                  (i = Fs(t, n, r, pa(), a)),
                                  (xo().location.href = i),
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
                      : (la(i, "If manager is not set, promise should be"), i);
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n, r;
                      return vn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Ps(t);
                              case 2:
                                return (
                                  (n = e.sent),
                                  (r = new ds(t)),
                                  n.register(
                                    "authEvent",
                                    function (e) {
                                      return (
                                        sa(
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
                    Us,
                    { type: Us },
                    function (n) {
                      var r,
                        a =
                          null ===
                            (r = null === n || void 0 === n ? void 0 : n[0]) ||
                          void 0 === r
                            ? void 0
                            : r.webStorageSupport;
                      void 0 !== a && t(!!a), ra(e, "internal-error");
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
                        return bs.apply(this, arguments);
                      })(e)),
                    this.originValidationPromises[t]
                  );
                },
              },
              {
                key: "_shouldInitProactively",
                get: function () {
                  return vi() || oi() || di();
                },
              },
            ]),
            e
          );
        })(),
        Hs = Bs,
        Vs = (function () {
          function e(t) {
            ln(this, e), (this.factorId = t);
          }
          return (
            fn(e, [
              {
                key: "_process",
                value: function (e, t, n) {
                  switch (t.type) {
                    case "enroll":
                      return this._finalizeEnroll(e, t.credential, n);
                    case "signin":
                      return this._finalizeSignIn(e, t.credential);
                    default:
                      return ua("unexpected MultiFactorSessionType");
                  }
                },
              },
            ]),
            e
          );
        })(),
        Ws = (function (e) {
          en(n, e);
          var t = an(n);
          function n(e) {
            var r;
            return ln(this, n), ((r = t.call(this, "phone")).credential = e), r;
          }
          return (
            fn(
              n,
              [
                {
                  key: "_finalizeEnroll",
                  value: function (e, t, n) {
                    return (function (e, t) {
                      return xa(
                        e,
                        "POST",
                        "/v2/accounts/mfaEnrollment:finalize",
                        wa(e, t)
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
                      return xa(
                        e,
                        "POST",
                        "/v2/accounts/mfaSignIn:finalize",
                        wa(e, t)
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
        })(Vs);
      (function () {
        function e() {
          ln(this, e);
        }
        return (
          fn(e, null, [
            {
              key: "assertion",
              value: function (e) {
                return Ws._fromCredential(e);
              },
            },
          ]),
          e
        );
      })().FACTOR_ID = "phone";
      var $s,
        Ks = "@firebase/auth",
        qs = "0.20.1",
        Gs = (function () {
          function e(t) {
            ln(this, e), (this.auth = t), (this.internalListeners = new Map());
          }
          return (
            fn(e, [
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
                  var e = un(
                    vn().mark(function e(t) {
                      var n;
                      return vn().wrap(
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
                  sa(
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
      function Qs() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Dr(),
          t = Pr(e, "auth");
        return t.isInitialized()
          ? t.getImmediate()
          : da(e, { popupRedirectResolver: Hs, persistence: [Uo, vo, go] });
      }
      ($s = "Browser"),
        Tr(
          new Bn(
            "auth",
            function (e, t) {
              var n = t.options,
                r = e.getProvider("app").getImmediate(),
                a = e.getProvider("heartbeat"),
                i = r.options,
                o = i.apiKey,
                s = i.authDomain;
              return (function (e, t) {
                sa(o && !o.includes(":"), "invalid-api-key", {
                  appName: e.name,
                }),
                  sa(
                    !(null === s || void 0 === s ? void 0 : s.includes(":")),
                    "argument-error",
                    { appName: e.name }
                  );
                var r = {
                    apiKey: o,
                    authDomain: s,
                    clientPlatform: $s,
                    apiHost: "identitytoolkit.googleapis.com",
                    tokenApiHost: "securetoken.googleapis.com",
                    apiScheme: "https",
                    sdkClientVersion: mi($s),
                  },
                  a = new yi(e, t, r);
                return (
                  (function (e, t) {
                    var n =
                        (null === t || void 0 === t ? void 0 : t.persistence) ||
                        [],
                      r = (Array.isArray(n) ? n : [n]).map(fa);
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
        Tr(
          new Bn(
            "auth-internal",
            function (e) {
              return (function (e) {
                return new Gs(e);
              })(bi(e.getProvider("auth").getImmediate()));
            },
            "PRIVATE"
          ).setInstantiationMode("EXPLICIT")
        ),
        Lr(
          Ks,
          qs,
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
          })($s)
        ),
        Lr(Ks, qs, "esm2017");
      var Js,
        Ys,
        Xs,
        Zs,
        eu,
        tu = function () {
          "out" !== JSON.parse(localStorage.getItem("nittoUser"))
            ? (localStorage.setItem("nittoUser", "out"),
              (function (e) {
                return Un(e).signOut();
              })(Qs())
                .then(function () {
                  alert("Sign-out successful.");
                })
                .catch(function (e) {
                  alert(e);
                }))
            : alert("You are not logged in!");
        },
        nu = "https://nimahabibi.de/shop/image/",
        ru = function () {
          return (0, J.jsx)(J.Fragment, {
            children: (0, J.jsxs)("div", {
              className: "App-header",
              children: [
                (0, J.jsx)("h4", { children: "Nitto Shop" }),
                (0, J.jsxs)("form", {
                  onSubmit: "",
                  children: [
                    (0, J.jsx)("input", {
                      type: "text",
                      className: "search",
                      placeholder: "search here...",
                      autofocus: !0,
                      required: !0,
                    }),
                    (0, J.jsx)("button", {
                      id: "searchBtn",
                      children: "\u2794",
                    }),
                  ],
                }),
                (0, J.jsx)("img", {
                  className: "loginMenue",
                  src: nu + "icon/login.svg",
                  onClick: tu,
                  alt: "login icon",
                }),
                (0, J.jsx)("img", {
                  className: "basketMenue",
                  src: nu + "icon/basket2.svg",
                  alt: "Shopping Bag Icon",
                }),
              ],
            }),
          });
        },
        au = Qs(),
        iu = function () {
          var e = "",
            t = "";
          return (0, J.jsxs)(J.Fragment, {
            children: [
              (0, J.jsx)("head", {
                children: (0, J.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300&display=swap",
                  rel: "stylesheet",
                }),
              }),
              (0, J.jsxs)(ou, {
                className: "LoginForm",
                children: [
                  (0, J.jsx)(uu, {
                    children: "Login here to access your Profile",
                  }),
                  (0, J.jsx)(su, {
                    id: "email",
                    type: "text",
                    placeholder: "enter your email here",
                  }),
                  (0, J.jsx)(su, {
                    id: "password",
                    type: "password",
                    placeholder: "enter your password here",
                  }),
                  (0, J.jsx)(lu, {
                    type: "button",
                    onClick: function () {
                      (e = document.getElementById("email").value),
                        (t = document.getElementById("password").value),
                        (function (e, t, n) {
                          return so(Un(e), Hi.credential(t, n));
                        })(au, e, t)
                          .then(function (e) {
                            var t = e.user;
                            localStorage.setItem("nittoUser", t.uid),
                              alert("You have loged in successfully!");
                          })
                          .catch(function (e) {
                            e.code;
                            var t = e.message;
                            alert(t);
                          });
                    },
                    children: "Sign in",
                  }),
                  (0, J.jsx)(cu, {
                    type: "button",
                    onClick: function () {
                      (e = document.getElementById("email").value),
                        (t = document.getElementById("password").value),
                        (function (e, t, n) {
                          return lo.apply(this, arguments);
                        })(au, e, t)
                          .then(function (e) {
                            var t = e.user;
                            (t.displayName = "MohammadHabibi"),
                              alert(
                                "user created with this informations: " +
                                  t.email
                              );
                          })
                          .catch(function (e) {
                            var t = e.code,
                              n = e.message;
                            alert(t + "    " + n);
                          });
                    },
                    children: "Register",
                  }),
                  (0, J.jsxs)("p", {
                    className: "accountRegisterP",
                    children: [
                      "Not registered yet? ,",
                      " ",
                      (0, J.jsx)("a", {
                        href: "",
                        onClick: function () {
                          document
                            .getElementsByClassName("LoginForm")
                            .ClassList.Toggle("DisplayNone");
                        },
                        children: "Click Here",
                      }),
                      " ",
                      "to create your account",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ou = Mt.form(
          Js ||
            (Js = Z([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n",
            ]))
        ),
        su = Mt.input(
          Ys ||
            (Ys = Z([
              "\n  margin: 20px auto;\n  font-size: 1rem;\n  width: 300px;\n  height: 50px;\n",
            ]))
        ),
        uu = Mt.label(
          Xs ||
            (Xs = Z([
              '\n  margin: 20px auto;\n  align-self: center;\n  font-size: 1.25rem;\n  font-weight: 900;\n  font-family: "Roboto", cursive;\n  color: #063773;\n',
            ]))
        ),
        lu = Mt.button(
          Zs ||
            (Zs = Z([
              "\n  margin: 20px auto;\n  background: rgb(2, 113, 194);\n  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 5px;\n  color: white;\n  font-size: 1.2rem;\n  font-weight: 900;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  width: 300px;\n  height: 50px;\n  cursor: pointer;\n",
            ]))
        ),
        cu = Mt(lu)(eu || (eu = Z(["\n  background: rgb(194, 69, 2);\n"]))),
        fu = function () {
          return (0, J.jsx)(iu, {});
        };
      var du = function () {
        return (
          console.clear(),
          (0, J.jsxs)("div", {
            className: "App",
            children: [
              (0, J.jsx)(ru, {}),
              (0, J.jsx)("main", {
                id: "main",
                children: (0, J.jsxs)(B, {
                  children: [
                    (0, J.jsx)(F, { path: "/", element: (0, J.jsx)(Gt, {}) }),
                    (0, J.jsx)(F, {
                      path: "product/:id",
                      element: (0, J.jsx)(Kt, {}),
                    }),
                    (0, J.jsx)(F, {
                      path: "login",
                      element: (0, J.jsx)(fu, {}),
                    }),
                  ],
                }),
              }),
              (0, J.jsx)(Y, { className: "footer" }),
            ],
          })
        );
      };
      Lr("firebase", "9.8.1", "app");
      var pu, hu;
      var vu = new WeakMap(),
        mu = new WeakMap(),
        gu = new WeakMap(),
        yu = new WeakMap(),
        bu = new WeakMap();
      var ku = {
        get: function (e, t, n) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return mu.get(e);
            if ("objectStoreNames" === t)
              return e.objectStoreNames || gu.get(e);
            if ("store" === t)
              return n.objectStoreNames[1]
                ? void 0
                : n.objectStore(n.objectStoreNames[0]);
          }
          return Su(e[t]);
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
      function wu(e) {
        return e !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
          ? (
              hu ||
              (hu = [
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
                return e.apply(_u(this), n), Su(vu.get(this));
              }
            : function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return Su(e.apply(_u(this), n));
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
              var i = e.call.apply(e, [_u(this), t].concat(r));
              return gu.set(i, t.sort ? t.sort() : [t]), Su(i);
            };
      }
      function xu(e) {
        return "function" === typeof e
          ? wu(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (!mu.has(e)) {
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
                  mu.set(e, t);
                }
              })(e),
            (t = e),
            (
              pu ||
              (pu = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
            ).some(function (e) {
              return t instanceof e;
            })
              ? new Proxy(e, ku)
              : e);
        var t;
      }
      function Su(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            var t = new Promise(function (t, n) {
              var r = function () {
                  e.removeEventListener("success", a),
                    e.removeEventListener("error", i);
                },
                a = function () {
                  t(Su(e.result)), r();
                },
                i = function () {
                  n(e.error), r();
                };
              e.addEventListener("success", a), e.addEventListener("error", i);
            });
            return (
              t
                .then(function (t) {
                  t instanceof IDBCursor && vu.set(t, e);
                })
                .catch(function () {}),
              bu.set(t, e),
              t
            );
          })(e);
        if (yu.has(e)) return yu.get(e);
        var t = xu(e);
        return t !== e && (yu.set(e, t), bu.set(t, e)), t;
      }
      var _u = function (e) {
        return bu.get(e);
      };
      var Eu,
        Iu = ["get", "getKey", "getAll", "getAllKeys", "count"],
        Cu = ["put", "add", "delete", "clear"],
        Tu = new Map();
      function Pu(e, t) {
        if (e instanceof IDBDatabase && !(t in e) && "string" === typeof t) {
          if (Tu.get(t)) return Tu.get(t);
          var n = t.replace(/FromIndex$/, ""),
            r = t !== n,
            a = Cu.includes(n);
          if (
            n in (r ? IDBIndex : IDBObjectStore).prototype &&
            (a || Iu.includes(n))
          ) {
            var i = (function () {
              var e = un(
                hn.mark(function e(t) {
                  var i,
                    o,
                    s,
                    u,
                    l,
                    c,
                    f = arguments;
                  return hn.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              o = this.transaction(
                                t,
                                a ? "readwrite" : "readonly"
                              ),
                                s = o.store,
                                u = f.length,
                                l = new Array(u > 1 ? u - 1 : 0),
                                c = 1;
                              c < u;
                              c++
                            )
                              l[c - 1] = f[c];
                            return (
                              r && (s = s.index(l.shift())),
                              (e.next = 6),
                              Promise.all([(i = s)[n].apply(i, l), a && o.done])
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
            return Tu.set(t, i), i;
          }
        }
      }
      !(function (e) {
        ku = e(ku);
      })(function (e) {
        return er(
          er({}, e),
          {},
          {
            get: function (t, n, r) {
              return Pu(t, n) || e.get(t, n, r);
            },
            has: function (t, n) {
              return !!Pu(t, n) || e.has(t, n);
            },
          }
        );
      });
      var Ou = "@firebase/installations",
        Nu = "0.5.9",
        Ru = 1e4,
        Au = "w:".concat(Nu),
        Du = "FIS_v2",
        Lu = 36e5,
        Mu =
          (pn(
            (Eu = {}),
            "missing-app-config-values",
            'Missing App configuration value: "{$valueName}"'
          ),
          pn(Eu, "not-registered", "Firebase Installation is not registered."),
          pn(Eu, "installation-not-found", "Firebase Installation not found."),
          pn(
            Eu,
            "request-failed",
            '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'
          ),
          pn(
            Eu,
            "app-offline",
            "Could not process request. Application offline."
          ),
          pn(
            Eu,
            "delete-pending-registration",
            "Can't delete installation while there is a pending registration request."
          ),
          Eu),
        ju = new Tn("installations", "Installations", Mu);
      function zu(e) {
        return e instanceof Cn && e.code.includes("request-failed");
      }
      function Fu(e) {
        var t = e.projectId;
        return ""
          .concat(
            "https://firebaseinstallations.googleapis.com/v1",
            "/projects/"
          )
          .concat(t, "/installations");
      }
      function Uu(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: ((t = e.expiresIn), Number(t.replace("s", "000"))),
          creationTime: Date.now(),
        };
        var t;
      }
      function Bu(e, t) {
        return Hu.apply(this, arguments);
      }
      function Hu() {
        return (Hu = un(
          hn.mark(function e(t, n) {
            var r, a;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), n.json();
                  case 2:
                    return (
                      (r = e.sent),
                      (a = r.error),
                      e.abrupt(
                        "return",
                        ju.create("request-failed", {
                          requestName: t,
                          serverCode: a.code,
                          serverMessage: a.message,
                          serverStatus: a.status,
                        })
                      )
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Vu(e) {
        var t = e.apiKey;
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": t,
        });
      }
      function Wu(e, t) {
        var n = t.refreshToken,
          r = Vu(e);
        return (
          r.append(
            "Authorization",
            (function (e) {
              return "".concat(Du, " ").concat(e);
            })(n)
          ),
          r
        );
      }
      function $u(e) {
        return Ku.apply(this, arguments);
      }
      function Ku() {
        return (Ku = un(
          hn.mark(function e(t) {
            var n;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), t();
                  case 2:
                    if (!((n = e.sent).status >= 500 && n.status < 600)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", t());
                  case 5:
                    return e.abrupt("return", n);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function qu(e, t) {
        return Gu.apply(this, arguments);
      }
      function Gu() {
        return (Gu = un(
          hn.mark(function e(t, n) {
            var r, a, i, o, s, u, l, c, f, d, p, h;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = t.appConfig),
                      (a = t.heartbeatServiceProvider),
                      (i = n.fid),
                      (o = Fu(r)),
                      (s = Vu(r)),
                      !(u = a.getImmediate({ optional: !0 })))
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (e.next = 8), u.getHeartbeatsHeader();
                  case 8:
                    (l = e.sent) && s.append("x-firebase-client", l);
                  case 10:
                    return (
                      (c = {
                        fid: i,
                        authVersion: Du,
                        appId: r.appId,
                        sdkVersion: Au,
                      }),
                      (f = {
                        method: "POST",
                        headers: s,
                        body: JSON.stringify(c),
                      }),
                      (e.next = 14),
                      $u(function () {
                        return fetch(o, f);
                      })
                    );
                  case 14:
                    if (!(d = e.sent).ok) {
                      e.next = 23;
                      break;
                    }
                    return (e.next = 18), d.json();
                  case 18:
                    return (
                      (p = e.sent),
                      (h = {
                        fid: p.fid || i,
                        registrationStatus: 2,
                        refreshToken: p.refreshToken,
                        authToken: Uu(p.authToken),
                      }),
                      e.abrupt("return", h)
                    );
                  case 23:
                    return (e.next = 25), Bu("Create Installation", d);
                  case 25:
                    throw e.sent;
                  case 26:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Qu(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      var Ju = /^[cdef][\w-]{21}$/;
      function Yu() {
        try {
          var e = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(e),
            (e[0] = 112 + (e[0] % 16));
          var t = (function (e) {
            return ((t = e),
            btoa(String.fromCharCode.apply(String, dn(t)))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")).substr(0, 22);
            var t;
          })(e);
          return Ju.test(t) ? t : "";
        } catch (n) {
          return "";
        }
      }
      function Xu(e) {
        return "".concat(e.appName, "!").concat(e.appId);
      }
      var Zu = new Map();
      function el(e, t) {
        var n = Xu(e);
        tl(n, t),
          (function (e, t) {
            var n = rl();
            n && n.postMessage({ key: e, fid: t });
            al();
          })(n, t);
      }
      function tl(e, t) {
        var n = Zu.get(e);
        if (n) {
          var r,
            a = on(n);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              (0, r.value)(t);
            }
          } catch (i) {
            a.e(i);
          } finally {
            a.f();
          }
        }
      }
      var nl = null;
      function rl() {
        return (
          !nl &&
            "BroadcastChannel" in self &&
            ((nl = new BroadcastChannel("[Firebase] FID Change")).onmessage =
              function (e) {
                tl(e.data.key, e.data.fid);
              }),
          nl
        );
      }
      function al() {
        0 === Zu.size && nl && (nl.close(), (nl = null));
      }
      var il = "firebase-installations-store",
        ol = null;
      function sl() {
        return (
          ol ||
            (ol = (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = n.blocked,
                a = n.upgrade,
                i = n.blocking,
                o = n.terminated,
                s = indexedDB.open(e, t),
                u = Su(s);
              return (
                a &&
                  s.addEventListener("upgradeneeded", function (e) {
                    a(
                      Su(s.result),
                      e.oldVersion,
                      e.newVersion,
                      Su(s.transaction)
                    );
                  }),
                r &&
                  s.addEventListener("blocked", function () {
                    return r();
                  }),
                u
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
                u
              );
            })("firebase-installations-database", 1, {
              upgrade: function (e, t) {
                if (0 === t) e.createObjectStore(il);
              },
            })),
          ol
        );
      }
      function ul(e, t) {
        return ll.apply(this, arguments);
      }
      function ll() {
        return (ll = un(
          hn.mark(function e(t, n) {
            var r, a, i, o, s;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = Xu(t)), (e.next = 3), sl();
                  case 3:
                    return (
                      (a = e.sent),
                      (i = a.transaction(il, "readwrite")),
                      (o = i.objectStore(il)),
                      (e.next = 8),
                      o.get(r)
                    );
                  case 8:
                    return (s = e.sent), (e.next = 11), o.put(n, r);
                  case 11:
                    return (e.next = 13), i.done;
                  case 13:
                    return (
                      (s && s.fid === n.fid) || el(t, n.fid),
                      e.abrupt("return", n)
                    );
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function cl(e) {
        return fl.apply(this, arguments);
      }
      function fl() {
        return (fl = un(
          hn.mark(function e(t) {
            var n, r, a;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = Xu(t)), (e.next = 3), sl();
                  case 3:
                    return (
                      (r = e.sent),
                      (a = r.transaction(il, "readwrite")),
                      (e.next = 7),
                      a.objectStore(il).delete(n)
                    );
                  case 7:
                    return (e.next = 9), a.done;
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function dl(e, t) {
        return pl.apply(this, arguments);
      }
      function pl() {
        return (pl = un(
          hn.mark(function e(t, n) {
            var r, a, i, o, s, u;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = Xu(t)), (e.next = 3), sl();
                  case 3:
                    return (
                      (a = e.sent),
                      (i = a.transaction(il, "readwrite")),
                      (o = i.objectStore(il)),
                      (e.next = 8),
                      o.get(r)
                    );
                  case 8:
                    if (((s = e.sent), void 0 !== (u = n(s)))) {
                      e.next = 15;
                      break;
                    }
                    return (e.next = 13), o.delete(r);
                  case 13:
                    e.next = 17;
                    break;
                  case 15:
                    return (e.next = 17), o.put(u, r);
                  case 17:
                    return (e.next = 19), i.done;
                  case 19:
                    return (
                      !u || (s && s.fid === u.fid) || el(t, u.fid),
                      e.abrupt("return", u)
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function hl(e) {
        return vl.apply(this, arguments);
      }
      function vl() {
        return (vl = un(
          hn.mark(function e(t) {
            var n, r;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      dl(t.appConfig, function (e) {
                        var r = ml(e),
                          a = gl(t, r);
                        return (n = a.registrationPromise), a.installationEntry;
                      })
                    );
                  case 2:
                    if ("" !== (r = e.sent).fid) {
                      e.next = 8;
                      break;
                    }
                    return (e.next = 6), n;
                  case 6:
                    return (
                      (e.t0 = e.sent),
                      e.abrupt("return", { installationEntry: e.t0 })
                    );
                  case 8:
                    return e.abrupt("return", {
                      installationEntry: r,
                      registrationPromise: n,
                    });
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ml(e) {
        return xl(e || { fid: Yu(), registrationStatus: 0 });
      }
      function gl(e, t) {
        if (0 === t.registrationStatus) {
          if (!navigator.onLine)
            return {
              installationEntry: t,
              registrationPromise: Promise.reject(ju.create("app-offline")),
            };
          var n = {
              fid: t.fid,
              registrationStatus: 1,
              registrationTime: Date.now(),
            },
            r = (function (e, t) {
              return yl.apply(this, arguments);
            })(e, n);
          return { installationEntry: n, registrationPromise: r };
        }
        return 1 === t.registrationStatus
          ? { installationEntry: t, registrationPromise: bl(e) }
          : { installationEntry: t };
      }
      function yl() {
        return (yl = un(
          hn.mark(function e(t, n) {
            var r;
            return hn.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), qu(t, n);
                    case 3:
                      return (
                        (r = e.sent), e.abrupt("return", ul(t.appConfig, r))
                      );
                    case 7:
                      if (
                        ((e.prev = 7),
                        (e.t0 = e.catch(0)),
                        !zu(e.t0) || 409 !== e.t0.customData.serverCode)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (e.next = 12), cl(t.appConfig);
                    case 12:
                      e.next = 16;
                      break;
                    case 14:
                      return (
                        (e.next = 16),
                        ul(t.appConfig, { fid: n.fid, registrationStatus: 0 })
                      );
                    case 16:
                      throw e.t0;
                    case 17:
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
      function bl(e) {
        return kl.apply(this, arguments);
      }
      function kl() {
        return (kl = un(
          hn.mark(function e(t) {
            var n, r, a, i;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), wl(t.appConfig);
                  case 2:
                    n = e.sent;
                  case 3:
                    if (1 !== n.registrationStatus) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 6), Qu(100);
                  case 6:
                    return (e.next = 8), wl(t.appConfig);
                  case 8:
                    (n = e.sent), (e.next = 3);
                    break;
                  case 11:
                    if (0 !== n.registrationStatus) {
                      e.next = 22;
                      break;
                    }
                    return (e.next = 14), hl(t);
                  case 14:
                    if (
                      ((r = e.sent),
                      (a = r.installationEntry),
                      !(i = r.registrationPromise))
                    ) {
                      e.next = 21;
                      break;
                    }
                    return e.abrupt("return", i);
                  case 21:
                    return e.abrupt("return", a);
                  case 22:
                    return e.abrupt("return", n);
                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function wl(e) {
        return dl(e, function (e) {
          if (!e) throw ju.create("installation-not-found");
          return xl(e);
        });
      }
      function xl(e) {
        return 1 === (t = e).registrationStatus &&
          t.registrationTime + Ru < Date.now()
          ? { fid: e.fid, registrationStatus: 0 }
          : e;
        var t;
      }
      function Sl(e, t) {
        return _l.apply(this, arguments);
      }
      function _l() {
        return (_l = un(
          hn.mark(function e(t, n) {
            var r, a, i, o, s, u, l, c, f, d, p;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = t.appConfig),
                      (a = t.heartbeatServiceProvider),
                      (i = El(r, n)),
                      (o = Wu(r, n)),
                      !(s = a.getImmediate({ optional: !0 })))
                    ) {
                      e.next = 9;
                      break;
                    }
                    return (e.next = 7), s.getHeartbeatsHeader();
                  case 7:
                    (u = e.sent) && o.append("x-firebase-client", u);
                  case 9:
                    return (
                      (l = {
                        installation: { sdkVersion: Au, appId: r.appId },
                      }),
                      (c = {
                        method: "POST",
                        headers: o,
                        body: JSON.stringify(l),
                      }),
                      (e.next = 13),
                      $u(function () {
                        return fetch(i, c);
                      })
                    );
                  case 13:
                    if (!(f = e.sent).ok) {
                      e.next = 22;
                      break;
                    }
                    return (e.next = 17), f.json();
                  case 17:
                    return (d = e.sent), (p = Uu(d)), e.abrupt("return", p);
                  case 22:
                    return (e.next = 24), Bu("Generate Auth Token", f);
                  case 24:
                    throw e.sent;
                  case 25:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function El(e, t) {
        var n = t.fid;
        return "".concat(Fu(e), "/").concat(n, "/authTokens:generate");
      }
      function Il(e) {
        return Cl.apply(this, arguments);
      }
      function Cl() {
        return (
          (Cl = un(
            hn.mark(function e(t) {
              var n,
                r,
                a,
                i,
                o = arguments;
              return hn.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = o.length > 1 && void 0 !== o[1] && o[1]),
                        (e.next = 3),
                        dl(t.appConfig, function (e) {
                          if (!Al(e)) throw ju.create("not-registered");
                          var a = e.authToken;
                          if (!n && Dl(a)) return e;
                          if (1 === a.requestStatus) return (r = Tl(t, n)), e;
                          if (!navigator.onLine) throw ju.create("app-offline");
                          var i = Ll(e);
                          return (r = Nl(t, i)), i;
                        })
                      );
                    case 3:
                      if (((a = e.sent), !r)) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 7), r;
                    case 7:
                      (e.t0 = e.sent), (e.next = 11);
                      break;
                    case 10:
                      e.t0 = a.authToken;
                    case 11:
                      return (i = e.t0), e.abrupt("return", i);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Cl.apply(this, arguments)
        );
      }
      function Tl(e, t) {
        return Pl.apply(this, arguments);
      }
      function Pl() {
        return (Pl = un(
          hn.mark(function e(t, n) {
            var r, a;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Ol(t.appConfig);
                  case 2:
                    r = e.sent;
                  case 3:
                    if (1 !== r.authToken.requestStatus) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 6), Qu(100);
                  case 6:
                    return (e.next = 8), Ol(t.appConfig);
                  case 8:
                    (r = e.sent), (e.next = 3);
                    break;
                  case 11:
                    if (0 !== (a = r.authToken).requestStatus) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("return", Il(t, n));
                  case 16:
                    return e.abrupt("return", a);
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ol(e) {
        return dl(e, function (e) {
          if (!Al(e)) throw ju.create("not-registered");
          var t,
            n = e.authToken;
          return 1 === (t = n).requestStatus && t.requestTime + Ru < Date.now()
            ? Object.assign(Object.assign({}, e), {
                authToken: { requestStatus: 0 },
              })
            : e;
        });
      }
      function Nl(e, t) {
        return Rl.apply(this, arguments);
      }
      function Rl() {
        return (Rl = un(
          hn.mark(function e(t, n) {
            var r, a, i;
            return hn.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), Sl(t, n);
                    case 3:
                      return (
                        (r = e.sent),
                        (a = Object.assign(Object.assign({}, n), {
                          authToken: r,
                        })),
                        (e.next = 7),
                        ul(t.appConfig, a)
                      );
                    case 7:
                      return e.abrupt("return", r);
                    case 10:
                      if (
                        ((e.prev = 10),
                        (e.t0 = e.catch(0)),
                        !zu(e.t0) ||
                          (401 !== e.t0.customData.serverCode &&
                            404 !== e.t0.customData.serverCode))
                      ) {
                        e.next = 17;
                        break;
                      }
                      return (e.next = 15), cl(t.appConfig);
                    case 15:
                      e.next = 20;
                      break;
                    case 17:
                      return (
                        (i = Object.assign(Object.assign({}, n), {
                          authToken: { requestStatus: 0 },
                        })),
                        (e.next = 20),
                        ul(t.appConfig, i)
                      );
                    case 20:
                      throw e.t0;
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function Al(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }
      function Dl(e) {
        return (
          2 === e.requestStatus &&
          !(function (e) {
            var t = Date.now();
            return t < e.creationTime || e.creationTime + e.expiresIn < t + Lu;
          })(e)
        );
      }
      function Ll(e) {
        var t = { requestStatus: 1, requestTime: Date.now() };
        return Object.assign(Object.assign({}, e), { authToken: t });
      }
      function Ml() {
        return (Ml = un(
          hn.mark(function e(t) {
            var n, r, a, i;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = t), (e.next = 3), hl(n);
                  case 3:
                    return (
                      (r = e.sent),
                      (a = r.installationEntry),
                      (i = r.registrationPromise)
                        ? i.catch(console.error)
                        : Il(n).catch(console.error),
                      e.abrupt("return", a.fid)
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function jl() {
        return (
          (jl = un(
            hn.mark(function e(t) {
              var n,
                r,
                a,
                i = arguments;
              return hn.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = i.length > 1 && void 0 !== i[1] && i[1]),
                        (r = t),
                        (e.next = 4),
                        zl(r)
                      );
                    case 4:
                      return (e.next = 6), Il(r, n);
                    case 6:
                      return (a = e.sent), e.abrupt("return", a.token);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          jl.apply(this, arguments)
        );
      }
      function zl(e) {
        return Fl.apply(this, arguments);
      }
      function Fl() {
        return (Fl = un(
          hn.mark(function e(t) {
            var n, r;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), hl(t);
                  case 2:
                    if (((n = e.sent), !(r = n.registrationPromise))) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 7), r;
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ul(e) {
        return ju.create("missing-app-config-values", { valueName: e });
      }
      var Bl,
        Hl = "installations",
        Vl = function (e) {
          var t = e.getProvider("app").getImmediate(),
            n = (function (e) {
              if (!e || !e.options) throw Ul("App Configuration");
              if (!e.name) throw Ul("App Name");
              for (
                var t = 0, n = ["projectId", "apiKey", "appId"];
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (!e.options[r]) throw Ul(r);
              }
              return {
                appName: e.name,
                projectId: e.options.projectId,
                apiKey: e.options.apiKey,
                appId: e.options.appId,
              };
            })(t);
          return {
            app: t,
            appConfig: n,
            heartbeatServiceProvider: Pr(t, "heartbeat"),
            _delete: function () {
              return Promise.resolve();
            },
          };
        },
        Wl = function (e) {
          var t = Pr(e.getProvider("app").getImmediate(), Hl).getImmediate(),
            n = {
              getId: function () {
                return (function (e) {
                  return Ml.apply(this, arguments);
                })(t);
              },
              getToken: function (e) {
                return (function (e) {
                  return jl.apply(this, arguments);
                })(t, e);
              },
            };
          return n;
        };
      Tr(new Bn(Hl, Vl, "PUBLIC")),
        Tr(new Bn("installations-internal", Wl, "PRIVATE")),
        Lr(Ou, Nu),
        Lr(Ou, Nu, "esm2017");
      var $l = "analytics",
        Kl = 6e4,
        ql =
          "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
        Gl = "https://www.googletagmanager.com/gtag/js",
        Ql = new Xn("@firebase/analytics");
      function Jl(e) {
        return Promise.all(
          e.map(function (e) {
            return e.catch(function (e) {
              return e;
            });
          })
        );
      }
      function Yl(e, t) {
        var n = document.createElement("script");
        (n.src = "".concat(Gl, "?l=").concat(e, "&id=").concat(t)),
          (n.async = !0),
          document.head.appendChild(n);
      }
      function Xl(e, t, n, r, a, i) {
        return Zl.apply(this, arguments);
      }
      function Zl() {
        return (
          (Zl = un(
            hn.mark(function e(t, n, r, a, i, o) {
              var s, u, l;
              return hn.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((s = a[i]), (e.prev = 1), !s)) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 5), n[s];
                      case 5:
                        e.next = 14;
                        break;
                      case 7:
                        return (e.next = 9), Jl(r);
                      case 9:
                        if (
                          ((u = e.sent),
                          !(l = u.find(function (e) {
                            return e.measurementId === i;
                          })))
                        ) {
                          e.next = 14;
                          break;
                        }
                        return (e.next = 14), n[l.appId];
                      case 14:
                        e.next = 19;
                        break;
                      case 16:
                        (e.prev = 16), (e.t0 = e.catch(1)), Ql.error(e.t0);
                      case 19:
                        t("config", i, o);
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 16]]
              );
            })
          )),
          Zl.apply(this, arguments)
        );
      }
      function ec(e, t, n, r, a) {
        return tc.apply(this, arguments);
      }
      function tc() {
        return (
          (tc = un(
            hn.mark(function e(t, n, r, a, i) {
              var o, s, u, l, c, f;
              return hn.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.prev = 0), (o = []), !i || !i.send_to)) {
                          e.next = 26;
                          break;
                        }
                        return (
                          (s = i.send_to),
                          Array.isArray(s) || (s = [s]),
                          (e.next = 7),
                          Jl(r)
                        );
                      case 7:
                        (u = e.sent),
                          (l = on(s)),
                          (e.prev = 9),
                          (f = function () {
                            var e = c.value,
                              t = u.find(function (t) {
                                return t.measurementId === e;
                              }),
                              r = t && n[t.appId];
                            if (!r) return (o = []), "break";
                            o.push(r);
                          }),
                          l.s();
                      case 12:
                        if ((c = l.n()).done) {
                          e.next = 18;
                          break;
                        }
                        if ("break" !== f()) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt("break", 18);
                      case 16:
                        e.next = 12;
                        break;
                      case 18:
                        e.next = 23;
                        break;
                      case 20:
                        (e.prev = 20), (e.t0 = e.catch(9)), l.e(e.t0);
                      case 23:
                        return (e.prev = 23), l.f(), e.finish(23);
                      case 26:
                        return (
                          0 === o.length && (o = Object.values(n)),
                          (e.next = 29),
                          Promise.all(o)
                        );
                      case 29:
                        t("event", a, i || {}), (e.next = 35);
                        break;
                      case 32:
                        (e.prev = 32), (e.t1 = e.catch(0)), Ql.error(e.t1);
                      case 35:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [0, 32],
                  [9, 20, 23, 26],
                ]
              );
            })
          )),
          tc.apply(this, arguments)
        );
      }
      function nc(e, t, n, r, a) {
        var i = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          window[r].push(arguments);
        };
        return (
          window[a] && "function" === typeof window[a] && (i = window[a]),
          (window[a] = (function (e, t, n, r) {
            function a() {
              return (a = un(
                hn.mark(function a(i, o, s) {
                  return hn.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (((a.prev = 0), "event" !== i)) {
                              a.next = 6;
                              break;
                            }
                            return (a.next = 4), ec(e, t, n, o, s);
                          case 4:
                            a.next = 12;
                            break;
                          case 6:
                            if ("config" !== i) {
                              a.next = 11;
                              break;
                            }
                            return (a.next = 9), Xl(e, t, n, r, o, s);
                          case 9:
                            a.next = 12;
                            break;
                          case 11:
                            e("set", o);
                          case 12:
                            a.next = 17;
                            break;
                          case 14:
                            (a.prev = 14), (a.t0 = a.catch(0)), Ql.error(a.t0);
                          case 17:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 14]]
                  );
                })
              )).apply(this, arguments);
            }
            return function (e, t, n) {
              return a.apply(this, arguments);
            };
          })(i, e, t, n)),
          { gtagCore: i, wrappedGtag: window[a] }
        );
      }
      function rc() {
        for (
          var e = window.document.getElementsByTagName("script"),
            t = 0,
            n = Object.values(e);
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r.src && r.src.includes(Gl)) return r;
        }
        return null;
      }
      var ac =
          (pn(
            (Bl = {}),
            "already-exists",
            "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."
          ),
          pn(
            Bl,
            "already-initialized",
            "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."
          ),
          pn(
            Bl,
            "already-initialized-settings",
            "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."
          ),
          pn(
            Bl,
            "interop-component-reg-failed",
            "Firebase Analytics Interop Component failed to instantiate: {$reason}"
          ),
          pn(
            Bl,
            "invalid-analytics-context",
            "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"
          ),
          pn(
            Bl,
            "indexeddb-unavailable",
            "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"
          ),
          pn(
            Bl,
            "fetch-throttle",
            "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."
          ),
          pn(
            Bl,
            "config-fetch-failed",
            "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"
          ),
          pn(
            Bl,
            "no-api-key",
            'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'
          ),
          pn(
            Bl,
            "no-app-id",
            'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'
          ),
          Bl),
        ic = new Tn("analytics", "Analytics", ac),
        oc = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1e3;
            ln(this, e), (this.throttleMetadata = t), (this.intervalMillis = n);
          }
          return (
            fn(e, [
              {
                key: "getThrottleMetadata",
                value: function (e) {
                  return this.throttleMetadata[e];
                },
              },
              {
                key: "setThrottleMetadata",
                value: function (e, t) {
                  this.throttleMetadata[e] = t;
                },
              },
              {
                key: "deleteThrottleMetadata",
                value: function (e) {
                  delete this.throttleMetadata[e];
                },
              },
            ]),
            e
          );
        })(),
        sc = new oc();
      function uc(e) {
        return new Headers({ Accept: "application/json", "x-goog-api-key": e });
      }
      function lc(e) {
        return cc.apply(this, arguments);
      }
      function cc() {
        return (cc = un(
          hn.mark(function e(t) {
            var n, r, a, i, o, s, u, l;
            return hn.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.appId),
                        (a = t.apiKey),
                        (i = { method: "GET", headers: uc(a) }),
                        (o = ql.replace("{app-id}", r)),
                        (e.next = 5),
                        fetch(o, i)
                      );
                    case 5:
                      if (200 === (s = e.sent).status || 304 === s.status) {
                        e.next = 18;
                        break;
                      }
                      return (u = ""), (e.prev = 8), (e.next = 11), s.json();
                    case 11:
                      (l = e.sent),
                        (null === (n = l.error) || void 0 === n
                          ? void 0
                          : n.message) && (u = l.error.message),
                        (e.next = 17);
                      break;
                    case 15:
                      (e.prev = 15), (e.t0 = e.catch(8));
                    case 17:
                      throw ic.create("config-fetch-failed", {
                        httpStatus: s.status,
                        responseMessage: u,
                      });
                    case 18:
                      return e.abrupt("return", s.json());
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[8, 15]]
            );
          })
        )).apply(this, arguments);
      }
      function fc(e) {
        return dc.apply(this, arguments);
      }
      function dc() {
        return (
          (dc = un(
            hn.mark(function e(t) {
              var n,
                r,
                a,
                i,
                o,
                s,
                u,
                l,
                c = arguments;
              return hn.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = c.length > 1 && void 0 !== c[1] ? c[1] : sc),
                        (r = c.length > 2 ? c[2] : void 0),
                        (a = t.options),
                        (i = a.appId),
                        (o = a.apiKey),
                        (s = a.measurementId),
                        i)
                      ) {
                        e.next = 5;
                        break;
                      }
                      throw ic.create("no-app-id");
                    case 5:
                      if (o) {
                        e.next = 9;
                        break;
                      }
                      if (!s) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", { measurementId: s, appId: i });
                    case 8:
                      throw ic.create("no-api-key");
                    case 9:
                      return (
                        (u = n.getThrottleMetadata(i) || {
                          backoffCount: 0,
                          throttleEndTimeMillis: Date.now(),
                        }),
                        (l = new gc()),
                        setTimeout(
                          un(
                            hn.mark(function e() {
                              return hn.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      l.abort();
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          ),
                          void 0 !== r ? r : Kl
                        ),
                        e.abrupt(
                          "return",
                          pc({ appId: i, apiKey: o, measurementId: s }, u, l, n)
                        )
                      );
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          dc.apply(this, arguments)
        );
      }
      function pc(e, t, n) {
        return hc.apply(this, arguments);
      }
      function hc() {
        return (
          (hc = un(
            hn.mark(function e(t, n, r) {
              var a,
                i,
                o,
                s,
                u,
                l,
                c,
                f,
                d = arguments;
              return hn.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = n.throttleEndTimeMillis),
                          (i = n.backoffCount),
                          (o = d.length > 3 && void 0 !== d[3] ? d[3] : sc),
                          (s = t.appId),
                          (u = t.measurementId),
                          (e.prev = 3),
                          (e.next = 6),
                          vc(r, a)
                        );
                      case 6:
                        e.next = 14;
                        break;
                      case 8:
                        if (((e.prev = 8), (e.t0 = e.catch(3)), !u)) {
                          e.next = 13;
                          break;
                        }
                        return (
                          Ql.warn(
                            "Timed out fetching this Firebase app's measurement ID from the server." +
                              " Falling back to the measurement ID ".concat(u) +
                              ' provided in the "measurementId" field in the local Firebase config. ['.concat(
                                e.t0.message,
                                "]"
                              )
                          ),
                          e.abrupt("return", { appId: s, measurementId: u })
                        );
                      case 13:
                        throw e.t0;
                      case 14:
                        return (e.prev = 14), (e.next = 17), lc(t);
                      case 17:
                        return (
                          (l = e.sent),
                          o.deleteThrottleMetadata(s),
                          e.abrupt("return", l)
                        );
                      case 22:
                        if (((e.prev = 22), (e.t1 = e.catch(14)), mc(e.t1))) {
                          e.next = 32;
                          break;
                        }
                        if ((o.deleteThrottleMetadata(s), !u)) {
                          e.next = 31;
                          break;
                        }
                        return (
                          Ql.warn(
                            "Failed to fetch this Firebase app's measurement ID from the server." +
                              " Falling back to the measurement ID ".concat(u) +
                              ' provided in the "measurementId" field in the local Firebase config. ['.concat(
                                e.t1.message,
                                "]"
                              )
                          ),
                          e.abrupt("return", { appId: s, measurementId: u })
                        );
                      case 31:
                        throw e.t1;
                      case 32:
                        return (
                          (c =
                            503 === Number(e.t1.customData.httpStatus)
                              ? Fn(i, o.intervalMillis, 30)
                              : Fn(i, o.intervalMillis)),
                          (f = {
                            throttleEndTimeMillis: Date.now() + c,
                            backoffCount: i + 1,
                          }),
                          o.setThrottleMetadata(s, f),
                          Ql.debug(
                            "Calling attemptFetch again in ".concat(
                              c,
                              " millis"
                            )
                          ),
                          e.abrupt("return", pc(t, f, r, o))
                        );
                      case 37:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [3, 8],
                  [14, 22],
                ]
              );
            })
          )),
          hc.apply(this, arguments)
        );
      }
      function vc(e, t) {
        return new Promise(function (n, r) {
          var a = Math.max(t - Date.now(), 0),
            i = setTimeout(n, a);
          e.addEventListener(function () {
            clearTimeout(i),
              r(ic.create("fetch-throttle", { throttleEndTimeMillis: t }));
          });
        });
      }
      function mc(e) {
        if (!(e instanceof Cn) || !e.customData) return !1;
        var t = Number(e.customData.httpStatus);
        return 429 === t || 500 === t || 503 === t || 504 === t;
      }
      var gc = (function () {
        function e() {
          ln(this, e), (this.listeners = []);
        }
        return (
          fn(e, [
            {
              key: "addEventListener",
              value: function (e) {
                this.listeners.push(e);
              },
            },
            {
              key: "abort",
              value: function () {
                this.listeners.forEach(function (e) {
                  return e();
                });
              },
            },
          ]),
          e
        );
      })();
      function yc() {
        return bc.apply(this, arguments);
      }
      function bc() {
        return (bc = un(
          hn.mark(function e() {
            return hn.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (En()) {
                        e.next = 5;
                        break;
                      }
                      return (
                        Ql.warn(
                          ic.create("indexeddb-unavailable", {
                            errorInfo:
                              "IndexedDB is not available in this environment.",
                          }).message
                        ),
                        e.abrupt("return", !1)
                      );
                    case 5:
                      return (e.prev = 5), (e.next = 8), In();
                    case 8:
                      e.next = 14;
                      break;
                    case 10:
                      return (
                        (e.prev = 10),
                        (e.t0 = e.catch(5)),
                        Ql.warn(
                          ic.create("indexeddb-unavailable", {
                            errorInfo: e.t0,
                          }).message
                        ),
                        e.abrupt("return", !1)
                      );
                    case 14:
                      return e.abrupt("return", !0);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[5, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function kc() {
        return (
          (kc = un(
            hn.mark(function e(t, n, r, a, i, s, u) {
              var l, c, f, d, p, h, v, m;
              return hn.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (c = fc(t))
                          .then(function (e) {
                            (r[e.measurementId] = e.appId),
                              t.options.measurementId &&
                                e.measurementId !== t.options.measurementId &&
                                Ql.warn(
                                  "The measurement ID in the local Firebase config (".concat(
                                    t.options.measurementId,
                                    ")"
                                  ) +
                                    " does not match the measurement ID fetched from the server (".concat(
                                      e.measurementId,
                                      ")."
                                    ) +
                                    " To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config."
                                );
                          })
                          .catch(function (e) {
                            return Ql.error(e);
                          }),
                        n.push(c),
                        (f = yc().then(function (e) {
                          return e ? a.getId() : void 0;
                        })),
                        (e.next = 6),
                        Promise.all([c, f])
                      );
                    case 6:
                      return (
                        (d = e.sent),
                        (p = o(d, 2)),
                        (h = p[0]),
                        (v = p[1]),
                        rc() || Yl(s, h.measurementId),
                        i("js", new Date()),
                        ((m =
                          null !==
                            (l =
                              null === u || void 0 === u ? void 0 : u.config) &&
                          void 0 !== l
                            ? l
                            : {}).origin = "firebase"),
                        (m.update = !0),
                        null != v && (m.firebase_id = v),
                        i("config", h.measurementId, m),
                        e.abrupt("return", h.measurementId)
                      );
                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          kc.apply(this, arguments)
        );
      }
      var wc,
        xc,
        Sc = (function () {
          function e(t) {
            ln(this, e), (this.app = t);
          }
          return (
            fn(e, [
              {
                key: "_delete",
                value: function () {
                  return delete _c[this.app.options.appId], Promise.resolve();
                },
              },
            ]),
            e
          );
        })(),
        _c = {},
        Ec = [],
        Ic = {},
        Cc = "dataLayer",
        Tc = "gtag",
        Pc = !1;
      function Oc() {
        var e = [];
        if (
          (_n() && e.push("This is a browser extension environment."),
          ("undefined" !== typeof navigator && navigator.cookieEnabled) ||
            e.push("Cookies are not available."),
          e.length > 0)
        ) {
          var t = e
              .map(function (e, t) {
                return "(".concat(t + 1, ") ").concat(e);
              })
              .join(" "),
            n = ic.create("invalid-analytics-context", { errorInfo: t });
          Ql.warn(n.message);
        }
      }
      function Nc(e, t, n) {
        Oc();
        var r = e.options.appId;
        if (!r) throw ic.create("no-app-id");
        if (!e.options.apiKey) {
          if (!e.options.measurementId) throw ic.create("no-api-key");
          Ql.warn(
            'The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest' +
              " measurement ID for this Firebase app. Falling back to the measurement ID ".concat(
                e.options.measurementId
              ) +
              ' provided in the "measurementId" field in the local Firebase config.'
          );
        }
        if (null != _c[r]) throw ic.create("already-exists", { id: r });
        if (!Pc) {
          !(function (e) {
            var t = [];
            Array.isArray(window[e]) ? (t = window[e]) : (window[e] = t);
          })(Cc);
          var a = nc(_c, Ec, Ic, Cc, Tc),
            i = a.wrappedGtag,
            o = a.gtagCore;
          (xc = i), (wc = o), (Pc = !0);
        }
        return (
          (_c[r] = (function (e, t, n, r, a, i, o) {
            return kc.apply(this, arguments);
          })(e, Ec, Ic, t, wc, Cc, n)),
          new Sc(e)
        );
      }
      function Rc() {
        return (Rc = un(
          hn.mark(function e(t, n, r, a, i) {
            var o, s;
            return hn.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!i || !i.global) {
                      e.next = 5;
                      break;
                    }
                    return t("event", r, a), e.abrupt("return");
                  case 5:
                    return (e.next = 7), n;
                  case 7:
                    (o = e.sent),
                      (s = Object.assign(Object.assign({}, a), { send_to: o })),
                      t("event", r, s);
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ac(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Pr(e, $l);
        if (n.isInitialized()) {
          var r = n.getImmediate();
          if (Nn(t, n.getOptions())) return r;
          throw ic.create("already-initialized");
        }
        var a = n.initialize({ options: t });
        return a;
      }
      function Dc(e, t, n, r) {
        (e = Un(e)),
          (function (e, t, n, r, a) {
            return Rc.apply(this, arguments);
          })(xc, _c[e.app.options.appId], t, n, r).catch(function (e) {
            return Ql.error(e);
          });
      }
      var Lc = "@firebase/analytics",
        Mc = "0.7.9";
      Tr(
        new Bn(
          $l,
          function (e, t) {
            var n = t.options;
            return Nc(
              e.getProvider("app").getImmediate(),
              e.getProvider("installations-internal").getImmediate(),
              n
            );
          },
          "PUBLIC"
        )
      ),
        Tr(
          new Bn(
            "analytics-internal",
            function (e) {
              try {
                var t = e.getProvider($l).getImmediate();
                return {
                  logEvent: function (e, n, r) {
                    return Dc(t, e, n, r);
                  },
                };
              } catch (n) {
                throw ic.create("interop-component-reg-failed", { reason: n });
              }
            },
            "PRIVATE"
          )
        ),
        Lr(Lc, Mc),
        Lr(Lc, Mc, "esm2017");
      var jc = (function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("object" !== typeof t) {
          var n = t;
          t = { name: n };
        }
        var r = Object.assign(
            { name: Sr, automaticDataCollectionEnabled: !1 },
            t
          ),
          a = r.name;
        if ("string" !== typeof a || !a)
          throw Nr.create("bad-app-name", { appName: String(a) });
        var i = Er.get(a);
        if (i) {
          if (Nn(e, i.options) && Nn(r, i.config)) return i;
          throw Nr.create("duplicate-app", { appName: a });
        }
        var o,
          s = new Kn(a),
          u = on(Ir.values());
        try {
          for (u.s(); !(o = u.n()).done; ) {
            var l = o.value;
            s.addComponent(l);
          }
        } catch (f) {
          u.e(f);
        } finally {
          u.f();
        }
        var c = new Rr(e, r, s);
        return Er.set(a, c), c;
      })({
        apiKey: "AIzaSyAvSPs7BVhjigh3sfdqJoNmLHxp9ZN1VwE",
        authDomain: "nittoshop-3c4e4.firebaseapp.com",
        databaseURL:
          "https://nittoshop-3c4e4-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "nittoshop-3c4e4",
        storageBucket: "nittoshop-3c4e4.appspot.com",
        messagingSenderId: "935064541626",
        appId: "1:935064541626:web:1883c0c6831891a4e3e583",
        measurementId: "G-MPX3LT1SCG",
      });
      !(function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Dr(),
          t = Pr((e = Un(e)), $l);
        t.isInitialized() ? t.getImmediate() : Ac(e);
      })(jc);
      r.createRoot(document.getElementById("root")).render(
        (0, J.jsx)(t.StrictMode, {
          children: (0, J.jsx)(q, { children: (0, J.jsx)(du, {}) }),
        })
      );
    })();
})();
//# sourceMappingURL=main.ab46f253.js.map
