import { LeftSidebar } from '@/components/layouts/left-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-row'>
    <SidebarProvider>

      <LeftSidebar />
      <main className='w-full p-4 relative '>
        <SidebarTrigger />

        <div className="max-w-[960px] mx-auto">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  </div>
}
