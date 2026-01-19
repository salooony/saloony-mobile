import { Meta, StoryObj } from '@storybook/react-native';
import OtpFooter from '../../components/atoms/OtpFooter';
import { CenterDecorator } from '../decorators';

const meta = {
  title: 'Atoms/OtpFooter',
  component: OtpFooter,
  decorators: [CenterDecorator],
} satisfies Meta<typeof OtpFooter>;

export default meta;

type Story = StoryObj<typeof OtpFooter>;

export const Default: Story = {
  args: {},
};
