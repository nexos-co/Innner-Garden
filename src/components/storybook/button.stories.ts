import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test';
import { Button } from '.';

const meta = {
  title: 'ui/Button',
  parameters: {
    layout: 'centered',
  },
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    variant: 'default',
    children: 'Default Button',
  },
}
export const Lite = {
  args:{
    variant: 'lite',
    children: 'Lite Button',
  }
}
export const Secondary = {
  args:{
    variant: 'secondary',
    children: 'Secondary Button',
  }
}
export const Ghost = {
  args:{
    variant: 'ghost',
    children: 'Ghost Button',
  }
}
export const Outline = {
  args:{
    variant: 'outline',
    children: 'Outline Button',
  }
}
export const Destructive = {
  args:{
    variant: 'destructive',
    children: 'Destructive Button',
  }
}