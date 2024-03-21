import type { Meta, StoryObj } from '@storybook/react';
import { TestButton } from './TestButton';

const meta = {
  title: 'Example/Button',
  component:TestButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TestButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const 色がPrimaryの場合: Story = {
  args: {
    color:"primary",
    label:"Button",
  },
};

export const 色がErrorの場合: Story = {
  args: {
    color:"error",
    label: 'Button',
  },
};

export const labelの入力が多い場合: Story = {
  args: {
    color:"primary",
    label: 'ButtonButtonButtonButtonButtonButton',
  },
};

export const labelの入力が少ない場合: Story = {
  args: {
    color:"primary",
    label: 'B',
  },
};
