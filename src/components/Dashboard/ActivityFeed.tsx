import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { AlarmClock } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { badge } from '@/components/ui/badge';
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
                    <div className='flex items-start gap-2 rounded-lg hover:bg-accent/50 cursor-pointer'>
                        <Avatar className="h-8 w-8 flex-shrink-0 items-start gap-3">
                            <AvatarImage src="zarnika/avatar/profile3.png" />
                            <AvatarFallback>ZN</AvatarFallback>
                        </Avatar>
                        <div className='flex-1'>
                            <div className='flex items-center gap-2 mb-1'>
                                <span className='text-sm font-mono'>
                                    Ziba Nouri
                                </span>
                            badge
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ActivityFeed;
