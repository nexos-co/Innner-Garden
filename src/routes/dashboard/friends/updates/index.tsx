import DashboardNotifications from '@/components/composition/dashboard/dashboard-notifications'
import SplitScreen from '@/components/layouts/split-screen'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/friends/updates/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <SplitScreen>
        <div className="w-1/3">
            <DashboardNotifications />

        </div>
        <div className="flex-1"></div>
    </SplitScreen>
}
