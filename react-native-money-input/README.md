# React Native Currency Input

A simple and reusable currency/money input component for React Native.

## Installation

```sh
npm install @theafolayan/react-native-currency-input
```

## Usage

```jsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MoneyInput from '@theafolayan/react-native-currency-input';

const MyComponent = () => {
  const [value, setValue] = useState<number | null>(0);

  return (
    <View>
      <Text>Current Value: {value}</Text>
      <MoneyInput
        value={value}
        onValueChange={setValue}
        currency="USD"
        locale="en-US"
      />
    </View>
  );
};

export default MyComponent;
```

## Props

| Prop          | Type                       | Default   | Description                                         |
| ------------- | -------------------------- | --------- | --------------------------------------------------- |
| `value`       | `number` or `null`         | `null`    | The current value of the input.                     |
| `onValueChange` | `(val: number | null) => void` | -         | Callback that is called when the value changes.     |
| `currency`    | `string`                   | `'NGN'`   | The currency to display.                            |
| `locale`      | `string`                   | `'en-NG'` | The locale to use for formatting the currency.      |
| `...props`    | `TextInputProps`           | -         | Any other props will be passed to the `TextInput` component. |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
