import CreateNewGoal from '@/components/composition/create-goal/create-goal'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/goals/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <CreateNewGoal/>
  )
}
