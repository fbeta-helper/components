<<<<<<< HEAD
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("i18next"),t=require("i18next-browser-languagedetector"),i=require("tslib"),a=require("react/jsx-runtime"),n=require("react"),l=require("classnames"),s=require("antd"),r=require("@babel/runtime/helpers/esm/extends"),o=require("@babel/runtime/helpers/esm/inheritsLoose"),d=require("@babel/runtime/helpers/esm/assertThisInitialized");require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");var c=require("react-dom"),u=require("react-spring"),h=require("react-table"),v=require("react-sortable-hoc"),g=require("react-table-sticky"),f=require("uuid"),p=require("lodash"),m=require("lodash/map"),x=require("lodash/values"),b=require("lodash/toNumber"),j=require("lodash/get"),w=require("rc-rate"),y=require("react-toastify");function k(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("react-toastify/dist/ReactToastify.css");var O=k(e),_=k(t),C=k(n),N=k(l),S=k(r),z=k(o),T=k(d),I=k(c),M=k(m),R=k(x),L=k(b),E=k(j),D=k(w),B={table:{showHideColumn:"Show/Hide column",searchPlaceholder:"Search",showAllText:"Show all"},vote:{headerRate:"Rate",cancleText:"Cancel",okText:"Rate",label:"Note",enterPlaceholderDescription:"Enter your opinion",scoreLabel:"Weighted score",enterNumberError:"Please enter number",maxError:"Total not more than 100%",taskRate:"Rating settings",overallRate:"Overall rating",specificRate:"Criteria-based rating",setCriteriaAndWeights:"Crtieria and weight settings",uniformWeight:"Equal weight",weightSetting:"Customized weight",addCriteria:"Add criterion",labelWeited:"Wieghted score (%)",labelDescription:"Description",placeholderEnterDescription:"Please input your description",placeholderLabel:"Please input your label"}},P={table:{showHideColumn:"Hiện/Ẩn cột",searchPlaceholder:"Tìm kiếm",showAllText:"Hiện tất cả"},vote:{headerRate:"Đánh giá công việc",cancleText:"Hủy bỏ",okText:"Đánh giá",label:"Mô tả",enterPlaceholderDescription:"Vui lòng nhập mô tả",scoreLabel:"Điểm đánh giá tổng quan",enterNumberError:"Vui lòng nhập số",maxError:"Tổng không quá 100%",taskRate:"Đánh giá công việc",overallRate:"Đánh giá tổng quan",specificRate:"Đánh giá theo tiêu chí cụ thể",setCriteriaAndWeights:"Thiết lập tiêu chí và trọng số",uniformWeight:"Thiết lập tiêu chí và trọng số",weightSetting:"Tùy chỉnh trọng số",addCriteria:"Thêm tiêu chí",placeholderLabel:"Vui lòng nhập nhãn",labelWeited:"Trọng số (%)",labelDescription:"Mô tả",placeholderEnterDescription:"Vui lòng nhập mô tả"}};O.default.use(_.default).init({resources:{en:B,vi:P},detection:{order:["localStorage"],lookupLocalStorage:"lng"},fallbackLng:"vi",interpolation:{escapeValue:!1},react:{wait:!0}});const H=e=>{var{color:t="#fff",className:n,styles:l={}}=e,s=i.__rest(e,["color","className","styles"]);return a.jsx("span",Object.assign({className:N.default("fwork-loader",n),style:Object.assign({color:t},l)},s,{children:a.jsx("svg",Object.assign({className:"fwork-loader-circular-loader",viewBox:"25 25 50 50"},{children:a.jsx("circle",{className:"fwork-loader-loader-path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"#fff",strokeWidth:"2"},void 0)}),void 0)}),void 0)},A=n.forwardRef(((e,t)=>{const{size:l="medium",variant:s="default",icon:r,className:o,disabled:d,block:c,children:u,loading:h,onClick:v}=e,g=i.__rest(e,["size","variant","icon","className","disabled","block","children","loading","onClick"]),f="link"===s?"a":"button";return a.jsx(f,Object.assign({ref:t,className:N.default("fwork-button",{"fwork-default-button":"default"===s,"fwork-primary-button":"primary"===s,"fwork-secondary-button":"secondary"===s,"fwork-dashed-button":"dashed"===s,"fwork-link-button":"link"===s,"fwork-danger-button":"danger"===s,[`fwork-${l}-button`]:Boolean(l),"fwork-block-button":c,"fwork-loading-button":h,"fwork-disabled-button":d,"fwork-icon-only-button":r&&!u},o),onClick:e=>{h||d||v&&v(e)}},g,{children:h?a.jsx(H,{color:"primary"===s?"#fff":"#172b4d"},void 0):a.jsxs(a.Fragment,{children:[r?a.jsx("span",Object.assign({style:{marginRight:u&&(n.isValidElement(u)||"string"==typeof u)?6:0,display:"inline-flex",alignItems:"center"}},{children:r}),void 0):null,a.jsx("span",{children:u},void 0)]},void 0)}),void 0)})),F=n.forwardRef(((e,t)=>{var{style:n,className:l="",variant:s="paragraph",children:r}=e,o=i.__rest(e,["style","className","variant","children"]);const d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",important:"strong",paragraph:"p",caption:"span",sub1:"span",sub2:"span",link:"a"}[s];return a.jsx(d,Object.assign({ref:t,className:N.default("fwork-text",{"fwork-text-h1":"h1"===s,"fwork-text-h2":"h2"===s,"fwork-text-h3":"h3"===s,"fwork-text-h4":"h4"===s,"fwork-text-important":"important"===s,"fwork-text-paragraph":"paragraph"===s,"fwork-text-caption":"caption"===s,"fwork-text-sub1":"sub1"===s,"fwork-text-sub2":"sub2"===s,"fwork-text-link":"link"===s},l),style:n},o,{children:r}),void 0)}));var q={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V=C.default.createContext&&C.default.createContext(q),$=function(){return $=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},$.apply(this,arguments)},W=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(i[a[n]]=e[a[n]])}return i};function K(e){return e&&e.map((function(e,t){return C.default.createElement(e.tag,$({key:t},e.attr),K(e.child))}))}function U(e){return function(t){return C.default.createElement(Y,$({attr:$({},e.attr)},t),K(e.child))}}function Y(e){var t=function(t){var i,a=e.attr,n=e.size,l=e.title,s=W(e,["attr","size","title"]),r=n||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),C.default.createElement("svg",$({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:i,style:$($({color:e.color||t.color},t.style),e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),l&&C.default.createElement("title",null,l),e.children)};return void 0!==V?C.default.createElement(V.Consumer,null,(function(e){return t(e)})):t(q)}function Z(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function G(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]})(e)}function X(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]})(e)}function J(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}const Q=n.forwardRef(((e,t)=>{var{style:l,className:r="",disabled:o=!1,placeholder:d="",label:c="",help:u="",type:h="text",required:v=!1,validateStatus:g="",icon:f,tooltipTitle:p=null,preIcon:m=null}=e,x=i.__rest(e,["style","className","disabled","placeholder","label","help","type","required","validateStatus","icon","tooltipTitle","preIcon"]);const[b,j]=n.useState(!1);return a.jsxs("div",Object.assign({className:N.default("fwork-input-wrapper",r),style:l},{children:[c?a.jsxs("label",Object.assign({className:"fwork-input-label"},{children:[c," ",v?a.jsx("span",Object.assign({className:"fwork-input-required"},{children:"*"}),void 0):null,p&&a.jsx(s.Tooltip,Object.assign({title:p},{children:a.jsx(G,{style:{marginLeft:8}},void 0)}),void 0)]}),void 0):null,a.jsxs("div",Object.assign({className:N.default("fwork-input-wrapper-input",{"fwork-wrapper-input-disabled":o,"fwork-wrapper-input-focus":b,[`fwork-wrapper-input-${g}`]:Boolean(g)})},{children:[m&&m,a.jsx("input",Object.assign({ref:t,className:N.default("fwork-input"),disabled:o,placeholder:d,onFocus:()=>j(!0),onBlur:()=>j(!1),type:h},x),void 0),a.jsx("div",Object.assign({style:{width:20,display:"flex",alignItems:"center",justifyContent:"flex-end"}},{children:f||null}),void 0)]}),void 0),u?a.jsx("span",Object.assign({className:"fwork-input-help"},{children:u}),void 0):null]}),void 0)})),ee=n.forwardRef(((e,t)=>{var{style:n,className:l="",disabled:s=!1,placeholder:r="",label:o="",help:d="",required:c=!1,service:u="",rows:h=3,cols:v=30,validateStatus:g=""}=e,f=i.__rest(e,["style","className","disabled","placeholder","label","help","required","service","rows","cols","validateStatus"]);return a.jsxs("div",Object.assign({className:N.default("fwork-textarea-wrapper",l),style:n},{children:[o?a.jsxs("label",Object.assign({className:"fwork-textarea-label"},{children:[o," ",c?a.jsx("span",Object.assign({className:"fwork-textarea-required"},{children:"*"}),void 0):null]}),void 0):null,a.jsx("textarea",Object.assign({ref:t,className:N.default("fwork-textarea",{"fwork-textarea-disabled":s,[`fwork-textarea-${g}`]:Boolean(g)}),disabled:s,placeholder:r,rows:h,cols:v},f),void 0),d?a.jsx("span",Object.assign({className:"fwork-textarea-help"},{children:d}),void 0):null]}),void 0)})),te=({className:e,style:t,children:i,span:n})=>a.jsx("div",Object.assign({className:N.default({container:!Boolean(n),[`container-${n}`]:Boolean(n)},e),style:t},{children:i}),void 0),ie=({className:e,style:t,children:i,gutters:n})=>{let l={};return n&&n.length&&n[0]&&(l[`gx-${n[0]}`]=!0),n&&n.length&&n[1]&&(l[`gy-${n[1]}`]=!0),a.jsx("div",Object.assign({className:N.default("row",Object.assign({},l),e),style:t},{children:i}),void 0)},ae=({className:e,style:t,children:i,span:n,xs:l,sm:s,md:r,lg:o,xl:d,xxl:c})=>a.jsx("div",Object.assign({className:N.default({[`col-${n}`]:Boolean(n),[`col-xs-${l}`]:Boolean(l),[`col-sm-${s}`]:Boolean(s),[`col-md-${r}`]:Boolean(r),[`col-lg-${o}`]:Boolean(o),[`col-xl-${d}`]:Boolean(d),[`col-xxl-${c}`]:Boolean(c)},e),style:t},{children:i}),void 0);function ne(e){return U({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(e)}function le(e){return U({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}}]})(e)}function se(e){return U({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(e)}const re=(e,t,i)=>{if(!t)return;const a=Array.isArray(t)?t:t.match(/([^[.\]])+/g),n=a&&a.includes("length"),l=a.reduce(((e,t)=>e&&e[t]),e);return[0,"0"].includes(l)&&!n?l:l||i},oe=e=>!!Array.isArray(e),de=({className:e,size:t="medium",paragraph:i,style:n,width:l,height:s,rounded:r})=>i&&i.rows?a.jsx("div",Object.assign({className:N.default("fwork-skeleton--paragraph",e)},{children:Array.from({length:i.rows}).map((i=>a.jsx("div",{className:N.default("fwork-skeleton",{[`fwork-skeleton-${t}`]:Boolean(t),"fwork-skeleton-rounded":r},e),style:Object.assign({width:l,height:s},n)},void 0)))}),void 0):a.jsx("div",{className:N.default("fwork-skeleton",{[`fwork-skeleton-${t}`]:Boolean(t),"fwork-skeleton-rounded":r},e),style:Object.assign(Object.assign({},n),{width:l,height:s})},void 0);var ce=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function ue(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(a=e[i],n=t[i],!(a===n||ce(a)&&ce(n)))return!1;var a,n;return!0}function he(e,t){var i;void 0===t&&(t=ue);var a,n=[],l=!1;return function(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];return l&&i===this&&t(s,n)||(a=e.apply(this,s),l=!0,i=this,n=s),a}}var ve="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function ge(e){cancelAnimationFrame(e.id)}var fe=null;function pe(e){if(void 0===e&&(e=!1),null===fe||e){var t=document.createElement("div"),i=t.style;i.width="50px",i.height="50px",i.overflow="scroll",i.direction="rtl";var a=document.createElement("div"),n=a.style;return n.width="100px",n.height="100px",t.appendChild(a),document.body.appendChild(t),t.scrollLeft>0?fe="positive-descending":(t.scrollLeft=1,fe=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),fe}return fe}process.env.NODE_ENV;var me=function(e,t){return e},xe=null,be=null;function je(e){var t,i,a=e.getItemOffset,l=e.getEstimatedTotalSize,s=e.getItemSize,r=e.getOffsetForIndexAndAlignment,o=e.getStartIndexForOffset,d=e.getStopIndexForStartIndex,c=e.initInstanceProps,u=e.shouldResetStyleCacheOnItemSizeChange,h=e.validateProps;return i=t=function(e){function t(t){var i;return(i=e.call(this,t)||this)._instanceProps=c(i.props,T.default(T.default(i))),i._outerRef=void 0,i._resetIsScrollingTimeoutId=null,i.state={instance:T.default(T.default(i)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof i.props.initialScrollOffset?i.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},i._callOnItemsRendered=void 0,i._callOnItemsRendered=he((function(e,t,a,n){return i.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:a,visibleStopIndex:n})})),i._callOnScroll=void 0,i._callOnScroll=he((function(e,t,a){return i.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:a})})),i._getItemStyle=void 0,i._getItemStyle=function(e){var t,n=i.props,l=n.direction,r=n.itemSize,o=n.layout,d=i._getItemStyleCache(u&&r,u&&o,u&&l);if(d.hasOwnProperty(e))t=d[e];else{var c=a(i.props,e,i._instanceProps),h=s(i.props,e,i._instanceProps),v="horizontal"===l||"horizontal"===o,g="rtl"===l,f=v?c:0;d[e]=t={position:"absolute",left:g?void 0:f,right:g?f:void 0,top:v?0:c,height:v?"100%":h,width:v?h:"100%"}}return t},i._getItemStyleCache=void 0,i._getItemStyleCache=he((function(e,t,i){return{}})),i._onScrollHorizontal=function(e){var t=e.currentTarget,a=t.clientWidth,n=t.scrollLeft,l=t.scrollWidth;i.setState((function(e){if(e.scrollOffset===n)return null;var t=i.props.direction,s=n;if("rtl"===t)switch(pe()){case"negative":s=-n;break;case"positive-descending":s=l-a-n}return s=Math.max(0,Math.min(s,l-a)),{isScrolling:!0,scrollDirection:e.scrollOffset<n?"forward":"backward",scrollOffset:s,scrollUpdateWasRequested:!1}}),i._resetIsScrollingDebounced)},i._onScrollVertical=function(e){var t=e.currentTarget,a=t.clientHeight,n=t.scrollHeight,l=t.scrollTop;i.setState((function(e){if(e.scrollOffset===l)return null;var t=Math.max(0,Math.min(l,n-a));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),i._resetIsScrollingDebounced)},i._outerRefSetter=function(e){var t=i.props.outerRef;i._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},i._resetIsScrollingDebounced=function(){var e,t,a,n;null!==i._resetIsScrollingTimeoutId&&ge(i._resetIsScrollingTimeoutId),i._resetIsScrollingTimeoutId=(e=i._resetIsScrolling,t=150,a=ve(),n={id:requestAnimationFrame((function i(){ve()-a>=t?e.call(null):n.id=requestAnimationFrame(i)}))})},i._resetIsScrolling=function(){i._resetIsScrollingTimeoutId=null,i.setState({isScrolling:!1},(function(){i._getItemStyleCache(-1,null)}))},i}z.default(t,e),t.getDerivedStateFromProps=function(e,t){return we(e,t),h(e),null};var i=t.prototype;return i.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},i.scrollToItem=function(e,t){void 0===t&&(t="auto");var i=this.props.itemCount,a=this.state.scrollOffset;e=Math.max(0,Math.min(e,i-1)),this.scrollTo(r(this.props,e,t,a,this._instanceProps))},i.componentDidMount=function(){var e=this.props,t=e.direction,i=e.initialScrollOffset,a=e.layout;if("number"==typeof i&&null!=this._outerRef){var n=this._outerRef;"horizontal"===t||"horizontal"===a?n.scrollLeft=i:n.scrollTop=i}this._callPropsCallbacks()},i.componentDidUpdate=function(){var e=this.props,t=e.direction,i=e.layout,a=this.state,n=a.scrollOffset;if(a.scrollUpdateWasRequested&&null!=this._outerRef){var l=this._outerRef;if("horizontal"===t||"horizontal"===i)if("rtl"===t)switch(pe()){case"negative":l.scrollLeft=-n;break;case"positive-ascending":l.scrollLeft=n;break;default:var s=l.clientWidth,r=l.scrollWidth;l.scrollLeft=r-s-n}else l.scrollLeft=n;else l.scrollTop=n}this._callPropsCallbacks()},i.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&ge(this._resetIsScrollingTimeoutId)},i.render=function(){var e=this.props,t=e.children,i=e.className,a=e.direction,s=e.height,r=e.innerRef,o=e.innerElementType,d=e.innerTagName,c=e.itemCount,u=e.itemData,h=e.itemKey,v=void 0===h?me:h,g=e.layout,f=e.outerElementType,p=e.outerTagName,m=e.style,x=e.useIsScrolling,b=e.width,j=this.state.isScrolling,w="horizontal"===a||"horizontal"===g,y=w?this._onScrollHorizontal:this._onScrollVertical,k=this._getRangeToRender(),O=k[0],_=k[1],C=[];if(c>0)for(var N=O;N<=_;N++)C.push(n.createElement(t,{data:u,key:v(N,u),index:N,isScrolling:x?j:void 0,style:this._getItemStyle(N)}));var z=l(this.props,this._instanceProps);return n.createElement(f||p||"div",{className:i,onScroll:y,ref:this._outerRefSetter,style:S.default({position:"relative",height:s,width:b,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},m)},n.createElement(o||d||"div",{children:C,ref:r,style:{height:w?"100%":z,pointerEvents:j?"none":void 0,width:w?z:"100%"}}))},i._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],i=e[1],a=e[2],n=e[3];this._callOnItemsRendered(t,i,a,n)}if("function"==typeof this.props.onScroll){var l=this.state,s=l.scrollDirection,r=l.scrollOffset,o=l.scrollUpdateWasRequested;this._callOnScroll(s,r,o)}},i._getRangeToRender=function(){var e=this.props,t=e.itemCount,i=e.overscanCount,a=this.state,n=a.isScrolling,l=a.scrollDirection,s=a.scrollOffset;if(0===t)return[0,0,0,0];var r=o(this.props,s,this._instanceProps),c=d(this.props,r,s,this._instanceProps),u=n&&"backward"!==l?1:Math.max(1,i),h=n&&"forward"!==l?1:Math.max(1,i);return[Math.max(0,r-u),Math.max(0,Math.min(t-1,c+h)),r,c]},t}(n.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},i}"production"!==process.env.NODE_ENV&&"undefined"!=typeof window&&void 0!==window.WeakSet&&(xe=new WeakSet,be=new WeakSet);var we=function(e,t){var i=e.children,a=e.direction,n=e.height,l=e.layout,s=e.innerTagName,r=e.outerTagName,o=e.width,d=t.instance;if("production"!==process.env.NODE_ENV){null==s&&null==r||be&&!be.has(d)&&(be.add(d),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var c="horizontal"===a||"horizontal"===l;switch(a){case"horizontal":case"vertical":xe&&!xe.has(d)&&(xe.add(d),console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));break;case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". "'+a+'" was specified.')}switch(l){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". "'+l+'" was specified.')}if(null==i)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===i?"null":typeof i)+'" was specified.');if(c&&"number"!=typeof o)throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. "'+(null===o?"null":typeof o)+'" was specified.');if(!c&&"number"!=typeof n)throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. "'+(null===n?"null":typeof n)+'" was specified.')}},ye=je({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,i,a){var n=e.direction,l=e.height,s=e.itemCount,r=e.itemSize,o=e.layout,d=e.width,c="horizontal"===n||"horizontal"===o?d:l,u=Math.max(0,s*r-c),h=Math.min(u,t*r),v=Math.max(0,t*r-c+r);switch("smart"===i&&(i=a>=v-c&&a<=h+c?"auto":"center"),i){case"start":return h;case"end":return v;case"center":var g=Math.round(v+(h-v)/2);return g<Math.ceil(c/2)?0:g>u+Math.floor(c/2)?u:g;default:return a>=v&&a<=h?a:a<v?v:h}},getStartIndexForOffset:function(e,t){var i=e.itemCount,a=e.itemSize;return Math.max(0,Math.min(i-1,Math.floor(t/a)))},getStopIndexForStartIndex:function(e,t,i){var a=e.direction,n=e.height,l=e.itemCount,s=e.itemSize,r=e.layout,o=e.width,d=t*s,c="horizontal"===a||"horizontal"===r?o:n,u=Math.ceil((c+i-d)/s);return Math.max(0,Math.min(l-1,t+u-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.itemSize;if("production"!==process.env.NODE_ENV&&"number"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.')}});const ke=!("undefined"==typeof window||!window.document||!window.document.createElement),Oe=({node:e,children:t,id:i,className:a,isStatic:l=!1})=>{if(l)return t;const s=n.useRef(null);return n.useEffect((()=>()=>{s.current&&document.body.removeChild(s.current),s.current=null}),[]),ke?(e||s.current||(s.current=document.createElement("div"),s.current.className=a,s.current.id=i||"portal",document.body.appendChild(s.current)),I.default.createPortal(t,e||s.current)):null};function _e(e,t){n.useEffect((()=>{const i=i=>{e.current&&!e.current.contains(i.target)&&t(i)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}}),[e,t])}const Ce=({placeholder:e,value:t,disabled:i=!1,inputDisabled:n=!1,onChange:l,centerText:s})=>a.jsx("input",{className:N.default("fwork-select__input",{"fwork-select__input-disabled":i||n,"fwork-select__input-center":s}),placeholder:e,value:t,style:{minWidth:"1px"},onChange:e=>!i&&l&&l(e),disabled:n},void 0);function Ne(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M416 128L192 384l-96-96"}}]})(e)}function Se(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}function ze(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}const Te=({weight:e,removable:t,removeIcon:i,label:l,style:s,addText:r="New tag",variant:o="default",add:d,onAdd:c,color:u,background:h,onRemove:v,className:g})=>{const[f,p]=n.useState(!1),[m,x]=n.useState(""),b=n.useRef(null),j=n.useRef();_e(b,(()=>{p(!1)}));return n.useEffect((()=>{var e;f?null===(e=j.current)||void 0===e||e.focus():x("")}),[f]),a.jsxs("div",Object.assign({ref:b,style:Object.assign(Object.assign({},s),{color:u?`${u} !important`:"",backgroundColor:h?`${h} !important`:""}),className:N.default(g,"fwork__tag-wrapper","fwork__tag-default",{[`fwork__tag-${e}-${o}`]:Boolean(o)&&Boolean(e),"fwork__tag-weight":Boolean(e),"fwork__tag-add":d&&!f,"fwork__tag-typing":f})},{children:[d&&!f?a.jsx(ze,{style:{marginRight:4,cursor:"pointer"},onClick:()=>p(!0)},void 0):null,d||f?null:a.jsx("div",{children:l},void 0),d&&!f?a.jsx("div",Object.assign({style:{cursor:"pointer"},onClick:()=>p(!0)},{children:r}),void 0):null,f?a.jsx("input",{className:"fwork__tag-input",onKeyUp:e=>{"Enter"!==e.key&&13!==e.keyCode||(c&&c(m),p(!1)),"Escape"!==e.key&&27!==e.keyCode||p(!1)},onChange:e=>x(e.target.value),ref:j},void 0):null,!t||d||f?null:a.jsx("div",Object.assign({className:"fwork__tag-remove-icon",onClick:e=>{e.stopPropagation(),v&&v()}},{children:i||a.jsx(Se,{},void 0)}),void 0)]}),void 0)};function Ie(e){return Array.isArray(e)?Boolean(e.length):!(![0,"0"].includes(e)&&!e)}const Me=e=>{var{className:t,item:n,showAvatar:l,showDescription:s,style:r,labelKey:o,isSelected:d,selectedDisplay:c,checkbox:u,onCheckboxChange:h}=e,v=i.__rest(e,["className","item","showAvatar","showDescription","style","labelKey","isSelected","selectedDisplay","checkbox","onCheckboxChange"]);return a.jsxs("div",Object.assign({className:N.default("fwork-select-option",t)},v,{children:[u?a.jsx("input",{type:"checkbox",style:{marginRight:"6px",transform:"translateY(-1px)"},checked:d,onChange:e=>h&&h(e.target.checked)},void 0):null,l?a.jsx("img",{src:n&&n.avatar,alt:"avatar",className:"fwork-select-option__avatar"},void 0):null,a.jsxs("div",Object.assign({className:"fwork-select-option__info-wrapper"},{children:[a.jsx("span",Object.assign({className:"fwork-select-option__label"},{children:re(n,o,"")}),void 0),s?a.jsx("span",Object.assign({className:"fwork-select-option__description"},{children:n&&n.description}),void 0):null]}),void 0),d&&((null==c?void 0:c.includes("tick"))||"tick"===c)?a.jsx(Ne,{style:{marginLeft:"auto",marginRight:"3px",color:"#388e3c"}},void 0):null]}),void 0)},Re=e=>{var{centerText:t,quickCreate:l,onQuickCreate:s,quickCreateContent:r="Tạo nhanh",itemStyle:o,contentStyle:d,listStyle:c,listExtra:u,ghost:h,suffix:v,customResultRender:g,selectedDisplay:f="background",multiple:p,checkbox:m,closeOnSelect:x=!0,data:b,onChange:j,onSearch:w,renderItem:y,valueKey:k,labelKey:O,value:_,defaultNumItem:C=3,loading:S=!1,searchable:z=!1,disabled:T=!1,showAvatar:I=!1,showDescription:M=!1,label:R="",help:L="",required:E=!1,validateStatus:D="",placeholder:B,mode:P,customClassName:H}=e,A=i.__rest(e,["centerText","quickCreate","onQuickCreate","quickCreateContent","itemStyle","contentStyle","listStyle","listExtra","ghost","suffix","customResultRender","selectedDisplay","multiple","checkbox","closeOnSelect","data","onChange","onSearch","renderItem","valueKey","labelKey","value","defaultNumItem","loading","searchable","disabled","showAvatar","showDescription","label","help","required","validateStatus","placeholder","mode","customClassName"]);const[F,q]=n.useState(_||null),[V,$]=n.useState(""),[W,K]=n.useState(!1),[U,Y]=n.useState({}),Z=n.useRef(null),G=n.useRef(0),X=n.useRef(I?48:32),J=(e,t,i=!1)=>{e&&e.stopPropagation();let a=t;if(k&&(a=re(t,k,null)),p)if(i)a=null==F?void 0:F.filter((e=>re(e,k,e)!==re(t,k,t)));else{a=(null==F?void 0:F.find((e=>re(e,k,e)===re(t,k,t))))?null==F?void 0:F.filter((e=>re(e,k,e)!==re(t,k,t))):[...F,t]}else i?(a=null,q(null)):(q(t),$(""));j&&j(a),x&&K(!1)},Q=n.useMemo((()=>V?b.filter((e=>w?w(V,e):re(e,O).toLowerCase().includes(V.toLowerCase()))):b),[V,b]);n.useEffect((()=>{if(re(b,"length",0)&&Ie(_))if(oe(_)){const e=_.map((e=>b.find((t=>re(t,k,t)===re(e,k,e))))).filter((e=>e));q(e)}else{const e=b.find((e=>re(e,k,e)===re(_,k,_)));q(e)}else q(p?[]:null)}),[_,b]);const ee=()=>l?a.jsx("div",Object.assign({className:"fwork-select__quick-create",onClick:()=>s&&s()},{children:r}),void 0):null;_e(Z,(e=>{e.target.closest("#portal")||K(!1)}));const te=n.useMemo((()=>{if(S)return a.jsx("div",Object.assign({style:{marginTop:-16}},{children:a.jsx(de,{width:"100%",size:"medium",paragraph:{rows:C}},void 0)}),void 0)}),[S]);return a.jsxs("div",Object.assign({className:N.default("fwork-select",{open:W,[`fwork-select-${D}`]:Boolean(D)}),onClick:()=>{if(!T&&"undefined"!=typeof window){if(!Z||!Z.current)return;const e={},t=Z.current.getBoundingClientRect();e.width=t.width,G.current=t.width,e.left=t.left+t.width/2-e.width/2,e.left=Math.max(e.left),e.left=Math.min(e.left,document.body.clientWidth-e.width),t.top<window.innerHeight/2?e.top=t.top+t.height:e.bottom=window.innerHeight-t.top,K(!0),Y(e)}},ref:Z,style:Object.assign(Object.assign({},A.style),U)},{children:[R?a.jsxs("label",Object.assign({className:"fwork-select-label"},{children:[R," ",E?a.jsx("span",Object.assign({className:"fwork-input-required"},{children:"*"}),void 0):null]}),void 0):null,a.jsxs("div",Object.assign({className:N.default("fwork-select__input-wrapper",{"fwork-select__ghost":h}),style:d},{children:[p?(()=>{var e;return g||("tags"===P?a.jsx("div",Object.assign({className:"fwork-select__multiple-selection"},{children:null==F?void 0:F.map((e=>a.jsx(Te,{style:{marginRight:6},label:re(e,O,0),removable:!0,onRemove:()=>J(null,e,!0)},void 0)))}),void 0):(null==F?void 0:F.length)?a.jsx("div",Object.assign({className:"fwork-select__truncate"},{children:null===(e=null==F?void 0:F.map((e=>re(e,O,0))))||void 0===e?void 0:e.join(",")}),void 0):null)})():null,a.jsx(Ce,{placeholder:Ie(F)?p?V:re(F,O):B,centerText:t,value:z&&W?V:Ie(re(F,O))?g||re(F,O):"",onChange:e=>{$(e.target.value)},disabled:!z,inputDisabled:T},void 0),v?a.jsx("div",Object.assign({className:"fwork-select__input-suffix"},{children:v}),void 0):a.jsx(ne,{size:16,className:"fwork-select__input-icon"},void 0)]}),void 0),L?a.jsx("span",Object.assign({className:"fwork-select-help"},{children:L}),void 0):null,!T&&a.jsx(Oe,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:W?a.jsx("div",Object.assign({className:"fwork-select__body",style:U},{children:S?te:(e=>e&&e.length?a.jsxs(a.Fragment,{children:[u||null,y?e.map(((e,t)=>a.jsx("div",{children:y(e)},t))):a.jsx(ye,Object.assign({width:G.current,height:e.length*X.current,itemSize:X.current,itemCount:e.length,style:c},{children:({index:t,style:i})=>{let n=!1;if(oe(_)&&p){const i=_.find((i=>Ie(re(i,k,i))&&re(i,k,i)===re(e[t],k,e[t])));Ie(i)&&(n=!0)}else n=Ie(re(_,k,_))&&re(e[t],k,e[t])===re(_,k,_);let l=[];return H&&(l=((e,t)=>e.map(((e,i)=>t(e,i))))(e,H)),a.jsx(Me,{style:Object.assign(Object.assign({},i),o),onClick:i=>J(i,e[t]),onCheckboxChange:i=>i?J(null,e[t]):J(null,e[t],!0),item:e[t],showAvatar:I,showDescription:M,labelKey:O,isSelected:n,checkbox:m,selectedDisplay:f,className:N.default({"fwork-select__selected-background":n&&("background"===f||f.includes("background"))},l.length?l[t]:"")},void 0)}}),void 0),l?ee():null]},void 0):l?ee():null)(Q)}),void 0):null}),void 0)]}),void 0)},Le=(e,t)=>Array(t-e+1).fill(0).map(((t,i)=>e+i));function Ee({current:e,pageCount:t,onChangePage:i}){const[a,l]=n.useState(e),[s,r]=n.useState([]),o=e=>{const i=Math.max(0,Math.min(e,t));l(i)};return n.useEffect((()=>{i&&i(a)}),[a]),n.useEffect((()=>{const i=(()=>{const i=t;if(i>7){let t=[];const a=e-1,n=e+1,l=i-1,s=a>2?a:2,r=n<l?n:l;t=Le(s,r);const o=5-t.length-1,d=s>2,c=r<l,u="LEFT",h="RIGHT";if(d&&!c)t=[u,...Le(s-o,s-1),...t];else if(!d&&c){const e=Le(r+1,r+o);t=[...t,...e,h]}else d&&c&&(t=[u,...t,h]);return[1,...t,i]}return Le(1,i)})();r(i)}),[t,e,1]),{pages:s,handleClick:(e,t)=>{t.preventDefault(),o(e)},handleMoveLeft:e=>{e.preventDefault(),o(a-2-1)},handleMoveRight:e=>{e.preventDefault(),o(a+2+1)},handleNext:()=>{o(a+1)},handlePrevious:()=>{o(a-1)}}}const De=({currentPage:e,onChangePage:t,pageCount:i,canPreviousPage:n,canNextPage:l})=>{const{pages:s,handleClick:r,handleMoveLeft:o,handleMoveRight:d,handleNext:c,handlePrevious:u}=Ee({current:e,pageCount:i,onChangePage:t});return 1===i?null:a.jsxs("div",Object.assign({className:"fwork-pagination"},{children:[a.jsx(le,{style:{cursor:n?"":"no-drop",opacity:n?1:.6},onClick:()=>n?u():null},void 0),(t=>a.jsx(a.Fragment,{children:t.map(((t,i)=>"LEFT"===t?a.jsx("div",Object.assign({onClick:o,className:"fwork-pagination__pagination-number"},{children:"..."}),i):"RIGHT"===t?a.jsx("div",Object.assign({onClick:d,className:"fwork-pagination__pagination-number"},{children:"..."}),i):a.jsx("div",Object.assign({onClick:e=>r(t,e),className:N.default("fwork-pagination__pagination-number",{"fwork-pagination__pagination-number--active":t===e})},{children:t}),i)))},void 0))(s),a.jsx(se,{style:{cursor:l?"":"no-drop",opacity:l?1:.6},onClick:()=>l?c():null},void 0)]}),void 0)};function Be(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}}]})(e)}function Pe(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)}const He=({items:e,separator:t,onClick:i,service:n="work",truncate:l=!0,maxWidthItem:s="100px",itemStyle:r={}})=>{const o=e.length;return a.jsx("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:e.map(((e,d)=>a.jsxs(a.Fragment,{children:[a.jsx("span",Object.assign({className:N.default("fwork-breadcrumb-item",{"fwork-breadcrumb-item-truncate":l,[`fwork-breadcrumb-item-${n}`]:n}),onClick:()=>i&&i(e.link),style:Object.assign(Object.assign({},r),{maxWidth:s}),title:e.name},{children:e.name}),void 0),d<o-1?a.jsx("span",Object.assign({className:N.default("fwork-breadcrumb-separator")},{children:t||a.jsx(Be,{},void 0)}),void 0):null]},void 0)))}),void 0)};function Ae(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 9h6a1 1 0 0 0 1-1V2h10.002c.551 0 .998.455.998.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V9zm0-2l5-4.997V7H3z"}}]}]})(e)}function Fe(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286 7.4 8H5l2.8 4L5 16h2.4L9 13.714 10.6 16H13l-2.8-4z"}}]}]})(e)}function qe(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0L24 0 24 24 0 24z"}},{tag:"path",attr:{d:"M16 2l5 5v13.993c0 .556-.445 1.007-.993 1.007H3.993C3.445 22 3 21.545 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm-3 8h-1v5h1v-5zm-2 0H9c-1.105 0-2 .895-2 2v1c0 1.105.895 2 2 2h1c.552 0 1-.448 1-1v-2H9v1h1v1H9c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h2v-1zm6 0h-3v5h1v-2h2v-1h-2v-1h2v-1z"}}]}]})(e)}function Ve(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 14a4 4 0 1 0 0-8H8v8h4zm-2-6h2a2 2 0 1 1 0 4h-2v-4z"}}]}]})(e)}function $e(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM11 8v4.989L9 11l-1.99 2L7 8H5v8h2l2-2 2 2h2V8h-2z"}}]}]})(e)}function We(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M21 5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H16v2h2V5h3zm-3 8h-2v2h-2v3h4v-5zm-2-2h-2v2h2v-2zm2-2h-2v2h2V9zm-2-2h-2v2h2V7z"}}]}]})(e)}function Ke(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(e)}function Ue(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]}]})(e)}function Ye(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]}]})(e)}function Ze(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"}}]})(e)}function Ge(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 192l128 128 128-128z"}}]})(e)}function Xe(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 320l128-128 128 128z"}}]})(e)}function Je(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}function Qe(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"}}]})(e)}function et(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function tt(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"}}]})(e)}function it(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(e)}function at(e){return U({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}}]})(e)}function nt(e,t=10){if((e.match(/ /g)||[]).length<t)return e.length>20?e.slice(0,20)+"...":e;const i=e.trim().split(" "),a=i.length>t?"...":"";return i.slice(0,t).join(" ")+a}const lt=({allColumns:e,filters:t,setFilter:i,setAllFilters:l})=>{const s=n.useRef(null),[r,o]=n.useState(!1),[d,c]=n.useState({}),[u,h]=n.useState([]),v=e=>nt(e.value.map((e=>null==e?void 0:e.value)).join(", "),3);return _e(s,(e=>{e.target.closest("#portal")||o(!1)})),t&&t.length?a.jsxs(a.Fragment,{children:[a.jsxs("div",Object.assign({className:"filter-head"},{children:[a.jsx(tt,{},void 0),"  ",a.jsx("span",Object.assign({style:{color:"#172b4d",fontWeight:600}},{children:"Bộ lọc:"}),void 0),"  ",a.jsx("div",Object.assign({className:"filter-head__filter-lists"},{children:t&&t.length?t.map((i=>{var n;return a.jsxs("div",Object.assign({className:"filter-head__filter"},{children:[a.jsxs("div",Object.assign({style:{cursor:"string"!=typeof(null==i?void 0:i.value)?"pointer":"default"},onClick:e=>{"string"!=typeof(null==i?void 0:i.value)&&((e=>{h(e.value.map((t=>Object.assign(Object.assign({},t),{columnId:e.id}))))})(i),(e=>{if(s.current=e.target,r)o(!1);else if("undefined"!=typeof window){if(!s||!s.current)return;const e={width:285},t=s.current.getBoundingClientRect();e.left=t.left-8,t.top+10<window.innerHeight/2?e.top=t.top+t.height:e.bottom=window.innerHeight-t.top,o(!0),c(e)}})(e))}},{children:[a.jsxs("span",{children:[(null===(n=(e||[]).find((e=>(null==e?void 0:e.id)===(null==i?void 0:i.id))))||void 0===n?void 0:n.Header)||(null==i?void 0:i.id),":"]},void 0)," ",a.jsx("span",Object.assign({style:{fontWeight:600}},{children:"string"!=typeof(null==i?void 0:i.value)?v(i):nt(null==i?void 0:i.value,4)}),void 0),"  "]}),void 0),a.jsxs("div",Object.assign({style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"string"!=typeof(null==i?void 0:i.value)?40:12}},{children:["string"!=typeof(null==i?void 0:i.value)?a.jsx(at,{size:12},void 0):null,a.jsx(Je,{size:12,style:{cursor:"pointer"},onClick:()=>{l(t.filter((e=>e.id!==i.id)))}},void 0)]}),void 0)]}),null==i?void 0:i.id)})):null}),void 0),t&&t.length>=2?a.jsx("span",Object.assign({style:{marginLeft:14,fontSize:14,fontWeight:600,color:"#1976d2",cursor:"pointer"},onClick:()=>l([])},{children:"Xóa tất cả"}),void 0):null]}),void 0),a.jsx(Oe,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:r?a.jsx("div",Object.assign({className:"fwk-table__column-setting-popup",style:d},{children:u&&u.length?u.map((e=>a.jsxs("div",Object.assign({style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},{children:[a.jsx("span",{children:null==e?void 0:e.value},void 0),a.jsx(Je,{size:16,onClick:()=>{var a;const n=[...t.map((e=>Object.assign({},e)))],l=n.findIndex((t=>(null==t?void 0:t.id)===(null==e?void 0:e.columnId)));if(l>-1){const t=null===(a=n[l])||void 0===a?void 0:a.id,s=n[l].value=u.filter((t=>(null==t?void 0:t.id)!==(null==e?void 0:e.id)));i(t,s&&s.length?s:void 0),h(s),s&&!s.length&&o(!1)}}},void 0)]}),null==e?void 0:e.id))):null}),void 0):null}),void 0)]},void 0):null},st=e=>{const t=e.find((e=>e.isTotal));return a.jsxs("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[t?a.jsxs(F,Object.assign({variant:"h4",style:{marginBottom:0,marginRight:"18px",display:"inline"}},{children:[t.value," ",t.label]}),void 0):null,e.length?e.filter((e=>!e.isTotal)).map(((e,t)=>a.jsxs("div",Object.assign({style:{display:"inline-flex",alignItems:"center"}},{children:[a.jsx("span",Object.assign({style:{display:"inline-block",width:5,height:5,borderRadius:"50%",background:`${e.color}`}},{children:" "}),void 0),"  ",a.jsxs(F,Object.assign({variant:"caption",style:{marginRight:"18px"}},{children:[e.value," ",e.label]}),void 0)]}),t))):null]}),void 0)},rt=n.forwardRef(((e,t)=>{var{indeterminate:l,allColumns:s,setHiddenColumns:r}=e,o=i.__rest(e,["indeterminate","allColumns","setHiddenColumns"]);const d=n.useRef(null),c=t||d,u=(s||[]).filter((e=>e.id&&!e.disableToggleHidden&&"setting"!==e.id)).map((e=>e.id));return n.useEffect((()=>{u.length!==l?c.current.indeterminate=l:c.current.indeterminate=!1}),[c,l]),a.jsx("input",Object.assign({type:"checkbox",ref:c},o,{onChange:e=>{if(e.target.checked)return r([]),void localStorage.removeItem(window.location.pathname+"_hidden_columns");r(u),localStorage.setItem(window.location.pathname+"_hidden_columns",JSON.stringify(u))}}),void 0)})),ot=v.SortableHandle((()=>a.jsx(Qe,{style:{cursor:"grab"}},void 0))),dt=v.SortableElement((({value:e,index:t,canDrag:i,disableToggleHidden:n,items:l})=>a.jsxs("div",Object.assign({className:"fwk-table__column-setting-popup--column-wrapper",style:{zIndex:100}},{children:[i?a.jsx(ot,{},void 0):null,a.jsxs("label",Object.assign({style:{display:"flex",alignItems:"center",flex:1,marginLeft:10}},{children:[a.jsx("input",Object.assign({type:"checkbox",disabled:n},n?{checked:!0,indeterminate:!0}:Object.assign(Object.assign({},e.getToggleHiddenProps()),{onChange:t=>ct(t,e,l)})),void 0),a.jsx("div",Object.assign({className:"fwk-table__column-setting-popup--column"},{children:e.Header}),void 0)]}),void 0)]}),t))),ct=(e,t,i)=>{try{t.toggleHidden(!e.target.checked),setTimeout((()=>{const e=(i||[]).filter((e=>e.id&&!e.disableToggleHidden&&"setting"!==e.id&&!e.isVisible)).map((e=>e.id));localStorage.setItem(window.location.pathname+"_hidden_columns",JSON.stringify(e))}),200)}catch(e){console.log("toggle hidden column error",e)}},ut=v.SortableContainer((({items:e,canDrag:t})=>a.jsx("ul",{children:e.map(((i,n)=>a.jsx(dt,{disableToggleHidden:i.disableToggleHidden,index:n,value:i,canDrag:t,items:e},`item-${i.id}`)))},void 0)));function ht(e){const[t,i]=n.useState(!1),[a,l]=n.useState({});return _e(e,(e=>{e.target.closest("#portal")||i(!1)})),{style:a,open:t,toggle:()=>{if(t)i(!1);else if("undefined"!=typeof window){if(!e||!e.current)return;const t={width:285},a=e.current.getBoundingClientRect(),n=e.current.previousSibling;t.left=a.left-a.width-(null==n?void 0:n.offsetWidth),a.top+10<window.innerHeight/2?t.top=a.top+a.height+10:t.bottom=window.innerHeight-a.top,i(!0),l(t)}}}}function vt(e,t){const[i,a]=n.useState(e);return n.useEffect((()=>{const i=setTimeout((()=>{a(e)}),t);return()=>{clearTimeout(i)}}),[e,t]),i}const gt=n.forwardRef((({label:e,trueText:t,falseText:i,checked:l,onChange:s,disabled:r,style:o={}},d)=>{const c=n.useMemo((()=>a.jsx("p",Object.assign({className:"fwk-switch-option-label"},{children:l?t:i}),Math.random().toString())),[l]),u=Math.random().toString(),h=n.useMemo((()=>a.jsxs("div",{children:[a.jsx("input",{className:"fwk-switch-checkbox",type:"checkbox",disabled:r,id:u,defaultChecked:!!l,onChange:e=>s&&s(e.target.checked)},void 0),a.jsx("label",{className:"fwk-switch-checkbox-label",htmlFor:u},void 0)]},void 0)),[l]);return a.jsxs("div",Object.assign({ref:d,style:o},{children:[e?a.jsx("div",Object.assign({className:"fwk-switch-label"},{children:e}),void 0):null,a.jsxs("div",Object.assign({className:"fwk-switch-content"},{children:[h,t||i?c:null]}),void 0)]}),void 0)}));const ft=({searchContent:e,searchable:t,viewMore:i,divider:l,items:s,label:r,extra:o,defaultNumItem:d=5,openKeys:c,activeKey:u,onChange:h,loading:v=!1,code:g,isHeader:f,icon:p,disabled:m=!1,viewMoreAction:x,viewMoreText:b="Hiển thị thêm",renderItem:j})=>{const w=n.useMemo((()=>{if(s&&s.length&&c&&c.includes(g)){return s.map((e=>a.jsx(ft,{code:e.key,label:e.label,onChange:h,activeKey:u,items:e.items,renderItem:e.renderItem},void 0)))}return null}),[u,s]),y=a.jsx("div",Object.assign({style:{margin:"0px 16px 0 12px"}},{children:Array.from(Array(d).keys()).map((e=>a.jsx("div",Object.assign({style:{padding:"9px 28px 9px 0"}},{children:a.jsx("div",Object.assign({className:"fwk-sidebar-skeleton"},{children:" "}),void 0)}),e)))}),void 0);return l?a.jsx("div",{className:"fwk-sidebar-item-divider"},void 0):a.jsxs("div",Object.assign({className:"fwk-sidebar-item-container"},{children:[j?a.jsxs("div",Object.assign({className:N.default({"fwk-sidebar-item":!0,"fwk-sidebar-active-item":u===g,"fwk-sidebar-disabled":m})},{children:[j,o?a.jsx("div",Object.assign({className:"fwk-sidebar-item-extra"},{children:o}),void 0):null]}),void 0):null,t?e:null,v?y:w,!v&&s&&s.length&&i?a.jsx("div",Object.assign({className:"fwk-sidebar-item-view-more",onClick:()=>{x&&x()}},{children:b}),void 0):null]}),void 0)};var pt=n.memo((({data:e,activeKey:t,loadingKeys:i,openKeys:l,style:s,onChange:r})=>{const{activeKey:o,setActiveKey:d}=function(){const[e,t]=n.useState(null);return{activeKey:e,setActiveKey:t}}();n.useEffect((()=>{d(t)}),[t]);const c=n.useMemo((()=>e&&e.length?e.map((e=>a.jsx(ft,{items:e.items,extra:e.extra,searchable:e.searchable,searchContent:e.searchContent,label:e.label,openKeys:l,isHeader:e.isHeader,icon:e.icon,defaultNumItem:e.defaultNumItem,divider:e.divider,onChange:r,activeKey:o,loading:i&&i.includes(e.key),viewMore:e.viewMore,viewMoreAction:e.viewMoreAction,viewMoreText:e.viewMoreText,renderItem:e.renderItem,code:e.key,disabled:e.disabled},void 0))):null),[e,o,i]);return a.jsx("div",Object.assign({style:s,className:"fwk-sidebar-container"},{children:c}),void 0)}));const mt=n.createContext({}),xt=({onChange:e,text:t,disabled:i=!1,value:l,checked:s,style:r,name:o,invalid:d})=>{const c=n.useContext(mt),u=Math.random().toString(),h=s===l||l===c.value;return a.jsx(a.Fragment,{children:a.jsxs("label",Object.assign({style:r,className:N.default("fwk-radio-container",{"fwk-radio-container-checked":h}),htmlFor:u,onClick:t=>{t.stopPropagation(),i||c.disabled||(e&&e(l),c.onChange&&c.onChange(l))}},{children:[a.jsxs("span",Object.assign({className:N.default("fwk-radio",{"fwk-radio-checked":h})},{children:[a.jsx("input",{type:"radio",id:u,defaultChecked:s===l,disabled:i,name:o,onClick:t=>{t.stopPropagation(),e&&e(l),c.onChange&&c.onChange(l)},className:N.default("fwk-radio-input")},void 0),a.jsx("span",{className:N.default("fwk-radio-inner",{"fwk-radio-inner-disable":i||c.disabled,"fwk-radio-inner-invalid":d})},void 0)]}),void 0),t?a.jsx("span",Object.assign({className:N.default("fwk-radio-text",{"fwk-radio-text-disable":i||c.disabled||d})},{children:t}),void 0):null]}),void 0)},void 0)};xt.Group=({children:e,onChange:t,label:i,value:n,help:l,required:s,disabled:r=!1,validateStatus:o})=>a.jsxs(mt.Provider,Object.assign({value:{value:n,disabled:r,name:Math.random().toString(),onChange:t}},{children:[a.jsx("div",{children:i?a.jsxs("label",Object.assign({className:"fwork-radio-group-label"},{children:[i," ",s?a.jsx("span",Object.assign({className:"fwork-radio-group-required"},{children:"*"}),void 0):null]}),void 0):null},void 0),a.jsx("div",Object.assign({className:N.default({[`fwork-group-content-${o}`]:Boolean(o)})},{children:e}),void 0),l?a.jsx("span",Object.assign({className:"fwork-radio-group-help"},{children:l}),void 0):null]}),void 0);const bt=n.forwardRef(((e,t)=>{var{multiple:l=!0,disabled:s=!1,loading:r=!1,icon:o=null,text:d="",accept:c="*",className:u="",style:h,service:v="",showAccept:g=!1,maxSize:f="",showMaxSize:p=!1,onDragEnter:m,onDragOver:x,onDragLeave:b,onDrop:j,onChange:w}=e,y=i.__rest(e,["multiple","disabled","loading","icon","text","accept","className","style","service","showAccept","maxSize","showMaxSize","onDragEnter","onDragOver","onDragLeave","onDrop","onChange"]);const k=n.useRef(null),[O,_]=n.useState(!1),C=e=>{if(!l&&e.length>1)return window.alert("Số lượng file không hợp lệ"),!1;if(!Array.from(e).every((e=>((e,t)=>{if(!t)return!0;const i=t.split(",");let a=e.type,n=a.replace(/\/.*$/,"");for(let t of i){if(t=t.trim(),"*"===t)return!0;if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(n===t.replace(/\/.*$/,""))return!0}else if(a===t)return!0}return!1})(e,c))))return window.alert("Kiểu file không hợp lệ"),!1;const t=(e=>{if(!e)return;let t=-1;["kib","kb","mib","mb","gib","gb"].forEach((i=>{const a=e.toLowerCase().indexOf(i);a>-1&&(t=a)}));let i=parseFloat(e.substring(0,t));switch(e.substring(t).toLowerCase()){case"gb":return 1e9*i;case"gib":return 1073741824*i;case"mb":return 1e6*i;case"mib":return 1048576*i;case"kb":return 1e3*i;case"kib":return 1024*i}return-1})(f);if(t){if(Array.from(e).reduce(((e,t)=>e+t.size),0)>t)return window.alert(`Vượt quá size ${null==f?void 0:f.toUpperCase()}`),!1}return!0};return a.jsxs("div",Object.assign({style:h,className:N.default(u)},{children:[a.jsxs("div",Object.assign({className:N.default("fwk-dropzone",{"fwk-dropzone-dragging-over":O,"fwk-dropzone-disabled":s,"fwk-dropzone-loading":r},!v||s||r?"":`${v}-service`),ref:t,onClick:()=>{var e;return!s&&!r&&(null===(e=null==k?void 0:k.current)||void 0===e?void 0:e.click())},onDragEnter:e=>{e.preventDefault(),_(!0),s||r||m&&m(e)},onDragOver:e=>{e.preventDefault(),e.stopPropagation(),s||r||x&&x(e)},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),_(!1),s||r||x&&x(e)},onDrop:e=>{e.preventDefault(),e.stopPropagation(),_(!1),s||r||C(e.dataTransfer.files)&&(w&&w(Array.from(e.dataTransfer.files)),j&&j(e))}},y,{children:[o||null,o?a.jsx(a.Fragment,{children:"  "},void 0):null,d?"string"==typeof d?a.jsx("span",Object.assign({className:"fwk-dropzone-input-text"},{children:d}),void 0):d:a.jsxs("span",Object.assign({className:"fwk-dropzone-input-text"},{children:["Kéo hoặc ",a.jsx("strong",{children:"chọn"},void 0)," để tải lên"]}),void 0),a.jsx("input",{accept:c,ref:k,className:"fwk-dropzone-input",multiple:l,type:"file",disabled:s||r,onChange:e=>{if(w&&e&&e.target&&e.target.files&&e.target.files.length){if(!C(e.target.files))return;w(Array.from(e.target.files))}}},void 0)]}),void 0),a.jsxs("div",Object.assign({className:"fwk-dropzone-info"},{children:[c&&g?a.jsx("span",Object.assign({className:"fwk-dropzone-accept"},{children:`Support file: ${c}`}),void 0):null,f&&p?a.jsx("span",Object.assign({className:"fwk-dropzone-maxSize"},{children:`Maximum: ${f.toUpperCase()}`}),void 0):null]}),void 0)]}),void 0)}));var jt=n.memo(bt);var wt=n.memo((({colorData:e,colorValue:t,iconData:i,iconValue:l,label:s,required:r,checkIcon:o,onChangeColor:d,onChangeIcon:c,style:u,error:h,errorMessage:v})=>{const g=(null==e?void 0:e.length)&&e[0]||"#b39ddb",[f,p]=n.useState(!1),m=n.useRef(null);return _e(m,(()=>{p(!1)})),a.jsxs("div",Object.assign({ref:m,style:u},{children:[s?a.jsxs("p",Object.assign({className:"fwk-illustration-label"},{children:[s," ",r?a.jsx("span",Object.assign({className:"fwk-illustration-required"},{children:"*"}),void 0):null]}),void 0):null,a.jsxs("div",Object.assign({className:"fwk-illustration-content"},{children:[a.jsx("div",Object.assign({style:{backgroundColor:t||g},className:"preview"},{children:l?a.jsx("div",Object.assign({style:{width:24,height:24}},{children:re(i.find((e=>e.name===l)),"content",null)}),void 0):""}),void 0),a.jsx("div",{children:a.jsx("div",Object.assign({onClick:()=>{p(!f)},className:N.default("select-text",{focus:f})},{children:"Lựa chọn ảnh"}),void 0)},void 0),f?a.jsxs("div",Object.assign({className:"selection-table"},{children:[e&&e.length?a.jsxs(a.Fragment,{children:[a.jsx("div",Object.assign({className:"color-table"},{children:e.map((e=>a.jsxs("div",Object.assign({style:{backgroundColor:e},className:"color-item",onClick:()=>d&&d(e)},{children:[" ",e===t?a.jsx("div",Object.assign({style:{position:"absolute",transition:"all 0.3s",color:"white",display:"flex",alignItems:"center"}},{children:o}),void 0):null]}),void 0)))}),void 0),a.jsx("div",{className:"divider"},void 0)]},void 0):null,a.jsx("div",Object.assign({className:"icon-table"},{children:i.map((e=>a.jsx("div",Object.assign({className:N.default("icon-item",{"icon-selected":e.name===l}),onClick:()=>c&&c(e.name)},{children:a.jsx("div",Object.assign({style:{color:"white",height:24,width:24}},{children:e.content}),void 0)}),void 0)))}),void 0)]}),void 0):null]}),void 0),h&&v&&!f?a.jsx("div",Object.assign({className:"fwk-illustration-error-text"},{children:v}),void 0):null]}),void 0)}));function yt(e){return U({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 1h12l.5.5v12l-.5.5h-12l-.5-.5v-12l.5-.5zM2 13h11V2H2v11z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M8 4H7v3H4v1h3v3h1V8h3V7H8V4z"}}]})(e)}const kt=n.memo((({inputLabel:e,id:t,onChange:i,description:n,removeInputForm:l,stt:s,type:r,percent:o,error:d})=>a.jsx("section",{children:a.jsxs(te,{children:[a.jsx("label",Object.assign({className:"fwk-badge"},{children:s}),void 0),a.jsx(Q,{onChange:e=>{var a;"function"==typeof i&&i(null===(a=null==e?void 0:e.currentTarget)||void 0===a?void 0:a.value,t,"label")},placeholder:O.default.t("vote:placeholderLabel"),value:e},void 0),a.jsx(Ze,{onClick:e=>l(t),className:N.default("fwk-icon-close")},void 0),a.jsx("br",{},void 0),a.jsx("div",Object.assign({style:{marginTop:"10px"}},{children:r?a.jsxs(ie,{children:[a.jsx(ae,Object.assign({span:8},{children:a.jsx(Q,{label:O.default.t("vote:labelWeited"),onChange:e=>{var a;return"function"==typeof i&&i(null===(a=null==e?void 0:e.currentTarget)||void 0===a?void 0:a.value,t,"percent")},name:"percent",help:E.default(d,`${t}.percent`,null),placeholder:"0%",validateStatus:d&&d[t]?"error":void 0,value:o},void 0)}),void 0),a.jsx(ae,Object.assign({span:16},{children:a.jsx(Q,{label:O.default.t("vote:labelDescription"),placeholder:O.default.t("vote:placeholderEnterDescription"),style:{width:"100%"},value:n,onChange:e=>{var a;return"function"==typeof i&&i(null===(a=null==e?void 0:e.currentTarget)||void 0===a?void 0:a.value,t,"description")}},void 0)}),void 0)]},void 0):a.jsx(Q,{label:O.default.t("vote:labelDescription"),placeholder:O.default.t("vote:placeholderEnterDescription"),value:n,onChange:e=>{var a;return"function"==typeof i&&i(null===(a=null==e?void 0:e.currentTarget)||void 0===a?void 0:a.value,t,"description")}},void 0)}),void 0)]},void 0)},t)));const Ot=({children:e,style:t,className:i,zIndex:l=1e4,width:s,height:r,variant:o,centered:d=!0,visible:c,okText:h,cancelText:v,closeButton:g=!0,header:f,clickOutSide:p=!1,icon:m,onCancel:x,cancelButton:b,okButton:j,onOk:w,state:y="primary",isStatic:k=!1})=>{n.useEffect((()=>{document.body.style.overflow=c&&!k?"hidden":"unset"}),[c]);const O=n.useRef(null);_e(O,(()=>{p&&x&&x()}));const _=u.useSpring({opacity:c?1:0}),C=Math.floor(1e4*Math.random())+1;return a.jsx(a.Fragment,{children:c?a.jsx(Oe,Object.assign({id:`fwk-modal-${C}`,isStatic:k},{children:a.jsxs(u.animated.div,Object.assign({style:Object.assign(Object.assign(Object.assign({},t),{zIndex:l,width:s,height:r}),_),className:N.default(i,"fwork-modal__wrapper",{"fwork-modal__centered":d,[`fwork-modal__${o}`]:Boolean(o)}),ref:O},{children:[g?a.jsx("div",Object.assign({className:"fwork-modal__close-button",onClick:()=>x&&x()},{children:"boolean"==typeof g?a.jsx(Pe,{},void 0):g}),void 0):null,a.jsxs("div",Object.assign({className:"fwork-modal__header"},{children:[m||"error"===y||"warning"===y?a.jsx("div",Object.assign({className:"fwork-modal-header-icon"},{children:m||("warning"===y?a.jsx("var img = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cg%3e %3cpath fill='%23fbbd2b' d='M13.915 15.337H2.085a2.084 2.084 0 0 1-1.841-3.058L6.158 1.108a2.084 2.084 0 0 1 3.682 0l5.915 11.171a2.084 2.084 0 0 1-1.841 3.058zM8 10.967a1.041 1.041 0 1 0 1.042 1.041A1.043 1.043 0 0 0 8 10.967zm0-8.333a1.043 1.043 0 0 0-1.042 1.042v5.208a1.042 1.042 0 0 0 2.084 0V3.676A1.043 1.043 0 0 0 8 2.634z' transform='translate(-482 -1099) translate(486 1103.4)'/%3e %3c/g%3e%3c/svg%3e\";\n  export default img;",{},void 0):"error"===y?a.jsx("var img = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cg%3e %3cpath fill='%23d32f2f' d='M8 16a1.945 1.945 0 0 1-1.385-.574L.574 9.385a1.957 1.957 0 0 1 0-2.768L6.615.574a1.958 1.958 0 0 1 2.769 0l6.042 6.043a1.957 1.957 0 0 1 0 2.768l-6.041 6.041A1.945 1.945 0 0 1 8 16zm0-5.063a.979.979 0 1 0 .979.979.98.98 0 0 0-.979-.979zm0-7.832a.98.98 0 0 0-.979.979v4.894a.979.979 0 1 0 1.958 0V4.084A.98.98 0 0 0 8 3.105z' transform='translate(-482 -1099) translate(486 1103)'/%3e %3c/g%3e%3c/svg%3e\";\n  export default img;",{},void 0):null)}),void 0):null,f]}),void 0),a.jsx("div",Object.assign({className:"fwork-modal__body"},{children:e}),void 0),a.jsxs("div",Object.assign({className:"fwork-modal__footer"},{children:[v?a.jsx("div",Object.assign({className:"fwork-modal__cancel-button",onClick:()=>x&&x()},{children:v}),void 0):null,h?a.jsx("div",Object.assign({className:N.default("fwork-modal__ok-button",{[`fwork-modal__ok-button-${y}`]:Boolean(y)}),onClick:()=>w&&w()},{children:h}),void 0):null,b||null,j||null]}),void 0)]}),void 0)}),void 0):null},void 0)};var _t;!function(e){e[e.DEFAULT=0]="DEFAULT",e[e.SAME=1]="SAME",e[e.CUSTOMIZE=2]="CUSTOMIZE"}(_t||(_t={}));var Ct=_t;const Nt=n.memo((({voteType:e,label:t,description:i,percent:n,onChange:l,num:s,id:r,totalRate:o})=>a.jsxs("div",Object.assign({className:"fwk-main-content"},{children:[a.jsxs("section",Object.assign({className:"fwk-section-vote"},{children:[a.jsxs("div",Object.assign({style:{display:"flex"}},{children:[a.jsx("label",Object.assign({className:"fwk-badge"},{children:++s}),void 0),a.jsxs("div",Object.assign({style:{marginLeft:"20px"}},{children:[a.jsx(F,Object.assign({variant:"h4"},{children:t}),void 0),a.jsx(F,Object.assign({variant:"sub2"},{children:i}),void 0)]}),void 0)]}),void 0),e===Ct.CUSTOMIZE?a.jsx(F,Object.assign({variant:"h4"},{children:n?`${n} %`:void 0}),void 0):void 0]}),void 0),a.jsx(D.default,{defaultValue:o||0,onChange:e=>l(e,r),style:{fontSize:40,margin:"auto"},allowHalf:!0,allowClear:!1},void 0)]}),void 0))),St=n.memo((({totalRate:e,onChange:t})=>a.jsxs("div",{children:[a.jsxs(F,Object.assign({style:{textAlign:"center",fontSize:"30px",marginBottom:"10px"},variant:"h2"},{children:[e||0,"/5"]}),void 0),a.jsx(D.default,{defaultValue:e,onChange:e=>t(e,"id43"),style:{fontSize:40,margin:"auto"},allowHalf:!0,allowClear:!1},void 0)]},void 0))),zt=Array.from(Array(24)).map(((e,t)=>({value:t,label:t}))),Tt=Array.from(Array(60)).map(((e,t)=>({value:t,label:t})));function It(e,t){if(t)return`+${t}`;if(!e)return"U";const i=e.split(" ").pop();return null==i?void 0:i.charAt(0)}function Mt(e,t){if(t)return 100;if(!e)return 100;const i=It(e,0);return i?i.toLocaleLowerCase().charCodeAt(0)-97:100}y.toast.configure({hideProgressBar:!0,autoClose:1500,bodyClassName:"fwork__message-body"});const Rt={warning:"Warning!",error:"Error!",success:"Success!",info:"Information!"},Lt={warning:"http://tuyendungfpt.vn/wp-content/uploads/2021/04/icon-2.svg",error:"http://tuyendungfpt.vn/wp-content/uploads/2021/04/icon-3.svg",success:"http://tuyendungfpt.vn/wp-content/uploads/2021/04/icon-4.svg",info:"http://tuyendungfpt.vn/wp-content/uploads/2021/04/icon-1.svg"},Et=({content:e,variant:t,label:i})=>a.jsxs("div",Object.assign({style:{display:"flex"}},{children:[a.jsx("div",Object.assign({style:{marginRight:10}},{children:a.jsx("img",{style:{width:"14px",height:"14px",transform:"translateY(-1px)"},src:Lt[t],alt:"icon"},void 0)}),void 0),a.jsxs("div",Object.assign({style:{display:"flex",flexDirection:"column"}},{children:[a.jsx("div",Object.assign({className:"fwork__message-title"},{children:i||Rt[t]}),void 0),a.jsx("div",Object.assign({style:{marginTop:6}},{children:e}),void 0)]}),void 0)]}),void 0);var Dt=new class{info(e){var{weight:t="default",label:n}=e,l=i.__rest(e,["weight","label"]);return y.toast.info(a.jsx(Et,{content:l.content,label:n,variant:"info"},void 0),Object.assign({className:N.default(`fwork__message-${t}-info`,"fwork__message-wrapper"),closeButton:a.jsx(Pe,{style:{color:"bold"===t?"#ffffff":"#5c6a82",transform:"translateY(4px)"}},void 0)},l))}warning(e){var{weight:t="default",label:n}=e,l=i.__rest(e,["weight","label"]);return y.toast.info(a.jsx(Et,{content:l.content,label:n,variant:"warning"},void 0),Object.assign({className:N.default("fwork__message-wrapper",`fwork__message-${t}-warning`),closeButton:a.jsx(Pe,{style:{color:"bold"===t?"#ffffff":"#5c6a82",transform:"translateY(4px)"}},void 0)},l))}success(e){var{weight:t="default",label:n}=e,l=i.__rest(e,["weight","label"]);return y.toast.info(a.jsx(Et,{content:l.content,label:n,variant:"success"},void 0),Object.assign({className:N.default("fwork__message-wrapper",`fwork__message-${t}-success`),closeButton:a.jsx(Pe,{style:{color:"bold"===t?"#ffffff":"#5c6a82",transform:"translateY(4px)"}},void 0)},l))}error(e){var{weight:t="default",label:n}=e,l=i.__rest(e,["weight","label"]);return y.toast.info(a.jsx(Et,{content:l.content,label:n,variant:"error"},void 0),Object.assign({className:N.default("fwork__message-wrapper",`fwork__message-${t}-error`),closeButton:a.jsx(Pe,{style:{color:"bold"===t?"#ffffff":"#5c6a82",transform:"translateY(4px)"}},void 0)},l))}};function Bt(e,t,i=0,a){const n=null==e?void 0:e.find((e=>e.value===t[i]));return n&&n.children&&n.children.length?(a.push(n.children),Bt(n.children,t,i+1,a)):a}const Pt=(e,t)=>e.filter((e=>!t.includes(e)));exports.Attachment=({file:e,className:t="",showAction:i=!1,iconSize:n=0,onRemove:l,style:r={}})=>{0===n&&(n=i?40:20),i&&(t+=" has-actions");let o="";if(e.name){let t=e.name.split(".");t.length>1&&(o=t[t.length-1])}let d=a.jsx(Ae,{size:n},void 0);return"pdf"===o&&(d=a.jsx(Ve,{size:n,color:"#ff5630"},void 0)),["jpg","jpeg","png"].includes(o)&&(d=a.jsx(Ke,{size:n,color:"#ffab00"},void 0)),"gif"===o&&(d=a.jsx(qe,{size:n,color:"#ffab00"},void 0)),["doc","docx"].includes(o)&&(d=a.jsx($e,{size:n,color:"#004e8c"},void 0)),["xls","xlsx"].includes(o)&&(d=a.jsx(Fe,{size:n,color:"#007442"},void 0)),["zip","rar"].includes(o)&&(d=a.jsx(We,{size:n,color:"#5e6c84"},void 0)),a.jsxs("div",Object.assign({className:"fwork-attachment "+t,style:r},{children:[a.jsx("div",Object.assign({style:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:12}},{children:d}),void 0),a.jsxs("div",Object.assign({style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%"}},{children:[a.jsx(s.Tooltip,Object.assign({title:e.name},{children:a.jsx("div",Object.assign({className:"name-attachment"},{children:a.jsx("span",{children:e.name},void 0)}),void 0)}),void 0),i&&a.jsxs("div",Object.assign({className:"fwork-attachment-actions"},{children:[o&&a.jsx("span",{children:o.toUpperCase()},void 0),a.jsx("span",{children:"Tải về"},void 0),a.jsx("span",Object.assign({onClick:l},{children:"Xoá"}),void 0)]}),void 0)]}),void 0),!i&&a.jsx(s.Dropdown,Object.assign({overlay:a.jsx(a.Fragment,{},void 0)},{children:a.jsx("span",Object.assign({style:{cursor:"pointer",lineHeight:0}},{children:a.jsx(Ue,{},void 0)}),void 0)}),void 0)]}),void 0)},exports.Avatar=({variant:e="md",users:t,max:i=3,showInfo:n,presentAvatar:l="avatar",presentName:s="name",presentUsername:r="username",styles:o={}})=>{const d=(t,i,o=0)=>{const d=re(t,s,null),c=re(t,r,null),u=re(t,l,null);return a.jsxs("div",Object.assign({style:{zIndex:100-i},className:N.default("fwork-avatar__card",`fwork-avatar__space-${e}`)},{children:[a.jsx("div",Object.assign({className:N.default(`fwork-avatar__${e}`,"fwork-avatar__image",{["fwork-avatar__blank-"+Mt(d,o)%13]:!u}),style:{borderRadius:"50%",backgroundImage:`url("${u}")`,backgroundSize:"contain",fontWeight:o?"normal":600}},{children:!u&&It(d,o)}),void 0),n?a.jsxs("div",Object.assign({style:{marginLeft:"8px"}},{children:[a.jsx("div",Object.assign({className:"fwork-avatar__name"},{children:d}),void 0),a.jsx("div",Object.assign({className:"fwork-avatar__username"},{children:c}),void 0)]}),void 0):null]}),i)},c=oe(t)?t:[t],u=re(c,"length",0);return a.jsx("div",Object.assign({className:"fwork-avatar__container",style:o},{children:a.jsxs("div",Object.assign({className:N.default("fwork-avatar__wrapper")},{children:[u&&c.slice(0,i).map(((e,t)=>d(e,t))),u&&u>i?d(null,100,u-i):null]}),void 0)}),void 0)},exports.Badge=({color:e,size:t,count:i=0,children:n,max:l=100,style:s})=>a.jsxs("span",Object.assign({className:"fwork__badge"},{children:[a.jsx("span",Object.assign({className:"fwork__badge-content",style:Object.assign(Object.assign({},s),{backgroundColor:e||""})},{children:i>=l?a.jsxs("span",{children:[l,a.jsx("span",Object.assign({className:"fwork__badge-plus"},{children:"+"}),void 0)]},void 0):i}),void 0),n]}),void 0),exports.Breadcrumb=He,exports.Button=A,exports.Calendar=({width:e="248px",className:t="",onChangeDate:i,style:n={}})=>{const l=(e,t,i=!1)=>{let a=t.clone();return i?a.add(1,"months"):a.add(-1,"months"),e(a),!1};return a.jsx("div",Object.assign({className:"fwork-calendar "+t,style:Object.assign({width:e},n)},{children:a.jsx(s.Calendar,{fullscreen:!1,headerRender:({value:e,type:t,onChange:i,onTypeChange:n})=>a.jsxs("div",Object.assign({className:"fwork-calendar-header"},{children:[a.jsx("div",Object.assign({className:"cal-current-month"},{children:a.jsx("span",{children:e.format("MMMM, YYYY")},void 0)}),void 0),a.jsxs("div",Object.assign({className:"cal-actions"},{children:[a.jsx("a",Object.assign({onClick:()=>l(i,e)},{children:a.jsx(X,{size:16},void 0)}),void 0),a.jsx("a",Object.assign({onClick:()=>l(i,e,!0)},{children:a.jsx(J,{size:16},void 0)}),void 0)]}),void 0)]}),void 0),onChange:i},void 0)}),void 0)},exports.Cascader=e=>{var{children:t,options:l,onChange:s,selected:r,columnStyle:o,textWidth:d}=e,c=i.__rest(e,["children","options","onChange","selected","columnStyle","textWidth"]);const[u,h]=n.useState([]),[v,g]=n.useState(null),f=(e,t,i,a,n=!1,l="",o=[])=>{let d=(null==r?void 0:r.slice())||[];const c=u||[];if(e){if(l){const e=o.filter((e=>re(e,"id",null)===l)).map((e=>e.value));d=Pt(d,e),d.push(t),g({level:a,value:t})}else{const e=o.filter((e=>!re(e,"id",""))).map((e=>e.value));d=Pt(d,e),d=d.filter((e=>e!==re(v,"value",""))),d.length=a,v&&re(v,"level",999)<=a?d.push(re(v,"value","")):g(null),c.length=a,d.push(t)}(null==i?void 0:i.length)&&c.push(i),h(c),s(d)}else if(d.length){const e=u||[];l?(d=d.filter((e=>e!==t)),g(null)):(d.length=a,v&&re(v,"level",999)<=a&&d.push(re(v,"value","")),e.length=a),s(d),h(e)}};return n.useEffect((()=>{!u.length&&(null==r?void 0:r.length)&&h(Bt(l,r,0,[]))}),[r]),C.default.useMemo((()=>a.jsxs("div",Object.assign({className:"fwork-cascader"},c,{children:[a.jsx("div",Object.assign({className:"fwork-cascader__list-item ",style:o},{children:l&&l.length&&l.map((e=>{const t=re(e,"value");return a.jsxs("div",Object.assign({className:N.default("fwork-cascader__item",{"fwork-cascader__item-choosen":null==r?void 0:r.includes(re(e,"value"))})},{children:[a.jsx("input",{className:"fwork-cascader__checkbox",type:"checkbox",id:t,checked:null==r?void 0:r.includes(re(e,"value")),onChange:i=>f(i.target.checked,t,e.children,0,re(e,"allowMulti",!1),re(e,"id",null),l.map((e=>Object.assign(Object.assign({},e),{children:[]}))))},void 0),a.jsxs("label",Object.assign({className:"fwork-cascader__checkbox-label",htmlFor:t},{children:[a.jsx(F,Object.assign({variant:(null==r?void 0:r.includes(re(e,"value")))?"important":"paragraph",title:re(e,"label"),style:{display:"flex",alignItems:"center",width:d||"160px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},{children:re(e,"label")}),void 0),a.jsx("div",Object.assign({style:{marginLeft:"auto",marginRight:"8px",display:"flex"}},{children:a.jsx(Be,{size:18},void 0)}),void 0)]}),void 0)]}),t)}))}),void 0),u&&u.length?u.map(((e,t)=>a.jsx("div",Object.assign({className:N.default("fwork-cascader__list-item",{"fwork-cascader__list-item-no-border":t+1===u.length}),style:o},{children:e&&e.length?e.map((i=>{const n=re(i,"value");return re(i,"labelOnly")?a.jsx(F,Object.assign({style:{padding:"0px 8px 0px 16px",textTransform:"uppercase",height:"32px",display:"flex",alignItems:"center"}},{children:re(i,"label")}),void 0):a.jsxs("div",Object.assign({className:N.default("fwork-cascader__item",{"fwork-cascader__item-choosen":null==r?void 0:r.includes(re(i,"value"))})},{children:[a.jsx("input",{className:"fwork-cascader__checkbox",type:"checkbox",id:n,checked:null==r?void 0:r.includes(re(i,"value")),onChange:a=>f(a.target.checked,n,i.children,t+1,re(i,"allowMulti",!1),re(i,"id",null),e.map((e=>Object.assign(Object.assign({},e),{children:[]}))))},void 0),a.jsxs("label",Object.assign({className:"fwork-cascader__checkbox-label",htmlFor:n},{children:[a.jsx(F,Object.assign({variant:(null==r?void 0:r.includes(re(i,"value")))?"important":"paragraph",title:re(i,"label"),style:{display:"flex",alignItems:"center",width:d||"160px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},{children:re(i,"label")}),void 0),t+1!==u.length&&re(i,"children.length",0)?a.jsx("div",Object.assign({style:{marginLeft:"auto",marginRight:"8px",display:"flex"}},{children:a.jsx(Be,{size:18},void 0)}),void 0):null]}),void 0)]}),n)})):null}),t))):null]}),void 0)),[r,u])},exports.CheckBoxSearch=e=>{var t,l,s=e.column,{filterValue:r,preFilteredRows:o,setFilter:d}=s,c=i.__rest(s,["filterValue","preFilteredRows","setFilter"]);const u=n.useRef(null),{style:h,open:v,toggle:g}=ht(u),f=r||[],p=e=>{if(f.some((t=>t.id===e.id))){const t=f.filter((t=>t.id!==e.id));return void d(t&&t.length?t:void 0)}const t=[...f,e];d(t&&t.length?t:void 0)};return a.jsxs(a.Fragment,{children:[a.jsx("div",Object.assign({ref:u,onClick:g,style:{display:"flex",alignItems:"center"}},{children:a.jsx(Z,{},void 0)}),void 0),a.jsx(Oe,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:v?a.jsx("div",Object.assign({className:"fwk-table__column-setting-popup",style:h},{children:c.customProps&&(null===(l=null===(t=c.customProps)||void 0===t?void 0:t.data)||void 0===l?void 0:l.length)?c.customProps.data.map((e=>a.jsxs("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[a.jsx("input",{checked:f.some((t=>t.id===e.id)),type:"checkbox",onChange:p.bind(null,e)},void 0),"  ",a.jsx("span",{children:e.value},void 0)]}),e.id))):[]}),void 0):null}),void 0)]},void 0)},exports.CheckBoxSearchInput=e=>{var t=e.column,{filterValue:l,preFilteredRows:s,setFilter:r}=t,o=i.__rest(t,["filterValue","preFilteredRows","setFilter"]);const[d,c]=n.useState([]),[u,h]=n.useState(!1),v=n.useRef(null),[g,f]=n.useState(l||""),{style:p,open:m,toggle:x}=ht(v),b=vt(g,500),j=l||[],w=e=>{if(j.some((t=>t.id===e.id))){const t=j.filter((t=>t.id!==e.id));return void r(t&&t.length?t:void 0)}const t=[...j,e];r(t&&t.length?t:void 0)};return n.useEffect((()=>{i.__awaiter(void 0,void 0,void 0,(function*(){if(o.customProps&&o.customProps.onSearch){h(!0);const e=yield o.customProps.onSearch(b);h(!1),e&&e.length&&c(e)}}))}),[b]),a.jsxs(a.Fragment,{children:[a.jsx("div",Object.assign({ref:v,onClick:x,style:{display:"flex",alignItems:"center"}},{children:a.jsx(Z,{},void 0)}),void 0),a.jsx(Oe,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:m?a.jsxs("div",Object.assign({className:"fwk-table__column-setting-popup",style:p},{children:[a.jsx(Q,{placeholder:O.default.t("table:searchPlaceholder"),icon:a.jsx(et,{color:"#a2aab7"},void 0),style:{width:"100%"},value:g||"",onChange:e=>f(e.target.value||void 0)},void 0),u?a.jsxs("div",{children:[a.jsx("br",{},void 0),a.jsx(de,{},void 0),a.jsx("br",{},void 0),a.jsx(de,{},void 0),a.jsx("br",{},void 0),a.jsx(de,{},void 0),a.jsx("br",{},void 0)]},void 0):d&&d.length?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{marginTop:8}},void 0),d.map((e=>a.jsxs("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[a.jsx("input",{checked:j.some((t=>t.id===e.id)),type:"checkbox",onChange:w.bind(null,e)},void 0),"  ",a.jsx("span",{children:e.value},void 0)]}),e.id)))]},void 0):null]}),void 0):null}),void 0)]},void 0)},exports.Checkbox=({checked:e=!1,text:t="",disabled:i=!1,invalid:n=!1})=>a.jsx(a.Fragment,{children:a.jsxs("label",Object.assign({className:"fwk-checkbox-wrapper"},{children:[a.jsxs("span",Object.assign({className:"fwk-checkbox"+(e?" fwk-checkbox-checked":"")+(i?" fwk-checkbox-disabled":"")+(n?" fwk-checkbox-invalid":"")},{children:[a.jsx("input",{type:"checkbox",className:"fwk-checkbox-input",value:"",disabled:i},void 0),a.jsx("span",{className:"fwk-checkbox-inner"},void 0)]}),void 0),a.jsx("span",{children:t},void 0)]}),void 0)},void 0),exports.Col=ae,exports.Container=te,exports.Dropdown=({data:e=[],labelKey:t="label",className:i="",style:n={}})=>{const l=a.jsx("div",Object.assign({className:"fwk-dropdown-detail",style:{boxShadow:"0 2px 8px 0 rgba(9, 30, 66, 0.15)",backgroundColor:"#ffffff",marginTop:"4px"}},{children:a.jsx(s.Menu,Object.assign({className:"menu-action-table"},{children:e.map(((e,i)=>e.isDivider?a.jsx(s.Menu.Divider,{},void 0):a.jsx(s.Menu.Item,Object.assign({onClick:()=>{"function"==typeof e.onClick&&e.onClick()},style:Object.assign({height:34,lineHeight:"34px"},e.isDanger&&{color:"#d32f2f"})},{children:re(e,t,null)}),i)))}),void 0)}),void 0);return a.jsx("div",Object.assign({className:"fwork-dropdown "+i,style:Object.assign({},n)},{children:a.jsx(s.Dropdown,Object.assign({overlay:l,placement:"bottomRight",trigger:["click"]},{children:a.jsx(s.Button,{icon:a.jsx(it,{style:{marginTop:6}},void 0),type:"default",style:{width:32,borderRadius:4,background:"#f3f4f6",border:"none"}},void 0)}),void 0)}),void 0)},exports.Dropzone=jt,exports.Illustration=wt,exports.Input=Q,exports.Message=Dt,exports.Modal=Ot,exports.NotificationSetting=({data:e,onChange:t,loopTime:i,errors:l,style:s,editable:r=!0,textSetting:o={warningStatus:"Trạng thái cảnh báo",incomingNoti:"Thông báo đến",emailAddress:"Email",system:"Hệ thống",hourLoop:"Giờ lặp",dayLoop:"Lặp lại cảnh báo mỗi ngày",timeLoop:"Thời gian lặp",placeholderTimeSend:"Nhập thời gian gửi: VD: 3d,4h.."}})=>{const d=n.useMemo((()=>a.jsxs("div",Object.assign({className:"fwork-notification-setting__title"},{children:[a.jsx("span",{children:a.jsx(F,Object.assign({variant:"important"},{children:o.warningStatus}),void 0)},void 0),a.jsx("span",{children:a.jsx(F,Object.assign({variant:"important"},{children:o.incomingNoti}),void 0)},void 0),a.jsx("span",{children:a.jsx(F,Object.assign({variant:"important"},{children:o.emailAddress}),void 0)},void 0),a.jsx("span",{children:a.jsx(F,Object.assign({variant:"important"},{children:o.system}),void 0)},void 0)]}),void 0)),[]),c=n.useMemo((()=>e.map(((e,n)=>{var s,d,c,u,h,v,g,f,p,m,x,b,j,w,y,k;return a.jsxs("div",Object.assign({className:"fwork-notification-setting__row"},{children:[a.jsxs("div",Object.assign({className:"col1"},{children:[a.jsx("span",{children:a.jsx(F,Object.assign({variant:"important"},{children:(null==e?void 0:e.title)||""}),void 0)},void 0),a.jsx("br",{},void 0),a.jsx("br",{},void 0),a.jsxs("div",Object.assign({style:{paddingRight:"1em"}},{children:["inComing"===(null==e?void 0:e.type)?a.jsx(Q,{value:null===(s=null==e?void 0:e.reminder)||void 0===s?void 0:s.beforeOutDate,style:{width:"100%"},placeholder:`${o.placeholderTimeSend}`,validateStatus:re(l,"beforeOutDate",!1)?"error":"",help:re(l,"beforeOutDate",""),onChange:e=>t&&t({rowIndex:n,type:"beforeOutDate",value:e.currentTarget.value}),disabled:!r},void 0):null,"outDate"===(null==e?void 0:e.type)?a.jsxs(a.Fragment,{children:[a.jsxs("div",Object.assign({style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1em"}},{children:[a.jsx("span",Object.assign({style:{flex:1}},{children:o.hourLoop}),void 0),a.jsx(Re,{data:zt,labelKey:"label",valueKey:"value",style:{width:"48px",cursor:"pointer"},suffix:a.jsx("div",{},void 0),centerText:!0,customResultRender:`${null===(c=null===(d=null==e?void 0:e.reminder)||void 0===d?void 0:d.timeOutDate)||void 0===c?void 0:c.hour}h`,value:null===(h=null===(u=null==e?void 0:e.reminder)||void 0===u?void 0:u.timeOutDate)||void 0===h?void 0:h.hour,onChange:e=>t&&t({rowIndex:n,type:"hour",value:e}),disabled:!r},void 0),a.jsx("span",{children:"  :  "},void 0),a.jsx(Re,{data:Tt,style:{width:"48px",cursor:"pointer"},labelKey:"label",centerText:!0,customResultRender:`${null===(g=null===(v=null==e?void 0:e.reminder)||void 0===v?void 0:v.timeOutDate)||void 0===g?void 0:g.minute}m`,suffix:a.jsx("div",{},void 0),valueKey:"value",value:null===(p=null===(f=null==e?void 0:e.reminder)||void 0===f?void 0:f.timeOutDate)||void 0===p?void 0:p.minute,onChange:e=>t&&t({rowIndex:n,type:"minute",value:e}),disabled:!r},void 0)]}),void 0),a.jsxs("div",Object.assign({style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginBottom:"1em"}},{children:[a.jsx("span",Object.assign({style:{flex:1}},{children:o.dayLoop}),void 0),a.jsx(gt,{onChange:e=>{t&&t({rowIndex:n,type:"active",value:e})},checked:null===(x=null===(m=null==e?void 0:e.reminder)||void 0===m?void 0:m.loop)||void 0===x?void 0:x.active,disabled:!r},void 0)]}),void 0),(null===(j=null===(b=null==e?void 0:e.reminder)||void 0===b?void 0:b.loop)||void 0===j?void 0:j.active)?a.jsx(a.Fragment,{children:a.jsxs("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[a.jsx("span",Object.assign({style:{flex:1}},{children:o.timeLoop}),void 0),a.jsx(Re,{data:i,labelKey:"label",valueKey:"value",style:{flex:1},searchable:!0,disabled:!r,value:null===(y=null===(w=null==e?void 0:e.reminder)||void 0===w?void 0:w.loop)||void 0===y?void 0:y.rangeDate,onChange:e=>t&&t({rowIndex:n,type:"rangeDate",value:e})},void 0)]}),void 0)},void 0):null]},void 0):null]}),void 0)]}),void 0),a.jsx("div",{children:(null==e?void 0:e.target)&&(null===(k=null==e?void 0:e.target)||void 0===k?void 0:k.length)?e.target.map(((e,i)=>{return l=e,s=n,o=i,a.jsxs("div",Object.assign({className:"fwork-notification-setting__template"},{children:[a.jsx("span",{children:null==l?void 0:l.label},void 0),a.jsx("span",{children:a.jsx("input",{type:"checkbox",checked:null==l?void 0:l.email,disabled:!r,onChange:t&&t.bind(null,{columnIndex:o,clicked:"email",rowIndex:s})},void 0)},void 0),a.jsx("span",{children:a.jsx("input",{type:"checkbox",checked:null==l?void 0:l.system,disabled:!r,onChange:t&&t.bind(null,{columnIndex:o,clicked:"system",rowIndex:s})},void 0)},void 0)]}),void 0);var l,s,o})):null},void 0)]}),n)}))),[e]);return a.jsxs("div",Object.assign({className:"fwork-notification-setting__root",style:s},{children:[d,a.jsx("div",Object.assign({className:"fwork-notification-setting__body"},{children:c}),void 0)]}),void 0)},exports.PageHeader=({icon:e,title:t,actions:i,extra:l,description:s,tabs:r,breadcrumbs:o,service:d="work",tabIndex:c,onTabChange:h})=>{const v=n.useRef(!1),[g,f]=u.useSpring((()=>({transform:"translateX(0px)",width:0,config:{duration:250},onStart:()=>{v.current=!0},onRest:()=>{v.current=!1}}))),p=n.useCallback((e=>{if(!r||!r.length)return;let t=0;return r.reduce(((i,a,n)=>{if(a.id===e&&(t=1),1===t)return i;const l=document.querySelector(`.fwork-page-header__tab-wrapper span:nth-child(${n+1})`);return i+(l&&l.offsetWidth||0)+24}),0)}),[r]),m=n.useCallback((e=>{const t=r&&r.length&&r.findIndex((t=>t.id===e));if(!t&&0!==t)return 0;const i=document.querySelector(`.fwork-page-header__tab-wrapper span:nth-child(${t+1})`);return i&&i.offsetWidth}),[r]),x=(e,t)=>{h&&"function"==typeof h&&(v&&v.current||h(e))};return n.useEffect((()=>{c&&f({transform:`translateX(${p(c)}px)`,width:m(c)})}),[f,p,m,c]),a.jsxs("div",Object.assign({className:N.default("fwork-page-header",{"fwork-page-header--hasTabs":r&&r.length})},{children:[o?a.jsx(He,{service:d,items:o.items,maxWidthItem:o.maxWidthItem,separator:o.separator,truncate:o.truncate,onClick:o.onClick},void 0):null,a.jsxs("div",Object.assign({className:"fwork-page-header__main"},{children:[a.jsxs("div",Object.assign({className:"fwork-page-header__heading"},{children:[e?a.jsx("div",Object.assign({className:"fwork-page-header__heading-icon-wrapper"},{children:e}),void 0):null,a.jsx(F,Object.assign({variant:"h2"},{children:t}),void 0)]}),void 0),i?a.jsx("div",Object.assign({className:"fwork-page-header__actions"},{children:i}),void 0):null,l?a.jsx("div",Object.assign({className:"fwork-page-header__extra"},{children:l}),void 0):null]}),void 0),s?a.jsx("div",Object.assign({className:"fwork-page-header__description"},{children:s}),void 0):null,r&&r.length?a.jsxs("div",Object.assign({className:"fwork-page-header__tabs"},{children:[a.jsx("div",Object.assign({className:N.default("fwork-page-header__tab-wrapper")},{children:r.map((e=>a.jsx(F,Object.assign({className:N.default("fwork-page-header__tabs-text",{"fwork-page-header__tabs--active":e.id===c,[`fwork-page-header__tabs--active--${d}`]:e.id===c,[`fwork-page-header__tabs-text-${d}`]:d}),variant:"sub2",onClick:x.bind(null,e.id),style:{cursor:"pointer"}},{children:e.label}),e.id.toString())))}),void 0),a.jsx(u.animated.div,{className:N.default("fwork-page-header__tabs--indicator",{[`fwork-page-header__tabs--indicator--${d}`]:d}),style:g},void 0)]}),void 0):null]}),void 0)},exports.Pagination=De,exports.Portal=Oe,exports.Progress=({percent:e=0,bgColor:t="#f3f4f6",color:i="#26a69a",type:n="line",style:l={}})=>a.jsx(s.Progress,{percent:e,strokeColor:i,trailColor:t,type:n,style:l},void 0),exports.Radio=xt,exports.Row=ie,exports.Select=Re,exports.Separator=({className:e,type:t="solid",text:i="",width:n=".5px",color:l="rgba(112, 112, 112, 0.6)",textAlign:s,space:r=0})=>a.jsx("div",Object.assign({className:N.default({"fwork-separator__wrapper-text":i},e),style:{borderTopStyle:t,borderTopWidth:n,borderTopColor:l,textAlign:s,margin:`${r} 0`}},{children:i?a.jsx("div",Object.assign({className:"fwork-separator__text"},{children:i}),void 0):null}),void 0),exports.Sidebar=pt,exports.Skeleton=de,exports.Slider=({value:e=0,showTooltip:t=!1,marks:i={},bgColor:n="#5c6a82",style:l={},tipFormatter:r})=>{let o={},d={background:"#fff",border:"4px solid "+n,width:12,height:12},c={background:n};return Array.isArray(e)&&(o.range=!0,d=[d,d],c=[c,c]),a.jsx(s.Slider,Object.assign({},o,{defaultValue:e,tooltipVisible:t,tooltipPlacement:"bottom",marks:i,tipFormatter:r,className:"fwork-slider",handleStyle:d,trackStyle:c,style:l,tooltipPrefixCls:"fwork-slider-tooltip slider-tooltip ant-tooltip"}),void 0)},exports.Switch=gt,exports.Table=({fetchData:e,searchValue:t,loading:l,loadingComponent:s,heading:r,actions:o,forceUpdate:d,options:c,isFixedRowHeight:u,scrollX:v,scrollY:f,emptyData:p,hoverable:m,saveColumns:x=!0,isStriped:b=!1})=>{const j=n.memo((({allColumns:e,onSortEnd:t})=>{const[i,l]=n.useState("");return a.jsxs(a.Fragment,{children:[a.jsx("div",Object.assign({className:"fwk-table__column-setting-popup--search"},{children:a.jsx(Q,{ref:e=>e&&e.focus(),placeholder:O.default.t("table:searchPlaceholder"),icon:a.jsx(et,{color:"#a2aab7"},void 0),style:{width:"100%"},value:i,onChange:e=>l(e.target.value)},void 0)}),void 0),a.jsx("div",Object.assign({className:"fwk-table__column-setting-popup--columns"},{children:a.jsx(ut,{items:e.filter((e=>"setting"!==e.id)).filter((e=>e.id.toLowerCase().includes(i.toLowerCase()))),onSortEnd:t,useDragHandle:!0,canDrag:!Boolean(i)},void 0)}),void 0)]},void 0)})),[w,y]=n.useState(!1),[k,_]=n.useState({}),C=n.useRef(null),S=()=>{if(w)y(!1);else if("undefined"!=typeof window){if(!C||!C.current)return;const e={width:285},t=C.current.getBoundingClientRect();e.left=t.left-285+t.width,t.top+10<window.innerHeight/2?e.top=t.top+t.height+10:e.bottom=window.innerHeight-t.top,y(!0),_(e)}};_e(C,(e=>{e.target.closest("#portal")||y(!1)}));const z=n.useMemo((()=>({disableFilters:!0})),[]),{allColumns:T,getToggleHideAllColumnsProps:I,getTableProps:M,getTableBodyProps:R,headerGroups:L,rows:E,prepareRow:D,setColumnOrder:B,canPreviousPage:P,canNextPage:H,pageCount:A,gotoPage:q,setPageSize:V,setFilter:$,setAllFilters:W,setSortBy:K,setHiddenColumns:U,state:{pageIndex:Y,pageSize:Z,filters:G,sortBy:X}}=h.useTable(Object.assign({initialState:{pageIndex:0,pageSize:10},manualPagination:!0,manualSortBy:!0,manualFilters:!0,defaultColumn:z},c),h.useFilters,h.useSortBy,h.useFlexLayout,h.usePagination,g.useSticky,h.useColumnOrder);n.useEffect((()=>{e({pageIndex:Y,pageSize:Z,filters:G,sortBy:X,gotoPage:q,setSortBy:K,searchValue:t}),J()}),[e,Y,Z,G,q,d,X,t]);const J=()=>{if(x)try{let e=localStorage.getItem(window.location.pathname+"_hidden_columns");e=e?JSON.parse(e):[],U(e)}catch(e){console.log("error init columns",e)}};return a.jsxs(a.Fragment,{children:[r||o?a.jsxs("div",Object.assign({className:"fwk-table__heading-wrapper"},{children:[a.jsx("div",Object.assign({className:"fwk-table__heading"},{children:r?n.isValidElement(r)?a.jsx(a.Fragment,{children:r},void 0):st(r):null}),void 0),a.jsx("div",Object.assign({className:"fwk-table__actions"},{children:o}),void 0)]}),void 0):null,a.jsx(lt,{allColumns:T,filters:G,setFilter:$,setAllFilters:W},void 0),a.jsxs("div",Object.assign({},M(),{className:"fwk-table",style:{overflowX:E&&E.length&&!l?"auto":!E||E.length||l?"":"hidden"}},{children:[a.jsx("div",Object.assign({className:"fwk-table__thead"},{children:L.map(((e,t)=>n.createElement("div",Object.assign({},e.getHeaderGroupProps(),{className:"fwk-table__tr",key:t}),e.headers.map(((e,t)=>{var l;if("setting"===e.id){const l=e.getHeaderProps(),{style:s}=l,r=i.__rest(l,["style"]);return n.createElement("div",Object.assign({},r,{style:Object.assign(Object.assign({},s),{justifyContent:"flex-end",paddingRight:0}),className:"fwk-table__th",key:t}),a.jsx("div",Object.assign({ref:C,className:"fwk-table__column-setting",onClick:S},{children:a.jsx(Ye,{size:16},void 0)}),void 0))}const s=e;return s.disableSortBy=null===(l=s.disableSortBy)||void 0===l||l,n.createElement("div",Object.assign({},s.getHeaderProps(s.getSortByToggleProps({title:""})),{className:"fwk-table__th",key:t}),a.jsx(F,Object.assign({variant:"important",style:{marginBottom:0,marginRight:8}},{children:s.render("Header")}),void 0),s.canFilter?s.render("Filter"):null,(e=>e.canSort?e.isSorted?e.isSortedDesc?a.jsx(Ge,{size:22},void 0):a.jsx(Xe,{size:22},void 0):a.jsx(Ge,{size:22,style:{opacity:.6}},void 0):null)(s))})))))}),void 0),a.jsx("div",Object.assign({},R(),{style:{height:f,overflowY:(l||!E.length)&&"hidden"},className:"fwk-table__tbody"},{children:l?a.jsxs(a.Fragment,{children:[Array.from(Array(Z).keys()).map(((e,t)=>a.jsx("div",Object.assign({role:"row",className:"fwk-table__tr",style:{boxSizing:"border-box",display:"flex",flex:"1 0 auto",minWidth:900}},{children:T.filter((e=>e.isVisible)).map(((e,t)=>{const i=e.width||150,n=e.minWidth||0;return a.jsx("div",Object.assign({role:"cell",style:{boxSizing:"border-box",flexGrow:n,flexShrink:0,flexBasis:"auto",minWidth:`${n||i}px`,width:`${i||n}px`,padding:"10px 5px",paddingLeft:0},className:"fwk-table__td"},{children:s?null:a.jsx(de,{},void 0)}),t)}))}),t))),s?a.jsx("div",Object.assign({style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255, 255, 255, 0.6)"}},{children:s}),void 0):null]},void 0):a.jsx(a.Fragment,{children:E&&E.length?a.jsx(a.Fragment,{children:E.map(((e,t)=>(D(e),n.createElement("div",Object.assign({},e.getRowProps(),{className:N.default("fwk-table__tr",{"fwk-table-fixed-row-height":u,"fwk-table-hoverable":m,"fwk-table__tr-edd":b&&t%2==1}),key:t}),e.cells.map((e=>a.jsx("div",Object.assign({},e.getCellProps(),{className:"fwk-table__td"},{children:n.isValidElement(e.value)?e.render("Cell"):a.jsx(F,Object.assign({style:{marginBottom:0}},{children:e.render("Cell")}),void 0)}),void 0)))))))},void 0):a.jsx("div",Object.assign({style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:"300px"}},{children:p||"No Data"}),void 0)},void 0)}),void 0)]}),void 0),a.jsxs("div",Object.assign({className:"fwk-table__pagination-wrapper"},{children:[a.jsx("div",{},void 0),A>1?a.jsx(De,{pageCount:A,currentPage:Y+1,onChangePage:e=>{q(e-1)},canPreviousPage:P,canNextPage:H},void 0):null]}),void 0),a.jsx(Oe,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:w?a.jsxs("div",Object.assign({className:"fwk-table__column-setting-popup",style:k},{children:[a.jsxs("div",Object.assign({className:"fwk-table__column-setting-popup--heading"},{children:[a.jsx(F,Object.assign({variant:"important"},{children:O.default.t("table:showHideColumn")}),void 0),a.jsxs("div",{children:[a.jsx(rt,Object.assign({allColumns:T,setHiddenColumns:U},I()),void 0)," ",a.jsx(F,{children:O.default.t("table:showAllText")},void 0)]},void 0)]}),void 0),a.jsx(j,{onSortEnd:({oldIndex:e,newIndex:t})=>{var i,a,n;B((i=T.map((e=>e.id)).filter((e=>"setting"!==e)),a=e,n=t,((e,t,i)=>{const a=t<0?e.length+t:t;if(a>=0&&a<e.length){const a=i<0?e.length+i:i,[n]=e.splice(t,1);e.splice(a,0,n)}})(i=[...i],a,n),i))},allColumns:T},void 0)]}),void 0):null}),void 0)]},void 0)},exports.Tag=Te,exports.Text=F,exports.TextArea=ee,exports.TextSearch=({column:{filterValue:e,preFilteredRows:t,setFilter:i}})=>{const[l,s]=n.useState(e||""),r=n.useRef(null),o=vt(l,500),{style:d,open:c,toggle:u}=ht(r);return n.useEffect((()=>{i(o)}),[o]),n.useEffect((()=>{void 0===e&&s("")}),[e,s]),a.jsxs(a.Fragment,{children:[a.jsx("div",Object.assign({ref:r,onClick:u,style:{display:"flex",alignItems:"center"}},{children:a.jsx(Z,{},void 0)}),void 0),a.jsx(Oe,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:c?a.jsx("div",Object.assign({className:"fwk-table__column-setting-popup",style:d},{children:a.jsx(Q,{placeholder:O.default.t("table:searchPlaceholder"),icon:a.jsx(et,{color:"#a2aab7"},void 0),style:{width:"100%"},value:l||"",onChange:e=>s(e.target.value||void 0)},void 0)}),void 0):null}),void 0)]},void 0)},exports.Vote=({data:e,onOk:t,visible:l=!1,onClose:s})=>{const[r,o]=n.useState(),[d,c]=n.useState({}),[u,h]=n.useState(),[v,g]=n.useState(0);function f(t,a){return i.__awaiter(this,void 0,void 0,(function*(){const n=yield(({rate:e,criteria:t,voteType:a,id:n,value:l})=>i.__awaiter(void 0,void 0,void 0,(function*(){let i=0;if(a===Ct.CUSTOMIZE)return M.default(t,(t=>{if(e[t._id]&&t._id!==n)return i+=t.percent*e[t._id];t._id===n&&(i+=t.percent*l)})),i/100;let s=0;return M.default(e,((t,i)=>{if(e[i]&&i!==n)return s+=e[i]})),i=(s+l)/t.length,i%1!=0&&M.default(i.toFixed(1)),i})))({rate:d,criteria:r,voteType:null==e?void 0:e.voteType,id:a,value:t});yield c(Object.assign(Object.assign({},d),{[a]:t})),g(n)}))}n.useEffect((()=>{(null==e?void 0:e.criteria)&&o(null==e?void 0:e.criteria)}),[e]);const p=()=>{c({}),h(""),g(0),s&&s()};return a.jsx(a.Fragment,{children:a.jsx(Ot,Object.assign({visible:l,onCancel:()=>s&&s(),header:O.default.t("vote:headerRate"),width:500,cancelText:O.default.t("vote:cancleText"),okText:O.default.t("vote:okText"),onOk:()=>i.__awaiter(void 0,void 0,void 0,(function*(){t({rate:M.default(d,((e,t)=>({id:t,rate:e}))),totalRate:v,voteType:null==e?void 0:e.voteType,description:u}),p()}))},{children:a.jsx(te,{children:a.jsxs("main",Object.assign({className:"fwk-modal"},{children:[a.jsxs("section",{children:[0!==(null==e?void 0:e.voteType)&&(null==r?void 0:r.length)?M.default(r,((t,i)=>{let n=d[t._id];return a.jsx(Nt,{num:i,id:t._id,label:null==t?void 0:t.label,voteType:null==e?void 0:e.voteType,description:t.description,totalRate:n,percent:t.percent,onChange:e=>f(e,null==t?void 0:t._id)},i)})):a.jsx(St,{totalRate:v,onChange:e=>g(e)},void 0),a.jsx(ee,{label:O.default.t("vote:cancleText"),placeholder:O.default.t("vote:enterPlaceholderDescription"),value:u,onChange:e=>{var t;return h(null===(t=e.currentTarget)||void 0===t?void 0:t.value)}},void 0)]},void 0),0!==(null==e?void 0:e.voteType)?a.jsxs("div",Object.assign({className:"fwk-vote-total"},{children:[a.jsx(F,Object.assign({style:{fontSize:"14px"},variant:"h4"},{children:O.default.t("vote:scoreLabel")}),void 0),a.jsxs(F,Object.assign({variant:"h2"},{children:[v||0,"/5"]}),void 0)]}),void 0):void 0,a.jsx("div",{style:{clear:"both"}},void 0)]}),void 0)},void 0)}),void 0)},void 0)},exports.VoteForm=e=>{var{data:t,onChange:l,style:s,loading:r}=e;i.__rest(e,["data","onChange","style","loading"]);const[o,d]=n.useState(),[c,u]=n.useState(),[h,v]=n.useState(),[g,m]=n.useState(0),[x,b]=n.useState(0),[j,w]=n.useState(0),y=n.useRef(),k=vt(c,500),_=e=>{d(e),y.current=e},S=e=>{const t=M.default(e,(e=>e));return{voteType:x?j?2:1:x,criteria:x?t:[],totalPercent:j?g:0}},z=n.useCallback(((e,t,i)=>{const a=y.current[t];return a[i]=e,"percent"===i&&((e,t,i,a)=>{v({}),p.isNaN(L.default(i))&&v({[e]:{[t]:O.default.t("vote:enterNumberError")}});let n=0;M.default(a,(e=>n=n+=L.default(e.percent))),n>100&&v({[e]:{[t]:O.default.t("vote:maxError")}}),m(n)})(t,i,e,y.current),_(Object.assign(Object.assign({},y.current),{[t]:a}))}),[]);n.useEffect((()=>{l(c)}),[k]);const T=n.useCallback((e=>{_(p.omit(y.current,e))}),[]),I=n.useMemo((()=>{u(S(R.default(o)));let e=0;return o?M.default(o,((t,i)=>a.jsx(kt,{onChange:z,inputLabel:t.label,id:i,stt:++e,type:j,error:h,percent:null==t?void 0:t.percent,description:t.description,removeInputForm:T},i))):void 0}),[o,j]);n.useEffect((()=>{var e;if(x&&(null===(e=null==t?void 0:t.criteria)||void 0===e?void 0:e.length)){const e={};M.default(t.criteria,((t,i)=>e[f.v4()]=t)),_(e)}}),[x]),n.useEffect((()=>{(null==t?void 0:t.voteType)&&(b(1),2===(null==t?void 0:t.voteType)&&w(1))}),[t]),n.useEffect((()=>{}),[x]);const E=e=>{b(e),0===x&&u(S([]))};return a.jsx(C.default.Fragment,{children:r?a.jsxs("div",Object.assign({className:"fwk-loading-vote-form"},{children:[a.jsx(de,{width:"35%",size:"large"},void 0),a.jsxs("div",Object.assign({className:"fwk-loading-vote-form__radio"},{children:[a.jsxs("div",Object.assign({style:{marginRight:"20px"}},{children:[a.jsx(de,{style:{marginRight:"8px"},width:15,height:15,size:"small",rounded:!0},void 0),a.jsx(de,{width:150,height:15,size:"small"},void 0)]}),void 0),a.jsxs("div",{children:[a.jsx(de,{style:{marginRight:"8px"},width:15,height:15,size:"small",rounded:!0},void 0),a.jsx(de,{width:150,height:15,size:"small"},void 0)]},void 0)]}),void 0)]}),void 0):a.jsxs("section",Object.assign({style:s},{children:[a.jsxs("div",{children:[a.jsx(F,Object.assign({className:"fwk-title",variant:"h4"},{children:O.default.t("vote:taskRate")}),void 0),a.jsx(xt,{text:O.default.t("vote:overallRate"),checked:x,value:0,onChange:e=>E(e),name:"type"},void 0),"       ",a.jsx(xt,{text:O.default.t("vote:specificRate"),checked:x,value:1,onChange:e=>E(e),name:"type"},void 0)]},void 0),x?a.jsxs("main",Object.assign({className:N.default("fwk-vote-form-main")},{children:[a.jsxs(xt.Group,Object.assign({label:O.default.t("vote:taskRate"),validateStatus:"success",value:j,onChange:w},{children:[a.jsx(xt,{value:0,text:O.default.t("vote:uniformWeight"),style:{marginRight:20}},void 0),a.jsx(xt,{value:1,text:O.default.t("vote:weightSetting")},void 0)]}),void 0),I,a.jsx("div",{children:a.jsx(A,Object.assign({block:!0,variant:"secondary",icon:a.jsx(yt,{},void 0),onClick:()=>{_(Object.assign(Object.assign({},o),{[f.v4()]:{label:"",description:"",percent:0}}))}},{children:O.default.t("vote:addCriteria")}),void 0)},void 0)]}),void 0):void 0]}),void 0)},void 0)};
=======
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cls = require('classnames');
var _extends = require('@babel/runtime/helpers/esm/extends');
var _inheritsLoose = require('@babel/runtime/helpers/esm/inheritsLoose');
var _assertThisInitialized = require('@babel/runtime/helpers/esm/assertThisInitialized');
require('@babel/runtime/helpers/esm/objectWithoutPropertiesLoose');
var ReactDOM = require('react-dom');
var reactSpring = require('react-spring');
var reactTable = require('react-table');
var reactSortableHoc = require('react-sortable-hoc');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cls__default = /*#__PURE__*/_interopDefaultLegacy(cls);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _inheritsLoose__default = /*#__PURE__*/_interopDefaultLegacy(_inheritsLoose);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

