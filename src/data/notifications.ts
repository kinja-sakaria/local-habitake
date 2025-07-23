export interface NotificationItem {
    name: string;
    message: string;
    action?: string;
    time: string;
    avatar?: string;
    thumbnail?: string;
    icon?: string;
    date: string;
}

export const allNotifications: NotificationItem[] = [
    {
        name: "Velma Cole",
        message: "Just messaged you. Check the message in",
        action: "message",
        time: "10 mins ago",
        avatar: "/assets/images/avatar.jpg",
        date: "2025-07-14T11:50:00Z",
    },
    {
        name: "Emmett Perry",
        message: "Just messaged you. Check the message in",
        action: "message",
        time: "16 mins ago",
        avatar: "/assets/images/avatar2.jpg",
        date: "2025-07-11T11:40:00Z",
    },
    {
        name: "Exclusive Offers Inside",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        action: "message",
        time: "16 mins ago",
        avatar: "/assets/images/avatar2.jpg",
        date: "2025-07-11T11:40:00Z",
    },
    {
        name: "Walter Lindsey",
        message: "is added a new property near by your location.",
        time: "2 hours ago",
        avatar: "/assets/images/avatar2.jpg",
        thumbnail: "/assets/images/noti-img.jpg",
        date: "2025-07-10T09:15:00Z",
    },
    {
        name: "Geraldo",
        message: "Geraldo is added a new property near by your location.",
        time: "7 days ago",
        avatar: "/assets/images/avatar2.jpg",
        thumbnail: "/assets/images/noti-img.jpg",
        date: "2025-07-04T09:15:00Z",
    },
    {
        name: "",
        message: "Walter Lindsey is added a new property near by your location.",
        time: "7 days ago",
        avatar: "/assets/images/avatar2.jpg",
        thumbnail: "/assets/images/noti-img.jpg",
        date: "2025-07-04T09:15:00Z",
    },
    {
        name: "Velma Cole",
        message: "Just messaged you. Check the message in.",
        time: "7 days ago",
        avatar: "/assets/images/avatar2.jpg",
        date: "2025-07-04T09:15:00Z",
    },
    {
        name: "Geraldo",
        message: "Geraldo is added a new property near by your location.",
        time: "7 days ago",
        avatar: "/assets/images/avatar2.jpg",
        thumbnail: "/assets/images/noti-img.jpg",
        date: "2025-07-04T09:15:00Z",
    },
];
