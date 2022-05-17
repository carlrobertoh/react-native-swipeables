import React, { PropsWithChildren } from 'react';

import { Animated, StyleSheet, Text } from 'react-native';

import { Direction } from './types';

interface Props {
  opacity: Animated.AnimatedInterpolation;
  direction?: Direction;
}

export const ActionTag = ({ direction, ...props }: PropsWithChildren<Props>) => {
  const color = (() => {
    if (direction === 'left') {
      return 'red';
    }
    if (direction === 'top') {
      return 'blue';
    }
    return 'green';
  })();

  return (
    <Animated.View
      style={{
        ...styles.container,
        ...(direction === 'right' ? { left: 40 } : { right: 40 }),
        opacity: props.opacity,
        transform: [{ rotate: `${direction === 'right' ? '-30' : '30'}deg` }],
      }}>
      <Text
        style={{
          ...styles.box,
          color,
          borderColor: color,
        }}>
        {props.children}
      </Text>
    </Animated.View>
  );
};

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
