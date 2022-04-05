import { useState } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';

type Direction = 'left' | 'right';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const useAnimation = (props: {
  onSwipe: (selectedIndex: number, direction: Direction) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) =>
      position.setValue({ x: gestureState.dx, y: gestureState.dy }),
    onPanResponderRelease: (_, gestureState) => {
      const animate = (toX: number, direction: Direction) => {
        Animated.spring(position, {
          useNativeDriver: true,
          toValue: { x: toX, y: gestureState.dy },
        }).start(() => {
          position.setValue({ x: 0, y: 0 });
        });
        setCurrentIndex(prevIndex => prevIndex + 1);
        props.onSwipe(currentIndex, direction);
      };

      if (gestureState.dx > 120) {
        return animate(SCREEN_WIDTH + 100, 'right');
      }
      if (gestureState.dx < -120) {
        return animate(-SCREEN_WIDTH - 100, 'left');
      }
      Animated.spring(position, {
        useNativeDriver: true,
        toValue: { x: 0, y: 0 },
        friction: 4,
      }).start();
    },
  });

  const interpolateConfig = {
    rotate: interpolate(['-10deg', '0deg', '10deg'], position),
    likeOpacity: interpolate([0, 0, 1], position),
    nopeOpacity: interpolate([1, 0, 0], position),
    nextCardOpacity: interpolate([1, 0, 1], position),
    nextCardScale: interpolate([1, 0.8, 1], position),
  };

  const rotateAndTranslate = {
    transform: [
      {
        rotate: interpolateConfig.rotate,
      },
      ...position.getTranslateTransform(),
    ],
  };

  return {
    currentIndex,
    position,
    rotateAndTranslate,
    interpolateConfig,
    panHandlers: panResponder.panHandlers,
  };
};

export const interpolate = (
  outputRange: number[] | string[],
  position: Animated.ValueXY,
) =>
  position.x.interpolate({
    outputRange,
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    extrapolate: 'clamp',
  });
