import { Meta, StoryObj } from '@storybook/react-native';
import OttpHeader from '../../components/atoms/ottp-header';
import { CenterDecorator } from '../decorators';

const meta = {
  title: 'Atoms/OttpHeader',
  component: OttpHeader,
  decorators: [CenterDecorator],
} satisfies Meta<typeof OttpHeader>;

export default meta;

type Story = StoryObj<typeof OttpHeader>;

export const Default: Story = {
  args: {},
};
