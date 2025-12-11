import { faker } from "@faker-js/faker";

export type GoalFrequency = "daily" | "weekly";

export interface Goal {
  id: string;
  title: string;
  description: string;
  frequency: GoalFrequency;
  category: "health" | "productivity" | "learning" | "fitness" | "personal";
  completedToday: boolean;
  streak: number;
  createdAt: string;
  dueDate: string;
}

const categories: Goal["category"][] = [
  "health",
  "productivity",
  "learning",
  "fitness",
  "personal",
];

const dailyGoals = [
  "Drink 8 glasses of water",
  "Exercise for 30 minutes",
  "Read for 20 minutes",
  "Meditate",
  "Complete 3 tasks",
  "Journal your thoughts",
  "Get 8 hours of sleep",
  "Take vitamins",
];

const weeklyGoals = [
  "Go to the gym 4 times",
  "Complete a course module",
  "Write a blog post",
  "Review weekly goals",
  "Plan next week",
  "Call a friend",
  "Deep work session",
  "Meal prep for the week",
];

export const generateGoalsMock = (countDaily = 2, countWeekly = 5): Goal[] => {
  const now = Date.now();

  const daily = Array.from({ length: countDaily }).map((_, i) => ({
    id: `daily-${now}-${i}`,
    title: dailyGoals[i % dailyGoals.length],
    description: faker.lorem.sentence(),
    frequency: "daily" as const,
    category: categories[i % categories.length],
    completedToday: Math.random() > 0.5,
    streak: Math.floor(Math.random() * 30) + 1,
    createdAt: new Date(now - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    dueDate: new Date(now + 24 * 60 * 60 * 1000).toISOString(),
  }));

  const weekly = Array.from({ length: countWeekly }).map((_, i) => ({
    id: `weekly-${now}-${i}`,
    title: weeklyGoals[i % weeklyGoals.length],
    description: faker.lorem.sentence(),
    frequency: "weekly" as const,
    category: categories[(i + 2) % categories.length],
    completedToday: Math.random() > 0.6,
    streak: Math.floor(Math.random() * 12) + 1,
    createdAt: new Date(now - Math.random() * 60 * 24 * 60 * 60 * 1000).toISOString(),
    dueDate: new Date(now + 7 * 24 * 60 * 60 * 1000).toISOString(),
  }));

  return [...daily, ...weekly].sort(
    (a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
  );
};

export const goalsData = generateGoalsMock(3, 5);