import DashboardNotifications from '@/components/composition/dashboard/dashboard-notifications'
import SplitScreen from '@/components/layouts/split-screen'
import { createFileRoute } from '@tanstack/react-router'
import Activity from '@/components/composition/updates/activity';

export const Route = createFileRoute('/dashboard/friends/updates/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <SplitScreen className='h-[93vh]'>
        <div className="w-1/3 max-w-80">
            <DashboardNotifications />

        </div>
        <div className="flex-1 p-4">
            <div className="flex-1 h-full rounded-lg w-full">
                <Activity /> 
            </div>
        </div>
    </SplitScreen>
}
