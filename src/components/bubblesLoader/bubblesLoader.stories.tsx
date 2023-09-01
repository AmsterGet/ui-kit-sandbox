import type { Meta, StoryObj } from '@storybook/react';

import { BubblesLoader } from './bubblesLoader';

const meta: Meta<typeof BubblesLoader> = {
  title: 'Bubbles Loader',
  component: BubblesLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BubblesLoader>;

export const Default: Story = {
  args: {},
};
