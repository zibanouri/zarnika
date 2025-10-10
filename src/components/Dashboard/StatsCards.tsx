import { CreditCard, Users, Target, ShoppingCart } from 'lucide-react';
const Stats = [
    {
        title: 'Total',
        value: '$324,592',
        change: '+12.5%',
        trend: 'up',
        icon: CreditCard,
        color: 'text-emerald-600',
    },
    {
        title: 'Action Users',
        value: '2.845',
        change: '+10.43',
        trend: 'up',
        icon: Users,
        color: 'text-pink-800',
    },
    {
        title: 'Orders',
        value: '1543',
        change: '+9.75',
        trend: 'Down',
        icon: ShoppingCart,
        color: 'text-yellow-500',
    },
    {
        title: 'Rate',
        value: '3.24%',
        change: '+5.7%',
        trend: 'up',
        icon: Target,
        color: 'text-purple-500',
    },
];

const StatsCards = () => {
    return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

    </div>;
};

export default StatsCards;
