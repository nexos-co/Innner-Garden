// src/components/ui/Switch.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test';
import { Switch } from "." // Import switchVariants

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    checked: false,
    variant: "default",
  },
}

export const Checked = {
  args: {
    checked: true,
    variant: "default",
  },
}

export const AppPrimaryChecked = {
  args: {
    checked: true,
    variant: "appPrimary",
  },
}

export const AppPrimaryUnchecked = {
  args: {
    checked: false,
    variant: "appPrimary",
  },
}

export const SuccessVariant = {
  args: {
    checked: true,
    variant: "success",
  },
}

export const SuccessVariantUnchecked = {
  args: {
    checked: false,
    variant: "success",
  },
}

export const Destructive = {
  args: {
    checked: true,
    variant: "destructive",
  },
}

/*export const CustomClassName = {
  args: {
    checked: true,
    className: "border-red-500",
    variant: "default",
  },
}*/
