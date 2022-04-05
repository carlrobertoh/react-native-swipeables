import React, { PropsWithChildren } from 'react';

import { Animated, StyleSheet, Text } from 'react-native';

interface Props {
  opacity: Animated.AnimatedInterpolation;
  isLikeAction?: boolean;
}

export const ActionTag = ({
  isLikeAction,
  ...props
}: PropsWithChildren<Props>) => (
  <Animated.View
    style={{
      ...styles.container,
      ...(isLikeAction ? { left: 40 } : { right: 40 }),
      opacity: props.opacity,
      transform: [{ rotate: `${isLikeAction ? '-30' : '30'}deg` }],
    }}>
    <Text
      style={{
        ...styles.box,
        borderColor: isLikeAction ? 'green' : 'red',
        color: isLikeAction ? 'green' : 'red',
      }}>
      {props.children}
    </Text>
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 1000,
  },
  box: {
    borderWidth: 1,
    fontSize: 32,
    fontWeight: '800',
    padding: 10,
  },
});
