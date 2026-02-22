import type { Meta, StoryObj } from '@storybook/react-native';

import CustomButton from '../../components/atoms/button';
import { CenterDecorator } from '../decorators';

const meta = {
  title: 'Atoms/CustomButton',
  component: CustomButton,
  decorators: [CenterDecorator],
  args: {
    onPress: () => {
      console.log('Pressed');
    },
    isSubmitting: false,
  },
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Contained: Story = {
  args: {
    message: 'Login',
    mode: 'contained',
  },
};

export const Loading: Story = {
  args: {
    message: 'Loading...',
    mode: 'contained',
    isSubmitting: true,
  },
};

export const Outlined: Story = {
  args: {
    message: 'Cancel',
    mode: 'outlined',
  },
};

export const TextOnly: Story = {
  args: {
    message: 'Skip',
    mode: 'text',
  },
};
