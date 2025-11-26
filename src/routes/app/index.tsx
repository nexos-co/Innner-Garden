import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/app/')({
  component: RouteComponent,
})

function RouteComponent() {


  return <div className='flex w-full overflow-hidden justify-between'>
    <div className="flex-1">
      <h1 className='text-[4rem] font-bold text-left'> Inner <span className='text-app-primary'> Garden</span></h1>
    </div>

  </div>
}
