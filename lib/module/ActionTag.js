import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
export const ActionTag = _ref => {
  let {
    direction,
    ...props
  } = _ref;

  const color = (() => {
    if (direction === 'left') {
      return 'red';
    }

    if (direction === 'top') {
      return 'blue';
    }

    return 'green';
  })();

  return /*#__PURE__*/React.createElement(Animated.View, {
    style: { ...styles.container,
      ...(direction === 'right' ? {
        left: 40
      } : {
        right: 40
      }),
      opacity: props.opacity,
      transform: [{
        rotate: `${direction === 'right' ? '-30' : '30'}deg`
      }]
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: { ...styles.box,
      color,
      borderColor: color
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