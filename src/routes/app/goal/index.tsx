import TextSeparator from '@/components/atoms/text-separator'
import UsersList from '@/components/atoms/users-list'
import { ScrollArea } from '@/components/ui/scroll-area'
import { createFileRoute } from '@tanstack/react-router'
import { Images } from 'lucide-react'

export const Route = createFileRoute('/app/goal/')({
  component: RouteComponent,
})

const Update = () => {
  return <div className="flex-1 relative border border-app-border rounded-md bg-sidebar space-y-4">
    <div className="space-y-2 rounded-md p-4 min-h-[10rem] transition-all">
      <p className='text-sm '>{new Date().toLocaleDateString() + ':' + new Date().toLocaleTimeString()}</p>
      <h3 className='text-lg font-semibold'>Visiting The gym</h3>
      <p className='text-sm'>I am hitting back today, feeling a little sick but is ok, no problem at all.</p>

      <div className="flex px-3 mt-5">
        <UsersList />
        <div className="w-10 h-10 rounded-full items-center flex justify-center border border-app-border -ml-3 z-1 bg-sidebar font-semibold">+4</div>
      </div>
      <div className="flex gap-3 items-center border mt-4 w-fit border-black px-1 py-1 rounded-md"> <Images size={20} /> 4 Images</div>

    </div>
  </div>
}

function RouteComponent() {
  return <div className='absolute w-full inset-0 flex'>
    <div className="flex-1">
      Hello fixed
    </div>
    <ScrollArea className="w-1/3 h-full overflow-auto">
      <div className="space-y-4 px-4 py-10">
        <TextSeparator>Today</TextSeparator>
        <Update />
        <TextSeparator>Last Week</TextSeparator>
        <Update />
        <Update />
        <Update />
        <TextSeparator>Last Month</TextSeparator>
        <Update />
        <Update />
        <Update />
        <Update />

      </div>
    </ScrollArea>
  </div>
}
