import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
  title: 'Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Close: Story = {
  args: {
    icon: 'close',
  },
};

export const Dropdown: Story = {
  args: {
    icon: 'dropdown',
  },
};

export const Delete: Story = {
  args: {
    icon: 'delete',
  },
};
