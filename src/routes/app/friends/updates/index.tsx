import SearchFriends from '@/components/composition/updates/search-friends'
import UpdateCard from '@/components/composition/updates/update-card'
import SplitScreen from '@/components/layouts/split-screen'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowDownUp, ArrowUp, ArrowUpDown, ListOrdered } from 'lucide-react'

export const Route = createFileRoute('/app/friends/updates/')({
  component: RouteComponent,
})

function RouteComponent() {

  const updates = [
    {
      id: 'xl2',
      user: {
        name: 'John Doe',
        avatarUrl: '',
      },
      goal: {
        name: 'Make Exercise',
        type: 'schedule',
      },
      milestone: {
        type: 'in-progress',
        title: 'I am on the gym right now',
        datetime: new Date(),
      }
    },
    {
      id: 'xl2',
      user: {
        name: 'John Doe',
        avatarUrl: '',
      },
      goal: {
        name: 'Make Exercise',
        type: 'schedule',
      },
      milestone: {
        type: 'in-progress',
        title: 'I am on the gym right now',
        datetime: new Date(),
      }
    },
    {
      id: 'xl2',
      user: {
        name: 'John Doe',
        avatarUrl: '',
      },
      goal: {
        name: 'Make Exercise',
        type: 'schedule',
      },
      milestone: {
        type: 'in-progress',
        title: 'I am on the gym right now',
        datetime: new Date(),
      }
    },
    {
      id: 'xl3',
      user: {
        name: 'John Doe',
        avatarUrl: '',
      },
      goal: {
        name: 'Make Exercise',
        type: 'schedule',
      },
      milestone: {
        type: 'in-progress',
        title: 'I am on the gym right now',
        datetime: new Date(),
      }
    },
    {}, {}, {}, {}, {}, {}
  ]


  return <SplitScreen>
    <div className="h-screen w-1/3">
      <div className='flex flex-col overflow-auto border-r h-full'>

        <div className="p-4 pb-10 sticky bg-background top-0 bg- z-10 border-b">
          <div className="flex items-center justify-between">
            <div className="text-xl">Latest Updates</div>
            <div className='flex gap-1 items-center'> <ArrowUpDown size={15}/> Asc </div>
          </div>

          <div className="w-full pl-4">
            <SearchFriends />
          </div>
        </div>

        {updates.map((update, key) =>
          <UpdateCard index={key} />
        )}
      </div>
    </div>
    <div className="w-2/3 h-screen"></div>
  </SplitScreen>
}
