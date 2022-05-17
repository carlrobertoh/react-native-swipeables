function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Animated } from 'react-native';
import { ActionTag } from './ActionTag';
import { interpolateX, useAnimation } from './useAnimation';
export const SwipeableCards = _ref => {
  let {
    actionTagDetails = {
      enableTags: true
    },
    ...props
  } = _ref;
  const data = props.data.map((item, i) => ({ ...item,
    index: i
  }));
  const {
    currentIndex,
    position,
    rotateAndTranslate,
    interpolateConfig,
    panHandlers
  } = useAnimation({
    onSwipe: (selectedIndex, direction) => {
      const itemDefinition = data.find(i => i.index === selectedIndex);

      if (itemDefinition) {
        props.onChange(itemDefinition.item, direction);
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, data.map(itemDefinition => {
    if (itemDefinition.index < currentIndex) {
      return null;
    }

    if (itemDefinition.index === currentIndex) {
      var _actionTagDetails$lab, _actionTagDetails$lab2, _actionTagDetails$lab3;

      return /*#__PURE__*/React.createElement(Animated.View, _extends({}, panHandlers, {
        key: itemDefinition.index,
        style: [rotateAndTranslate]
      }), (actionTagDetails === null || actionTagDetails === void 0 ? void 0 : actionTagDetails.enableTags) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActionTag, {
        direction: "left",
        opacity: interpolateConfig.nopeOpacity
      }, ((_actionTagDetails$lab = actionTagDetails.labels) === null || _actionTagDetails$lab === void 0 ? void 0 : _actionTagDetails$lab.left) || 'NOPE'), /*#__PURE__*/React.createElement(ActionTag, {
        direction: "right",
        opacity: interpolateConfig.likeOpacity
      }, ((_actionTagDetails$lab2 = actionTagDetails.labels) === null || _actionTagDetails$lab2 === void 0 ? void 0 : _actionTagDetails$lab2.right) || 'LIKE'), /*#__PURE__*/React.createElement(ActionTag, {
        direction: "top",
        opacity: interpolateConfig.superLikeOpacity
      }, ((_actionTagDetails$lab3 = actionTagDetails.labels) === null || _actionTagDetails$lab3 === void 0 ? void 0 : _actionTagDetails$lab3.top) || 'SUPER LIKE')), itemDefinition.render(itemDefinition.item));
    }

    return /*#__PURE__*/React.createElement(Animated.View, {
      key: itemDefinition.index,
      style: {
        opacity: interpolateX([1, 0, 1], position),
        transform: [{
          scale: interpolateX([1, 0.8, 1], position)
        }]
      }
    }, itemDefinition.render(itemDefinition.item));
  }).reverse());
};
//# sourceMappingURL=SwipeableCards.js.map