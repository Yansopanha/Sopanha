(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[195], {
    3986: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
            return s(9488)
        }
        ])
    },
    2596: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/github.1290de3d.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5416: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/linkedin.cc63d39e.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    1629: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/x.745c0cd6.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    4236: function(e, t, s) {
        "use strict";
        s.d(t, {
            H: function() {
                return c
            }
        });
        var r = s(5893)
          , i = s(2962)
          , n = s(9008)
          , a = s.n(n);
        s(7294);
        var l = s(3454);
        let c = e=>{
            let {title: t, description: s, imageUrl: n, siteUrl: c, keyWords: d} = e
              , o = l.env.NEXT_FB_DOMAIN_APP_ID
              , h = "".concat("https://www.tharin.xyz").concat(c || "")
              , x = "".concat("https://www.tharin.xyz").concat(n || "/profile.jpg")
              , m = "tRIN's portfolio"
              , u = s || "This portfolio details my experience as a software engineer."
              , f = t || m;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(i.PB, {
                    title: f,
                    description: u,
                    canonical: h,
                    openGraph: {
                        url: h,
                        type: "website",
                        title: f,
                        site_name: m,
                        description: u,
                        images: [{
                            url: x,
                            width: 1200,
                            height: 630,
                            alt: m
                        }]
                    },
                    additionalMetaTags: [{
                        property: "keywords",
                        content: d || "KruyTharin Portfolio"
                    }],
                    twitter: {
                        site: c || "https://twitter.com/rinz_dev",
                        cardType: "summary_large_image"
                    },
                    facebook: {
                        appId: o
                    }
                }), (0,
                r.jsx)(i.PB, {}), (0,
                r.jsxs)(a(), {
                    children: [(0,
                    r.jsx)("meta", {
                        name: "googlebot",
                        content: "index,follow"
                    }), (0,
                    r.jsx)("meta", {
                        name: "facebook-domain-verification",
                        content: o
                    }), (0,
                    r.jsx)("link", {
                        rel: "icon",
                        href: "/profile.jpg"
                    })]
                })]
            })
        }
    },
    7153: function(e, t, s) {
        "use strict";
        var r = s(5893)
          , i = s(4184)
          , n = s.n(i);
        t.Z = e=>{
            let {children: t, isLeading: s, fontBold: i} = e;
            return (0,
            r.jsx)("span", {
                className: n()("text-base lg:text-md text-gray-500", {
                    "leading-normal": s,
                    "font-bold !text-black dark:!text-white": i
                }),
                children: t
            })
        }
    },
    8058: function(e, t, s) {
        "use strict";
        var r = s(5893)
          , i = s(7294)
          , n = s(2010)
          , a = s(2093)
          , l = s(4738)
          , c = s(4184)
          , d = s.n(c);
        t.Z = ()=>{
            let {systemTheme: e, theme: t, setTheme: s} = (0,
            n.F)()
              , c = "system" === t ? e : t
              , [o,h] = (0,
            i.useState)(!1);
            return ((0,
            i.useEffect)(()=>{
                h(!0)
            }
            , []),
            o) ? (0,
            r.jsx)("div", {
                onClick: ()=>{
                    s("dark" === c ? "light" : "dark")
                }
                ,
                className: " transition-all duration-100 dark:bg-gray-700 bg-gray-50 text-2xl md:text-4xl relative w-12 h-6 rounded-2xl dark:border-0 border cursor-pointer",
                children: (0,
                r.jsx)("div", {
                    className: d()("dark:bg-black bg-white rounded-full w-fit absolute mx-1 top-[50%] -translate-y-[50%] transform duration-500", "dark" === t ? "right-0" : "left-0"),
                    children: "dark" === c ? (0,
                    r.jsx)(a.Z, {
                        width: 20,
                        height: 20,
                        className: "p-0.5"
                    }) : (0,
                    r.jsx)(l.Z, {
                        width: 20,
                        height: 20,
                        className: "p-0.5"
                    })
                })
            }) : null
        }
    },
    9488: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return j
            }
        });
        var r = s(5893)
          , i = s(5675)
          , n = s.n(i)
          , a = s(1629)
          , l = s(2596)
          , c = s(5416)
          , d = s(1664)
          , o = s.n(d)
          , h = ()=>(0,
        r.jsx)("div", {
            children: (0,
            r.jsx)("div", {
                className: "w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent ",
                children: (0,
                r.jsxs)("div", {
                    className: "pt-5 pb-10 flex md:justify-between items-center md:flex-row flex-col gap-5",
                    children: [(0,
                    r.jsx)("div", {
                        className: "flex flex-col md:text-start text-center",
                        children: (0,
                        r.jsxs)(o(), {
                            href: "/",
                            className: "flex",
                            children: ["{t", (0,
                            r.jsx)("span", {
                                className: "text-primary font-semibold",
                                children: "RIN"
                            }), "}"]
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex items-center gap-x-4 ",
                        children: [(0,
                        r.jsx)(o(), {
                            href: "https://github.com/KruyTharin",
                            target: "_blank",
                            children: (0,
                            r.jsx)(n(), {
                                src: l.Z,
                                alt: "facebook",
                                className: "w-5 h-5 cursor-pointer img"
                            })
                        }), (0,
                        r.jsx)(o(), {
                            href: "https://twitter.com/rinz_dev",
                            target: "_blank",
                            children: (0,
                            r.jsx)(n(), {
                                src: a.Z,
                                alt: "twitter",
                                className: "w-5 h-5 cursor-pointer img"
                            })
                        }), (0,
                        r.jsx)(o(), {
                            href: "https://www.linkedin.com/in/kruy-tharin-26469b261/",
                            target: "_blank",
                            children: (0,
                            r.jsx)(n(), {
                                src: c.Z,
                                alt: "linkedin",
                                className: "w-5 h-5 cursor-pointer img"
                            })
                        })]
                    }), (0,
                    r.jsxs)("span", {
                        className: "font-bold text-gray-500 text-sm",
                        children: ["\xa9 ", new Date().getFullYear(), " KruyTharin"]
                    })]
                })
            })
        })
          , x = s(8058)
          , m = s(7153)
          , u = ()=>(0,
        r.jsxs)("div", {
            className: "flex justify-between items-center",
            children: [(0,
            r.jsxs)(o(), {
                href: "/",
                className: "flex",
                children: ["{t", (0,
                r.jsx)("span", {
                    className: "text-primary font-semibold",
                    children: "RIN"
                }), "}"]
            }), (0,
            r.jsxs)("div", {
                className: "flex items-center gap-x-4 ",
                children: [(0,
                r.jsxs)("div", {
                    className: "flex gap-x-5",
                    children: [(0,
                    r.jsx)(o(), {
                        href: "/",
                        children: (0,
                        r.jsx)(m.Z, {
                            children: "Home"
                        })
                    }), (0,
                    r.jsx)(o(), {
                        href: "/blog",
                        children: (0,
                        r.jsx)(m.Z, {
                            children: "Blogs"
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "w-[1px] h-5 bg-gray-300 dark:bg-gray-700 mx-2 "
                }), (0,
                r.jsx)(x.Z, {})]
            })]
        })
          , f = e=>{
            let {children: t} = e;
            return (0,
            r.jsxs)("div", {
                className: "container mt-5",
                children: [(0,
                r.jsx)(u, {}), (0,
                r.jsx)("main", {
                    children: t
                }), (0,
                r.jsx)(h, {})]
            })
        }
          , g = s(4236)
          , j = ()=>(0,
        r.jsxs)(f, {
            children: [(0,
            r.jsx)(g.H, {
                title: "tRIN's Blog"
            }), (0,
            r.jsx)("div", {
                className: "h-screen text-center flex justify-center items-center",
                children: (0,
                r.jsxs)("div", {
                    className: "max-w-xl w-full ",
                    children: [(0,
                    r.jsx)("h2", {
                        className: "text-4xl font-bold text-primary mb-3",
                        children: "Coming soon."
                    }), (0,
                    r.jsx)(m.Z, {
                        children: "There is no blogs yet!"
                    })]
                })
            })]
        })
    }
}, function(e) {
    e.O(0, [49, 774, 888, 179], function() {
        return e(e.s = 3986)
    }),
    _N_E = e.O()
}
]);
