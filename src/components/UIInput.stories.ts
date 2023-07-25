import type { Meta, StoryObj } from '@storybook/vue3';

import UIInput from './UIInput.vue';

const meta = {
  component: UIInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    bordered: { control: 'boolean' },
    ghost: { control: 'boolean' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'accent', 'info', 'success', 'warrning', 'error'] },
  },
} satisfies Meta<typeof UIInput>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {};
    