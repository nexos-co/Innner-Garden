import type { FunctionComponent } from "react";
import UserCard from "@/components/atoms/user-card";
import TextSeparator from "@/components/atoms/text-separator";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Update {
    date: string;
    content: string;
}

interface UpdateItem {
    userName: string;
    userAvatar: string;
    goal: string;
    goalId: string;
    userId: string;
    updates: Update[];
}

interface UpdatesLayoutProps {
    updates: UpdateItem[];
    handleUpdateClick: (id: string) => void;
}

const UpdateCard: FunctionComponent<{ update: UpdateItem; onClick: () => void }> = ({ update, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer bg-card p-5 rounded-lg hover:shadow-lg transition-shadow duration-200 max-w-sm"
        >
            <UserCard name={update.userName} avatarUrl={update.userAvatar} />
            <h3 className="font-semibold text-lg text-slate-800 mt-3 mb-3">{update.goal}</h3>
            <div className="flex flex-row gap-2 items-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} strokeWidth={1} className={i < 4 ? "fill-black" : ""} />
                ))}
            </div>
            <p className="text-sm text-slate-600 line-clamp-2">{update.updates[0]?.content || "No updates"}</p>
        </div>
    );
};

const UpdatesLayout: FunctionComponent<UpdatesLayoutProps> = ({ updates, handleUpdateClick }) => {
    // Group updates by user
    const groupedByUser = updates.reduce(
        (acc, update) => {
            if (!acc[update.userId]) {
                acc[update.userId] = [];
            }
            acc[update.userId].push(update);
            return acc;
        },
        {} as Record<string, UpdateItem[]>
    );

    return (
        <div className="flex-1 space-y-8">
            {Object.entries(groupedByUser).map(([userId, userUpdates]) => (
                <div key={userId} className="space-y-4">
                    <TextSeparator>{userUpdates[0]?.userName}</TextSeparator>
                    <div className="flex flex-wrap gap-5">
                        {userUpdates.map((update) => (
                            <UpdateCard
                                key={update.goalId}
                                update={update}
                                onClick={() => handleUpdateClick(update.goalId)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UpdatesLayout;
