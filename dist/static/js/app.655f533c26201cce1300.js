webpackJsonp([1],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Welcome__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Welcome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Welcome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Dataview__ = __webpack_require__(189);
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

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(183)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(196),
  /* scopeId */
  "data-v-bf3284c6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 126:
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
//
//




const colors = ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB", "#DB97E6"];

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
            this.chart.data.datasets = [];
            this.values.forEach(values => this.chart.data.datasets.push({ data: values, backgroundColor: colors }));
            //this.chart.data.datasets[0].data = this.values[0]
            this.chart.update();
        }

    },

    mounted() {
        let datasets = [];
        this.values.forEach(values => datasets.push({ data: values, backgroundColor: colors }));

        this.chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.id, {
            type: 'bar',
            data: { labels: this.labels, datasets: datasets },
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PieChart_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PieChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PieChart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BarChart_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BarChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__BarChart_vue__);
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
            chartOptions: [{ icon: 'pie_chart', value: 'pie', class: 'white--text' }, { icon: 'insert_chart', value: 'bar' }],
            selected: {
                all: false,
                item: 0,
                items: [],
                headers: []
            }
        };
    },

    components: {
        'pie-chart': __WEBPACK_IMPORTED_MODULE_1__PieChart_vue___default.a, 'bar-chart': __WEBPACK_IMPORTED_MODULE_2__BarChart_vue___default.a
    },

    computed: {
        headers() {
            let headers = this.getRow(0);
            this.selected.headers = headers.slice();
            return headers;
        },

        values() {
            let val = this.getRows();
            return val.slice(1);
        },

        selectedValues() {
            console.log(this.selectedHeaders);
            if (this.values.length > 0 && this.selectedHeaders.length > 0) {
                if (this.chartType === 'pie') {
                    return this.values[this.selected.item].filter((val, idx) => this.selectedHeaders.indexOf(this.headers[idx]) != -1);
                } else {
                    return this.selected.items.map(item => this.values[item].filter((val, idx) => this.selectedHeaders.indexOf(this.headers[idx]) != -1));
                }
            }

            return [];
        },

        selectedHeaders() {
            return this.headers.filter(header => this.selected.headers.indexOf(header) != -1);
        }
    },

    watch: {
        csvdata(val) {
            this.csvdata = val.trim();
            this.selected.all = false;
            this.selected.items = [0];
        }
    },

    methods: {
        getSeparator(lines) {
            let sep = ',';
            if (lines[0].indexOf('\t') != -1) {
                sep = '\t';
            }
            return sep;
        },

        getRows() {
            let lines = this.csvdata.split('\n');
            if (lines.length > 1) {
                return lines.map(line => line.split(this.getSeparator(lines)));
            }
            return [];
        },

        getRow(i) {
            let lines = this.csvdata.split('\n');
            if (lines.length > 1) {
                return lines[i].split(this.getSeparator(lines));
            }
            return [];
        },

        clear: function () {
            this.csvdata = '';
        },

        setDefaultData: function () {
            this.csvdata = 'Year,Chrome,IE,Firefox,Safari,Others\n' + '2014,45.53,21.21,17.92,10.33,5.01\n' + '2015,50.97,17.3,16.02,9.93,5.78\n' + '2016,56.78,11.8,14.28,9.57,7.57';
        },

        toggleAll() {
            if (this.selected.all) {
                this.selected.items = [];
            } else {
                this.selected.items = Array.from(Array(this.values.length).keys());
            }
            this.selected.all = !this.selected.all;
        },

        toggle() {
            this.selected.all = this.selected.items.length == this.values.length;
        }
    }
});

/***/ }),

/***/ 129:
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




