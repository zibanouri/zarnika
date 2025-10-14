import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { AlarmClock } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
const activities = [
    {
        id:1,
        user:{
            name:"Noah Williams",
            avatar:"/zarnika/avatar/image1.webp",
        },
        action:"Created a new project",
        target:"Website redisign",
        time:"10 min ago",
        type:"Creat",
    },
    {
        id:2,
        user:{
            name:'Alex Johnson',
            avatar:"/zarnika/avatar/image5.webp",
        },
        action:'Updated user profile',
        target:'Account Settings',
        time:'25 minutes ago',
        type:'Update',
    },
    {
        id:3,
        user:{
            name:"Liam O’Connor",
            avatar:"/zarnika/avatar/image2.webp",
        },
       action: 'Completed task',
        target: 'Database Migration',
        time: '1 hour ago',
        type: 'Complete',
    },
    {
        id:4,
        user:{
            name:"Maria Schmidt",
            avatar:"/zarnika/avatar/image4.webp",
        },
         action: 'Uploaded file',
        target: 'Design assets.zip',
        time: '2 hours ago',
        type: 'Upload',
    },
]

const getTypeColor = (type: string) => {
    switch (type) {
        case 'Complete':
            return 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900';
        case 'Update':
            return 'bg-sky-100 hover:bg-sky-200 text-sky-900';
        case 'Create':
            return 'bg-violet-100 hover:bg-violet-200 text-violet-900';
        default:
            return 'bg-slate-100 hover:bg-slate-200 text-slate-900';
    }
};
const ActivityFeed = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <AlarmClock className="h-7 w-7" />
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent >
                <div className="space-y-4">
                    <div className='flex items-start gap-2 rounded-lg hover:bg-accent/50 cursor-pointer justify-between'>
                        <Avatar className="h-8 w-8 flex-shrink-0 items-start gap-3">
                            <AvatarImage src="zarnika/avatar/profile3.png" />
                            <AvatarFallback>ZN</AvatarFallback>
                        </Avatar>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2 mb-1 justify-between'>
                                <span className='text-sm font-mono '>
                                    Ziba Nouri
                                </span>
                                <Badge className='text-sm'>
                                    Upload
                                </Badge>
                            </div>
                            <p className='text-sm text-muted-foreground'>
                                Lorem ipsum, dolor sit amet consectetur.
                            </p>
                            <p className='text-sm text-muted-foreground'>
                                4 hours ago
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ActivityFeed;
