/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\n\nvar MenuMobile = /*#__PURE__*/function () {\n  function MenuMobile(menuButton, menuList, events) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuMobile);\n    this.menuButton = document.querySelector(menuButton);\n    this.menuList = document.querySelector(menuList);\n    this.activeClass = \"active\";\n\n    // define touchstart e click como argumento padrão\n    // de events caso o usuário não define\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];else this.events = events;\n    this.openMenu = this.openMenu.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuMobile, [{\n    key: \"openMenu\",\n    value: function openMenu(event) {\n      var _this = this;\n      event.preventDefault();\n      this.menuList.classList.add(this.activeClass);\n      this.menuButton.classList.add(this.activeClass);\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.menuList, this.events, function () {\n        _this.menuList.classList.remove(_this.activeClass);\n        _this.menuButton.classList.remove(_this.activeClass);\n      });\n    }\n  }, {\n    key: \"addMenuMobileEvents\",\n    value: function addMenuMobileEvents() {\n      var _this2 = this;\n      this.events.forEach(function (evento) {\n        return _this2.menuButton.addEventListener(evento, _this2.openMenu);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menuButton && this.menuList) {\n        this.addMenuMobileEvents();\n      }\n      return this;\n    }\n  }]);\n  return MenuMobile;\n}();\n\n\n//# sourceURL=webpack://olatu/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/mySwiper.js":
/*!********************************!*\
  !*** ./js/modules/mySwiper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MySwiper)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar MySwiper = /*#__PURE__*/function () {\n  function MySwiper() {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MySwiper);\n    this.swiper = null;\n    document.addEventListener('DOMContentLoaded', function () {\n      // Adiciona um ouvinte de evento para redimensionamento da janela\n      window.addEventListener('resize', _this.handleResize.bind(_this));\n      _this.handleResize();\n      _this.setupReducedMenuButton();\n    });\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MySwiper, [{\n    key: \"isMobile\",\n    value: function isMobile() {\n      return window.innerWidth <= 768;\n    }\n  }, {\n    key: \"handleResize\",\n    value: function handleResize() {\n      // Verifica se o tamanho da tela é móvel e se o Swiper já foi inicializado\n      if (this.isMobile() && this.swiper) {\n        this.destroySwiper();\n      } else if (!this.isMobile() && !this.swiper) {\n        // Se não é móvel e o Swiper não foi inicializado, inicializa o Swiper\n        this.initializeSwiper();\n      }\n    }\n  }, {\n    key: \"initializeSwiper\",\n    value: function initializeSwiper() {\n      this.swiper = new Swiper(\".mySwiper\", {\n        direction: \"vertical\",\n        speed: 1000,\n        mousewheel: true,\n        preventClicks: false,\n        preventClicksPropagation: false,\n        autoHeight: false,\n        hashNavigation: {\n          watchState: true\n        },\n        pagination: {\n          el: '.swiper-pagination',\n          clickable: false\n        },\n        on: {\n          slideChange: this.slideChange.bind(this),\n          init: this.initialVisibility.bind(this)\n        }\n      });\n    }\n  }, {\n    key: \"initialVisibility\",\n    value: function initialVisibility() {\n      var pagination = document.querySelector('.swiper-pagination');\n\n      // Esconde menu lateral e paginação inicialmente\n      if (pagination) pagination.style.display = 'none';\n    }\n  }, {\n    key: \"destroySwiper\",\n    value: function destroySwiper() {\n      // Verifica se o Swiper existe antes de tentar destruí-lo\n      if (this.swiper !== null) {\n        this.swiper.destroy(true, true);\n        this.swiper = null; // Reseta a referência do Swiper\n      }\n    }\n\n    // slideChange() {\n    //   // Primeiro, verifica se o Swiper está definido e inicializado corretamente.\n    //   if (!this.swiper || typeof this.swiper.realIndex === 'undefined') {\n    //       console.log(\"Swiper não inicializado.\");\n    //       return; // Sai do método se o Swiper não estiver inicializado\n    //   }\n\n    //   const currentSlideIndex = this.swiper.realIndex;\n    //   const pagination = document.querySelector('.swiper-pagination');\n    //   const menuLateral = document.querySelector('.menu-lateral');\n\n    //   // Atualiza a visibilidade do menu lateral e da paginação\n    //   const displayStyle = currentSlideIndex >= 1 ? 'flex' : 'none';\n    //   if (menuLateral) menuLateral.style.display = displayStyle;\n    //   if (pagination) pagination.style.display = displayStyle;\n\n    //   // Aplica a classe 'menu-white' no slide 4 ou 6\n    //   const shouldApplyMenuWhite = [3, 5].includes(currentSlideIndex);\n    //   if (menuLateral) menuLateral.classList.toggle('menu-white', shouldApplyMenuWhite);\n    //   if (pagination) pagination.classList.toggle('menu-white', shouldApplyMenuWhite);\n\n    //   // Remove 'active' class de todos os itens do menu\n    //   document.querySelectorAll('.project-menu-item').forEach(menuItem => {\n    //       menuItem.classList.remove('active');\n    //   });\n\n    //   // Se o índice do slide atual for válido\n    //   const currentSlide = this.swiper.slides[currentSlideIndex];\n    //   if (currentSlide) {\n    //       // Obtém o valor do hash do slide atual\n    //       let currentSlideHash = currentSlide.getAttribute('data-hash');\n    //       // Encontra o item de menu correspondente e adiciona a classe 'active'\n    //       let correspondingMenuItem = document.querySelector(`.project-menu-item[href=\"#${currentSlideHash}\"]`);\n    //       if (correspondingMenuItem) {\n    //           correspondingMenuItem.classList.add('active');\n    //       }\n    //   } \n    // }\n  }, {\n    key: \"slideChange\",\n    value: function slideChange() {\n      // Primeiro, verifica se o Swiper está definido e inicializado corretamente.\n      if (!this.swiper || typeof this.swiper.realIndex === 'undefined') {\n        console.log(\"Swiper não inicializado.\");\n        return; // Sai do método se o Swiper não estiver inicializado\n      }\n\n      var currentSlideIndex = this.swiper.realIndex;\n\n      // Atualiza a visibilidade e classes do cabeçalho baseado no slide atual\n      this.updateHeaderAndApplyClasses(currentSlideIndex);\n      var pagination = document.querySelector('.swiper-pagination');\n\n      // Atualiza a visibilidade do menu lateral e da paginação\n      var displayStyle = currentSlideIndex >= 1 ? 'flex' : 'none';\n      if (pagination) pagination.style.display = displayStyle;\n\n      // Aplica a classe 'menu-white' no slide 4 ou 6\n      var shouldApplyMenuWhite = [3, 5].includes(currentSlideIndex);\n      if (pagination) pagination.classList.toggle('menu-white', shouldApplyMenuWhite);\n\n      // Remove 'active' class de todos os itens do menu\n      document.querySelectorAll('.project-menu-item').forEach(function (menuItem) {\n        menuItem.classList.remove('active');\n      });\n\n      // Ativa o item do menu correspondente ao slide atual\n      this.activateCurrentMenuItem(currentSlideIndex);\n    }\n  }, {\n    key: \"updateHeaderAndApplyClasses\",\n    value: function updateHeaderAndApplyClasses(currentSlideIndex) {\n      var header = document.querySelector('.header_menu');\n      var logo = header.querySelector('a > img'); // Supondo que o logo seja o primeiro <img> dentro de um <a>\n      var menuLinks = header.querySelectorAll('.menu a'); // Seleciona todos os links dentro do menu\n      var menuButton = document.querySelector('.menu-button');\n      // Define o caminho para os logos\n      var originalLogoSrc = \"./img/logo.svg\";\n      var reducedLogoSrc = \"./img/logo-reduce.svg\";\n\n      // Remove classes anteriores para evitar conflitos\n      menuButton.classList.remove('dark');\n      header.classList.remove('minimal', 'dark');\n      logo.classList.remove('minimal', 'dark'); // Remover classes do logo\n      menuLinks.forEach(function (link) {\n        return link.classList.remove('minimal', 'dark');\n      }); // Remover classes dos links do menu\n\n      // Aplica a classe \"minimal\" a partir do slide 1\n      if (currentSlideIndex >= 1) {\n        header.classList.add('minimal');\n        logo.src = reducedLogoSrc; // Muda o logo para a versão reduzida\n        logo.classList.add('minimal'); // Adiciona a classe ao logo\n        menuLinks.forEach(function (link) {\n          return link.classList.add('minimal');\n        }); // Adiciona a classe aos links do menu\n      } else {\n        logo.src = originalLogoSrc; // Volta para o logo original\n      }\n\n      // Aplica a classe \"dark\" nos slides específicos\n      if ([1, 2, 4].includes(currentSlideIndex)) {\n        header.classList.add('dark');\n        menuButton.classList.add('dark');\n        logo.classList.add('dark'); // Adiciona a classe ao logo\n        menuLinks.forEach(function (link) {\n          return link.classList.add('dark');\n        }); // Adiciona a classe aos links do menu\n      }\n    }\n  }, {\n    key: \"setupReducedMenuButton\",\n    value: function setupReducedMenuButton() {\n      var menuButton = document.querySelector('.menu-button.minimal');\n      var menu = document.querySelector('#menu'); // Ajuste o seletor conforme necessário\n\n      menuButton.addEventListener('click', function () {\n        menu.classList.toggle('is-expanded'); // Alterna a classe que controla a visibilidade do menu\n      });\n    }\n  }, {\n    key: \"activateCurrentMenuItem\",\n    value: function activateCurrentMenuItem(currentSlideIndex) {\n      // Se o índice do slide atual for válido\n      var currentSlide = this.swiper.slides[currentSlideIndex];\n      if (currentSlide) {\n        // Obtém o valor do hash do slide atual\n        var currentSlideHash = currentSlide.getAttribute('data-hash');\n        // Encontra o item de menu correspondente e adiciona a classe 'active'\n        var correspondingMenuItem = document.querySelector(\".project-menu-item[href=\\\"#\".concat(currentSlideHash, \"\\\"]\"));\n        if (correspondingMenuItem) {\n          correspondingMenuItem.classList.add('active');\n        }\n      }\n    }\n  }]);\n  return MySwiper;\n}();\n\n\n//# sourceURL=webpack://olatu/./js/modules/mySwiper.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://olatu/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar ScrollAnima = /*#__PURE__*/function () {\n  function ScrollAnima(sections) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ScrollAnima);\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n    this.checkDistance = this.checkDistance.bind(this);\n  }\n  // Pega a distância de cada item em relação\n  // ao topo do site\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ScrollAnima, [{\n    key: \"getDistance\",\n    value: function getDistance() {\n      var _this = this;\n      this.distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.sections).map(function (section) {\n        var offset = section.offsetTop;\n        return {\n          element: section,\n          offset: Math.floor(offset - _this.windowMetade)\n        };\n      });\n    }\n\n    // Verifica a distância em cada objeto\n    // em relação ao scroll do site\n  }, {\n    key: \"checkDistance\",\n    value: function checkDistance() {\n      this.distance.forEach(function (item) {\n        if (window.scrollY > item.offset) {\n          item.element.classList.add('ativo');\n        } else if (item.element.classList.contains('ativo')) {\n          item.element.classList.remove('ativo');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.sections.length) {\n        this.getDistance();\n        this.checkDistance();\n        window.addEventListener('scroll', this.checkDistance);\n      }\n      return this;\n    }\n\n    // Remove o event de scroll\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      window.removeEventListener('scroll', this.checkDistance);\n    }\n  }]);\n  return ScrollAnima;\n}();\n\n\n//# sourceURL=webpack://olatu/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener('click', _this.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addLinkEvent();\n      }\n      return this;\n    }\n  }]);\n  return ScrollSuave;\n}();\n\n\n//# sourceURL=webpack://olatu/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/text-effect.js":
/*!***********************************!*\
  !*** ./js/modules/text-effect.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ConsoleTextEffect = /*#__PURE__*/function () {\n  function ConsoleTextEffect(elemento, texto, velocidade, onComplete) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ConsoleTextEffect);\n    this.elemento = elemento;\n    this.texto = texto;\n    this.velocidade = velocidade;\n    this.onComplete = onComplete;\n    this.i = 0;\n    this.digitar();\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ConsoleTextEffect, [{\n    key: \"digitar\",\n    value: function digitar() {\n      var _this = this;\n      if (this.i < this.texto.length) {\n        this.elemento.innerHTML += this.texto.charAt(this.i);\n        this.i++;\n        setTimeout(function () {\n          return _this.digitar();\n        }, this.velocidade);\n      } else if (this.onComplete) {\n        this.onComplete();\n      }\n    }\n  }]);\n  return ConsoleTextEffect;\n}(); // Uso com callback para iniciar a animação do <span>\ndocument.addEventListener('DOMContentLoaded', function () {\n  var elementoParaDigitar = document.getElementById('typing');\n  var textoParaDigitar = 'A larga experiência na convergência do mercado financeiro com a economia real é o nosso diferencial.';\n  var velocidadeDeDigitacao = 30; // Velocidade em milissegundos\n  new ConsoleTextEffect(elementoParaDigitar, textoParaDigitar, velocidadeDeDigitacao, function () {\n    // Aqui começa o efeito no <span> após o término do typing\n    var span = document.querySelector('.intro_info span, .slide-content-intro span');\n    span.style.animation = \"fadeInUp 0.5s ease-out\";\n  });\n});\n\n// export default class ConsoleTextEffect {\n//   constructor(words, id, colors) {\n//     if (colors === undefined) colors = ['#fff'];\n\n//     this.visible = true;\n//     this.con = document.getElementById('console');\n//     this.letterCount = 1;\n//     this.x = 1;\n//     this.waiting = false;\n//     this.target = document.getElementById(id);\n//     this.colors = colors;\n\n//     if (this.target) {\n//       this.target.setAttribute('style', 'color:' + this.colors[0]);\n\n//       window.setInterval(() => {\n//         this.updateText(words);\n//       }, 120);\n\n//       window.setInterval(() => {\n//         this.toggleUnderscore();\n//       }, 400);\n//     } else {\n//       console.error(`Target element with ID '${id}' not found. The script will not be executed.`);\n//     }\n//   }\n\n//   updateText(words) {\n//     if (this.letterCount === 0 && !this.waiting) {\n//       this.waiting = true;\n//       this.target.innerHTML = words[0].substring(0, this.letterCount);\n//       window.setTimeout(() => {\n//         const usedColor = this.colors.shift();\n//         this.colors.push(usedColor);\n//         const usedWord = words.shift();\n//         words.push(usedWord);\n//         this.x = 1;\n//         this.target.setAttribute('style', 'color:' + this.colors[0]);\n//         this.letterCount += this.x;\n//         this.waiting = false;\n//       }, 1000);\n//     } else if (this.letterCount === words[0].length + 1 && !this.waiting) {\n//       this.waiting = true;\n//       window.setTimeout(() => {\n//         this.x = -1;\n//         this.letterCount += this.x;\n//         this.waiting = false;\n//       }, 1000);\n//     } else if (!this.waiting) {\n//       this.target.innerHTML = words[0].substring(0, this.letterCount);\n//       this.letterCount += this.x;\n//     }\n//   }\n\n//   toggleUnderscore() {\n//     if (this.visible === true) {\n//       this.con.className = 'console-underscore hidden';\n//       this.visible = false;\n//     } else {\n//       this.con.className = 'console-underscore';\n//       this.visible = true;\n//     }\n//   }\n// }\n\n//# sourceURL=webpack://olatu/./js/modules/text-effect.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_mySwiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mySwiper.js */ \"./js/modules/mySwiper.js\");\n/* harmony import */ var _modules_text_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/text-effect.js */ \"./js/modules/text-effect.js\");\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime=\"scroll\"]');\nscrollAnima.init();\nvar menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\nnew _modules_mySwiper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar targetElement = document.getElementById('typing');\n\n//# sourceURL=webpack://olatu/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://olatu/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;