const Loader = (_a) => {
    var { color = '#fff', className, styles = {} } = _a, props = tslib.__rest(_a, ["color", "className", "styles"]);
    return (jsxRuntime.jsx("span", Object.assign({ className: cls__default['default']('fwork-loader', className), style: Object.assign({ color }, styles) }, props, { children: jsxRuntime.jsx("svg", Object.assign({ className: "fwork-loader-circular-loader", viewBox: "25 25 50 50" }, { children: jsxRuntime.jsx("circle", { className: "fwork-loader-loader-path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "#fff", strokeWidth: "2" }, void 0) }), void 0) }), void 0));
};

const Button = React.forwardRef((props, buttonRef) => {
    const { size = 'medium', variant = 'default', icon, className, disabled, block, children, loading, onClick } = props, rest = tslib.__rest(props, ["size", "variant", "icon", "className", "disabled", "block", "children", "loading", "onClick"]);
    const handleClick = (e) => {
        if (loading || disabled) {
            return;
        }
        if (onClick) {
            onClick(e);
        }
    };
    const Component = variant === 'link' ? 'a' : 'button';
    return (jsxRuntime.jsx(Component, Object.assign({ ref: buttonRef, className: cls__default['default']('fwork-button', {
            'fwork-default-button': variant === 'default',
            'fwork-primary-button': variant === 'primary',
            'fwork-secondary-button': variant === 'secondary',
            'fwork-dashed-button': variant === 'dashed',
            'fwork-link-button': variant === 'link',
            'fwork-danger-button': variant === 'danger',
            [`fwork-${size}-button`]: Boolean(size),
            'fwork-block-button': block,
            'fwork-loading-button': loading,
            'fwork-disabled-button': disabled,
            'fwork-icon-only-button': icon && !children
        }, className), onClick: handleClick }, rest, { children: loading ? (jsxRuntime.jsx(Loader, { color: variant === 'primary' ? '#fff' : '#172b4d' }, void 0)) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [icon ? (jsxRuntime.jsx("span", Object.assign({ style: {
                        marginRight: children &&
                            (React.isValidElement(children) || typeof children === 'string')
                            ? 6
                            : 0,
                        display: 'inline-flex',
                        alignItems: 'center'
                    } }, { children: icon }), void 0)) : null,
                jsxRuntime.jsx("span", { children: children }, void 0)] }, void 0)) }), void 0));
});

const Text = React.forwardRef((_a, textRef) => {
    var { style, className = '', variant = 'paragraph', children } = _a, props = tslib.__rest(_a, ["style", "className", "variant", "children"]);
    const componentsMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        important: 'strong',
        paragraph: 'p',
        caption: 'span',
        sub1: 'span',
        sub2: 'span',
        link: 'a'
    };
    const Component = componentsMap[variant];
    return (jsxRuntime.jsx(Component, Object.assign({ ref: textRef, className: cls__default['default']('fwork-text', {
            'fwork-text-h1': variant === 'h1',
            'fwork-text-h2': variant === 'h2',
            'fwork-text-h3': variant === 'h3',
            'fwork-text-h4': variant === 'h4',
            'fwork-text-important': variant === 'important',
            'fwork-text-paragraph': variant === 'paragraph',
            'fwork-text-caption': variant === 'caption',
            'fwork-text-sub1': variant === 'sub1',
            'fwork-text-sub2': variant === 'sub2',
            'fwork-text-link': variant === 'link'
        }, className), style: style }, props, { children: children }), void 0));
});

const Input = React.forwardRef((_a, inputRef) => {
    var { style, className = '', disabled = false, placeholder = '', label = '', help = '', required = false, validateStatus = '', icon } = _a, props = tslib.__rest(_a, ["style", "className", "disabled", "placeholder", "label", "help", "required", "validateStatus", "icon"]);
    const [isFocus, setIsFocus] = React.useState(false);
    return (jsxRuntime.jsxs("div", Object.assign({ className: cls__default['default']('fwork-input-wrapper', className), style: style }, { children: [label ? (jsxRuntime.jsxs("label", Object.assign({ className: 'fwork-input-label' }, { children: [label, "\u00A0", required ? (jsxRuntime.jsx("span", Object.assign({ className: 'fwork-input-required' }, { children: "*" }), void 0)) : null] }), void 0)) : null,
            jsxRuntime.jsxs("div", Object.assign({ className: cls__default['default']('fwork-input-wrapper-input', {
                    'fwork-wrapper-input-disabled': disabled,
                    'fwork-wrapper-input-focus': isFocus,
                    [`fwork-wrapper-input-${validateStatus}`]: Boolean(validateStatus)
                }) }, { children: [jsxRuntime.jsx("input", Object.assign({ ref: inputRef, className: cls__default['default']('fwork-input'), disabled: disabled, placeholder: placeholder, onFocus: () => setIsFocus(true), onBlur: () => setIsFocus(false) }, props), void 0),
                    jsxRuntime.jsx("div", Object.assign({ style: {
                            width: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        } }, { children: icon || null }), void 0)] }), void 0),
            help ? jsxRuntime.jsx("span", Object.assign({ className: 'fwork-input-help' }, { children: help }), void 0) : null] }), void 0));
});

const TextArea = React.forwardRef((_a, inputRef) => {
    var { style, className = '', disabled = false, placeholder = '', label = '', help = '', required = false, service = '', rows = 3, cols = 30, validateStatus = '' } = _a, props = tslib.__rest(_a, ["style", "className", "disabled", "placeholder", "label", "help", "required", "service", "rows", "cols", "validateStatus"]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: cls__default['default']('fwork-textarea-wrapper', className), style: style }, { children: [label ? (jsxRuntime.jsxs("label", Object.assign({ className: 'fwork-textarea-label' }, { children: [label, "\u00A0", required ? (jsxRuntime.jsx("span", Object.assign({ className: 'fwork-textarea-required' }, { children: "*" }), void 0)) : null] }), void 0)) : null,
            jsxRuntime.jsx("textarea", Object.assign({ ref: inputRef, className: cls__default['default']('fwork-textarea', {
                    'fwork-textarea-disabled': disabled,
                    [`fwork-textarea-${validateStatus}`]: Boolean(validateStatus)
                }), disabled: disabled, placeholder: placeholder, rows: rows, cols: cols }, props), void 0),
            help ? jsxRuntime.jsx("span", Object.assign({ className: 'fwork-textarea-help' }, { children: help }), void 0) : null] }), void 0));
});

const Container = ({ className, style, children, span }) => {
    return (jsxRuntime.jsx("div", Object.assign({ className: cls__default['default']({
            container: !Boolean(span),
            [`container-${span}`]: Boolean(span)
        }, className), style: style }, { children: children }), void 0));
};

const Row = ({ className, style, children, gutters }) => {
    let mergeClassnames = {};
    if (gutters && gutters.length && gutters[0]) {
        mergeClassnames[`gx-${gutters[0]}`] = true;
    }
    if (gutters && gutters.length && gutters[1]) {
        mergeClassnames[`gy-${gutters[1]}`] = true;
    }
    return (jsxRuntime.jsx("div", Object.assign({ className: cls__default['default']('row', Object.assign({}, mergeClassnames), className), style: style }, { children: children }), void 0));
};

const Col = ({ className, style, children, span, xs, sm, md, lg, xl, xxl }) => {
    return (jsxRuntime.jsx("div", Object.assign({ className: cls__default['default']({
            [`col-${span}`]: Boolean(span),
            [`col-xs-${xs}`]: Boolean(xs),
            [`col-sm-${sm}`]: Boolean(sm),
            [`col-md-${md}`]: Boolean(md),
            [`col-lg-${lg}`]: Boolean(lg),
            [`col-xl-${xl}`]: Boolean(xl),
            [`col-xxl-${xxl}`]: Boolean(xxl)
        }, className), style: style }, { children: children }), void 0));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default['default'].createContext && React__default['default'].createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React__default['default'].createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React__default['default'].createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return React__default['default'].createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React__default['default'].createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React__default['default'].createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function HiChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
}function HiChevronLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
}function HiChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
}

