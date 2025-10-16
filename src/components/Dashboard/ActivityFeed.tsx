import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { AlarmClock } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
const activities = [
    {
        id: 1,
        user: {
            name: 'Noah Williams',
            avatar: '/zarnika/avatar/image1.webp',
        },
        action: 'Created a new project',
        target: 'Website redisign',
        time: '10 min ago',
        type: 'Creat',
    },
    {
        id: 2,
        user: {
            name: 'Alex Johnson',
            avatar: '/zarnika/avatar/image5.webp',
        },
        action: 'Updated user profile',
        target: 'Account Settings',
        time: '25 minutes ago',
        type: 'Update',
    },
    {
        id: 3,
        user: {
            name: 'Liam O’Connor',
            avatar: '/zarnika/avatar/image2.webp',
        },
        action: 'Completed task',
        target: 'Database Migration',
        time: '1 hour ago',
        type: 'Complete',
    },
    {
        id: 4,
        user: {
            name: 'Maria Schmidt',
            avatar: '/zarnika/avatar/image6.webp',
        },
        action: 'Uploaded file',
        target: 'Design assets.zip',
        time: '2 hours ago',
        type: 'Upload',
    },
];

const getTypeColor = (type: string) => {
    switch (type) {
        case 'Complete':
            return 'bg-emerald-200 hover:bg-emerald-300 text-emerald-900';
        case 'Update':
            return 'bg-amber-200 hover:bg-amber-300 text-amber-900';
        case 'Create':
            return 'bg-red-200 hover:bg-red-300 text-red-900';
        default:
            return 'bg-blue-200 hover:bg-blue-300 text-blue-900';
    }
};
const ActivityFeed = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 cursor-pointer">
                    <AlarmClock className="h-7 w-7" />
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex items-start gap-2 border rounded-lg hover:bg-accent/50 cursor-pointer justify-between"
                        >
                            <Avatar className="h-8 w-8 flex-shrink-0">
                                <AvatarImage src={activity.user.avatar} />
                                <AvatarFallback>
                                    {activity.user.name
                                        .split(' ')
                                        .map((n) => n[0])
                                        .join('')}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1 justify-between">
                                    <span className="text-sm font-medium">
                                        {activity.user.name}
                                    </span>
                                    <Badge
                                        className={`text-xs ${getTypeColor(activity.type)}`}
                                    >
                                        {activity.type}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Lorem ipsum, dolor sit amet consectetur.
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ActivityFeed;
