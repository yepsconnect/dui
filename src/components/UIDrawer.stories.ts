import type { Meta, StoryObj } from '@storybook/vue3';

import UIDrawer from './UIDrawer.vue';

const meta = {
  component: UIDrawer,
  tags: ['autodocs'],
} as Meta;


export default meta;
type Story = StoryObj<typeof meta>;

export const Drawer: Story = {
  render: () => ({
    components: { UIDrawer },
    refs: {
      modelValue: true
    },
    template: `
      <UIDrawer>
        <template #content>
          <button class="btn btn-primary">Open Drawer</button>
        </template>
        <template #menu>
          <ul class="menu">
            <li>
              <a href="#">Menu Item 1</a>
            </li>
          </ul>
        </template>
      </UIDrawer>
    `,
  }),
};