const get = (obj, path, defValue = undefined) => {
    // If path is not defined or it has false value
    if (!path)
        return undefined;
    // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
    // Regex explained: https://regexr.com/58j0k
    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
    const hasLength = pathArray && pathArray.includes('length');
    // Find value if exist return otherwise return undefined value;
    const value = pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj);
    if ([0, '0'].includes(value) && !hasLength) {
        return value;
    }
    return value || defValue;
};
const isArray = (value) => {
    if (Array.isArray(value)) {
        return true;
    }
    return false;
};

const Skeleton = ({ className, size = 'medium', paragraph, style, width, height, rounded }) => {
    if (paragraph && paragraph.rows) {
        return (jsxRuntime.jsx("div", Object.assign({ className: cls__default['default']('fwork-skeleton--paragraph', className) }, { children: Array.from({ length: paragraph.rows }).map(el => {
                return (jsxRuntime.jsx("div", { className: cls__default['default']('fwork-skeleton', {
                        [`fwork-skeleton-${size}`]: Boolean(size),
                        [`fwork-skeleton-rounded`]: rounded
                    }, className), style: Object.assign({ width: width, height: height }, style) }, void 0));
            }) }), void 0));
    }
    return (jsxRuntime.jsx("div", { className: cls__default['default']('fwork-skeleton', {
            [`fwork-skeleton-${size}`]: Boolean(size),
            [`fwork-skeleton-rounded`]: rounded
        }, className), style: Object.assign(Object.assign({}, style), { width: width, height: height }) }, void 0));
};

