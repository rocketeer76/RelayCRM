export type Activity = { dueAt: Date | null; completedAt: Date | null };
export function isOverdue(activity: Activity, now = new Date()) {
  return (
    activity.completedAt === null &&
    activity.dueAt !== null &&
    activity.dueAt.getTime() < now.getTime()
  );
}
export function completionRate(activities: Activity[]) {
  if (activities.length === 0) return 0;
  return (
    activities.filter((activity) => activity.completedAt !== null).length /
    activities.length
  );
}
