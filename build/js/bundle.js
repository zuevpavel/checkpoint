/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../pages/blocks/common/menu/menu.js */ "./src/pages/blocks/common/menu/menu.js");

__webpack_require__(/*! ../pages/blocks/common/form/form.js */ "./src/pages/blocks/common/form/form.js");

__webpack_require__(/*! ../pages/blocks/common/modal/modal.js */ "./src/pages/blocks/common/modal/modal.js");

/***/ }),

/***/ "./src/js/utils/documentReady.js":
/*!***************************************!*\
  !*** ./src/js/utils/documentReady.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global document */
const ready = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/js/utils/getScrollSize.js":
/*!***************************************!*\
  !*** ./src/js/utils/getScrollSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global document */
const getScrollSize = function () {
  const outer = document.createElement('div');
  const inner = document.createElement('div');
  outer.style.overflow = 'scroll';
  outer.classList.add('scrollbar');
  document.body.appendChild(outer);
  outer.appendChild(inner);
  const scrollbarSize = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return scrollbarSize;
};

/* harmony default export */ __webpack_exports__["default"] = (getScrollSize);

/***/ }),

/***/ "./src/pages/blocks/common/form/form.js":
/*!**********************************************!*\
  !*** ./src/pages/blocks/common/form/form.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");

Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  // hide / show password
  const showPassBtn = document.querySelectorAll('.js-show-icon');
  showPassBtn.forEach(function (trigger) {
    trigger.addEventListener('click', () => {
      const passwordInput = trigger.previousElementSibling;
      passwordInput.getAttribute('type') === 'password' ? passwordInput.setAttribute('type', 'text') : passwordInput.setAttribute('type', 'password');
      trigger.querySelector(".show-icon--line").classList.toggle("visually-hidden");
    });
  }); //mask tel

  let inputTel = document.querySelectorAll('.input--tel');
  inputTel.forEach(function (input) {
    let keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf("_");

      if (i != -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }

      let reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

/***/ }),

/***/ "./src/pages/blocks/common/menu/menu.js":
/*!**********************************************!*\
  !*** ./src/pages/blocks/common/menu/menu.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* harmony import */ var Utils_getScrollSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/getScrollSize.js */ "./src/js/utils/getScrollSize.js");


Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  window.addEventListener('resize', appHeight);
  appHeight();
  document.querySelector('.menu__toggle').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('menu__toggle--active');

    if (this.classList.contains('menu__toggle--active')) {
      document.body.style.marginRight = Object(Utils_getScrollSize_js__WEBPACK_IMPORTED_MODULE_1__["default"])() + 'px';
      document.querySelector('.page__body').classList.add('no-scroll');
      document.querySelector('.menu').classList.add('menu--active');
    } else {
      document.body.style.marginRight = 0;
      document.querySelector('.page__body').classList.remove('no-scroll');
      document.querySelector('.menu').classList.remove('menu--active');
    }
  });
  let menuLinkItem = document.querySelectorAll('.menu__link');
  menuLinkItem.forEach(element => {
    element.addEventListener("click", function () {
      let menuActive = document.querySelector('.menu--active');
      let bodyNoScroll = document.querySelector('.no-scroll');
      let menuToggle = document.querySelector('.menu__toggle--active');

      if (menuActive) {
        menuActive.classList.remove('menu--active');
        bodyNoScroll.classList.remove('no-scroll');
        menuToggle.classList.remove('menu__toggle--active');
        document.body.style.marginRight = 0;
      }
    });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      document.body.style.marginRight = 0;
      document.querySelector('.page__body').classList.remove('no-scroll');
      document.querySelector('.menu').classList.remove('menu--active');
      document.querySelector('.menu__toggle').classList.remove('menu__toggle--active');
    }
  });
});

/***/ }),

