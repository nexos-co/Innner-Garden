import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';
import { createFileRoute } from '@tanstack/react-router'
import { Fades } from '@/components/animate-ui/primitives/effects/fade';

type UpdateData = {
  id: string
  title: string
  goal: string
  type: string
  date: Date
}
const updatesData: UpdateData[] = [
  { id: '1', title: 'Feature Alpha Complete', goal: 'Launch 1.0', type: 'High', date: new Date() },
  { id: '2', title: 'Design Review Passed', goal: 'Design System', type: 'Medium', date: new Date() },
  { id: '3', title: 'Bug Fixes Deployed', goal: 'Maintenance', type: 'Low', date: new Date() },
  { id: '4', title: 'User Testing Started', goal: 'Testing', type: 'High', date: new Date() },
  { id: '5', title: 'Database Migration', goal: 'Infrastructure', type: 'High', date: new Date() },
];

// Helper function to render a single Card (keeps the mapping clean)
const renderUpdateCard = (update: UpdateData) => (
  <Card
    key={update.id}
    variant="secondary" // Use your custom variant
    className="mb-4" // Add some margin between items
  >
    <CardHeader>
      {/* Simplified UserCard for example */}
      <div className="text-sm">{update.date.toLocaleDateString()}</div>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="space-y-4 bg-sidebar p-2">
        <p className="text-lg">{update.title}</p>
        <p className="flex items-center gap-2 text-lg">
          <CalendarDays size={18} /> GOAL: {update.goal}
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <Badge> {update.type} </Badge>
      </div>
    </CardContent>
    <CardFooter className="flex-1 items-end">
      <div className="w-full">
        <Button className="text-sidebar w-full"> Review</Button>
      </div>
    </CardFooter>
  </Card>
);


export const Route = createFileRoute('/app/friends/')({
  component: RouteComponent,
})

// In RouteComponent
function RouteComponent() {
  const cardElements = updatesData.map(renderUpdateCard);

  return (
    <div className='flex w-full h-full overflow-auto mt-5 mx-4'>
      <div className='text-app-border'>
        <h3 className='text-6xl font-semibold'>About <span className='text-app-primary'>Common </span> Projects and <span className='text-app-primary'>Friends</span></h3>
        <p className='text-2xl mx-4'>Stay focus on your goals! Keep your productivity and enhance frindship</p>

        <Fades
          transition={{ type: 'spring', stiffness: 400, damping: 100 }}
          className=""
        >
          {...cardElements}
        </Fades>
      </div>
    </div>
  );
}

