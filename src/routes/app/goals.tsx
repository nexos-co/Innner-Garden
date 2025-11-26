import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/goals')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/goals"!</div>
}
