<img src="example.gif" alt="animated" />

# react-native-swipeables

[![NPM](https://img.shields.io/npm/v/react-native-swipeables.svg)](https://www.npmjs.com/package/react-native-swipeables) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-native-swipeables
```

## Usage
```typescript
import { SwipeableCards } from "react-native-swipeables";
```

```typescript jsx
<SwipeableCards
    data={[
      {
        id: 1,
        imgSrc: require('./assets/1.jpg'),
      },
      {
        id: 2,
        imgSrc: require('./assets/2.jpg'),
      },
    ].map(item => ({
      item,
      render: (details: { id: number; imgSrc: ImageSourcePropType }) => (
          <View style={styles.card}>
            <Image source={details.imgSrc} style={styles.image} />
          </View>
      ),
    }))}
    onChange={(item, direction) => {
      // handle callback
    }}
/>
```

```typescript
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  card: {
    position: 'absolute',
    height: screenHeight - 120,
    width: screenWidth - 16,
    left: 8,
    top: 8,
  },
});
```

