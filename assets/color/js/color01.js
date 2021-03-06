(function(t, e) {
    "object" === typeof exports && "object" === typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define([], e) : "object" === typeof exports ? exports["vue-swatches"] = e() : t["vue-swatches"] = e()
})("undefined" !== typeof self ? self : this, (function() {
    return function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(r, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = "fb15")
    }({
        "0ca3": function(t, e, n) {
            "use strict";
            var r = n("c6aa"),
                i = n.n(r);
            i.a
        },
        7937: function(t, e, n) {},
        "7fca": function(t, e, n) {
            "use strict";
            var r = n("c10a"),
                i = n.n(r);
            i.a
        },
        8875: function(t, e, n) {
            var r, i, o;
            (function(n, c) {
                i = [], r = c, o = "function" === typeof r ? r.apply(e, i) : r, void 0 === o || (t.exports = o)
            })("undefined" !== typeof self && self, (function() {
                function t() {
                    if (document.currentScript) return document.currentScript;
                    try {
                        throw new Error
                    } catch (h) {
                        var t, e, n, r = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                            i = /@([^@]*):(\d+):(\d+)\s*$/gi,
                            o = r.exec(h.stack) || i.exec(h.stack),
                            c = o && o[1] || !1,
                            s = o && o[2] || !1,
                            a = document.location.href.replace(document.location.hash, ""),
                            l = document.getElementsByTagName("script");
                        c === a && (t = document.documentElement.outerHTML, e = new RegExp("(?:[^\\n]+?\\n){0," + (s - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), n = t.replace(e, "$1").trim());
                        for (var u = 0; u < l.length; u++) {
                            if ("interactive" === l[u].readyState) return l[u];
                            if (l[u].src === c) return l[u];
                            if (c === a && l[u].innerHTML && l[u].innerHTML.trim() === n) return l[u]
                        }
                        return null
                    }
                }
                return t
            }))
        },
        9334: function(t, e, n) {
            "use strict";
            var r = n("7937"),
                i = n.n(r);
            i.a
        },
        c10a: function(t, e, n) {},
        c6aa: function(t, e, n) {},
        fb15: function(t, e, n) {
            "use strict";
            if (n.r(e), n.d(e, "DEFAULT_BACKGROUND_COLOR", (function() {
                    return E
                })), n.d(e, "DEFAULT_BORDER_RADIUS", (function() {
                    return R
                })), n.d(e, "DEFAULT_ROW_LENGTH", (function() {
                    return F
                })), n.d(e, "DEFAULT_TRIGGER_CONTAINER_SPACE", (function() {
                    return P
                })), n.d(e, "DEFAULT_SWATCH_SIZE", (function() {
                    return D
                })), n.d(e, "DEFAULT_SHOW_BORDER", (function() {
                    return A
                })), n.d(e, "extractPropertyFromPreset", (function() {
                    return T
                })), "undefined" !== typeof window) {
                var r = window.document.currentScript,
                    i = n("8875");
                r = i(), "currentScript" in document || Object.defineProperty(document, "currentScript", {
                    get: i
                });
                var o = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                o && (n.p = o[1])
            }
            var c = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "vue-swatches",
                        attrs: {
                            tabindex: "-1"
                        },
                        on: {
                            blur: function(e) {
                                return t.onBlur(e.relatedTarget)
                            }
                        }
                    }, [t.inline ? t._e() : n("div", {
                        ref: "triggerWrapper",
                        staticClass: "vue-swatches__trigger__wrapper",
                        on: {
                            click: t.togglePopover
                        }
                    }, [t._t("trigger", [n("div", {
                        staticClass: "vue-swatches__trigger",
                        class: {
                            "vue-swatches--is-empty": !t.value, "vue-swatches--is-disabled": t.disabled
                        },
                        style: t.triggerStyles
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isNoColor,
                            expression: "isNoColor"
                        }],
                        staticClass: "vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"
                    }, [n("div", {
                        staticClass: "vue-swatches__diagonal"
                    })])])])], 2), n("transition", {
                        attrs: {
                            name: "vue-swatches-show-hide"
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.inline || t.isOpen,
                            expression: "inline || isOpen"
                        }],
                        ref: "containerWrapper",
                        staticClass: "vue-swatches__container",
                        class: {
                            "vue-swatches--inline": t.inline
                        },
                        style: t.containerStyles
                    }, [n("div", {
                        staticClass: "vue-swatches__wrapper",
                        style: t.wrapperStyles
                    }, [t.isNested ? t._l(t.computedSwatches, (function(e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "vue-swatches__row"
                        }, t._l(e, (function(i, o) {
                            return n("v-swatch", {
                                key: o,
                                attrs: {
                                    "is-last": r === t.computedSwatches.length - 1 && o === e.length,
                                    "row-length-setted": null !== t.rowLength || null !== t.presetRowLength,
                                    "border-radius": t.computedBorderRadius,
                                    disabled: t.getSwatchDisabled(i),
                                    inline: t.inline,
                                    selected: t.checkEquality(t.getSwatchColor(i), t.value),
                                    "swatch-size": t.computedSwatchSize,
                                    "spacing-size": t.computedSpacingSize,
                                    "show-border": t.getSwatchShowBorder(i),
                                    "show-checkbox": t.showCheckbox,
                                    "show-labels": t.showLabels,
                                    "swatch-color": t.getSwatchColor(i),
                                    "swatch-label": t.getSwatchLabel(i),
                                    "swatch-alt": t.getSwatchAlt(i),
                                    "swatch-style": t.swatchStyle
                                },
                                on: {
                                    blur: function(e) {
                                        return t.onBlur(e)
                                    },
                                    click: function(e) {
                                        return t.updateSwatch(i)
                                    }
                                },
                                nativeOn: {
                                    click: function(e) {
                                        return t.updateSwatch(i)
                                    }
                                }
                            })
                        })), 1)
                    })) : t._l(t.computedSwatches, (function(e, r) {
                        return n("v-swatch", {
                            key: r,
                            attrs: {
                                "is-last": r === t.computedSwatches.length - 1,
                                "row-length-setted": null !== t.rowLength || null !== t.presetRowLength,
                                "border-radius": t.computedBorderRadius,
                                disabled: t.getSwatchDisabled(e),
                                inline: t.inline,
                                selected: t.checkEquality(t.getSwatchColor(e), t.value),
                                "swatch-size": t.computedSwatchSize,
                                "spacing-size": t.computedSpacingSize,
                                "show-border": t.getSwatchShowBorder(e),
                                "show-checkbox": t.showCheckbox,
                                "show-labels": t.showLabels,
                                "swatch-color": t.getSwatchColor(e),
                                "swatch-label": t.getSwatchLabel(e),
                                "swatch-alt": t.getSwatchAlt(e),
                                "swatch-style": t.swatchStyle
                            },
                            on: {
                                blur: function(e) {
                                    return t.onBlur(e)
                                },
                                click: function(n) {
                                    return t.updateSwatch(e)
                                }
                            },
                            nativeOn: {
                                click: function(n) {
                                    return t.updateSwatch(e)
                                }
                            }
                        })
                    }))], 2), t.showFallback ? n("div", {
                        staticClass: "vue-swatches__fallback__wrapper",
                        style: t.computedFallbackWrapperStyles
                    }, [n("span", {
                        staticClass: "vue-swatches__fallback__input--wrapper"
                    }, [n("input", {
                        ref: "fallbackInput",
                        staticClass: "vue-swatches__fallback__input",
                        class: t.fallbackInputClass,
                        attrs: {
                            type: t.fallbackInputType
                        },
                        domProps: {
                            value: t.internalValue
                        },
                        on: {
                            input: function(e) {
                                return t.updateSwatch(e.target.value, {
                                    fromFallbackInput: !0
                                })
                            }
                        }
                    })]), t.showFallbackOk ? n("button", {
                        staticClass: "vue-swatches__fallback__button",
                        class: t.fallbackOkClass,
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onFallbackButtonClick(e)
                            }
                        }
                    }, [t._v(" " + t._s(t.fallbackOkText) + " ")]) : t._e()]) : t._e()])])], 1)
                },
                s = [],
                a = {
                    colors: ["#FE0000","#6D3030","#FF6B01","#FEC703","#C6BA86","#CCFF00","#33FF00","#0BBA5B","#7ABF64","#00FFF1","#0036FB","#01CFFF","#231878","#021756","#911F99","#BA01FF","#FE769C","#878787","#DBDBDB","#161616"],
                    rowLength: 4
                },
                l = {
                    colors: ["#CC0001", "#E36101", "#FFCC00", "#009900", "#0066CB", "#000000", "#FFFFFF"],
                    showBorder: !0
                },
                u = {
                    colors: [
                        ["#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff"],
                        ["#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff"],
                        ["#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc"],
                        ["#dd7e6b", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
                        ["#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0"],
                        ["#a61c00", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79"],
                        ["#85200c", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#1155cc", "#0b5394", "#351c75", "#741b47"],
                        ["#5b0f00", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#1c4587", "#073763", "#20124d", "#4c1130"]
                    ],
                    borderRadius: "0",
                    rowLength: 10,
                    swatchSize: 24,
                    spacingSize: 0
                },
                h = function() {
                    var t = this,
                        e = this,
                        n = e.$createElement,
                        r = e._self._c || n;
                    return r("div", {
                        staticClass: "vue-swatches__swatch",
                        class: {
                            "vue-swatches__swatch--border": e.showBorder, "vue-swatches__swatch--selected": e.selected, "vue-swatches__swatch--is-disabled": e.disabled
                        },
                        style: e.swatchStyles,
                        attrs: {
                            "aria-label": e.swatchAlt,
                            role: "button",
                            tabindex: "0"
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.$emit("click", e.swatchColor)
                            },
                            blur: function(e) {
                                return t.$emit("blur", e.relatedTarget)
                            }
                        }
                    }, ["" === e.swatchColor ? r("div", {
                        staticClass: "vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"
                    }, [r("div", {
                        staticClass: "vue-swatches__diagonal"
                    })]) : e._e(), r("v-check", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showCheckbox && e.selected,
                            expression: "showCheckbox && selected"
                        }]
                    }), e.showLabels ? r("div", {
                        staticClass: "vue-swatches__swatch__label",
                        style: e.labelStyles
                    }, [e._v(" " + e._s(e.swatchLabel) + " ")]) : e._e()], 1)
                },
                p = [],
                d = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "vue-swatches__check__wrapper vue-swatches--has-children-centered"
                    }, [n("div", {
                        staticClass: "vue-swatches__check__circle vue-swatches--has-children-centered"
                    }, [n("svg", {
                        staticClass: "check",
                        attrs: {
                            version: "1.1",
                            role: "presentation",
                            width: "12",
                            height: "12",
                            viewBox: "0 0 1792 1792"
                        }
                    }, [n("path", {
                        staticClass: "vue-swatches__check__path",
                        attrs: {
                            d: "M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
                        }
                    })])])])
                },
                f = [],
                w = {
                    name: "v-check",
                    data: function() {
                        return {}
                    }
                },
                b = w;
            n("7fca");

            function S(t, e, n, r, i, o, c, s) {
                var a, l = "function" === typeof t ? t.options : t;
                if (e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), o && (l._scopeId = "data-v-" + o), c ? (a = function(t) {
                        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(c)
                    }, l._ssrRegister = a) : i && (a = s ? function() {
                        i.call(this, this.$root.$options.shadowRoot)
                    } : i), a)
                    if (l.functional) {
                        l._injectStyles = a;
                        var u = l.render;
                        l.render = function(t, e) {
                            return a.call(e), u(t, e)
                        }
                    } else {
                        var h = l.beforeCreate;
                        l.beforeCreate = h ? [].concat(h, a) : [a]
                    } return {
                    exports: t,
                    options: l
                }
            }
            var g = S(b, d, f, !1, null, null, null),
                y = g.exports;

            function v(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(n), !0).forEach((function(e) {
                        _(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function _(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var O = {
                    name: "v-swatch",
                    components: {
                        VCheck: y
                    },
                    props: {
                        borderRadius: {
                            type: String
                        },
                        isLast: {
                            type: Boolean,
                            default: !1
                        },
                        rowLengthSetted: {
                            type: Boolean,
                            default: !1
                        },
                        disabled: {
                            type: Boolean
                        },
                        inline: {
                            type: Boolean
                        },
                        selected: {
                            type: Boolean,
                            default: !1
                        },
                        showCheckbox: {
                            type: Boolean
                        },
                        showBorder: {
                            type: Boolean
                        },
                        showLabels: {
                            type: Boolean
                        },
                        spacingSize: {
                            type: Number
                        },
                        swatchColor: {
                            type: String,
                            default: ""
                        },
                        swatchLabel: {
                            type: String
                        },
                        swatchAlt: {
                            type: String
                        },
                        swatchSize: {
                            type: Number
                        },
                        swatchStyle: {
                            type: Object
                        }
                    },
                    data: function() {
                        return {}
                    },
                    computed: {
                        computedLabelStyle: function() {
                            var t = 8 + 3 * Math.floor(this.spacingSize / 5);
                            return {
                                bottom: "-".concat(t, "px")
                            }
                        },
                        computedSwatchStyle: function() {
                            var t = {
                                width: "".concat(this.swatchSize, "px"),
                                height: "".concat(this.swatchSize, "px"),
                                borderRadius: this.borderRadius,
                                backgroundColor: "" !== this.swatchColor ? this.swatchColor : "#FFFFFF",
                                cursor: this.cursorStyle
                            };
                            return this.inline && this.isLast || (t.marginRight = "".concat(this.spacingSize, "px")), this.inline && !this.rowLengthSetted ? t : m({}, t, {
                                marginBottom: "".concat(this.spacingSize, "px")
                            })
                        },
                        cursorStyle: function() {
                            return this.disabled ? "not-allowed" : "pointer"
                        },
                        labelStyles: function() {
                            return [this.computedLabelStyle]
                        },
                        swatchStyles: function() {
                            return [this.computedSwatchStyle, this.swatchStyle]
                        }
                    }
                },
                C = O,
                k = (n("0ca3"), S(C, h, p, !1, null, null, null)),
                x = k.exports;

            function B(t) {
                return B = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, B(t)
            }

            function j(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function L(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? j(Object(n), !0).forEach((function(e) {
                        z(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function z(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var E = "#ffffff",
                R = "10px",
                F = 4,
                P = 5,
                D = 42,
                A = !1,
                T = function(t, e, n) {
                    return "string" !== typeof t ? null : "text-basic" === t ? void 0 === l[e] ? null : l[e] : "text-advanced" === t ? void 0 === u[e] ? null : u[e] : "basic" === t || n ? void 0 === a[e] ? null : a[e] : null
                },
                $ = {
                    name: "v-swatches",
                    components: {
                        VSwatch: x
                    },
                    props: {
                        backgroundColor: {
                            type: String,
                            default: E
                        },
                        closeOnSelect: {
                            type: Boolean,
                            default: !0
                        },
                        swatches: {
                            type: [Array, String],
                            default: function() {
                                return "basic"
                            }
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        fallbackInputClass: {
                            type: [Array, Object, String],
                            default: null
                        },
                        fallbackInputType: {
                            type: String,
                            default: function() {
                                return "text"
                            },
                            validator: function(t) {
                                return -1 !== ["text", "color"].indexOf(t)
                            }
                        },
                        fallbackOkClass: {
                            type: [Array, Object, String],
                            default: null
                        },
                        fallbackOkText: {
                            type: String,
                            default: "Ok"
                        },
                        inline: {
                            type: Boolean,
                            default: !1
                        },
                        shapes: {
                            type: String,
                            default: "squares"
                        },
                        popoverX: {
                            type: String,
                            default: "right"
                        },
                        popoverY: {
                            type: String,
                            default: "bottom"
                        },
                        rowLength: {
                            type: [Number, String],
                            default: null
                        },
                        showBorder: {
                            type: Boolean,
                            default: null
                        },
                        showFallback: {
                            type: Boolean,
                            default: !1
                        },
                        showCheckbox: {
                            type: Boolean,
                            default: !0
                        },
                        showLabels: {
                            type: Boolean,
                            default: !1
                        },
                        spacingSize: {
                            type: Number,
                            default: null
                        },
                        swatchSize: {
                            type: [Number, String],
                            default: null
                        },
                        swatchStyle: {
                            type: [Object, Array],
                            default: function() {}
                        },
                        triggerStyle: {
                            type: [Object, Array],
                            default: function() {}
                        },
                        wrapperStyle: {
                            type: [Object, Array],
                            default: function() {}
                        },
                        value: {
                            type: String,
                            default: null
                        }
                    },
                    data: function() {
                        return {
                            alwaysOnScreenStyle: {},
                            componentMounted: !1,
                            internalValue: this.value,
                            internalIsOpen: !1
                        }
                    },
                    computed: {
                        isNested: function() {
                            return !!(this.computedSwatches && this.computedSwatches.length && this.computedSwatches[0] instanceof Array)
                        },
                        isOpen: function() {
                            return !this.inline && this.internalIsOpen
                        },
                        isNoColor: function() {
                            return this.checkEquality("", this.value)
                        },
                        presetBorderRadius: function() {
                            return T(this.swatches, "borderRadius")
                        },
                        presetRowLength: function() {
                            return T(this.swatches, "rowLength")
                        },
                        presetShowBorder: function() {
                            return T(this.swatches, "showBorder")
                        },
                        presetSwatchSize: function() {
                            return T(this.swatches, "swatchSize")
                        },
                        presetSpacingSize: function() {
                            return T(this.swatches, "spacingSize")
                        },
                        computedSwatches: function() {
                            return this.swatches instanceof Array ? this.swatches : "string" === typeof this.swatches ? T(this.swatches, "colors", !0) : []
                        },
                        computedBorderRadius: function() {
                            return null !== this.presetBorderRadius ? this.presetBorderRadius : this.borderRadius
                        },
                        computedRowLength: function() {
                            return null !== this.rowLength ? Number(this.rowLength) : null !== this.presetRowLength ? this.presetRowLength : this.computedSwatches.length < F && !this.isNested ? this.computedSwatches.length : F
                        },
                        computedSwatchSize: function() {
                            return null !== this.swatchSize ? Number(this.swatchSize) : null !== this.presetSwatchSize ? this.presetSwatchSize : D
                        },
                        computedSpacingSize: function() {
                            return null !== this.spacingSize ? this.spacingSize : null !== this.presetSpacingSize ? this.presetSpacingSize : Math.round(.25 * this.computedSwatchSize)
                        },
                        computedShowBorder: function() {
                            return null !== this.showBorder ? this.showBorder : null !== this.presetShowBorder ? this.presetShowBorder : A
                        },
                        showFallbackOk: function() {
                            return !this.inline
                        },
                        borderRadius: function() {
                            return "squares" === this.shapes ? "".concat(Math.round(.25 * this.computedSwatchSize), "px") : "circles" === this.shapes ? "50%" : ""
                        },
                        wrapperWidth: function() {
                            return this.computedRowLength * (this.computedSwatchSize + this.computedSpacingSize)
                        },
                        computedtriggerStyle: function() {
                            return {
                                width: "42px",
                                height: "42px",
                                backgroundColor: this.value ? this.value : "#ffffff",
                                borderRadius: "circles" === this.shapes ? "50%" : R
                            }
                        },
                        triggerStyles: function() {
                            return [this.computedtriggerStyle, this.triggerStyle]
                        },
                        containerStyles: function() {
                            var t = [{
                                backgroundColor: this.backgroundColor
                            }, this.alwaysOnScreenStyle];
                            return this.inline ? t : [].concat(t, [{
                                padding: "5px",
                                marginBottom: "5px"
                            }])
                        },
                        computedWrapperStyle: function() {
                            return this.inline ? {} : {
                                paddingTop: "".concat(this.computedSpacingSize, "px"),
                                paddingLeft: "".concat(this.computedSpacingSize, "px"),
                                width: "".concat(this.wrapperWidth, "px")
                            }
                        },
                        wrapperStyles: function() {
                            return [this.computedWrapperStyle, this.wrapperStyle]
                        },
                        computedFallbackWrapperStyle: function() {
                            var t = {
                                marginLeft: "".concat(this.computedSpacingSize, "px"),
                                paddingBottom: "".concat(this.computedSpacingSize, "px")
                            };
                            return this.inline ? t : L({}, t, {
                                width: "".concat(this.wrapperWidth - this.computedSpacingSize, "px")
                            })
                        },
                        computedFallbackWrapperStyles: function() {
                            return [this.computedFallbackWrapperStyle]
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.internalValue = t
                        }
                    },
                    mounted: function() {
                        this.componentMounted = !0
                    },
                    methods: {
                        checkEquality: function(t, e) {
                            return !(!t && "" !== t || !e && "" !== e) && t.toUpperCase() === e.toUpperCase()
                        },
                        hidePopover: function() {
                            this.internalIsOpen = !1, this.$el.blur(), this.$emit("close", this.internalValue)
                        },
                        getAlwaysOnScreenStyle: function() {
                            var t = {},
                                e = this.$refs.triggerWrapper,
                                n = this.$refs.containerWrapper;
                            if (!this.componentMounted || this.inline || !e || !window || !document) return t;
                            var r = e.getBoundingClientRect(),
                                i = 5,
                                o = (document.documentElement.clientWidth || window.innerWidth) - 5,
                                c = 5,
                                s = (document.documentElement.clientHeight || window.innerHeight) - 5;
                            n.style.visibility = "hidden", n.style.display = "block";
                            var a = n.getBoundingClientRect();
                            return n.style.display = "none", n.style.visibility = "visible", "top" === this.popoverY ? r.top - a.height < c ? (t.top = "".concat(r.height + P, "px"), t.bottom = "auto") : (t.bottom = "".concat(r.height + P, "px"), t.top = "auto") : "bottom" === this.popoverY && (r.bottom + a.height > s ? (t.bottom = "".concat(r.height + P, "px"), t.top = "auto") : (t.top = "".concat(r.height + P, "px"), t.bottom = "auto")), "left" === this.popoverX ? r.right - a.width < i ? (t.left = 0, t.right = "auto") : (t.right = 0, t.left = "auto") : "right" === this.popoverX && (r.left + a.width > o ? (t.right = 0, t.left = "auto") : (t.left = 0, t.right = "auto")), t
                        },
                        getSwatchShowBorder: function(t) {
                            return "string" === typeof t ? this.computedShowBorder : "object" === B(t) ? void 0 !== t.showBorder ? t.showBorder : this.computedShowBorder : void 0
                        },
                        getSwatchColor: function(t) {
                            return "string" === typeof t ? t : "object" === B(t) ? t.color : void 0
                        },
                        getSwatchDisabled: function(t) {
                            return "string" === typeof t ? this.disabled : "object" === B(t) ? void 0 !== t.disabled ? t.disabled : this.disabled : void 0
                        },
                        getSwatchLabel: function(t) {
                            return "string" === typeof t ? t : "object" === B(t) ? t.label || t.color : void 0
                        },
                        getSwatchAlt: function(t) {
                            return "string" === typeof t ? t : "object" === B(t) ? t.alt || this.getSwatchLabel(t) : void 0
                        },
                        onBlur: function(t) {
                            this.isOpen && (null !== t && this.$el.contains(t) || (this.internalIsOpen = !1, this.$emit("close", this.internalValue)))
                        },
                        onFallbackButtonClick: function() {
                            this.hidePopover()
                        },
                        showPopover: function() {
                            this.isOpen || this.inline || this.disabled || (this.alwaysOnScreenStyle = this.getAlwaysOnScreenStyle(), this.internalIsOpen = !0, this.$el.focus(), this.$emit("open"))
                        },
                        togglePopover: function() {
                            this.isOpen ? this.hidePopover() : this.showPopover()
                        },
                        updateSwatch: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e.fromFallbackInput;
                            if (!this.getSwatchDisabled(t)) {
                                var r = this.getSwatchColor(t);
                                this.internalValue = r, this.$emit("input", r), !this.closeOnSelect || this.inline || n || this.hidePopover()
                            }
                        }
                    }
                },
                N = $,
                W = (n("9334"), S(N, c, s, !1, null, null, null)),
                I = W.exports;
            e["default"] = I
        }
    })["default"]
}));
//# sourceMappingURL=vue-swatches.umd.min.js.map