function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

if (process.env.NODE_ENV !== 'production') ;

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName$1 =
    /*#__PURE__*/
    new WeakSet();
  }
}

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose__default['default'](List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized__default['default'](_assertThisInitialized__default['default'](_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized__default['default'](_assertThisInitialized__default['default'](_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoizeOne(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoizeOne(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoizeOne(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(React.createElement(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return React.createElement(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: _extends__default['default']({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, React.createElement(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(React.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (process.env.NODE_ENV !== 'production') {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var FixedSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (process.env.NODE_ENV !== 'production') {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

const canUseDOM = !!(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);
const Portal = ({ node, children }) => {
    const defaultNode = React.useRef(null);
    React.useEffect(() => {
        return () => {
            if (defaultNode.current) {
                document.body.removeChild(defaultNode.current);
            }
            defaultNode.current = null;
        };
    }, []);
    if (!canUseDOM) {
        return null;
    }
    if (!node && !defaultNode.current) {
        defaultNode.current = document.createElement('div');
        defaultNode.current.id = 'portal';
        document.body.appendChild(defaultNode.current);
    }
    return ReactDOM__default['default'].createPortal(children, node || defaultNode.current);
};

// Hook
function useOnClickOutside(ref, handler) {
    React.useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, 
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]);
}

function hasValue(elem) {
    if (Array.isArray(elem)) {
        return elem.length;
    }
    if ([0, '0'].includes(elem) || elem)
        return true;
}
const Option = (_a) => {
    var { className, item, showAvatar, showDescription, style, labelKey } = _a, props = tslib.__rest(_a, ["className", "item", "showAvatar", "showDescription", "style", "labelKey"]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: cls__default['default']('fwork-select-option', className) }, props, { children: [showAvatar ? (jsxRuntime.jsx("img", { src: item && item.avatar, alt: "avatar", className: "fwork-select-option__avatar" }, void 0)) : null,
            jsxRuntime.jsxs("div", Object.assign({ className: "fwork-select-option__info-wrapper" }, { children: [jsxRuntime.jsx("span", Object.assign({ className: "fwork-select-option__label" }, { children: get(item, labelKey, '') }), void 0),
                    showDescription ? (jsxRuntime.jsx("span", Object.assign({ className: "fwork-select-option__description" }, { children: item && item.description }), void 0)) : null] }), void 0)] }), void 0));
};
const Select = (_a) => {
    var { data, onChange, onSearch, renderItem, valueKey, labelKey, value, defaultNumItem = 3, loading = false, searchable = false, showAvatar = false, showDescription = false, label = '', help = '', required = false, validateStatus = '' } = _a, props = tslib.__rest(_a, ["data", "onChange", "onSearch", "renderItem", "valueKey", "labelKey", "value", "defaultNumItem", "loading", "searchable", "showAvatar", "showDescription", "label", "help", "required", "validateStatus"]);
    const [selected, setSelected] = React.useState(value || null);
    const [searchText, setSearchText] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [style, setStyle] = React.useState({});
    const currentDOM = React.useRef(null);
    const widthRef = React.useRef(0);
    const heightRef = React.useRef(showAvatar ? 48 : 32);
    const showOptions = () => {
        if (typeof window !== 'undefined') {
            if (!currentDOM || !currentDOM.current)
                return;
            // some maths to align the tooltip with whatever you just hovered over (the 'target')
            // or maybe it's 'math' in your weird country
            const style = {}; // this style object will be passed as the tooltip's 'style' prop
            const dimensions = currentDOM.current.getBoundingClientRect(); // where on the screen is the target
            style.width = dimensions.width;
            widthRef.current = dimensions.width;
            // center align the tooltip by taking both the target and tooltip widths into account
            style.left = dimensions.left + dimensions.width / 2 - style.width / 2;
            style.left = Math.max(style.left); // make sure it doesn't poke off the left side of the page
            style.left = Math.min(style.left, document.body.clientWidth - style.width); // or off the right
            if (dimensions.top < window.innerHeight / 2) {
                // the top half of the page
                // when on the top half of the page, position the top of the tooltip just below the target (it will stretch downwards)
                style.top = dimensions.top + dimensions.height;
            }
            else {
                // when on the bottom half, set the bottom of the tooltip just above the top of the target (it will stretch upwards)
                style.bottom = window.innerHeight - dimensions.top;
            }
            setVisible(true);
            setStyle(style);
        }
    };
    const hideOptions = () => {
        setVisible(false);
    };
    const chooseOptionHandler = (e, value) => {
        e.stopPropagation();
        setSelected(value);
        setSearchText('');
        if (onChange) {
            if (valueKey) {
                onChange(get(value, valueKey, null));
            }
            else {
                onChange(value);
            }
        }
        setVisible(false);
    };
    const _handleSearch = (e) => {
        setSearchText(e.target.value);
    };
    const filteredData = React.useMemo(() => {
        if (!searchText)
            return data;
        return data.filter((el) => {
            if (onSearch) {
                return onSearch(searchText, el);
            }
            return get(el, labelKey).toLowerCase().includes(searchText.toLowerCase());
        });
    }, [searchText, data]);
    React.useEffect(() => {
        if (get(data, 'length', 0) && hasValue(value)) {
            if (isArray(value)) {
                const matchedValues = value
                    .map((el) => data.find((item) => get(item, valueKey) === get(el, valueKey, el)))
                    .filter((el) => el);
                setSelected(matchedValues);
            }
            else {
                const matchedValue = data.find((item) => get(item, valueKey) === get(value, valueKey, value));
                setSelected(matchedValue);
            }
        }
    }, [value, data]);
    const renderOptions = (data) => {
        const Row = ({ index, style }) => (jsxRuntime.jsx(Option, { style: style, onClick: e => chooseOptionHandler(e, data[index]), item: data[index], showAvatar: showAvatar, showDescription: showDescription, labelKey: labelKey }, void 0));
        return data && data.length ? (renderItem ? (data.map((item, index) => (jsxRuntime.jsx("div", { children: renderItem(item) }, index)))) : (jsxRuntime.jsx(FixedSizeList, Object.assign({ width: widthRef.current, height: data.length * heightRef.current, itemSize: heightRef.current, itemCount: data.length }, { children: Row }), void 0))) : null;
    };
    useOnClickOutside(currentDOM, (e) => {
        if (!e.target.closest('#portal')) {
            hideOptions();
        }
    });
    const loadingMemo = React.useMemo(() => {
        if (loading) {
            return (jsxRuntime.jsx("div", Object.assign({ style: { marginTop: -16 } }, { children: jsxRuntime.jsx(Skeleton, { width: "100%", size: "medium", paragraph: { rows: defaultNumItem } }, void 0) }), void 0));
        }
    }, [loading]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: cls__default['default']('fwork-select', {
            open: visible,
            [`fwork-select-${validateStatus}`]: Boolean(validateStatus)
        }), onClick: showOptions, ref: currentDOM, style: Object.assign(Object.assign({}, props.style), style) }, { children: [label ? (jsxRuntime.jsxs("label", Object.assign({ className: 'fwork-select-label' }, { children: [label, "\u00A0", required ? jsxRuntime.jsx("span", Object.assign({ className: 'fwork-input-required' }, { children: "*" }), void 0) : null] }), void 0)) : null,
            jsxRuntime.jsxs("div", Object.assign({ className: 'fwork-select__input-wrapper' }, { children: [jsxRuntime.jsx("input", { className: "fwork-select__input", placeholder: hasValue(get(selected, labelKey))
                            ? get(selected, labelKey)
                            : 'Lựa chọn', value: searchable && visible
                            ? searchText
                            : hasValue(get(selected, labelKey))
                                ? get(selected, labelKey)
                                : '', onChange: _handleSearch, disabled: !searchable }, void 0),
                    jsxRuntime.jsx(HiChevronDown, { size: 16, className: "fwork-select__input-icon" }, void 0)] }), void 0),
            help ? jsxRuntime.jsx("span", Object.assign({ className: 'fwork-select-help' }, { children: help }), void 0) : null,
            jsxRuntime.jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: visible ? (jsxRuntime.jsx("div", Object.assign({ className: "fwork-select__body", style: style }, { children: loading ? loadingMemo : renderOptions(filteredData) }), void 0)) : null }), void 0)] }), void 0));
};

const range = (start, end) => {
    return Array(end - start + 1)
        .fill(0)
        .map((_, idx) => start + idx);
};
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';
const pageNeighbours = 1;
function useFWPagination({ current, pageCount, onChangePage }) {
    const [currentPage, setCurrentPage] = React.useState(current);
    const [pages, setPages] = React.useState([]);
    const gotoPage = (page) => {
        const currentPageLocal = Math.max(0, Math.min(page, pageCount));
        setCurrentPage(currentPageLocal);
    };
    const handleClick = (page, evt) => {
        evt.preventDefault();
        gotoPage(page);
    };
    const handleMoveLeft = (evt) => {
        evt.preventDefault();
        gotoPage(currentPage - pageNeighbours * 2 - 1);
    };
    const handleMoveRight = (evt) => {
        evt.preventDefault();
        gotoPage(currentPage + pageNeighbours * 2 + 1);
    };
    const handleNext = () => {
        gotoPage(currentPage + 1);
    };
    const handlePrevious = () => {
        gotoPage(currentPage - 1);
    };
    const fetchPageNumbers = () => {
        const totalPages = pageCount;
        const currentPage = current;
        const totalNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;
        if (totalPages > totalBlocks) {
            let pages = [];
            const leftBound = currentPage - pageNeighbours;
            const rightBound = currentPage + pageNeighbours;
            const beforeLastPage = totalPages - 1;
            const startPage = leftBound > 2 ? leftBound : 2;
            const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;
            pages = range(startPage, endPage);
            const pagesCount = pages.length;
            const singleSpillOffset = totalNumbers - pagesCount - 1;
            const leftSpill = startPage > 2;
            const rightSpill = endPage < beforeLastPage;
            const leftSpillPage = LEFT_PAGE;
            const rightSpillPage = RIGHT_PAGE;
            if (leftSpill && !rightSpill) {
                const extraPages = range(startPage - singleSpillOffset, startPage - 1);
                pages = [leftSpillPage, ...extraPages, ...pages];
            }
            else if (!leftSpill && rightSpill) {
                const extraPages = range(endPage + 1, endPage + singleSpillOffset);
                pages = [...pages, ...extraPages, rightSpillPage];
            }
            else if (leftSpill && rightSpill) {
                pages = [leftSpillPage, ...pages, rightSpillPage];
            }
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    };
    React.useEffect(() => {
        if (onChangePage)
            onChangePage(currentPage);
    }, [currentPage]);
    React.useEffect(() => {
        const pages = fetchPageNumbers();
        setPages(pages);
    }, [pageCount, current, pageNeighbours]);
    return {
        pages,
        handleClick,
        handleMoveLeft,
        handleMoveRight,
        handleNext,
        handlePrevious
    };
}

const Pagination = ({ currentPage, onChangePage, pageCount, canPreviousPage, canNextPage }) => {
    const { pages, handleClick, handleMoveLeft, handleMoveRight, handleNext, handlePrevious } = useFWPagination({
        current: currentPage,
        pageCount,
        onChangePage
    });
    const renderPages = (pages) => {
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: pages.map((page, index) => {
                if (page === 'LEFT')
                    return (jsxRuntime.jsx("div", Object.assign({ onClick: handleMoveLeft, className: 'fwork-pagination__pagination-number' }, { children: "..." }), index));
                if (page === 'RIGHT')
                    return (jsxRuntime.jsx("div", Object.assign({ onClick: handleMoveRight, className: 'fwork-pagination__pagination-number' }, { children: "..." }), index));
                return (jsxRuntime.jsx("div", Object.assign({ onClick: (e) => handleClick(page, e), className: cls__default['default']('fwork-pagination__pagination-number', {
                        'fwork-pagination__pagination-number--active': page === currentPage
                    }) }, { children: page }), index));
            }) }, void 0));
    };
    if (pageCount === 1)
        return null;
    return (jsxRuntime.jsxs("div", Object.assign({ className: 'fwork-pagination' }, { children: [jsxRuntime.jsx(HiChevronLeft
            // disabled={!canPreviousPage}
            , { 
                // disabled={!canPreviousPage}
                onClick: () => (canPreviousPage ? handlePrevious() : null) }, void 0), renderPages(pages), jsxRuntime.jsx(HiChevronRight
            // disabled={!canNextPage}
            , { 
                // disabled={!canNextPage}
                onClick: () => (canNextPage ? handleNext() : null) }, void 0)] }), void 0));
};

const PageHeader = ({ icon, title, actions, extra, description, tabs, tabIndex, onTabChange }) => {
    const preventClickTab = React.useRef(false);
    const [props, set] = reactSpring.useSpring(() => ({
        transform: 'translateX(0px)',
        width: 0,
        config: {
            duration: 250
        },
        onStart: () => {
            preventClickTab.current = true;
        },
        onRest: () => {
            preventClickTab.current = false;
        }
    }));
    const getTranslate = React.useCallback((id) => {
        if (!tabs || !tabs.length)
            return;
        let flag = 0;
        return tabs.reduce((result, current, index) => {
            if (current.id === id)
                flag = 1;
            if (flag === 1)
                return result;
            const target = document.querySelector(`.fwork-page-header__tab-wrapper span:nth-child(${index + 1})`);
            return result + ((target && target.offsetWidth) || 0) + 24;
        }, 0);
    }, [tabs]);
    const getWidth = React.useCallback((id) => {
        const idx = tabs && tabs.length && tabs.findIndex(el => el.id === id);
        if (!idx && idx !== 0)
            return 0;
        const target = document.querySelector(`.fwork-page-header__tab-wrapper span:nth-child(${idx + 1})`);
        return target && target.offsetWidth;
    }, [tabs]);
    const _handleChangeTab = (id, _) => {
        if (!onTabChange || typeof onTabChange !== 'function')
            return;
        if (preventClickTab && preventClickTab.current)
            return;
        onTabChange(id);
    };
    React.useEffect(() => {
        if (!tabIndex)
            return;
        set({
            transform: `translateX(${getTranslate(tabIndex)}px)`,
            width: getWidth(tabIndex)
        });
    }, [set, getTranslate, getWidth, tabIndex]);
    return (jsxRuntime.jsxs("div", Object.assign({ className: cls__default['default']('fwork-page-header', {
            'fwork-page-header--hasTabs': tabs && tabs.length
        }) }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: 'fwork-page-header__main' }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: 'fwork-page-header__heading' }, { children: [icon ? (jsxRuntime.jsx("div", Object.assign({ className: 'fwork-page-header__heading-icon-wrapper' }, { children: icon }), void 0)) : null,
                            jsxRuntime.jsx(Text, Object.assign({ variant: "h2" }, { children: title }), void 0)] }), void 0),
                    actions ? (jsxRuntime.jsx("div", Object.assign({ className: 'fwork-page-header__actions' }, { children: actions }), void 0)) : null,
                    extra ? (jsxRuntime.jsx("div", Object.assign({ className: 'fwork-page-header__extra' }, { children: extra }), void 0)) : null] }), void 0),
            description ? (jsxRuntime.jsx("div", Object.assign({ className: 'fwork-page-header__description' }, { children: description }), void 0)) : null,
            tabs && tabs.length ? (jsxRuntime.jsxs("div", Object.assign({ className: 'fwork-page-header__tabs' }, { children: [jsxRuntime.jsx("div", Object.assign({ className: cls__default['default']('fwork-page-header__tab-wrapper') }, { children: tabs.map(tab => (jsxRuntime.jsx(Text, Object.assign({ className: cls__default['default']({
                                'fwork-page-header__tabs--active': tab.id === tabIndex
                            }), variant: "sub2", onClick: _handleChangeTab.bind(null, tab.id), style: { cursor: 'pointer' } }, { children: tab.label }), tab.id.toString()))) }), void 0),
                    jsxRuntime.jsx(reactSpring.animated.div, { className: 'fwork-page-header__tabs--indicator', style: props }, void 0)] }), void 0)) : null] }), void 0));
};

