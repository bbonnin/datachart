webpackJsonp([1],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Welcome__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Welcome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Welcome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Dataview__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Dataview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Dataview__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({

  routes: [{
    path: '/',
    name: 'Welcome',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Welcome___default.a
  }, {
    path: '/dataview',
    name: 'Dataview',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Dataview___default.a
  }]
}));

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(191),
  /* scopeId */
  "data-v-bf3284c6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
//
//
//
//
//
//
//
//
//
//
//
//




const colors = ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"];

/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'bar-chart',

    data() {
        return {
            chart: null
        };
    },

    props: {
        id: { default: 'barchart-canvas' },
        width: { type: [String, Number], required: true },
        height: { type: [String, Number], required: true },

        labels: { type: Array, required: true },
        values: { type: Array, required: true }
    },

    watch: {
        labels: 'valuesUpdated',
        values: 'valuesUpdated'
    },

    methods: {
        valuesUpdated(n, o) {
            this.chart.data.labels = this.labels;
            this.chart.data.datasets[0].data = this.values;
            this.chart.update();
        }

    },

    mounted() {
        this.chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.id, {
            type: 'bar',
            data: { labels: this.labels, datasets: [{ data: this.values, backgroundColor: colors }] },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { animateScale: true },
                legend: { display: false },
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0
                        }
                    }]
                }
            }
        });
    }
});

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PieChart_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PieChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PieChart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BarChart_vue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BarChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__BarChart_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'dataview',

    data() {
        return {
            csvdata: '',
            chartType: 'pie',
            chartOptions: [{ icon: 'pie_chart', value: 'pie', class: 'white--text' }, { icon: 'insert_chart', value: 'bar' }]
        };
    },

    components: {
        'pie-chart': __WEBPACK_IMPORTED_MODULE_0__PieChart_vue___default.a, 'bar-chart': __WEBPACK_IMPORTED_MODULE_1__BarChart_vue___default.a
    },

    computed: {
        labels() {
            return this.getRow(0);
        },

        values() {
            return this.getRow(1);
        }
    },

    methods: {
        getRow(i) {
            let lines = this.csvdata.split('\n');
            if (lines.length > 1) {
                return lines[i].split(',');
            }
            return [];
        },

        clear: function () {
            this.csvdata = '';
        },

        setDefaultData: function () {
            this.csvdata = 'Chrome,Safari,UC Browser,Firefox,Others\n52.81,14.44,8.75,6.67,7.86';
        }
    }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
//
//
//
//
//
//
//
//
//
//
//
//




const colors = ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"];

