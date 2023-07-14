import type { Meta, StoryObj } from '@storybook/vue3';

import UIBadge from './UIBadge.vue';

const meta = {
  component: UIBadge,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'select', options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['xs', 'sm','md','lg'] },
    outline: { control: 'boolean' },
  },
} as Meta;


export default meta;
type Story = StoryObj<typeof meta>;

export const Badge: Story = {
  args: {
    label: 'Badge',
    color: 'primary',
    size: 'md',
    outline: false,
  },
};

    