import type { Meta, StoryObj } from '@storybook/vue3';

import UIMenu from './UIMenu.vue';

const meta = {
  component: UIMenu,
  tags: ['autodocs'],
  argTypes: {
    list: { control: 'array' },
    isDrawerMenu: { control: 'boolean' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },

  },
} as Meta;


export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  render: () => ({
    components: { UIMenu },
    template: `
      <UIMenu :list="['one', 'two', 'three']" class="bg-base-200"/>
    `,
  }),
};