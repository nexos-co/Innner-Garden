import CircularProgress from '@/components/atoms/circular-progress'
import GoalPreview from '@/components/atoms/goal-preview'
import TextSeparator from '@/components/atoms/text-separator'
import Notification from '@/components/composition/dashboard/notifications'
import SplitScreen from '@/components/layouts/split-screen'
import { goalsData } from '@/data/mock-goals'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const todayGoals = goalsData.filter(goal => goal.frequency === 'daily');
  const weeklyGoals = goalsData.filter(goal => goal.frequency === 'weekly');

  return <SplitScreen className='h-full'>

    <div className="flex-1 p-5 space-y-5">

      <div className="w-full relative p-4 flex items-center justify-between bg-background-secondary rounded-lg border">
        <div className="flex flex-row w-full items-center gap-4">
          <div className="h-17 w-17">
            <CircularProgress />
          </div>
          <div className="">
            <p className='text-sm text-primary font-bold'>Today</p>
            <p className='font-bold text-gray-700 text-3xl'> Completed</p>
          </div>
        </div>
      </div>
      <TextSeparator>
        Today
      </TextSeparator>
      <div className="gap-2 grid grid-cols-2">
        {todayGoals.map((goal) => (
          <GoalPreview goal={goal} />
        ))}
      </div>
      <TextSeparator>
        This Week
      </TextSeparator>
      <div className="gap-2 grid grid-cols-2">
        {weeklyGoals.map((goal) => (
          <GoalPreview goal={goal} />
        ))}
      </div>
    </div>
    <div className='w-full max-w-70'>
      <Notification />
    </div>
  </SplitScreen>
}