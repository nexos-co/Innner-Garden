export enum Frequency {
    DAILY = "Daily",
    WEEKLY = "Weekly",
    MONTHLY = "Monthly"
};

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

