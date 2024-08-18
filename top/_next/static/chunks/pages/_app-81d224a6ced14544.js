(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    2010: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return c
            },
            f: function() {
                return d
            }
        });
        var r = n(7294);
        let a = ["light", "dark"]
          , o = "(prefers-color-scheme: dark)"
          , i = "undefined" == typeof window
          , s = (0,
        r.createContext)(void 0)
          , l = {
            setTheme: e=>{}
            ,
            themes: []
        }
          , c = ()=>{
            var e;
            return null !== (e = (0,
            r.useContext)(s)) && void 0 !== e ? e : l
        }
          , d = e=>(0,
        r.useContext)(s) ? r.createElement(r.Fragment, null, e.children) : r.createElement(m, e)
          , u = ["light", "dark"]
          , m = ({forcedTheme: e, disableTransitionOnChange: t=!1, enableSystem: n=!0, enableColorScheme: i=!0, storageKey: l="theme", themes: c=u, defaultTheme: d=n ? "system" : "light", attribute: m="data-theme", value: p, children: y, nonce: b})=>{
            let[g,$] = (0,
            r.useState)(()=>h(l, d))
              , [k,S] = (0,
            r.useState)(()=>h(l))
              , E = p ? Object.values(p) : c
              , T = (0,
            r.useCallback)(e=>{
                let r = e;
                if (!r)
                    return;
                "system" === e && n && (r = w());
                let o = p ? p[r] : r
                  , s = t ? v() : null
                  , l = document.documentElement;
                if ("class" === m ? (l.classList.remove(...E),
                o && l.classList.add(o)) : o ? l.setAttribute(m, o) : l.removeAttribute(m),
                i) {
                    let e = a.includes(d) ? d : null
                      , t = a.includes(r) ? r : e;
                    l.style.colorScheme = t
                }
                null == s || s()
            }
            , [])
              , C = (0,
            r.useCallback)(e=>{
                $(e);
                try {
                    localStorage.setItem(l, e)
                } catch (e) {}
            }
            , [e])
              , _ = (0,
            r.useCallback)(t=>{
                let r = w(t);
                S(r),
                "system" === g && n && !e && T("system")
            }
            , [g, e]);
            (0,
            r.useEffect)(()=>{
                let e = window.matchMedia(o);
                return e.addListener(_),
                _(e),
                ()=>e.removeListener(_)
            }
            , [_]),
            (0,
            r.useEffect)(()=>{
                let e = e=>{
                    e.key === l && C(e.newValue || d)
                }
                ;
                return window.addEventListener("storage", e),
                ()=>window.removeEventListener("storage", e)
            }
            , [C]),
            (0,
            r.useEffect)(()=>{
                T(null != e ? e : g)
            }
            , [e, g]);
            let x = (0,
            r.useMemo)(()=>({
                theme: g,
                setTheme: C,
                forcedTheme: e,
                resolvedTheme: "system" === g ? k : g,
                themes: n ? [...c, "system"] : c,
                systemTheme: n ? k : void 0
            }), [g, C, e, k, n, c]);
            return r.createElement(s.Provider, {
                value: x
            }, r.createElement(f, {
                forcedTheme: e,
                disableTransitionOnChange: t,
                enableSystem: n,
                enableColorScheme: i,
                storageKey: l,
                themes: c,
                defaultTheme: d,
                attribute: m,
                value: p,
                children: y,
                attrs: E,
                nonce: b
            }), y)
        }
          , f = (0,
        r.memo)(({forcedTheme: e, storageKey: t, attribute: n, enableSystem: i, enableColorScheme: s, defaultTheme: l, value: c, attrs: d, nonce: u})=>{
            let m = "system" === l
              , f = "class" === n ? `var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});` : `var d=document.documentElement,n='${n}',s='setAttribute';`
              , h = s ? a.includes(l) && l ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
              , v = (e,t=!1,r=!0)=>{
                let o = c ? c[e] : e
                  , i = t ? e + "|| ''" : `'${o}'`
                  , l = "";
                return s && r && !t && a.includes(e) && (l += `d.style.colorScheme = '${e}';`),
                "class" === n ? l += t || o ? `c.add(${i})` : "null" : o && (l += `d[s](n,${i})`),
                l
            }
              , w = e ? `!function(){${f}${v(e)}}()` : i ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c ? `var x=${JSON.stringify(c)};` : ""}${v(c ? "x[e]" : "e", !0)}}${m ? "" : "else{" + v(l, !1, !1) + "}"}${h}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c ? `var x=${JSON.stringify(c)};` : ""}${v(c ? "x[e]" : "e", !0)}}else{${v(l, !1, !1)};}${h}}catch(t){}}();`;
            return r.createElement("script", {
                nonce: u,
                dangerouslySetInnerHTML: {
                    __html: w
                }
            })
        }
        , ()=>!0)
          , h = (e,t)=>{
            let n;
            if (!i) {
                try {
                    n = localStorage.getItem(e) || void 0
                } catch (e) {}
                return n || t
            }
        }
          , v = ()=>{
            let e = document.createElement("style");
            return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
            document.head.appendChild(e),
            ()=>{
                window.getComputedStyle(document.body),
                setTimeout(()=>{
                    document.head.removeChild(e)
                }
                , 1)
            }
        }
          , w = e=>(e || (e = window.matchMedia(o)),
        e.matches ? "dark" : "light")
    },
    6840: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(1360)
        }
        ])
    },
    1360: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return u
            }
        });
        var r = n(5893);
        n(5303);
        var a = n(2010)
          , o = n(7294)
          , i = ()=>{
            window.va || (window.va = function(...e) {
                (window.vaq = window.vaq || []).push(e)
            }
            )
        }
        ;
        function s() {
            return "undefined" != typeof window
        }
        function l() {
            return "production"
        }
        function c() {
            return "development" === function() {
                let e = s() ? window.vam : l();
                return e || "production"
            }()
        }
        function d(e) {
            return (0,
            o.useEffect)(()=>{
                !function(e={
                    debug: !0
                }) {
                    var t;
                    if (!s())
                        return;
                    (function(e="auto") {
                        if ("auto" === e) {
                            window.vam = l();
                            return
                        }
                        window.vam = e
                    }
                    )(e.mode),
                    i(),
                    e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                    let n = e.scriptSrc || (c() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js");
                    if (document.head.querySelector(`script[src*="${n}"]`))
                        return;
                    let r = document.createElement("script");
                    r.src = n,
                    r.defer = !0,
                    r.dataset.sdkn = "@vercel/analytics" + (e.framework ? `/${e.framework}` : ""),
                    r.dataset.sdkv = "1.2.2",
                    e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"),
                    e.endpoint && (r.dataset.endpoint = e.endpoint),
                    e.dsn && (r.dataset.dsn = e.dsn),
                    r.onerror = ()=>{
                        let e = c() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                        console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)
                    }
                    ,
                    c() && !1 === e.debug && (r.dataset.debug = "false"),
                    document.head.appendChild(r)
                }({
                    framework: e.framework || "react",
                    ...void 0 !== e.route && {
                        disableAutoTrack: !0
                    },
                    ...e
                })
            }
            , []),
            (0,
            o.useEffect)(()=>{
                e.route && e.path && function({route: e, path: t}) {
                    var n;
                    null == (n = window.va) || n.call(window, "pageview", {
                        route: e,
                        path: t
                    })
                }({
                    route: e.route,
                    path: e.path
                })
            }
            , [e.route, e.path]),
            null
        }
        function u(e) {
            let {Component: t, pageProps: n} = e;
            return (0,
            r.jsxs)(a.f, {
                attribute: "class",
                children: [(0,
                r.jsx)(t, {
                    ...n
                }), (0,
                r.jsx)(d, {})]
            })
        }
    },
    5303: function() {}
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(6840),
        t(8355)
    }),
    _N_E = e.O()
}
]);