// THIS FILE IS AUTO GENERATED
function RiSettings5Fill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function GrDrag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function BiSearch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function BsFilterLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 16 16","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z","clipRule":"evenodd"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function FaChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function IoMdClose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(props);
}

function truncate(str, max = 10) {
    const whiteSpaces = (str.match(/ /g) || []).length;
    if (whiteSpaces < max) {
        return str.length > 20 ? str.slice(0, 20) + '...' : str;
    }
    const array = str.trim().split(' ');
    const ellipsis = array.length > max ? '...' : '';
    return array.slice(0, max).join(' ') + ellipsis;
}

const FilterHead = ({ allColumns, filters, setFilter, setAllFilters }) => {
    const targetDOM = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const [style, setStyle] = React.useState({});
    const [data, setData] = React.useState([]);
    const _handleGetData = (el) => {
        setData(el.value.map((e) => (Object.assign(Object.assign({}, e), { columnId: el.id }))));
    };
    const _getValues = (el) => {
        return truncate(el.value
            .map((e) => {
            return e === null || e === void 0 ? void 0 : e.value;
        })
            .join(', '), 3);
    };
    const toggle = (e) => {
        targetDOM.current = e.target;
        if (open) {
            setOpen(false);
            return;
        }
        if (typeof window !== 'undefined') {
            if (!targetDOM || !targetDOM.current)
                return;
            // some maths to align the tooltip with whatever you just hovered over (the 'target')
            // or maybe it's 'math' in your weird country
            const style = { width: 285 }; // this style object will be passed as the tooltip's 'style' prop
            const dimensions = targetDOM.current.getBoundingClientRect(); // where on the screen is the target
            // center align the tooltip by taking both the target and tooltip widths into account
            style.left = dimensions.left - 8;
            if (dimensions.top + 10 < window.innerHeight / 2) {
                // the top half of the page
                // when on the top half of the page, position the top of the tooltip just below the target (it will stretch downwards)
                style.top = dimensions.top + dimensions.height;
            }
            else {
                // when on the bottom half, set the bottom of the tooltip just above the top of the target (it will stretch upwards)
                style.bottom = window.innerHeight - dimensions.top;
            }
            setOpen(true);
            setStyle(style);
        }
    };
    useOnClickOutside(targetDOM, (e) => {
        if (!e.target.closest('#portal')) {
            setOpen(false);
        }
    });
    if (!filters || !filters.length)
        return null;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", Object.assign({ className: "filter-head" }, { children: [jsxRuntime.jsx(BsFilterLeft, {}, void 0), "\u00A0\u00A0", jsxRuntime.jsx("span", Object.assign({ style: { color: '#172b4d', fontWeight: 600 } }, { children: "B\u1ED9 l\u1ECDc:" }), void 0), "\u00A0\u00A0", jsxRuntime.jsx("div", Object.assign({ className: "filter-head__filter-lists" }, { children: filters && filters.length
                            ? filters.map((el) => {
                                return (jsxRuntime.jsxs("div", Object.assign({ className: "filter-head__filter" }, { children: [jsxRuntime.jsxs("div", Object.assign({ style: {
                                                cursor: typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string' ? 'pointer' : 'default'
                                            }, onClick: e => {
                                                if (typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string') {
                                                    _handleGetData(el);
                                                    toggle(e);
                                                }
                                            } }, { children: [jsxRuntime.jsxs("span", { children: [el === null || el === void 0 ? void 0 : el.id, ":"] }, void 0), "\u00A0", jsxRuntime.jsx("span", Object.assign({ style: { fontWeight: 600 } }, { children: typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string'
                                                        ? _getValues(el)
                                                        : truncate(el === null || el === void 0 ? void 0 : el.value, 4) }), void 0), "\u00A0\u00A0"] }), void 0),
                                        jsxRuntime.jsxs("div", Object.assign({ style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                width: typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string' ? 40 : 12
                                            } }, { children: [typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string' ? (jsxRuntime.jsx(FaChevronDown, { size: 12 }, void 0)) : null,
                                                jsxRuntime.jsx(IoMdClose, { size: 12, style: { cursor: 'pointer' }, onClick: () => {
                                                        setAllFilters(filters.filter((e) => e.id !== el.id));
                                                    } }, void 0)] }), void 0)] }), el === null || el === void 0 ? void 0 : el.id));
                            })
                            : null }), void 0),
                    filters && filters.length >= 2 ? (jsxRuntime.jsx("span", Object.assign({ style: {
                            marginLeft: 14,
                            fontSize: 14,
                            fontWeight: 600,
                            color: '#1976d2',
                            cursor: 'pointer'
                        }, onClick: () => setAllFilters([]) }, { children: "X\u00F3a t\u1EA5t c\u1EA3" }), void 0)) : null] }), void 0),
            jsxRuntime.jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: open ? (jsxRuntime.jsx("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: data && data.length
                        ? data.map((el) => {
                            return (jsxRuntime.jsxs("div", Object.assign({ style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                } }, { children: [jsxRuntime.jsx("span", { children: el === null || el === void 0 ? void 0 : el.value }, void 0),
                                    jsxRuntime.jsx(IoMdClose, { size: 16, onClick: () => {
                                            var _a;
                                            const filterClone = [
                                                ...filters.map((el) => Object.assign({}, el))
                                            ];
                                            const idx = filterClone.findIndex(e => (e === null || e === void 0 ? void 0 : e.id) === (el === null || el === void 0 ? void 0 : el.columnId));
                                            if (idx > -1) {
                                                const columnId = (_a = filterClone[idx]) === null || _a === void 0 ? void 0 : _a.id;
                                                const filteredData = (filterClone[idx].value = data.filter((e) => (e === null || e === void 0 ? void 0 : e.id) !== (el === null || el === void 0 ? void 0 : el.id)));
                                                setFilter(columnId, filteredData && filteredData.length
                                                    ? filteredData
                                                    : undefined);
                                                setData(filteredData);
                                                if (filteredData && !filteredData.length) {
                                                    setOpen(false);
                                                }
                                            }
                                        } }, void 0)] }), el === null || el === void 0 ? void 0 : el.id));
                        })
                        : null }), void 0)) : null }), void 0)] }, void 0));
};

