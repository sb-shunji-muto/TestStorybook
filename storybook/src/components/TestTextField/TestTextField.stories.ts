import type { Meta, StoryObj } from '@storybook/react';
import { TestTextField } from './TestTextField';

const meta = {
    title: 'Example/TextField',
    component:TestTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TestTextField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const 色がPrimaryの場合: Story = {
    args: {
        color:"primary",
        label:"height",
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
