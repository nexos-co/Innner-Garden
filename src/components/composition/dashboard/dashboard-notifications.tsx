import type { FunctionComponent } from "react";
import { useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import TextSeparator from "@/components/atoms/text-separator";
import UserCard from "@/components/atoms/user-card";
import { BellDot } from "lucide-react";

type Group = "pending" | "friends";

const generateMock = (countPending = 3, countFriends = 3) => {
    const now = Date.now();

    const friends = Array.from({ length: countFriends }).map((_, i) => ({
        id: `friend-${now}-${i}`,
        name: faker.person.fullName(),
        avatarUrl: faker.image.avatar(),
        title: `${faker.hacker.verb()} ${faker.hacker.noun()}`,
        description: `${faker.company.name()} · ${faker.lorem.sentence()}`,
        group: "friends",
        createdAt: new Date(now - (i + 1) * 1000 * 60 * 60).toISOString(),
    }));

    return [...friends];
};

const mock = generateMock();
type Notification = typeof mock[0];

function timeAgo(iso: string) {
    const diff = Date.now() - new Date(iso).getTime();
    const sec = Math.floor(diff / 1000);
    if (sec < 60) return `${sec}s`;
    const min = Math.floor(sec / 60);
    if (min < 60) return `${min}m`;
    const h = Math.floor(min / 60);
    if (h < 24) return `${h}h`;
    const d = Math.floor(h / 24);
    return `${d}d`;
}

const Item: FunctionComponent<{ notification: Notification }> = ({ notification }) => (
    <li className="p-3 rounded-md shadow-xs bg-card border">
        <div className="flex flex-row justify-between">
            <UserCard avatarUrl={notification.avatarUrl} name={notification.name}>
                {timeAgo(notification.createdAt)} ago
            </UserCard>

            <div className="bg-primary-light h-fit w-fit p-1 rounded-full   ">
                <BellDot size={17} />
            </div>

        </div>
        <div className="flex items-center justify-between">
            <div className="flex-1">
                <div className="font-medium capitalize">{notification.title}</div>
                {notification.description && <div className="text-xs line-clamp-2 mt-1">{notification.description}</div>}
            </div>
            <div className="text-xs text-muted ml-4">{timeAgo(notification.createdAt)}</div>
        </div>
    </li>
);

const DashboardNotifications: FunctionComponent = () => {
    const [items] = useState<Notification[]>(() => generateMock(4, 4));

    const friends = useMemo(() => items.filter((i) => i.group === "friends"), [items]);

    return (
        <div className="space-y-4 p-5">
            <TextSeparator>
                Friends Activity
            </TextSeparator>

            <section>

                <ul role="list" className="space-y-3">
                    {friends.map((notification: Notification) => (
                        <Item key={notification.id} notification={notification} />
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default DashboardNotifications;