const arrayMoveMutate = (array, from, to) => {
    const startIndex = from < 0 ? array.length + from : from;
    if (startIndex >= 0 && startIndex < array.length) {
        const endIndex = to < 0 ? array.length + to : to;
        const [item] = array.splice(from, 1);
        array.splice(endIndex, 0, item);
    }
};
const arrayMove = (array, from, to) => {
    array = [...array];
    arrayMoveMutate(array, from, to);
    return array;
};
const renderHeadingStatus = (heading) => {
    const total = heading.find(el => el.isTotal);
    return (jsxRuntime.jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center' } }, { children: [total ? (jsxRuntime.jsxs(Text, Object.assign({ variant: "h4", style: {
                    marginBottom: 0,
                    marginRight: '18px',
                    display: 'inline'
                } }, { children: [total.value, " ", total.label] }), void 0)) : null,
            heading.length
                ? heading
                    .filter(el => !el.isTotal)
                    .map((el, index) => {
                    return (jsxRuntime.jsxs("div", Object.assign({ style: {
                            display: 'inline-flex',
                            alignItems: 'center'
                        } }, { children: [jsxRuntime.jsx("span", Object.assign({ style: {
                                    display: 'inline-block',
                                    width: 5,
                                    height: 5,
                                    borderRadius: '50%',
                                    background: `${el.color}`
                                } }, { children: "\u00A0" }), void 0), "\u00A0\u00A0", jsxRuntime.jsxs(Text, Object.assign({ variant: "caption", style: { marginRight: '18px' } }, { children: [el.value, " ", el.label] }), void 0)] }), index));
                })
                : null] }), void 0));
};
const IndeterminateCheckbox = React.forwardRef((_a, ref) => {
    var { indeterminate } = _a, rest = tslib.__rest(_a, ["indeterminate"]);
    const defaultRef = React.useRef(null);
    const resolvedRef = ref || defaultRef;
    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return jsxRuntime.jsx("input", Object.assign({ type: "checkbox", ref: resolvedRef }, rest), void 0);
});
const DragHandle = reactSortableHoc.SortableHandle(() => jsxRuntime.jsx(GrDrag, {}, void 0));
const SortableItem = reactSortableHoc.SortableElement(({ value, index, canDrag }) => (jsxRuntime.jsxs("div", Object.assign({ className: "fwk-table__column-setting-popup--column-wrapper", style: { zIndex: 100 } }, { children: [canDrag ? jsxRuntime.jsx(DragHandle, {}, void 0) : null,
        jsxRuntime.jsxs("label", Object.assign({ style: {
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                marginLeft: 10
            } }, { children: [jsxRuntime.jsx("input", Object.assign({ type: "checkbox" }, value.getToggleHiddenProps()), void 0),
                jsxRuntime.jsx("div", Object.assign({ className: "fwk-table__column-setting-popup--column" }, { children: value.id }), void 0)] }), void 0)] }), index)));
