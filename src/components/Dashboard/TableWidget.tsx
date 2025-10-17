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
        status: 'Unknown',
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
        status: 'Pending',
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
        status: 'Failed',
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
        status: 'Completed',
        date: '2025-10-12',
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Completed':
            return 'bg-blue-200 hover:bg-blue-300 text-blue-900';
        case 'Pending':
            return 'bg-amber-200 hover:bg-amber-300 text-amber-900';
        case 'Failed':
            return 'bg-emerald-200 hover:bg-emerald-300 text-emerald-900';
        default:
            return 'bg-red-200 hover:bg-red-300 text-red-900';
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
                    className="bg-amber-400 hover:bg-amber-300 cursor-pointer"
                >
                    View All
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {recentOrders.map((order) => (
                        <div
                            key={order.id}
                            className="flex items-center justify-between p-4 cursor-pointer rounded-lg border hover:bg-accent/50 transition-colors"
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
