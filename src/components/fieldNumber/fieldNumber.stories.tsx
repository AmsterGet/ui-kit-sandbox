import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FieldNumber } from './fieldNumber';

const meta: Meta<typeof FieldNumber> = {
  title: 'Field Number',
  component: FieldNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FieldNumber>;

export const Default: Story = {
  args: {},
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | number>('0');
    const handleChange = (val: string | number) => {
      setValue(val);
    };
    return (
      <>
        <FieldNumber {...args} value={value} onChange={handleChange} />
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
