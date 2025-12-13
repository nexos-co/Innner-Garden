export enum Frequency {
    DAILY = "Daily",
    WEEKLY = "Weekly",
    MONTHLY = "Monthly"
};

export type Activity = {
    frequency: Frequency,
    hours?: number,
    times?: number,
}

// avatar-data.ts
export const AVATARS = [
    { id: "habit_checkmark", type: "emoji", label: "Check Mark (Completion)", url: "https://twemoji.maxcdn.com/v/latest/72x72/2705.png" }, // Completion
    { id: "habit_lightbulb", type: "emoji", label: "Light Bulb (Idea/Learning)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f4a1.png" }, // Learning, new ideas
    { id: "habit_chart_up", type: "emoji", label: "Chart Increasing (Progress)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f4ca.png" }, // Progress tracking
    { id: "habit_open_book", type: "emoji", label: "Open Book (Reading/Study)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f4d6.png" }, // Reading, studying
    { id: "habit_bullseye", type: "emoji", label: "Bullseye (Goal/Focus)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f3af.png" }, // Setting goals, focus
    { id: "habit_running", type: "emoji", label: "Person Running (Fitness)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f3c3.png" }, // Exercise, cardio
    { id: "habit_meditation", type: "emoji", label: "Person Meditating (Mindfulness)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f9d8.png" }, // Mindfulness, calm
    { id: "habit_apple", type: "emoji", label: "Red Apple (Healthy Eating)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f34f.png" }, // Healthy diet
    { id: "habit_water_drop", type: "emoji", label: "Water Droplet (Hydration)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f4a7.png" }, // Drinking water
    { id: "habit_alarm_clock", type: "emoji", label: "Alarm Clock (Routine/Timing)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f551.png" }, // Waking up, routines
    { id: "habit_seedling", type: "emoji", label: "Seedling (Growth/Nurture)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f331.png" }, // Personal growth, starting new
    { id: "habit_calendar", type: "emoji", label: "Spiral Calendar (Planning/Consistency)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f4c6.png" }, // Planning, consistency
    { id: "habit_rocket", type: "emoji", label: "Rocket (Launch/Motivation)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f680.png" }, // Kicking off new habits, motivation
    { id: "habit_journal", type: "emoji", label: "Memo (Journaling/Notes)", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f4dd.png" }, // Journaling, note-taking
    { id: "emoji_fire", type: "emoji", label: "Fire", url: "https://twemoji.maxcdn.com/v/latest/72x72/1f525.png" },
];

export const CURATED_TOGGLE_AVATAR_IDS = [
    "habit_checkmark",
    "habit_lightbulb",
    "habit_running",
    "habit_apple",
    "habit_calendar",
    "habit_rocket",
    "emoji_star",
    "emoji_fire",
    "emoji_cool",
    "habit_meditation",
    "habit_bullseye",
    "habit_journal",
    "emoji_fire",
];


export enum DaysOfWeek {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY",
}

export const DAY_INITIALS: Record<DaysOfWeek, string> = {
    [DaysOfWeek.MONDAY]: "M",
    [DaysOfWeek.TUESDAY]: "Tu",
    [DaysOfWeek.WEDNESDAY]: "W",
    [DaysOfWeek.THURSDAY]: "Th",
    [DaysOfWeek.FRIDAY]: "F",
    [DaysOfWeek.SATURDAY]: "Sa",
    [DaysOfWeek.SUNDAY]: "Su",
};

export const WORK_DAYS: DaysOfWeek[] = [
    DaysOfWeek.MONDAY,
    DaysOfWeek.TUESDAY,
    DaysOfWeek.WEDNESDAY,
    DaysOfWeek.THURSDAY,
    DaysOfWeek.FRIDAY,
];

