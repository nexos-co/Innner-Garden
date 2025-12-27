import type { Goal as GoalType } from "@/data/mock-goals";
import { useState, type FunctionComponent } from "react";
import TextSeparator from '@/components/atoms/text-separator'
import Goal from "@/components/atoms/goal";
import { cn } from "@/lib/utils";

interface GoalsLayoutProps {
    goals: GoalType[];
    handleGoalClick: (id: string) => void;
}

const GoalsLayout: FunctionComponent<GoalsLayoutProps> = ({ goals, handleGoalClick }) => {
    const [order, setOrder] = useState('frequency');


    const FrequencyLayout = () => {
        const todayGoals = goals.filter(goal => goal.frequency === 'daily');
        const weeklyGoals = goals.filter(goal => goal.frequency === 'weekly');

        return (
            <div className="flex-1 space-y-5">
                <TextSeparator>
                    Daily
                </TextSeparator>
                <div className="flex flex-wrap gap-5">
                    {todayGoals.map((goal) => (
                        <div key={goal.id} onClick={() => handleGoalClick(goal.id)}>
                            <Goal goal={goal} />
                        </div>
                    ))}
                </div>
                <TextSeparator>
                    Weekly
                </TextSeparator>
                <div className="flex flex-wrap gap-5">
                    {weeklyGoals.map((goal) => (
                        <div key={goal.id} onClick={() => handleGoalClick(goal.id)}>
                            <Goal goal={goal} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }


    const DateLayout = () => {
        const sortedGoals = [...goals].sort(
            (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        );

        const groupedByDate = sortedGoals.reduce((acc, goal) => {
            const dateKey = new Date(goal.dueDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(goal);
            return acc;
        }, {} as Record<string, GoalType[]>);

        return (
            <div className="flex-1 space-y-5">
                {Object.entries(groupedByDate).map(([date, goalsInDate]) => (
                    <div key={date} className="space-y-4">
                        <TextSeparator>
                            {date}
                        </TextSeparator>
                        <div className="flex flex-wrap gap-5">
                            {goalsInDate.map((goal) => (
                                <div key={goal.id} onClick={() => handleGoalClick(goal.id)}>
                                    <Goal goal={goal} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }


    const CompletionLayout = () => {
        const sortedGoals = [...goals].sort(
            (a, b) => b.completion - a.completion
        );

        const groupedByCompletion = sortedGoals.reduce((acc, goal) => {
            let completionLevel: string;

            if (goal.completion >= 90) {
                completionLevel = '90% - 100%';
            } else if (goal.completion >= 80) {
                completionLevel = '80% - 89%';
            } else if (goal.completion >= 70) {
                completionLevel = '70% - 79%';
            } else if (goal.completion >= 60) {
                completionLevel = '60% - 69%';
            } else if (goal.completion >= 50) {
                completionLevel = '50% - 59%';
            } else {
                completionLevel = 'Below 50%';
            }

            if (!acc[completionLevel]) {
                acc[completionLevel] = [];
            }
            acc[completionLevel].push(goal);
            return acc;
        }, {} as Record<string, GoalType[]>);

        const order = ['90% - 100%', '80% - 89%', '70% - 79%', '60% - 69%', '50% - 59%', 'Below 50%'];

        return (
            <div className="flex-1 space-y-5">
                {order.map((completionLevel) =>
                    groupedByCompletion[completionLevel] && (
                        <div key={completionLevel} className="space-y-4">
                            <TextSeparator>
                                {completionLevel}
                            </TextSeparator>
                            <div className="flex flex-wrap gap-5">
                                {groupedByCompletion[completionLevel].map((goal) => (
                                    <div key={goal.id} onClick={() => handleGoalClick(goal.id)}>
                                        <Goal goal={goal} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }

    const renderLayout = () => {
        switch (order) {
            case 'frequency':
                return <FrequencyLayout />
            case 'date':
                return <DateLayout />
            case 'completion':
                return <CompletionLayout />
            default:
                return <FrequencyLayout />
        }
    }

    return (
        <div className="space-y-5">
            <div className="flex flex-col gap-2">
                <p className="text-xs">Order By</p>
                <div className="flex flex-row overflow-hidden w-fit">
                    {['frequency', 'date', 'completion'].map((type) => {
                        return <ul key={type} onClick={() => setOrder(type)} className={cn("capitalize transition-all duration-300 text-sm px-4 py-2 cursor-pointer", order === type ? 'bg-background-secondary' : '')}>
                            {type}
                        </ul>
                    })}
                </div>
            </div>

            {renderLayout()}
        </div>
    );
}

export default GoalsLayout;