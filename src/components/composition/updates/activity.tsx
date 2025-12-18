import CircularProgress from "@/components/atoms/circular-progress";
import UsersList from "@/components/atoms/users-list";
import { faker } from "@faker-js/faker";
import { Button } from '@/components/ui/button'
import type { FunctionComponent } from "react";
import { CheckCircle2, Star } from "lucide-react";

interface ActivityProps {

}

const Activity: FunctionComponent<ActivityProps> = () => {
    const now = Date.now();
    const goal = {
        id: `friend-${now}`,
        name: faker.person.fullName(),
        avatarUrl: faker.image.avatar(),
        title: `${faker.hacker.verb()} ${faker.hacker.noun()}`,
        description: `${faker.company.name()} · ${faker.lorem.sentence()}`,
        group: "friends",
        streak: 30,
        category: 'fitness',
        createdAt: new Date(now - (0 + 1) * 1000 * 60 * 60).toISOString(),
    }

    return (<div className="flex flex-col gap-5 relative h-full p-8 overflow-hidden">
        <div className="flex flex-row items-center justify-between">
            <div className="flex gap-6">
                <div className="h-18 w-18">
                    <CircularProgress />
                </div>
                <div className="flex flex-col">
                    <div className="flexgap-2">
                        <p className="hover:underline">{faker.person.fullName()}</p>
                        <h3 className='text-3xl capitalize'>
                            {goal.title}
                        </h3>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>🔥 {goal.streak} day streak</span>
                        <span className="capitalize">{goal.category}</span>
                    </div>


                </div>
            </div>

            <div className="flex flex-row items-center">
                <UsersList />
                <p className="ml-2">+4</p>
            </div>
        </div>

        <div className="space-y-3">
            <div className="flex py-10 flex-col gap-3 border border-dashed border-black/20 rounded-xl  min-h-70 p-4">
                <div className="flex flex-1 items-center  font-semibold  flex-col gap-1 text-3xl justify-center">
                    <CheckCircle2 size={70} color="var(--color-primary)" />
                    <p className="text-sm opacity-70">1 hour ago</p>
                    <span>Completed</span>
                    <div className="flex flex-row gap-2 items-center">
                        <Star size={60} strokeWidth={1} />
                        <Star size={60} strokeWidth={1} />
                        <Star size={60} strokeWidth={1} />
                        <Star size={60} strokeWidth={1} />
                        <Star size={60} strokeWidth={1} />
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <div className=""></div>
                <div className="flex flex-row gap-0.5 items-center">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <span className="mx-2">4.8</span>
                </div>
            </div>
        </div>
    </div>);
}

export default Activity;