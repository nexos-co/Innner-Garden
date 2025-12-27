import { faker } from "@faker-js/faker";
import { Book, Dumbbell } from "lucide-react";

export const mockUpdates = [
    {
        userName: faker.person.fullName(),
        userAvatar: faker.image.avatar(),
        goal: "Run 5km every day",
        icon: Dumbbell,
        goalId: "goal1",
        userId: "1",
        updates: [
            {
                date: "2024-06-01",
                content: "Completed my 5km run today! Feeling great and energized.",
                rating: 4,
                comments: [
                    {
                        id: 'c1',
                        userName: faker.person.fullName(),
                        text: faker.lorem.sentence(),
                        date: '2024-06-01'
                    },
                    {
                        id: 'c2',
                        userName: faker.person.fullName(),
                        text: faker.lorem.sentence(),
                        date: '2024-06-01'
                    }
                ]
            },
            {
                date: "2024-06-02",
                content: "Another successful 5km run. Loving the routine!",
                rating: 5,
                comments: [
                    {
                        id: 'c3',
                        userName: faker.person.fullName(),
                        text: faker.lorem.sentence(),
                        date: '2024-06-02'
                    }
                ]
            },
        ]
    },
    {
        userName: faker.person.fullName(),
        userAvatar: faker.image.avatar(),
        icon: Book,
        goal: "Read 20 pages daily",
        goalId: "goal2",
        userId: "1",
        updates: [
            {
                date: "2024-06-01",
                content: "Read 20 pages of 'Atomic Habits'. Great insights on building good habits!",
                rating: 3,
                comments: [
                    {
                        id: 'c4',
                        userName: faker.person.fullName(),
                        text: faker.lorem.sentence(),
                        date: '2024-06-01'
                    }
                ]
            },
            {
                date: "2024-06-02",
                content: "Finished another 20 pages. This book is a game-changer!",
                rating: 4,
                comments: [
                    {
                        id: 'c5',
                        userName: faker.person.fullName(),
                        text: faker.lorem.sentence(),
                        date: '2024-06-02'
                    },
                    {
                        id: 'c6',
                        userName: faker.person.fullName(),
                        text: faker.lorem.sentence(),
                        date: '2024-06-02'
                    }
                ]
            }
        ]
    },
]