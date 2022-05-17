import { PropsWithChildren } from 'react';
import { Animated } from 'react-native';
import { Direction } from './types';
interface Props {
    opacity: Animated.AnimatedInterpolation;
    direction?: Direction;
}
export declare const ActionTag: ({ direction, ...props }: PropsWithChildren<Props>) => JSX.Element;
export {};
