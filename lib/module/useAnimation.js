import { useState } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export const useAnimation = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => position.setValue({
      x: gestureState.dx,
      y: gestureState.dy
    }),
    onPanResponderRelease: (_, gestureState) => {
      const animate = (toValue, direction) => {
        Animated.spring(position, {
          toValue,
          useNativeDriver: true
        }).start(() => {
          position.setValue({
            x: 0,
            y: 0
          });
        });
        setCurrentIndex(prevIndex => prevIndex + 1);
        props.onSwipe(currentIndex, direction);
      };

      if (gestureState.dx > 120) {
        return animate({
          x: SCREEN_WIDTH + 100,
          y: gestureState.dy
        }, 'right');
      }

      if (gestureState.dx < -120) {
        return animate({
          x: -SCREEN_WIDTH - 100,
          y: gestureState.dy
        }, 'left');
      }

      if (gestureState.dy < -120) {
        return animate({
          x: gestureState.dx,
          y: -SCREEN_HEIGHT - 100
        }, 'top');
      }

      Animated.spring(position, {
        useNativeDriver: true,
        toValue: {
          x: 0,
          y: 0
        },
        friction: 4
      }).start();
    }
  });
  const interpolateConfig = {
    rotate: interpolateX(['-10deg', '0deg', '10deg'], position),
    likeOpacity: interpolateX([0, 0, 1], position),
    superLikeOpacity: interpolateY([1, 0, 0], position),
    nopeOpacity: interpolateX([1, 0, 0], position),
    nextCardOpacity: interpolateX([1, 0, 1], position),
    nextCardScale: interpolateX([1, 0.8, 1], position)
  };
  const rotateAndTranslate = {
    transform: [{
      rotate: interpolateConfig.rotate
    }, ...position.getTranslateTransform()]
  };
  return {
    currentIndex,
    position,
    rotateAndTranslate,
    interpolateConfig,
    panHandlers: panResponder.panHandlers
  };
};
export const interpolateX = (outputRange, position) => position.x.interpolate({
  outputRange,
  inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
  extrapolate: 'clamp'
});
export const interpolateY = (outputRange, position) => position.y.interpolate({
  outputRange,
  inputRange: [-SCREEN_HEIGHT / 2, 0, SCREEN_HEIGHT / 2],
  extrapolate: 'clamp'
});
//# sourceMappingURL=useAnimation.js.map