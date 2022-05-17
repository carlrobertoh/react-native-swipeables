import React from 'react';

import { Animated } from 'react-native';

import { ActionTag } from './ActionTag';
import { Direction } from './types';
import { interpolateX, useAnimation } from './useAnimation';

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

export const SwipeableCards = <T extends object>({
  actionTagDetails = { enableTags: true },
  ...props
}: Props<T>) => {
  const data = props.data.map((item, i) => ({ ...item, index: i }));
  const { currentIndex, position, rotateAndTranslate, interpolateConfig, panHandlers } =
    useAnimation({
      onSwipe: (selectedIndex, direction) => {
        const itemDefinition = data.find((i) => i.index === selectedIndex);
        if (itemDefinition) {
          props.onChange(itemDefinition.item, direction);
        }
      },
    });

  return (
    <>
      {data
        .map((itemDefinition) => {
          if (itemDefinition.index < currentIndex) {
            return null;
          }
          if (itemDefinition.index === currentIndex) {
            return (
              <Animated.View
                {...panHandlers}
                key={itemDefinition.index}
                style={[rotateAndTranslate]}>
                {actionTagDetails?.enableTags && (
                  <>
                    <ActionTag direction="left" opacity={interpolateConfig.nopeOpacity}>
                      {actionTagDetails.labels?.left || 'NOPE'}
                    </ActionTag>
                    <ActionTag direction="right" opacity={interpolateConfig.likeOpacity}>
                      {actionTagDetails.labels?.right || 'LIKE'}
                    </ActionTag>
                    <ActionTag direction="top" opacity={interpolateConfig.superLikeOpacity}>
                      {actionTagDetails.labels?.top || 'SUPER LIKE'}
                    </ActionTag>
                  </>
                )}
                {itemDefinition.render(itemDefinition.item)}
              </Animated.View>
            );
          }

          return (
            <Animated.View
              key={itemDefinition.index}
              style={{
                opacity: interpolateX([1, 0, 1], position),
                transform: [{ scale: interpolateX([1, 0.8, 1], position) }],
              }}>
              {itemDefinition.render(itemDefinition.item)}
            </Animated.View>
          );
        })
        .reverse()}
    </>
  );
};
