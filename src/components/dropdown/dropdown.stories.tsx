import { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '../themeProvider';
import { Dropdown } from './dropdown';

// TODO: Create Storybook decorator - https://storybook.js.org/docs/react/writing-stories/decorators
const DarkWrapper = (props: { children: ReactNode }) => (
  <div
    style={{
      marginTop: '20px',
      backgroundColor: 'var(--rp-ui-kit-dark-bg)',
      padding: '10px',
    }}
  >
    <ThemeProvider theme="dark">{props.children}</ThemeProvider>
  </div>
);

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
      { value: 3, label: 'Three' },
      { value: 3, label: 'Three' },
      { value: 3, label: 'Three' },
      { value: 3, label: 'Three' },
      { value: 3, label: 'Three' },
    ],
    onChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    value: 2,
  },
  render: (args) => (
    <>
      <Dropdown {...args} />
      <DarkWrapper>
        <Dropdown {...args} />
      </DarkWrapper>
    </>
  ),
};
