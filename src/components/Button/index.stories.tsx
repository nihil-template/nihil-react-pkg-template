import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs', ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    color: 'red',
  },
};

export const Red: Story = {
  args: {
    children: 'Button',
    color: 'red',
  },
};

export const Blue: Story = {
  args: {
    children: 'Button',
    color: 'blue',
  },
};
