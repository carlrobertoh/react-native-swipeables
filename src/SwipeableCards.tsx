import React from 'react';

import { Animated } from 'react-native';

import { ActionTag } from './ActionTag';
import { interpolate, useAnimation } from './useAnimation';

type ActionType = 'like' | 'dislike';

interface ItemDefinition<T> {
  item: T;
  render: (item: T) => React.ReactNode;
}

interface Props<T extends object> {
  data: ItemDefinition<T>[];
  onChange: (item: T, action: ActionType) => void;
  enableActionTags?: boolean;
}

export const SwipeableCards = <T extends object>({enableActionTags = true, ...props}: Props<T>) => {
  const data = props.data.map((item, i) => ({ ...item, index: i }));
  const {
    currentIndex,
    position,
    rotateAndTranslate,
    interpolateConfig,
    panHandlers,
  } = useAnimation({
    onSwipe: (selectedIndex, actionType) => {
      const itemDefinition = data.find(i => i.index === selectedIndex);
      if (itemDefinition) {
        props.onChange(itemDefinition.item, actionType);
      }
    },
  });

  return (
    <>
      {data
        .map(itemDefinition => {
          if (itemDefinition.index < currentIndex) {
            return null;
          }
          if (itemDefinition.index === currentIndex) {
            return (
              <Animated.View
                {...panHandlers}
                key={itemDefinition.index}
                style={[rotateAndTranslate]}>
                {enableActionTags && (
                  <>
                    <ActionTag
                      isLikeAction
                      opacity={interpolateConfig.likeOpacity}>
                      LIKE
                    </ActionTag>
                    <ActionTag opacity={interpolateConfig.nopeOpacity}>
                      NOPE
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
                opacity: interpolate([1, 0, 1], position),
                transform: [{ scale: interpolate([1, 0.8, 1], position) }],
              }}>
              {itemDefinition.render(itemDefinition.item)}
            </Animated.View>
          );
        })
        .reverse()}
    </>
  );
};
