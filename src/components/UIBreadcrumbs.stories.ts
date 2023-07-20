import type { Meta, StoryObj } from '@storybook/vue3';

import UIBreadcrumbs from './UIBreadcrumbs.vue';

const meta = {
  component: UIBreadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    textSize: { control: 'select', options: ['xs', 'sm','md','lg', 'xl'] },
    items: { control: 'object' },
  },
} as Meta;


export default meta;
type Story = StoryObj<typeof meta>;

export const Breadcrumbs: Story = {
  args: {
    items: [
      { label: 'Home', value: 'home' },
      { label: 'Library', value: 'library' },
      { label: 'Data', value: 'data' },
      { label: 'Users', value: 'users' },
    ]
  },
};

    