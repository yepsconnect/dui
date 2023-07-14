import type { Meta, StoryObj } from '@storybook/vue3';

import UILoading from './UILoading.vue';

const meta = {
  component: UILoading,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    type: { control: 'select', options: ['spinner', 'dots', 'ring', 'ball', 'bars', "infinity"] },
    color: { control: 'select', options: ['primary', 'secondary', "accent", 'neutral', 'info', 'success', 'warning', 'error'] },
  },
} satisfies Meta<typeof UILoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingSpinner: Story = {
  render: () => ({
    components: { UILoading },
    template: `
      <div class="flex items-center gap-1">
        <UILoading type="spinner" size="xs"/>
        <UILoading type="spinner" size="sm"/>
        <UILoading type="spinner" size="md"/>
        <UILoading type="spinner" size="lg"/>
      </div>
    `,
  }),
};

export const LoadingDots: Story = {
  render: () => ({
    components: { UILoading },
    template: `
      <div class="flex items-center gap-1">
        <UILoading type="dots" size="xs"/>
        <UILoading type="dots" size="sm"/>
        <UILoading type="dots" size="md"/>
        <UILoading type="dots" size="lg"/>
      </div>
    `,
  }),
};

export const LoadingRing: Story = {
  render: () => ({
    components: { UILoading },
    template: `
      <div class="flex items-center gap-1">
        <UILoading type="ring" size="xs"/>
        <UILoading type="ring" size="sm"/>
        <UILoading type="ring" size="md"/>
        <UILoading type="ring" size="lg"/>
      </div>
    `,
  }),
};

export const LoadingBall: Story = {
  render: () => ({
    components: { UILoading },
    template: `
      <div class="flex items-center gap-1">
        <UILoading type="ball" size="xs"/>
        <UILoading type="ball" size="sm"/>
        <UILoading type="ball" size="md"/>
        <UILoading type="ball" size="lg"/>
      </div>
    `,
  }),
};

export const LoadingBars: Story = {
  render: () => ({
    components: { UILoading },
    template: `
      <div class="flex items-center gap-1">
        <UILoading type="bars" size="xs"/>
        <UILoading type="bars" size="sm"/>
        <UILoading type="bars" size="md"/>
        <UILoading type="bars" size="lg"/>
      </div>
    `,
  }),
};

export const LoadingInfinity: Story = {
  render: () => ({
    components: { UILoading },
    template: `
      <div class="flex items-center gap-1">
        <UILoading type="infinity" size="xs"/>
        <UILoading type="infinity" size="sm"/>
        <UILoading type="infinity" size="md"/>
        <UILoading type="infinity" size="lg"/>
      </div>
    `,
  }),
};

export const LoadingColor: Story = {
  render: () => ({
    components: { UILoading },
    template: `
      <div class="flex items-center gap-1">
        <UILoading color="primary"/>
        <UILoading color="secondary"/>
        <UILoading color="accent"/>
        <UILoading color="neutral"/>
        <UILoading color="info"/>
        <UILoading color="success"/>
        <UILoading color="warning"/>
        <UILoading color="error"/>
      </div>
    `,
  }),
};
