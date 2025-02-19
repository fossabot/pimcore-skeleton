"use strict";
(self["webpackChunk_instride_pimcore_skeleton"] = self["webpackChunk_instride_pimcore_skeleton"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_uikit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/uikit.js */ "./assets/js/base/uikit.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _components_example_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/example.js */ "./assets/js/components/example.js");
/* harmony import */ var _fontsource_open_sans_400_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/open-sans/400.css */ "./node_modules/@fontsource/open-sans/400.css");
/* harmony import */ var _fontsource_open_sans_700_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/open-sans/700.css */ "./node_modules/@fontsource/open-sans/700.css");
// Import base



// Import components


// Import Fonts



// Start app and register components
document.addEventListener("DOMContentLoaded", () => {
  _base_uikit_js__WEBPACK_IMPORTED_MODULE_0__["default"].component("example", _components_example_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

/***/ }),

/***/ "./assets/js/base/imports/components.js":
/*!**********************************************!*\
  !*** ./assets/js/base/imports/components.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// export { default as Countdown } from "uikit/src/js/components/countdown.js";
// export { default as Filter } from "uikit/src/js/components/filter.js";
// export { default as Lightbox } from "uikit/src/js/components/lightbox.js";
// export { default as LightboxPanel } from "uikit/src/js/components/lightbox-panel.js";
// export { default as Notification } from "uikit/src/js/components/notification.js";
// export { default as Parallax } from "uikit/src/js/components/parallax.js";
// export { default as Slider } from "uikit/src/js/components/slider.js";
// export { default as SliderParallax } from "uikit/src/js/components/slider-parallax.js";
// export { default as Slideshow } from "uikit/src/js/components/slideshow.js";
// export { default as SlideshowParallax } from "uikit/src/js/components/slideshow-parallax.js";
// export { default as Sortable } from "uikit/src/js/components/sortable.js";
// export { default as Tooltip } from "uikit/src/js/components/tooltip.js";
// export { default as Upload } from "uikit/src/js/components/upload.js";

/***/ }),

/***/ "./assets/js/base/imports/core.js":
/*!****************************************!*\
  !*** ./assets/js/base/imports/core.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Close: () => (/* reexport safe */ uikit_src_js_core_icon_js__WEBPACK_IMPORTED_MODULE_3__.Close),
/* harmony export */   Drop: () => (/* reexport safe */ uikit_src_js_core_drop_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Dropdown: () => (/* reexport safe */ uikit_src_js_core_drop_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ uikit_src_js_core_grid_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   HeightViewport: () => (/* reexport safe */ uikit_src_js_core_height_viewport_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Icon: () => (/* reexport safe */ uikit_src_js_core_icon_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Margin: () => (/* reexport safe */ uikit_src_js_core_margin_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Nav: () => (/* reexport safe */ uikit_src_js_core_nav_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Navbar: () => (/* reexport safe */ uikit_src_js_core_navbar_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   NavbarToggleIcon: () => (/* reexport safe */ uikit_src_js_core_icon_js__WEBPACK_IMPORTED_MODULE_3__.IconComponent),
/* harmony export */   Offcanvas: () => (/* reexport safe */ uikit_src_js_core_offcanvas_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Spinner: () => (/* reexport safe */ uikit_src_js_core_icon_js__WEBPACK_IMPORTED_MODULE_3__.Spinner),
/* harmony export */   Sticky: () => (/* reexport safe */ uikit_src_js_core_sticky_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Toggle: () => (/* reexport safe */ uikit_src_js_core_toggle_js__WEBPACK_IMPORTED_MODULE_9__["default"])
/* harmony export */ });
/* harmony import */ var uikit_src_js_core_drop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/src/js/core/drop.js */ "./node_modules/uikit/src/js/core/drop.js");
/* harmony import */ var uikit_src_js_core_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit/src/js/core/grid.js */ "./node_modules/uikit/src/js/core/grid.js");
/* harmony import */ var uikit_src_js_core_height_viewport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uikit/src/js/core/height-viewport.js */ "./node_modules/uikit/src/js/core/height-viewport.js");
/* harmony import */ var uikit_src_js_core_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit/src/js/core/icon.js */ "./node_modules/uikit/src/js/core/icon.js");
/* harmony import */ var uikit_src_js_core_margin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uikit/src/js/core/margin.js */ "./node_modules/uikit/src/js/core/margin.js");
/* harmony import */ var uikit_src_js_core_nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uikit/src/js/core/nav.js */ "./node_modules/uikit/src/js/core/nav.js");
/* harmony import */ var uikit_src_js_core_navbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uikit/src/js/core/navbar.js */ "./node_modules/uikit/src/js/core/navbar.js");
/* harmony import */ var uikit_src_js_core_offcanvas_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uikit/src/js/core/offcanvas.js */ "./node_modules/uikit/src/js/core/offcanvas.js");
/* harmony import */ var uikit_src_js_core_sticky_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uikit/src/js/core/sticky.js */ "./node_modules/uikit/src/js/core/sticky.js");
/* harmony import */ var uikit_src_js_core_toggle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uikit/src/js/core/toggle.js */ "./node_modules/uikit/src/js/core/toggle.js");
// export { default as Accordion } from "uikit/src/js/core/accordion.js";
// export { default as Alert } from "uikit/src/js/core/alert.js";
// export { default as Cover } from "uikit/src/js/core/cover.js";