/***/ "./src/pages/blocks/common/modal/modal.js":
/*!************************************************!*\
  !*** ./src/pages/blocks/common/modal/modal.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* harmony import */ var Utils_getScrollSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/getScrollSize.js */ "./src/js/utils/getScrollSize.js");


Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  const modals = document.querySelectorAll("[data-modal]");
  modals.forEach(function (trigger) {
    const modal = document.getElementById(trigger.dataset.modal);
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      modal.classList.add("modal--active");
      document.body.style.marginRight = Object(Utils_getScrollSize_js__WEBPACK_IMPORTED_MODULE_1__["default"])() + 'px';
      document.querySelector('.page__body').classList.add('no-scroll');
    });
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();

        if (document.querySelector('.menu--active')) {
          modal.classList.remove("modal--active");
        } else {
          modal.classList.remove("modal--active");
          document.body.style.marginRight = 0;
          document.querySelector('.page__body').classList.remove('no-scroll');
        }
      });
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9kb2N1bWVudFJlYWR5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9nZXRTY3JvbGxTaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ibG9ja3MvY29tbW9uL2Zvcm0vZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYmxvY2tzL2NvbW1vbi9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2Jsb2Nrcy9jb21tb24vbW9kYWwvbW9kYWwuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInJlYWR5IiwiZm4iLCJkb2N1bWVudCIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRTY3JvbGxTaXplIiwib3V0ZXIiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXIiLCJzdHlsZSIsIm92ZXJmbG93IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyU2l6ZSIsIm9mZnNldFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJzaG93UGFzc0J0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidHJpZ2dlciIsInBhc3N3b3JkSW5wdXQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsImlucHV0VGVsIiwiaW5wdXQiLCJrZXlDb2RlIiwibWFzayIsImV2ZW50IiwicG9zIiwic2VsZWN0aW9uU3RhcnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1hdHJpeCIsImkiLCJkZWYiLCJyZXBsYWNlIiwidmFsIiwidmFsdWUiLCJuZXdWYWx1ZSIsImEiLCJsZW5ndGgiLCJjaGFyQXQiLCJpbmRleE9mIiwic2xpY2UiLCJyZWciLCJzdWJzdHIiLCJSZWdFeHAiLCJ0ZXN0IiwidHlwZSIsImFwcEhlaWdodCIsImRvYyIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJlIiwiY29udGFpbnMiLCJtYXJnaW5SaWdodCIsInJlbW92ZSIsIm1lbnVMaW5rSXRlbSIsImVsZW1lbnQiLCJtZW51QWN0aXZlIiwiYm9keU5vU2Nyb2xsIiwibWVudVRvZ2dsZSIsImlubmVyV2lkdGgiLCJtb2RhbHMiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsImV4aXRzIiwiZXhpdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxtQkFBTyxDQUFDLG1GQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsbUZBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1RkFBRCxDQUFQLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7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LEVBQXNDZixTQUF0QyxDQUFnREMsR0FBaEQsQ0FBb0QsV0FBcEQ7QUFDSCxLQUxEO0FBT0EsVUFBTTZELEtBQUssR0FBR0gsS0FBSyxDQUFDbkQsZ0JBQU4sQ0FBdUIsYUFBdkIsQ0FBZDtBQUNBc0QsU0FBSyxDQUFDckQsT0FBTixDQUFjLFVBQVVzRCxJQUFWLEVBQWdCO0FBQzFCQSxVQUFJLENBQUN0RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFVNEIsS0FBVixFQUFpQjtBQUM1Q0EsYUFBSyxDQUFDRyxjQUFOOztBQUNBLFlBQUlsQyxRQUFRLENBQUN5QixhQUFULENBQXVCLGVBQXZCLENBQUosRUFBNkM7QUFDekM0QyxlQUFLLENBQUMzRCxTQUFOLENBQWdCbUQsTUFBaEIsQ0FBdUIsZUFBdkI7QUFDSCxTQUZELE1BRU87QUFDSFEsZUFBSyxDQUFDM0QsU0FBTixDQUFnQm1ELE1BQWhCLENBQXVCLGVBQXZCO0FBQ0E3RCxrQkFBUSxDQUFDWSxJQUFULENBQWNKLEtBQWQsQ0FBb0JvRCxXQUFwQixHQUFrQyxDQUFsQztBQUNBNUQsa0JBQVEsQ0FBQ3lCLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NmLFNBQXRDLENBQWdEbUQsTUFBaEQsQ0FBdUQsV0FBdkQ7QUFDSDtBQUNKLE9BVEQ7QUFVSCxLQVhEO0FBWUgsR0F0QkQ7QUF1QkgsQ0ExQkksQ0FBTCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2VudHJ5LmpzXCIpO1xuIiwicmVxdWlyZSgnLi4vcGFnZXMvYmxvY2tzL2NvbW1vbi9tZW51L21lbnUuanMnKTtcbnJlcXVpcmUoJy4uL3BhZ2VzL2Jsb2Nrcy9jb21tb24vZm9ybS9mb3JtLmpzJyk7XG5yZXF1aXJlKCcuLi9wYWdlcy9ibG9ja3MvY29tbW9uL21vZGFsL21vZGFsLmpzJyk7XG4iLCIvKiBnbG9iYWwgZG9jdW1lbnQgKi9cblxuY29uc3QgcmVhZHkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWFkeTtcbiIsIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuXG5jb25zdCBnZXRTY3JvbGxTaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIG91dGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGJhcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICBjb25zdCBzY3JvbGxiYXJTaXplID0gb3V0ZXIub2Zmc2V0V2lkdGggLSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcbiAgICByZXR1cm4gc2Nyb2xsYmFyU2l6ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2Nyb2xsU2l6ZTtcbiIsImltcG9ydCByZWFkeSBmcm9tICdVdGlscy9kb2N1bWVudFJlYWR5LmpzJztcblxucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAvLyBoaWRlIC8gc2hvdyBwYXNzd29yZFxuICAgIGNvbnN0IHNob3dQYXNzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNob3ctaWNvbicpO1xuXG4gICAgc2hvd1Bhc3NCdG4uZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXNzd29yZElucHV0ID0gdHJpZ2dlci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBwYXNzd29yZElucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAncGFzc3dvcmQnID8gcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpIDogcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncGFzc3dvcmQnKTtcbiAgICAgICAgdHJpZ2dlci5xdWVyeVNlbGVjdG9yKFwiLnNob3ctaWNvbi0tbGluZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG5cbiAgICAvL21hc2sgdGVsXG4gICAgbGV0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LS10ZWwnKTtcbiAgICBpbnB1dFRlbC5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICBsZXQga2V5Q29kZTtcbiAgICAgICAgZnVuY3Rpb24gbWFzayhldmVudCkge1xuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSAmJiAoa2V5Q29kZSA9IGV2ZW50LmtleUNvZGUpO1xuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICBpZiAocG9zIDwgMykgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBtYXRyaXggPSBcIis3IChfX18pIF9fXy1fXy1fX1wiLFxuICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgIGRlZiA9IG1hdHJpeC5yZXBsYWNlKC9cXEQvZywgXCJcIiksXG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIiksXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBtYXRyaXgucmVwbGFjZSgvW19cXGRdL2csIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpIDwgdmFsLmxlbmd0aCA/IHZhbC5jaGFyQXQoaSsrKSB8fCBkZWYuY2hhckF0KGkpIDogYTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGkgPSBuZXdWYWx1ZS5pbmRleE9mKFwiX1wiKTtcbiAgICAgICAgICAgIGlmIChpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgaSA8IDUgJiYgKGkgPSAzKTtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlZyA9IG1hdHJpeC5zdWJzdHIoMCwgdGhpcy52YWx1ZS5sZW5ndGgpLnJlcGxhY2UoL18rL2csXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXFxcXGR7MSxcIiArIGEubGVuZ3RoICsgXCJ9XCI7XG4gICAgICAgICAgICAgICAgfSkucmVwbGFjZSgvWysoKV0vZywgXCJcXFxcJCZcIik7XG4gICAgICAgICAgICByZWcgPSBuZXcgUmVnRXhwKFwiXlwiICsgcmVnICsgXCIkXCIpO1xuICAgICAgICAgICAgaWYgKCFyZWcudGVzdCh0aGlzLnZhbHVlKSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8IDUgfHwga2V5Q29kZSA+IDQ3ICYmIGtleUNvZGUgPCA1OCkgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gXCJibHVyXCIgJiYgdGhpcy52YWx1ZS5sZW5ndGggPCA1KSB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBtYXNrLCBmYWxzZSk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBtYXNrLCBmYWxzZSk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIG1hc2ssIGZhbHNlKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbWFzaywgZmFsc2UpO1xuICAgIH0pO1xuXG5cbn0pO1xuIiwiaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xuaW1wb3J0IGdldFNjcm9sbFNpemUgZnJvbSAnVXRpbHMvZ2V0U2Nyb2xsU2l6ZS5qcyc7XG5cbnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBhcHBIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgZG9jLnN0eWxlLnNldFByb3BlcnR5KCctLWFwcC1oZWlnaHQnLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgKVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFwcEhlaWdodCk7XG4gICAgYXBwSGVpZ2h0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3RvZ2dsZS0tYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9fdG9nZ2xlLS1hY3RpdmUnKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gZ2V0U2Nyb2xsU2l6ZSgpICsgJ3B4JztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19ib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC5hZGQoJ21lbnUtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5SaWdodCA9IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IG1lbnVMaW5rSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19saW5rJylcbiAgICBtZW51TGlua0l0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbWVudUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LS1hY3RpdmUnKVxuICAgICAgICAgICAgbGV0IGJvZHlOb1Njcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zY3JvbGwnKVxuICAgICAgICAgICAgbGV0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdG9nZ2xlLS1hY3RpdmUnKVxuICAgICAgICAgICAgaWYgKG1lbnVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBtZW51QWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGJvZHlOb1Njcm9sbC5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICBtZW51VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX3RvZ2dsZS0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5SaWdodCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gMDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19ib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLWFjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RvZ2dsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX3RvZ2dsZS0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xuaW1wb3J0IGdldFNjcm9sbFNpemUgZnJvbSAnVXRpbHMvZ2V0U2Nyb2xsU2l6ZS5qcyc7XG5cbnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1vZGFsXVwiKTtcblxuICAgIG1vZGFscy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodHJpZ2dlci5kYXRhc2V0Lm1vZGFsKTtcbiAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLS1hY3RpdmVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gZ2V0U2Nyb2xsU2l6ZSgpICsgJ3B4JztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19ib2R5JykuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGV4aXRzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1leGl0XCIpO1xuICAgICAgICBleGl0cy5mb3JFYWNoKGZ1bmN0aW9uIChleGl0KSB7XG4gICAgICAgICAgICBleGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luUmlnaHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==