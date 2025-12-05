import CreateNewGoal from '@/components/composition/create-goal/create-goal'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/goal/new')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div className=''>
        <CreateNewGoal/>
    </div>
}
