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

```
<SwipeableCards
  data={[
    {
      id: '1',
      name: 'Ben',
    },
    {
      id: '2',
      name: 'Joshi',
    },
  ].map(item => ({
    item,
    render: ({ name, id }) => (
      <Text>
        {id}, {name}
      </Text>
    ),
  }))}
  onChange={(item, action) => {
    // handle event
  }}
/>
```
