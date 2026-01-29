import { Meta, StoryObj } from '@storybook/react-native';
import Line from '../../components/atoms/line';
import { CenterDecorator } from '../decorators';

const meta = {
  title: 'Atoms/Line',
  component: Line,
  decorators: [CenterDecorator],
} satisfies Meta<typeof Line>;

export default meta;

type Story = StoryObj<typeof Line>;

export const Default: Story = {
  args: {},
};
