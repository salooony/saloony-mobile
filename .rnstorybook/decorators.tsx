import type { Decorator } from '@storybook/react-native';
import { View } from 'react-native';

export const CenterDecorator: Decorator = (Story) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
    <Story />
  </View>
);

export const PaddedDecorator: Decorator = (Story) => (
  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <Story />
  </View>
);
