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


