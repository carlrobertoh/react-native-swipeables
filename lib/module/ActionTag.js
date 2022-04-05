import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
export const ActionTag = _ref => {
  let {
    isLikeAction,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: { ...styles.container,
      ...(isLikeAction ? {
        left: 40
      } : {
        right: 40
      }),
      opacity: props.opacity,
      transform: [{
        rotate: `${isLikeAction ? '-30' : '30'}deg`
      }]
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: { ...styles.box,
      borderColor: isLikeAction ? 'green' : 'red',
      color: isLikeAction ? 'green' : 'red'
    }
  }, props.children));
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 1000
  },
  box: {
    borderWidth: 1,
    fontSize: 32,
    fontWeight: '800',
    padding: 10
  }
});
//# sourceMappingURL=ActionTag.js.map