import React from 'react';
declare type ActionType = 'like' | 'dislike';
interface ItemDefinition<T> {
    item: T;
    render: (item: T) => React.ReactNode;
}
interface Props<T extends object> {
    data: ItemDefinition<T>[];
    onChange: (item: T, action: ActionType) => void;
    enableActionTags?: boolean;
}
export declare const SwipeableCards: <T extends object>({ enableActionTags, ...props }: Props<T>) => JSX.Element;
export {};
