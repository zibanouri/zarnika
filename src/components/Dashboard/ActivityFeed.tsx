import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { AlarmClock } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const ActivityFeed = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <AlarmClock className="h-7 w-7" />
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
                <div className='space-y-4'>
                    <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src="zarnika/avatar/profile3.png" />
                        <AvatarFallback>ZN</AvatarFallback>
                    </Avatar>
                    
                </div>
            </CardContent>
        </Card>
    );
};

export default ActivityFeed;
