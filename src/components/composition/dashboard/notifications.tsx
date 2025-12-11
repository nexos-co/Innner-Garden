import UserCard from "@/components/atoms/user-card";
import { faker } from "@faker-js/faker";
import { Mail, MessageSquareDot } from "lucide-react";
import type { FunctionComponent } from "react";

interface NotificationProps {

}

const Notification: FunctionComponent<NotificationProps> = () => {
    return (<div className="p-5 space-y-5">
        <div className="flex flex-col gap-5 border p-4 border-dashed rounded-lg">
            <div className="flex gap-3 items-center">
                <div className="relative">
                    <div className="w-[10px] h-[10px] rounded-full absolute top-0 right-0 bg-primary"></div>
                    <MessageSquareDot size={24} />
                </div>
                Messages
            </div>

            <div className="flex flex-row items-center justify-between">
                <UserCard size={6} avatarUrl={faker.image.avatar()} name="Alice Johnson">
                    <div className="line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur?</div>
                </UserCard>
                <div className="aspect-square min-w-5 flex items-center justify-center bg-primary-light rounded-full text-xs">2</div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <UserCard size={6} avatarUrl={faker.image.avatar()} name="Alice Johnson">
                    <div className="line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur?</div>
                </UserCard>
                <div className="aspect-square min-w-5 flex items-center justify-center bg-primary-light rounded-full text-xs">2</div>
            </div>
            
            <div className="text-xs text-right">4 more... </div>

        </div>

    </div>);
}

export default Notification;