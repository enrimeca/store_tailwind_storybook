(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{205:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ThemeContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ThemeProvider}));var E_CURSOS_Globant_Tailwind_store_tailwind_store_tailwind_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(206),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),getInitialTheme=function getInitialTheme(){if("undefined"!=typeof window&&window.localStorage){var storedPrefs=window.localStorage.getItem("color-theme");if("string"==typeof storedPrefs)return storedPrefs;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"},ThemeContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),ThemeProvider=function ThemeProvider(_ref){var initialTheme=_ref.initialTheme,children=_ref.children,_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(getInitialTheme),_React$useState2=Object(E_CURSOS_Globant_Tailwind_store_tailwind_store_tailwind_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),theme=_React$useState2[0],setTheme=_React$useState2[1],localSetTheme=function localSetTheme(localTheme){var root=window.document.documentElement,isDark="dark"===localTheme;root.classList.remove(isDark?"light":"dark"),root.classList.add(localTheme),localStorage.setItem("color-theme",localTheme)};return initialTheme&&localSetTheme(initialTheme),react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect((function(){localSetTheme(theme)}),[theme]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ThemeContext.Provider,{value:{theme:theme,setTheme:setTheme},children:children})};ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\context.js"]={name:"ThemeProvider",docgenInfo:ThemeProvider.__docgenInfo,path:"src\\context.js"})},208:function(module){module.exports=JSON.parse('{"title":"EMPRESA","company":"APYREINA EIRL","resume":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, saepe. Explicabo veniam nesciunt ex sint cum eum voluptatem, placeat necessitatibus vitae exercitationem quas rem dicta optio, impedit accusantium, laborum voluptas. Est quisquam perferendis adipisci atque itaque, reprehenderit culpa illum excepturi accusamus obcaecati corporis esse, ducimus nihil odio? Soluta voluptates pariatur, consequuntur minus temporibus, accusamus, perferendis et similique animi ex architecto.  In officiis qui nam dicta maiores sed repellat non deleniti iure. Totam at voluptas ab commodi libero, aperiam molestias pariatur fugit rerum quam quas sapiente possimus. Nostrum fugit ut expedita.  Placeat necessitatibus vitae exercitationem quas rem dicta optio, impedit accusantium, laborum voluptas. Est quisquam perferendis adipisci atque itaque."}')},446:function(module){module.exports=JSON.parse('{"items":["Empresa","Productos","Contacto"]}')},467:function(module,exports,__webpack_require__){__webpack_require__(468),__webpack_require__(623),__webpack_require__(624),__webpack_require__(830),__webpack_require__(831),__webpack_require__(837),__webpack_require__(838),__webpack_require__(835),__webpack_require__(832),__webpack_require__(839),__webpack_require__(840),module.exports=__webpack_require__(827)},535:function(module,exports){},624:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(332)},825:function(module,exports,__webpack_require__){},827:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(332).configure)([__webpack_require__(828),__webpack_require__(829)],module,!1)}).call(this,__webpack_require__(185)(module))},828:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=828},829:function(module,exports,__webpack_require__){var map={"./components/Contact/index.stories.js":841,"./components/Footer/index.stories.js":833,"./components/Nav/index.stories.js":834,"./elements/Hero/index.stories.js":836,"./elements/Product/index.stories.js":842};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=829},833:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));var objectSpread2=__webpack_require__(42),jsx_runtime=(__webpack_require__(0),__webpack_require__(5)),Footer_Footer=function Footer(){return Object(jsx_runtime.jsxs)("footer",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 dark:bg-gray-500 pt-8 pb-16 sm:py-12 text-center",children:[Object(jsx_runtime.jsx)("section",{className:"mt-4",children:Object(jsx_runtime.jsx)("h1",{className:"font-bold text-base dark:text-gray-200",children:"APIREYNA EIRL"})}),Object(jsx_runtime.jsx)("section",{className:"mt-4",children:Object(jsx_runtime.jsx)("address",{className:"font-bold text-base dark:text-gray-200",children:"Dirección: Jr. Larco 456 - Chiclayo"})}),Object(jsx_runtime.jsxs)("section",{className:"flex justify-center mt-4 sm:col-span-2 lg:col-span-1",children:[Object(jsx_runtime.jsx)("figure",{className:"pr-4",children:Object(jsx_runtime.jsx)("img",{className:"h-8",src:"data:image/png;base64,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",alt:"Facebook"})}),Object(jsx_runtime.jsx)("figure",{className:"pr-4",children:Object(jsx_runtime.jsx)("img",{className:"h-8",src:"data:image/png;base64,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",alt:"Instagram"})}),Object(jsx_runtime.jsx)("figure",{className:"pr-4",children:Object(jsx_runtime.jsx)("img",{className:"h-8",src:"data:image/png;base64,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",alt:"Twitter"})})]})]})};Footer_Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};var components_Footer=Footer_Footer;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Footer\\index.jsx"]={name:"Footer",docgenInfo:Footer_Footer.__docgenInfo,path:"src\\components\\Footer\\index.jsx"});__webpack_exports__.default={title:"Components/Footer",component:components_Footer};var Primary=function Template(args){return Object(jsx_runtime.jsx)(components_Footer,Object(objectSpread2.a)({},args))}.bind({});Primary.args={},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Footer {...args} />"}},Primary.parameters)},834:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));var objectSpread2=__webpack_require__(42),react=__webpack_require__(0),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(206),logo=__webpack_require__.p+"static/media/logo.00be77de.png",index_esm=__webpack_require__(284),context=__webpack_require__(205),jsx_runtime=__webpack_require__(5),Toggle_Toggle=function Toggle(){var _React$useContext=react_default.a.useContext(context.a),theme=_React$useContext.theme,setTheme=_React$useContext.setTheme;return Object(jsx_runtime.jsx)("section",{className:"transition duration-500 ease-in-out rounded-full p-2 inline-block align-middle mb-1.5",children:"dark"===theme?Object(jsx_runtime.jsx)(index_esm.b,{onClick:function onClick(){return setTheme("dark"===theme?"light":"dark")},className:"text-yellow-300 text-2xl cursor-pointer"}):Object(jsx_runtime.jsx)(index_esm.a,{onClick:function onClick(){return setTheme("dark"===theme?"light":"dark")},className:"text-gray-900 text-2xl cursor-pointer"})})};Toggle_Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle"};var components_Toggle=Toggle_Toggle;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Toggle\\index.jsx"]={name:"Toggle",docgenInfo:Toggle_Toggle.__docgenInfo,path:"src\\components\\Toggle\\index.jsx"});var Nav_Nav=function Nav(_ref){var options=_ref.options,_useState=Object(react.useState)(!0),_useState2=Object(slicedToArray.a)(_useState,2),hidden=_useState2[0],setHidden=_useState2[1],show=hidden?"hidden":"";return Object(jsx_runtime.jsxs)("nav",{className:"bg-yellow-600 dark:bg-black",children:[Object(jsx_runtime.jsxs)("section",{className:"max-w-7xl mx-auto flex items-center justify-between px-6 py-2",children:[Object(jsx_runtime.jsx)("figure",{className:"flex-shrink-0",children:Object(jsx_runtime.jsx)("img",{className:"h-16",src:logo,alt:"Logo"})}),Object(jsx_runtime.jsxs)("div",{className:"hidden md:block",children:[null==options?void 0:options.map((function(item,index){return Object(jsx_runtime.jsx)("a",{href:"/",className:"item-menu",children:item},index)})),Object(jsx_runtime.jsx)(components_Toggle,{})]}),Object(jsx_runtime.jsx)("button",{type:"button",className:"flex md:hidden collapse-btn",onClick:function toggleMenu(event){event.preventDefault(),setHidden(!hidden)},"aria-label":"open menu",children:Object(jsx_runtime.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),Object(jsx_runtime.jsx)("section",{className:"md:hidden ".concat(show),children:Object(jsx_runtime.jsxs)("ul",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[null==options?void 0:options.map((function(item,index){return Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)("a",{href:"/",className:"item-menu block",children:item})},index)})),Object(jsx_runtime.jsx)(components_Toggle,{})]})})]})};Nav_Nav.__docgenInfo={description:"",methods:[],displayName:"Nav"};var components_Nav=Nav_Nav;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Nav\\index.jsx"]={name:"Nav",docgenInfo:Nav_Nav.__docgenInfo,path:"src\\components\\Nav\\index.jsx"});var menu=__webpack_require__(446),Primary=(__webpack_exports__.default={title:"Component/Nav",component:components_Nav},function Template(args){return Object(jsx_runtime.jsx)(components_Nav,Object(objectSpread2.a)({},args))}.bind({}));Primary.args={options:menu.items},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Nav {...args} />"}},Primary.parameters)},836:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));var objectSpread2=__webpack_require__(42),bees=(__webpack_require__(0),__webpack_require__.p+"static/media/bees.35144c3a.jpg"),jsx_runtime=__webpack_require__(5),Hero_Hero=function Hero(_ref){var title=_ref.title,company=_ref.company,resume=_ref.resume;return Object(jsx_runtime.jsxs)("section",{className:"md:flex mx-auto overflow-hidden max-w-7xl bg-white dark:bg-gray-900",children:[Object(jsx_runtime.jsx)("figure",{className:"md:flex-shrink-0 my-auto",children:Object(jsx_runtime.jsx)("img",{className:"h-96 w-full object-cover md:w-80",src:bees,alt:"Bees"})}),Object(jsx_runtime.jsxs)("article",{className:"p-8",children:[Object(jsx_runtime.jsx)("h1",{className:"section-title text-left",children:title}),Object(jsx_runtime.jsx)("h2",{className:"block mt-1 text-lg leading-tight font-medium text-black dark:text-gray-300",children:company}),Object(jsx_runtime.jsx)("p",{className:"mt-2 text-gray-900 dark:text-gray-200 text-justify",children:resume})]})]})};Hero_Hero.__docgenInfo={description:"",methods:[],displayName:"Hero"};var elements_Hero=Hero_Hero;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\elements\\Hero\\index.jsx"]={name:"Hero",docgenInfo:Hero_Hero.__docgenInfo,path:"src\\elements\\Hero\\index.jsx"});var organization=__webpack_require__(208),Primary=(__webpack_exports__.default={title:"Elements/Hero",component:elements_Hero},function Template(args){return Object(jsx_runtime.jsx)(elements_Hero,Object(objectSpread2.a)({},args))}.bind({}));Primary.args={title:organization.title,company:organization.company,resume:organization.resume},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Hero {...args} />"}},Primary.parameters)},840:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));var client_api=__webpack_require__(847),esm=__webpack_require__(6),objectSpread2=__webpack_require__(42),src_context=(__webpack_require__(825),__webpack_require__(205)),jsx_runtime=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators=[function withThemeProvider(Story,context){return Object(jsx_runtime.jsx)(src_context.b,{theme:"light",children:Object(jsx_runtime.jsx)(Story,Object(objectSpread2.a)({},context))})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},841:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));var objectSpread2=__webpack_require__(42),jsx_runtime=(__webpack_require__(0),__webpack_require__(5)),Contact_Contact=function Contact(){return Object(jsx_runtime.jsx)("section",{className:"bg-white dark:bg-gray-900",children:Object(jsx_runtime.jsxs)("section",{className:"mx-6 md:mx-16 lg:mx-auto py-3 max-w-4xl",children:[Object(jsx_runtime.jsx)("h1",{className:"section-title mt-12",children:"Contacto"}),Object(jsx_runtime.jsxs)("form",{action:"",children:[Object(jsx_runtime.jsxs)("label",{htmlFor:"name",children:[Object(jsx_runtime.jsx)("span",{className:"font-bold dark:text-gray-200",children:"NOMBRES"}),Object(jsx_runtime.jsx)("input",{className:"form-control",type:"text",placeholder:"Nombres",id:"name"})]}),Object(jsx_runtime.jsxs)("label",{htmlFor:"email",children:[Object(jsx_runtime.jsx)("span",{className:"font-bold dark:text-gray-200",children:"EMAIL"}),Object(jsx_runtime.jsx)("input",{className:"form-control",type:"email",placeholder:"Correo electrónico",id:"email"})]}),Object(jsx_runtime.jsxs)("label",{htmlFor:"comment",children:[Object(jsx_runtime.jsx)("span",{className:"font-bold dark:text-gray-200",children:"COMENTARIOS"}),Object(jsx_runtime.jsx)("textarea",{className:"form-control",name:"",cols:"30",rows:"10",id:"comment"})]}),Object(jsx_runtime.jsx)("button",{className:"block bg-red-600 hover:bg-red-800 text-white font-medium uppercase text-base tracking-widest mx-auto py-2 px-4 rounded my-4",type:"submit",children:"Enviar"})]})]})})};Contact_Contact.__docgenInfo={description:"",methods:[],displayName:"Contact"};var components_Contact=Contact_Contact;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Contact\\index.jsx"]={name:"Contact",docgenInfo:Contact_Contact.__docgenInfo,path:"src\\components\\Contact\\index.jsx"});__webpack_exports__.default={title:"Components/Contact",component:components_Contact};var Primary=function Template(args){return Object(jsx_runtime.jsx)(components_Contact,Object(objectSpread2.a)({},args))}.bind({});Primary.args={},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Contact {...args} />"}},Primary.parameters)},842:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));var objectSpread2=__webpack_require__(42),jsx_runtime=(__webpack_require__(0),__webpack_require__(5)),Product_Product=function Product(_ref){var name=_ref.name,image=_ref.image,description=_ref.description;return Object(jsx_runtime.jsxs)("section",{className:"max-w-xs rounded-lg overflow-hidden shadow-lg my-4 mx-auto bg-white",children:[Object(jsx_runtime.jsx)("img",{className:"h-72 w-full",src:image,alt:name}),Object(jsx_runtime.jsxs)("article",{className:"px-6 py-4",children:[Object(jsx_runtime.jsx)("p",{className:"text-lg text-black font-semibold",children:name}),Object(jsx_runtime.jsx)("p",{className:"text-gray-500 font-medium",children:description})]})]})};Product_Product.__docgenInfo={description:"",methods:[],displayName:"Product"};var elements_Product=Product_Product;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\elements\\Product\\index.jsx"]={name:"Product",docgenInfo:Product_Product.__docgenInfo,path:"src\\elements\\Product\\index.jsx"});__webpack_exports__.default={title:"Element/Product",component:elements_Product};var Primary=function Template(args){return Object(jsx_runtime.jsx)(elements_Product,Object(objectSpread2.a)({},args))}.bind({});Primary.args={name:"Miel",image:"/images/miel.jpg",description:"Explicabo veniam nesciunt ex sint cum eum voluptatem, placeat necessitatibus vitae exercitationem quas rem dicta optio."},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Product {...args} />"}},Primary.parameters)}},[[467,2,3]]]);