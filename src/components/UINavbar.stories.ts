import type { Meta, StoryObj } from '@storybook/vue3';

import UINavbar from './UINavbar.vue';
import UIButton from './UIButton.vue';

const meta = {
  component: UINavbar,
  tags: ['autodocs'],
} as Meta;


export default meta;
type Story = StoryObj<typeof meta>;

export const Navbar: Story = {
  render: () => ({
    components: { UINavbar, UIButton },
    template: `
      <UINavbar>
        <template #start>
          <UIButton label="DUI" color="ghost" />
        </template>
      </UINavbar>
    `,
  }),
};
    