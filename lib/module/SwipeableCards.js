function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Animated } from 'react-native';
import { ActionTag } from './ActionTag';
import { interpolate, useAnimation } from './useAnimation';
export const SwipeableCards = _ref => {
  let {
    enableActionTags = true,
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
    onSwipe: (selectedIndex, actionType) => {
      const itemDefinition = data.find(i => i.index === selectedIndex);

      if (itemDefinition) {
        props.onChange(itemDefinition.item, actionType);
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, data.map(itemDefinition => {
    if (itemDefinition.index < currentIndex) {
      return null;
    }

    if (itemDefinition.index === currentIndex) {
      return /*#__PURE__*/React.createElement(Animated.View, _extends({}, panHandlers, {
        key: itemDefinition.index,
        style: [rotateAndTranslate]
      }), enableActionTags && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActionTag, {
        isLikeAction: true,
        opacity: interpolateConfig.likeOpacity
      }, "LIKE"), /*#__PURE__*/React.createElement(ActionTag, {
        opacity: interpolateConfig.nopeOpacity
      }, "NOPE")), itemDefinition.render(itemDefinition.item));
    }

    return /*#__PURE__*/React.createElement(Animated.View, {
      key: itemDefinition.index,
      style: {
        opacity: interpolate([1, 0, 1], position),
        transform: [{
          scale: interpolate([1, 0.8, 1], position)
        }]
      }
    }, itemDefinition.render(itemDefinition.item));
  }).reverse());
};
//# sourceMappingURL=SwipeableCards.js.map