/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'pie-chart',

    data() {
        return {
            chart: null
        };
    },

    props: {
        id: { default: 'piechart-canvas' },
        width: { type: [String, Number], required: true },
        height: { type: [String, Number], required: true },

        labels: { type: Array, required: true },
        values: { type: Array, required: true }
    },

    watch: {
        labels: 'valuesUpdated',
        values: 'valuesUpdated'
    },

    methods: {
        valuesUpdated(n, o) {
            this.chart.data.labels = this.labels;
            this.chart.data.datasets[0].data = this.values;
            this.chart.update();
        }

    },

    mounted() {
        this.chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.id, {
            type: 'doughnut',
            data: { labels: this.labels, datasets: [{ data: this.values, backgroundColor: colors }] },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { animateScale: true },
                legend: { position: 'right' }
            }
        });
    }
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'welcome',
  data() {
    return {
      msg: 'Ready to visualize your data ?'
    };
  }
});

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify_dist_vuetify_min_css__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuetify_dist_vuetify_min_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuetify___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',

  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],

  template: '<App/>',

  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }

});

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 5,
	"./af.js": 5,
	"./ar": 12,
	"./ar-dz": 6,
	"./ar-dz.js": 6,
	"./ar-kw": 7,
	"./ar-kw.js": 7,
	"./ar-ly": 8,
	"./ar-ly.js": 8,
	"./ar-ma": 9,
	"./ar-ma.js": 9,
	"./ar-sa": 10,
	"./ar-sa.js": 10,
	"./ar-tn": 11,
	"./ar-tn.js": 11,
	"./ar.js": 12,
	"./az": 13,
	"./az.js": 13,
	"./be": 14,
	"./be.js": 14,
	"./bg": 15,
	"./bg.js": 15,
	"./bn": 16,
	"./bn.js": 16,
	"./bo": 17,
	"./bo.js": 17,
	"./br": 18,
	"./br.js": 18,
	"./bs": 19,
	"./bs.js": 19,
	"./ca": 20,
	"./ca.js": 20,
	"./cs": 21,
	"./cs.js": 21,
	"./cv": 22,
	"./cv.js": 22,
	"./cy": 23,
	"./cy.js": 23,
	"./da": 24,
	"./da.js": 24,
	"./de": 27,
	"./de-at": 25,
	"./de-at.js": 25,
	"./de-ch": 26,
	"./de-ch.js": 26,
	"./de.js": 27,
	"./dv": 28,
	"./dv.js": 28,
	"./el": 29,
	"./el.js": 29,
	"./en-au": 30,
	"./en-au.js": 30,
	"./en-ca": 31,
	"./en-ca.js": 31,
	"./en-gb": 32,
	"./en-gb.js": 32,
	"./en-ie": 33,
	"./en-ie.js": 33,
	"./en-nz": 34,
	"./en-nz.js": 34,
	"./eo": 35,
	"./eo.js": 35,
	"./es": 37,
	"./es-do": 36,
	"./es-do.js": 36,
	"./es.js": 37,
	"./et": 38,
	"./et.js": 38,
	"./eu": 39,
	"./eu.js": 39,
	"./fa": 40,
	"./fa.js": 40,
	"./fi": 41,
	"./fi.js": 41,
	"./fo": 42,
	"./fo.js": 42,
	"./fr": 45,
	"./fr-ca": 43,
	"./fr-ca.js": 43,
	"./fr-ch": 44,
	"./fr-ch.js": 44,
	"./fr.js": 45,
	"./fy": 46,
	"./fy.js": 46,
	"./gd": 47,
	"./gd.js": 47,
	"./gl": 48,
	"./gl.js": 48,
	"./gom-latn": 49,
	"./gom-latn.js": 49,
	"./he": 50,
	"./he.js": 50,
	"./hi": 51,
	"./hi.js": 51,
	"./hr": 52,
	"./hr.js": 52,
	"./hu": 53,
	"./hu.js": 53,
	"./hy-am": 54,
	"./hy-am.js": 54,
	"./id": 55,
	"./id.js": 55,
	"./is": 56,
	"./is.js": 56,
	"./it": 57,
	"./it.js": 57,
	"./ja": 58,
	"./ja.js": 58,
	"./jv": 59,
	"./jv.js": 59,
	"./ka": 60,
	"./ka.js": 60,
	"./kk": 61,
	"./kk.js": 61,
	"./km": 62,
	"./km.js": 62,
	"./kn": 63,
	"./kn.js": 63,
	"./ko": 64,
	"./ko.js": 64,
	"./ky": 65,
	"./ky.js": 65,
	"./lb": 66,
	"./lb.js": 66,
	"./lo": 67,
	"./lo.js": 67,
	"./lt": 68,
	"./lt.js": 68,
	"./lv": 69,
	"./lv.js": 69,
	"./me": 70,
	"./me.js": 70,
	"./mi": 71,
	"./mi.js": 71,
	"./mk": 72,
	"./mk.js": 72,
	"./ml": 73,
	"./ml.js": 73,
	"./mr": 74,
	"./mr.js": 74,
	"./ms": 76,
	"./ms-my": 75,
	"./ms-my.js": 75,
	"./ms.js": 76,
	"./my": 77,
	"./my.js": 77,
	"./nb": 78,
	"./nb.js": 78,
	"./ne": 79,
	"./ne.js": 79,
	"./nl": 81,
	"./nl-be": 80,
	"./nl-be.js": 80,
	"./nl.js": 81,
	"./nn": 82,
	"./nn.js": 82,
	"./pa-in": 83,
	"./pa-in.js": 83,
	"./pl": 84,
	"./pl.js": 84,
	"./pt": 86,
	"./pt-br": 85,
	"./pt-br.js": 85,
	"./pt.js": 86,
	"./ro": 87,
	"./ro.js": 87,
	"./ru": 88,
	"./ru.js": 88,
	"./sd": 89,
	"./sd.js": 89,
	"./se": 90,
	"./se.js": 90,
	"./si": 91,
	"./si.js": 91,
	"./sk": 92,
	"./sk.js": 92,
	"./sl": 93,
	"./sl.js": 93,
	"./sq": 94,
	"./sq.js": 94,
	"./sr": 96,
	"./sr-cyrl": 95,
	"./sr-cyrl.js": 95,
	"./sr.js": 96,
	"./ss": 97,
	"./ss.js": 97,
	"./sv": 98,
	"./sv.js": 98,
	"./sw": 99,
	"./sw.js": 99,
	"./ta": 100,
	"./ta.js": 100,
	"./te": 101,
	"./te.js": 101,
	"./tet": 102,
	"./tet.js": 102,
	"./th": 103,
	"./th.js": 103,
	"./tl-ph": 104,
	"./tl-ph.js": 104,
	"./tlh": 105,
	"./tlh.js": 105,
	"./tr": 106,
	"./tr.js": 106,
	"./tzl": 107,
	"./tzl.js": 107,
	"./tzm": 109,
	"./tzm-latn": 108,
	"./tzm-latn.js": 108,
	"./tzm.js": 109,
	"./uk": 110,
	"./uk.js": 110,
	"./ur": 111,
	"./ur.js": 111,
	"./uz": 113,
	"./uz-latn": 112,
	"./uz-latn.js": 112,
	"./uz.js": 113,
	"./vi": 114,
	"./vi.js": 114,
	"./x-pseudo": 115,
	"./x-pseudo.js": 115,
	"./yo": 116,
	"./yo.js": 116,
	"./zh-cn": 117,
	"./zh-cn.js": 117,
	"./zh-hk": 118,
	"./zh-hk.js": 118,
	"./zh-tw": 119,
	"./zh-tw.js": 119
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 181;

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(179)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(190),
  /* scopeId */
  "data-v-7532d6c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(177)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(188),
  /* scopeId */
  "data-v-5cdf5864",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(178)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(189),
  /* scopeId */
  "data-v-70887747",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(176)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(187),
  /* scopeId */
  "data-v-400bb95d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "welcome"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(182)
    }
  }), _vm._v(" "), _c('h2', [_vm._v(_vm._s(_vm.msg))]), _vm._v(" "), _c('router-link', {
    staticClass: "button-green",
    attrs: {
      "to": "/dataview",
      "tag": "button"
    }
  }, [_vm._v("Graph my data")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', {
    attrs: {
      "id": "demo1"
    }
  }, [_c('v-toolbar', {
    staticClass: "blue darken-2 white--text"
  }, [_c('v-toolbar-title', [_vm._v("A chart in 2 seconds!")])], 1), _vm._v(" "), _c('main', [_c('v-content', [_c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('v-row', [_c('v-col', {
    key: "1",
    attrs: {
      "sm6": ""
    }
  }, [_c('v-card', [_c('v-card-title', [_vm._v("Your data")]), _vm._v(" "), _c('v-card-text', [_c('v-card-row', {
    attrs: {
      "height": "150px"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.csvdata),
      expression: "csvdata"
    }],
    staticClass: "user-data",
    domProps: {
      "value": (_vm.csvdata)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.csvdata = $event.target.value
      }
    }
  })])], 1), _vm._v(" "), _c('v-card-row', {
    attrs: {
      "actions": ""
    }
  }, [_c('v-btn', {
    staticClass: "grey lighten-4",
    attrs: {
      "default": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.clear($event)
      }
    }
  }, [_vm._v("Clear")]), _vm._v(" "), _c('v-btn', {
    staticClass: "grey lighten-4",
    attrs: {
      "default": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.setDefaultData($event)
      }
    }
  }, [_vm._v("Show example")])], 1)], 1)], 1), _vm._v(" "), _c('v-col', {
    key: "2",
    attrs: {
      "sm6": ""
    }
  }, [_c('v-card', [_c('v-card-title', [_vm._v("Data table")]), _vm._v(" "), _c('v-card-text', [_c('v-card-row', {
    staticClass: "data-table",
    attrs: {
      "height": "150px"
    }
  }, [(_vm.labels.length > 0) ? _c('div', [_c('table', [_c('tr', _vm._l((_vm.labels), function(label) {
    return _c('th', [_vm._v(_vm._s(label))])
  })), _vm._v(" "), _c('tr', _vm._l((_vm.values), function(value) {
    return _c('td', [_vm._v(_vm._s(value))])
  }))])]) : _c('div', {
    staticClass: "no-data text-xs-center"
  }, [_vm._v("No data")])])], 1), _vm._v(" "), _c('v-card-row', {
    attrs: {
      "actions": ""
    }
  }, [_c('v-col', {
    attrs: {
      "md12": ""
    }
  }, [_c('v-btn-toggle', {
    staticClass: "right",
    attrs: {
      "options": _vm.chartOptions
    },
    model: {
      value: (_vm.chartType),
      callback: function($$v) {
        _vm.chartType = $$v
      },
      expression: "chartType"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('v-row', {
    staticClass: "mt-3"
  }, [_c('v-col', {
    key: "3",
    attrs: {
      "sm12": ""
    }
  }, [_c('v-card', [_c('v-card-title', [_vm._v("Nice chart !")]), _vm._v(" "), _c('v-card-text', [_c('v-card-row', {
    attrs: {
      "height": "203px"
    }
  }, [(_vm.chartType === 'pie') ? _c('pie-chart', {
    attrs: {
      "labels": _vm.labels,
      "values": _vm.values,
      "height": "250",
      "width": "250"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.chartType === 'bar') ? _c('bar-chart', {
    attrs: {
      "labels": _vm.labels,
      "values": _vm.values,
      "height": "250",
      "width": "250"
    }
  }) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chart-container"
  }, [_c('canvas', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.labels.length > 0),
      expression: "labels.length > 0"
    }],
    attrs: {
      "id": _vm.id
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.labels.length === 0),
      expression: "labels.length === 0"
    }],
    staticClass: "text-xs-center"
  }, [_vm._v("No data")])])
},staticRenderFns: []}

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chart-container"
  }, [_c('canvas', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.labels.length > 0),
      expression: "labels.length > 0"
    }],
    attrs: {
      "id": _vm.id
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.labels.length === 0),
      expression: "labels.length === 0"
    }],
    staticClass: "text-xs-center"
  }, [_vm._v("No data")])])
},staticRenderFns: []}

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ })

},[129]);
//# sourceMappingURL=app.5fd99501fbdbdfb00f95.js.map