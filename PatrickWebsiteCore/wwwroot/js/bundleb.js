(function(e) {
    function t(t) {
        for (var r, i, c = t[0], s = t[1], l = t[2], u = 0, d = []; u < c.length; u++) i = c[u], Object.prototype.hasOwnProperty.call(o, i) && o[i] && d.push(o[i][0]), o[i] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        f && f(t);
        while (d.length) d.shift()();
        return a.push.apply(a, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
                var c = n[i];
                0 !== o[c] && (r = !1)
            }
            r && (a.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var r = {},
        i = {
            bundle: 0
        },
        o = {
            bundle: 0
        },
        a = [];

    function c(e) {
        return s.p + "" + ({
            "brand-slider": "brand-slider",
            "country-selector": "country-selector",
            gouvernance: "gouvernance",
            modal: "modal",
            search: "search",
            "single-card": "single-card",
            "story-slider": "story-slider"
        }[e] || e) + ".js"
    }

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(e) {
        var t = [],
            n = {
                "chunk-04eeced9": 1,
                "brand-slider": 1,
                "chunk-d6de5dac": 1,
                gouvernance: 1,
                modal: 1,
                search: 1,
                "story-slider": 1
            };
        i[e] ? t.push(i[e]) : 0 !== i[e] && n[e] && t.push(i[e] = new Promise((function(t, n) {
            for (var r = "css/" + ({
                    "brand-slider": "brand-slider",
                    "country-selector": "country-selector",
                    gouvernance: "gouvernance",
                    modal: "modal",
                    search: "search",
                    "single-card": "single-card",
                    "story-slider": "story-slider"
                }[e] || e) + ".css", o = s.p + r, a = document.getElementsByTagName("link"), c = 0; c < a.length; c++) {
                var l = a[c],
                    u = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (u === r || u === o)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (c = 0; c < d.length; c++) {
                l = d[c], u = l.getAttribute("data-href");
                if (u === r || u === o) return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function(t) {
                var r = t && t.target && t.target.src || o,
                    a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                a.code = "CSS_CHUNK_LOAD_FAILED", a.request = r, delete i[e], f.parentNode.removeChild(f), n(a)
            }, f.href = o;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(f)
        })).then((function() {
            i[e] = 0
        })));
        var r = o[e];
        if (0 !== r)
            if (r) t.push(r[2]);
            else {
                var a = new Promise((function(t, n) {
                    r = o[e] = [t, n]
                }));
                t.push(r[2] = a);
                var l, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, s.nc && u.setAttribute("nonce", s.nc), u.src = c(e);
                var d = new Error;
                l = function(t) {
                    u.onerror = u.onload = null, clearTimeout(f);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")", d.name = "ChunkLoadError", d.type = r, d.request = i, n[1](d)
                        }
                        o[e] = void 0
                    }
                };
                var f = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: u
                    })
                }), 12e4);
                u.onerror = u.onload = l, document.head.appendChild(u)
            }
        return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/themes/LorealCorp/", s.oe = function(e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var d = 0; d < l.length; d++) t(l[d]);
    var f = u;
    a.push([0, "vendors.bundle"]), n()
})({
    0: function(e, t, n) {
        n("55e5"), e.exports = n("113a")
    },
    "04d3": function(e, t, n) {
        "use strict";
        n("7514");
        var r = n("5901"),
            i = "padding: 2px 6px; background: #111; color: #eee";
        t["a"] = {
            log: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log",
                    o = arguments.length > 3 ? arguments[3] : void 0;
                if (r["a"]) {
                    var a, c = [{
                            type: "log",
                            color: "#68b6f1",
                            state: "LOG"
                        }, {
                            type: "warn",
                            color: "#ff8800",
                            state: "WARNING"
                        }, {
                            type: "error",
                            color: "#FF0000",
                            state: "ERROR"
                        }],
                        s = ["%c".concat(c.find((function(e) {
                            return e.type === n
                        })).state, " %c").concat(e), "padding: 2px 6px; background: #111; color:".concat(c.find((function(e) {
                            return e.type === n
                        })).color), i];
                    console.group("AnalyticsHandler"), (a = console).log.apply(a, s), t && o && ("uaevent" === t.event ? (console.table && console.table(t), console.log("%cAssociated raw data:", i), console.log(JSON.stringify(t, null, 2))) : (console.log("%cAssociated raw data:", i), console.log(JSON.stringify(t, null, 2)))), console.groupEnd()
                }
            },
            info: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                this.log(e, t, "log", n)
            },
            warn: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                this.log(e, t, "warn", n)
            },
            error: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                this.log(e, t, "error", n)
            }
        }
    },
    "0d50": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        n("ac6a");
        var r = {
            methods: {
                setActiveClass: function(e) {
                    var t = e.currentTarget;
                    this.removeActiveClass(), setTimeout((function() {
                        t.classList.add("active")
                    }), 1), t.classList.add("show"), t.setAttribute("aria-expanded", !0)
                },
                removeActiveClass: function() {
                    this.$el.querySelectorAll(".mega-menu__brand-trigger.active").forEach((function(e) {
                        e.classList.remove("active"), setTimeout((function() {
                            e.classList.remove("show")
                        }), 500), e.setAttribute("aria-expanded", !1)
                    }))
                }
            }
        }
    },
    "113a": function(e, t, n) {
        "use strict";
        n.r(t);
        n("8e6e"), n("ac6a"), n("456d");
        var r = n("bd86"),
            i = (n("cadf"), n("551c"), n("f751"), n("097d"), n("a026")),
            o = n("62f9"),
            a = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "ally-switcher"
                }, [n("div", {
                    ref: "slide",
                    staticClass: "ally-switcher__slide",
                    style: e.slideStyles
                }), e._t("default", null, {
                    toggleBodyClass: e.toggleBodyClass
                })], 2)
            },
            c = [],
            s = (n("a481"), {
                name: "ally-switcher",
                props: {
                    classToAdd: {
                        type: String,
                        required: !1,
                        default: void 0
                    },
                    isVisible: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isSwitcherEnabled: !1,
                        slideStyles: {
                            width: "50%",
                            right: "3px"
                        }
                    }
                },
                computed: {
                    switcherName: function() {
                        return this.classToAdd.replace("-", "")
                    }
                },
                watch: {
                    isVisible: function(e) {
                        e && this.moveSwitcher()
                    }
                },
                mounted: function() {
                    var e = this,
                        t = localStorage.getItem(this.switcherName);
                    this.isSwitcherEnabled = !!t && JSON.parse(t), this.setToLocalStorage(), this.$nextTick((function() {
                        e.setRadioOnMount(), e.toggleBodyClass(e.isSwitcherEnabled)
                    }))
                },
                methods: {
                    toggleBodyClass: function(e) {
                        this.isSwitcherEnabled = e, e ? document.body.classList.add(this.classToAdd) : document.body.classList.remove(this.classToAdd), this.moveSwitcher(), this.setToLocalStorage()
                    },
                    moveSwitcher: function() {
                        var e = this.$el.querySelector("input:checked").getAttribute("id"),
                            t = this.$el.querySelector('label[for="'.concat(e, '"]')).getBoundingClientRect(),
                            n = this.$el.getBoundingClientRect();
                        this.slideStyles = {
                            width: "".concat(t.width, "px"),
                            left: "".concat(t.left - n.left, "px")
                        }
                    },
                    setToLocalStorage: function() {
                        localStorage.setItem(this.switcherName, this.isSwitcherEnabled)
                    },
                    setRadioOnMount: function() {
                        var e = this.$el.querySelectorAll("input");
                        this.isSwitcherEnabled ? e[1].checked = !0 : e[0].checked = !0
                    }
                }
            }),
            l = s,
            u = (n("7d0a"), n("2877")),
            d = Object(u["a"])(l, a, c, !1, null, null, null),
            f = d.exports,
            h = Object(o["a"])({
                components: {
                    AllySwitcher: f
                }
            }),
            m = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "container--large focus-video"
                }, [e._t("default", null, {
                    openVideo: e.openVideo
                })], 2)
            },
            p = [],
            b = n("75fc"),
            y = {
                name: "focus-slider",
                methods: {
                    getChildSlider: function() {
                        var e;
                        return Object(b["a"])(this.$children).forEach((function(t) {
                            "scroll-slider" === t.$options._componentTag && (e = t)
                        })), e
                    },
                    openVideo: function(e, t) {
                        this.getChildSlider().openVideo(e, t)
                    }
                }
            },
            v = y,
            g = Object(u["a"])(v, m, p, !1, null, null, null),
            w = g.exports,
            O = Object(o["a"])({
                components: {
                    FocusSlider: w
                }
            }),
            k = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "scroll-slider",
                    class: {
                        "scroll-slider--loading ": e.isLoading
                    }
                }, [e.isLoading ? n("loader") : e._e(), n("video-layer", {
                    ref: "videoLayer",
                    attrs: {
                        url: e.videoUrl,
                        flowid: e.flowid
                    },
                    scopedSlots: e._u([{
                        key: "closebtn",
                        fn: function() {
                            return [e._v("\n      " + e._s(e.closeText) + "\n    ")]
                        },
                        proxy: !0
                    }])
                }), e.isSimpleSlider ? e._e() : n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showSideContent,
                        expression: "showSideContent"
                    }],
                    staticClass: "scroll-slider__side-content"
                }, [e._t("sidecontent", null, {
                    getSildes: e.getSildes
                })], 2), n("a", {
                    staticClass: "scroll-slider__skip-content",
                    attrs: {
                        id: e.filteredContentId,
                        tabindex: "-1"
                    }
                }), n("scroller", {
                    directives: [{
                        name: "animate",
                        rawName: "v-animate",
                        value: {
                            cssClass: "animate-in",
                            delay: 100,
                            reset: !0
                        },
                        expression: "{ cssClass: 'animate-in', delay: 100, reset: true }"
                    }],
                    ref: "slider",
                    attrs: {
                        "data-simplebar-auto-hide": "false",
                        recalculate: e.updateScroll,
                        "toggle-side-content": !e.isSimpleSlider
                    }
                }, [e.cards ? e._l(e.cards, (function(t) {
                    return n("div", {
                        key: t.id,
                        staticClass: "scroll-slider__slide",
                        attrs: {
                            "focusable-slide": ""
                        }
                    }, [t.cardType < 3 ? n("slider-card", {
                        attrs: {
                            data: t
                        }
                    }) : 3 === t.cardType ? n("video-card", {
                        attrs: {
                            data: t,
                            id: t.id
                        },
                        on: {
                            wasClicked: function(n) {
                                return e.openVideo({
                                    url: t.apiLink,
                                    flowid: t.flowid
                                }, {
                                    cardId: t.id
                                })
                            }
                        }
                    }) : 5 === t.cardType ? n("simple-card", {
                        attrs: {
                            data: t,
                            id: t.id
                        }
                    }) : n("quote-card", {
                        attrs: {
                            data: t
                        }
                    })], 1)
                })) : e._t("default", null, {
                    openVideo: e.openVideo
                }), e.hasError ? n("div", {
                    staticClass: "error"
                }, [e._v("Something went wrong :(")]) : e._e()], 2)], 1)
            },
            j = [],
            S = n("768b"),
            E = (n("ffc1"), function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "scroller"
                }, [n("div", {
                    ref: "scrollerContent",
                    staticClass: "simplebar-scroll-content"
                }, [n("div", {
                    staticClass: "scroller-content"
                }, [e._t("default")], 2)])])
            }),
            C = [],
            _ = (n("c5f6"), n("a6f9")),
            A = n("7cae"),
            P = {
                name: "scroller",
                mixins: [A["a"]],
                props: {
                    setLeft: {
                        type: [String, Number, Boolean],
                        default: 0
                    },
                    recalculate: {
                        type: [String, Number, Boolean],
                        default: 0
                    },
                    toggleSideContent: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        scrollbar: !1,
                        scrollElement: null,
                        slidesArray: null
                    }
                },
                watch: {
                    recalculate: function() {
                        this.doRecalculate(), this.slidesArray = this.$el.querySelectorAll(".scroll-slider__slide")
                    },
                    setLeft: function(e) {
                        void 0 !== e && this.scrollToLeft(e)
                    },
                    screenSize: function() {
                        this.animatedSlides()
                    }
                },
                mounted: function() {
                    this.init(), this.slidesArray = this.$el.querySelectorAll(".scroll-slider__slide"), this.animatedSlides()
                },
                methods: {
                    hideSideContent: function() {
                        this.hideSlide()
                    },
                    hideSlide: function() {
                        var e = this.$parent.$el.querySelector(".scroll-slider__side-content").getBoundingClientRect();
                        Object(b["a"])(this.slidesArray).forEach((function(t) {
                            var n = t.getBoundingClientRect();
                            n.left < e.left + e.width ? t.classList.add("slide-hidden") : t.classList.remove("slide-hidden")
                        }))
                    },
                    showSlides: function() {
                        Object(b["a"])(this.slidesArray).forEach((function(e) {
                            e.setAttribute("style", "")
                        }))
                    },
                    scrollHandler: function() {
                        document.dispatchEvent(new CustomEvent("carouselLazyImg")), this.toggleSideContent && "small" !== this.screenSize && this.hideSideContent()
                    },
                    animatedSlides: function() {
                        var e = this;
                        this.scrollElement.addEventListener("scroll", Object(o["e"])((function() {
                            e.scrollHandler()
                        }), 160)), this.toggleSideContent && "small" !== this.screenSize ? this.scrollToLeft(0) : setTimeout((function() {
                            window.innerWidth < 1024 && e.showSlides(), e.scrollToLeft(0)
                        }), 100)
                    },
                    scrollToLeft: function(e) {
                        e = "boolean" === typeof e ? 0 : parseInt(e, 10), !1 !== this.scrollbar && (this.scrollbar.getScrollElement().scrollLeft = e)
                    },
                    doRecalculate: function() {
                        !1 !== this.scrollbar && (this.scrollbar.recalculate(), this.scrollToLeft(0))
                    },
                    init: function() {
                        !1 === this.scrollbar && (this.scrollbar = new _["a"](this.$refs.scrollerContent, {
                            autoHide: !1
                        }), this.scrollElement = this.scrollbar.getScrollElement())
                    }
                }
            },
            L = P,
            x = Object(u["a"])(L, E, C, !1, null, null, null),
            q = x.exports,
            I = n("d5de"),
            T = n("6b0c"),
            N = {
                name: "animate",
                inserted: function(e, t) {
                    var n = t.value,
                        r = n.cssClass,
                        i = void 0 === r ? "animate" : r,
                        o = n.delay,
                        a = void 0 === o ? 700 : o,
                        c = n.reset,
                        s = void 0 !== c && c,
                        l = n.threshold,
                        u = void 0 === l ? [.4] : l;
                    setTimeout((function() {
                        Object(T["a"])(e, {
                            delay: a,
                            checkIsVisible: !0,
                            threshold: u
                        }).then((function() {
                            !document.getElementsByTagName("body")[0].classList.contains("no-animation") && e.classList.add(i), s && setTimeout((function() {
                                e.classList.add("animated"), e.classList.remove(i)
                            }), 1500)
                        }))
                    }), 500)
                }
            },
            D = {
                name: "scroll-slider",
                components: {
                    scroller: q,
                    loader: function() {
                        return n.e("chunk-d6de5dac").then(n.bind(null, "29cb"))
                    },
                    "video-layer": function() {
                        return n.e("chunk-2d0b59e4").then(n.bind(null, "1a53"))
                    },
                    "slider-card": function() {
                        return n.e("chunk-2d0d642f").then(n.bind(null, "7297"))
                    },
                    "video-card": function() {
                        return n.e("chunk-2d20734c").then(n.bind(null, "a018"))
                    },
                    "quote-card": function() {
                        return n.e("chunk-2d21f326").then(n.bind(null, "d994"))
                    },
                    "simple-card": function() {
                        return n.e("chunk-2d21e08e").then(n.bind(null, "d49a"))
                    }
                },
                directives: {
                    animate: N
                },
                props: {
                    slidesApiUrl: {
                        type: String,
                        default: ""
                    },
                    sliderApiParams: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    },
                    isSimpleSlider: {
                        type: Boolean,
                        default: !1
                    },
                    srFilteredText: {
                        type: String,
                        default: ""
                    },
                    closeText: {
                        type: String,
                        default: "close"
                    }
                },
                data: function() {
                    return {
                        counter: 0,
                        cards: null,
                        updateScroll: !1,
                        showSideContent: !0,
                        videoUrl: null,
                        flowid: null,
                        filteredContentId: null,
                        srFilterId: null,
                        isLoading: !1,
                        hasError: !1
                    }
                },
                computed: {
                    isFilteredSlider: function() {
                        return !!this.slidesApiUrl
                    }
                },
                mounted: function() {
                    this.makeFocusable(), this.isFilteredSlider && this.setActiveFilterOnLoad()
                },
                methods: {
                    openVideo: function(e, t) {
                        var n, r = this;
                        n = t.target ? t.target : document.getElementById(t.cardId).querySelector(".card__play"), this.videoUrl = e.url, this.flowid = e.flowid, setTimeout((function() {
                            r.$refs.videoLayer.videoCall(n)
                        }), 100)
                    },
                    makeFocusable: function() {
                        this.$el.classList.contains("scroll-slider--image") && this.$el.querySelector(".simplebar-content-wrapper").setAttribute("tabindex", 0)
                    },
                    setSrText: function(e) {
                        document.querySelector(".filtered-results-sr").innerText = e
                    },
                    srFilteredResults: function(e) {
                        var t = this;
                        this.srFilterId = this.filteredContentId, this.setSrText("".concat(e, " ").concat(this.srFilteredText)), setTimeout((function() {
                            t.setSrText("")
                        }), 7e3)
                    },
                    addSliderAnimation: function(e) {
                        var t = this;
                        Object(b["a"])(this.$refs.slider.$el.querySelectorAll(".scroll-slider__slide")).forEach((function(n, r) {
                            n.setAttribute("style", t.setAnimation(e, r))
                        }))
                    },
                    setAnimation: function(e, t) {
                        var n = "transition: opacity .4s cubic-bezier(.075, .82, .165, 1) ".concat(.05 * t, "s, transform .25s cubic-bezier(.075, .82, .165, 1) ").concat(.05 * t, "s; opacity: 1; transform: none;"),
                            r = "transition: opacity .4s cubic-bezier(.075, .82, .165, 1) ".concat(.05 * t, "s, transform .25s cubic-bezier(.075, .82, .165, 1) ").concat(.05 * t, "s; opacity: 0 transform: translateY(40px);");
                        return "in" === e ? n : r
                    },
                    buildApiParams: function() {
                        for (var e = [], t = 0, n = Object.entries(this.sliderApiParams); t < n.length; t++) {
                            var r = Object(S["a"])(n[t], 2),
                                i = r[0],
                                o = r[1];
                            e.push("".concat(i, "=").concat(o))
                        }
                        return e.join("&")
                    },
                    setActiveFilterOnLoad: function() {
                        var e = this.$el.querySelector(".scroll-slider__filters .skipto").getAttribute("href").slice(1);
                        this.setAriaSelected(this.$el.querySelector(".scroll-slider__filters button"), !0), this.filteredContentId = e
                    },
                    setAriaSelected: function(e, t) {
                        e.setAttribute("aria-selected", t)
                    },
                    applyFilter: function(e) {
                        var t = this;
                        this.cards = e, setTimeout((function() {
                            t.isLoading = !1, t.updateScroll = !0, t.addSliderAnimation("in")
                        }), 10), this.srFilteredResults(this.cards.length), this.$nextTick((function() {
                            t.updateScroll = !1
                        }))
                    },
                    getSildes: function(e, t) {
                        var n = this;
                        this.isLoading = !0;
                        var r = t.target;
                        if (this.hasError = !1, this.filteredContentId === e) return this.isLoading = !1, !1;
                        this.filteredContentId = e, this.counter += 1;
                        var i = this.counter;
                        this.$el.querySelectorAll(".scroll-slider__side-content button").forEach((function(e) {
                            n.setAriaSelected(e, !1)
                        })), this.setAriaSelected(r, !0), this.addSliderAnimation("out"), this.$refs.slider.$el.classList.remove("animated"), setTimeout((function() {
                            n.counter === i && Object(I["a"])("".concat(n.slidesApiUrl).concat(n.filteredContentId, "&").concat(n.buildApiParams())).then((function(e) {
                                n.applyFilter(e), n.isLoading = !1
                            })).catch((function() {
                                n.hasError = !0, n.isLoading = !1
                            }))
                        }), 1e3)
                    }
                }
            },
            $ = D,
            M = (n("5004"), Object(u["a"])($, k, j, !1, null, null, null)),
            V = M.exports,
            B = Object(o["a"])({
                components: {
                    ScrollSlider: V
                }
            }),
            z = n("77f3"),
            F = Object(o["a"])({
                components: {
                    slideItem: z["a"]
                }
            }),
            R = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("header", {
                    directives: [{
                        name: "sticky",
                        rawName: "v-sticky",
                        value: e.sticky,
                        expression: "sticky"
                    }],
                    staticClass: "header",
                    class: {
                        open: e.openMenu, navExpanded: e.openNav, menuActivated: !!e.menu, "header--news": e.isNewsPage
                    },
                    attrs: {
                        role: "banner"
                    }
                }, [n("div", {
                    staticClass: "header__content"
                }, [e._t("banner", null, {
                    isBannerDisable: e.isBannerDisable,
                    closeBanner: e.closeBanner
                }), n("div", {
                    staticClass: "header__top"
                }, [n("button", {
                    staticClass: "header__burger",
                    class: {
                        open: e.openMenu
                    },
                    attrs: {
                        type: "button",
                        "aria-label": "burger icon"
                    },
                    on: {
                        click: function(t) {
                            e.openMenu = !e.openMenu, e.openNav = !e.openNav, e.setFocus("button.header__close")
                        }
                    }
                }, [n("span", {
                    staticClass: "header__burger--line header__burger--top"
                }), n("span", {
                    staticClass: "header__burger--line header__burger--center"
                }), n("span", {
                    staticClass: "header__burger--line header__burger--bottom"
                })]), "large" === e.screenSize ? e._t("header-target") : e._e(), n("div", {
                    staticClass: "header__logo",
                    class: {
                        open: e.openMenu
                    }
                }, [e._t("header-logo")], 2), n("nav", {
                    staticClass: "header__info",
                    attrs: {
                        role: "navigation",
                        "aria-label": e.allyUtilityLabel
                    }
                }, ["large" === e.screenSize ? e._t("header-stock") : e._e(), "large" === e.screenSize ? n("div", {
                    staticClass: "header__accessibility"
                }, [e._t("header-language", null, {
                    changelang: e.changelang
                })], 2) : e._e(), n("a", {
                    staticClass: "header__search2 icon2 icon-search2", // HABIL EDIT - NOT SHOW SEARCH ICON DELETE 2 to become normal
                    class: {
                        open: e.openMenu
                    },
                    attrs: {
                        href: e.searchUrl,
                        role: "search"
                    }
                }, [n("span", {
                    staticClass: "off-screen"
                }, [e._t("header-search")], 2)])], 2)], 2), e.openMenu ? n("div", {
                    staticClass: "header__overlay",
                    on: {
                        click: function(t) {
                            e.openMenu = !1, e.openNav = !1
                        }
                    }
                }) : e._e(), n("div", {
                    staticClass: "header__submenu mobileMenu",
                    class: {
                        open: e.openMenu
                    }
                }, ["small" === e.screenSize || "medium" === e.screenSize ? n("button", {
                    staticClass: "header__close",
                    on: {
                        click: function(t) {
                            e.openMenu = !e.openMenu, e.openNav = !1, e.setFocus(".header__burger")
                        }
                    }
                }, [n("div", {
                    staticClass: "header__burger",
                    class: {
                        open: e.openMenu
                    }
                }, [n("span", {
                    staticClass: "header__burger--line header__burger--top"
                }), n("span", {
                    staticClass: "header__burger--line header__burger--center"
                }), n("span", {
                    staticClass: "header__burger--line header__burger--bottom"
                })])]) : e._e(), e._t("navigation", null, {
                    isNavigationOpened: e.isNavigationOpened,
                    openNav: e.openNav
                }), "large" !== e.screenSize ? n("div", {
                    staticClass: "mobileMenu__bottom"
                }, [n("div", {
                    staticClass: "mobileMenu__stock"
                }, [e._t("header-stock")], 2), e._t("header-target"), n("div", {
                    staticClass: "mobileMenu__info"
                }, [n("div", {
                    staticClass: "mobileMenu__accessibility"
                }, [e._t("header-accessibility")], 2), n("div", {
                    staticClass: "mobileMenu__country"
                }, [e._t("header-language", null, {
                    changelang: e.changelang
                })], 2)])], 2) : e._e()], 2)], 2)])
            },
            H = [],
            U = n("14d0"),
            W = {
                name: "sticky",
                inserted: function(e, t) {
                    var n, r, i = e.querySelector(t.value),
                        a = function() {
                            n = e.getBoundingClientRect(), r = n.top, r < 0 ? (i.classList.add("is-sticky"), e.style.height = "".concat(n.height, "px")) : (i.classList.remove("is-sticky"), e.style.height = "auto")
                        };
                    e.handler = Object(o["e"])(a, 160), window.addEventListener("scroll", e.handler), U["a"].$on("mediaquery::changed", e.handler)
                },
                unbind: function(e) {
                    window.removeEventListener("scroll", e.handler), U["a"].$off("mediaquery::changed", e.handler)
                }
            },
            J = n("ad30"),
            K = {
                name: "header-site",
                directives: {
                    sticky: W
                },
                mixins: [A["a"]],
                props: {
                    allyUtilityLabel: {
                        type: String,
                        default: "utils"
                    },
                    searchUrl: {
                        type: String,
                        default: "#"
                    }
                },
                data: function() {
                    return {
                        openMenu: !1,
                        openNav: !1,
                        menu: null,
                        sticky: ".header__content",
                        isBannerDisable: !0,
                        isNewsPage: !1
                    }
                },
                watch: {
                    openMenu: function(e) {
                        var t = document.querySelector("body");
                        e ? t.classList.add("body-hide-overflow") : t.classList.remove("body-hide-overflow")
                    }
                },
                mounted: function() {
                    Object(o["b"])(), this.isBannerDisable = !!sessionStorage.getItem("bannerDiasble");
                    var e = document.getElementsByClassName("hero--news"),
                        t = document.getElementsByClassName("breadcrumbs");
                    e.length ? (this.isNewsPage = !0, t && t.length && t[0].classList.add("breadcrumbs--news")) : (this.isNewsPage = !1, t && t.length && t[0].classList.remove("breadcrumbs--news"))
                },
                methods: {
                    isNavigationOpened: function(e) {
                        this.openNav = e.open, this.menu = e.menu
                    },
                    changelang: function(e) {
                        var t = e.target.options[e.target.options.selectedIndex].value,
                            n = t.slice(1);
                        n = n.substring(0, n.indexOf("/")), J["a"].pushDataLayer({
                            event: "uaevent",
                            eventCategory: "main menu",
                            eventAction: "select::language",
                            eventLabel: n
                        }), window.location.href = t
                    },
                    setFocus: function(e) {
                        var t = this;
                        setTimeout((function() {
                            t.$el.querySelector(e) && t.$el.querySelector(e).focus()
                        }), 300)
                    },
                    closeBanner: function() {
                        this.isBannerDisable = !0, sessionStorage.setItem("bannerDiasble", !0)
                    }
                }
            },
            G = K,
            Y = Object(u["a"])(G, R, H, !1, null, null, null),
            Q = Y.exports,
            X = Object(o["a"])({
                components: {
                    HeaderSite: Q
                }
            }),
            Z = n("f95c"),
            ee = Object(o["a"])({
                components: {
                    ResponsiveImage: Z["a"]
                }
            }),
            te = {
                name: "no-js-handler",
                bind: function(e) {
                    for (var t = e.querySelectorAll("noscript img"), n = 0; n < t.length; n++) t[n].setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")
                }
            },
            ne = Object(o["a"])({
                directives: {
                    noJsHandler: te
                }
            }),
            re = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ul", {
                    staticClass: "mega-menu__level-1"
                }, [e._t("default", null, {
                    openNav: e.openNav,
                    closeNav: e.closeNav,
                    activeMenu: e.activeMenu,
                    setActiveClass: e.setActiveClass,
                    removeActiveClass: e.removeActiveClass
                })], 2)
            },
            ie = [],
            oe = n("0d50"),
            ae = n("47f7"),
            ce = {
                name: "mega-menu",
                mixins: [oe["a"], ae["a"], A["a"]],
                props: {
                    hideMenu: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        activeMenu: null
                    }
                },
                watch: {
                    hideMenu: function(e) {
                        e && this.closeNav(), e && this.removeActiveClass()
                    }
                },
                mounted: function() {
                    "large" === this.screenSize && this.activeBrand()
                },
                methods: {
                    openNav: function(e, t) {
                        var n = e.target.parentNode.classList.contains("clickable"),
                            r = e.target.parentNode.querySelector(".mega-menu__level-2");
                        "large" !== this.screenSize || 0 === e.clientX ? r ? this.activeMenu === t ? this.closeNav() : (this.activeMenu = t, this.$emit("menuopen", {
                            open: !0,
                            menu: this.activeMenu
                        }), this.removePageScroll(!0)) : window.location = e.target.getAttribute("href") : !0 === n && (window.location = e.target.getAttribute("href"))
                    },
                    activeBrand: function() {
                        this.$el.querySelector(".mega-menu__brand .mega-menu__brand-trigger") && this.$el.querySelector(".mega-menu__brand .mega-menu__brand-trigger").classList.add("active", "show")
                    },
                    closeNav: function(e) {
                        if (this.activeMenu = null, this.$emit("menuopen", {
                                open: !1,
                                menu: null
                            }), !e && window.matchMedia("(max-width: 1439px)").matches) return !1;
                        this.removePageScroll(!1)
                    }
                }
            },
            se = ce,
            le = (n("999e"), Object(u["a"])(se, re, ie, !1, null, null, null)),
            ue = le.exports,
            de = Object(o["a"])({
                components: {
                    MegaMenu: ue
                }
            }),
            fe = n("f605"),
            he = n("5901"),
            me = {
                bind: function(e) {
                    var t = e;
                    t.addEventListener("change", (function(e) {
                        window.location.assign(e.target.value)
                    }))
                }
            },
            pe = {
                name: "fadein",
                bind: function(e, t) {
                    var n = function() {
                        Object(o["d"])(e) && e.classList.add("fadein--".concat(t.value))
                    };
                    e.classList.add("fadein"), setTimeout((function() {
                        n()
                    }), 300), window.addEventListener("scroll", Object(o["e"])(n, 160))
                }
            },
            be = n("75a3"),
            ye = {
                name: "back-to-top",
                bind: function(e) {
                    var t = e,
                        n = 2 * window.innerHeight;
                    window.addEventListener("scroll", (function() {
                        window.scrollY > n ? t.style.opacity = 1 : t.style.opacity = 0
                    }))
                }
            },
            ve = {
                name: "career-search",
                bind: function(e) {
                    var t = e;
                    t.addEventListener("submit", (function(e) {
                        e.preventDefault();
                        var t = e.target.querySelector(".search-keyword").value,
                            n = e.target.getAttribute("action");
                        J["a"].pushDataLayer({
                            event: "uaevent",
                            eventCategory: "internal search",
                            eventAction: "search::career",
                            eventLabel: t
                        }), window.open("".concat(n).concat(t), "_blank")
                    }))
                }
            },
            ge = {
                name: "cat-reload",
                bind: function(e) {
                    var t = e;
                    t.addEventListener("change", (function(e) {
                        var t = e.target.options[e.target.options.selectedIndex].value,
                            n = location.protocol + "//" + location.host + location.pathname,
                            r = e.target.getAttribute("name"),
                            i = "".concat(n, "?").concat(r, "=").concat(t);
                        window.location.href = i
                    }))
                }
            },
            we = {
                name: "hero-anim",
                bind: function(e) {
                    document.addEventListener("scroll", (function() {
                        Object(T["a"])(e, {
                            checkIsVisible: !0
                        }).then((function() {
                            var t = window.pageYOffset,
                                n = e.querySelector(".hero__content"),
                                r = e.querySelector(".responsive-image__media"),
                                i = t / 5e3,
                                o = 1 + i,
                                a = t / 5;
                            r && (r.style.transform = "scale(".concat(o, ") translate3D(0, ").concat(a, "px, 0)"), n.style.opacity = 1 - a / 100, n.style.top = a + "px")
                        }))
                    }))
                }
            },
            Oe = n("d225"),
            ke = n("b0b4"),
            je = function() {
                function e() {
                    Object(Oe["a"])(this, e), this.keyboardUsageClassName = "is-using-keyboard", this.wasUsingTab = !1, this.wasBound = !1, this.isTab = !1, this.bind()
                }
                return Object(ke["a"])(e, [{
                    key: "bind",
                    value: function() {
                        document.addEventListener("keydown", this.handleKeyboardInput.bind(this), !0), document.addEventListener("mousedown", this.handleMouseInput.bind(this), !0), this.wasBound = !0
                    }
                }, {
                    key: "unbind",
                    value: function() {
                        document.removeEventListener("keydown", this.handleKeyboardInput.bind(this), !0), document.removeEventListener("mousedown", this.handleMouseInput.bind(this), !0), this.wasBound = !1
                    }
                }, {
                    key: "handleKeyboardInput",
                    value: function(e) {
                        this.isTab = "Tab" === e.key || "Tab" === e.code || 9 === e.keyCode, this.isTab && !this.wasUsingTab && document.body.classList.add(this.keyboardUsageClassName), this.wasUsingTab = this.isTab
                    }
                }, {
                    key: "handleMouseInput",
                    value: function() {
                        this.wasUsingTab && document.body.classList.remove(this.keyboardUsageClassName), this.wasUsingTab = !1
                    }
                }], [{
                    key: "getInputHandler",
                    value: function() {
                        return this.$inputHandler = this.$inputHandler || new e, this.$inputHandler
                    }
                }]), e
            }(),
            Se = n("5009"),
            Ee = {
                components: {
                    LoadScript: Se["a"]
                }
            },
            Ce = (n("28a5"), n("f386"), n("7514"), n("8655")),
            _e = function() {
                function e(t) {
                    Object(Oe["a"])(this, e), t ? (this.mqs = t, this.matchMediaItems = this.createWorkingData(), this.bind()) : console.error("No media queries object given")
                }
                return Object(ke["a"])(e, [{
                    key: "createWorkingData",
                    value: function() {
                        return this.mqs.map((function(t) {
                            return e.createMatchMediaItem(t)
                        }))
                    }
                }, {
                    key: "bind",
                    value: function() {
                        var e = this;
                        this.matchMediaItems.forEach((function(t) {
                            t.matchMedia.addListener((function() {
                                t.matchMedia.matches && e.select(t.query)
                            }))
                        }))
                    }
                }, {
                    key: "select",
                    value: function(e) {
                        this.unselectAll();
                        var t = this.matchMediaItems.find((function(t) {
                            return t.query === e
                        }));
                        return t.selected = !0, Ce["a"].$emit("mediaquery::changed", t), t
                    }
                }, {
                    key: "unselectAll",
                    value: function() {
                        return this.matchMediaItems.forEach((function(e) {
                            e.selected = !1
                        })), this.matchMediaItems
                    }
                }, {
                    key: "getCurrentMq",
                    value: function() {
                        return this.matchMediaItems.find((function(e) {
                            return !0 === e.selected
                        }))
                    }
                }, {
                    key: "getMqForSize",
                    value: function(e) {
                        return this.matchMediaItems.find((function(t) {
                            return t.size === e
                        }))
                    }
                }], [{
                    key: "createMatchMediaItem",
                    value: function(e) {
                        return {
                            query: e.mq,
                            selected: e.selected,
                            size: e.size,
                            matchMedia: window.matchMedia(e.mq)
                        }
                    }
                }, {
                    key: "for",
                    value: function(e) {
                        return this.getMqHandler().getMqForSize(e).selected
                    }
                }, {
                    key: "getMqHandler",
                    value: function(t) {
                        return this.$mqHandler || (this.$mqHandler = new e(this.readCSS(t))), this.$mqHandler
                    }
                }, {
                    key: "readCSS",
                    value: function(e) {
                        var t = document.head || document.getElementsByTagName("head")[0],
                            n = document.createElement("style");
                        n.type = "text/css";
                        var r = this.createCSSRules(e);
                        n.appendChild(document.createTextNode(r)), t.appendChild(n);
                        var i = JSON.parse(window.getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content").replace(/\\/g, "").slice(1, -1));
                        return document.querySelector("head").removeChild(n), i
                    }
                }, {
                    key: "createCSSRules",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.small,
                            n = void 0 === t ? 768 : t,
                            r = e.medium,
                            i = void 0 === r ? 1024 : r;
                        return '\n      body::before {\n          content: \'[{"mq":"(max-width: '.concat(n - 1, 'px)","selected":true,"size":"small"},{"mq":"(min-width: ').concat(n, "px) and (max-width: ").concat(i - 1, 'px)","selected":false,"size":"medium"},{"mq":"(min-width: ').concat(i, 'px)","selected":false,"size":"large"}]\';\n      }\n      @media (min-width: ').concat(n, 'px) {\n        body::before {\n          content: \'[{"mq":"(max-width: ').concat(n - 1, 'px)","selected":false,"size":"small"},{"mq":"(min-width: ').concat(n, "px) and (max-width: ").concat(i - 1, 'px)","selected":true,"size":"medium"},{"mq":"(min-width: ').concat(i, 'px)","selected":false,"size":"large"}]\';\n        }\n      }\n      @media (min-width: ').concat(i, 'px) {\n        body::before {\n          content: \'[{"mq":"(max-width: ').concat(n - 1, 'px)","selected":false,"size":"small"},{"mq":"(min-width: ').concat(n, "px) and (max-width: ").concat(i - 1, 'px)","selected":false,"size":"medium"},{"mq":"(min-width: ').concat(i, 'px)","selected":true,"size":"large"}]\';\n        }\n      }\n    ').split("\n").map((function(e) {
                            return e.trim()
                        })).join("")
                    }
                }]), e
            }(),
            Ae = function() {
                function e() {
                    Object(Oe["a"])(this, e)
                }
                return Object(ke["a"])(e, [{
                    key: "beforeMount",
                    value: function() {
                        if (void 0 !== this.$el) {
                            this.domObj = {};
                            var e = this.$el.getElementsByTagName("*"),
                                t = this.$el.getAttribute("key");
                            "" !== this.$el.id && null != t && (this.domObj[this.$el.id] = t);
                            for (var n = e.length, r = 0; r < n; r += 1) {
                                var i = e[r];
                                if (t = i.getAttribute("key"), "" !== i.id && null != t) {
                                    if (void 0 !== this.domObj[i.id]) throw new RangeError("The id ".concat(i.id, " is already set"));
                                    this.domObj[i.id] = t
                                }
                            }
                        }
                    }
                }, {
                    key: "mounted",
                    value: function() {
                        if (this.domObj) {
                            var e = this.domObj[this.$el.id];
                            e && this.$el.setAttribute("key", e);
                            for (var t = this.$el.getElementsByTagName("*"), n = t.length, r = 0; r < n; r += 1) {
                                var i = t[r];
                                e = this.domObj[i.id], e && i.setAttribute("key", e)
                            }
                            this.domObj = {}
                        }
                    }
                }], [{
                    key: "install",
                    value: function(t) {
                        var n = new e(t),
                            r = n.beforeMount,
                            i = n.mounted;
                        t.mixin({
                            beforeMount: r,
                            mounted: i
                        })
                    }
                }]), e
            }(),
            Pe = (n("a9ec"), n("ed2b"), n("6aff")),
            Le = Object(o["a"])({
                components: {
                    VideoMain: Pe["a"]
                }
            }),
            xe = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [e._t("default")], 2)
            },
            qe = [],
            Ie = {
                name: "video-lazy",
                mounted: function() {
                    var e = document.querySelectorAll(".video-lazy-bg-load");
                    e.length > 0 && Object(T["b"])(e, "video-lazy")
                }
            },
            Te = Ie,
            Ne = Object(u["a"])(Te, xe, qe, !1, null, null, null),
            De = Ne.exports,
            $e = Object(o["a"])({
                components: {
                    VideoLazy: De
                }
            }),
            Me = n("9483"),
            Ve = "LorealCorp";
        Object(Me["a"])("/service-worker.".concat(Ve, ".js"), {
            ready: function() {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            cached: function() {
                console.log("Content has been cached for offline use.")
            },
            updated: function() {
                console.log("New content is available; please refresh.")
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(e) {
                console.error("Error during service worker registration:", e)
            }
        }), i["a"].use(Ae), _e.getMqHandler({
            small: 768,
            medium: 1440
        }), J["a"].getAnalyticsHandler(he["a"]), je.getInputHandler(), i["a"].config.ignoredElements = ["amp-story", "amp-story-page", "amp-img", "amp-story-grid-layer", "amp-video", "amp-story-bookend"], i["a"].config.keyCodes = {
            home: 36,
            end: 35
        };
        var Be = Object(o["a"])({
            asyncImports: [{
                module: function() {
                    return n.e("single-card").then(n.bind(null, "2ce1"))
                },
                components: ["SingleCard"]
            }, {
                module: function() {

                },
                components: ["BrandSlider"]
            }, {
                module: function() {
                    return n.e("search").then(n.bind(null, "d2de"))
                },
                components: ["Search", "SearchSuggestion"]
            }, {
                module: function() {
                    return n.e("story-slider").then(n.bind(null, "04db"))
                },
                components: ["Story"]
            }, {
                module: function() {
                    return n.e("country-selector").then(n.bind(null, "75e6"))
                },
                components: ["CountrySelector"]
            }, {
                module: function() {
                    return n.e("modal").then(n.bind(null, "bee0"))
                },
                components: ["Modal"]
            }, {
                module: function() {
                    return n.e("gouvernance").then(n.bind(null, "ed70"))
                },
                components: ["Gouvernance"]
            }],
            imports: [h, J["b"], Ee, O, B, ee, ne, F, X, de, Le, $e],
            directives: {
                animate: N,
                clickextension: fe["a"],
                fadein: pe,
                srcset: be["b"],
                sticky: W,
                catreload: ge,
                careersearch: ve,
                backtotop: ye,
                onselectChangeurl: me,
                heroanim: we
            },
            filters: {}
        });

        function ze(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Fe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ze(n, !0).forEach((function(t) {
                    Object(r["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ze(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        new i["a"](Fe({}, Be, {
            data: function() {
                return {
                    rootState: {}
                }
            },
            methods: {
                setRootData: function(e, t) {
                    this.$set(this.rootState, e, t)
                }
            }
        })).$mount("#main-container")
    },
    "14d0": function(e, t, n) {
        "use strict";
        var r = n("8655");
        n.d(t, "a", (function() {
            return r["a"]
        }))
    },
    "178b": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), n.d(t, "k", (function() {
            return i
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "e", (function() {
            return a
        })), n.d(t, "d", (function() {
            return c
        })), n.d(t, "c", (function() {
            return s
        })), n.d(t, "g", (function() {
            return l
        })), n.d(t, "f", (function() {
            return u
        })), n.d(t, "i", (function() {
            return d
        })), n.d(t, "j", (function() {
            return f
        })), n.d(t, "h", (function() {
            return h
        }));
        n("7f7f");

        function r(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function i(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsUserActionEventObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function o(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsNonInteractiveEventObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function a(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsProductImpressionObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function c(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsProductDetailObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function s(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsProductClickObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function l(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsPromotionClickObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function u(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsProductObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function d(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsPromotionObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function f(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsTagDirectiveException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }

        function h(e) {
            var t = this;
            this.message = e, this.name = "AnalyticsPromotionImpressionObjectException", this.toString = function() {
                return "".concat(t.name, ": ").concat(t.message)
            }
        }
    },
    "2af8": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }));
        n("c5f6"), n("ac6a"), n("456d"), n("7f7f");
        var r = n("d225"),
            i = n("b0b4"),
            o = n("308d"),
            a = n("6bb5"),
            c = n("4e2b"),
            s = n("178b"),
            l = n("04d3"),
            u = n("e45c"),
            d = function(e) {
                function t(e) {
                    var n;
                    if (Object(r["a"])(this, t), n = Object(o["a"])(this, Object(a["a"])(t).call(this, void 0, e)), !n.name && !n.id) throw l["a"].error("[AnalyticsProductObjectException] A Product Name or a Product ID is required for an Analytics Product Object", e), new s["f"]("A Product Name or a Product ID is required for an Analytics Product Object");
                    return n.dimensionKeys = Object.keys(e).filter((function(e) {
                        return /dimension/.test(e)
                    })), n.dimensionKeys && n.dimensionKeys.forEach((function(t) {
                        n.result[t] = n.setProperty(e[t])
                    })), n
                }
                return Object(c["a"])(t, e), Object(i["a"])(t, [{
                    key: "setDynamicProp",
                    value: function(e, t) {
                        this.result[e] = this.setProperty(t)
                    }
                }, {
                    key: "getDynamicProp",
                    value: function(e) {
                        return this.result[e]
                    }
                }, {
                    key: "name",
                    set: function(e) {
                        this.result.name = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.name
                    }
                }, {
                    key: "id",
                    set: function(e) {
                        this.result.id = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.id
                    }
                }, {
                    key: "price",
                    set: function(e) {
                        this.result.price = this.setProperty(e)
                    }
                }, {
                    key: "brand",
                    set: function(e) {
                        this.result.brand = this.setProperty(e).toUpperCase()
                    }
                }, {
                    key: "category",
                    set: function(e) {
                        this.result.category = this.setProperty(e)
                    }
                }, {
                    key: "variant",
                    set: function(e) {
                        this.result.variant = this.setProperty(e)
                    }
                }, {
                    key: "position",
                    set: function(e) {
                        this.result.position = Number(this.setProperty(String(e)))
                    }
                }, {
                    key: "list",
                    set: function(e) {
                        this.result.list = this.setProperty(e)
                    }
                }]), t
            }(u["a"])
    },
    3771: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return f
        }));
        var r = n("d225"),
            i = n("b0b4"),
            o = n("308d"),
            a = n("6bb5"),
            c = n("4e2b"),
            s = n("178b"),
            l = n("04d3"),
            u = n("e45c"),
            d = n("2af8"),
            f = function(e) {
                function t(e) {
                    var n;
                    if (Object(r["a"])(this, t), n = Object(o["a"])(this, Object(a["a"])(t).call(this, "uaevent", e)), n.category = "Ecommerce", e.category && l["a"].warn('[AnalyticsProductImpressionObjectException] Category always defaults to "Ecommerce" (L\'Oréal guideline), currently ['.concat(e.category, "] was provided"), e, !1), n.action = "Product Impressions", e.action && l["a"].warn('[AnalyticsProductImpressionObjectException] Action always defaults to "Product Impressions" (L\'Oréal guideline), currently ['.concat(e.action, "] was provided"), e, !1), n.action = "Product Impressions", e.label && (n.label = e.label), !e.products || 0 === e.products.length) throw l["a"].error("[AnalyticsProductImpressionObjectException] Product(s) are required for a productImpression", e), new s["e"]("Product(s) are required for a productImpression");
                    return n
                }
                return Object(c["a"])(t, e), Object(i["a"])(t, [{
                    key: "initEcommerce",
                    value: function() {
                        this.result.ecommerce = this.result.ecommerce || {}
                    }
                }, {
                    key: "category",
                    set: function(e) {
                        this.result.eventCategory = this.setProperty(e, !1)
                    }
                }, {
                    key: "action",
                    set: function(e) {
                        this.result.eventAction = this.setProperty(e, !1)
                    }
                }, {
                    key: "label",
                    set: function(e) {
                        this.result.eventLabel = this.setProperty(e, !1)
                    }
                }, {
                    key: "value",
                    set: function(e) {
                        this.result.eventValue = this.setProperty(e)
                    }
                }, {
                    key: "currency",
                    set: function(e) {
                        this.initEcommerce(), this.result.ecommerce.currencyCode = this.setProperty(e).toUpperCase()
                    }
                }, {
                    key: "products",
                    set: function(e) {
                        this.initEcommerce(), this.result.ecommerce.impressions = e.map((function(e) {
                            return new d["a"](e).toObject()
                        }))
                    },
                    get: function() {
                        return this.result.ecommerce && this.result.ecommerce.impressions || []
                    }
                }]), t
            }(u["a"])
    },
    "399d": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return f
        }));
        var r = n("d225"),
            i = n("b0b4"),
            o = n("308d"),
            a = n("6bb5"),
            c = n("4e2b"),
            s = n("178b"),
            l = n("04d3"),
            u = n("e45c"),
            d = n("2af8"),
            f = function(e) {
                function t(e) {
                    var n;
                    if (Object(r["a"])(this, t), n = Object(o["a"])(this, Object(a["a"])(t).call(this, "productClick", e)), n.category = "Ecommerce", e.category && l["a"].warn('[AnalyticsProductClickObjectException] Category always defaults to "Ecommerce" (L\'Oréal guideline), currently ['.concat(e.category, "] was provided"), e, !1), n.action = "Product Click", e.action && l["a"].warn('[AnalyticsProductClickObjectException] Action always defaults to "Product Click" (L\'Oréal guideline), currently ['.concat(e.action, "] was provided"), e, !1), n.label = "Product Click", e.label && (n.label = e.label), !e.products || 0 === e.products.length) throw l["a"].error("[AnalyticsProductClickObjectException] Product is required for productClick", e), new s["c"]("Product is required for productClick");
                    return n
                }
                return Object(c["a"])(t, e), Object(i["a"])(t, [{
                    key: "initEcommerce",
                    value: function() {
                        this.result.ecommerce = this.result.ecommerce || {}, this.result.ecommerce.click = this.result.ecommerce.click || {}
                    }
                }, {
                    key: "category",
                    set: function(e) {
                        this.result.eventCategory = this.setProperty(e, !1)
                    }
                }, {
                    key: "action",
                    set: function(e) {
                        this.result.eventAction = this.setProperty(e, !1)
                    }
                }, {
                    key: "label",
                    set: function(e) {
                        this.result.eventLabel = this.setProperty(e, !1)
                    }
                }, {
                    key: "value",
                    set: function(e) {
                        this.result.eventValue = this.setProperty(e)
                    }
                }, {
                    key: "products",
                    set: function(e) {
                        e = e.map((function(e) {
                            return new d["a"](e).toObject()
                        })), this.initEcommerce(), this.result.ecommerce.click.products = e
                    },
                    get: function() {
                        return this.result.ecommerce && this.result.ecommerce.click.products || []
                    }
                }, {
                    key: "list",
                    set: function(e) {
                        this.initEcommerce(), this.result.ecommerce.click.actionField = {
                            list: this.setProperty(e)
                        }
                    }
                }]), t
            }(u["a"])
    },
    "47f7": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        var r = {
            data: function() {
                return {
                    bodyTag: document.querySelector("body")
                }
            },
            methods: {
                preventDefault: function(e) {
                    e.preventDefault()
                },
                disableScroll: function() {
                    this.bodyTag.classList.add("body-hide-overflow")
                },
                enableScroll: function() {
                    this.bodyTag.classList.remove("body-hide-overflow")
                },
                removePageScroll: function(e) {
                    e ? this.disableScroll() : this.enableScroll()
                }
            }
        }
    },
    5004: function(e, t, n) {
        "use strict";
        var r = n("f3e0"),
            i = n.n(r);
        i.a
    },
    5009: function(e, t, n) {
        "use strict";
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.loaded ? n("div", [e._t("default")], 2) : e._e()
            },
            i = [],
            o = (n("8e6e"), n("ac6a"), n("456d"), n("7f7f"), n("bd86")),
            a = n("8655");
        window.$INJECTED_URLS = {};
        var c = {
            hasScript: function(e) {
                return window.$INJECTED_URLS[e]
            },
            injectScript: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.hasScript(e)) {
                    var n = document.createElement("script"),
                        r = document.getElementsByTagName("head")[0];
                    return n.src = e, n.async = void 0 === t.async || t.async, n.type = "application/javascript", Object.keys(t).filter((function(e) {
                        return "async" !== e
                    })).forEach((function(e) {
                        t[e] && n.setAttribute(e, t[e])
                    })), window.$INJECTED_URLS[e] = new Promise((function(e) {
                        n.addEventListener("load", e), r.appendChild(n)
                    })), window.$INJECTED_URLS[e]
                }
                return Promise.resolve().then((function() {
                    return window.$INJECTED_URLS[e]
                }))
            }
        };

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(n, !0).forEach((function(t) {
                    Object(o["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var u = {
                name: "load-script",
                props: {
                    name: {
                        type: String,
                        default: void 0
                    },
                    src: {
                        type: String,
                        required: !0
                    },
                    integrity: {
                        type: String,
                        default: void 0
                    },
                    crossorigin: {
                        type: String,
                        default: void 0
                    },
                    async: {
                        type: Boolean,
                        default: !0
                    },
                    attributes: {
                        type: Object,
                        default: void 0
                    }
                },
                data: function() {
                    return {
                        loaded: !1
                    }
                },
                created: function() {
                    var e = this;
                    this.src && !c.hasScript(this.src) ? c.injectScript(this.src, l({
                        async: this.async,
                        integrity: this.integrity,
                        crossorigin: this.crossorigin
                    }, this.attributes || {})).then((function() {
                        e.loaded = !0, e.$emit("loaded"), e.name && a["a"].$emit("script.loaded.".concat(e.name), {
                            name: e.name,
                            url: e.src
                        })
                    })) : c.hasScript(this.src) && (this.loaded = !0, this.$emit("loaded"))
                }
            },
            d = u,
            f = n("2877"),
            h = Object(f["a"])(d, r, i, !1, null, null, null);
        t["a"] = h.exports
    },
    "55e5": function(e, t, n) {
        "use strict";
        n.r(t);
        n("ac6a"), n("cadf"), n("551c"), n("f751"), n("097d");
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
                var t = this;
                if (document && !document.documentElement.contains(t)) return null;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            }),
            function() {
                if ("function" === typeof window.CustomEvent) return !1;

                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e
            }(),
            function(e) {
                e.forEach((function(e) {
                    e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: function() {
                            var e = Array.prototype.slice.call(arguments),
                                t = document.createDocumentFragment();
                            e.forEach((function(e) {
                                var n = e instanceof Node;
                                t.appendChild(n ? e : document.createTextNode(String(e)))
                            })), this.appendChild(t)
                        }
                    })
                }))
            }([Element.prototype, Document.prototype, DocumentFragment.prototype]),
            function(e) {
                e.forEach((function(e) {
                    e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: function() {
                            var e = Array.prototype.slice.call(arguments),
                                t = document.createDocumentFragment();
                            e.forEach((function(e) {
                                var n = e instanceof Node;
                                t.appendChild(n ? e : document.createTextNode(String(e)))
                            })), this.insertBefore(t, this.firstChild)
                        }
                    })
                }))
            }([Element.prototype, Document.prototype, DocumentFragment.prototype]);
        n("6d93"), n("7507");
        NodeList.prototype.forEach || (NodeList.prototype.forEach = function(e) {
            Array.prototype.forEach.call(this, e)
        })
    },
    5901: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        var r = !1
    },
    "5be9": function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.getBoundingClientRect();
            return t.left >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
        n.d(t, "a", (function() {
            return r
        }))
    },
    "5f45": function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n;
            return function() {
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                var a = this;
                clearTimeout(n), n = setTimeout((function() {
                    return e.apply(a, i)
                }), t)
            }
        }

        function i(e, t) {
            var n, r;
            return function() {
                for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                var c = this;
                r ? (clearTimeout(n), n = setTimeout((function() {
                    Date.now() - r >= t && (e.apply(c, o), r = Date.now())
                }), t - (Date.now() - r))) : (e.apply(c, o), r = Date.now())
            }
        }
        n.d(t, "a", (function() {
            return r
        })), n.d(t, "b", (function() {
            return i
        }))
    },
    "62f9": function(e, t, n) {
        "use strict";

        function r() {
            i(), window.addEventListener("resize", Object(a["b"])((function() {
                i()
            }), 100))
        }

        function i() {
            var e = .01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
        }
        n("5be9");
        var o = n("9f55");
        n("bd86"), n("ac6a"), n("456d");
        n("6b54");
        var a = n("5f45"),
            c = (n("7f7f"), n("96cf"), n("3b8d")),
            s = function(e, t) {
                return Object.keys(t).reduce((function(n, r) {
                    return n[r] = n[r] || {}, Object.assign(n[r], e[r] || {}, t[r] || {}), n
                }), e)
            },
            l = ["components", "directives", "filters"];

        function u(e) {
            return Object.keys(e).reduce((function(t, n) {
                switch (n) {
                    default: t[n] = e[n];
                    break;
                    case "asyncImports":
                            [].concat(e[n]).forEach((function(e) {
                            l.forEach((function(n) {
                                e[n] && [].concat(e[n]).map((function(r) {
                                    var i = function() {
                                        var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                            var i;
                                            return regeneratorRuntime.wrap((function(t) {
                                                while (1) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, e.module();
                                                    case 2:
                                                        return i = t.sent, t.abrupt("return", i.default[n][r]);
                                                    case 4:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }();
                                    t[n][r] = i
                                }))
                            }))
                        }));
                        break;
                    case "imports":
                            e[n].forEach((function(e) {
                            t = s(t, e)
                        }));
                        break;
                    case "directives":
                            case "components":
                            case "filters":
                            Object.assign(t[n], e[n])
                }
                return t
            }), {
                components: {},
                directives: {},
                filters: {}
            })
        }
        n.d(t, "b", (function() {
            return r
        })), n.d(t, "d", (function() {
            return o["a"]
        })), n.d(t, "c", (function() {
            return a["a"]
        })), n.d(t, "e", (function() {
            return a["b"]
        })), n.d(t, "a", (function() {
            return u
        }))
    },
    "6aff": function(e, t, n) {
        "use strict";
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "video-player"
                }, [e.isFlowApiLoaded ? e._e() : n("loadscript", {
                    attrs: {
                        src: "//cdn.flowplayer.com/players/" + e.flowid + "/native/flowplayer.async.js"
                    },
                    on: {
                        loaded: e.initFlow
                    }
                }), n("div", {
                    staticClass: "player",
                    attrs: {
                        "data-player-id": "4fa8f8c7-5d99-4fc0-af88-76ab7f97e1f3"
                    }
                })], 1)
            },
            i = [],
            o = n("5009"),
            a = {
                name: "video-main",
                components: {
                    loadscript: o["a"]
                },
                props: {
                    video: {
                        type: String,
                        default: null
                    },
                    flowid: {
                        type: String,
                        default: null
                    }
                },
                data: function() {
                    return {
                        flowPlayer: null,
                        isFlowApiLoaded: !1
                    }
                },
                mounted: function() {
                    var e = this;
                    this.checkFlowApi(), this.$nextTick((function() {
                        e.isFlowApiLoaded && e.initFlow()
                    })), window.addEventListener("popstate", this.forcePageReload, !1)
                },
                destroyed: function() {
                    window.removeEventListener("popstate", this.forcePageReload, !1)
                },
                methods: {
                    forcePageReload: function() {
                        location.reload()
                    },
                    checkFlowApi: function() {
                        this.isFlowApiLoaded = this.$root.rootState.flowApiExist
                    },
                    initFlow: function() {
                        var e = this;
                        if (!this.isFlowApiLoaded && this.$root.setRootData("flowApiExist", !0), this.$el) {
                            var t = this.$el.querySelector(".player");
                            flowplayer.cloud.then((function() {
                                e.flowPlayer = flowplayer(t, {
                                    src: e.video
                                })
                            }))
                        }
                    }
                }
            },
            c = a,
            s = n("2877"),
            l = Object(s["a"])(c, r, i, !1, null, null, null);
        t["a"] = l.exports
    },
    "6b0c": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        })), n.d(t, "b", (function() {
            return l
        }));
        n("ac6a");
        var r = n("5be9"),
            i = n("9f55"),
            o = n("5f45");

        function a(e, t, n) {
            return Object(o["b"])((function() {
                (t.checkIsVisible && Object(r["a"])(e) && Object(i["a"])(e) || !t.checkIsVisible && Object(r["a"])(e)) && n()
            }), t.delay)
        }

        function c(e, t) {
            return new Promise((function(n) {
                var r = a(e, t, (function() {
                    document.removeEventListener("carouselLazyImg", r), window.removeEventListener("scroll", r), window.removeEventListener("resize", r), n()
                }));
                document.addEventListener("carouselLazyImg", r, !1), window.addEventListener("scroll", r, !1), window.addEventListener("resize", r, !1), r()
            }))
        }

        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.checkIsVisible,
                r = void 0 === n || n,
                i = t.delay,
                o = void 0 === i ? 500 : i,
                a = t.threshold,
                s = void 0 === a ? [.006] : a;
            return "IntersectionObserver" in window ? new Promise((function(t) {
                var n = new IntersectionObserver((function(r) {
                    r.forEach((function(r) {
                        r.intersectionRatio > 0 && (t(), n.unobserve(e))
                    }))
                }), {
                    threshold: s
                });
                n.observe(e)
            })) : c(e, {
                delay: o,
                checkIsVisible: r
            })
        }

        function l(e) {
            if ("IntersectionObserver" in window) {
                var t = new IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        if (e.isIntersecting) {
                            for (var n in e.target.children) {
                                var r = e.target.children[n];
                                "string" === typeof r.tagName && "SOURCE" === r.tagName && (r.src = r.dataset.src)
                            }
                            e.target.load(), e.target.classList.remove("video-lazy-bg-load"), t.unobserve(e.target)
                        }
                    }))
                }));
                e.forEach((function(e) {
                    t.observe(e)
                }))
            }
        }
    },
    "6f77": function(e, t, n) {},
    "75a3": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return a
        }));
        n("ac6a"), n("456d");
        var r = n("6b0c"),
            i = n("5f45"),
            o = function(e, t) {
                if ("string" === typeof e) return e;
                var n = t || document.documentElement.clientWidth,
                    r = Object.keys(e).reverse(),
                    i = r.filter((function(e) {
                        return n >= e
                    })).shift();
                return e[i]
            },
            a = {
                name: "srcset",
                inserted: function(e, t) {
                    var n = function() {
                        var n = o(t.value);
                        if ("img" !== e.tagName.toLowerCase()) {
                            e.style.backgroundImage = "url('".concat(n, "')");
                            var r = e.querySelector("img");
                            r && (r.src = n)
                        } else e.src = n
                    };
                    Object(r["a"])(e, {
                        checkIsVisible: !1
                    }).then((function() {
                        n(), e.listener = Object(i["a"])(n, 200), window.addEventListener("resize", e.listener), setTimeout((function() {
                            e.classList.add("-loaded")
                        }), 100)
                    }))
                },
                unbind: function(e) {
                    e.listener && window.removeEventListener("resize", e.listener)
                }
            }
    },
    "77f3": function(e, t, n) {
        "use strict";
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("li", {
                    staticClass: "slider__slide",
                    style: {
                        padding: "0 " + this.padding + "px"
                    },
                    attrs: {
                        "aria-current": e.current
                    }
                }, [e._t("default")], 2)
            },
            i = [],
            o = {
                name: "slide-item",
                props: {
                    current: {
                        type: Boolean,
                        required: !1
                    }
                },
                data: function() {
                    return {
                        width: null,
                        padding: this.$parent.slidePadding
                    }
                }
            },
            a = o,
            c = n("2877"),
            s = Object(c["a"])(a, r, i, !1, null, null, null);
        t["a"] = s.exports
    },
    "7cae": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var r = n("8655"),
            i = n("62f9"),
            o = {
                data: function() {
                    return {
                        screenSize: "small",
                        smallScreenLimit: 768
                    }
                },
                mounted: function() {
                    this.getScreenSize()
                },
                methods: {
                    widerThan768: function() {
                        return window.matchMedia("(min-width: ".concat(this.smallScreenLimit, "px)")).matches
                    },
                    getScreenSize: function() {
                        var e = this;
                        this.screenSize = window.matchMedia("(min-width: 1440px)").matches ? "large" : this.widerThan768() && window.matchMedia("(max-width: 1024px)").matches ? "tablet" : this.widerThan768() ? "medium" : "small", r["a"].$on("mediaquery::changed", (function(t) {
                            var n = Object(i["e"])((function() {
                                e.screenSize = window.matchMedia("(min-width: 1440px)").matches ? "large" : e.widerThan768() && window.matchMedia("(max-width: 1024px)").matches ? "tablet" : e.widerThan768() ? "medium" : "small"
                            }), 160);
                            "medium" === t.size ? window.addEventListener("resize", n, !1) : (window.removeEventListener("resize", n, !1), e.screenSize = t.size)
                        }))
                    }
                }
            }
    },
    "7d0a": function(e, t, n) {
        "use strict";
        var r = n("8f11"),
            i = n.n(r);
        i.a
    },
    8655: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }));
        var r = n("a026"),
            i = new r["a"];
        window.eventBus = i
    },
    "8f11": function(e, t, n) {},
    9630: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }));
        var r = n("d225"),
            i = n("b0b4"),
            o = n("178b"),
            a = n("c00b"),
            c = n("04d3"),
            s = function e(t, n) {
                t() ? n() : window.setTimeout(e.bind(null, t, n), 10)
            },
            l = function(e) {
                s((function() {
                    return "complete" === document.readyState
                }), (function() {
                    return window.dataLayer.push(e)
                }))
            },
            u = function() {
                function e() {
                    Object(r["a"])(this, e), c["a"].info("debug enabled"), "undefined" === typeof window.dataLayer && (c["a"].warn("dataLayer is not defined. Creating local dataLayer for debugging purposes."), window.dataLayer = [])
                }
                return Object(i["a"])(e, [{
                    key: "taggingObjectByType",
                    value: function(e) {
                        if (-1 === a["b"].indexOf(e.type)) {
                            var t = a["b"].join(", ");
                            throw c["a"].error("[AnalyticsException] Wrong type given: [".concat(e.type, "]. Type options: ").concat(t)), new o["a"]("Wrong type given: [".concat(e.type, "]. Type options: ").concat(t))
                        }
                        var n = a["a"][e.type];
                        return new n(e).toObject()
                    }
                }, {
                    key: "push",
                    value: function(t) {
                        if (!t) throw new o["a"]("No data given to AnalyticsHandler.push function");
                        var n = this.taggingObjectByType(t);
                        c["a"].info("Pushing [".concat(t.type, "] to dataLayer"), n);
                        try {
                            e.pushDataLayer(n)
                        } catch (r) {
                            throw c["a"].error("Error while pushing to dataLayer", r), new o["a"](r.message)
                        }
                        return this
                    }
                }], [{
                    key: "getAnalyticsHandler",
                    value: function() {
                        return this.$analyticsHandler = this.$analyticsHandler || new e, this.$analyticsHandler
                    }
                }, {
                    key: "pushDataLayer",
                    value: function(e) {
                        return l(e)
                    }
                }]), e
            }()
    },
    "999e": function(e, t, n) {
        "use strict";
        var r = n("6f77"),
            i = n.n(r);
        i.a
    },
    "9f55": function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.getBoundingClientRect(),
                n = {
                    x: t.left + e.offsetWidth / 2,
                    y: t.top + e.offsetHeight / 2
                },
                r = document.elementFromPoint(n.x, n.y);
            if (n.x < 0 || n.y < 0 || n.x > (document.documentElement.clientWidth || window.innerWidth) || n.y > (document.documentElement.clientHeight || window.innerHeight)) return !1;
            do {
                if (r === e) return !0
            } while (r = r.parentNode);
            return !1
        }
        n.d(t, "a", (function() {
            return r
        }))
    },
    a9ec: function(e, t, n) {
        "use strict";
        var r = n("5901"),
            i = n("14d0");
        try {
            window.wsf = Object.assign(window.wsf || {}, {
                debug: r["a"],
                eventBus: i["a"]
            })
        } catch (o) {
            console.warn("unable to load wsf variable")
        }
    },
    ad30: function(e, t, n) {
        "use strict";
        var r = n("9630"),
            i = (n("e45c"), n("f387"), n("f635"), n("399d"), n("3771"), n("2af8"), n("f658"), n("fee4"), n("c00b"), n("bb73"));
        n.d(t, "a", (function() {
            return r["a"]
        }));
        t["b"] = {
            directives: {
                tag: i["a"]
            }
        }
    },
    bb73: function(e, t, n) {
        "use strict";
        var r = n("178b"),
            i = n("c00b"),
            o = (n("8e6e"), n("bd86")),
            a = (n("ac4d"), n("8a81"), n("ac6a"), n("456d"), n("5901")),
            c = n("6b0c"),
            s = n("9630");

        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(n, !0).forEach((function(t) {
                    Object(o["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var d = function(e) {
                return Object.keys(e).reduce((function(t, n) {
                    return e[n] && (t[n] = e[n]), t
                }), {})
            },
            f = {
                handleEvent: function(e, t, n, r) {
                    var i = this,
                        o = function() {
                            var e = r ? i.createDataObjectBasedOnDom(t.closest("[data-tag-wrapper]"), n) : n;
                            try {
                                s["a"].getAnalyticsHandler().push(e)
                            } catch (o) {
                                throw a["a"] && (t.setAttribute("data-error", o.message), t.classList.add("accessibilityError")), o
                            }
                        };
                    "click" === e ? t.addEventListener("click", o) : Object(c["a"])(t).then(o)
                },
                getValue: function(e, t, n) {
                    var r = e.getAttribute("data-tag-".concat(n));
                    return r && "" !== r ? r : this.getValueFromSelector(e.querySelector(t), n)
                },
                getTagValues: function(e, t) {
                    var n = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                            return e
                        };
                    return t.filter((function(e) {
                        return !!e
                    })).map((function(t) {
                        return {
                            key: t,
                            value: n.getValue(e, "[data-tag-".concat(t, "]"), t)
                        }
                    })).reduce((function(e, t) {
                        return void 0 !== t.value && t.value && (e[r(t.key)] = t.value), e
                    }), {})
                },
                getValueFromSelector: function(e, t) {
                    if (!e) return !1;
                    var n = e.getAttribute("data-tag-".concat(t));
                    return "" === n ? e.textContent : n
                },
                createDataObjectBasedOnDom: function(e, t) {
                    var n = this.getTagValues(e, ["category", "action", "label"]);
                    if ("productClick" === t.type || "productImpression" === t.type || "productDetail" === t.type) {
                        var r = e.querySelectorAll("[data-tag-product-identifier]");
                        n.products = [];
                        var i = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var c, s = r[Symbol.iterator](); !(i = (c = s.next()).done); i = !0) {
                                var l = c.value;
                                n.products.push(this.createDataForProduct(l, e, t, n))
                            }
                        } catch (v) {
                            o = !0, a = v
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                    }
                    if ("promotionClick" === t.type || "promotionImpression" === t.type || "productDetail" === t.type) {
                        var d = e.querySelectorAll("[data-tag-promotion-identifier]");
                        n.promotions = [];
                        var f = !0,
                            h = !1,
                            m = void 0;
                        try {
                            for (var p, b = d[Symbol.iterator](); !(f = (p = b.next()).done); f = !0) {
                                var y = p.value;
                                n.promotions.push(this.createDataForPromotion(y))
                            }
                        } catch (v) {
                            h = !0, m = v
                        } finally {
                            try {
                                f || null == b.return || b.return()
                            } finally {
                                if (h) throw m
                            }
                        }
                    }
                    return u({}, t, {}, n)
                },
                createDataForProduct: function(e, t, n, r) {
                    var i = this.getValue(t, "[data-tag-product-currency]", "product-currency"),
                        o = this.getValue(e, "[data-tag-product-name]", "product-name"),
                        a = this.getValue(e, "[data-tag-product-id]", "product-id"),
                        c = this.getValue(e, "[data-tag-product-category]", "product-category"),
                        s = this.getValue(e, "[data-tag-product-brand]", "product-brand"),
                        l = this.getValue(e, "[data-tag-product-price]", "product-price"),
                        u = this.getValue(e, "[data-tag-product-variant]", "product-variant"),
                        f = this.getValue(e, "[data-tag-product-position]", "product-position"),
                        h = this.getValue(e, "[data-tag-product-list]", "product-list"),
                        m = this.getValue(e, "[data-tag-product-dimension35]", "product-dimension35"),
                        p = this.getValue(e, "[data-tag-product-dimension36]", "product-dimension36"),
                        b = this.getValue(e, "[data-tag-product-dimension37]", "product-dimension37"),
                        y = this.getValue(e, "[data-tag-product-dimension38]", "product-dimension38"),
                        v = this.getValue(e, "[data-tag-product-dimension39]", "product-dimension39"),
                        g = this.getValue(e, "[data-tag-product-dimension40]", "product-dimension40"),
                        w = this.getValue(e, "[data-tag-product-dimension48]", "product-dimension48"),
                        O = this.getValue(e, "[data-tag-product-dimension152]", "product-dimension152"),
                        k = this.getValue(e, "[data-tag-product-dimension153]", "product-dimension153"),
                        j = this.getValue(e, "[data-tag-product-dimension154]", "product-dimension154");
                    return i && (r.currency = i), "productClick" === n.type && h && (r.list = h), d({
                        name: o,
                        id: a,
                        category: c,
                        brand: s,
                        price: l,
                        variant: u,
                        position: "productClick" !== n.type && f,
                        list: ("productImpression" === n.type || "productDetail" === n.type) && h,
                        dimension35: m,
                        dimension36: p,
                        dimension37: b,
                        dimension38: y,
                        dimension39: v,
                        dimension40: g,
                        dimension48: w,
                        dimension152: O,
                        dimension153: k,
                        dimension154: j
                    })
                },
                createDataForPromotion: function(e) {
                    var t = this.getValue(e, "[data-tag-promotion-name]", "promotion-name"),
                        n = this.getValue(e, "[data-tag-promotion-id]", "promotion-id"),
                        r = this.getValue(e, "[data-tag-promotion-creative]", "promotion-creative"),
                        i = this.getValue(e, "[data-tag-promotion-position]", "promotion-position");
                    return d({
                        name: t,
                        id: n,
                        creative: r,
                        position: i
                    })
                }
            };
        n.d(t, "a", (function() {
            return h
        }));
        var h = {
            name: "tag",
            inserted: function(e, t) {
                var n = t.arg,
                    o = t.value,
                    a = void 0 === o ? {} : o,
                    c = t.modifiers,
                    s = "click";
                if (!n) throw new r["j"]("No argument given to v-tag. Example usage: v-tag:event=\"{category: 'video', action: 'play', label: 'video.mp4'}}\". Argument options: ".concat(i["b"].join(", ").toLowerCase()));
                if (!Object(i["c"])(n)) throw new r["j"]("v-tag argument [".concat(n, "] to v-tag is wrong. Argument options: ").concat(i["b"].join(", ").toLowerCase()));
                switch (n) {
                    case "productimpression":
                        a.type = "productImpression", s = "impression";
                        break;
                    case "productdetail":
                        a.type = "productDetail", s = "detail";
                        break;
                    case "productclick":
                        a.type = "productClick";
                        break;
                    case "promotionclick":
                        a.type = "promotionClick";
                        break;
                    case "promotionimpression":
                        a.type = "promotionImpression", s = "impression";
                        break;
                    case "useractionevent":
                    default:
                        a.type = "userActionEvent", c.onload && (s = "impression");
                        break
                }
                f.handleEvent(s, e, a, "dom" in t.modifiers)
            }
        }
    },
    c00b: function(e, t, n) {
        "use strict";
        n("ac6a"), n("456d");
        var r = n("f387"),
            i = n("f635"),
            o = n("399d"),
            a = n("3771"),
            c = n("d225"),
            s = n("b0b4"),
            l = n("308d"),
            u = n("6bb5"),
            d = n("4e2b"),
            f = n("178b"),
            h = n("04d3"),
            m = n("e45c"),
            p = n("2af8"),
            b = function(e) {
                function t(e) {
                    var n;
                    if (Object(c["a"])(this, t), n = Object(l["a"])(this, Object(u["a"])(t).call(this, "uaevent", e)), n.category = "Ecommerce", e.category && h["a"].warn('[AnalyticsProductDetailObjectException] Category always defaults to "Ecommerce" (L\'Oréal guideline), currently ['.concat(e.category, "] was provided"), e, !1), n.action = "Product Detail", e.action && h["a"].warn('[AnalyticsProductDetailObjectException] Action always defaults to "Product Detail" (L\'Oréal guideline), currently ['.concat(e.action, "] was provided"), e, !1), n.action = "Product Detail", e.label && (n.label = e.label), !e.products || 0 === e.products.length) throw h["a"].error("[AnalyticsProductDetailObjectException] Product(s) are required for a productDetail", e), new f["d"]("Product(s) are required for a productDetail");
                    return n
                }
                return Object(d["a"])(t, e), Object(s["a"])(t, [{
                    key: "initEcommerce",
                    value: function() {
                        this.result.ecommerce = this.result.ecommerce || {}
                    }
                }, {
                    key: "category",
                    set: function(e) {
                        this.result.eventCategory = this.setProperty(e, !1)
                    }
                }, {
                    key: "action",
                    set: function(e) {
                        this.result.eventAction = this.setProperty(e, !1)
                    }
                }, {
                    key: "label",
                    set: function(e) {
                        this.result.eventLabel = this.setProperty(e, !1)
                    }
                }, {
                    key: "value",
                    set: function(e) {
                        this.result.eventValue = this.setProperty(e)
                    }
                }, {
                    key: "currency",
                    set: function(e) {
                        this.initEcommerce(), this.result.ecommerce.currencyCode = this.setProperty(e).toUpperCase()
                    }
                }, {
                    key: "products",
                    set: function(e) {
                        this.initEcommerce(), this.result.ecommerce.detail = e.map((function(e) {
                            return new p["a"](e).toObject()
                        }))
                    },
                    get: function() {
                        return this.result.ecommerce && this.result.ecommerce.detail || []
                    }
                }]), t
            }(m["a"]),
            y = n("f658"),
            v = n("fee4"),
            g = function(e) {
                function t(e) {
                    var n;
                    if (Object(c["a"])(this, t), n = Object(l["a"])(this, Object(u["a"])(t).call(this, "nievent", e)), n.category = "Ecommerce", e.category && h["a"].warn('[AnalyticsPromotionImpressionObjectException] Category always defaults to "Ecommerce" (L\'Oréal guideline), currently ['.concat(e.category, "] was provided"), e, !1), n.action = "Promotion Impressions", e.action && h["a"].warn('[AnalyticsPromotionImpressionObjectException] Action always defaults to "Promotion Impressions" (L\'Oréal guideline), currently ['.concat(e.action, "] was provided"), e, !1), n.label = "Promotion Impressions", e.label && (n.label = e.label), !e.promotions || 0 === e.promotions.length) throw h["a"].error("[AnalyticsPromotionImpressionObjectException] Promotion(s) are required for a promotionImpression", e), new f["h"]("Promotion(s) are required for a promotionImpression");
                    return n
                }
                return Object(d["a"])(t, e), Object(s["a"])(t, [{
                    key: "initEcommerce",
                    value: function() {
                        this.result.ecommerce = this.result.ecommerce || {}, this.result.ecommerce.promoView = this.result.ecommerce.promoView || {}
                    }
                }, {
                    key: "category",
                    set: function(e) {
                        this.result.eventCategory = this.setProperty(e, !1)
                    }
                }, {
                    key: "action",
                    set: function(e) {
                        this.result.eventAction = this.setProperty(e, !1)
                    }
                }, {
                    key: "label",
                    set: function(e) {
                        this.result.eventLabel = this.setProperty(e, !1)
                    }
                }, {
                    key: "value",
                    set: function(e) {
                        this.result.eventValue = this.setProperty(e)
                    }
                }, {
                    key: "promotions",
                    set: function(e) {
                        this.initEcommerce(), this.result.ecommerce.promoView.promotions = e.map((function(e) {
                            return new v["a"](e).toObject()
                        }))
                    }
                }]), t
            }(m["a"]);
        n.d(t, "a", (function() {
            return w
        })), n.d(t, "b", (function() {
            return O
        })), n.d(t, "c", (function() {
            return k
        }));
        var w = {
                productClick: o["a"],
                productImpression: a["a"],
                productDetail: b,
                userActionEvent: r["a"],
                nonInteractiveEvent: i["a"],
                promotionClick: y["a"],
                promotionImpression: g
            },
            O = Object.keys(w),
            k = function(e) {
                return O.map((function(e) {
                    return e.toLowerCase()
                })).indexOf(e.toLowerCase()) > -1
            }
    },
    c6c8: function(e, t, n) {},
    d5de: function(e, t, n) {
        "use strict";
        n("8e6e"), n("ac6a"), n("456d");
        var r = n("bd86"),
            i = (n("96cf"), n("3b8d"));

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(n, !0).forEach((function(t) {
                    Object(r["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function c(e) {
            return s.apply(this, arguments)
        }

        function s() {
            return s = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, i, o, c, s, l, u, d, f = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = f.length > 1 && void 0 !== f[1] ? f[1] : {}, r = n.data, i = void 0 === r ? null : r, o = n.headers, c = void 0 === o ? {} : o, s = n.method, l = void 0 === s ? "GET" : s, u = {
                                method: l,
                                headers: a({
                                    "Content-Type": "application/json"
                                }, c),
                                credentials: "include",
                                cache: "no-store"
                            }, i && (u.method = "POST", u.body = JSON.stringify(i)), e.next = 6, fetch(t, u);
                        case 6:
                            if (d = e.sent, 200 !== d.status) {
                                e.next = 11;
                                break
                            }
                            return e.next = 10, d.json();
                        case 10:
                            return e.abrupt("return", e.sent);
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), s.apply(this, arguments)
        }
        n.d(t, "a", (function() {
            return c
        }))
    },
    e45c: function(e, t, n) {
        "use strict";
        n("456d"), n("ac6a");
        var r = n("d225"),
            i = n("b0b4");
        n("a481");

        function o(e, t) {
            if (e && t) {
                var n = e.toLowerCase().replace(/__/g, "");
                if (n in t) return t[n]
            }
            return e
        }

        function a(e) {
            return "string" === typeof e && e.indexOf("__") > -1
        }
        n.d(t, "a", (function() {
            return c
        }));
        var c = function() {
            function e(t, n) {
                Object(r["a"])(this, e), this.variables = window.wsf && window.wsf.AnalyticsVariables && (window.wsf.AnalyticsVariables.dynamic || window.wsf.AnalyticsVariables) || {}, this.result = {}, t && (this.result.event = t), this.from(n)
            }
            return Object(i["a"])(e, [{
                key: "setProperty",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = a(e) ? o(e, this.variables) : e.trim();
                    return t && (n = n.toLowerCase()), n
                }
            }, {
                key: "from",
                value: function(e) {
                    var t = this;
                    Object.keys(e).forEach((function(n) {
                        e[n] && (t[n] = e[n])
                    }))
                }
            }, {
                key: "toObject",
                value: function() {
                    return this.result
                }
            }]), e
        }()
    },
    ed2b: function(e, t, n) {},
    f1f2: function(e, t, n) {
        "use strict";
        var r = n("c6c8"),
            i = n.n(r);
        i.a
    },
    f387: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }));
        var r = n("d225"),
            i = n("b0b4"),
            o = n("308d"),
            a = n("6bb5"),
            c = n("4e2b"),
            s = n("178b"),
            l = n("04d3"),
            u = n("e45c"),
            d = function(e) {
                function t(e) {
                    var n;
                    if (Object(r["a"])(this, t), n = Object(o["a"])(this, Object(a["a"])(t).call(this, "uaevent", e)), !e.category) throw l["a"].error("[AnalyticsUserActionEventObjectException] Category is required for uaevent (L'Oréal guideline)", e), new s["k"]("Category is required for uaevent (L'Oréal guideline)");
                    if (!e.action) throw l["a"].error("[AnalyticsUserActionEventObjectException] Action is required for uaevent (L'Oréal guideline)", e), new s["k"]("Action is required for uaevent (L'Oréal guideline)");
                    if (!e.label) throw l["a"].error("[AnalyticsUserActionEventObjectException] Label is required for uaevent (L'Oréal guideline)", e), new s["k"]("Label is required for uaevent (L'Oréal guideline)");
                    return n.result.ecommerce = void 0, n
                }
                return Object(c["a"])(t, e), Object(i["a"])(t, [{
                    key: "category",
                    set: function(e) {
                        this.result.eventCategory = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.eventCategory
                    }
                }, {
                    key: "action",
                    set: function(e) {
                        this.result.eventAction = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.eventAction
                    }
                }, {
                    key: "label",
                    set: function(e) {
                        this.result.eventLabel = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.eventLabel
                    }
                }, {
                    key: "value",
                    set: function(e) {
                        this.result.eventValue = this.setProperty(e)
                    }
                }]), t
            }(u["a"])
    },
    f3e0: function(e, t, n) {},
    f605: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        n("ac6a"), n("28a5");
        var r = {
            name: "click-extension",
            bind: function(e, t) {
                var n, r = e,
                    i = t.value.split(",");
                n = void 0 !== t.arg ? r.querySelector("a.".concat(t.arg)) : r.querySelector("a"), i.forEach((function(e) {
                    var t = r.querySelectorAll(e);
                    t.length ? [].forEach.call(t, (function(e) {
                        e.onclick = function() {
                            return n.click()
                        }, e.style.cursor = "pointer"
                    })) : console.warn("Element <".concat(e, "> was provided in clickextention but not present within this component."))
                }))
            }
        }
    },
    f635: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }));
        var r = n("d225"),
            i = n("b0b4"),
            o = n("308d"),
            a = n("6bb5"),
            c = n("4e2b"),
            s = n("178b"),
            l = n("04d3"),
            u = n("e45c"),
            d = function(e) {
                function t(e) {
                    var n;
                    if (Object(r["a"])(this, t), n = Object(o["a"])(this, Object(a["a"])(t).call(this, "nievent", e)), !e.category) throw l["a"].error("[AnalyticsNonInteractiveEventObjectException] Category is required for nievent (L'Oréal guideline)", e), new s["b"]("Category is required for nievent (L'Oréal guideline)");
                    if (!e.action) throw l["a"].error("[AnalyticsNonInteractiveEventObjectException] Action is required for nievent (L'Oréal guideline)", e), new s["b"]("Action is required for nievent (L'Oréal guideline)");
                    if (!e.label) throw l["a"].error("[AnalyticsNonInteractiveEventObjectException] Label is required for nievent (L'Oréal guideline)", e), new s["b"]("Label is required for nievent (L'Oréal guideline)");
                    return n
                }
                return Object(c["a"])(t, e), Object(i["a"])(t, [{
                    key: "category",
                    set: function(e) {
                        this.result.eventCategory = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.eventCategory
                    }
                }, {
                    key: "action",
                    set: function(e) {
                        this.result.eventAction = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.eventAction
                    }
                }, {
                    key: "label",
                    set: function(e) {
                        this.result.eventLabel = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.eventLabel
                    }
                }, {
                    key: "value",
                    set: function(e) {
                        this.result.eventValue = this.setProperty(e)
                    }
                }]), t
            }(u["a"])
    },
    f658: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return f
        }));
        var r = n("d225"),
            i = n("b0b4"),
            o = n("308d"),
            a = n("6bb5"),
            c = n("4e2b"),
            s = n("178b"),
            l = n("04d3"),
            u = n("e45c"),
            d = n("fee4"),
            f = function(e) {
                function t(e) {
                    var n;
                    if (Object(r["a"])(this, t), n = Object(o["a"])(this, Object(a["a"])(t).call(this, "promotionClick", e)), n.category = "Ecommerce", e.category && l["a"].warn('[AnalyticsPromotionClickObjectException] Category always defaults to "Ecommerce" (L\'Oréal guideline), currently ['.concat(e.category, "] was provided"), e, !1), n.action = "Promotion Click", e.action && l["a"].warn('[AnalyticsPromotionClickObjectException] Action always defaults to "Promotion Click" (L\'Oréal guideline), currently ['.concat(e.action, "] was provided"), e, !1), n.action = "Promotion Click", e.label && (n.label = e.label), !e.promotions || 0 === e.promotions.length) throw l["a"].error("[AnalyticsPromotionClickObjectException] promotion is required for promotionClick", e), new s["g"]("promotion is required for promotionClick");
                    return n
                }
                return Object(c["a"])(t, e), Object(i["a"])(t, [{
                    key: "initEcommerce",
                    value: function() {
                        this.result.ecommerce = this.result.ecommerce || {}, this.result.ecommerce.promoClick = this.result.ecommerce.promoClick || {}
                    }
                }, {
                    key: "category",
                    set: function(e) {
                        this.result.eventCategory = this.setProperty(e, !1)
                    }
                }, {
                    key: "action",
                    set: function(e) {
                        this.result.eventAction = this.setProperty(e, !1)
                    }
                }, {
                    key: "label",
                    set: function(e) {
                        this.result.eventLabel = this.setProperty(e, !1)
                    }
                }, {
                    key: "value",
                    set: function(e) {
                        this.result.eventValue = this.setProperty(e)
                    }
                }, {
                    key: "promotions",
                    set: function(e) {
                        e = e.map((function(e) {
                            return new d["a"](e).toObject()
                        })), this.initEcommerce(), this.result.ecommerce.promoClick.promotions = e
                    }
                }]), t
            }(u["a"])
    },
    f95c: function(e, t, n) {
        "use strict";
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("div", {
                    ref: "backgroundWrapper",
                    staticClass: "responsive-image__media"
                }, [e._t("default")], 2), e._t("content")], 2)
            },
            i = [],
            o = n("75a3"),
            a = n("62f9"),
            c = n("6b0c"),
            s = {
                name: "responsive-image",
                props: {
                    srcset: {
                        type: [Object, String],
                        required: !1,
                        default: void 0
                    },
                    aspectRatio: {
                        type: String,
                        required: !1,
                        default: void 0
                    }
                },
                data: function() {
                    return {
                        loaded: !0,
                        isAnimationActive: !1,
                        backgroundImage: void 0,
                        counter: 0
                    }
                },
                mounted: function() {
                    var e = this;
                    this.img = this.$refs.backgroundWrapper.querySelector("img"), Object(c["a"])(this.$el, {
                        checkIsVisible: !1
                    }).then((function() {
                        e.loaded = !0, e.updateBackground(), e.srcset && (e.responsiveListener = Object(a["c"])((function() {
                            return e.updateBackground()
                        }), 200), window.addEventListener("resize", e.responsiveListener))
                    }))
                },
                destroyed: function() {
                    this.responsiveListener && (window.removeEventListener("resize", this.responsiveListener), this.responsiveListener = null), this.scrollListener && (window.addEventListener("scroll", this.scrollListener), this.scrollListener = null)
                },
                updated: function() {
                    document.getElementsByTagName("body")[0].classList.contains("pagemode-edit") && this.updateBackground()
                },
                methods: {
                    updateBackground: function() {
                        var e = this.getBackgroundImage();
                        this.backgroundImage = "url('".concat(e, "')");
                        var t = this.$refs.backgroundWrapper.querySelector("img");
                        t && (t.src = e)
                    },
                    getBackgroundImage: function() {
                        if (this.srcset) return Object(o["a"])(this.srcset);
                        var e = this.$el.querySelector("img");
                        return e && e.src ? e.src : void 0
                    }
                }
            },
            l = s,
            u = (n("f1f2"), n("2877")),
            d = Object(u["a"])(l, r, i, !1, null, null, null);
        t["a"] = d.exports
    },
    fee4: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }));
        n("7f7f");
        var r = n("d225"),
            i = n("b0b4"),
            o = n("308d"),
            a = n("6bb5"),
            c = n("4e2b"),
            s = n("178b"),
            l = n("04d3"),
            u = n("e45c"),
            d = function(e) {
                function t(e) {
                    var n;
                    if (Object(r["a"])(this, t), n = Object(o["a"])(this, Object(a["a"])(t).call(this, void 0, e)), !n.name && !n.id) throw l["a"].error("[AnalyticsPromotionObjectException] A Promotion Name or a Promotion ID is required for an Analytics Promotion Object", e), new s["i"]("A Promotion Name or a Promotion ID is required for an Analytics Promotion Object");
                    return n
                }
                return Object(c["a"])(t, e), Object(i["a"])(t, [{
                    key: "name",
                    set: function(e) {
                        this.result.name = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.name
                    }
                }, {
                    key: "id",
                    set: function(e) {
                        this.result.id = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.id
                    }
                }, {
                    key: "creative",
                    set: function(e) {
                        this.result.creative = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.creative
                    }
                }, {
                    key: "position",
                    set: function(e) {
                        this.result.position = this.setProperty(e)
                    },
                    get: function() {
                        return this.result.position
                    }
                }]), t
            }(u["a"])
    }
});
//# sourceMappingURL=bundle.js.map