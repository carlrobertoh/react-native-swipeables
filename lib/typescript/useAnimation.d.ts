import { Animated } from 'react-native';
declare type Direction = 'left' | 'right';
export declare const useAnimation: (props: {
    onSwipe: (selectedIndex: number, direction: Direction) => void;
}) => {
    currentIndex: number;
    position: Animated.ValueXY;
    rotateAndTranslate: {
        transform: ({
            translateX: Animated.Value;
        } | {
            translateY: Animated.Value;
        } | {
            rotate: Animated.AnimatedInterpolation;
        })[];
    };
    interpolateConfig: {
        rotate: Animated.AnimatedInterpolation;
        likeOpacity: Animated.AnimatedInterpolation;
        nopeOpacity: Animated.AnimatedInterpolation;
        nextCardOpacity: Animated.AnimatedInterpolation;
        nextCardScale: Animated.AnimatedInterpolation;
    };
    panHandlers: import("react-native").GestureResponderHandlers;
};
export declare const interpolate: (outputRange: number[] | string[], position: Animated.ValueXY) => Animated.AnimatedInterpolation;
export {};