// export { default as FormCustom } from "uikit/src/js/core/form-custom.js";

// export { default as HeightMatch } from "uikit/src/js/core/height-match.js";


// export { default as Img } from "uikit/src/js/core/img.js";
// export { default as Leader } from "uikit/src/js/core/leader.js";

// export { default as Modal } from "uikit/src/js/core/modal.js";



// export { default as OverflowAuto } from "uikit/src/js/core/overflow-auto.js";
// export { default as Responsive } from "uikit/src/js/core/responsive.js";
// export { default as Scroll } from "uikit/src/js/core/scroll.js";
// export { default as Scrollspy } from "uikit/src/js/core/scrollspy.js";
// export { default as ScrollspyNav } from "uikit/src/js/core/scrollspy-nav.js";

// export { default as Svg } from "uikit/src/js/core/svg.js";
// export { default as Switcher } from "uikit/src/js/core/switcher.js";
// export { default as Tab } from "uikit/src/js/core/tab.js";

// export { default as Video } from "uikit/src/js/core/video.js";

// Icon components


// export { Slidenav as SlidenavNext } from "uikit/src/js/core/icon.js";
// export { Slidenav as SlidenavPrevious } from "uikit/src/js/core/icon.js";
// export { Search as SearchIcon } from "uikit/src/js/core/icon.js";
// export { IconComponent as Marker } from "uikit/src/js/core/icon.js";

// export { IconComponent as OverlayIcon } from "uikit/src/js/core/icon.js";
// export { IconComponent as PaginationNext } from "uikit/src/js/core/icon.js";
// export { IconComponent as PaginationPrevious } from "uikit/src/js/core/icon.js";
// export { IconComponent as Totop } from "uikit/src/js/core/icon.js";

/***/ }),

/***/ "./assets/js/base/uikit.js":
/*!*********************************!*\
  !*** ./assets/js/base/uikit.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uikit_src_js_api_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uikit/src/js/api/index.js */ "./node_modules/uikit/src/js/api/index.js");
/* harmony import */ var uikit_src_js_api_boot_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uikit/src/js/api/boot.js */ "./node_modules/uikit/src/js/api/boot.js");
/* harmony import */ var uikit_src_js_util_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit/src/js/util/index.js */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var uikit_dist_js_uikit_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit-icons.js */ "./node_modules/uikit/dist/js/uikit-icons.js");
/* harmony import */ var _imports_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports/core.js */ "./assets/js/base/imports/core.js");
/* harmony import */ var _imports_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imports/components.js */ "./assets/js/base/imports/components.js");




// Import Icons file

// import Icons from "uikit/dist/js/uikit-icons-custom";

// Import UIkit components



// Register core components
(0,uikit_src_js_util_index_js__WEBPACK_IMPORTED_MODULE_3__.each)(_imports_core_js__WEBPACK_IMPORTED_MODULE_1__, (component, name) => uikit_src_js_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].component(name, component));

// Core functionality
(0,uikit_src_js_api_boot_js__WEBPACK_IMPORTED_MODULE_5__["default"])(uikit_src_js_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Set version
uikit_src_js_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].version = "3.23.1";

// Register components
(0,uikit_src_js_util_index_js__WEBPACK_IMPORTED_MODULE_3__.each)(_imports_components_js__WEBPACK_IMPORTED_MODULE_2__, (component, name) => uikit_src_js_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].component(name, component));

// Register icons
uikit_src_js_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].use(uikit_dist_js_uikit_icons_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uikit_src_js_api_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./assets/js/components/example.js":
/*!*****************************************!*\
  !*** ./assets/js/components/example.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uikit_src_js_mixin_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit/src/js/mixin/class.js */ "./node_modules/uikit/src/js/mixin/class.js");
/* harmony import */ var _styles_components_example_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/_example.scss */ "./assets/styles/components/_example.scss");