const SortableList = reactSortableHoc.SortableContainer(({ items, canDrag }) => {
    return (jsxRuntime.jsx("ul", { children: items.map((value, index) => (jsxRuntime.jsx(SortableItem, { index: index, value: value, canDrag: canDrag }, `item-${value.id}`))) }, void 0));
});
const Inputcomponent = React.memo(({ allColumns, onSortEnd }) => {
    const [columnSearch, setColumnSearch] = React.useState('');
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", Object.assign({ className: "fwk-table__column-setting-popup--search" }, { children: jsxRuntime.jsx(Input, { ref: e => e && e.focus(), placeholder: "T\u00ECm ki\u1EBFm", icon: jsxRuntime.jsx(BiSearch, { color: "#a2aab7" }, void 0), style: { width: '100%' }, value: columnSearch, onChange: e => setColumnSearch(e.target.value) }, void 0) }), void 0),
            jsxRuntime.jsx("div", Object.assign({ className: "fwk-table__column-setting-popup--columns" }, { children: jsxRuntime.jsx(SortableList, { items: allColumns
                        .filter(el => el.id !== 'setting')
                        .filter(el => {
                        return el.id.toLowerCase().includes(columnSearch.toLowerCase());
                    }), onSortEnd: onSortEnd, useDragHandle: true, canDrag: !Boolean(columnSearch) }, void 0) }), void 0)] }, void 0));
});
const pageSizes = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 30, value: 30 },
    { label: 50, value: 50 }
];
const Table = ({ fetchData, loading, loadingComponent, heading, actions, forceUpdate, options, isFixedRowHeight, hoverable }) => {
    const [columnSettingOpen, setColumnSettingOpen] = React.useState(false);
    const [style, setStyle] = React.useState({});
    const columnSettingButtonDOM = React.useRef(null);
    const _showColumnSetting = () => {
        if (columnSettingOpen) {
            setColumnSettingOpen(false);
            return;
        }
        if (typeof window !== 'undefined') {
            if (!columnSettingButtonDOM || !columnSettingButtonDOM.current)
                return;
            // some maths to align the tooltip with whatever you just hovered over (the 'target')
            // or maybe it's 'math' in your weird country
            const style = { width: 285 }; // this style object will be passed as the tooltip's 'style' prop
            const dimensions = columnSettingButtonDOM.current.getBoundingClientRect(); // where on the screen is the target
            // center align the tooltip by taking both the target and tooltip widths into account
            style.left = dimensions.left - 285 + dimensions.width;
            if (dimensions.top + 10 < window.innerHeight / 2) {
                // the top half of the page
                // when on the top half of the page, position the top of the tooltip just below the target (it will stretch downwards)
                style.top = dimensions.top + dimensions.height + 10;
            }
            else {
                // when on the bottom half, set the bottom of the tooltip just above the top of the target (it will stretch upwards)
                style.bottom = window.innerHeight - dimensions.top;
            }
            setColumnSettingOpen(true);
            setStyle(style);
        }
    };
    const _hideColumnSetting = () => {
        setColumnSettingOpen(false);
    };
    useOnClickOutside(columnSettingButtonDOM, (e) => {
        if (!e.target.closest('#portal')) {
            _hideColumnSetting();
        }
    });
    const defaultColumn = React.useMemo(() => ({
        // Let's set up our default Filter UI
        disableFilters: true
    }), []);
    const { allColumns, getToggleHideAllColumnsProps, getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setColumnOrder, canPreviousPage, canNextPage, pageCount, gotoPage, setPageSize, setFilter, setAllFilters, state: { pageIndex, pageSize, filters } } = reactTable.useTable(Object.assign({ initialState: { pageIndex: 0, pageSize: 10 }, manualPagination: true, manualFilters: true, defaultColumn }, options), reactTable.useFilters, reactTable.useFlexLayout, reactTable.usePagination, reactTable.useColumnOrder);
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColumnOrder(arrayMove(allColumns.map(d => d.id).filter(el => el !== 'setting'), oldIndex, newIndex));
    };
    React.useEffect(() => {
        fetchData({ pageIndex, pageSize, filters });
    }, [fetchData, pageIndex, pageSize, filters, forceUpdate]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [heading || actions ? (jsxRuntime.jsxs("div", Object.assign({ className: 'fwk-table__heading-wrapper' }, { children: [jsxRuntime.jsx("div", Object.assign({ className: 'fwk-table__heading' }, { children: heading ? (React.isValidElement(heading) ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: heading }, void 0)) : (renderHeadingStatus(heading))) : null }), void 0),
                    jsxRuntime.jsx("div", Object.assign({ className: 'fwk-table__actions' }, { children: actions }), void 0)] }), void 0)) : null,
            jsxRuntime.jsx(FilterHead, { allColumns: allColumns, filters: filters, setFilter: setFilter, setAllFilters: setAllFilters }, void 0),
            jsxRuntime.jsxs("div", Object.assign({}, getTableProps(), { className: 'fwk-table', style: {
                    overflowX: (rows && rows.length && !loading) ||
                        (rows && !rows.length && !loading)
                        ? 'auto'
                        : 'hidden'
                } }, { children: [jsxRuntime.jsx("div", Object.assign({ className: 'fwk-table__thead' }, { children: headerGroups.map((headerGroup, index) => {
                            return (React.createElement("div", Object.assign({}, headerGroup.getHeaderGroupProps(), { className: 'fwk-table__tr', key: index }), headerGroup.headers.map((column, index) => {
                                if (column.id === 'setting') {
                                    const _a = column.getHeaderProps(), { style } = _a, props = tslib.__rest(_a, ["style"]);
                                    return (React.createElement("div", Object.assign({}, props, { style: Object.assign(Object.assign({}, style), { justifyContent: 'flex-end', paddingRight: 0 }), className: 'fwk-table__th', key: index }),
                                        jsxRuntime.jsx("div", Object.assign({ ref: columnSettingButtonDOM, className: "fwk-table__column-setting", onClick: _showColumnSetting }, { children: jsxRuntime.jsx(RiSettings5Fill, { size: 16 }, void 0) }), void 0)));
                                }
                                return (React.createElement("div", Object.assign({}, column.getHeaderProps(), { className: 'fwk-table__th', key: index }),
                                    jsxRuntime.jsx(Text, Object.assign({ variant: "important", style: {
                                            marginBottom: 0,
                                            marginRight: 8
                                        } }, { children: column.render('Header') }), void 0),
                                    column.canFilter ? column.render('Filter') : null));
                            })));
                        }) }), void 0),
                    jsxRuntime.jsx("div", Object.assign({}, getTableBodyProps(), { className: 'fwk-table__tbody' }, { children: !loading ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: rows && rows.length ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [rows.map((row, index) => {
                                        prepareRow(row);
                                        return (React.createElement("div", Object.assign({}, row.getRowProps(), { className: cls__default['default']('fwk-table__tr', {
                                                'fwk-table-fixed-row-height': isFixedRowHeight,
                                                'fwk-table-hoverable': hoverable
                                            }), key: index }), row.cells.map(cell => {
                                            return (jsxRuntime.jsx("div", Object.assign({}, cell.getCellProps(), { className: 'fwk-table__td' }, { children: React.isValidElement(cell.value) ? (cell.render('Cell')) : (jsxRuntime.jsx(Text, Object.assign({ style: { marginBottom: 0 } }, { children: cell.render('Cell') }), void 0)) }), void 0));
                                        })));
                                    }),
                                    rows && rows.length && rows.length < pageSize
                                        ? Array.from(Array(pageSize - rows.length).keys()).map((row, index) => {
                                            return (jsxRuntime.jsx("div", Object.assign({ role: "row", className: 'fwk-table__tr', style: {
                                                    boxSizing: 'border-box',
                                                    display: 'flex',
                                                    flex: '1 0 auto',
                                                    minWidth: 900
                                                } }, { children: allColumns
                                                    .filter(el => el.isVisible)
                                                    .map((el, index) => {
                                                    const width = el.width || 150;
                                                    const minWidth = el.minWidth || 0;
                                                    return (jsxRuntime.jsx("div", { role: "cell", style: {
                                                            boxSizing: 'border-box',
                                                            flexGrow: minWidth,
                                                            flexShrink: 0,
                                                            flexBasis: 'auto',
                                                            minWidth: `${minWidth || width}px`,
                                                            width: `${width || minWidth}px`,
                                                            padding: '10px 5px',
                                                            borderBottom: '1px solid #e7e9ed'
                                                        }, className: 'fwk-table__td' }, index));
                                                }) }), index));
                                        })
                                        : null] }, void 0)) : (jsxRuntime.jsx("div", Object.assign({ style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 410
                                } }, { children: "no data" }), void 0)) }, void 0)) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [Array.from(Array(pageSize).keys()).map((row, index) => {
                                    return (jsxRuntime.jsx("div", Object.assign({ role: "row", className: 'fwk-table__tr', style: {
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            flex: '1 0 auto',
                                            minWidth: 900
                                        } }, { children: allColumns
                                            .filter(el => el.isVisible)
                                            .map((el, index) => {
                                            const width = el.width || 150;
                                            const minWidth = el.minWidth || 0;
                                            return (jsxRuntime.jsx("div", Object.assign({ role: "cell", style: {
                                                    boxSizing: 'border-box',
                                                    flexGrow: minWidth,
                                                    flexShrink: 0,
                                                    flexBasis: 'auto',
                                                    minWidth: `${minWidth || width}px`,
                                                    width: `${width || minWidth}px`,
                                                    padding: '10px 5px',
                                                    paddingLeft: 0
                                                }, className: 'fwk-table__td' }, { children: !loadingComponent ? jsxRuntime.jsx(Skeleton, {}, void 0) : null }), index));
                                        }) }), index));
                                }),
                                loadingComponent ? (jsxRuntime.jsx("div", Object.assign({ style: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 100,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'rgba(255, 255, 255, 0.6)'
                                    } }, { children: loadingComponent }), void 0)) : null] }, void 0)) }), void 0)] }), void 0),
            jsxRuntime.jsxs("div", Object.assign({ className: 'fwk-table__pagination-wrapper' }, { children: [jsxRuntime.jsx("div", {}, void 0),
                    pageCount > 1 ? (jsxRuntime.jsx(Pagination, { pageCount: pageCount, currentPage: pageIndex + 1, onChangePage: (value) => {
                            gotoPage(value - 1);
                        }, canPreviousPage: canPreviousPage, canNextPage: canNextPage }, void 0)) : null,
                    jsxRuntime.jsx("div", { children: jsxRuntime.jsx(Select, { data: pageSizes, labelKey: "label", value: pageSizes.find(el => el.value === pageSize), onChange: value => {
                                setPageSize(Number(value.value));
                            } }, void 0) }, void 0)] }), void 0),
            jsxRuntime.jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: columnSettingOpen ? (jsxRuntime.jsxs("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: "fwk-table__column-setting-popup--heading" }, { children: [jsxRuntime.jsx(Text, Object.assign({ variant: "important" }, { children: "\u1EA8n/Hi\u1EC7n c\u1ED9t" }), void 0),
                                jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(IndeterminateCheckbox, Object.assign({}, getToggleHideAllColumnsProps()), void 0), "\u00A0", jsxRuntime.jsx(Text, { children: "Hi\u1EC7n t\u1EA5t c\u1EA3" }, void 0)] }, void 0)] }), void 0),
                        jsxRuntime.jsx(Inputcomponent, { onSortEnd: onSortEnd, allColumns: allColumns }, void 0)] }), void 0)) : null }), void 0)] }, void 0));
};

// THIS FILE IS AUTO GENERATED
function AiFillCaretDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(props);
}

function useFilterPopup(targetDOM) {
    const [open, setOpen] = React.useState(false);
    const [style, setStyle] = React.useState({});
    const toggle = () => {
        if (open) {
            setOpen(false);
            return;
        }
        if (typeof window !== 'undefined') {
            if (!targetDOM || !targetDOM.current)
                return;
            // some maths to align the tooltip with whatever you just hovered over (the 'target')
            // or maybe it's 'math' in your weird country
            const style = { width: 285 }; // this style object will be passed as the tooltip's 'style' prop
            const dimensions = targetDOM.current.getBoundingClientRect(); // where on the screen is the target
            const previousWidth = targetDOM.current.previousSibling;
            // center align the tooltip by taking both the target and tooltip widths into account
            style.left =
                dimensions.left - dimensions.width - (previousWidth === null || previousWidth === void 0 ? void 0 : previousWidth.offsetWidth);
            if (dimensions.top + 10 < window.innerHeight / 2) {
                // the top half of the page
                // when on the top half of the page, position the top of the tooltip just below the target (it will stretch downwards)
                style.top = dimensions.top + dimensions.height + 10;
            }
            else {
                // when on the bottom half, set the bottom of the tooltip just above the top of the target (it will stretch upwards)
                style.bottom = window.innerHeight - dimensions.top;
            }
            setOpen(true);
            setStyle(style);
        }
    };
    useOnClickOutside(targetDOM, (e) => {
        if (!e.target.closest('#portal')) {
            setOpen(false);
        }
    });
    return { style, open, toggle };
}

function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    React.useEffect(() => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}

const TextSearch = ({ column: { filterValue, preFilteredRows, setFilter } }) => {
    const [searchTerm, setSearchTerm] = React.useState(filterValue || '');
    const targetDOM = React.useRef(null);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const { style, open, toggle } = useFilterPopup(targetDOM);
    React.useEffect(() => {
        setFilter(debouncedSearchTerm);
    }, [debouncedSearchTerm] // Only call effect if debounced search term changes
    );
    React.useEffect(() => {
        if (filterValue === undefined) {
            setSearchTerm('');
        }
    }, [filterValue, setSearchTerm]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", Object.assign({ ref: targetDOM, onClick: toggle, style: { display: 'flex', alignItems: 'center' } }, { children: jsxRuntime.jsx(AiFillCaretDown, {}, void 0) }), void 0),
            jsxRuntime.jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: open ? (jsxRuntime.jsx("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: jsxRuntime.jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm", icon: jsxRuntime.jsx(BiSearch, { color: "#a2aab7" }, void 0), style: { width: '100%' }, value: searchTerm || '', onChange: (e) => setSearchTerm(e.target.value || undefined) }, void 0) }), void 0)) : null }), void 0)] }, void 0));
};

