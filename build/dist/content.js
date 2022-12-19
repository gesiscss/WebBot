/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3542:
/***/ (function(__unused_webpack_module, exports) {

!function (e, t) {
   true ? t(exports) : 0;
}(this, function (e) {
  "use strict";

  const t = "single-file-load-image",
    r = "single-file-image-loaded",
    n = (e, t, r) => globalThis.addEventListener(e, t, r),
    o = e => {
      try {
        globalThis.dispatchEvent(e);
      } catch (e) {}
    },
    i = globalThis.CustomEvent,
    a = globalThis.document,
    s = globalThis.Document;
  let l;
  function c() {
    return Array.from(l.values());
  }
  function u(e) {
    e.loadDeferredImagesBlockCookies && o(new i("single-file-block-cookies-start")), e.loadDeferredImagesBlockStorage && o(new i("single-file-block-storage-start")), e.loadDeferredImagesDispatchScrollEvent && o(new i("single-file-dispatch-scroll-event-start")), e.loadDeferredImagesKeepZoomLevel ? o(new i("single-file-load-deferred-images-keep-zoom-level-start")) : o(new i("single-file-load-deferred-images-start"));
  }
  function h(e) {
    e.loadDeferredImagesBlockCookies && o(new i("single-file-block-cookies-end")), e.loadDeferredImagesBlockStorage && o(new i("single-file-block-storage-end")), e.loadDeferredImagesDispatchScrollEvent && o(new i("single-file-dispatch-scroll-event-end")), e.loadDeferredImagesKeepZoomLevel ? o(new i("single-file-load-deferred-images-keep-zoom-level-end")) : o(new i("single-file-load-deferred-images-end"));
  }
  function d(e) {
    e.loadDeferredImagesKeepZoomLevel ? o(new i("single-file-load-deferred-images-keep-zoom-level-reset")) : o(new i("single-file-load-deferred-images-reset"));
  }
  l = window._singleFile_fontFaces ? window._singleFile_fontFaces : window._singleFile_fontFaces = new Map(), a instanceof s && (n("single-file-new-font-face", e => {
    const t = e.detail,
      r = Object.assign({}, t);
    delete r.src, l.set(JSON.stringify(r), t);
  }), n("single-file-delete-font", e => {
    const t = e.detail,
      r = Object.assign({}, t);
    delete r.src, l.delete(JSON.stringify(r));
  }), n("single-file-clear-fonts", () => l = new Map()));
  var p = Object.freeze({
    __proto__: null,
    getFontsData: c,
    loadDeferredImagesStart: u,
    loadDeferredImagesEnd: h,
    loadDeferredImagesResetZoomLevel: d,
    LOAD_IMAGE_EVENT: t,
    IMAGE_LOADED_EVENT: r
  });
  const m = new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig");
  function f(e) {
    return e.replace(m, (e, t, r) => {
      const n = "0x" + t - 65536;
      return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
    });
  }
  var g = Object.freeze({
    __proto__: null,
    process: f
  });
  const y = "single-file-on-before-capture",
    b = "single-file-on-after-capture",
    k = "data-single-file-removed-content",
    v = "data-single-file-hidden-content",
    w = "data-single-file-kept-content",
    x = "data-single-file-hidden-frame",
    E = "data-single-file-preserved-space-element",
    A = "data-single-file-shadow-root-element",
    S = "data-single-file-win-id",
    T = "data-single-file-image",
    C = "data-single-file-poster",
    R = "data-single-file-video",
    _ = "data-single-file-canvas",
    I = "data-single-file-movable-style",
    L = "data-single-file-input-value",
    N = "data-single-file-lazy-loaded-src",
    z = "data-single-file-stylesheet",
    P = "data-single-file-disabled-noscript",
    M = "data-single-file-selected-content",
    O = "data-single-file-invalid-element",
    U = "data-single-file-async-script",
    D = "*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",
    F = ["NOSCRIPT", "DISABLED-NOSCRIPT", "META", "LINK", "STYLE", "TITLE", "TEMPLATE", "SOURCE", "OBJECT", "SCRIPT", "HEAD", "BODY"],
    q = /^'(.*?)'$/,
    B = /^"(.*?)"$/,
    j = {
      regular: "400",
      normal: "400",
      bold: "700",
      bolder: "700",
      lighter: "100"
    },
    H = "Page saved with SingleFile",
    V = "Archive processed by SingleFile",
    W = "single-file-ui-element",
    $ = "data:,",
    G = (e, t, r) => globalThis.addEventListener(e, t, r);
  function Y(e) {
    e.querySelectorAll("meta[http-equiv=refresh]").forEach(e => {
      e.removeAttribute("http-equiv"), e.setAttribute("disabled-http-equiv", "refresh");
    });
  }
  function J(e, t, r) {
    e.querySelectorAll("noscript:not([data-single-file-disabled-noscript])").forEach(e => {
      e.setAttribute(P, e.textContent), e.textContent = "";
    }), Y(e), e.head && e.head.querySelectorAll(D).forEach(e => e.hidden = !0), e.querySelectorAll("svg foreignObject").forEach(e => {
      const t = e.querySelectorAll("html > head > " + D + ", html > body > " + D);
      t.length && (Array.from(e.childNodes).forEach(e => e.remove()), t.forEach(t => e.appendChild(t)));
    });
    const n = new Map();
    let o;
    return t && e.documentElement ? (e.querySelectorAll("button button, a a").forEach(t => {
      const r = e.createElement("template");
      r.setAttribute(O, ""), r.content.appendChild(t.cloneNode(!0)), n.set(t, r), t.replaceWith(r);
    }), o = Q(t, e, e.documentElement, r), r.moveStylesInHead && e.querySelectorAll("body style, body ~ style").forEach(e => {
      const r = le(t, e);
      r && ee(e, r) && (e.setAttribute(I, ""), o.markedElements.push(e));
    })) : o = {
      canvases: [],
      images: [],
      posters: [],
      videos: [],
      usedFonts: [],
      shadowRoots: [],
      markedElements: []
    }, {
      canvases: o.canvases,
      fonts: c(),
      stylesheets: re(e),
      images: o.images,
      posters: o.posters,
      videos: o.videos,
      usedFonts: Array.from(o.usedFonts.values()),
      shadowRoots: o.shadowRoots,
      referrer: e.referrer,
      markedElements: o.markedElements,
      invalidElements: n
    };
  }
  function Q(e, t, r, n, o = {
    usedFonts: new Map(),
    canvases: [],
    images: [],
    posters: [],
    videos: [],
    shadowRoots: [],
    markedElements: []
  }, i) {
    return Array.from(r.childNodes).filter(t => t instanceof e.HTMLElement || t instanceof e.SVGElement).forEach(r => {
      let a, s, l;
      if (!n.autoSaveExternalSave && (n.removeHiddenElements || n.removeUnusedFonts || n.compressHTML) && (l = le(e, r), r instanceof e.HTMLElement && n.removeHiddenElements && (s = (i || r.closest("html > head")) && F.includes(r.tagName) || r.closest("details"), s || (a = i || ee(r, l), a && (r.setAttribute(v, ""), o.markedElements.push(r)))), !a)) {
        if (n.compressHTML && l) {
          const e = l.getPropertyValue("white-space");
          e && e.startsWith("pre") && (r.setAttribute(E, ""), o.markedElements.push(r));
        }
        n.removeUnusedFonts && (K(l, n, o.usedFonts), K(le(e, r, ":first-letter"), n, o.usedFonts), K(le(e, r, ":before"), n, o.usedFonts), K(le(e, r, ":after"), n, o.usedFonts));
      }
      !function (e, t, r, n, o, i, a) {
        if ("CANVAS" == r.tagName) try {
          o.canvases.push({
            dataURI: r.toDataURL("image/png", "")
          }), r.setAttribute(_, o.canvases.length - 1), o.markedElements.push(r);
        } catch (e) {}
        if ("IMG" == r.tagName) {
          const t = {
            currentSrc: i ? $ : n.loadDeferredImages && r.getAttribute(N) || r.currentSrc
          };
          if (o.images.push(t), r.setAttribute(T, o.images.length - 1), o.markedElements.push(r), r.removeAttribute(N), a = a || le(e, r)) {
            t.size = function (e, t, r) {
              let n = t.naturalWidth,
                o = t.naturalHeight;
              if (!n && !o) {
                const i = null == t.getAttribute("style");
                if (r = r || le(e, t)) {
                  let e,
                    a,
                    s,
                    l,
                    c,
                    u,
                    h,
                    d,
                    p = !1;
                  if ("content-box" == r.getPropertyValue("box-sizing")) {
                    const e = t.style.getPropertyValue("box-sizing"),
                      r = t.style.getPropertyPriority("box-sizing"),
                      n = t.clientWidth;
                    t.style.setProperty("box-sizing", "border-box", "important"), p = t.clientWidth != n, e ? t.style.setProperty("box-sizing", e, r) : t.style.removeProperty("box-sizing");
                  }
                  e = ne("padding-left", r), a = ne("padding-right", r), s = ne("padding-top", r), l = ne("padding-bottom", r), p ? (c = ne("border-left-width", r), u = ne("border-right-width", r), h = ne("border-top-width", r), d = ne("border-bottom-width", r)) : c = u = h = d = 0, n = Math.max(0, t.clientWidth - e - a - c - u), o = Math.max(0, t.clientHeight - s - l - h - d), i && t.removeAttribute("style");
                }
              }
              return {
                pxWidth: n,
                pxHeight: o
              };
            }(e, r, a);
            const n = a.getPropertyValue("box-shadow"),
              o = a.getPropertyValue("background-image");
            n && "none" != n || o && "none" != o || !(t.size.pxWidth > 1 || t.size.pxHeight > 1) || (t.replaceable = !0, t.backgroundColor = a.getPropertyValue("background-color"), t.objectFit = a.getPropertyValue("object-fit"), t.boxSizing = a.getPropertyValue("box-sizing"), t.objectPosition = a.getPropertyValue("object-position"));
          }
        }
        if ("VIDEO" == r.tagName) {
          const n = r.currentSrc;
          if (n && !n.startsWith("blob:") && !n.startsWith("data:")) {
            const t = le(e, r.parentNode);
            o.videos.push({
              positionParent: t && t.getPropertyValue("position"),
              src: n,
              size: {
                pxWidth: r.clientWidth,
                pxHeight: r.clientHeight
              },
              currentTime: r.currentTime
            }), r.setAttribute(R, o.videos.length - 1);
          }
          if (!r.poster) {
            const e = t.createElement("canvas"),
              n = e.getContext("2d");
            e.width = r.clientWidth, e.height = r.clientHeight;
            try {
              n.drawImage(r, 0, 0, e.width, e.height), o.posters.push(e.toDataURL("image/png", "")), r.setAttribute(C, o.posters.length - 1), o.markedElements.push(r);
            } catch (e) {}
          }
        }
        "IFRAME" == r.tagName && i && n.removeHiddenElements && (r.setAttribute(x, ""), o.markedElements.push(r));
        "INPUT" == r.tagName && ("password" != r.type && (r.setAttribute(L, r.value), o.markedElements.push(r)), "radio" != r.type && "checkbox" != r.type || (r.setAttribute(L, r.checked), o.markedElements.push(r)));
        "TEXTAREA" == r.tagName && (r.setAttribute(L, r.value), o.markedElements.push(r));
        "SELECT" == r.tagName && r.querySelectorAll("option").forEach(e => {
          e.selected && (e.setAttribute(L, ""), o.markedElements.push(e));
        });
        "SCRIPT" == r.tagName && (r.async && "" != r.getAttribute("async") && "async" != r.getAttribute("async") && (r.setAttribute(U, ""), o.markedElements.push(r)), r.textContent = r.textContent.replace(/<\/script>/gi, "<\\/script>"));
      }(e, t, r, n, o, a, l);
      const c = !(r instanceof e.SVGElement) && Z(r);
      if (c && !r.classList.contains(W)) {
        const i = {};
        r.setAttribute(A, o.shadowRoots.length), o.markedElements.push(r), o.shadowRoots.push(i), Q(e, t, c, n, o, a), i.content = c.innerHTML, i.mode = c.mode;
        try {
          c.adoptedStyleSheets && c.adoptedStyleSheets.length && (i.adoptedStyleSheets = Array.from(c.adoptedStyleSheets).map(e => Array.from(e.cssRules).map(e => e.cssText).join("\n")));
        } catch (e) {}
      }
      Q(e, t, r, n, o, a), !n.autoSaveExternalSave && n.removeHiddenElements && i && (s || "" == r.getAttribute(w) ? r.parentElement && (r.parentElement.setAttribute(w, ""), o.markedElements.push(r.parentElement)) : a && (r.setAttribute(k, ""), o.markedElements.push(r)));
    }), o;
  }
  function K(e, t, r) {
    if (e) {
      const n = e.getPropertyValue("font-style") || "normal";
      e.getPropertyValue("font-family").split(",").forEach(o => {
        if (o = X(o), !t.loadedFonts || t.loadedFonts.find(e => X(e.family) == o && e.style == n)) {
          const t = ae(e.getPropertyValue("font-weight")),
            i = e.getPropertyValue("font-variant") || "normal",
            a = [o, t, n, i];
          r.set(JSON.stringify(a), [o, t, n, i]);
        }
      });
    }
  }
  function Z(e) {
    const t = globalThis.chrome;
    if (e.openOrClosedShadowRoot) return e.openOrClosedShadowRoot;
    if (!(t && t.dom && t.dom.openOrClosedShadowRoot)) return e.shadowRoot;
    try {
      return t.dom.openOrClosedShadowRoot(e);
    } catch (t) {
      return e.shadowRoot;
    }
  }
  function X(e = "") {
    return ie(f(e.trim())).toLowerCase();
  }
  function ee(e, t) {
    let r = !1;
    if (t) {
      const n = t.getPropertyValue("display"),
        o = t.getPropertyValue("opacity"),
        i = t.getPropertyValue("visibility");
      if (r = "none" == n, !r && ("0" == o || "hidden" == i) && e.getBoundingClientRect) {
        const t = e.getBoundingClientRect();
        r = !t.width && !t.height;
      }
    }
    return Boolean(r);
  }
  function te(e, t, r) {
    if (e.querySelectorAll("[data-single-file-disabled-noscript]").forEach(e => {
      e.textContent = e.getAttribute(P), e.removeAttribute(P);
    }), e.querySelectorAll("meta[disabled-http-equiv]").forEach(e => {
      e.setAttribute("http-equiv", e.getAttribute("disabled-http-equiv")), e.removeAttribute("disabled-http-equiv");
    }), e.head && e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach(e => e.removeAttribute("hidden")), !t) {
      const r = [k, x, v, E, T, C, R, _, L, A, z, U];
      t = e.querySelectorAll(r.map(e => "[" + e + "]").join(","));
    }
    t.forEach(e => {
      e.removeAttribute(k), e.removeAttribute(v), e.removeAttribute(w), e.removeAttribute(x), e.removeAttribute(E), e.removeAttribute(T), e.removeAttribute(C), e.removeAttribute(R), e.removeAttribute(_), e.removeAttribute(L), e.removeAttribute(A), e.removeAttribute(z), e.removeAttribute(U), e.removeAttribute(I);
    }), r && Array.from(r.entries()).forEach(([e, t]) => t.replaceWith(e));
  }
  function re(e) {
    if (e) {
      const t = [];
      return e.querySelectorAll("style").forEach((r, n) => {
        try {
          const o = e.createElement("style");
          o.textContent = r.textContent, e.body.appendChild(o);
          const i = o.sheet;
          o.remove(), i && i.cssRules.length == r.sheet.cssRules.length || (r.setAttribute(z, n), t[n] = Array.from(r.sheet.cssRules).map(e => e.cssText).join("\n"));
        } catch (e) {}
      }), t;
    }
  }
  function ne(e, t) {
    if (t.getPropertyValue(e).endsWith("px")) return parseFloat(t.getPropertyValue(e));
  }
  function oe(e) {
    const t = e.doctype;
    let r = "";
    return t && (r = "<!DOCTYPE " + t.nodeName, t.publicId ? (r += ' PUBLIC "' + t.publicId + '"', t.systemId && (r += ' "' + t.systemId + '"')) : t.systemId && (r += ' SYSTEM "' + t.systemId + '"'), t.internalSubset && (r += " [" + t.internalSubset + "]"), r += "> "), r + e.documentElement.outerHTML;
  }
  function ie(e) {
    return (e = e.match(q) ? e.replace(q, "$1") : e.replace(B, "$1")).trim();
  }
  function ae(e) {
    return j[e.toLowerCase().trim()] || e;
  }
  function se(e) {
    return e.flat ? e.flat() : e.reduce((e, t) => e.concat(Array.isArray(t) ? se(t) : t), []);
  }
  function le(e, t, r) {
    try {
      return e.getComputedStyle(t, r);
    } catch (e) {}
  }
  var ce = Object.freeze({
    __proto__: null,
    initUserScriptHandler: function () {
      G("single-file-user-script-init", () => globalThis._singleFile_waitForUserScript = async e => {
        const t = new CustomEvent(e + "-request", {
            cancelable: !0
          }),
          r = new Promise(t => G(e + "-response", t));
        (e => {
          try {
            globalThis.dispatchEvent(e);
          } catch (e) {}
        })(t), t.defaultPrevented && (await r);
      });
    },
    initDoc: Y,
    preProcessDoc: J,
    postProcessDoc: te,
    serialize: oe,
    removeQuotes: ie,
    flatten: se,
    getFontWeight: ae,
    normalizeFontFamily: X,
    getShadowRoot: Z,
    ON_BEFORE_CAPTURE_EVENT_NAME: y,
    ON_AFTER_CAPTURE_EVENT_NAME: b,
    WIN_ID_ATTRIBUTE_NAME: S,
    PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME: E,
    REMOVED_CONTENT_ATTRIBUTE_NAME: k,
    HIDDEN_CONTENT_ATTRIBUTE_NAME: v,
    HIDDEN_FRAME_ATTRIBUTE_NAME: x,
    IMAGE_ATTRIBUTE_NAME: T,
    POSTER_ATTRIBUTE_NAME: C,
    VIDEO_ATTRIBUTE_NAME: R,
    CANVAS_ATTRIBUTE_NAME: _,
    INPUT_VALUE_ATTRIBUTE_NAME: L,
    SHADOW_ROOT_ATTRIBUTE_NAME: A,
    STYLE_ATTRIBUTE_NAME: I,
    LAZY_SRC_ATTRIBUTE_NAME: N,
    STYLESHEET_ATTRIBUTE_NAME: z,
    SELECTED_CONTENT_ATTRIBUTE_NAME: M,
    INVALID_ELEMENT_ATTRIBUTE_NAME: O,
    ASYNC_SCRIPT_ATTRIBUTE_NAME: U,
    COMMENT_HEADER: H,
    COMMENT_HEADER_LEGACY: V,
    SINGLE_FILE_UI_ELEMENT_CLASS: W,
    EMPTY_RESOURCE: $
  });
  const ue = N,
    he = W,
    de = "attributes",
    pe = globalThis.browser,
    me = globalThis.document,
    fe = globalThis.MutationObserver,
    ge = (e, t, r) => globalThis.addEventListener(e, t, r),
    ye = (e, t, r) => globalThis.removeEventListener(e, t, r),
    be = new Map();
  let ke;
  async function ve(e) {
    if (me.documentElement) {
      be.clear();
      const n = Math.max(me.documentElement.scrollHeight - 1.5 * me.documentElement.clientHeight, 0),
        o = Math.max(me.documentElement.scrollWidth - 1.5 * me.documentElement.clientWidth, 0);
      if (globalThis.scrollY <= n && globalThis.scrollX <= o) return function (e) {
        return ke = 0, new Promise(async n => {
          let o;
          const i = new Set(),
            a = new fe(async t => {
              if ((t = t.filter(e => e.type == de)).length) {
                t.filter(e => {
                  if ("src" == e.attributeName && (e.target.setAttribute(ue, e.target.src), e.target.addEventListener("load", l)), "src" == e.attributeName || "srcset" == e.attributeName || "SOURCE" == e.target.tagName) return !e.target.classList || !e.target.classList.contains(he);
                }).length && (o = !0, await Ee(a, e, d), i.size || (await xe(a, e, d)));
              }
            });
          async function s(t) {
            await Se("idleTimeout", async () => {
              o ? ke < 10 && (ke++, Ce("idleTimeout"), await s(Math.max(500, t / 2))) : (Ce("loadTimeout"), Ce("maxTimeout"), Ae(a, e, d));
            }, t, e.loadDeferredImagesNativeTimeout);
          }
          function l(e) {
            const t = e.target;
            t.removeAttribute(ue), t.removeEventListener("load", l);
          }
          async function c(t) {
            o = !0, await Ee(a, e, d), await xe(a, e, d), t.detail && i.add(t.detail);
          }
          async function h(t) {
            await Ee(a, e, d), await xe(a, e, d), i.delete(t.detail), i.size || (await xe(a, e, d));
          }
          function d(e) {
            a.disconnect(), ye(t, c), ye(r, h), n(e);
          }
          await s(2 * e.loadDeferredImagesMaxIdleTime), await Ee(a, e, d), a.observe(me, {
            subtree: !0,
            childList: !0,
            attributes: !0
          }), ge(t, c), ge(r, h), u(e);
        });
      }(e);
    }
  }
  function we(e) {
    d(e);
  }
  async function xe(e, t, r) {
    await Se("loadTimeout", () => Ae(e, t, r), t.loadDeferredImagesMaxIdleTime, t.loadDeferredImagesNativeTimeout);
  }
  async function Ee(e, t, r) {
    await Se("maxTimeout", async () => {
      await Ce("loadTimeout"), await Ae(e, t, r);
    }, 10 * t.loadDeferredImagesMaxIdleTime, t.loadDeferredImagesNativeTimeout);
  }
  async function Ae(e, t, r) {
    await Ce("idleTimeout"), h(t), await Se("endTimeout", async () => {
      await Ce("maxTimeout"), r();
    }, t.loadDeferredImagesMaxIdleTime / 2, t.loadDeferredImagesNativeTimeout), e.disconnect();
  }
  async function Se(e, t, r, n) {
    if (pe && pe.runtime && pe.runtime.sendMessage && !n) {
      if (!be.get(e) || !be.get(e).pending) {
        const n = {
          callback: t,
          pending: !0
        };
        be.set(e, n);
        try {
          await pe.runtime.sendMessage({
            method: "singlefile.lazyTimeout.setTimeout",
            type: e,
            delay: r
          });
        } catch (n) {
          Te(e, t, r);
        }
        n.pending = !1;
      }
    } else Te(e, t, r);
  }
  function Te(e, t, r) {
    const n = be.get(e);
    n && globalThis.clearTimeout(n), be.set(e, t), globalThis.setTimeout(t, r);
  }
  async function Ce(e) {
    if (pe && pe.runtime && pe.runtime.sendMessage) try {
      await pe.runtime.sendMessage({
        method: "singlefile.lazyTimeout.clearTimeout",
        type: e
      });
    } catch (t) {
      Re(e);
    } else Re(e);
  }
  function Re(e) {
    const t = be.get(e);
    be.delete(e), t && globalThis.clearTimeout(t);
  }
  pe && pe.runtime && pe.runtime.onMessage && pe.runtime.onMessage.addListener && pe.runtime.onMessage.addListener(e => {
    if ("singlefile.lazyTimeout.onTimeout" == e.method) {
      const t = be.get(e.type);
      if (t) {
        be.delete(e.type);
        try {
          t.callback();
        } catch (t) {
          Re(e.type);
        }
      }
    }
  });
  var _e = Object.freeze({
    __proto__: null,
    process: ve,
    resetZoomLevel: we
  });
  const Ie = {
      ON_BEFORE_CAPTURE_EVENT_NAME: y,
      ON_AFTER_CAPTURE_EVENT_NAME: b,
      WIN_ID_ATTRIBUTE_NAME: S,
      preProcessDoc: J,
      serialize: oe,
      postProcessDoc: te,
      getShadowRoot: Z
    },
    Le = "__frameTree__::",
    Ne = 'iframe, frame, object[type="text/html"][data]',
    ze = "singlefile.frameTree.initRequest",
    Pe = "singlefile.frameTree.ackInitRequest",
    Me = "singlefile.frameTree.cleanupRequest",
    Oe = "singlefile.frameTree.initResponse",
    Ue = 5e3,
    De = ".",
    Fe = globalThis.window == globalThis.top,
    qe = globalThis.browser,
    Be = globalThis.top,
    je = globalThis.MessageChannel,
    He = globalThis.document;
  let Ve,
    We = globalThis.sessions;
  var $e, Ge, Ye;
  function Je() {
    return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("");
  }
  async function Qe(e) {
    const t = e.sessionId,
      r = globalThis._singleFile_waitForUserScript;
    delete globalThis._singleFile_cleaningUp, Fe || (Ve = globalThis.frameId = e.windowId), Xe(He, e.options, Ve, t), Fe || (e.options.userScriptEnabled && r && (await r(Ie.ON_BEFORE_CAPTURE_EVENT_NAME)), nt({
      frames: [it(He, globalThis, Ve, e.options)],
      sessionId: t,
      requestedFrameId: He.documentElement.dataset.requestedFrameId && Ve
    }), e.options.userScriptEnabled && r && (await r(Ie.ON_AFTER_CAPTURE_EVENT_NAME)), delete He.documentElement.dataset.requestedFrameId);
  }
  function Ke(e) {
    if (!globalThis._singleFile_cleaningUp) {
      globalThis._singleFile_cleaningUp = !0;
      const t = e.sessionId;
      rt(at(He), e.windowId, t);
    }
  }
  function Ze(e) {
    e.frames.forEach(t => et("responseTimeouts", e.sessionId, t.windowId));
    const t = We.get(e.sessionId);
    if (t) {
      e.requestedFrameId && (t.requestedFrameId = e.requestedFrameId), e.frames.forEach(e => {
        let r = t.frames.find(t => e.windowId == t.windowId);
        r || (r = {
          windowId: e.windowId
        }, t.frames.push(r)), r.processed || (r.content = e.content, r.baseURI = e.baseURI, r.title = e.title, r.canvases = e.canvases, r.fonts = e.fonts, r.stylesheets = e.stylesheets, r.images = e.images, r.posters = e.posters, r.videos = e.videos, r.usedFonts = e.usedFonts, r.shadowRoots = e.shadowRoots, r.processed = e.processed);
      });
      t.frames.filter(e => !e.processed).length || (t.frames = t.frames.sort((e, t) => t.windowId.split(De).length - e.windowId.split(De).length), t.resolve && (t.requestedFrameId && t.frames.forEach(e => {
        e.windowId == t.requestedFrameId && (e.requestedFrame = !0);
      }), t.resolve(t.frames)));
    }
  }
  function Xe(e, t, r, n) {
    const o = at(e);
    !function (e, t, r, n, o) {
      const i = [];
      let a;
      We.get(o) ? a = We.get(o).requestTimeouts : (a = {}, We.set(o, {
        requestTimeouts: a
      }));
      t.forEach((e, t) => {
        const r = n + De + t;
        e.setAttribute(Ie.WIN_ID_ATTRIBUTE_NAME, r), i.push({
          windowId: r
        });
      }), nt({
        frames: i,
        sessionId: o,
        requestedFrameId: e.documentElement.dataset.requestedFrameId && n
      }), t.forEach((e, t) => {
        const i = n + De + t;
        try {
          ot(e.contentWindow, {
            method: ze,
            windowId: i,
            sessionId: o,
            options: r
          });
        } catch (e) {}
        a[i] = globalThis.setTimeout(() => nt({
          frames: [{
            windowId: i,
            processed: !0
          }],
          sessionId: o
        }), Ue);
      }), delete e.documentElement.dataset.requestedFrameId;
    }(e, o, t, r, n), o.length && function (e, t, r, n, o) {
      const i = [];
      t.forEach((e, t) => {
        const a = n + De + t;
        let s;
        try {
          s = e.contentDocument;
        } catch (e) {}
        if (s) try {
          const t = e.contentWindow;
          t.stop(), et("requestTimeouts", o, a), Xe(s, r, a, o), i.push(it(s, t, a, r));
        } catch (e) {
          i.push({
            windowId: a,
            processed: !0
          });
        }
      }), nt({
        frames: i,
        sessionId: o,
        requestedFrameId: e.documentElement.dataset.requestedFrameId && n
      }), delete e.documentElement.dataset.requestedFrameId;
    }(e, o, t, r, n);
  }
  function et(e, t, r) {
    const n = We.get(t);
    if (n && n[e]) {
      const t = n[e][r];
      t && (globalThis.clearTimeout(t), delete n[e][r]);
    }
  }
  function tt(e, t) {
    const r = We.get(e);
    r && r.responseTimeouts && (r.responseTimeouts[t] = globalThis.setTimeout(() => nt({
      frames: [{
        windowId: t,
        processed: !0
      }],
      sessionId: e
    }), 1e4));
  }
  function rt(e, t, r) {
    e.forEach((e, n) => {
      const o = t + De + n;
      e.removeAttribute(Ie.WIN_ID_ATTRIBUTE_NAME);
      try {
        ot(e.contentWindow, {
          method: Me,
          windowId: o,
          sessionId: r
        });
      } catch (e) {}
    }), e.forEach((e, n) => {
      const o = t + De + n;
      let i;
      try {
        i = e.contentDocument;
      } catch (e) {}
      if (i) try {
        rt(at(i), o, r);
      } catch (e) {}
    });
  }
  function nt(e) {
    e.method = Oe;
    try {
      Be.singlefile.processors.frameTree.initResponse(e);
    } catch (t) {
      ot(Be, e, !0);
    }
  }
  function ot(e, t, r) {
    if (e == Be && qe && qe.runtime && qe.runtime.sendMessage) qe.runtime.sendMessage(t);else if (r) {
      const r = new je();
      e.postMessage(Le + JSON.stringify({
        method: t.method,
        sessionId: t.sessionId
      }), "*", [r.port2]), r.port1.postMessage(t);
    } else e.postMessage(Le + JSON.stringify(t), "*");
  }
  function it(e, t, r, n) {
    const o = Ie.preProcessDoc(e, t, n),
      i = Ie.serialize(e);
    Ie.postProcessDoc(e, o.markedElements, o.invalidElements);
    return {
      windowId: r,
      content: i,
      baseURI: e.baseURI.split("#")[0],
      title: e.title,
      canvases: o.canvases,
      fonts: o.fonts,
      stylesheets: o.stylesheets,
      images: o.images,
      posters: o.posters,
      videos: o.videos,
      usedFonts: o.usedFonts,
      shadowRoots: o.shadowRoots,
      processed: !0
    };
  }
  function at(e) {
    let t = Array.from(e.querySelectorAll(Ne));
    return e.querySelectorAll("*").forEach(e => {
      const r = Ie.getShadowRoot(e);
      r && (t = t.concat(...r.querySelectorAll(Ne)));
    }), t;
  }
  We || (We = globalThis.sessions = new Map()), Fe && (Ve = "0", qe && qe.runtime && qe.runtime.onMessage && qe.runtime.onMessage.addListener && qe.runtime.onMessage.addListener(e => e.method == Oe ? (Ze(e), Promise.resolve({})) : e.method == Pe ? (et("requestTimeouts", e.sessionId, e.windowId), tt(e.sessionId, e.windowId), Promise.resolve({})) : void 0)), $e = "message", Ge = async e => {
    if ("string" == typeof e.data && e.data.startsWith(Le)) {
      e.preventDefault(), e.stopPropagation();
      const t = JSON.parse(e.data.substring(Le.length));
      t.method == ze ? (e.source && ot(e.source, {
        method: Pe,
        windowId: t.windowId,
        sessionId: t.sessionId
      }), Fe || (globalThis.stop(), t.options.loadDeferredImages && ve(t.options), await Qe(t))) : t.method == Pe ? (et("requestTimeouts", t.sessionId, t.windowId), tt(t.sessionId, t.windowId)) : t.method == Me ? Ke(t) : t.method == Oe && We.get(t.sessionId) && (e.ports[0].onmessage = e => Ze(e.data));
    }
  }, Ye = !0, globalThis.addEventListener($e, Ge, Ye);
  var st = Object.freeze({
      __proto__: null,
      getAsync: function (e) {
        const t = Je();
        return e = JSON.parse(JSON.stringify(e)), new Promise(r => {
          We.set(t, {
            frames: [],
            requestTimeouts: {},
            responseTimeouts: {},
            resolve: e => {
              e.sessionId = t, r(e);
            }
          }), Qe({
            windowId: Ve,
            sessionId: t,
            options: e
          });
        });
      },
      getSync: function (e) {
        const t = Je();
        e = JSON.parse(JSON.stringify(e)), We.set(t, {
          frames: [],
          requestTimeouts: {},
          responseTimeouts: {}
        }), function (e) {
          const t = e.sessionId,
            r = globalThis._singleFile_waitForUserScript;
          delete globalThis._singleFile_cleaningUp, Fe || (Ve = globalThis.frameId = e.windowId);
          Xe(He, e.options, Ve, t), Fe || (e.options.userScriptEnabled && r && r(Ie.ON_BEFORE_CAPTURE_EVENT_NAME), nt({
            frames: [it(He, globalThis, Ve, e.options)],
            sessionId: t,
            requestedFrameId: He.documentElement.dataset.requestedFrameId && Ve
          }), e.options.userScriptEnabled && r && r(Ie.ON_AFTER_CAPTURE_EVENT_NAME), delete He.documentElement.dataset.requestedFrameId);
        }({
          windowId: Ve,
          sessionId: t,
          options: e
        });
        const r = We.get(t).frames;
        return r.sessionId = t, r;
      },
      cleanup: function (e) {
        We.delete(e), Ke({
          windowId: Ve,
          sessionId: e,
          options: {
            sessionId: e
          }
        });
      },
      initResponse: Ze,
      TIMEOUT_INIT_REQUEST_MESSAGE: Ue
    }),
    lt = Object.freeze({
      __proto__: null,
      frameTree: st,
      hooksFrames: p,
      lazy: _e
    }),
    ct = Object.create,
    ut = Object.defineProperty,
    ht = Object.getOwnPropertyDescriptor,
    dt = Object.getOwnPropertyNames,
    pt = Object.getPrototypeOf,
    mt = Object.prototype.hasOwnProperty,
    ft = (e, t) => () => (t || e((t = {
      exports: {}
    }).exports, t), t.exports),
    gt = (e, t) => {
      for (var r in t) ut(e, r, {
        get: t[r],
        enumerable: !0
      });
    },
    yt = ft(e => {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      e.encode = function (e) {
        if (0 <= e && e < t.length) return t[e];
        throw new TypeError("Must be between 0 and 63: " + e);
      }, e.decode = function (e) {
        return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1;
      };
    }),
    bt = ft(e => {
      var t = yt();
      e.encode = function (e) {
        var r,
          n,
          o = "",
          i = (n = e) < 0 ? 1 + (-n << 1) : 0 + (n << 1);
        do {
          r = 31 & i, (i >>>= 5) > 0 && (r |= 32), o += t.encode(r);
        } while (i > 0);
        return o;
      }, e.decode = function (e, r, n) {
        var o,
          i,
          a = e.length,
          s = 0,
          l = 0;
        do {
          if (r >= a) throw new Error("Expected more digits in base 64 VLQ value.");
          if (-1 === (i = t.decode(e.charCodeAt(r++)))) throw new Error("Invalid base64 digit: " + e.charAt(r - 1));
          o = !!(32 & i), s += (i &= 31) << l, l += 5;
        } while (o);
        n.value = function (e) {
          var t = e >> 1;
          return 1 == (1 & e) ? -t : t;
        }(s), n.rest = r;
      };
    }),
    kt = ft(e => {
      e.getArg = function (e, t, r) {
        if (t in e) return e[t];
        if (3 === arguments.length) return r;
        throw new Error('"' + t + '" is a required argument.');
      };
      var t = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
        r = /^data:.+\,.+$/;
      function n(e) {
        var r = e.match(t);
        return r ? {
          scheme: r[1],
          auth: r[2],
          host: r[3],
          port: r[4],
          path: r[5]
        } : null;
      }
      function o(e) {
        var t = "";
        return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t;
      }
      e.urlParse = n, e.urlGenerate = o;
      var i,
        a,
        s = (i = function (t) {
          var r = t,
            i = n(t);
          if (i) {
            if (!i.path) return t;
            r = i.path;
          }
          for (var a = e.isAbsolute(r), s = [], l = 0, c = 0;;) {
            if (l = c, -1 === (c = r.indexOf("/", l))) {
              s.push(r.slice(l));
              break;
            }
            for (s.push(r.slice(l, c)); c < r.length && "/" === r[c];) c++;
          }
          var u,
            h = 0;
          for (c = s.length - 1; c >= 0; c--) "." === (u = s[c]) ? s.splice(c, 1) : ".." === u ? h++ : h > 0 && ("" === u ? (s.splice(c + 1, h), h = 0) : (s.splice(c, 2), h--));
          return "" === (r = s.join("/")) && (r = a ? "/" : "."), i ? (i.path = r, o(i)) : r;
        }, a = [], function (e) {
          for (var t = 0; t < a.length; t++) if (a[t].input === e) {
            var r = a[0];
            return a[0] = a[t], a[t] = r, a[0].result;
          }
          var n = i(e);
          return a.unshift({
            input: e,
            result: n
          }), a.length > 32 && a.pop(), n;
        });
      function l(e, t) {
        "" === e && (e = "."), "" === t && (t = ".");
        var i = n(t),
          a = n(e);
        if (a && (e = a.path || "/"), i && !i.scheme) return a && (i.scheme = a.scheme), o(i);
        if (i || t.match(r)) return t;
        if (a && !a.host && !a.path) return a.host = t, o(a);
        var l = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
        return a ? (a.path = l, o(a)) : l;
      }
      e.normalize = s, e.join = l, e.isAbsolute = function (e) {
        return "/" === e.charAt(0) || t.test(e);
      }, e.relative = function (e, t) {
        "" === e && (e = "."), e = e.replace(/\/$/, "");
        for (var r = 0; 0 !== t.indexOf(e + "/");) {
          var n = e.lastIndexOf("/");
          if (n < 0 || (e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
          ++r;
        }
        return Array(r + 1).join("../") + t.substr(e.length + 1);
      };
      var c = !("__proto__" in Object.create(null));
      function u(e) {
        return e;
      }
      function h(e) {
        if (!e) return !1;
        var t = e.length;
        if (t < 9 || 95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
        for (var r = t - 10; r >= 0; r--) if (36 !== e.charCodeAt(r)) return !1;
        return !0;
      }
      function d(e, t) {
        return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1;
      }
      e.toSetString = c ? u : function (e) {
        return h(e) ? "$" + e : e;
      }, e.fromSetString = c ? u : function (e) {
        return h(e) ? e.slice(1) : e;
      }, e.compareByOriginalPositions = function (e, t, r) {
        var n = d(e.source, t.source);
        return 0 !== n || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) || r || 0 !== (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = e.generatedLine - t.generatedLine) ? n : d(e.name, t.name);
      }, e.compareByOriginalPositionsNoSource = function (e, t, r) {
        var n;
        return 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) || r || 0 !== (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = e.generatedLine - t.generatedLine) ? n : d(e.name, t.name);
      }, e.compareByGeneratedPositionsDeflated = function (e, t, r) {
        var n = e.generatedLine - t.generatedLine;
        return 0 !== n || 0 !== (n = e.generatedColumn - t.generatedColumn) || r || 0 !== (n = d(e.source, t.source)) || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) ? n : d(e.name, t.name);
      }, e.compareByGeneratedPositionsDeflatedNoLine = function (e, t, r) {
        var n = e.generatedColumn - t.generatedColumn;
        return 0 !== n || r || 0 !== (n = d(e.source, t.source)) || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) ? n : d(e.name, t.name);
      }, e.compareByGeneratedPositionsInflated = function (e, t) {
        var r = e.generatedLine - t.generatedLine;
        return 0 !== r || 0 !== (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = d(e.source, t.source)) || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) ? r : d(e.name, t.name);
      }, e.parseSourceMapInput = function (e) {
        return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""));
      }, e.computeSourceURL = function (e, t, r) {
        if (t = t || "", e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"), t = e + t), r) {
          var i = n(r);
          if (!i) throw new Error("sourceMapURL could not be parsed");
          if (i.path) {
            var a = i.path.lastIndexOf("/");
            a >= 0 && (i.path = i.path.substring(0, a + 1));
          }
          t = l(o(i), t);
        }
        return s(t);
      };
    }),
    vt = ft(e => {
      var t = kt(),
        r = Object.prototype.hasOwnProperty,
        n = typeof Map < "u";
      function o() {
        this._array = [], this._set = n ? new Map() : Object.create(null);
      }
      o.fromArray = function (e, t) {
        for (var r = new o(), n = 0, i = e.length; n < i; n++) r.add(e[n], t);
        return r;
      }, o.prototype.size = function () {
        return n ? this._set.size : Object.getOwnPropertyNames(this._set).length;
      }, o.prototype.add = function (e, o) {
        var i = n ? e : t.toSetString(e),
          a = n ? this.has(e) : r.call(this._set, i),
          s = this._array.length;
        (!a || o) && this._array.push(e), a || (n ? this._set.set(e, s) : this._set[i] = s);
      }, o.prototype.has = function (e) {
        if (n) return this._set.has(e);
        var o = t.toSetString(e);
        return r.call(this._set, o);
      }, o.prototype.indexOf = function (e) {
        if (n) {
          var o = this._set.get(e);
          if (o >= 0) return o;
        } else {
          var i = t.toSetString(e);
          if (r.call(this._set, i)) return this._set[i];
        }
        throw new Error('"' + e + '" is not in the set.');
      }, o.prototype.at = function (e) {
        if (e >= 0 && e < this._array.length) return this._array[e];
        throw new Error("No element indexed by " + e);
      }, o.prototype.toArray = function () {
        return this._array.slice();
      }, e.ArraySet = o;
    }),
    wt = ft(e => {
      var t = kt();
      function r() {
        this._array = [], this._sorted = !0, this._last = {
          generatedLine: -1,
          generatedColumn: 0
        };
      }
      r.prototype.unsortedForEach = function (e, t) {
        this._array.forEach(e, t);
      }, r.prototype.add = function (e) {
        !function (e, r) {
          var n = e.generatedLine,
            o = r.generatedLine,
            i = e.generatedColumn,
            a = r.generatedColumn;
          return o > n || o == n && a >= i || t.compareByGeneratedPositionsInflated(e, r) <= 0;
        }(this._last, e) ? (this._sorted = !1, this._array.push(e)) : (this._last = e, this._array.push(e));
      }, r.prototype.toArray = function () {
        return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
      }, e.MappingList = r;
    }),
    xt = ft(e => {
      var t = bt(),
        r = kt(),
        n = vt().ArraySet,
        o = wt().MappingList;
      function i(e) {
        e || (e = {}), this._file = r.getArg(e, "file", null), this._sourceRoot = r.getArg(e, "sourceRoot", null), this._skipValidation = r.getArg(e, "skipValidation", !1), this._sources = new n(), this._names = new n(), this._mappings = new o(), this._sourcesContents = null;
      }
      i.prototype._version = 3, i.fromSourceMap = function (e) {
        var t = e.sourceRoot,
          n = new i({
            file: e.file,
            sourceRoot: t
          });
        return e.eachMapping(function (e) {
          var o = {
            generated: {
              line: e.generatedLine,
              column: e.generatedColumn
            }
          };
          null != e.source && (o.source = e.source, null != t && (o.source = r.relative(t, o.source)), o.original = {
            line: e.originalLine,
            column: e.originalColumn
          }, null != e.name && (o.name = e.name)), n.addMapping(o);
        }), e.sources.forEach(function (o) {
          var i = o;
          null !== t && (i = r.relative(t, o)), n._sources.has(i) || n._sources.add(i);
          var a = e.sourceContentFor(o);
          null != a && n.setSourceContent(o, a);
        }), n;
      }, i.prototype.addMapping = function (e) {
        var t = r.getArg(e, "generated"),
          n = r.getArg(e, "original", null),
          o = r.getArg(e, "source", null),
          i = r.getArg(e, "name", null);
        this._skipValidation || this._validateMapping(t, n, o, i), null != o && (o = String(o), this._sources.has(o) || this._sources.add(o)), null != i && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({
          generatedLine: t.line,
          generatedColumn: t.column,
          originalLine: null != n && n.line,
          originalColumn: null != n && n.column,
          source: o,
          name: i
        });
      }, i.prototype.setSourceContent = function (e, t) {
        var n = e;
        null != this._sourceRoot && (n = r.relative(this._sourceRoot, n)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[r.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
      }, i.prototype.applySourceMap = function (e, t, o) {
        var i = t;
        if (null == t) {
          if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
          i = e.file;
        }
        var a = this._sourceRoot;
        null != a && (i = r.relative(a, i));
        var s = new n(),
          l = new n();
        this._mappings.unsortedForEach(function (t) {
          if (t.source === i && null != t.originalLine) {
            var n = e.originalPositionFor({
              line: t.originalLine,
              column: t.originalColumn
            });
            null != n.source && (t.source = n.source, null != o && (t.source = r.join(o, t.source)), null != a && (t.source = r.relative(a, t.source)), t.originalLine = n.line, t.originalColumn = n.column, null != n.name && (t.name = n.name));
          }
          var c = t.source;
          null != c && !s.has(c) && s.add(c);
          var u = t.name;
          null != u && !l.has(u) && l.add(u);
        }, this), this._sources = s, this._names = l, e.sources.forEach(function (t) {
          var n = e.sourceContentFor(t);
          null != n && (null != o && (t = r.join(o, t)), null != a && (t = r.relative(a, t)), this.setSourceContent(t, n));
        }, this);
      }, i.prototype._validateMapping = function (e, t, r, n) {
        if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
        if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || r || n) {
          if (e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r) return;
          throw new Error("Invalid mapping: " + JSON.stringify({
            generated: e,
            source: r,
            original: t,
            name: n
          }));
        }
      }, i.prototype._serializeMappings = function () {
        for (var e, n, o, i, a = 0, s = 1, l = 0, c = 0, u = 0, h = 0, d = "", p = this._mappings.toArray(), m = 0, f = p.length; m < f; m++) {
          if (e = "", (n = p[m]).generatedLine !== s) for (a = 0; n.generatedLine !== s;) e += ";", s++;else if (m > 0) {
            if (!r.compareByGeneratedPositionsInflated(n, p[m - 1])) continue;
            e += ",";
          }
          e += t.encode(n.generatedColumn - a), a = n.generatedColumn, null != n.source && (i = this._sources.indexOf(n.source), e += t.encode(i - h), h = i, e += t.encode(n.originalLine - 1 - c), c = n.originalLine - 1, e += t.encode(n.originalColumn - l), l = n.originalColumn, null != n.name && (o = this._names.indexOf(n.name), e += t.encode(o - u), u = o)), d += e;
        }
        return d;
      }, i.prototype._generateSourcesContent = function (e, t) {
        return e.map(function (e) {
          if (!this._sourcesContents) return null;
          null != t && (e = r.relative(t, e));
          var n = r.toSetString(e);
          return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null;
        }, this);
      }, i.prototype.toJSON = function () {
        var e = {
          version: this._version,
          sources: this._sources.toArray(),
          names: this._names.toArray(),
          mappings: this._serializeMappings()
        };
        return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
      }, i.prototype.toString = function () {
        return JSON.stringify(this.toJSON());
      }, e.SourceMapGenerator = i;
    }),
    Et = {};
  gt(Et, {
    AtKeyword: () => Ct,
    BadString: () => It,
    BadUrl: () => Nt,
    CDC: () => Ft,
    CDO: () => Dt,
    Colon: () => qt,
    Comma: () => jt,
    Comment: () => Jt,
    Delim: () => zt,
    Dimension: () => Ot,
    EOF: () => At,
    Function: () => Tt,
    Hash: () => Rt,
    Ident: () => St,
    LeftCurlyBracket: () => Gt,
    LeftParenthesis: () => Wt,
    LeftSquareBracket: () => Ht,
    Number: () => Pt,
    Percentage: () => Mt,
    RightCurlyBracket: () => Yt,
    RightParenthesis: () => $t,
    RightSquareBracket: () => Vt,
    Semicolon: () => Bt,
    String: () => _t,
    Url: () => Lt,
    WhiteSpace: () => Ut
  });
  var At = 0,
    St = 1,
    Tt = 2,
    Ct = 3,
    Rt = 4,
    _t = 5,
    It = 6,
    Lt = 7,
    Nt = 8,
    zt = 9,
    Pt = 10,
    Mt = 11,
    Ot = 12,
    Ut = 13,
    Dt = 14,
    Ft = 15,
    qt = 16,
    Bt = 17,
    jt = 18,
    Ht = 19,
    Vt = 20,
    Wt = 21,
    $t = 22,
    Gt = 23,
    Yt = 24,
    Jt = 25;
  function Qt(e) {
    return e >= 48 && e <= 57;
  }
  function Kt(e) {
    return Qt(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
  }
  function Zt(e) {
    return e >= 65 && e <= 90;
  }
  function Xt(e) {
    return function (e) {
      return Zt(e) || function (e) {
        return e >= 97 && e <= 122;
      }(e);
    }(e) || function (e) {
      return e >= 128;
    }(e) || 95 === e;
  }
  function er(e) {
    return Xt(e) || Qt(e) || 45 === e;
  }
  function tr(e) {
    return e >= 0 && e <= 8 || 11 === e || e >= 14 && e <= 31 || 127 === e;
  }
  function rr(e) {
    return 10 === e || 13 === e || 12 === e;
  }
  function nr(e) {
    return rr(e) || 32 === e || 9 === e;
  }
  function or(e, t) {
    return !(92 !== e || rr(t) || 0 === t);
  }
  function ir(e, t, r) {
    return 45 === e ? Xt(t) || 45 === t || or(t, r) : !!Xt(e) || 92 === e && or(e, t);
  }
  function ar(e, t, r) {
    return 43 === e || 45 === e ? Qt(t) ? 2 : 46 === t && Qt(r) ? 3 : 0 : 46 === e ? Qt(t) ? 2 : 0 : Qt(e) ? 1 : 0;
  }
  function sr(e) {
    return 65279 === e || 65534 === e ? 1 : 0;
  }
  var lr = new Array(128),
    cr = 130;
  for (let e = 0; e < lr.length; e++) lr[e] = (nr(e) ? cr : Qt(e) && 131) || Xt(e) && 132 || tr(e) && 133 || e || 128;
  function ur(e) {
    return e < 128 ? lr[e] : 132;
  }
  function hr(e, t) {
    return t < e.length ? e.charCodeAt(t) : 0;
  }
  function dr(e, t, r) {
    return 13 === r && 10 === hr(e, t + 1) ? 2 : 1;
  }
  function pr(e, t, r) {
    let n = e.charCodeAt(t);
    return Zt(n) && (n |= 32), n === r;
  }
  function mr(e, t, r, n) {
    if (r - t !== n.length || t < 0 || r > e.length) return !1;
    for (let o = t; o < r; o++) {
      let r = n.charCodeAt(o - t),
        i = e.charCodeAt(o);
      if (Zt(i) && (i |= 32), i !== r) return !1;
    }
    return !0;
  }
  function fr(e, t) {
    for (; t < e.length && nr(e.charCodeAt(t)); t++);
    return t;
  }
  function gr(e, t) {
    for (; t < e.length && Qt(e.charCodeAt(t)); t++);
    return t;
  }
  function yr(e, t) {
    if (Kt(hr(e, (t += 2) - 1))) {
      for (let r = Math.min(e.length, t + 5); t < r && Kt(hr(e, t)); t++);
      let r = hr(e, t);
      nr(r) && (t += dr(e, t, r));
    }
    return t;
  }
  function br(e, t) {
    for (; t < e.length; t++) {
      let r = e.charCodeAt(t);
      if (!er(r)) {
        if (or(r, hr(e, t + 1))) {
          t = yr(e, t) - 1;
          continue;
        }
        break;
      }
    }
    return t;
  }
  function kr(e, t) {
    let r = e.charCodeAt(t);
    if ((43 === r || 45 === r) && (r = e.charCodeAt(t += 1)), Qt(r) && (t = gr(e, t + 1), r = e.charCodeAt(t)), 46 === r && Qt(e.charCodeAt(t + 1)) && (t = gr(e, t += 2)), pr(e, t, 101)) {
      let n = 0;
      r = e.charCodeAt(t + 1), (45 === r || 43 === r) && (n = 1, r = e.charCodeAt(t + 2)), Qt(r) && (t = gr(e, t + 1 + n + 1));
    }
    return t;
  }
  function vr(e, t) {
    for (; t < e.length; t++) {
      let r = e.charCodeAt(t);
      if (41 === r) {
        t++;
        break;
      }
      or(r, hr(e, t + 1)) && (t = yr(e, t));
    }
    return t;
  }
  function wr(e) {
    if (1 === e.length && !Kt(e.charCodeAt(0))) return e[0];
    let t = parseInt(e, 16);
    return (0 === t || t >= 55296 && t <= 57343 || t > 1114111) && (t = 65533), String.fromCodePoint(t);
  }
  var xr = ["EOF-token", "ident-token", "function-token", "at-keyword-token", "hash-token", "string-token", "bad-string-token", "url-token", "bad-url-token", "delim-token", "number-token", "percentage-token", "dimension-token", "whitespace-token", "CDO-token", "CDC-token", "colon-token", "semicolon-token", "comma-token", "[-token", "]-token", "(-token", ")-token", "{-token", "}-token"];
  function Er(e = null, t) {
    return null === e || e.length < t ? new Uint32Array(Math.max(t + 1024, 16384)) : e;
  }
  function Ar(e) {
    let t = e.source,
      r = t.length,
      n = t.length > 0 ? sr(t.charCodeAt(0)) : 0,
      o = Er(e.lines, r),
      i = Er(e.columns, r),
      a = e.startLine,
      s = e.startColumn;
    for (let e = n; e < r; e++) {
      let n = t.charCodeAt(e);
      o[e] = a, i[e] = s++, (10 === n || 13 === n || 12 === n) && (13 === n && e + 1 < r && 10 === t.charCodeAt(e + 1) && (e++, o[e] = a, i[e] = s), a++, s = 1);
    }
    o[r] = a, i[r] = s, e.lines = o, e.columns = i, e.computed = !0;
  }
  var Sr = 16777215,
    Tr = 24,
    Cr = new Map([[2, 22], [21, 22], [19, 20], [23, 24]]),
    Rr = class {
      constructor(e, t) {
        this.setSource(e, t);
      }
      reset() {
        this.eof = !1, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
      }
      setSource(e = "", t = () => {}) {
        let r = (e = String(e || "")).length,
          n = Er(this.offsetAndType, e.length + 1),
          o = Er(this.balance, e.length + 1),
          i = 0,
          a = 0,
          s = 0,
          l = -1;
        for (this.offsetAndType = null, this.balance = null, t(e, (e, t, c) => {
          switch (e) {
            default:
              o[i] = r;
              break;
            case a:
              {
                let e = s & Sr;
                for (s = o[e], a = s >> Tr, o[i] = e, o[e++] = i; e < i; e++) o[e] === r && (o[e] = i);
                break;
              }
            case 21:
            case 2:
            case 19:
            case 23:
              o[i] = s, a = Cr.get(e), s = a << Tr | i;
          }
          n[i++] = e << Tr | c, -1 === l && (l = t);
        }), n[i] = 0 | r, o[i] = r, o[r] = r; 0 !== s;) {
          let e = s & Sr;
          s = o[e], o[e] = r;
        }
        this.source = e, this.firstCharOffset = -1 === l ? 0 : l, this.tokenCount = i, this.offsetAndType = n, this.balance = o, this.reset(), this.next();
      }
      lookupType(e) {
        return (e += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e] >> Tr : 0;
      }
      lookupOffset(e) {
        return (e += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e - 1] & Sr : this.source.length;
      }
      lookupValue(e, t) {
        return (e += this.tokenIndex) < this.tokenCount && mr(this.source, this.offsetAndType[e - 1] & Sr, this.offsetAndType[e] & Sr, t);
      }
      getTokenStart(e) {
        return e === this.tokenIndex ? this.tokenStart : e > 0 ? e < this.tokenCount ? this.offsetAndType[e - 1] & Sr : this.offsetAndType[this.tokenCount] & Sr : this.firstCharOffset;
      }
      substrToCursor(e) {
        return this.source.substring(e, this.tokenStart);
      }
      isBalanceEdge(e) {
        return this.balance[this.tokenIndex] < e;
      }
      isDelim(e, t) {
        return t ? 9 === this.lookupType(t) && this.source.charCodeAt(this.lookupOffset(t)) === e : 9 === this.tokenType && this.source.charCodeAt(this.tokenStart) === e;
      }
      skip(e) {
        let t = this.tokenIndex + e;
        t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = this.offsetAndType[t - 1] & Sr, t = this.offsetAndType[t], this.tokenType = t >> Tr, this.tokenEnd = t & Sr) : (this.tokenIndex = this.tokenCount, this.next());
      }
      next() {
        let e = this.tokenIndex + 1;
        e < this.tokenCount ? (this.tokenIndex = e, this.tokenStart = this.tokenEnd, e = this.offsetAndType[e], this.tokenType = e >> Tr, this.tokenEnd = e & Sr) : (this.eof = !0, this.tokenIndex = this.tokenCount, this.tokenType = 0, this.tokenStart = this.tokenEnd = this.source.length);
      }
      skipSC() {
        for (; 13 === this.tokenType || 25 === this.tokenType;) this.next();
      }
      skipUntilBalanced(e, t) {
        let r,
          n,
          o = e;
        e: for (; o < this.tokenCount && (r = this.balance[o], !(r < e)); o++) switch (n = o > 0 ? this.offsetAndType[o - 1] & Sr : this.firstCharOffset, t(this.source.charCodeAt(n))) {
          case 1:
            break e;
          case 2:
            o++;
            break e;
          default:
            this.balance[r] === o && (o = r);
        }
        this.skip(o - this.tokenIndex);
      }
      forEachToken(e) {
        for (let t = 0, r = this.firstCharOffset; t < this.tokenCount; t++) {
          let n = r,
            o = this.offsetAndType[t],
            i = o & Sr;
          r = i, e(o >> Tr, n, i, t);
        }
      }
      dump() {
        let e = new Array(this.tokenCount);
        return this.forEachToken((t, r, n, o) => {
          e[o] = {
            idx: o,
            type: xr[t],
            chunk: this.source.substring(r, n),
            balance: this.balance[o]
          };
        }), e;
      }
    };
  function _r(e, t) {
    function r(t) {
      return t < s ? e.charCodeAt(t) : 0;
    }
    function n() {
      return c = kr(e, c), ir(r(c), r(c + 1), r(c + 2)) ? (a = 12, void (c = br(e, c))) : 37 === r(c) ? (a = 11, void c++) : void (a = 10);
    }
    function o() {
      let t = c;
      return c = br(e, c), mr(e, t, c, "url") && 40 === r(c) ? (c = fr(e, c + 1), 34 === r(c) || 39 === r(c) ? (a = 2, void (c = t + 4)) : void function () {
        for (a = 7, c = fr(e, c); c < e.length; c++) {
          let t = e.charCodeAt(c);
          switch (ur(t)) {
            case 41:
              return void c++;
            case cr:
              return c = fr(e, c), 41 === r(c) || c >= e.length ? void (c < e.length && c++) : (c = vr(e, c), void (a = 8));
            case 34:
            case 39:
            case 40:
            case 133:
              return c = vr(e, c), void (a = 8);
            case 92:
              if (or(t, r(c + 1))) {
                c = yr(e, c) - 1;
                break;
              }
              return c = vr(e, c), void (a = 8);
          }
        }
      }()) : 40 === r(c) ? (a = 2, void c++) : void (a = 1);
    }
    function i(t) {
      for (t || (t = r(c++)), a = 5; c < e.length; c++) {
        let n = e.charCodeAt(c);
        switch (ur(n)) {
          case t:
            return void c++;
          case cr:
            if (rr(n)) return c += dr(e, c, n), void (a = 6);
            break;
          case 92:
            if (c === e.length - 1) break;
            let o = r(c + 1);
            rr(o) ? c += dr(e, c + 1, o) : or(n, o) && (c = yr(e, c) - 1);
        }
      }
    }
    let a,
      s = (e = String(e || "")).length,
      l = sr(r(0)),
      c = l;
    for (; c < s;) {
      let s = e.charCodeAt(c);
      switch (ur(s)) {
        case cr:
          a = 13, c = fr(e, c + 1);
          break;
        case 34:
          i();
          break;
        case 35:
          er(r(c + 1)) || or(r(c + 1), r(c + 2)) ? (a = 4, c = br(e, c + 1)) : (a = 9, c++);
          break;
        case 39:
          i();
          break;
        case 40:
          a = 21, c++;
          break;
        case 41:
          a = 22, c++;
          break;
        case 43:
          ar(s, r(c + 1), r(c + 2)) ? n() : (a = 9, c++);
          break;
        case 44:
          a = 18, c++;
          break;
        case 45:
          ar(s, r(c + 1), r(c + 2)) ? n() : 45 === r(c + 1) && 62 === r(c + 2) ? (a = 15, c += 3) : ir(s, r(c + 1), r(c + 2)) ? o() : (a = 9, c++);
          break;
        case 46:
          ar(s, r(c + 1), r(c + 2)) ? n() : (a = 9, c++);
          break;
        case 47:
          42 === r(c + 1) ? (a = 25, c = e.indexOf("*/", c + 2), c = -1 === c ? e.length : c + 2) : (a = 9, c++);
          break;
        case 58:
          a = 16, c++;
          break;
        case 59:
          a = 17, c++;
          break;
        case 60:
          33 === r(c + 1) && 45 === r(c + 2) && 45 === r(c + 3) ? (a = 14, c += 4) : (a = 9, c++);
          break;
        case 64:
          ir(r(c + 1), r(c + 2), r(c + 3)) ? (a = 3, c = br(e, c + 1)) : (a = 9, c++);
          break;
        case 91:
          a = 19, c++;
          break;
        case 92:
          or(s, r(c + 1)) ? o() : (a = 9, c++);
          break;
        case 93:
          a = 20, c++;
          break;
        case 123:
          a = 23, c++;
          break;
        case 125:
          a = 24, c++;
          break;
        case 131:
          n();
          break;
        case 132:
          o();
          break;
        default:
          a = 9, c++;
      }
      t(a, l, l = c);
    }
  }
  var Ir = null,
    Lr = class {
      static createItem(e) {
        return {
          prev: null,
          next: null,
          data: e
        };
      }
      constructor() {
        this.head = null, this.tail = null, this.cursor = null;
      }
      createItem(e) {
        return Lr.createItem(e);
      }
      allocateCursor(e, t) {
        let r;
        return null !== Ir ? (r = Ir, Ir = Ir.cursor, r.prev = e, r.next = t, r.cursor = this.cursor) : r = {
          prev: e,
          next: t,
          cursor: this.cursor
        }, this.cursor = r, r;
      }
      releaseCursor() {
        let {
          cursor: e
        } = this;
        this.cursor = e.cursor, e.prev = null, e.next = null, e.cursor = Ir, Ir = e;
      }
      updateCursors(e, t, r, n) {
        let {
          cursor: o
        } = this;
        for (; null !== o;) o.prev === e && (o.prev = t), o.next === r && (o.next = n), o = o.cursor;
      }
      *[Symbol.iterator]() {
        for (let e = this.head; null !== e; e = e.next) yield e.data;
      }
      get size() {
        let e = 0;
        for (let t = this.head; null !== t; t = t.next) e++;
        return e;
      }
      get isEmpty() {
        return null === this.head;
      }
      get first() {
        return this.head && this.head.data;
      }
      get last() {
        return this.tail && this.tail.data;
      }
      fromArray(e) {
        let t = null;
        this.head = null;
        for (let r of e) {
          let e = Lr.createItem(r);
          null !== t ? t.next = e : this.head = e, e.prev = t, t = e;
        }
        return this.tail = t, this;
      }
      toArray() {
        return [...this];
      }
      toJSON() {
        return [...this];
      }
      forEach(e, t = this) {
        let r = this.allocateCursor(null, this.head);
        for (; null !== r.next;) {
          let n = r.next;
          r.next = n.next, e.call(t, n.data, n, this);
        }
        this.releaseCursor();
      }
      forEachRight(e, t = this) {
        let r = this.allocateCursor(this.tail, null);
        for (; null !== r.prev;) {
          let n = r.prev;
          r.prev = n.prev, e.call(t, n.data, n, this);
        }
        this.releaseCursor();
      }
      reduce(e, t, r = this) {
        let n,
          o = this.allocateCursor(null, this.head),
          i = t;
        for (; null !== o.next;) n = o.next, o.next = n.next, i = e.call(r, i, n.data, n, this);
        return this.releaseCursor(), i;
      }
      reduceRight(e, t, r = this) {
        let n,
          o = this.allocateCursor(this.tail, null),
          i = t;
        for (; null !== o.prev;) n = o.prev, o.prev = n.prev, i = e.call(r, i, n.data, n, this);
        return this.releaseCursor(), i;
      }
      some(e, t = this) {
        for (let r = this.head; null !== r; r = r.next) if (e.call(t, r.data, r, this)) return !0;
        return !1;
      }
      map(e, t = this) {
        let r = new Lr();
        for (let n = this.head; null !== n; n = n.next) r.appendData(e.call(t, n.data, n, this));
        return r;
      }
      filter(e, t = this) {
        let r = new Lr();
        for (let n = this.head; null !== n; n = n.next) e.call(t, n.data, n, this) && r.appendData(n.data);
        return r;
      }
      nextUntil(e, t, r = this) {
        if (null === e) return;
        let n = this.allocateCursor(null, e);
        for (; null !== n.next;) {
          let e = n.next;
          if (n.next = e.next, t.call(r, e.data, e, this)) break;
        }
        this.releaseCursor();
      }
      prevUntil(e, t, r = this) {
        if (null === e) return;
        let n = this.allocateCursor(e, null);
        for (; null !== n.prev;) {
          let e = n.prev;
          if (n.prev = e.prev, t.call(r, e.data, e, this)) break;
        }
        this.releaseCursor();
      }
      clear() {
        this.head = null, this.tail = null;
      }
      copy() {
        let e = new Lr();
        for (let t of this) e.appendData(t);
        return e;
      }
      prepend(e) {
        return this.updateCursors(null, e, this.head, e), null !== this.head ? (this.head.prev = e, e.next = this.head) : this.tail = e, this.head = e, this;
      }
      prependData(e) {
        return this.prepend(Lr.createItem(e));
      }
      append(e) {
        return this.insert(e);
      }
      appendData(e) {
        return this.insert(Lr.createItem(e));
      }
      insert(e, t = null) {
        if (null !== t) {
          if (this.updateCursors(t.prev, e, t, e), null === t.prev) {
            if (this.head !== t) throw new Error("before doesn't belong to list");
            this.head = e, t.prev = e, e.next = t, this.updateCursors(null, e);
          } else t.prev.next = e, e.prev = t.prev, t.prev = e, e.next = t;
        } else this.updateCursors(this.tail, e, null, e), null !== this.tail ? (this.tail.next = e, e.prev = this.tail) : this.head = e, this.tail = e;
        return this;
      }
      insertData(e, t) {
        return this.insert(Lr.createItem(e), t);
      }
      remove(e) {
        if (this.updateCursors(e, e.prev, e, e.next), null !== e.prev) e.prev.next = e.next;else {
          if (this.head !== e) throw new Error("item doesn't belong to list");
          this.head = e.next;
        }
        if (null !== e.next) e.next.prev = e.prev;else {
          if (this.tail !== e) throw new Error("item doesn't belong to list");
          this.tail = e.prev;
        }
        return e.prev = null, e.next = null, e;
      }
      push(e) {
        this.insert(Lr.createItem(e));
      }
      pop() {
        return null !== this.tail ? this.remove(this.tail) : null;
      }
      unshift(e) {
        this.prepend(Lr.createItem(e));
      }
      shift() {
        return null !== this.head ? this.remove(this.head) : null;
      }
      prependList(e) {
        return this.insertList(e, this.head);
      }
      appendList(e) {
        return this.insertList(e);
      }
      insertList(e, t) {
        return null === e.head || (null != t ? (this.updateCursors(t.prev, e.tail, t, e.head), null !== t.prev ? (t.prev.next = e.head, e.head.prev = t.prev) : this.head = e.head, t.prev = e.tail, e.tail.next = t) : (this.updateCursors(this.tail, e.tail, null, e.head), null !== this.tail ? (this.tail.next = e.head, e.head.prev = this.tail) : this.head = e.head, this.tail = e.tail), e.head = null, e.tail = null), this;
      }
      replace(e, t) {
        "head" in t ? this.insertList(t, e) : this.insert(t, e), this.remove(e);
      }
    };
  function Nr(e, t) {
    let r = Object.create(SyntaxError.prototype),
      n = new Error();
    return Object.assign(r, {
      name: e,
      message: t,
      get stack() {
        return (n.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}\n`);
      }
    });
  }
  var zr = "    ";
  function Pr({
    source: e,
    line: t,
    column: r
  }, n) {
    function o(e, t) {
      return i.slice(e, t).map((t, r) => String(e + r + 1).padStart(l) + " |" + t).join("\n");
    }
    let i = e.split(/\r\n?|\n|\f/),
      a = Math.max(1, t - n) - 1,
      s = Math.min(t + n, i.length + 1),
      l = Math.max(4, String(s).length) + 1,
      c = 0;
    (r += (zr.length - 1) * (i[t - 1].substr(0, r - 1).match(/\t/g) || []).length) > 100 && (c = r - 60 + 3, r = 58);
    for (let e = a; e <= s; e++) e >= 0 && e < i.length && (i[e] = i[e].replace(/\t/g, zr), i[e] = (c > 0 && i[e].length > c ? "…" : "") + i[e].substr(c, 98) + (i[e].length > c + 100 - 1 ? "…" : ""));
    return [o(a, t), new Array(r + l + 2).join("-") + "^", o(t, s)].filter(Boolean).join("\n");
  }
  function Mr(e, t, r, n, o) {
    return Object.assign(Nr("SyntaxError", e), {
      source: t,
      offset: r,
      line: n,
      column: o,
      sourceFragment: e => Pr({
        source: t,
        line: n,
        column: o
      }, isNaN(e) ? 0 : e),
      get formattedMessage() {
        return `Parse error: ${e}\n` + Pr({
          source: t,
          line: n,
          column: o
        }, 2);
      }
    });
  }
  function Or(e) {
    let t = this.createList(),
      r = !1,
      n = {
        recognizer: e
      };
    for (; !this.eof;) {
      switch (this.tokenType) {
        case 25:
          this.next();
          continue;
        case 13:
          r = !0, this.next();
          continue;
      }
      let o = e.getNode.call(this, n);
      if (void 0 === o) break;
      r && (e.onWhiteSpace && e.onWhiteSpace.call(this, o, t, n), r = !1), t.push(o);
    }
    return r && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, n), t;
  }
  var Ur = () => {};
  function Dr(e) {
    return function () {
      return this[e]();
    };
  }
  function Fr(e) {
    let t = Object.create(null);
    for (let r in e) {
      let n = e[r],
        o = n.parse || n;
      o && (t[r] = o);
    }
    return t;
  }
  function qr(e) {
    let t = "",
      r = "<unknown>",
      n = !1,
      o = Ur,
      i = !1,
      a = new class {
        constructor() {
          this.lines = null, this.columns = null, this.computed = !1;
        }
        setSource(e, t = 0, r = 1, n = 1) {
          this.source = e, this.startOffset = t, this.startLine = r, this.startColumn = n, this.computed = !1;
        }
        getLocation(e, t) {
          return this.computed || Ar(this), {
            source: t,
            offset: this.startOffset + e,
            line: this.lines[e],
            column: this.columns[e]
          };
        }
        getLocationRange(e, t, r) {
          return this.computed || Ar(this), {
            source: r,
            start: {
              offset: this.startOffset + e,
              line: this.lines[e],
              column: this.columns[e]
            },
            end: {
              offset: this.startOffset + t,
              line: this.lines[t],
              column: this.columns[t]
            }
          };
        }
      }(),
      s = Object.assign(new Rr(), function (e) {
        let t = {
          context: Object.create(null),
          scope: Object.assign(Object.create(null), e.scope),
          atrule: Fr(e.atrule),
          pseudo: Fr(e.pseudo),
          node: Fr(e.node)
        };
        for (let r in e.parseContext) switch (typeof e.parseContext[r]) {
          case "function":
            t.context[r] = e.parseContext[r];
            break;
          case "string":
            t.context[r] = Dr(e.parseContext[r]);
        }
        return {
          config: t,
          ...t,
          ...t.node
        };
      }(e || {}), {
        parseAtrulePrelude: !0,
        parseRulePrelude: !0,
        parseValue: !0,
        parseCustomProperty: !1,
        readSequence: Or,
        consumeUntilBalanceEnd: () => 0,
        consumeUntilLeftCurlyBracket: e => 123 === e ? 1 : 0,
        consumeUntilLeftCurlyBracketOrSemicolon: e => 123 === e || 59 === e ? 1 : 0,
        consumeUntilExclamationMarkOrSemicolon: e => 33 === e || 59 === e ? 1 : 0,
        consumeUntilSemicolonIncluded: e => 59 === e ? 2 : 0,
        createList: () => new Lr(),
        createSingleNodeList: e => new Lr().appendData(e),
        getFirstListNode: e => e && e.first,
        getLastListNode: e => e && e.last,
        parseWithFallback(e, t) {
          let r = this.tokenIndex;
          try {
            return e.call(this);
          } catch (e) {
            if (i) throw e;
            let n = t.call(this, r);
            return i = !0, o(e, n), i = !1, n;
          }
        },
        lookupNonWSType(e) {
          let t;
          do {
            if (t = this.lookupType(e++), 13 !== t) return t;
          } while (0 !== t);
          return 0;
        },
        charCodeAt: e => e >= 0 && e < t.length ? t.charCodeAt(e) : 0,
        substring: (e, r) => t.substring(e, r),
        substrToCursor(e) {
          return this.source.substring(e, this.tokenStart);
        },
        cmpChar: (e, r) => pr(t, e, r),
        cmpStr: (e, r, n) => mr(t, e, r, n),
        consume(e) {
          let t = this.tokenStart;
          return this.eat(e), this.substrToCursor(t);
        },
        consumeFunctionName() {
          let e = t.substring(this.tokenStart, this.tokenEnd - 1);
          return this.eat(2), e;
        },
        consumeNumber(e) {
          let r = t.substring(this.tokenStart, kr(t, this.tokenStart));
          return this.eat(e), r;
        },
        eat(e) {
          if (this.tokenType !== e) {
            let t = xr[e].slice(0, -6).replace(/-/g, " ").replace(/^./, e => e.toUpperCase()),
              r = `${/[[\](){}]/.test(t) ? `"${t}"` : t} is expected`,
              n = this.tokenStart;
            switch (e) {
              case 1:
                2 === this.tokenType || 7 === this.tokenType ? (n = this.tokenEnd - 1, r = "Identifier is expected but function found") : r = "Identifier is expected";
                break;
              case 4:
                this.isDelim(35) && (this.next(), n++, r = "Name is expected");
                break;
              case 11:
                10 === this.tokenType && (n = this.tokenEnd, r = "Percent sign is expected");
            }
            this.error(r, n);
          }
          this.next();
        },
        eatIdent(e) {
          (1 !== this.tokenType || !1 === this.lookupValue(0, e)) && this.error(`Identifier "${e}" is expected`), this.next();
        },
        eatDelim(e) {
          this.isDelim(e) || this.error(`Delim "${String.fromCharCode(e)}" is expected`), this.next();
        },
        getLocation: (e, t) => n ? a.getLocationRange(e, t, r) : null,
        getLocationFromList(e) {
          if (n) {
            let t = this.getFirstListNode(e),
              n = this.getLastListNode(e);
            return a.getLocationRange(null !== t ? t.loc.start.offset - a.startOffset : this.tokenStart, null !== n ? n.loc.end.offset - a.startOffset : this.tokenStart, r);
          }
          return null;
        },
        error(e, r) {
          let n = typeof r < "u" && r < t.length ? a.getLocation(r) : this.eof ? a.getLocation(function (e, t) {
            for (; t >= 0 && nr(e.charCodeAt(t)); t--);
            return t + 1;
          }(t, t.length - 1)) : a.getLocation(this.tokenStart);
          throw new Mr(e || "Unexpected input", t, n.offset, n.line, n.column);
        }
      });
    return Object.assign(function (e, l) {
      t = e, l = l || {}, s.setSource(t, _r), a.setSource(t, l.offset, l.line, l.column), r = l.filename || "<unknown>", n = Boolean(l.positions), o = "function" == typeof l.onParseError ? l.onParseError : Ur, i = !1, s.parseAtrulePrelude = !("parseAtrulePrelude" in l) || Boolean(l.parseAtrulePrelude), s.parseRulePrelude = !("parseRulePrelude" in l) || Boolean(l.parseRulePrelude), s.parseValue = !("parseValue" in l) || Boolean(l.parseValue), s.parseCustomProperty = "parseCustomProperty" in l && Boolean(l.parseCustomProperty);
      let {
        context: c = "default",
        onComment: u
      } = l;
      if (!(c in s.context)) throw new Error("Unknown context `" + c + "`");
      "function" == typeof u && s.forEachToken((e, r, n) => {
        if (25 === e) {
          let e = s.getLocation(r, n),
            o = mr(t, n - 2, n, "*/") ? t.slice(r + 2, n - 2) : t.slice(r + 2, n);
          u(o, e);
        }
      });
      let h = s.context[c].call(s, l);
      return s.eof || s.error(), h;
    }, {
      SyntaxError: Mr,
      config: s.config
    });
  }
  var Br,
    jr,
    Hr = (Br = xt(), jr = 1, ((e, t, r, n) => {
      if (t && "object" == typeof t || "function" == typeof t) for (let o of dt(t)) !mt.call(e, o) && (r || "default" !== o) && ut(e, o, {
        get: () => t[o],
        enumerable: !(n = ht(t, o)) || n.enumerable
      });
      return e;
    })((e => ut(e, "__esModule", {
      value: !0
    }))(ut(null != Br ? ct(pt(Br)) : {}, "default", !jr && Br && Br.__esModule ? {
      get: () => Br.default,
      enumerable: !0
    } : {
      value: Br,
      enumerable: !0
    })), Br)),
    Vr = new Set(["Atrule", "Selector", "Declaration"]);
  var Wr = {};
  gt(Wr, {
    safe: () => Kr,
    spec: () => Qr
  });
  var $r = (e, t) => {
      if (9 === e && (e = t), "string" == typeof e) {
        let t = e.charCodeAt(0);
        return t > 127 ? 32768 : t << 8;
      }
      return e;
    },
    Gr = [[1, 1], [1, 2], [1, 7], [1, 8], [1, "-"], [1, 10], [1, 11], [1, 12], [1, 15], [1, 21], [3, 1], [3, 2], [3, 7], [3, 8], [3, "-"], [3, 10], [3, 11], [3, 12], [3, 15], [4, 1], [4, 2], [4, 7], [4, 8], [4, "-"], [4, 10], [4, 11], [4, 12], [4, 15], [12, 1], [12, 2], [12, 7], [12, 8], [12, "-"], [12, 10], [12, 11], [12, 12], [12, 15], ["#", 1], ["#", 2], ["#", 7], ["#", 8], ["#", "-"], ["#", 10], ["#", 11], ["#", 12], ["#", 15], ["-", 1], ["-", 2], ["-", 7], ["-", 8], ["-", "-"], ["-", 10], ["-", 11], ["-", 12], ["-", 15], [10, 1], [10, 2], [10, 7], [10, 8], [10, 10], [10, 11], [10, 12], [10, "%"], [10, 15], ["@", 1], ["@", 2], ["@", 7], ["@", 8], ["@", "-"], ["@", 15], [".", 10], [".", 11], [".", 12], ["+", 10], ["+", 11], ["+", 12], ["/", "*"]],
    Yr = Gr.concat([[1, 4], [12, 4], [4, 4], [3, 21], [3, 5], [3, 16], [11, 11], [11, 12], [11, 2], [11, "-"], [22, 1], [22, 2], [22, 11], [22, 12], [22, 4], [22, "-"]]);
  function Jr(e) {
    let t = new Set(e.map(([e, t]) => $r(e) << 16 | $r(t)));
    return function (e, r, n) {
      let o = $r(r, n),
        i = n.charCodeAt(0);
      return (45 === i && 1 !== r && 2 !== r && 15 !== r || 43 === i ? t.has(e << 16 | i << 8) : t.has(e << 16 | o)) && this.emit(" ", 13, !0), o;
    };
  }
  var Qr = Jr(Gr),
    Kr = Jr(Yr);
  function Zr(e, t) {
    if ("function" != typeof t) e.children.forEach(this.node, this);else {
      let r = null;
      e.children.forEach(e => {
        null !== r && t.call(this, r), this.node(e), r = e;
      });
    }
  }
  function Xr(e) {
    _r(e, (t, r, n) => {
      this.token(t, e.slice(r, n));
    });
  }
  function en(e) {
    let t = new Map();
    for (let r in e.node) {
      let n = e.node[r];
      "function" == typeof (n.generate || n) && t.set(r, n.generate || n);
    }
    return function (e, r) {
      let n = "",
        o = 0,
        i = {
          node(e) {
            if (!t.has(e.type)) throw new Error("Unknown node type: " + e.type);
            t.get(e.type).call(a, e);
          },
          tokenBefore: Kr,
          token(e, t) {
            o = this.tokenBefore(o, e, t), this.emit(t, e, !1), 9 === e && 92 === t.charCodeAt(0) && this.emit("\n", 13, !0);
          },
          emit(e) {
            n += e;
          },
          result: () => n
        };
      r && ("function" == typeof r.decorator && (i = r.decorator(i)), r.sourceMap && (i = function (e) {
        let t = new Hr.SourceMapGenerator(),
          r = {
            line: 1,
            column: 0
          },
          n = {
            line: 0,
            column: 0
          },
          o = {
            line: 1,
            column: 0
          },
          i = {
            generated: o
          },
          a = 1,
          s = 0,
          l = !1,
          c = e.node;
        e.node = function (e) {
          if (e.loc && e.loc.start && Vr.has(e.type)) {
            let c = e.loc.start.line,
              u = e.loc.start.column - 1;
            (n.line !== c || n.column !== u) && (n.line = c, n.column = u, r.line = a, r.column = s, l && (l = !1, (r.line !== o.line || r.column !== o.column) && t.addMapping(i)), l = !0, t.addMapping({
              source: e.loc.source,
              original: n,
              generated: r
            }));
          }
          c.call(this, e), l && Vr.has(e.type) && (o.line = a, o.column = s);
        };
        let u = e.emit;
        e.emit = function (e, t, r) {
          for (let t = 0; t < e.length; t++) 10 === e.charCodeAt(t) ? (a++, s = 0) : s++;
          u(e, t, r);
        };
        let h = e.result;
        return e.result = function () {
          return l && t.addMapping(i), {
            css: h(),
            map: t
          };
        }, e;
      }(i)), r.mode in Wr && (i.tokenBefore = Wr[r.mode]));
      let a = {
        node: e => i.node(e),
        children: Zr,
        token: (e, t) => i.token(e, t),
        tokenize: Xr
      };
      return i.node(e), i.result();
    };
  }
  var {
      hasOwnProperty: tn
    } = Object.prototype,
    rn = function () {};
  function nn(e) {
    return "function" == typeof e ? e : rn;
  }
  function on(e, t) {
    return function (r, n, o) {
      r.type === t && e.call(this, r, n, o);
    };
  }
  function an(e, t) {
    let r = t.structure,
      n = [];
    for (let e in r) {
      if (!1 === tn.call(r, e)) continue;
      let t = r[e],
        o = {
          name: e,
          type: !1,
          nullable: !1
        };
      Array.isArray(t) || (t = [t]);
      for (let e of t) null === e ? o.nullable = !0 : "string" == typeof e ? o.type = "node" : Array.isArray(e) && (o.type = "list");
      o.type && n.push(o);
    }
    return n.length ? {
      context: t.walkContext,
      fields: n
    } : null;
  }
  function sn(e, t) {
    let r = e.fields.slice(),
      n = e.context,
      o = "string" == typeof n;
    return t && r.reverse(), function (e, i, a, s) {
      let l;
      o && (l = i[n], i[n] = e);
      for (let n of r) {
        let r = e[n.name];
        if (!n.nullable || r) if ("list" === n.type) {
          if (t ? r.reduceRight(s, !1) : r.reduce(s, !1)) return !0;
        } else if (a(r)) return !0;
      }
      o && (i[n] = l);
    };
  }
  function ln({
    StyleSheet: e,
    Atrule: t,
    Rule: r,
    Block: n,
    DeclarationList: o
  }) {
    return {
      Atrule: {
        StyleSheet: e,
        Atrule: t,
        Rule: r,
        Block: n
      },
      Rule: {
        StyleSheet: e,
        Atrule: t,
        Rule: r,
        Block: n
      },
      Declaration: {
        StyleSheet: e,
        Atrule: t,
        Rule: r,
        Block: n,
        DeclarationList: o
      }
    };
  }
  function cn(e) {
    let t = function (e) {
        let t = {};
        for (let r in e.node) if (tn.call(e.node, r)) {
          let n = e.node[r];
          if (!n.structure) throw new Error("Missed `structure` field in `" + r + "` node type definition");
          t[r] = an(0, n);
        }
        return t;
      }(e),
      r = {},
      n = {},
      o = Symbol("break-walk"),
      i = Symbol("skip-node");
    for (let e in t) tn.call(t, e) && null !== t[e] && (r[e] = sn(t[e], !1), n[e] = sn(t[e], !0));
    let a = ln(r),
      s = ln(n),
      l = function (e, l) {
        function c(e, t, r) {
          let n = u.call(m, e, t, r);
          return n === o || n !== i && !!(d.hasOwnProperty(e.type) && d[e.type](e, m, c, p) || h.call(m, e, t, r) === o);
        }
        let u = rn,
          h = rn,
          d = r,
          p = (e, t, r, n) => e || c(t, r, n),
          m = {
            break: o,
            skip: i,
            root: e,
            stylesheet: null,
            atrule: null,
            atrulePrelude: null,
            rule: null,
            selector: null,
            block: null,
            declaration: null,
            function: null
          };
        if ("function" == typeof l) u = l;else if (l && (u = nn(l.enter), h = nn(l.leave), l.reverse && (d = n), l.visit)) {
          if (a.hasOwnProperty(l.visit)) d = l.reverse ? s[l.visit] : a[l.visit];else if (!t.hasOwnProperty(l.visit)) throw new Error("Bad value `" + l.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
          u = on(u, l.visit), h = on(h, l.visit);
        }
        if (u === rn && h === rn) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
        c(e);
      };
    return l.break = o, l.skip = i, l.find = function (e, t) {
      let r = null;
      return l(e, function (e, n, i) {
        if (t.call(this, e, n, i)) return r = e, o;
      }), r;
    }, l.findLast = function (e, t) {
      let r = null;
      return l(e, {
        reverse: !0,
        enter: function (e, n, i) {
          if (t.call(this, e, n, i)) return r = e, o;
        }
      }), r;
    }, l.findAll = function (e, t) {
      let r = [];
      return l(e, function (e, n, o) {
        t.call(this, e, n, o) && r.push(e);
      }), r;
    }, l;
  }
  function un(e) {
    return e;
  }
  function hn(e, t, r, n) {
    let o;
    switch (e.type) {
      case "Group":
        o = function (e, t, r, n) {
          let o = " " === e.combinator || n ? e.combinator : " " + e.combinator + " ",
            i = e.terms.map(e => hn(e, t, r, n)).join(o);
          return e.explicit || r ? (n || "," === i[0] ? "[" : "[ ") + i + (n ? "]" : " ]") : i;
        }(e, t, r, n) + (e.disallowEmpty ? "!" : "");
        break;
      case "Multiplier":
        return hn(e.term, t, r, n) + t(function (e) {
          let {
            min: t,
            max: r,
            comma: n
          } = e;
          return 0 === t && 0 === r ? "*" : 0 === t && 1 === r ? "?" : 1 === t && 0 === r ? n ? "#" : "+" : 1 === t && 1 === r ? "" : (n ? "#" : "") + (t === r ? "{" + t + "}" : "{" + t + "," + (0 !== r ? r : "") + "}");
        }(e), e);
      case "Type":
        o = "<" + e.name + (e.opts ? t(function (e) {
          if ("Range" === e.type) return " [" + (null === e.min ? "-∞" : e.min) + "," + (null === e.max ? "∞" : e.max) + "]";
          throw new Error("Unknown node type `" + e.type + "`");
        }(e.opts), e.opts) : "") + ">";
        break;
      case "Property":
        o = "<'" + e.name + "'>";
        break;
      case "Keyword":
        o = e.name;
        break;
      case "AtKeyword":
        o = "@" + e.name;
        break;
      case "Function":
        o = e.name + "(";
        break;
      case "String":
      case "Token":
        o = e.value;
        break;
      case "Comma":
        o = ",";
        break;
      default:
        throw new Error("Unknown node type `" + e.type + "`");
    }
    return t(o, e);
  }
  function dn(e, t) {
    let r = un,
      n = !1,
      o = !1;
    return "function" == typeof t ? r = t : t && (n = Boolean(t.forceBraces), o = Boolean(t.compact), "function" == typeof t.decorate && (r = t.decorate)), hn(e, r, n, o);
  }
  var pn = {
    offset: 0,
    line: 1,
    column: 1
  };
  function mn(e, t) {
    let r = e && e.loc && e.loc[t];
    return r ? "line" in r ? fn(r) : r : null;
  }
  function fn({
    offset: e,
    line: t,
    column: r
  }, n) {
    let o = {
      offset: e,
      line: t,
      column: r
    };
    if (n) {
      let e = n.split(/\n|\r\n?|\f/);
      o.offset += n.length, o.line += e.length - 1, o.column = 1 === e.length ? o.column + n.length : e.pop().length + 1;
    }
    return o;
  }
  var gn = function (e, t) {
      let r = Nr("SyntaxReferenceError", e + (t ? " `" + t + "`" : ""));
      return r.reference = t, r;
    },
    yn = function (e, t, r, n) {
      let o = Nr("SyntaxMatchError", e),
        {
          css: i,
          mismatchOffset: a,
          mismatchLength: s,
          start: l,
          end: c
        } = function (e, t) {
          let r,
            n,
            o = e.tokens,
            i = e.longestMatch,
            a = i < o.length && o[i].node || null,
            s = a !== t ? a : null,
            l = 0,
            c = 0,
            u = 0,
            h = "";
          for (let e = 0; e < o.length; e++) {
            let t = o[e].value;
            e === i && (c = t.length, l = h.length), null !== s && o[e].node === s && (e <= i ? u++ : u = 0), h += t;
          }
          return i === o.length || u > 1 ? (r = mn(s || t, "end") || fn(pn, h), n = fn(r)) : (r = mn(s, "start") || fn(mn(t, "start") || pn, h.slice(0, l)), n = mn(s, "end") || fn(r, h.substr(l, c))), {
            css: h,
            mismatchOffset: l,
            mismatchLength: c,
            start: r,
            end: n
          };
        }(n, r);
      return o.rawMessage = e, o.syntax = t ? dn(t) : "<generic>", o.css = i, o.mismatchOffset = a, o.mismatchLength = s, o.message = e + "\n  syntax: " + o.syntax + "\n   value: " + (i || "<empty string>") + "\n  --------" + new Array(o.mismatchOffset + 1).join("-") + "^", Object.assign(o, l), o.loc = {
        source: r && r.loc && r.loc.source || "<unknown>",
        start: l,
        end: c
      }, o;
    },
    bn = new Map(),
    kn = new Map(),
    vn = function (e) {
      if (bn.has(e)) return bn.get(e);
      let t = e.toLowerCase(),
        r = bn.get(t);
      if (void 0 === r) {
        let e = En(t, 0),
          n = e ? "" : An(t, 0);
        r = Object.freeze({
          basename: t.substr(n.length),
          name: t,
          prefix: n,
          vendor: n,
          custom: e
        });
      }
      return bn.set(e, r), r;
    },
    wn = function (e) {
      if (kn.has(e)) return kn.get(e);
      let t = e,
        r = e[0];
      "/" === r ? r = "/" === e[1] ? "//" : "/" : "_" !== r && "*" !== r && "$" !== r && "#" !== r && "+" !== r && "&" !== r && (r = "");
      let n = En(t, r.length);
      if (!n && (t = t.toLowerCase(), kn.has(t))) {
        let r = kn.get(t);
        return kn.set(e, r), r;
      }
      let o = n ? "" : An(t, r.length),
        i = t.substr(0, r.length + o.length),
        a = Object.freeze({
          basename: t.substr(i.length),
          name: t.substr(r.length),
          hack: r,
          vendor: o,
          prefix: i,
          custom: n
        });
      return kn.set(e, a), a;
    },
    xn = An;
  function En(e, t) {
    return t = t || 0, e.length - t >= 2 && 45 === e.charCodeAt(t) && 45 === e.charCodeAt(t + 1);
  }
  function An(e, t) {
    if (t = t || 0, e.length - t >= 3 && 45 === e.charCodeAt(t) && 45 !== e.charCodeAt(t + 1)) {
      let r = e.indexOf("-", t + 2);
      if (-1 !== r) return e.substring(t, r + 1);
    }
    return "";
  }
  var Sn = 45,
    Tn = !0;
  function Cn(e, t) {
    return null !== e && 9 === e.type && e.value.charCodeAt(0) === t;
  }
  function Rn(e, t, r) {
    for (; null !== e && (13 === e.type || 25 === e.type);) e = r(++t);
    return t;
  }
  function _n(e, t, r, n) {
    if (!e) return 0;
    let o = e.value.charCodeAt(t);
    if (43 === o || o === Sn) {
      if (r) return 0;
      t++;
    }
    for (; t < e.value.length; t++) if (!Qt(e.value.charCodeAt(t))) return 0;
    return n + 1;
  }
  function In(e, t, r) {
    let n = !1,
      o = Rn(e, t, r);
    if (null === (e = r(o))) return t;
    if (10 !== e.type) {
      if (!Cn(e, 43) && !Cn(e, Sn)) return t;
      if (n = !0, o = Rn(r(++o), o, r), null === (e = r(o)) || 10 !== e.type) return 0;
    }
    if (!n) {
      let t = e.value.charCodeAt(0);
      if (43 !== t && t !== Sn) return 0;
    }
    return _n(e, n ? 0 : 1, n, o);
  }
  function Ln(e, t) {
    return null !== e && 9 === e.type && e.value.charCodeAt(0) === t;
  }
  function Nn(e, t, r) {
    let n = 0;
    for (let o = t; o < e.value.length; o++) {
      let i = e.value.charCodeAt(o);
      if (45 === i && r && 0 !== n) return Nn(e, t + n + 1, !1), 6;
      if (!Kt(i) || ++n > 6) return 0;
    }
    return n;
  }
  function zn(e, t, r) {
    if (!e) return 0;
    for (; Ln(r(t), 63);) {
      if (++e > 6) return 0;
      t++;
    }
    return t;
  }
  var Pn = ["unset", "initial", "inherit"],
    Mn = ["calc(", "-moz-calc(", "-webkit-calc("],
    On = new Map([[2, 22], [21, 22], [19, 20], [23, 24]]);
  function Un(e, t) {
    return t < e.length ? e.charCodeAt(t) : 0;
  }
  function Dn(e, t) {
    return mr(e, 0, e.length, t);
  }
  function Fn(e, t) {
    for (let r = 0; r < t.length; r++) if (Dn(e, t[r])) return !0;
    return !1;
  }
  function qn(e, t) {
    return t === e.length - 2 && 92 === Un(e, t) && Qt(Un(e, t + 1));
  }
  function Bn(e, t, r) {
    if (e && "Range" === e.type) {
      let n = Number(void 0 !== r && r !== t.length ? t.substr(0, r) : t);
      if (isNaN(n) || null !== e.min && n < e.min || null !== e.max && n > e.max) return !0;
    }
    return !1;
  }
  function jn(e, t) {
    let r = 0,
      n = [],
      o = 0;
    e: do {
      switch (e.type) {
        case 24:
        case 22:
        case 20:
          if (e.type !== r) break e;
          if (r = n.pop(), 0 === n.length) {
            o++;
            break e;
          }
          break;
        case 2:
        case 21:
        case 19:
        case 23:
          n.push(r), r = On.get(e.type);
      }
      o++;
    } while (e = t(o));
    return o;
  }
  function Hn(e) {
    return function (t, r, n) {
      return null === t ? 0 : 2 === t.type && Fn(t.value, Mn) ? jn(t, r) : e(t, r, n);
    };
  }
  function Vn(e) {
    return function (t) {
      return null === t || t.type !== e ? 0 : 1;
    };
  }
  function Wn(e) {
    return e && (e = new Set(e)), function (t, r, n) {
      if (null === t || 12 !== t.type) return 0;
      let o = kr(t.value, 0);
      if (null !== e) {
        let r = t.value.indexOf("\\", o),
          n = -1 !== r && qn(t.value, r) ? t.value.substring(o, r) : t.value.substr(o);
        if (!1 === e.has(n.toLowerCase())) return 0;
      }
      return Bn(n, t.value, o) ? 0 : 1;
    };
  }
  function $n(e) {
    return "function" != typeof e && (e = function () {
      return 0;
    }), function (t, r, n) {
      return null !== t && 10 === t.type && 0 === Number(t.value) ? 1 : e(t, r, n);
    };
  }
  var Gn = {
      "ident-token": Vn(1),
      "function-token": Vn(2),
      "at-keyword-token": Vn(3),
      "hash-token": Vn(4),
      "string-token": Vn(5),
      "bad-string-token": Vn(6),
      "url-token": Vn(7),
      "bad-url-token": Vn(8),
      "delim-token": Vn(9),
      "number-token": Vn(10),
      "percentage-token": Vn(11),
      "dimension-token": Vn(12),
      "whitespace-token": Vn(13),
      "CDO-token": Vn(14),
      "CDC-token": Vn(15),
      "colon-token": Vn(16),
      "semicolon-token": Vn(17),
      "comma-token": Vn(18),
      "[-token": Vn(19),
      "]-token": Vn(20),
      "(-token": Vn(21),
      ")-token": Vn(22),
      "{-token": Vn(23),
      "}-token": Vn(24),
      string: Vn(5),
      ident: Vn(1),
      "custom-ident": function (e) {
        if (null === e || 1 !== e.type) return 0;
        let t = e.value.toLowerCase();
        return Fn(t, Pn) || Dn(t, "default") ? 0 : 1;
      },
      "custom-property-name": function (e) {
        return null === e || 1 !== e.type || 45 !== Un(e.value, 0) || 45 !== Un(e.value, 1) ? 0 : 1;
      },
      "hex-color": function (e) {
        if (null === e || 4 !== e.type) return 0;
        let t = e.value.length;
        if (4 !== t && 5 !== t && 7 !== t && 9 !== t) return 0;
        for (let r = 1; r < t; r++) if (!Kt(Un(e.value, r))) return 0;
        return 1;
      },
      "id-selector": function (e) {
        return null !== e && 4 === e.type && ir(Un(e.value, 1), Un(e.value, 2), Un(e.value, 3)) ? 1 : 0;
      },
      "an-plus-b": function (e, t) {
        let r = 0;
        if (!e) return 0;
        if (10 === e.type) return _n(e, 0, false, r);
        if (1 === e.type && e.value.charCodeAt(0) === Sn) {
          if (!pr(e.value, 1, 110)) return 0;
          switch (e.value.length) {
            case 2:
              return In(t(++r), r, t);
            case 3:
              return e.value.charCodeAt(2) !== Sn ? 0 : (r = Rn(t(++r), r, t), _n(e = t(r), 0, Tn, r));
            default:
              return e.value.charCodeAt(2) !== Sn ? 0 : _n(e, 3, Tn, r);
          }
        } else if (1 === e.type || Cn(e, 43) && 1 === t(r + 1).type) {
          if (1 !== e.type && (e = t(++r)), null === e || !pr(e.value, 0, 110)) return 0;
          switch (e.value.length) {
            case 1:
              return In(t(++r), r, t);
            case 2:
              return e.value.charCodeAt(1) !== Sn ? 0 : (r = Rn(t(++r), r, t), _n(e = t(r), 0, Tn, r));
            default:
              return e.value.charCodeAt(1) !== Sn ? 0 : _n(e, 2, Tn, r);
          }
        } else if (12 === e.type) {
          let n = e.value.charCodeAt(0),
            o = 43 === n || n === Sn ? 1 : 0,
            i = o;
          for (; i < e.value.length && Qt(e.value.charCodeAt(i)); i++);
          return i !== o && pr(e.value, i, 110) ? i + 1 === e.value.length ? In(t(++r), r, t) : e.value.charCodeAt(i + 1) !== Sn ? 0 : i + 2 === e.value.length ? (r = Rn(t(++r), r, t), _n(e = t(r), 0, Tn, r)) : _n(e, i + 2, Tn, r) : 0;
        }
        return 0;
      },
      urange: function (e, t) {
        let r = 0;
        if (null === e || 1 !== e.type || !pr(e.value, 0, 117) || null === (e = t(++r))) return 0;
        if (Ln(e, 43)) return null === (e = t(++r)) ? 0 : 1 === e.type ? zn(Nn(e, 0, !0), ++r, t) : Ln(e, 63) ? zn(1, ++r, t) : 0;
        if (10 === e.type) {
          let n = Nn(e, 1, !0);
          return 0 === n ? 0 : null === (e = t(++r)) ? r : 12 === e.type || 10 === e.type ? function (e, t) {
            return e.value.charCodeAt(0) === t;
          }(e, 45) && Nn(e, 1, !1) ? r + 1 : 0 : zn(n, r, t);
        }
        return 12 === e.type ? zn(Nn(e, 1, !0), ++r, t) : 0;
      },
      "declaration-value": function (e, t) {
        if (!e) return 0;
        let r = 0,
          n = [],
          o = 0;
        e: do {
          switch (e.type) {
            case 6:
            case 8:
              break e;
            case 24:
            case 22:
            case 20:
              if (e.type !== r) break e;
              r = n.pop();
              break;
            case 17:
              if (0 === r) break e;
              break;
            case 9:
              if (0 === r && "!" === e.value) break e;
              break;
            case 2:
            case 21:
            case 19:
            case 23:
              n.push(r), r = On.get(e.type);
          }
          o++;
        } while (e = t(o));
        return o;
      },
      "any-value": function (e, t) {
        if (!e) return 0;
        let r = 0,
          n = [],
          o = 0;
        e: do {
          switch (e.type) {
            case 6:
            case 8:
              break e;
            case 24:
            case 22:
            case 20:
              if (e.type !== r) break e;
              r = n.pop();
              break;
            case 2:
            case 21:
            case 19:
            case 23:
              n.push(r), r = On.get(e.type);
          }
          o++;
        } while (e = t(o));
        return o;
      },
      dimension: Hn(Wn(null)),
      angle: Hn(Wn(["deg", "grad", "rad", "turn"])),
      decibel: Hn(Wn(["db"])),
      frequency: Hn(Wn(["hz", "khz"])),
      flex: Hn(Wn(["fr"])),
      length: Hn($n(Wn(["px", "mm", "cm", "in", "pt", "pc", "q", "em", "ex", "ch", "rem", "vh", "vw", "vmin", "vmax", "vm"]))),
      resolution: Hn(Wn(["dpi", "dpcm", "dppx", "x"])),
      semitones: Hn(Wn(["st"])),
      time: Hn(Wn(["s", "ms"])),
      percentage: Hn(function (e, t, r) {
        return null === e || 11 !== e.type || Bn(r, e.value, e.value.length - 1) ? 0 : 1;
      }),
      zero: $n(),
      number: Hn(function (e, t, r) {
        if (null === e) return 0;
        let n = kr(e.value, 0);
        return n !== e.value.length && !qn(e.value, n) || Bn(r, e.value, n) ? 0 : 1;
      }),
      integer: Hn(function (e, t, r) {
        if (null === e || 10 !== e.type) return 0;
        let n = 43 === Un(e.value, 0) || 45 === Un(e.value, 0) ? 1 : 0;
        for (; n < e.value.length; n++) if (!Qt(Un(e.value, n))) return 0;
        return Bn(r, e.value, n) ? 0 : 1;
      }),
      "-ms-legacy-expression": function (e) {
        return e += "(", function (t, r) {
          return null !== t && Dn(t.value, e) ? jn(t, r) : 0;
        };
      }("expression")
    },
    Yn = {};
  function Jn(e, t, r) {
    return Object.assign(Nr("SyntaxError", e), {
      input: t,
      offset: r,
      rawMessage: e,
      message: e + "\n  " + t + "\n--" + new Array((r || t.length) + 1).join("-") + "^"
    });
  }
  gt(Yn, {
    SyntaxError: () => Jn,
    generate: () => dn,
    parse: () => uo,
    walk: () => mo
  });
  var Qn = 123,
    Kn = new Uint8Array(128).map((e, t) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0),
    Zn = {
      " ": 1,
      "&&": 2,
      "||": 3,
      "|": 4
    };
  function Xn(e) {
    return e.substringToPos(e.findWsEnd(e.pos));
  }
  function eo(e) {
    let t = e.pos;
    for (; t < e.str.length; t++) {
      let r = e.str.charCodeAt(t);
      if (r >= 128 || 0 === Kn[r]) break;
    }
    return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t);
  }
  function to(e) {
    let t = e.pos;
    for (; t < e.str.length; t++) {
      let r = e.str.charCodeAt(t);
      if (r < 48 || r > 57) break;
    }
    return e.pos === t && e.error("Expect a number"), e.substringToPos(t);
  }
  function ro(e) {
    let t = e.str.indexOf("'", e.pos + 1);
    return -1 === t && (e.pos = e.str.length, e.error("Expect an apostrophe")), e.substringToPos(t + 1);
  }
  function no(e) {
    let t = null,
      r = null;
    return e.eat(Qn), t = to(e), 44 === e.charCode() ? (e.pos++, 125 !== e.charCode() && (r = to(e))) : r = t, e.eat(125), {
      min: Number(t),
      max: r ? Number(r) : 0
    };
  }
  function oo(e, t) {
    let r = function (e) {
      let t = null,
        r = !1;
      switch (e.charCode()) {
        case 42:
          e.pos++, t = {
            min: 0,
            max: 0
          };
          break;
        case 43:
          e.pos++, t = {
            min: 1,
            max: 0
          };
          break;
        case 63:
          e.pos++, t = {
            min: 0,
            max: 1
          };
          break;
        case 35:
          e.pos++, r = !0, t = e.charCode() === Qn ? no(e) : {
            min: 1,
            max: 0
          };
          break;
        case Qn:
          t = no(e);
          break;
        default:
          return null;
      }
      return {
        type: "Multiplier",
        comma: r,
        min: t.min,
        max: t.max,
        term: null
      };
    }(e);
    return null !== r ? (r.term = t, r) : t;
  }
  function io(e) {
    let t = e.peek();
    return "" === t ? null : {
      type: "Token",
      value: t
    };
  }
  function ao(e) {
    let t,
      r = null;
    return e.eat(60), t = eo(e), 40 === e.charCode() && 41 === e.nextCharCode() && (e.pos += 2, t += "()"), 91 === e.charCodeAt(e.findWsEnd(e.pos)) && (Xn(e), r = function (e) {
      let t = null,
        r = null,
        n = 1;
      return e.eat(91), 45 === e.charCode() && (e.peek(), n = -1), -1 == n && 8734 === e.charCode() ? e.peek() : t = n * Number(to(e)), Xn(e), e.eat(44), Xn(e), 8734 === e.charCode() ? e.peek() : (n = 1, 45 === e.charCode() && (e.peek(), n = -1), r = n * Number(to(e))), e.eat(93), null === t && null === r ? null : {
        type: "Range",
        min: t,
        max: r
      };
    }(e)), e.eat(62), oo(e, {
      type: "Type",
      name: t,
      opts: r
    });
  }
  function so(e, t) {
    function r(e, t) {
      return {
        type: "Group",
        terms: e,
        combinator: t,
        disallowEmpty: !1,
        explicit: !1
      };
    }
    let n;
    for (t = Object.keys(t).sort((e, t) => Zn[e] - Zn[t]); t.length > 0;) {
      n = t.shift();
      let o = 0,
        i = 0;
      for (; o < e.length; o++) {
        let t = e[o];
        "Combinator" === t.type && (t.value === n ? (-1 === i && (i = o - 1), e.splice(o, 1), o--) : (-1 !== i && o - i > 1 && (e.splice(i, o - i, r(e.slice(i, o), n)), o = i + 1), i = -1));
      }
      -1 !== i && t.length && e.splice(i, o - i, r(e.slice(i, o), n));
    }
    return n;
  }
  function lo(e) {
    let t,
      r = [],
      n = {},
      o = null,
      i = e.pos;
    for (; t = co(e);) "Spaces" !== t.type && ("Combinator" === t.type ? ((null === o || "Combinator" === o.type) && (e.pos = i, e.error("Unexpected combinator")), n[t.value] = !0) : null !== o && "Combinator" !== o.type && (n[" "] = !0, r.push({
      type: "Combinator",
      value: " "
    })), r.push(t), o = t, i = e.pos);
    return null !== o && "Combinator" === o.type && (e.pos -= i, e.error("Unexpected combinator")), {
      type: "Group",
      terms: r,
      combinator: so(r, n) || " ",
      disallowEmpty: !1,
      explicit: !1
    };
  }
  function co(e) {
    let t = e.charCode();
    if (t < 128 && 1 === Kn[t]) return function (e) {
      let t = eo(e);
      return 40 === e.charCode() ? (e.pos++, {
        type: "Function",
        name: t
      }) : oo(e, {
        type: "Keyword",
        name: t
      });
    }(e);
    switch (t) {
      case 93:
        break;
      case 91:
        return oo(e, function (e) {
          let t;
          return e.eat(91), t = lo(e), e.eat(93), t.explicit = !0, 33 === e.charCode() && (e.pos++, t.disallowEmpty = !0), t;
        }(e));
      case 60:
        return 39 === e.nextCharCode() ? function (e) {
          let t;
          return e.eat(60), e.eat(39), t = eo(e), e.eat(39), e.eat(62), oo(e, {
            type: "Property",
            name: t
          });
        }(e) : ao(e);
      case 124:
        return {
          type: "Combinator",
          value: e.substringToPos(e.pos + (124 === e.nextCharCode() ? 2 : 1))
        };
      case 38:
        return e.pos++, e.eat(38), {
          type: "Combinator",
          value: "&&"
        };
      case 44:
        return e.pos++, {
          type: "Comma"
        };
      case 39:
        return oo(e, {
          type: "String",
          value: ro(e)
        });
      case 32:
      case 9:
      case 10:
      case 13:
      case 12:
        return {
          type: "Spaces",
          value: Xn(e)
        };
      case 64:
        return t = e.nextCharCode(), t < 128 && 1 === Kn[t] ? (e.pos++, {
          type: "AtKeyword",
          name: eo(e)
        }) : io(e);
      case 42:
      case 43:
      case 63:
      case 35:
      case 33:
        break;
      case Qn:
        if (t = e.nextCharCode(), t < 48 || t > 57) return io(e);
        break;
      default:
        return io(e);
    }
  }
  function uo(e) {
    let t = new class {
        constructor(e) {
          this.str = e, this.pos = 0;
        }
        charCodeAt(e) {
          return e < this.str.length ? this.str.charCodeAt(e) : 0;
        }
        charCode() {
          return this.charCodeAt(this.pos);
        }
        nextCharCode() {
          return this.charCodeAt(this.pos + 1);
        }
        nextNonWsCode(e) {
          return this.charCodeAt(this.findWsEnd(e));
        }
        findWsEnd(e) {
          for (; e < this.str.length; e++) {
            let t = this.str.charCodeAt(e);
            if (13 !== t && 10 !== t && 12 !== t && 32 !== t && 9 !== t) break;
          }
          return e;
        }
        substringToPos(e) {
          return this.str.substring(this.pos, this.pos = e);
        }
        eat(e) {
          this.charCode() !== e && this.error("Expect `" + String.fromCharCode(e) + "`"), this.pos++;
        }
        peek() {
          return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
        }
        error(e) {
          throw new Jn(e, this.str, this.pos);
        }
      }(e),
      r = lo(t);
    return t.pos !== e.length && t.error("Unexpected input"), 1 === r.terms.length && "Group" === r.terms[0].type ? r.terms[0] : r;
  }
  var ho = function () {};
  function po(e) {
    return "function" == typeof e ? e : ho;
  }
  function mo(e, t, r) {
    let n = ho,
      o = ho;
    if ("function" == typeof t ? n = t : t && (n = po(t.enter), o = po(t.leave)), n === ho && o === ho) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    !function e(t) {
      switch (n.call(r, t), t.type) {
        case "Group":
          t.terms.forEach(e);
          break;
        case "Multiplier":
          e(t.term);
          break;
        case "Type":
        case "Property":
        case "Keyword":
        case "AtKeyword":
        case "Function":
        case "String":
        case "Token":
        case "Comma":
          break;
        default:
          throw new Error("Unknown type: " + t.type);
      }
      o.call(r, t);
    }(e);
  }
  var fo = {
    decorator: function (e) {
      let t = [],
        r = null;
      return {
        ...e,
        node(t) {
          let n = r;
          r = t, e.node.call(this, t), r = n;
        },
        emit(e, n, o) {
          t.push({
            type: n,
            value: e,
            node: o ? null : r
          });
        },
        result: () => t
      };
    }
  };
  function go(e, t) {
    return "string" == typeof e ? function (e) {
      let t = [];
      return _r(e, (r, n, o) => t.push({
        type: r,
        value: e.slice(n, o),
        node: null
      })), t;
    }(e) : t.generate(e, fo);
  }
  var yo = {
      type: "Match"
    },
    bo = {
      type: "Mismatch"
    },
    ko = {
      type: "DisallowEmpty"
    };
  function vo(e, t, r) {
    return t === yo && r === bo || e === yo && t === yo && r === yo ? e : ("If" === e.type && e.else === bo && t === yo && (t = e.then, e = e.match), {
      type: "If",
      match: e,
      then: t,
      else: r
    });
  }
  function wo(e) {
    return e.length > 2 && 40 === e.charCodeAt(e.length - 2) && 41 === e.charCodeAt(e.length - 1);
  }
  function xo(e) {
    return "Keyword" === e.type || "AtKeyword" === e.type || "Function" === e.type || "Type" === e.type && wo(e.name);
  }
  function Eo(e, t, r) {
    switch (e) {
      case " ":
        {
          let e = yo;
          for (let r = t.length - 1; r >= 0; r--) {
            e = vo(t[r], e, bo);
          }
          return e;
        }
      case "|":
        {
          let e = bo,
            r = null;
          for (let n = t.length - 1; n >= 0; n--) {
            let o = t[n];
            if (xo(o) && (null === r && n > 0 && xo(t[n - 1]) && (r = Object.create(null), e = vo({
              type: "Enum",
              map: r
            }, yo, e)), null !== r)) {
              let e = (wo(o.name) ? o.name.slice(0, -1) : o.name).toLowerCase();
              if (!(e in r)) {
                r[e] = o;
                continue;
              }
            }
            r = null, e = vo(o, yo, e);
          }
          return e;
        }
      case "&&":
        {
          if (t.length > 5) return {
            type: "MatchOnce",
            terms: t,
            all: !0
          };
          let r = bo;
          for (let n = t.length - 1; n >= 0; n--) {
            let o,
              i = t[n];
            o = t.length > 1 ? Eo(e, t.filter(function (e) {
              return e !== i;
            }), !1) : yo, r = vo(i, o, r);
          }
          return r;
        }
      case "||":
        {
          if (t.length > 5) return {
            type: "MatchOnce",
            terms: t,
            all: !1
          };
          let n = r ? yo : bo;
          for (let r = t.length - 1; r >= 0; r--) {
            let o,
              i = t[r];
            o = t.length > 1 ? Eo(e, t.filter(function (e) {
              return e !== i;
            }), !0) : yo, n = vo(i, o, n);
          }
          return n;
        }
    }
  }
  function Ao(e) {
    if ("function" == typeof e) return {
      type: "Generic",
      fn: e
    };
    switch (e.type) {
      case "Group":
        {
          let t = Eo(e.combinator, e.terms.map(Ao), !1);
          return e.disallowEmpty && (t = vo(t, ko, bo)), t;
        }
      case "Multiplier":
        return function (e) {
          let t = yo,
            r = Ao(e.term);
          if (0 === e.max) r = vo(r, ko, bo), t = vo(r, null, bo), t.then = vo(yo, yo, t), e.comma && (t.then.else = vo({
            type: "Comma",
            syntax: e
          }, t, bo));else for (let n = e.min || 1; n <= e.max; n++) e.comma && t !== yo && (t = vo({
            type: "Comma",
            syntax: e
          }, t, bo)), t = vo(r, vo(yo, yo, t), bo);
          if (0 === e.min) t = vo(yo, yo, t);else for (let n = 0; n < e.min - 1; n++) e.comma && t !== yo && (t = vo({
            type: "Comma",
            syntax: e
          }, t, bo)), t = vo(r, t, bo);
          return t;
        }(e);
      case "Type":
      case "Property":
        return {
          type: e.type,
          name: e.name,
          syntax: e
        };
      case "Keyword":
        return {
          type: e.type,
          name: e.name.toLowerCase(),
          syntax: e
        };
      case "AtKeyword":
        return {
          type: e.type,
          name: "@" + e.name.toLowerCase(),
          syntax: e
        };
      case "Function":
        return {
          type: e.type,
          name: e.name.toLowerCase() + "(",
          syntax: e
        };
      case "String":
        return 3 === e.value.length ? {
          type: "Token",
          value: e.value.charAt(1),
          syntax: e
        } : {
          type: e.type,
          value: e.value.substr(1, e.value.length - 2).replace(/\\'/g, "'"),
          syntax: e
        };
      case "Token":
        return {
          type: e.type,
          value: e.value,
          syntax: e
        };
      case "Comma":
        return {
          type: e.type,
          syntax: e
        };
      default:
        throw new Error("Unknown node type:", e.type);
    }
  }
  function So(e, t) {
    return "string" == typeof e && (e = uo(e)), {
      type: "MatchGraph",
      match: Ao(e),
      syntax: t || null,
      source: e
    };
  }
  var {
      hasOwnProperty: To
    } = Object.prototype,
    Co = "Match";
  function Ro(e, t) {
    if (e.length !== t.length) return !1;
    for (let r = 0; r < e.length; r++) {
      let n = t.charCodeAt(r),
        o = e.charCodeAt(r);
      if (o >= 65 && o <= 90 && (o |= 32), o !== n) return !1;
    }
    return !0;
  }
  function _o(e) {
    return null === e || 18 === e.type || 2 === e.type || 21 === e.type || 19 === e.type || 23 === e.type || function (e) {
      return 9 === e.type && "?" !== e.value;
    }(e);
  }
  function Io(e) {
    return null === e || 22 === e.type || 20 === e.type || 24 === e.type || 9 === e.type;
  }
  function Lo(e, t, r) {
    let n = function (e, t, r) {
      function n() {
        do {
          y++, g = y < e.length ? e[y] : null;
        } while (null !== g && (13 === g.type || 25 === g.type));
      }
      function o(t) {
        let r = y + t;
        return r < e.length ? e[r] : null;
      }
      function i(e, t) {
        return {
          nextState: e,
          matchStack: k,
          syntaxStack: u,
          thenStack: h,
          tokenIndex: y,
          prev: t
        };
      }
      function a(e) {
        h = {
          nextState: e,
          matchStack: k,
          syntaxStack: u,
          prev: h
        };
      }
      function s(e) {
        d = i(e, d);
      }
      function l() {
        k = {
          type: 1,
          syntax: t.syntax,
          token: g,
          prev: k
        }, n(), p = null, y > b && (b = y);
      }
      function c() {
        k = 2 === k.type ? k.prev : {
          type: 3,
          syntax: u.syntax,
          token: k.token,
          prev: k
        }, u = u.prev;
      }
      let u = null,
        h = null,
        d = null,
        p = null,
        m = 0,
        f = null,
        g = null,
        y = -1,
        b = 0,
        k = {
          type: 0,
          syntax: null,
          token: null,
          prev: null
        };
      for (n(); null === f && ++m < 15e3;) switch (t.type) {
        case "Match":
          if (null === h) {
            if (null !== g && (y !== e.length - 1 || "\\0" !== g.value && "\\9" !== g.value)) {
              t = bo;
              break;
            }
            f = Co;
            break;
          }
          if ((t = h.nextState) === ko) {
            if (h.matchStack === k) {
              t = bo;
              break;
            }
            t = yo;
          }
          for (; h.syntaxStack !== u;) c();
          h = h.prev;
          break;
        case "Mismatch":
          if (null !== p && !1 !== p) (null === d || y > d.tokenIndex) && (d = p, p = !1);else if (null === d) {
            f = "Mismatch";
            break;
          }
          t = d.nextState, h = d.thenStack, u = d.syntaxStack, k = d.matchStack, y = d.tokenIndex, g = y < e.length ? e[y] : null, d = d.prev;
          break;
        case "MatchGraph":
          t = t.match;
          break;
        case "If":
          t.else !== bo && s(t.else), t.then !== yo && a(t.then), t = t.match;
          break;
        case "MatchOnce":
          t = {
            type: "MatchOnceBuffer",
            syntax: t,
            index: 0,
            mask: 0
          };
          break;
        case "MatchOnceBuffer":
          {
            let e = t.syntax.terms;
            if (t.index === e.length) {
              if (0 === t.mask || t.syntax.all) {
                t = bo;
                break;
              }
              t = yo;
              break;
            }
            if (t.mask === (1 << e.length) - 1) {
              t = yo;
              break;
            }
            for (; t.index < e.length; t.index++) {
              let r = 1 << t.index;
              if (0 == (t.mask & r)) {
                s(t), a({
                  type: "AddMatchOnce",
                  syntax: t.syntax,
                  mask: t.mask | r
                }), t = e[t.index++];
                break;
              }
            }
            break;
          }
        case "AddMatchOnce":
          t = {
            type: "MatchOnceBuffer",
            syntax: t.syntax,
            index: 0,
            mask: t.mask
          };
          break;
        case "Enum":
          if (null !== g) {
            let e = g.value.toLowerCase();
            if (-1 !== e.indexOf("\\") && (e = e.replace(/\\[09].*$/, "")), To.call(t.map, e)) {
              t = t.map[e];
              break;
            }
          }
          t = bo;
          break;
        case "Generic":
          {
            let e = null !== u ? u.opts : null,
              r = y + Math.floor(t.fn(g, o, e));
            if (!isNaN(r) && r > y) {
              for (; y < r;) l();
              t = yo;
            } else t = bo;
            break;
          }
        case "Type":
        case "Property":
          {
            let e = "Type" === t.type ? "types" : "properties",
              n = To.call(r, e) ? r[e][t.name] : null;
            if (!n || !n.match) throw new Error("Bad syntax reference: " + ("Type" === t.type ? "<" + t.name + ">" : "<'" + t.name + "'>"));
            if (!1 !== p && null !== g && "Type" === t.type && ("custom-ident" === t.name && 1 === g.type || "length" === t.name && "0" === g.value)) {
              null === p && (p = i(t, d)), t = bo;
              break;
            }
            u = {
              syntax: t.syntax,
              opts: t.syntax.opts || null !== u && u.opts || null,
              prev: u
            }, k = {
              type: 2,
              syntax: t.syntax,
              token: k.token,
              prev: k
            }, t = n.match;
            break;
          }
        case "Keyword":
          {
            let e = t.name;
            if (null !== g) {
              let r = g.value;
              if (-1 !== r.indexOf("\\") && (r = r.replace(/\\[09].*$/, "")), Ro(r, e)) {
                l(), t = yo;
                break;
              }
            }
            t = bo;
            break;
          }
        case "AtKeyword":
        case "Function":
          if (null !== g && Ro(g.value, t.name)) {
            l(), t = yo;
            break;
          }
          t = bo;
          break;
        case "Token":
          if (null !== g && g.value === t.value) {
            l(), t = yo;
            break;
          }
          t = bo;
          break;
        case "Comma":
          null !== g && 18 === g.type ? _o(k.token) ? t = bo : (l(), t = Io(g) ? bo : yo) : t = _o(k.token) || Io(g) ? yo : bo;
          break;
        case "String":
          let n = "",
            m = y;
          for (; m < e.length && n.length < t.value.length; m++) n += e[m].value;
          if (Ro(n, t.value)) {
            for (; y < m;) l();
            t = yo;
          } else t = bo;
          break;
        default:
          throw new Error("Unknown node type: " + t.type);
      }
      switch (f) {
        case null:
          console.warn("[csstree-match] BREAK after 15000 iterations"), f = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", k = null;
          break;
        case Co:
          for (; null !== u;) c();
          break;
        default:
          k = null;
      }
      return {
        tokens: e,
        reason: f,
        iterations: m,
        match: k,
        longestMatch: b
      };
    }(e, t, r || {});
    if (null === n.match) return n;
    let o = n.match,
      i = n.match = {
        syntax: t.syntax || null,
        match: []
      },
      a = [i];
    for (o = function (e) {
      let t = null,
        r = null,
        n = e;
      for (; null !== n;) r = n.prev, n.prev = t, t = n, n = r;
      return t;
    }(o).prev; null !== o;) {
      switch (o.type) {
        case 2:
          i.match.push(i = {
            syntax: o.syntax,
            match: []
          }), a.push(i);
          break;
        case 3:
          a.pop(), i = a[a.length - 1];
          break;
        default:
          i.match.push({
            syntax: o.syntax || null,
            token: o.token.value,
            node: o.token.node
          });
      }
      o = o.prev;
    }
    return n;
  }
  var No = {};
  function zo(e) {
    function t(e) {
      return null !== e && ("Type" === e.type || "Property" === e.type || "Keyword" === e.type);
    }
    let r = null;
    return null !== this.matched && function n(o) {
      if (Array.isArray(o.match)) {
        for (let e = 0; e < o.match.length; e++) if (n(o.match[e])) return t(o.syntax) && r.unshift(o.syntax), !0;
      } else if (o.node === e) return r = t(o.syntax) ? [o.syntax] : [], !0;
      return !1;
    }(this.matched), r;
  }
  function Po(e, t) {
    return Uo(this, e, e => "Type" === e.type && e.name === t);
  }
  function Mo(e, t) {
    return Uo(this, e, e => "Property" === e.type && e.name === t);
  }
  function Oo(e) {
    return Uo(this, e, e => "Keyword" === e.type);
  }
  function Uo(e, t, r) {
    let n = zo.call(e, t);
    return null !== n && n.some(r);
  }
  function Do(e) {
    return "node" in e ? e.node : Do(e.match[0]);
  }
  function Fo(e) {
    return "node" in e ? e.node : Fo(e.match[e.match.length - 1]);
  }
  function qo(e, t, r, n, o) {
    let i = [];
    return null !== r.matched && function r(a) {
      if (null !== a.syntax && a.syntax.type === n && a.syntax.name === o) {
        let r = Do(a),
          n = Fo(a);
        e.syntax.walk(t, function (e, t, o) {
          if (e === r) {
            let e = new Lr();
            do {
              if (e.appendData(t.data), t.data === n) break;
              t = t.next;
            } while (null !== t);
            i.push({
              parent: o,
              nodes: e
            });
          }
        });
      }
      Array.isArray(a.match) && a.match.forEach(r);
    }(r.matched), i;
  }
  gt(No, {
    getTrace: () => zo,
    isKeyword: () => Oo,
    isProperty: () => Mo,
    isType: () => Po
  });
  var {
    hasOwnProperty: Bo
  } = Object.prototype;
  function jo(e) {
    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0;
  }
  function Ho(e) {
    return Boolean(e) && jo(e.offset) && jo(e.line) && jo(e.column);
  }
  function Vo(e, t) {
    return function (r, n) {
      if (!r || r.constructor !== Object) return n(r, "Type of node should be an Object");
      for (let o in r) {
        let i = !0;
        if (!1 !== Bo.call(r, o)) {
          if ("type" === o) r.type !== e && n(r, "Wrong node type `" + r.type + "`, expected `" + e + "`");else if ("loc" === o) {
            if (null === r.loc) continue;
            if (r.loc && r.loc.constructor === Object) if ("string" != typeof r.loc.source) o += ".source";else if (Ho(r.loc.start)) {
              if (Ho(r.loc.end)) continue;
              o += ".end";
            } else o += ".start";
            i = !1;
          } else if (t.hasOwnProperty(o)) {
            i = !1;
            for (let e = 0; !i && e < t[o].length; e++) {
              let n = t[o][e];
              switch (n) {
                case String:
                  i = "string" == typeof r[o];
                  break;
                case Boolean:
                  i = "boolean" == typeof r[o];
                  break;
                case null:
                  i = null === r[o];
                  break;
                default:
                  "string" == typeof n ? i = r[o] && r[o].type === n : Array.isArray(n) && (i = r[o] instanceof Lr);
              }
            }
          } else n(r, "Unknown field `" + o + "` for " + e + " node type");
          i || n(r, "Bad value for `" + e + "." + o + "`");
        }
      }
      for (let o in t) Bo.call(t, o) && !1 === Bo.call(r, o) && n(r, "Field `" + e + "." + o + "` is missed");
    };
  }
  function Wo(e, t) {
    let r = t.structure,
      n = {
        type: String,
        loc: !0
      },
      o = {
        type: '"' + e + '"'
      };
    for (let t in r) {
      if (!1 === Bo.call(r, t)) continue;
      let i = [],
        a = n[t] = Array.isArray(r[t]) ? r[t].slice() : [r[t]];
      for (let r = 0; r < a.length; r++) {
        let n = a[r];
        if (n === String || n === Boolean) i.push(n.name);else if (null === n) i.push("null");else if ("string" == typeof n) i.push("<" + n + ">");else {
          if (!Array.isArray(n)) throw new Error("Wrong value `" + n + "` in `" + e + "." + t + "` structure definition");
          i.push("List");
        }
      }
      o[t] = i.join(" | ");
    }
    return {
      docs: o,
      check: Vo(e, n)
    };
  }
  var $o = So("inherit | initial | unset"),
    Go = So("inherit | initial | unset | <-ms-legacy-expression>");
  function Yo(e, t, r) {
    let n = {};
    for (let o in e) e[o].syntax && (n[o] = r ? e[o].syntax : dn(e[o].syntax, {
      compact: t
    }));
    return n;
  }
  function Jo(e, t, r) {
    let n = {};
    for (let [o, i] of Object.entries(e)) n[o] = {
      prelude: i.prelude && (r ? i.prelude.syntax : dn(i.prelude.syntax, {
        compact: t
      })),
      descriptors: i.descriptors && Yo(i.descriptors, t, r)
    };
    return n;
  }
  function Qo(e, t, r) {
    return {
      matched: e,
      iterations: r,
      error: t,
      ...No
    };
  }
  function Ko(e, t, r, n) {
    let o,
      i = go(r, e.syntax);
    return function (e) {
      for (let t = 0; t < e.length; t++) if ("var(" === e[t].value.toLowerCase()) return !0;
      return !1;
    }(i) ? Qo(null, new Error("Matching for a tree with var() is not supported")) : (n && (o = Lo(i, e.valueCommonSyntax, e)), n && o.match || (o = Lo(i, t.match, e), o.match) ? Qo(o.match, null, o.iterations) : Qo(null, new yn(o.reason, t.syntax, r, o), o.iterations));
  }
  var Zo = class {
      constructor(e, t, r) {
        if (this.valueCommonSyntax = $o, this.syntax = t, this.generic = !1, this.atrules = Object.create(null), this.properties = Object.create(null), this.types = Object.create(null), this.structure = r || function (e) {
          let t = {};
          if (e.node) for (let r in e.node) if (Bo.call(e.node, r)) {
            let n = e.node[r];
            if (!n.structure) throw new Error("Missed `structure` field in `" + r + "` node type definition");
            t[r] = Wo(r, n);
          }
          return t;
        }(e), e) {
          if (e.types) for (let t in e.types) this.addType_(t, e.types[t]);
          if (e.generic) {
            this.generic = !0;
            for (let e in Gn) this.addType_(e, Gn[e]);
          }
          if (e.atrules) for (let t in e.atrules) this.addAtrule_(t, e.atrules[t]);
          if (e.properties) for (let t in e.properties) this.addProperty_(t, e.properties[t]);
        }
      }
      checkStructure(e) {
        function t(e, t) {
          n.push({
            node: e,
            message: t
          });
        }
        let r = this.structure,
          n = [];
        return this.syntax.walk(e, function (e) {
          r.hasOwnProperty(e.type) ? r[e.type].check(e, t) : t(e, "Unknown node type `" + e.type + "`");
        }), !!n.length && n;
      }
      createDescriptor(e, t, r, n = null) {
        let o = {
            type: t,
            name: r
          },
          i = {
            type: t,
            name: r,
            parent: n,
            serializable: "string" == typeof e || e && "string" == typeof e.type,
            syntax: null,
            match: null
          };
        return "function" == typeof e ? i.match = So(e, o) : ("string" == typeof e ? Object.defineProperty(i, "syntax", {
          get: () => (Object.defineProperty(i, "syntax", {
            value: uo(e)
          }), i.syntax)
        }) : i.syntax = e, Object.defineProperty(i, "match", {
          get: () => (Object.defineProperty(i, "match", {
            value: So(i.syntax, o)
          }), i.match)
        })), i;
      }
      addAtrule_(e, t) {
        !t || (this.atrules[e] = {
          type: "Atrule",
          name: e,
          prelude: t.prelude ? this.createDescriptor(t.prelude, "AtrulePrelude", e) : null,
          descriptors: t.descriptors ? Object.keys(t.descriptors).reduce((r, n) => (r[n] = this.createDescriptor(t.descriptors[n], "AtruleDescriptor", n, e), r), Object.create(null)) : null
        });
      }
      addProperty_(e, t) {
        !t || (this.properties[e] = this.createDescriptor(t, "Property", e));
      }
      addType_(e, t) {
        !t || (this.types[e] = this.createDescriptor(t, "Type", e), t === Gn["-ms-legacy-expression"] && (this.valueCommonSyntax = Go));
      }
      checkAtruleName(e) {
        if (!this.getAtrule(e)) return new gn("Unknown at-rule", "@" + e);
      }
      checkAtrulePrelude(e, t) {
        let r = this.checkAtruleName(e);
        if (r) return r;
        let n = this.getAtrule(e);
        return !n.prelude && t ? new SyntaxError("At-rule `@" + e + "` should not contain a prelude") : n.prelude && !t ? new SyntaxError("At-rule `@" + e + "` should contain a prelude") : void 0;
      }
      checkAtruleDescriptorName(e, t) {
        let r = this.checkAtruleName(e);
        if (r) return r;
        let n = this.getAtrule(e),
          o = vn(t);
        return n.descriptors ? n.descriptors[o.name] || n.descriptors[o.basename] ? void 0 : new gn("Unknown at-rule descriptor", t) : new SyntaxError("At-rule `@" + e + "` has no known descriptors");
      }
      checkPropertyName(e) {
        if (!this.getProperty(e)) return new gn("Unknown property", e);
      }
      matchAtrulePrelude(e, t) {
        let r = this.checkAtrulePrelude(e, t);
        return r ? Qo(null, r) : t ? Ko(this, this.getAtrule(e).prelude, t, !1) : Qo(null, null);
      }
      matchAtruleDescriptor(e, t, r) {
        let n = this.checkAtruleDescriptorName(e, t);
        if (n) return Qo(null, n);
        let o = this.getAtrule(e),
          i = vn(t);
        return Ko(this, o.descriptors[i.name] || o.descriptors[i.basename], r, !1);
      }
      matchDeclaration(e) {
        return "Declaration" !== e.type ? Qo(null, new Error("Not a Declaration node")) : this.matchProperty(e.property, e.value);
      }
      matchProperty(e, t) {
        if (wn(e).custom) return Qo(null, new Error("Lexer matching doesn't applicable for custom properties"));
        let r = this.checkPropertyName(e);
        return r ? Qo(null, r) : Ko(this, this.getProperty(e), t, !0);
      }
      matchType(e, t) {
        let r = this.getType(e);
        return r ? Ko(this, r, t, !1) : Qo(null, new gn("Unknown type", e));
      }
      match(e, t) {
        return "string" == typeof e || e && e.type ? (("string" == typeof e || !e.match) && (e = this.createDescriptor(e, "Type", "anonymous")), Ko(this, e, t, !1)) : Qo(null, new gn("Bad syntax"));
      }
      findValueFragments(e, t, r, n) {
        return qo(this, t, this.matchProperty(e, t), r, n);
      }
      findDeclarationValueFragments(e, t, r) {
        return qo(this, e.value, this.matchDeclaration(e), t, r);
      }
      findAllFragments(e, t, r) {
        let n = [];
        return this.syntax.walk(e, {
          visit: "Declaration",
          enter: e => {
            n.push.apply(n, this.findDeclarationValueFragments(e, t, r));
          }
        }), n;
      }
      getAtrule(e, t = !0) {
        let r = vn(e);
        return (r.vendor && t ? this.atrules[r.name] || this.atrules[r.basename] : this.atrules[r.name]) || null;
      }
      getAtrulePrelude(e, t = !0) {
        let r = this.getAtrule(e, t);
        return r && r.prelude || null;
      }
      getAtruleDescriptor(e, t) {
        return this.atrules.hasOwnProperty(e) && this.atrules.declarators && this.atrules[e].declarators[t] || null;
      }
      getProperty(e, t = !0) {
        let r = wn(e);
        return (r.vendor && t ? this.properties[r.name] || this.properties[r.basename] : this.properties[r.name]) || null;
      }
      getType(e) {
        return hasOwnProperty.call(this.types, e) ? this.types[e] : null;
      }
      validate() {
        function e(n, o, i, a) {
          if (i.has(o)) return i.get(o);
          i.set(o, !1), null !== a.syntax && mo(a.syntax, function (a) {
            if ("Type" !== a.type && "Property" !== a.type) return;
            let s = "Type" === a.type ? n.types : n.properties,
              l = "Type" === a.type ? t : r;
            (!hasOwnProperty.call(s, a.name) || e(n, a.name, l, s[a.name])) && i.set(o, !0);
          }, this);
        }
        let t = new Map(),
          r = new Map();
        for (let r in this.types) e(this, r, t, this.types[r]);
        for (let t in this.properties) e(this, t, r, this.properties[t]);
        return t = [...t.keys()].filter(e => t.get(e)), r = [...r.keys()].filter(e => r.get(e)), t.length || r.length ? {
          types: t,
          properties: r
        } : null;
      }
      dump(e, t) {
        return {
          generic: this.generic,
          types: Yo(this.types, !t, e),
          properties: Yo(this.properties, !t, e),
          atrules: Jo(this.atrules, !t, e)
        };
      }
      toString() {
        return JSON.stringify(this.dump());
      }
    },
    {
      hasOwnProperty: Xo
    } = Object.prototype,
    ei = {
      generic: !0,
      types: oi,
      atrules: {
        prelude: ii,
        descriptors: ii
      },
      properties: oi,
      parseContext: function (e, t) {
        return Object.assign(e, t);
      },
      scope: function e(t, r) {
        for (let n in r) Xo.call(r, n) && (ti(t[n]) ? e(t[n], ri(r[n])) : t[n] = ri(r[n]));
        return t;
      },
      atrule: ["parse"],
      pseudo: ["parse"],
      node: ["name", "structure", "parse", "generate", "walkContext"]
    };
  function ti(e) {
    return e && e.constructor === Object;
  }
  function ri(e) {
    return ti(e) ? {
      ...e
    } : e;
  }
  function ni(e, t) {
    return "string" == typeof t && /^\s*\|/.test(t) ? "string" == typeof e ? e + t : t.replace(/^\s*\|\s*/, "") : t || null;
  }
  function oi(e, t) {
    if ("string" == typeof t) return ni(e, t);
    let r = {
      ...e
    };
    for (let n in t) Xo.call(t, n) && (r[n] = ni(Xo.call(e, n) ? e[n] : void 0, t[n]));
    return r;
  }
  function ii(e, t) {
    let r = oi(e, t);
    return !ti(r) || Object.keys(r).length ? r : null;
  }
  function ai(e, t, r) {
    for (let n in r) if (!1 !== Xo.call(r, n)) if (!0 === r[n]) n in t && Xo.call(t, n) && (e[n] = ri(t[n]));else if (r[n]) if ("function" == typeof r[n]) {
      let o = r[n];
      e[n] = o({}, e[n]), e[n] = o(e[n] || {}, t[n]);
    } else if (ti(r[n])) {
      let o = {};
      for (let t in e[n]) o[t] = ai({}, e[n][t], r[n]);
      for (let e in t[n]) o[e] = ai(o[e] || {}, t[n][e], r[n]);
      e[n] = o;
    } else if (Array.isArray(r[n])) {
      let o = {},
        i = r[n].reduce(function (e, t) {
          return e[t] = !0, e;
        }, {});
      for (let [t, r] of Object.entries(e[n] || {})) o[t] = {}, r && ai(o[t], r, i);
      for (let e in t[n]) Xo.call(t[n], e) && (o[e] || (o[e] = {}), t[n] && t[n][e] && ai(o[e], t[n][e], i));
      e[n] = o;
    }
    return e;
  }
  var si = (e, t) => ai(e, t, ei);
  function li(e) {
    let t = qr(e),
      r = cn(e),
      n = en(e),
      {
        fromPlainObject: o,
        toPlainObject: i
      } = function (e) {
        return {
          fromPlainObject: function (t) {
            return e(t, {
              enter: function (e) {
                e.children && !(e.children instanceof Lr) && (e.children = new Lr().fromArray(e.children));
              }
            }), t;
          },
          toPlainObject: function (t) {
            return e(t, {
              leave: function (e) {
                e.children && e.children instanceof Lr && (e.children = e.children.toArray());
              }
            }), t;
          }
        };
      }(r),
      a = {
        lexer: null,
        createLexer: e => new Zo(e, a, a.lexer.structure),
        tokenize: _r,
        parse: t,
        generate: n,
        walk: r,
        find: r.find,
        findLast: r.findLast,
        findAll: r.findAll,
        fromPlainObject: o,
        toPlainObject: i,
        fork(t) {
          let r = si({}, e);
          return li("function" == typeof t ? t(r, Object.assign) : si(r, t));
        }
      };
    return a.lexer = new Zo({
      generic: !0,
      types: e.types,
      atrules: e.atrules,
      properties: e.properties,
      node: e.node
    }, a), a;
  }
  var ci = e => li(si({}, e)),
    ui = {};
  gt(ui, {
    AnPlusB: () => hi,
    Atrule: () => Ai,
    AtrulePrelude: () => Ni,
    AttributeSelector: () => Di,
    Block: () => Wi,
    Brackets: () => ta,
    CDC: () => aa,
    CDO: () => ha,
    ClassSelector: () => ga,
    Combinator: () => wa,
    Comment: () => Ta,
    Declaration: () => La,
    DeclarationList: () => ja,
    Dimension: () => Ya,
    Function: () => Xa,
    Hash: () => is,
    IdSelector: () => gs,
    Identifier: () => hs,
    MediaFeature: () => ws,
    MediaQuery: () => Ts,
    MediaQueryList: () => Ls,
    Nth: () => Os,
    Number: () => Bs,
    Operator: () => $s,
    Parentheses: () => Ks,
    Percentage: () => rl,
    PseudoClassSelector: () => sl,
    PseudoElementSelector: () => pl,
    Ratio: () => kl,
    Raw: () => Sl,
    Rule: () => Ll,
    Selector: () => Fl,
    SelectorList: () => Vl,
    String: () => Ql,
    StyleSheet: () => oc,
    TypeSelector: () => hc,
    UnicodeRange: () => yc,
    Url: () => Tc,
    Value: () => Pc,
    WhiteSpace: () => Fc
  });
  var hi = {};
  gt(hi, {
    generate: () => Ei,
    name: () => vi,
    parse: () => xi,
    structure: () => wi
  });
  var di = 43,
    pi = 45,
    mi = 110,
    fi = !0;
  function gi(e, t) {
    let r = this.tokenStart + e,
      n = this.charCodeAt(r);
    for ((n === di || n === pi) && (t && this.error("Number sign is not allowed"), r++); r < this.tokenEnd; r++) Qt(this.charCodeAt(r)) || this.error("Integer is expected", r);
  }
  function yi(e) {
    return gi.call(this, 0, e);
  }
  function bi(e, t) {
    if (!this.cmpChar(this.tokenStart + e, t)) {
      let r = "";
      switch (t) {
        case mi:
          r = "N is expected";
          break;
        case pi:
          r = "HyphenMinus is expected";
      }
      this.error(r, this.tokenStart + e);
    }
  }
  function ki() {
    let e = 0,
      t = 0,
      r = this.tokenType;
    for (; 13 === r || 25 === r;) r = this.lookupType(++e);
    if (10 !== r) {
      if (!this.isDelim(di, e) && !this.isDelim(pi, e)) return null;
      t = this.isDelim(di, e) ? di : pi;
      do {
        r = this.lookupType(++e);
      } while (13 === r || 25 === r);
      10 !== r && (this.skip(e), yi.call(this, fi));
    }
    return e > 0 && this.skip(e), 0 === t && (r = this.charCodeAt(this.tokenStart), r !== di && r !== pi && this.error("Number sign is expected")), yi.call(this, 0 !== t), t === pi ? "-" + this.consume(10) : this.consume(10);
  }
  var vi = "AnPlusB",
    wi = {
      a: [String, null],
      b: [String, null]
    };
  function xi() {
    let e = this.tokenStart,
      t = null,
      r = null;
    if (10 === this.tokenType) yi.call(this, false), r = this.consume(10);else if (1 === this.tokenType && this.cmpChar(this.tokenStart, pi)) switch (t = "-1", bi.call(this, 1, mi), this.tokenEnd - this.tokenStart) {
      case 2:
        this.next(), r = ki.call(this);
        break;
      case 3:
        bi.call(this, 2, pi), this.next(), this.skipSC(), yi.call(this, fi), r = "-" + this.consume(10);
        break;
      default:
        bi.call(this, 2, pi), gi.call(this, 3, fi), this.next(), r = this.substrToCursor(e + 2);
    } else if (1 === this.tokenType || this.isDelim(di) && 1 === this.lookupType(1)) {
      let n = 0;
      switch (t = "1", this.isDelim(di) && (n = 1, this.next()), bi.call(this, 0, mi), this.tokenEnd - this.tokenStart) {
        case 1:
          this.next(), r = ki.call(this);
          break;
        case 2:
          bi.call(this, 1, pi), this.next(), this.skipSC(), yi.call(this, fi), r = "-" + this.consume(10);
          break;
        default:
          bi.call(this, 1, pi), gi.call(this, 2, fi), this.next(), r = this.substrToCursor(e + n + 1);
      }
    } else if (12 === this.tokenType) {
      let n = this.charCodeAt(this.tokenStart),
        o = n === di || n === pi,
        i = this.tokenStart + o;
      for (; i < this.tokenEnd && Qt(this.charCodeAt(i)); i++);
      i === this.tokenStart + o && this.error("Integer is expected", this.tokenStart + o), bi.call(this, i - this.tokenStart, mi), t = this.substring(e, i), i + 1 === this.tokenEnd ? (this.next(), r = ki.call(this)) : (bi.call(this, i - this.tokenStart + 1, pi), i + 2 === this.tokenEnd ? (this.next(), this.skipSC(), yi.call(this, fi), r = "-" + this.consume(10)) : (gi.call(this, i - this.tokenStart + 2, fi), this.next(), r = this.substrToCursor(i + 1)));
    } else this.error();
    return null !== t && t.charCodeAt(0) === di && (t = t.substr(1)), null !== r && r.charCodeAt(0) === di && (r = r.substr(1)), {
      type: "AnPlusB",
      loc: this.getLocation(e, this.tokenStart),
      a: t,
      b: r
    };
  }
  function Ei(e) {
    if (e.a) {
      let t = ("+1" === e.a || "1" === e.a ? "n" : "-1" === e.a && "-n") || e.a + "n";
      if (e.b) {
        let r = "-" === e.b[0] || "+" === e.b[0] ? e.b : "+" + e.b;
        this.tokenize(t + r);
      } else this.tokenize(t);
    } else this.tokenize(e.b);
  }
  var Ai = {};
  function Si(e) {
    return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
  }
  function Ti() {
    for (let e, t = 1; e = this.lookupType(t); t++) {
      if (24 === e) return !0;
      if (23 === e || 3 === e) return !1;
    }
    return !1;
  }
  gt(Ai, {
    generate: () => Li,
    name: () => Ci,
    parse: () => Ii,
    structure: () => _i,
    walkContext: () => Ri
  });
  var Ci = "Atrule",
    Ri = "atrule",
    _i = {
      name: String,
      prelude: ["AtrulePrelude", "Raw", null],
      block: ["Block", null]
    };
  function Ii() {
    let e,
      t,
      r = this.tokenStart,
      n = null,
      o = null;
    switch (this.eat(3), e = this.substrToCursor(r + 1), t = e.toLowerCase(), this.skipSC(), !1 === this.eof && 23 !== this.tokenType && 17 !== this.tokenType && (n = this.parseAtrulePrelude ? this.parseWithFallback(this.AtrulePrelude.bind(this, e), Si) : Si.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
      case 17:
        this.next();
        break;
      case 23:
        o = hasOwnProperty.call(this.atrule, t) && "function" == typeof this.atrule[t].block ? this.atrule[t].block.call(this) : this.Block(Ti.call(this));
    }
    return {
      type: "Atrule",
      loc: this.getLocation(r, this.tokenStart),
      name: e,
      prelude: n,
      block: o
    };
  }
  function Li(e) {
    this.token(3, "@" + e.name), null !== e.prelude && this.node(e.prelude), e.block ? this.node(e.block) : this.token(17, ";");
  }
  var Ni = {};
  gt(Ni, {
    generate: () => Ui,
    name: () => zi,
    parse: () => Oi,
    structure: () => Mi,
    walkContext: () => Pi
  });
  var zi = "AtrulePrelude",
    Pi = "atrulePrelude",
    Mi = {
      children: [[]]
    };
  function Oi(e) {
    let t = null;
    return null !== e && (e = e.toLowerCase()), this.skipSC(), t = hasOwnProperty.call(this.atrule, e) && "function" == typeof this.atrule[e].prelude ? this.atrule[e].prelude.call(this) : this.readSequence(this.scope.AtrulePrelude), this.skipSC(), !0 !== this.eof && 23 !== this.tokenType && 17 !== this.tokenType && this.error("Semicolon or block is expected"), {
      type: "AtrulePrelude",
      loc: this.getLocationFromList(t),
      children: t
    };
  }
  function Ui(e) {
    this.children(e);
  }
  var Di = {};
  gt(Di, {
    generate: () => Vi,
    name: () => Bi,
    parse: () => Hi,
    structure: () => ji
  });
  function Fi() {
    this.eof && this.error("Unexpected end of input");
    let e = this.tokenStart,
      t = !1;
    return this.isDelim(42) ? (t = !0, this.next()) : this.isDelim(124) || this.eat(1), this.isDelim(124) ? 61 !== this.charCodeAt(this.tokenStart + 1) ? (this.next(), this.eat(1)) : t && this.error("Identifier is expected", this.tokenEnd) : t && this.error("Vertical line is expected"), {
      type: "Identifier",
      loc: this.getLocation(e, this.tokenStart),
      name: this.substrToCursor(e)
    };
  }
  function qi() {
    let e = this.tokenStart,
      t = this.charCodeAt(e);
    return 61 !== t && 126 !== t && 94 !== t && 36 !== t && 42 !== t && 124 !== t && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.next(), 61 !== t && (this.isDelim(61) || this.error("Equal sign is expected"), this.next()), this.substrToCursor(e);
  }
  var Bi = "AttributeSelector",
    ji = {
      name: "Identifier",
      matcher: [String, null],
      value: ["String", "Identifier", null],
      flags: [String, null]
    };
  function Hi() {
    let e,
      t = this.tokenStart,
      r = null,
      n = null,
      o = null;
    return this.eat(19), this.skipSC(), e = Fi.call(this), this.skipSC(), 20 !== this.tokenType && (1 !== this.tokenType && (r = qi.call(this), this.skipSC(), n = 5 === this.tokenType ? this.String() : this.Identifier(), this.skipSC()), 1 === this.tokenType && (o = this.consume(1), this.skipSC())), this.eat(20), {
      type: "AttributeSelector",
      loc: this.getLocation(t, this.tokenStart),
      name: e,
      matcher: r,
      value: n,
      flags: o
    };
  }
  function Vi(e) {
    this.token(9, "["), this.node(e.name), null !== e.matcher && (this.tokenize(e.matcher), this.node(e.value)), null !== e.flags && this.token(1, e.flags), this.token(9, "]");
  }
  var Wi = {};
  function $i(e) {
    return this.Raw(e, null, !0);
  }
  function Gi() {
    return this.parseWithFallback(this.Rule, $i);
  }
  function Yi(e) {
    return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
  }
  function Ji() {
    if (17 === this.tokenType) return Yi.call(this, this.tokenIndex);
    let e = this.parseWithFallback(this.Declaration, Yi);
    return 17 === this.tokenType && this.next(), e;
  }
  gt(Wi, {
    generate: () => ea,
    name: () => Qi,
    parse: () => Xi,
    structure: () => Zi,
    walkContext: () => Ki
  });
  var Qi = "Block",
    Ki = "block",
    Zi = {
      children: [["Atrule", "Rule", "Declaration"]]
    };
  function Xi(e) {
    let t = e ? Ji : Gi,
      r = this.tokenStart,
      n = this.createList();
    this.eat(23);
    e: for (; !this.eof;) switch (this.tokenType) {
      case 24:
        break e;
      case 13:
      case 25:
        this.next();
        break;
      case 3:
        n.push(this.parseWithFallback(this.Atrule, $i));
        break;
      default:
        n.push(t.call(this));
    }
    return this.eof || this.eat(24), {
      type: "Block",
      loc: this.getLocation(r, this.tokenStart),
      children: n
    };
  }
  function ea(e) {
    this.token(23, "{"), this.children(e, e => {
      "Declaration" === e.type && this.token(17, ";");
    }), this.token(24, "}");
  }
  var ta = {};
  gt(ta, {
    generate: () => ia,
    name: () => ra,
    parse: () => oa,
    structure: () => na
  });
  var ra = "Brackets",
    na = {
      children: [[]]
    };
  function oa(e, t) {
    let r = this.tokenStart,
      n = null;
    return this.eat(19), n = e.call(this, t), this.eof || this.eat(20), {
      type: "Brackets",
      loc: this.getLocation(r, this.tokenStart),
      children: n
    };
  }
  function ia(e) {
    this.token(9, "["), this.children(e), this.token(9, "]");
  }
  var aa = {};
  gt(aa, {
    generate: () => ua,
    name: () => sa,
    parse: () => ca,
    structure: () => la
  });
  var sa = "CDC",
    la = [];
  function ca() {
    let e = this.tokenStart;
    return this.eat(15), {
      type: "CDC",
      loc: this.getLocation(e, this.tokenStart)
    };
  }
  function ua() {
    this.token(15, "--\x3e");
  }
  var ha = {};
  gt(ha, {
    generate: () => fa,
    name: () => da,
    parse: () => ma,
    structure: () => pa
  });
  var da = "CDO",
    pa = [];
  function ma() {
    let e = this.tokenStart;
    return this.eat(14), {
      type: "CDO",
      loc: this.getLocation(e, this.tokenStart)
    };
  }
  function fa() {
    this.token(14, "\x3c!--");
  }
  var ga = {};
  gt(ga, {
    generate: () => va,
    name: () => ya,
    parse: () => ka,
    structure: () => ba
  });
  var ya = "ClassSelector",
    ba = {
      name: String
    };
  function ka() {
    return this.eatDelim(46), {
      type: "ClassSelector",
      loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
      name: this.consume(1)
    };
  }
  function va(e) {
    this.token(9, "."), this.token(1, e.name);
  }
  var wa = {};
  gt(wa, {
    generate: () => Sa,
    name: () => xa,
    parse: () => Aa,
    structure: () => Ea
  });
  var xa = "Combinator",
    Ea = {
      name: String
    };
  function Aa() {
    let e,
      t = this.tokenStart;
    switch (this.tokenType) {
      case 13:
        e = " ";
        break;
      case 9:
        switch (this.charCodeAt(this.tokenStart)) {
          case 62:
          case 43:
          case 126:
            this.next();
            break;
          case 47:
            this.next(), this.eatIdent("deep"), this.eatDelim(47);
            break;
          default:
            this.error("Combinator is expected");
        }
        e = this.substrToCursor(t);
    }
    return {
      type: "Combinator",
      loc: this.getLocation(t, this.tokenStart),
      name: e
    };
  }
  function Sa(e) {
    this.tokenize(e.name);
  }
  var Ta = {};
  gt(Ta, {
    generate: () => Ia,
    name: () => Ca,
    parse: () => _a,
    structure: () => Ra
  });
  var Ca = "Comment",
    Ra = {
      value: String
    };
  function _a() {
    let e = this.tokenStart,
      t = this.tokenEnd;
    return this.eat(25), t - e + 2 >= 2 && 42 === this.charCodeAt(t - 2) && 47 === this.charCodeAt(t - 1) && (t -= 2), {
      type: "Comment",
      loc: this.getLocation(e, this.tokenStart),
      value: this.substring(e + 2, t)
    };
  }
  function Ia(e) {
    this.token(25, "/*" + e.value + "*/");
  }
  var La = {};
  gt(La, {
    generate: () => Fa,
    name: () => Ma,
    parse: () => Da,
    structure: () => Ua,
    walkContext: () => Oa
  });
  function Na(e) {
    return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
  }
  function za(e) {
    return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
  }
  function Pa() {
    let e = this.tokenIndex,
      t = this.Value();
    return "Raw" !== t.type && !1 === this.eof && 17 !== this.tokenType && !1 === this.isDelim(33) && !1 === this.isBalanceEdge(e) && this.error(), t;
  }
  var Ma = "Declaration",
    Oa = "declaration",
    Ua = {
      important: [Boolean, String],
      property: String,
      value: ["Value", "Raw"]
    };
  function Da() {
    let e,
      t = this.tokenStart,
      r = this.tokenIndex,
      n = qa.call(this),
      o = En(n),
      i = o ? this.parseCustomProperty : this.parseValue,
      a = o ? za : Na,
      s = !1;
    this.skipSC(), this.eat(16);
    let l = this.tokenIndex;
    if (o || this.skipSC(), e = i ? this.parseWithFallback(Pa, a) : a.call(this, this.tokenIndex), o && "Value" === e.type && e.children.isEmpty) for (let t = l - this.tokenIndex; t <= 0; t++) if (13 === this.lookupType(t)) {
      e.children.appendData({
        type: "WhiteSpace",
        loc: null,
        value: " "
      });
      break;
    }
    return this.isDelim(33) && (s = Ba.call(this), this.skipSC()), !1 === this.eof && 17 !== this.tokenType && !1 === this.isBalanceEdge(r) && this.error(), {
      type: "Declaration",
      loc: this.getLocation(t, this.tokenStart),
      important: s,
      property: n,
      value: e
    };
  }
  function Fa(e) {
    this.token(1, e.property), this.token(16, ":"), this.node(e.value), e.important && (this.token(9, "!"), this.token(1, !0 === e.important ? "important" : e.important));
  }
  function qa() {
    let e = this.tokenStart;
    if (9 === this.tokenType) switch (this.charCodeAt(this.tokenStart)) {
      case 42:
      case 36:
      case 43:
      case 35:
      case 38:
        this.next();
        break;
      case 47:
        this.next(), this.isDelim(47) && this.next();
    }
    return 4 === this.tokenType ? this.eat(4) : this.eat(1), this.substrToCursor(e);
  }
  function Ba() {
    this.eat(9), this.skipSC();
    let e = this.consume(1);
    return "important" === e || e;
  }
  var ja = {};
  function Ha(e) {
    return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
  }
  gt(ja, {
    generate: () => Ga,
    name: () => Va,
    parse: () => $a,
    structure: () => Wa
  });
  var Va = "DeclarationList",
    Wa = {
      children: [["Declaration"]]
    };
  function $a() {
    let e = this.createList();
    for (; !this.eof;) switch (this.tokenType) {
      case 13:
      case 25:
      case 17:
        this.next();
        break;
      default:
        e.push(this.parseWithFallback(this.Declaration, Ha));
    }
    return {
      type: "DeclarationList",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function Ga(e) {
    this.children(e, e => {
      "Declaration" === e.type && this.token(17, ";");
    });
  }
  var Ya = {};
  gt(Ya, {
    generate: () => Za,
    name: () => Ja,
    parse: () => Ka,
    structure: () => Qa
  });
  var Ja = "Dimension",
    Qa = {
      value: String,
      unit: String
    };
  function Ka() {
    let e = this.tokenStart,
      t = this.consumeNumber(12);
    return {
      type: "Dimension",
      loc: this.getLocation(e, this.tokenStart),
      value: t,
      unit: this.substring(e + t.length, this.tokenStart)
    };
  }
  function Za(e) {
    this.token(12, e.value + e.unit);
  }
  var Xa = {};
  gt(Xa, {
    generate: () => os,
    name: () => es,
    parse: () => ns,
    structure: () => rs,
    walkContext: () => ts
  });
  var es = "Function",
    ts = "function",
    rs = {
      name: String,
      children: [[]]
    };
  function ns(e, t) {
    let r,
      n = this.tokenStart,
      o = this.consumeFunctionName(),
      i = o.toLowerCase();
    return r = t.hasOwnProperty(i) ? t[i].call(this, t) : e.call(this, t), this.eof || this.eat(22), {
      type: "Function",
      loc: this.getLocation(n, this.tokenStart),
      name: o,
      children: r
    };
  }
  function os(e) {
    this.token(2, e.name + "("), this.children(e), this.token(22, ")");
  }
  var is = {};
  gt(is, {
    generate: () => us,
    name: () => ss,
    parse: () => cs,
    structure: () => ls,
    xxx: () => as
  });
  var as = "XXX",
    ss = "Hash",
    ls = {
      value: String
    };
  function cs() {
    let e = this.tokenStart;
    return this.eat(4), {
      type: "Hash",
      loc: this.getLocation(e, this.tokenStart),
      value: this.substrToCursor(e + 1)
    };
  }
  function us(e) {
    this.token(4, "#" + e.value);
  }
  var hs = {};
  gt(hs, {
    generate: () => fs,
    name: () => ds,
    parse: () => ms,
    structure: () => ps
  });
  var ds = "Identifier",
    ps = {
      name: String
    };
  function ms() {
    return {
      type: "Identifier",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      name: this.consume(1)
    };
  }
  function fs(e) {
    this.token(1, e.name);
  }
  var gs = {};
  gt(gs, {
    generate: () => vs,
    name: () => ys,
    parse: () => ks,
    structure: () => bs
  });
  var ys = "IdSelector",
    bs = {
      name: String
    };
  function ks() {
    let e = this.tokenStart;
    return this.eat(4), {
      type: "IdSelector",
      loc: this.getLocation(e, this.tokenStart),
      name: this.substrToCursor(e + 1)
    };
  }
  function vs(e) {
    this.token(9, "#" + e.name);
  }
  var ws = {};
  gt(ws, {
    generate: () => Ss,
    name: () => xs,
    parse: () => As,
    structure: () => Es
  });
  var xs = "MediaFeature",
    Es = {
      name: String,
      value: ["Identifier", "Number", "Dimension", "Ratio", null]
    };
  function As() {
    let e,
      t = this.tokenStart,
      r = null;
    if (this.eat(21), this.skipSC(), e = this.consume(1), this.skipSC(), 22 !== this.tokenType) {
      switch (this.eat(16), this.skipSC(), this.tokenType) {
        case 10:
          r = 9 === this.lookupNonWSType(1) ? this.Ratio() : this.Number();
          break;
        case 12:
          r = this.Dimension();
          break;
        case 1:
          r = this.Identifier();
          break;
        default:
          this.error("Number, dimension, ratio or identifier is expected");
      }
      this.skipSC();
    }
    return this.eat(22), {
      type: "MediaFeature",
      loc: this.getLocation(t, this.tokenStart),
      name: e,
      value: r
    };
  }
  function Ss(e) {
    this.token(21, "("), this.token(1, e.name), null !== e.value && (this.token(16, ":"), this.node(e.value)), this.token(22, ")");
  }
  var Ts = {};
  gt(Ts, {
    generate: () => Is,
    name: () => Cs,
    parse: () => _s,
    structure: () => Rs
  });
  var Cs = "MediaQuery",
    Rs = {
      children: [["Identifier", "MediaFeature", "WhiteSpace"]]
    };
  function _s() {
    let e = this.createList(),
      t = null;
    this.skipSC();
    e: for (; !this.eof;) {
      switch (this.tokenType) {
        case 25:
        case 13:
          this.next();
          continue;
        case 1:
          t = this.Identifier();
          break;
        case 21:
          t = this.MediaFeature();
          break;
        default:
          break e;
      }
      e.push(t);
    }
    return null === t && this.error("Identifier or parenthesis is expected"), {
      type: "MediaQuery",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function Is(e) {
    this.children(e);
  }
  var Ls = {};
  gt(Ls, {
    generate: () => Ms,
    name: () => Ns,
    parse: () => Ps,
    structure: () => zs
  });
  var Ns = "MediaQueryList",
    zs = {
      children: [["MediaQuery"]]
    };
  function Ps() {
    let e = this.createList();
    for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), 18 === this.tokenType);) this.next();
    return {
      type: "MediaQueryList",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function Ms(e) {
    this.children(e, () => this.token(18, ","));
  }
  var Os = {};
  gt(Os, {
    generate: () => qs,
    name: () => Us,
    parse: () => Fs,
    structure: () => Ds
  });
  var Us = "Nth",
    Ds = {
      nth: ["AnPlusB", "Identifier"],
      selector: ["SelectorList", null]
    };
  function Fs() {
    this.skipSC();
    let e,
      t = this.tokenStart,
      r = t,
      n = null;
    return e = this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? this.Identifier() : this.AnPlusB(), r = this.tokenStart, this.skipSC(), this.lookupValue(0, "of") && (this.next(), n = this.SelectorList(), r = this.tokenStart), {
      type: "Nth",
      loc: this.getLocation(t, r),
      nth: e,
      selector: n
    };
  }
  function qs(e) {
    this.node(e.nth), null !== e.selector && (this.token(1, "of"), this.node(e.selector));
  }
  var Bs = {};
  gt(Bs, {
    generate: () => Ws,
    name: () => js,
    parse: () => Vs,
    structure: () => Hs
  });
  var js = "Number",
    Hs = {
      value: String
    };
  function Vs() {
    return {
      type: "Number",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: this.consume(10)
    };
  }
  function Ws(e) {
    this.token(10, e.value);
  }
  var $s = {};
  gt($s, {
    generate: () => Qs,
    name: () => Gs,
    parse: () => Js,
    structure: () => Ys
  });
  var Gs = "Operator",
    Ys = {
      value: String
    };
  function Js() {
    let e = this.tokenStart;
    return this.next(), {
      type: "Operator",
      loc: this.getLocation(e, this.tokenStart),
      value: this.substrToCursor(e)
    };
  }
  function Qs(e) {
    this.tokenize(e.value);
  }
  var Ks = {};
  gt(Ks, {
    generate: () => tl,
    name: () => Zs,
    parse: () => el,
    structure: () => Xs
  });
  var Zs = "Parentheses",
    Xs = {
      children: [[]]
    };
  function el(e, t) {
    let r = this.tokenStart,
      n = null;
    return this.eat(21), n = e.call(this, t), this.eof || this.eat(22), {
      type: "Parentheses",
      loc: this.getLocation(r, this.tokenStart),
      children: n
    };
  }
  function tl(e) {
    this.token(21, "("), this.children(e), this.token(22, ")");
  }
  var rl = {};
  gt(rl, {
    generate: () => al,
    name: () => nl,
    parse: () => il,
    structure: () => ol
  });
  var nl = "Percentage",
    ol = {
      value: String
    };
  function il() {
    return {
      type: "Percentage",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: this.consumeNumber(11)
    };
  }
  function al(e) {
    this.token(11, e.value + "%");
  }
  var sl = {};
  gt(sl, {
    generate: () => dl,
    name: () => ll,
    parse: () => hl,
    structure: () => ul,
    walkContext: () => cl
  });
  var ll = "PseudoClassSelector",
    cl = "function",
    ul = {
      name: String,
      children: [["Raw"], null]
    };
  function hl() {
    let e,
      t,
      r = this.tokenStart,
      n = null;
    return this.eat(16), 2 === this.tokenType ? (e = this.consumeFunctionName(), t = e.toLowerCase(), hasOwnProperty.call(this.pseudo, t) ? (this.skipSC(), n = this.pseudo[t].call(this), this.skipSC()) : (n = this.createList(), n.push(this.Raw(this.tokenIndex, null, !1))), this.eat(22)) : e = this.consume(1), {
      type: "PseudoClassSelector",
      loc: this.getLocation(r, this.tokenStart),
      name: e,
      children: n
    };
  }
  function dl(e) {
    this.token(16, ":"), null === e.children ? this.token(1, e.name) : (this.token(2, e.name + "("), this.children(e), this.token(22, ")"));
  }
  var pl = {};
  gt(pl, {
    generate: () => bl,
    name: () => ml,
    parse: () => yl,
    structure: () => gl,
    walkContext: () => fl
  });
  var ml = "PseudoElementSelector",
    fl = "function",
    gl = {
      name: String,
      children: [["Raw"], null]
    };
  function yl() {
    let e,
      t,
      r = this.tokenStart,
      n = null;
    return this.eat(16), this.eat(16), 2 === this.tokenType ? (e = this.consumeFunctionName(), t = e.toLowerCase(), hasOwnProperty.call(this.pseudo, t) ? (this.skipSC(), n = this.pseudo[t].call(this), this.skipSC()) : (n = this.createList(), n.push(this.Raw(this.tokenIndex, null, !1))), this.eat(22)) : e = this.consume(1), {
      type: "PseudoElementSelector",
      loc: this.getLocation(r, this.tokenStart),
      name: e,
      children: n
    };
  }
  function bl(e) {
    this.token(16, ":"), this.token(16, ":"), null === e.children ? this.token(1, e.name) : (this.token(2, e.name + "("), this.children(e), this.token(22, ")"));
  }
  var kl = {};
  gt(kl, {
    generate: () => Al,
    name: () => wl,
    parse: () => El,
    structure: () => xl
  });
  function vl() {
    this.skipSC();
    let e = this.consume(10);
    for (let t = 0; t < e.length; t++) {
      let r = e.charCodeAt(t);
      !Qt(r) && 46 !== r && this.error("Unsigned number is expected", this.tokenStart - e.length + t);
    }
    return 0 === Number(e) && this.error("Zero number is not allowed", this.tokenStart - e.length), e;
  }
  var wl = "Ratio",
    xl = {
      left: String,
      right: String
    };
  function El() {
    let e,
      t = this.tokenStart,
      r = vl.call(this);
    return this.skipSC(), this.eatDelim(47), e = vl.call(this), {
      type: "Ratio",
      loc: this.getLocation(t, this.tokenStart),
      left: r,
      right: e
    };
  }
  function Al(e) {
    this.token(10, e.left), this.token(9, "/"), this.token(10, e.right);
  }
  var Sl = {};
  function Tl() {
    return this.tokenIndex > 0 && 13 === this.lookupType(-1) ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
  }
  gt(Sl, {
    generate: () => Il,
    name: () => Cl,
    parse: () => _l,
    structure: () => Rl
  });
  var Cl = "Raw",
    Rl = {
      value: String
    };
  function _l(e, t, r) {
    let n,
      o = this.getTokenStart(e);
    return this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd), n = r && this.tokenStart > o ? Tl.call(this) : this.tokenStart, {
      type: "Raw",
      loc: this.getLocation(o, n),
      value: this.substring(o, n)
    };
  }
  function Il(e) {
    this.tokenize(e.value);
  }
  var Ll = {};
  function Nl(e) {
    return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
  }
  function zl() {
    let e = this.SelectorList();
    return "Raw" !== e.type && !1 === this.eof && 23 !== this.tokenType && this.error(), e;
  }
  gt(Ll, {
    generate: () => Dl,
    name: () => Pl,
    parse: () => Ul,
    structure: () => Ol,
    walkContext: () => Ml
  });
  var Pl = "Rule",
    Ml = "rule",
    Ol = {
      prelude: ["SelectorList", "Raw"],
      block: ["Block"]
    };
  function Ul() {
    let e,
      t,
      r = this.tokenIndex,
      n = this.tokenStart;
    return e = this.parseRulePrelude ? this.parseWithFallback(zl, Nl) : Nl.call(this, r), t = this.Block(!0), {
      type: "Rule",
      loc: this.getLocation(n, this.tokenStart),
      prelude: e,
      block: t
    };
  }
  function Dl(e) {
    this.node(e.prelude), this.node(e.block);
  }
  var Fl = {};
  gt(Fl, {
    generate: () => Hl,
    name: () => ql,
    parse: () => jl,
    structure: () => Bl
  });
  var ql = "Selector",
    Bl = {
      children: [["TypeSelector", "IdSelector", "ClassSelector", "AttributeSelector", "PseudoClassSelector", "PseudoElementSelector", "Combinator", "WhiteSpace"]]
    };
  function jl() {
    let e = this.readSequence(this.scope.Selector);
    return null === this.getFirstListNode(e) && this.error("Selector is expected"), {
      type: "Selector",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function Hl(e) {
    this.children(e);
  }
  var Vl = {};
  gt(Vl, {
    generate: () => Jl,
    name: () => Wl,
    parse: () => Yl,
    structure: () => Gl,
    walkContext: () => $l
  });
  var Wl = "SelectorList",
    $l = "selector",
    Gl = {
      children: [["Selector", "Raw"]]
    };
  function Yl() {
    let e = this.createList();
    for (; !this.eof && (e.push(this.Selector()), 18 === this.tokenType);) this.next();
    return {
      type: "SelectorList",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function Jl(e) {
    this.children(e, () => this.token(18, ","));
  }
  var Ql = {};
  gt(Ql, {
    generate: () => nc,
    name: () => ec,
    parse: () => rc,
    structure: () => tc
  });
  var Kl = {};
  gt(Kl, {
    decode: () => Zl,
    encode: () => Xl
  });
  function Zl(e) {
    let t = e.length,
      r = e.charCodeAt(0),
      n = 34 === r || 39 === r ? 1 : 0,
      o = 1 === n && t > 1 && e.charCodeAt(t - 1) === r ? t - 2 : t - 1,
      i = "";
    for (let r = n; r <= o; r++) {
      let n = e.charCodeAt(r);
      if (92 === n) {
        if (r === o) {
          r !== t - 1 && (i = e.substr(r + 1));
          break;
        }
        if (n = e.charCodeAt(++r), or(92, n)) {
          let t = r - 1,
            n = yr(e, t);
          r = n - 1, i += wr(e.substring(t + 1, n));
        } else 13 === n && 10 === e.charCodeAt(r + 1) && r++;
      } else i += e[r];
    }
    return i;
  }
  function Xl(e, t) {
    let r = t ? "'" : '"',
      n = t ? 39 : 34,
      o = "",
      i = !1;
    for (let t = 0; t < e.length; t++) {
      let r = e.charCodeAt(t);
      0 !== r ? r <= 31 || 127 === r ? (o += "\\" + r.toString(16), i = !0) : r === n || 92 === r ? (o += "\\" + e.charAt(t), i = !1) : (i && (Kt(r) || nr(r)) && (o += " "), o += e.charAt(t), i = !1) : o += "�";
    }
    return r + o + r;
  }
  var ec = "String",
    tc = {
      value: String
    };
  function rc() {
    return {
      type: "String",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: Zl(this.consume(5))
    };
  }
  function nc(e) {
    this.token(5, Xl(e.value));
  }
  var oc = {};
  gt(oc, {
    generate: () => uc,
    name: () => ac,
    parse: () => cc,
    structure: () => lc,
    walkContext: () => sc
  });
  function ic(e) {
    return this.Raw(e, null, !1);
  }
  var ac = "StyleSheet",
    sc = "stylesheet",
    lc = {
      children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]]
    };
  function cc() {
    let e,
      t = this.tokenStart,
      r = this.createList();
    for (; !this.eof;) {
      switch (this.tokenType) {
        case 13:
          this.next();
          continue;
        case 25:
          if (33 !== this.charCodeAt(this.tokenStart + 2)) {
            this.next();
            continue;
          }
          e = this.Comment();
          break;
        case 14:
          e = this.CDO();
          break;
        case 15:
          e = this.CDC();
          break;
        case 3:
          e = this.parseWithFallback(this.Atrule, ic);
          break;
        default:
          e = this.parseWithFallback(this.Rule, ic);
      }
      r.push(e);
    }
    return {
      type: "StyleSheet",
      loc: this.getLocation(t, this.tokenStart),
      children: r
    };
  }
  function uc(e) {
    this.children(e);
  }
  var hc = {};
  gt(hc, {
    generate: () => gc,
    name: () => pc,
    parse: () => fc,
    structure: () => mc
  });
  function dc() {
    1 !== this.tokenType && !1 === this.isDelim(42) && this.error("Identifier or asterisk is expected"), this.next();
  }
  var pc = "TypeSelector",
    mc = {
      name: String
    };
  function fc() {
    let e = this.tokenStart;
    return this.isDelim(124) ? (this.next(), dc.call(this)) : (dc.call(this), this.isDelim(124) && (this.next(), dc.call(this))), {
      type: "TypeSelector",
      loc: this.getLocation(e, this.tokenStart),
      name: this.substrToCursor(e)
    };
  }
  function gc(e) {
    this.tokenize(e.name);
  }
  var yc = {};
  gt(yc, {
    generate: () => Sc,
    name: () => xc,
    parse: () => Ac,
    structure: () => Ec
  });
  function bc(e, t) {
    let r = 0;
    for (let n = this.tokenStart + e; n < this.tokenEnd; n++) {
      let o = this.charCodeAt(n);
      if (45 === o && t && 0 !== r) return bc.call(this, e + r + 1, !1), -1;
      Kt(o) || this.error(t && 0 !== r ? "Hyphen minus" + (r < 6 ? " or hex digit" : "") + " is expected" : r < 6 ? "Hex digit is expected" : "Unexpected input", n), ++r > 6 && this.error("Too many hex digits", n);
    }
    return this.next(), r;
  }
  function kc(e) {
    let t = 0;
    for (; this.isDelim(63);) ++t > e && this.error("Too many question marks"), this.next();
  }
  function vc(e) {
    this.charCodeAt(this.tokenStart) !== e && this.error((43 === e ? "Plus sign" : "Hyphen minus") + " is expected");
  }
  function wc() {
    let e = 0;
    switch (this.tokenType) {
      case 10:
        if (e = bc.call(this, 1, !0), this.isDelim(63)) {
          kc.call(this, 6 - e);
          break;
        }
        if (12 === this.tokenType || 10 === this.tokenType) {
          vc.call(this, 45), bc.call(this, 1, !1);
          break;
        }
        break;
      case 12:
        e = bc.call(this, 1, !0), e > 0 && kc.call(this, 6 - e);
        break;
      default:
        if (this.eatDelim(43), 1 === this.tokenType) {
          e = bc.call(this, 0, !0), e > 0 && kc.call(this, 6 - e);
          break;
        }
        if (this.isDelim(63)) {
          this.next(), kc.call(this, 5);
          break;
        }
        this.error("Hex digit or question mark is expected");
    }
  }
  var xc = "UnicodeRange",
    Ec = {
      value: String
    };
  function Ac() {
    let e = this.tokenStart;
    return this.eatIdent("u"), wc.call(this), {
      type: "UnicodeRange",
      loc: this.getLocation(e, this.tokenStart),
      value: this.substrToCursor(e)
    };
  }
  function Sc(e) {
    this.tokenize(e.value);
  }
  var Tc = {};
  gt(Tc, {
    generate: () => zc,
    name: () => Ic,
    parse: () => Nc,
    structure: () => Lc
  });
  var Cc = {};
  gt(Cc, {
    decode: () => Rc,
    encode: () => _c
  });
  function Rc(e) {
    let t = e.length,
      r = 4,
      n = 41 === e.charCodeAt(t - 1) ? t - 2 : t - 1,
      o = "";
    for (; r < n && nr(e.charCodeAt(r));) r++;
    for (; r < n && nr(e.charCodeAt(n));) n--;
    for (let i = r; i <= n; i++) {
      let r = e.charCodeAt(i);
      if (92 === r) {
        if (i === n) {
          i !== t - 1 && (o = e.substr(i + 1));
          break;
        }
        if (r = e.charCodeAt(++i), or(92, r)) {
          let t = i - 1,
            r = yr(e, t);
          i = r - 1, o += wr(e.substring(t + 1, r));
        } else 13 === r && 10 === e.charCodeAt(i + 1) && i++;
      } else o += e[i];
    }
    return o;
  }
  function _c(e) {
    let t = "",
      r = !1;
    for (let n = 0; n < e.length; n++) {
      let o = e.charCodeAt(n);
      0 !== o ? o <= 31 || 127 === o ? (t += "\\" + o.toString(16), r = !0) : 32 === o || 92 === o || 34 === o || 39 === o || 40 === o || 41 === o ? (t += "\\" + e.charAt(n), r = !1) : (r && Kt(o) && (t += " "), t += e.charAt(n), r = !1) : t += "�";
    }
    return "url(" + t + ")";
  }
  var Ic = "Url",
    Lc = {
      value: String
    };
  function Nc() {
    let e,
      t = this.tokenStart;
    switch (this.tokenType) {
      case 7:
        e = Rc(this.consume(7));
        break;
      case 2:
        this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(2), this.skipSC(), e = Zl(this.consume(5)), this.skipSC(), this.eof || this.eat(22);
        break;
      default:
        this.error("Url or Function is expected");
    }
    return {
      type: "Url",
      loc: this.getLocation(t, this.tokenStart),
      value: e
    };
  }
  function zc(e) {
    this.token(7, _c(e.value));
  }
  var Pc = {};
  gt(Pc, {
    generate: () => Dc,
    name: () => Mc,
    parse: () => Uc,
    structure: () => Oc
  });
  var Mc = "Value",
    Oc = {
      children: [[]]
    };
  function Uc() {
    let e = this.tokenStart,
      t = this.readSequence(this.scope.Value);
    return {
      type: "Value",
      loc: this.getLocation(e, this.tokenStart),
      children: t
    };
  }
  function Dc(e) {
    this.children(e);
  }
  var Fc = {};
  gt(Fc, {
    generate: () => Vc,
    name: () => Bc,
    parse: () => Hc,
    structure: () => jc
  });
  var qc = Object.freeze({
      type: "WhiteSpace",
      loc: null,
      value: " "
    }),
    Bc = "WhiteSpace",
    jc = {
      value: String
    };
  function Hc() {
    return this.eat(13), qc;
  }
  function Vc(e) {
    this.token(13, e.value);
  }
  var Wc = {
      generic: !0,
      generic: !0,
      types: {
        "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
        "alpha-value": "<number>|<percentage>",
        "angle-percentage": "<angle>|<percentage>",
        "angular-color-hint": "<angle-percentage>",
        "angular-color-stop": "<color>&&<color-stop-angle>?",
        "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
        "animateable-feature": "scroll-position|contents|<custom-ident>",
        attachment: "scroll|fixed|local",
        "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
        "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
        "attr-modifier": "i|s",
        "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
        "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
        "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
        "baseline-position": "[first|last]? baseline",
        "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
        "bg-image": "none|<image>",
        "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
        "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
        "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
        "blur()": "blur( <length> )",
        "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
        box: "border-box|padding-box|content-box",
        "brightness()": "brightness( <number-percentage> )",
        "calc()": "calc( <calc-sum> )",
        "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
        "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
        "calc-value": "<number>|<dimension>|<percentage>|( <calc-sum> )",
        "cf-final-image": "<image>|<color>",
        "cf-mixing-image": "<percentage>?&&<image>",
        "circle()": "circle( [<shape-radius>]? [at <position>]? )",
        "clamp()": "clamp( <calc-sum>#{3} )",
        "class-selector": "'.' <ident-token>",
        "clip-source": "<url>",
        color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
        "color-stop": "<color-stop-length>|<color-stop-angle>",
        "color-stop-angle": "<angle-percentage>{1,2}",
        "color-stop-length": "<length-percentage>{1,2}",
        "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
        combinator: "'>'|'+'|'~'|['||']",
        "common-lig-values": "[common-ligatures|no-common-ligatures]",
        "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
        "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
        "compositing-operator": "add|subtract|intersect|exclude",
        "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
        "compound-selector-list": "<compound-selector>#",
        "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
        "complex-selector-list": "<complex-selector>#",
        "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
        "contextual-alt-values": "[contextual|no-contextual]",
        "content-distribution": "space-between|space-around|space-evenly|stretch",
        "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>]+",
        "content-position": "center|start|end|flex-start|flex-end",
        "content-replacement": "<image>",
        "contrast()": "contrast( [<number-percentage>] )",
        counter: "<counter()>|<counters()>",
        "counter()": "counter( <counter-name> , <counter-style>? )",
        "counter-name": "<custom-ident>",
        "counter-style": "<counter-style-name>|symbols( )",
        "counter-style-name": "<custom-ident>",
        "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
        "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
        "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
        "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
        "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
        "display-box": "contents|none",
        "display-inside": "flow|flow-root|table|flex|grid|ruby",
        "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
        "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
        "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
        "display-outside": "block|inline|run-in",
        "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
        "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
        "east-asian-width-values": "[full-width|proportional-width]",
        "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
        "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
        "ending-shape": "circle|ellipse",
        "env()": "env( <custom-ident> , <declaration-value>? )",
        "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
        "family-name": "<string>|<custom-ident>+",
        "feature-tag-value": "<string> [<integer>|on|off]?",
        "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
        "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
        "feature-value-block-list": "<feature-value-block>+",
        "feature-value-declaration": "<custom-ident> : <integer>+ ;",
        "feature-value-declaration-list": "<feature-value-declaration>",
        "feature-value-name": "<custom-ident>",
        "fill-rule": "nonzero|evenodd",
        "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
        "filter-function-list": "[<filter-function>|<url>]+",
        "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
        "fit-content()": "fit-content( [<length>|<percentage>] )",
        "fixed-breadth": "<length-percentage>",
        "fixed-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
        "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
        "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
        "font-variant-css21": "[normal|small-caps]",
        "font-weight-absolute": "normal|bold|<number [1,1000]>",
        "frequency-percentage": "<frequency>|<percentage>",
        "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
        "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
        "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
        "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
        gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<-legacy-gradient>",
        "grayscale()": "grayscale( <number-percentage> )",
        "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
        "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
        "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
        "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
        hue: "<number>|<angle>",
        "hue-rotate()": "hue-rotate( <angle> )",
        "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
        image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
        "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
        "image-set()": "image-set( <image-set-option># )",
        "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
        "image-src": "<url>|<string>",
        "image-tags": "ltr|rtl",
        "inflexible-breadth": "<length>|<percentage>|min-content|max-content|auto",
        "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
        "invert()": "invert( <number-percentage> )",
        "keyframes-name": "<custom-ident>|<string>",
        "keyframe-block": "<keyframe-selector># { <declaration-list> }",
        "keyframe-block-list": "<keyframe-block>+",
        "keyframe-selector": "from|to|<percentage>",
        "layer()": "layer( <layer-name> )",
        "leader()": "leader( <leader-type> )",
        "leader-type": "dotted|solid|space|<string>",
        "length-percentage": "<length>|<percentage>",
        "line-names": "'[' <custom-ident>* ']'",
        "line-name-list": "[<line-names>|<name-repeat>]+",
        "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
        "line-width": "<length>|thin|medium|thick",
        "linear-color-hint": "<length-percentage>",
        "linear-color-stop": "<color> <color-stop-length>?",
        "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
        "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
        "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
        "mask-reference": "none|<image>|<mask-source>",
        "mask-source": "<url>",
        "masking-mode": "alpha|luminance|match-source",
        "matrix()": "matrix( <number>#{6} )",
        "matrix3d()": "matrix3d( <number>#{16} )",
        "max()": "max( <calc-sum># )",
        "media-and": "<media-in-parens> [and <media-in-parens>]+",
        "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
        "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
        "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
        "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
        "media-not": "not <media-in-parens>",
        "media-or": "<media-in-parens> [or <media-in-parens>]+",
        "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
        "media-query-list": "<media-query>#",
        "media-type": "<ident>",
        "mf-boolean": "<mf-name>",
        "mf-name": "<ident>",
        "mf-plain": "<mf-name> : <mf-value>",
        "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
        "mf-value": "<number>|<dimension>|<ident>|<ratio>",
        "min()": "min( <calc-sum># )",
        "minmax()": "minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )",
        "name-repeat": "repeat( [<positive-integer>|auto-fill] , <line-names>+ )",
        "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
        "namespace-prefix": "<ident>",
        "ns-prefix": "[<ident-token>|'*']? '|'",
        "number-percentage": "<number>|<percentage>",
        "numeric-figure-values": "[lining-nums|oldstyle-nums]",
        "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
        "numeric-spacing-values": "[proportional-nums|tabular-nums]",
        nth: "<an-plus-b>|even|odd",
        "opacity()": "opacity( [<number-percentage>] )",
        "overflow-position": "unsafe|safe",
        "outline-radius": "<length>|<percentage>",
        "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
        "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
        "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
        "page-selector-list": "[<page-selector>#]?",
        "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
        "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
        "path()": "path( [<fill-rule> ,]? <string> )",
        "paint()": "paint( <ident> , <declaration-value>? )",
        "perspective()": "perspective( <length> )",
        "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
        position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
        "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
        "pseudo-element-selector": "':' <pseudo-class-selector>",
        "pseudo-page": ": [left|right|first|blank]",
        quote: "open-quote|close-quote|no-open-quote|no-close-quote",
        "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
        "relative-selector": "<combinator>? <complex-selector>",
        "relative-selector-list": "<relative-selector>#",
        "relative-size": "larger|smaller",
        "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
        "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
        "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
        "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
        "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
        "rotate()": "rotate( [<angle>|<zero>] )",
        "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
        "rotateX()": "rotateX( [<angle>|<zero>] )",
        "rotateY()": "rotateY( [<angle>|<zero>] )",
        "rotateZ()": "rotateZ( [<angle>|<zero>] )",
        "saturate()": "saturate( <number-percentage> )",
        "scale()": "scale( <number> , <number>? )",
        "scale3d()": "scale3d( <number> , <number> , <number> )",
        "scaleX()": "scaleX( <number> )",
        "scaleY()": "scaleY( <number> )",
        "scaleZ()": "scaleZ( <number> )",
        "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
        "shape-radius": "<length-percentage>|closest-side|farthest-side",
        "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
        "skewX()": "skewX( [<angle>|<zero>] )",
        "skewY()": "skewY( [<angle>|<zero>] )",
        "sepia()": "sepia( <number-percentage> )",
        shadow: "inset?&&<length>{2,4}&&<color>?",
        "shadow-t": "[<length>{2,3}&&<color>?]",
        shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
        "shape-box": "<box>|margin-box",
        "side-or-corner": "[left|right]||[top|bottom]",
        "single-animation": "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
        "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
        "single-animation-fill-mode": "none|forwards|backwards|both",
        "single-animation-iteration-count": "infinite|<number>",
        "single-animation-play-state": "running|paused",
        "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
        "single-transition-property": "all|<custom-ident>",
        size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
        "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
        "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
        "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
        "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
        "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
        "supports-feature": "<supports-decl>|<supports-selector-fn>",
        "supports-decl": "( <declaration> )",
        "supports-selector-fn": "selector( <complex-selector> )",
        symbol: "<string>|<image>|<custom-ident>",
        target: "<target-counter()>|<target-counters()>|<target-text()>",
        "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
        "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
        "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
        "time-percentage": "<time>|<percentage>",
        "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
        "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
        "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
        "track-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <track-size>]+ <line-names>? )",
        "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )",
        "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
        "transform-list": "<transform-function>+",
        "translate()": "translate( <length-percentage> , <length-percentage>? )",
        "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
        "translateX()": "translateX( <length-percentage> )",
        "translateY()": "translateY( <length-percentage> )",
        "translateZ()": "translateZ( <length> )",
        "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
        "type-selector": "<wq-name>|<ns-prefix>? '*'",
        "var()": "var( <custom-property-name> , <declaration-value>? )",
        "viewport-length": "auto|<length-percentage>",
        "visual-box": "content-box|padding-box|border-box",
        "wq-name": "<ns-prefix>? <ident-token>",
        "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
        "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
        "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
        "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
        "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
        "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
        "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
        "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
        "-legacy-radial-gradient-shape": "circle|ellipse",
        "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
        "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
        "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
        "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
        "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
        "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
        "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
        "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
        "-webkit-gradient-radius": "<length>|<percentage>",
        "-webkit-gradient-type": "linear|radial",
        "-webkit-mask-box-repeat": "repeat|stretch|round",
        "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
        "-ms-filter-function-list": "<-ms-filter-function>+",
        "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
        "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
        "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
        "-ms-filter": "<string>",
        age: "child|young|old",
        "attr-name": "<wq-name>",
        "attr-fallback": "<any-value>",
        "border-radius": "<length-percentage>{1,2}",
        bottom: "<length>|auto",
        "generic-voice": "[<age>? <gender> <integer>?]",
        gender: "male|female|neutral",
        left: "<length>|auto",
        "layer-name": "<ident> ['.' <ident>]*",
        "mask-image": "<mask-reference>#",
        paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
        ratio: "<integer> / <integer>",
        right: "<length>|auto",
        "svg-length": "<percentage>|<length>|<number>",
        "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
        "single-animation-timeline": "auto|none|<timeline-name>",
        "timeline-name": "<custom-ident>|<string>",
        top: "<length>|auto",
        "track-group": "'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>",
        "track-list-v0": "[<string>* <track-group> <string>*]+|none",
        "track-minmax": "minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content",
        x: "<number>",
        y: "<number>",
        declaration: "<ident-token> : <declaration-value>? ['!' important]?",
        "declaration-list": "[<declaration>? ';']* <declaration>?",
        url: "url( <string> <url-modifier>* )|<url-token>",
        "url-modifier": "<ident>|<function-token> <any-value> )",
        "number-zero-one": "<number [0,1]>",
        "number-one-or-greater": "<number [1,∞]>",
        "positive-integer": "<integer [0,∞]>",
        "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
      },
      properties: {
        "--*": "<declaration-value>",
        "-ms-accelerator": "false|true",
        "-ms-block-progression": "tb|rl|bt|lr",
        "-ms-content-zoom-chaining": "none|chained",
        "-ms-content-zooming": "none|zoom",
        "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
        "-ms-content-zoom-limit-max": "<percentage>",
        "-ms-content-zoom-limit-min": "<percentage>",
        "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
        "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
        "-ms-content-zoom-snap-type": "none|proximity|mandatory",
        "-ms-filter": "<string>",
        "-ms-flow-from": "[none|<custom-ident>]#",
        "-ms-flow-into": "[none|<custom-ident>]#",
        "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
        "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
        "-ms-high-contrast-adjust": "auto|none",
        "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
        "-ms-hyphenate-limit-lines": "no-limit|<integer>",
        "-ms-hyphenate-limit-zone": "<percentage>|<length>",
        "-ms-ime-align": "auto|after",
        "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
        "-ms-scrollbar-3dlight-color": "<color>",
        "-ms-scrollbar-arrow-color": "<color>",
        "-ms-scrollbar-base-color": "<color>",
        "-ms-scrollbar-darkshadow-color": "<color>",
        "-ms-scrollbar-face-color": "<color>",
        "-ms-scrollbar-highlight-color": "<color>",
        "-ms-scrollbar-shadow-color": "<color>",
        "-ms-scrollbar-track-color": "<color>",
        "-ms-scroll-chaining": "chained|none",
        "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
        "-ms-scroll-limit-x-max": "auto|<length>",
        "-ms-scroll-limit-x-min": "<length>",
        "-ms-scroll-limit-y-max": "auto|<length>",
        "-ms-scroll-limit-y-min": "<length>",
        "-ms-scroll-rails": "none|railed",
        "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
        "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
        "-ms-scroll-snap-type": "none|proximity|mandatory",
        "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
        "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
        "-ms-scroll-translation": "none|vertical-to-horizontal",
        "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
        "-ms-touch-select": "grippers|none",
        "-ms-user-select": "none|element|text",
        "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
        "-ms-wrap-margin": "<length>",
        "-ms-wrap-through": "wrap|none",
        "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
        "-moz-binding": "<url>|none",
        "-moz-border-bottom-colors": "<color>+|none",
        "-moz-border-left-colors": "<color>+|none",
        "-moz-border-right-colors": "<color>+|none",
        "-moz-border-top-colors": "<color>+|none",
        "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
        "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
        "-moz-force-broken-image-icon": "0|1",
        "-moz-image-region": "<shape>|auto",
        "-moz-orient": "inline|block|horizontal|vertical",
        "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
        "-moz-outline-radius-bottomleft": "<outline-radius>",
        "-moz-outline-radius-bottomright": "<outline-radius>",
        "-moz-outline-radius-topleft": "<outline-radius>",
        "-moz-outline-radius-topright": "<outline-radius>",
        "-moz-stack-sizing": "ignore|stretch-to-fit",
        "-moz-text-blink": "none|blink",
        "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
        "-moz-user-input": "auto|none|enabled|disabled",
        "-moz-user-modify": "read-only|read-write|write-only",
        "-moz-window-dragging": "drag|no-drag",
        "-moz-window-shadow": "default|menu|tooltip|sheet|none",
        "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
        "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
        "-webkit-border-before-color": "<color>",
        "-webkit-border-before-style": "<'border-style'>",
        "-webkit-border-before-width": "<'border-width'>",
        "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
        "-webkit-line-clamp": "none|<integer>",
        "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
        "-webkit-mask-attachment": "<attachment>#",
        "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
        "-webkit-mask-composite": "<composite-style>#",
        "-webkit-mask-image": "<mask-reference>#",
        "-webkit-mask-origin": "[<box>|border|padding|content]#",
        "-webkit-mask-position": "<position>#",
        "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
        "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
        "-webkit-mask-repeat": "<repeat-style>#",
        "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
        "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
        "-webkit-mask-size": "<bg-size>#",
        "-webkit-overflow-scrolling": "auto|touch",
        "-webkit-tap-highlight-color": "<color>",
        "-webkit-text-fill-color": "<color>",
        "-webkit-text-stroke": "<length>||<color>",
        "-webkit-text-stroke-color": "<color>",
        "-webkit-text-stroke-width": "<length>",
        "-webkit-touch-callout": "default|none",
        "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
        "accent-color": "auto|<color>",
        "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
        "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
        "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
        "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
        all: "initial|inherit|unset|revert",
        animation: "<single-animation>#",
        "animation-delay": "<time>#",
        "animation-direction": "<single-animation-direction>#",
        "animation-duration": "<time>#",
        "animation-fill-mode": "<single-animation-fill-mode>#",
        "animation-iteration-count": "<single-animation-iteration-count>#",
        "animation-name": "[none|<keyframes-name>]#",
        "animation-play-state": "<single-animation-play-state>#",
        "animation-timing-function": "<easing-function>#",
        "animation-timeline": "<single-animation-timeline>#",
        appearance: "none|auto|textfield|menulist-button|<compat-auto>",
        "aspect-ratio": "auto|<ratio>",
        azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
        "backdrop-filter": "none|<filter-function-list>",
        "backface-visibility": "visible|hidden",
        background: "[<bg-layer> ,]* <final-bg-layer>",
        "background-attachment": "<attachment>#",
        "background-blend-mode": "<blend-mode>#",
        "background-clip": "<box>#",
        "background-color": "<color>",
        "background-image": "<bg-image>#",
        "background-origin": "<box>#",
        "background-position": "<bg-position>#",
        "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
        "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
        "background-repeat": "<repeat-style>#",
        "background-size": "<bg-size>#",
        "block-overflow": "clip|ellipsis|<string>",
        "block-size": "<'width'>",
        border: "<line-width>||<line-style>||<color>",
        "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
        "border-block-color": "<'border-top-color'>{1,2}",
        "border-block-style": "<'border-top-style'>",
        "border-block-width": "<'border-top-width'>",
        "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
        "border-block-end-color": "<'border-top-color'>",
        "border-block-end-style": "<'border-top-style'>",
        "border-block-end-width": "<'border-top-width'>",
        "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
        "border-block-start-color": "<'border-top-color'>",
        "border-block-start-style": "<'border-top-style'>",
        "border-block-start-width": "<'border-top-width'>",
        "border-bottom": "<line-width>||<line-style>||<color>",
        "border-bottom-color": "<'border-top-color'>",
        "border-bottom-left-radius": "<length-percentage>{1,2}",
        "border-bottom-right-radius": "<length-percentage>{1,2}",
        "border-bottom-style": "<line-style>",
        "border-bottom-width": "<line-width>",
        "border-collapse": "collapse|separate",
        "border-color": "<color>{1,4}",
        "border-end-end-radius": "<length-percentage>{1,2}",
        "border-end-start-radius": "<length-percentage>{1,2}",
        "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
        "border-image-outset": "[<length>|<number>]{1,4}",
        "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
        "border-image-slice": "<number-percentage>{1,4}&&fill?",
        "border-image-source": "none|<image>",
        "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
        "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
        "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
        "border-inline-color": "<'border-top-color'>{1,2}",
        "border-inline-style": "<'border-top-style'>",
        "border-inline-width": "<'border-top-width'>",
        "border-inline-end-color": "<'border-top-color'>",
        "border-inline-end-style": "<'border-top-style'>",
        "border-inline-end-width": "<'border-top-width'>",
        "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
        "border-inline-start-color": "<'border-top-color'>",
        "border-inline-start-style": "<'border-top-style'>",
        "border-inline-start-width": "<'border-top-width'>",
        "border-left": "<line-width>||<line-style>||<color>",
        "border-left-color": "<color>",
        "border-left-style": "<line-style>",
        "border-left-width": "<line-width>",
        "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
        "border-right": "<line-width>||<line-style>||<color>",
        "border-right-color": "<color>",
        "border-right-style": "<line-style>",
        "border-right-width": "<line-width>",
        "border-spacing": "<length> <length>?",
        "border-start-end-radius": "<length-percentage>{1,2}",
        "border-start-start-radius": "<length-percentage>{1,2}",
        "border-style": "<line-style>{1,4}",
        "border-top": "<line-width>||<line-style>||<color>",
        "border-top-color": "<color>",
        "border-top-left-radius": "<length-percentage>{1,2}",
        "border-top-right-radius": "<length-percentage>{1,2}",
        "border-top-style": "<line-style>",
        "border-top-width": "<line-width>",
        "border-width": "<line-width>{1,4}",
        bottom: "<length>|<percentage>|auto",
        "box-align": "start|center|end|baseline|stretch",
        "box-decoration-break": "slice|clone",
        "box-direction": "normal|reverse|inherit",
        "box-flex": "<number>",
        "box-flex-group": "<integer>",
        "box-lines": "single|multiple",
        "box-ordinal-group": "<integer>",
        "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
        "box-pack": "start|center|end|justify",
        "box-shadow": "none|<shadow>#",
        "box-sizing": "content-box|border-box",
        "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
        "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
        "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
        "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
        "caret-color": "auto|<color>",
        clear: "none|left|right|both|inline-start|inline-end",
        clip: "<shape>|auto",
        "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
        color: "<color>",
        "print-color-adjust": "economy|exact",
        "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
        "column-count": "<integer>|auto",
        "column-fill": "auto|balance|balance-all",
        "column-gap": "normal|<length-percentage>",
        "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
        "column-rule-color": "<color>",
        "column-rule-style": "<'border-style'>",
        "column-rule-width": "<'border-width'>",
        "column-span": "none|all",
        "column-width": "<length>|auto",
        columns: "<'column-width'>||<'column-count'>",
        contain: "none|strict|content|[size||layout||style||paint]",
        content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
        "content-visibility": "visible|auto|hidden",
        "counter-increment": "[<counter-name> <integer>?]+|none",
        "counter-reset": "[<counter-name> <integer>?]+|none",
        "counter-set": "[<counter-name> <integer>?]+|none",
        cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
        direction: "ltr|rtl",
        display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
        "empty-cells": "show|hide",
        filter: "none|<filter-function-list>|<-ms-filter-function-list>",
        flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
        "flex-basis": "content|<'width'>",
        "flex-direction": "row|row-reverse|column|column-reverse",
        "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
        "flex-grow": "<number>",
        "flex-shrink": "<number>",
        "flex-wrap": "nowrap|wrap|wrap-reverse",
        float: "left|right|none|inline-start|inline-end",
        font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
        "font-family": "[<family-name>|<generic-family>]#",
        "font-feature-settings": "normal|<feature-tag-value>#",
        "font-kerning": "auto|normal|none",
        "font-language-override": "normal|<string>",
        "font-optical-sizing": "auto|none",
        "font-variation-settings": "normal|[<string> <number>]#",
        "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
        "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
        "font-smooth": "auto|never|always|<absolute-size>|<length>",
        "font-stretch": "<font-stretch-absolute>",
        "font-style": "normal|italic|oblique <angle>?",
        "font-synthesis": "none|[weight||style||small-caps]",
        "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
        "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
        "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
        "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
        "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
        "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
        "font-variant-position": "normal|sub|super",
        "font-weight": "<font-weight-absolute>|bolder|lighter",
        "forced-color-adjust": "auto|none",
        gap: "<'row-gap'> <'column-gap'>?",
        grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
        "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
        "grid-auto-columns": "<track-size>+",
        "grid-auto-flow": "[row|column]||dense",
        "grid-auto-rows": "<track-size>+",
        "grid-column": "<grid-line> [/ <grid-line>]?",
        "grid-column-end": "<grid-line>",
        "grid-column-gap": "<length-percentage>",
        "grid-column-start": "<grid-line>",
        "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
        "grid-row": "<grid-line> [/ <grid-line>]?",
        "grid-row-end": "<grid-line>",
        "grid-row-gap": "<length-percentage>",
        "grid-row-start": "<grid-line>",
        "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
        "grid-template-areas": "none|<string>+",
        "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
        "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
        "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
        height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
        "hyphenate-character": "auto|<string>",
        hyphens: "none|manual|auto",
        "image-orientation": "from-image|<angle>|[<angle>? flip]",
        "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
        "image-resolution": "[from-image||<resolution>]&&snap?",
        "ime-mode": "auto|normal|active|inactive|disabled",
        "initial-letter": "normal|[<number> <integer>?]",
        "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
        "inline-size": "<'width'>",
        "input-security": "auto|none",
        inset: "<'top'>{1,4}",
        "inset-block": "<'top'>{1,2}",
        "inset-block-end": "<'top'>",
        "inset-block-start": "<'top'>",
        "inset-inline": "<'top'>{1,2}",
        "inset-inline-end": "<'top'>",
        "inset-inline-start": "<'top'>",
        isolation: "auto|isolate",
        "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
        "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
        "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
        "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
        left: "<length>|<percentage>|auto",
        "letter-spacing": "normal|<length-percentage>",
        "line-break": "auto|loose|normal|strict|anywhere",
        "line-clamp": "none|<integer>",
        "line-height": "normal|<number>|<length>|<percentage>",
        "line-height-step": "<length>",
        "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
        "list-style-image": "<image>|none",
        "list-style-position": "inside|outside",
        "list-style-type": "<counter-style>|<string>|none",
        margin: "[<length>|<percentage>|auto]{1,4}",
        "margin-block": "<'margin-left'>{1,2}",
        "margin-block-end": "<'margin-left'>",
        "margin-block-start": "<'margin-left'>",
        "margin-bottom": "<length>|<percentage>|auto",
        "margin-inline": "<'margin-left'>{1,2}",
        "margin-inline-end": "<'margin-left'>",
        "margin-inline-start": "<'margin-left'>",
        "margin-left": "<length>|<percentage>|auto",
        "margin-right": "<length>|<percentage>|auto",
        "margin-top": "<length>|<percentage>|auto",
        "margin-trim": "none|in-flow|all",
        mask: "<mask-layer>#",
        "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
        "mask-border-mode": "luminance|alpha",
        "mask-border-outset": "[<length>|<number>]{1,4}",
        "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
        "mask-border-slice": "<number-percentage>{1,4} fill?",
        "mask-border-source": "none|<image>",
        "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
        "mask-clip": "[<geometry-box>|no-clip]#",
        "mask-composite": "<compositing-operator>#",
        "mask-image": "<mask-reference>#",
        "mask-mode": "<masking-mode>#",
        "mask-origin": "<geometry-box>#",
        "mask-position": "<position>#",
        "mask-repeat": "<repeat-style>#",
        "mask-size": "<bg-size>#",
        "mask-type": "luminance|alpha",
        "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
        "math-style": "normal|compact",
        "max-block-size": "<'max-width'>",
        "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
        "max-inline-size": "<'max-width'>",
        "max-lines": "none|<integer>",
        "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
        "min-block-size": "<'min-width'>",
        "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
        "min-inline-size": "<'min-width'>",
        "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
        "mix-blend-mode": "<blend-mode>",
        "object-fit": "fill|contain|cover|none|scale-down",
        "object-position": "<position>",
        offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
        "offset-anchor": "auto|<position>",
        "offset-distance": "<length-percentage>",
        "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
        "offset-position": "auto|<position>",
        "offset-rotate": "[auto|reverse]||<angle>",
        opacity: "<alpha-value>",
        order: "<integer>",
        orphans: "<integer>",
        outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
        "outline-color": "<color>|invert",
        "outline-offset": "<length>",
        "outline-style": "auto|<'border-style'>",
        "outline-width": "<line-width>",
        overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
        "overflow-anchor": "auto|none",
        "overflow-block": "visible|hidden|clip|scroll|auto",
        "overflow-clip-box": "padding-box|content-box",
        "overflow-clip-margin": "<visual-box>||<length [0,∞]>",
        "overflow-inline": "visible|hidden|clip|scroll|auto",
        "overflow-wrap": "normal|break-word|anywhere",
        "overflow-x": "visible|hidden|clip|scroll|auto",
        "overflow-y": "visible|hidden|clip|scroll|auto",
        "overscroll-behavior": "[contain|none|auto]{1,2}",
        "overscroll-behavior-block": "contain|none|auto",
        "overscroll-behavior-inline": "contain|none|auto",
        "overscroll-behavior-x": "contain|none|auto",
        "overscroll-behavior-y": "contain|none|auto",
        padding: "[<length>|<percentage>]{1,4}",
        "padding-block": "<'padding-left'>{1,2}",
        "padding-block-end": "<'padding-left'>",
        "padding-block-start": "<'padding-left'>",
        "padding-bottom": "<length>|<percentage>",
        "padding-inline": "<'padding-left'>{1,2}",
        "padding-inline-end": "<'padding-left'>",
        "padding-inline-start": "<'padding-left'>",
        "padding-left": "<length>|<percentage>",
        "padding-right": "<length>|<percentage>",
        "padding-top": "<length>|<percentage>",
        "page-break-after": "auto|always|avoid|left|right|recto|verso",
        "page-break-before": "auto|always|avoid|left|right|recto|verso",
        "page-break-inside": "auto|avoid",
        "paint-order": "normal|[fill||stroke||markers]",
        perspective: "none|<length>",
        "perspective-origin": "<position>",
        "place-content": "<'align-content'> <'justify-content'>?",
        "place-items": "<'align-items'> <'justify-items'>?",
        "place-self": "<'align-self'> <'justify-self'>?",
        "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
        position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
        quotes: "none|auto|[<string> <string>]+",
        resize: "none|both|horizontal|vertical|block|inline",
        right: "<length>|<percentage>|auto",
        rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
        "row-gap": "normal|<length-percentage>",
        "ruby-align": "start|center|space-between|space-around",
        "ruby-merge": "separate|collapse|auto",
        "ruby-position": "[alternate||[over|under]]|inter-character",
        scale: "none|<number>{1,3}",
        "scrollbar-color": "auto|<color>{2}",
        "scrollbar-gutter": "auto|stable&&both-edges?",
        "scrollbar-width": "auto|thin|none",
        "scroll-behavior": "auto|smooth",
        "scroll-margin": "<length>{1,4}",
        "scroll-margin-block": "<length>{1,2}",
        "scroll-margin-block-start": "<length>",
        "scroll-margin-block-end": "<length>",
        "scroll-margin-bottom": "<length>",
        "scroll-margin-inline": "<length>{1,2}",
        "scroll-margin-inline-start": "<length>",
        "scroll-margin-inline-end": "<length>",
        "scroll-margin-left": "<length>",
        "scroll-margin-right": "<length>",
        "scroll-margin-top": "<length>",
        "scroll-padding": "[auto|<length-percentage>]{1,4}",
        "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
        "scroll-padding-block-start": "auto|<length-percentage>",
        "scroll-padding-block-end": "auto|<length-percentage>",
        "scroll-padding-bottom": "auto|<length-percentage>",
        "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
        "scroll-padding-inline-start": "auto|<length-percentage>",
        "scroll-padding-inline-end": "auto|<length-percentage>",
        "scroll-padding-left": "auto|<length-percentage>",
        "scroll-padding-right": "auto|<length-percentage>",
        "scroll-padding-top": "auto|<length-percentage>",
        "scroll-snap-align": "[none|start|end|center]{1,2}",
        "scroll-snap-coordinate": "none|<position>#",
        "scroll-snap-destination": "<position>",
        "scroll-snap-points-x": "none|repeat( <length-percentage> )",
        "scroll-snap-points-y": "none|repeat( <length-percentage> )",
        "scroll-snap-stop": "normal|always",
        "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
        "scroll-snap-type-x": "none|mandatory|proximity",
        "scroll-snap-type-y": "none|mandatory|proximity",
        "shape-image-threshold": "<alpha-value>",
        "shape-margin": "<length-percentage>",
        "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
        "tab-size": "<integer>|<length>",
        "table-layout": "auto|fixed",
        "text-align": "start|end|left|right|center|justify|match-parent",
        "text-align-last": "auto|start|end|left|right|center|justify",
        "text-combine-upright": "none|all|[digits <integer>?]",
        "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
        "text-decoration-color": "<color>",
        "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
        "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
        "text-decoration-skip-ink": "auto|all|none",
        "text-decoration-style": "solid|double|dotted|dashed|wavy",
        "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
        "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
        "text-emphasis-color": "<color>",
        "text-emphasis-position": "[over|under]&&[right|left]",
        "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
        "text-indent": "<length-percentage>&&hanging?&&each-line?",
        "text-justify": "auto|inter-character|inter-word|none",
        "text-orientation": "mixed|upright|sideways",
        "text-overflow": "[clip|ellipsis|<string>]{1,2}",
        "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
        "text-shadow": "none|<shadow-t>#",
        "text-size-adjust": "none|auto|<percentage>",
        "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
        "text-underline-offset": "auto|<length>|<percentage>",
        "text-underline-position": "auto|from-font|[under||[left|right]]",
        top: "<length>|<percentage>|auto",
        "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
        transform: "none|<transform-list>",
        "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
        "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
        "transform-style": "flat|preserve-3d",
        transition: "<single-transition>#",
        "transition-delay": "<time>#",
        "transition-duration": "<time>#",
        "transition-property": "none|<single-transition-property>#",
        "transition-timing-function": "<easing-function>#",
        translate: "none|<length-percentage> [<length-percentage> <length>?]?",
        "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
        "user-select": "auto|text|none|contain|all",
        "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
        visibility: "visible|hidden|collapse",
        "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
        widows: "<integer>",
        width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
        "will-change": "auto|<animateable-feature>#",
        "word-break": "normal|break-all|keep-all|break-word",
        "word-spacing": "normal|<length>",
        "word-wrap": "normal|break-word",
        "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
        "z-index": "auto|<integer>",
        zoom: "normal|reset|<number>|<percentage>",
        "-moz-background-clip": "padding|border",
        "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
        "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
        "-moz-border-radius-topleft": "<'border-top-left-radius'>",
        "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
        "-moz-control-character-visibility": "visible|hidden",
        "-moz-osx-font-smoothing": "auto|grayscale",
        "-moz-user-select": "none|text|all|-moz-none",
        "-ms-flex-align": "start|end|center|baseline|stretch",
        "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
        "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
        "-ms-flex-negative": "<'flex-shrink'>",
        "-ms-flex-pack": "start|end|center|justify|distribute",
        "-ms-flex-order": "<integer>",
        "-ms-flex-positive": "<'flex-grow'>",
        "-ms-flex-preferred-size": "<'flex-basis'>",
        "-ms-interpolation-mode": "nearest-neighbor|bicubic",
        "-ms-grid-column-align": "start|end|center|stretch",
        "-ms-grid-row-align": "start|end|center|stretch",
        "-ms-hyphenate-limit-last": "none|always|column|page|spread",
        "-webkit-background-clip": "[<box>|border|padding|content|text]#",
        "-webkit-column-break-after": "always|auto|avoid",
        "-webkit-column-break-before": "always|auto|avoid",
        "-webkit-column-break-inside": "always|auto|avoid",
        "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
        "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
        "-webkit-print-color-adjust": "economy|exact",
        "-webkit-text-security": "none|circle|disc|square",
        "-webkit-user-drag": "none|element|auto",
        "-webkit-user-select": "auto|none|text|all",
        "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
        "baseline-shift": "baseline|sub|super|<svg-length>",
        behavior: "<url>+",
        "clip-rule": "nonzero|evenodd",
        cue: "<'cue-before'> <'cue-after'>?",
        "cue-after": "<url> <decibel>?|none",
        "cue-before": "<url> <decibel>?|none",
        "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
        fill: "<paint>",
        "fill-opacity": "<number-zero-one>",
        "fill-rule": "nonzero|evenodd",
        "glyph-orientation-horizontal": "<angle>",
        "glyph-orientation-vertical": "<angle>",
        kerning: "auto|<svg-length>",
        marker: "none|<url>",
        "marker-end": "none|<url>",
        "marker-mid": "none|<url>",
        "marker-start": "none|<url>",
        pause: "<'pause-before'> <'pause-after'>?",
        "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
        "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
        rest: "<'rest-before'> <'rest-after'>?",
        "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
        "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
        "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
        src: "[<url> [format( <string># )]?|local( <family-name> )]#",
        speak: "auto|none|normal",
        "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
        stroke: "<paint>",
        "stroke-dasharray": "none|[<svg-length>+]#",
        "stroke-dashoffset": "<svg-length>",
        "stroke-linecap": "butt|round|square",
        "stroke-linejoin": "miter|round|bevel",
        "stroke-miterlimit": "<number-one-or-greater>",
        "stroke-opacity": "<number-zero-one>",
        "stroke-width": "<svg-length>",
        "text-anchor": "start|middle|end",
        "unicode-range": "<urange>#",
        "voice-balance": "<number>|left|center|right|leftwards|rightwards",
        "voice-duration": "auto|<time>",
        "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
        "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
        "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
        "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
        "voice-stress": "normal|strong|moderate|none|reduced",
        "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
      },
      atrules: {
        charset: {
          prelude: "<string>",
          descriptors: null
        },
        "counter-style": {
          prelude: "<counter-style-name>",
          descriptors: {
            "additive-symbols": "[<integer>&&<symbol>]#",
            fallback: "<counter-style-name>",
            negative: "<symbol> <symbol>?",
            pad: "<integer>&&<symbol>",
            prefix: "<symbol>",
            range: "[[<integer>|infinite]{2}]#|auto",
            "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
            suffix: "<symbol>",
            symbols: "<symbol>+",
            system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
          }
        },
        document: {
          prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
          descriptors: null
        },
        "font-face": {
          prelude: null,
          descriptors: {
            "ascent-override": "normal|<percentage>",
            "descent-override": "normal|<percentage>",
            "font-display": "[auto|block|swap|fallback|optional]",
            "font-family": "<family-name>",
            "font-feature-settings": "normal|<feature-tag-value>#",
            "font-variation-settings": "normal|[<string> <number>]#",
            "font-stretch": "<font-stretch-absolute>{1,2}",
            "font-style": "normal|italic|oblique <angle>{0,2}",
            "font-weight": "<font-weight-absolute>{1,2}",
            "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
            "line-gap-override": "normal|<percentage>",
            "size-adjust": "<percentage>",
            src: "[<url> [format( <string># )]?|local( <family-name> )]#",
            "unicode-range": "<urange>#"
          }
        },
        "font-feature-values": {
          prelude: "<family-name>#",
          descriptors: null
        },
        import: {
          prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
          descriptors: null
        },
        keyframes: {
          prelude: "<keyframes-name>",
          descriptors: null
        },
        layer: {
          prelude: "[<layer-name>#|<layer-name>?]",
          descriptors: null
        },
        media: {
          prelude: "<media-query-list>",
          descriptors: null
        },
        namespace: {
          prelude: "<namespace-prefix>? [<string>|<url>]",
          descriptors: null
        },
        page: {
          prelude: "<page-selector-list>",
          descriptors: {
            bleed: "auto|<length>",
            marks: "none|[crop||cross]",
            size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
          }
        },
        property: {
          prelude: "<custom-property-name>",
          descriptors: {
            syntax: "<string>",
            inherits: "true|false",
            "initial-value": "<string>"
          }
        },
        "scroll-timeline": {
          prelude: "<timeline-name>",
          descriptors: null
        },
        supports: {
          prelude: "<supports-condition>",
          descriptors: null
        },
        viewport: {
          prelude: null,
          descriptors: {
            height: "<viewport-length>{1,2}",
            "max-height": "<viewport-length>",
            "max-width": "<viewport-length>",
            "max-zoom": "auto|<number>|<percentage>",
            "min-height": "<viewport-length>",
            "min-width": "<viewport-length>",
            "min-zoom": "auto|<number>|<percentage>",
            orientation: "auto|portrait|landscape",
            "user-zoom": "zoom|fixed",
            "viewport-fit": "auto|contain|cover",
            width: "<viewport-length>{1,2}",
            zoom: "auto|<number>|<percentage>"
          }
        }
      },
      node: ui
    },
    $c = {};
  gt($c, {
    AtrulePrelude: () => Yc,
    Selector: () => Jc,
    Value: () => Kc
  });
  function Gc(e) {
    switch (this.tokenType) {
      case 4:
        return this.Hash();
      case 18:
        return this.Operator();
      case 21:
        return this.Parentheses(this.readSequence, e.recognizer);
      case 19:
        return this.Brackets(this.readSequence, e.recognizer);
      case 5:
        return this.String();
      case 12:
        return this.Dimension();
      case 11:
        return this.Percentage();
      case 10:
        return this.Number();
      case 2:
        return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
      case 7:
        return this.Url();
      case 1:
        return this.cmpChar(this.tokenStart, 117) && this.cmpChar(this.tokenStart + 1, 43) ? this.UnicodeRange() : this.Identifier();
      case 9:
        {
          let e = this.charCodeAt(this.tokenStart);
          if (47 === e || 42 === e || 43 === e || 45 === e) return this.Operator();
          35 === e && this.error("Hex or identifier is expected", this.tokenStart + 1);
          break;
        }
    }
  }
  var Yc = {
    getNode: Gc
  };
  var Jc = {
    onWhiteSpace: function (e, t) {
      null !== t.last && "Combinator" !== t.last.type && null !== e && "Combinator" !== e.type && t.push({
        type: "Combinator",
        loc: null,
        name: " "
      });
    },
    getNode: function () {
      switch (this.tokenType) {
        case 19:
          return this.AttributeSelector();
        case 4:
          return this.IdSelector();
        case 16:
          return 16 === this.lookupType(1) ? this.PseudoElementSelector() : this.PseudoClassSelector();
        case 1:
          return this.TypeSelector();
        case 10:
        case 11:
          return this.Percentage();
        case 12:
          46 === this.charCodeAt(this.tokenStart) && this.error("Identifier is expected", this.tokenStart + 1);
          break;
        case 9:
          switch (this.charCodeAt(this.tokenStart)) {
            case 43:
            case 62:
            case 126:
            case 47:
              return this.Combinator();
            case 46:
              return this.ClassSelector();
            case 42:
            case 124:
              return this.TypeSelector();
            case 35:
              return this.IdSelector();
          }
      }
    }
  };
  function Qc(e) {
    return null !== e && "Operator" === e.type && ("-" === e.value[e.value.length - 1] || "+" === e.value[e.value.length - 1]);
  }
  var Kc = {
      getNode: Gc,
      onWhiteSpace: function (e, t) {
        Qc(e) && (e.value = " " + e.value), Qc(t.last) && (t.last.value += " ");
      },
      expression: function () {
        return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
      },
      var: function () {
        let e = this.createList();
        if (this.skipSC(), e.push(this.Identifier()), this.skipSC(), 18 === this.tokenType) {
          e.push(this.Operator());
          let t = this.tokenIndex,
            r = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
          if ("Value" === r.type && r.children.isEmpty) for (let e = t - this.tokenIndex; e <= 0; e++) if (13 === this.lookupType(e)) {
            r.children.appendData({
              type: "WhiteSpace",
              loc: null,
              value: " "
            });
            break;
          }
          e.push(r);
        }
        return e;
      }
    },
    Zc = {
      parse: {
        prelude() {
          let e = this.createList();
          switch (this.skipSC(), this.tokenType) {
            case 5:
              e.push(this.String());
              break;
            case 7:
            case 2:
              e.push(this.Url());
              break;
            default:
              this.error("String or url() is expected");
          }
          return (1 === this.lookupNonWSType(0) || 21 === this.lookupNonWSType(0)) && e.push(this.MediaQueryList()), e;
        },
        block: null
      }
    };
  function Xc() {
    return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
  }
  function eu() {
    return this.skipSC(), 1 === this.tokenType && 16 === this.lookupNonWSType(1) ? this.createSingleNodeList(this.Declaration()) : tu.call(this);
  }
  function tu() {
    let e,
      t = this.createList();
    this.skipSC();
    e: for (; !this.eof;) {
      switch (this.tokenType) {
        case 25:
        case 13:
          this.next();
          continue;
        case 2:
          e = this.Function(Xc, this.scope.AtrulePrelude);
          break;
        case 1:
          e = this.Identifier();
          break;
        case 21:
          e = this.Parentheses(eu, this.scope.AtrulePrelude);
          break;
        default:
          break e;
      }
      t.push(e);
    }
    return t;
  }
  var ru = {
      parse: {
        prelude() {
          let e = tu.call(this);
          return null === this.getFirstListNode(e) && this.error("Condition is expected"), e;
        },
        block() {
          return this.Block(!1);
        }
      }
    },
    nu = {
      "font-face": {
        parse: {
          prelude: null,
          block() {
            return this.Block(!0);
          }
        }
      },
      import: Zc,
      media: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.MediaQueryList());
          },
          block() {
            return this.Block(!1);
          }
        }
      },
      page: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.SelectorList());
          },
          block() {
            return this.Block(!0);
          }
        }
      },
      supports: ru
    },
    ou = {
      parse() {
        return this.createSingleNodeList(this.SelectorList());
      }
    },
    iu = {
      parse() {
        return this.createSingleNodeList(this.Identifier());
      }
    },
    au = {
      parse() {
        return this.createSingleNodeList(this.Nth());
      }
    },
    su = {
      dir: iu,
      has: ou,
      lang: iu,
      matches: ou,
      is: ou,
      "-moz-any": ou,
      "-webkit-any": ou,
      where: ou,
      not: ou,
      "nth-child": au,
      "nth-last-child": au,
      "nth-last-of-type": au,
      "nth-of-type": au,
      slotted: {
        parse() {
          return this.createSingleNodeList(this.Selector());
        }
      }
    },
    lu = {};
  gt(lu, {
    AnPlusB: () => xi,
    Atrule: () => Ii,
    AtrulePrelude: () => Oi,
    AttributeSelector: () => Hi,
    Block: () => Xi,
    Brackets: () => oa,
    CDC: () => ca,
    CDO: () => ma,
    ClassSelector: () => ka,
    Combinator: () => Aa,
    Comment: () => _a,
    Declaration: () => Da,
    DeclarationList: () => $a,
    Dimension: () => Ka,
    Function: () => ns,
    Hash: () => cs,
    IdSelector: () => ks,
    Identifier: () => ms,
    MediaFeature: () => As,
    MediaQuery: () => _s,
    MediaQueryList: () => Ps,
    Nth: () => Fs,
    Number: () => Vs,
    Operator: () => Js,
    Parentheses: () => el,
    Percentage: () => il,
    PseudoClassSelector: () => hl,
    PseudoElementSelector: () => yl,
    Ratio: () => El,
    Raw: () => _l,
    Rule: () => Ul,
    Selector: () => jl,
    SelectorList: () => Yl,
    String: () => rc,
    StyleSheet: () => cc,
    TypeSelector: () => fc,
    UnicodeRange: () => Ac,
    Url: () => Nc,
    Value: () => Uc,
    WhiteSpace: () => Hc
  });
  var cu = {
      parseContext: {
        default: "StyleSheet",
        stylesheet: "StyleSheet",
        atrule: "Atrule",
        atrulePrelude: function (e) {
          return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
        },
        mediaQueryList: "MediaQueryList",
        mediaQuery: "MediaQuery",
        rule: "Rule",
        selectorList: "SelectorList",
        selector: "Selector",
        block: function () {
          return this.Block(!0);
        },
        declarationList: "DeclarationList",
        declaration: "Declaration",
        value: "Value"
      },
      scope: $c,
      atrule: nu,
      pseudo: su,
      node: lu
    },
    uu = ci({
      ...Wc,
      ...cu,
      ...{
        node: ui
      }
    });
  var hu = {};
  gt(hu, {
    decode: () => du,
    encode: () => pu
  });
  function du(e) {
    let t = e.length - 1,
      r = "";
    for (let n = 0; n < e.length; n++) {
      let o = e.charCodeAt(n);
      if (92 === o) {
        if (n === t) break;
        if (o = e.charCodeAt(++n), or(92, o)) {
          let t = n - 1,
            o = yr(e, t);
          n = o - 1, r += wr(e.substring(t + 1, o));
        } else 13 === o && 10 === e.charCodeAt(n + 1) && n++;
      } else r += e[n];
    }
    return r;
  }
  function pu(e) {
    let t = "";
    if (1 === e.length && 45 === e.charCodeAt(0)) return "\\-";
    for (let r = 0; r < e.length; r++) {
      let n = e.charCodeAt(r);
      0 !== n ? n <= 31 || 127 === n || n >= 48 && n <= 57 && (0 === r || 1 === r && 45 === e.charCodeAt(0)) ? t += "\\" + n.toString(16) + " " : er(n) ? t += e.charAt(r) : t += "\\" + e.charAt(r) : t += "�";
    }
    return t;
  }
  var {
      tokenize: mu,
      parse: fu,
      generate: gu,
      lexer: yu,
      createLexer: bu,
      walk: ku,
      find: vu,
      findLast: wu,
      findAll: xu,
      toPlainObject: Eu,
      fromPlainObject: Au,
      fork: Su
    } = uu,
    Tu = Object.freeze({
      __proto__: null,
      Lexer: Zo,
      List: Lr,
      TokenStream: Rr,
      clone: function e(t) {
        let r = {};
        for (let n in t) {
          let o = t[n];
          o && (Array.isArray(o) || o instanceof Lr ? o = o.map(e) : o.constructor === Object && (o = e(o))), r[n] = o;
        }
        return r;
      },
      createLexer: bu,
      createSyntax: ci,
      definitionSyntax: Yn,
      find: vu,
      findAll: xu,
      findLast: wu,
      fork: Su,
      fromPlainObject: Au,
      generate: gu,
      ident: hu,
      isCustomProperty: En,
      keyword: vn,
      lexer: yu,
      parse: fu,
      property: wn,
      string: Kl,
      toPlainObject: Eu,
      tokenNames: xr,
      tokenTypes: Et,
      tokenize: mu,
      url: Cc,
      vendorPrefix: xn,
      version: "2.1.0",
      walk: ku
    });
  const Cu = /^'(.*?)'$/,
    Ru = /^"(.*?)"$/,
    _u = ["inherit", "initial", "unset"],
    Iu = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"],
    Lu = ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    Nu = ["normal", "italic", "oblique"],
    zu = ["normal", "condensed", "semi-condensed", "extra-condensed", "ultra-condensed", "expanded", "semi-expanded", "extra-expanded", "ultra-expanded"];
  function Pu(e) {
    const t = gu(e);
    if (-1 !== Iu.indexOf(t)) return {
      system: t
    };
    const r = e.children,
      n = {
        lineHeight: "normal",
        stretch: "normal",
        style: "normal",
        variant: "normal",
        weight: "normal"
      };
    let o = !1;
    for (let e = r.head; e; e = e.next) {
      const t = gu(e.data);
      if ("normal" !== t && -1 === _u.indexOf(t)) {
        if (-1 === Lu.indexOf(t)) {
          if (-1 === Nu.indexOf(t)) {
            if (-1 === zu.indexOf(t)) {
              if ("Dimension" == e.data.type) {
                if (n.size = gu(e.data), e = e.next, e && "Operator" == e.data.type && "/" == e.data.value && e.next ? (e = e.next, n.lineHeight = gu(e.data), e = e.next) : "Operator" == r.head.data.type && "/" == r.head.data.value && r.head.next && (n.lineHeight = gu(r.head.next.data), e = r.head.next.next), !e) throw Mu("Missing required font-family.");
                for (n.family = []; e; e = e.next) {
                  for (; e && "Operator" == e.data.type && "," == e.data.value;) e = e.next;
                  e && n.family.push(Ou(gu(e.data)));
                }
                return n;
              }
              if ("normal" !== n.variant) throw Mu("Unknown or unsupported font token: " + n.variant);
              o || (n.variant = t);
            } else {
              if (o) continue;
              n.stretch = t;
            }
          } else {
            if (o) continue;
            n.style = t;
          }
        } else {
          if (o) continue;
          n.weight = t;
        }
      } else ["style", "variant", "weight", "stretch"].forEach(e => {
        n[e] = t;
      }), o = !0;
    }
    throw Mu("Missing required font-size.");
  }
  function Mu(e) {
    return new Error("[parse-css-font] " + e);
  }
  function Ou(e) {
    return (e = e.match(Cu) ? e.replace(Cu, "$1") : e.replace(Ru, "$1")).trim();
  }
  var Uu = Object.freeze({
    __proto__: null,
    parse: Pu
  });
  function Du(e, t = 0) {
    const r = [{
        mode: "normal",
        character: null
      }],
      n = [];
    let o = 0,
      i = "",
      a = null,
      s = null,
      l = t,
      c = e;
    "(" === e[0] && ")" === e[e.length - 1] && (c = e.substring(1, e.length - 1), l++);
    for (let e = 0; e < c.length; e++) {
      const t = c[e];
      if ("'" !== t && '"' !== t || (!0 === r[o].isCalculationEnabled ? (r.push({
        mode: "string",
        isCalculationEnabled: !1,
        character: t
      }), o++) : "string" === r[o].mode && r[o].character === t && "\\" !== c[e - 1] && (r.pop(), o--)), "{" === t ? (r.push({
        mode: "interpolation",
        isCalculationEnabled: !0
      }), o++) : "}" === t && (r.pop(), o--), "normal" === r[o].mode && ":" === t) {
        const t = c.substring(e + 1);
        s = {
          type: "value",
          before: /^(\s*)/.exec(t)[1],
          after: /(\s*)$/.exec(t)[1],
          value: t.trim()
        }, s.sourceIndex = s.before.length + e + 1 + l, a = {
          type: "colon",
          sourceIndex: e + l,
          after: s.before,
          value: ":"
        };
        break;
      }
      i += t;
    }
    return i = {
      type: "media-feature",
      before: /^(\s*)/.exec(i)[1],
      after: /(\s*)$/.exec(i)[1],
      value: i.trim()
    }, i.sourceIndex = i.before.length + l, n.push(i), null !== a && (a.before = i.after, n.push(a)), null !== s && n.push(s), n;
  }
  function Fu(e, t = 0) {
    const r = [];
    let n,
      o = 0,
      i = !1;
    n = {
      before: "",
      after: "",
      value: ""
    };
    for (let a = 0; a < e.length; a++) {
      const s = e[a];
      i ? (n.value += s, "{" !== s && "(" !== s || o++, ")" !== s && "}" !== s || o--) : -1 !== s.search(/\s/) ? n.before += s : ("(" === s && (n.type = "media-feature-expression", o++), n.value = s, n.sourceIndex = t + a, i = !0), !i || 0 !== o || ")" !== s && a !== e.length - 1 && -1 === e[a + 1].search(/\s/) || (-1 !== ["not", "only", "and"].indexOf(n.value) && (n.type = "keyword"), "media-feature-expression" === n.type && (n.nodes = Du(n.value, n.sourceIndex)), r.push(Array.isArray(n.nodes) ? new Bu(n) : new ju(n)), n = {
        before: "",
        after: "",
        value: ""
      }, i = !1);
    }
    for (let e = 0; e < r.length; e++) if (n = r[e], e > 0 && (r[e - 1].after = n.before), void 0 === n.type) {
      if (e > 0) {
        if ("media-feature-expression" === r[e - 1].type) {
          n.type = "keyword";
          continue;
        }
        if ("not" === r[e - 1].value || "only" === r[e - 1].value) {
          n.type = "media-type";
          continue;
        }
        if ("and" === r[e - 1].value) {
          n.type = "media-feature-expression";
          continue;
        }
        "media-type" === r[e - 1].type && (r[e + 1] ? n.type = "media-feature-expression" === r[e + 1].type ? "keyword" : "media-feature-expression" : n.type = "media-feature-expression");
      }
      if (0 === e) {
        if (!r[e + 1]) {
          n.type = "media-type";
          continue;
        }
        if (r[e + 1] && ("media-feature-expression" === r[e + 1].type || "keyword" === r[e + 1].type)) {
          n.type = "media-type";
          continue;
        }
        if (r[e + 2]) {
          if ("media-feature-expression" === r[e + 2].type) {
            n.type = "media-type", r[e + 1].type = "keyword";
            continue;
          }
          if ("keyword" === r[e + 2].type) {
            n.type = "keyword", r[e + 1].type = "media-type";
            continue;
          }
        }
        if (r[e + 3] && "media-feature-expression" === r[e + 3].type) {
          n.type = "keyword", r[e + 1].type = "media-type", r[e + 2].type = "keyword";
          continue;
        }
      }
    }
    return r;
  }
  function qu(e) {
    const t = [];
    let r = 0,
      n = 0;
    const o = /^(\s*)url\s*\(/.exec(e);
    if (null !== o) {
      let n = o[0].length,
        i = 1;
      for (; i > 0;) {
        const t = e[n];
        "(" === t && i++, ")" === t && i--, n++;
      }
      t.unshift(new ju({
        type: "url",
        value: e.substring(0, n).trim(),
        sourceIndex: o[1].length,
        before: o[1],
        after: /^(\s*)/.exec(e.substring(n))[1]
      })), r = n;
    }
    for (let o = r; o < e.length; o++) {
      const i = e[o];
      if ("(" === i && n++, ")" === i && n--, 0 === n && "," === i) {
        const n = e.substring(r, o),
          i = /^(\s*)/.exec(n)[1];
        t.push(new Bu({
          type: "media-query",
          value: n.trim(),
          sourceIndex: r + i.length,
          nodes: Fu(n, r),
          before: i,
          after: /(\s*)$/.exec(n)[1]
        })), r = o + 1;
      }
    }
    const i = e.substring(r),
      a = /^(\s*)/.exec(i)[1];
    return t.push(new Bu({
      type: "media-query",
      value: i.trim(),
      sourceIndex: r + a.length,
      nodes: Fu(i, r),
      before: a,
      after: /(\s*)$/.exec(i)[1]
    })), t;
  }
  function Bu(e) {
    this.constructor(e), this.nodes = e.nodes, void 0 === this.after && (this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : ""), void 0 === this.before && (this.before = this.nodes.length > 0 ? this.nodes[0].before : ""), void 0 === this.sourceIndex && (this.sourceIndex = this.before.length), this.nodes.forEach(e => {
      e.parent = this;
    });
  }
  function ju(e) {
    this.after = e.after, this.before = e.before, this.type = e.type, this.value = e.value, this.sourceIndex = e.sourceIndex;
  }
  Bu.prototype = Object.create(ju.prototype), Bu.constructor = ju, Bu.prototype.walk = function (e, t) {
    const r = "string" == typeof e || e instanceof RegExp,
      n = r ? t : e,
      o = "string" == typeof e ? new RegExp(e) : e;
    for (let i = 0; i < this.nodes.length; i++) {
      const a = this.nodes[i];
      if ((!r || o.test(a.type)) && n && !1 === n(a, i, this.nodes)) return !1;
      if (a.nodes && !1 === a.walk(e, t)) return !1;
    }
    return !0;
  }, Bu.prototype.each = function (e = () => {}) {
    for (let t = 0; t < this.nodes.length; t++) {
      if (!1 === e(this.nodes[t], t, this.nodes)) return !1;
    }
    return !0;
  };
  var Hu = Object.freeze({
    __proto__: null,
    parseMediaList: qu
  });
  const Vu = "___PRESERVED_TOKEN_",
    Wu = {
      maxLineLen: 0,
      expandVars: !1,
      uglyComments: !1,
      cuteComments: !1,
      debug: !1,
      output: ""
    },
    $u = /url\(\s*(["']?)data:/g,
    Gu = /\s+/g,
    Yu = /\n/g;
  const Ju = /(=\s*?["']?)?#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])(\}|[^0-9a-f{][^{]*?\})/gi;
  const Qu = /@[a-z0-9-_]*keyframes\s+[a-z0-9-_]+\s*{/gi,
    Ku = /(^\s|\s$)/g;
  const Zu = /"([^\\"]|\\.|\\)*"/g,
    Xu = /'([^\\']|\\.|\\)*'/g,
    eh = /progid:DXImageTransform.Microsoft.Alpha\(Opacity=/gi,
    th = /\r\n/g,
    rh = /[\r\n]/g,
    nh = /@variables\s*\{\s*([^}]+)\s*\}/g,
    oh = /\s*([a-z0-9-]+)\s*:\s*([^;}]+)\s*/gi,
    ih = /var\s*\(\s*([^)]+)\s*\)/g,
    ah = /calc\(([^;}]*)\)/g,
    sh = /(^\s*|\s*$)/g,
    lh = /\( /g,
    ch = / \)/g,
    uh = /\s*filter:\s*progid:DXImageTransform.Microsoft.Matrix\(([^)]+)\);/g,
    hh = /(^|\})(([^{:])+:)+([^{]*{)/g,
    dh = /\s+([!{;:>+()\],])/g,
    ph = /([^\\])\s+([}])/g,
    mh = /!important/g,
    fh = /___PSEUDOCLASSCOLON___/g,
    gh = /:/g,
    yh = /\s*(animation|animation-delay|animation-duration|transition|transition-delay|transition-duration):\s*([^;}]+)/gi,
    bh = /(^|\D)0?\.?0(m?s)/gi,
    kh = /\s*(flex|flex-basis):\s*([^;}]+)/gi,
    vh = /\s+/,
    wh = /(hsla?)\(([^)]+)\)/g,
    xh = /(^\s+|\s+$)/g,
    Eh = /:first-(line|letter)(\{|,)/gi,
    Ah = /^(.*)(@charset)( "[^"]*";)/gi,
    Sh = /^((\s*)(@charset)( [^;]+;\s*))+/gi,
    Th = /@(font-face|import|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?keyframe|media|page|namespace)/gi,
    Ch = /:(active|after|before|checked|disabled|empty|enabled|first-(?:child|of-type)|focus|hover|last-(?:child|of-type)|link|only-(?:child|of-type)|root|:selection|target|visited)/gi,
    Rh = /^(.*)(@charset "[^"]*";)/g,
    _h = /^(\s*@charset [^;]+;\s*)+/g,
    Ih = /:(lang|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?any)\(/gi,
    Lh = /([:,( ]\s*)(attr|color-stop|from|rgba|to|url|(?:-(?:atsc|khtml|moz|ms|o|wap|webkit)-)?(?:calc|max|min|(?:repeating-)?(?:linear|radial)-gradient)|-webkit-gradient)/gi,
    Nh = /\s*\/\*/g,
    zh = /\*\/\s*/g,
    Ph = /\band\(/gi,
    Mh = /([^:])not\(/gi,
    Oh = /\bor\(/gi,
    Uh = /([!{}:;>+([,])\s+/g,
    Dh = /;+\}/g,
    Fh = /([0-9])\.0(ex|ch|r?em|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|g?rad|turn|m?s|k?Hz|dpi|dpcm|dppx|%| |;)/gi,
    qh = /:0 0 0 0(;|\})/g,
    Bh = /:0 0 0(;|\})/g,
    jh = /(transform-origin|webkit-transform-origin|moz-transform-origin|o-transform-origin|ms-transform-origin|box-shadow):0(;|\})/gi,
    Hh = /(:|\s)0+\.(\d+)/g,
    Vh = /rgb\s*\(\s*([0-9,\s]+)\s*\)/gi,
    Wh = /(border|border-top|border-right|border-bottom|border-left|outline|background):none(;|\})/gi,
    $h = /progid:DXImageTransform\.Microsoft\.Alpha\(Opacity=/gi,
    Gh = /\(([-A-Za-z]+):([0-9]+)\/([0-9]+)\)/g,
    Yh = /___QUERY_FRACTION___/g,
    Jh = /;;+/g,
    Qh = /(:|\s)(#f00)(;|})/g,
    Kh = /___PRESERVED_NEWLINE___/g,
    Zh = /(:|\s)(#000080)(;|})/g,
    Xh = /(:|\s)(#808080)(;|})/g,
    ed = /(:|\s)(#808000)(;|})/g,
    td = /(:|\s)(#800080)(;|})/g,
    rd = /(:|\s)(#c0c0c0)(;|})/g,
    nd = /(:|\s)(#008080)(;|})/g,
    od = /(:|\s)(#ffa500)(;|})/g,
    id = /(:|\s)(#800000)(;|})/g;
  function ad(e = "", t = Wu) {
    const r = [],
      n = [];
    let o;
    const i = e;
    function a(t) {
      e = e.replace(t, e => {
        const t = e.substring(0, 1);
        if ((e = e.slice(1, -1)).indexOf("___PRESERVE_CANDIDATE_COMMENT_") >= 0) for (let t = 0, n = r.length; t < n; t += 1) e = e.replace("___PRESERVE_CANDIDATE_COMMENT_" + t + "___", r[t]);
        return e = e.replace(eh, "alpha(opacity="), n.push(e), t + Vu + (n.length - 1) + "___" + t;
      });
    }
    e = function (e, t) {
      const r = $u,
        n = e.length - 1,
        o = [];
      let i,
        a = 0;
      for (; null !== (i = r.exec(e));) {
        const s = i.index + 4;
        let l = i[1];
        0 === l.length && (l = ")");
        let c = !1,
          u = r.lastIndex - 1;
        for (; !1 === c && u + 1 <= n && -1 != u;) u = e.indexOf(l, u + 1), u > 0 && "\\" !== e.charAt(u - 1) && (c = !0, ")" != l && (u = e.indexOf(")", u)));
        if (o.push(e.substring(a, i.index)), c) {
          let r = e.substring(s, u);
          const n = r.split(",");
          n.length > 1 && ";base64" == n[0].slice(-7) ? r = r.replace(Gu, "") : (r = r.replace(Yu, " "), r = r.replace(Gu, " "), r = r.replace(xh, "")), t.push(r);
          const i = "url(___PRESERVED_TOKEN_" + (t.length - 1) + "___)";
          o.push(i), a = u + 1;
        } else o.push(e.substring(i.index, r.lastIndex)), a = r.lastIndex;
      }
      return o.push(e.substring(a)), o.join("");
    }(e, n), e = function (e, t) {
      const r = [];
      let n,
        o = 0;
      for (;;) {
        const i = e.indexOf("/*", o);
        if (!(i > -1)) break;
        if (n = e.indexOf("*/", i + 2), !(n > -1)) {
          n = -2;
          break;
        }
        t.push(e.slice(i + 2, n)), r.push(e.slice(o, i)), r.push("/*___PRESERVE_CANDIDATE_COMMENT_" + (t.length - 1) + "___*/"), o = n + 2;
      }
      return r.push(e.slice(n + 2)), r.join("");
    }(e, r), a(Zu), a(Xu);
    for (let o = 0, i = r.length; o < i; o += 1) {
      const i = r[o],
        a = "___PRESERVE_CANDIDATE_COMMENT_" + o + "___";
      if ("!" !== i.charAt(0)) {
        if ("\\" !== i.charAt(i.length - 1)) {
          if (0 === i.length) {
            const t = e.indexOf(a);
            t > 2 && ">" === e.charAt(t - 3) && (n.push(""), e = e.replace(a, Vu + (n.length - 1) + "___"));
          }
          e = e.replace(`/*${a}*/`, "");
        } else n.push("\\"), e = e.replace(a, Vu + (n.length - 1) + "___"), o += 1, n.push(""), e = e.replace("___PRESERVE_CANDIDATE_COMMENT_" + o + "___", Vu + (n.length - 1) + "___");
      } else t.cuteComments ? n.push(i.substring(1).replace(th, "\n")) : t.uglyComments ? n.push(i.substring(1).replace(rh, "")) : n.push(i), e = e.replace(a, Vu + (n.length - 1) + "___");
    }
    if (t.expandVars) {
      const t = {};
      o = nh, e = e.replace(o, (e, r) => (o = oh, r.replace(o, (e, r, n) => (r && n && (t[r] = n), "")), "")), o = ih, e = e.replace(o, (e, r) => t[r] || "none");
    }
    if (e = e.replace(Gu, " "), o = ah, e = e.replace(o, (e, t) => (n.push("calc(" + t.replace(sh, "").replace(lh, "(").replace(ch, ")") + ")"), Vu + (n.length - 1) + "___")), o = uh, e = e.replace(o, (e, t) => (n.push(t), "filter:progid:DXImageTransform.Microsoft.Matrix(___PRESERVED_TOKEN_" + (n.length - 1) + "___);")), o = hh, e = (e = (e = (e = (e = e.replace(o, e => e.replace(gh, "___PSEUDOCLASSCOLON___"))).replace(dh, "$1")).replace(ph, "$1$2")).replace(mh, " !important")).replace(fh, ":"), o = yh, e = e.replace(o, (e, t, r) => t + ":" + (r = r.replace(bh, (e, t, r) => (n.push("0" + r), t + Vu + (n.length - 1) + "___")))), o = kh, e = function (e, t) {
      const r = Qu;
      let n,
        o = 0;
      const i = (e, r) => {
        "0" === (e = e.replace(Ku, "")).charAt(0) && (t.push(e), n[r] = Vu + (t.length - 1) + "___");
      };
      for (;;) {
        let t = 0;
        n = "";
        let a = e.slice(o).search(r);
        if (a < 0) break;
        o += a, a = o;
        const s = e.length,
          l = [];
        for (; o < s; ++o) {
          const r = e.charAt(o);
          if ("{" === r) 0 === t ? l.push(n.replace(Ku, "")) : 1 === t && (n = n.split(","), n.forEach(i), l.push(n.join(",").replace(Ku, ""))), n = "", t += 1;else if ("}" === r) {
            if (2 === t) l.push("{" + n.replace(Ku, "") + "}"), n = "";else if (1 === t) {
              e = e.slice(0, a) + l.shift() + "{" + l.join("") + e.slice(o);
              break;
            }
            t -= 1;
          }
          if (t < 0) break;
          "{" !== r && "}" !== r && (n += r);
        }
      }
      return e;
    }(e = (e = e.replace(o, (e, t, r) => {
      let o = r.split(vh);
      return n.push(o.pop()), o.push(Vu + (n.length - 1) + "___"), o = o.join(" "), `${t}:${o}`;
    })).replace(wh, (e, t, r) => {
      const o = [];
      return r.split(",").forEach(e => {
        "0%" === (e = e.replace(xh, "")) ? (n.push("0%"), o.push(Vu + (n.length - 1) + "___")) : o.push(e);
      }), t + "(" + o.join(",") + ")";
    }), n), e = e.replace(Eh, (e, t, r) => ":first-" + t.toLowerCase() + " " + r), e = t.cuteComments ? (e = e.replace(Nh, "___PRESERVED_NEWLINE___/*")).replace(zh, "*/___PRESERVED_NEWLINE___") : e.replace(zh, "*/"), o = Ah, e = e.replace(o, (e, t, r, n) => r.toLowerCase() + n + t), o = Sh, e = e.replace(o, (e, t, r, n, o) => r + n.toLowerCase() + o), o = Th, e = e.replace(o, (e, t) => "@" + t.toLowerCase()), o = Ch, e = (e = (e = e.replace(o, (e, t) => ":" + t.toLowerCase())).replace(Rh, "$2$1")).replace(_h, "$1"), o = Ih, e = e.replace(o, (e, t) => ":" + t.toLowerCase() + "("), o = Lh, e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(o, (e, t, r) => t + r.toLowerCase())).replace(Ph, "and (")).replace(Mh, "$1not (")).replace(Oh, "or (")).replace(Uh, "$1")).replace(Dh, "}")).replace(Fh, "$1$2")).replace(qh, ":0$1")).replace(Bh, ":0$1"), o = jh, e = (e = e.replace(o, (e, t, r) => t.toLowerCase() + ":0 0" + r)).replace(Hh, "$1.$2"), o = Vh, e = function (e) {
      const t = Ju,
        r = [];
      let n,
        o = 0;
      for (; null !== (n = t.exec(e));) r.push(e.substring(o, n.index)), n[1] ? r.push(n[1] + "#" + (n[2] + n[3] + n[4] + n[5] + n[6] + n[7])) : n[2].toLowerCase() == n[3].toLowerCase() && n[4].toLowerCase() == n[5].toLowerCase() && n[6].toLowerCase() == n[7].toLowerCase() ? r.push("#" + (n[3] + n[5] + n[7]).toLowerCase()) : r.push("#" + (n[2] + n[3] + n[4] + n[5] + n[6] + n[7]).toLowerCase()), o = t.lastIndex = t.lastIndex - n[8].length;
      return r.push(e.substring(o)), r.join("");
    }(e = e.replace(o, (e, t) => {
      const r = t.split(",");
      let n = "#";
      for (let e = 0; e < r.length; e += 1) {
        let t = parseInt(r[e], 10);
        t < 16 && (n += "0"), t > 255 && (t = 255), n += t.toString(16);
      }
      return n;
    })), e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(Qh, "$1red$3")).replace(Zh, "$1navy$3")).replace(Xh, "$1gray$3")).replace(ed, "$1olive$3")).replace(td, "$1purple$3")).replace(rd, "$1silver$3")).replace(nd, "$1teal$3")).replace(od, "$1orange$3")).replace(id, "$1maroon$3"), o = Wh, e = (e = (e = (e = e.replace(o, (e, t, r) => t.toLowerCase() + ":0" + r)).replace($h, "alpha(opacity=")).replace(Gh, "($1:$2___QUERY_FRACTION___$3)")).replace(Yh, "/"), t.maxLineLen > 0) {
      const r = [];
      let n = [];
      for (let o = 0, i = e.length; o < i; o += 1) {
        const i = e.charAt(o);
        n.push(i), "}" === i && n.length > t.maxLineLen && (r.push(n.join("")), n = []);
      }
      n.length && r.push(n.join("")), e = r.join("\n");
    }
    if (e = (e = e.replace(Jh, ";")).replace(sh, ""), n.length > 1e3) return i;
    for (let t = n.length - 1; t >= 0; t--) e = e.replace(Vu + t + "___", n[t], "g");
    return e = e.replace(Kh, "\n");
  }
  var sd = Object.freeze({
    __proto__: null,
    defaultOptions: Wu,
    processString: ad
  });
  function ld(e) {
    function t(e) {
      return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
    }
    function r(t) {
      let r;
      const n = t.exec(e.substring(f));
      if (n) return r = n[0], f += r.length, r;
    }
    const n = e.length,
      o = /^[ \t\n\r\u000c]+/,
      i = /^[, \t\n\r\u000c]+/,
      a = /^[^ \t\n\r\u000c]+/,
      s = /[,]+$/,
      l = /^\d+$/,
      c = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
    let u,
      h,
      d,
      p,
      m,
      f = 0;
    const g = [];
    for (;;) {
      if (r(i), f >= n) return g;
      u = r(a), h = [], "," === u.slice(-1) ? (u = u.replace(s, ""), b()) : y();
    }
    function y() {
      for (r(o), d = "", p = "in descriptor";;) {
        if (m = e.charAt(f), "in descriptor" === p) {
          if (t(m)) d && (h.push(d), d = "", p = "after descriptor");else {
            if ("," === m) return f += 1, d && h.push(d), void b();
            if ("(" === m) d += m, p = "in parens";else {
              if ("" === m) return d && h.push(d), void b();
              d += m;
            }
          }
        } else if ("in parens" === p) {
          if (")" === m) d += m, p = "in descriptor";else {
            if ("" === m) return h.push(d), void b();
            d += m;
          }
        } else if ("after descriptor" === p) if (t(m)) ;else {
          if ("" === m) return void b();
          p = "in descriptor", f -= 1;
        }
        f += 1;
      }
    }
    function b() {
      let t,
        r,
        n,
        o,
        i,
        a,
        s,
        d,
        p,
        m = !1;
      const f = {};
      for (o = 0; o < h.length; o++) i = h[o], a = i[i.length - 1], s = i.substring(0, i.length - 1), d = parseInt(s, 10), p = parseFloat(s), l.test(s) && "w" === a ? ((t || r) && (m = !0), 0 === d ? m = !0 : t = d) : c.test(s) && "x" === a ? ((t || r || n) && (m = !0), p < 0 ? m = !0 : r = p) : l.test(s) && "h" === a ? ((n || r) && (m = !0), 0 === d ? m = !0 : n = d) : m = !0;
      m ? console && console.log && console.log('Invalid srcset descriptor found in "' + e + '" at "' + i + '".') : (f.url = u, t && (f.w = t), r && (f.d = r), n && (f.h = n), g.push(f));
    }
  }
  var cd = Object.freeze({
    __proto__: null,
    process: ld
  });
  let ud, hd, dd, pd;
  ud = {}, ud.removeLeadingAndTrailingHTTPWhitespace = e => e.replace(/^[ \t\n\r]+/, "").replace(/[ \t\n\r]+$/, ""), ud.removeTrailingHTTPWhitespace = e => e.replace(/[ \t\n\r]+$/, ""), ud.isHTTPWhitespaceChar = e => " " === e || "\t" === e || "\n" === e || "\r" === e, ud.solelyContainsHTTPTokenCodePoints = e => /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/.test(e), ud.soleyContainsHTTPQuotedStringTokenCodePoints = e => /^[\t\u0020-\u007E\u0080-\u00FF]*$/.test(e), ud.asciiLowercase = e => e.replace(/[A-Z]/g, e => e.toLowerCase()), ud.collectAnHTTPQuotedString = (e, t) => {
    let r = "";
    for (t++;;) {
      for (; t < e.length && '"' !== e[t] && "\\" !== e[t];) r += e[t], ++t;
      if (t >= e.length) break;
      const n = e[t];
      if (++t, "\\" !== n) break;
      if (t >= e.length) {
        r += "\\";
        break;
      }
      r += e[t], ++t;
    }
    return [r, t];
  };
  {
    const {
      solelyContainsHTTPTokenCodePoints: e
    } = ud;
    dd = t => {
      let r = `${t.type}/${t.subtype}`;
      if (0 === t.parameters.size) return r;
      for (let [n, o] of t.parameters) r += ";", r += n, r += "=", e(o) && 0 !== o.length || (o = o.replace(/(["\\])/g, "\\$1"), o = `"${o}"`), r += o;
      return r;
    };
  }
  {
    const {
      removeLeadingAndTrailingHTTPWhitespace: e,
      removeTrailingHTTPWhitespace: t,
      isHTTPWhitespaceChar: r,
      solelyContainsHTTPTokenCodePoints: n,
      soleyContainsHTTPQuotedStringTokenCodePoints: o,
      asciiLowercase: i,
      collectAnHTTPQuotedString: a
    } = ud;
    hd = s => {
      s = e(s);
      let l = 0,
        c = "";
      for (; l < s.length && "/" !== s[l];) c += s[l], ++l;
      if (0 === c.length || !n(c)) return null;
      if (l >= s.length) return null;
      ++l;
      let u = "";
      for (; l < s.length && ";" !== s[l];) u += s[l], ++l;
      if (u = t(u), 0 === u.length || !n(u)) return null;
      const h = {
        type: i(c),
        subtype: i(u),
        parameters: new Map()
      };
      for (; l < s.length;) {
        for (++l; r(s[l]);) ++l;
        let e = "";
        for (; l < s.length && ";" !== s[l] && "=" !== s[l];) e += s[l], ++l;
        if (e = i(e), l < s.length) {
          if (";" === s[l]) continue;
          ++l;
        }
        let c = null;
        if ('"' === s[l]) for ([c, l] = a(s, l); l < s.length && ";" !== s[l];) ++l;else {
          for (c = ""; l < s.length && ";" !== s[l];) c += s[l], ++l;
          if (c = t(c), "" === c) continue;
        }
        e.length > 0 && n(e) && o(c) && !h.parameters.has(e) && h.parameters.set(e, c);
      }
      return h;
    };
  }
  {
    const e = hd,
      t = dd,
      {
        asciiLowercase: r,
        solelyContainsHTTPTokenCodePoints: n,
        soleyContainsHTTPQuotedStringTokenCodePoints: o
      } = ud;
    pd = class {
      constructor(t) {
        t = String(t);
        const r = e(t);
        if (null === r) throw new Error(`Could not parse MIME type string "${t}"`);
        this._type = r.type, this._subtype = r.subtype, this._parameters = new i(r.parameters);
      }
      static parse(e) {
        try {
          return new this(e);
        } catch (e) {
          return null;
        }
      }
      get essence() {
        return `${this.type}/${this.subtype}`;
      }
      get type() {
        return this._type;
      }
      set type(e) {
        if (0 === (e = r(String(e))).length) throw new Error("Invalid type: must be a non-empty string");
        if (!n(e)) throw new Error(`Invalid type ${e}: must contain only HTTP token code points`);
        this._type = e;
      }
      get subtype() {
        return this._subtype;
      }
      set subtype(e) {
        if (0 === (e = r(String(e))).length) throw new Error("Invalid subtype: must be a non-empty string");
        if (!n(e)) throw new Error(`Invalid subtype ${e}: must contain only HTTP token code points`);
        this._subtype = e;
      }
      get parameters() {
        return this._parameters;
      }
      toString() {
        return t(this);
      }
      isJavaScript({
        allowParameters: e = !1
      } = {}) {
        switch (this._type) {
          case "text":
            switch (this._subtype) {
              case "ecmascript":
              case "javascript":
              case "javascript1.0":
              case "javascript1.1":
              case "javascript1.2":
              case "javascript1.3":
              case "javascript1.4":
              case "javascript1.5":
              case "jscript":
              case "livescript":
              case "x-ecmascript":
              case "x-javascript":
                return e || 0 === this._parameters.size;
              default:
                return !1;
            }
          case "application":
            switch (this._subtype) {
              case "ecmascript":
              case "javascript":
              case "x-ecmascript":
              case "x-javascript":
                return e || 0 === this._parameters.size;
              default:
                return !1;
            }
          default:
            return !1;
        }
      }
      isXML() {
        return "xml" === this._subtype && ("text" === this._type || "application" === this._type) || this._subtype.endsWith("+xml");
      }
      isHTML() {
        return "html" === this._subtype && "text" === this._type;
      }
    };
    class i {
      constructor(e) {
        this._map = e;
      }
      get size() {
        return this._map.size;
      }
      get(e) {
        return e = r(String(e)), this._map.get(e);
      }
      has(e) {
        return e = r(String(e)), this._map.has(e);
      }
      set(e, t) {
        if (e = r(String(e)), t = String(t), !n(e)) throw new Error(`Invalid MIME type parameter name "${e}": only HTTP token code points are valid.`);
        if (!o(t)) throw new Error(`Invalid MIME type parameter value "${t}": only HTTP quoted-string token code points are valid.`);
        return this._map.set(e, t);
      }
      clear() {
        this._map.clear();
      }
      delete(e) {
        return e = r(String(e)), this._map.delete(e);
      }
      forEach(e, t) {
        this._map.forEach(e, t);
      }
      keys() {
        return this._map.keys();
      }
      values() {
        return this._map.values();
      }
      entries() {
        return this._map.entries();
      }
      [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
      }
    }
  }
  var md = Object.freeze({
    __proto__: null,
    fontPropertyParser: Uu,
    mediaQueryParser: Hu,
    cssMinifier: sd,
    cssTree: Tu,
    cssUnescape: g,
    srcsetParser: cd,
    get MIMEType() {
      return pd;
    }
  });
  const fd = {
      normalizeFontFamily: X,
      getFontWeight: ae
    },
    gd = globalThis.FontFace,
    yd = /url\s*\(\s*'(.*?)'\s*\)/i,
    bd = /url\s*\(\s*"(.*?)"\s*\)/i,
    kd = /url\s*\(\s*(.*?)\s*\)/i,
    vd = /(url|local|-sf-url-original)\(.*?\)\s*(,|$)/g,
    wd = /^'(.*?)'$/,
    xd = /^"(.*?)"$/,
    Ed = /^url\(\s*["']?data:font\/(woff2?)/,
    Ad = /^url\(\s*["']?data:application\/x-font-(woff)/,
    Sd = /\.([^.?#]+)((\?|#).*?)?$/,
    Td = /format\((.*?)\)\s*,?$/,
    Cd = /(.*?)\s*,?$/,
    Rd = /^url\(["']?data:[^,]*,?["']?\)/,
    _d = "local(",
    Id = {
      "ultra-condensed": "50%",
      "extra-condensed": "62.5%",
      condensed: "75%",
      "semi-condensed": "87.5%",
      normal: "100%",
      "semi-expanded": "112.5%",
      expanded: "125%",
      "extra-expanded": "150%",
      "ultra-expanded": "200%"
    };
  async function Ld(e, t, r, n) {
    const o = {
        fonts: new Map(),
        medias: new Map(),
        supports: new Map()
      },
      i = {
        rules: {
          processed: 0,
          discarded: 0
        },
        fonts: {
          processed: 0,
          discarded: 0
        }
      };
    let a = 0;
    return t.forEach(t => {
      const r = t.stylesheet.children;
      if (r) if (i.rules.processed += r.size, i.rules.discarded += r.size, t.mediaText && "all" != t.mediaText) {
        const n = Dd();
        o.medias.set("media-" + a + "-" + t.mediaText, n), Nd(e, r, a, n);
      } else Nd(e, r, a, o);
      a++;
    }), zd(o), await Promise.all([...t].map(async ([, e], t) => {
      const a = e.stylesheet.children,
        s = e.mediaText;
      a && (s && "all" != s ? await Pd(a, t, o.medias.get("media-" + t + "-" + s), r, n, i) : await Pd(a, t, o, r, n, i), i.rules.discarded -= a.size);
    })), i;
  }
  function Nd(e, t, r, n) {
    let o = 0,
      i = 0;
    t.forEach(t => {
      if ("Atrule" == t.type && "media" == t.name && t.block && t.block.children && t.prelude) {
        const i = gu(t.prelude),
          a = Dd();
        n.medias.set("media-" + r + "-" + o + "-" + i, a), o++, Nd(e, t.block.children, r, a);
      } else if ("Atrule" == t.type && "supports" == t.name && t.block && t.block.children && t.prelude) {
        const o = gu(t.prelude),
          a = Dd();
        n.supports.set("supports-" + r + "-" + i + "-" + o, a), i++, Nd(e, t.block.children, r, a);
      } else if ("Atrule" == t.type && "font-face" == t.name && t.block && t.block.children) {
        const e = Ud(t);
        let r = n.fonts.get(e);
        r || (r = [], n.fonts.set(e, r));
        const o = Od(t, "src");
        if (o) {
          const e = o.match(vd);
          e && e.forEach(e => r.unshift(e));
        }
      }
    });
  }
  function zd(e) {
    e.fonts.forEach((t, r) => {
      e.fonts.set(r, t.map(e => {
        const t = e.match(Td);
        let r;
        const n = function (e) {
          const t = (e = e.replace(/url\(-sf-url-original\\\(\\"(.*?)\\"\\\)\\ /g, "")).match(yd) || e.match(bd) || e.match(kd);
          return t && t[1];
        }(e);
        if (t && t[1] && (r = t[1].replace(wd, "$1").replace(xd, "$1").toLowerCase()), !r) {
          const t = e.match(Ed);
          if (t && t[1]) r = t[1];else {
            const t = e.match(Ad);
            t && t[1] && (r = t[1]);
          }
        }
        if (!r && n) {
          const e = n.match(Sd);
          e && e[1] && (r = e[1]);
        }
        return {
          src: e.match(Cd)[1],
          fontUrl: n,
          format: r
        };
      }));
    }), e.medias.forEach(e => zd(e)), e.supports.forEach(e => zd(e));
  }
  async function Pd(e, t, r, n, o, i) {
    const a = [];
    let s = 0,
      l = 0;
    for (let c = e.head; c; c = c.next) {
      const e = c.data;
      if ("Atrule" == e.type && "media" == e.name && e.block && e.block.children && e.prelude) {
        const a = gu(e.prelude);
        await Pd(e.block.children, t, r.medias.get("media-" + t + "-" + s + "-" + a), n, o, i), s++;
      } else if ("Atrule" == e.type && "supports" == e.name && e.block && e.block.children && e.prelude) {
        const a = gu(e.prelude);
        await Pd(e.block.children, t, r.supports.get("supports-" + t + "-" + l + "-" + a), n, o, i), l++;
      } else if ("Atrule" == e.type && "font-face" == e.name) {
        const t = Ud(e),
          s = r.fonts.get(t);
        if (s) {
          (await Md(e, s, n, o, i)) && r.fonts.delete(t);
        } else a.push(c);
      }
    }
    a.forEach(t => e.remove(t));
  }
  async function Md(e, t, r, n, o) {
    const i = [];
    for (let t = e.block.children.head; t; t = t.next) "src" == t.data.property && i.push(t);
    i.pop(), i.forEach(t => e.block.children.remove(t));
    const a = e.block.children.filter(e => "src" == e.property).tail;
    if (a) {
      await Promise.all(t.map(async e => {
        if (n.has(e.src)) e.valid = n.get(e.src);else {
          if (gd && e.fontUrl) {
            const t = new gd("test-font", e.src);
            try {
              let r;
              await Promise.race([t.load().then(() => t.loaded).then(() => {
                e.valid = !0, globalThis.clearTimeout(r);
              }), new Promise(t => r = globalThis.setTimeout(() => {
                e.valid = !0, t();
              }, 5e3))]);
            } catch (t) {
              const n = xu(a.data, e => "Url" == e.type),
                o = Array.from(r).find(([t]) => n.includes(t) && t.value == e.fontUrl);
              if (o && o[1].length) {
                const t = o[1][0];
                if (t) {
                  const r = new gd("test-font", "url(" + t + ")");
                  try {
                    let t;
                    await Promise.race([r.load().then(() => r.loaded).then(() => {
                      e.valid = !0, globalThis.clearTimeout(t);
                    }), new Promise(r => t = globalThis.setTimeout(() => {
                      e.valid = !0, r();
                    }, 5e3))]);
                  } catch (e) {}
                }
              } else e.valid = !0;
            }
          } else e.valid = !0;
          n.set(e.src, e.valid);
        }
      }));
      const e = (e, r) => t.find(t => !t.src.match(Rd) && t.format == e && (!r || t.valid)),
        i = e => t.filter(t => t == e || t.src.startsWith(_d));
      o.fonts.processed += t.length, o.fonts.discarded += t.length;
      const s = e("woff2-variations", !0) || e("woff2", !0) || e("woff", !0);
      if (s) t = i(s);else {
        const r = e("truetype-variations", !0) || e("truetype", !0);
        if (r) t = i(r);else {
          const r = e("opentype") || e("embedded-opentype");
          t = r ? i(r) : t.filter(e => !e.src.match(Rd) && e.valid || e.src.startsWith(_d));
        }
      }
      o.fonts.discarded -= t.length, t.reverse();
      try {
        a.data.value = fu(t.map(e => e.src).join(","), {
          context: "value",
          parseCustomProperty: !0
        });
      } catch (e) {}
      return !0;
    }
    return !1;
  }
  function Od(e, t) {
    let r;
    if (e.block.children && (r = e.block.children.filter(e => {
      try {
        return e.property == t && !gu(e.value).match(/\\9$/);
      } catch (r) {
        return e.property == t;
      }
    }).tail), r) try {
      return gu(r.data.value);
    } catch (e) {}
  }
  function Ud(e) {
    return JSON.stringify([fd.normalizeFontFamily(Od(e, "font-family")), fd.getFontWeight(Od(e, "font-weight") || "400"), Od(e, "font-style") || "normal", Od(e, "unicode-range"), (t = Od(e, "font-stretch"), Id[t] || t), Od(e, "font-variant") || "normal", Od(e, "font-feature-settings"), Od(e, "font-variation-settings")]);
    var t;
  }
  function Dd() {
    return {
      fonts: new Map(),
      medias: new Map(),
      supports: new Map()
    };
  }
  var Fd = Object.freeze({
    __proto__: null,
    process: Ld
  });
  const qd = {
      normalizeFontFamily: X,
      flatten: se,
      getFontWeight: ae,
      removeQuotes: ie
    },
    Bd = /\s*,\s*/,
    jd = /-/,
    Hd = /\?/g,
    Vd = /^U\+/i,
    Wd = [/^normal$/, /^italic$/, /^oblique$/, /^oblique\s+/];
  function $d(e, t, r, n) {
    const o = {
        rules: {
          processed: 0,
          discarded: 0
        },
        fonts: {
          processed: 0,
          discarded: 0
        }
      },
      i = {
        declared: [],
        used: []
      },
      a = e.createElement("style");
    let s = "";
    e.body.appendChild(a), t.forEach(t => {
      const r = t.stylesheet.children;
      r && (o.processed += r.size, o.discarded += r.size, Gd(r, i), s = rp(e, r, a, s));
    }), r.forEach(e => {
      const t = Zd(e);
      t.length && i.used.push(t), s = np(e.children, a, s);
    }), a.remove(), s += e.body.innerText, globalThis.getComputedStyle && n.doc && (i.used = i.used.map(e => e.map(e => {
      const t = e.match(/^var\((--.*)\)$/);
      if (t && t[1]) {
        const r = globalThis.getComputedStyle(n.doc.body).getPropertyValue(t[1]);
        return r && r.split(",").map(e => qd.normalizeFontFamily(e)) || e;
      }
      return e;
    })), i.used = i.used.map(e => qd.flatten(e)));
    let l, c;
    return i.used.find(e => e.find(e => e.startsWith("var(--"))) ? l = [] : (c = new Map(), i.used.forEach(e => e.forEach(e => {
      if (i.declared.find(t => t.fontFamily == e)) {
        const t = n.usedFonts && n.usedFonts.filter(t => t[0] == e);
        t && t.length && c.set(e, t);
      }
    })), l = i.declared.filter(e => !c.has(e.fontFamily))), t.forEach(e => {
      const t = e.stylesheet.children;
      t && (Yd(t, i.declared, l, c, s), o.rules.discarded -= t.size);
    }), o;
  }
  function Gd(e, t) {
    e.forEach(e => {
      if ("Atrule" == e.type && ("media" == e.name || "supports" == e.name) && e.block && e.block.children) Gd(e.block.children, t);else if ("Rule" == e.type) {
        const r = Zd(e.block);
        r.length && t.used.push(r);
      } else if ("Atrule" == e.type && "font-face" == e.name) {
        const r = qd.normalizeFontFamily(Kd(e.block.children, "font-family"));
        if (r) {
          const n = Kd(e.block.children, "font-weight") || "400",
            o = Kd(e.block.children, "font-style") || "normal",
            i = Kd(e.block.children, "font-variant") || "normal";
          n.split(",").forEach(e => t.declared.push({
            fontFamily: r,
            fontWeight: qd.getFontWeight(qd.removeQuotes(e)),
            fontStyle: o,
            fontVariant: i
          }));
        }
      }
    });
  }
  function Yd(e, t, r, n, o) {
    const i = [];
    for (let a = e.head; a; a = a.next) {
      const e = a.data;
      if ("Atrule" == e.type && ("media" == e.name || "supports" == e.name) && e.block && e.block.children) Yd(e.block.children, t, r, n, o);else if ("Atrule" == e.type && "font-face" == e.name) {
        const s = qd.normalizeFontFamily(Kd(e.block.children, "font-family"));
        if (s) {
          const l = Kd(e.block.children, "unicode-range");
          !r.find(e => e.fontFamily == s) && ip(o, l) && Jd(e, s, t, n) || i.push(a);
        }
        const l = [];
        for (let t = e.block.children.head; t; t = t.next) "font-display" == t.data.property && l.push(t);
        l.length && l.forEach(t => e.block.children.remove(t));
      }
    }
    i.forEach(t => e.remove(t));
  }
  function Jd(e, t, r, n) {
    let o;
    const i = n && n.get(t);
    if (i && i.length) {
      let n = Kd(e.block.children, "font-style") || "normal";
      if (Wd.find(e => n.trim().match(e))) {
        const a = qd.getFontWeight(Kd(e.block.children, "font-weight") || "400"),
          s = r.filter(e => e.fontFamily == t && e.fontStyle == n).map(e => e.fontWeight).sort((e, t) => Number.parseInt(e, 10) - Number.parseInt(t, 10));
        let l = i.map(e => Xd(e, n, s));
        o = Qd(a, l), o || (l = i.map(e => ((e = Array.from(e))[2] = "normal", Xd(e, n, s)))), o = Qd(a, l);
      } else o = !0;
    } else o = !0;
    return o;
  }
  function Qd(e, t) {
    let r;
    for (const n of e.split(/[ ,]/)) r = r || t.includes(qd.getFontWeight(qd.removeQuotes(n)));
    return r;
  }
  function Kd(e, t) {
    let r;
    if (e && (r = e.filter(e => e.property == t).tail), r) try {
      return qd.removeQuotes(gu(r.data.value)).toLowerCase();
    } catch (e) {}
  }
  function Zd(e) {
    let t = e.children.filter(e => "font-family" == e.property).tail,
      r = [];
    if (t) {
      let e = "";
      if (t.data.value.children) {
        let n;
        t.data.value.children.forEach(t => {
          "Operator" == t.type && "," == t.value && e ? (r.push(qd.normalizeFontFamily(e)), e = "", n = null) : ("Identifier" == n && "Identifier" == t.type && (e += " "), e += gu(t)), n = t.type;
        });
      } else t = gu(t.data.value);
      e && r.push(qd.normalizeFontFamily(e));
    }
    const n = e.children.filter(e => "font" == e.property).tail;
    if (n && n.data && n.data.value) try {
      Pu(n.data.value).family.forEach(e => r.push(qd.normalizeFontFamily(e)));
    } catch (e) {}
    return r;
  }
  function Xd(e, t, r) {
    let n;
    if (r = r.map(e => String(Number.parseInt(e, 10))), e[2] == t) {
      let t = Number(e[1]);
      r.length > 1 ? (t >= 400 && t <= 500 && (n = r.find(e => e >= t && e <= 500), n || (n = ep(t, r)), n || (n = tp(t, r))), t < 400 && (n = r.slice().reverse().find(e => e <= t), n || (n = tp(t, r))), t > 500 && (n = r.find(e => e >= t), n || (n = ep(t, r)))) : n = r[0];
    }
    return n;
  }
  function ep(e, t) {
    return t.slice().reverse().find(t => t < e);
  }
  function tp(e, t) {
    return t.find(t => t > e);
  }
  function rp(e, t, r, n) {
    return t.forEach(t => {
      t.block && t.block.children && t.prelude && t.prelude.children && ("Atrule" != t.type || "media" != t.name && "supports" != t.name ? "Rule" == t.type && (n = np(t.block.children, r, n)) : n = rp(e, t.block.children, r, n));
    }), n;
  }
  function np(e, t, r) {
    const n = op(e, "content", t),
      o = op(e, "quotes", t);
    return r.includes(n) || (r += n), r.includes(o) || (r += o), r;
  }
  function op(e, t, r) {
    const n = Kd(e, t) || "";
    return n ? (r.textContent = 'tmp { content:"' + n + '"}', r.sheet && r.sheet.cssRules ? qd.removeQuotes(r.sheet.cssRules[0].style.getPropertyValue("content")) : n) : "";
  }
  function ip(e, t) {
    if (t) {
      const r = t.split(Bd);
      let n;
      const o = r.filter(t => {
        const r = t.split(jd);
        let o;
        if (2 == r.length && (r[0] = ap(r[0]), o = "[" + r[0] + "-" + ap("U+" + r[1]) + "]"), 1 == r.length) if (r[0].includes("?")) {
          const e = ap(r[0]),
            t = e;
          o = "[" + e.replace(Hd, "0") + "-" + t.replace(Hd, "F") + "]";
        } else r[0] && (o = "[" + ap(r[0]) + "]");
        if (o) try {
          return new RegExp(o, "u").test(e);
        } catch (e) {
          return n = !0, !1;
        }
        return !0;
      });
      return !n && (!r.length || o.length);
    }
    return !0;
  }
  function ap(e) {
    for (e = e.replace(Vd, ""); e.length < 6;) e = "0" + e;
    return "\\u{" + e + "}";
  }
  var sp = Object.freeze({
    __proto__: null,
    process: $d
  });
  const lp = "all",
    cp = ["after", "before", "first-letter", "first-line", "placeholder", "selection", "part", "marker"],
    up = "sf-hidden",
    hp = /-(ms|webkit|moz|o)-/;
  class dp {
    constructor(e, t, r) {
      this.doc = e, this.mediaAllInfo = mp(lp);
      const n = new Map();
      let o = 0;
      const i = e.createElement("style");
      e.body.appendChild(i);
      const a = e.createElement("span");
      e.body.appendChild(a), t.forEach(t => {
        if (!t.scoped) {
          const a = t.stylesheet.children;
          if (a) if (t.mediaText && t.mediaText != lp) {
            const s = mp(t.mediaText);
            this.mediaAllInfo.medias.set("style-" + o + "-" + t.mediaText, s), fp(e, a, s, o, r, n, i);
          } else fp(e, a, this.mediaAllInfo, o, r, n, i);
        }
        o++;
      }), kp(this.mediaAllInfo), yp(this.mediaAllInfo, [], this.mediaAllInfo, i, a), i.remove(), a.remove();
    }
    getMediaAllInfo() {
      return this.mediaAllInfo;
    }
  }
  function pp(e, t, r) {
    return new dp(e, t, r).getMediaAllInfo();
  }
  function mp(e) {
    const t = {
      media: e,
      elements: new Map(),
      medias: new Map(),
      rules: new Map(),
      pseudoRules: new Map()
    };
    return e == lp && (t.matchedStyles = new Map()), t;
  }
  function fp(e, t, r, n, o, i, a) {
    let s = 0,
      l = 0;
    t.forEach(t => {
      if (t.block && t.block.children && t.prelude && t.prelude.children) if ("Atrule" == t.type && "media" == t.name) {
        const l = gu(t.prelude),
          c = mp(l);
        r.medias.set("rule-" + n + "-" + s + "-" + l, c), s++, fp(e, t.block.children, c, n, o, i, a);
      } else if ("Rule" == t.type) {
        const s = t.prelude.children.toArray(),
          c = t.prelude.children.toArray().map(e => gu(e)),
          u = {
            ruleData: t,
            mediaInfo: r,
            ruleIndex: l,
            sheetIndex: n,
            matchedSelectors: new Set(),
            declarations: new Set(),
            selectors: s,
            selectorsText: c
          };
        if (!function (e, t) {
          return t.textContent = e + "{}", t.sheet ? !t.sheet.cssRules.length : t.sheet;
        }(c.join(","), a)) for (let r = t.prelude.children.head, n = 0; r; r = r.next, n++) {
          const t = c[n];
          gp(e, {
            selector: r,
            selectorText: t,
            ruleInfo: u
          }, o, i);
        }
        l++;
      }
    });
  }
  function gp(e, t, r, n) {
    const o = function (e, t) {
        const r = [];
        n(e = {
          data: fu(gu(e.data), {
            context: "selector"
          })
        }), r.length && (r.forEach(({
          parentSelector: e,
          selector: t
        }) => {
          0 != e.data.children.size && t.prev && "Combinator" != t.prev.data.type && "WhiteSpace" != t.prev.data.type ? e.data.children.remove(t) : e.data.children.replace(t, fu("*", {
            context: "selector"
          }).children.head);
        }), t = gu(e.data).trim());
        return t;
        function n(e, t) {
          if (e.data.children) for (let t = e.data.children.head; t; t = t.next) n(t, e);
          ("PseudoClassSelector" == e.data.type || "PseudoElementSelector" == e.data.type && (o(e) || cp.includes(e.data.name))) && r.push({
            parentSelector: t,
            selector: e
          });
        }
        function o(e) {
          const t = e.data.name;
          return t.startsWith("-") || t.startsWith("\\-");
        }
      }(t.selector, t.selectorText),
      i = o != t.selectorText ? o : t.selectorText,
      a = n.get(i);
    let s = a;
    if (!s) try {
      s = e.querySelectorAll(i), ".sf-hidden" != i && (s = Array.from(e.querySelectorAll(i)).filter(e => !e.classList.contains(up) && ("none" != e.style.getPropertyValue("display") || "important" != e.style.getPropertyPriority("display"))));
    } catch (e) {}
    if (s && (a || n.set(i, s), s.length)) if (o == t.selectorText) s.forEach(e => function (e, t, r) {
      const n = t.ruleInfo.mediaInfo,
        o = r.get(e);
      let i = n.elements.get(e);
      i || (i = [], o && i.push({
        styleInfo: {
          styleData: o,
          declarations: new Set()
        }
      }), n.elements.set(e, i));
      const a = vp(t.selector.data);
      a.ruleIndex = t.ruleInfo.ruleIndex, a.sheetIndex = t.ruleInfo.sheetIndex, t.specificity = a, i.push(t);
    }(e, t, r));else {
      let e = t.ruleInfo.mediaInfo.pseudoRules.get(t.ruleInfo.ruleData);
      e || (e = new Set(), t.ruleInfo.mediaInfo.pseudoRules.set(t.ruleInfo.ruleData, e)), e.add(t.selectorText);
    }
  }
  function yp(e, t, r, n, o) {
    e.elements.forEach(n => function (e, t, r) {
      const n = new Map(),
        o = new Set();
      return e.forEach(e => {
        let t;
        t = e.styleInfo ? e.styleInfo.styleData.children : e.ruleInfo.ruleData.block.children, function (e, t, r, n, o, i) {
          for (let o = t.tail; o; o = o.prev) {
            const t = o.data,
              a = gu(t);
            if ("Declaration" == t.type && (a.match(hp) || !n.has(t.property) || t.important) && !bp(a, i)) {
              const o = e.get(t);
              (!o || t.important && !o.important) && (e.set(t, {
                selectorInfo: r,
                important: t.important
              }), a.match(hp) || n.add(t.property));
            }
          }
        }(n, t, e, o, 0, r);
      }), n;
    }(n, 0, o).forEach((n, o) => {
      if (n.selectorInfo.ruleInfo || e == r) {
        let i;
        if (n.selectorInfo.ruleInfo) {
          i = n.selectorInfo.ruleInfo;
          const r = i.ruleData;
          ([e, ...t].find(e => e.rules.get(r)) || e).rules.set(r, i), r && i.matchedSelectors.add(n.selectorInfo.selectorText);
        } else {
          i = n.selectorInfo.styleInfo;
          const e = i.styleData;
          r.matchedStyles.get(e) || r.matchedStyles.set(e, i);
        }
        i.declarations.has(o) || i.declarations.add(o);
      }
    })), delete e.elements, e.medias.forEach(i => yp(i, [e, ...t], r, n, o));
  }
  function bp(e, t) {
    let r;
    return t.style = e, t.style.length || e.match(hp) || (r = !0), r;
  }
  function kp(e) {
    e.elements.forEach(e => e.sort((e, t) => {
      return e.styleInfo && !t.styleInfo ? -1 : !e.styleInfo && t.styleInfo ? 1 : (r = e.specificity, n = t.specificity, r.a > n.a ? -1 : r.a < n.a ? 1 : r.b > n.b ? -1 : r.b < n.b ? 1 : r.c > n.c ? -1 : r.c < n.c ? 1 : r.sheetIndex > n.sheetIndex ? -1 : r.sheetIndex < n.sheetIndex ? 1 : r.ruleIndex > n.ruleIndex ? -1 : r.ruleIndex < n.ruleIndex ? 1 : -1);
      var r, n;
    })), e.medias.forEach(kp);
  }
  function vp(e, t = {
    a: 0,
    b: 0,
    c: 0
  }) {
    return "IdSelector" == e.type && t.a++, ("ClassSelector" == e.type || "AttributeSelector" == e.type || "PseudoClassSelector" == e.type && "not" != e.name) && t.b++, ("TypeSelector" == e.type && "*" != e.name || "PseudoElementSelector" == e.type) && t.c++, e.children && e.children.forEach(e => vp(e, t)), t;
  }
  var wp = Object.freeze({
    __proto__: null,
    getMediaAllInfo: pp
  });
  const xp = {
      flatten: se
    },
    Ep = "all",
    Ap = "screen";
  function Sp(e) {
    const t = {
      processed: 0,
      discarded: 0
    };
    return e.forEach((r, n) => {
      if (Cp(r.mediaText || Ep, Ap) && r.stylesheet.children) {
        Tp(r.stylesheet.children, t).forEach(({
          cssRules: e,
          cssRule: t
        }) => e.remove(t));
      } else e.delete(n);
    }), t;
  }
  function Tp(e, t, r = []) {
    for (let n = e.head; n; n = n.next) {
      const o = n.data;
      "Atrule" == o.type && "media" == o.name && o.block && o.block.children && o.prelude && o.prelude.children && (t.processed++, Cp(gu(o.prelude), Ap) ? Tp(o.block.children, t, r) : (r.push({
        cssRules: e,
        cssRule: n
      }), t.discarded++));
    }
    return r;
  }
  function Cp(e, t) {
    return xp.flatten(qu(e).map(e => Rp(e, t))).find(e => !e.not && (e.value == t || e.value == Ep) || e.not && (e.value == Ep || e.value != t));
  }
  function Rp(e, t, r = []) {
    return e.nodes.map((n, o) => {
      if ("media-query" == n.type) return Rp(n, t, r);
      if ("media-type" == n.type) {
        const t = {
          not: Boolean(o && "keyword" == e.nodes[0].type && "not" == e.nodes[0].value),
          value: n.value
        };
        r.find(e => t.not == e.not && t.value == e.value) || r.push(t);
      }
    }), r.length || r.push({
      not: !1,
      value: Ep
    }), r;
  }
  var _p = Object.freeze({
    __proto__: null,
    process: Sp
  });
  function Ip(e, t, r) {
    const n = {
      processed: 0,
      discarded: 0
    };
    let o = 0;
    return e.forEach(e => {
      if (!e.scoped) {
        const t = e.stylesheet.children;
        if (t) {
          let i;
          n.processed += t.size, n.discarded += t.size, i = e.mediaText && "all" != e.mediaText ? r.medias.get("style-" + o + "-" + e.mediaText) : r, Lp(t, o, i), n.discarded -= t.size;
        }
      }
      o++;
    }), t.forEach(e => function (e, t) {
      const r = [],
        n = t.matchedStyles.get(e);
      if (n) {
        let t;
        for (let o = e.children.head; o && !t; o = o.next) n.declarations.has(o.data) || r.push(o);
        r.forEach(t => e.children.remove(t));
      }
    }(e, r)), n;
  }
  function Lp(e, t, r) {
    let n = 0;
    const o = [];
    for (let i = e.head; i; i = i.next) {
      const e = i.data;
      if (e.block && e.block.children && e.prelude && e.prelude.children) {
        if ("Atrule" == e.type && "media" == e.name) {
          const a = gu(e.prelude);
          Lp(e.block.children, t, r.medias.get("rule-" + t + "-" + n + "-" + a)), e.prelude.children.size && e.block.children.size || o.push(i), n++;
        } else if ("Rule" == e.type) {
          const t = r.rules.get(e),
            n = r.pseudoRules.get(e);
          t || n ? t && (Np(e, t, n), e.prelude.children.size && e.block.children.size || o.push(i)) : o.push(i);
        }
      } else e && "Raw" != e.type && ("Rule" != e.type || e.prelude && "Raw" != e.prelude.type) || o.push(i);
    }
    o.forEach(t => e.remove(t));
  }
  function Np(e, t, r) {
    const n = [],
      o = [];
    let i;
    for (let n = e.prelude.children.head; n; n = n.next) {
      const e = gu(n.data);
      r && r.has(e) && (i = !0), t.matchedSelectors.has(e) || r && r.has(e) || o.push(n);
    }
    if (!i) for (let r = e.block.children.tail; r; r = r.prev) t.declarations.has(r.data) || n.push(r);
    n.forEach(t => e.block.children.remove(t)), o.forEach(t => e.prelude.children.remove(t));
  }
  var zp = Object.freeze({
    __proto__: null,
    process: Ip
  });
  const Pp = "data:,";
  function Mp(e) {
    e.querySelectorAll("picture").forEach(e => {
      const t = e.querySelector("img");
      if (t) {
        let {
          src: r,
          srcset: n
        } = Op(t);
        if (!r) {
          const t = function (e) {
            let t = e.find(e => e.src),
              r = t && t.src,
              n = t && t.srcset;
            r || (t = e.find(e => Dp(e.src)), r = t && t.src, r == Pp && (r = null));
            n || (t = e.find(e => Dp(e.srcset)), n = t && t.srcset, n == Pp && (n = null));
            return {
              src: r,
              srcset: n
            };
          }(Array.from(e.querySelectorAll("source")).reverse());
          r = t.src, n || (n = t.srcset);
        }
        Up({
          src: r,
          srcset: n
        }, t, e);
      }
    }), e.querySelectorAll(":not(picture) > img[srcset]").forEach(e => Up(Op(e), e));
  }
  function Op(e) {
    let t = e.getAttribute("src");
    t == Pp && (t = null);
    let r = Dp(e.getAttribute("srcset"));
    return r == Pp && (r = null), {
      src: t,
      srcset: r
    };
  }
  function Up(e, t, r) {
    e.src ? (t.setAttribute("src", e.src), t.setAttribute("srcset", ""), t.setAttribute("sizes", "")) : (t.setAttribute("src", Pp), e.srcset ? t.setAttribute("srcset", e.srcset) : (t.setAttribute("srcset", ""), t.setAttribute("sizes", ""))), r && r.querySelectorAll("source").forEach(e => e.remove());
  }
  function Dp(e) {
    if (e) try {
      const t = ld(e);
      if (t.length) return t.find(e => e.url).url;
    } catch (e) {}
  }
  var Fp = Object.freeze({
    __proto__: null,
    process: Mp
  });
  const qp = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", "required", "reversed", "scoped", "seamless", "selected", "sortable", "truespeed", "typemustmatch", "visible"],
    Bp = ["script", "style", "pre", "textarea"],
    jp = ["id", "class", "style", "lang", "dir", "onclick", "ondblclick", "onmousedown", "onmouseup", "onmouseover", "onmousemove", "onmouseout", "onkeypress", "onkeydown", "onkeyup"],
    Hp = {
      form: {
        method: "get"
      },
      script: {
        language: "javascript",
        type: "text/javascript",
        charset: e => !e.getAttribute("src")
      },
      style: {
        media: "all",
        type: "text/css"
      },
      link: {
        media: "all"
      }
    },
    Vp = /[ \t\f\r]+/g,
    Wp = /[\n]+/g,
    $p = /^\s+$/,
    Gp = [function (e) {
      1 == e.nodeType && Array.from(e.attributes).forEach(t => {
        qp.includes(t.name) && e.setAttribute(t.name, "");
      });
    }, function (e) {
      3 == e.nodeType && e.previousSibling && 3 == e.previousSibling.nodeType && (e.textContent = e.previousSibling.textContent + e.textContent, e.previousSibling.remove());
    }, function (e, t) {
      if (3 == e.nodeType) {
        let r = e.parentElement;
        if (!("" == r.getAttribute(t.PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME))) {
          const t = e.textContent;
          let n = Jp(r);
          for (; n;) r = r.parentElement, n = r && Jp(r);
          (!r || n) && t.length > 1 && (e.textContent = t.replace(Vp, function (e) {
            return e.parentElement && "HEAD" == e.parentElement.tagName ? "\n" : " ";
          }(e)).replace(Wp, "\n"));
        }
      }
    }, function (e) {
      if (8 == e.nodeType && "HTML" != e.parentElement.tagName) return !e.textContent.toLowerCase().trim().startsWith("[if");
    }, function (e) {
      1 == e.nodeType && Array.from(e.attributes).forEach(t => {
        if (jp.includes(t.name.toLowerCase())) {
          const r = e.getAttribute(t.name);
          ("" == r || (r || "").match($p)) && e.removeAttribute(t.name);
        }
      });
    }, function (e) {
      if (1 == e.nodeType) {
        const t = Hp[e.tagName.toLowerCase()];
        t && Object.keys(t).forEach(r => {
          const n = t[r];
          ("function" == typeof n ? n(e) : e.getAttribute(r) == n) && e.removeAttribute(r);
        });
      }
    }, function (e) {
      if (1 == e.nodeType && "SCRIPT" == e.tagName && "application/ld+json" == e.type && e.textContent.trim()) try {
        e.textContent = JSON.stringify(JSON.parse(e.textContent));
      } catch (e) {}
    }, e => function (e, t, r) {
      if (1 == e.nodeType && e.tagName.toLowerCase() == t.toLowerCase()) {
        let t = e.previousSibling;
        const n = [];
        for (; t && 3 == t.nodeType && !t.textContent.trim();) n.push(t), t = t.previousSibling;
        t && 1 == t.nodeType && t.tagName == e.tagName && r(e, t) && (e.textContent = t.textContent + e.textContent, n.forEach(e => e.remove()), t.remove());
      }
    }(e, "style", (e, t) => e.parentElement && "HEAD" == e.parentElement.tagName && e.media == t.media && e.title == t.title)];
  function Yp(e, t) {
    !function (e) {
      e.querySelectorAll("style, script:not([src])").forEach(e => {
        e.textContent.trim() || e.remove();
      });
    }(e);
    const r = e.createTreeWalker(e.documentElement, 4294967295, null, !1);
    let n = r.nextNode();
    for (; n;) {
      const e = Gp.find(e => e(n, t)),
        o = n;
      n = r.nextNode(), e && o.remove();
    }
  }
  function Jp(e) {
    return e && !Bp.includes(e.tagName.toLowerCase());
  }
  var Qp = Object.freeze({
    __proto__: null,
    process: Yp
  });
  const Kp = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
    Zp = [{
      tagName: "head",
      accept: e => !e.childNodes.length || 1 == e.childNodes[0].nodeType
    }, {
      tagName: "body",
      accept: e => !e.childNodes.length
    }],
    Xp = [{
      tagName: "html",
      accept: e => !e || 8 != e.nodeType
    }, {
      tagName: "head",
      accept: e => !e || 8 != e.nodeType && (3 != e.nodeType || !nm(e.textContent))
    }, {
      tagName: "body",
      accept: e => !e || 8 != e.nodeType
    }, {
      tagName: "li",
      accept: (e, t) => !e && t.parentElement && ("UL" == t.parentElement.tagName || "OL" == t.parentElement.tagName) || e && ["LI"].includes(e.tagName)
    }, {
      tagName: "dt",
      accept: e => !e || ["DT", "DD"].includes(e.tagName)
    }, {
      tagName: "p",
      accept: e => e && ["ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "DETAILS", "DIV", "DL", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HR", "MAIN", "NAV", "OL", "P", "PRE", "SECTION", "TABLE", "UL"].includes(e.tagName)
    }, {
      tagName: "dd",
      accept: e => !e || ["DT", "DD"].includes(e.tagName)
    }, {
      tagName: "rt",
      accept: e => !e || ["RT", "RP"].includes(e.tagName)
    }, {
      tagName: "rp",
      accept: e => !e || ["RT", "RP"].includes(e.tagName)
    }, {
      tagName: "optgroup",
      accept: e => !e || ["OPTGROUP"].includes(e.tagName)
    }, {
      tagName: "option",
      accept: e => !e || ["OPTION", "OPTGROUP"].includes(e.tagName)
    }, {
      tagName: "colgroup",
      accept: e => !e || 8 != e.nodeType && (3 != e.nodeType || !nm(e.textContent))
    }, {
      tagName: "caption",
      accept: e => !e || 8 != e.nodeType && (3 != e.nodeType || !nm(e.textContent))
    }, {
      tagName: "thead",
      accept: e => !e || ["TBODY", "TFOOT"].includes(e.tagName)
    }, {
      tagName: "tbody",
      accept: e => !e || ["TBODY", "TFOOT"].includes(e.tagName)
    }, {
      tagName: "tfoot",
      accept: e => !e
    }, {
      tagName: "tr",
      accept: e => !e || ["TR"].includes(e.tagName)
    }, {
      tagName: "td",
      accept: e => !e || ["TD", "TH"].includes(e.tagName)
    }, {
      tagName: "th",
      accept: e => !e || ["TD", "TH"].includes(e.tagName)
    }],
    em = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"];
  function tm(e, t) {
    const r = e.doctype;
    let n = "";
    return r && (n = "<!DOCTYPE " + r.nodeName, r.publicId ? (n += ' PUBLIC "' + r.publicId + '"', r.systemId && (n += ' "' + r.systemId + '"')) : r.systemId && (n += ' SYSTEM "' + r.systemId + '"'), r.internalSubset && (n += " [" + r.internalSubset + "]"), n += "> "), n + rm(e.documentElement, t);
  }
  function rm(e, t, r) {
    return 3 == e.nodeType ? function (e) {
      const t = e.parentNode;
      let r;
      t && 1 == t.nodeType && (r = t.tagName.toLowerCase());
      return !r || em.includes(r) ? "script" == r || "style" == r ? e.textContent.replace(/<\//gi, "<\\/").replace(/\/>/gi, "\\/>") : e.textContent : e.textContent.replace(/&/g, "&amp;").replace(/\u00a0/g, "&nbsp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }(e) : 8 == e.nodeType ? "\x3c!--" + e.textContent + "--\x3e" : 1 == e.nodeType ? function (e, t, r) {
      const n = e.tagName.toLowerCase(),
        o = t && Zp.find(t => n == t.tagName && t.accept(e));
      let i = "";
      o && !e.attributes.length || (i = "<" + n, Array.from(e.attributes).forEach(r => i += function (e, t, r) {
        const n = e.name;
        let o = "";
        if (!n.match(/["'>/=]/)) {
          let i,
            a = e.value;
          r && "class" == n && (a = Array.from(t.classList).map(e => e.trim()).join(" ")), a = a.replace(/&/g, "&amp;").replace(/\u00a0/g, "&nbsp;"), a.includes('"') && (a.includes("'") || !r ? a = a.replace(/"/g, "&quot;") : i = !0);
          const s = !r || a.match(/[ \t\n\f\r'"`=<>]/);
          o += " ", e.namespace ? "http://www.w3.org/XML/1998/namespace" == e.namespaceURI ? o += "xml:" + n : "http://www.w3.org/2000/xmlns/" == e.namespaceURI ? ("xmlns" !== n && (o += "xmlns:"), o += n) : "http://www.w3.org/1999/xlink" == e.namespaceURI ? o += "xlink:" + n : o += n : o += n, "" != a && (o += "=", s && (o += i ? "'" : '"'), o += a, s && (o += i ? "'" : '"'));
        }
        return o;
      }(r, e, t)), i += ">");
      "TEMPLATE" != e.tagName || e.childNodes.length ? Array.from(e.childNodes).forEach(e => i += rm(e, t, r || "svg" == n)) : i += e.innerHTML;
      const a = t && Xp.find(t => n == t.tagName && t.accept(e.nextSibling, e));
      (r || !a && !Kp.includes(n)) && (i += "</" + n + ">");
      return i;
    }(e, t, r) : void 0;
  }
  function nm(e) {
    return Boolean(e.match(/^[ \t\n\f\r]/));
  }
  var om = Object.freeze({
      __proto__: null,
      process: tm
    }),
    im = Object.freeze({
      __proto__: null,
      fontsAltMinifier: Fd,
      fontsMinifier: sp,
      matchedRules: wp,
      mediasAltMinifier: _p,
      cssRulesMinifier: zp,
      imagesAltMinifier: Fp,
      htmlMinifier: Qp,
      serializer: om
    });
  const am = globalThis.Set,
    sm = globalThis.Map;
  let lm, cm;
  class um {
    constructor(e) {
      this.options = e;
    }
    async run() {
      const e = globalThis._singleFile_waitForUserScript;
      this.options.userScriptEnabled && e && (await e(lm.ON_BEFORE_CAPTURE_EVENT_NAME)), this.runner = new Em(this.options, !0), await this.runner.loadPage(), await this.runner.initialize(), this.options.userScriptEnabled && e && (await e(lm.ON_AFTER_CAPTURE_EVENT_NAME)), await this.runner.run();
    }
    cancel() {
      this.cancelled = !0, this.runner && this.runner.cancel();
    }
    getPageData() {
      return this.runner.getPageData();
    }
  }
  const hm = "page-loading",
    dm = "page-loaded",
    pm = "resource-initializing",
    mm = "resources-initialized",
    fm = "resource-loaded",
    gm = "page-ended",
    ym = "stage-started",
    bm = "stage-ended",
    km = "stage-task-started",
    vm = "stage-task-ended";
  class wm {
    constructor(e, t) {
      return {
        type: e,
        detail: t,
        PAGE_LOADING: hm,
        PAGE_LOADED: dm,
        RESOURCES_INITIALIZING: pm,
        RESOURCES_INITIALIZED: mm,
        RESOURCE_LOADED: fm,
        PAGE_ENDED: gm,
        STAGE_STARTED: ym,
        STAGE_ENDED: bm,
        STAGE_TASK_STARTED: km,
        STAGE_TASK_ENDED: vm
      };
    }
  }
  const xm = [{
    sequential: [{
      action: "preProcessPage"
    }, {
      option: "loadDeferredImagesKeepZoomLevel",
      action: "resetZoomLevel"
    }, {
      action: "replaceStyleContents"
    }, {
      action: "replaceInvalidElements"
    }, {
      action: "resetCharsetMeta"
    }, {
      option: "saveFavicon",
      action: "saveFavicon"
    }, {
      action: "replaceCanvasElements"
    }, {
      action: "insertFonts"
    }, {
      action: "insertShadowRootContents"
    }, {
      action: "setInputValues"
    }, {
      option: "moveStylesInHead",
      action: "moveStylesInHead"
    }, {
      option: "blockScripts",
      action: "removeEmbedScripts"
    }, {
      option: "selected",
      action: "removeUnselectedElements"
    }, {
      option: "blockVideos",
      action: "insertVideoPosters"
    }, {
      option: "blockVideos",
      action: "insertVideoLinks"
    }, {
      option: "removeFrames",
      action: "removeFrames"
    }, {
      action: "removeDiscardedResources"
    }, {
      option: "removeHiddenElements",
      action: "removeHiddenElements"
    }, {
      action: "resolveHrefs"
    }, {
      action: "resolveStyleAttributeURLs"
    }],
    parallel: [{
      option: "blockVideos",
      action: "insertMissingVideoPosters"
    }, {
      action: "resolveStylesheetURLs"
    }, {
      option: "!removeFrames",
      action: "resolveFrameURLs"
    }]
  }, {
    sequential: [{
      option: "removeUnusedStyles",
      action: "removeUnusedStyles"
    }, {
      option: "removeAlternativeMedias",
      action: "removeAlternativeMedias"
    }, {
      option: "removeUnusedFonts",
      action: "removeUnusedFonts"
    }],
    parallel: [{
      action: "processStylesheets"
    }, {
      action: "processStyleAttributes"
    }, {
      action: "processPageResources"
    }, {
      action: "processScripts"
    }]
  }, {
    sequential: [{
      option: "removeAlternativeImages",
      action: "removeAlternativeImages"
    }],
    parallel: [{
      option: "removeAlternativeFonts",
      action: "removeAlternativeFonts"
    }, {
      option: "!removeFrames",
      action: "processFrames"
    }]
  }, {
    sequential: [{
      action: "replaceStylesheets"
    }, {
      action: "replaceStyleAttributes"
    }, {
      action: "insertVariables"
    }, {
      option: "compressHTML",
      action: "compressHTML"
    }, {
      action: "cleanupPage"
    }],
    parallel: [{
      option: "enableMaff",
      action: "insertMAFFMetaData"
    }, {
      action: "setDocInfo"
    }]
  }];
  class Em {
    constructor(e, t) {
      const r = t && e.doc;
      this.root = t, this.options = e, this.options.url = this.options.url || r && this.options.doc.location.href;
      const n = this.options.url.match(/^.*\//);
      if (this.options.resourceReferrer = this.options.passReferrerOnError && n && n[0], this.options.baseURI = r && this.options.doc.baseURI, this.options.rootDocument = t, this.options.updatedResources = this.options.updatedResources || {}, this.options.fontTests = new sm(), this.batchRequest = new Am(), this.processor = new zm(e, this.batchRequest), r) {
        const e = lm.preProcessDoc(this.options.doc, this.options.win, this.options);
        this.options.canvases = e.canvases, this.options.fonts = e.fonts, this.options.stylesheets = e.stylesheets, this.options.images = e.images, this.options.posters = e.posters, this.options.videos = e.videos, this.options.usedFonts = e.usedFonts, this.options.shadowRoots = e.shadowRoots, this.options.referrer = e.referrer, this.markedElements = e.markedElements, this.invalidElements = e.invalidElements;
      }
      this.options.saveRawPage && (this.options.removeFrames = !0), this.options.content = this.options.content || (r ? lm.serialize(this.options.doc) : null), this.onprogress = e.onprogress || (() => {});
    }
    async loadPage() {
      this.onprogress(new wm(hm, {
        pageURL: this.options.url,
        frame: !this.root
      })), await this.processor.loadPage(this.options.content), this.onprogress(new wm(dm, {
        pageURL: this.options.url,
        frame: !this.root
      }));
    }
    async initialize() {
      this.onprogress(new wm(pm, {
        pageURL: this.options.url
      })), await this.executeStage(0), this.pendingPromises = this.executeStage(1), this.root && this.options.doc && lm.postProcessDoc(this.options.doc, this.markedElements, this.invalidElements);
    }
    cancel() {
      this.cancelled = !0, this.batchRequest.cancel(), this.root && this.options.frames && this.options.frames.forEach(function (e) {
        e.runner && e.runner.cancel();
      });
    }
    async run() {
      this.root && (this.processor.initialize(this.batchRequest), this.onprogress(new wm(mm, {
        pageURL: this.options.url,
        max: this.processor.maxResources
      }))), await this.batchRequest.run(e => {
        e.pageURL = this.options.url, this.onprogress(new wm(fm, e));
      }, this.options), await this.pendingPromises, this.options.doc = null, this.options.win = null, await this.executeStage(2), await this.executeStage(3), this.processor.finalize();
    }
    getDocument() {
      return this.processor.doc;
    }
    getStyleSheets() {
      return this.processor.stylesheets;
    }
    getPageData() {
      return this.root && this.onprogress(new wm(gm, {
        pageURL: this.options.url
      })), this.processor.getPageData();
    }
    async executeStage(e) {
      const t = !this.root;
      let r;
      return this.onprogress(new wm(ym, {
        pageURL: this.options.url,
        step: e,
        frame: t
      })), xm[e].sequential.forEach(r => {
        this.onprogress(new wm(km, {
          pageURL: this.options.url,
          step: e,
          task: r.action,
          frame: t
        })), this.cancelled || this.executeTask(r), this.onprogress(new wm(vm, {
          pageURL: this.options.url,
          step: e,
          task: r.action,
          frame: t
        }));
      }), r = xm[e].parallel ? await Promise.all(xm[e].parallel.map(async r => {
        this.onprogress(new wm(km, {
          pageURL: this.options.url,
          step: e,
          task: r.action,
          frame: t
        })), this.cancelled || (await this.executeTask(r)), this.onprogress(new wm(vm, {
          pageURL: this.options.url,
          step: e,
          task: r.action,
          frame: t
        }));
      })) : Promise.resolve(), this.onprogress(new wm(bm, {
        pageURL: this.options.url,
        step: e,
        frame: t
      })), r;
    }
    executeTask(e) {
      if (!e.option || e.option.startsWith("!") && !this.options[e.option] || this.options[e.option]) return this.processor[e.action]();
    }
  }
  class Am {
    constructor() {
      this.requests = new sm(), this.duplicates = new sm();
    }
    addURL(e, {
      asBinary: t,
      expectedType: r,
      groupDuplicates: n,
      baseURI: o,
      blockMixedContent: i
    } = {}) {
      return new Promise((a, s) => {
        const l = JSON.stringify([e, t, r, o, i]);
        let c = this.requests.get(l);
        c || (c = [], this.requests.set(l, c));
        const u = {
          resolve: a,
          reject: s
        };
        if (c.push(u), n) {
          let e = this.duplicates.get(l);
          e || (e = [], this.duplicates.set(l, e)), e.push(u);
        }
      });
    }
    getMaxResources() {
      return this.requests.size;
    }
    run(e, t) {
      const r = [...this.requests.keys()];
      let n = 0;
      return Promise.all(r.map(async r => {
        const [o, i, a, s, l] = JSON.parse(r),
          c = this.requests.get(r);
        try {
          const u = n;
          n += 1;
          const h = await lm.getContent(o, {
            asBinary: i,
            expectedType: a,
            maxResourceSize: t.maxResourceSize,
            maxResourceSizeEnabled: t.maxResourceSizeEnabled,
            frameId: t.windowId,
            resourceReferrer: t.resourceReferrer,
            baseURI: s,
            blockMixedContent: l,
            acceptHeaders: t.acceptHeaders,
            networkTimeout: t.networkTimeout
          });
          e({
            url: o
          }), this.cancelled || c.forEach(e => {
            const t = this.duplicates.get(r),
              n = t && t.length > 1 && t.includes(e);
            e.resolve({
              content: h.data,
              indexResource: u,
              duplicate: n
            });
          });
        } catch (t) {
          n += 1, e({
            url: o
          }), c.forEach(e => e.reject(t));
        }
        this.requests.delete(r);
      }));
    }
    cancel() {
      this.cancelled = !0;
      [...this.requests.keys()].forEach(e => {
        this.requests.get(e).forEach(e => e.reject()), this.requests.delete(e);
      });
    }
  }
  const Sm = ["data:text/"],
    Tm = "data:image/svg+xml",
    Cm = /<script/gi,
    Rm = /<noscript/gi,
    _m = /<canvas/gi,
    Im = "shadowroot",
    Lm = "data-template-shadow-root",
    Nm = "utf-8";
  class zm {
    constructor(e, t) {
      this.options = e, this.stats = new of(e), this.baseURI = $m(e.baseURI || e.url), this.batchRequest = t, this.stylesheets = new sm(), this.styles = new sm(), this.cssVariables = new sm(), this.fontTests = e.fontTests;
    }
    initialize() {
      this.options.saveDate = new Date(), this.options.saveUrl = this.options.url, this.options.enableMaff && (this.maffMetaDataPromise = this.batchRequest.addURL(lm.resolveURL("index.rdf", this.options.baseURI || this.options.url), {
        expectedType: "document"
      })), this.maxResources = this.batchRequest.getMaxResources(), this.options.saveRawPage || this.options.removeFrames || !this.options.frames || this.options.frames.forEach(e => this.maxResources += e.maxResources || 0), this.stats.set("processed", "resources", this.maxResources);
    }
    async loadPage(e, t) {
      let r;
      if (e && !this.options.saveRawPage || (r = await lm.getContent(this.baseURI, {
        maxResourceSize: this.options.maxResourceSize,
        maxResourceSizeEnabled: this.options.maxResourceSizeEnabled,
        charset: t,
        frameId: this.options.windowId,
        resourceReferrer: this.options.resourceReferrer,
        expectedType: "document",
        acceptHeaders: this.options.acceptHeaders,
        networkTimeout: this.options.networkTimeout
      }), e = r.data), this.doc = lm.parseDocContent(e, this.baseURI), this.options.saveRawPage) {
        let t;
        if (this.doc.querySelectorAll('meta[charset], meta[http-equiv="content-type"]').forEach(e => {
          const r = e.content.split(";")[1];
          r && !t && (t = r.split("=")[1].trim().toLowerCase());
        }), t && r.charset && t.toLowerCase() != r.charset.toLowerCase()) return this.loadPage(e, t);
      }
      this.workStyleElement = this.doc.createElement("style"), this.doc.body.appendChild(this.workStyleElement), this.onEventAttributeNames = function (e) {
        const t = e.createElement("div"),
          r = [];
        for (const e in t) e.startsWith("on") && r.push(e);
        return r.push("onunload"), r;
      }(this.doc);
    }
    finalize() {
      this.workStyleElement.parentNode && this.workStyleElement.remove();
    }
    async getPageData() {
      lm.postProcessDoc(this.doc);
      const e = lm.parseURL(this.baseURI);
      if (this.options.insertSingleFileComment) {
        const e = this.doc.documentElement.firstChild;
        let t = this.options.saveUrl,
          r = this.options.saveDate;
        if (8 == e.nodeType && (e.textContent.includes(lm.COMMENT_HEADER_LEGACY) || e.textContent.includes(lm.COMMENT_HEADER))) {
          const n = this.doc.documentElement.firstChild.textContent.split("\n");
          try {
            const [,, o, i] = n;
            t = o.split("url: ")[1], r = i.split("saved date: ")[1], e.remove();
          } catch (e) {}
        }
        const n = (this.options.infobarContent || "").replace(/\\n/g, "\n").replace(/\\t/g, "\t"),
          o = this.doc.createComment("\n " + (this.options.useLegacyCommentHeader ? lm.COMMENT_HEADER_LEGACY : lm.COMMENT_HEADER) + " \n url: " + t + " \n saved date: " + r + (n ? " \n info: " + n : "") + "\n");
        this.doc.documentElement.insertBefore(o, this.doc.documentElement.firstChild);
      }
      if (this.options.insertCanonicalLink && this.options.saveUrl.match(Bm)) {
        let e = this.doc.querySelector("link[rel=canonical]");
        e || (e = this.doc.createElement("link"), e.setAttribute("rel", "canonical"), this.doc.head.appendChild(e)), e && !e.href && (e.href = this.options.saveUrl);
      }
      if (this.options.insertMetaCSP) {
        const e = this.doc.createElement("meta");
        e.httpEquiv = "content-security-policy", e.content = "default-src 'none'; font-src 'self' data:; img-src 'self' data:; style-src 'unsafe-inline'; media-src 'self' data:; script-src 'unsafe-inline' data:; object-src 'self' data:;", this.doc.head.appendChild(e);
      }
      if (this.options.insertMetaNoIndex) {
        let e = this.doc.querySelector("meta[name=robots][content*=noindex]");
        e || (e = this.doc.createElement("meta"), e.setAttribute("name", "robots"), e.setAttribute("content", "noindex"), this.doc.head.appendChild(e));
      }
      const t = this.doc.createElement("style");
      let r;
      t.textContent = 'img[src="data:,"],source[src="data:,"]{display:none!important}', this.doc.head.appendChild(t), this.options.displayStats && (r = lm.getContentSize(this.doc.documentElement.outerHTML));
      const n = lm.serialize(this.doc, this.options.compressHTML);
      if (this.options.displayStats) {
        const e = lm.getContentSize(n);
        this.stats.set("processed", "HTML bytes", e), this.stats.add("discarded", "HTML bytes", r - e);
      }
      let o = (await Fm.evalTemplate(this.options.filenameTemplate, this.options, n)) || "";
      const i = this.options.filenameReplacementCharacter;
      if (o = lm.getValidFilename(o, this.options.filenameReplacedCharacters, i), this.options.backgroundSave || (o = o.replace(/\//g, i)), !this.options.keepFilename && ("bytes" == this.options.filenameMaxLengthUnit && lm.getContentSize(o) > this.options.filenameMaxLength || o.length > this.options.filenameMaxLength)) {
        const e = o.match(/(\.[^.]{3,4})$/),
          t = e && e[0] && e[0].length > 1 ? e[0] : "";
        o = "bytes" == this.options.filenameMaxLengthUnit ? await lm.truncateText(o, this.options.filenameMaxLength - t.length) : o.substring(0, this.options.filenameMaxLength - t.length), o = o + "…" + t;
      }
      o || (o = "Unnamed page");
      const a = this.baseURI.match(/([^/]*)\/?(\.html?.*)$/) || this.baseURI.match(/\/\/([^/]*)\/?$/),
        s = {
          stats: this.stats.data,
          title: this.options.title || (this.baseURI && a ? a[1] : e.hostname ? e.hostname : ""),
          filename: o,
          content: n
        };
      return this.options.addProof && (s.hash = await lm.digest("SHA-256", n)), this.options.retrieveLinks && (s.links = Array.from(new am(Array.from(this.doc.links).map(e => e.href)))), s;
    }
    preProcessPage() {
      this.options.win && this.doc.body.querySelectorAll(':not(svg) title, meta, link[href][rel*="icon"]').forEach(e => e instanceof this.options.win.HTMLElement && this.doc.head.appendChild(e)), this.options.images && !this.options.saveRawPage && (this.doc.querySelectorAll("img[" + lm.IMAGE_ATTRIBUTE_NAME + "]").forEach(e => {
        const t = e.getAttribute(lm.IMAGE_ATTRIBUTE_NAME);
        if (t) {
          const r = this.options.images[Number(t)];
          r && (this.options.removeHiddenElements && (r.size && !r.size.pxWidth && !r.size.pxHeight || "" == e.getAttribute(lm.HIDDEN_CONTENT_ATTRIBUTE_NAME)) ? e.setAttribute("src", lm.EMPTY_RESOURCE) : (r.currentSrc && (e.dataset.singleFileOriginURL = e.getAttribute("src"), e.setAttribute("src", r.currentSrc)), this.options.loadDeferredImages && (e.getAttribute("src") && e.getAttribute("src") != lm.EMPTY_RESOURCE || !e.getAttribute("data-src") || (r.src = e.dataset.src, e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")))));
        }
      }), this.options.loadDeferredImages && this.doc.querySelectorAll("img[data-srcset]").forEach(e => {
        !e.getAttribute("srcset") && e.getAttribute("data-srcset") && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"));
      }));
    }
    replaceStyleContents() {
      this.options.stylesheets && this.doc.querySelectorAll("style").forEach((e, t) => {
        if (e.getAttribute(lm.STYLESHEET_ATTRIBUTE_NAME)) {
          const r = this.options.stylesheets[Number(t)];
          r && (e.textContent = r);
        }
      });
    }
    removeUnselectedElements() {
      function e(e) {
        1 == e.nodeType && e.querySelector("svg,style,link") || !r(e) ? t(e) : e.remove();
      }
      function t(t) {
        r(t) && (t.style.setProperty("display", "none", "important"), Array.from(t.childNodes).forEach(e));
      }
      function r(e) {
        if (1 == e.nodeType) {
          const t = e.tagName && e.tagName.toLowerCase();
          return "svg" != t && "style" != t && "link" != t;
        }
      }
      !function r(n) {
        let o = !1;
        Array.from(n.childNodes).forEach(n => {
          if (1 == n.nodeType) {
            const i = "" == n.getAttribute(lm.SELECTED_CONTENT_ATTRIBUTE_NAME);
            o = o || i, i ? (n.removeAttribute(lm.SELECTED_CONTENT_ATTRIBUTE_NAME), r(n)) : o ? e(n) : t(n);
          }
        });
      }(this.doc.body), this.doc.body.removeAttribute(lm.SELECTED_CONTENT_ATTRIBUTE_NAME);
    }
    insertVideoPosters() {
      this.options.posters && this.doc.querySelectorAll("video[src], video > source[src]").forEach(e => {
        let t;
        t = "VIDEO" == e.tagName ? e : e.parentElement;
        const r = e.getAttribute(lm.POSTER_ATTRIBUTE_NAME);
        if (r) {
          const e = this.options.posters[Number(r)];
          !t.poster && e && t.setAttribute("poster", e);
        }
      });
    }
    insertVideoLinks() {
      const e = "16px";
      this.doc.querySelectorAll("video").forEach(t => {
        const r = t.getAttribute(lm.VIDEO_ATTRIBUTE_NAME);
        if (r) {
          const n = this.options.videos[Number(r)],
            o = n.src || t.src;
          if (t && o) {
            const r = this.doc.createElement("a"),
              i = this.doc.createElement("img");
            r.href = o, r.target = "_blank", r.style.setProperty("z-index", 2147483647, "important"), r.style.setProperty("position", "absolute", "important"), r.style.setProperty("top", "8px", "important"), r.style.setProperty("left", "8px", "important"), r.style.setProperty("width", e, "important"), r.style.setProperty("height", e, "important"), r.style.setProperty("min-width", e, "important"), r.style.setProperty("min-height", e, "important"), r.style.setProperty("max-width", e, "important"), r.style.setProperty("max-height", e, "important"), i.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mSkUrDnYQcchQnSyIijqWKhbBQmkrtOpgcukfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVK/C4ptIjx4LiH9+59+e67A4RGhalm1wSgapaRisfEbG5VDLyiDwEAvZiVmKkn0osZeI6ve/j4ehfhWd7n/hz9St5kgE8kjjLdsIg3iGc2LZ3zPnGIlSSF+Jx43KACiR+5Lrv8xrnosMAzQ0YmNU8cIhaLHSx3MCsZKvE0cVhRNcoXsi4rnLc4q5Uaa9XJbxjMaytprtMcQRxLSCAJETJqKKMCCxFaNVJMpGg/5uEfdvxJcsnkKoORYwFVqJAcP/gb/O6tWZiadJOCMaD7xbY/RoHALtCs2/b3sW03TwD/M3Cltf3VBjD3SXq9rYWPgIFt4OK6rcl7wOUOMPSkS4bkSH6aQqEAvJ/RM+WAwVv6EGtu31r7OH0AMtSr5Rvg4BAYK1L2use9ezr79u+ZVv9+AFlNcp0UUpiqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AsHAB8H+DhhoQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAJUExURQAAAICHi4qKioTuJAkAAAABdFJOUwBA5thmAAAAAWJLR0QCZgt8ZAAAAJJJREFUOI3t070NRCEMA2CnYAOyDyPwpHj/Va7hJ3FzV7zy3ET5JIwoAF6Jk4wzAJAkzxAYG9YRTgB+24wBgKmfrGAKTcEfAY4KRlRoIeBTgKOCERVaCPgU4Khge2GqKOBTgKOCERVaAEC/4PNcnyoSWHpjqkhwKxbcig0Q6AorXYF/+A6eIYD1lVbwG/jdA6/kA2THRAURVubcAAAAAElFTkSuQmCC", i.style.setProperty("width", e, "important"), i.style.setProperty("height", e, "important"), i.style.setProperty("min-width", e, "important"), i.style.setProperty("min-height", e, "important"), i.style.setProperty("max-width", e, "important"), i.style.setProperty("max-height", e, "important"), r.appendChild(i), t.insertAdjacentElement("afterend", r);
            const a = t.parentNode.style.getPropertyValue("position");
            (n.positionParent || a && "static" == a) && "static" != n.positionParent || t.parentNode.style.setProperty("position", "relative", "important");
          }
        }
      });
    }
    removeFrames() {
      const e = this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]');
      this.stats.set("discarded", "frames", e.length), this.stats.set("processed", "frames", e.length), this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]').forEach(e => e.remove());
    }
    removeEmbedScripts() {
      const e = "javascript:";
      this.onEventAttributeNames.forEach(e => this.doc.querySelectorAll("[" + e + "]").forEach(t => t.removeAttribute(e))), this.doc.querySelectorAll("[href]").forEach(t => {
        t.href && t.href.match && t.href.trim().startsWith(e) && t.removeAttribute("href");
      }), this.doc.querySelectorAll("[src]").forEach(t => {
        t.src && t.src.trim().startsWith(e) && t.removeAttribute("src");
      });
      const t = this.doc.querySelectorAll('script:not([type="application/ld+json"]):not([data-template-shadow-root])');
      this.stats.set("discarded", "scripts", t.length), this.stats.set("processed", "scripts", t.length), t.forEach(e => e.remove());
    }
    removeDiscardedResources() {
      this.doc.querySelectorAll("." + lm.SINGLE_FILE_UI_ELEMENT_CLASS).forEach(e => e.remove());
      const e = new sm();
      this.doc.querySelectorAll("noscript").forEach(t => {
        const r = this.doc.createElement("div");
        r.innerHTML = t.dataset.singleFileDisabledNoscript, t.replaceWith(r), e.set(r, t);
      }), this.doc.querySelectorAll("meta[http-equiv=refresh], meta[disabled-http-equiv]").forEach(e => e.remove()), Array.from(e).forEach(([e, t]) => {
        t.dataset.singleFileDisabledNoscript = e.innerHTML, e.replaceWith(t);
      }), this.doc.querySelectorAll('meta[http-equiv="content-security-policy"]').forEach(e => e.remove());
      const t = this.doc.querySelectorAll('applet, object[data]:not([type="image/svg+xml"]):not([type="image/svg-xml"]):not([type="text/html"]), embed[src]:not([src*=".svg"]):not([src*=".pdf"])');
      this.stats.set("discarded", "objects", t.length), this.stats.set("processed", "objects", t.length), t.forEach(e => e.remove());
      this.doc.querySelectorAll("link[rel~=preconnect], link[rel~=prerender], link[rel~=dns-prefetch], link[rel~=preload], link[rel~=manifest], link[rel~=prefetch]").forEach(e => {
        const t = e.getAttribute("rel").replace(/(preconnect|prerender|dns-prefetch|preload|prefetch|manifest)/g, "").trim();
        t.length ? e.setAttribute("rel", t) : e.remove();
      }), this.doc.querySelectorAll('link[rel*=stylesheet][rel*=alternate][title],link[rel*=stylesheet]:not([href]),link[rel*=stylesheet][href=""]').forEach(e => e.remove()), this.options.removeHiddenElements && this.doc.querySelectorAll("input[type=hidden]").forEach(e => e.remove()), this.options.saveFavicon || this.doc.querySelectorAll('link[rel*="icon"]').forEach(e => e.remove()), this.doc.querySelectorAll("a[ping]").forEach(e => e.removeAttribute("ping")), this.doc.querySelectorAll("link[rel=import][href]").forEach(e => e.remove());
    }
    replaceInvalidElements() {
      this.doc.querySelectorAll("template[" + lm.INVALID_ELEMENT_ATTRIBUTE_NAME + "]").forEach(e => {
        const t = this.doc.createElement("span"),
          r = e.content.firstChild;
        r && (r.hasAttributes() && Array.from(r.attributes).forEach(e => t.setAttribute(e.name, e.value)), r.childNodes.forEach(e => t.appendChild(e.cloneNode(!0)))), e.replaceWith(t);
      });
    }
    resetCharsetMeta() {
      let e;
      this.doc.querySelectorAll('meta[charset], meta[http-equiv="content-type"]').forEach(t => {
        const r = t.content.split(";")[1];
        r && !e && (e = r.split("=")[1], e && (this.charset = e.trim().toLowerCase())), t.remove();
      });
      const t = this.doc.createElement("meta");
      t.setAttribute("charset", Nm), this.doc.head.firstChild ? this.doc.head.insertBefore(t, this.doc.head.firstChild) : this.doc.head.appendChild(t);
    }
    setInputValues() {
      this.doc.querySelectorAll("input:not([type=radio]):not([type=checkbox])").forEach(e => {
        const t = e.getAttribute(lm.INPUT_VALUE_ATTRIBUTE_NAME);
        e.setAttribute("value", t || "");
      }), this.doc.querySelectorAll("input[type=radio], input[type=checkbox]").forEach(e => {
        "true" == e.getAttribute(lm.INPUT_VALUE_ATTRIBUTE_NAME) && e.setAttribute("checked", "");
      }), this.doc.querySelectorAll("textarea").forEach(e => {
        const t = e.getAttribute(lm.INPUT_VALUE_ATTRIBUTE_NAME);
        e.textContent = t || "";
      }), this.doc.querySelectorAll("select").forEach(e => {
        e.querySelectorAll("option").forEach(e => {
          null != e.getAttribute(lm.INPUT_VALUE_ATTRIBUTE_NAME) && e.setAttribute("selected", "");
        });
      });
    }
    moveStylesInHead() {
      this.doc.querySelectorAll("style").forEach(e => {
        "" == e.getAttribute(lm.STYLE_ATTRIBUTE_NAME) && this.doc.head.appendChild(e);
      });
    }
    saveFavicon() {
      let e = this.doc.querySelector('link[href][rel="icon"]');
      e || (e = this.doc.querySelector('link[href][rel="shortcut icon"]')), e || (e = this.doc.createElement("link"), e.setAttribute("type", "image/x-icon"), e.setAttribute("rel", "shortcut icon"), e.setAttribute("href", "/favicon.ico")), this.doc.head.appendChild(e);
    }
    replaceCanvasElements() {
      this.options.canvases && this.doc.querySelectorAll("canvas").forEach(e => {
        const t = e.getAttribute(lm.CANVAS_ATTRIBUTE_NAME);
        if (t) {
          const r = this.options.canvases[Number(t)];
          r && (Fm.setBackgroundImage(e, "url(" + r.dataURI + ")"), this.stats.add("processed", "canvas", 1));
        }
      });
    }
    insertFonts() {
      if (this.options.fonts && this.options.fonts.length) {
        let e = "";
        if (this.options.fonts.forEach(t => {
          if (t["font-family"] && t.src) {
            e += "@font-face{";
            let r = "";
            Object.keys(t).forEach(e => {
              r && (r += ";"), r += e + ":" + t[e];
            }), e += r + "}";
          }
        }), e) {
          const t = this.doc.createElement("style");
          t.textContent = e;
          const r = this.doc.querySelector("style");
          r ? r.parentElement.insertBefore(t, r) : this.doc.head.insertBefore(t, this.doc.head.firstChild);
        }
      }
    }
    removeHiddenElements() {
      const e = this.doc.querySelectorAll("[" + lm.HIDDEN_CONTENT_ATTRIBUTE_NAME + "]"),
        t = this.doc.querySelectorAll("[" + lm.REMOVED_CONTENT_ATTRIBUTE_NAME + "]");
      if (this.stats.set("discarded", "hidden elements", t.length), this.stats.set("processed", "hidden elements", t.length), e.length) {
        const t = this.doc.createElement("style");
        t.textContent = ".sf-hidden{display:none!important;}", this.doc.head.appendChild(t), e.forEach(e => {
          "none" != e.style.getPropertyValue("display") && ("important" == e.style.getPropertyPriority("display") ? e.style.setProperty("display", "none", "important") : e.classList.add("sf-hidden"));
        });
      }
      t.forEach(e => e.remove());
    }
    resolveHrefs() {
      this.doc.querySelectorAll("a[href], area[href], link[href]").forEach(e => {
        const t = e.getAttribute("href").trim();
        if ("LINK" == e.tagName && e.rel.includes("stylesheet") && this.options.saveOriginalURLs && !Xm(t) && e.setAttribute("data-sf-original-href", t), !ef(t)) {
          let r;
          try {
            r = lm.resolveURL(t, this.options.baseURI || this.options.url);
          } catch (e) {}
          if (r) {
            const t = $m(this.options.url);
            !r.startsWith(t + "#") || r.startsWith(t + "#!") || this.options.resolveFragmentIdentifierURLs || (r = r.substring(t.length));
            try {
              e.setAttribute("href", r);
            } catch (e) {}
          }
        }
      });
    }
    async insertMissingVideoPosters() {
      await Promise.all(Array.from(this.doc.querySelectorAll("video[src], video > source[src]")).map(async e => {
        let t;
        if (t = "VIDEO" == e.tagName ? e : e.parentElement, !t.poster) {
          const e = t.getAttribute(lm.VIDEO_ATTRIBUTE_NAME);
          if (e) {
            const r = this.options.videos[Number(e)],
              n = r.src || t.src;
            if (n) {
              const e = this.doc.createElement("video");
              e.src = n, e.style.setProperty("width", r.size.pxWidth + "px", "important"), e.style.setProperty("height", r.size.pxHeight + "px", "important"), e.style.setProperty("display", "none", "important"), e.crossOrigin = "anonymous";
              const o = this.doc.createElement("canvas"),
                i = o.getContext("2d");
              return this.options.doc.body.appendChild(e), new Promise(n => {
                e.currentTime = r.currentTime, e.oncanplay = () => {
                  o.width = r.size.pxWidth, o.height = r.size.pxHeight, i.drawImage(e, 0, 0, o.width, o.height);
                  try {
                    t.poster = o.toDataURL("image/png", "");
                  } catch (e) {}
                  e.remove(), n();
                }, e.onerror = () => {
                  e.remove(), n();
                };
              });
            }
          }
        }
      }));
    }
    resolveStyleAttributeURLs() {
      this.doc.querySelectorAll("[style]").forEach(e => {
        if (this.options.blockStylesheets) e.removeAttribute("style");else {
          const t = e.getAttribute("style"),
            r = cm.parse(t, {
              context: "declarationList",
              parseCustomProperty: !0
            });
          Fm.resolveStylesheetURLs(r, this.baseURI, this.workStyleElement), this.styles.set(e, r);
        }
      });
    }
    async resolveStylesheetURLs() {
      if (await Promise.all(Array.from(this.doc.querySelectorAll("style, link[rel*=stylesheet]")).map(async t => {
        const r = Object.assign({}, this.options, {
          charset: this.charset
        });
        let n;
        t.media && (n = t.media.toLowerCase());
        const o = {
          mediaText: n,
          scoped: Boolean(t.closest("[shadowroot]"))
        };
        "LINK" == t.tagName && t.charset && (r.charset = t.charset), await e(t, o, this.stylesheets, this.baseURI, r, this.workStyleElement);
      })), this.options.rootDocument) {
        const t = Object.keys(this.options.updatedResources).filter(e => "stylesheet" == this.options.updatedResources[e].type && !this.options.updatedResources[e].retrieved).map(e => this.options.updatedResources[e]);
        await Promise.all(t.map(async t => {
          if (t.retrieved = !0, !this.options.blockStylesheets) {
            const r = {},
              n = this.doc.createElement("style");
            this.doc.body.appendChild(n), n.textContent = t.content, await e(n, r, this.stylesheets, this.baseURI, this.options, this.workStyleElement);
          }
        }));
      }
      async function e(e, t, r, n, o, i) {
        let a;
        if (r.set(e, t), !o.blockStylesheets) if ("LINK" == e.tagName) a = await Fm.resolveLinkStylesheetURLs(e.href, n, o, i);else {
          a = cm.parse(e.textContent, {
            context: "stylesheet",
            parseCustomProperty: !0
          });
          (await Fm.resolveImportURLs(a, n, o, i)) && (a = cm.parse(cm.generate(a), {
            context: "stylesheet",
            parseCustomProperty: !0
          }));
        }
        a && a.children ? (o.compressCSS && Fm.removeSingleLineCssComments(a), t.stylesheet = a) : r.delete(e);
      }
    }
    async resolveFrameURLs() {
      if (!this.options.saveRawPage) {
        const e = Array.from(this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]'));
        await Promise.all(e.map(async e => {
          if ("OBJECT" == e.tagName) e.setAttribute("data", "data:text/html,");else {
            const t = e.getAttribute("src");
            this.options.saveOriginalURLs && t && !Xm(t) && e.setAttribute("data-sf-original-src", t), e.removeAttribute("src"), e.removeAttribute("srcdoc");
          }
          Array.from(e.childNodes).forEach(e => e.remove());
          const t = e.getAttribute(lm.WIN_ID_ATTRIBUTE_NAME);
          if (this.options.frames && t) {
            const r = this.options.frames.find(e => e.windowId == t);
            r && (await async function (e, t, r, n, o) {
              o.insertSingleFileComment = !1, o.insertCanonicalLink = !1, o.insertMetaNoIndex = !1, o.saveFavicon = !1, o.url = e.baseURI, o.windowId = r, e.content && (o.content = e.content, o.canvases = e.canvases, o.fonts = e.fonts, o.stylesheets = e.stylesheets, o.images = e.images, o.posters = e.posters, o.videos = e.videos, o.usedFonts = e.usedFonts, o.shadowRoots = e.shadowRoots, e.runner = new Em(o), e.frameElement = t, await e.runner.loadPage(), await e.runner.initialize(), e.maxResources = n.getMaxResources());
            }(r, e, t, this.batchRequest, Object.create(this.options)));
          }
        }));
      }
    }
    insertShadowRootContents() {
      const e = this.doc,
        t = this.options;
      if (t.shadowRoots && t.shadowRoots.length) {
        !function r(n) {
          Array.from(n.querySelectorAll("[" + lm.SHADOW_ROOT_ATTRIBUTE_NAME + "]")).forEach(n => {
            const o = n.getAttribute(lm.SHADOW_ROOT_ATTRIBUTE_NAME);
            if (o) {
              const i = t.shadowRoots[Number(o)];
              if (i) {
                const t = e.createElement("template");
                t.setAttribute(Im, i.mode), i.adoptedStyleSheets && i.adoptedStyleSheets.forEach(r => {
                  const n = e.createElement("style");
                  n.textContent = r, t.appendChild(n);
                });
                const o = lm.parseDocContent(i.content);
                if (o.head) {
                  const e = o.head.querySelector("meta[charset]");
                  e && e.remove(), o.head.childNodes.forEach(e => t.appendChild(o.importNode(e, !0)));
                }
                o.body && o.body.childNodes.forEach(e => t.appendChild(o.importNode(e, !0))), r(t), n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t);
              }
            }
          });
        }(this.doc), t.blockScripts && this.doc.querySelectorAll("script[data-template-shadow-root]").forEach(e => e.remove());
        const r = e.createElement("script");
        r.setAttribute(Lm, ""), r.textContent = '(()=>{document.currentScript.remove();processNode(document);function processNode(node){node.querySelectorAll("template[shadowroot]").forEach(element=>{let shadowRoot = element.parentElement.shadowRoot;if (!shadowRoot) {try {shadowRoot=element.parentElement.attachShadow({mode:element.getAttribute("shadowroot")});shadowRoot.innerHTML=element.innerHTML;element.remove()} catch (error) {} if (shadowRoot) {processNode(shadowRoot)}}})}})()', e.body.appendChild(r);
      }
    }
    removeUnusedStyles() {
      this.mediaAllInfo || (this.mediaAllInfo = lm.getMediaAllInfo(this.doc, this.stylesheets, this.styles));
      const e = lm.minifyCSSRules(this.stylesheets, this.styles, this.mediaAllInfo);
      this.stats.set("processed", "CSS rules", e.processed), this.stats.set("discarded", "CSS rules", e.discarded);
    }
    removeUnusedFonts() {
      lm.removeUnusedFonts(this.doc, this.stylesheets, this.styles, this.options);
    }
    removeAlternativeMedias() {
      const e = lm.minifyMedias(this.stylesheets);
      this.stats.set("processed", "medias", e.processed), this.stats.set("discarded", "medias", e.discarded);
    }
    async processStylesheets() {
      this.options.fontDeclarations = new sm(), await Promise.all([...this.stylesheets].map(([, e]) => Fm.processStylesheet(e.stylesheet.children, this.baseURI, this.options, this.cssVariables, this.batchRequest)));
    }
    async processStyleAttributes() {
      return Promise.all([...this.styles].map(([, e]) => Fm.processStyle(e, this.baseURI, this.options, this.cssVariables, this.batchRequest)));
    }
    async processPageResources() {
      this.options.blockImages && this.doc.querySelectorAll("svg").forEach(e => e.remove());
      let e = [['link[href][rel*="icon"]', "href", !1, !0], ['object[type="image/svg+xml"], object[type="image/svg-xml"]', "data"], ["img[src], input[src][type=image]", "src", !0], ['embed[src*=".svg"], embed[src*=".pdf"]', "src"], ["video[poster]", "poster"], ["*[background]", "background"], ["image", "xlink:href"], ["image", "href"]].map(([e, t, r, n]) => Fm.processAttribute(this.doc.querySelectorAll(e), t, this.baseURI, this.options, "image", this.cssVariables, this.styles, this.batchRequest, r, n));
      e = e.concat([Fm.processXLinks(this.doc.querySelectorAll("use"), this.doc, this.baseURI, this.options, this.batchRequest), Fm.processSrcset(this.doc.querySelectorAll("img[srcset], source[srcset]"), this.baseURI, this.options, this.batchRequest)]), e.push(Fm.processAttribute(this.doc.querySelectorAll("audio[src], audio > source[src]"), "src", this.baseURI, this.options, "audio", this.cssVariables, this.styles, this.batchRequest)), e.push(Fm.processAttribute(this.doc.querySelectorAll("video[src], video > source[src]"), "src", this.baseURI, this.options, "video", this.cssVariables, this.styles, this.batchRequest)), await Promise.all(e), this.options.saveFavicon && Fm.processShortcutIcons(this.doc);
    }
    async processScripts() {
      await Promise.all(Array.from(this.doc.querySelectorAll("script[src]")).map(async e => {
        let t, r;
        if (r = e.getAttribute("src"), this.options.saveOriginalURLs && !Xm(r) && e.setAttribute("data-sf-original-src", r), e.removeAttribute("integrity"), this.options.blockScripts) e.removeAttribute("src");else {
          e.textContent = "";
          try {
            t = lm.resolveURL(r, this.baseURI);
          } catch (e) {}
          if (rf(t)) {
            e.removeAttribute("src");
            const r = await lm.getContent(t, {
              asBinary: !0,
              charset: this.charset != Nm && this.charset,
              maxResourceSize: this.options.maxResourceSize,
              maxResourceSizeEnabled: this.options.maxResourceSizeEnabled,
              frameId: this.options.windowId,
              resourceReferrer: this.options.resourceReferrer,
              baseURI: this.options.baseURI,
              blockMixedContent: this.options.blockMixedContent,
              expectedType: "script",
              acceptHeaders: this.options.acceptHeaders,
              networkTimeout: this.options.networkTimeout
            });
            r.data = Wm(t, r, this.options), e.setAttribute("src", r.data), "async" != e.getAttribute("async") && "" != e.getAttribute(lm.ASYNC_SCRIPT_ATTRIBUTE_NAME) || e.setAttribute("async", "");
          }
        }
        this.stats.add("processed", "scripts", 1);
      }));
    }
    removeAlternativeImages() {
      lm.removeAlternativeImages(this.doc);
    }
    async removeAlternativeFonts() {
      await lm.removeAlternativeFonts(this.doc, this.stylesheets, this.options.fontDeclarations, this.options.fontTests);
    }
    async processFrames() {
      if (this.options.frames) {
        const e = Array.from(this.doc.querySelectorAll('iframe, frame, object[type="text/html"][data]'));
        await Promise.all(e.map(async e => {
          const t = e.getAttribute(lm.WIN_ID_ATTRIBUTE_NAME);
          if (t) {
            const r = this.options.frames.find(e => e.windowId == t);
            if (r) if (this.options.frames = this.options.frames.filter(e => e.windowId != t), r.runner && "" != e.getAttribute(lm.HIDDEN_FRAME_ATTRIBUTE_NAME)) {
              this.stats.add("processed", "frames", 1), await r.runner.run();
              const t = await r.runner.getPageData();
              e.removeAttribute(lm.WIN_ID_ATTRIBUTE_NAME);
              let n = "allow-popups allow-top-navigation allow-top-navigation-by-user-activation";
              (t.content.match(Rm) || t.content.match(_m) || t.content.match(Cm)) && (n += " allow-scripts allow-same-origin"), e.setAttribute("sandbox", n), "OBJECT" == e.tagName ? e.setAttribute("data", "data:text/html," + t.content) : "FRAME" == e.tagName ? e.setAttribute("src", "data:text/html," + t.content.replace(/%/g, "%25").replace(/#/g, "%23")) : (e.setAttribute("srcdoc", t.content), e.removeAttribute("src")), this.stats.addAll(t);
            } else e.removeAttribute(lm.WIN_ID_ATTRIBUTE_NAME), this.stats.add("discarded", "frames", 1);
          }
        }));
      }
    }
    replaceStylesheets() {
      this.doc.querySelectorAll("style").forEach(e => {
        const t = this.stylesheets.get(e);
        t ? (this.stylesheets.delete(e), e.textContent = Km(t.stylesheet, this.options), t.mediaText && (e.media = t.mediaText)) : e.remove();
      }), this.doc.querySelectorAll("link[rel*=stylesheet]").forEach(e => {
        const t = this.stylesheets.get(e);
        if (t) {
          this.stylesheets.delete(e);
          const r = this.doc.createElement("style");
          t.mediaText && (r.media = t.mediaText), r.textContent = Km(t.stylesheet, this.options), e.parentElement.replaceChild(r, e);
        } else e.remove();
      });
    }
    replaceStyleAttributes() {
      this.doc.querySelectorAll("[style]").forEach(e => {
        const t = this.styles.get(e);
        t ? (this.styles.delete(e), e.setAttribute("style", Km(t, this.options))) : e.setAttribute("style", "");
      });
    }
    insertVariables() {
      if (this.cssVariables.size) {
        const e = this.doc.createElement("style"),
          t = this.doc.head.querySelector("style");
        t ? this.doc.head.insertBefore(e, t) : this.doc.head.appendChild(e);
        let r = "";
        this.cssVariables.forEach(({
          content: e,
          url: t
        }, n) => {
          this.cssVariables.delete(n), r && (r += ";"), r += `${Um + n}: `, this.options.saveOriginalURLs && (r += `/* original URL: ${t} */ `), r += `url("${e}")`;
        }), e.textContent = ":root{" + r + "}";
      }
    }
    compressHTML() {
      let e;
      this.options.displayStats && (e = lm.getContentSize(this.doc.documentElement.outerHTML)), lm.minifyHTML(this.doc, {
        PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME: lm.PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME
      }), this.options.displayStats && this.stats.add("discarded", "HTML bytes", e - lm.getContentSize(this.doc.documentElement.outerHTML));
    }
    cleanupPage() {
      this.doc.querySelectorAll("base").forEach(e => e.remove());
      const e = this.doc.head.querySelector("meta[charset]");
      e && (this.doc.head.insertBefore(e, this.doc.head.firstChild), 1 == this.doc.head.querySelectorAll("*").length && 0 == this.doc.body.childNodes.length && this.doc.head.querySelector("meta[charset]").remove());
    }
    resetZoomLevel() {
      const e = this.doc.documentElement.style.getPropertyValue("-sf-transform"),
        t = this.doc.documentElement.style.getPropertyPriority("-sf-transform"),
        r = this.doc.documentElement.style.getPropertyValue("-sf-transform-origin"),
        n = this.doc.documentElement.style.getPropertyPriority("-sf-transform-origin"),
        o = this.doc.documentElement.style.getPropertyValue("-sf-min-height"),
        i = this.doc.documentElement.style.getPropertyPriority("-sf-min-height");
      this.doc.documentElement.style.setProperty("transform", e, t), this.doc.documentElement.style.setProperty("transform-origin", r, n), this.doc.documentElement.style.setProperty("min-height", o, i), this.doc.documentElement.style.removeProperty("-sf-transform"), this.doc.documentElement.style.removeProperty("-sf-transform-origin"), this.doc.documentElement.style.removeProperty("-sf-min-height");
    }
    async insertMAFFMetaData() {
      const e = await this.maffMetaDataPromise;
      if (e && e.content) {
        const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
          r = lm.parseXMLContent(e.content),
          n = r.querySelector("RDF > Description > originalurl"),
          o = r.querySelector("RDF > Description > archivetime");
        if (n && (this.options.saveUrl = n.getAttributeNS(t, "resource")), o) {
          const e = o.getAttributeNS(t, "resource");
          if (e) {
            const t = new Date(e);
            isNaN(t.getTime()) || (this.options.saveDate = new Date(e));
          }
        }
      }
    }
    async setDocInfo() {
      const e = this.doc.querySelector("title"),
        t = this.doc.querySelector("meta[name=description]"),
        r = this.doc.querySelector("meta[name=author]"),
        n = this.doc.querySelector("meta[name=creator]"),
        o = this.doc.querySelector("meta[name=publisher]"),
        i = this.doc.querySelector("h1");
      this.options.title = e ? e.textContent.trim() : "", this.options.info = {
        description: t && t.content ? t.content.trim() : "",
        lang: this.doc.documentElement.lang,
        author: r && r.content ? r.content.trim() : "",
        creator: n && n.content ? n.content.trim() : "",
        publisher: o && o.content ? o.content.trim() : "",
        heading: i && i.textContent ? i.textContent.trim() : ""
      }, this.options.infobarContent = await Fm.evalTemplate(this.options.infobarTemplate, this.options, null, !0);
    }
  }
  const Pm = "data:",
    Mm = "about:blank",
    Om = /(#.+?)$/,
    Um = "--sf-img-",
    Dm = 524288;
  class Fm {
    static async evalTemplate(e = "", t, r, n) {
      const o = lm.parseURL(t.saveUrl);
      e = await Jm(e, "page-title", () => t.title || "No title", n, t.filenameReplacementCharacter), e = await Jm(e, "page-heading", () => t.info.heading || "No heading", n, t.filenameReplacementCharacter), e = await Jm(e, "page-language", () => t.info.lang || "No language", n, t.filenameReplacementCharacter), e = await Jm(e, "page-description", () => t.info.description || "No description", n, t.filenameReplacementCharacter), e = await Jm(e, "page-author", () => t.info.author || "No author", n, t.filenameReplacementCharacter), e = await Jm(e, "page-creator", () => t.info.creator || "No creator", n, t.filenameReplacementCharacter), e = await Jm(e, "page-publisher", () => t.info.publisher || "No publisher", n, t.filenameReplacementCharacter), await c(t.saveDate), await c(t.visitDate, "visit-"), e = await Jm(e, "url-hash", () => o.hash.substring(1) || "No hash", n, t.filenameReplacementCharacter), e = await Jm(e, "url-host", () => o.host.replace(/\/$/, "") || "No host", n, t.filenameReplacementCharacter), e = await Jm(e, "url-hostname", () => o.hostname.replace(/\/$/, "") || "No hostname", n, t.filenameReplacementCharacter);
      const i = l(o.href);
      e = await Jm(e, "url-href", () => i || "No href", void 0 === n || n, t.filenameReplacementCharacter), e = await Jm(e, "url-href-digest-sha-1", i ? async () => lm.digest("SHA-1", i) : "No href", n, t.filenameReplacementCharacter), e = await Jm(e, "url-href-flat", () => l(o.href) || "No href", !1, t.filenameReplacementCharacter), e = await Jm(e, "url-referrer", () => l(t.referrer) || "No referrer", void 0 === n || n, t.filenameReplacementCharacter), e = await Jm(e, "url-referrer-flat", () => l(t.referrer) || "No referrer", !1, t.filenameReplacementCharacter), e = await Jm(e, "url-password", () => o.password || "No password", n, t.filenameReplacementCharacter), e = await Jm(e, "url-pathname", () => l(o.pathname).replace(/^\//, "").replace(/\/$/, "") || "No pathname", void 0 === n || n, t.filenameReplacementCharacter), e = await Jm(e, "url-pathname-flat", () => l(o.pathname) || "No pathname", !1, t.filenameReplacementCharacter), e = await Jm(e, "url-port", () => o.port || "No port", n, t.filenameReplacementCharacter), e = await Jm(e, "url-protocol", () => o.protocol || "No protocol", n, t.filenameReplacementCharacter), e = await Jm(e, "url-search", () => o.search.substring(1) || "No search", n, t.filenameReplacementCharacter);
      const a = lm.getSearchParams(o.search);
      for (const [r, o] of a) e = await Jm(e, "url-search-" + r, () => o || "", n, t.filenameReplacementCharacter);
      e = e.replace(/{\s*url-search-[^}\s]*\s*}/gi, ""), e = await Jm(e, "url-username", () => o.username || "No username", n, t.filenameReplacementCharacter), e = await Jm(e, "tab-id", () => String(t.tabId || "No tab id"), n, t.filenameReplacementCharacter), e = await Jm(e, "tab-index", () => String(t.tabIndex || "No tab index"), n, t.filenameReplacementCharacter), e = await Jm(e, "url-last-segment", () => l(function (e, t) {
        let r = e.pathname.match(/\/([^/]+)$/),
          n = r && r[0];
        n || (r = e.href.match(/([^/]+)\/?$/), n = r && r[0]);
        n || (r = n.match(/(.*)\.[^.]+$/), n = r && r[0]);
        n || (n = e.hostname.replace(/\/+/g, t).replace(/\/$/, ""));
        r = n.match(/(.*)\.[^.]+$/), r && r[1] && (n = r[1]);
        return n = n.replace(/\/$/, "").replace(/^\//, ""), n;
      }(o, t.filenameReplacementCharacter)) || "No last segment", n, t.filenameReplacementCharacter), r && (e = await Jm(e, "digest-sha-256", async () => lm.digest("SHA-256", r), n, t.filenameReplacementCharacter), e = await Jm(e, "digest-sha-384", async () => lm.digest("SHA-384", r), n, t.filenameReplacementCharacter), e = await Jm(e, "digest-sha-512", async () => lm.digest("SHA-512", r), n, t.filenameReplacementCharacter));
      const s = t.bookmarkFolders && t.bookmarkFolders.join("/") || "";
      return e = await Jm(e, "bookmark-pathname", () => s, void 0 === n || n, t.filenameReplacementCharacter), e = await Jm(e, "bookmark-pathname-flat", () => s, !1, t.filenameReplacementCharacter), (e = await Jm(e, "profile-name", () => t.profileName, n, t.filenameReplacementCharacter)).trim();
      function l(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return e;
        }
      }
      async function c(r, o = "") {
        r && (e = await Jm(e, o + "datetime-iso", () => r.toISOString(), n, t.filenameReplacementCharacter), e = await Jm(e, o + "date-iso", () => r.toISOString().split("T")[0], n, t.filenameReplacementCharacter), e = await Jm(e, o + "time-iso", () => r.toISOString().split("T")[1].split("Z")[0], n, t.filenameReplacementCharacter), e = await Jm(e, o + "date-locale", () => r.toLocaleDateString(), n, t.filenameReplacementCharacter), e = await Jm(e, o + "time-locale", () => r.toLocaleTimeString(), n, t.filenameReplacementCharacter), e = await Jm(e, o + "day-locale", () => String(r.getDate()).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "month-locale", () => String(r.getMonth() + 1).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "year-locale", () => String(r.getFullYear()), n, t.filenameReplacementCharacter), e = await Jm(e, o + "datetime-locale", () => r.toLocaleString(), n, t.filenameReplacementCharacter), e = await Jm(e, o + "datetime-utc", () => r.toUTCString(), n, t.filenameReplacementCharacter), e = await Jm(e, o + "day-utc", () => String(r.getUTCDate()).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "month-utc", () => String(r.getUTCMonth() + 1).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "year-utc", () => String(r.getUTCFullYear()), n, t.filenameReplacementCharacter), e = await Jm(e, o + "hours-locale", () => String(r.getHours()).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "minutes-locale", () => String(r.getMinutes()).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "seconds-locale", () => String(r.getSeconds()).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "hours-utc", () => String(r.getUTCHours()).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "minutes-utc", () => String(r.getUTCMinutes()).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "seconds-utc", () => String(r.getUTCSeconds()).padStart(2, "0"), n, t.filenameReplacementCharacter), e = await Jm(e, o + "time-ms", () => String(r.getTime()), n, t.filenameReplacementCharacter));
      }
    }
    static setBackgroundImage(e, t, r) {
      e.style.setProperty("background-blend-mode", "normal", "important"), e.style.setProperty("background-clip", "content-box", "important"), e.style.setProperty("background-position", r && r["background-position"] ? r["background-position"] : "center", "important"), e.style.setProperty("background-color", r && r["background-color"] ? r["background-color"] : "transparent", "important"), e.style.setProperty("background-image", t, "important"), e.style.setProperty("background-size", r && r["background-size"] ? r["background-size"] : "100% 100%", "important"), e.style.setProperty("background-origin", "content-box", "important"), e.style.setProperty("background-repeat", "no-repeat", "important");
    }
    static processShortcutIcons(e) {
      let t = Zm(Array.from(e.querySelectorAll('link[href][rel="icon"], link[href][rel="shortcut icon"]')));
      t || (t = Zm(Array.from(e.querySelectorAll('link[href][rel*="icon"]'))), t && (t.rel = "icon")), t && e.querySelectorAll('link[href][rel*="icon"]').forEach(e => {
        e != t && e.remove();
      });
    }
    static removeSingleLineCssComments(e) {
      const t = [];
      for (let r = e.children.head; r; r = r.next) {
        const e = r.data;
        "Raw" == e.type && e.value && e.value.trim().startsWith("//") && t.push(r);
      }
      t.forEach(t => e.children.remove(t));
    }
    static async resolveImportURLs(e, t, r, n, o = new am()) {
      let i;
      Fm.resolveStylesheetURLs(e, t, n);
      const a = (s = e, cm.findAll(s, e => "Atrule" == e.type && "import" == e.name));
      var s;
      return await Promise.all(a.map(async e => {
        const a = cm.find(e, e => "Url" == e.type) || cm.find(e, e => "String" == e.type);
        if (a) {
          let c = $m(a.value);
          if (!ef(c) && tf(c)) {
            a.value = lm.EMPTY_RESOURCE;
            try {
              c = lm.resolveURL(c, t);
            } catch (e) {}
            if (rf(c) && !o.has(c)) {
              const t = await async function (e) {
                const t = await lm.getContent(e, {
                  maxResourceSize: r.maxResourceSize,
                  maxResourceSizeEnabled: r.maxResourceSizeEnabled,
                  validateTextContentType: !0,
                  frameId: r.frameId,
                  charset: r.charset,
                  resourceReferrer: r.resourceReferrer,
                  baseURI: r.baseURI,
                  blockMixedContent: r.blockMixedContent,
                  expectedType: "stylesheet",
                  acceptHeaders: r.acceptHeaders,
                  networkTimeout: r.networkTimeout
                });
                return Gm(t.data, t.charset) || Gm(t.data, r.charset) ? t : (r = Object.assign({}, r, {
                  charset: Ym(t.data)
                }), lm.getContent(e, {
                  maxResourceSize: r.maxResourceSize,
                  maxResourceSizeEnabled: r.maxResourceSizeEnabled,
                  validateTextContentType: !0,
                  frameId: r.frameId,
                  charset: r.charset,
                  resourceReferrer: r.resourceReferrer,
                  baseURI: r.baseURI,
                  blockMixedContent: r.blockMixedContent,
                  expectedType: "stylesheet",
                  acceptHeaders: r.acceptHeaders,
                  networkTimeout: r.networkTimeout
                }));
              }(c);
              c = t.resourceURL, t.data = Wm(c, t, r), t.data && t.data.match(/^<!doctype /i) && (t.data = "");
              const a = cm.find(e, e => "MediaQueryList" == e.type);
              a && (t.data = (s = t.data, (l = cm.generate(a)) ? "@media " + l + "{ " + s + " }" : s));
              const u = cm.parse(t.data, {
                  context: "stylesheet",
                  parseCustomProperty: !0
                }),
                h = new am(o);
              h.add(c), await Fm.resolveImportURLs(u, c, r, n, h);
              for (let t of Object.keys(u)) e[t] = u[t];
              i = !0;
            }
          }
        }
        var s, l;
      })), i;
    }
    static resolveStylesheetURLs(e, t, r) {
      Qm(e).map(e => {
        const n = e.value;
        let o = $m(n);
        if (r.textContent = 'tmp { content:"' + o + '"}', r.sheet && r.sheet.cssRules && (o = lm.removeQuotes(r.sheet.cssRules[0].style.getPropertyValue("content"))), !ef(o)) if (!o || tf(o)) {
          let r;
          if (!n.startsWith("#")) try {
            r = lm.resolveURL(o, t);
          } catch (e) {}
          rf(r) && (e.value = r);
        } else e.value = lm.EMPTY_RESOURCE;
      });
    }
    static async resolveLinkStylesheetURLs(e, t, r, n) {
      if ((e = $m(e)) && e != t && e != Mm) {
        const o = await lm.getContent(e, {
          maxResourceSize: r.maxResourceSize,
          maxResourceSizeEnabled: r.maxResourceSizeEnabled,
          charset: r.charset,
          frameId: r.frameId,
          resourceReferrer: r.resourceReferrer,
          validateTextContentType: !0,
          baseURI: t,
          blockMixedContent: r.blockMixedContent,
          expectedType: "stylesheet",
          acceptHeaders: r.acceptHeaders,
          networkTimeout: r.networkTimeout
        });
        if (!Gm(o.data, o.charset) && !Gm(o.data, r.charset)) return r = Object.assign({}, r, {
          charset: Ym(o.data)
        }), Fm.resolveLinkStylesheetURLs(e, t, r, n);
        e = o.resourceURL, o.data = Wm(o.resourceURL, o, r), o.data && o.data.match(/^<!doctype /i) && (o.data = "");
        let i = cm.parse(o.data, {
          context: "stylesheet",
          parseCustomProperty: !0
        });
        return (await Fm.resolveImportURLs(i, e, r, n)) && (i = cm.parse(cm.generate(i), {
          context: "stylesheet",
          parseCustomProperty: !0
        })), i;
      }
    }
    static async processStylesheet(e, t, r, n, o) {
      const i = [],
        a = [];
      for (let l = e.head; l; l = l.next) {
        const e = l.data;
        "Atrule" == e.type && "charset" == e.name ? a.push(l) : e.block && e.block.children && ("Rule" == e.type ? i.push(this.processStyle(e, t, r, n, o)) : "Atrule" != e.type || "media" != e.name && "supports" != e.name ? "Atrule" == e.type && "font-face" == e.name && i.push(s(e)) : i.push(this.processStylesheet(e.block.children, t, r, n, o)));
      }
      async function s(e) {
        const n = Qm(e);
        await Promise.all(n.map(async e => {
          const n = e.value;
          if (r.blockFonts) e.value = lm.EMPTY_RESOURCE;else {
            const i = $m(n);
            if (!ef(i) && rf(i)) {
              let {
                  content: a
                } = await o.addURL(i, {
                  asBinary: !0,
                  expectedType: "font",
                  baseURI: t,
                  blockMixedContent: r.blockMixedContent
                }),
                s = r.fontDeclarations.get(e);
              s || (s = [], r.fontDeclarations.set(e, s)), s.push(i), !Xm(i) && r.saveOriginalURLs ? e.value = "-sf-url-original(" + JSON.stringify(n) + ") " + a : e.value = a;
            }
          }
        }));
      }
      a.forEach(t => e.remove(t)), await Promise.all(i);
    }
    static async processStyle(e, t, r, n, o) {
      const i = Qm(e);
      await Promise.all(i.map(async e => {
        const t = e.value;
        if (r.blockImages) e.value = lm.EMPTY_RESOURCE;else {
          const i = $m(t);
          if (!ef(i) && rf(i)) {
            let {
              content: a,
              indexResource: s,
              duplicate: l
            } = await o.addURL(i, {
              asBinary: !0,
              expectedType: "image",
              groupDuplicates: r.groupDuplicateImages
            });
            if (!t.startsWith("#")) {
              const o = r.maxSizeDuplicateImages || Dm;
              if (l && r.groupDuplicateImages && lm.getContentSize(a) < o) {
                const r = cm.parse("var(" + Um + s + ")", {
                  context: "value"
                });
                for (let t of Object.keys(r.children.head.data)) e[t] = r.children.head.data[t];
                n.set(s, {
                  content: a,
                  url: t
                });
              } else !Xm(i) && r.saveOriginalURLs ? e.value = "-sf-url-original(" + JSON.stringify(t) + ") " + a : e.value = a;
            }
          }
        }
      }));
    }
    static async processAttribute(e, t, r, n, o, i, a, s, l, c) {
      function u(e, t, r) {
        "video" == r || "audio" == r ? e.removeAttribute(t) : e.setAttribute(t, lm.EMPTY_RESOURCE);
      }
      await Promise.all(Array.from(e).map(async e => {
        let h = e.getAttribute(t);
        if (null != h) {
          h = $m(h);
          let d = e.dataset.singleFileOriginURL;
          if (n.saveOriginalURLs && !Xm(h) && e.setAttribute("data-sf-original-" + t, h), delete e.dataset.singleFileOriginURL, n["block" + o.charAt(0).toUpperCase() + o.substring(1) + "s"]) u(e, t, o);else if (!ef(h) && (u(e, t, o), tf(h))) {
            try {
              h = lm.resolveURL(h, r);
            } catch (e) {}
            if (rf(h)) {
              let {
                content: u,
                indexResource: p,
                duplicate: m
              } = await s.addURL(h, {
                asBinary: !0,
                expectedType: o,
                groupDuplicates: n.groupDuplicateImages && "IMG" == e.tagName && "src" == t
              });
              if (d && u == lm.EMPTY_RESOURCE) {
                try {
                  d = lm.resolveURL(d, r);
                } catch (e) {}
                try {
                  h = d, u = (await lm.getContent(h, {
                    asBinary: !0,
                    expectedType: o,
                    maxResourceSize: n.maxResourceSize,
                    maxResourceSizeEnabled: n.maxResourceSizeEnabled,
                    frameId: n.windowId,
                    resourceReferrer: n.resourceReferrer,
                    acceptHeaders: n.acceptHeaders,
                    networkTimeout: n.networkTimeout
                  })).data;
                } catch (e) {}
              }
              if (c && u == lm.EMPTY_RESOURCE) e.remove();else if (u !== lm.EMPTY_RESOURCE) {
                if (!Sm.filter(e => u.startsWith(e)).length) {
                  const r = u.startsWith(Tm),
                    s = n.maxSizeDuplicateImages || Dm;
                  if ("image" == o && l && m && !r && lm.getContentSize(u) < s) {
                    if (Fm.replaceImageSource(e, Um + p, n)) {
                      i.set(p, {
                        content: u,
                        url: d
                      });
                      const t = cm.parse(e.getAttribute("style"), {
                        context: "declarationList",
                        parseCustomProperty: !0
                      });
                      a.set(e, t);
                    } else e.setAttribute(t, u);
                  } else e.setAttribute(t, u);
                }
              }
            }
          }
        }
      }));
    }
    static async processXLinks(e, t, r, n, o) {
      let i = "xlink:href";
      await Promise.all(Array.from(e).map(async e => {
        let t = e.getAttribute(i);
        null == t && (i = "href", t = e.getAttribute(i)), n.saveOriginalURLs && !Xm(t) && e.setAttribute("data-sf-original-href", t);
        let a = $m(t);
        if (n.blockImages) e.setAttribute(i, lm.EMPTY_RESOURCE);else if (tf(a) && !ef(a)) {
          e.setAttribute(i, lm.EMPTY_RESOURCE);
          try {
            a = lm.resolveURL(a, r);
          } catch (e) {}
          if (rf(a)) {
            const n = t.match(Om);
            if (t.startsWith(r + "#")) e.setAttribute(i, n[0]);else {
              const t = await o.addURL(a, {
                  expectedType: "image"
                }),
                r = lm.parseSVGContent(t.content);
              if (n && n[0]) {
                let t;
                try {
                  t = r.querySelector(n[0]);
                } catch (e) {}
                t && (e.setAttribute(i, n[0]), e.parentElement.insertBefore(t, e.parentElement.firstChild));
              } else {
                const t = await o.addURL(a, {
                  expectedType: "image"
                });
                e.setAttribute(i, "data:image/svg+xml," + t);
              }
            }
          }
        } else a == n.url && e.setAttribute(i, t.substring(a.length));
      }));
    }
    static async processSrcset(e, t, r, n) {
      await Promise.all(Array.from(e).map(async e => {
        const o = e.getAttribute("srcset"),
          i = lm.parseSrcset(o);
        if (r.saveOriginalURLs && !Xm(o) && e.setAttribute("data-sf-original-srcset", o), r.blockImages) e.setAttribute("srcset", "");else {
          const r = await Promise.all(i.map(async e => {
            let r = $m(e.url);
            if (ef(r)) return r + (e.w ? " " + e.w + "w" : e.d ? " " + e.d + "x" : "");
            if (tf(r)) {
              try {
                r = lm.resolveURL(r, t);
              } catch (e) {}
              if (rf(r)) {
                const {
                  content: t
                } = await n.addURL(r, {
                  asBinary: !0,
                  expectedType: "image"
                });
                return Sm.filter(e => t.startsWith(e)).length ? "" : t + (e.w ? " " + e.w + "w" : e.d ? " " + e.d + "x" : "");
              }
              return "";
            }
            return "";
          }));
          e.setAttribute("srcset", r.join(", "));
        }
      }));
    }
    static replaceImageSource(e, t, r) {
      if (e.getAttribute(lm.IMAGE_ATTRIBUTE_NAME)) {
        const n = r.images[Number(e.getAttribute(lm.IMAGE_ATTRIBUTE_NAME))];
        if (n && n.replaceable) {
          e.setAttribute("src", `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${n.size.pxWidth}" height="${n.size.pxHeight}"><rect fill-opacity="0"/></svg>`);
          const r = {};
          return ("content" == n.objectFit || "cover" == n.objectFit) && n.objectFit && (r["background-size"] = n.objectFit), n.objectPosition && (r["background-position"] = n.objectPosition), n.backgroundColor && (r["background-color"] = n.backgroundColor), Fm.setBackgroundImage(e, "var(" + t + ")", r), e.removeAttribute(lm.IMAGE_ATTRIBUTE_NAME), !0;
        }
      }
    }
  }
  const qm = "blob:",
    Bm = /^https?:\/\//,
    jm = /^file:\/\//,
    Hm = /^https?:\/\/+\s*$/,
    Vm = /^(https?:\/\/|file:\/\/|blob:).+/;
  function Wm(e, t, r) {
    return r.rootDocument && r.updatedResources[e] ? (r.updatedResources[e].retrieved = !0, r.updatedResources[e].content) : t.data || "";
  }
  function $m(e) {
    return !e || e.startsWith(Pm) ? e : e.split("#")[0];
  }
  function Gm(e, t = "utf-8") {
    const r = Ym(e);
    return !r || r == t.toLowerCase();
  }
  function Ym(e) {
    const t = e.match(/^@charset\s+"([^"]*)";/i);
    if (t && t[1]) return t[1].toLowerCase().trim();
  }
  async function Jm(e, t, r, n, o) {
    let i, a;
    if (e) {
      const s = "{\\s*" + t.replace(/\W|_/g, "[$&]") + "\\s*}";
      let l = new RegExp(s + "\\[\\d+(ch)?\\]", "g");
      if (e.match(l)) {
        const t = e.match(l)[0];
        t.match(/\[(\d+)\]$/) ? (i = Number(t.match(/\[(\d+)\]$/)[1]), (isNaN(i) || i <= 0) && (i = null)) : (a = Number(t.match(/\[(\d+)ch\]$/)[1]), (isNaN(a) || a <= 0) && (a = null));
      } else l = new RegExp(s, "g");
      if (e.match(l)) {
        let t = await r();
        return n || (t = t.replace(/\/+/g, o)), i ? t = await lm.truncateText(t, i) : a && (t = t.substring(0, a)), e.replace(l, t);
      }
    }
    return e;
  }
  function Qm(e) {
    return cm.findAll(e, e => "Url" == e.type);
  }
  function Km(e, t) {
    let r = cm.generate(e);
    return t.compressCSS && (r = lm.compressCSS(r)), t.saveOriginalURLs && (r = function (e) {
      return e.replace(/url\(-sf-url-original\\\(\\"(.*?)\\"\\\)\\ /g, "/* original URL: $1 */url(");
    }(r)), r;
  }
  function Zm(e) {
    return (e = e.filter(e => e.href != lm.EMPTY_RESOURCE)).sort((e, t) => (parseInt(t.sizes, 10) || 16) - (parseInt(e.sizes, 10) || 16)), e[0];
  }
  function Xm(e) {
    return e && (e.startsWith(Pm) || e.startsWith(qm));
  }
  function ef(e) {
    return e && (e.startsWith(Pm) || e == Mm);
  }
  function tf(e) {
    return e && !e.match(Hm);
  }
  function rf(e) {
    return tf(e) && (e.match(Bm) || e.match(jm) || e.startsWith(qm)) && e.match(Vm);
  }
  const nf = {
    discarded: {
      "HTML bytes": 0,
      "hidden elements": 0,
      scripts: 0,
      objects: 0,
      "audio sources": 0,
      "video sources": 0,
      frames: 0,
      "CSS rules": 0,
      canvas: 0,
      stylesheets: 0,
      resources: 0,
      medias: 0
    },
    processed: {
      "HTML bytes": 0,
      "hidden elements": 0,
      scripts: 0,
      objects: 0,
      "audio sources": 0,
      "video sources": 0,
      frames: 0,
      "CSS rules": 0,
      canvas: 0,
      stylesheets: 0,
      resources: 0,
      medias: 0
    }
  };
  class of {
    constructor(e) {
      this.options = e, e.displayStats && (this.data = JSON.parse(JSON.stringify(nf)));
    }
    set(e, t, r) {
      this.options.displayStats && (this.data[e][t] = r);
    }
    add(e, t, r) {
      this.options.displayStats && (this.data[e][t] += r);
    }
    addAll(e) {
      this.options.displayStats && (Object.keys(this.data.discarded).forEach(t => this.add("discarded", t, e.stats.discarded[t] || 0)), Object.keys(this.data.processed).forEach(t => this.add("processed", t, e.stats.processed[t] || 0)));
    }
  }
  const af = 1048576,
    sf = ["~", "+", "\\\\", "?", "%", "*", ":", "|", '"', "<", ">", "\0-", ""],
    lf = globalThis.URL,
    cf = globalThis.DOMParser,
    uf = globalThis.Blob,
    hf = globalThis.FileReader,
    df = (e, t) => globalThis.fetch(e, t),
    pf = globalThis.crypto,
    mf = globalThis.TextDecoder,
    ff = globalThis.TextEncoder;
  function gf(e) {
    return (e = e || {}).fetch = e.fetch || df, e.frameFetch = e.frameFetch || e.fetch || df, {
      getContent: async function (t, r) {
        let n, o, i, a;
        const s = e.fetch,
          l = e.frameFetch;
        if (r.blockMixedContent && /^https:/i.test(r.baseURI) && !/^https:/i.test(t)) return yf(t, r);
        i = r.networkTimeout ? new Promise((e, t) => {
          a = e, o = globalThis.setTimeout(() => t(new Error("network timeout")), r.networkTimeout);
        }) : new Promise(e => {
          a = e;
        });
        try {
          const e = r.acceptHeaders ? r.acceptHeaders[r.expectedType] : "*/*";
          if (r.frameId) try {
            n = await Promise.race([l(t, {
              frameId: r.frameId,
              referrer: r.resourceReferrer,
              headers: {
                accept: e
              }
            }), i]);
          } catch (r) {
            n = await Promise.race([s(t, {
              headers: {
                accept: e
              }
            }), i]);
          } else n = await Promise.race([s(t, {
            referrer: r.resourceReferrer,
            headers: {
              accept: e
            }
          }), i]);
        } catch (e) {
          return yf(t, r);
        } finally {
          a(), r.networkTimeout && globalThis.clearTimeout(o);
        }
        let c;
        try {
          c = await n.arrayBuffer();
        } catch (e) {
          return {
            data: r.asBinary ? $ : "",
            resourceURL: t
          };
        }
        t = n.url || t;
        let u,
          h = "";
        try {
          const e = new pd(n.headers.get("content-type"));
          h = e.type + "/" + e.subtype, u = e.parameters.get("charset");
        } catch (e) {}
        h || (h = function (e, t) {
          if ("image" == e) {
            if (r([255, 255, 255, 255], [0, 0, 1, 0])) return "image/x-icon";
            if (r([255, 255, 255, 255], [0, 0, 2, 0])) return "image/x-icon";
            if (r([255, 255], [78, 77])) return "image/bmp";
            if (r([255, 255, 255, 255, 255, 255], [71, 73, 70, 56, 57, 97])) return "image/gif";
            if (r([255, 255, 255, 255, 255, 255], [71, 73, 70, 56, 59, 97])) return "image/gif";
            if (r([255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255], [82, 73, 70, 70, 0, 0, 0, 0, 87, 69, 66, 80, 86, 80])) return "image/webp";
            if (r([255, 255, 255, 255, 255, 255, 255, 255], [137, 80, 78, 71, 13, 10, 26, 10])) return "image/png";
            if (r([255, 255, 255], [255, 216, 255])) return "image/jpeg";
          }
          if ("font" == e) {
            if (r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 80])) return "application/vnd.ms-fontobject";
            if (r([255, 255, 255, 255], [0, 1, 0, 0])) return "font/ttf";
            if (r([255, 255, 255, 255], [79, 84, 84, 79])) return "font/otf";
            if (r([255, 255, 255, 255], [116, 116, 99, 102])) return "font/collection";
            if (r([255, 255, 255, 255], [119, 79, 70, 70])) return "font/woff";
            if (r([255, 255, 255, 255], [119, 79, 70, 50])) return "font/woff2";
          }
          function r(e, r) {
            let n = !0,
              o = 0;
            if (t.byteLength >= r.length) {
              const i = new Uint8Array(t, 0, e.length);
              for (o = 0; o < e.length && n; o++) n = n && (i[o] & e[o]) == r[o];
              return n;
            }
          }
        }(r.expectedType, c));
        !u && r.charset && (u = r.charset);
        if (r.asBinary) {
          if (n.status >= 400) return yf(t, r);
          try {
            return r.maxResourceSizeEnabled && c.byteLength > r.maxResourceSize * af ? yf(t, r) : yf(t, r, c, null, h);
          } catch (e) {
            return yf(t, r);
          }
        } else {
          if (n.status >= 400 || r.validateTextContentType && h && !h.startsWith("text/")) return yf(t, r);
          if (u || (u = "utf-8"), r.maxResourceSizeEnabled && c.byteLength > r.maxResourceSize * af) return yf(t, r, null, u);
          try {
            return yf(t, r, c, u, h);
          } catch (e) {
            return yf(t, r, null, u);
          }
        }
      },
      parseURL: (e, t) => void 0 === t ? new lf(e) : new lf(e, t),
      resolveURL(e, t) {
        return this.parseURL(e, t).href;
      },
      getSearchParams: e => Array.from(new URLSearchParams(e)),
      getValidFilename: (e, t = sf, r = "_") => (t.forEach(t => e = e.replace(new RegExp("[" + t + "]+", "g"), r)), e = e.replace(/\.\.\//g, "").replace(/^\/+/, "").replace(/\/+/g, "/").replace(/\/$/, "").replace(/\.$/, "").replace(/\.\//g, "." + r).replace(/\/\./g, "/" + r)),
      parseDocContent(e, t) {
        const r = new cf().parseFromString(e, "text/html");
        r.head || r.documentElement.insertBefore(r.createElement("HEAD"), r.body);
        let n = r.querySelector("base");
        return n && n.getAttribute("href") || (n && n.remove(), n = r.createElement("base"), n.setAttribute("href", t), r.head.insertBefore(n, r.head.firstChild)), r;
      },
      parseXMLContent: e => new cf().parseFromString(e, "text/xml"),
      parseSVGContent(e) {
        const t = new cf().parseFromString(e, "image/svg+xml");
        return t.querySelector("parsererror") ? new cf().parseFromString(e, "text/html") : t;
      },
      async digest(e, t) {
        try {
          return function (e) {
            const t = [],
              r = new DataView(e);
            for (let e = 0; e < r.byteLength; e += 4) {
              const n = "00000000",
                o = (n + r.getUint32(e).toString(16)).slice(-n.length);
              t.push(o);
            }
            return t.join("");
          }(await pf.subtle.digest(e, new ff("utf-8").encode(t)));
        } catch (e) {
          return "";
        }
      },
      getContentSize: e => new uf([e]).size,
      truncateText(e, t) {
        const r = new uf([e]),
          n = new hf();
        return n.readAsText(r.slice(0, t)), new Promise((r, o) => {
          n.addEventListener("load", () => {
            e.startsWith(n.result) ? r(n.result) : this.truncateText(e, t - 1).then(r).catch(o);
          }, !1), n.addEventListener("error", o, !1);
        });
      },
      minifyHTML: (e, t) => Yp(e, t),
      minifyCSSRules: (e, t, r) => Ip(e, t, r),
      removeUnusedFonts: (e, t, r, n) => $d(e, t, r, n),
      removeAlternativeFonts: (e, t, r, n) => Ld(e, t, r, n),
      getMediaAllInfo: (e, t, r) => pp(e, t, r),
      compressCSS: (e, t) => ad(e, t),
      minifyMedias: e => Sp(e),
      removeAlternativeImages: e => Mp(e),
      parseSrcset: e => ld(e),
      preProcessDoc: (e, t, r) => J(e, t, r),
      postProcessDoc(e, t, r) {
        te(e, t, r);
      },
      serialize: (e, t) => tm(e, t),
      removeQuotes: e => ie(e),
      ON_BEFORE_CAPTURE_EVENT_NAME: y,
      ON_AFTER_CAPTURE_EVENT_NAME: b,
      WIN_ID_ATTRIBUTE_NAME: S,
      REMOVED_CONTENT_ATTRIBUTE_NAME: k,
      HIDDEN_CONTENT_ATTRIBUTE_NAME: v,
      HIDDEN_FRAME_ATTRIBUTE_NAME: x,
      IMAGE_ATTRIBUTE_NAME: T,
      POSTER_ATTRIBUTE_NAME: C,
      VIDEO_ATTRIBUTE_NAME: R,
      CANVAS_ATTRIBUTE_NAME: _,
      STYLE_ATTRIBUTE_NAME: I,
      INPUT_VALUE_ATTRIBUTE_NAME: L,
      SHADOW_ROOT_ATTRIBUTE_NAME: A,
      PRESERVED_SPACE_ELEMENT_ATTRIBUTE_NAME: E,
      STYLESHEET_ATTRIBUTE_NAME: z,
      SELECTED_CONTENT_ATTRIBUTE_NAME: M,
      INVALID_ELEMENT_ATTRIBUTE_NAME: O,
      COMMENT_HEADER: H,
      COMMENT_HEADER_LEGACY: V,
      SINGLE_FILE_UI_ELEMENT_CLASS: W,
      EMPTY_RESOURCE: $
    };
  }
  async function yf(e, t, r, n, o) {
    if (r) {
      if (t.asBinary) {
        const e = new hf();
        e.readAsDataURL(new uf([r], {
          type: o + (t.charset ? ";charset=" + t.charset : "")
        })), r = await new Promise((t, r) => {
          e.addEventListener("load", () => t(e.result), !1), e.addEventListener("error", r, !1);
        });
      } else {
        const e = new Uint8Array(r.slice(0, 4));
        132 == e[0] && 49 == e[1] && 149 == e[2] && 51 == e[3] ? n = "gb18030" : 255 == e[0] && 254 == e[1] ? n = "utf-16le" : 254 == e[0] && 255 == e[1] && (n = "utf-16be");
        try {
          r = new mf(n).decode(r);
        } catch (e) {
          r = new mf(n = "utf-8").decode(r);
        }
      }
    } else r = t.asBinary ? $ : "";
    return {
      data: r,
      resourceURL: e,
      charset: n
    };
  }
  function bf(t) {
    void 0 === e.SingleFile && (e.SingleFile = function (...e) {
      return [lm, cm] = e, um;
    }(gf(t), Tu));
  }
  e.SingleFile = void 0, e.getPageData = async function (t = {}, r, n = globalThis.document, o = globalThis) {
    const i = st;
    let a;
    if (bf(r), n && o) {
      Y(n);
      const e = [];
      if (!t.saveRawPage) {
        if (!t.removeFrames && i && globalThis.frames && globalThis.frames.length) {
          let r;
          r = t.loadDeferredImages ? new Promise(e => globalThis.setTimeout(() => e(i.getAsync(t)), t.loadDeferredImagesMaxIdleTime - i.TIMEOUT_INIT_REQUEST_MESSAGE)) : i.getAsync(t), e.push(r);
        }
        t.loadDeferredImages && e.push(ve(t));
      }
      [t.frames] = await Promise.all(e), a = t.frames && t.frames.sessionId;
    }
    t.doc = n, t.win = o, t.insertCanonicalLink = !0, t.onprogress = e => {
      e.type === e.RESOURCES_INITIALIZED && n && o && t.loadDeferredImages && we(t);
    };
    const s = new e.SingleFile(t);
    return await s.run(), a && i.cleanup(a), await s.getPageData();
  }, e.helper = ce, e.init = bf, e.modules = im, e.processors = lt, e.vendor = md, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ 6124:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(1934);

__webpack_require__(5654);

__webpack_require__(7694);

if (__webpack_require__.g._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
__webpack_require__.g._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});

/***/ }),

/***/ 5654:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = "object" === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof __webpack_require__.g === "object" ? __webpack_require__.g :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);


/***/ }),

/***/ 7694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(1761);
module.exports = __webpack_require__(5645).RegExp.escape;


/***/ }),

/***/ 4963:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 3365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(2032);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ 7722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(6314)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(7728)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 6793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(4496)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ 3328:
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ 7007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 5216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(508);
var toAbsoluteIndex = __webpack_require__(2337);
var toLength = __webpack_require__(875);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ 6852:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(508);
var toAbsoluteIndex = __webpack_require__(2337);
var toLength = __webpack_require__(875);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ 9490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var forOf = __webpack_require__(3531);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ 9315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(2110);
var toLength = __webpack_require__(875);
var toAbsoluteIndex = __webpack_require__(2337);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 50:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(741);
var IObject = __webpack_require__(9797);
var toObject = __webpack_require__(508);
var toLength = __webpack_require__(875);
var asc = __webpack_require__(6886);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ 7628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(4963);
var toObject = __webpack_require__(508);
var IObject = __webpack_require__(9797);
var toLength = __webpack_require__(875);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ 2736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
var isArray = __webpack_require__(4302);
var SPECIES = __webpack_require__(6314)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 6886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(2736);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ 4398:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(4963);
var isObject = __webpack_require__(5286);
var invoke = __webpack_require__(7242);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ 1488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(2032);
var TAG = __webpack_require__(6314)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 2032:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 9824:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(9275).f);
var create = __webpack_require__(2503);
var redefineAll = __webpack_require__(4408);
var ctx = __webpack_require__(741);
var anInstance = __webpack_require__(3328);
var forOf = __webpack_require__(3531);
var $iterDefine = __webpack_require__(2923);
var step = __webpack_require__(5436);
var setSpecies = __webpack_require__(2974);
var DESCRIPTORS = __webpack_require__(7057);
var fastKey = (__webpack_require__(4728).fastKey);
var validate = __webpack_require__(1616);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ 6132:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(1488);
var from = __webpack_require__(9490);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ 3657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(4408);
var getWeak = (__webpack_require__(4728).getWeak);
var anObject = __webpack_require__(7007);
var isObject = __webpack_require__(5286);
var anInstance = __webpack_require__(3328);
var forOf = __webpack_require__(3531);
var createArrayMethod = __webpack_require__(50);
var $has = __webpack_require__(9181);
var validate = __webpack_require__(1616);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ 5795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(3816);
var $export = __webpack_require__(2985);
var redefine = __webpack_require__(7234);
var redefineAll = __webpack_require__(4408);
var meta = __webpack_require__(4728);
var forOf = __webpack_require__(3531);
var anInstance = __webpack_require__(3328);
var isObject = __webpack_require__(5286);
var fails = __webpack_require__(4253);
var $iterDetect = __webpack_require__(7462);
var setToStringTag = __webpack_require__(2943);
var inheritIfRequired = __webpack_require__(266);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ 5645:
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 2811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(9275);
var createDesc = __webpack_require__(681);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(4963);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 3537:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(4253);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ 870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(7007);
var toPrimitive = __webpack_require__(1689);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ 1355:
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 7057:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4253)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 2457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
var document = (__webpack_require__(3816).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 4430:
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 5541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(7184);
var gOPS = __webpack_require__(4548);
var pIE = __webpack_require__(4682);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 2985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var core = __webpack_require__(5645);
var hide = __webpack_require__(7728);
var redefine = __webpack_require__(7234);
var ctx = __webpack_require__(741);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 8852:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(6314)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ 4253:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 8082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(8269);
var redefine = __webpack_require__(7234);
var hide = __webpack_require__(7728);
var fails = __webpack_require__(4253);
var defined = __webpack_require__(1355);
var wks = __webpack_require__(6314);
var regexpExec = __webpack_require__(1165);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ 3218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(7007);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 3325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(4302);
var isObject = __webpack_require__(5286);
var toLength = __webpack_require__(875);
var ctx = __webpack_require__(741);
var IS_CONCAT_SPREADABLE = __webpack_require__(6314)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ 3531:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(741);
var call = __webpack_require__(8851);
var isArrayIter = __webpack_require__(6555);
var anObject = __webpack_require__(7007);
var toLength = __webpack_require__(875);
var getIterFn = __webpack_require__(9002);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ 18:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3825)('native-function-to-string', Function.toString);


/***/ }),

/***/ 3816:
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 9181:
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 7728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(9275);
var createDesc = __webpack_require__(681);
module.exports = __webpack_require__(7057) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(3816).document);
module.exports = document && document.documentElement;


/***/ }),

/***/ 1734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(7057) && !__webpack_require__(4253)(function () {
  return Object.defineProperty(__webpack_require__(2457)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
var setPrototypeOf = (__webpack_require__(7375).set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ 7242:
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ 9797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(2032);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 6555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(2803);
var ITERATOR = __webpack_require__(6314)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 4302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(2032);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 8367:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(5286);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ 5286:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 5364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(5286);
var cof = __webpack_require__(2032);
var MATCH = __webpack_require__(6314)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ 8851:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7007);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 9988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(2503);
var descriptor = __webpack_require__(681);
var setToStringTag = __webpack_require__(2943);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7728)(IteratorPrototype, __webpack_require__(6314)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 2923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(4461);
var $export = __webpack_require__(2985);
var redefine = __webpack_require__(7234);
var hide = __webpack_require__(7728);
var Iterators = __webpack_require__(2803);
var $iterCreate = __webpack_require__(9988);
var setToStringTag = __webpack_require__(2943);
var getPrototypeOf = __webpack_require__(468);
var ITERATOR = __webpack_require__(6314)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 7462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(6314)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 5436:
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 2803:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 4461:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 3086:
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ 4934:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(1801);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ 6206:
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ 8757:
/***/ ((module) => {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),

/***/ 1801:
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ 4728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(3953)('meta');
var isObject = __webpack_require__(5286);
var has = __webpack_require__(9181);
var setDesc = (__webpack_require__(9275).f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(4253)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 133:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Map = __webpack_require__(8416);
var $export = __webpack_require__(2985);
var shared = __webpack_require__(3825)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(147))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ 4351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var macrotask = (__webpack_require__(4193).set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(2032)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ 3499:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(4963);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 5345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(7057);
var getKeys = __webpack_require__(7184);
var gOPS = __webpack_require__(4548);
var pIE = __webpack_require__(4682);
var toObject = __webpack_require__(508);
var IObject = __webpack_require__(9797);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(4253)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 2503:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7007);
var dPs = __webpack_require__(5588);
var enumBugKeys = __webpack_require__(4430);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(2457)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(639).appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 9275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(7007);
var IE8_DOM_DEFINE = __webpack_require__(1734);
var toPrimitive = __webpack_require__(1689);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7057) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 5588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(9275);
var anObject = __webpack_require__(7007);
var getKeys = __webpack_require__(7184);

module.exports = __webpack_require__(7057) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 1670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(4461) || !__webpack_require__(4253)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(3816)[K];
});


/***/ }),

/***/ 8693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(4682);
var createDesc = __webpack_require__(681);
var toIObject = __webpack_require__(2110);
var toPrimitive = __webpack_require__(1689);
var has = __webpack_require__(9181);
var IE8_DOM_DEFINE = __webpack_require__(1734);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7057) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 9327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(2110);
var gOPN = (__webpack_require__(616).f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(189);
var hiddenKeys = (__webpack_require__(4430).concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 4548:
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9181);
var toObject = __webpack_require__(508);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(9181);
var toIObject = __webpack_require__(2110);
var arrayIndexOf = __webpack_require__(9315)(false);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 7184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(189);
var enumBugKeys = __webpack_require__(4430);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 4682:
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 3160:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2985);
var core = __webpack_require__(5645);
var fails = __webpack_require__(4253);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 1131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7057);
var getKeys = __webpack_require__(7184);
var toIObject = __webpack_require__(2110);
var isEnum = (__webpack_require__(4682).f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ 7643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(616);
var gOPS = __webpack_require__(4548);
var anObject = __webpack_require__(7007);
var Reflect = (__webpack_require__(3816).Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ 7743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(3816).parseFloat);
var $trim = (__webpack_require__(9599).trim);

module.exports = 1 / $parseFloat(__webpack_require__(4644) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ 5960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(3816).parseInt);
var $trim = (__webpack_require__(9599).trim);
var ws = __webpack_require__(4644);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ 188:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ 94:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(7007);
var isObject = __webpack_require__(5286);
var newPromiseCapability = __webpack_require__(3499);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 681:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 4408:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(7234);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ 7234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var hide = __webpack_require__(7728);
var has = __webpack_require__(9181);
var SRC = __webpack_require__(3953)('src');
var $toString = __webpack_require__(18);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(5645).inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 7787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(1488);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ 1165:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(3218);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 5496:
/***/ ((module) => {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),

/***/ 7195:
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ 1024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(2985);
var aFunction = __webpack_require__(4963);
var ctx = __webpack_require__(741);
var forOf = __webpack_require__(3531);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ 4881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(2985);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ 7375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(5286);
var anObject = __webpack_require__(7007);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(741)(Function.call, (__webpack_require__(8693).f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 2974:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(3816);
var dP = __webpack_require__(9275);
var DESCRIPTORS = __webpack_require__(7057);
var SPECIES = __webpack_require__(6314)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ 2943:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(9275).f);
var has = __webpack_require__(9181);
var TAG = __webpack_require__(6314)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 9335:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(3825)('keys');
var uid = __webpack_require__(3953);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 3825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(5645);
var global = __webpack_require__(3816);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(4461) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 8364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7007);
var aFunction = __webpack_require__(4963);
var SPECIES = __webpack_require__(6314)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ 7717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(4253);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ 4496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(1467);
var defined = __webpack_require__(1355);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 2094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(5364);
var defined = __webpack_require__(1355);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ 9395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var fails = __webpack_require__(4253);
var defined = __webpack_require__(1355);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ 5442:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(875);
var repeat = __webpack_require__(8595);
var defined = __webpack_require__(1355);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ 8595:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(1467);
var defined = __webpack_require__(1355);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ 9599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var defined = __webpack_require__(1355);
var fails = __webpack_require__(4253);
var spaces = __webpack_require__(4644);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ 4644:
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 4193:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(741);
var invoke = __webpack_require__(7242);
var html = __webpack_require__(639);
var cel = __webpack_require__(2457);
var global = __webpack_require__(3816);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(2032)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ 2337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(1467);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 4843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(1467);
var toLength = __webpack_require__(875);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ 1467:
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 2110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(9797);
var defined = __webpack_require__(1355);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(1467);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(1355);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 1689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5286);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 8440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(7057)) {
  var LIBRARY = __webpack_require__(4461);
  var global = __webpack_require__(3816);
  var fails = __webpack_require__(4253);
  var $export = __webpack_require__(2985);
  var $typed = __webpack_require__(9383);
  var $buffer = __webpack_require__(1125);
  var ctx = __webpack_require__(741);
  var anInstance = __webpack_require__(3328);
  var propertyDesc = __webpack_require__(681);
  var hide = __webpack_require__(7728);
  var redefineAll = __webpack_require__(4408);
  var toInteger = __webpack_require__(1467);
  var toLength = __webpack_require__(875);
  var toIndex = __webpack_require__(4843);
  var toAbsoluteIndex = __webpack_require__(2337);
  var toPrimitive = __webpack_require__(1689);
  var has = __webpack_require__(9181);
  var classof = __webpack_require__(1488);
  var isObject = __webpack_require__(5286);
  var toObject = __webpack_require__(508);
  var isArrayIter = __webpack_require__(6555);
  var create = __webpack_require__(2503);
  var getPrototypeOf = __webpack_require__(468);
  var gOPN = (__webpack_require__(616).f);
  var getIterFn = __webpack_require__(9002);
  var uid = __webpack_require__(3953);
  var wks = __webpack_require__(6314);
  var createArrayMethod = __webpack_require__(50);
  var createArrayIncludes = __webpack_require__(9315);
  var speciesConstructor = __webpack_require__(8364);
  var ArrayIterators = __webpack_require__(6997);
  var Iterators = __webpack_require__(2803);
  var $iterDetect = __webpack_require__(7462);
  var setSpecies = __webpack_require__(2974);
  var arrayFill = __webpack_require__(6852);
  var arrayCopyWithin = __webpack_require__(5216);
  var $DP = __webpack_require__(9275);
  var $GOPD = __webpack_require__(8693);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ 1125:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(3816);
var DESCRIPTORS = __webpack_require__(7057);
var LIBRARY = __webpack_require__(4461);
var $typed = __webpack_require__(9383);
var hide = __webpack_require__(7728);
var redefineAll = __webpack_require__(4408);
var fails = __webpack_require__(4253);
var anInstance = __webpack_require__(3328);
var toInteger = __webpack_require__(1467);
var toLength = __webpack_require__(875);
var toIndex = __webpack_require__(4843);
var gOPN = (__webpack_require__(616).f);
var dP = (__webpack_require__(9275).f);
var arrayFill = __webpack_require__(6852);
var setToStringTag = __webpack_require__(2943);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ 9383:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var hide = __webpack_require__(7728);
var uid = __webpack_require__(3953);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ 3953:
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ 1616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ 6074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var core = __webpack_require__(5645);
var LIBRARY = __webpack_require__(4461);
var wksExt = __webpack_require__(8787);
var defineProperty = (__webpack_require__(9275).f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 8787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(6314);


/***/ }),

/***/ 6314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(3825)('wks');
var uid = __webpack_require__(3953);
var Symbol = (__webpack_require__(3816).Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 9002:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(1488);
var ITERATOR = __webpack_require__(6314)('iterator');
var Iterators = __webpack_require__(2803);
module.exports = (__webpack_require__(5645).getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 1761:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(2985);
var $re = __webpack_require__(5496)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),

/***/ 2000:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(2985);

$export($export.P, 'Array', { copyWithin: __webpack_require__(5216) });

__webpack_require__(7722)('copyWithin');


/***/ }),

/***/ 5745:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $every = __webpack_require__(50)(4);

$export($export.P + $export.F * !__webpack_require__(7717)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ 8977:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(2985);

$export($export.P, 'Array', { fill: __webpack_require__(6852) });

__webpack_require__(7722)('fill');


/***/ }),

/***/ 8837:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $filter = __webpack_require__(50)(2);

$export($export.P + $export.F * !__webpack_require__(7717)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ 4899:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(2985);
var $find = __webpack_require__(50)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(7722)(KEY);


/***/ }),

/***/ 2310:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(2985);
var $find = __webpack_require__(50)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(7722)(KEY);


/***/ }),

/***/ 4336:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $forEach = __webpack_require__(50)(0);
var STRICT = __webpack_require__(7717)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ 522:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(741);
var $export = __webpack_require__(2985);
var toObject = __webpack_require__(508);
var call = __webpack_require__(8851);
var isArrayIter = __webpack_require__(6555);
var toLength = __webpack_require__(875);
var createProperty = __webpack_require__(2811);
var getIterFn = __webpack_require__(9002);

$export($export.S + $export.F * !__webpack_require__(7462)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 3369:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $indexOf = __webpack_require__(9315)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(7717)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ 774:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(2985);

$export($export.S, 'Array', { isArray: __webpack_require__(4302) });


/***/ }),

/***/ 6997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(7722);
var step = __webpack_require__(5436);
var Iterators = __webpack_require__(2803);
var toIObject = __webpack_require__(2110);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(2923)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 7842:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(2985);
var toIObject = __webpack_require__(2110);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(9797) != Object || !__webpack_require__(7717)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 9564:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var toIObject = __webpack_require__(2110);
var toInteger = __webpack_require__(1467);
var toLength = __webpack_require__(875);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(7717)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ 1802:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $map = __webpack_require__(50)(1);

$export($export.P + $export.F * !__webpack_require__(7717)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ 8295:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var createProperty = __webpack_require__(2811);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(4253)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ 3750:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $reduce = __webpack_require__(7628);

$export($export.P + $export.F * !__webpack_require__(7717)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ 3057:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $reduce = __webpack_require__(7628);

$export($export.P + $export.F * !__webpack_require__(7717)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var html = __webpack_require__(639);
var cof = __webpack_require__(2032);
var toAbsoluteIndex = __webpack_require__(2337);
var toLength = __webpack_require__(875);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(4253)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ 6773:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $some = __webpack_require__(50)(3);

$export($export.P + $export.F * !__webpack_require__(7717)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var aFunction = __webpack_require__(4963);
var toObject = __webpack_require__(508);
var fails = __webpack_require__(4253);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(7717)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ 1842:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(2974)('Array');


/***/ }),

/***/ 1822:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(2985);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ 1031:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(2985);
var toISOString = __webpack_require__(3537);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ 9977:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var toObject = __webpack_require__(508);
var toPrimitive = __webpack_require__(1689);

$export($export.P + $export.F * __webpack_require__(4253)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ 1560:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(6314)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(7728)(proto, TO_PRIMITIVE, __webpack_require__(870));


/***/ }),

/***/ 6331:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(7234)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ 9730:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(2985);

$export($export.P, 'Function', { bind: __webpack_require__(4398) });


/***/ }),

/***/ 8377:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(5286);
var getPrototypeOf = __webpack_require__(468);
var HAS_INSTANCE = __webpack_require__(6314)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(9275).f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ 6059:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(9275).f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(7057) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ 8416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(9824);
var validate = __webpack_require__(1616);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(5795)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ 6503:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(2985);
var log1p = __webpack_require__(6206);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ 6786:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(2985);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ 932:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(2985);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ 7526:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(2985);
var sign = __webpack_require__(1801);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ 1591:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ 9073:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(2985);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ 347:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(2985);
var $expm1 = __webpack_require__(3086);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ 579:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(2985);

$export($export.S, 'Math', { fround: __webpack_require__(4934) });


/***/ }),

/***/ 4669:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(2985);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ 7710:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(2985);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(4253)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ 5789:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ 3514:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(2985);

$export($export.S, 'Math', { log1p: __webpack_require__(6206) });


/***/ }),

/***/ 9978:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ 8472:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(2985);

$export($export.S, 'Math', { sign: __webpack_require__(1801) });


/***/ }),

/***/ 6946:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(2985);
var expm1 = __webpack_require__(3086);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(4253)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ 5068:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(2985);
var expm1 = __webpack_require__(3086);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ 413:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ 1246:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(3816);
var has = __webpack_require__(9181);
var cof = __webpack_require__(2032);
var inheritIfRequired = __webpack_require__(266);
var toPrimitive = __webpack_require__(1689);
var fails = __webpack_require__(4253);
var gOPN = (__webpack_require__(616).f);
var gOPD = (__webpack_require__(8693).f);
var dP = (__webpack_require__(9275).f);
var $trim = (__webpack_require__(9599).trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(2503)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(7057) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(7234)(global, NUMBER, $Number);
}


/***/ }),

/***/ 5972:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(2985);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ 3403:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(2985);
var _isFinite = (__webpack_require__(3816).isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ 2516:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(2985);

$export($export.S, 'Number', { isInteger: __webpack_require__(8367) });


/***/ }),

/***/ 9371:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(2985);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ 6479:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(2985);
var isInteger = __webpack_require__(8367);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ 1736:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(2985);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ 1889:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(2985);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ 5177:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var $parseFloat = __webpack_require__(7743);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ 6943:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var $parseInt = __webpack_require__(5960);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ 726:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var toInteger = __webpack_require__(1467);
var aNumberValue = __webpack_require__(3365);
var repeat = __webpack_require__(8595);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(4253)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ 1901:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $fails = __webpack_require__(4253);
var aNumberValue = __webpack_require__(3365);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ 5115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(2985);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(5345) });


/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(2503) });


/***/ }),

/***/ 7470:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7057), 'Object', { defineProperties: __webpack_require__(5588) });


/***/ }),

/***/ 8388:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7057), 'Object', { defineProperty: (__webpack_require__(9275).f) });


/***/ }),

/***/ 9375:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(5286);
var meta = (__webpack_require__(4728).onFreeze);

__webpack_require__(3160)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ 4882:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(2110);
var $getOwnPropertyDescriptor = (__webpack_require__(8693).f);

__webpack_require__(3160)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ 9622:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(3160)('getOwnPropertyNames', function () {
  return (__webpack_require__(9327).f);
});


/***/ }),

/***/ 1520:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(508);
var $getPrototypeOf = __webpack_require__(468);

__webpack_require__(3160)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 9892:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(5286);

__webpack_require__(3160)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ 4157:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(5286);

__webpack_require__(3160)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ 5095:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(5286);

__webpack_require__(3160)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ 9176:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(2985);
$export($export.S, 'Object', { is: __webpack_require__(7195) });


/***/ }),

/***/ 7476:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(508);
var $keys = __webpack_require__(7184);

__webpack_require__(3160)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 4672:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(5286);
var meta = (__webpack_require__(4728).onFreeze);

__webpack_require__(3160)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ 3533:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(5286);
var meta = (__webpack_require__(4728).onFreeze);

__webpack_require__(3160)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ 8838:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(2985);
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(7375).set) });


/***/ }),

/***/ 6253:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(1488);
var test = {};
test[__webpack_require__(6314)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(7234)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ 4299:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var $parseFloat = __webpack_require__(7743);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ 1084:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var $parseInt = __webpack_require__(5960);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(4461);
var global = __webpack_require__(3816);
var ctx = __webpack_require__(741);
var classof = __webpack_require__(1488);
var $export = __webpack_require__(2985);
var isObject = __webpack_require__(5286);
var aFunction = __webpack_require__(4963);
var anInstance = __webpack_require__(3328);
var forOf = __webpack_require__(3531);
var speciesConstructor = __webpack_require__(8364);
var task = (__webpack_require__(4193).set);
var microtask = __webpack_require__(4351)();
var newPromiseCapabilityModule = __webpack_require__(3499);
var perform = __webpack_require__(188);
var userAgent = __webpack_require__(575);
var promiseResolve = __webpack_require__(94);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(6314)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(4408)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(2943)($Promise, PROMISE);
__webpack_require__(2974)(PROMISE);
Wrapper = __webpack_require__(5645)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(7462)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ 1572:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(2985);
var aFunction = __webpack_require__(4963);
var anObject = __webpack_require__(7007);
var rApply = ((__webpack_require__(3816).Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(4253)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ 2139:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(2985);
var create = __webpack_require__(2503);
var aFunction = __webpack_require__(4963);
var anObject = __webpack_require__(7007);
var isObject = __webpack_require__(5286);
var fails = __webpack_require__(4253);
var bind = __webpack_require__(4398);
var rConstruct = ((__webpack_require__(3816).Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 685:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(9275);
var $export = __webpack_require__(2985);
var anObject = __webpack_require__(7007);
var toPrimitive = __webpack_require__(1689);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(4253)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 5535:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(2985);
var gOPD = (__webpack_require__(8693).f);
var anObject = __webpack_require__(7007);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ 7347:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(2985);
var anObject = __webpack_require__(7007);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(9988)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ 6633:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(8693);
var $export = __webpack_require__(2985);
var anObject = __webpack_require__(7007);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ 8989:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(2985);
var getProto = __webpack_require__(468);
var anObject = __webpack_require__(7007);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ 3049:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(8693);
var getPrototypeOf = __webpack_require__(468);
var has = __webpack_require__(9181);
var $export = __webpack_require__(2985);
var isObject = __webpack_require__(5286);
var anObject = __webpack_require__(7007);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ 8270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(2985);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ 4510:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(2985);
var anObject = __webpack_require__(7007);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ 3984:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(2985);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(7643) });


/***/ }),

/***/ 5769:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(2985);
var anObject = __webpack_require__(7007);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 6014:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(2985);
var setProto = __webpack_require__(7375);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 55:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(9275);
var gOPD = __webpack_require__(8693);
var getPrototypeOf = __webpack_require__(468);
var has = __webpack_require__(9181);
var $export = __webpack_require__(2985);
var createDesc = __webpack_require__(681);
var anObject = __webpack_require__(7007);
var isObject = __webpack_require__(5286);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ 3946:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var inheritIfRequired = __webpack_require__(266);
var dP = (__webpack_require__(9275).f);
var gOPN = (__webpack_require__(616).f);
var isRegExp = __webpack_require__(5364);
var $flags = __webpack_require__(3218);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(7057) && (!CORRECT_NEW || __webpack_require__(4253)(function () {
  re2[__webpack_require__(6314)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(7234)(global, 'RegExp', $RegExp);
}

__webpack_require__(2974)('RegExp');


/***/ }),

/***/ 8269:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(1165);
__webpack_require__(2985)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ 6774:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(7057) && /./g.flags != 'g') (__webpack_require__(9275).f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(3218)
});


/***/ }),

/***/ 1466:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(7007);
var toLength = __webpack_require__(875);
var advanceStringIndex = __webpack_require__(6793);
var regExpExec = __webpack_require__(7787);

// @@match logic
__webpack_require__(8082)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(7007);
var toObject = __webpack_require__(508);
var toLength = __webpack_require__(875);
var toInteger = __webpack_require__(1467);
var advanceStringIndex = __webpack_require__(6793);
var regExpExec = __webpack_require__(7787);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(8082)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ 6142:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(7007);
var sameValue = __webpack_require__(7195);
var regExpExec = __webpack_require__(7787);

// @@search logic
__webpack_require__(8082)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ 1876:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(5364);
var anObject = __webpack_require__(7007);
var speciesConstructor = __webpack_require__(8364);
var advanceStringIndex = __webpack_require__(6793);
var toLength = __webpack_require__(875);
var callRegExpExec = __webpack_require__(7787);
var regexpExec = __webpack_require__(1165);
var fails = __webpack_require__(4253);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(8082)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ 6108:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(6774);
var anObject = __webpack_require__(7007);
var $flags = __webpack_require__(3218);
var DESCRIPTORS = __webpack_require__(7057);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(7234)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(4253)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ 8184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(9824);
var validate = __webpack_require__(1616);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(5795)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ 856:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(9395)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ 703:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(9395)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ 1539:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(9395)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ 5292:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(9395)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ 9539:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $at = __webpack_require__(4496)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ 6620:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(2985);
var toLength = __webpack_require__(875);
var context = __webpack_require__(2094);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(8852)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ 6629:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(9395)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ 3694:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(9395)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ 7648:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(9395)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ 191:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var toAbsoluteIndex = __webpack_require__(2337);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ 2850:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(2985);
var context = __webpack_require__(2094);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(8852)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 7795:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(9395)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ 9115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(4496)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(2923)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 4531:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(9395)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ 8306:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var toIObject = __webpack_require__(2110);
var toLength = __webpack_require__(875);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ 823:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(8595)
});


/***/ }),

/***/ 3605:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(9395)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ 7732:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(2985);
var toLength = __webpack_require__(875);
var context = __webpack_require__(2094);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(8852)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ 6780:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(9395)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ 9937:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(9395)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ 511:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(9395)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ 4564:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(9599)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ 5767:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3816);
var has = __webpack_require__(9181);
var DESCRIPTORS = __webpack_require__(7057);
var $export = __webpack_require__(2985);
var redefine = __webpack_require__(7234);
var META = (__webpack_require__(4728).KEY);
var $fails = __webpack_require__(4253);
var shared = __webpack_require__(3825);
var setToStringTag = __webpack_require__(2943);
var uid = __webpack_require__(3953);
var wks = __webpack_require__(6314);
var wksExt = __webpack_require__(8787);
var wksDefine = __webpack_require__(6074);
var enumKeys = __webpack_require__(5541);
var isArray = __webpack_require__(4302);
var anObject = __webpack_require__(7007);
var isObject = __webpack_require__(5286);
var toObject = __webpack_require__(508);
var toIObject = __webpack_require__(2110);
var toPrimitive = __webpack_require__(1689);
var createDesc = __webpack_require__(681);
var _create = __webpack_require__(2503);
var gOPNExt = __webpack_require__(9327);
var $GOPD = __webpack_require__(8693);
var $GOPS = __webpack_require__(4548);
var $DP = __webpack_require__(9275);
var $keys = __webpack_require__(7184);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(616).f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(4682).f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(4461)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7728)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 142:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var $typed = __webpack_require__(9383);
var buffer = __webpack_require__(1125);
var anObject = __webpack_require__(7007);
var toAbsoluteIndex = __webpack_require__(2337);
var toLength = __webpack_require__(875);
var isObject = __webpack_require__(5286);
var ArrayBuffer = (__webpack_require__(3816).ArrayBuffer);
var speciesConstructor = __webpack_require__(8364);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(4253)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(2974)(ARRAY_BUFFER);


/***/ }),

/***/ 1786:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
$export($export.G + $export.W + $export.F * !(__webpack_require__(9383).ABV), {
  DataView: (__webpack_require__(1125).DataView)
});


/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ 3834:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ 4821:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ 1303:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ 5368:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ 9103:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ 3318:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ 6964:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ 2152:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8440)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ 147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(3816);
var each = __webpack_require__(50)(0);
var redefine = __webpack_require__(7234);
var meta = __webpack_require__(4728);
var assign = __webpack_require__(5345);
var weak = __webpack_require__(3657);
var isObject = __webpack_require__(5286);
var validate = __webpack_require__(1616);
var NATIVE_WEAK_MAP = __webpack_require__(1616);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(5795)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ 9192:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(3657);
var validate = __webpack_require__(1616);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(5795)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ 1268:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(2985);
var flattenIntoArray = __webpack_require__(3325);
var toObject = __webpack_require__(508);
var toLength = __webpack_require__(875);
var aFunction = __webpack_require__(4963);
var arraySpeciesCreate = __webpack_require__(6886);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(7722)('flatMap');


/***/ }),

/***/ 4692:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(2985);
var flattenIntoArray = __webpack_require__(3325);
var toObject = __webpack_require__(508);
var toLength = __webpack_require__(875);
var toInteger = __webpack_require__(1467);
var arraySpeciesCreate = __webpack_require__(6886);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(7722)('flatten');


/***/ }),

/***/ 2773:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(2985);
var $includes = __webpack_require__(9315)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(7722)('includes');


/***/ }),

/***/ 8267:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(2985);
var microtask = __webpack_require__(4351)();
var process = (__webpack_require__(3816).process);
var isNode = __webpack_require__(2032)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),

/***/ 2559:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(2985);
var cof = __webpack_require__(2032);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),

/***/ 5575:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(2985);

$export($export.G, { global: __webpack_require__(3816) });


/***/ }),

/***/ 525:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(1024)('Map');


/***/ }),

/***/ 8211:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(4881)('Map');


/***/ }),

/***/ 7698:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(2985);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(6132)('Map') });


/***/ }),

/***/ 8865:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),

/***/ 368:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(2985);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),

/***/ 6427:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(2985);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),

/***/ 286:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(2985);
var scale = __webpack_require__(8757);
var fround = __webpack_require__(4934);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),

/***/ 2816:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),

/***/ 2082:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),

/***/ 5986:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),

/***/ 6308:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(2985);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),

/***/ 9221:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(2985);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),

/***/ 3570:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(2985);

$export($export.S, 'Math', { scale: __webpack_require__(8757) });


/***/ }),

/***/ 3776:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(2985);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),

/***/ 6754:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(2985);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),

/***/ 8646:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var toObject = __webpack_require__(508);
var aFunction = __webpack_require__(4963);
var $defineProperty = __webpack_require__(9275);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(7057) && $export($export.P + __webpack_require__(1670), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ 2658:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var toObject = __webpack_require__(508);
var aFunction = __webpack_require__(4963);
var $defineProperty = __webpack_require__(9275);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(7057) && $export($export.P + __webpack_require__(1670), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ 3276:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(2985);
var $entries = __webpack_require__(1131)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ 8351:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(2985);
var ownKeys = __webpack_require__(7643);
var toIObject = __webpack_require__(2110);
var gOPD = __webpack_require__(8693);
var createProperty = __webpack_require__(2811);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ 6917:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var toObject = __webpack_require__(508);
var toPrimitive = __webpack_require__(1689);
var getPrototypeOf = __webpack_require__(468);
var getOwnPropertyDescriptor = (__webpack_require__(8693).f);

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(7057) && $export($export.P + __webpack_require__(1670), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ 372:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var toObject = __webpack_require__(508);
var toPrimitive = __webpack_require__(1689);
var getPrototypeOf = __webpack_require__(468);
var getOwnPropertyDescriptor = (__webpack_require__(8693).f);

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(7057) && $export($export.P + __webpack_require__(1670), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ 6409:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(2985);
var $values = __webpack_require__(1131)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ 6534:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(2985);
var global = __webpack_require__(3816);
var core = __webpack_require__(5645);
var microtask = __webpack_require__(4351)();
var OBSERVABLE = __webpack_require__(6314)('observable');
var aFunction = __webpack_require__(4963);
var anObject = __webpack_require__(7007);
var anInstance = __webpack_require__(3328);
var redefineAll = __webpack_require__(4408);
var hide = __webpack_require__(7728);
var forOf = __webpack_require__(3531);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(2974)('Observable');


/***/ }),

/***/ 9865:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(2985);
var core = __webpack_require__(5645);
var global = __webpack_require__(3816);
var speciesConstructor = __webpack_require__(8364);
var promiseResolve = __webpack_require__(94);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ 1898:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(2985);
var newPromiseCapability = __webpack_require__(3499);
var perform = __webpack_require__(188);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ 3364:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ 1432:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ 4416:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(8184);
var from = __webpack_require__(9490);
var metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var getPrototypeOf = __webpack_require__(468);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ 6562:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var getPrototypeOf = __webpack_require__(468);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ 2213:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ 8681:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ 3471:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var getPrototypeOf = __webpack_require__(468);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ 4329:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ 5159:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $metadata = __webpack_require__(133);
var anObject = __webpack_require__(7007);
var aFunction = __webpack_require__(4963);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ 9467:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(1024)('Set');


/***/ }),

/***/ 4837:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(4881)('Set');


/***/ }),

/***/ 8739:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(2985);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(6132)('Set') });


/***/ }),

/***/ 7220:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(2985);
var $at = __webpack_require__(4496)(true);
var $fails = __webpack_require__(4253);

var FORCED = $fails(function () {
  return '𠮷'.at(0) !== '𠮷';
});

$export($export.P + $export.F * FORCED, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ 4208:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(2985);
var defined = __webpack_require__(1355);
var toLength = __webpack_require__(875);
var isRegExp = __webpack_require__(5364);
var getFlags = __webpack_require__(3218);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(9988)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),

/***/ 2770:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(2985);
var $pad = __webpack_require__(5442);
var userAgent = __webpack_require__(575);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ 1784:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(2985);
var $pad = __webpack_require__(5442);
var userAgent = __webpack_require__(575);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ 5869:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(9599)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ 4325:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(9599)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ 9665:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(6074)('asyncIterator');


/***/ }),

/***/ 9593:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(6074)('observable');


/***/ }),

/***/ 8967:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(2985);

$export($export.S, 'System', { global: __webpack_require__(3816) });


/***/ }),

/***/ 4188:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(1024)('WeakMap');


/***/ }),

/***/ 7594:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(4881)('WeakMap');


/***/ }),

/***/ 3495:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(1024)('WeakSet');


/***/ }),

/***/ 9550:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(4881)('WeakSet');


/***/ }),

/***/ 1181:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(6997);
var getKeys = __webpack_require__(7184);
var redefine = __webpack_require__(7234);
var global = __webpack_require__(3816);
var hide = __webpack_require__(7728);
var Iterators = __webpack_require__(2803);
var wks = __webpack_require__(6314);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ 4633:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(2985);
var $task = __webpack_require__(4193);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ 2564:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(3816);
var $export = __webpack_require__(2985);
var userAgent = __webpack_require__(575);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ 1934:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(5767);
__webpack_require__(8132);
__webpack_require__(8388);
__webpack_require__(7470);
__webpack_require__(4882);
__webpack_require__(1520);
__webpack_require__(7476);
__webpack_require__(9622);
__webpack_require__(9375);
__webpack_require__(3533);
__webpack_require__(4672);
__webpack_require__(4157);
__webpack_require__(5095);
__webpack_require__(9892);
__webpack_require__(5115);
__webpack_require__(9176);
__webpack_require__(8838);
__webpack_require__(6253);
__webpack_require__(9730);
__webpack_require__(6059);
__webpack_require__(8377);
__webpack_require__(1084);
__webpack_require__(4299);
__webpack_require__(1246);
__webpack_require__(726);
__webpack_require__(1901);
__webpack_require__(5972);
__webpack_require__(3403);
__webpack_require__(2516);
__webpack_require__(9371);
__webpack_require__(6479);
__webpack_require__(1736);
__webpack_require__(1889);
__webpack_require__(5177);
__webpack_require__(6943);
__webpack_require__(6503);
__webpack_require__(6786);
__webpack_require__(932);
__webpack_require__(7526);
__webpack_require__(1591);
__webpack_require__(9073);
__webpack_require__(347);
__webpack_require__(579);
__webpack_require__(4669);
__webpack_require__(7710);
__webpack_require__(5789);
__webpack_require__(3514);
__webpack_require__(9978);
__webpack_require__(8472);
__webpack_require__(6946);
__webpack_require__(5068);
__webpack_require__(413);
__webpack_require__(191);
__webpack_require__(8306);
__webpack_require__(4564);
__webpack_require__(9115);
__webpack_require__(9539);
__webpack_require__(6620);
__webpack_require__(2850);
__webpack_require__(823);
__webpack_require__(7732);
__webpack_require__(856);
__webpack_require__(703);
__webpack_require__(1539);
__webpack_require__(5292);
__webpack_require__(6629);
__webpack_require__(3694);
__webpack_require__(7648);
__webpack_require__(7795);
__webpack_require__(4531);
__webpack_require__(3605);
__webpack_require__(6780);
__webpack_require__(9937);
__webpack_require__(511);
__webpack_require__(1822);
__webpack_require__(9977);
__webpack_require__(1031);
__webpack_require__(6331);
__webpack_require__(1560);
__webpack_require__(774);
__webpack_require__(522);
__webpack_require__(8295);
__webpack_require__(7842);
__webpack_require__(110);
__webpack_require__(75);
__webpack_require__(4336);
__webpack_require__(1802);
__webpack_require__(8837);
__webpack_require__(6773);
__webpack_require__(5745);
__webpack_require__(3057);
__webpack_require__(3750);
__webpack_require__(3369);
__webpack_require__(9564);
__webpack_require__(2000);
__webpack_require__(8977);
__webpack_require__(2310);
__webpack_require__(4899);
__webpack_require__(1842);
__webpack_require__(6997);
__webpack_require__(3946);
__webpack_require__(8269);
__webpack_require__(6108);
__webpack_require__(6774);
__webpack_require__(1466);
__webpack_require__(9357);
__webpack_require__(6142);
__webpack_require__(1876);
__webpack_require__(851);
__webpack_require__(8416);
__webpack_require__(8184);
__webpack_require__(147);
__webpack_require__(9192);
__webpack_require__(142);
__webpack_require__(1786);
__webpack_require__(5368);
__webpack_require__(6964);
__webpack_require__(2152);
__webpack_require__(4821);
__webpack_require__(9103);
__webpack_require__(1303);
__webpack_require__(3318);
__webpack_require__(162);
__webpack_require__(3834);
__webpack_require__(1572);
__webpack_require__(2139);
__webpack_require__(685);
__webpack_require__(5535);
__webpack_require__(7347);
__webpack_require__(3049);
__webpack_require__(6633);
__webpack_require__(8989);
__webpack_require__(8270);
__webpack_require__(4510);
__webpack_require__(3984);
__webpack_require__(5769);
__webpack_require__(55);
__webpack_require__(6014);
__webpack_require__(2773);
__webpack_require__(1268);
__webpack_require__(4692);
__webpack_require__(7220);
__webpack_require__(1784);
__webpack_require__(2770);
__webpack_require__(5869);
__webpack_require__(4325);
__webpack_require__(4208);
__webpack_require__(9665);
__webpack_require__(9593);
__webpack_require__(8351);
__webpack_require__(6409);
__webpack_require__(3276);
__webpack_require__(8646);
__webpack_require__(2658);
__webpack_require__(6917);
__webpack_require__(372);
__webpack_require__(7698);
__webpack_require__(8739);
__webpack_require__(8211);
__webpack_require__(4837);
__webpack_require__(7594);
__webpack_require__(9550);
__webpack_require__(525);
__webpack_require__(9467);
__webpack_require__(4188);
__webpack_require__(3495);
__webpack_require__(5575);
__webpack_require__(8967);
__webpack_require__(2559);
__webpack_require__(8865);
__webpack_require__(368);
__webpack_require__(6427);
__webpack_require__(286);
__webpack_require__(2816);
__webpack_require__(5986);
__webpack_require__(2082);
__webpack_require__(6308);
__webpack_require__(9221);
__webpack_require__(3570);
__webpack_require__(6754);
__webpack_require__(3776);
__webpack_require__(9865);
__webpack_require__(1898);
__webpack_require__(3364);
__webpack_require__(1432);
__webpack_require__(6562);
__webpack_require__(4416);
__webpack_require__(8681);
__webpack_require__(2213);
__webpack_require__(3471);
__webpack_require__(4329);
__webpack_require__(5159);
__webpack_require__(8267);
__webpack_require__(6534);
__webpack_require__(2564);
__webpack_require__(4633);
__webpack_require__(1181);
module.exports = __webpack_require__(5645);


/***/ }),

/***/ 6729:
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/babel-polyfill/lib/index.js
var lib = __webpack_require__(6124);
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(6729);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);
// EXTERNAL MODULE: ./src/lib/single-file/single-file.js
var single_file = __webpack_require__(3542);
;// CONCATENATED MODULE: ./src/content/Bot.js


class Bot {
  constructor(extension) {
    this.extension = extension;
    this.browser = window.hasOwnProperty('chrome') ? chrome : browser;
    this.EVENT_NAMES = {
      'data': 'onData',
      'newURL': 'onNewURL',
      'start': 'onStart'
    };
    this.eventEmitter = new (eventemitter3_default())();
    this.debug = false;
    this.navigate_delay = 1500;

    // let this be at least 2 (for tests)
    if (this.debug) {
      this.result_text_pages = 2;
      this.result_news_pages = 2;
      this.result_images_pages = 2;
      this.result_videos_pages = 2;
      this.scroll_text_reloads = 2;
      this.scroll_news_reloads = 2;
      this.scroll_videos_reloads = 2;
      this.scroll_images_reloads = 2;
    } else {
      this.result_text_pages = 5;
      this.result_news_pages = 5;
      this.result_images_pages = 5;
      this.result_videos_pages = 5;
      this.scroll_text_reloads = 3;
      this.scroll_news_reloads = 3;
      this.scroll_videos_reloads = 3;
      this.scroll_images_reloads = 3;
    }
    this.next_delay = 2000;
    this.initial_scroll_delay = 1000;
    this.images_results_counter = 0;
    this.news_results_counter = 0;
    this.text_results_counter = 0;
    this.videos_results_counter = 0;
    this.sub_scroll_chunk = 50;
    this.sub_scroll_down_chunk_delay = 25;
    this.sub_scroll_down_delay = 500;
    this.sub_scroll_waiting_for_more = 100;
    this.consent_checks = 5;
    this.step = '';
    this.step_attempts = 5;
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('Bot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
    });
  }
  async navigate() {
    console.log('navigate', location.href);
    if (this.is_text_result_page()) {
      console.log('this.is_text_result_page()');
      this.step = 'text_animation';
      this.text_animation();
    } else if (this.is_news_result_page()) {
      console.log('this.is_news_result_page()');
      this.step = 'news_animation';
      this.news_animation();
    } else if (this.is_images_result_page()) {
      console.log('this.is_images_result_page()');
      this.step = 'images_animation';
      this.images_animation();
    } else if (this.is_videos_result_page()) {
      console.log('this.is_videos_result_page()');
      this.step = 'videos_animation';
      this.videos_animation();
    } else {
      console.log('this.constant_consent_check()');
      this.constant_consent_check();
      console.log('this.start_navigation()');
      this.step = 'start_navigation';
      this.start_navigation();
    }
    this.extension.set_iter_step(this.step);
  }
  set_navigate_timeout(navigate_delay = null) {
    if (navigate_delay == null) {
      navigate_delay = this.navigate_delay;
    }
    console.log('set_navigate_timeout');
    setTimeout(function () {
      this.navigate();
    }.bind(this), navigate_delay);
  }
  text_animation() {
    if (this.is_text_result_pages_end()) {
      this.set_text_results_animation(this.set_get_news_tab_timeout);
    } else {
      this.set_text_results_animation(this.set_get_next_button_text_result_timeout);
    }
  }
  news_animation() {
    if (this.is_news_result_pages_end()) {
      this.set_news_results_animation(this.set_get_images_tab_timeout);
    } else {
      console.log('continue news animation');
      this.set_news_results_animation(this.set_get_next_button_news_result_timeout);
    }
  }
  async images_animation(delay = null) {
    if (delay == null) delay = this.initial_scroll_delay;
    if (this.is_images_result_scrolls_end()) {
      this.images_results_counter = 0;
      await this.scroll_down();
      // download image results page only after scrolling all the way to the bottom (continuously loading additional images)
      // in contrast, text results etc. are saved at the bottom of each results page
      if (this.extension.settings['download_pages']) await this.download_page('images');
      this.set_get_videos_tab_timeout();
    } else {
      setTimeout(async function () {
        await this.scroll_down();
        this.images_animation(0);
      }.bind(this), delay);
    }
  }
  videos_animation() {
    if (this.is_videos_result_pages_end()) {
      this.set_videos_results_animation(this.go_to_base_page);
    } else {
      this.set_videos_results_animation(this.set_get_next_button_videos_timeout);
    }
  }

  ///////////////////////////////////////////////////
  // More_text animation (used in DuckDuckGo)
  ///////////////////////////////////////////////////
  // text
  more_text_animation() {
    this.set_click_more_text_timeout().then(value => this.text_animation(500));
  }
  set_click_more_text_timeout() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        this.click_more_text();
        resolve(true);
      }.bind(this), 250);
    });
  }
  click_more_text() {
    this.click_or_reload(this.get_more_text_button());
  }

  // news
  more_news_animation() {
    this.set_click_more_news_timeout().then(value => this.news_animation(500));
  }
  set_click_more_news_timeout() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        this.click_more_news();
        resolve(true);
      }.bind(this), 250);
    });
  }
  click_more_news() {
    this.click_or_reload(this.get_more_news_button());
  }
  /////////////////////////////////////
  // End more text animation
  /////////////////////////////////////

  ///////////////////////////////////////////////////
  // More images animation (used in Yahoo)
  ///////////////////////////////////////////////////
  more_images_animation() {
    this.set_click_more_images_timeout().then(value => this.images_animation(500));
  }
  set_click_more_images_timeout() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        this.click_more_images();
        resolve(true);
      }.bind(this), 150);
    });
  }
  click_more_images() {
    this.click_or_reload(this.get_more_images_button());
  }
  /////////////////////////////////////
  // End more images animation
  /////////////////////////////////////

  /////////////////////////////////////////////////////
  // More_videos animation (used in Yandex and Yahoo)
  /////////////////////////////////////////////////////
  more_videos_animation() {
    this.set_click_more_videos_timeout().then(value => this.videos_animation(500));
  }
  set_click_more_videos_timeout() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        this.click_more_videos();
        resolve(true);
      }.bind(this), 150);
    });
  }
  click_more_videos() {
    this.click_or_reload(this.get_more_videos_button());
  }
  /////////////////////////////////////
  // End more videos animation
  /////////////////////////////////////

  start_navigation() {
    this.extension.steady();
  }
  search(keyword, engine) {
    setTimeout(function () {
      this.set_mainpage_animation(keyword);
    }.bind(this), this.next_delay);
  }
  go_to_base_page() {
    console.log('Go to base page');
    setTimeout(function () {
      this.extension.go_to_base_page();
    }.bind(this), this.next_delay);
  }
  constant_consent_check() {
    console.log("constant_consent_check");
    return new Promise(async (resolve, reject) => {
      let checks = 1;
      var interval_id = setInterval(function () {
        console.log("checking for consent", checks);
        if (this.is_collect_consent_page()) {
          this.consent_animation();
          clearInterval(interval_id);
        } else {
          if (checks >= this.consent_checks) {
            console.log("bye intervals", checks);
            clearInterval(interval_id);
          }
          checks += 1;
        }
      }.bind(this), 3000);
    });
  }
  consent_animation() {}
  is_collect_consent_page() {
    return false;
  }
  is_text_result_pages_end() {
    console.log('is_text_result_pages_end()');
    let count = this.get_text_result_page();
    console.log('\n\nPage Count: ' + count + '\n\n');
    return this.result_text_pages <= count;
  }
  is_news_result_pages_end() {
    console.log('is_news_result_pages_end()');
    let count = this.get_news_result_page();
    console.log('\n\nPage Count: ' + count + '\n\n');
    return this.result_news_pages <= count;
  }
  is_videos_result_pages_end() {
    console.log('is_videos_result_pages_end()');
    let count = this.get_videos_result_page();
    console.log('\n\nPage Count: ' + count + '\n\n');
    return this.result_videos_pages <= count;
  }
  is_images_result_pages_end() {
    console.log('is_images_result_pages_end()');
    let count = this.get_images_result_page();
    console.log('\n\nPage Count: ' + count + '\n\n');
    return this.result_images_pages <= count;
  }
  is_text_result_scrolls_end() {
    console.log('is_text_result_scrolls_end()');
    let count = this.get_text_result_page();
    console.log('\n\nScroll Count: ' + count + '\n\n');
    return this.scroll_text_reloads <= count;
  }
  is_news_result_scrolls_end() {
    console.log('is_news_result_scrolls_end()');
    let count = this.get_news_result_page();
    console.log('\n\nScroll Count: ' + count + '\n\n');
    return this.scroll_news_reloads <= count;
  }
  is_videos_result_scrolls_end() {
    console.log('is_videos_result_scrolls_end()');
    let count = this.get_videos_result_page();
    console.log('\n\nScroll Count: ' + count + '\n\n');
    return this.scroll_videos_reloads <= count;
  }
  is_images_result_scrolls_end() {
    console.log('is_images_result_scrolls_end()');
    let count = this.get_images_result_page();
    console.log('\n\nScroll Count: ' + count + '\n\n');
    return this.scroll_images_reloads <= count;
  }
  set_mainpage_animation(keyword, delay = 500) {
    setTimeout(function () {
      this.type_search(keyword);
    }.bind(this), delay);
  }
  set_get_search_button_timeout(delay = 1000) {
    setTimeout(function () {
      this.click_or_reload(this.get_search_button());
    }.bind(this), delay);
  }
  set_videos_results_animation(callback_end) {
    setTimeout(async function () {
      await this.scroll_down();
      // capture at the bottom of the page because of lazy loading images
      if (this.extension.settings['download_pages']) await this.download_page('videos');
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      await callback_end.bind(this)();
    }.bind(this), this.initial_scroll_delay);
  }
  set_text_results_animation(callback_end) {
    setTimeout(async function () {
      await this.scroll_down();
      // capture at the bottom of the page because of lazy loading images
      if (this.extension.settings['download_pages']) await this.download_page('text');
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      await callback_end.bind(this)();
    }.bind(this), this.initial_scroll_delay);
  }
  set_news_results_animation(callback_end) {
    setTimeout(async function () {
      await this.scroll_down();
      // capture at the bottom of the page because of lazy loading images
      if (this.extension.settings['download_pages']) await this.download_page('news');
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      await callback_end.bind(this)();
    }.bind(this), this.initial_scroll_delay);
  }
  set_get_next_button_text_result_timeout() {
    return new Promise(async (resolve, reject) => {
      setTimeout(function () {
        this.click_or_reload(this.get_next_button());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }
  set_get_next_button_news_result_timeout() {
    return new Promise(async (resolve, reject) => {
      setTimeout(function () {
        console.log("this.click_or_move_to_images(this.get_next_button_news());");
        this.click_or_move_to_images(this.get_next_button_news());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }
  set_get_next_button_videos_timeout() {
    return new Promise(async (resolve, reject) => {
      setTimeout(function () {
        this.click_or_reload(this.get_next_button_videos());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }
  set_get_news_tab_timeout() {
    return new Promise(async (resolve, reject) => {
      setTimeout(function () {
        this.click_or_reload(this.get_news_tab());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }
  set_get_images_tab_timeout() {
    return new Promise(async (resolve, reject) => {
      setTimeout(function () {
        this.click_or_reload(this.get_images_tab());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }
  set_get_videos_tab_timeout() {
    return new Promise(async (resolve, reject) => {
      setTimeout(function () {
        this.click_or_reload(this.get_videos_tab());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }
  is_news_loaded() {
    //assume that things are loaded for news
    // see baidu for an example of implementing this properly
    return true;
  }
  click_or_move_to_images(button) {
    console.log(button);
    if (button) {
      //button.click();
      button.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    } else {
      console.log('Moving to images (Promise)...');
      setTimeout(function () {
        console.log('is_it_loaded', this.is_news_loaded());
        if (this.is_news_loaded()) {
          console.log('is_news_loaded');
          this.set_news_results_animation(this.set_get_images_tab_timeout);
        } else {
          location.reload();
        }
      }.bind(this), 500);
    }
  }
  click_or_reload(button) {
    console.log(button);
    if (button) {
      //button.click();
      button.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    } else {
      let iter = this.extension.get_iter_step(this.step);
      if (iter < this.step_attempts) {
        console.log('Reloading...');
        location.reload();
      }
    }
  }
  click_or_reload_promise(button) {
    return new Promise(async (resolve, reject) => {
      console.log(button);
      if (button) {
        //button.click();
        button.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));
        resolve(true);
      } else {
        console.log('Reloading (Promise)...');
        let iter = this.extension.get_iter_step(this.step);
        if (iter < this.step_attempts) {
          console.log('Reloading...');
          location.reload();
        }
      }
    });
  }
  type_search(keyword) {
    var input = this.get_search_input();
    input.focus();
    var i = 0;
    //var keyword = 'type A B C';
    var speed = 100;
    var tracker = this;
    var attempts = 0;

    //a.addEventListener('focus',triGr)
    function triGr() {
      if (i < keyword.length) {
        let c = keyword.charAt(i);
        input.value += c;

        // dispatch keyboard events
        input.dispatchEvent(new KeyboardEvent('keypress', {
          'key': c
        }));
        input.dispatchEvent(new KeyboardEvent('keydown', {
          'key': c
        }));
        input.dispatchEvent(new KeyboardEvent('keyup', {
          'key': c
        }));
        i++;
        setTimeout(triGr, speed);
      } else {
        console.log('input.value is: ', input.value);
        tracker.clear_autosuggestion_box();
        function check_and_send() {
          console.log('now input.value is: ', input.value);
          // check that the keyword is equal to the input
          if (input.value == keyword) {
            console.log('value is correct');
            tracker.set_get_search_button_timeout();
          } else if (attempts < 1) {
            console.log('try again typing: ' + keyword);
            input.value = '';
            i = 0;
            attempts += 1;
            setTimeout(triGr, speed);
          } else {
            console.log('give up, just paste the keyword: ' + keyword);
            input.value = keyword;
            tracker.set_get_search_button_timeout();
          }
        }
        setTimeout(check_and_send, 1000);
      }
    }
    triGr();
  }
  clear_autosuggestion_box() {}
  clear_browser() {
    return new Promise(async (resolve, reject) => {
      if (this.extension.settings['clear_browser_flag']) {
        localStorage.clear();
        sessionStorage.clear();
        this.deleteAllCookies();
        this.clear_cookies();
      } else {
        console.log("NOT DELETING BROWSING DATA! Check settings.clear_browser");
      }
      // DO NOT INCLUDE this line in the condition above, clear_browser
      // also might keep track of the iterations
      this.extension.clear_browser();
      resolve(true);
    });
  }
  clear_cookies() {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
        var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
        var p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        }
        ;
        d.shift();
      }
    }
  }
  deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  find_get_parameter(parameterName) {
    var result = null,
      tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
  }
  timed_scroll_down(delay) {
    return new Promise(async (resolve, reject) => {
      setTimeout(async function () {
        this.scroll_down().then(resolve(true));
      }.bind(this), delay);
    });
  }
  scroll_down() {
    return new Promise(async (resolve, reject) => {
      let bottom = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let _scroll = document.documentElement.scrollTop;
      bottom = Math.min(bottom, _scroll + 7500);
      console.log('_scroll (current):', _scroll);
      console.log('bottom (target):', bottom);
      while (_scroll < bottom) {
        await this.sub_scroll_down(_scroll, _scroll + document.documentElement.clientHeight);
        _scroll += document.documentElement.clientHeight;
        window.scrollTo(0, _scroll);
      }
      resolve(true);
    });
  }
  sub_scroll_down(_start, _end) {
    return new Promise((resolve, reject) => {
      setTimeout(async function () {
        let interval = setInterval(function () {
          if (_start < _end) {
            _start += this.sub_scroll_chunk;
            window.scrollTo(0, _start);
          } else {
            clearInterval(interval);
            let bottom = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let _scroll = document.documentElement.scrollTop;

            // if scroll is in the bottom, wait to load more
            if (_scroll >= bottom) {
              setTimeout(function () {
                resolve(true);
              }, this.sub_scroll_waiting_for_more);
            } else {
              resolve(true);
            }
          }
        }.bind(this), this.sub_scroll_down_chunk_delay);
      }.bind(this), this.sub_scroll_down_delay);
    });
  }
  async download_page(page_type) {
    page_type = page_type ? page_type + '_' : ''; // if available, specify which type of page is downloaded

    // capture the page with SingleFile plugin
    console.log('capturing using SingleFile...');
    const {
      content,
      title,
      filename
    } = await single_file.getPageData({
      removeHiddenElements: true,
      removeUnusedStyles: true,
      removeUnusedFonts: true,
      removeImports: true,
      blockScripts: true,
      blockAudios: true,
      blockVideos: true,
      compressHTML: true,
      removeAlternativeFonts: true,
      removeAlternativeMedias: true,
      removeAlternativeImages: true,
      groupDuplicateImages: true,
      filenameTemplate: page_type + "{date-iso}_{time-locale}.html" // also available: {page-title}
    });

    // send captured page as blob to backend to store into downloads folder
    this.browser.runtime.sendMessage({
      'download_page': true,
      'content': content,
      'filename_suffix': filename
    });
  }

  /**
   * [onStart]
   * @param  {Function} fn 
   */
  onStart(fn) {
    if (this.debug) console.log('Bot -> onStart()');
    fn(1000);
  }
}
;// CONCATENATED MODULE: ./src/content/bot/GoogleBot.js

class GoogleBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    if (this.debug) {
      // use the defaults for debug in Bot
    } else {}
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('GoogleBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }

  // simple_type_search(input){
  //   console.log(input);  
  //   let el = this.get_search_input();
  //   el.focus();
  //   el.value=input;
  //   this.set_get_search_button_timeout();
  // }

  // __type_search(plc){
  //   // get the element in question
  //   let input = document.querySelector('input[name=q]');

  //   // focus on the input element
  //   input.focus();

  //   // add event listeners to the input element
  //   input.addEventListener('keypress', (event) => {
  //     console.log("You have pressed key: ", event.key);
  //   });

  //   input.addEventListener('keydown', (event) => {
  //     console.log(`key: ${event.key} has been pressed down`);
  //   });

  //   input.addEventListener('keyup', (event) => {
  //     console.log(`key: ${event.key} has been released`);
  //   });
  // }

  consent_animation() {
    setTimeout(function () {
      let consent_button = this.get_consent_button();
      if (consent_button) {
        consent_button.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      }
    }.bind(this), 100);
  }

  // OLD, for when iframe was detected
  // consent_animation(){
  //   setTimeout(function(){
  //     let consent_frame = document.querySelector('iframe');
  //     if (consent_frame){
  //       window.location = consent_frame.src;
  //     }
  //   }.bind(this), 100);
  // }

  get_search_input() {
    return document.querySelector('input[name=q]');
  }
  get_consent_button() {
    let b = document.querySelector('#L2AGLb'); // same ID is used in all languages
    return b;
  }
  is_collect_consent_page() {
    let _button = this.get_consent_button();
    console.log('Consent page detected: ', _button != null);
    return _button != null;
  }
  is_text_result_page() {
    return window.location.pathname == '/search' && this.find_get_parameter('tbm') == null;
  }
  is_news_result_page() {
    return this.find_get_parameter('tbm') == 'nws';
  }
  is_images_result_page() {
    return this.find_get_parameter('tbm') == 'isch';
  }
  is_videos_result_page() {
    return this.find_get_parameter('tbm') == 'vid';
  }
  get_search_button() {
    return document.querySelector('input[name=btnK]');
  }
  get_news_tab() {
    return document.querySelector("a[href*='tbm=nws']");
  }
  get_images_tab() {
    return document.querySelector("a[href*='tbm=isch']");
  }
  get_videos_tab() {
    return document.querySelector("a[href*='tbm=vid']");
  }
  get_next_button() {
    return document.querySelector('a#pnnext');
  }
  get_next_button_news() {
    return document.querySelector('a#pnnext');
  }
  get_next_button_videos() {
    return document.querySelector('a#pnnext');
  }
  get_text_result_page() {
    let _start = this.find_get_parameter('start');
    if (_start) {
      return parseInt(_start) / 10 + 1;
    } else {
      return 1;
    }
  }
  get_news_result_page() {
    let _start = this.find_get_parameter('start');
    if (_start) {
      return parseInt(_start) / 10 + 1;
    } else {
      return 1;
    }
  }
  get_images_result_page() {
    this.images_results_counter += 1;
    return this.images_results_counter;
  }
  get_videos_result_page() {
    let _start = this.find_get_parameter('start');
    if (_start) {
      return parseInt(_start) / 10 + 1;
    } else {
      return 1;
    }
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('GoogleBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Google START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/GoogleConsentBot.js

class GoogleConsentBot_GoogleBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('GoogleBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  async navigate() {
    console.log('navigate', location.href);
    if (this.is_collect_consent_page()) {
      console.log('this.is_collect_consent_page()');
      this.consent_animation();
    } else {
      console.log('Consented');
      window.location = 'https://www.google.com';
    }
  }
  consent_animation() {
    setTimeout(function () {
      let consent_button = document.querySelector('#introAgreeButton');
      this.click_or_reload(consent_button);
    }.bind(this), 200);
  }
  is_collect_consent_page() {
    console.log('Consent page detected: ', document.querySelector('#introAgreeButton') != null);
    return document.querySelector('#introAgreeButton') != null;
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('GoogleBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Google START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/YahooConsentBot.js

class YahooBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('YahooBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  async navigate() {
    console.log('navigate', location.href);
    if (this.is_collect_consent_page()) {
      console.log('this.is_collect_consent_page()');
      this.consent_animation();
    } else {
      //console.log('Consented');
      //window.location = 'https://search.yahoo.com';
    }
  }
  consent_animation() {
    setTimeout(function () {
      let consent_form = document.querySelector('form.consent-form');
      if (consent_form) {
        document.querySelector('form.consent-form button[name=agree]').dispatchEvent(new MouseEvent('click'));
      }
    }.bind(this), 100);
  }
  is_collect_consent_page() {
    return location.pathname.includes('/collectConsent');
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('YahooBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Yahoo START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/DuckDuckGoBot.js

class DuckDuckGoBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    if (this.debug) {
      // use the defaults for debug in Bot
    } else {
      // it initially seems incorrect to only have 3 reloads
      // for main results, but DDG first load 10 results, then
      // 20 results, and then 30 results
      // Similarly for news, DDG loads 30 results the first and
      // second time
      // DDG in Google is broken because no results are loaded 
      // after the 2nd page
      this.scroll_images_reloads = 4;
    }
    this.initial_scroll_delay = 1000;
  }
  start() {
    if (this.debug) console.log('DuckDuckGoBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }

  // WATCH OUT: DUCKDUCKGO is different because it uses pushstate and popstate,
  // therefore there is a navigate timeout method
  text_animation(extra_delay = 0) {
    if (this.is_text_result_scrolls_end()) {
      this.text_results_counter = 0;
      setTimeout(function () {
        this.scroll_down().then(value => this.set_get_news_tab_timeout().then(value => this.set_navigate_timeout()));
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.more_text_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }
  get_more_text_button() {
    return document.querySelector('a.result--more__btn');
  }
  news_animation(extra_delay = 0) {
    if (this.is_news_result_scrolls_end()) {
      console.log('End of news');
      this.news_results_counter = 0;
      setTimeout(function () {
        this.scroll_down().then(value => this.set_get_images_tab_timeout().then(value => this.set_navigate_timeout()));
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      console.log('Continue news');
      setTimeout(function () {
        this.scroll_down().then(value => this.more_news_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }
  get_more_news_button() {
    return document.querySelector('a.result--more__btn');
  }
  images_animation(delay = null) {
    if (delay == null) {
      delay = this.initial_scroll_delay;
    }
    if (this.is_images_result_scrolls_end()) {
      this.images_results_counter = 0;
      this.scroll_down().then(value => this.set_get_videos_tab_timeout().then(value => this.set_navigate_timeout()));
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.images_animation(0));
      }.bind(this), delay);
    }
  }
  videos_animation(delay = null) {
    if (delay == null) {
      delay = this.initial_scroll_delay;
    }
    if (this.is_videos_result_scrolls_end()) {
      this.videos_results_counter = 0;
      this.scroll_down().then(value => this.go_to_base_page());
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.videos_animation(0));
      }.bind(this), delay);
    }
  }
  get_search_input() {
    return document.querySelector('#search_form_input_homepage');
  }
  is_text_result_page() {
    return this.find_get_parameter('q') != null && !this.is_images_result_page() && !this.is_videos_result_page() && !this.is_news_result_page();
  }
  is_news_result_page() {
    return this.find_get_parameter('ia') == 'news';
  }
  is_images_result_page() {
    return this.find_get_parameter('ia') == 'images';
  }
  is_videos_result_page() {
    return this.find_get_parameter('ia') == 'videos';
  }
  get_search_button() {
    return document.querySelector('#search_button_homepage');
  }
  get_news_tab() {
    return document.querySelector("#duckbar a.js-zci-link--news");
  }
  get_images_tab() {
    return document.querySelector("#duckbar a.js-zci-link--images");
  }
  get_videos_tab() {
    return document.querySelector("#duckbar a.js-zci-link--videos");
  }
  get_text_result_page() {
    this.text_results_counter += 1;
    return this.text_results_counter;
  }
  get_news_result_page() {
    this.news_results_counter += 1;
    return this.news_results_counter;
  }
  get_images_result_page() {
    this.images_results_counter += 1;
    return this.images_results_counter;
  }
  get_videos_result_page() {
    this.videos_results_counter += 1;
    return this.videos_results_counter;
  }
  scroll_down() {
    return new Promise(async (resolve, reject) => {
      let bottom = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let _scroll = document.documentElement.scrollTop;
      bottom = Math.min(bottom, _scroll + 7500);
      console.log('_scroll (current):', _scroll);
      console.log('bottom (target):', bottom);
      while (_scroll < bottom) {
        await this.sub_scroll_down(_scroll, _scroll + document.documentElement.clientHeight);
        _scroll += document.documentElement.clientHeight;
        window.scrollTo(0, _scroll);
      }
      resolve(true);
    });
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('DuckDuckGoBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('DuckDuckGo START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/YandexBot.js

class YandexBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    if (this.debug) {
      this.result_text_pages = 1;
      this.result_news_pages = 1;
      this.scroll_text_reloads = 1;
      this.scroll_news_reloads = 1;
    } else {
      this.result_text_pages = 1;
      this.result_news_pages = 1;
      this.scroll_text_reloads = 1;
      this.scroll_news_reloads = 1;
    }
    this.initial_scroll_delay = 3000;
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('YandexBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  videos_animation(extra_delay = 0) {
    if (this.is_videos_result_scrolls_end()) {
      this.videos_results_counter = 0;
      setTimeout(function () {
        this.scroll_down().then(value => this.go_to_base_page());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.more_videos_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }
  set_videos_results_animation(callback_end) {
    setTimeout(function () {
      this.scroll_down().then(value => this.timed_scroll_down(1000).then(value =>
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      callback_end.bind(this)()));
    }.bind(this), this.initial_scroll_delay);
  }
  get_more_videos_button() {
    return document.querySelector('div.more_last_yes button');
  }
  get_search_input() {
    return document.querySelector('input#text');
  }
  consent_animation() {
    setTimeout(function () {
      let consent_button = document.querySelector('table button[data-id=button-all]');
      if (consent_button) {
        consent_button.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      }
    }.bind(this), 100);
  }
  is_collect_consent_page() {
    console.log('Consent page detected: ', document.querySelector('table button[data-id=button-all]') != null);
    return document.querySelector('table button[data-id=button-all]') != null;
  }
  is_text_result_page() {
    console.log('is_text_result_page');
    return location.pathname.includes('/search/');
  }
  is_news_result_page() {
    console.log('is_news_result_page');
    return location.hostname.includes('newssearch');
  }
  is_images_result_page() {
    console.log('is_images_result_page');
    return location.pathname.includes('/images/');
  }
  is_videos_result_page() {
    console.log('is_videos_result_page');
    if (location.pathname.includes('/video/')) {
      this.sub_scroll_waiting_for_more = 3000;
      this.sub_scroll_down_delay = 1000;
      return true;
    } else {
      return false;
    }
  }
  get_news_tab() {
    let el = document.querySelector("a[href*='newssearch.']");
    el.removeAttribute('target');
    return el;
  }
  get_images_tab() {
    let el = document.querySelector("a[href*='/images/']");
    el.removeAttribute('target');
    return el;
  }
  get_videos_tab() {
    let el = document.querySelector("a[href*='/video/']");
    el.removeAttribute('target');
    return el;
  }
  get_search_button() {
    return document.querySelector('div.search2__button button');
  }
  get_next_button() {
    return document.querySelector('a.pager__item_kind_next');
  }
  get_next_button_news() {
    let buttons = document.querySelectorAll('span.pager__group a.button');
    return buttons[buttons.length - 1];
  }
  get_text_result_page() {
    let p = this.find_get_parameter('p');
    if (p) {
      return parseInt(p) + 1;
    } else {
      return 1;
    }
  }
  get_news_result_page() {
    let p = this.find_get_parameter('p');
    if (p) {
      return parseInt(p) + 1;
    } else {
      return 1;
    }
  }
  get_images_result_page() {
    this.images_results_counter += 1;
    return this.images_results_counter;
  }
  get_videos_result_page() {
    this.videos_results_counter += 1;
    return this.videos_results_counter;
  }

  // get_videos_result_page(){
  //   let p = this.find_get_parameter('p');
  //   if (p){
  //     return parseInt(p) + 1;
  //   } else {
  //     return 1;
  //   }
  // }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('YandexBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Yandex START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/BingBot.js

class BingBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    if (this.debug) {
      // use the defaults for debug in Bot
    } else {
      // for Bing it is better to track the number of results
      this.result_text_pages = 50;
      this.scroll_news_reloads = 10;
      this.scroll_images_reloads = 10;
      this.scroll_videos_reloads = 14;
    }
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('BingBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  news_animation(delay = null) {
    console.log('news_animation');
    if (delay == null) {
      delay = this.initial_scroll_delay;
    }
    if (this.is_news_result_scrolls_end()) {
      this.news_results_counter = 0;
      this.scroll_down().then(value => this.set_get_images_tab_timeout());
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.news_animation(0));
      }.bind(this), delay);
    }
  }
  images_animation(delay = null) {
    console.log('images_animation');
    if (delay == null) {
      delay = this.initial_scroll_delay;
    }
    if (this.is_images_result_scrolls_end()) {
      this.images_results_counter = 0;
      this.scroll_down().then(value => this.set_get_videos_tab_timeout());
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.images_animation(0));
      }.bind(this), delay);
    }
  }
  videos_animation(delay = null) {
    console.log('videos_animation');
    if (delay == null) {
      delay = this.initial_scroll_delay;
    }
    if (this.is_videos_result_scrolls_end()) {
      this.videos_results_counter = 0;
      this.scroll_down().then(value => this.go_to_base_page());
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.videos_animation(0));
      }.bind(this), delay);
    }
  }
  consent_animation() {
    setTimeout(function () {
      console.log("CLICKING!!!!");
      let consent_button = document.querySelector('#bnp_btn_accept');
      if (consent_button) {
        consent_button.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      }
    }.bind(this), 100);
  }
  is_collect_consent_page() {
    console.log('Consent page detected: ', document.querySelector('#bnp_btn_accept') != null);
    return document.querySelector('#bnp_btn_accept') != null;
  }

  /***************************************************************
  This metnod is a replacement of the click simulation, it does not 
  work with the AWS zombies in Chrome only.
   The method is otherwise unnecessary. It will still work without
  it. Basically the URL bar does not seem to be triggering the 
  loading of a new page.
  *****************************************************************/
  set_get_next_button_text_result_timeout() {
    return new Promise(async (resolve, reject) => {
      setTimeout(function () {
        console.log("click_or_reload_promise");
        let button = this.get_search_button();
        let _href = window.location.protocol + '//' + window.location.hostname + document.querySelector('a.sb_pagN').getAttribute('href');
        this.force_location(_href);
        // this.click_or_reload_promise(button).then(
        //   value => 
        // );
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }
  force_location(_href) {
    console.log('force location', _href);
    setTimeout(function () {
      window.location = _href;
    }.bind(this), 1500);
  }

  /**************************************************************
  END OF THE AWS
  ***************************************************************/

  /*
  * For Bing, click as fast as possible to avoid the auto-suggestions
  * Leaving the parameter just in case but it is fine to just ignore it
  */
  set_get_search_button_timeout(delay = 0) {
    this.click_or_reload(this.get_search_button());
  }
  get_search_input() {
    return document.querySelector('input#sb_form_q');
  }
  clear_autosuggestion_box() {
    let el = document.querySelector("div#sw_as");
    if (el) {
      el.remove();
    }
  }
  is_text_result_page() {
    return location.pathname.includes('/search') && !this.is_images_result_page() && !this.is_videos_result_page() && !this.is_news_result_page();
  }
  is_news_result_page() {
    return location.pathname.includes('/news/');
  }
  is_images_result_page() {
    return location.pathname.includes('/images/');
  }
  is_videos_result_page() {
    if (location.pathname.includes('/videos/')) {
      this.sub_scroll_waiting_for_more = 1500;
      return true;
    } else {
      return false;
    }
  }
  get_search_button() {
    return document.querySelector('input#sb_form_go');
  }
  get_news_tab() {
    return document.querySelector("a[href*='/news/']");
  }
  get_images_tab() {
    return document.querySelector("a[href*='/images/']");
  }
  get_videos_tab() {
    return document.querySelector("a[href*='/videos/']");
  }
  get_next_button() {
    console.log("Next Button", document.querySelector('a.sb_pagN'));
    return document.querySelector('a.sb_pagN');
  }
  get_text_result_page() {
    let r = this.find_get_parameter('first');
    if (r) {
      return parseInt(r);
    } else {
      return 1;
    }
  }
  get_news_result_page() {
    this.news_results_counter += 1;
    return this.news_results_counter;
  }
  get_images_result_page() {
    this.images_results_counter += 1;
    return this.images_results_counter;
  }
  get_videos_result_page() {
    this.videos_results_counter += 1;
    return this.videos_results_counter;
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('BingBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Bing START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/YahooBot.js

class YahooBot_YahooBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    if (this.debug) {
      // use the defaults for debug in Bot
    } else {
      this.scroll_images_reloads = 5;
    }
    this.sub_scroll_waiting_for_more = 500;
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('YahooBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  consent_animation() {
    setTimeout(function () {
      let consent_form = document.querySelector('form.consent-form');
      if (consent_form) {
        document.querySelector('form.consent-form button[name=agree]').dispatchEvent(new MouseEvent('click'));
      }
    }.bind(this), 100);
  }
  images_animation(extra_delay = 0) {
    if (this.is_images_result_scrolls_end()) {
      this.images_results_counter = 0;
      setTimeout(function () {
        this.scroll_down().then(value => this.set_get_videos_tab_timeout());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.more_images_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }
  videos_animation(extra_delay = 0) {
    if (this.is_videos_result_scrolls_end()) {
      this.videos_results_counter = 0;
      setTimeout(function () {
        this.scroll_down().then(value => this.go_to_base_page());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.more_videos_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }
  get_more_videos_button() {
    return document.querySelector('section#search button.more');
  }
  get_more_images_button() {
    return document.querySelector('section#results button.more-res');
  }
  get_search_input() {
    let _input = document.querySelector('form[role=search] input');

    // // US interface
    // let _input = document.querySelector('form[role=search] input');

    // if (_input == null) {
    //   // DE interface
    //   _input = document.querySelector('#header-search-input');
    // }
    // if (_input == null) {
    //   // random shot
    //   _input = document.querySelector('form input[type=text]');
    // }

    return _input;
  }
  is_collect_consent_page() {
    return location.pathname.includes('/collectConsent');
  }
  is_text_result_page() {
    return location.pathname.includes('/search') && !this.is_images_result_page() && !this.is_videos_result_page() && !this.is_news_result_page();
  }
  is_news_result_page() {
    return location.hostname.includes('news.search');
  }
  is_images_result_page() {
    return location.pathname.includes('/search/images');
  }
  is_videos_result_page() {
    return location.pathname.includes('/search/video');
  }
  get_search_button() {
    let _button = document.querySelector('form[role=search] span[role=button]');

    // // US interface
    // let _button = document.querySelector('form[role=search] input[type=submit]');

    // if (_button == null) {
    //   // DE interface
    //   _button = document.querySelector('#header-desktop-search-button');
    // }
    // if (_button == null) {
    //   // random shot (first form, first button)
    //   _button = document.querySelector('form button[type=button]');
    // }

    // if (_button == null) {
    //   // random shot (first form, first button)
    //   _button = document.querySelector('form input[type=submit]');
    // }

    return _button;
  }
  get_images_tab() {
    return document.querySelector("a[href*='/search/images']");
  }
  get_news_tab() {
    return document.querySelector("a[href*='news.search']");
  }
  get_videos_tab() {
    return document.querySelector("a[href*='/search/video']");
  }
  get_next_button() {
    return document.querySelector('a.next');
  }
  get_next_button_news() {
    return document.querySelector('a.next');
  }
  get_text_result_page() {
    let p = this.find_get_parameter('b');
    if (p) {
      return Math.floor(parseInt(p) / 10) + 1;
    } else {
      return 1;
    }
  }
  get_news_result_page() {
    let p = this.find_get_parameter('b');
    if (p) {
      return Math.floor(parseInt(p) / 10) + 1;
    } else {
      return 1;
    }
  }
  get_images_result_page() {
    this.images_results_counter += 1;
    return this.images_results_counter;
  }
  get_videos_result_page() {
    this.videos_results_counter += 1;
    return this.videos_results_counter;
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('YahooBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Yahoo START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/BaiduBot.js

class BaiduBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    this.initial_scroll_delay = 3000;
    if (this.debug) {
      // use the defaults for debug in Bot
    } else {
      this.result_text_pages = 5;
      ;
      this.scroll_videos_reloads = 7;
      this.scroll_images_reloads = 7;
    }
    this.sub_scroll_down_delay = 1000;
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('BaiduBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  images_animation(delay = null) {
    console.log('images_animation');
    if (delay == null) {
      delay = this.initial_scroll_delay;
    }
    if (this.is_images_result_scrolls_end()) {
      this.images_results_counter = 0;
      this.scroll_down().then(value => this.set_get_videos_tab_timeout().then(value => this.set_navigate_timeout()));
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.images_animation(500));
      }.bind(this), delay);
    }
  }
  videos_animation(delay = null) {
    console.log('videos_animation');
    if (delay == null) {
      delay = this.initial_scroll_delay;
    }
    if (this.is_videos_result_scrolls_end()) {
      this.videos_results_counter = 0;
      this.scroll_down().then(value => this.go_to_base_page());
    } else {
      setTimeout(function () {
        this.scroll_down().then(value => this.videos_animation(0));
      }.bind(this), delay);
    }
  }
  set_get_search_button_timeout(delay = 1000) {
    setTimeout(function () {
      this.click_or_reload_promise(this.get_search_button()).then(value => this.set_navigate_timeout());
    }.bind(this), delay);
  }
  set_text_results_animation(callback_end) {
    setTimeout(function () {
      this.scroll_down().then(value =>
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      callback_end.bind(this)().then(value => this.set_navigate_timeout()));
    }.bind(this), this.initial_scroll_delay);
  }
  get_search_input() {
    return document.querySelector('input#kw');
  }
  is_text_result_page() {
    return location.pathname.includes('/s') && !this.is_images_result_page() && !this.is_videos_result_page() && !this.is_news_result_page();
  }
  is_news_result_page() {
    if (location.href.includes('tn=news')) {
      return true;
    } else {
      return false;
    }
  }
  is_images_result_page() {
    if (location.hostname.includes('image.')) {
      this.sub_scroll_waiting_for_more = 3000;
      return true;
    } else {
      return false;
    }
  }
  is_videos_result_page() {
    if (location.pathname.includes('/vsearch')) {
      this.sub_scroll_waiting_for_more = 3000;
      return true;
    } else {
      return false;
    }
  }
  get_search_button() {
    return document.querySelector("form input#su");
  }
  get_news_tab() {
    return document.querySelector("div.s_tab_inner a[href*='tn=news']");
  }
  get_images_tab() {
    return document.querySelector("div.s_tab_inner a[href*='tn=baiduimage']");
  }
  get_videos_tab() {
    let tab = document.querySelector("a[name='i_video']");
    tab.dispatchEvent(new MouseEvent('mousedown'));
    return tab;
  }
  get_next_button() {
    let navs = document.querySelectorAll("div#page a.n");
    if (navs) {
      return navs[navs.length - 1];
    } else {
      return null;
    }
  }
  is_news_loaded() {
    //assume that things are loaded for news
    // see baidu for an example of implementing this properly

    // this did not work because some queries only produce one page of news
    // return document.querySelector("div#page a.n") != null;

    return true;
  }
  get_next_button_news() {
    let navs = document.querySelectorAll("div#page a.n");
    let p = this.find_get_parameter('pn');

    // not first page
    if (p) {
      if (navs.length == 2) {
        return navs[1];
      } else {
        debugger;
        return null;
      }
    }
    // first page
    else {
      if (navs) {
        return navs[navs.length - 1];
      } else {
        return null;
      }
    }
  }
  get_text_result_page() {
    let p = this.find_get_parameter('pn');
    if (p) {
      return Math.floor(parseInt(p) / 10) + 1;
    } else {
      return 1;
    }
  }
  get_news_result_page() {
    let p = this.find_get_parameter('pn');
    if (p) {
      return Math.floor(parseInt(p) / 10) + 1;
    } else {
      return 1;
    }
  }
  get_images_result_page() {
    console.log("\n\n");
    console.log(this.images_results_counter);
    console.log("\n\n");
    this.images_results_counter += 1;
    return this.images_results_counter;
  }
  get_videos_result_page() {
    console.log("\n\n");
    console.log(this.videos_results_counter);
    console.log("\n\n");
    this.videos_results_counter += 1;
    return this.videos_results_counter;
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('BaiduBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Baidu START!!!!');
      fn(1500);
    }, 1000);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/SoBot.js

class SoBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    if (this.debug) {
      // use the defaults for debug in Bot
    } else {
      this.result_text_pages = 5;
      this.result_videos_pages = 5;
      this.scroll_images_reloads = 10;
    }
    this.initial_scroll_delay = 2000;
    this.sub_scroll_down_delay = 1000;
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('SoBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  set_videos_results_animation(callback_end) {
    setTimeout(function () {
      this.scroll_down().then(value => this.timed_scroll_down(500).then(value =>
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      callback_end.bind(this)()));
    }.bind(this), this.initial_scroll_delay);
  }
  set_text_results_animation(callback_end) {
    setTimeout(function () {
      this.scroll_down().then(value =>
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      callback_end.bind(this)().then(value => this.set_navigate_timeout()));
    }.bind(this), this.initial_scroll_delay);
  }
  get_search_input() {
    return document.querySelector('input#input');
  }
  is_text_result_page() {
    return window.location.pathname == '/s';
  }
  is_images_result_page() {
    if (window.location.pathname == '/i') {
      this.sub_scroll_waiting_for_more = 3000;
      return true;
    } else {
      return false;
    }
  }
  is_videos_result_page() {
    return window.location.pathname == '/v';
  }
  get_search_button() {
    return document.querySelector('input#search-button');
  }
  get_images_tab() {
    return document.querySelector("div#tabs-wrap a[href*='/i']");
  }
  get_videos_tab() {
    return document.querySelector("div.sitenav a[href*='/v']");
  }
  get_next_button() {
    return document.querySelector('a#snext');
  }
  get_next_button_videos() {
    return document.querySelector("a.js-next");
  }
  get_text_result_page() {
    let _start = this.find_get_parameter('pn');
    if (_start) {
      return parseInt(_start);
    } else {
      return 1;
    }
  }
  get_images_result_page() {
    this.images_results_counter += 1;
    console.log('\n\n', this.images_results_counter, '\n\n');
    return this.images_results_counter;
  }
  get_videos_result_page() {
    let _start = this.find_get_parameter('pageno');
    if (_start) {
      return parseInt(_start);
    } else {
      return 1;
    }
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('SoBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('So START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/SogouBot.js

class SogouBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    if (this.debug) {
      // use the defaults for debug in Bot
    } else {
      this.result_text_pages = 5;
      this.result_videos_pages = 5;
      this.scroll_images_reloads = 6;
    }
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('SogouBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  set_text_results_animation(callback_end) {
    setTimeout(function () {
      this.scroll_down().then(value => this.timed_scroll_down(2000).then(value =>
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      callback_end.bind(this)().then(value => this.set_navigate_timeout())));
    }.bind(this), this.initial_scroll_delay);
  }
  set_videos_results_animation(callback_end) {
    setTimeout(function () {
      this.scroll_down().then(value =>
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      callback_end.bind(this)().then(value => this.set_navigate_timeout()));
    }.bind(this), this.initial_scroll_delay);
  }
  get_search_input() {
    return document.querySelector('input#query');
  }
  is_text_result_page() {
    return window.location.pathname == '/web';
  }
  is_images_result_page() {
    return window.location.pathname == '/pics';
  }
  is_videos_result_page() {
    return window.location.pathname == '/v';
  }
  get_search_button() {
    return document.querySelector('input#stb');
  }
  get_images_tab() {
    return document.querySelector("a[href*='/pics']");
  }
  get_videos_tab() {
    return document.querySelector("a[href*='/v']");
  }
  get_next_button() {
    return document.querySelector('a#sogou_next');
  }
  get_next_button_videos() {
    // HACK: change the URL
    let _url = new URL(location.href);
    _url.searchParams.set('vpage', this.get_videos_result_page() + 1);
    history.pushState('', '', _url.search);
    return document.querySelector('a.btn_pg.btn_nxt');
  }
  get_text_result_page() {
    let _start = this.find_get_parameter('page');
    if (_start) {
      return parseInt(_start);
    } else {
      return 1;
    }
  }
  get_images_result_page() {
    this.images_results_counter += 1;
    return this.images_results_counter;
  }
  get_videos_result_page() {
    let _start = document.querySelector('a.btn_pg.btn_pg_num.on');
    if (_start) {
      let _val = _start.getAttribute('data-num');
      if (_val) {
        return parseInt(_val);
      }
    }
    console.warn('data-num not found');
    return 1;
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('SogouBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Sogou START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/BasePageBot.js

class BasePageBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('BasePageBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  async navigate() {
    console.log('navigate', location.href);
    this.set_go_to_next_engine();
  }
  set_go_to_next_engine() {
    this.clear_browser().then(value => this.go_to_next_engine());
  }
  go_to_next_engine() {
    console.log('Go to next engine');
    setTimeout(function () {
      this.extension.go_to_next_engine();
      // give enough time to complete the process
    }.bind(this), 5000);
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('BasePageBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('BasePage START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/CaptchaBot.js

class CaptchaBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('CaptchaBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  async navigate() {
    console.log('navigate', location.href);
    console.log('Go to base page:', new Date());
    setTimeout(function () {
      this.extension.go_to_base_page();
    }.bind(this), 60000);
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('CaptchaBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Captcha START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/bot/YandexCaptchaBot.js

class YandexCaptchaBot extends Bot {
  constructor(worker, extension) {
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start() {
    if (this.debug) console.log('YandexCaptchaBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });
  }
  async navigate() {
    console.log('navigate', location.href);
    console.log('Go to Yandex Base page:', new Date());
    await this.extension.set_iter_step('yandex_captcha');
    setTimeout(async function () {
      let iter = await this.extension.get_iter_step('yandex_captcha');
      if (iter < this.step_attempts) {
        this.extension.resume_search_from('/images/search?text=');
      } else {
        this.extension.go_to_base_page();
      }
    }.bind(this), 60000);
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn) {
    if (this.debug) console.log('YandexCaptchaBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('YandexCaptcha START!!!!');
      fn(1000);
    }, 500);
  }
} //class
;// CONCATENATED MODULE: ./src/content/ContentHandler.js














class ContentHandler {
  /**
   * [constructor]
   */
  constructor() {
    this.isListeningToBackend = false;
    this.browser = window.hasOwnProperty('chrome') ? chrome : browser;
    this.debug = true; //false;
    this.onBackendMessage = this.onBackendMessage.bind(this);
    this.settings = {};
  }

  /**
   * [return specific tracker for the current page]
   * @return {[type]} [description]
   */
  _getBot() {
    console.log(this.settings);
    console.log(new URL(this.settings['dummy_server']).hostname);
    console.log(new URL(this.settings['server']).hostname);
    let hostname_parts = window.location.hostname.split('.');
    let locationstr = window.location.toString();
    if (hostname_parts.length > 1) {
      let str = hostname_parts[hostname_parts.length - 2];
      if (locationstr.includes('captcha')) {
        if (str == 'yandex') {
          if (this.debug) console.log('YandexCaptchaBot');
          return YandexCaptchaBot;
        } else {
          return CaptchaBot;
        }
      }
      if (str == 'google') {
        console.log('google');

        // check second level domain for google
        if (hostname_parts.length > 2) {
          str = hostname_parts[hostname_parts.length - 3];
          if (str == 'consent') {
            if (this.debug) console.log('GoogleConsentBot');
            return GoogleConsentBot_GoogleBot;
          } else if (str == 'scholar') {
            //if (this.debug) console.log('YandexBot');
            //return YandexBot;
            return null;
          }
        }

        // otherwise default to google
        if (this.debug) console.log('GoogleBot');
        return GoogleBot;
      } else if (str == 'duckduckgo') {
        if (this.debug) console.log('DuckDuckGoBot');
        return DuckDuckGoBot;
      } else if (str == 'yandex') {
        if (this.debug) console.log('YandexBot');
        return YandexBot;
      } else if (str == 'bing') {
        if (this.debug) console.log('BingBot');
        return BingBot;
      } else if (str == 'yahoo') {
        // check second level domain for yahoo
        if (hostname_parts.length > 2) {
          str = hostname_parts[hostname_parts.length - 3];
          if (str == 'consent') {
            if (this.debug) console.log('YahooConsentBot');
            return YahooBot;
          }
        }
        if (this.debug) console.log('YahooBot');
        return YahooBot_YahooBot;
      } else if (str == 'baidu') {
        if (this.debug) console.log('BaiduBot');
        return BaiduBot;
      } else if (str == 'so' || str == '360kan') {
        if (this.debug) console.log('SoBot');
        return SoBot;
      } else if (str == 'sogou') {
        if (this.debug) console.log('SogouBot');
        return SogouBot;
      } else if (this._clean_www(window.location.hostname) == new URL(this.settings['server']).hostname) {
        if (this.debug) console.log('BasePageBot');
        return BasePageBot;
      }
    }
    if (this._clean_www(window.location.hostname) == new URL(this.settings['dummy_server']).hostname) {
      if (this.debug) console.log('BasePageBot');
      return BasePageBot;
    }
    if (this.debug) console.log('Bot');
    return null;
  }

  /**
   * [get parameter from background]
   * @return {Promise<object>}
   */
  _getParam() {
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('sendMessage("on_start")');
      this.browser.runtime.sendMessage('on_start', response => {
        if (this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
        }
        this.settings = response;
        resolve(response);
      });
    });
  }
  get_engine_url() {
    return location.protocol + '//' + location.hostname;
  }
  steady() {
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('sendMessage("steady")');
      console.log(this.get_engine_url());
      this.browser.runtime.sendMessage({
        'steady': true,
        'engine': this.get_engine_url()
      }, response => {
        if (this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        }

        resolve(response);
      });
    });
  }
  clear_browser() {
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('sendMessage("clear_browser")');
      this.browser.runtime.sendMessage({
        'clear_browser': true
      }, response => {
        if (this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        }

        resolve(response);
      });
    });
  }
  set_iter_step(step) {
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('sendMessage("set_iter_step")');
      this.browser.runtime.sendMessage({
        'set_iter_step': true,
        'step': step
      }, response => {
        if (this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        }

        resolve(response['iterator']);
      });
    });
  }
  get_iter_step(step) {
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('sendMessage("get_iter_step")');
      this.browser.runtime.sendMessage({
        'get_iter_step': true,
        'step': step
      }, response => {
        if (this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        }

        resolve(response['iterator']);
      });
    });
  }
  go_to_base_page() {
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('sendMessage("get_base_page")');
      this.browser.runtime.sendMessage({
        'get_base_page': true
      }, response => {
        if (this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        }

        window.location.replace(response.base_page);
        resolve(response);
      });
    });
  }
  resume_search_from(path_suffix) {
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('sendMessage("get_base_page")');
      this.browser.runtime.sendMessage({
        'get_current_search': true
      }, response => {
        if (this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        }

        window.location.replace(response.current_engine + path_suffix + response.current_keyword);
        resolve(response);
      });
    });
  }
  go_to_next_engine() {
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('sendMessage("get_next_engine")');
      this.browser.runtime.sendMessage({
        'get_next_engine': true
      }, response => {
        if (this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        }

        window.location.replace(response.next_engine);
        resolve(response);
      });
    });
  }
  _clean_www(hostname) {
    if (hostname.startsWith('www.')) {
      return hostname.substr(4);
    } else {
      return hostname;
    }
  }
  onBackendMessage(message, sender, sendResponse) {
    if (this.debug) console.log(message);
    if (message.action == 'init') {
      if (this.debug) console.log('onBackendMessage: init');
      if (this.bot == null) {
        this.init();
      }
      sendResponse(true);
    } else if (message.action == 'search') {
      if (this.debug) console.log('onBackendMessage: search');
      let engine_hostname = new URL(message.engine).hostname;

      /**
      This check happens now in the backend, so it should never enter in the else part.
      Leaving if for now, but it could be replaced by simply:
      this.bot.search(message.keyword, message.engine);
      **/
      if (this._clean_www(location.hostname) == this._clean_www(engine_hostname) && location.pathname == '/') {
        this.bot.search(message.keyword, message.engine);
        sendResponse(true);
      } else {
        console.log('not main page', this._clean_www(location.hostname), this._clean_www(engine_hostname));
        window.location.replace(message.engine);
        sendResponse(false);
      }
    }
  }

  /**
   * [create the tracker and start the event listeners for fetching the data]
   */
  createBot() {
    if (this.debug) console.log('-> createBot()');
    const Bot = this._getBot();
    if (Bot != null) {
      this.bot = new Bot(this);
      this.bot.eventEmitter.on('onNewURL', () => {
        this.init();
      });
      this.bot.eventEmitter.on('onStart', async delay => {
        if (this.debug) console.log('onStart this.sendMessage');
      });

      // connect to the backend
      this.browser.runtime.connect({
        name: "content_handler_connection"
      }).onDisconnect.addListener(function (externalPort) {
        if (this.debug) console.log(externalPort);
        if (this.init_timer) {
          clearTimeout(this.init_timer);
        }
      }.bind(this));
      this.bot.start();
    }
  }

  /**
   * [initalizate the contenthandler]
   */
  async init() {
    if (!this.isListeningToBackend) {
      this.browser.runtime.onMessage.addListener(this.onBackendMessage);
      this.isListeningToBackend = true;
    }
    try {
      let param = await this._getParam();
      if (typeof param == 'object') {
        this.createBot();
      }
    } catch (e) {
      this.init_timer = setTimeout(() => this.init(), 2000);
      console.log(e);
    }
  }
} //class
;// CONCATENATED MODULE: ./src/content/index.js


let content = new ContentHandler();
content.init();
})();

/******/ })()
;