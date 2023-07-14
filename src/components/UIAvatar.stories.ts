import type { Meta, StoryObj } from '@storybook/vue3';

import UIAvatar from './UIAvatar.vue';

const meta = {
  component: UIAvatar,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    isOnline: { control: 'boolean' },
    online: { control: 'boolean' },
    mask: { control: 'select', options: ['none', 'squircle', 'hexagon', 'triangle'] },
    rounded: { control: 'select', options: ['none', 'sm','md','lg', 'xl', 'full'] },
    isRing: { control: 'boolean' },
    ringColor: { control: 'select', options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] },
    placeholder: { control: 'text' },
    placeholderSize: { control: 'select', options: ['xs', 'sm','md','lg', 'xl'] },
    size: { control: 'select', options: ['xs', 'sm','md','lg', 'xl', 'full'] },
  },
} satisfies Meta<typeof UIAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  // use props from component
  args: {
    src: 'https://avatars.githubusercontent.com/u/20606061?v=4',
    alt: 'avatar',
    isOnline: true,
    online: true,
    mask: 'squircle',
    rounded: 'full',
    isRing: true,
    ringColor: 'primary',
    size: 'md',
  }
};