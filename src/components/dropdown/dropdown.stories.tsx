import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 3, label: 'Three' },
    ],
    onChange: () => {},
    value: 2,
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
};
