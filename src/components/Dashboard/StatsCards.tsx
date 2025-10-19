import {
    CreditCard,
    Users,
    ShoppingCart,
    Target,
    TrendingDown,
    TrendingUp,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Stats = [
    {
        title: 'Total Revenue',
        value: '$324,592',
        change: '+12.5%',
        trend: 'up',
        icon: CreditCard,
        color: 'text-red-600',
        bgColor: 'bg-red-200',
        borderColor: 'border-red-300',
    },
    {
        title: 'Action Users',
        value: '2,845',
        change: '+10.43',
        trend: 'up',
        icon: Users,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-200',
        borderColor: 'border-emerald-300',
    },
    {
        title: 'Orders',
        value: '1543',
        change: '-9.75',
        trend: 'down',
        icon: ShoppingCart,
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-200',
        borderColor: 'border-yellow-300',
    },
    {
        title: 'Rate',
        value: '3.24%',
        change: '+5.7%',
        trend: 'up',
        icon: Target,
        color: 'text-blue-400',
        bgColor: 'bg-blue-200',
        borderColor: 'border-blue-300',
    },
];

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Stats.map((stat, index) => {
                const Icon = stat.icon;
                const TrendIcon =
                    stat.trend === 'up' ? TrendingUp : TrendingDown;

                return (
                    <Card
                        key={index}
                        className={`border ${stat.borderColor} hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer`}
                    >
                        <CardContent className="px-8 py-1">
                            <div className="flex items-center justify-between mb-4">
                                <div
                                    className={`p-2 rounded-full ${stat.bgColor}`}
                                >
                                    <Icon className={`h-5 w-5 ${stat.color}`} />
                                </div>
                                <div
                                    className={`flex items-center text-sm ${
                                        stat.trend === 'up'
                                            ? 'text-emerald-500'
                                            : 'text-red-500'
                                    }`}
                                >
                                    <TrendIcon className="h-3 w-3 mr-1" />
                                    {stat.change}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">
                                    {stat.value}
                                </h3>
                                <p className="text-muted-foreground text-md">
                                    {stat.title}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default StatsCards;
