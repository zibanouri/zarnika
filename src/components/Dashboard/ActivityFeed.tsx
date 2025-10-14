import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { AlarmClock } from 'lucide-react';
const ActivityFeed = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <AlarmClock className="h-7 w-7" />
                    Recent Activity
                </CardTitle>
            </CardHeader>
        </Card>
    );
};

export default ActivityFeed;
