import React from 'react';
import { Direction } from './types';
interface ItemDefinition<T> {
    item: T;
    render: (item: T) => React.ReactNode;
}
interface ActionTagDetails {
    enableTags: boolean;
    labels: {
        left: string;
        right: string;
        top: string;
    };
}
interface Props<T extends object> {
    data: ItemDefinition<T>[];
    onChange: (item: T, direction: Direction) => void;
    actionTagDetails?: Partial<ActionTagDetails>;
}
export declare const SwipeableCards: <T extends object>({ actionTagDetails, ...props }: Props<T>) => JSX.Element;
export {};
