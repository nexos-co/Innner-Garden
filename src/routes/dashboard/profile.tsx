import UserTooltip from '@/components/atoms/user-tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { faker } from '@faker-js/faker';
import { createFileRoute } from '@tanstack/react-router'
import { ChevronRight, Plus } from 'lucide-react';

export const Route = createFileRoute('/dashboard/profile')({
    component: RouteComponent,
})

function RouteComponent() {
    const user = { id: '1', name: faker.person.fullName(), avatarUrl: faker.image.avatar(), email: faker.internet.email() }
    const previewAcomplishments: {
        id: string,
        name: string,
        avatarUrl: string,
    }[] = [
            { id: '1', name: faker.word.verb(), avatarUrl: faker.image.avatarGitHub() },
            { id: '2', name: faker.word.verb(), avatarUrl: faker.image.avatarGitHub() },
            { id: '3', name: faker.word.verb(), avatarUrl: faker.image.avatarGitHub() },
        ];

    const previewFriends: {
        id: string,
        email: string,
        name: string,
        avatarUrl: string,
        commonProjects: number;
    }[] = [
            { id: '1', name: faker.person.fullName(), avatarUrl: faker.image.avatar(), commonProjects: parseInt((Math.random() * 100).toString()), email: faker.internet.email() },
            { id: '2', name: faker.person.fullName(), avatarUrl: faker.image.avatar(), commonProjects: parseInt((Math.random() * 100).toString()), email: faker.internet.email() },
            { id: '3', name: faker.person.fullName(), avatarUrl: faker.image.avatar(), commonProjects: parseInt((Math.random() * 100).toString()), email: faker.internet.email() },
        ];


    return (
        <div className="flex gap-3 p-4 ">
            <div className='flex flex-col items-center'>
                <Avatar className={cn(
                    'border size-40'
                )}>
                    <AvatarImage src={user.avatarUrl} alt={user.name}></AvatarImage>
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <h2 className='mt-2 font-semibold'>Acomplishments</h2>
                <Separator className='my-2' />
                <div className='flex items-center'>
                    {
                        previewAcomplishments.map((acc) => (
                            <Tooltip>
                                <TooltipTrigger>
                                    <Avatar className={cn(
                                        'border size-10 -ml-3'
                                    )}>
                                        <AvatarImage src={acc.avatarUrl} alt="@shadcn" />
                                        <AvatarFallback>{acc.name.slice(0, 2)}</AvatarFallback>
                                    </Avatar>
                                </TooltipTrigger>
                                <TooltipContent className='mt-1 bg-background-secondary text-primary' side="bottom" >
                                    {acc.name}
                                </TooltipContent>
                            </Tooltip>
                        ))
                    }
                    <Avatar className={cn(
                        'border size-10 -ml-3'
                    )}>
                        <AvatarFallback className='bg-background-secondary flex items-center '><Plus size={10} />5</AvatarFallback>
                    </Avatar>
                </div>
                <h2 className='mt-2 font-semibold'>Friends</h2>
                <Separator className='my-2' />
                <div className='flex items-center'>
                    {
                        previewFriends.map((friend) => (
                            <UserTooltip
                                email={friend.email}
                                name={friend.name}
                                avatarUrl={friend.avatarUrl}
                                commonProjects={friend.commonProjects}
                            >
                                <Avatar className={cn(
                                    'border size-10 -ml-3'
                                )}>
                                    <AvatarImage src={friend.avatarUrl} alt="@shadcn" />
                                    <AvatarFallback>{friend.name.slice(0, 2)}</AvatarFallback>
                                </Avatar>
                            </UserTooltip>
                        ))
                    }
                    <Avatar className={cn(
                        'border size-10 -ml-3'
                    )}>
                        <AvatarFallback className='bg-background-secondary felx items-center'><Plus size={10} />10</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className='p-3 space-y-2'>
                <div className=''>
                    <h2 className='text-xl font-semibold text-primary'>{user.name}</h2>
                    <p className='opacity-50'>{user.email}</p>
                </div>
                <div className='flex justify-around gap-6 items-center'>
                    <h3>⭐️<span className='font-medium opacity-70 '> 4.5</span></h3>
                    <h3 className=''>🔥<span className='opacity-70 text-sm font-medium'>5 days</span></h3>
                    <h3>🏆<span className='font-medium opacity-70 '>198</span></h3>
                </div>
                <div className='flex justify-between'>
                    <h3 className='opacity-70 font-semibold'>Lv3</h3>
                    <h3 className='font-light italic'>Casual gardener</h3>
                </div>

                
            </div>

        </div>
    )
}
