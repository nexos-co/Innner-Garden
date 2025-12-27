import { useMemo, useState } from 'react'
import SplitScreen from '@/components/layouts/split-screen'
import { createFileRoute } from '@tanstack/react-router'
import UserCard from '@/components/atoms/user-card'
import SelectedUserDisplay from '@/components/composition/updates/selected-user'
import FadeContainer from '@/components/layouts/fade-container';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/dashboard/friends/updates/')({
    component: RouteComponent,
})

function RouteComponent() {
    const [query, setQuery] = useState('')

    const users = [
        { id: 1, name: 'Ana López', role: 'Product Designer', avatarUrl: 'https://i.pravatar.cc/40?img=1' },
        { id: 2, name: 'Carlos Pérez', role: 'Frontend Dev', avatarUrl: 'https://i.pravatar.cc/40?img=2' },
        { id: 3, name: 'María Gómez', role: 'PM', avatarUrl: 'https://i.pravatar.cc/40?img=3' },
        { id: 4, name: 'Luis Martínez', role: 'Backend Dev', avatarUrl: 'https://i.pravatar.cc/40?img=4' },
    ]

    const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(users[0])

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return users
        return users.filter(u => u.name.toLowerCase().includes(q) || u.role.toLowerCase().includes(q))
    }, [query])

    return <FadeContainer>
        <SplitScreen className='h-[93vh]'>
            <div className='border-l flex-1 border-black/15 p-4'>
                <SelectedUserDisplay user={selectedUser} />
            </div>

            <div className='w-full max-w-90 border-black/15 border-l p-4 flex flex-col'>
                <div className='mb-4 flex items-center rounded-md pl-5 overflow-hidden py-0.5 gap-0 border bg-background-secondary'>
                    <Search />
                    <Input
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder='Search users...'
                        className=' border-none  bg-transparent rounded-none shadow-none'
                    />
                </div>  

                <div className='flex flex-col gap-3 overflow-auto'>
                    {filtered.map(u => {
                        const isSelected = selectedUser?.id === u.id
                        return (
                            <div
                                key={u.id}
                                onClick={() => setSelectedUser(u)}
                                className={`w-full rounded-md ${isSelected ? 'bg-muted/20' : ''} p-1 cursor-pointer`}
                                role='button'
                                tabIndex={0}
                            >
                                <div className={cn('flex items-center justify-between px-2 py-0.5 transition-all duration-500 hover:bg-secondary/20', isSelected ? 'bg-background-secondary' : '')}>
                                    <UserCard
                                        name={u.name}
                                        avatarUrl={u.avatarUrl}
                                        additionalText={"Updates on " + Math.floor(Math.random() * 10) + " projects" }
                                        className='w-full'
                                    />
                                    {isSelected && (
                                        <span className='ml-3 text-xs text-muted-foreground font-bold'>Selected</span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </SplitScreen>
    </FadeContainer>
}
