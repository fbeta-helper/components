<<<<<<< HEAD
import e from"i18next";import t from"i18next-browser-languagedetector";import{__rest as i,__awaiter as n}from"tslib";import{jsx as a,jsxs as l,Fragment as o}from"react/jsx-runtime";import r,{forwardRef as s,isValidElement as d,useState as c,createElement as h,PureComponent as u,useRef as v,useEffect as g,useMemo as p,useCallback as f,memo as m,createContext as b,useContext as w}from"react";import y from"classnames";import{Tooltip as k,Calendar as O,Menu as x,Dropdown as j,Button as _,Progress as C,Slider as N}from"antd";import S from"@babel/runtime/helpers/esm/extends";import z from"@babel/runtime/helpers/esm/inheritsLoose";import I from"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";import T from"react-dom";import{useSpring as M,animated as L}from"react-spring";import{useTable as R,useFilters as D,useSortBy as B,useFlexLayout as P,usePagination as H,useColumnOrder as A}from"react-table";import{SortableHandle as E,SortableElement as V,SortableContainer as $}from"react-sortable-hoc";import{useSticky as W}from"react-table-sticky";import{v4 as F}from"uuid";import{omit as q,isNaN as K}from"lodash";import U from"lodash/map";import Y from"lodash/values";import Z from"lodash/toNumber";import G from"lodash/get";import X from"rc-rate";import{toast as J}from"react-toastify";import"react-toastify/dist/ReactToastify.css";var Q={table:{showHideColumn:"Show/Hide column",searchPlaceholder:"Search",showAllText:"Show all"},vote:{headerRate:"Rate",cancleText:"Cancel",okText:"Rate",label:"Note",enterPlaceholderDescription:"Enter your opinion",scoreLabel:"Weighted score",enterNumberError:"Please enter number",maxError:"Total not more than 100%",taskRate:"Rating settings",overallRate:"Overall rating",specificRate:"Criteria-based rating",setCriteriaAndWeights:"Crtieria and weight settings",uniformWeight:"Equal weight",weightSetting:"Customized weight",addCriteria:"Add criterion",labelWeited:"Wieghted score (%)",labelDescription:"Description",placeholderEnterDescription:"Please input your description",placeholderLabel:"Please input your label"}},ee={table:{showHideColumn:"Hiện/Ẩn cột",searchPlaceholder:"Tìm kiếm",showAllText:"Hiện tất cả"},vote:{headerRate:"Đánh giá công việc",cancleText:"Hủy bỏ",okText:"Đánh giá",label:"Mô tả",enterPlaceholderDescription:"Vui lòng nhập mô tả",scoreLabel:"Điểm đánh giá tổng quan",enterNumberError:"Vui lòng nhập số",maxError:"Tổng không quá 100%",taskRate:"Đánh giá công việc",overallRate:"Đánh giá tổng quan",specificRate:"Đánh giá theo tiêu chí cụ thể",setCriteriaAndWeights:"Thiết lập tiêu chí và trọng số",uniformWeight:"Thiết lập tiêu chí và trọng số",weightSetting:"Tùy chỉnh trọng số",addCriteria:"Thêm tiêu chí",placeholderLabel:"Vui lòng nhập nhãn",labelWeited:"Trọng số (%)",labelDescription:"Mô tả",placeholderEnterDescription:"Vui lòng nhập mô tả"}};e.use(t).init({resources:{en:Q,vi:ee},detection:{order:["localStorage"],lookupLocalStorage:"lng"},fallbackLng:"vi",interpolation:{escapeValue:!1},react:{wait:!0}});const te=e=>{var{color:t="#fff",className:n,styles:l={}}=e,o=i(e,["color","className","styles"]);return a("span",Object.assign({className:y("fwork-loader",n),style:Object.assign({color:t},l)},o,{children:a("svg",Object.assign({className:"fwork-loader-circular-loader",viewBox:"25 25 50 50"},{children:a("circle",{className:"fwork-loader-loader-path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"#fff",strokeWidth:"2"},void 0)}),void 0)}),void 0)},ie=s(((e,t)=>{const{size:n="medium",variant:r="default",icon:s,className:c,disabled:h,block:u,children:v,loading:g,onClick:p}=e,f=i(e,["size","variant","icon","className","disabled","block","children","loading","onClick"]);return a("link"===r?"a":"button",Object.assign({ref:t,className:y("fwork-button",{"fwork-default-button":"default"===r,"fwork-primary-button":"primary"===r,"fwork-secondary-button":"secondary"===r,"fwork-dashed-button":"dashed"===r,"fwork-link-button":"link"===r,"fwork-danger-button":"danger"===r,[`fwork-${n}-button`]:Boolean(n),"fwork-block-button":u,"fwork-loading-button":g,"fwork-disabled-button":h,"fwork-icon-only-button":s&&!v},c),onClick:e=>{g||h||p&&p(e)}},f,{children:g?a(te,{color:"primary"===r?"#fff":"#172b4d"},void 0):l(o,{children:[s?a("span",Object.assign({style:{marginRight:v&&(d(v)||"string"==typeof v)?6:0,display:"inline-flex",alignItems:"center"}},{children:s}),void 0):null,a("span",{children:v},void 0)]},void 0)}),void 0)})),ne=s(((e,t)=>{var{style:n,className:l="",variant:o="paragraph",children:r}=e,s=i(e,["style","className","variant","children"]);return a({h1:"h1",h2:"h2",h3:"h3",h4:"h4",important:"strong",paragraph:"p",caption:"span",sub1:"span",sub2:"span",link:"a"}[o],Object.assign({ref:t,className:y("fwork-text",{"fwork-text-h1":"h1"===o,"fwork-text-h2":"h2"===o,"fwork-text-h3":"h3"===o,"fwork-text-h4":"h4"===o,"fwork-text-important":"important"===o,"fwork-text-paragraph":"paragraph"===o,"fwork-text-caption":"caption"===o,"fwork-text-sub1":"sub1"===o,"fwork-text-sub2":"sub2"===o,"fwork-text-link":"link"===o},l),style:n},s,{children:r}),void 0)}));var ae={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},le=r.createContext&&r.createContext(ae),oe=function(){return oe=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},oe.apply(this,arguments)},re=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};function se(e){return e&&e.map((function(e,t){return r.createElement(e.tag,oe({key:t},e.attr),se(e.child))}))}function de(e){return function(t){return r.createElement(ce,oe({attr:oe({},e.attr)},t),se(e.child))}}function ce(e){var t=function(t){var i,n=e.attr,a=e.size,l=e.title,o=re(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),r.createElement("svg",oe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:i,style:oe(oe({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==le?r.createElement(le.Consumer,null,(function(e){return t(e)})):t(ae)}function he(e){return de({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function ue(e){return de({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]})(e)}function ve(e){return de({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]})(e)}function ge(e){return de({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}}]})(e)}const pe=s(((e,t)=>{var{style:n,className:o="",disabled:r=!1,placeholder:s="",label:d="",help:h="",type:u="text",required:v=!1,validateStatus:g="",icon:p,tooltipTitle:f=null,preIcon:m=null}=e,b=i(e,["style","className","disabled","placeholder","label","help","type","required","validateStatus","icon","tooltipTitle","preIcon"]);const[w,O]=c(!1);return l("div",Object.assign({className:y("fwork-input-wrapper",o),style:n},{children:[d?l("label",Object.assign({className:"fwork-input-label"},{children:[d," ",v?a("span",Object.assign({className:"fwork-input-required"},{children:"*"}),void 0):null,f&&a(k,Object.assign({title:f},{children:a(ue,{style:{marginLeft:8}},void 0)}),void 0)]}),void 0):null,l("div",Object.assign({className:y("fwork-input-wrapper-input",{"fwork-wrapper-input-disabled":r,"fwork-wrapper-input-focus":w,[`fwork-wrapper-input-${g}`]:Boolean(g)})},{children:[m&&m,a("input",Object.assign({ref:t,className:y("fwork-input"),disabled:r,placeholder:s,onFocus:()=>O(!0),onBlur:()=>O(!1),type:u},b),void 0),a("div",Object.assign({style:{width:20,display:"flex",alignItems:"center",justifyContent:"flex-end"}},{children:p||null}),void 0)]}),void 0),h?a("span",Object.assign({className:"fwork-input-help"},{children:h}),void 0):null]}),void 0)})),fe=s(((e,t)=>{var{style:n,className:o="",disabled:r=!1,placeholder:s="",label:d="",help:c="",required:h=!1,service:u="",rows:v=3,cols:g=30,validateStatus:p=""}=e,f=i(e,["style","className","disabled","placeholder","label","help","required","service","rows","cols","validateStatus"]);return l("div",Object.assign({className:y("fwork-textarea-wrapper",o),style:n},{children:[d?l("label",Object.assign({className:"fwork-textarea-label"},{children:[d," ",h?a("span",Object.assign({className:"fwork-textarea-required"},{children:"*"}),void 0):null]}),void 0):null,a("textarea",Object.assign({ref:t,className:y("fwork-textarea",{"fwork-textarea-disabled":r,[`fwork-textarea-${p}`]:Boolean(p)}),disabled:r,placeholder:s,rows:v,cols:g},f),void 0),c?a("span",Object.assign({className:"fwork-textarea-help"},{children:c}),void 0):null]}),void 0)})),me=({className:e,style:t,children:i,span:n})=>a("div",Object.assign({className:y({container:!Boolean(n),[`container-${n}`]:Boolean(n)},e),style:t},{children:i}),void 0),be=({className:e,style:t,children:i,gutters:n})=>{let l={};return n&&n.length&&n[0]&&(l[`gx-${n[0]}`]=!0),n&&n.length&&n[1]&&(l[`gy-${n[1]}`]=!0),a("div",Object.assign({className:y("row",Object.assign({},l),e),style:t},{children:i}),void 0)},we=({className:e,style:t,children:i,span:n,xs:l,sm:o,md:r,lg:s,xl:d,xxl:c})=>a("div",Object.assign({className:y({[`col-${n}`]:Boolean(n),[`col-xs-${l}`]:Boolean(l),[`col-sm-${o}`]:Boolean(o),[`col-md-${r}`]:Boolean(r),[`col-lg-${s}`]:Boolean(s),[`col-xl-${d}`]:Boolean(d),[`col-xxl-${c}`]:Boolean(c)},e),style:t},{children:i}),void 0);function ye(e){return de({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(e)}function ke(e){return de({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}}]})(e)}function Oe(e){return de({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(e)}const xe=(e,t,i)=>{if(!t)return;const n=Array.isArray(t)?t:t.match(/([^[.\]])+/g),a=n&&n.includes("length"),l=n.reduce(((e,t)=>e&&e[t]),e);return[0,"0"].includes(l)&&!a?l:l||i},je=e=>!!Array.isArray(e),_e=({className:e,size:t="medium",paragraph:i,style:n,width:l,height:o,rounded:r})=>i&&i.rows?a("div",Object.assign({className:y("fwork-skeleton--paragraph",e)},{children:Array.from({length:i.rows}).map((i=>a("div",{className:y("fwork-skeleton",{[`fwork-skeleton-${t}`]:Boolean(t),"fwork-skeleton-rounded":r},e),style:Object.assign({width:l,height:o},n)},void 0)))}),void 0):a("div",{className:y("fwork-skeleton",{[`fwork-skeleton-${t}`]:Boolean(t),"fwork-skeleton-rounded":r},e),style:Object.assign(Object.assign({},n),{width:l,height:o})},void 0);var Ce=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Ne(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(n=e[i],a=t[i],!(n===a||Ce(n)&&Ce(a)))return!1;var n,a;return!0}function Se(e,t){var i;void 0===t&&(t=Ne);var n,a=[],l=!1;return function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];return l&&i===this&&t(o,a)||(n=e.apply(this,o),l=!0,i=this,a=o),n}}var ze="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function Ie(e){cancelAnimationFrame(e.id)}var Te=null;function Me(e){if(void 0===e&&(e=!1),null===Te||e){var t=document.createElement("div"),i=t.style;i.width="50px",i.height="50px",i.overflow="scroll",i.direction="rtl";var n=document.createElement("div"),a=n.style;return a.width="100px",a.height="100px",t.appendChild(n),document.body.appendChild(t),t.scrollLeft>0?Te="positive-descending":(t.scrollLeft=1,Te=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),Te}return Te}process.env.NODE_ENV;var Le=function(e,t){return e},Re=null,De=null;function Be(e){var t,i,n=e.getItemOffset,a=e.getEstimatedTotalSize,l=e.getItemSize,o=e.getOffsetForIndexAndAlignment,r=e.getStartIndexForOffset,s=e.getStopIndexForStartIndex,d=e.initInstanceProps,c=e.shouldResetStyleCacheOnItemSizeChange,v=e.validateProps;return i=t=function(e){function t(t){var i;return(i=e.call(this,t)||this)._instanceProps=d(i.props,I(I(i))),i._outerRef=void 0,i._resetIsScrollingTimeoutId=null,i.state={instance:I(I(i)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof i.props.initialScrollOffset?i.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},i._callOnItemsRendered=void 0,i._callOnItemsRendered=Se((function(e,t,n,a){return i.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:n,visibleStopIndex:a})})),i._callOnScroll=void 0,i._callOnScroll=Se((function(e,t,n){return i.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:n})})),i._getItemStyle=void 0,i._getItemStyle=function(e){var t,a=i.props,o=a.direction,r=a.itemSize,s=a.layout,d=i._getItemStyleCache(c&&r,c&&s,c&&o);if(d.hasOwnProperty(e))t=d[e];else{var h=n(i.props,e,i._instanceProps),u=l(i.props,e,i._instanceProps),v="horizontal"===o||"horizontal"===s,g="rtl"===o,p=v?h:0;d[e]=t={position:"absolute",left:g?void 0:p,right:g?p:void 0,top:v?0:h,height:v?"100%":u,width:v?u:"100%"}}return t},i._getItemStyleCache=void 0,i._getItemStyleCache=Se((function(e,t,i){return{}})),i._onScrollHorizontal=function(e){var t=e.currentTarget,n=t.clientWidth,a=t.scrollLeft,l=t.scrollWidth;i.setState((function(e){if(e.scrollOffset===a)return null;var t=i.props.direction,o=a;if("rtl"===t)switch(Me()){case"negative":o=-a;break;case"positive-descending":o=l-n-a}return o=Math.max(0,Math.min(o,l-n)),{isScrolling:!0,scrollDirection:e.scrollOffset<a?"forward":"backward",scrollOffset:o,scrollUpdateWasRequested:!1}}),i._resetIsScrollingDebounced)},i._onScrollVertical=function(e){var t=e.currentTarget,n=t.clientHeight,a=t.scrollHeight,l=t.scrollTop;i.setState((function(e){if(e.scrollOffset===l)return null;var t=Math.max(0,Math.min(l,a-n));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),i._resetIsScrollingDebounced)},i._outerRefSetter=function(e){var t=i.props.outerRef;i._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},i._resetIsScrollingDebounced=function(){var e,t,n,a;null!==i._resetIsScrollingTimeoutId&&Ie(i._resetIsScrollingTimeoutId),i._resetIsScrollingTimeoutId=(e=i._resetIsScrolling,t=150,n=ze(),a={id:requestAnimationFrame((function i(){ze()-n>=t?e.call(null):a.id=requestAnimationFrame(i)}))})},i._resetIsScrolling=function(){i._resetIsScrollingTimeoutId=null,i.setState({isScrolling:!1},(function(){i._getItemStyleCache(-1,null)}))},i}z(t,e),t.getDerivedStateFromProps=function(e,t){return Pe(e,t),v(e),null};var i=t.prototype;return i.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},i.scrollToItem=function(e,t){void 0===t&&(t="auto");var i=this.props.itemCount,n=this.state.scrollOffset;e=Math.max(0,Math.min(e,i-1)),this.scrollTo(o(this.props,e,t,n,this._instanceProps))},i.componentDidMount=function(){var e=this.props,t=e.direction,i=e.initialScrollOffset,n=e.layout;if("number"==typeof i&&null!=this._outerRef){var a=this._outerRef;"horizontal"===t||"horizontal"===n?a.scrollLeft=i:a.scrollTop=i}this._callPropsCallbacks()},i.componentDidUpdate=function(){var e=this.props,t=e.direction,i=e.layout,n=this.state,a=n.scrollOffset;if(n.scrollUpdateWasRequested&&null!=this._outerRef){var l=this._outerRef;if("horizontal"===t||"horizontal"===i)if("rtl"===t)switch(Me()){case"negative":l.scrollLeft=-a;break;case"positive-ascending":l.scrollLeft=a;break;default:var o=l.clientWidth,r=l.scrollWidth;l.scrollLeft=r-o-a}else l.scrollLeft=a;else l.scrollTop=a}this._callPropsCallbacks()},i.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&Ie(this._resetIsScrollingTimeoutId)},i.render=function(){var e=this.props,t=e.children,i=e.className,n=e.direction,l=e.height,o=e.innerRef,r=e.innerElementType,s=e.innerTagName,d=e.itemCount,c=e.itemData,u=e.itemKey,v=void 0===u?Le:u,g=e.layout,p=e.outerElementType,f=e.outerTagName,m=e.style,b=e.useIsScrolling,w=e.width,y=this.state.isScrolling,k="horizontal"===n||"horizontal"===g,O=k?this._onScrollHorizontal:this._onScrollVertical,x=this._getRangeToRender(),j=x[0],_=x[1],C=[];if(d>0)for(var N=j;N<=_;N++)C.push(h(t,{data:c,key:v(N,c),index:N,isScrolling:b?y:void 0,style:this._getItemStyle(N)}));var z=a(this.props,this._instanceProps);return h(p||f||"div",{className:i,onScroll:O,ref:this._outerRefSetter,style:S({position:"relative",height:l,width:w,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:n},m)},h(r||s||"div",{children:C,ref:o,style:{height:k?"100%":z,pointerEvents:y?"none":void 0,width:k?z:"100%"}}))},i._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],i=e[1],n=e[2],a=e[3];this._callOnItemsRendered(t,i,n,a)}if("function"==typeof this.props.onScroll){var l=this.state,o=l.scrollDirection,r=l.scrollOffset,s=l.scrollUpdateWasRequested;this._callOnScroll(o,r,s)}},i._getRangeToRender=function(){var e=this.props,t=e.itemCount,i=e.overscanCount,n=this.state,a=n.isScrolling,l=n.scrollDirection,o=n.scrollOffset;if(0===t)return[0,0,0,0];var d=r(this.props,o,this._instanceProps),c=s(this.props,d,o,this._instanceProps),h=a&&"backward"!==l?1:Math.max(1,i),u=a&&"forward"!==l?1:Math.max(1,i);return[Math.max(0,d-h),Math.max(0,Math.min(t-1,c+u)),d,c]},t}(u),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},i}"production"!==process.env.NODE_ENV&&"undefined"!=typeof window&&void 0!==window.WeakSet&&(Re=new WeakSet,De=new WeakSet);var Pe=function(e,t){var i=e.children,n=e.direction,a=e.height,l=e.layout,o=e.innerTagName,r=e.outerTagName,s=e.width,d=t.instance;if("production"!==process.env.NODE_ENV){null==o&&null==r||De&&!De.has(d)&&(De.add(d),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var c="horizontal"===n||"horizontal"===l;switch(n){case"horizontal":case"vertical":Re&&!Re.has(d)&&(Re.add(d),console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));break;case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". "'+n+'" was specified.')}switch(l){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". "'+l+'" was specified.')}if(null==i)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===i?"null":typeof i)+'" was specified.');if(c&&"number"!=typeof s)throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. "'+(null===s?"null":typeof s)+'" was specified.');if(!c&&"number"!=typeof a)throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. "'+(null===a?"null":typeof a)+'" was specified.')}},He=Be({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,i,n){var a=e.direction,l=e.height,o=e.itemCount,r=e.itemSize,s=e.layout,d=e.width,c="horizontal"===a||"horizontal"===s?d:l,h=Math.max(0,o*r-c),u=Math.min(h,t*r),v=Math.max(0,t*r-c+r);switch("smart"===i&&(i=n>=v-c&&n<=u+c?"auto":"center"),i){case"start":return u;case"end":return v;case"center":var g=Math.round(v+(u-v)/2);return g<Math.ceil(c/2)?0:g>h+Math.floor(c/2)?h:g;default:return n>=v&&n<=u?n:n<v?v:u}},getStartIndexForOffset:function(e,t){var i=e.itemCount,n=e.itemSize;return Math.max(0,Math.min(i-1,Math.floor(t/n)))},getStopIndexForStartIndex:function(e,t,i){var n=e.direction,a=e.height,l=e.itemCount,o=e.itemSize,r=e.layout,s=e.width,d=t*o,c="horizontal"===n||"horizontal"===r?s:a,h=Math.ceil((c+i-d)/o);return Math.max(0,Math.min(l-1,t+h-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.itemSize;if("production"!==process.env.NODE_ENV&&"number"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.')}});const Ae=!("undefined"==typeof window||!window.document||!window.document.createElement),Ee=({node:e,children:t,id:i,className:n,isStatic:a=!1})=>{if(a)return t;const l=v(null);return g((()=>()=>{l.current&&document.body.removeChild(l.current),l.current=null}),[]),Ae?(e||l.current||(l.current=document.createElement("div"),l.current.className=n,l.current.id=i||"portal",document.body.appendChild(l.current)),T.createPortal(t,e||l.current)):null};function Ve(e,t){g((()=>{const i=i=>{e.current&&!e.current.contains(i.target)&&t(i)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}}),[e,t])}const $e=({placeholder:e,value:t,disabled:i=!1,inputDisabled:n=!1,onChange:l,centerText:o})=>a("input",{className:y("fwork-select__input",{"fwork-select__input-disabled":i||n,"fwork-select__input-center":o}),placeholder:e,value:t,style:{minWidth:"1px"},onChange:e=>!i&&l&&l(e),disabled:n},void 0);function We(e){return de({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M416 128L192 384l-96-96"}}]})(e)}function Fe(e){return de({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}function qe(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}const Ke=({weight:e,removable:t,removeIcon:i,label:n,style:o,addText:r="New tag",variant:s="default",add:d,onAdd:h,color:u,background:p,onRemove:f,className:m})=>{const[b,w]=c(!1),[k,O]=c(""),x=v(null),j=v();Ve(x,(()=>{w(!1)}));return g((()=>{var e;b?null===(e=j.current)||void 0===e||e.focus():O("")}),[b]),l("div",Object.assign({ref:x,style:Object.assign(Object.assign({},o),{color:u?`${u} !important`:"",backgroundColor:p?`${p} !important`:""}),className:y(m,"fwork__tag-wrapper","fwork__tag-default",{[`fwork__tag-${e}-${s}`]:Boolean(s)&&Boolean(e),"fwork__tag-weight":Boolean(e),"fwork__tag-add":d&&!b,"fwork__tag-typing":b})},{children:[d&&!b?a(qe,{style:{marginRight:4,cursor:"pointer"},onClick:()=>w(!0)},void 0):null,d||b?null:a("div",{children:n},void 0),d&&!b?a("div",Object.assign({style:{cursor:"pointer"},onClick:()=>w(!0)},{children:r}),void 0):null,b?a("input",{className:"fwork__tag-input",onKeyUp:e=>{"Enter"!==e.key&&13!==e.keyCode||(h&&h(k),w(!1)),"Escape"!==e.key&&27!==e.keyCode||w(!1)},onChange:e=>O(e.target.value),ref:j},void 0):null,!t||d||b?null:a("div",Object.assign({className:"fwork__tag-remove-icon",onClick:e=>{e.stopPropagation(),f&&f()}},{children:i||a(Fe,{},void 0)}),void 0)]}),void 0)};function Ue(e){return Array.isArray(e)?Boolean(e.length):!(![0,"0"].includes(e)&&!e)}const Ye=e=>{var{className:t,item:n,showAvatar:o,showDescription:r,style:s,labelKey:d,isSelected:c,selectedDisplay:h,checkbox:u,onCheckboxChange:v}=e,g=i(e,["className","item","showAvatar","showDescription","style","labelKey","isSelected","selectedDisplay","checkbox","onCheckboxChange"]);return l("div",Object.assign({className:y("fwork-select-option",t)},g,{children:[u?a("input",{type:"checkbox",style:{marginRight:"6px",transform:"translateY(-1px)"},checked:c,onChange:e=>v&&v(e.target.checked)},void 0):null,o?a("img",{src:n&&n.avatar,alt:"avatar",className:"fwork-select-option__avatar"},void 0):null,l("div",Object.assign({className:"fwork-select-option__info-wrapper"},{children:[a("span",Object.assign({className:"fwork-select-option__label"},{children:xe(n,d,"")}),void 0),r?a("span",Object.assign({className:"fwork-select-option__description"},{children:n&&n.description}),void 0):null]}),void 0),c&&((null==h?void 0:h.includes("tick"))||"tick"===h)?a(We,{style:{marginLeft:"auto",marginRight:"3px",color:"#388e3c"}},void 0):null]}),void 0)},Ze=e=>{var{centerText:t,quickCreate:n,onQuickCreate:r,quickCreateContent:s="Tạo nhanh",itemStyle:d,contentStyle:h,listStyle:u,listExtra:f,ghost:m,suffix:b,customResultRender:w,selectedDisplay:k="background",multiple:O,checkbox:x,closeOnSelect:j=!0,data:_,onChange:C,onSearch:N,renderItem:S,valueKey:z,labelKey:I,value:T,defaultNumItem:M=3,loading:L=!1,searchable:R=!1,disabled:D=!1,showAvatar:B=!1,showDescription:P=!1,label:H="",help:A="",required:E=!1,validateStatus:V="",placeholder:$,mode:W,customClassName:F}=e,q=i(e,["centerText","quickCreate","onQuickCreate","quickCreateContent","itemStyle","contentStyle","listStyle","listExtra","ghost","suffix","customResultRender","selectedDisplay","multiple","checkbox","closeOnSelect","data","onChange","onSearch","renderItem","valueKey","labelKey","value","defaultNumItem","loading","searchable","disabled","showAvatar","showDescription","label","help","required","validateStatus","placeholder","mode","customClassName"]);const[K,U]=c(T||null),[Y,Z]=c(""),[G,X]=c(!1),[J,Q]=c({}),ee=v(null),te=v(0),ie=v(B?48:32),ne=(e,t,i=!1)=>{e&&e.stopPropagation();let n=t;if(z&&(n=xe(t,z,null)),O)if(i)n=null==K?void 0:K.filter((e=>xe(e,z,e)!==xe(t,z,t)));else{n=(null==K?void 0:K.find((e=>xe(e,z,e)===xe(t,z,t))))?null==K?void 0:K.filter((e=>xe(e,z,e)!==xe(t,z,t))):[...K,t]}else i?(n=null,U(null)):(U(t),Z(""));C&&C(n),j&&X(!1)},ae=p((()=>Y?_.filter((e=>N?N(Y,e):xe(e,I).toLowerCase().includes(Y.toLowerCase()))):_),[Y,_]);g((()=>{if(xe(_,"length",0)&&Ue(T))if(je(T)){const e=T.map((e=>_.find((t=>xe(t,z,t)===xe(e,z,e))))).filter((e=>e));U(e)}else{const e=_.find((e=>xe(e,z,e)===xe(T,z,T)));U(e)}else U(O?[]:null)}),[T,_]);const le=()=>n?a("div",Object.assign({className:"fwork-select__quick-create",onClick:()=>r&&r()},{children:s}),void 0):null;Ve(ee,(e=>{e.target.closest("#portal")||X(!1)}));const oe=p((()=>{if(L)return a("div",Object.assign({style:{marginTop:-16}},{children:a(_e,{width:"100%",size:"medium",paragraph:{rows:M}},void 0)}),void 0)}),[L]);return l("div",Object.assign({className:y("fwork-select",{open:G,[`fwork-select-${V}`]:Boolean(V)}),onClick:()=>{if(!D&&"undefined"!=typeof window){if(!ee||!ee.current)return;const e={},t=ee.current.getBoundingClientRect();e.width=t.width,te.current=t.width,e.left=t.left+t.width/2-e.width/2,e.left=Math.max(e.left),e.left=Math.min(e.left,document.body.clientWidth-e.width),t.top<window.innerHeight/2?e.top=t.top+t.height:e.bottom=window.innerHeight-t.top,X(!0),Q(e)}},ref:ee,style:Object.assign(Object.assign({},q.style),J)},{children:[H?l("label",Object.assign({className:"fwork-select-label"},{children:[H," ",E?a("span",Object.assign({className:"fwork-input-required"},{children:"*"}),void 0):null]}),void 0):null,l("div",Object.assign({className:y("fwork-select__input-wrapper",{"fwork-select__ghost":m}),style:h},{children:[O?(()=>{var e;return w||("tags"===W?a("div",Object.assign({className:"fwork-select__multiple-selection"},{children:null==K?void 0:K.map((e=>a(Ke,{style:{marginRight:6},label:xe(e,I,0),removable:!0,onRemove:()=>ne(null,e,!0)},void 0)))}),void 0):(null==K?void 0:K.length)?a("div",Object.assign({className:"fwork-select__truncate"},{children:null===(e=null==K?void 0:K.map((e=>xe(e,I,0))))||void 0===e?void 0:e.join(",")}),void 0):null)})():null,a($e,{placeholder:Ue(K)?O?Y:xe(K,I):$,centerText:t,value:R&&G?Y:Ue(xe(K,I))?w||xe(K,I):"",onChange:e=>{Z(e.target.value)},disabled:!R,inputDisabled:D},void 0),b?a("div",Object.assign({className:"fwork-select__input-suffix"},{children:b}),void 0):a(ye,{size:16,className:"fwork-select__input-icon"},void 0)]}),void 0),A?a("span",Object.assign({className:"fwork-select-help"},{children:A}),void 0):null,!D&&a(Ee,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:G?a("div",Object.assign({className:"fwork-select__body",style:J},{children:L?oe:(e=>e&&e.length?l(o,{children:[f||null,S?e.map(((e,t)=>a("div",{children:S(e)},t))):a(He,Object.assign({width:te.current,height:e.length*ie.current,itemSize:ie.current,itemCount:e.length,style:u},{children:({index:t,style:i})=>{let n=!1;if(je(T)&&O){const i=T.find((i=>Ue(xe(i,z,i))&&xe(i,z,i)===xe(e[t],z,e[t])));Ue(i)&&(n=!0)}else n=Ue(xe(T,z,T))&&xe(e[t],z,e[t])===xe(T,z,T);let l=[];return F&&(l=((e,t)=>e.map(((e,i)=>t(e,i))))(e,F)),a(Ye,{style:Object.assign(Object.assign({},i),d),onClick:i=>ne(i,e[t]),onCheckboxChange:i=>i?ne(null,e[t]):ne(null,e[t],!0),item:e[t],showAvatar:B,showDescription:P,labelKey:I,isSelected:n,checkbox:x,selectedDisplay:k,className:y({"fwork-select__selected-background":n&&("background"===k||k.includes("background"))},l.length?l[t]:"")},void 0)}}),void 0),n?le():null]},void 0):n?le():null)(ae)}),void 0):null}),void 0)]}),void 0)},Ge=(e,t)=>Array(t-e+1).fill(0).map(((t,i)=>e+i));function Xe({current:e,pageCount:t,onChangePage:i}){const[n,a]=c(e),[l,o]=c([]),r=e=>{const i=Math.max(0,Math.min(e,t));a(i)};return g((()=>{i&&i(n)}),[n]),g((()=>{const i=(()=>{const i=t;if(i>7){let t=[];const n=e-1,a=e+1,l=i-1,o=n>2?n:2,r=a<l?a:l;t=Ge(o,r);const s=5-t.length-1,d=o>2,c=r<l,h="LEFT",u="RIGHT";if(d&&!c)t=[h,...Ge(o-s,o-1),...t];else if(!d&&c){const e=Ge(r+1,r+s);t=[...t,...e,u]}else d&&c&&(t=[h,...t,u]);return[1,...t,i]}return Ge(1,i)})();o(i)}),[t,e,1]),{pages:l,handleClick:(e,t)=>{t.preventDefault(),r(e)},handleMoveLeft:e=>{e.preventDefault(),r(n-2-1)},handleMoveRight:e=>{e.preventDefault(),r(n+2+1)},handleNext:()=>{r(n+1)},handlePrevious:()=>{r(n-1)}}}const Je=({currentPage:e,onChangePage:t,pageCount:i,canPreviousPage:n,canNextPage:r})=>{const{pages:s,handleClick:d,handleMoveLeft:c,handleMoveRight:h,handleNext:u,handlePrevious:v}=Xe({current:e,pageCount:i,onChangePage:t});return 1===i?null:l("div",Object.assign({className:"fwork-pagination"},{children:[a(ke,{style:{cursor:n?"":"no-drop",opacity:n?1:.6},onClick:()=>n?v():null},void 0),(t=>a(o,{children:t.map(((t,i)=>a("div","LEFT"===t?Object.assign({onClick:c,className:"fwork-pagination__pagination-number"},{children:"..."}):"RIGHT"===t?Object.assign({onClick:h,className:"fwork-pagination__pagination-number"},{children:"..."}):Object.assign({onClick:e=>d(t,e),className:y("fwork-pagination__pagination-number",{"fwork-pagination__pagination-number--active":t===e})},{children:t}),i)))},void 0))(s),a(Oe,{style:{cursor:r?"":"no-drop",opacity:r?1:.6},onClick:()=>r?u():null},void 0)]}),void 0)};function Qe(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}}]})(e)}function et(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)}const tt=({items:e,separator:t,onClick:i,service:n="work",truncate:r=!0,maxWidthItem:s="100px",itemStyle:d={}})=>{const c=e.length;return a("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:e.map(((e,h)=>l(o,{children:[a("span",Object.assign({className:y("fwork-breadcrumb-item",{"fwork-breadcrumb-item-truncate":r,[`fwork-breadcrumb-item-${n}`]:n}),onClick:()=>i&&i(e.link),style:Object.assign(Object.assign({},d),{maxWidth:s}),title:e.name},{children:e.name}),void 0),h<c-1?a("span",Object.assign({className:y("fwork-breadcrumb-separator")},{children:t||a(Qe,{},void 0)}),void 0):null]},void 0)))}),void 0)},it=({icon:e,title:t,actions:i,extra:n,description:o,tabs:r,breadcrumbs:s,service:d="work",tabIndex:c,onTabChange:h})=>{const u=v(!1),[p,m]=M((()=>({transform:"translateX(0px)",width:0,config:{duration:250},onStart:()=>{u.current=!0},onRest:()=>{u.current=!1}}))),b=f((e=>{if(!r||!r.length)return;let t=0;return r.reduce(((i,n,a)=>{if(n.id===e&&(t=1),1===t)return i;const l=document.querySelector(`.fwork-page-header__tab-wrapper span:nth-child(${a+1})`);return i+(l&&l.offsetWidth||0)+24}),0)}),[r]),w=f((e=>{const t=r&&r.length&&r.findIndex((t=>t.id===e));if(!t&&0!==t)return 0;const i=document.querySelector(`.fwork-page-header__tab-wrapper span:nth-child(${t+1})`);return i&&i.offsetWidth}),[r]),k=(e,t)=>{h&&"function"==typeof h&&(u&&u.current||h(e))};return g((()=>{c&&m({transform:`translateX(${b(c)}px)`,width:w(c)})}),[m,b,w,c]),l("div",Object.assign({className:y("fwork-page-header",{"fwork-page-header--hasTabs":r&&r.length})},{children:[s?a(tt,{service:d,items:s.items,maxWidthItem:s.maxWidthItem,separator:s.separator,truncate:s.truncate,onClick:s.onClick},void 0):null,l("div",Object.assign({className:"fwork-page-header__main"},{children:[l("div",Object.assign({className:"fwork-page-header__heading"},{children:[e?a("div",Object.assign({className:"fwork-page-header__heading-icon-wrapper"},{children:e}),void 0):null,a(ne,Object.assign({variant:"h2"},{children:t}),void 0)]}),void 0),i?a("div",Object.assign({className:"fwork-page-header__actions"},{children:i}),void 0):null,n?a("div",Object.assign({className:"fwork-page-header__extra"},{children:n}),void 0):null]}),void 0),o?a("div",Object.assign({className:"fwork-page-header__description"},{children:o}),void 0):null,r&&r.length?l("div",Object.assign({className:"fwork-page-header__tabs"},{children:[a("div",Object.assign({className:y("fwork-page-header__tab-wrapper")},{children:r.map((e=>a(ne,Object.assign({className:y("fwork-page-header__tabs-text",{"fwork-page-header__tabs--active":e.id===c,[`fwork-page-header__tabs--active--${d}`]:e.id===c,[`fwork-page-header__tabs-text-${d}`]:d}),variant:"sub2",onClick:k.bind(null,e.id),style:{cursor:"pointer"}},{children:e.label}),e.id.toString())))}),void 0),a(L.div,{className:y("fwork-page-header__tabs--indicator",{[`fwork-page-header__tabs--indicator--${d}`]:d}),style:p},void 0)]}),void 0):null]}),void 0)};function nt(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 9h6a1 1 0 0 0 1-1V2h10.002c.551 0 .998.455.998.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V9zm0-2l5-4.997V7H3z"}}]}]})(e)}function at(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286 7.4 8H5l2.8 4L5 16h2.4L9 13.714 10.6 16H13l-2.8-4z"}}]}]})(e)}function lt(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0L24 0 24 24 0 24z"}},{tag:"path",attr:{d:"M16 2l5 5v13.993c0 .556-.445 1.007-.993 1.007H3.993C3.445 22 3 21.545 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm-3 8h-1v5h1v-5zm-2 0H9c-1.105 0-2 .895-2 2v1c0 1.105.895 2 2 2h1c.552 0 1-.448 1-1v-2H9v1h1v1H9c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h2v-1zm6 0h-3v5h1v-2h2v-1h-2v-1h2v-1z"}}]}]})(e)}function ot(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 14a4 4 0 1 0 0-8H8v8h4zm-2-6h2a2 2 0 1 1 0 4h-2v-4z"}}]}]})(e)}function rt(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM11 8v4.989L9 11l-1.99 2L7 8H5v8h2l2-2 2 2h2V8h-2z"}}]}]})(e)}function st(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M21 5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H16v2h2V5h3zm-3 8h-2v2h-2v3h4v-5zm-2-2h-2v2h2v-2zm2-2h-2v2h2V9zm-2-2h-2v2h2V7z"}}]}]})(e)}function dt(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}}]}]})(e)}function ct(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]}]})(e)}function ht(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]}]})(e)}function ut(e){return de({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"}}]})(e)}function vt(e){return de({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 192l128 128 128-128z"}}]})(e)}function gt(e){return de({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 320l128-128 128 128z"}}]})(e)}function pt(e){return de({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}function ft(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"}}]})(e)}function mt(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function bt(e){return de({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"}}]})(e)}function wt(e){return de({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(e)}function yt(e){return de({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}}]})(e)}function kt(e,t=10){if((e.match(/ /g)||[]).length<t)return e.length>20?e.slice(0,20)+"...":e;const i=e.trim().split(" "),n=i.length>t?"...":"";return i.slice(0,t).join(" ")+n}const Ot=({allColumns:e,filters:t,setFilter:i,setAllFilters:n})=>{const r=v(null),[s,d]=c(!1),[h,u]=c({}),[g,p]=c([]),f=e=>kt(e.value.map((e=>null==e?void 0:e.value)).join(", "),3);return Ve(r,(e=>{e.target.closest("#portal")||d(!1)})),t&&t.length?l(o,{children:[l("div",Object.assign({className:"filter-head"},{children:[a(bt,{},void 0),"  ",a("span",Object.assign({style:{color:"#172b4d",fontWeight:600}},{children:"Bộ lọc:"}),void 0),"  ",a("div",Object.assign({className:"filter-head__filter-lists"},{children:t&&t.length?t.map((i=>{var o;return l("div",Object.assign({className:"filter-head__filter"},{children:[l("div",Object.assign({style:{cursor:"string"!=typeof(null==i?void 0:i.value)?"pointer":"default"},onClick:e=>{"string"!=typeof(null==i?void 0:i.value)&&((e=>{p(e.value.map((t=>Object.assign(Object.assign({},t),{columnId:e.id}))))})(i),(e=>{if(r.current=e.target,s)d(!1);else if("undefined"!=typeof window){if(!r||!r.current)return;const e={width:285},t=r.current.getBoundingClientRect();e.left=t.left-8,t.top+10<window.innerHeight/2?e.top=t.top+t.height:e.bottom=window.innerHeight-t.top,d(!0),u(e)}})(e))}},{children:[l("span",{children:[(null===(o=(e||[]).find((e=>(null==e?void 0:e.id)===(null==i?void 0:i.id))))||void 0===o?void 0:o.Header)||(null==i?void 0:i.id),":"]},void 0)," ",a("span",Object.assign({style:{fontWeight:600}},{children:"string"!=typeof(null==i?void 0:i.value)?f(i):kt(null==i?void 0:i.value,4)}),void 0),"  "]}),void 0),l("div",Object.assign({style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"string"!=typeof(null==i?void 0:i.value)?40:12}},{children:["string"!=typeof(null==i?void 0:i.value)?a(yt,{size:12},void 0):null,a(pt,{size:12,style:{cursor:"pointer"},onClick:()=>{n(t.filter((e=>e.id!==i.id)))}},void 0)]}),void 0)]}),null==i?void 0:i.id)})):null}),void 0),t&&t.length>=2?a("span",Object.assign({style:{marginLeft:14,fontSize:14,fontWeight:600,color:"#1976d2",cursor:"pointer"},onClick:()=>n([])},{children:"Xóa tất cả"}),void 0):null]}),void 0),a(Ee,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:s?a("div",Object.assign({className:"fwk-table__column-setting-popup",style:h},{children:g&&g.length?g.map((e=>l("div",Object.assign({style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},{children:[a("span",{children:null==e?void 0:e.value},void 0),a(pt,{size:16,onClick:()=>{var n;const a=[...t.map((e=>Object.assign({},e)))],l=a.findIndex((t=>(null==t?void 0:t.id)===(null==e?void 0:e.columnId)));if(l>-1){const t=null===(n=a[l])||void 0===n?void 0:n.id,o=a[l].value=g.filter((t=>(null==t?void 0:t.id)!==(null==e?void 0:e.id)));i(t,o&&o.length?o:void 0),p(o),o&&!o.length&&d(!1)}}},void 0)]}),null==e?void 0:e.id))):null}),void 0):null}),void 0)]},void 0):null},xt=e=>{const t=e.find((e=>e.isTotal));return l("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[t?l(ne,Object.assign({variant:"h4",style:{marginBottom:0,marginRight:"18px",display:"inline"}},{children:[t.value," ",t.label]}),void 0):null,e.length?e.filter((e=>!e.isTotal)).map(((e,t)=>l("div",Object.assign({style:{display:"inline-flex",alignItems:"center"}},{children:[a("span",Object.assign({style:{display:"inline-block",width:5,height:5,borderRadius:"50%",background:`${e.color}`}},{children:" "}),void 0),"  ",l(ne,Object.assign({variant:"caption",style:{marginRight:"18px"}},{children:[e.value," ",e.label]}),void 0)]}),t))):null]}),void 0)},jt=s(((e,t)=>{var{indeterminate:n,allColumns:l,setHiddenColumns:o}=e,r=i(e,["indeterminate","allColumns","setHiddenColumns"]);const s=v(null),d=t||s,c=(l||[]).filter((e=>e.id&&!e.disableToggleHidden&&"setting"!==e.id)).map((e=>e.id));return g((()=>{c.length!==n?d.current.indeterminate=n:d.current.indeterminate=!1}),[d,n]),a("input",Object.assign({type:"checkbox",ref:d},r,{onChange:e=>{if(e.target.checked)return o([]),void localStorage.removeItem(window.location.pathname+"_hidden_columns");o(c),localStorage.setItem(window.location.pathname+"_hidden_columns",JSON.stringify(c))}}),void 0)})),_t=E((()=>a(ft,{style:{cursor:"grab"}},void 0))),Ct=V((({value:e,index:t,canDrag:i,disableToggleHidden:n,items:o})=>l("div",Object.assign({className:"fwk-table__column-setting-popup--column-wrapper",style:{zIndex:100}},{children:[i?a(_t,{},void 0):null,l("label",Object.assign({style:{display:"flex",alignItems:"center",flex:1,marginLeft:10}},{children:[a("input",Object.assign({type:"checkbox",disabled:n},n?{checked:!0,indeterminate:!0}:Object.assign(Object.assign({},e.getToggleHiddenProps()),{onChange:t=>Nt(t,e,o)})),void 0),a("div",Object.assign({className:"fwk-table__column-setting-popup--column"},{children:e.Header}),void 0)]}),void 0)]}),t))),Nt=(e,t,i)=>{try{t.toggleHidden(!e.target.checked),setTimeout((()=>{const e=(i||[]).filter((e=>e.id&&!e.disableToggleHidden&&"setting"!==e.id&&!e.isVisible)).map((e=>e.id));localStorage.setItem(window.location.pathname+"_hidden_columns",JSON.stringify(e))}),200)}catch(e){console.log("toggle hidden column error",e)}},St=$((({items:e,canDrag:t})=>a("ul",{children:e.map(((i,n)=>a(Ct,{disableToggleHidden:i.disableToggleHidden,index:n,value:i,canDrag:t,items:e},`item-${i.id}`)))},void 0))),zt=({fetchData:t,searchValue:n,loading:r,loadingComponent:s,heading:u,actions:f,forceUpdate:b,options:w,isFixedRowHeight:k,scrollX:O,scrollY:x,emptyData:j,hoverable:_,saveColumns:C=!0,isStriped:N=!1})=>{const S=m((({allColumns:t,onSortEnd:i})=>{const[n,r]=c("");return l(o,{children:[a("div",Object.assign({className:"fwk-table__column-setting-popup--search"},{children:a(pe,{ref:e=>e&&e.focus(),placeholder:e.t("table:searchPlaceholder"),icon:a(mt,{color:"#a2aab7"},void 0),style:{width:"100%"},value:n,onChange:e=>r(e.target.value)},void 0)}),void 0),a("div",Object.assign({className:"fwk-table__column-setting-popup--columns"},{children:a(St,{items:t.filter((e=>"setting"!==e.id)).filter((e=>e.id.toLowerCase().includes(n.toLowerCase()))),onSortEnd:i,useDragHandle:!0,canDrag:!Boolean(n)},void 0)}),void 0)]},void 0)})),[z,I]=c(!1),[T,M]=c({}),L=v(null),E=()=>{if(z)I(!1);else if("undefined"!=typeof window){if(!L||!L.current)return;const e={width:285},t=L.current.getBoundingClientRect();e.left=t.left-285+t.width,t.top+10<window.innerHeight/2?e.top=t.top+t.height+10:e.bottom=window.innerHeight-t.top,I(!0),M(e)}};Ve(L,(e=>{e.target.closest("#portal")||I(!1)}));const V=p((()=>({disableFilters:!0})),[]),{allColumns:$,getToggleHideAllColumnsProps:F,getTableProps:q,getTableBodyProps:K,headerGroups:U,rows:Y,prepareRow:Z,setColumnOrder:G,canPreviousPage:X,canNextPage:J,pageCount:Q,gotoPage:ee,setPageSize:te,setFilter:ie,setAllFilters:ae,setSortBy:le,setHiddenColumns:oe,state:{pageIndex:re,pageSize:se,filters:de,sortBy:ce}}=R(Object.assign({initialState:{pageIndex:0,pageSize:10},manualPagination:!0,manualSortBy:!0,manualFilters:!0,defaultColumn:V},w),D,B,P,H,W,A);g((()=>{t({pageIndex:re,pageSize:se,filters:de,sortBy:ce,gotoPage:ee,setSortBy:le,searchValue:n}),he()}),[t,re,se,de,ee,b,ce,n]);const he=()=>{if(C)try{let e=localStorage.getItem(window.location.pathname+"_hidden_columns");e=e?JSON.parse(e):[],oe(e)}catch(e){console.log("error init columns",e)}};return l(o,{children:[u||f?l("div",Object.assign({className:"fwk-table__heading-wrapper"},{children:[a("div",Object.assign({className:"fwk-table__heading"},{children:u?d(u)?a(o,{children:u},void 0):xt(u):null}),void 0),a("div",Object.assign({className:"fwk-table__actions"},{children:f}),void 0)]}),void 0):null,a(Ot,{allColumns:$,filters:de,setFilter:ie,setAllFilters:ae},void 0),l("div",Object.assign({},q(),{className:"fwk-table",style:{overflowX:Y&&Y.length&&!r?"auto":!Y||Y.length||r?"":"hidden"}},{children:[a("div",Object.assign({className:"fwk-table__thead"},{children:U.map(((e,t)=>h("div",Object.assign({},e.getHeaderGroupProps(),{className:"fwk-table__tr",key:t}),e.headers.map(((e,t)=>{var n;if("setting"===e.id){const n=e.getHeaderProps(),{style:l}=n,o=i(n,["style"]);return h("div",Object.assign({},o,{style:Object.assign(Object.assign({},l),{justifyContent:"flex-end",paddingRight:0}),className:"fwk-table__th",key:t}),a("div",Object.assign({ref:L,className:"fwk-table__column-setting",onClick:E},{children:a(ht,{size:16},void 0)}),void 0))}const l=e;return l.disableSortBy=null===(n=l.disableSortBy)||void 0===n||n,h("div",Object.assign({},l.getHeaderProps(l.getSortByToggleProps({title:""})),{className:"fwk-table__th",key:t}),a(ne,Object.assign({variant:"important",style:{marginBottom:0,marginRight:8}},{children:l.render("Header")}),void 0),l.canFilter?l.render("Filter"):null,(e=>e.canSort?e.isSorted?e.isSortedDesc?a(vt,{size:22},void 0):a(gt,{size:22},void 0):a(vt,{size:22,style:{opacity:.6}},void 0):null)(l))})))))}),void 0),a("div",Object.assign({},K(),{style:{height:x,overflowY:(r||!Y.length)&&"hidden"},className:"fwk-table__tbody"},{children:r?l(o,{children:[Array.from(Array(se).keys()).map(((e,t)=>a("div",Object.assign({role:"row",className:"fwk-table__tr",style:{boxSizing:"border-box",display:"flex",flex:"1 0 auto",minWidth:900}},{children:$.filter((e=>e.isVisible)).map(((e,t)=>{const i=e.width||150,n=e.minWidth||0;return a("div",Object.assign({role:"cell",style:{boxSizing:"border-box",flexGrow:n,flexShrink:0,flexBasis:"auto",minWidth:`${n||i}px`,width:`${i||n}px`,padding:"10px 5px",paddingLeft:0},className:"fwk-table__td"},{children:s?null:a(_e,{},void 0)}),t)}))}),t))),s?a("div",Object.assign({style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255, 255, 255, 0.6)"}},{children:s}),void 0):null]},void 0):a(o,{children:Y&&Y.length?a(o,{children:Y.map(((e,t)=>(Z(e),h("div",Object.assign({},e.getRowProps(),{className:y("fwk-table__tr",{"fwk-table-fixed-row-height":k,"fwk-table-hoverable":_,"fwk-table__tr-edd":N&&t%2==1}),key:t}),e.cells.map((e=>a("div",Object.assign({},e.getCellProps(),{className:"fwk-table__td"},{children:d(e.value)?e.render("Cell"):a(ne,Object.assign({style:{marginBottom:0}},{children:e.render("Cell")}),void 0)}),void 0)))))))},void 0):a("div",Object.assign({style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:"300px"}},{children:j||"No Data"}),void 0)},void 0)}),void 0)]}),void 0),l("div",Object.assign({className:"fwk-table__pagination-wrapper"},{children:[a("div",{},void 0),Q>1?a(Je,{pageCount:Q,currentPage:re+1,onChangePage:e=>{ee(e-1)},canPreviousPage:X,canNextPage:J},void 0):null]}),void 0),a(Ee,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:z?l("div",Object.assign({className:"fwk-table__column-setting-popup",style:T},{children:[l("div",Object.assign({className:"fwk-table__column-setting-popup--heading"},{children:[a(ne,Object.assign({variant:"important"},{children:e.t("table:showHideColumn")}),void 0),l("div",{children:[a(jt,Object.assign({allColumns:$,setHiddenColumns:oe},F()),void 0)," ",a(ne,{children:e.t("table:showAllText")},void 0)]},void 0)]}),void 0),a(S,{onSortEnd:({oldIndex:e,newIndex:t})=>{var i,n,a;G((i=$.map((e=>e.id)).filter((e=>"setting"!==e)),n=e,a=t,((e,t,i)=>{const n=t<0?e.length+t:t;if(n>=0&&n<e.length){const n=i<0?e.length+i:i,[a]=e.splice(t,1);e.splice(n,0,a)}})(i=[...i],n,a),i))},allColumns:$},void 0)]}),void 0):null}),void 0)]},void 0)};function It(e){const[t,i]=c(!1),[n,a]=c({});return Ve(e,(e=>{e.target.closest("#portal")||i(!1)})),{style:n,open:t,toggle:()=>{if(t)i(!1);else if("undefined"!=typeof window){if(!e||!e.current)return;const t={width:285},n=e.current.getBoundingClientRect(),l=e.current.previousSibling;t.left=n.left-n.width-(null==l?void 0:l.offsetWidth),n.top+10<window.innerHeight/2?t.top=n.top+n.height+10:t.bottom=window.innerHeight-n.top,i(!0),a(t)}}}}function Tt(e,t){const[i,n]=c(e);return g((()=>{const i=setTimeout((()=>{n(e)}),t);return()=>{clearTimeout(i)}}),[e,t]),i}const Mt=({column:{filterValue:t,preFilteredRows:i,setFilter:n}})=>{const[r,s]=c(t||""),d=v(null),h=Tt(r,500),{style:u,open:p,toggle:f}=It(d);return g((()=>{n(h)}),[h]),g((()=>{void 0===t&&s("")}),[t,s]),l(o,{children:[a("div",Object.assign({ref:d,onClick:f,style:{display:"flex",alignItems:"center"}},{children:a(he,{},void 0)}),void 0),a(Ee,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:p?a("div",Object.assign({className:"fwk-table__column-setting-popup",style:u},{children:a(pe,{placeholder:e.t("table:searchPlaceholder"),icon:a(mt,{color:"#a2aab7"},void 0),style:{width:"100%"},value:r||"",onChange:e=>s(e.target.value||void 0)},void 0)}),void 0):null}),void 0)]},void 0)},Lt=e=>{var t,n,r=e.column,{filterValue:s,preFilteredRows:d,setFilter:c}=r,h=i(r,["filterValue","preFilteredRows","setFilter"]);const u=v(null),{style:g,open:p,toggle:f}=It(u),m=s||[],b=e=>{if(m.some((t=>t.id===e.id))){const t=m.filter((t=>t.id!==e.id));return void c(t&&t.length?t:void 0)}const t=[...m,e];c(t&&t.length?t:void 0)};return l(o,{children:[a("div",Object.assign({ref:u,onClick:f,style:{display:"flex",alignItems:"center"}},{children:a(he,{},void 0)}),void 0),a(Ee,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:p?a("div",Object.assign({className:"fwk-table__column-setting-popup",style:g},{children:h.customProps&&(null===(n=null===(t=h.customProps)||void 0===t?void 0:t.data)||void 0===n?void 0:n.length)?h.customProps.data.map((e=>l("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[a("input",{checked:m.some((t=>t.id===e.id)),type:"checkbox",onChange:b.bind(null,e)},void 0),"  ",a("span",{children:e.value},void 0)]}),e.id))):[]}),void 0):null}),void 0)]},void 0)},Rt=t=>{var r=t.column,{filterValue:s,preFilteredRows:d,setFilter:h}=r,u=i(r,["filterValue","preFilteredRows","setFilter"]);const[p,f]=c([]),[m,b]=c(!1),w=v(null),[y,k]=c(s||""),{style:O,open:x,toggle:j}=It(w),_=Tt(y,500),C=s||[],N=e=>{if(C.some((t=>t.id===e.id))){const t=C.filter((t=>t.id!==e.id));return void h(t&&t.length?t:void 0)}const t=[...C,e];h(t&&t.length?t:void 0)};return g((()=>{n(void 0,void 0,void 0,(function*(){if(u.customProps&&u.customProps.onSearch){b(!0);const e=yield u.customProps.onSearch(_);b(!1),e&&e.length&&f(e)}}))}),[_]),l(o,{children:[a("div",Object.assign({ref:w,onClick:j,style:{display:"flex",alignItems:"center"}},{children:a(he,{},void 0)}),void 0),a(Ee,Object.assign({node:"undefined"!=typeof window?document.querySelector("#portal"):null},{children:x?l("div",Object.assign({className:"fwk-table__column-setting-popup",style:O},{children:[a(pe,{placeholder:e.t("table:searchPlaceholder"),icon:a(mt,{color:"#a2aab7"},void 0),style:{width:"100%"},value:y||"",onChange:e=>k(e.target.value||void 0)},void 0),m?l("div",{children:[a("br",{},void 0),a(_e,{},void 0),a("br",{},void 0),a(_e,{},void 0),a("br",{},void 0),a(_e,{},void 0),a("br",{},void 0)]},void 0):p&&p.length?l(o,{children:[a("div",{style:{marginTop:8}},void 0),p.map((e=>l("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[a("input",{checked:C.some((t=>t.id===e.id)),type:"checkbox",onChange:N.bind(null,e)},void 0),"  ",a("span",{children:e.value},void 0)]}),e.id)))]},void 0):null]}),void 0):null}),void 0)]},void 0)},Dt=s((({label:e,trueText:t,falseText:i,checked:n,onChange:o,disabled:r,style:s={}},d)=>{const c=p((()=>a("p",Object.assign({className:"fwk-switch-option-label"},{children:n?t:i}),Math.random().toString())),[n]),h=Math.random().toString(),u=p((()=>l("div",{children:[a("input",{className:"fwk-switch-checkbox",type:"checkbox",disabled:r,id:h,defaultChecked:!!n,onChange:e=>o&&o(e.target.checked)},void 0),a("label",{className:"fwk-switch-checkbox-label",htmlFor:h},void 0)]},void 0)),[n]);return l("div",Object.assign({ref:d,style:s},{children:[e?a("div",Object.assign({className:"fwk-switch-label"},{children:e}),void 0):null,l("div",Object.assign({className:"fwk-switch-content"},{children:[u,t||i?c:null]}),void 0)]}),void 0)}));const Bt=({searchContent:e,searchable:t,viewMore:i,divider:n,items:o,label:r,extra:s,defaultNumItem:d=5,openKeys:c,activeKey:h,onChange:u,loading:v=!1,code:g,isHeader:f,icon:m,disabled:b=!1,viewMoreAction:w,viewMoreText:k="Hiển thị thêm",renderItem:O})=>{const x=p((()=>{if(o&&o.length&&c&&c.includes(g)){return o.map((e=>a(Bt,{code:e.key,label:e.label,onChange:u,activeKey:h,items:e.items,renderItem:e.renderItem},void 0)))}return null}),[h,o]),j=a("div",Object.assign({style:{margin:"0px 16px 0 12px"}},{children:Array.from(Array(d).keys()).map((e=>a("div",Object.assign({style:{padding:"9px 28px 9px 0"}},{children:a("div",Object.assign({className:"fwk-sidebar-skeleton"},{children:" "}),void 0)}),e)))}),void 0);return n?a("div",{className:"fwk-sidebar-item-divider"},void 0):l("div",Object.assign({className:"fwk-sidebar-item-container"},{children:[O?l("div",Object.assign({className:y({"fwk-sidebar-item":!0,"fwk-sidebar-active-item":h===g,"fwk-sidebar-disabled":b})},{children:[O,s?a("div",Object.assign({className:"fwk-sidebar-item-extra"},{children:s}),void 0):null]}),void 0):null,t?e:null,v?j:x,!v&&o&&o.length&&i?a("div",Object.assign({className:"fwk-sidebar-item-view-more",onClick:()=>{w&&w()}},{children:k}),void 0):null]}),void 0)};var Pt=m((({data:e,activeKey:t,loadingKeys:i,openKeys:n,style:l,onChange:o})=>{const{activeKey:r,setActiveKey:s}=function(){const[e,t]=c(null);return{activeKey:e,setActiveKey:t}}();g((()=>{s(t)}),[t]);const d=p((()=>e&&e.length?e.map((e=>a(Bt,{items:e.items,extra:e.extra,searchable:e.searchable,searchContent:e.searchContent,label:e.label,openKeys:n,isHeader:e.isHeader,icon:e.icon,defaultNumItem:e.defaultNumItem,divider:e.divider,onChange:o,activeKey:r,loading:i&&i.includes(e.key),viewMore:e.viewMore,viewMoreAction:e.viewMoreAction,viewMoreText:e.viewMoreText,renderItem:e.renderItem,code:e.key,disabled:e.disabled},void 0))):null),[e,r,i]);return a("div",Object.assign({style:l,className:"fwk-sidebar-container"},{children:d}),void 0)}));const Ht=b({}),At=({onChange:e,text:t,disabled:i=!1,value:n,checked:r,style:s,name:d,invalid:c})=>{const h=w(Ht),u=Math.random().toString(),v=r===n||n===h.value;return a(o,{children:l("label",Object.assign({style:s,className:y("fwk-radio-container",{"fwk-radio-container-checked":v}),htmlFor:u,onClick:t=>{t.stopPropagation(),i||h.disabled||(e&&e(n),h.onChange&&h.onChange(n))}},{children:[l("span",Object.assign({className:y("fwk-radio",{"fwk-radio-checked":v})},{children:[a("input",{type:"radio",id:u,defaultChecked:r===n,disabled:i,name:d,onClick:t=>{t.stopPropagation(),e&&e(n),h.onChange&&h.onChange(n)},className:y("fwk-radio-input")},void 0),a("span",{className:y("fwk-radio-inner",{"fwk-radio-inner-disable":i||h.disabled,"fwk-radio-inner-invalid":c})},void 0)]}),void 0),t?a("span",Object.assign({className:y("fwk-radio-text",{"fwk-radio-text-disable":i||h.disabled||c})},{children:t}),void 0):null]}),void 0)},void 0)};At.Group=({children:e,onChange:t,label:i,value:n,help:o,required:r,disabled:s=!1,validateStatus:d})=>l(Ht.Provider,Object.assign({value:{value:n,disabled:s,name:Math.random().toString(),onChange:t}},{children:[a("div",{children:i?l("label",Object.assign({className:"fwork-radio-group-label"},{children:[i," ",r?a("span",Object.assign({className:"fwork-radio-group-required"},{children:"*"}),void 0):null]}),void 0):null},void 0),a("div",Object.assign({className:y({[`fwork-group-content-${d}`]:Boolean(d)})},{children:e}),void 0),o?a("span",Object.assign({className:"fwork-radio-group-help"},{children:o}),void 0):null]}),void 0);const Et=({checked:e=!1,text:t="",disabled:i=!1,invalid:n=!1})=>a(o,{children:l("label",Object.assign({className:"fwk-checkbox-wrapper"},{children:[l("span",Object.assign({className:"fwk-checkbox"+(e?" fwk-checkbox-checked":"")+(i?" fwk-checkbox-disabled":"")+(n?" fwk-checkbox-invalid":"")},{children:[a("input",{type:"checkbox",className:"fwk-checkbox-input",value:"",disabled:i},void 0),a("span",{className:"fwk-checkbox-inner"},void 0)]}),void 0),a("span",{children:t},void 0)]}),void 0)},void 0),Vt=s(((e,t)=>{var{multiple:n=!0,disabled:r=!1,loading:s=!1,icon:d=null,text:h="",accept:u="*",className:g="",style:p,service:f="",showAccept:m=!1,maxSize:b="",showMaxSize:w=!1,onDragEnter:k,onDragOver:O,onDragLeave:x,onDrop:j,onChange:_}=e,C=i(e,["multiple","disabled","loading","icon","text","accept","className","style","service","showAccept","maxSize","showMaxSize","onDragEnter","onDragOver","onDragLeave","onDrop","onChange"]);const N=v(null),[S,z]=c(!1),I=e=>{if(!n&&e.length>1)return window.alert("Số lượng file không hợp lệ"),!1;if(!Array.from(e).every((e=>((e,t)=>{if(!t)return!0;const i=t.split(",");let n=e.type,a=n.replace(/\/.*$/,"");for(let t of i){if(t=t.trim(),"*"===t)return!0;if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(a===t.replace(/\/.*$/,""))return!0}else if(n===t)return!0}return!1})(e,u))))return window.alert("Kiểu file không hợp lệ"),!1;const t=(e=>{if(!e)return;let t=-1;["kib","kb","mib","mb","gib","gb"].forEach((i=>{const n=e.toLowerCase().indexOf(i);n>-1&&(t=n)}));let i=parseFloat(e.substring(0,t));switch(e.substring(t).toLowerCase()){case"gb":return 1e9*i;case"gib":return 1073741824*i;case"mb":return 1e6*i;case"mib":return 1048576*i;case"kb":return 1e3*i;case"kib":return 1024*i}return-1})(b);if(t){if(Array.from(e).reduce(((e,t)=>e+t.size),0)>t)return window.alert(`Vượt quá size ${null==b?void 0:b.toUpperCase()}`),!1}return!0};return l("div",Object.assign({style:p,className:y(g)},{children:[l("div",Object.assign({className:y("fwk-dropzone",{"fwk-dropzone-dragging-over":S,"fwk-dropzone-disabled":r,"fwk-dropzone-loading":s},!f||r||s?"":`${f}-service`),ref:t,onClick:()=>{var e;return!r&&!s&&(null===(e=null==N?void 0:N.current)||void 0===e?void 0:e.click())},onDragEnter:e=>{e.preventDefault(),z(!0),r||s||k&&k(e)},onDragOver:e=>{e.preventDefault(),e.stopPropagation(),r||s||O&&O(e)},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),z(!1),r||s||O&&O(e)},onDrop:e=>{e.preventDefault(),e.stopPropagation(),z(!1),r||s||I(e.dataTransfer.files)&&(_&&_(Array.from(e.dataTransfer.files)),j&&j(e))}},C,{children:[d||null,d?a(o,{children:"  "},void 0):null,h?"string"==typeof h?a("span",Object.assign({className:"fwk-dropzone-input-text"},{children:h}),void 0):h:l("span",Object.assign({className:"fwk-dropzone-input-text"},{children:["Kéo hoặc ",a("strong",{children:"chọn"},void 0)," để tải lên"]}),void 0),a("input",{accept:u,ref:N,className:"fwk-dropzone-input",multiple:n,type:"file",disabled:r||s,onChange:e=>{if(_&&e&&e.target&&e.target.files&&e.target.files.length){if(!I(e.target.files))return;_(Array.from(e.target.files))}}},void 0)]}),void 0),l("div",Object.assign({className:"fwk-dropzone-info"},{children:[u&&m?a("span",Object.assign({className:"fwk-dropzone-accept"},{children:`Support file: ${u}`}),void 0):null,b&&w?a("span",Object.assign({className:"fwk-dropzone-maxSize"},{children:`Maximum: ${b.toUpperCase()}`}),void 0):null]}),void 0)]}),void 0)}));var $t=m(Vt);var Wt=m((({colorData:e,colorValue:t,iconData:i,iconValue:n,label:r,required:s,checkIcon:d,onChangeColor:h,onChangeIcon:u,style:g,error:p,errorMessage:f})=>{const m=(null==e?void 0:e.length)&&e[0]||"#b39ddb",[b,w]=c(!1),k=v(null);return Ve(k,(()=>{w(!1)})),l("div",Object.assign({ref:k,style:g},{children:[r?l("p",Object.assign({className:"fwk-illustration-label"},{children:[r," ",s?a("span",Object.assign({className:"fwk-illustration-required"},{children:"*"}),void 0):null]}),void 0):null,l("div",Object.assign({className:"fwk-illustration-content"},{children:[a("div",Object.assign({style:{backgroundColor:t||m},className:"preview"},{children:n?a("div",Object.assign({style:{width:24,height:24}},{children:xe(i.find((e=>e.name===n)),"content",null)}),void 0):""}),void 0),a("div",{children:a("div",Object.assign({onClick:()=>{w(!b)},className:y("select-text",{focus:b})},{children:"Lựa chọn ảnh"}),void 0)},void 0),b?l("div",Object.assign({className:"selection-table"},{children:[e&&e.length?l(o,{children:[a("div",Object.assign({className:"color-table"},{children:e.map((e=>l("div",Object.assign({style:{backgroundColor:e},className:"color-item",onClick:()=>h&&h(e)},{children:[" ",e===t?a("div",Object.assign({style:{position:"absolute",transition:"all 0.3s",color:"white",display:"flex",alignItems:"center"}},{children:d}),void 0):null]}),void 0)))}),void 0),a("div",{className:"divider"},void 0)]},void 0):null,a("div",Object.assign({className:"icon-table"},{children:i.map((e=>a("div",Object.assign({className:y("icon-item",{"icon-selected":e.name===n}),onClick:()=>u&&u(e.name)},{children:a("div",Object.assign({style:{color:"white",height:24,width:24}},{children:e.content}),void 0)}),void 0)))}),void 0)]}),void 0):null]}),void 0),p&&f&&!b?a("div",Object.assign({className:"fwk-illustration-error-text"},{children:f}),void 0):null]}),void 0)}));function Ft(e){return de({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 1h12l.5.5v12l-.5.5h-12l-.5-.5v-12l.5-.5zM2 13h11V2H2v11z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M8 4H7v3H4v1h3v3h1V8h3V7H8V4z"}}]})(e)}const qt=m((({inputLabel:t,id:i,onChange:n,description:o,removeInputForm:r,stt:s,type:d,percent:c,error:h})=>a("section",{children:l(me,{children:[a("label",Object.assign({className:"fwk-badge"},{children:s}),void 0),a(pe,{onChange:e=>{var t;"function"==typeof n&&n(null===(t=null==e?void 0:e.currentTarget)||void 0===t?void 0:t.value,i,"label")},placeholder:e.t("vote:placeholderLabel"),value:t},void 0),a(ut,{onClick:e=>r(i),className:y("fwk-icon-close")},void 0),a("br",{},void 0),a("div",Object.assign({style:{marginTop:"10px"}},{children:d?l(be,{children:[a(we,Object.assign({span:8},{children:a(pe,{label:e.t("vote:labelWeited"),onChange:e=>{var t;return"function"==typeof n&&n(null===(t=null==e?void 0:e.currentTarget)||void 0===t?void 0:t.value,i,"percent")},name:"percent",help:G(h,`${i}.percent`,null),placeholder:"0%",validateStatus:h&&h[i]?"error":void 0,value:c},void 0)}),void 0),a(we,Object.assign({span:16},{children:a(pe,{label:e.t("vote:labelDescription"),placeholder:e.t("vote:placeholderEnterDescription"),style:{width:"100%"},value:o,onChange:e=>{var t;return"function"==typeof n&&n(null===(t=null==e?void 0:e.currentTarget)||void 0===t?void 0:t.value,i,"description")}},void 0)}),void 0)]},void 0):a(pe,{label:e.t("vote:labelDescription"),placeholder:e.t("vote:placeholderEnterDescription"),value:o,onChange:e=>{var t;return"function"==typeof n&&n(null===(t=null==e?void 0:e.currentTarget)||void 0===t?void 0:t.value,i,"description")}},void 0)}),void 0)]},void 0)},i))),Kt=t=>{var{data:n,onChange:o,style:s,loading:d}=t;i(t,["data","onChange","style","loading"]);const[h,u]=c(),[m,b]=c(),[w,k]=c(),[O,x]=c(0),[j,_]=c(0),[C,N]=c(0),S=v(),z=Tt(m,500),I=e=>{u(e),S.current=e},T=e=>{const t=U(e,(e=>e));return{voteType:j?C?2:1:j,criteria:j?t:[],totalPercent:C?O:0}},M=f(((t,i,n)=>{const a=S.current[i];return a[n]=t,"percent"===n&&((t,i,n,a)=>{k({}),K(Z(n))&&k({[t]:{[i]:e.t("vote:enterNumberError")}});let l=0;U(a,(e=>l=l+=Z(e.percent))),l>100&&k({[t]:{[i]:e.t("vote:maxError")}}),x(l)})(i,n,t,S.current),I(Object.assign(Object.assign({},S.current),{[i]:a}))}),[]);g((()=>{o(m)}),[z]);const L=f((e=>{I(q(S.current,e))}),[]),R=p((()=>{b(T(Y(h)));let e=0;return h?U(h,((t,i)=>a(qt,{onChange:M,inputLabel:t.label,id:i,stt:++e,type:C,error:w,percent:null==t?void 0:t.percent,description:t.description,removeInputForm:L},i))):void 0}),[h,C]);g((()=>{var e;if(j&&(null===(e=null==n?void 0:n.criteria)||void 0===e?void 0:e.length)){const e={};U(n.criteria,((t,i)=>e[F()]=t)),I(e)}}),[j]),g((()=>{(null==n?void 0:n.voteType)&&(_(1),2===(null==n?void 0:n.voteType)&&N(1))}),[n]),g((()=>{}),[j]);const D=e=>{_(e),0===j&&b(T([]))};return a(r.Fragment,{children:d?l("div",Object.assign({className:"fwk-loading-vote-form"},{children:[a(_e,{width:"35%",size:"large"},void 0),l("div",Object.assign({className:"fwk-loading-vote-form__radio"},{children:[l("div",Object.assign({style:{marginRight:"20px"}},{children:[a(_e,{style:{marginRight:"8px"},width:15,height:15,size:"small",rounded:!0},void 0),a(_e,{width:150,height:15,size:"small"},void 0)]}),void 0),l("div",{children:[a(_e,{style:{marginRight:"8px"},width:15,height:15,size:"small",rounded:!0},void 0),a(_e,{width:150,height:15,size:"small"},void 0)]},void 0)]}),void 0)]}),void 0):l("section",Object.assign({style:s},{children:[l("div",{children:[a(ne,Object.assign({className:"fwk-title",variant:"h4"},{children:e.t("vote:taskRate")}),void 0),a(At,{text:e.t("vote:overallRate"),checked:j,value:0,onChange:e=>D(e),name:"type"},void 0),"       ",a(At,{text:e.t("vote:specificRate"),checked:j,value:1,onChange:e=>D(e),name:"type"},void 0)]},void 0),j?l("main",Object.assign({className:y("fwk-vote-form-main")},{children:[l(At.Group,Object.assign({label:e.t("vote:taskRate"),validateStatus:"success",value:C,onChange:N},{children:[a(At,{value:0,text:e.t("vote:uniformWeight"),style:{marginRight:20}},void 0),a(At,{value:1,text:e.t("vote:weightSetting")},void 0)]}),void 0),R,a("div",{children:a(ie,Object.assign({block:!0,variant:"secondary",icon:a(Ft,{},void 0),onClick:()=>{I(Object.assign(Object.assign({},h),{[F()]:{label:"",description:"",percent:0}}))}},{children:e.t("vote:addCriteria")}),void 0)},void 0)]}),void 0):void 0]}),void 0)},void 0)};const Ut=({children:e,style:t,className:i,zIndex:n=1e4,width:r,height:s,variant:d,centered:c=!0,visible:h,okText:u,cancelText:p,closeButton:f=!0,header:m,clickOutSide:b=!1,icon:w,onCancel:k,cancelButton:O,okButton:x,onOk:j,state:_="primary",isStatic:C=!1})=>{g((()=>{document.body.style.overflow=h&&!C?"hidden":"unset"}),[h]);const N=v(null);Ve(N,(()=>{b&&k&&k()}));const S=M({opacity:h?1:0}),z=Math.floor(1e4*Math.random())+1;return a(o,{children:h?a(Ee,Object.assign({id:`fwk-modal-${z}`,isStatic:C},{children:l(L.div,Object.assign({style:Object.assign(Object.assign(Object.assign({},t),{zIndex:n,width:r,height:s}),S),className:y(i,"fwork-modal__wrapper",{"fwork-modal__centered":c,[`fwork-modal__${d}`]:Boolean(d)}),ref:N},{children:[f?a("div",Object.assign({className:"fwork-modal__close-button",onClick:()=>k&&k()},{children:"boolean"==typeof f?a(et,{},void 0):f}),void 0):null,l("div",Object.assign({className:"fwork-modal__header"},{children:[w||"error"===_||"warning"===_?a("div",Object.assign({className:"fwork-modal-header-icon"},{children:w||("warning"===_?a("var img = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cg%3e %3cpath fill='%23fbbd2b' d='M13.915 15.337H2.085a2.084 2.084 0 0 1-1.841-3.058L6.158 1.108a2.084 2.084 0 0 1 3.682 0l5.915 11.171a2.084 2.084 0 0 1-1.841 3.058zM8 10.967a1.041 1.041 0 1 0 1.042 1.041A1.043 1.043 0 0 0 8 10.967zm0-8.333a1.043 1.043 0 0 0-1.042 1.042v5.208a1.042 1.042 0 0 0 2.084 0V3.676A1.043 1.043 0 0 0 8 2.634z' transform='translate(-482 -1099) translate(486 1103.4)'/%3e %3c/g%3e%3c/svg%3e\";\n  export default img;",{},void 0):"error"===_?a("var img = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cg%3e %3cpath fill='%23d32f2f' d='M8 16a1.945 1.945 0 0 1-1.385-.574L.574 9.385a1.957 1.957 0 0 1 0-2.768L6.615.574a1.958 1.958 0 0 1 2.769 0l6.042 6.043a1.957 1.957 0 0 1 0 2.768l-6.041 6.041A1.945 1.945 0 0 1 8 16zm0-5.063a.979.979 0 1 0 .979.979.98.98 0 0 0-.979-.979zm0-7.832a.98.98 0 0 0-.979.979v4.894a.979.979 0 1 0 1.958 0V4.084A.98.98 0 0 0 8 3.105z' transform='translate(-482 -1099) translate(486 1103)'/%3e %3c/g%3e%3c/svg%3e\";\n  export default img;",{},void 0):null)}),void 0):null,m]}),void 0),a("div",Object.assign({className:"fwork-modal__body"},{children:e}),void 0),l("div",Object.assign({className:"fwork-modal__footer"},{children:[p?a("div",Object.assign({className:"fwork-modal__cancel-button",onClick:()=>k&&k()},{children:p}),void 0):null,u?a("div",Object.assign({className:y("fwork-modal__ok-button",{[`fwork-modal__ok-button-${_}`]:Boolean(_)}),onClick:()=>j&&j()},{children:u}),void 0):null,O||null,x||null]}),void 0)]}),void 0)}),void 0):null},void 0)};var Yt;!function(e){e[e.DEFAULT=0]="DEFAULT",e[e.SAME=1]="SAME",e[e.CUSTOMIZE=2]="CUSTOMIZE"}(Yt||(Yt={}));var Zt=Yt;const Gt=m((({voteType:e,label:t,description:i,percent:n,onChange:o,num:r,id:s,totalRate:d})=>l("div",Object.assign({className:"fwk-main-content"},{children:[l("section",Object.assign({className:"fwk-section-vote"},{children:[l("div",Object.assign({style:{display:"flex"}},{children:[a("label",Object.assign({className:"fwk-badge"},{children:++r}),void 0),l("div",Object.assign({style:{marginLeft:"20px"}},{children:[a(ne,Object.assign({variant:"h4"},{children:t}),void 0),a(ne,Object.assign({variant:"sub2"},{children:i}),void 0)]}),void 0)]}),void 0),e===Zt.CUSTOMIZE?a(ne,Object.assign({variant:"h4"},{children:n?`${n} %`:void 0}),void 0):void 0]}),void 0),a(X,{defaultValue:d||0,onChange:e=>o(e,s),style:{fontSize:40,margin:"auto"},allowHalf:!0,allowClear:!1},void 0)]}),void 0))),Xt=m((({totalRate:e,onChange:t})=>l("div",{children:[l(ne,Object.assign({style:{textAlign:"center",fontSize:"30px",marginBottom:"10px"},variant:"h2"},{children:[e||0,"/5"]}),void 0),a(X,{defaultValue:e,onChange:e=>t(e,"id43"),style:{fontSize:40,margin:"auto"},allowHalf:!0,allowClear:!1},void 0)]},void 0))),Jt=({data:t,onOk:i,visible:r=!1,onClose:s})=>{const[d,h]=c(),[u,v]=c({}),[p,f]=c(),[m,b]=c(0);function w(e,i){return n(this,void 0,void 0,(function*(){const a=yield(({rate:e,criteria:t,voteType:i,id:a,value:l})=>n(void 0,void 0,void 0,(function*(){let n=0;if(i===Zt.CUSTOMIZE)return U(t,(t=>{if(e[t._id]&&t._id!==a)return n+=t.percent*e[t._id];t._id===a&&(n+=t.percent*l)})),n/100;let o=0;return U(e,((t,i)=>{if(e[i]&&i!==a)return o+=e[i]})),n=(o+l)/t.length,n%1!=0&&U(n.toFixed(1)),n})))({rate:u,criteria:d,voteType:null==t?void 0:t.voteType,id:i,value:e});yield v(Object.assign(Object.assign({},u),{[i]:e})),b(a)}))}g((()=>{(null==t?void 0:t.criteria)&&h(null==t?void 0:t.criteria)}),[t]);const y=()=>{v({}),f(""),b(0),s&&s()};return a(o,{children:a(Ut,Object.assign({visible:r,onCancel:()=>s&&s(),header:e.t("vote:headerRate"),width:500,cancelText:e.t("vote:cancleText"),okText:e.t("vote:okText"),onOk:()=>n(void 0,void 0,void 0,(function*(){i({rate:U(u,((e,t)=>({id:t,rate:e}))),totalRate:m,voteType:null==t?void 0:t.voteType,description:p}),y()}))},{children:a(me,{children:l("main",Object.assign({className:"fwk-modal"},{children:[l("section",{children:[0!==(null==t?void 0:t.voteType)&&(null==d?void 0:d.length)?U(d,((e,i)=>{let n=u[e._id];return a(Gt,{num:i,id:e._id,label:null==e?void 0:e.label,voteType:null==t?void 0:t.voteType,description:e.description,totalRate:n,percent:e.percent,onChange:t=>w(t,null==e?void 0:e._id)},i)})):a(Xt,{totalRate:m,onChange:e=>b(e)},void 0),a(fe,{label:e.t("vote:cancleText"),placeholder:e.t("vote:enterPlaceholderDescription"),value:p,onChange:e=>{var t;return f(null===(t=e.currentTarget)||void 0===t?void 0:t.value)}},void 0)]},void 0),0!==(null==t?void 0:t.voteType)?l("div",Object.assign({className:"fwk-vote-total"},{children:[a(ne,Object.assign({style:{fontSize:"14px"},variant:"h4"},{children:e.t("vote:scoreLabel")}),void 0),l(ne,Object.assign({variant:"h2"},{children:[m||0,"/5"]}),void 0)]}),void 0):void 0,a("div",{style:{clear:"both"}},void 0)]}),void 0)},void 0)}),void 0)},void 0)},Qt=Array.from(Array(24)).map(((e,t)=>({value:t,label:t}))),ei=Array.from(Array(60)).map(((e,t)=>({value:t,label:t}))),ti=({data:e,onChange:t,loopTime:i,errors:n,style:r,editable:s=!0,textSetting:d={warningStatus:"Trạng thái cảnh báo",incomingNoti:"Thông báo đến",emailAddress:"Email",system:"Hệ thống",hourLoop:"Giờ lặp",dayLoop:"Lặp lại cảnh báo mỗi ngày",timeLoop:"Thời gian lặp",placeholderTimeSend:"Nhập thời gian gửi: VD: 3d,4h.."}})=>{const c=p((()=>l("div",Object.assign({className:"fwork-notification-setting__title"},{children:[a("span",{children:a(ne,Object.assign({variant:"important"},{children:d.warningStatus}),void 0)},void 0),a("span",{children:a(ne,Object.assign({variant:"important"},{children:d.incomingNoti}),void 0)},void 0),a("span",{children:a(ne,Object.assign({variant:"important"},{children:d.emailAddress}),void 0)},void 0),a("span",{children:a(ne,Object.assign({variant:"important"},{children:d.system}),void 0)},void 0)]}),void 0)),[]),h=p((()=>e.map(((e,r)=>{var c,h,u,v,g,p,f,m,b,w,y,k,O,x,j,_;return l("div",Object.assign({className:"fwork-notification-setting__row"},{children:[l("div",Object.assign({className:"col1"},{children:[a("span",{children:a(ne,Object.assign({variant:"important"},{children:(null==e?void 0:e.title)||""}),void 0)},void 0),a("br",{},void 0),a("br",{},void 0),l("div",Object.assign({style:{paddingRight:"1em"}},{children:["inComing"===(null==e?void 0:e.type)?a(pe,{value:null===(c=null==e?void 0:e.reminder)||void 0===c?void 0:c.beforeOutDate,style:{width:"100%"},placeholder:`${d.placeholderTimeSend}`,validateStatus:xe(n,"beforeOutDate",!1)?"error":"",help:xe(n,"beforeOutDate",""),onChange:e=>t&&t({rowIndex:r,type:"beforeOutDate",value:e.currentTarget.value}),disabled:!s},void 0):null,"outDate"===(null==e?void 0:e.type)?l(o,{children:[l("div",Object.assign({style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1em"}},{children:[a("span",Object.assign({style:{flex:1}},{children:d.hourLoop}),void 0),a(Ze,{data:Qt,labelKey:"label",valueKey:"value",style:{width:"48px",cursor:"pointer"},suffix:a("div",{},void 0),centerText:!0,customResultRender:`${null===(u=null===(h=null==e?void 0:e.reminder)||void 0===h?void 0:h.timeOutDate)||void 0===u?void 0:u.hour}h`,value:null===(g=null===(v=null==e?void 0:e.reminder)||void 0===v?void 0:v.timeOutDate)||void 0===g?void 0:g.hour,onChange:e=>t&&t({rowIndex:r,type:"hour",value:e}),disabled:!s},void 0),a("span",{children:"  :  "},void 0),a(Ze,{data:ei,style:{width:"48px",cursor:"pointer"},labelKey:"label",centerText:!0,customResultRender:`${null===(f=null===(p=null==e?void 0:e.reminder)||void 0===p?void 0:p.timeOutDate)||void 0===f?void 0:f.minute}m`,suffix:a("div",{},void 0),valueKey:"value",value:null===(b=null===(m=null==e?void 0:e.reminder)||void 0===m?void 0:m.timeOutDate)||void 0===b?void 0:b.minute,onChange:e=>t&&t({rowIndex:r,type:"minute",value:e}),disabled:!s},void 0)]}),void 0),l("div",Object.assign({style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginBottom:"1em"}},{children:[a("span",Object.assign({style:{flex:1}},{children:d.dayLoop}),void 0),a(Dt,{onChange:e=>{t&&t({rowIndex:r,type:"active",value:e})},checked:null===(y=null===(w=null==e?void 0:e.reminder)||void 0===w?void 0:w.loop)||void 0===y?void 0:y.active,disabled:!s},void 0)]}),void 0),(null===(O=null===(k=null==e?void 0:e.reminder)||void 0===k?void 0:k.loop)||void 0===O?void 0:O.active)?a(o,{children:l("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[a("span",Object.assign({style:{flex:1}},{children:d.timeLoop}),void 0),a(Ze,{data:i,labelKey:"label",valueKey:"value",style:{flex:1},searchable:!0,disabled:!s,value:null===(j=null===(x=null==e?void 0:e.reminder)||void 0===x?void 0:x.loop)||void 0===j?void 0:j.rangeDate,onChange:e=>t&&t({rowIndex:r,type:"rangeDate",value:e})},void 0)]}),void 0)},void 0):null]},void 0):null]}),void 0)]}),void 0),a("div",{children:(null==e?void 0:e.target)&&(null===(_=null==e?void 0:e.target)||void 0===_?void 0:_.length)?e.target.map(((e,i)=>{return n=e,o=r,d=i,l("div",Object.assign({className:"fwork-notification-setting__template"},{children:[a("span",{children:null==n?void 0:n.label},void 0),a("span",{children:a("input",{type:"checkbox",checked:null==n?void 0:n.email,disabled:!s,onChange:t&&t.bind(null,{columnIndex:d,clicked:"email",rowIndex:o})},void 0)},void 0),a("span",{children:a("input",{type:"checkbox",checked:null==n?void 0:n.system,disabled:!s,onChange:t&&t.bind(null,{columnIndex:d,clicked:"system",rowIndex:o})},void 0)},void 0)]}),void 0);var n,o,d})):null},void 0)]}),r)}))),[e]);return l("div",Object.assign({className:"fwork-notification-setting__root",style:r},{children:[c,a("div",Object.assign({className:"fwork-notification-setting__body"},{children:h}),void 0)]}),void 0)},ii=({className:e,type:t="solid",text:i="",width:n=".5px",color:l="rgba(112, 112, 112, 0.6)",textAlign:o,space:r=0})=>a("div",Object.assign({className:y({"fwork-separator__wrapper-text":i},e),style:{borderTopStyle:t,borderTopWidth:n,borderTopColor:l,textAlign:o,margin:`${r} 0`}},{children:i?a("div",Object.assign({className:"fwork-separator__text"},{children:i}),void 0):null}),void 0);function ni(e,t){if(t)return`+${t}`;if(!e)return"U";const i=e.split(" ").pop();return null==i?void 0:i.charAt(0)}function ai(e,t){if(t)return 100;if(!e)return 100;const i=ni(e,0);return i?i.toLocaleLowerCase().charCodeAt(0)-97:100}const li=({variant:e="md",users:t,max:i=3,showInfo:n,presentAvatar:o="avatar",presentName:r="name",presentUsername:s="username",styles:d={}})=>{const c=(t,i,d=0)=>{const c=xe(t,r,null),h=xe(t,s,null),u=xe(t,o,null);return l("div",Object.assign({style:{zIndex:100-i},className:y("fwork-avatar__card",`fwork-avatar__space-${e}`)},{children:[a("div",Object.assign({className:y(`fwork-avatar__${e}`,"fwork-avatar__image",{["fwork-avatar__blank-"+ai(c,d)%13]:!u}),style:{borderRadius:"50%",backgroundImage:`url("${u}")`,backgroundSize:"contain",fontWeight:d?"normal":600}},{children:!u&&ni(c,d)}),void 0),n?l("div",Object.assign({style:{marginLeft:"8px"}},{children:[a("div",Object.assign({className:"fwork-avatar__name"},{children:c}),void 0),a("div",Object.assign({className:"fwork-avatar__username"},{children:h}),void 0)]}),void 0):null]}),i)},h=je(t)?t:[t],u=xe(h,"length",0);return a("div",Object.assign({className:"fwork-avatar__container",style:d},{children:l("div",Object.assign({className:y("fwork-avatar__wrapper")},{children:[u&&h.slice(0,i).map(((e,t)=>c(e,t))),u&&u>i?c(null,100,u-i):null]}),void 0)}),void 0)},oi=({color:e,size:t,count:i=0,children:n,max:o=100,style:r})=>l("span",Object.assign({className:"fwork__badge"},{children:[a("span",Object.assign({className:"fwork__badge-content",style:Object.assign(Object.assign({},r),{backgroundColor:e||""})},{children:i>=o?l("span",{children:[o,a("span",Object.assign({className:"fwork__badge-plus"},{children:"+"}),void 0)]},void 0):i}),void 0),n]}),void 0);J.configure({hideProgressBar:!0,autoClose:1500,bodyClassName:"fwork__message-body"});const ri={warning:"Warning!",error:"Error!",success:"Success!",info:"Information!"},si={warning:"http://tuyendungfpt.vn/wp-content/uploads/2021/04/icon-2.svg",error:"http://tuyendungfpt.vn/wp-content/uploads/2021/04/icon-3.svg",success:"http://tuyendungfpt.vn/wp-content/uploads/2021/04/icon-4.svg",info:"http://tuyendungfpt.vn/wp-content/uploads/2021/04/icon-1.svg"},di=({content:e,variant:t,label:i})=>l("div",Object.assign({style:{display:"flex"}},{children:[a("div",Object.assign({style:{marginRight:10}},{children:a("img",{style:{width:"14px",height:"14px",transform:"translateY(-1px)"},src:si[t],alt:"icon"},void 0)}),void 0),l("div",Object.assign({style:{display:"flex",flexDirection:"column"}},{children:[a("div",Object.assign({className:"fwork__message-title"},{children:i||ri[t]}),void 0),a("div",Object.assign({style:{marginTop:6}},{children:e}),void 0)]}),void 0)]}),void 0);var ci=new class{info(e){var{weight:t="default",label:n}=e,l=i(e,["weight","label"]);return J.info(a(di,{content:l.content,label:n,variant:"info"},void 0),Object.assign({className:y(`fwork__message-${t}-info`,"fwork__message-wrapper"),closeButton:a(et,{style:{color:"bold"===t?"#ffffff":"#5c6a82",transform:"translateY(4px)"}},void 0)},l))}warning(e){var{weight:t="default",label:n}=e,l=i(e,["weight","label"]);return J.info(a(di,{content:l.content,label:n,variant:"warning"},void 0),Object.assign({className:y("fwork__message-wrapper",`fwork__message-${t}-warning`),closeButton:a(et,{style:{color:"bold"===t?"#ffffff":"#5c6a82",transform:"translateY(4px)"}},void 0)},l))}success(e){var{weight:t="default",label:n}=e,l=i(e,["weight","label"]);return J.info(a(di,{content:l.content,label:n,variant:"success"},void 0),Object.assign({className:y("fwork__message-wrapper",`fwork__message-${t}-success`),closeButton:a(et,{style:{color:"bold"===t?"#ffffff":"#5c6a82",transform:"translateY(4px)"}},void 0)},l))}error(e){var{weight:t="default",label:n}=e,l=i(e,["weight","label"]);return J.info(a(di,{content:l.content,label:n,variant:"error"},void 0),Object.assign({className:y("fwork__message-wrapper",`fwork__message-${t}-error`),closeButton:a(et,{style:{color:"bold"===t?"#ffffff":"#5c6a82",transform:"translateY(4px)"}},void 0)},l))}};function hi(e,t,i=0,n){const a=null==e?void 0:e.find((e=>e.value===t[i]));return a&&a.children&&a.children.length?(n.push(a.children),hi(a.children,t,i+1,n)):n}const ui=(e,t)=>e.filter((e=>!t.includes(e))),vi=e=>{var{children:t,options:n,onChange:o,selected:s,columnStyle:d,textWidth:h}=e,u=i(e,["children","options","onChange","selected","columnStyle","textWidth"]);const[v,p]=c([]),[f,m]=c(null),b=(e,t,i,n,a=!1,l="",r=[])=>{let d=(null==s?void 0:s.slice())||[];const c=v||[];if(e){if(l){const e=r.filter((e=>xe(e,"id",null)===l)).map((e=>e.value));d=ui(d,e),d.push(t),m({level:n,value:t})}else{const e=r.filter((e=>!xe(e,"id",""))).map((e=>e.value));d=ui(d,e),d=d.filter((e=>e!==xe(f,"value",""))),d.length=n,f&&xe(f,"level",999)<=n?d.push(xe(f,"value","")):m(null),c.length=n,d.push(t)}(null==i?void 0:i.length)&&c.push(i),p(c),o(d)}else if(d.length){const e=v||[];l?(d=d.filter((e=>e!==t)),m(null)):(d.length=n,f&&xe(f,"level",999)<=n&&d.push(xe(f,"value","")),e.length=n),o(d),p(e)}};return g((()=>{!v.length&&(null==s?void 0:s.length)&&p(hi(n,s,0,[]))}),[s]),r.useMemo((()=>l("div",Object.assign({className:"fwork-cascader"},u,{children:[a("div",Object.assign({className:"fwork-cascader__list-item ",style:d},{children:n&&n.length&&n.map((e=>{const t=xe(e,"value");return l("div",Object.assign({className:y("fwork-cascader__item",{"fwork-cascader__item-choosen":null==s?void 0:s.includes(xe(e,"value"))})},{children:[a("input",{className:"fwork-cascader__checkbox",type:"checkbox",id:t,checked:null==s?void 0:s.includes(xe(e,"value")),onChange:i=>b(i.target.checked,t,e.children,0,xe(e,"allowMulti",!1),xe(e,"id",null),n.map((e=>Object.assign(Object.assign({},e),{children:[]}))))},void 0),l("label",Object.assign({className:"fwork-cascader__checkbox-label",htmlFor:t},{children:[a(ne,Object.assign({variant:(null==s?void 0:s.includes(xe(e,"value")))?"important":"paragraph",title:xe(e,"label"),style:{display:"flex",alignItems:"center",width:h||"160px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},{children:xe(e,"label")}),void 0),a("div",Object.assign({style:{marginLeft:"auto",marginRight:"8px",display:"flex"}},{children:a(Qe,{size:18},void 0)}),void 0)]}),void 0)]}),t)}))}),void 0),v&&v.length?v.map(((e,t)=>a("div",Object.assign({className:y("fwork-cascader__list-item",{"fwork-cascader__list-item-no-border":t+1===v.length}),style:d},{children:e&&e.length?e.map((i=>{const n=xe(i,"value");return xe(i,"labelOnly")?a(ne,Object.assign({style:{padding:"0px 8px 0px 16px",textTransform:"uppercase",height:"32px",display:"flex",alignItems:"center"}},{children:xe(i,"label")}),void 0):l("div",Object.assign({className:y("fwork-cascader__item",{"fwork-cascader__item-choosen":null==s?void 0:s.includes(xe(i,"value"))})},{children:[a("input",{className:"fwork-cascader__checkbox",type:"checkbox",id:n,checked:null==s?void 0:s.includes(xe(i,"value")),onChange:a=>b(a.target.checked,n,i.children,t+1,xe(i,"allowMulti",!1),xe(i,"id",null),e.map((e=>Object.assign(Object.assign({},e),{children:[]}))))},void 0),l("label",Object.assign({className:"fwork-cascader__checkbox-label",htmlFor:n},{children:[a(ne,Object.assign({variant:(null==s?void 0:s.includes(xe(i,"value")))?"important":"paragraph",title:xe(i,"label"),style:{display:"flex",alignItems:"center",width:h||"160px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},{children:xe(i,"label")}),void 0),t+1!==v.length&&xe(i,"children.length",0)?a("div",Object.assign({style:{marginLeft:"auto",marginRight:"8px",display:"flex"}},{children:a(Qe,{size:18},void 0)}),void 0):null]}),void 0)]}),n)})):null}),t))):null]}),void 0)),[s,v])},gi=({width:e="248px",className:t="",onChangeDate:i,style:n={}})=>{const o=(e,t,i=!1)=>{let n=t.clone();return i?n.add(1,"months"):n.add(-1,"months"),e(n),!1};return a("div",Object.assign({className:"fwork-calendar "+t,style:Object.assign({width:e},n)},{children:a(O,{fullscreen:!1,headerRender:({value:e,type:t,onChange:i,onTypeChange:n})=>l("div",Object.assign({className:"fwork-calendar-header"},{children:[a("div",Object.assign({className:"cal-current-month"},{children:a("span",{children:e.format("MMMM, YYYY")},void 0)}),void 0),l("div",Object.assign({className:"cal-actions"},{children:[a("a",Object.assign({onClick:()=>o(i,e)},{children:a(ve,{size:16},void 0)}),void 0),a("a",Object.assign({onClick:()=>o(i,e,!0)},{children:a(ge,{size:16},void 0)}),void 0)]}),void 0)]}),void 0),onChange:i},void 0)}),void 0)},pi=({data:e=[],labelKey:t="label",className:i="",style:n={}})=>{const l=a("div",Object.assign({className:"fwk-dropdown-detail",style:{boxShadow:"0 2px 8px 0 rgba(9, 30, 66, 0.15)",backgroundColor:"#ffffff",marginTop:"4px"}},{children:a(x,Object.assign({className:"menu-action-table"},{children:e.map(((e,i)=>e.isDivider?a(x.Divider,{},void 0):a(x.Item,Object.assign({onClick:()=>{"function"==typeof e.onClick&&e.onClick()},style:Object.assign({height:34,lineHeight:"34px"},e.isDanger&&{color:"#d32f2f"})},{children:xe(e,t,null)}),i)))}),void 0)}),void 0);return a("div",Object.assign({className:"fwork-dropdown "+i,style:Object.assign({},n)},{children:a(j,Object.assign({overlay:l,placement:"bottomRight",trigger:["click"]},{children:a(_,{icon:a(wt,{style:{marginTop:6}},void 0),type:"default",style:{width:32,borderRadius:4,background:"#f3f4f6",border:"none"}},void 0)}),void 0)}),void 0)},fi=({file:e,className:t="",showAction:i=!1,iconSize:n=0,onRemove:r,style:s={}})=>{0===n&&(n=i?40:20),i&&(t+=" has-actions");let d="";if(e.name){let t=e.name.split(".");t.length>1&&(d=t[t.length-1])}let c=a(nt,{size:n},void 0);return"pdf"===d&&(c=a(ot,{size:n,color:"#ff5630"},void 0)),["jpg","jpeg","png"].includes(d)&&(c=a(dt,{size:n,color:"#ffab00"},void 0)),"gif"===d&&(c=a(lt,{size:n,color:"#ffab00"},void 0)),["doc","docx"].includes(d)&&(c=a(rt,{size:n,color:"#004e8c"},void 0)),["xls","xlsx"].includes(d)&&(c=a(at,{size:n,color:"#007442"},void 0)),["zip","rar"].includes(d)&&(c=a(st,{size:n,color:"#5e6c84"},void 0)),l("div",Object.assign({className:"fwork-attachment "+t,style:s},{children:[a("div",Object.assign({style:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:12}},{children:c}),void 0),l("div",Object.assign({style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%"}},{children:[a(k,Object.assign({title:e.name},{children:a("div",Object.assign({className:"name-attachment"},{children:a("span",{children:e.name},void 0)}),void 0)}),void 0),i&&l("div",Object.assign({className:"fwork-attachment-actions"},{children:[d&&a("span",{children:d.toUpperCase()},void 0),a("span",{children:"Tải về"},void 0),a("span",Object.assign({onClick:r},{children:"Xoá"}),void 0)]}),void 0)]}),void 0),!i&&a(j,Object.assign({overlay:a(o,{},void 0)},{children:a("span",Object.assign({style:{cursor:"pointer",lineHeight:0}},{children:a(ct,{},void 0)}),void 0)}),void 0)]}),void 0)},mi=({percent:e=0,bgColor:t="#f3f4f6",color:i="#26a69a",type:n="line",style:l={}})=>a(C,{percent:e,strokeColor:i,trailColor:t,type:n,style:l},void 0),bi=({value:e=0,showTooltip:t=!1,marks:i={},bgColor:n="#5c6a82",style:l={},tipFormatter:o})=>{let r={},s={background:"#fff",border:"4px solid "+n,width:12,height:12},d={background:n};return Array.isArray(e)&&(r.range=!0,s=[s,s],d=[d,d]),a(N,Object.assign({},r,{defaultValue:e,tooltipVisible:t,tooltipPlacement:"bottom",marks:i,tipFormatter:o,className:"fwork-slider",handleStyle:s,trackStyle:d,style:l,tooltipPrefixCls:"fwork-slider-tooltip slider-tooltip ant-tooltip"}),void 0)};export{fi as Attachment,li as Avatar,oi as Badge,tt as Breadcrumb,ie as Button,gi as Calendar,vi as Cascader,Lt as CheckBoxSearch,Rt as CheckBoxSearchInput,Et as Checkbox,we as Col,me as Container,pi as Dropdown,$t as Dropzone,Wt as Illustration,pe as Input,ci as Message,Ut as Modal,ti as NotificationSetting,it as PageHeader,Je as Pagination,Ee as Portal,mi as Progress,At as Radio,be as Row,Ze as Select,ii as Separator,Pt as Sidebar,_e as Skeleton,bi as Slider,Dt as Switch,zt as Table,Ke as Tag,ne as Text,fe as TextArea,Mt as TextSearch,Jt as Vote,Kt as VoteForm};
=======
import { __rest as __rest$1, __awaiter } from 'tslib';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { forwardRef, isValidElement, useState, createElement, PureComponent, useRef, useEffect, useMemo, useCallback, memo, createContext, useContext } from 'react';
import cls from 'classnames';
import _extends from '@babel/runtime/helpers/esm/extends';
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { useTable, useFilters, useFlexLayout, usePagination, useColumnOrder } from 'react-table';
import { SortableHandle, SortableElement, SortableContainer } from 'react-sortable-hoc';

const Loader = (_a) => {
    var { color = '#fff', className, styles = {} } = _a, props = __rest$1(_a, ["color", "className", "styles"]);
    return (jsx("span", Object.assign({ className: cls('fwork-loader', className), style: Object.assign({ color }, styles) }, props, { children: jsx("svg", Object.assign({ className: "fwork-loader-circular-loader", viewBox: "25 25 50 50" }, { children: jsx("circle", { className: "fwork-loader-loader-path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "#fff", strokeWidth: "2" }, void 0) }), void 0) }), void 0));
};

const Button = forwardRef((props, buttonRef) => {
    const { size = 'medium', variant = 'default', icon, className, disabled, block, children, loading, onClick } = props, rest = __rest$1(props, ["size", "variant", "icon", "className", "disabled", "block", "children", "loading", "onClick"]);
    const handleClick = (e) => {
        if (loading || disabled) {
            return;
        }
        if (onClick) {
            onClick(e);
        }
    };
    const Component = variant === 'link' ? 'a' : 'button';
    return (jsx(Component, Object.assign({ ref: buttonRef, className: cls('fwork-button', {
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
        }, className), onClick: handleClick }, rest, { children: loading ? (jsx(Loader, { color: variant === 'primary' ? '#fff' : '#172b4d' }, void 0)) : (jsxs(Fragment, { children: [icon ? (jsx("span", Object.assign({ style: {
                        marginRight: children &&
                            (isValidElement(children) || typeof children === 'string')
                            ? 6
                            : 0,
                        display: 'inline-flex',
                        alignItems: 'center'
                    } }, { children: icon }), void 0)) : null,
                jsx("span", { children: children }, void 0)] }, void 0)) }), void 0));
});

const Text = forwardRef((_a, textRef) => {
    var { style, className = '', variant = 'paragraph', children } = _a, props = __rest$1(_a, ["style", "className", "variant", "children"]);
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
    return (jsx(Component, Object.assign({ ref: textRef, className: cls('fwork-text', {
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

const Input = forwardRef((_a, inputRef) => {
    var { style, className = '', disabled = false, placeholder = '', label = '', help = '', required = false, validateStatus = '', icon } = _a, props = __rest$1(_a, ["style", "className", "disabled", "placeholder", "label", "help", "required", "validateStatus", "icon"]);
    const [isFocus, setIsFocus] = useState(false);
    return (jsxs("div", Object.assign({ className: cls('fwork-input-wrapper', className), style: style }, { children: [label ? (jsxs("label", Object.assign({ className: 'fwork-input-label' }, { children: [label, "\u00A0", required ? (jsx("span", Object.assign({ className: 'fwork-input-required' }, { children: "*" }), void 0)) : null] }), void 0)) : null,
            jsxs("div", Object.assign({ className: cls('fwork-input-wrapper-input', {
                    'fwork-wrapper-input-disabled': disabled,
                    'fwork-wrapper-input-focus': isFocus,
                    [`fwork-wrapper-input-${validateStatus}`]: Boolean(validateStatus)
                }) }, { children: [jsx("input", Object.assign({ ref: inputRef, className: cls('fwork-input'), disabled: disabled, placeholder: placeholder, onFocus: () => setIsFocus(true), onBlur: () => setIsFocus(false) }, props), void 0),
                    jsx("div", Object.assign({ style: {
                            width: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        } }, { children: icon || null }), void 0)] }), void 0),
            help ? jsx("span", Object.assign({ className: 'fwork-input-help' }, { children: help }), void 0) : null] }), void 0));
});

const TextArea = forwardRef((_a, inputRef) => {
    var { style, className = '', disabled = false, placeholder = '', label = '', help = '', required = false, service = '', rows = 3, cols = 30, validateStatus = '' } = _a, props = __rest$1(_a, ["style", "className", "disabled", "placeholder", "label", "help", "required", "service", "rows", "cols", "validateStatus"]);
    return (jsxs("div", Object.assign({ className: cls('fwork-textarea-wrapper', className), style: style }, { children: [label ? (jsxs("label", Object.assign({ className: 'fwork-textarea-label' }, { children: [label, "\u00A0", required ? (jsx("span", Object.assign({ className: 'fwork-textarea-required' }, { children: "*" }), void 0)) : null] }), void 0)) : null,
            jsx("textarea", Object.assign({ ref: inputRef, className: cls('fwork-textarea', {
                    'fwork-textarea-disabled': disabled,
                    [`fwork-textarea-${validateStatus}`]: Boolean(validateStatus)
                }), disabled: disabled, placeholder: placeholder, rows: rows, cols: cols }, props), void 0),
            help ? jsx("span", Object.assign({ className: 'fwork-textarea-help' }, { children: help }), void 0) : null] }), void 0));
});

const Container = ({ className, style, children, span }) => {
    return (jsx("div", Object.assign({ className: cls({
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
    return (jsx("div", Object.assign({ className: cls('row', Object.assign({}, mergeClassnames), className), style: style }, { children: children }), void 0));
};

const Col = ({ className, style, children, span, xs, sm, md, lg, xl, xxl }) => {
    return (jsx("div", Object.assign({ className: cls({
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
var IconContext = React.createContext && React.createContext(DefaultContext);

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
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React.createElement(IconBase, __assign({
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
    return React.createElement("svg", __assign({
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
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
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
        return (jsx("div", Object.assign({ className: cls('fwork-skeleton--paragraph', className) }, { children: Array.from({ length: paragraph.rows }).map(el => {
                return (jsx("div", { className: cls('fwork-skeleton', {
                        [`fwork-skeleton-${size}`]: Boolean(size),
                        [`fwork-skeleton-rounded`]: rounded
                    }, className), style: Object.assign({ width: width, height: height }, style) }, void 0));
            }) }), void 0));
    }
    return (jsx("div", { className: cls('fwork-skeleton', {
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
    _inheritsLoose(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_assertThisInitialized(_this)),
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
          items.push(createElement(children, {
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
      return createElement(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, createElement(innerElementType || innerTagName || 'div', {
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
  }(PureComponent), _class.defaultProps = {
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
    const defaultNode = useRef(null);
    useEffect(() => {
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
    return ReactDOM.createPortal(children, node || defaultNode.current);
};

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(() => {
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
    var { className, item, showAvatar, showDescription, style, labelKey } = _a, props = __rest$1(_a, ["className", "item", "showAvatar", "showDescription", "style", "labelKey"]);
    return (jsxs("div", Object.assign({ className: cls('fwork-select-option', className) }, props, { children: [showAvatar ? (jsx("img", { src: item && item.avatar, alt: "avatar", className: "fwork-select-option__avatar" }, void 0)) : null,
            jsxs("div", Object.assign({ className: "fwork-select-option__info-wrapper" }, { children: [jsx("span", Object.assign({ className: "fwork-select-option__label" }, { children: get(item, labelKey, '') }), void 0),
                    showDescription ? (jsx("span", Object.assign({ className: "fwork-select-option__description" }, { children: item && item.description }), void 0)) : null] }), void 0)] }), void 0));
};
const Select = (_a) => {
    var { data, onChange, onSearch, renderItem, valueKey, labelKey, value, defaultNumItem = 3, loading = false, searchable = false, showAvatar = false, showDescription = false, label = '', help = '', required = false, validateStatus = '' } = _a, props = __rest$1(_a, ["data", "onChange", "onSearch", "renderItem", "valueKey", "labelKey", "value", "defaultNumItem", "loading", "searchable", "showAvatar", "showDescription", "label", "help", "required", "validateStatus"]);
    const [selected, setSelected] = useState(value || null);
    const [searchText, setSearchText] = useState('');
    const [visible, setVisible] = useState(false);
    const [style, setStyle] = useState({});
    const currentDOM = useRef(null);
    const widthRef = useRef(0);
    const heightRef = useRef(showAvatar ? 48 : 32);
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
    const filteredData = useMemo(() => {
        if (!searchText)
            return data;
        return data.filter((el) => {
            if (onSearch) {
                return onSearch(searchText, el);
            }
            return get(el, labelKey).toLowerCase().includes(searchText.toLowerCase());
        });
    }, [searchText, data]);
    useEffect(() => {
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
        const Row = ({ index, style }) => (jsx(Option, { style: style, onClick: e => chooseOptionHandler(e, data[index]), item: data[index], showAvatar: showAvatar, showDescription: showDescription, labelKey: labelKey }, void 0));
        return data && data.length ? (renderItem ? (data.map((item, index) => (jsx("div", { children: renderItem(item) }, index)))) : (jsx(FixedSizeList, Object.assign({ width: widthRef.current, height: data.length * heightRef.current, itemSize: heightRef.current, itemCount: data.length }, { children: Row }), void 0))) : null;
    };
    useOnClickOutside(currentDOM, (e) => {
        if (!e.target.closest('#portal')) {
            hideOptions();
        }
    });
    const loadingMemo = useMemo(() => {
        if (loading) {
            return (jsx("div", Object.assign({ style: { marginTop: -16 } }, { children: jsx(Skeleton, { width: "100%", size: "medium", paragraph: { rows: defaultNumItem } }, void 0) }), void 0));
        }
    }, [loading]);
    return (jsxs("div", Object.assign({ className: cls('fwork-select', {
            open: visible,
            [`fwork-select-${validateStatus}`]: Boolean(validateStatus)
        }), onClick: showOptions, ref: currentDOM, style: Object.assign(Object.assign({}, props.style), style) }, { children: [label ? (jsxs("label", Object.assign({ className: 'fwork-select-label' }, { children: [label, "\u00A0", required ? jsx("span", Object.assign({ className: 'fwork-input-required' }, { children: "*" }), void 0) : null] }), void 0)) : null,
            jsxs("div", Object.assign({ className: 'fwork-select__input-wrapper' }, { children: [jsx("input", { className: "fwork-select__input", placeholder: hasValue(get(selected, labelKey))
                            ? get(selected, labelKey)
                            : 'Lựa chọn', value: searchable && visible
                            ? searchText
                            : hasValue(get(selected, labelKey))
                                ? get(selected, labelKey)
                                : '', onChange: _handleSearch, disabled: !searchable }, void 0),
                    jsx(HiChevronDown, { size: 16, className: "fwork-select__input-icon" }, void 0)] }), void 0),
            help ? jsx("span", Object.assign({ className: 'fwork-select-help' }, { children: help }), void 0) : null,
            jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: visible ? (jsx("div", Object.assign({ className: "fwork-select__body", style: style }, { children: loading ? loadingMemo : renderOptions(filteredData) }), void 0)) : null }), void 0)] }), void 0));
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
    const [currentPage, setCurrentPage] = useState(current);
    const [pages, setPages] = useState([]);
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
    useEffect(() => {
        if (onChangePage)
            onChangePage(currentPage);
    }, [currentPage]);
    useEffect(() => {
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
        return (jsx(Fragment, { children: pages.map((page, index) => {
                if (page === 'LEFT')
                    return (jsx("div", Object.assign({ onClick: handleMoveLeft, className: 'fwork-pagination__pagination-number' }, { children: "..." }), index));
                if (page === 'RIGHT')
                    return (jsx("div", Object.assign({ onClick: handleMoveRight, className: 'fwork-pagination__pagination-number' }, { children: "..." }), index));
                return (jsx("div", Object.assign({ onClick: (e) => handleClick(page, e), className: cls('fwork-pagination__pagination-number', {
                        'fwork-pagination__pagination-number--active': page === currentPage
                    }) }, { children: page }), index));
            }) }, void 0));
    };
    if (pageCount === 1)
        return null;
    return (jsxs("div", Object.assign({ className: 'fwork-pagination' }, { children: [jsx(HiChevronLeft
            // disabled={!canPreviousPage}
            , { 
                // disabled={!canPreviousPage}
                onClick: () => (canPreviousPage ? handlePrevious() : null) }, void 0), renderPages(pages), jsx(HiChevronRight
            // disabled={!canNextPage}
            , { 
                // disabled={!canNextPage}
                onClick: () => (canNextPage ? handleNext() : null) }, void 0)] }), void 0));
};

const PageHeader = ({ icon, title, actions, extra, description, tabs, tabIndex, onTabChange }) => {
    const preventClickTab = useRef(false);
    const [props, set] = useSpring(() => ({
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
    const getTranslate = useCallback((id) => {
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
    const getWidth = useCallback((id) => {
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
    useEffect(() => {
        if (!tabIndex)
            return;
        set({
            transform: `translateX(${getTranslate(tabIndex)}px)`,
            width: getWidth(tabIndex)
        });
    }, [set, getTranslate, getWidth, tabIndex]);
    return (jsxs("div", Object.assign({ className: cls('fwork-page-header', {
            'fwork-page-header--hasTabs': tabs && tabs.length
        }) }, { children: [jsxs("div", Object.assign({ className: 'fwork-page-header__main' }, { children: [jsxs("div", Object.assign({ className: 'fwork-page-header__heading' }, { children: [icon ? (jsx("div", Object.assign({ className: 'fwork-page-header__heading-icon-wrapper' }, { children: icon }), void 0)) : null,
                            jsx(Text, Object.assign({ variant: "h2" }, { children: title }), void 0)] }), void 0),
                    actions ? (jsx("div", Object.assign({ className: 'fwork-page-header__actions' }, { children: actions }), void 0)) : null,
                    extra ? (jsx("div", Object.assign({ className: 'fwork-page-header__extra' }, { children: extra }), void 0)) : null] }), void 0),
            description ? (jsx("div", Object.assign({ className: 'fwork-page-header__description' }, { children: description }), void 0)) : null,
            tabs && tabs.length ? (jsxs("div", Object.assign({ className: 'fwork-page-header__tabs' }, { children: [jsx("div", Object.assign({ className: cls('fwork-page-header__tab-wrapper') }, { children: tabs.map(tab => (jsx(Text, Object.assign({ className: cls({
                                'fwork-page-header__tabs--active': tab.id === tabIndex
                            }), variant: "sub2", onClick: _handleChangeTab.bind(null, tab.id), style: { cursor: 'pointer' } }, { children: tab.label }), tab.id.toString()))) }), void 0),
                    jsx(animated.div, { className: 'fwork-page-header__tabs--indicator', style: props }, void 0)] }), void 0)) : null] }), void 0));
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
    const targetDOM = useRef(null);
    const [open, setOpen] = useState(false);
    const [style, setStyle] = useState({});
    const [data, setData] = useState([]);
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
    return (jsxs(Fragment, { children: [jsxs("div", Object.assign({ className: "filter-head" }, { children: [jsx(BsFilterLeft, {}, void 0), "\u00A0\u00A0", jsx("span", Object.assign({ style: { color: '#172b4d', fontWeight: 600 } }, { children: "B\u1ED9 l\u1ECDc:" }), void 0), "\u00A0\u00A0", jsx("div", Object.assign({ className: "filter-head__filter-lists" }, { children: filters && filters.length
                            ? filters.map((el) => {
                                return (jsxs("div", Object.assign({ className: "filter-head__filter" }, { children: [jsxs("div", Object.assign({ style: {
                                                cursor: typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string' ? 'pointer' : 'default'
                                            }, onClick: e => {
                                                if (typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string') {
                                                    _handleGetData(el);
                                                    toggle(e);
                                                }
                                            } }, { children: [jsxs("span", { children: [el === null || el === void 0 ? void 0 : el.id, ":"] }, void 0), "\u00A0", jsx("span", Object.assign({ style: { fontWeight: 600 } }, { children: typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string'
                                                        ? _getValues(el)
                                                        : truncate(el === null || el === void 0 ? void 0 : el.value, 4) }), void 0), "\u00A0\u00A0"] }), void 0),
                                        jsxs("div", Object.assign({ style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                width: typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string' ? 40 : 12
                                            } }, { children: [typeof (el === null || el === void 0 ? void 0 : el.value) !== 'string' ? (jsx(FaChevronDown, { size: 12 }, void 0)) : null,
                                                jsx(IoMdClose, { size: 12, style: { cursor: 'pointer' }, onClick: () => {
                                                        setAllFilters(filters.filter((e) => e.id !== el.id));
                                                    } }, void 0)] }), void 0)] }), el === null || el === void 0 ? void 0 : el.id));
                            })
                            : null }), void 0),
                    filters && filters.length >= 2 ? (jsx("span", Object.assign({ style: {
                            marginLeft: 14,
                            fontSize: 14,
                            fontWeight: 600,
                            color: '#1976d2',
                            cursor: 'pointer'
                        }, onClick: () => setAllFilters([]) }, { children: "X\u00F3a t\u1EA5t c\u1EA3" }), void 0)) : null] }), void 0),
            jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: open ? (jsx("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: data && data.length
                        ? data.map((el) => {
                            return (jsxs("div", Object.assign({ style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                } }, { children: [jsx("span", { children: el === null || el === void 0 ? void 0 : el.value }, void 0),
                                    jsx(IoMdClose, { size: 16, onClick: () => {
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
    return (jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center' } }, { children: [total ? (jsxs(Text, Object.assign({ variant: "h4", style: {
                    marginBottom: 0,
                    marginRight: '18px',
                    display: 'inline'
                } }, { children: [total.value, " ", total.label] }), void 0)) : null,
            heading.length
                ? heading
                    .filter(el => !el.isTotal)
                    .map((el, index) => {
                    return (jsxs("div", Object.assign({ style: {
                            display: 'inline-flex',
                            alignItems: 'center'
                        } }, { children: [jsx("span", Object.assign({ style: {
                                    display: 'inline-block',
                                    width: 5,
                                    height: 5,
                                    borderRadius: '50%',
                                    background: `${el.color}`
                                } }, { children: "\u00A0" }), void 0), "\u00A0\u00A0", jsxs(Text, Object.assign({ variant: "caption", style: { marginRight: '18px' } }, { children: [el.value, " ", el.label] }), void 0)] }), index));
                })
                : null] }), void 0));
};
const IndeterminateCheckbox = forwardRef((_a, ref) => {
    var { indeterminate } = _a, rest = __rest$1(_a, ["indeterminate"]);
    const defaultRef = useRef(null);
    const resolvedRef = ref || defaultRef;
    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return jsx("input", Object.assign({ type: "checkbox", ref: resolvedRef }, rest), void 0);
});
const DragHandle = SortableHandle(() => jsx(GrDrag, {}, void 0));
const SortableItem = SortableElement(({ value, index, canDrag }) => (jsxs("div", Object.assign({ className: "fwk-table__column-setting-popup--column-wrapper", style: { zIndex: 100 } }, { children: [canDrag ? jsx(DragHandle, {}, void 0) : null,
        jsxs("label", Object.assign({ style: {
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                marginLeft: 10
            } }, { children: [jsx("input", Object.assign({ type: "checkbox" }, value.getToggleHiddenProps()), void 0),
                jsx("div", Object.assign({ className: "fwk-table__column-setting-popup--column" }, { children: value.id }), void 0)] }), void 0)] }), index)));
const SortableList = SortableContainer(({ items, canDrag }) => {
    return (jsx("ul", { children: items.map((value, index) => (jsx(SortableItem, { index: index, value: value, canDrag: canDrag }, `item-${value.id}`))) }, void 0));
});
const Inputcomponent = memo(({ allColumns, onSortEnd }) => {
    const [columnSearch, setColumnSearch] = useState('');
    return (jsxs(Fragment, { children: [jsx("div", Object.assign({ className: "fwk-table__column-setting-popup--search" }, { children: jsx(Input, { ref: e => e && e.focus(), placeholder: "T\u00ECm ki\u1EBFm", icon: jsx(BiSearch, { color: "#a2aab7" }, void 0), style: { width: '100%' }, value: columnSearch, onChange: e => setColumnSearch(e.target.value) }, void 0) }), void 0),
            jsx("div", Object.assign({ className: "fwk-table__column-setting-popup--columns" }, { children: jsx(SortableList, { items: allColumns
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
    const [columnSettingOpen, setColumnSettingOpen] = useState(false);
    const [style, setStyle] = useState({});
    const columnSettingButtonDOM = useRef(null);
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
    const defaultColumn = useMemo(() => ({
        // Let's set up our default Filter UI
        disableFilters: true
    }), []);
    const { allColumns, getToggleHideAllColumnsProps, getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setColumnOrder, canPreviousPage, canNextPage, pageCount, gotoPage, setPageSize, setFilter, setAllFilters, state: { pageIndex, pageSize, filters } } = useTable(Object.assign({ initialState: { pageIndex: 0, pageSize: 10 }, manualPagination: true, manualFilters: true, defaultColumn }, options), useFilters, useFlexLayout, usePagination, useColumnOrder);
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColumnOrder(arrayMove(allColumns.map(d => d.id).filter(el => el !== 'setting'), oldIndex, newIndex));
    };
    useEffect(() => {
        fetchData({ pageIndex, pageSize, filters });
    }, [fetchData, pageIndex, pageSize, filters, forceUpdate]);
    return (jsxs(Fragment, { children: [heading || actions ? (jsxs("div", Object.assign({ className: 'fwk-table__heading-wrapper' }, { children: [jsx("div", Object.assign({ className: 'fwk-table__heading' }, { children: heading ? (isValidElement(heading) ? (jsx(Fragment, { children: heading }, void 0)) : (renderHeadingStatus(heading))) : null }), void 0),
                    jsx("div", Object.assign({ className: 'fwk-table__actions' }, { children: actions }), void 0)] }), void 0)) : null,
            jsx(FilterHead, { allColumns: allColumns, filters: filters, setFilter: setFilter, setAllFilters: setAllFilters }, void 0),
            jsxs("div", Object.assign({}, getTableProps(), { className: 'fwk-table', style: {
                    overflowX: (rows && rows.length && !loading) ||
                        (rows && !rows.length && !loading)
                        ? 'auto'
                        : 'hidden'
                } }, { children: [jsx("div", Object.assign({ className: 'fwk-table__thead' }, { children: headerGroups.map((headerGroup, index) => {
                            return (createElement("div", Object.assign({}, headerGroup.getHeaderGroupProps(), { className: 'fwk-table__tr', key: index }), headerGroup.headers.map((column, index) => {
                                if (column.id === 'setting') {
                                    const _a = column.getHeaderProps(), { style } = _a, props = __rest$1(_a, ["style"]);
                                    return (createElement("div", Object.assign({}, props, { style: Object.assign(Object.assign({}, style), { justifyContent: 'flex-end', paddingRight: 0 }), className: 'fwk-table__th', key: index }),
                                        jsx("div", Object.assign({ ref: columnSettingButtonDOM, className: "fwk-table__column-setting", onClick: _showColumnSetting }, { children: jsx(RiSettings5Fill, { size: 16 }, void 0) }), void 0)));
                                }
                                return (createElement("div", Object.assign({}, column.getHeaderProps(), { className: 'fwk-table__th', key: index }),
                                    jsx(Text, Object.assign({ variant: "important", style: {
                                            marginBottom: 0,
                                            marginRight: 8
                                        } }, { children: column.render('Header') }), void 0),
                                    column.canFilter ? column.render('Filter') : null));
                            })));
                        }) }), void 0),
                    jsx("div", Object.assign({}, getTableBodyProps(), { className: 'fwk-table__tbody' }, { children: !loading ? (jsx(Fragment, { children: rows && rows.length ? (jsxs(Fragment, { children: [rows.map((row, index) => {
                                        prepareRow(row);
                                        return (createElement("div", Object.assign({}, row.getRowProps(), { className: cls('fwk-table__tr', {
                                                'fwk-table-fixed-row-height': isFixedRowHeight,
                                                'fwk-table-hoverable': hoverable
                                            }), key: index }), row.cells.map(cell => {
                                            return (jsx("div", Object.assign({}, cell.getCellProps(), { className: 'fwk-table__td' }, { children: isValidElement(cell.value) ? (cell.render('Cell')) : (jsx(Text, Object.assign({ style: { marginBottom: 0 } }, { children: cell.render('Cell') }), void 0)) }), void 0));
                                        })));
                                    }),
                                    rows && rows.length && rows.length < pageSize
                                        ? Array.from(Array(pageSize - rows.length).keys()).map((row, index) => {
                                            return (jsx("div", Object.assign({ role: "row", className: 'fwk-table__tr', style: {
                                                    boxSizing: 'border-box',
                                                    display: 'flex',
                                                    flex: '1 0 auto',
                                                    minWidth: 900
                                                } }, { children: allColumns
                                                    .filter(el => el.isVisible)
                                                    .map((el, index) => {
                                                    const width = el.width || 150;
                                                    const minWidth = el.minWidth || 0;
                                                    return (jsx("div", { role: "cell", style: {
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
                                        : null] }, void 0)) : (jsx("div", Object.assign({ style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 410
                                } }, { children: "no data" }), void 0)) }, void 0)) : (jsxs(Fragment, { children: [Array.from(Array(pageSize).keys()).map((row, index) => {
                                    return (jsx("div", Object.assign({ role: "row", className: 'fwk-table__tr', style: {
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            flex: '1 0 auto',
                                            minWidth: 900
                                        } }, { children: allColumns
                                            .filter(el => el.isVisible)
                                            .map((el, index) => {
                                            const width = el.width || 150;
                                            const minWidth = el.minWidth || 0;
                                            return (jsx("div", Object.assign({ role: "cell", style: {
                                                    boxSizing: 'border-box',
                                                    flexGrow: minWidth,
                                                    flexShrink: 0,
                                                    flexBasis: 'auto',
                                                    minWidth: `${minWidth || width}px`,
                                                    width: `${width || minWidth}px`,
                                                    padding: '10px 5px',
                                                    paddingLeft: 0
                                                }, className: 'fwk-table__td' }, { children: !loadingComponent ? jsx(Skeleton, {}, void 0) : null }), index));
                                        }) }), index));
                                }),
                                loadingComponent ? (jsx("div", Object.assign({ style: {
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
            jsxs("div", Object.assign({ className: 'fwk-table__pagination-wrapper' }, { children: [jsx("div", {}, void 0),
                    pageCount > 1 ? (jsx(Pagination, { pageCount: pageCount, currentPage: pageIndex + 1, onChangePage: (value) => {
                            gotoPage(value - 1);
                        }, canPreviousPage: canPreviousPage, canNextPage: canNextPage }, void 0)) : null,
                    jsx("div", { children: jsx(Select, { data: pageSizes, labelKey: "label", value: pageSizes.find(el => el.value === pageSize), onChange: value => {
                                setPageSize(Number(value.value));
                            } }, void 0) }, void 0)] }), void 0),
            jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: columnSettingOpen ? (jsxs("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: [jsxs("div", Object.assign({ className: "fwk-table__column-setting-popup--heading" }, { children: [jsx(Text, Object.assign({ variant: "important" }, { children: "\u1EA8n/Hi\u1EC7n c\u1ED9t" }), void 0),
                                jsxs("div", { children: [jsx(IndeterminateCheckbox, Object.assign({}, getToggleHideAllColumnsProps()), void 0), "\u00A0", jsx(Text, { children: "Hi\u1EC7n t\u1EA5t c\u1EA3" }, void 0)] }, void 0)] }), void 0),
                        jsx(Inputcomponent, { onSortEnd: onSortEnd, allColumns: allColumns }, void 0)] }), void 0)) : null }), void 0)] }, void 0));
};

// THIS FILE IS AUTO GENERATED
function AiFillCaretDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(props);
}

function useFilterPopup(targetDOM) {
    const [open, setOpen] = useState(false);
    const [style, setStyle] = useState({});
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
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
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
    const [searchTerm, setSearchTerm] = useState(filterValue || '');
    const targetDOM = useRef(null);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const { style, open, toggle } = useFilterPopup(targetDOM);
    useEffect(() => {
        setFilter(debouncedSearchTerm);
    }, [debouncedSearchTerm] // Only call effect if debounced search term changes
    );
    useEffect(() => {
        if (filterValue === undefined) {
            setSearchTerm('');
        }
    }, [filterValue, setSearchTerm]);
    return (jsxs(Fragment, { children: [jsx("div", Object.assign({ ref: targetDOM, onClick: toggle, style: { display: 'flex', alignItems: 'center' } }, { children: jsx(AiFillCaretDown, {}, void 0) }), void 0),
            jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: open ? (jsx("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm", icon: jsx(BiSearch, { color: "#a2aab7" }, void 0), style: { width: '100%' }, value: searchTerm || '', onChange: (e) => setSearchTerm(e.target.value || undefined) }, void 0) }), void 0)) : null }), void 0)] }, void 0));
};

const CheckBoxSearch = (_a) => {
    var _b, _c;
    var _d = _a.column, { filterValue, preFilteredRows, setFilter } = _d, props = __rest$1(_d, ["filterValue", "preFilteredRows", "setFilter"]);
    const targetDOM = useRef(null);
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
    return (jsxs(Fragment, { children: [jsx("div", Object.assign({ ref: targetDOM, onClick: toggle, style: { display: 'flex', alignItems: 'center' } }, { children: jsx(AiFillCaretDown, {}, void 0) }), void 0),
            jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: open ? (jsx("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: props.customProps && ((_c = (_b = props.customProps) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length)
                        ? props.customProps.data.map((el) => {
                            return (jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center' } }, { children: [jsx("input", { checked: currentValues.some((e) => e.id === el.id), type: "checkbox", onChange: _handleChangeValue.bind(null, el) }, void 0), "\u00A0\u00A0", jsx("span", { children: el.value }, void 0)] }), el.id));
                        })
                        : [] }), void 0)) : null }), void 0)] }, void 0));
};

const CheckBoxSearchInput = (_a) => {
    var _b = _a.column, { filterValue, preFilteredRows, setFilter } = _b, props = __rest$1(_b, ["filterValue", "preFilteredRows", "setFilter"]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const targetDOM = useRef(null);
    const [searchTerm, setSearchTerm] = useState(filterValue || '');
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
    useEffect(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
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
    return (jsxs(Fragment, { children: [jsx("div", Object.assign({ ref: targetDOM, onClick: toggle, style: { display: 'flex', alignItems: 'center' } }, { children: jsx(AiFillCaretDown, {}, void 0) }), void 0),
            jsx(Portal, Object.assign({ node: typeof window !== 'undefined'
                    ? document.querySelector('#portal')
                    : null }, { children: open ? (jsxs("div", Object.assign({ className: "fwk-table__column-setting-popup", style: style }, { children: [jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm", icon: jsx(BiSearch, { color: "#a2aab7" }, void 0), style: { width: '100%' }, value: searchTerm || '', onChange: (e) => setSearchTerm(e.target.value || undefined) }, void 0),
                        loading ? (jsxs("div", { children: [jsx("br", {}, void 0),
                                jsx(Skeleton, {}, void 0),
                                jsx("br", {}, void 0),
                                jsx(Skeleton, {}, void 0),
                                jsx("br", {}, void 0),
                                jsx(Skeleton, {}, void 0),
                                jsx("br", {}, void 0)] }, void 0)) : data && data.length ? (jsxs(Fragment, { children: [jsx("div", { style: { marginTop: 8 } }, void 0),
                                data.map((el) => {
                                    return (jsxs("div", Object.assign({ style: { display: 'flex', alignItems: 'center' } }, { children: [jsx("input", { checked: currentValues.some((e) => e.id === el.id), type: "checkbox", onChange: _handleChangeValue.bind(null, el) }, void 0), "\u00A0\u00A0", jsx("span", { children: el.value }, void 0)] }), el.id));
                                })] }, void 0)) : null] }), void 0)) : null }), void 0)] }, void 0));
};

const Switch = forwardRef(({ label, trueText, falseText, checked, onChange, disabled }, textRef) => {
    const renderSwitchLabel = useMemo(() => (jsx("p", Object.assign({ className: 'fwk-switch-option-label' }, { children: checked ? trueText : falseText }), Math.random().toString())), [checked]);
    const randomKey = Math.random().toString();
    const renderSwitch = useMemo(() => (jsxs("div", { children: [jsx("input", { className: 'fwk-switch-checkbox', type: "checkbox", disabled: disabled, id: randomKey, defaultChecked: checked ? true : false, onChange: (e) => onChange && onChange(e.target.checked) }, void 0),
            jsx("label", { className: 'fwk-switch-checkbox-label', htmlFor: randomKey }, void 0)] }, void 0)), [checked]);
    return (jsxs("div", Object.assign({ ref: textRef }, { children: [label ? jsx("div", Object.assign({ className: 'fwk-switch-label' }, { children: label }), void 0) : null,
            jsxs("div", Object.assign({ className: 'fwk-switch-content' }, { children: [renderSwitch, trueText || falseText ? renderSwitchLabel : null] }), void 0)] }), void 0));
});

function useSideBar() {
    const [activeKey, setActiveKey] = useState(null);
    return {
        activeKey,
        setActiveKey
    };
}

const Block = ({ searchContent, searchable, viewMore, divider, items, label, extra, defaultNumItem = 5, openKeys, activeKey, onChange, loading = false, code, isHeader, icon, viewMoreAction }) => {
    const renderList = useMemo(() => {
        if (items && items.length && openKeys && openKeys.includes(code)) {
            let renderData = items;
            return renderData.map(item => (jsx(Block, { code: item.key, label: item.label, onChange: onChange, activeKey: activeKey, items: item.items }, void 0)));
        }
        return null;
    }, [activeKey, items]);
    const renderLoading = (jsx("div", Object.assign({ style: { margin: '0px 16px 0 12px' } }, { children: Array.from(Array(defaultNumItem).keys()).map(item => (jsx("div", Object.assign({ style: { padding: '9px 28px 9px 0' } }, { children: jsx("div", Object.assign({ className: 'fwk-sidebar-skeleton' }, { children: "\u00A0" }), void 0) }), item))) }), void 0));
    return divider ? (jsx("div", { className: 'fwk-sidebar-item-divider' }, void 0)) : (jsxs("div", Object.assign({ className: 'fwk-sidebar-item-container' }, { children: [label ? (jsxs("div", Object.assign({ className: cls('fwk-sidebar-item', {
                    'fwk-sidebar-active-item': activeKey === code
                }), onClick: () => onChange && onChange(code) }, { children: [icon ? jsx("div", Object.assign({ className: 'fwk-sidebar-item-icon' }, { children: icon }), void 0) : null,
                    jsx("div", Object.assign({ className: cls('fwk-sidebar-item-label', {
                            'fwk-sidebar-item-header': isHeader
                        }) }, { children: label }), void 0),
                    extra ? (jsx("div", Object.assign({ className: 'fwk-sidebar-item-extra' }, { children: extra }), void 0)) : null] }), void 0)) : null, searchable ? searchContent : null, loading ? renderLoading : renderList, !loading && items && items.length && viewMore ? (jsx("div", Object.assign({ className: 'fwk-sidebar-item-view-more', onClick: () => {
                    viewMoreAction && viewMoreAction();
                } }, { children: "Hi\u1EC3n th\u1ECB th\u00EAm" }), void 0)) : null] }), void 0));
};

const Sidebar = ({ data, activeKey: defaultActiveKey, loadingKeys, openKeys, style, onChange }) => {
    const { activeKey, setActiveKey } = useSideBar();
    useEffect(() => {
        setActiveKey(defaultActiveKey);
    }, [defaultActiveKey]);
    const renderContent = useMemo(() => {
        if (data && data.length) {
            return data.map(blockData => (jsx(Block, { items: blockData.items, extra: blockData.extra, searchable: blockData.searchable, searchContent: blockData.searchContent, label: blockData.label, openKeys: openKeys, isHeader: blockData.isHeader, icon: blockData.icon, defaultNumItem: blockData.defaultNumItem, divider: blockData.divider, onChange: onChange, activeKey: activeKey, loading: loadingKeys && loadingKeys.includes(blockData.key), viewMore: blockData.viewMore, viewMoreAction: blockData.viewMoreAction, code: blockData.key }, void 0)));
        }
        return null;
    }, [data, activeKey, loadingKeys]);
    return (jsx("div", Object.assign({ style: style, className: 'fwk-sidebar-container' }, { children: renderContent }), void 0));
};
var Sidebar$1 = memo(Sidebar);

const RadioContext = createContext({});
const Group = ({ children, onChange, label, value, help, required, disabled = false, validateStatus }) => {
    return (jsxs(RadioContext.Provider, Object.assign({ value: {
            value,
            disabled: disabled,
            name: Math.random().toString(),
            onChange: onChange
        } }, { children: [jsx("div", { children: label ? (jsxs("label", Object.assign({ className: "fwork-radio-group-label" }, { children: [label, "\u00A0", required ? (jsx("span", Object.assign({ className: "fwork-radio-group-required" }, { children: "*" }), void 0)) : null] }), void 0)) : null }, void 0),
            jsx("div", Object.assign({ className: cls({
                    [`fwork-group-content-${validateStatus}`]: Boolean(validateStatus)
                }) }, { children: children }), void 0),
            help ? jsx("span", Object.assign({ className: 'fwork-radio-group-help' }, { children: help }), void 0) : null] }), void 0));
};

const Radio$1 = ({ onChange, text, disabled = false, value, checked, style, name, invalid }) => {
    const radioContext = useContext(RadioContext);
    const processId = Math.random().toString();
    const isChecked = checked === value || value === radioContext.value;
    return (jsx(Fragment, { children: jsxs("label", Object.assign({ style: style, className: cls('fwk-radio-container', {
                'fwk-radio-container-checked': isChecked
            }), htmlFor: processId, onClick: (e) => {
                e.stopPropagation();
                if (!disabled && !radioContext.disabled) {
                    onChange && onChange(value);
                    radioContext.onChange && radioContext.onChange(value);
                }
            } }, { children: [jsxs("span", Object.assign({ className: cls('fwk-radio', {
                        'fwk-radio-checked': isChecked
                    }) }, { children: [jsx("input", { type: "radio", id: processId, defaultChecked: checked === value, disabled: disabled, name: name, onClick: (e) => {
                                e.stopPropagation();
                                onChange && onChange(value);
                                radioContext.onChange && radioContext.onChange(value);
                            }, className: cls('fwk-radio-input') }, void 0),
                        jsx("span", { className: cls('fwk-radio-inner', {
                                'fwk-radio-inner-disable': disabled || radioContext.disabled,
                                'fwk-radio-inner-invalid': invalid
                            }) }, void 0)] }), void 0),
                text ? (jsx("span", Object.assign({ className: cls('fwk-radio-text', {
                        'fwk-radio-text-disable': disabled || radioContext.disabled || invalid
                    }) }, { children: text }), void 0)) : null] }), void 0) }, void 0));
};

const Radio = Radio$1;
Radio.Group = Group;

const Checkbox = ({}) => {
    return (jsx(Fragment, { children: jsxs("label", Object.assign({ className: "fwk-checkbox-wrapper" }, { children: [jsxs("span", Object.assign({ className: "fwk-checkbox fwk-checkbox-checked" }, { children: [jsx("input", { type: "checkbox", className: "fwk-checkbox-input", value: "" }, void 0),
                        jsx("span", { className: "fwk-checkbox-inner" }, void 0)] }), void 0),
                jsx("span", { children: "Checkbox" }, void 0)] }), void 0) }, void 0));
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
const Dropzone = forwardRef((_a, dropzoneRef) => {
    var { multiple = true, disabled = false, loading = false, icon = null, text = '', accept = '*', className = '', style, service = '', showAccept = false, maxSize = '', showMaxSize = false, onDragEnter, onDragOver, onDragLeave, onDrop, onChange } = _a, props = __rest$1(_a, ["multiple", "disabled", "loading", "icon", "text", "accept", "className", "style", "service", "showAccept", "maxSize", "showMaxSize", "onDragEnter", "onDragOver", "onDragLeave", "onDrop", "onChange"]);
    const inputRef = useRef(null);
    const [draggingOver, setDraggingOver] = useState(false);
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
    return (jsxs("div", Object.assign({ style: style, className: cls(className) }, { children: [jsxs("div", Object.assign({ className: cls('fwk-dropzone', {
                    'fwk-dropzone-dragging-over': draggingOver,
                    'fwk-dropzone-disabled': disabled,
                    'fwk-dropzone-loading': loading
                }, service && !disabled && !loading ? `${service}-service` : ''), ref: dropzoneRef, onClick: () => { var _a; return !disabled && !loading && ((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.click()); }, onDragEnter: _handleDragEnter, onDragOver: _handleDragOver, onDragLeave: _handleDragLeave, onDrop: _handleDrop }, props, { children: [icon || null, icon ? jsx(Fragment, { children: "\u00A0\u00A0" }, void 0) : null,
                    text ? (typeof text === 'string' ? (jsx("span", Object.assign({ className: "fwk-dropzone-input-text" }, { children: text }), void 0)) : (text)) : (jsxs("span", Object.assign({ className: "fwk-dropzone-input-text" }, { children: ["K\u00E9o ho\u1EB7c ", jsx("strong", { children: "ch\u1ECDn" }, void 0), " \u0111\u1EC3 t\u1EA3i l\u00EAn"] }), void 0)),
                    jsx("input", { accept: accept, ref: inputRef, className: "fwk-dropzone-input", multiple: multiple, type: "file", disabled: disabled || loading, onChange: _handleChangeInput }, void 0)] }), void 0),
            jsxs("div", Object.assign({ className: "fwk-dropzone-info" }, { children: [accept && showAccept ? (jsx("span", Object.assign({ className: "fwk-dropzone-accept" }, { children: `Support file: ${accept}` }), void 0)) : null,
                    maxSize && showMaxSize ? (jsx("span", Object.assign({ className: "fwk-dropzone-maxSize" }, { children: `Maximum: ${maxSize.toUpperCase()}` }), void 0)) : null] }), void 0)] }), void 0));
});
var Dropzone$1 = memo(Dropzone);

const ILLustration = ({ colorData, colorValue, iconData, iconValue, label, required, checkIcon, onChangeColor, onChangeIcon, style, error, errorMessage }) => {
    const defaultColor = ((colorData === null || colorData === void 0 ? void 0 : colorData.length) && colorData[0]) || '#b39ddb';
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => {
        setVisible(false);
    });
    return (jsxs("div", Object.assign({ ref: ref, style: style }, { children: [label ? (jsxs("p", Object.assign({ className: "fwk-illustration-label" }, { children: [label, ' ', required ? (jsx("span", Object.assign({ className: "fwk-illustration-required" }, { children: "*" }), void 0)) : null] }), void 0)) : null,
            jsxs("div", Object.assign({ className: "fwk-illustration-content" }, { children: [jsx("div", Object.assign({ style: { backgroundColor: colorValue || defaultColor }, className: "preview" }, { children: iconValue ? (jsx("div", Object.assign({ style: { width: 24, height: 24 } }, { children: get(iconData.find(icon => icon.name === iconValue), 'content', null) }), void 0)) : ('') }), void 0),
                    jsx("div", { children: jsx("div", Object.assign({ onClick: () => {
                                const toogle = !visible;
                                setVisible(toogle);
                            }, className: cls('select-text', {
                                focus: visible
                            }) }, { children: "L\u1EF1a ch\u1ECDn \u1EA3nh" }), void 0) }, void 0),
                    visible ? (jsxs("div", Object.assign({ className: "selection-table" }, { children: [colorData && colorData.length ? (jsxs(Fragment, { children: [jsx("div", Object.assign({ className: 'color-table' }, { children: colorData.map(color => (jsxs("div", Object.assign({ style: { backgroundColor: color }, className: 'color-item', onClick: () => onChangeColor && onChangeColor(color) }, { children: ["\u00A0", color === colorValue ? (jsx("div", Object.assign({ style: {
                                                        position: 'absolute',
                                                        transition: 'all 0.3s',
                                                        color: 'white'
                                                    } }, { children: checkIcon }), void 0)) : null] }), void 0))) }), void 0),
                                    jsx("div", { className: "divider" }, void 0)] }, void 0)) : null,
                            jsx("div", Object.assign({ className: "icon-table" }, { children: iconData.map(icon => (jsx("div", Object.assign({ className: cls('icon-item', {
                                        'icon-selected': icon.name === iconValue
                                    }), onClick: () => onChangeIcon && onChangeIcon(icon.name) }, { children: jsx("div", Object.assign({ style: { color: 'white', height: 24, width: 24 } }, { children: icon.content }), void 0) }), void 0))) }), void 0)] }), void 0)) : null] }), void 0),
            error && errorMessage && !visible ? (jsx("div", Object.assign({ className: "fwk-illustration-error-text" }, { children: errorMessage }), void 0)) : null] }), void 0));
};
var Illustration = memo(ILLustration);

export { Button, CheckBoxSearch, CheckBoxSearchInput, Checkbox, Col, Container, Dropzone$1 as Dropzone, Illustration, Input, PageHeader, Pagination, Portal, Radio, Row, Select, Sidebar$1 as Sidebar, Skeleton, Switch, Table, Text, TextArea, TextSearch };
>>>>>>> c9192834196fcb4f016849245496a2b6bccd1c7f
