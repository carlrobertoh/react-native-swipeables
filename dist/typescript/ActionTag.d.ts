import { PropsWithChildren } from 'react';
import { Animated } from 'react-native';
interface Props {
    opacity: Animated.AnimatedInterpolation;
    isLikeAction?: boolean;
}
export declare const ActionTag: ({ isLikeAction, ...props }: PropsWithChildren<Props>) => JSX.Element;
export {};
