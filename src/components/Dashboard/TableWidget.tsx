import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const recentOrders = [
    {
        id: '#2852',
        user: {
            name: 'John Doe',
            avatar: '/zarnika/avatar/image5.webp',
        },
        product: 'Pro Plan',
        amount: '$69.00',
        status: 'unknown',
        date: '2025-10-12',
    },
    {
        id: '#2853',
        user: {
            name: 'Sarah Johnson',
            avatar: '/zarnika/avatar/image2.webp',
        },
        product: 'Premium Plan',
        amount: '$99.00',
        status: 'pending',
        date: '2025-10-12',
    },
    {
        id: '#2854',
        user: {
            name: 'ziba nouri',
            avatar: '/zarnika/avatar/image6.webp',
        },
        product: 'Basic Plan',
        amount: '$39.00',
        status: 'failed',
        date: '2025-10-12',
    },
    {
        id: '#2855',
        user: {
            name: 'John Smith',
            avatar: '/zarnika/avatar/image3.webp',
        },
        product: 'Enterprise Plan',
        amount: '$199.00',
        status: 'completed',
        date: '2025-10-12',
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'completed':
            return 'bg-pink-100 hover:bg-pink-200 text-pink-900';
        case 'pending':
            return 'bg-purple-100 hover:bg-purple-200 text-purple-900';
        case 'failed':
            return 'bg-yellow-100 hover:bg-yellow-200 text-yellow-900';
        default:
            return 'bg-blue-100 hover:bg-blue-200 text-blue-900';
    }
};
const TableWidget = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button
                    variant="outline"
                    size="sm"
                    className="bg-amber-300 hover:bg-amber-400"
                >
                    View All
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {recentOrders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={order.user.avatar} />
                                    <AvatarFallback>
                                        {order.user.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">
                                        {order.user.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {order.product}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="font-semibold">
                                        {order.amount}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {order.date}
                                    </p>
                                </div>
                                <Badge className={getStatusColor(order.status)}>
                                    {order.status}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
export default TableWidget;