function Line(opts, ctx, tick, baseRad, dieX, dieY) {
  this.opts = opts;
  this.ctx = ctx;
  this.tick = tick;
  this.baseRad = baseRad;
  this.dieX = dieX;
  this.dieY = dieY;
  this.reset();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [uikit_src_js_mixin_class_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: {
    w: window.innerWidth,
    h: window.innerHeight,
    tick: 0,
    lines: [],
    baseRad: Math.PI * (2 / 6),
    opts: {
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: 0.05,
      spawnChance: 1,
      sparkChance: 0.1,
      sparkDist: 10,
      sparkSize: 2,
      color: "hsl(hue,100%,light%)",
      baseLight: 50,
      addedLight: 10,
      // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: 0.01,
      addedLightInputMultiplier: 0.02,
      cx: window.innerWidth / 2,
      cy: window.innerHeight / 2,
      repaintAlpha: 0.04,
      hueChange: 0.1
    }
  },
  connected() {
    this.c = this.$el;
    this.ctx = this.c.getContext("2d");
    this.c.width = this.w;
    this.c.height = this.h;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.w, this.h);
    this.dieX = this.w / 2 / this.opts.len;
    this.dieY = this.h / 2 / this.opts.len;
    this.loop();
    console.warn("⚠️ Don't forget to remove this component as it only serves as an example!");
  },
  events: [{
    name: "resize",
    el() {
      return window;
    },
    handler() {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.c.width = this.w;
      this.c.height = this.h;
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.w, this.h);
      this.opts.cx = this.w / 2;
      this.opts.cy = this.h / 2;
      this.dieX = this.w / 2 / this.opts.len;
      this.dieY = this.h / 2 / this.opts.len;
    }
  }],
  methods: {
    loop() {
      window.requestAnimationFrame(this.loop);
      this.tick += 1;
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.shadowBlur = 0;
      this.ctx.fillStyle = "rgba(0,0,0,alp)".replace("alp", this.opts.repaintAlpha);
      this.ctx.fillRect(0, 0, this.w, this.h);
      this.ctx.globalCompositeOperation = "lighter";
      if (this.lines.length < this.opts.count && Math.random() < this.opts.spawnChance) {
        this.lines.push(new Line(this.opts, this.ctx, this.tick, this.baseRad, this.dieX, this.dieY));
      }
      this.lines.forEach(line => {
        line.step();
      });
    }
  }
});
Line.prototype.reset = function reset() {
  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;
  this.rad = 0;
  this.lightInputMultiplier = this.opts.baseLightInputMultiplier + this.opts.addedLightInputMultiplier * Math.random();
  this.color = this.opts.color.replace("hue", this.tick * this.opts.hueChange);
  this.cumulativeTime = 0;
  this.beginPhase();
};
Line.prototype.beginPhase = function beginPhase() {
  this.x += this.addedX;
  this.y += this.addedY;
  this.time = 0;
  this.targetTime = this.opts.baseTime + this.opts.addedTime * Math.random() || 0;
  this.rad += this.baseRad * (Math.random() < 0.5 ? 1 : -1);
  this.addedX = Math.cos(this.rad);
  this.addedY = Math.sin(this.rad);
  if (Math.random() < this.opts.dieChance || this.x > this.dieX || this.x < -this.dieX || this.y > this.dieY || this.y < -this.dieY) {
    this.reset();
  }
};
Line.prototype.step = function step() {
  this.time += 1;
  this.cumulativeTime += 1;
  if (this.time >= this.targetTime) {
    this.beginPhase();
  }
  const prop = this.time / this.targetTime;
  const wave = Math.sin(prop * (Math.PI / 2));
  const x = this.addedX * wave;
  const y = this.addedY * wave;
  this.ctx.shadowBlur = prop * this.opts.shadowToTimePropMult;
  this.ctx.fillStyle = this.color.replace("light", this.opts.baseLight + this.opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
  this.ctx.shadowColor = this.ctx.fillStyle;
  this.ctx.fillRect(this.opts.cx + (this.x + x) * this.opts.len, this.opts.cy + (this.y + y) * this.opts.len, 2, 2);
  if (Math.random() < this.opts.sparkChance) {
    this.ctx.fillRect(this.opts.cx + (this.x + x) * this.opts.len + Math.random() * this.opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - this.opts.sparkSize / 2, this.opts.cy + (this.y + y) * this.opts.len + Math.random() * this.opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - this.opts.sparkSize / 2, this.opts.sparkSize, this.opts.sparkSize);
  }
};

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/components/_example.scss":
/*!************************************************!*\
  !*** ./assets/styles/components/_example.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fontsource_open-sans_400_css-node_modules_fontsource_open-sans_700_css-n-d08be8"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdBLENBQUMsSUFBSSxJQUFJLENBQUM5RCxJQUFJLENBQUNpQixHQUFHLEdBQzVCRixJQUFJLENBQUN5QyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ3hELElBQUksQ0FBQ3dCLFNBQVMsSUFBSVQsSUFBSSxDQUFDeUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQ3BFLElBQUksQ0FBQ3hELElBQUksQ0FBQ3lCLFNBQVMsR0FBRyxDQUFDLEVBQ3pCLElBQUksQ0FBQ3pCLElBQUksQ0FBQ2lDLEVBQUUsR0FDVixDQUFDLElBQUksQ0FBQzhCLENBQUMsR0FBR0EsQ0FBQyxJQUFJLElBQUksQ0FBQy9ELElBQUksQ0FBQ2lCLEdBQUcsR0FDNUJGLElBQUksQ0FBQ3lDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDeEQsSUFBSSxDQUFDd0IsU0FBUyxJQUFJVCxJQUFJLENBQUN5QyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FDcEUsSUFBSSxDQUFDeEQsSUFBSSxDQUFDeUIsU0FBUyxHQUFHLENBQUMsRUFDekIsSUFBSSxDQUFDekIsSUFBSSxDQUFDeUIsU0FBUyxFQUNuQixJQUFJLENBQUN6QixJQUFJLENBQUN5QixTQUNaLENBQUM7RUFDSDtBQUNGLENBQUM7Ozs7Ozs7Ozs7O0FDcE5EOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BpbnN0cmlkZS9waW1jb3JlLXNrZWxldG9uLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9AaW5zdHJpZGUvcGltY29yZS1za2VsZXRvbi8uL2Fzc2V0cy9qcy9iYXNlL2ltcG9ydHMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9AaW5zdHJpZGUvcGltY29yZS1za2VsZXRvbi8uL2Fzc2V0cy9qcy9iYXNlL2ltcG9ydHMvY29yZS5qcyIsIndlYnBhY2s6Ly9AaW5zdHJpZGUvcGltY29yZS1za2VsZXRvbi8uL2Fzc2V0cy9qcy9iYXNlL3Vpa2l0LmpzIiwid2VicGFjazovL0BpbnN0cmlkZS9waW1jb3JlLXNrZWxldG9uLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9AaW5zdHJpZGUvcGltY29yZS1za2VsZXRvbi8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/ZWUzYiIsIndlYnBhY2s6Ly9AaW5zdHJpZGUvcGltY29yZS1za2VsZXRvbi8uL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy9fZXhhbXBsZS5zY3NzP2ViNzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGJhc2VcbmltcG9ydCBVSWtpdCBmcm9tIFwiLi9iYXNlL3Vpa2l0LmpzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYXBwLnNjc3NcIjtcblxuLy8gSW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL2NvbXBvbmVudHMvZXhhbXBsZS5qc1wiO1xuXG4vLyBJbXBvcnQgRm9udHNcbmltcG9ydCBcIkBmb250c291cmNlL29wZW4tc2Fucy80MDAuY3NzXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9vcGVuLXNhbnMvNzAwLmNzc1wiO1xuXG4vLyBTdGFydCBhcHAgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgVUlraXQuY29tcG9uZW50KFwiZXhhbXBsZVwiLCBFeGFtcGxlKTtcbn0pO1xuIiwiLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBDb3VudGRvd24gfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvbXBvbmVudHMvY291bnRkb3duLmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIEZpbHRlciB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29tcG9uZW50cy9maWx0ZXIuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGlnaHRib3ggfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvbXBvbmVudHMvbGlnaHRib3guanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGlnaHRib3hQYW5lbCB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29tcG9uZW50cy9saWdodGJveC1wYW5lbC5qc1wiO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBOb3RpZmljYXRpb24gfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFsbGF4IH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb21wb25lbnRzL3BhcmFsbGF4LmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlciB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29tcG9uZW50cy9zbGlkZXIuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgU2xpZGVyUGFyYWxsYXggfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLXBhcmFsbGF4LmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlc2hvdyB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29tcG9uZW50cy9zbGlkZXNob3cuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgU2xpZGVzaG93UGFyYWxsYXggfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzaG93LXBhcmFsbGF4LmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNvcnRhYmxlIH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb21wb25lbnRzL3NvcnRhYmxlLmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFRvb2x0aXAgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvbXBvbmVudHMvdG9vbHRpcC5qc1wiO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBVcGxvYWQgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvbXBvbmVudHMvdXBsb2FkLmpzXCI7XG4iLCIvLyBleHBvcnQgeyBkZWZhdWx0IGFzIEFjY29yZGlvbiB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9hY2NvcmRpb24uanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvYWxlcnQuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgQ292ZXIgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvY292ZXIuanNcIjtcbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgRHJvcCxcbiAgZGVmYXVsdCBhcyBEcm9wZG93bixcbn0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL2Ryb3AuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgRm9ybUN1c3RvbSB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9mb3JtLWN1c3RvbS5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkIH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL2dyaWQuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgSGVpZ2h0TWF0Y2ggfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvaGVpZ2h0LW1hdGNoLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlaWdodFZpZXdwb3J0IH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL2hlaWdodC12aWV3cG9ydC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uIH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL2ljb24uanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgSW1nIH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL2ltZy5qc1wiO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBMZWFkZXIgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvbGVhZGVyLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmdpbiB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9tYXJnaW4uanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvbW9kYWwuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2IH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL25hdi5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXZiYXIgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvbmF2YmFyLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9mZmNhbnZhcyB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9vZmZjYW52YXMuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgT3ZlcmZsb3dBdXRvIH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL292ZXJmbG93LWF1dG8uanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgUmVzcG9uc2l2ZSB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9yZXNwb25zaXZlLmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNjcm9sbCB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9zY3JvbGwuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgU2Nyb2xsc3B5IH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL3Njcm9sbHNweS5qc1wiO1xuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JvbGxzcHlOYXYgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvc2Nyb2xsc3B5LW5hdi5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGlja3kgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvc3RpY2t5LmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFN2ZyB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9zdmcuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpdGNoZXIgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvc3dpdGNoZXIuanNcIjtcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgVGFiIH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL3RhYi5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2dnbGUgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvdG9nZ2xlLmpzXCI7XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFZpZGVvIH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL3ZpZGVvLmpzXCI7XG5cbi8vIEljb24gY29tcG9uZW50c1xuZXhwb3J0IHsgQ2xvc2UgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvaWNvbi5qc1wiO1xuZXhwb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9pY29uLmpzXCI7XG4vLyBleHBvcnQgeyBTbGlkZW5hdiBhcyBTbGlkZW5hdk5leHQgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvaWNvbi5qc1wiO1xuLy8gZXhwb3J0IHsgU2xpZGVuYXYgYXMgU2xpZGVuYXZQcmV2aW91cyB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9pY29uLmpzXCI7XG4vLyBleHBvcnQgeyBTZWFyY2ggYXMgU2VhcmNoSWNvbiB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9pY29uLmpzXCI7XG4vLyBleHBvcnQgeyBJY29uQ29tcG9uZW50IGFzIE1hcmtlciB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9pY29uLmpzXCI7XG5leHBvcnQgeyBJY29uQ29tcG9uZW50IGFzIE5hdmJhclRvZ2dsZUljb24gfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvaWNvbi5qc1wiO1xuLy8gZXhwb3J0IHsgSWNvbkNvbXBvbmVudCBhcyBPdmVybGF5SWNvbiB9IGZyb20gXCJ1aWtpdC9zcmMvanMvY29yZS9pY29uLmpzXCI7XG4vLyBleHBvcnQgeyBJY29uQ29tcG9uZW50IGFzIFBhZ2luYXRpb25OZXh0IH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL2ljb24uanNcIjtcbi8vIGV4cG9ydCB7IEljb25Db21wb25lbnQgYXMgUGFnaW5hdGlvblByZXZpb3VzIH0gZnJvbSBcInVpa2l0L3NyYy9qcy9jb3JlL2ljb24uanNcIjtcbi8vIGV4cG9ydCB7IEljb25Db21wb25lbnQgYXMgVG90b3AgfSBmcm9tIFwidWlraXQvc3JjL2pzL2NvcmUvaWNvbi5qc1wiO1xuIiwiaW1wb3J0IFVJa2l0IGZyb20gXCJ1aWtpdC9zcmMvanMvYXBpL2luZGV4LmpzXCI7XG5pbXBvcnQgYm9vdCBmcm9tIFwidWlraXQvc3JjL2pzL2FwaS9ib290LmpzXCI7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcInVpa2l0L3NyYy9qcy91dGlsL2luZGV4LmpzXCI7XG5cbi8vIEltcG9ydCBJY29ucyBmaWxlXG5pbXBvcnQgSWNvbnMgZnJvbSBcInVpa2l0L2Rpc3QvanMvdWlraXQtaWNvbnMuanNcIjtcbi8vIGltcG9ydCBJY29ucyBmcm9tIFwidWlraXQvZGlzdC9qcy91aWtpdC1pY29ucy1jdXN0b21cIjtcblxuLy8gSW1wb3J0IFVJa2l0IGNvbXBvbmVudHNcbmltcG9ydCAqIGFzIGNvcmVDb21wb25lbnRzIGZyb20gXCIuL2ltcG9ydHMvY29yZS5qc1wiO1xuaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tIFwiLi9pbXBvcnRzL2NvbXBvbmVudHMuanNcIjtcblxuLy8gUmVnaXN0ZXIgY29yZSBjb21wb25lbnRzXG5lYWNoKGNvcmVDb21wb25lbnRzLCAoY29tcG9uZW50LCBuYW1lKSA9PiBVSWtpdC5jb21wb25lbnQobmFtZSwgY29tcG9uZW50KSk7XG5cbi8vIENvcmUgZnVuY3Rpb25hbGl0eVxuYm9vdChVSWtpdCk7XG5cbi8vIFNldCB2ZXJzaW9uXG5VSWtpdC52ZXJzaW9uID0gVkVSU0lPTjtcblxuLy8gUmVnaXN0ZXIgY29tcG9uZW50c1xuZWFjaChjb21wb25lbnRzLCAoY29tcG9uZW50LCBuYW1lKSA9PiBVSWtpdC5jb21wb25lbnQobmFtZSwgY29tcG9uZW50KSk7XG5cbi8vIFJlZ2lzdGVyIGljb25zXG5VSWtpdC51c2UoSWNvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBVSWtpdDtcbiIsImltcG9ydCBDbGFzcyBmcm9tIFwidWlraXQvc3JjL2pzL21peGluL2NsYXNzLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9fZXhhbXBsZS5zY3NzXCI7XG5cbmZ1bmN0aW9uIExpbmUob3B0cywgY3R4LCB0aWNrLCBiYXNlUmFkLCBkaWVYLCBkaWVZKSB7XG4gIHRoaXMub3B0cyA9IG9wdHM7XG4gIHRoaXMuY3R4ID0gY3R4O1xuICB0aGlzLnRpY2sgPSB0aWNrO1xuICB0aGlzLmJhc2VSYWQgPSBiYXNlUmFkO1xuICB0aGlzLmRpZVggPSBkaWVYO1xuICB0aGlzLmRpZVkgPSBkaWVZO1xuXG4gIHRoaXMucmVzZXQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtDbGFzc10sXG5cbiAgZGF0YToge1xuICAgIHc6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGg6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICB0aWNrOiAwLFxuICAgIGxpbmVzOiBbXSxcbiAgICBiYXNlUmFkOiBNYXRoLlBJICogKDIgLyA2KSxcbiAgICBvcHRzOiB7XG4gICAgICBsZW46IDIwLFxuICAgICAgY291bnQ6IDUwLFxuICAgICAgYmFzZVRpbWU6IDEwLFxuICAgICAgYWRkZWRUaW1lOiAxMCxcbiAgICAgIGRpZUNoYW5jZTogMC4wNSxcbiAgICAgIHNwYXduQ2hhbmNlOiAxLFxuICAgICAgc3BhcmtDaGFuY2U6IDAuMSxcbiAgICAgIHNwYXJrRGlzdDogMTAsXG4gICAgICBzcGFya1NpemU6IDIsXG4gICAgICBjb2xvcjogXCJoc2woaHVlLDEwMCUsbGlnaHQlKVwiLFxuICAgICAgYmFzZUxpZ2h0OiA1MCxcbiAgICAgIGFkZGVkTGlnaHQ6IDEwLCAvLyBbNTAtMTAsNTArMTBdXG4gICAgICBzaGFkb3dUb1RpbWVQcm9wTXVsdDogNixcbiAgICAgIGJhc2VMaWdodElucHV0TXVsdGlwbGllcjogMC4wMSxcbiAgICAgIGFkZGVkTGlnaHRJbnB1dE11bHRpcGxpZXI6IDAuMDIsXG4gICAgICBjeDogd2luZG93LmlubmVyV2lkdGggLyAyLFxuICAgICAgY3k6IHdpbmRvdy5pbm5lckhlaWdodCAvIDIsXG4gICAgICByZXBhaW50QWxwaGE6IDAuMDQsXG4gICAgICBodWVDaGFuZ2U6IDAuMSxcbiAgICB9LFxuICB9LFxuXG4gIGNvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmMgPSB0aGlzLiRlbDtcbiAgICB0aGlzLmN0eCA9IHRoaXMuYy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB0aGlzLmMud2lkdGggPSB0aGlzLnc7XG4gICAgdGhpcy5jLmhlaWdodCA9IHRoaXMuaDtcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICB0aGlzLmRpZVggPSB0aGlzLncgLyAyIC8gdGhpcy5vcHRzLmxlbjtcbiAgICB0aGlzLmRpZVkgPSB0aGlzLmggLyAyIC8gdGhpcy5vcHRzLmxlbjtcblxuICAgIHRoaXMubG9vcCgpO1xuXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCLimqDvuI8gRG9uJ3QgZm9yZ2V0IHRvIHJlbW92ZSB0aGlzIGNvbXBvbmVudCBhcyBpdCBvbmx5IHNlcnZlcyBhcyBhbiBleGFtcGxlIVwiLFxuICAgICk7XG4gIH0sXG5cbiAgZXZlbnRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJyZXNpemVcIixcblxuICAgICAgZWwoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVyKCkge1xuICAgICAgICB0aGlzLncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5oID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuYy53aWR0aCA9IHRoaXMudztcbiAgICAgICAgdGhpcy5jLmhlaWdodCA9IHRoaXMuaDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAgICAgdGhpcy5vcHRzLmN4ID0gdGhpcy53IC8gMjtcbiAgICAgICAgdGhpcy5vcHRzLmN5ID0gdGhpcy5oIC8gMjtcblxuICAgICAgICB0aGlzLmRpZVggPSB0aGlzLncgLyAyIC8gdGhpcy5vcHRzLmxlbjtcbiAgICAgICAgdGhpcy5kaWVZID0gdGhpcy5oIC8gMiAvIHRoaXMub3B0cy5sZW47XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG5cbiAgbWV0aG9kczoge1xuICAgIGxvb3AoKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgICB0aGlzLnRpY2sgKz0gMTtcblxuICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuICAgICAgdGhpcy5jdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsYWxwKVwiLnJlcGxhY2UoXG4gICAgICAgIFwiYWxwXCIsXG4gICAgICAgIHRoaXMub3B0cy5yZXBhaW50QWxwaGEsXG4gICAgICApO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xuICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJsaWdodGVyXCI7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5saW5lcy5sZW5ndGggPCB0aGlzLm9wdHMuY291bnQgJiZcbiAgICAgICAgTWF0aC5yYW5kb20oKSA8IHRoaXMub3B0cy5zcGF3bkNoYW5jZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubGluZXMucHVzaChcbiAgICAgICAgICBuZXcgTGluZShcbiAgICAgICAgICAgIHRoaXMub3B0cyxcbiAgICAgICAgICAgIHRoaXMuY3R4LFxuICAgICAgICAgICAgdGhpcy50aWNrLFxuICAgICAgICAgICAgdGhpcy5iYXNlUmFkLFxuICAgICAgICAgICAgdGhpcy5kaWVYLFxuICAgICAgICAgICAgdGhpcy5kaWVZLFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICBsaW5lLnN0ZXAoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuXG5MaW5lLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLmFkZGVkWCA9IDA7XG4gIHRoaXMuYWRkZWRZID0gMDtcblxuICB0aGlzLnJhZCA9IDA7XG5cbiAgdGhpcy5saWdodElucHV0TXVsdGlwbGllciA9XG4gICAgdGhpcy5vcHRzLmJhc2VMaWdodElucHV0TXVsdGlwbGllciArXG4gICAgdGhpcy5vcHRzLmFkZGVkTGlnaHRJbnB1dE11bHRpcGxpZXIgKiBNYXRoLnJhbmRvbSgpO1xuXG4gIHRoaXMuY29sb3IgPSB0aGlzLm9wdHMuY29sb3IucmVwbGFjZShcImh1ZVwiLCB0aGlzLnRpY2sgKiB0aGlzLm9wdHMuaHVlQ2hhbmdlKTtcbiAgdGhpcy5jdW11bGF0aXZlVGltZSA9IDA7XG5cbiAgdGhpcy5iZWdpblBoYXNlKCk7XG59O1xuXG5MaW5lLnByb3RvdHlwZS5iZWdpblBoYXNlID0gZnVuY3Rpb24gYmVnaW5QaGFzZSgpIHtcbiAgdGhpcy54ICs9IHRoaXMuYWRkZWRYO1xuICB0aGlzLnkgKz0gdGhpcy5hZGRlZFk7XG5cbiAgdGhpcy50aW1lID0gMDtcbiAgdGhpcy50YXJnZXRUaW1lID1cbiAgICB0aGlzLm9wdHMuYmFzZVRpbWUgKyB0aGlzLm9wdHMuYWRkZWRUaW1lICogTWF0aC5yYW5kb20oKSB8fCAwO1xuXG4gIHRoaXMucmFkICs9IHRoaXMuYmFzZVJhZCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKTtcbiAgdGhpcy5hZGRlZFggPSBNYXRoLmNvcyh0aGlzLnJhZCk7XG4gIHRoaXMuYWRkZWRZID0gTWF0aC5zaW4odGhpcy5yYWQpO1xuXG4gIGlmIChcbiAgICBNYXRoLnJhbmRvbSgpIDwgdGhpcy5vcHRzLmRpZUNoYW5jZSB8fFxuICAgIHRoaXMueCA+IHRoaXMuZGllWCB8fFxuICAgIHRoaXMueCA8IC10aGlzLmRpZVggfHxcbiAgICB0aGlzLnkgPiB0aGlzLmRpZVkgfHxcbiAgICB0aGlzLnkgPCAtdGhpcy5kaWVZXG4gICkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxufTtcblxuTGluZS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uIHN0ZXAoKSB7XG4gIHRoaXMudGltZSArPSAxO1xuICB0aGlzLmN1bXVsYXRpdmVUaW1lICs9IDE7XG5cbiAgaWYgKHRoaXMudGltZSA+PSB0aGlzLnRhcmdldFRpbWUpIHtcbiAgICB0aGlzLmJlZ2luUGhhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IHByb3AgPSB0aGlzLnRpbWUgLyB0aGlzLnRhcmdldFRpbWU7XG4gIGNvbnN0IHdhdmUgPSBNYXRoLnNpbihwcm9wICogKE1hdGguUEkgLyAyKSk7XG4gIGNvbnN0IHggPSB0aGlzLmFkZGVkWCAqIHdhdmU7XG4gIGNvbnN0IHkgPSB0aGlzLmFkZGVkWSAqIHdhdmU7XG5cbiAgdGhpcy5jdHguc2hhZG93Qmx1ciA9IHByb3AgKiB0aGlzLm9wdHMuc2hhZG93VG9UaW1lUHJvcE11bHQ7XG4gIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3IucmVwbGFjZShcbiAgICBcImxpZ2h0XCIsXG4gICAgdGhpcy5vcHRzLmJhc2VMaWdodCArXG4gICAgICB0aGlzLm9wdHMuYWRkZWRMaWdodCAqXG4gICAgICAgIE1hdGguc2luKHRoaXMuY3VtdWxhdGl2ZVRpbWUgKiB0aGlzLmxpZ2h0SW5wdXRNdWx0aXBsaWVyKSxcbiAgKTtcbiAgdGhpcy5jdHguc2hhZG93Q29sb3IgPSB0aGlzLmN0eC5maWxsU3R5bGU7XG4gIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgIHRoaXMub3B0cy5jeCArICh0aGlzLnggKyB4KSAqIHRoaXMub3B0cy5sZW4sXG4gICAgdGhpcy5vcHRzLmN5ICsgKHRoaXMueSArIHkpICogdGhpcy5vcHRzLmxlbixcbiAgICAyLFxuICAgIDIsXG4gICk7XG5cbiAgaWYgKE1hdGgucmFuZG9tKCkgPCB0aGlzLm9wdHMuc3BhcmtDaGFuY2UpIHtcbiAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMub3B0cy5jeCArXG4gICAgICAgICh0aGlzLnggKyB4KSAqIHRoaXMub3B0cy5sZW4gK1xuICAgICAgICBNYXRoLnJhbmRvbSgpICogdGhpcy5vcHRzLnNwYXJrRGlzdCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKSAtXG4gICAgICAgIHRoaXMub3B0cy5zcGFya1NpemUgLyAyLFxuICAgICAgdGhpcy5vcHRzLmN5ICtcbiAgICAgICAgKHRoaXMueSArIHkpICogdGhpcy5vcHRzLmxlbiArXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLm9wdHMuc3BhcmtEaXN0ICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpIC1cbiAgICAgICAgdGhpcy5vcHRzLnNwYXJrU2l6ZSAvIDIsXG4gICAgICB0aGlzLm9wdHMuc3BhcmtTaXplLFxuICAgICAgdGhpcy5vcHRzLnNwYXJrU2l6ZSxcbiAgICApO1xuICB9XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlVJa2l0IiwiRXhhbXBsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudCIsImRlZmF1bHQiLCJEcm9wIiwiRHJvcGRvd24iLCJHcmlkIiwiSGVpZ2h0Vmlld3BvcnQiLCJJY29uIiwiTWFyZ2luIiwiTmF2IiwiTmF2YmFyIiwiT2ZmY2FudmFzIiwiU3RpY2t5IiwiVG9nZ2xlIiwiQ2xvc2UiLCJTcGlubmVyIiwiSWNvbkNvbXBvbmVudCIsIk5hdmJhclRvZ2dsZUljb24iLCJib290IiwiZWFjaCIsIkljb25zIiwiY29yZUNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwibmFtZSIsInZlcnNpb24iLCJWRVJTSU9OIiwidXNlIiwiQ2xhc3MiLCJMaW5lIiwib3B0cyIsImN0eCIsInRpY2siLCJiYXNlUmFkIiwiZGllWCIsImRpZVkiLCJyZXNldCIsIm1peGlucyIsImRhdGEiLCJ3Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImgiLCJpbm5lckhlaWdodCIsImxpbmVzIiwiTWF0aCIsIlBJIiwibGVuIiwiY291bnQiLCJiYXNlVGltZSIsImFkZGVkVGltZSIsImRpZUNoYW5jZSIsInNwYXduQ2hhbmNlIiwic3BhcmtDaGFuY2UiLCJzcGFya0Rpc3QiLCJzcGFya1NpemUiLCJjb2xvciIsImJhc2VMaWdodCIsImFkZGVkTGlnaHQiLCJzaGFkb3dUb1RpbWVQcm9wTXVsdCIsImJhc2VMaWdodElucHV0TXVsdGlwbGllciIsImFkZGVkTGlnaHRJbnB1dE11bHRpcGxpZXIiLCJjeCIsImN5IiwicmVwYWludEFscGhhIiwiaHVlQ2hhbmdlIiwiY29ubmVjdGVkIiwiYyIsIiRlbCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibG9vcCIsImNvbnNvbGUiLCJ3YXJuIiwiZXZlbnRzIiwiZWwiLCJoYW5kbGVyIiwibWV0aG9kcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInNoYWRvd0JsdXIiLCJyZXBsYWNlIiwibGVuZ3RoIiwicmFuZG9tIiwicHVzaCIsImZvckVhY2giLCJsaW5lIiwic3RlcCIsInByb3RvdHlwZSIsIngiLCJ5IiwiYWRkZWRYIiwiYWRkZWRZIiwicmFkIiwibGlnaHRJbnB1dE11bHRpcGxpZXIiLCJjdW11bGF0aXZlVGltZSIsImJlZ2luUGhhc2UiLCJ0aW1lIiwidGFyZ2V0VGltZSIsImNvcyIsInNpbiIsInByb3AiLCJ3YXZlIiwic2hhZG93Q29sb3IiXSwic291cmNlUm9vdCI6IiJ9