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
