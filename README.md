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
      item: { name: 'Ben' },
      render: ({ name }) => (
        <View style={styles.card}>
          <Text>{name}</Text>
        </View>
      ),
    },
    {
      item: { name: 'Holly' },
      render: ({ name }) => (
        <View style={styles.card}>
          <Text>{name}</Text>
        </View>
      ),
    },
  ]}
  onChange={(item, action) => {
    // handle callback
  }}
/>
```
