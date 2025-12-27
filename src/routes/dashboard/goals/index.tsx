import GoalsLayout from '@/components/composition/goals/goals-layout'
import FadeContainer from '@/components/layouts/fade-container'
import SplitScreen from '@/components/layouts/split-screen'
import { goalsData } from '@/data/mock-goals'
import { cn } from '@/lib/utils'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/dashboard/goals/')({
  component: RouteComponent,
})

function RouteComponent() {

  const [showSidebar, setShowSidebar] = useState(false);

  const handleGoalClick = (id: string) => {
    setShowSidebar(true);
  }

return <FadeContainer>
  <SplitScreen className='h-full overflow-x-hidden'>
    <div className="p-5">
      <GoalsLayout goals={goalsData} handleGoalClick={handleGoalClick} />
    </div>

    <div className={cn('w-full max-w-90 transition-all duration-500 ', showSidebar ? 'translate-x-0' : ' translate-x-full w-0')}>
      <div className="w-full h-full bg-background border-l border-black/10 shadow">
        <ChevronRight onClick={() => setShowSidebar(false)} />
      </div>
    </div>
  </SplitScreen>
</FadeContainer>
}