const colors = ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB", "#DB97E6"];

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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_font_awesome_css_font_awesome_css__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_font_awesome_css_font_awesome_css__);
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
    name: 'welcome'
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify_dist_vuetify_min_css__ = __webpack_require__(123);
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 185:
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
webpackContext.id = 185;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/step1.e635086.png";

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/step2.003d75b.png";

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(182)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  "data-v-7532d6c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(193),
  /* scopeId */
  "data-v-5cdf5864",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(181)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(194),
  /* scopeId */
  "data-v-70887747",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(179)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(192),
  /* scopeId */
  "data-v-400bb95d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', {
    attrs: {
      "id": "welcome"
    }
  }, [_c('main', [_c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('v-row', [_c('v-col', {
    staticClass: "big-top-space text-sm-center",
    attrs: {
      "sm8": "",
      "offset-sm2": ""
    }
  }, [_c('h3', [_vm._v("The simplest way from your raw data to a nice chart !")]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "round": "",
      "primary": "",
      "dark": "",
      "large": "",
      "tag": "a",
      "href": "https://github.com/bbonnin/datachart"
    }
  }, [_c('i', {
    staticClass: "fa icon icon--left icon--medium fa-github"
  }), _vm._v(" Github")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/dataview",
      "tag": "button"
    }
  }, [_c('v-btn', {
    attrs: {
      "round": "",
      "primary": "",
      "dark": "",
      "large": ""
    }
  }, [_c('v-icon', {
    attrs: {
      "left": "",
      "dark": ""
    }
  }, [_vm._v("insert_chart")]), _vm._v(" Create a chart")], 1)], 1)], 1)], 1), _vm._v(" "), _c('v-row', [_c('v-col', {
    staticClass: "big-top-space text-sm-center",
    attrs: {
      "sm4": "",
      "offset-sm2": ""
    }
  }, [_c('h5', [_vm._v("From CSV...")]), _vm._v(" "), _c('p', [_vm._v("Type your values (separated by commas or tabs) or copy/paste your data from Excel")])]), _vm._v(" "), _c('v-col', {
    staticClass: "big-top-space",
    attrs: {
      "sm4": ""
    }
  }, [_c('img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": __webpack_require__(186)
    }
  })])], 1), _vm._v(" "), _c('v-row', [_c('v-col', {
    staticClass: "big-top-space",
    attrs: {
      "sm4": "",
      "offset-sm2": ""
    }
  }, [_c('img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": __webpack_require__(187)
    }
  })]), _vm._v(" "), _c('v-col', {
    staticClass: "big-top-space text-sm-center",
    attrs: {
      "sm4": ""
    }
  }, [_c('h5', [_vm._v("... to nice charts !")]), _vm._v(" "), _c('p', [_vm._v("In the data table panel, select the rows and the type of chart")]), _vm._v(" "), _c('p', [_vm._v("In the chart panel, select the fields you want to add in the chart (by default, all the fields are used)")])])], 1)], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', {
    attrs: {
      "id": "dataview"
    }
  }, [_c('v-toolbar', {
    staticClass: "blue darken-2 white--text"
  }, [_c('v-toolbar-title', [_vm._v("Create your chart in few seconds!")])], 1), _vm._v(" "), _c('main', [_c('v-content', [_c('v-container', {
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
      "height": "200px"
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
      "height": "200px"
    }
  }, [(_vm.headers.length > 0) ? _c('div', [_c('table', [_c('tr', [_c('th', [(_vm.chartType === 'bar') ? _c('v-checkbox', {
    attrs: {
      "primary": "",
      "hide-details": "",
      "input-value": _vm.selected.all
    },
    nativeOn: {
      "click": function($event) {
        _vm.toggleAll($event)
      }
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm._l((_vm.headers), function(header) {
    return _c('th', [_vm._v(_vm._s(header))])
  })], 2), _vm._v(" "), _vm._l((_vm.values), function(value, index) {
    return _c('tr', [_c('td', [(_vm.chartType === 'bar') ? _c('v-checkbox', {
      attrs: {
        "primary": "",
        "hide-details": "",
        "input-value": _vm.selected.items,
        "value": index
      },
      nativeOn: {
        "click": function($event) {
          _vm.toggle($event)
        }
      },
      model: {
        value: (_vm.selected.items),
        callback: function($$v) {
          _vm.selected.items = $$v
        },
        expression: "selected.items"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.chartType === 'pie') ? _c('v-radio', {
      attrs: {
        "primary": "",
        "hide-details": "",
        "input-value": _vm.selected.item,
        "value": index
      },
      nativeOn: {
        "click": function($event) {
          _vm.toggle($event)
        }
      },
      model: {
        value: (_vm.selected.item),
        callback: function($$v) {
          _vm.selected.item = $$v
        },
        expression: "selected.item"
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm._l((value), function(item) {
      return _c('td', [_vm._v(_vm._s(item))])
    })], 2)
  })], 2)]) : _c('div', {
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
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), (_vm.headers.length > 0 && _vm.chartType) ? _c('v-row', {
    staticClass: "mt-3"
  }, [_c('v-col', {
    key: "3",
    attrs: {
      "sm12": ""
    }
  }, [_c('v-card', [_c('v-card-title', [_vm._v("Your chart !")]), _vm._v(" "), _c('v-card-text', {
    staticStyle: {
      "padding-top": "0px"
    }
  }, [_c('v-card-row', [_c('v-select', {
    attrs: {
      "label": "Selected fields",
      "items": _vm.headers,
      "multiple": "",
      "max-height": "400",
      "persistent-hint": ""
    },
    model: {
      value: (_vm.selected.headers),
      callback: function($$v) {
        _vm.selected.headers = $$v
      },
      expression: "selected.headers"
    }
  })], 1), _vm._v(" "), _c('v-card-row', {
    attrs: {
      "height": "203px"
    }
  }, [(_vm.chartType === 'pie') ? _c('pie-chart', {
    attrs: {
      "height": "250",
      "width": "250",
      "labels": _vm.selectedHeaders,
      "values": _vm.selectedValues
    }
  }) : _vm._e(), _vm._v(" "), (_vm.chartType === 'bar') ? _c('bar-chart', {
    attrs: {
      "height": "250",
      "width": "250",
      "labels": _vm.selectedHeaders,
      "values": _vm.selectedValues
    }
  }) : _vm._e()], 1)], 1)], 1)], 1)], 1) : _vm._e()], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chart-container"
  }, [_c('canvas', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.values.length > 0),
      expression: "values.length > 0"
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

/***/ 195:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chart-container"
  }, [_c('canvas', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.values.length > 0),
      expression: "values.length > 0"
    }],
    attrs: {
      "id": _vm.id
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.values.length === 0 && _vm.labels.length > 0),
      expression: "values.length === 0 && labels.length > 0"
    }],
    staticClass: "text-xs-center"
  }, [_vm._v("Select rows")]), _vm._v(" "), _c('div', {
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

/***/ 196:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ })

},[131]);
//# sourceMappingURL=app.655f533c26201cce1300.js.map