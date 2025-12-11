import UpdateCard from '@/components/composition/updates/update-card'
import SearchFriends from '@/components/composition/updates/search-friends'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/friends/')({
  component: RouteComponent,
})

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
  }
]

function RouteComponent() {
  return <div className='flex flex-col space-y-10 mt-3'>
    <div className="flex gap-2 items-center justify-between">
      <div className="text-3xl">
        Latest Updates
      </div>
      <div className="space-y-2 flex items-center">
          <SearchFriends />
      </div>
    </div>

    {updates.map((update, key) =>
      <UpdateCard index={key} />
    )}
  </div>

}
