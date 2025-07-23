// utils/groupNotifications.ts

import { NotificationItem } from "@/data/notifications";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const groupNotificationsByDate = (notifications: NotificationItem[]) => {
  const grouped: Record<string, NotificationItem[]> = {
    Today: [],
    Yesterday: [],
    "Older notifications": [],
  };

  notifications.forEach((notification) => {
    const date = dayjs(notification.date);
    if (date.isToday()) {
      grouped["Today"].push(notification);
    } else if (date.isYesterday()) {
      grouped["Yesterday"].push(notification);
    } else {
      grouped["Older notifications"].push(notification);
    }
  });

  return grouped;
};
