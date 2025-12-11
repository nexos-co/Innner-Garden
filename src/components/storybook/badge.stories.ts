import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test';
import { Badge } from '.';

const meta = {
  title: 'ui/Badge',
  parameters: {
    layout: 'centered',
  },
  component: Badge,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>

export default meta;
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    variant: 'default',
    children: 'Default Badge',
  },
}

export const Secondary = {
  args:{
    variant: 'secondary',
    children: 'Secondary Badge',
  }
}

export const Destructive = {
  args:{
    variant: 'destructive',
    children: 'Destructive Badge',
  }
}

export const Success = {
  args:{
    variant: 'success',
    children: 'Success Badge',
  }
}
export const Outline = {
   args:{
    variant: 'outline',
    children: 'Outline Badge',
  } 
}
