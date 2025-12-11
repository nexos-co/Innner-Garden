import Header from '@/components/layouts/header'
import { Sidebar } from '@/components/layouts/sidebar'
import SplitScreen from '@/components/layouts/split-screen'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='w-full '>
    <Header />

    <SplitScreen className='h-[93vh]'>
      <Sidebar />

      <div className="h-[93vh] flex-1  overflow-y-auto">
        <Outlet />
      </div>
    </SplitScreen>
  </div>
}
