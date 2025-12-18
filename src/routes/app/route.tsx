import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-row'>
    <SidebarProvider>

      <main className='w-full relative '>
        <div className="">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  </div>
}
