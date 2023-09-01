import type { Meta, StoryObj } from '@storybook/react';

import { BubblesPreloader } from './bubblesPreloader';

const meta: Meta<typeof BubblesPreloader> = {
  title: 'Bubbles Preloader',
  component: BubblesPreloader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BubblesPreloader>;

export const Default: Story = {
  args: {},
};
