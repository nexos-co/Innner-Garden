import UserCard from '@/components/atoms/user-card'
import SearchFriends from '@/components/composition/updates/search-friends'
import { Badge } from '@/components/storybook'
import { Separator } from '@/components/ui/separator'
import { faker } from '@faker-js/faker'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/friends/')({
  component: RouteComponent,
})

type PreviewFriends = {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
  commonProjects: number;
};

const firstFriend: PreviewFriends = {
  id: '1',
  name: faker.person.fullName(),
  avatarUrl: faker.image.avatar(),
  commonProjects: Math.floor(Math.random() * 100),
  email: faker.internet.email(),
};

const secondFriend: PreviewFriends = {
  id: '2',
  name: faker.person.fullName(),
  avatarUrl: faker.image.avatar(),
  commonProjects: Math.floor(Math.random() * 100),
  email: faker.internet.email(),
};

const thirdFriend: PreviewFriends = {
  id: '3',
  name: faker.person.fullName(),
  avatarUrl: faker.image.avatar(),
  commonProjects: Math.floor(Math.random() * 100),
  email: faker.internet.email(),
};

const fourthFriend: PreviewFriends = {
  id: '3',
  name: faker.person.fullName(),
  avatarUrl: faker.image.avatar(),
  commonProjects: Math.floor(Math.random() * 100),
  email: faker.internet.email(),
};

const friendList = [firstFriend, secondFriend, thirdFriend, fourthFriend]

function RouteComponent() {
  return <div className='flex w-full h-full overflow-auto mt-5 mx-4'>
    <div className='text-app-border'>
      <h3 className='text-6xl font-semibold'>About <span className='text-app-primary'>Common </span> Projects and <span className='text-app-primary'>Friends</span></h3>
      <p className='text-2xl mx-4'>Stay focus on your goals! Keep your productivity and enhance frindship</p>
      <div className='flex items-center justify-between'>
        <UserCard
          className="border-none bg-transparent my-5"
          name={firstFriend.name}
          avatarUrl={firstFriend.avatarUrl}
          additionalText={firstFriend.email}>
        </UserCard>
        <Badge variant='success'>{firstFriend.commonProjects}</Badge>
      </div>
      <Separator />
      <div className='flex gap-2 my-3 px-3 items-center w-full'>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <UserCard
          className="border-none bg-transparent my-5"
          name={secondFriend.name}
          avatarUrl={secondFriend.avatarUrl}
          additionalText={secondFriend.email}>
        </UserCard>
        <Badge variant='success'>{secondFriend.commonProjects}</Badge>
      </div>
      <Separator />
      <div className='flex gap-2 my-3 px-3 items-center w-full'>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <UserCard
          className="border-none bg-transparent my-5"
          name={thirdFriend.name}
          avatarUrl={thirdFriend.avatarUrl}
          additionalText={thirdFriend.email}>
        </UserCard>
        <Badge variant='success'>{thirdFriend.commonProjects}</Badge>
      </div>
      <Separator />
      <div className='flex gap-2 my-3 px-3 items-center w-full'>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <UserCard
          className="border-none bg-transparent my-5"
          name={fourthFriend.name}
          avatarUrl={fourthFriend.avatarUrl}
          additionalText={fourthFriend.email}>
        </UserCard>
        <Badge variant='success'>{fourthFriend.commonProjects}</Badge>
      </div>
      <Separator />
      <div className='flex gap-2 my-3 px-3 items-center w-full'>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
        <div className='bg-sidebar w-[150px] h-[100px]'>
        </div>
      </div>
    </div>
    <div className='w-1/3 px-4 mx-5'>
      <SearchFriends />
      <Separator orientation='horizontal' className='my-4' />
      {friendList.map((friend) => (
        <UserCard
        name={friend.name}
        avatarUrl={friend.avatarUrl}
        additionalText={friend.email}
        className='my-4 w-full'
        >
        </UserCard>
      ))}
      <h2 className='text-2xl text-app-border mt-10'>Add new <span className='text-app-primary'>Friends</span></h2>
      <Separator/>

    </div>


  </div>

}
