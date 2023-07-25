import type { Meta, StoryObj } from '@storybook/vue3';

import UIButton from './UIButton.vue';

const meta = {
  component: UIButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    color: { control: 'select', options: ['neutral' , 'primary' , 'secondary' , 'accent' , 'ghost' , 'link' , 'info' , 'success' , 'warning' , 'error'] },
    capitalize: { control: 'boolean' },
    outline: { control: 'boolean' },
    active: { control: 'boolean' },
    wide: { control: 'boolean' },
    glass: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    square: { control: 'boolean' },
    circle: { control: 'boolean' },
    block: { control: 'boolean' },
    noAnimation: { control: 'boolean' },
  },
} satisfies Meta<typeof UIButton>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    label: 'Button',
  },
};
    