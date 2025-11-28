import CircularProgress from '@/components/atoms/circular-progress';
import UsersList from '@/components/atoms/users-list';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '@/components/ui/select';
import { createFileRoute, Link } from '@tanstack/react-router'
import { ClockArrowDown, Search } from 'lucide-react';

export const Route = createFileRoute('/app/goals')({
  component: RouteComponent,
})

function RouteComponent() {
  const myGoals = Array.from({ length: 3 });

  return <div className="space-y-10">
    <div className="flex flex-row items-center justify-between">
      <h1 className='text-[2.5rem] font-semibold'>Current Goals</h1>
      <div className="flex gap-4 items-center">
        <div className="flex ml-2 space-x-2 items-center border border-app-border rounded-md bg-sidebar pr-2">
          <Input className='border-transparent rounded-r-none border-r' placeholder='Filter Goals....' />
          <Search size={20} />
        </div>

        <Select>
          <SelectTrigger className='bg-sidebar border-app-border'>
            Select Goal Type
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Goal Type:</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Scheduled">Scheduled</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

      </div>
    </div>

    <div className="flex flex-col gap-4">
      {myGoals.map((goal, key) => (
        <div className="flex gap-2 w-full">

          <div className="flex flex-col gap-3">
            <UsersList />
          </div>
          <div className="flex shadow w-full border border-app-border rounded-md overflow-hidden min-h-[40rem]" key={key}>
            <Card className="flex-1 p-4 bg-sidebar pt-10 rounded-none shadow-none">
              <CardHeader className="flex gap-4 flex-col">
                <h2 className='text-3xl font-bold text-gray-800'>Exercise from monday to friday</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum soluta porro, temporibus fugit expedita animi rerum ipsa voluptatem quia?</p>
              </CardHeader>
              <CardContent></CardContent>

              <CardFooter className="flex items-end justify-between gap-5 flex-1">
                <div className="flex items-center justify-between w-full border p-4 border-app-border rounded-md">
                  <div className="">
                    <div className="text-lg font-semibold">53% completed</div>
                    <div className="">Next Level: 41 entries</div>
                  </div>

                  <div className="w-25">
                    <CircularProgress />
                  </div>
                </div>
              </CardFooter>
            </Card>

            <div className="flex-1  border-l border-dashed border-app-border p-4 space-y-4">
              <h2 className='text-2xl font-bold flex gap-2 items-center mb-10'> <ClockArrowDown size={20} /> Timeline</h2>

              <div className="space-y-2 border bg-sidebar/50 rounded p-4 border-app-border hover:bg-sidebar/90 transition-all">
                <p className='text-xs'>{new Date().toLocaleDateString() + ' at ' + new Date().toLocaleTimeString()}</p>
                <h3 className='text-lg font-semibold'>Visiting The gym</h3>
                <p className='text-sm'>I am hitting back today, feeling a little sick but is ok, no problem at all.</p>
              </div>

              <div className="space-y-2 border bg-sidebar/50 rounded-md p-4 border-app-border hover:bg-sidebar/90 transition-all">
                <p className='text-xs'>{new Date().toLocaleDateString() + ' at ' + new Date().toLocaleTimeString()}</p>
                <h3 className='text-lg font-semibold'>Visiting The gym</h3>
                <p className='text-sm'>I am hitting back today, feeling a little sick but is ok, no problem at all.</p>
              </div>

              <div className="space-y-2 border bg-sidebar/50 rounded-md p-4 border-app-border hover:bg-sidebar/90 transition-all">
                <p className='text-xs'>{new Date().toLocaleDateString() + ' at ' + new Date().toLocaleTimeString()}</p>
                <h3 className='text-lg font-semibold'>Visiting The gym</h3>
                <p className='text-sm'>I am hitting back today, feeling a little sick but is ok, no problem at all.</p>
              </div>

              <Link to={'/app/goal'}>
                <Button variant="ghost" className="text-lg font-semibold hover:bg-sidebar/40">+51 more</Button>
              </Link>
            </div>

          </div>

        </div>
      ))}
    </div>
  </div>
}
