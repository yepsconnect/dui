import type { Meta, StoryObj } from '@storybook/vue3';

import UIAlert from './UIAlert.vue';

const meta = {
  component: UIAlert,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },

  },
} as Meta;


export default meta;
type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  args: {
    title: 'Alert',
    content: 'This is an alert',
    type: 'info',
  },
};

export const AlertWithAction: Story = {
  render: () => ({
    components: { UIAlert },
    template: `
        <UIAlert title="Alert" content="This is an alert" type="warning">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          </template>
          <template #action>
            <button class="btn btn-sm">OK</button>
          </template>
        </UIAlert>
        `,
  }),
};