import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Card,
  cardVariants,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card"

import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays } from 'lucide-react';


const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
 args: {
    variant: "default",
  },
  render: (args) => (
    <Card {...args} className="w-[200px]">
      <CardContent>
        <CardHeader>
          <CardTitle className="text-base">Compact Success Report</CardTitle>
        </CardHeader>
        <p className="text-sm">Summary from success or achivement.</p>
       </CardContent> 
        <CardFooter className='flex-1 items-end'>
          <Button variant="secondary" size="sm">See More <ArrowRight/> </Button>
        </CardFooter>

    </Card>
  ),
}

export const PrimaryCard: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => (
    <Card {...args} className="w-[200px]">
      <CardContent>
        <CardHeader>
          <CardTitle className="text-base">Compact Success Report</CardTitle>
        </CardHeader>
        <p className="text-sm">Summary from success or achivement.</p>
       </CardContent> 
        <CardFooter className='flex-1 items-end'>
          <Button variant="secondary" size="sm">See More <ArrowRight/> </Button>
        </CardFooter>
      

    </Card>
  ),
}

export const SecondaryCard: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => (
    <Card {...args} className="w-[200px]">
      <CardContent>
        <CardHeader>
          <CardTitle className="text-base">Compact Success Report</CardTitle>
        </CardHeader>
        <p className="text-sm">Summary from success or achivement.</p>
       </CardContent> 
        <CardFooter className='flex-1 items-end'>
          <Button variant="secondary" size="sm">See More <ArrowRight/> </Button>
        </CardFooter>
      

    </Card>
  ),
}