const CheckBoxSearch = (_a) => {
    var _b, _c;
    var _d = _a.column, { filterValue, preFilteredRows, setFilter } = _d, props = tslib.__rest(_d, ["filterValue", "preFilteredRows", "setFilter"]);
    const targetDOM = React.useRef(null);
    const { style, open, toggle } = useFilterPopup(targetDOM);
    const currentValues = filterValue || [];
    const _handleChangeValue = (value) => {
        if (currentValues.some((el) => el.id === value.id)) {
            const result = currentValues.filter((el) => el.id !== value.id);
            setFilter(result && result.length ? result : undefined);
            return;
        }
        const result = [...currentValues, value];
        setFilter(result && result.length ? result : undefined);
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", Object.assign({ ref: targetDOM, onClick: toggle, style: { display: 'flex', alignItems: 'center' } }, { children: jsxRuntime.jsx(AiFillCaretDown, {}, void 0) }), void 0),
            jsxRuntime.jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: open ? (jsxRuntime.jsx("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: props.customProps && ((_c = (_b = props.customProps) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length)
                        ? props.customProps.data.map((el) => {
                            return (jsxRuntime.jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center' } }, { children: [jsxRuntime.jsx("input", { checked: currentValues.some((e) => e.id === el.id), type: "checkbox", onChange: _handleChangeValue.bind(null, el) }, void 0), "\u00A0\u00A0", jsxRuntime.jsx("span", { children: el.value }, void 0)] }), el.id));
                        })
                        : [] }), void 0)) : null }), void 0)] }, void 0));
};

const CheckBoxSearchInput = (_a) => {
    var _b = _a.column, { filterValue, preFilteredRows, setFilter } = _b, props = tslib.__rest(_b, ["filterValue", "preFilteredRows", "setFilter"]);
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const targetDOM = React.useRef(null);
    const [searchTerm, setSearchTerm] = React.useState(filterValue || '');
    const { style, open, toggle } = useFilterPopup(targetDOM);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const currentValues = filterValue || [];
    const _handleChangeValue = (value) => {
        if (currentValues.some((el) => el.id === value.id)) {
            const result = currentValues.filter((el) => el.id !== value.id);
            setFilter(result && result.length ? result : undefined);
            return;
        }
        const result = [...currentValues, value];
        setFilter(result && result.length ? result : undefined);
    };
    React.useEffect(() => {
        const fetchData = () => tslib.__awaiter(void 0, void 0, void 0, function* () {
            if (props.customProps && props.customProps.onSearch) {
                setLoading(true);
                const result = yield props.customProps.onSearch(debouncedSearchTerm);
                setLoading(false);
                if (result && result.length) {
                    setData(result);
                }
            }
        });
        fetchData();
    }, [debouncedSearchTerm] // Only call effect if debounced search term changes
    );
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", Object.assign({ ref: targetDOM, onClick: toggle, style: { display: 'flex', alignItems: 'center' } }, { children: jsxRuntime.jsx(AiFillCaretDown, {}, void 0) }), void 0),
            jsxRuntime.jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: open ? (jsxRuntime.jsxs("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: [jsxRuntime.jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm", icon: jsxRuntime.jsx(BiSearch, { color: "#a2aab7" }, void 0), style: { width: '100%' }, value: searchTerm || '', onChange: (e) => setSearchTerm(e.target.value || undefined) }, void 0),
                        loading ? (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("br", {}, void 0),
                                jsxRuntime.jsx(Skeleton, {}, void 0),
                                jsxRuntime.jsx("br", {}, void 0),
                                jsxRuntime.jsx(Skeleton, {}, void 0),
                                jsxRuntime.jsx("br", {}, void 0),
                                jsxRuntime.jsx(Skeleton, {}, void 0),
                                jsxRuntime.jsx("br", {}, void 0)] }, void 0)) : data && data.length ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { style: { marginTop: 8 } }, void 0),
                                data.map((el) => {
                                    return (jsxRuntime.jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center' } }, { children: [jsxRuntime.jsx("input", { checked: currentValues.some((e) => e.id === el.id), type: "checkbox", onChange: _handleChangeValue.bind(null, el) }, void 0), "\u00A0\u00A0", jsxRuntime.jsx("span", { children: el.value }, void 0)] }), el.id));
                                })] }, void 0)) : null] }), void 0)) : null }), void 0)] }, void 0));
};

const Switch = React.forwardRef(({ label, trueText, falseText, checked, onChange, disabled }, textRef) => {
    const renderSwitchLabel = React.useMemo(() => (jsxRuntime.jsx("p", Object.assign({ className: 'fwk-switch-option-label' }, { children: checked ? trueText : falseText }), Math.random().toString())), [checked]);
    const randomKey = Math.random().toString();
    const renderSwitch = React.useMemo(() => (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("input", { className: 'fwk-switch-checkbox', type: "checkbox", disabled: disabled, id: randomKey, defaultChecked: checked ? true : false, onChange: (e) => onChange && onChange(e.target.checked) }, void 0),
            jsxRuntime.jsx("label", { className: 'fwk-switch-checkbox-label', htmlFor: randomKey }, void 0)] }, void 0)), [checked]);
    return (jsxRuntime.jsxs("div", Object.assign({ ref: textRef }, { children: [label ? jsxRuntime.jsx("div", Object.assign({ className: 'fwk-switch-label' }, { children: label }), void 0) : null,
            jsxRuntime.jsxs("div", Object.assign({ className: 'fwk-switch-content' }, { children: [renderSwitch, trueText || falseText ? renderSwitchLabel : null] }), void 0)] }), void 0));
});

function useSideBar() {
    const [activeKey, setActiveKey] = React.useState(null);
    return {
        activeKey,
        setActiveKey
    };
}

const Block = ({ searchContent, searchable, viewMore, divider, items, label, extra, defaultNumItem = 5, openKeys, activeKey, onChange, loading = false, code, isHeader, icon, viewMoreAction }) => {
    const renderList = React.useMemo(() => {
        if (items && items.length && openKeys && openKeys.includes(code)) {
            let renderData = items;
            return renderData.map(item => (jsxRuntime.jsx(Block, { code: item.key, label: item.label, onChange: onChange, activeKey: activeKey, items: item.items }, void 0)));
        }
        return null;
    }, [activeKey, items]);
    const renderLoading = (jsxRuntime.jsx("div", Object.assign({ style: { margin: '0px 16px 0 12px' } }, { children: Array.from(Array(defaultNumItem).keys()).map(item => (jsxRuntime.jsx("div", Object.assign({ style: { padding: '9px 28px 9px 0' } }, { children: jsxRuntime.jsx("div", Object.assign({ className: 'fwk-sidebar-skeleton' }, { children: "\u00A0" }), void 0) }), item))) }), void 0));
    return divider ? (jsxRuntime.jsx("div", { className: 'fwk-sidebar-item-divider' }, void 0)) : (jsxRuntime.jsxs("div", Object.assign({ className: 'fwk-sidebar-item-container' }, { children: [label ? (jsxRuntime.jsxs("div", Object.assign({ className: cls__default['default']('fwk-sidebar-item', {
                    'fwk-sidebar-active-item': activeKey === code
                }), onClick: () => onChange && onChange(code) }, { children: [icon ? jsxRuntime.jsx("div", Object.assign({ className: 'fwk-sidebar-item-icon' }, { children: icon }), void 0) : null,
                    jsxRuntime.jsx("div", Object.assign({ className: cls__default['default']('fwk-sidebar-item-label', {
                            'fwk-sidebar-item-header': isHeader
                        }) }, { children: label }), void 0),
                    extra ? (jsxRuntime.jsx("div", Object.assign({ className: 'fwk-sidebar-item-extra' }, { children: extra }), void 0)) : null] }), void 0)) : null, searchable ? searchContent : null, loading ? renderLoading : renderList, !loading && items && items.length && viewMore ? (jsxRuntime.jsx("div", Object.assign({ className: 'fwk-sidebar-item-view-more', onClick: () => {
                    viewMoreAction && viewMoreAction();
                } }, { children: "Hi\u1EC3n th\u1ECB th\u00EAm" }), void 0)) : null] }), void 0));
};

const Sidebar = ({ data, activeKey: defaultActiveKey, loadingKeys, openKeys, style, onChange }) => {
    const { activeKey, setActiveKey } = useSideBar();
    React.useEffect(() => {
        setActiveKey(defaultActiveKey);
    }, [defaultActiveKey]);
    const renderContent = React.useMemo(() => {
        if (data && data.length) {
            return data.map(blockData => (jsxRuntime.jsx(Block, { items: blockData.items, extra: blockData.extra, searchable: blockData.searchable, searchContent: blockData.searchContent, label: blockData.label, openKeys: openKeys, isHeader: blockData.isHeader, icon: blockData.icon, defaultNumItem: blockData.defaultNumItem, divider: blockData.divider, onChange: onChange, activeKey: activeKey, loading: loadingKeys && loadingKeys.includes(blockData.key), viewMore: blockData.viewMore, viewMoreAction: blockData.viewMoreAction, code: blockData.key }, void 0)));
        }
        return null;
    }, [data, activeKey, loadingKeys]);
    return (jsxRuntime.jsx("div", Object.assign({ style: style, className: 'fwk-sidebar-container' }, { children: renderContent }), void 0));
};
var Sidebar$1 = React.memo(Sidebar);

const RadioContext = React.createContext({});
const Group = ({ children, onChange, label, value, help, required, disabled = false, validateStatus }) => {
    return (jsxRuntime.jsxs(RadioContext.Provider, Object.assign({ value: {
            value,
            disabled: disabled,
            name: Math.random().toString(),
            onChange: onChange
        } }, { children: [jsxRuntime.jsx("div", { children: label ? (jsxRuntime.jsxs("label", Object.assign({ className: "fwork-radio-group-label" }, { children: [label, "\u00A0", required ? (jsxRuntime.jsx("span", Object.assign({ className: "fwork-radio-group-required" }, { children: "*" }), void 0)) : null] }), void 0)) : null }, void 0),
            jsxRuntime.jsx("div", Object.assign({ className: cls__default['default']({
                    [`fwork-group-content-${validateStatus}`]: Boolean(validateStatus)
                }) }, { children: children }), void 0),
            help ? jsxRuntime.jsx("span", Object.assign({ className: 'fwork-radio-group-help' }, { children: help }), void 0) : null] }), void 0));
};

const Radio$1 = ({ onChange, text, disabled = false, value, checked, style, name, invalid }) => {
    const radioContext = React.useContext(RadioContext);
    const processId = Math.random().toString();
    const isChecked = checked === value || value === radioContext.value;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("label", Object.assign({ style: style, className: cls__default['default']('fwk-radio-container', {
                'fwk-radio-container-checked': isChecked
            }), htmlFor: processId, onClick: (e) => {
                e.stopPropagation();
                if (!disabled && !radioContext.disabled) {
                    onChange && onChange(value);
                    radioContext.onChange && radioContext.onChange(value);
                }
            } }, { children: [jsxRuntime.jsxs("span", Object.assign({ className: cls__default['default']('fwk-radio', {
                        'fwk-radio-checked': isChecked
                    }) }, { children: [jsxRuntime.jsx("input", { type: "radio", id: processId, defaultChecked: checked === value, disabled: disabled, name: name, onClick: (e) => {
                                e.stopPropagation();
                                onChange && onChange(value);
                                radioContext.onChange && radioContext.onChange(value);
                            }, className: cls__default['default']('fwk-radio-input') }, void 0),
                        jsxRuntime.jsx("span", { className: cls__default['default']('fwk-radio-inner', {
                                'fwk-radio-inner-disable': disabled || radioContext.disabled,
                                'fwk-radio-inner-invalid': invalid
                            }) }, void 0)] }), void 0),
                text ? (jsxRuntime.jsx("span", Object.assign({ className: cls__default['default']('fwk-radio-text', {
                        'fwk-radio-text-disable': disabled || radioContext.disabled || invalid
                    }) }, { children: text }), void 0)) : null] }), void 0) }, void 0));
};

const Radio = Radio$1;
Radio.Group = Group;

const Checkbox = ({}) => {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("label", Object.assign({ className: "fwk-checkbox-wrapper" }, { children: [jsxRuntime.jsxs("span", Object.assign({ className: "fwk-checkbox fwk-checkbox-checked" }, { children: [jsxRuntime.jsx("input", { type: "checkbox", className: "fwk-checkbox-input", value: "" }, void 0),
                        jsxRuntime.jsx("span", { className: "fwk-checkbox-inner" }, void 0)] }), void 0),
                jsxRuntime.jsx("span", { children: "Checkbox" }, void 0)] }), void 0) }, void 0));
};

const KB_FACTOR = 1000;
const KIB_FACTOR = 1024;
const MB_FACTOR = 1000 * KB_FACTOR;
const MIB_FACTOR = 1024 * KIB_FACTOR;
const GB_FACTOR = 1000 * MB_FACTOR;
const GIB_FACTOR = 1024 * MIB_FACTOR;
const stringToByte = (arg0) => {
    if (!arg0)
        return;
    let spaceNdx = -1;
    ['kib', 'kb', 'mib', 'mb', 'gib', 'gb'].forEach((el) => {
        const idx = arg0.toLowerCase().indexOf(el);
        if (idx > -1) {
            spaceNdx = idx;
        }
    });
    let ret = parseFloat(arg0.substring(0, spaceNdx));
    switch (arg0.substring(spaceNdx).toLowerCase()) {
        case 'gb':
            return ret * GB_FACTOR;
        case 'gib':
            return ret * GIB_FACTOR;
        case 'mb':
            return ret * MB_FACTOR;
        case 'mib':
            return ret * MIB_FACTOR;
        case 'kb':
            return ret * KB_FACTOR;
        case 'kib':
            return ret * KIB_FACTOR;
    }
    return -1;
};

const validateFileType = (file, acceptedFiles) => {
    if (!acceptedFiles) {
        return true;
    } // If there are no accepted mime types, it's OK
    const acceptedFilesArr = acceptedFiles.split(',');
    let mimeType = file.type;
    let baseMimeType = mimeType.replace(/\/.*$/, '');
    for (let validType of acceptedFilesArr) {
        validType = validType.trim();
        if (validType === '*')
            return true;
        if (validType.charAt(0) === '.') {
            if (file.name
                .toLowerCase()
                .indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                return true;
            }
        }
        else if (/\/\*$/.test(validType)) {
            // This is something like a image/* mime type
            if (baseMimeType === validType.replace(/\/.*$/, '')) {
                return true;
            }
        }
        else {
            if (mimeType === validType) {
                return true;
            }
        }
    }
    return false;
};
const Dropzone = React.forwardRef((_a, dropzoneRef) => {
    var { multiple = true, disabled = false, loading = false, icon = null, text = '', accept = '*', className = '', style, service = '', showAccept = false, maxSize = '', showMaxSize = false, onDragEnter, onDragOver, onDragLeave, onDrop, onChange } = _a, props = tslib.__rest(_a, ["multiple", "disabled", "loading", "icon", "text", "accept", "className", "style", "service", "showAccept", "maxSize", "showMaxSize", "onDragEnter", "onDragOver", "onDragLeave", "onDrop", "onChange"]);
    const inputRef = React.useRef(null);
    const [draggingOver, setDraggingOver] = React.useState(false);
    const validateFileUpload = (files) => {
        if (!multiple && files.length > 1) {
            window.alert(`Số lượng file không hợp lệ`);
            return false;
        }
        const isValid = Array.from(files).every((file) => validateFileType(file, accept));
        if (!isValid) {
            window.alert(`Kiểu file không hợp lệ`);
            return false;
        }
        const maxSizeValue = stringToByte(maxSize);
        if (maxSizeValue) {
            const totalSize = Array.from(files).reduce((result, current) => {
                return result + current.size;
            }, 0);
            if (totalSize > maxSizeValue) {
                window.alert(`Vượt quá size ${maxSize === null || maxSize === void 0 ? void 0 : maxSize.toUpperCase()}`);
                return false;
            }
        }
        return true;
    };
    const _handleDragEnter = (event) => {
        event.preventDefault();
        setDraggingOver(true);
        if (disabled || loading)
            return;
        if (onDragEnter)
            onDragEnter(event);
    };
    const _handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (disabled || loading)
            return;
        if (onDragOver)
            onDragOver(event);
    };
    const _handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDraggingOver(false);
        if (disabled || loading)
            return;
        if (onDragOver)
            onDragOver(event);
    };
    const _handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDraggingOver(false);
        if (disabled || loading)
            return;
        if (!validateFileUpload(event.dataTransfer.files))
            return;
        if (onChange)
            onChange(Array.from(event.dataTransfer.files));
        if (onDrop)
            onDrop(event);
    };
    const _handleChangeInput = (event) => {
        if (onChange &&
            event &&
            event.target &&
            event.target.files &&
            event.target.files.length) {
            if (!validateFileUpload(event.target.files))
                return;
            onChange(Array.from(event.target.files));
        }
    };
    return (jsxRuntime.jsxs("div", Object.assign({ style: style, className: cls__default['default'](className) }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: cls__default['default']('fwk-dropzone', {
                    'fwk-dropzone-dragging-over': draggingOver,
                    'fwk-dropzone-disabled': disabled,
                    'fwk-dropzone-loading': loading
                }, service && !disabled && !loading ? `${service}-service` : ''), ref: dropzoneRef, onClick: () => { var _a; return !disabled && !loading && ((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.click()); }, onDragEnter: _handleDragEnter, onDragOver: _handleDragOver, onDragLeave: _handleDragLeave, onDrop: _handleDrop }, props, { children: [icon || null, icon ? jsxRuntime.jsx(jsxRuntime.Fragment, { children: "\u00A0\u00A0" }, void 0) : null,
                    text ? (typeof text === 'string' ? (jsxRuntime.jsx("span", Object.assign({ className: "fwk-dropzone-input-text" }, { children: text }), void 0)) : (text)) : (jsxRuntime.jsxs("span", Object.assign({ className: "fwk-dropzone-input-text" }, { children: ["K\u00E9o ho\u1EB7c ", jsxRuntime.jsx("strong", { children: "ch\u1ECDn" }, void 0), " \u0111\u1EC3 t\u1EA3i l\u00EAn"] }), void 0)),
                    jsxRuntime.jsx("input", { accept: accept, ref: inputRef, className: "fwk-dropzone-input", multiple: multiple, type: "file", disabled: disabled || loading, onChange: _handleChangeInput }, void 0)] }), void 0),
            jsxRuntime.jsxs("div", Object.assign({ className: "fwk-dropzone-info" }, { children: [accept && showAccept ? (jsxRuntime.jsx("span", Object.assign({ className: "fwk-dropzone-accept" }, { children: `Support file: ${accept}` }), void 0)) : null,
                    maxSize && showMaxSize ? (jsxRuntime.jsx("span", Object.assign({ className: "fwk-dropzone-maxSize" }, { children: `Maximum: ${maxSize.toUpperCase()}` }), void 0)) : null] }), void 0)] }), void 0));
});
var Dropzone$1 = React.memo(Dropzone);

const ILLustration = ({ colorData, colorValue, iconData, iconValue, label, required, checkIcon, onChangeColor, onChangeIcon, style, error, errorMessage }) => {
    const defaultColor = ((colorData === null || colorData === void 0 ? void 0 : colorData.length) && colorData[0]) || '#b39ddb';
    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef(null);
    useOnClickOutside(ref, () => {
        setVisible(false);
    });
    return (jsxRuntime.jsxs("div", Object.assign({ ref: ref, style: style }, { children: [label ? (jsxRuntime.jsxs("p", Object.assign({ className: "fwk-illustration-label" }, { children: [label, ' ', required ? (jsxRuntime.jsx("span", Object.assign({ className: "fwk-illustration-required" }, { children: "*" }), void 0)) : null] }), void 0)) : null,
            jsxRuntime.jsxs("div", Object.assign({ className: "fwk-illustration-content" }, { children: [jsxRuntime.jsx("div", Object.assign({ style: { backgroundColor: colorValue || defaultColor }, className: "preview" }, { children: iconValue ? (jsxRuntime.jsx("div", Object.assign({ style: { width: 24, height: 24 } }, { children: get(iconData.find(icon => icon.name === iconValue), 'content', null) }), void 0)) : ('') }), void 0),
                    jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", Object.assign({ onClick: () => {
                                const toogle = !visible;
                                setVisible(toogle);
                            }, className: cls__default['default']('select-text', {
                                focus: visible
                            }) }, { children: "L\u1EF1a ch\u1ECDn \u1EA3nh" }), void 0) }, void 0),
                    visible ? (jsxRuntime.jsxs("div", Object.assign({ className: "selection-table" }, { children: [colorData && colorData.length ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", Object.assign({ className: 'color-table' }, { children: colorData.map(color => (jsxRuntime.jsxs("div", Object.assign({ style: { backgroundColor: color }, className: 'color-item', onClick: () => onChangeColor && onChangeColor(color) }, { children: ["\u00A0", color === colorValue ? (jsxRuntime.jsx("div", Object.assign({ style: {
                                                        position: 'absolute',
                                                        transition: 'all 0.3s',
                                                        color: 'white'
                                                    } }, { children: checkIcon }), void 0)) : null] }), void 0))) }), void 0),
                                    jsxRuntime.jsx("div", { className: "divider" }, void 0)] }, void 0)) : null,
                            jsxRuntime.jsx("div", Object.assign({ className: "icon-table" }, { children: iconData.map(icon => (jsxRuntime.jsx("div", Object.assign({ className: cls__default['default']('icon-item', {
                                        'icon-selected': icon.name === iconValue
                                    }), onClick: () => onChangeIcon && onChangeIcon(icon.name) }, { children: jsxRuntime.jsx("div", Object.assign({ style: { color: 'white', height: 24, width: 24 } }, { children: icon.content }), void 0) }), void 0))) }), void 0)] }), void 0)) : null] }), void 0),
            error && errorMessage && !visible ? (jsxRuntime.jsx("div", Object.assign({ className: "fwk-illustration-error-text" }, { children: errorMessage }), void 0)) : null] }), void 0));
};
var Illustration = React.memo(ILLustration);

exports.Button = Button;
exports.CheckBoxSearch = CheckBoxSearch;
exports.CheckBoxSearchInput = CheckBoxSearchInput;
exports.Checkbox = Checkbox;
exports.Col = Col;
exports.Container = Container;
exports.Dropzone = Dropzone$1;
exports.Illustration = Illustration;
exports.Input = Input;
exports.PageHeader = PageHeader;
exports.Pagination = Pagination;
exports.Portal = Portal;
exports.Radio = Radio;
exports.Row = Row;
exports.Select = Select;
exports.Sidebar = Sidebar$1;
exports.Skeleton = Skeleton;
exports.Switch = Switch;
exports.Table = Table;
exports.Text = Text;
exports.TextArea = TextArea;
exports.TextSearch = TextSearch;
>>>>>>> c9192834196fcb4f016849245496a2b6bccd1c7f
