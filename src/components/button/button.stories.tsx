import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { ThemeProvider } from '../themeProvider';

// TODO: add the controls https://storybook.js.org/docs/react/essentials/controls
// TODO: add docs
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Primary</Button>,
};

export const PrimaryDisabled: Story = {
  render: () => <Button disabled>Primary disabled</Button>,
};

export const PrimaryDarkTheme: Story = {
  render: () => (
    <ThemeProvider theme="dark">
      <Button>Primary for dark theme</Button>
    </ThemeProvider>
  ),
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost</Button>,
};

export const Danger: Story = {
  render: () => <Button variant="danger">Danget</Button>,
};

export const Text: Story = {
  render: () => <Button variant="text">Text</Button>,
};


