import UserTooltip from '@/components/atoms/user-tooltip';
import SplitScreen from '@/components/layouts/split-screen';
import { Button } from '@/components/storybook';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    const plants: { //⭐️🏆❤️🌱🌵🌲🌳🌴🌿☘️🪴🎋🍄🍄‍🟫💐🌷🌻🪻🔥🏅🎁💰💎
        id: string,
        name: string,
        emoji: string
    }[] = [
            { id: '1', name: "simple", emoji: "🌱" },
            { id: '2', name: "cactus", emoji: "🌵" },
            { id: '3', name: "pine", emoji: "🌲" },
            { id: '4', name: "acre", emoji: "🌳" },
            { id: '5', name: "palm", emoji: "🌴" },
            { id: '6', name: "leaf", emoji: "🌿" },
            { id: '7', name: "clover", emoji: "☘️" },
            { id: '8', name: "orquidae", emoji: "🪴" },
            { id: '9', name: "fruits tree", emoji: "🎋" },
        ]

    return (
        <div className="p-4 ">
            <div className='p-3 flex flex-col items-center justify-center w-full bg-background-secondary'>
                <Avatar className={cn(
                    'border size-20'
                )}>
                    <AvatarImage src={user.avatarUrl} alt={user.name}></AvatarImage>
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <h2 className='text-xl font-semibold text-primary'>{user.name}</h2>
                <p className='opacity-50'>{user.email}</p>
                <Button className='flex justify-end'>See my garden </Button>
            </div>
            <SplitScreen >
                <Card className='w-2/3'>
                    <CardHeader className='mb-2'>
                        <CardTitle>Heatmap </CardTitle>
                        <CardDescription>See your activity here.</CardDescription>
                    </CardHeader>
                    <CardContent className='border-t py-3'>
                        <div className='bg-background-secondary border rounded-md h-[200px]'>
                            <h2 className=' flex justify-center'>Heatmap goes here</h2>
                        </div>
                        <Separator className='my-3 opacity-60' />
                        <div>
                            <h2 className='font-bold'>Unlocks</h2>
                            <div className='p-2 mt-2 border bg-white h-10 rounded-3xl'>

                            </div>
                            <p className='flex justify-center'>75% completed</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className='w-1/3'>
                    <CardHeader>
                        <CardTitle>Status</CardTitle>
                        <CardDescription>See your personal metrics here.</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </SplitScreen>
        </div>
    )
}
