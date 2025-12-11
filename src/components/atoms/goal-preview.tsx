import type { Goal } from "@/data/mock-goals";
import { CheckCircle2, Circle } from "lucide-react";
import type { FunctionComponent } from "react";

type GoalPreviewProps = {
    goal: Goal;
}

const GoalPreview: FunctionComponent<GoalPreviewProps> = ({ goal }) => {
    return (<div
        className="flex columns-1 items-start gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
    >
        <button className="mt-1 flex shrink-0">
            {goal.completedToday ? (
                <CheckCircle2 size={24} className="text-success" />
            ) : (
                <Circle size={24} className="text-muted-foreground" />
            )}
        </button>
        <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
                <h3 className={`font-medium ${goal.completedToday ? 'line-through text-muted-foreground' : ''}`}>
                    {goal.title}
                </h3>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>🔥 {goal.streak} day streak</span>
                <span className="capitalize">{goal.category}</span>
            </div>
        </div>
    </div>);
}

export default GoalPreview;